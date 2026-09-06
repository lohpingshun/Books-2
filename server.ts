import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client with telemetry header
let aiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Endpoint 1: Kid-Friendly Word Explainer
app.post("/api/gemini/explain-word", async (req, res) => {
  try {
    const { word, ageGroup, bookTitle, contextSentence } = req.body;
    const ai = getGemini();

    if (!ai) {
      // Fallback kid explanation if API key is not yet set
      return res.json({
        word,
        simpleDefinition: `"${word}" is a wonderful Roald Dahl word that adds magic to the story!`,
        funExample: `Just like Matilda loved reading books, you can use "${word}" when telling a great story!`,
        phonics: word.toUpperCase().split("").join("-"),
        synonym: "Amazing",
        dahlFunFact: "Roald Dahl loved inventing playful words called Gobblefunk!",
      });
    }

    const systemPrompt = `You are a warm, playful Roald Dahl Book Companion for kids aged ${ageGroup || "7-8"}.
Explain the word "${word}" found in the book "${bookTitle || "Roald Dahl Book"}".
Context: "${contextSentence || ""}".
Tone: Whimsical, encouraging, clear, simple, and Dahl-esque (like Willy Wonka or Miss Honey).
Respond with a strictly formatted JSON object with:
- "word": string
- "phonics": string (e.g., "CHO-CO-LATE" or "MA-GIC")
- "simpleDefinition": string (1-2 sentences for a ${ageGroup} year old child)
- "funExample": string (a funny, memorable example sentence featuring Dahl characters)
- "synonym": string (one easy word that means the same)
- "dahlFunFact": string (a short playful fact or quote)`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `Explain "${word}" for age ${ageGroup}`,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed);
  } catch (error) {
    console.error("Error in explain-word:", error);
    return res.json({
      word: req.body.word || "Splendiferous",
      simpleDefinition: `"${req.body.word || "Splendiferous"}" is a wonderful, magical Roald Dahl word full of story charm!`,
      funExample: `Matilda smiled as she discovered what "${req.body.word || "this word"}" means in the library!`,
      phonics: (req.body.word || "WORD").toUpperCase().split("").join("-"),
      synonym: "Marvelous",
      dahlFunFact: "Roald Dahl loved inventing playful words called Gobblefunk to make reading exciting!",
    });
  }
});

// AI Endpoint 2: Character Chat with Willy Wonka / Matilda / Miss Honey
app.post("/api/gemini/ask-character", async (req, res) => {
  const { character = "Willy Wonka", userMessage = "", ageGroup = "7-8", bookTitle = "Roald Dahl Classics" } = req.body;
  
  const defaultReplies: Record<string, string[]> = {
    "Willy Wonka": [
      "Scratch that, reverse it! Welcome to my chocolate factory! Keep reading 15 minutes every single day, my delightful little friend, and your imagination will soar in the Great Glass Elevator!",
      "Tremendous! An astonishing question! Reading expands your creative horizons faster than an Everlasting Gobstopper changes flavor. Keep exploring!",
      "Bless my soul, what a curious mind! Every word you read adds another golden spark to your candy workshop of thoughts!",
    ],
    "Matilda": [
      "Never let anyone make you feel small just because you're young. Books are your passport to every corner of the universe, and your mind is capable of extraordinary magic!",
      "I love that you're reading today! Whenever I read Dickens or Hemingway in the library, I feel brave, calm, and ready to solve any puzzle.",
      "Keep practicing your focus! Just like moving the chalk across the blackboard, reading 15 minutes every day strengthens your mental willpower!",
    ],
    "Miss Honey": [
      "You are doing such a brilliant, thoughtful job reading today! I am so proud of your dedication and curious heart.",
      "Every new chapter is a step toward understanding the world. You have a luminous mind, and I know you will accomplish marvelous things!",
      "Keep up this wonderful daily habit! A cozy book and an open mind make every afternoon a peaceful adventure.",
    ],
    "Oompa Loompa": [
      "Oompa Loompa doompety doo, if you love reading, wisdom comes to you! Keep turning pages every day!",
      "Oompa Loompa doompety dee, a book is as sweet as can be! +50 KoKo Points for your bright mind!",
    ],
  };

  try {
    const ai = getGemini();

    if (!ai) {
      const replies = defaultReplies[character] || defaultReplies["Willy Wonka"];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      return res.json({ reply: randomReply });
    }

    const charPersonalities: Record<string, string> = {
      "Willy Wonka": "You are Willy Wonka, the eccentric, brilliant, whimsical chocolate maker from Roald Dahl's Charlie and the Chocolate Factory. Use playful exclamation, invent candies, and encourage the child to read 15 minutes a day.",
      "Matilda": "You are Matilda Wormwood, the kind, super-smart, book-loving girl with magic telekinesis. Be encouraging, gentle, wise beyond your years, and share your love of libraries.",
      "Miss Honey": "You are Miss Honey, the warm, nurturing, deeply caring teacher. Validate the child's effort, celebrate their reading progress, and explain things gently.",
      "Oompa Loompa": "You are a cheerful Oompa Loompa who sings funny short rhyming advice and celebrates good reading habits.",
    };

    const systemPrompt = `${charPersonalities[character] || charPersonalities["Willy Wonka"]}
The child is in age bracket: ${ageGroup}.
Book context: ${bookTitle}.
Keep your reply under 70 words, kid-friendly, enthusiastic, and inspiring!`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: userMessage || "Hello!",
      config: {
        systemInstruction: systemPrompt,
      },
    });

    return res.json({ reply: response.text || defaultReplies[character]?.[0] });
  } catch (error) {
    console.error("Error in ask-character:", error);
    const replies = defaultReplies[character] || defaultReplies["Willy Wonka"];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    return res.json({ reply: randomReply });
  }
});

// AI Endpoint 3: Dynamic Roald Dahl Story Quest Generator
app.post("/api/gemini/generate-quest", async (req, res) => {
  const { topic = "A candy secret", ageGroup = "7-8", character = "Willy Wonka" } = req.body;

  const fallbackQuest = {
    title: `The Mystery of the ${character === "Matilda" ? "Flying Library Books" : "Rainbow Gobstopper"}`,
    paragraphs: [
      `One bright morning, ${character} noticed something extraordinary. A gentle sparkle lit up the air, humming with whimsical excitement!`,
      `"Look!" cried Charlie, pointing toward a floating treat that glowed in seven rainbow shades. "It's whispering sweet riddles about our next reading quest!"`,
      `With quick thinking, teamwork, and sharp observation, they caught the glowing secret and unlocked a brand new reading badge for the day!`,
    ],
    quizQuestion: `What made the discovery so special in the story?`,
    quizOptions: [
      "It glowed with rainbow light and hummed with excitement",
      "It turned into a block of green ice",
      "It made a loud alarm sound",
      "It fell down a dark drain",
    ],
    correctIndex: 0,
    rewardPoints: 80,
  };

  try {
    const ai = getGemini();

    if (!ai) {
      return res.json(fallbackQuest);
    }

    const prompt = `Create a brand new 3-paragraph micro-adventure story for a child aged ${ageGroup} inspired by Roald Dahl.
Topic: ${topic}.
Main character: ${character}.
Include:
- Whimsical Dahl sensory language (sweet smells, funny sounds, colorful details).
- 3 short bite-sized paragraphs suitable for 3 minutes of reading.
- A 1-question comprehension check with 4 multiple choice options.
Return JSON format:
{
  "title": "...",
  "paragraphs": ["p1...", "p2...", "p3..."],
  "quizQuestion": "...",
  "quizOptions": ["option A", "option B", "option C", "option D"],
  "correctIndex": 0,
  "rewardPoints": 80
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    return res.json(parsed.title ? parsed : fallbackQuest);
  } catch (error) {
    console.error("Error generating quest:", error);
    return res.json(fallbackQuest);
  }
});

// Vite middleware & Static file serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
