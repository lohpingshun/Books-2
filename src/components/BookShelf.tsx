import React, { useState } from "react";
import { Book, ChapterBite, UserProfile, AgeTier, BookId } from "../types";
import { BOOKS_DATA } from "../data/storyData";
import { playClickSound, playCoinSound } from "../utils/audio";
import { motion } from "motion/react";
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  Lock,
  Play,
  Star,
  Flame,
  Award,
  Clock,
  ChevronRight,
  ShoppingBag,
  HelpCircle,
  Trophy,
} from "lucide-react";

interface BookShelfProps {
  profile: UserProfile;
  onSelectChapter: (book: Book, chapter: ChapterBite) => void;
  onOpenRewards?: () => void;
  onOpenReset?: () => void;
}

export const BookShelf: React.FC<BookShelfProps> = ({
  profile,
  onSelectChapter,
  onOpenRewards,
  onOpenReset,
}) => {
  // Unlocked books prioritized (first unlocked is Great Expectations)
  const unlockedBooks = BOOKS_DATA.filter((b) => !b.isLocked);
  const defaultBookId = unlockedBooks[0]?.id || "great_expectations";

  // Current selected book
  const [selectedBookId, setSelectedBookId] = useState<BookId>(defaultBookId);
  const [lockedNoticeBook, setLockedNoticeBook] = useState<Book | null>(null);

  // Guarantee currentBook is never a locked book
  const candidateBook = BOOKS_DATA.find((b) => b.id === selectedBookId);
  const currentBook =
    candidateBook && !candidateBook.isLocked
      ? candidateBook
      : unlockedBooks[0] || BOOKS_DATA[0];

  const chapters = currentBook.chaptersByAge[profile.ageGroup] || [];
  const activeChapter = chapters.find((ch) => !profile.completedChapters.includes(ch.id)) || chapters[0];

  // Calculate progress percentage
  const completedInBook = chapters.filter((c) => profile.completedChapters.includes(c.id)).length;
  const progressPct = chapters.length > 0 ? Math.round((completedInBook / chapters.length) * 100) : 0;

  const handleSelectBook = (book: Book) => {
    playClickSound();
    if (book.isLocked) {
      setLockedNoticeBook(book);
    } else {
      setSelectedBookId(book.id);
      setLockedNoticeBook(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 py-2 px-2 sm:px-4 text-[#FDF6E3]">
      {/* Bento Header Section: Stats and Identity */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#4A2D55]/60 border-2 border-[#6D427D] rounded-[32px] p-5 sm:p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#FFB347] border-4 border-[#FFCC33] flex items-center justify-center text-3xl shadow-lg shrink-0">
            🦁
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#FFD700]">
                {profile.ageGroup === "5-6" ? "STORY QUEST" : profile.ageGroup === "7-8" ? "EXPLORER ADVENTURE" : "CHILDREN'S CLASSICS"}
              </h1>
              <span className="bg-[#E74C3C] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Daily Bite
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FDF6E3]/80 uppercase tracking-widest font-bold mt-0.5">
              Reader Level {profile.petLevel} • Ages {profile.ageGroup}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <div className="bg-[#2D1B36] border-2 border-[#6D427D] rounded-2xl px-4 sm:px-6 py-2.5 text-center flex-1 md:flex-initial">
            <div className="text-[10px] uppercase font-bold text-[#FDF6E3]/60 tracking-wider">Daily Streak</div>
            <div className="text-lg sm:text-xl font-black text-[#FFD700] flex items-center justify-center gap-1">
              <span>🔥</span> {profile.streakDays} Days
            </div>
          </div>
          <div className="bg-[#2D1B36] border-2 border-[#6D427D] rounded-2xl px-4 sm:px-6 py-2.5 text-center flex-1 md:flex-initial">
            <div className="text-[10px] uppercase font-bold text-[#FDF6E3]/60 tracking-wider">Minutes Logged</div>
            <div className="text-lg sm:text-xl font-black text-[#FFCC33]">
              {profile.totalMinutesRead} / 300
            </div>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Current Reading Focus (Large Spotlight Bento Card - col-span-8) */}
        <div className="lg:col-span-8 bg-[#FDF6E3] rounded-[32px] p-6 sm:p-8 text-[#2D1B36] shadow-2xl flex flex-col justify-between relative overflow-hidden border-4 border-[#FFD700]">
          {/* Subtle watermark background icon */}
          <div className="absolute top-2 right-4 opacity-10 text-8xl select-none pointer-events-none">
            {currentBook.themeIcon}
          </div>

          <div>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="bg-[#E74C3C] text-white px-4 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider shadow-xs">
                TODAY'S 15-MIN TALE
              </span>
              <span className="font-mono font-black text-xs sm:text-sm bg-[#2D1B36]/10 px-3 py-1 rounded-xl text-[#2D1B36] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E74C3C]" /> 15:00 TIMER QUEST
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-black mb-4 leading-tight text-[#2D1B36]">
              {currentBook.title}
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div
                className={`w-28 sm:w-36 aspect-[3/4] rounded-2xl bg-gradient-to-br ${currentBook.coverColor} flex flex-col items-center justify-center text-5xl shadow-xl border-4 sm:border-8 border-white shrink-0`}
              >
                <span>{currentBook.themeIcon}</span>
                <span className="text-[10px] font-black uppercase text-white/90 mt-1">
                  Day {activeChapter?.dayNumber || 1}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-base sm:text-xl leading-relaxed font-serif mb-4 italic text-[#2D1B36]/90">
                  {selectedBookId === "great_expectations"
                    ? '"Take nothing on its looks; take everything on evidence. There is no better rule in all of life."'
                    : selectedBookId === "secret_garden"
                    ? '"If you look the right way, you can see that the whole world is a garden. Where you tend a rose, a thistle cannot grow."'
                    : selectedBookId === "pollyanna"
                    ? '"There is something about everything that you can be glad about, if you keep hunting long enough to find it."'
                    : selectedBookId === "charlie"
                    ? '"Mr. Willy Wonka is the most amazing, the most fantastic, the most extraordinary chocolate maker the world has ever seen!"'
                    : selectedBookId === "matilda"
                    ? '"Never do anything by halves if you want to get away with it. Be outrageous. Go the whole hog!"'
                    : selectedBookId === "elevator"
                    ? '"We are about to take a ride in the most colossal glass contraption ever invented!"'
                    : selectedBookId === "danny"
                    ? '"A person is a fool to become an adult if he can’t also be slightly child-like."'
                    : '"I have this tiny power in my pointing finger, and when I get cross... sparks begin to fly!"'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#A7D49B] text-[#2D1B36] px-3 py-1 rounded-xl text-xs font-black shadow-2xs">
                    #{selectedBookId === "great_expectations" ? "PipAndJoe" : selectedBookId === "secret_garden" ? "SecretGarden" : selectedBookId === "pollyanna" ? "TheGladGame" : selectedBookId === "charlie" ? "Wonka" : selectedBookId === "matilda" ? "Matilda" : selectedBookId === "danny" ? "Champion" : selectedBookId === "elevator" ? "Elevator" : "MagicFinger"}
                  </span>
                  <span className="bg-[#A7D49B] text-[#2D1B36] px-3 py-1 rounded-xl text-xs font-black shadow-2xs">
                    #{profile.ageGroup === "5-6" ? "ReadAloud" : profile.ageGroup === "7-8" ? "ComicPanels" : "VocabularyRich"}
                  </span>
                  <span className="bg-[#A7D49B] text-[#2D1B36] px-3 py-1 rounded-xl text-xs font-black shadow-2xs">
                    #{selectedBookId === "great_expectations" ? "KentMarshes" : selectedBookId === "secret_garden" ? "RobinWall" : selectedBookId === "pollyanna" ? "RainbowPrisms" : selectedBookId === "charlie" ? "CandyMagic" : selectedBookId === "matilda" ? "Telekinesis" : selectedBookId === "danny" ? "WoodlandHero" : selectedBookId === "elevator" ? "SpaceKnids" : "ElectricSpark"}
                  </span>
                  <span className="bg-[#FFCC33] text-[#2D1B36] px-3 py-1 rounded-xl text-xs font-black shadow-2xs">
                    +150 KP
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#2D1B36]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-1/2">
              <div className="flex justify-between text-xs font-black uppercase text-[#2D1B36]/70 mb-1.5">
                <span>Book Progress</span>
                <span>{progressPct}% Completed</span>
              </div>
              <div className="w-full bg-[#E5E5E5] h-3.5 rounded-full overflow-hidden p-0.5 border border-black/10">
                <div
                  className="bg-[#E74C3C] h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(15, progressPct)}%` }}
                ></div>
              </div>
            </div>

            {activeChapter && (
              <button
                onClick={() => {
                  playClickSound();
                  onSelectChapter(currentBook, activeChapter);
                }}
                className="w-full sm:w-auto bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] px-8 py-3.5 rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <Play className="w-4 h-4 fill-current text-[#FFCC33]" />
                <span>CONTINUE READING</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column Bento Cards (Vault & Quiz) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Rewards / KooBits Vault Bento Card */}
          <div className="bg-[#FFCC33] rounded-[32px] p-6 text-[#2D1B36] shadow-2xl flex flex-col justify-between border-3 border-[#FFD700]">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <h3 className="font-black text-xl tracking-tight">VAULT</h3>
              </div>
              {onOpenRewards && (
                <button
                  onClick={() => {
                    playCoinSound();
                    onOpenRewards();
                  }}
                  className="bg-[#2D1B36]/15 hover:bg-[#2D1B36]/25 px-2.5 py-1 rounded-xl text-xs font-black cursor-pointer uppercase transition-all"
                >
                  VIEW ALL
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2.5 my-2">
              <div className="bg-white/60 p-2.5 rounded-2xl flex flex-col items-center text-center shadow-xs">
                <div className="text-2xl mb-0.5">🎫</div>
                <div className="text-[11px] font-black leading-tight">GOLDEN TICKET</div>
                <div className="text-[9px] font-extrabold text-[#2D1B36]/70">
                  {profile.goldenTickets > 0 ? `${profile.goldenTickets} Collected` : "Rare Item"}
                </div>
              </div>

              <div
                className={`bg-white/60 p-2.5 rounded-2xl flex flex-col items-center text-center shadow-xs ${
                  profile.unlockedItems.includes("item-fizzy-lifting") ? "" : "opacity-50"
                }`}
              >
                <div className="text-2xl mb-0.5">🧪</div>
                <div className="text-[11px] font-black leading-tight">FIZZY LIFTING</div>
                <div className="text-[9px] font-extrabold text-[#2D1B36]/70">
                  {profile.unlockedItems.includes("item-fizzy-lifting") ? "Unlocked" : "Locked"}
                </div>
              </div>

              <div className="bg-white/60 p-2.5 rounded-2xl flex flex-col items-center text-center shadow-xs">
                <div className="text-2xl mb-0.5">📚</div>
                <div className="text-[11px] font-black leading-tight">LIBRARY KEY</div>
                <div className="text-[9px] font-extrabold text-[#2D1B36]/70">
                  {profile.completedChapters.length} Bites
                </div>
              </div>

              <div
                className={`bg-white/60 p-2.5 rounded-2xl flex flex-col items-center text-center shadow-xs ${
                  profile.unlockedItems.includes("item-wonka-hat") ? "" : "opacity-50"
                }`}
              >
                <div className="text-2xl mb-0.5">🧁</div>
                <div className="text-[11px] font-black leading-tight">SQUARE SWEET</div>
                <div className="text-[9px] font-extrabold text-[#2D1B36]/70">Legendary</div>
              </div>
            </div>

            <div className="mt-2 bg-[#2D1B36]/10 rounded-2xl p-2.5 flex items-center justify-between text-xs font-black">
              <span>Vault Balance:</span>
              <span className="text-[#2D1B36] font-black">🪙 {profile.kokoPoints} KP</span>
            </div>
          </div>

          {/* Oompa Quiz Corner Bento Card */}
          <div className="bg-[#A7D49B] rounded-[32px] p-6 text-[#2D1B36] shadow-2xl flex flex-col justify-between border-3 border-[#80C272]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🎪</span>
                <h3 className="font-black text-xl tracking-tight">DAILY QUIZ</h3>
              </div>
              <p className="text-xs font-semibold leading-snug text-[#2D1B36]/80">
                Finish today's 15-min reading bite to unlock today's comprehension & vocabulary riddle!
              </p>
            </div>

            <div className="bg-white/40 rounded-2xl p-3.5 my-3 border border-white/60">
              <div className="text-[10px] uppercase font-black text-[#2D1B36]/70 mb-0.5">Next Quiz Prize</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-black text-sm">
                  <span className="text-xl">✨</span>
                  <span>150 KoKo Points</span>
                </div>
                <span className="text-xs font-extrabold bg-[#2D1B36] text-white px-2 py-0.5 rounded-full">
                  +1 Gem
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (activeChapter) {
                  playClickSound();
                  onSelectChapter(currentBook, activeChapter);
                }
              }}
              className="w-full bg-[#2D1B36] hover:bg-[#4A2D55] text-white py-2.5 rounded-2xl font-black text-xs cursor-pointer transition-all shadow-md active:scale-95"
            >
              LAUNCH QUEST & QUIZ
            </button>
          </div>
        </div>
      </div>

      {/* Age Selectors Bento Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`rounded-[32px] p-5 flex flex-col items-center justify-center transition-all ${
            profile.ageGroup === "5-6"
              ? "bg-[#4A2D55] border-4 border-[#FFD700] shadow-xl ring-4 ring-[#FFD700]/20"
              : "bg-[#4A2D55]/40 border-2 border-[#6D427D] opacity-60"
          }`}
        >
          <div className="text-3xl mb-1">🧸</div>
          <div className={`font-black text-lg ${profile.ageGroup === "5-6" ? "text-[#FFD700]" : "text-[#FDF6E3]"}`}>
            Ages 5-6
          </div>
          <div className="text-[10px] uppercase tracking-widest font-black text-[#FDF6E3]/70">
            {profile.ageGroup === "5-6" ? "ACTIVE WORLD • READ-ALOUD" : "EXPLORE WORLD"}
          </div>
        </div>

        <div
          className={`rounded-[32px] p-5 flex flex-col items-center justify-center transition-all ${
            profile.ageGroup === "7-8"
              ? "bg-[#4A2D55] border-4 border-[#FFD700] shadow-xl ring-4 ring-[#FFD700]/20"
              : "bg-[#4A2D55]/40 border-2 border-[#6D427D] opacity-60"
          }`}
        >
          <div className="text-3xl mb-1">🎒</div>
          <div className={`font-black text-lg ${profile.ageGroup === "7-8" ? "text-[#FFD700]" : "text-[#FDF6E3]"}`}>
            Ages 7-8
          </div>
          <div className="text-[10px] uppercase tracking-widest font-black text-[#FDF6E3]/70">
            {profile.ageGroup === "7-8" ? "ACTIVE WORLD • COMIC PANELS" : "EXPLORE WORLD"}
          </div>
        </div>

        <div
          className={`rounded-[32px] p-5 flex flex-col items-center justify-center transition-all ${
            profile.ageGroup === "9+"
              ? "bg-[#4A2D55] border-4 border-[#FFD700] shadow-xl ring-4 ring-[#FFD700]/20"
              : "bg-[#4A2D55]/40 border-2 border-[#6D427D] opacity-60"
          }`}
        >
          <div className="text-3xl mb-1">🎩</div>
          <div className={`font-black text-lg ${profile.ageGroup === "9+" ? "text-[#FFD700]" : "text-[#FDF6E3]"}`}>
            Ages 9+
          </div>
          <div className="text-[10px] uppercase tracking-widest font-black text-[#FDF6E3]/70">
            {profile.ageGroup === "9+" ? "ACTIVE WORLD • GOBBLEFUNK" : "EXPLORE WORLD"}
          </div>
        </div>
      </div>

      {/* Book Adventure Picker Bento Card */}
      <div className="bg-[#4A2D55]/70 border-2 border-[#6D427D] rounded-[32px] p-6 sm:p-8 shadow-xl flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-[#6D427D]/60 pb-3 flex-wrap gap-2">
          <div>
            <span className="text-[11px] font-black uppercase text-[#FFD700] tracking-widest">
              Children's Classics Library
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#FDF6E3] mt-0.5">
              Choose Your Adventure Book
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-emerald-200 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-400/40 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> 3 Active Classics
            </span>
            <span className="text-xs font-bold text-amber-200 bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-400/40 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-amber-400" /> 5 Roald Dahl Locked
            </span>
          </div>
        </div>

        {/* Informative notice banner explaining the lock policy */}
        <div className="bg-[#2D1B36]/90 border border-amber-400/40 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 text-xs text-[#FDF6E3]">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/60 flex items-center justify-center text-lg shrink-0">
            🔒
          </div>
          <div className="flex-1">
            <span className="font-bold text-amber-300">Focus on Active Comprehension: </span>
            <span className="text-[#FDF6E3]/85">
              Roald Dahl titles are temporarily locked because children often memorise and repeat past answers. Please dive into our 3 new classics (Great Expectations, The Secret Garden, and Pollyanna) with 8 full chapters each!
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {BOOKS_DATA.map((book) => {
            const isSelected = selectedBookId === book.id;
            const isLocked = !!book.isLocked;

            return (
              <motion.div
                key={book.id}
                whileHover={{ scale: isLocked ? 1.0 : 1.02 }}
                onClick={() => handleSelectBook(book)}
                className={`p-5 rounded-[28px] border-3 cursor-pointer transition-all flex flex-col justify-between gap-3 relative overflow-hidden ${
                  isSelected
                    ? "bg-[#FDF6E3] text-[#2D1B36] border-[#FFD700] shadow-2xl ring-4 ring-[#FFD700]/30"
                    : isLocked
                    ? "bg-[#201326]/75 text-[#FDF6E3]/75 border-slate-700/80 hover:border-amber-400/70"
                    : "bg-[#2D1B36]/80 text-[#FDF6E3] border-[#6D427D] hover:border-[#FFCC33]"
                }`}
              >
                {/* Top Status Pill */}
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider truncate ${
                      isSelected ? "text-[#E74C3C]" : isLocked ? "text-amber-400" : "text-[#FFD700]"
                    }`}
                  >
                    By {book.author}
                  </span>

                  {isLocked ? (
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-400/50 text-[9px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                      <Lock className="w-2.5 h-2.5" /> Locked
                    </span>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 text-[9px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                      🔓 Active
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3.5 mt-1">
                  <div
                    className={`relative w-14 h-18 rounded-2xl bg-gradient-to-br ${book.coverColor} flex items-center justify-center text-3xl shadow-md border-2 border-white/60 shrink-0 ${
                      isLocked ? "grayscale-[35%]" : ""
                    }`}
                  >
                    <span>{book.themeIcon}</span>
                    {isLocked && (
                      <div className="absolute inset-0 bg-black/45 rounded-2xl flex items-center justify-center">
                        <Lock className="w-5 h-5 text-amber-300 drop-shadow-md" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-black text-base mt-0.5 leading-snug">{book.title}</h4>
                    <span className="text-[10px] font-extrabold opacity-75 mt-0.5 block">
                      {book.chaptersByAge[profile.ageGroup]?.length || 8} Chapters
                    </span>
                  </div>
                </div>

                <p
                  className={`text-xs font-medium line-clamp-2 leading-relaxed ${
                    isSelected ? "text-[#2D1B36]/80" : isLocked ? "text-[#FDF6E3]/60" : "text-[#FDF6E3]/70"
                  }`}
                >
                  {isLocked
                    ? "Locked for now — kids just memorise and repeat. Explore our new unlocked classics!"
                    : book.descriptionByAge[profile.ageGroup]}
                </p>

                <div className="pt-2 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold opacity-75">
                    🪙 150 KP / Day
                  </span>
                  {isSelected ? (
                    <span className="flex items-center gap-1 text-[11px] font-black text-[#2D1B36] bg-[#A7D49B] px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D1B36]" /> Selected
                    </span>
                  ) : isLocked ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-amber-200">
                      <Lock className="w-3 h-3" /> Locked • Details
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-[#FFD700] hover:underline">
                      Select Book →
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 15-Minute Daily Chapter Path Bento Card */}
      <div className="bg-[#4A2D55]/70 border-2 border-[#6D427D] rounded-[32px] p-6 sm:p-8 shadow-xl flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[#6D427D]/60 pb-3 flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase text-[#FFD700] tracking-widest">
                {currentBook.title}
              </span>
              <span className="text-[10px] font-black text-emerald-950 bg-[#A7D49B] px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                🔓 All Chapters Unlocked
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#FDF6E3] mt-1">
              15-Minute Daily Story Arc (Days 1–{chapters.length})
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#2D1B36] bg-[#FFCC33] px-3.5 py-1.5 rounded-full shadow-xs">
              {profile.completedChapters.filter(id => chapters.some(c => c.id === id)).length} / {chapters.length} Chapters Mastered
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {chapters.map((ch) => {
            const isCompleted = profile.completedChapters.includes(ch.id);
            // All chapters are fully unlocked and accessible per user request!
            const isAvailable = true;

            return (
              <div
                key={ch.id}
                className={`p-5 rounded-[28px] border-3 flex flex-col justify-between gap-4 transition-all ${
                  isCompleted
                    ? "bg-[#A7D49B] text-[#2D1B36] border-[#80C272] shadow-md hover:shadow-lg"
                    : "bg-[#FDF6E3] text-[#2D1B36] border-[#FFD700] shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isCompleted
                          ? "bg-[#2D1B36] text-white"
                          : "bg-[#E74C3C] text-white"
                      }`}
                    >
                      Day {ch.dayNumber}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-black text-[#2D1B36]">
                      <Clock className="w-3.5 h-3.5 text-[#E74C3C]" /> {ch.estReadingMinutes} Mins
                    </span>
                  </div>

                  <h4 className="font-serif font-black text-base leading-snug mt-1">{ch.title}</h4>
                  <p className="text-xs font-medium mt-1 leading-relaxed text-[#2D1B36]/80 line-clamp-3">
                    {ch.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-black/10">
                  <div className="flex items-center gap-1 text-xs font-black">
                    <span>🪙 +150 KP</span>
                  </div>

                  {isCompleted ? (
                    <button
                      onClick={() => onSelectChapter(currentBook, ch)}
                      className="flex items-center gap-1 text-xs font-black text-[#2D1B36] bg-white/80 hover:bg-white px-3 py-1.5 rounded-xl cursor-pointer shadow-xs transition-all hover:scale-105 active:scale-95"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Replay
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectChapter(currentBook, ch)}
                      className="flex items-center gap-1 text-xs font-black text-white bg-[#2D1B36] hover:bg-[#4A2D55] px-3.5 py-1.5 rounded-xl cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>Read Now</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FFCC33]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Reset Stats Bar */}
        {onOpenReset && (
          <div className="mt-4 pt-4 border-t border-[#4A2D55] flex flex-wrap items-center justify-between text-xs text-[#FDF6E3]/60 gap-2">
            <span>Need to start your reading adventure from scratch?</span>
            <button
              onClick={onOpenReset}
              className="text-rose-300 hover:text-rose-200 underline font-bold cursor-pointer transition-all"
            >
              🔄 Refresh Points & Reading Stats to 0
            </button>
          </div>
        )}
      </div>

      {/* Locked Book Friendly Educational Modal */}
      {lockedNoticeBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#2D1B36] border-4 border-amber-400 text-[#FDF6E3] rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative flex flex-col gap-4">
            <div className="flex items-center gap-3 border-b border-amber-400/30 pb-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-2xl shrink-0">
                🔒
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  Curriculum Notice
                </span>
                <h3 className="text-xl font-serif font-black text-amber-300">
                  {lockedNoticeBook.title} is Locked for Now
                </h3>
              </div>
            </div>

            <div className="bg-[#4A2D55]/60 border border-[#6D427D] rounded-2xl p-4 text-sm leading-relaxed text-[#FDF6E3]/90 flex flex-col gap-2">
              <p className="font-bold text-amber-200 flex items-center gap-1.5">
                <span>🧠</span> Why are Roald Dahl books locked?
              </p>
              <p className="text-xs sm:text-sm text-[#FDF6E3]/85">
                Kids frequently memorise and repeat the questions and story answers from these books! To encourage true active reading, fresh comprehension, and vocabulary discovery, Roald Dahl titles are locked for now.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-emerald-300 mt-1">
                ✨ Explore our 3 newly added children's classics (8 chapters each with vocabulary & comprehension questions):
              </p>
            </div>

            {/* Direct Quick-Jump to Unlocked Classics */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300">
                Choose an Active Unlocked Classic:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {unlockedBooks.map((unlocked) => (
                  <button
                    key={unlocked.id}
                    onClick={() => {
                      playClickSound();
                      setSelectedBookId(unlocked.id);
                      setLockedNoticeBook(null);
                    }}
                    className="bg-[#4A2D55] hover:bg-[#6D427D] border-2 border-emerald-400/60 hover:border-emerald-300 p-3 rounded-2xl text-left cursor-pointer transition-all flex flex-col items-center text-center gap-1 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {unlocked.themeIcon}
                    </span>
                    <span className="text-xs font-black text-[#FFD700] line-clamp-1">
                      {unlocked.title}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-300 uppercase">
                      8 Chaps • Start →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-[#4A2D55]">
              <button
                onClick={() => {
                  playClickSound();
                  setLockedNoticeBook(null);
                }}
                className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-6 py-2.5 rounded-xl text-xs uppercase cursor-pointer transition-all shadow-md"
              >
                Got It, Explore Active Classics
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
