import React, { useState } from "react";
import { UserProfile, PetEvolution, KooBitsShopItem } from "../types";
import { PET_EVOLUTIONS, KOOBITS_SHOP_ITEMS, KOOBITS_BADGES } from "../data/koobitsData";
import { playSuccessSound, playCoinSound, playWrongSound, playMagicSparkleSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  ShoppingBag,
  Sparkles,
  Award,
  Flame,
  CheckCircle,
  Gift,
  Printer,
  ChevronRight,
  Heart,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";

interface RewardHallProps {
  profile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onOpenCertificate: () => void;
  onOpenReset?: () => void;
}

export const RewardHall: React.FC<RewardHallProps> = ({
  profile,
  onUpdateProfile,
  onOpenCertificate,
  onOpenReset,
}) => {
  // Tabs: 'shop' | 'pet' | 'badges'
  const [tab, setTab] = useState<"pet" | "shop" | "badges">("pet");

  // Pet status
  const currentPet = PET_EVOLUTIONS.find((p) => p.id === profile.currentPetId) || PET_EVOLUTIONS[0];

  const handleFeedPet = () => {
    if (profile.kokoPoints < 50) {
      playWrongSound();
      return;
    }

    playMagicSparkleSound();
    const newExp = profile.petExp + 50;
    const newPoints = profile.kokoPoints - 50;

    let newStage = currentPet.stage;
    let newPetId = currentPet.id;

    if (newExp >= currentPet.requiredExp && currentPet.stage < currentPet.maxStage) {
      // Pet Evolves!
      playSuccessSound();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
      });
      const nextPet = PET_EVOLUTIONS[currentPet.stage];
      if (nextPet) {
        newStage = nextPet.stage;
        newPetId = nextPet.id;
      }
    }

    onUpdateProfile({
      kokoPoints: newPoints,
      petExp: newExp,
      petLevel: newStage,
      currentPetId: newPetId,
    });
  };

  const handleBuyItem = (item: KooBitsShopItem) => {
    if (profile.unlockedItems.includes(item.id)) return;

    if (profile.kokoPoints < item.costKP) {
      playWrongSound();
      return;
    }

    if (item.costTickets && profile.goldenTickets < item.costTickets) {
      playWrongSound();
      return;
    }

    playSuccessSound();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });

    onUpdateProfile({
      kokoPoints: profile.kokoPoints - item.costKP,
      goldenTickets: profile.goldenTickets - (item.costTickets || 0),
      unlockedItems: [...profile.unlockedItems, item.id],
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 py-2 px-2 sm:px-4 text-[#FDF6E3]">
      {/* KooBits Rewards Bento Header */}
      <div className="bg-[#4A2D55]/70 border-2 border-[#6D427D] rounded-[32px] p-6 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFB347] border-4 border-[#FFCC33] rounded-3xl flex items-center justify-center text-4xl shadow-lg shrink-0">
            {currentPet.emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="bg-[#E74C3C] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                KooBits Reward Hall
              </span>
              <span className="flex items-center gap-1 text-[11px] font-black bg-[#2D1B36] border border-[#6D427D] px-2.5 py-0.5 rounded-full text-[#FFD700]">
                <Flame className="w-3.5 h-3.5 text-[#FFCC33]" /> {profile.streakDays} Day Streak
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#FFD700] mt-1">KoKo Rewards & Pet Nursery</h2>
            <p className="text-xs sm:text-sm text-[#FDF6E3]/80 font-medium">
              Read 15 minutes a day, earn KoKo Points, and evolve your Roald Dahl pet companion!
            </p>
          </div>
        </div>

        {/* Currency Bento Pills */}
        <div className="flex sm:flex-col gap-2.5 shrink-0">
          <div className="bg-[#FFCC33] text-[#2D1B36] px-5 py-2 rounded-2xl font-black text-sm shadow-md flex items-center gap-2 border-2 border-[#FFD700]">
            <span>🪙</span>
            <span>{profile.kokoPoints} KP</span>
          </div>
          <div className="bg-[#2D1B36] text-[#FFD700] px-5 py-2 rounded-2xl font-black text-sm shadow-md flex items-center gap-2 border-2 border-[#6D427D]">
            <span>🎫</span>
            <span>{profile.goldenTickets} Golden Tickets</span>
          </div>
        </div>
      </div>

      {/* Bento Tab Switcher */}
      <div className="flex items-center justify-center gap-2 bg-[#4A2D55] p-1.5 rounded-2xl border-2 border-[#6D427D]">
        <button
          onClick={() => {
            playCoinSound();
            setTab("pet");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
            tab === "pet"
              ? "bg-[#FFCC33] text-[#2D1B36] shadow-md scale-102"
              : "text-[#FDF6E3]/80 hover:text-white hover:bg-white/5"
          }`}
        >
          <span>🐾 Book Pet Nursery</span>
        </button>
        <button
          onClick={() => {
            playCoinSound();
            setTab("shop");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
            tab === "shop"
              ? "bg-[#FFCC33] text-[#2D1B36] shadow-md scale-102"
              : "text-[#FDF6E3]/80 hover:text-white hover:bg-white/5"
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>KoKo Shop</span>
        </button>
        <button
          onClick={() => {
            playCoinSound();
            setTab("badges");
          }}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
            tab === "badges"
              ? "bg-[#FFCC33] text-[#2D1B36] shadow-md scale-102"
              : "text-[#FDF6E3]/80 hover:text-white hover:bg-white/5"
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Trophies & Badges</span>
        </button>
      </div>

      {/* TAB 1: PET NURSERY */}
      {tab === "pet" && (
        <div className="bg-[#FDF6E3] text-[#2D1B36] rounded-[32px] p-6 sm:p-8 shadow-2xl border-4 border-[#FFD700] flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/70 p-6 sm:p-8 rounded-[28px] border-2 border-[#6D427D]/20 shadow-sm">
            {/* Pet Visual Display */}
            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 bg-[#FFB347] rounded-3xl shadow-xl border-4 border-[#FFCC33] flex items-center justify-center text-6xl mb-3"
              >
                {currentPet.emoji}
              </motion.div>
              <span className="text-[11px] font-black uppercase text-[#E74C3C] tracking-wider">
                Stage {currentPet.stage} of {currentPet.maxStage}
              </span>
              <h3 className="text-2xl font-serif font-black text-[#2D1B36]">{currentPet.name}</h3>
              <p className="text-xs font-bold text-[#2D1B36]/70 mt-0.5">{currentPet.title}</p>
            </div>

            {/* Pet EXP & Feeding Action */}
            <div className="flex-1 flex flex-col gap-4 max-w-md">
              <p className="text-xs text-[#2D1B36] leading-relaxed font-serif italic bg-[#FFCC33]/20 p-4 rounded-2xl border border-[#FFCC33]">
                "{currentPet.description}"
              </p>

              {/* EXP Bar */}
              <div className="flex flex-col gap-1.5 font-sans">
                <div className="flex justify-between text-xs font-black text-[#2D1B36]">
                  <span>Pet Evolution EXP</span>
                  <span>
                    {profile.petExp} / {currentPet.requiredExp} EXP
                  </span>
                </div>
                <div className="w-full h-4 bg-[#E5E5E5] rounded-full overflow-hidden border border-black/10 shadow-inner p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFCC33] to-[#E74C3C] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (profile.petExp / currentPet.requiredExp) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Feed Button */}
              <button
                onClick={handleFeedPet}
                className="flex items-center justify-center gap-2 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-sm py-3.5 rounded-2xl shadow-xl cursor-pointer transition-all hover:scale-102 active:scale-98"
              >
                <Heart className="w-4 h-4 text-[#E74C3C] fill-current" />
                <span>Feed Sweet Candy Snack (-50 KP)</span>
              </button>
            </div>
          </div>

          {/* Evolution Roadmap */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black text-[#2D1B36]/60 uppercase tracking-wider">
              Pet Evolution Stages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PET_EVOLUTIONS.map((pet) => {
                const isUnlocked = profile.petLevel >= pet.stage;
                return (
                  <div
                    key={pet.id}
                    className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-1.5 transition-all ${
                      isUnlocked
                        ? "bg-[#A7D49B] border-[#80C272] text-[#2D1B36] shadow-sm"
                        : "bg-black/5 border-black/10 opacity-50 text-[#2D1B36]/40"
                    }`}
                  >
                    <span className="text-3xl">{pet.emoji}</span>
                    <span className="font-serif font-black text-sm">{pet.name}</span>
                    <span className="text-[10px] font-black text-[#2D1B36]/80">Stage {pet.stage}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: KOKO SHOP */}
      {tab === "shop" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KOOBITS_SHOP_ITEMS.map((item) => {
            const isOwned = profile.unlockedItems.includes(item.id);
            const canAfford =
              profile.kokoPoints >= item.costKP &&
              (!item.costTickets || profile.goldenTickets >= item.costTickets);

            return (
              <div
                key={item.id}
                className="bg-[#FDF6E3] text-[#2D1B36] rounded-[28px] p-5 shadow-xl border-3 border-[#FFD700] flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFCC33]/40 border-2 border-[#FFCC33] flex items-center justify-center text-3xl shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#E74C3C] px-2.5 py-0.5 rounded-full">
                      {item.rarity}
                    </span>
                    <h4 className="font-serif font-black text-base mt-1">{item.name}</h4>
                    <p className="text-xs text-[#2D1B36]/80 font-medium mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-black/10 font-sans">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#2D1B36]">
                    <span>🪙 {item.costKP} KP</span>
                    {item.costTickets && <span className="text-[#E74C3C]">+ 🎫 {item.costTickets}</span>}
                  </div>

                  {isOwned ? (
                    <span className="flex items-center gap-1 text-xs font-black text-[#2D1B36] bg-[#A7D49B] px-3 py-1.5 rounded-xl">
                      <CheckCircle className="w-3.5 h-3.5" /> Equipped
                    </span>
                  ) : (
                    <button
                      onClick={() => handleBuyItem(item)}
                      disabled={!canAfford}
                      className={`px-4 py-1.5 rounded-xl font-black text-xs shadow-xs cursor-pointer transition-all ${
                        canAfford
                          ? "bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] active:scale-95"
                          : "bg-black/10 text-black/40 cursor-not-allowed"
                      }`}
                    >
                      Unlock
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: TROPHIES & BADGES */}
      {tab === "badges" && (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KOOBITS_BADGES.map((badge) => {
              const isUnlocked = profile.badges.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`rounded-[28px] p-5 border-3 flex items-start gap-3.5 transition-all ${
                    isUnlocked
                      ? "bg-[#FDF6E3] text-[#2D1B36] border-[#FFD700] shadow-xl"
                      : "bg-[#4A2D55]/50 border-[#6D427D] opacity-60 text-[#FDF6E3]/60"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-xs ${
                      isUnlocked ? "bg-[#FFCC33] text-[#2D1B36] border-2 border-[#FFD700]" : "bg-black/20 text-white/40"
                    }`}
                  >
                    {badge.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#E74C3C]">
                      {isUnlocked ? "Unlocked ✓" : "Locked Milestone"}
                    </span>
                    <h4 className="font-serif font-black text-base mt-0.5">{badge.name}</h4>
                    <p className="text-xs font-medium mt-1 leading-snug">{badge.description}</p>
                    <span className="text-[10px] font-black mt-1 inline-block opacity-70">
                      Goal: {badge.requirement}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate of Reading Mastery Banner */}
          <div className="bg-[#4A2D55] rounded-[32px] p-6 sm:p-8 text-[#FDF6E3] flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-[#6D427D] shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-4xl">📜</span>
              <div>
                <h4 className="text-base sm:text-lg font-serif font-black text-[#FFD700]">Official Roald Dahl Reading Certificate</h4>
                <p className="text-xs text-[#FDF6E3]/80 font-medium">
                  Celebrate your 15-minute daily reading achievements with a printable certificate!
                </p>
              </div>
            </div>
            <button
              onClick={onOpenCertificate}
              className="flex items-center gap-2 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] font-black text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xl cursor-pointer transition-all active:scale-95 shrink-0"
            >
              <Printer className="w-4 h-4" /> View & Print Certificate
            </button>
          </div>

          {/* Reset Stats to Zero Banner */}
          {onOpenReset && (
            <div className="bg-[#2D1B36] rounded-[32px] p-5 sm:p-6 text-[#FDF6E3] flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-rose-900/60 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-900/50 flex items-center justify-center text-rose-400 shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-serif font-black text-rose-300">Reset Points & Reading to Zero</h4>
                  <p className="text-xs text-[#FDF6E3]/70 font-medium">
                    Want to start fresh from Day 1? Clear points, reading minutes, and completed quests back to 0.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenReset}
                className="flex items-center gap-2 bg-rose-700/80 hover:bg-rose-600 text-white font-black text-xs px-5 py-2.5 rounded-2xl cursor-pointer transition-all active:scale-95 shrink-0 border border-rose-500/50"
              >
                <RotateCcw className="w-4 h-4" /> Reset Stats to 0
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
