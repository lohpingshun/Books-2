import React, { useState, useEffect, useRef } from "react";
import { UserProfile } from "../types";
import { LUCKY_SPIN_PRIZES } from "../data/koobitsData";
import { playCoinSound, playSuccessSound, playWrongSound, playMagicSparkleSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Gamepad2, ArrowLeft, RotateCw, Trophy, Play, Award } from "lucide-react";
import confetti from "canvas-confetti";

interface KoobitsArcadeProps {
  profile: UserProfile;
  onUpdateProfile: (updated: Partial<UserProfile>) => void;
  onBack: () => void;
}

export const KoobitsArcade: React.FC<KoobitsArcadeProps> = ({
  profile,
  onUpdateProfile,
  onBack,
}) => {
  // Selected game: 'menu' | 'candy_catcher' | 'word_rush' | 'lucky_wheel'
  const [activeGame, setActiveGame] = useState<"menu" | "candy_catcher" | "word_rush" | "lucky_wheel">("menu");

  // --- GAME 1: WONKA CANDY CATCHER ---
  const [catcherScore, setCatcherScore] = useState(0);
  const [catcherTimeLeft, setCatcherTimeLeft] = useState(30);
  const [catcherPlaying, setCatcherPlaying] = useState(false);
  const [basketPos, setBasketPos] = useState(50); // percentage 0-100
  const [fallingItems, setFallingItems] = useState<
    { id: number; x: number; y: number; type: "chocolate" | "ticket" | "cabbage"; emoji: string; points: number }[]
  >([]);

  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);

  const startCandyCatcher = () => {
    setCatcherScore(0);
    setCatcherTimeLeft(30);
    setCatcherPlaying(true);
    setBasketPos(50);
    setFallingItems([]);
  };

  useEffect(() => {
    if (!catcherPlaying) return;

    const timer = setInterval(() => {
      setCatcherTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endCandyCatcher();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Spawning & Falling loop
    gameLoopRef.current = setInterval(() => {
      setFallingItems((prev) => {
        // Drop existing items
        const updated = prev
          .map((item) => ({ ...item, y: item.y + 6 }))
          .filter((item) => item.y < 100);

        // Spawn new item randomly
        if (Math.random() > 0.4) {
          const rand = Math.random();
          let type: "chocolate" | "ticket" | "cabbage" = "chocolate";
          let emoji = "🍫";
          let points = 10;

          if (rand > 0.85) {
            type = "ticket";
            emoji = "🎫";
            points = 50;
          } else if (rand < 0.25) {
            type = "cabbage";
            emoji = "🥬";
            points = -10;
          }

          updated.push({
            id: Date.now() + Math.random(),
            x: Math.floor(Math.random() * 85) + 5,
            y: 0,
            type,
            emoji,
            points,
          });
        }

        // Check collision with basket at y ~ 85-95
        updated.forEach((item) => {
          if (item.y >= 80 && item.y <= 95) {
            if (Math.abs(item.x - basketPos) < 15) {
              // Caught!
              if (item.points > 0) {
                playCoinSound();
                setCatcherScore((s) => s + item.points);
              } else {
                playWrongSound();
                setCatcherScore((s) => Math.max(0, s + item.points));
              }
              item.y = 200; // remove
            }
          }
        });

        return updated.filter((i) => i.y < 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [catcherPlaying, basketPos]);

  const endCandyCatcher = () => {
    setCatcherPlaying(false);
    playSuccessSound();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const earnedKP = Math.max(20, Math.floor(catcherScore * 0.8));
    onUpdateProfile({
      kokoPoints: profile.kokoPoints + earnedKP,
    });
  };

  // Keyboard controls for basket
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!catcherPlaying) return;
      if (e.key === "ArrowLeft") {
        setBasketPos((p) => Math.max(5, p - 8));
      } else if (e.key === "ArrowRight") {
        setBasketPos((p) => Math.min(95, p + 8));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [catcherPlaying]);

  // --- GAME 3: DAILY LUCKY WHEEL ---
  const [spinning, setSpinning] = useState(false);
  const [wheelResult, setWheelResult] = useState<(typeof LUCKY_SPIN_PRIZES)[0] | null>(null);

  const handleSpinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    playMagicSparkleSound();

    setTimeout(() => {
      const prizeIndex = Math.floor(Math.random() * LUCKY_SPIN_PRIZES.length);
      const prize = LUCKY_SPIN_PRIZES[prizeIndex];
      setWheelResult(prize);
      setSpinning(false);
      playSuccessSound();
      confetti({
        particleCount: 70,
        spread: 80,
      });

      onUpdateProfile({
        kokoPoints: profile.kokoPoints + (prize.points || 0),
        goldenTickets: profile.goldenTickets + (prize.tickets || 0),
        petExp: profile.petExp + (prize.petExp || 0),
      });
    }, 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 py-2 px-3 sm:px-6 text-[#FDF6E3]">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#4A2D55] p-4 rounded-[28px] shadow-xl border-2 border-[#6D427D]">
        <button
          onClick={activeGame === "menu" ? onBack : () => setActiveGame("menu")}
          className="flex items-center gap-2 text-xs font-black text-[#FDF6E3] bg-[#2D1B36] hover:bg-[#6D427D] px-4 py-2 rounded-xl cursor-pointer transition-all border border-[#6D427D]"
        >
          <ArrowLeft className="w-4 h-4" /> {activeGame === "menu" ? "Back to Bookshelf" : "Arcade Menu"}
        </button>
        <div className="flex items-center gap-2 bg-[#2D1B36] px-4 py-1.5 rounded-full border border-[#6D427D]">
          <Gamepad2 className="w-4 h-4 text-[#FFD700]" />
          <span className="text-xs font-black text-[#FFD700]">KooBits Reading Arcade</span>
        </div>
        <div className="bg-[#FFCC33] px-3.5 py-1.5 rounded-xl text-xs font-black text-[#2D1B36] shadow-xs">
          🪙 {profile.kokoPoints} KP
        </div>
      </div>

      {/* ARCADE MENU */}
      {activeGame === "menu" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Game 1: Wonka Candy Catcher */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#FDF6E3] text-[#2D1B36] rounded-[32px] p-6 sm:p-8 shadow-2xl flex flex-col justify-between gap-6 border-4 border-[#FFD700]"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="bg-[#E74C3C] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  Action Arcade
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#2D1B36] mt-2">Wonka's Golden Candy Rush</h3>
                <p className="text-xs text-[#2D1B36]/80 font-medium mt-1">
                  Catch falling Wonka bars and Golden Tickets in Charlie's basket!
                </p>
              </div>
              <span className="text-5xl">🍫</span>
            </div>

            <button
              onClick={() => {
                setActiveGame("candy_catcher");
                startCandyCatcher();
              }}
              className="w-full bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-sm py-3.5 rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
            >
              <Play className="w-4 h-4 fill-current text-[#FFCC33]" /> Play Candy Rush!
            </button>
          </motion.div>

          {/* Game 2: Wonka Lucky Wheel */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#4A2D55] text-[#FDF6E3] rounded-[32px] p-6 sm:p-8 shadow-2xl flex flex-col justify-between gap-6 border-4 border-[#FFD700]"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="bg-[#FFCC33] text-[#2D1B36] text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  Daily Fortune
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#FFD700] mt-2">Wonka's Wheel of Fortune</h3>
                <p className="text-xs text-[#FDF6E3]/80 font-medium mt-1">
                  Spin the lucky wheel for bonus KoKo Points, Golden Tickets, and Pet Snacks!
                </p>
              </div>
              <span className="text-5xl">🎡</span>
            </div>

            <button
              onClick={() => setActiveGame("lucky_wheel")}
              className="w-full bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] font-black text-sm py-3.5 rounded-2xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
            >
              <RotateCw className="w-4 h-4 text-[#2D1B36]" /> Spin the Lucky Wheel!
            </button>
          </motion.div>
        </div>
      )}

      {/* GAME 1 PLAY SCREEN */}
      {activeGame === "candy_catcher" && (
        <div className="w-full bg-[#2D1B36] rounded-[32px] p-5 sm:p-7 shadow-2xl border-4 border-[#FFD700] flex flex-col items-center gap-4">
          <div className="flex items-center justify-between w-full text-[#FDF6E3] text-xs font-black px-2">
            <span className="bg-[#4A2D55] px-3.5 py-1.5 rounded-xl border border-[#6D427D]">Score: {catcherScore} pts</span>
            <span className="bg-[#E74C3C] text-white px-3.5 py-1.5 rounded-xl">Time Left: {catcherTimeLeft}s</span>
          </div>

          {/* Canvas Arena */}
          <div className="relative w-full h-80 sm:h-96 bg-gradient-to-b from-[#4A2D55] via-[#2D1B36] to-[#1a0f20] rounded-2xl overflow-hidden border-2 border-[#6D427D]">
            {/* Falling Sweets */}
            {fallingItems.map((item) => (
              <div
                key={item.id}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                className="absolute text-2xl sm:text-3xl -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
              >
                {item.emoji}
              </div>
            ))}

            {/* Charlie's Basket */}
            <div
              style={{ left: `${basketPos}%` }}
              className="absolute bottom-4 -translate-x-1/2 flex flex-col items-center transition-all duration-75"
            >
              <span className="text-2xl">👦</span>
              <div className="w-16 h-8 bg-[#FFB347] rounded-b-xl border-2 border-[#FFCC33] shadow-lg flex items-center justify-center text-xs font-black text-[#2D1B36]">
                🧺
              </div>
            </div>
          </div>

          {/* On-screen touch controls */}
          <div className="flex gap-4 w-full max-w-xs">
            <button
              onClick={() => setBasketPos((p) => Math.max(5, p - 12))}
              className="flex-1 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] font-black py-3.5 rounded-2xl text-lg shadow-xl cursor-pointer active:scale-95 transition-all"
            >
              ◀ LEFT
            </button>
            <button
              onClick={() => setBasketPos((p) => Math.min(95, p + 12))}
              className="flex-1 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] font-black py-3.5 rounded-2xl text-lg shadow-xl cursor-pointer active:scale-95 transition-all"
            >
              RIGHT ▶
            </button>
          </div>

          {!catcherPlaying && (
            <button
              onClick={startCandyCatcher}
              className="px-8 py-3 bg-[#FFD700] text-[#2D1B36] font-black rounded-2xl cursor-pointer hover:bg-white transition-all shadow-lg"
            >
              Play Again!
            </button>
          )}
        </div>
      )}

      {/* GAME 2 PLAY SCREEN: LUCKY WHEEL */}
      {activeGame === "lucky_wheel" && (
        <div className="w-full bg-[#FDF6E3] text-[#2D1B36] rounded-[32px] p-6 sm:p-10 shadow-2xl border-4 border-[#FFD700] flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-xs font-black uppercase text-[#E74C3C]">KooBits Daily Fortune</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#2D1B36] mt-1">Wonka's Chocolate Wheel</h3>
          </div>

          {/* Wheel Graphic */}
          <motion.div
            animate={spinning ? { rotate: [0, 1440, 1800] } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-56 h-56 rounded-full border-8 border-[#FFD700] shadow-2xl bg-gradient-to-tr from-[#FFB347] via-[#4A2D55] to-[#E74C3C] flex items-center justify-center text-5xl relative"
          >
            <div className="absolute inset-2 rounded-full border-4 border-dashed border-white/50" />
            <span>🎡</span>
          </motion.div>

          <button
            onClick={handleSpinWheel}
            disabled={spinning}
            className="px-10 py-4 bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] font-black text-sm sm:text-base rounded-2xl shadow-xl cursor-pointer transition-all disabled:opacity-50 hover:scale-102"
          >
            {spinning ? "Spinning..." : "Spin the Wheel! ✨"}
          </button>

          {wheelResult && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#A7D49B] border-2 border-[#80C272] text-[#2D1B36] p-4 rounded-2xl flex items-center gap-3 font-black text-sm shadow-md"
            >
              <span className="text-2xl">{wheelResult.icon}</span>
              <span>You won: {wheelResult.label}! Rewards added to your wallet!</span>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};
