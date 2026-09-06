import React, { useState, useEffect, useRef } from "react";
import { ChapterBite, VocabWord, AgeTier, StoryPage, ReflectionPrompt } from "../types";
import { VisualStoryScene } from "./VisualStoryScene";
import { MicroChallengeWidget } from "./MicroChallengeWidget";
import { DailyQuiz } from "./DailyQuiz";
import { VocabPopupModal } from "./VocabPopupModal";
import { speakText, stopSpeaking, playClickSound, playSuccessSound, playMagicSparkleSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Layers,
  FileText,
  Lightbulb,
  Check,
  Award,
} from "lucide-react";

interface ReadingSessionProps {
  chapter: ChapterBite;
  bookTitle: string;
  ageGroup: AgeTier;
  streakDays: number;
  onSessionComplete: (results: {
    minutesRead: number;
    kokoPointsEarned: number;
    gemsEarned: number;
    petExpEarned: number;
    perfectBonus: boolean;
  }) => void;
  onExit: () => void;
}

export const ReadingSession: React.FC<ReadingSessionProps> = ({
  chapter,
  bookTitle,
  ageGroup,
  streakDays,
  onSessionComplete,
  onExit,
}) => {
  // Session phases: 'briefing' | 'story' | 'challenge' | 'quiz'
  const [phase, setPhase] = useState<"briefing" | "story" | "challenge" | "quiz">("briefing");

  // 15-min reading timer
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Multi-Page Book State
  const pages: StoryPage[] = chapter.pages && chapter.pages.length > 0
    ? chapter.pages
    : [
        {
          pageNumber: 1,
          pageTitle: chapter.title,
          paragraphs: chapter.paragraphs,
          dialogueBites: chapter.dialogueBites,
        },
      ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"paged" | "continuous">("paged");

  // Reflection Prompt state per page: pageNumber -> { selectedIndex, answered, isCorrect }
  const [reflectionAnswers, setReflectionAnswers] = useState<{
    [pageIndex: number]: { selectedIndex: number; answered: boolean; isCorrect: boolean };
  }>({});

  // Audio TTS reading state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // Active vocab modal state
  const [activeVocab, setActiveVocab] = useState<VocabWord | null>(null);

  // Rewards earned so far in this session
  const [sessionGems, setSessionGems] = useState(0);
  const [sessionKP, setSessionKP] = useState(0);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && phase !== "briefing") {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, phase]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? "0" : ""}${remainder}`;
  };

  // Helper to use reflection prompt directly
  const getNormalizedPrompt = (prompt: ReflectionPrompt, _pageIdx: number): ReflectionPrompt => {
    return prompt;
  };

  // Pace helper
  const getPaceStatus = (secs: number) => {
    if (secs < 180) return { label: "Pacing: 🌱 Warming Up", color: "text-amber-300" };
    if (secs < 480) return { label: "Pacing: 📖 Deep Reading", color: "text-emerald-300" };
    if (secs < 780) return { label: "Pacing: ⚡ Great Focus (10m+)", color: "text-sky-300" };
    return { label: "Pacing: 🌟 15-Min Master Reader!", color: "text-[#FFD700]" };
  };

  const handleToggleSpeak = (textToRead: string) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const success = speakText(textToRead, speechRate, 1.05, () => {
        setIsSpeaking(false);
      });
      if (!success) {
        setIsSpeaking(false);
      }
    }
  };

  const handleReflectionSelect = (pageIdx: number, optionIdx: number, prompt: ReflectionPrompt) => {
    if (reflectionAnswers[pageIdx]?.answered) return;
    const normalized = getNormalizedPrompt(prompt, pageIdx);
    const isCorrect = optionIdx === normalized.correctInsightIndex;
    if (isCorrect) {
      playSuccessSound();
      setSessionKP((prev) => prev + normalized.rewardKP);
    } else {
      playClickSound();
    }
    setReflectionAnswers((prev) => ({
      ...prev,
      [pageIdx]: { selectedIndex: optionIdx, answered: true, isCorrect },
    }));
  };

  const handleChallengeDone = (gems: number) => {
    setSessionGems((prev) => prev + gems);
  };

  const handleFinishQuiz = (quizResults: {
    score: number;
    total: number;
    kokoPointsEarned: number;
    gemsEarned: number;
    petExpEarned: number;
    perfectBonus: boolean;
  }) => {
    const minutes = Math.max(1, Math.ceil(secondsElapsed / 60));
    onSessionComplete({
      minutesRead: minutes,
      kokoPointsEarned: quizResults.kokoPointsEarned + minutes * 10 + sessionKP,
      gemsEarned: quizResults.gemsEarned + sessionGems,
      petExpEarned: quizResults.petExpEarned,
      perfectBonus: quizResults.perfectBonus,
    });
  };

  // Helper to render text with clickable vocabulary words
  const renderInteractiveParagraph = (text: string) => {
    let parts: React.ReactNode[] = [text];

    chapter.vocabList.forEach((vWord) => {
      const regex = new RegExp(`\\b(${vWord.word})\\b`, "gi");
      const nextParts: React.ReactNode[] = [];

      parts.forEach((part) => {
        if (typeof part === "string") {
          const split = part.split(regex);
          split.forEach((subPart, i) => {
            if (subPart.toLowerCase() === vWord.word.toLowerCase()) {
              nextParts.push(
                <button
                  key={`${vWord.word}-${i}`}
                  onClick={() => {
                    playClickSound();
                    setActiveVocab(vWord);
                  }}
                  className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-amber-200/90 hover:bg-amber-300 text-amber-950 font-black rounded-lg border border-amber-400 text-xs sm:text-sm cursor-pointer shadow-2xs transition-all active:scale-95"
                >
                  <span>{subPart}</span>
                  <span className="text-[10px]">{vWord.emoji || "✨"}</span>
                </button>
              );
            } else if (subPart) {
              nextParts.push(subPart);
            }
          });
        } else {
          nextParts.push(part);
        }
      });
      parts = nextParts;
    });

    return parts;
  };

  const currentPage = pages[currentPageIndex] || pages[0];
  const pace = getPaceStatus(secondsElapsed);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 py-2 px-3 sm:px-6 text-[#FDF6E3]">
      {/* Top Session Action Bar */}
      <div className="flex items-center justify-between bg-[#4A2D55] px-4 py-3 rounded-[24px] shadow-lg border-2 border-[#6D427D] flex-wrap gap-2">
        <button
          onClick={() => {
            stopSpeaking();
            onExit();
          }}
          className="flex items-center gap-1.5 text-xs font-black text-[#FDF6E3] hover:text-white bg-[#2D1B36] hover:bg-[#6D427D] px-3.5 py-2 rounded-xl cursor-pointer transition-all border border-[#6D427D]"
        >
          <ArrowLeft className="w-4 h-4" /> Exit Quest
        </button>

        {/* 15-Min Timer Tracker & Pacing Indicator */}
        <div className="flex items-center gap-3 bg-[#2D1B36] px-4 py-1.5 rounded-xl border border-[#6D427D]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E74C3C] animate-pulse" />
            <span className="text-xs font-mono font-black text-[#FFD700]">{formatTime(secondsElapsed)} / 15:00</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-[#FFCC33] hover:text-white cursor-pointer ml-1"
              title={isTimerRunning ? "Pause Timer" : "Resume Timer"}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
          <span className={`text-[11px] font-black hidden md:inline-block ${pace.color}`}>
            • {pace.label}
          </span>
        </div>

        {/* Phase Pill */}
        <div className="flex items-center gap-1.5 text-xs font-black text-[#2D1B36] bg-[#FFCC33] px-3.5 py-1.5 rounded-xl shadow-xs">
          <span>
            {phase === "briefing" && "🎯 Mission Start"}
            {phase === "story" && `📖 15-Min Reading (Pg ${currentPageIndex + 1}/${pages.length})`}
            {phase === "challenge" && "⚡ Quick Quest"}
            {phase === "quiz" && "🏆 KooBits Mastery Quiz"}
          </span>
        </div>
      </div>

      {/* PHASE 1: BRIEFING */}
      {phase === "briefing" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#FDF6E3] rounded-[32px] p-6 sm:p-10 shadow-2xl border-4 border-[#FFD700] text-[#2D1B36] flex flex-col items-center text-center gap-6 relative overflow-hidden"
        >
          <div className="w-20 h-20 bg-[#FFB347] border-4 border-[#FFCC33] rounded-3xl shadow-lg flex items-center justify-center text-4xl animate-bounce">
            📖
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-black uppercase tracking-widest text-[#E74C3C]">
              Day {chapter.dayNumber} • 15-Minute Daily Reading Quest ({pages.length} Detailed Pages)
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#2D1B36] mt-1">{chapter.title}</h1>
            <p className="text-xs sm:text-base font-semibold text-[#2D1B36]/80 mt-1 max-w-xl">
              {chapter.subtitle}
            </p>
          </div>

          {/* 15-Min Breakdown Flow */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
            <div className="bg-[#FFCC33]/30 p-3.5 rounded-2xl border-2 border-[#FFCC33] flex items-start gap-2.5">
              <span className="p-1.5 bg-[#2D1B36] text-[#FFD700] font-black text-xs rounded-xl shrink-0">01</span>
              <div>
                <h4 className="font-black text-xs text-[#2D1B36]">Scene Briefing</h4>
                <p className="text-[11px] text-[#2D1B36]/80 font-medium">Explore visual stage</p>
              </div>
            </div>
            <div className="bg-[#A7D49B]/40 p-3.5 rounded-2xl border-2 border-[#A7D49B] flex items-start gap-2.5">
              <span className="p-1.5 bg-[#2D1B36] text-[#A7D49B] font-black text-xs rounded-xl shrink-0">02</span>
              <div>
                <h4 className="font-black text-xs text-[#2D1B36]">Deep Reading</h4>
                <p className="text-[11px] text-[#2D1B36]/80 font-medium">{pages.length} pages + reflections (10 min)</p>
              </div>
            </div>
            <div className="bg-[#FFB347]/40 p-3.5 rounded-2xl border-2 border-[#FFB347] flex items-start gap-2.5">
              <span className="p-1.5 bg-[#2D1B36] text-[#FFB347] font-black text-xs rounded-xl shrink-0">03</span>
              <div>
                <h4 className="font-black text-xs text-[#2D1B36]">Word Puzzle</h4>
                <p className="text-[11px] text-[#2D1B36]/80 font-medium">Interactive challenge (2 min)</p>
              </div>
            </div>
            <div className="bg-[#E74C3C]/20 p-3.5 rounded-2xl border-2 border-[#E74C3C] flex items-start gap-2.5">
              <span className="p-1.5 bg-[#E74C3C] text-white font-black text-xs rounded-xl shrink-0">04</span>
              <div>
                <h4 className="font-black text-xs text-[#2D1B36]">Mastery Quiz</h4>
                <p className="text-[11px] text-[#2D1B36]/80 font-medium">Hardcore comprehension (3 min)</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              setPhase("story");
            }}
            className="w-full sm:w-auto px-10 py-4 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-base rounded-2xl shadow-xl cursor-pointer transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Start 15-Minute Quest! 🚀</span>
          </button>
        </motion.div>
      )}

      {/* PHASE 2: STORY READING */}
      {phase === "story" && (
        <div className="flex flex-col gap-6">
          {/* Visual Scene Stage */}
          {chapter.visualScenes && chapter.visualScenes.length > 0 && (
            <div className="bg-[#4A2D55] p-4 sm:p-6 rounded-[32px] shadow-xl border-2 border-[#6D427D] flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[#6D427D] pb-2">
                <span className="text-xs font-black text-[#FFD700] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFCC33]" /> Visual Scene Explorer
                </span>
                {chapter.visualScenes.length > 1 && (
                  <div className="flex gap-1.5">
                    {chapter.visualScenes.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSceneIndex(idx)}
                        className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center cursor-pointer transition-all ${
                          currentSceneIndex === idx
                            ? "bg-[#FFCC33] text-[#2D1B36] shadow-md"
                            : "bg-[#2D1B36] text-[#FDF6E3] hover:bg-[#6D427D]"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <VisualStoryScene
                scene={chapter.visualScenes[currentSceneIndex] || chapter.visualScenes[0]}
                ageGroup={ageGroup}
              />
            </div>
          )}

          {/* Reading Controls Bar: Page Navigation & Audio Controls */}
          <div className="flex items-center justify-between bg-[#2D1B36] p-3 rounded-2xl border border-[#6D427D] flex-wrap gap-2 font-sans">
            {/* Page Jump Tabs */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#FFD700] mr-1 hidden sm:inline">Pages:</span>
              {pages.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    stopSpeaking();
                    setIsSpeaking(false);
                    playClickSound();
                    setCurrentPageIndex(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer transition-all ${
                    currentPageIndex === idx
                      ? "bg-[#FFCC33] text-[#2D1B36] shadow-md ring-2 ring-[#FFD700]"
                      : "bg-[#4A2D55] text-[#FDF6E3] hover:bg-[#6D427D]"
                  }`}
                >
                  Page {idx + 1}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === "paged" ? "continuous" : "paged")}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#4A2D55] hover:bg-[#6D427D] text-[#FDF6E3] rounded-xl text-xs font-bold cursor-pointer transition-all"
                title="Toggle between single-page book mode and continuous scrolling"
              >
                {viewMode === "paged" ? <Layers className="w-3.5 h-3.5 text-[#FFCC33]" /> : <FileText className="w-3.5 h-3.5 text-[#A7D49B]" />}
                <span>{viewMode === "paged" ? "Book Mode" : "Continuous Mode"}</span>
              </button>

              {/* Audio Speed Selector */}
              <div className="flex items-center gap-1 bg-[#4A2D55] p-1 rounded-xl">
                {[0.8, 1.0, 1.2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => {
                      setSpeechRate(rate);
                      if (isSpeaking) {
                        stopSpeaking();
                        setIsSpeaking(false);
                      }
                    }}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-black cursor-pointer transition-all ${
                      speechRate === rate ? "bg-[#FFCC33] text-[#2D1B36]" : "text-[#FDF6E3]/70 hover:text-white"
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>

              {/* Audio Read-Aloud Button */}
              <button
                onClick={() => {
                  const textToRead = viewMode === "paged"
                    ? currentPage.paragraphs.join(" ")
                    : pages.flatMap((p) => p.paragraphs).join(" ");
                  handleToggleSpeak(textToRead);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs shadow-md cursor-pointer transition-all ${
                  isSpeaking
                    ? "bg-[#E74C3C] text-white hover:bg-[#c0392b] animate-pulse"
                    : "bg-[#FFD700] text-[#2D1B36] hover:bg-[#FFCC33]"
                }`}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" /> Stop Audio
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" /> Read Page Aloud
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Story Prose Bento Card */}
          <div className="bg-[#FDF6E3] text-[#2D1B36] p-6 sm:p-10 rounded-[32px] shadow-2xl border-4 border-[#FFD700] flex flex-col gap-6 font-serif">
            {/* Chapter & Page Title */}
            <div className="flex items-center justify-between border-b border-[#2D1B36]/10 pb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#E74C3C]" />
                <div>
                  <h3 className="text-lg sm:text-2xl font-serif font-black text-[#2D1B36]">{chapter.title}</h3>
                  <span className="text-xs font-sans font-bold text-[#E74C3C] uppercase tracking-wider">
                    Page {currentPageIndex + 1} of {pages.length}: {currentPage.pageTitle}
                  </span>
                </div>
              </div>
              <div className="text-right font-sans">
                <span className="text-xs font-black text-[#2D1B36]/60">
                  Target: 15 Mins • Read {formatTime(secondsElapsed)}
                </span>
              </div>
            </div>

            {/* Paragraphs (Paged or Continuous) */}
            <div className="flex flex-col gap-5 text-[#2D1B36] leading-relaxed">
              {(viewMode === "paged" ? [currentPage] : pages).map((pItem, pItemIdx) => (
                <div key={pItemIdx} className="flex flex-col gap-4">
                  {viewMode === "continuous" && (
                    <div className="flex items-center gap-2 border-b-2 border-dashed border-[#FFCC33] pb-1 pt-3">
                      <span className="bg-[#2D1B36] text-[#FFD700] text-xs font-black px-2.5 py-0.5 rounded-lg font-sans">
                        Part {pItem.pageNumber}
                      </span>
                      <h4 className="font-sans font-black text-sm text-[#2D1B36]">{pItem.pageTitle}</h4>
                    </div>
                  )}

                  {pItem.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className={`rounded-2xl transition-all ${
                        ageGroup === "5-6"
                          ? "text-base sm:text-xl font-bold leading-loose p-2"
                          : ageGroup === "7-8"
                          ? "text-base sm:text-lg font-semibold leading-relaxed"
                          : "text-sm sm:text-base font-normal leading-relaxed text-justify"
                      }`}
                    >
                      {renderInteractiveParagraph(p)}
                    </p>
                  ))}

                  {/* Comic Dialogue Bites on this page */}
                  {pItem.dialogueBites && pItem.dialogueBites.length > 0 && (
                    <div className="flex flex-col gap-3 pt-2 font-sans">
                      {pItem.dialogueBites.map((d, dIdx) => (
                        <div
                          key={dIdx}
                          className={`flex items-start gap-3 p-3.5 rounded-2xl border-2 ${
                            d.side === "left"
                              ? "bg-white/80 border-[#A7D49B] self-start max-w-lg shadow-xs"
                              : "bg-[#FFCC33]/20 border-[#FFCC33] self-end max-w-lg shadow-xs"
                          }`}
                        >
                          <span className="text-2xl p-1 bg-white rounded-xl shadow-2xs">{d.avatarEmoji}</span>
                          <div>
                            <span className="font-black text-xs text-[#2D1B36]">{d.speaker}</span>
                            <p className="text-xs sm:text-sm font-serif italic text-[#2D1B36] mt-0.5">
                              "{d.text}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mid-Reading Reflection Checkpoint */}
                  {pItem.reflectionPrompt && (() => {
                    const normPrompt = getNormalizedPrompt(pItem.reflectionPrompt, pItem.pageNumber - 1);
                    const state = reflectionAnswers[pItem.pageNumber - 1];

                    return (
                      <div className="bg-[#FFCC33]/20 p-5 rounded-2xl border-2 border-[#FFCC33] flex flex-col gap-3 font-sans mt-2 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs font-black text-[#E74C3C] uppercase tracking-wider">
                            <Lightbulb className="w-4 h-4 text-amber-500" /> Think & Connect Checkpoint
                          </span>
                          <span className="text-xs font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full">
                            +{normPrompt.rewardKP} KP
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm font-bold text-[#2D1B36]">
                          {normPrompt.question}
                        </p>

                        <div className="grid grid-cols-1 gap-2">
                          {normPrompt.options.map((opt, optIdx) => {
                            const isSelected = state?.selectedIndex === optIdx;
                            const isCorrectOpt = optIdx === normPrompt.correctInsightIndex;
                            const optLetter = ["A", "B", "C", "D"][optIdx] || `${optIdx + 1}`;

                            let btnClass = "bg-white hover:bg-amber-100 text-[#2D1B36] border-black/10";
                            if (state?.answered) {
                              if (isCorrectOpt) {
                                btnClass = "bg-emerald-200 text-emerald-950 border-emerald-400 font-black";
                              } else if (isSelected && !isCorrectOpt) {
                                btnClass = "bg-rose-100 text-rose-950 border-rose-300";
                              } else {
                                btnClass = "bg-white/40 text-black/40 border-transparent opacity-50";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleReflectionSelect(pItem.pageNumber - 1, optIdx, pItem.reflectionPrompt!)}
                                disabled={state?.answered}
                                className={`p-3 rounded-xl text-xs font-bold text-left border shadow-2xs transition-all flex items-center justify-between gap-2.5 cursor-pointer ${btnClass}`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="w-6 h-6 rounded-lg bg-black/10 text-[#2D1B36] font-black text-[11px] flex items-center justify-center shrink-0">
                                    {optLetter}
                                  </span>
                                  <span>{opt}</span>
                                </div>
                                {state?.answered && isCorrectOpt && <Check className="w-4 h-4 text-emerald-700 shrink-0" />}
                              </button>
                            );
                          })}
                        </div>

                        {state?.answered && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/90 p-3 rounded-xl border border-emerald-400 text-xs text-[#2D1B36] flex items-center gap-2"
                          >
                            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                            <p className="font-medium">{normPrompt.insight}</p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              ))}
            </div>

            {/* Dahl Gobblefunk Dictionary (for 9+) */}
            {chapter.dahlGobblefunk && chapter.dahlGobblefunk.length > 0 && (
              <div className="bg-[#2D1B36] text-[#FDF6E3] p-5 sm:p-6 rounded-[28px] border-3 border-[#FFD700] flex flex-col gap-3 font-sans shadow-xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#FFD700]">
                  ✨ Roald Dahl's Gobblefunk Lexicon
                </span>
                {chapter.dahlGobblefunk.map((g, gIdx) => (
                  <div key={gIdx} className="flex flex-col gap-1 text-xs">
                    <span className="font-black text-[#FFCC33] text-sm font-serif">
                      "{g.word}" — {g.meaning}
                    </span>
                    <p className="italic text-[#FDF6E3]/80 font-serif">"{g.roaldDahlQuote}"</p>
                  </div>
                ))}
              </div>
            )}

            {/* Vocabulary Pills Reminder */}
            {chapter.vocabList && chapter.vocabList.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 bg-[#FFCC33]/30 p-4 rounded-2xl border-2 border-[#FFCC33] font-sans">
                <span className="text-xs font-black text-[#2D1B36]">✨ Dahl Words to Tap:</span>
                {chapter.vocabList.map((v, vIdx) => (
                  <button
                    key={vIdx}
                    onClick={() => {
                      playClickSound();
                      setActiveVocab(v);
                    }}
                    className="flex items-center gap-1 bg-white hover:bg-[#FFD700] text-[#2D1B36] border border-[#2D1B36]/20 px-3 py-1 rounded-xl text-xs font-black cursor-pointer transition-all active:scale-95 shadow-2xs"
                  >
                    <span>{v.emoji}</span>
                    <span>{v.word}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Page Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#2D1B36]/10 font-sans gap-3">
              <button
                onClick={() => {
                  stopSpeaking();
                  setIsSpeaking(false);
                  playClickSound();
                  setCurrentPageIndex((prev) => Math.max(0, prev - 1));
                }}
                disabled={currentPageIndex === 0}
                className={`px-5 py-3 rounded-2xl text-xs font-black flex items-center gap-1.5 cursor-pointer transition-all ${
                  currentPageIndex === 0
                    ? "bg-black/5 text-black/20 cursor-not-allowed"
                    : "bg-[#2D1B36] text-[#FDF6E3] hover:bg-[#4A2D55]"
                }`}
              >
                <ChevronLeft className="w-4 h-4" /> Previous Page
              </button>

              {currentPageIndex < pages.length - 1 ? (
                <button
                  onClick={() => {
                    stopSpeaking();
                    setIsSpeaking(false);
                    playClickSound();
                    setCurrentPageIndex((prev) => Math.min(pages.length - 1, prev + 1));
                  }}
                  className="px-6 py-3 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] rounded-2xl text-xs sm:text-sm font-black flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  <span>Next Page ({currentPageIndex + 2}/{pages.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    stopSpeaking();
                    playClickSound();
                    setPhase("challenge");
                  }}
                  className="px-6 py-3 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] rounded-2xl text-xs sm:text-sm font-black flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                  <span>Finish Reading & Start Puzzle ⚡</span>
                  <ArrowRight className="w-4 h-4 text-[#FFCC33]" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* PHASE 3: INTERACTIVE MICRO CHALLENGE */}
      {phase === "challenge" && (
        <div className="flex flex-col gap-5">
          <MicroChallengeWidget
            challenge={chapter.microChallenge}
            onComplete={handleChallengeDone}
          />

          <div className="flex justify-end">
            <button
              onClick={() => {
                playClickSound();
                setPhase("quiz");
              }}
              className="px-8 py-3.5 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] font-black text-xs sm:text-sm rounded-2xl shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <span>Proceed to KooBits Daily Quiz 🏆</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* PHASE 4: DAILY QUIZ */}
      {phase === "quiz" && (
        <DailyQuiz
          questions={chapter.quizQuestions}
          chapterTitle={chapter.title}
          ageGroup={ageGroup}
          streakDays={streakDays}
          onFinishQuiz={handleFinishQuiz}
        />
      )}

      {/* Vocabulary Flashcard Modal */}
      {activeVocab && (
        <VocabPopupModal
          wordData={activeVocab}
          ageGroup={ageGroup}
          bookTitle={bookTitle}
          onClose={() => setActiveVocab(null)}
          onExplored={() => {
            setSessionGems((prev) => prev + 5);
          }}
        />
      )}
    </div>
  );
};
