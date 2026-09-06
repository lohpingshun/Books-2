import React, { useState, useEffect, useMemo } from "react";
import { QuizQuestion } from "../types";
import { playSuccessSound, playWrongSound, playCoinSound, playChestOpenSound, playMagicSparkleSound, playClickSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle, Award, Sparkles, Star, ChevronRight, Gift, Flame, Zap, HelpCircle, ShieldAlert, Timer, RotateCcw, Target, Brain, Compass } from "lucide-react";
import confetti from "canvas-confetti";

interface DailyQuizProps {
  questions: QuizQuestion[];
  chapterTitle: string;
  ageGroup: "5-6" | "7-8" | "9+";
  streakDays: number;
  onFinishQuiz: (scoreData: {
    score: number;
    total: number;
    kokoPointsEarned: number;
    gemsEarned: number;
    petExpEarned: number;
    perfectBonus: boolean;
  }) => void;
}

export const DailyQuiz: React.FC<DailyQuizProps> = ({
  questions,
  chapterTitle,
  ageGroup,
  streakDays,
  onFinishQuiz,
}) => {
  // Use quiz questions directly from chapter data
  const normalizedQuestions = useMemo(() => {
    return questions;
  }, [questions]);

  // Mode selection: 'hardcore' vs 'standard'
  const [quizMode, setQuizMode] = useState<"hardcore" | "standard">("standard");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [comboStreak, setComboStreak] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [showScorecard, setShowScorecard] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);

  // Lifelines
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [hintActive, setHintActive] = useState(false);
  const [used5050, setUsed5050] = useState(false);
  const [usedHint, setUsedHint] = useState(false);

  // Countdown timer per question (20s in hardcore)
  const [timeLeft, setTimeLeft] = useState(20);
  const [timerRunning, setTimerRunning] = useState(false);

  // Question history for in-depth review
  const [answersHistory, setAnswersHistory] = useState<
    { questionId: string; selected: number | null; correct: number; isCorrect: boolean; explanation: string; question: string; pointsEarned: number }[]
  >([]);

  const currentQ = normalizedQuestions[currentIndex] || normalizedQuestions[0];

  // Derive question skill category
  const getSkillCategory = (idx: number) => {
    const categories = [
      { label: "Story Clues", icon: "🔍", color: "text-purple-600 bg-purple-100 border-purple-300" },
      { label: "Words from the Story", icon: "📖", color: "text-blue-600 bg-blue-100 border-blue-300" },
      { label: "Big Story Idea", icon: "💡", color: "text-emerald-600 bg-emerald-100 border-emerald-300" },
    ];
    return categories[idx % categories.length];
  };

  // Timer effect
  useEffect(() => {
    if (quizMode === "hardcore" && !isAnswered && !showScorecard) {
      setTimeLeft(20);
      setTimerRunning(true);
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAnswered, showScorecard, quizMode]);

  const handleTimeUp = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    playWrongSound();
    setComboStreak(0);
    setAnswersHistory((prev) => [
      ...prev,
      {
        questionId: currentQ.id,
        selected: null,
        correct: currentQ.correctIndex,
        isCorrect: false,
        explanation: currentQ.explanation,
        question: currentQ.question,
        pointsEarned: 0,
      },
    ]);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    setTimerRunning(false);

    const isCorrect = idx === currentQ.correctIndex;
    const earnedPoints = isCorrect
      ? currentQ.points + (quizMode === "hardcore" ? 25 : 0) + comboStreak * 15
      : 0;

    if (isCorrect) {
      playSuccessSound();
      setCorrectCount((prev) => prev + 1);
      setComboStreak((prev) => {
        const next = prev + 1;
        if (next > maxCombo) setMaxCombo(next);
        return next;
      });
      if (comboStreak >= 1) {
        playMagicSparkleSound();
      }
    } else {
      playWrongSound();
      setComboStreak(0);
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        questionId: currentQ.id,
        selected: idx,
        correct: currentQ.correctIndex,
        isCorrect,
        explanation: currentQ.explanation,
        question: currentQ.question,
        pointsEarned: earnedPoints,
      },
    ]);
  };

  // Lifeline 50:50
  const handleUse5050 = () => {
    if (used5050 || isAnswered) return;
    playMagicSparkleSound();
    setUsed5050(true);
    const wrongIndices = currentQ.options
      .map((_, i) => i)
      .filter((i) => i !== currentQ.correctIndex);
    // Eliminate 2 wrong answers
    const toEliminate = wrongIndices.slice(0, 2);
    setEliminatedOptions(toEliminate);
  };

  // Lifeline Hint
  const handleUseHint = () => {
    if (usedHint || isAnswered) return;
    playClickSound();
    setUsedHint(true);
    setHintActive(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setEliminatedOptions([]);
      setHintActive(false);
    } else {
      // Finished all questions!
      setShowScorecard(true);
      playChestOpenSound();
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.55 },
      });
    }
  };

  const handleOpenChest = () => {
    if (chestOpened) return;
    setChestOpened(true);
    playMagicSparkleSound();
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.5 },
    });
  };

  const calculateFinalRewards = () => {
    const isPerfect = correctCount === questions.length;
    const baseKP = correctCount * (quizMode === "hardcore" ? 90 : 60);
    const comboBonus = maxCombo * 25;
    const streakBonus = Math.min(streakDays * 15, 60);
    const modeBonus = quizMode === "hardcore" ? 80 : 0;
    const perfectBonusKP = isPerfect ? 150 : 0;
    const totalKP = baseKP + comboBonus + streakBonus + modeBonus + perfectBonusKP;
    const gems = isPerfect ? (quizMode === "hardcore" ? 60 : 40) : 30;
    const petExp = 50 + correctCount * 20 + maxCombo * 15;

    return { totalKP, gems, petExp, isPerfect };
  };

  const rewards = calculateFinalRewards();
  const skill = getSkillCategory(currentIndex);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      {!showScorecard ? (
        <div className="w-full bg-[#FDF6E3] text-[#2D1B36] rounded-[32px] shadow-2xl border-4 border-[#FFD700] p-6 sm:p-8 flex flex-col gap-5">
          {/* Header & Mode Switcher */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-black text-[#2D1B36]/70 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[#E74C3C] bg-[#E74C3C]/10 px-2.5 py-1 rounded-full border border-[#E74C3C]/30">
                  <Sparkles className="w-4 h-4 text-[#E74C3C]" /> KooBits Reading Mastery ({ageGroup})
                </span>
                {comboStreak >= 2 && (
                  <span className="flex items-center gap-1 bg-amber-500 text-white px-2.5 py-1 rounded-full animate-bounce shadow-sm font-black text-[11px]">
                    <Flame className="w-3.5 h-3.5" /> {comboStreak}x Combo Multiplier!
                  </span>
                )}
              </div>

              {/* Hardcore vs Standard Toggle */}
              <div className="flex items-center bg-black/10 p-1 rounded-xl">
                <button
                  onClick={() => setQuizMode("standard")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-black cursor-pointer transition-all ${
                    quizMode === "standard" ? "bg-white text-[#2D1B36] shadow-xs" : "text-[#2D1B36]/60 hover:text-[#2D1B36]"
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setQuizMode("hardcore")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-black flex items-center gap-1 cursor-pointer transition-all ${
                    quizMode === "hardcore" ? "bg-[#2D1B36] text-[#FFD700] shadow-xs" : "text-[#2D1B36]/60 hover:text-[#2D1B36]"
                  }`}
                >
                  <Zap className="w-3 h-3 text-[#FFCC33]" /> Hardcore (+80 Bonus KP)
                </button>
              </div>
            </div>

            {/* Progress & Countdown Timer Bar */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3.5 bg-[#E5E5E5] rounded-full overflow-hidden border border-black/10 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-[#FFCC33] to-[#E74C3C] transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs font-black text-[#2D1B36] shrink-0">
                {currentIndex + 1} / {questions.length}
              </span>
              {quizMode === "hardcore" && !isAnswered && (
                <div className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-full shrink-0 ${
                  timeLeft <= 6 ? "bg-rose-600 text-white animate-pulse" : "bg-[#2D1B36] text-[#FFD700]"
                }`}>
                  <Timer className="w-3.5 h-3.5" />
                  <span>{timeLeft}s</span>
                </div>
              )}
            </div>
          </div>

          {/* Skill Tag & Lifelines Toolbar */}
          <div className="flex items-center justify-between bg-white/80 p-2.5 rounded-2xl border border-black/10 flex-wrap gap-2">
            <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-lg border flex items-center gap-1 ${skill.color}`}>
              <span>{skill.icon}</span>
              <span>{skill.label}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleUse5050}
                disabled={used5050 || isAnswered}
                className={`flex items-center gap-1 text-xs font-black px-3 py-1 rounded-xl transition-all ${
                  used5050
                    ? "bg-black/10 text-black/30 border border-transparent cursor-not-allowed"
                    : "bg-[#2D1B36] text-[#FFD700] hover:bg-[#4A2D55] cursor-pointer shadow-xs active:scale-95"
                }`}
              >
                <span>🪄 50:50</span>
              </button>
              <button
                onClick={handleUseHint}
                disabled={usedHint || isAnswered}
                className={`flex items-center gap-1 text-xs font-black px-3 py-1 rounded-xl transition-all ${
                  usedHint
                    ? "bg-black/10 text-black/30 border border-transparent cursor-not-allowed"
                    : "bg-[#FFCC33] text-[#2D1B36] hover:bg-[#FFD700] cursor-pointer shadow-xs active:scale-95"
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>💡 Clue</span>
              </button>
            </div>
          </div>

          {/* Active Hint Banner */}
          {hintActive && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-100 border-2 border-amber-300 text-amber-950 p-3 rounded-2xl text-xs font-bold flex items-start gap-2"
            >
              <span className="text-base">💡</span>
              <div>
                <span className="font-black text-[11px] uppercase tracking-wider text-amber-800">Critical Insight Clue:</span>
                <p className="mt-0.5 font-serif italic">{currentQ.explanation.split(".")[0]}. Consider character motivations and underlying themes!</p>
              </div>
            </motion.div>
          )}

          {/* Question Card */}
          <div className="flex items-start gap-3 bg-[#FFCC33]/20 p-5 rounded-2xl border-2 border-[#FFCC33]">
            {currentQ.visualClueEmoji && (
              <span className="text-3xl sm:text-4xl p-2 bg-white rounded-xl shadow-xs border border-[#FFCC33] shrink-0">
                {currentQ.visualClueEmoji}
              </span>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-[#E74C3C] uppercase tracking-wider">
                  Mastery Reading Challenge • Difficulty: Hard
                </span>
                <span className="text-[11px] font-black text-[#2D1B36] bg-[#FFCC33] px-2 py-0.5 rounded-full">
                  +{currentQ.points + (quizMode === "hardcore" ? 25 : 0)} KP
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-black text-[#2D1B36] mt-1.5 leading-snug">
                {currentQ.question}
              </h3>
            </div>
          </div>

          {/* 4 Plausible Options */}
          <div className="grid grid-cols-1 gap-3 font-sans">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const isEliminated = eliminatedOptions.includes(idx);

              if (isEliminated) {
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl font-bold text-xs bg-black/5 text-[#2D1B36]/30 border-2 border-dashed border-black/10 line-through opacity-40 flex items-center justify-between"
                  >
                    <span>{option}</span>
                    <span className="text-[10px] font-black uppercase text-rose-400">Eliminated</span>
                  </div>
                );
              }

              let btnStyle = "bg-white hover:bg-[#FFD700]/20 border-black/10 text-[#2D1B36] hover:border-[#FFD700]";
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = "bg-[#A7D49B] text-[#2D1B36] border-[#80C272] shadow-md font-black ring-2 ring-[#80C272]/50";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "bg-[#E74C3C] text-white border-rose-700 font-black";
                } else {
                  btnStyle = "bg-black/5 text-[#2D1B36]/40 border-black/10 opacity-40";
                }
              }

              const optionLetter = ["A", "B", "C", "D"][idx] || `${idx + 1}`;

              return (
                <motion.button
                  key={idx}
                  whileHover={!isAnswered ? { scale: 1.01 } : {}}
                  whileTap={!isAnswered ? { scale: 0.99 } : {}}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`p-3.5 sm:p-4 rounded-2xl font-bold text-xs sm:text-sm text-left border-2 shadow-xs transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-black/10 text-[#2D1B36] font-black text-xs flex items-center justify-center shrink-0">
                      {optionLetter}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </div>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-[#2D1B36] shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-white shrink-0" />}
                </motion.button>
              );
            })}
          </div>

          {/* Deep In-depth Explanation & Reasoning */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl border-2 flex flex-col gap-1.5 ${
                  selectedOption === currentQ.correctIndex
                    ? "bg-[#A7D49B]/30 border-[#A7D49B] text-[#2D1B36]"
                    : "bg-[#E74C3C]/15 border-[#E74C3C] text-[#2D1B36]"
                }`}
              >
                <div className="flex items-center justify-between font-black text-sm">
                  <div className="flex items-center gap-2">
                    {selectedOption === currentQ.correctIndex ? (
                      <>
                        <Sparkles className="w-4 h-4 text-[#2D1B36]" />
                        <span>Masterfully Answered! +{currentQ.points + (quizMode === "hardcore" ? 25 : 0)} KoKo Points!</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-4 h-4 text-[#E74C3C]" />
                        <span>Analytical Review: Learn from the nuance below:</span>
                      </>
                    )}
                  </div>
                  {comboStreak >= 2 && selectedOption === currentQ.correctIndex && (
                    <span className="text-xs text-amber-700 bg-amber-200 px-2 py-0.5 rounded-full font-black">
                      +{comboStreak * 15} Combo Bonus
                    </span>
                  )}
                </div>
                <p className="text-xs font-serif leading-relaxed text-[#2D1B36]/90">
                  <strong className="font-sans font-black">Why this is right: </strong>
                  {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {isAnswered && (
            <motion.button
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNextQuestion}
              className="w-full bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-sm sm:text-base py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all font-sans"
            >
              <span>{currentIndex + 1 === questions.length ? "Finish Quiz & Claim Reward Chest! 🎁" : "Next Question"}</span>
              <ChevronRight className="w-5 h-5 text-[#FFCC33]" />
            </motion.button>
          )}
        </div>
      ) : (
        /* KooBits Scorecard & Mastery Breakdown */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full bg-[#FDF6E3] text-[#2D1B36] rounded-[32px] shadow-2xl border-4 border-[#FFD700] p-6 sm:p-8 flex flex-col items-center text-center gap-6"
        >
          {/* Trophy Header */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-20 h-20 bg-[#FFB347] border-4 border-[#FFCC33] rounded-3xl shadow-xl flex items-center justify-center text-4xl mb-1 animate-bounce">
              🏆
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-[#E74C3C]">
              KooBits Hardcore Reading Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#2D1B36] mt-1">
              {rewards.isPerfect ? "PERFECT SCORE! 🌟" : "Splendiferous Effort! 🎉"}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#2D1B36]/80">
              You mastered {correctCount} out of {questions.length} deep reading challenges!
            </p>
          </div>

          {/* KooBits Rewards Breakdown Box */}
          <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 bg-white/80 p-4 rounded-2xl border-2 border-black/10 shadow-inner">
            <div className="flex flex-col items-center">
              <span className="text-2xl">🪙</span>
              <span className="text-sm sm:text-base font-black text-[#2D1B36]">+{rewards.totalKP}</span>
              <span className="text-[10px] font-bold text-[#2D1B36]/60">KoKo Points</span>
            </div>
            <div className="flex flex-col items-center border-x border-black/10">
              <span className="text-2xl">💎</span>
              <span className="text-sm sm:text-base font-black text-[#4A2D55]">+{rewards.gems}</span>
              <span className="text-[10px] font-bold text-[#2D1B36]/60">Star Gems</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🧁</span>
              <span className="text-sm sm:text-base font-black text-[#E74C3C]">+{rewards.petExp} EXP</span>
              <span className="text-[10px] font-bold text-[#2D1B36]/60">Pet Progress</span>
            </div>
          </div>

          {/* Daily Mystery Chest */}
          <div className="w-full bg-[#FFCC33]/20 p-5 rounded-2xl border-2 border-dashed border-[#FFD700] flex flex-col items-center gap-3">
            <span className="text-xs font-black text-[#2D1B36] uppercase tracking-wider">
              KooBits Daily Mystery Reward Chest
            </span>
            {!chestOpened ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenChest}
                className="flex flex-col items-center gap-2 bg-[#FFB347] border-4 border-[#FFCC33] text-[#2D1B36] px-8 py-4 rounded-2xl shadow-xl cursor-pointer animate-pulse"
              >
                <Gift className="w-10 h-10 text-[#2D1B36]" />
                <span className="font-black text-xs uppercase tracking-wider">TAP TO UNLOCK CHEST!</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-3 bg-[#A7D49B] text-[#2D1B36] px-5 py-3 rounded-2xl font-black text-xs shadow-md border-2 border-[#80C272]"
              >
                <Sparkles className="w-5 h-5 text-[#2D1B36]" />
                <span>Unlocked: +1 Rare Dahl Scholar Crest & Pet Level Boost!</span>
              </motion.div>
            )}
          </div>

          {/* Question Mastery Review */}
          <div className="w-full bg-white/90 p-4 rounded-2xl border border-black/10 text-left flex flex-col gap-3 max-h-56 overflow-y-auto font-sans">
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <span className="text-xs font-black text-[#2D1B36] uppercase tracking-wider">
                Question Mastery Review
              </span>
              <span className="text-[11px] font-bold text-[#2D1B36]/60">
                {correctCount} / {questions.length} Correct
              </span>
            </div>
            {answersHistory.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs border-b border-black/5 pb-2 last:border-0">
                {item.isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-bold text-[#2D1B36]">{item.question}</p>
                  <p className="font-serif italic text-[11px] text-[#2D1B36]/80 mt-0.5">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={() =>
              onFinishQuiz({
                score: correctCount,
                total: questions.length,
                kokoPointsEarned: rewards.totalKP,
                gemsEarned: rewards.gems,
                petExpEarned: rewards.petExp,
                perfectBonus: rewards.isPerfect,
              })
            }
            className="w-full bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-sm sm:text-base py-4 rounded-2xl shadow-xl cursor-pointer transition-all hover:scale-101 font-sans"
          >
            Collect All Rewards & Return to Bookshelf 🚀
          </button>
        </motion.div>
      )}
    </div>
  );
};
