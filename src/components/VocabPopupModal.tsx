import React, { useState } from "react";
import { VocabWord } from "../types";
import { speakText, playCoinSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, Sparkles, BookOpen, Bot, Check, X } from "lucide-react";

interface VocabPopupModalProps {
  wordData: VocabWord;
  ageGroup: "5-6" | "7-8" | "9+";
  bookTitle: string;
  onClose: () => void;
  onExplored?: () => void;
}

export const VocabPopupModal: React.FC<VocabPopupModalProps> = ({
  wordData,
  ageGroup,
  bookTitle,
  onClose,
  onExplored,
}) => {
  const [aiExtra, setAiExtra] = useState<{
    funExample?: string;
    dahlFunFact?: string;
    synonym?: string;
  } | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const [hasPronounced, setHasPronounced] = useState(false);

  const handlePronounce = () => {
    speakText(wordData.word, 0.85);
    setHasPronounced(true);
    playCoinSound();
    if (onExplored) onExplored();
  };

  const handleAskAIBookBuddy = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch("/api/gemini/explain-word", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          word: wordData.word,
          ageGroup,
          bookTitle,
          contextSentence: wordData.funExample,
        }),
      });
      const data = await res.json();
      setAiExtra(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B36]/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-md bg-[#FDF6E3] rounded-[32px] shadow-2xl border-4 border-[#FFD700] overflow-hidden flex flex-col text-[#2D1B36]"
      >
        {/* Header */}
        <div className="bg-[#4A2D55] p-4 text-[#FDF6E3] flex items-center justify-between border-b-2 border-[#6D427D]">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{wordData.emoji || "📖"}</span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD700]">
                Dahl Word Explorer ({ageGroup})
              </span>
              <h3 className="text-xl font-serif font-black text-[#FFD700]">{wordData.word}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-2xl bg-[#2D1B36] hover:bg-[#6D427D] border border-[#6D427D] flex items-center justify-center text-[#FDF6E3] cursor-pointer font-bold transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Phonics & Sound Button */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-[#FFCC33]/20 p-3.5 rounded-2xl border-2 border-[#FFD700]">
            <div>
              <span className="text-[10px] uppercase font-black text-[#E74C3C]">Phonics Breakdown</span>
              <div className="text-lg font-black text-[#2D1B36] tracking-widest">{wordData.phonics}</div>
            </div>
            <button
              onClick={handlePronounce}
              className="flex items-center gap-1.5 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] px-3.5 py-2 rounded-xl font-black text-xs shadow-md cursor-pointer transition-all active:scale-95"
            >
              <Volume2 className="w-4 h-4 text-[#FFCC33]" /> Listen
            </button>
          </div>

          {/* Meaning */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#2D1B36]/60">Meaning</span>
            <p className="text-sm font-semibold text-[#2D1B36] leading-relaxed bg-white p-3.5 rounded-2xl border border-black/10">
              {wordData.definition}
            </p>
          </div>

          {/* Example in Story */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#2D1B36]/60">Story Example</span>
            <p className="text-xs font-serif italic font-medium text-[#2D1B36] bg-[#FFCC33]/15 p-3.5 rounded-2xl border border-[#FFD700]/50">
              "{wordData.funExample}"
            </p>
          </div>

          {/* AI Extra Section */}
          {aiExtra && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3.5 rounded-2xl border-2 border-[#FFD700] text-xs flex flex-col gap-1.5 shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#E74C3C] font-black">
                <Sparkles className="w-3.5 h-3.5" /> Book Buddy Roald Dahl Fact:
              </div>
              <p className="text-[#2D1B36] font-serif font-medium">{aiExtra.dahlFunFact || aiExtra.funExample}</p>
              {aiExtra.synonym && (
                <div className="text-[11px] text-[#4A2D55] font-black">
                  Another word for this: <span className="underline">{aiExtra.synonym}</span>
                </div>
              )}
            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-2 pt-2">
            {!aiExtra && (
              <button
                onClick={handleAskAIBookBuddy}
                disabled={loadingAi}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#4A2D55] hover:bg-[#6D427D] text-[#FFD700] font-black text-xs py-3 rounded-2xl border border-[#6D427D] cursor-pointer transition-all disabled:opacity-50"
              >
                <Bot className="w-4 h-4 text-[#FFCC33]" />
                {loadingAi ? "Asking Wonka & Matilda..." : "Ask AI Book Buddy"}
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-xs py-3 rounded-2xl shadow-xl cursor-pointer transition-all"
            >
              Got It! ✨
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
