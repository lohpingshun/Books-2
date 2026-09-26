import React from "react";
import { UserProfile, AgeTier } from "../types";
import { playClickSound, playCoinSound } from "../utils/audio";
import {
  BookOpen,
  Sparkles,
  Flame,
  ShoppingBag,
  Gamepad2,
  Trophy,
  Bot,
  Volume2,
  VolumeX,
  RotateCcw,
} from "lucide-react";

interface NavbarProps {
  profile: UserProfile;
  activeView: "bookshelf" | "rewards" | "arcade";
  onChangeView: (view: "bookshelf" | "rewards" | "arcade") => void;
  onChangeAge: (age: AgeTier) => void;
  onOpenBuddy: () => void;
  onOpenLeaderboard: () => void;
  onToggleSound: () => void;
  onOpenReset?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeView,
  onChangeView,
  onChangeAge,
  onOpenBuddy,
  onOpenLeaderboard,
  onToggleSound,
  onOpenReset,
}) => {
  const ageTiers: { id: AgeTier; label: string; icon: string }[] = [
    { id: "5-6", label: "Ages 5-6", icon: "🧸" },
    { id: "7-8", label: "Ages 7-8", icon: "🎒" },
    { id: "9+", label: "Ages 9+", icon: "🎩" },
  ];

  return (
    <header className="w-full bg-[#2D1B36]/95 backdrop-blur-md border-b-2 border-[#4A2D55] sticky top-0 z-40 shadow-lg text-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Brand & Identity */}
        <div
          onClick={() => onChangeView("bookshelf")}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FFB347] border-3 border-[#FFCC33] flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-all shrink-0">
            🦁
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-[#FFD700]">
                KoKo<span className="text-[#FFB347]">Read</span>
              </span>
              <span className="bg-[#E74C3C] text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full shadow-xs">
                Classics Quest
              </span>
            </div>
            <p className="text-[11px] font-bold text-[#FDF6E3]/70 uppercase tracking-wider hidden sm:block">
              Level {profile.petLevel} Reader • Age {profile.ageGroup}
            </p>
          </div>
        </div>

        {/* Age Tier Bento Switcher */}
        <div className="flex items-center bg-[#4A2D55] p-1 rounded-2xl border-2 border-[#6D427D]">
          {ageTiers.map((tier) => {
            const isSelected = profile.ageGroup === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => {
                  playClickSound();
                  onChangeAge(tier.id);
                }}
                className={`px-3 py-1.5 rounded-xl font-black text-xs cursor-pointer transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#FFCC33] text-[#2D1B36] shadow-md scale-102"
                    : "text-[#FDF6E3]/80 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{tier.icon}</span>
                <span>{tier.id}</span>
              </button>
            );
          })}
        </div>

        {/* Gamification Bento Stats */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily Streak */}
          <div className="flex items-center gap-1.5 bg-[#4A2D55] border-2 border-[#6D427D] px-3.5 py-1.5 rounded-2xl text-xs font-black text-[#FDF6E3] shadow-xs">
            <span className="text-sm">🔥</span>
            <span>{profile.streakDays}d Streak</span>
          </div>

          {/* KoKo Points */}
          <div className="flex items-center gap-1.5 bg-[#4A2D55] border-2 border-[#6D427D] px-3.5 py-1.5 rounded-2xl text-xs font-black text-[#FFD700] shadow-xs">
            <span>🪙</span>
            <span>{profile.kokoPoints} KP</span>
          </div>

          {/* Golden Tickets */}
          <div className="hidden md:flex items-center gap-1.5 bg-[#4A2D55] border-2 border-[#6D427D] px-3.5 py-1.5 rounded-2xl text-xs font-black text-[#FFCC33] shadow-xs">
            <span>🎫</span>
            <span>{profile.goldenTickets}</span>
          </div>
        </div>

        {/* Navigation Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Bookshelf Tab */}
          <button
            onClick={() => {
              playClickSound();
              onChangeView("bookshelf");
            }}
            className={`px-3 py-2 rounded-2xl font-black text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
              activeView === "bookshelf"
                ? "bg-[#FFCC33] text-[#2D1B36] shadow-md"
                : "bg-[#4A2D55] text-[#FDF6E3] border border-[#6D427D] hover:bg-[#6D427D]"
            }`}
            title="Bento Bookshelf"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Quests</span>
          </button>

          {/* KooBits Reward Vault */}
          <button
            onClick={() => {
              playCoinSound();
              onChangeView("rewards");
            }}
            className={`px-3 py-2 rounded-2xl font-black text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
              activeView === "rewards"
                ? "bg-[#FFCC33] text-[#2D1B36] shadow-md"
                : "bg-[#4A2D55] text-[#FDF6E3] border border-[#6D427D] hover:bg-[#6D427D]"
            }`}
            title="KooBits Reward Hall"
          >
            <ShoppingBag className="w-4 h-4 text-[#FFB347]" />
            <span className="hidden sm:inline">Vault</span>
          </button>

          {/* Arcade */}
          <button
            onClick={() => {
              playClickSound();
              onChangeView("arcade");
            }}
            className={`px-3 py-2 rounded-2xl font-black text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
              activeView === "arcade"
                ? "bg-[#FFCC33] text-[#2D1B36] shadow-md"
                : "bg-[#4A2D55] text-[#FDF6E3] border border-[#6D427D] hover:bg-[#6D427D]"
            }`}
            title="KooBits Arcade"
          >
            <Gamepad2 className="w-4 h-4 text-[#A7D49B]" />
            <span className="hidden sm:inline">Arcade</span>
          </button>

          {/* Leaderboard */}
          <button
            onClick={() => {
              playClickSound();
              onOpenLeaderboard();
            }}
            className="p-2 bg-[#4A2D55] text-[#FDF6E3] border border-[#6D427D] hover:bg-[#6D427D] rounded-2xl cursor-pointer"
            title="Hall of Fame"
          >
            <Trophy className="w-4 h-4 text-[#FFD700]" />
          </button>

          {/* AI Book Buddy */}
          <button
            onClick={() => {
              playClickSound();
              onOpenBuddy();
            }}
            className="flex items-center gap-1.5 bg-[#E74C3C] hover:bg-[#c0392b] text-white px-3.5 py-2 rounded-2xl font-black text-xs shadow-md cursor-pointer transition-all active:scale-95"
            title="Chat with Willy Wonka & Matilda"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden md:inline">AI Buddy</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-2 text-[#FDF6E3]/70 hover:text-white bg-[#4A2D55] border border-[#6D427D] rounded-2xl cursor-pointer"
            title={profile.soundEnabled ? "Sound On" : "Sound Off"}
          >
            {profile.soundEnabled ? <Volume2 className="w-4 h-4 text-[#FFD700]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Reset Stats to 0 */}
          {onOpenReset && (
            <button
              onClick={() => {
                playClickSound();
                onOpenReset();
              }}
              className="p-2 text-rose-300 hover:text-white hover:bg-rose-900/60 bg-[#4A2D55] border border-[#6D427D] rounded-2xl cursor-pointer transition-all"
              title="Reset Points & Reading to 0"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
