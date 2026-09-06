import React, { useState } from "react";
import { AgeTier } from "../types";
import { speakText, playCoinSound, playSuccessSound, playWrongSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Sparkles, Send, Volume2, X, Wand2, BookOpen } from "lucide-react";

interface AIBookBuddyModalProps {
  ageGroup: AgeTier;
  onClose: () => void;
}

const CHARACTERS = [
  { name: "Willy Wonka", emoji: "🎩", title: "Master Chocolatier", color: "from-amber-600 to-yellow-600" },
  { name: "Matilda", emoji: "👧", title: "Book Genius", color: "from-purple-600 to-indigo-600" },
  { name: "Miss Honey", emoji: "👩‍🏫", title: "Kind Teacher", color: "from-emerald-600 to-teal-600" },
  { name: "Oompa Loompa", emoji: "🧑‍🌾", title: "Rhyme Maker", color: "from-orange-500 to-amber-600" },
];

export const AIBookBuddyModal: React.FC<AIBookBuddyModalProps> = ({ ageGroup, onClose }) => {
  const [selectedChar, setSelectedChar] = useState(CHARACTERS[0]);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string; characterName?: string; emoji?: string }[]
  >([
    {
      sender: "bot",
      text: "Greetings, my splendid young reader! I am Willy Wonka. Ask me anything about the chocolate factory, tricky words, or reading secrets!",
      characterName: "Willy Wonka",
      emoji: "🎩",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Custom Quest Generator state
  const [showStoryGen, setShowStoryGen] = useState(false);
  const [customTopic, setCustomTopic] = useState("");
  const [generatedStory, setGeneratedStory] = useState<{
    title: string;
    paragraphs: string[];
    quizQuestion: string;
    quizOptions: string[];
    correctIndex: number;
  } | null>(null);
  const [genLoading, setGenLoading] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userText = inputMessage.trim();
    setInputMessage("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("/api/gemini/ask-character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          character: selectedChar.name,
          userMessage: userText,
          ageGroup,
          bookTitle: "Charlie and the Chocolate Factory & Matilda",
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "Keep reading every single day!",
          characterName: selectedChar.name,
          emoji: selectedChar.emoji,
        },
      ]);
      playCoinSound();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateCustomStory = async () => {
    if (!customTopic.trim() || genLoading) return;
    setGenLoading(true);
    setQuizFeedback(null);
    try {
      const res = await fetch("/api/gemini/generate-quest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: customTopic,
          ageGroup,
          character: selectedChar.name,
        }),
      });
      const data = await res.json();
      setGeneratedStory(data);
      playSuccessSound();
    } catch (err) {
      console.error(err);
    } finally {
      setGenLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B36]/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-2xl bg-[#FDF6E3] rounded-[32px] shadow-2xl border-4 border-[#FFD700] overflow-hidden flex flex-col max-h-[90vh] text-[#2D1B36]"
      >
        {/* Header */}
        <div className="bg-[#4A2D55] p-5 text-[#FDF6E3] flex items-center justify-between border-b-2 border-[#6D427D]">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#2D1B36] border border-[#6D427D] rounded-2xl text-2xl">🤖</span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD700]">
                AI Book Buddy ({ageGroup})
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-black text-[#FFD700]">Chat with Roald Dahl Heroes</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-2xl bg-[#2D1B36] hover:bg-[#6D427D] border border-[#6D427D] flex items-center justify-center text-[#FDF6E3] cursor-pointer font-bold transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Character Switcher Bar */}
        <div className="flex items-center gap-2 p-3.5 bg-[#4A2D55]/20 border-b border-black/10 overflow-x-auto">
          {CHARACTERS.map((char) => (
            <button
              key={char.name}
              onClick={() => {
                setSelectedChar(char);
                setMessages((prev) => [
                  ...prev,
                  {
                    sender: "bot",
                    text: `Hello! ${char.name} here. What would you like to explore today?`,
                    characterName: char.name,
                    emoji: char.emoji,
                  },
                ]);
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs shrink-0 cursor-pointer transition-all ${
                selectedChar.name === char.name
                  ? "bg-[#2D1B36] text-[#FFD700] shadow-sm border border-[#FFD700]"
                  : "text-[#2D1B36] hover:bg-black/5"
              }`}
            >
              <span>{char.emoji}</span>
              <span>{char.name}</span>
            </button>
          ))}
          <button
            onClick={() => setShowStoryGen(!showStoryGen)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] rounded-xl font-black text-xs cursor-pointer shadow-sm ml-auto shrink-0 transition-all"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>{showStoryGen ? "Back to Chat" : "Create Bedtime Story"}</span>
          </button>
        </div>

        {/* CONTENT AREA: CHAT OR STORY GENERATOR */}
        {!showStoryGen ? (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Messages Scroll View */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto flex flex-col gap-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 max-w-lg ${
                    m.sender === "user" ? "self-end flex-row-reverse" : "self-start"
                  }`}
                >
                  <span className="text-2xl p-1.5 bg-white rounded-2xl shadow-xs border border-black/10">
                    {m.sender === "user" ? "🌟" : m.emoji || selectedChar.emoji}
                  </span>
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed shadow-sm ${
                      m.sender === "user"
                        ? "bg-[#2D1B36] text-[#FFD700] rounded-tr-xs font-bold"
                        : "bg-white text-[#2D1B36] rounded-tl-xs border-2 border-[#FFD700]/50"
                    }`}
                  >
                    {m.characterName && (
                      <span className="block text-[10px] font-black uppercase text-[#E74C3C] mb-0.5">
                        {m.characterName}
                      </span>
                    )}
                    <p className="font-serif">{m.text}</p>
                    {m.sender === "bot" && (
                      <button
                        onClick={() => speakText(m.text)}
                        className="mt-2 flex items-center gap-1 text-[11px] text-[#2D1B36] hover:text-[#E74C3C] font-black cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-[#E74C3C]" /> Read Aloud
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-xs text-[#2D1B36]/60 font-bold italic">
                  <span className="animate-spin">🍭</span> {selectedChar.name} is thinking...
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3.5 bg-white/90 border-t border-black/10 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={`Ask ${selectedChar.name} a question...`}
                className="flex-1 px-4 py-2.5 bg-black/5 border border-black/10 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-[#FFD700] text-[#2D1B36]"
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !inputMessage.trim()}
                className="p-3 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] rounded-2xl cursor-pointer disabled:opacity-50 transition-all shadow-md"
              >
                <Send className="w-4 h-4 text-[#FFCC33]" />
              </button>
            </div>
          </div>
        ) : (
          /* STORY GENERATOR SCREEN */
          <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4">
            <div className="bg-[#FFCC33]/20 p-4 rounded-2xl border-2 border-[#FFD700] text-xs text-[#2D1B36]">
              <span className="font-serif font-black text-sm text-[#2D1B36]">✨ AI Bedtime Micro-Story Maker:</span>
              <p className="mt-1 font-medium">
                Type any funny idea (e.g. "Charlie discovers singing gumballs" or "Matilda floats a pizza"), and Gemini will create a 3-minute story just for you!
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="What should your story be about?"
                className="flex-1 px-4 py-2.5 bg-white border-2 border-black/10 rounded-2xl text-xs sm:text-sm text-[#2D1B36] focus:border-[#FFD700]"
              />
              <button
                onClick={handleGenerateCustomStory}
                disabled={genLoading || !customTopic.trim()}
                className="px-5 py-2.5 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-xs rounded-2xl cursor-pointer disabled:opacity-50 shadow-md transition-all"
              >
                {genLoading ? "Creating..." : "Generate! 🪄"}
              </button>
            </div>

            {generatedStory && (
              <div className="bg-white p-5 sm:p-6 rounded-[28px] border-2 border-black/10 shadow-lg flex flex-col gap-3 text-xs sm:text-sm text-[#2D1B36]">
                <div className="flex items-center justify-between border-b border-black/10 pb-2">
                  <h4 className="font-serif font-black text-base sm:text-lg text-[#2D1B36]">{generatedStory.title}</h4>
                  <button
                    onClick={() => speakText(generatedStory.paragraphs.join(" "))}
                    className="flex items-center gap-1.5 text-xs text-[#2D1B36] font-black bg-[#FFCC33] px-3 py-1.5 rounded-xl cursor-pointer shadow-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#E74C3C]" /> Read Aloud
                  </button>
                </div>

                {generatedStory.paragraphs.map((p, idx) => (
                  <p key={idx} className="font-serif leading-relaxed text-sm">
                    {p}
                  </p>
                ))}

                <div className="bg-[#FFCC33]/20 p-4 rounded-2xl border-2 border-[#FFD700] mt-2">
                  <span className="font-black text-[#E74C3C] text-xs uppercase tracking-wider block mb-1">Bonus Comprehension Check:</span>
                  <p className="font-serif font-black text-sm text-[#2D1B36] mb-2">{generatedStory.quizQuestion}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {generatedStory.quizOptions.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => {
                          if (oIdx === generatedStory.correctIndex) {
                            playSuccessSound();
                            setQuizFeedback("🎉 Brilliant! You scored +80 KoKo points!");
                          } else {
                            playWrongSound();
                            setQuizFeedback("❌ Good try! Give it another read!");
                          }
                        }}
                        className="p-3 bg-white hover:bg-[#FFD700]/30 rounded-xl border border-black/10 font-bold text-xs text-left cursor-pointer transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {quizFeedback && (
                    <div className="mt-2.5 p-2 bg-white rounded-xl text-center font-black text-xs text-[#2D1B36] border border-[#FFD700]">
                      {quizFeedback}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
