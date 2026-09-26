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
      simpleDefinition: `"${req.body.word || "Benevolence"}" is a wonderful Victorian word full of story charm!`,
      funExample: `Oliver smiled as he discovered what "${req.body.word || "this word"}" means in Mr. Brownlow's library!`,
      phonics: (req.body.word || "WORD").toUpperCase().split("").join("-"),
      synonym: "Kindness",
      dahlFunFact: "Charles Dickens was a master of rich, expressive vocabulary that brought Victorian London to life!",
    });
  }
});

// AI Endpoint 2: Character Chat with Dickens Heroes
app.post("/api/gemini/ask-character", async (req, res) => {
  const { character = "Pip", userMessage = "", ageGroup = "7-8", bookTitle = "Charles Dickens Masterpieces" } = req.body;
  
  const defaultReplies: Record<string, string[]> = {
    "Pip": [
      "Greetings, my honest friend! Take nothing on its looks, take everything on evidence! Keep reading 15 minutes every single day, and your mind will forge great expectations!",
      "Joe Gargery always says an honest blacksmith and a good book make the warmest hearth in the world! Keep up the brilliant reading!",
    ],
    "Oliver Twist": [
      "Please, sir, keep reading more! Even in the darkest streets of London, a pure heart and true friends make every chapter shine!",
      "Mr. Brownlow taught me that books are true treasures. I am so proud of your dedication to reading today!",
    ],
    "Ebenezer Scrooge": [
      "A Merry Christmas and happy reading to us all! I was once a blind, foolish miser, but now I know that generosity, learning, and laughing with good friends are the true riches of life!",
      "Humbug no more! I will raise your reading points and celebrate every new word you master! Keep reading!",
    ],
    "David Copperfield": [
      "Whether I shall turn out to be the hero of my own life, or whether you will be the hero of yours, reading 15 minutes a day will guide your golden quill!",
      "Never be mean in anything; never be false; never be cruel. Keep reading with an open, loving heart!",
    ],
    "Sydney Carton": [
      "It is a far, far better thing that you do today by reading and broadening your mind! Have courage, young friend, and stand tall for what is good and true!",
    ],
    "Aunt Betsey": [
      "Janet! Donkeys! Drive them off my lawn, and give this diligent reader another hundred points! Always speak the truth and never give up!",
    ],
  };

  try {
    const ai = getGemini();

    if (!ai) {
      const replies = defaultReplies[character] || defaultReplies["Pip"];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      return res.json({ reply: randomReply });
    }

    const charPersonalities: Record<string, string> = {
      "Pip": "You are Pip from Charles Dickens' Great Expectations. You are humble, loyal, reflective, and encourage the child to read 15 minutes a day.",
      "Oliver Twist": "You are Oliver Twist from Charles Dickens' novel. You are gentle, brave, kind-hearted, and encourage reading with gratitude.",
      "Ebenezer Scrooge": "You are the reformed, joyful, benevolent Ebenezer Scrooge from A Christmas Carol. You are exuberant, laugh warmly, and celebrate generosity and learning.",
      "David Copperfield": "You are David Copperfield, Charles Dickens' celebrated author hero. You are articulate, warm, and encourage perseverance and creativity.",
      "Sydney Carton": "You are Sydney Carton from A Tale of Two Cities. You are noble, calm, inspiring, and speak of courage and devotion.",
      "Aunt Betsey": "You are fierce, eccentric, protective Aunt Betsey Trotwood from David Copperfield. You hate donkeys on the grass and love honesty and courage.",
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
