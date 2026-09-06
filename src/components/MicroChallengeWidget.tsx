import React, { useState } from "react";
import { MicroChallenge } from "../types";
import { playSuccessSound, playCoinSound, playWrongSound, playMagicSparkleSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, CheckCircle2, Trophy, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface MicroChallengeWidgetProps {
  challenge: MicroChallenge;
  onComplete: (gemsEarned: number) => void;
}

export const MicroChallengeWidget: React.FC<MicroChallengeWidgetProps> = ({
  challenge,
  onComplete,
}) => {
  const [completed, setCompleted] = useState(false);

  // Scratch card state (for golden ticket)
  const [scratchProgress, setScratchProgress] = useState(0);

  // Word Scramble state
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<string[]>(
    challenge.scrambleLetters || []
  );

  // Order / Sort state
  const [userOrder, setUserOrder] = useState<string[]>([]);

  // Golden Ticket Scratch Handler
  const handleScratch = () => {
    if (completed) return;
    playCoinSound();
    const next = scratchProgress + 1;
    setScratchProgress(next);

    if (next >= 3) {
      finishChallenge();
    }
  };

  // Word Scramble Letter Pick
  const handlePickLetter = (letter: string, index: number) => {
    if (completed) return;
    playMagicSparkleSound();

    const newSelected = [...selectedLetters, letter];
    const newAvail = [...availableLetters];
    newAvail.splice(index, 1);

    setSelectedLetters(newSelected);
    setAvailableLetters(newAvail);

    // Check if target word is matched
    const currentWord = newSelected.join("");
    if (currentWord === challenge.targetWord) {
      finishChallenge();
    } else if (newAvail.length === 0) {
      playWrongSound();
    }
  };

  const handleResetLetters = () => {
    setSelectedLetters([]);
    setAvailableLetters(challenge.scrambleLetters || []);
  };

  // Order/Sort Pick
  const handlePickOrder = (item: string) => {
    if (completed || userOrder.includes(item)) return;
    playCoinSound();
    const newOrder = [...userOrder, item];
    setUserOrder(newOrder);

    const target = challenge.correctOrder || challenge.options || [];
    if (newOrder.length === target.length) {
      const isCorrect = newOrder.every((val, idx) => val === target[idx]);
      if (isCorrect) {
        finishChallenge();
      } else {
        playWrongSound();
      }
    }
  };

  const finishChallenge = () => {
    setCompleted(true);
    playSuccessSound();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
    });
    onComplete(challenge.rewardGems);
  };

  return (
    <div className="w-full bg-[#FDF6E3] text-[#2D1B36] border-4 border-[#FFD700] rounded-[28px] p-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#2D1B36]/10 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="p-2 bg-[#E74C3C] text-white rounded-xl shadow-xs">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <h4 className="font-serif font-black text-base text-[#2D1B36]">{challenge.title}</h4>
            <p className="text-xs text-[#2D1B36]/80 font-medium">{challenge.prompt}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-[#FFCC33] px-3.5 py-1.5 rounded-full text-xs font-black text-[#2D1B36] border border-[#FFD700] shadow-xs">
          <span>💎</span>
          <span>+{challenge.rewardGems} Gems</span>
        </div>
      </div>

      {/* Challenge Type 1: Golden Ticket Scratch */}
      {challenge.type === "golden_ticket_scratch" && !completed && (
        <div className="flex flex-col items-center gap-3 py-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleScratch}
            className="w-full max-w-xs h-32 bg-[#FFB347] border-4 border-[#FFCC33] text-[#2D1B36] font-black rounded-3xl shadow-xl flex flex-col items-center justify-center p-3 cursor-pointer select-none transition-all"
          >
            <span className="text-4xl mb-1">{scratchProgress === 0 ? "🎁" : scratchProgress === 1 ? "✨" : "🎫"}</span>
            <span className="text-xs uppercase tracking-wider font-black">
              {scratchProgress === 0 ? "Tap to Scratch Foil!" : scratchProgress === 1 ? "Scratching... Tap Again!" : "Almost There! One More Tap!"}
            </span>
            <div className="w-3/4 h-2.5 bg-[#2D1B36]/20 rounded-full mt-2 overflow-hidden p-0.5">
              <div
                className="h-full bg-[#2D1B36] rounded-full transition-all duration-300"
                style={{ width: `${(scratchProgress / 3) * 100}%` }}
              />
            </div>
          </motion.button>
          <span className="text-xs text-[#2D1B36]/70 font-bold">Taps needed: {3 - scratchProgress}</span>
        </div>
      )}

      {/* Challenge Type 2: Word Scramble */}
      {challenge.type === "word_scramble" && !completed && (
        <div className="flex flex-col items-center gap-4 py-2">
          {/* Target Slots */}
          <div className="flex gap-2 min-h-14 items-center bg-white px-5 py-2.5 rounded-2xl border-2 border-dashed border-[#FFD700] shadow-inner">
            {selectedLetters.length === 0 ? (
              <span className="text-xs text-[#2D1B36]/50 font-serif italic">Tap letters below in order...</span>
            ) : (
              selectedLetters.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-9 h-10 sm:w-11 sm:h-12 bg-[#2D1B36] text-[#FFD700] font-black text-base sm:text-lg rounded-xl flex items-center justify-center shadow-md"
                >
                  {l}
                </motion.div>
              ))
            )}
          </div>

          {/* Letter Bank */}
          <div className="flex flex-wrap gap-2 justify-center">
            {availableLetters.map((letter, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePickLetter(letter, idx)}
                className="w-11 h-12 bg-white hover:bg-[#FFD700]/30 text-[#2D1B36] font-black text-lg rounded-2xl border-2 border-[#FFD700] shadow-md flex items-center justify-center cursor-pointer"
              >
                {letter}
              </motion.button>
            ))}
          </div>

          <button
            onClick={handleResetLetters}
            className="flex items-center gap-1 text-xs text-[#2D1B36]/80 hover:text-[#2D1B36] font-black px-3 py-1.5 bg-[#FFCC33]/30 rounded-xl cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Letters
          </button>
        </div>
      )}

      {/* Challenge Type 3 & 4: Order & Sort */}
      {(challenge.type === "candy_sort" || challenge.type === "telekinesis_order") && !completed && (
        <div className="flex flex-col items-center gap-3 py-2">
          <div className="flex flex-wrap gap-2 justify-center">
            {challenge.options?.map((opt, idx) => {
              const isSelected = userOrder.includes(opt);
              return (
                <motion.button
                  key={idx}
                  whileHover={!isSelected ? { scale: 1.05 } : {}}
                  whileTap={!isSelected ? { scale: 0.95 } : {}}
                  onClick={() => handlePickOrder(opt)}
                  disabled={isSelected}
                  className={`px-4 py-2.5 rounded-2xl font-black text-xs shadow-sm border-2 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-black/10 text-black/40 border-transparent opacity-50"
                      : "bg-white text-[#2D1B36] border-[#FFD700] hover:bg-[#FFD700]/20"
                  }`}
                >
                  {isSelected && "✓ "}
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {userOrder.length > 0 && userOrder.length < (challenge.options?.length || 0) && (
            <button
              onClick={() => setUserOrder([])}
              className="text-xs text-[#2D1B36]/70 hover:text-[#2D1B36] font-bold underline mt-1 cursor-pointer"
            >
              Reset choices
            </button>
          )}
        </div>
      )}

      {/* Completed celebration banner */}
      <AnimatePresence>
        {completed && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-between bg-[#A7D49B] border-2 border-[#80C272] text-[#2D1B36] p-4 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#2D1B36]" />
              <div>
                <span className="font-serif font-black text-base">Quest Milestone Achieved!</span>
                <p className="text-xs font-bold text-[#2D1B36]/80">You unlocked +{challenge.rewardGems} Star Gems!</p>
              </div>
            </div>
            <span className="text-3xl">🎉</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
