import React, { useState } from "react";
import { VisualScene, InteractiveHotspot } from "../types";
import { playMagicSparkleSound, playCoinSound, playSuccessSound, playClickSound } from "../utils/audio";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Info, Volume2 } from "lucide-react";

interface VisualStorySceneProps {
  scene: VisualScene;
  ageGroup: "5-6" | "7-8" | "9+";
  onHotspotClick?: (hotspot: InteractiveHotspot) => void;
}

export const VisualStoryScene: React.FC<VisualStorySceneProps> = ({
  scene,
  ageGroup,
  onHotspotClick,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<InteractiveHotspot | null>(null);
  const [sparkleActive, setSparkleActive] = useState(false);

  const handleHotspot = (hotspot: InteractiveHotspot) => {
    if (hotspot.soundEffect === "coin") playCoinSound();
    else if (hotspot.soundEffect === "success") playSuccessSound();
    else if (hotspot.soundEffect === "magic") playMagicSparkleSound();
    else playClickSound();

    setActiveHotspot(hotspot);
    setSparkleActive(true);
    setTimeout(() => setSparkleActive(false), 800);

    if (onHotspotClick) onHotspotClick(hotspot);
  };

  // Render rich thematic SVG visual art based on scene illustration type
  const renderArt = () => {
    switch (scene.illustrationType) {
      case "wonka_gates":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#2D1B36] via-[#4A2D55] to-[#1a0f20] rounded-[24px] overflow-hidden flex items-center justify-center shadow-2xl border-2 border-[#FFD700]">
            {/* Snowy sky & stars */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#FDF6E3_1px,transparent_1px)] [background-size:16px_16px]" />
            {/* Factory silhouette with chimney smoke */}
            <svg className="absolute bottom-0 w-full h-44 text-[#1a0f20]/90" viewBox="0 0 400 150" fill="currentColor">
              <rect x="20" y="50" width="80" height="100" />
              <rect x="40" y="20" width="20" height="30" />
              <polygon points="120,40 180,40 190,150 110,150" />
              <rect x="140" y="10" width="20" height="30" />
              <rect x="220" y="30" width="100" height="120" />
              <polygon points="340,60 380,80 380,150 330,150" />
            </svg>
            {/* Wrought Iron Gates */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl animate-bounce mb-2">🍫</div>
              <div className="px-5 py-2.5 bg-[#FFCC33] text-[#2D1B36] font-black rounded-2xl shadow-xl border-2 border-[#FFD700] tracking-wider text-xs sm:text-sm uppercase text-center font-serif">
                Willy Wonka Chocolate Factory
              </div>
              <div className="text-xs text-[#FFD700] mt-2 font-black bg-[#2D1B36]/80 px-4 py-1.5 rounded-full border border-[#6D427D]">
                ✨ Tap glowing items to discover secrets!
              </div>
            </div>
          </div>
        );

      case "golden_ticket":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-r from-[#FFB347] via-[#FFCC33] to-[#FFB347] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-[#FFD700]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200/40 via-transparent to-black/20" />
            {/* Shimmering Golden Ticket */}
            <motion.div
              animate={{ rotate: [-1, 1, -1], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-sm bg-[#FDF6E3] text-[#2D1B36] p-4 sm:p-6 rounded-2xl border-4 border-[#2D1B36] shadow-2xl flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-between w-full border-b border-[#2D1B36]/20 pb-2 mb-2">
                <span className="text-xl">🌟</span>
                <span className="font-serif font-black tracking-widest text-xs uppercase text-[#2D1B36]">WONKA GOLDEN TICKET</span>
                <span className="text-xl">🌟</span>
              </div>
              <p className="text-xs font-serif font-black text-[#2D1B36] leading-snug">
                GREETINGS TO YOU, THE LUCKY FINDER OF THIS GOLDEN TICKET!
              </p>
              <div className="mt-3 flex items-center gap-2 bg-[#FFCC33] px-3.5 py-1 rounded-full text-[11px] font-black text-[#2D1B36] border border-[#FFD700]">
                <span>🎫 TICKET NO. 5 OF 5</span>
              </div>
            </motion.div>
          </div>
        );

      case "chocolate_waterfall":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#4A2D55] via-[#2D1B36] to-[#1a0f20] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-2 border-[#FFD700]">
            {/* Roaring Chocolate Flow */}
            <div className="absolute inset-0 opacity-75 flex justify-center">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-28 sm:w-36 h-full bg-gradient-to-b from-[#FFB347] via-[#99582a] to-[#432818] rounded-b-3xl shadow-2xl"
              />
            </div>
            {/* Mint sugar grass bank */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#A7D49B] to-[#80C272] flex items-center justify-around px-4 border-t-2 border-[#80C272]">
              <span className="text-2xl">🌱</span>
              <span className="text-2xl animate-pulse">🍭</span>
              <span className="text-2xl">🍬</span>
              <span className="text-2xl">🌱</span>
            </div>
            <div className="relative z-10 bg-[#2D1B36]/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-center border-2 border-[#FFD700]">
              <span className="text-xs font-serif font-black text-[#FFD700]">The Chocolate River & Waterfall</span>
              <p className="text-[11px] text-[#FDF6E3] mt-0.5">Warm, melted chocolate churned to airy perfection!</p>
            </div>
          </div>
        );

      case "inventing_room":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-r from-[#2D1B36] via-[#4A2D55] to-[#2D1B36] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-2 border-[#FFD700]">
            {/* Rainbow Steam Bubbles */}
            <div className="absolute inset-0 flex justify-around items-center opacity-75">
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 h-8 rounded-full bg-[#E74C3C]/50 blur-sm" />
              <motion.div animate={{ y: [10, -15, 10] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-12 h-12 rounded-full bg-[#FFD700]/50 blur-sm" />
              <motion.div animate={{ y: [-5, 12, -5] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-10 h-10 rounded-full bg-[#A7D49B]/50 blur-sm" />
            </div>
            <div className="relative z-10 flex flex-col items-center bg-[#2D1B36]/80 p-4 rounded-2xl backdrop-blur-sm border-2 border-[#6D427D]">
              <div className="flex gap-3 text-3xl mb-1">
                <span className="animate-spin" style={{ animationDuration: "6s" }}>🧪</span>
                <span className="animate-bounce">🍬</span>
                <span>🫕</span>
              </div>
              <span className="font-serif font-black text-xs text-[#FFD700] uppercase tracking-wider">Top-Secret Inventing Room</span>
              <p className="text-[11px] text-[#FDF6E3] mt-1">Everlasting Gobstoppers & 3-Course Dinner Gum</p>
            </div>
          </div>
        );

      case "matilda_library":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#FDF6E3] via-[#ffeedd] to-[#FDF6E3] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-[#4A2D55]">
            {/* Bookshelf Backdrop */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4A2D55_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2 mb-2"
              >
                <span className="text-4xl">📚</span>
                <span className="text-3xl">☕</span>
                <span className="text-4xl">📖</span>
              </motion.div>
              <div className="bg-[#2D1B36] text-[#FFD700] px-4 py-1.5 rounded-full font-black text-xs shadow-md border border-[#6D427D]">
                The Quiet Library Corner
              </div>
              <p className="text-xs text-[#2D1B36] font-serif italic mt-2 max-w-xs leading-relaxed">
                "The books transported her into new worlds and introduced her to amazing people."
              </p>
            </div>
          </div>
        );

      case "chalk_magic":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#1a0f20] via-[#2D1B36] to-[#4A2D55] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-2 border-[#FFD700]">
            {/* Blackboard */}
            <div className="relative z-10 w-full max-w-md bg-[#2D1B36] border-4 border-[#FFCC33] rounded-2xl p-4 shadow-2xl text-center">
              <div className="flex justify-between items-center text-xs text-[#FDF6E3]/60 border-b border-[#6D427D] pb-1 mb-2">
                <span>🏫 Crunchem Hall</span>
                <span className="text-[#FFD700] font-black">✨ Mind Power Active</span>
              </div>
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8], scale: [0.98, 1, 0.98] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-mono text-xs sm:text-sm text-[#FFCC33] font-black tracking-widest"
              >
                "AGATHA, GIVE MISS HONEY HER HOUSE!"
              </motion.div>
              {/* Floating Chalk */}
              <motion.div
                animate={{ x: [-20, 20, -20], y: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="inline-block mt-3 text-xl bg-[#4A2D55] px-3.5 py-1.5 rounded-full border border-[#FFD700] text-[#FFD700] text-xs font-black shadow-md"
              >
                🪄 Floating Chalk
              </motion.div>
            </div>
          </div>
        );

      case "miss_honey_cottage":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#A7D49B]/30 via-[#FDF6E3] to-[#FFCC33]/20 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-[#A7D49B]">
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="flex gap-2 text-3xl mb-2">
                <span>🏡</span>
                <span className="animate-bounce">🌸</span>
                <span>🍯</span>
                <span className="animate-pulse">🫖</span>
              </div>
              <div className="bg-[#2D1B36] text-[#A7D49B] px-4 py-1.5 rounded-full font-black text-xs shadow-md border border-[#80C272]">
                Miss Honey's Peaceful Cottage
              </div>
              <p className="text-xs text-[#2D1B36] font-serif italic mt-2">
                Brown bread, warm golden honey, and cozy tea conversations.
              </p>
            </div>
          </div>
        );

      case "great_glass_elevator":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-sky-900 via-indigo-900 to-purple-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-[#FFD700]">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:18px_18px]" />
            {/* Soaring Glass Elevator Cube */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white/20 backdrop-blur-md border-4 border-yellow-200 rounded-3xl p-5 text-center shadow-2xl flex flex-col items-center max-w-xs"
            >
              <div className="flex items-center justify-center gap-3 text-3xl mb-1">
                <span>🚀</span>
                <span>🎩</span>
                <span>✨</span>
              </div>
              <div className="bg-[#FFCC33] text-[#2D1B36] px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                The Great Glass Elevator
              </div>
              <p className="text-[11px] text-yellow-100 font-serif italic mt-1.5">
                Shooting Up and Out into the bright blue sky above the snowy town!
              </p>
            </motion.div>
          </div>
        );

      case "chokey_escape":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-emerald-950 via-slate-900 to-purple-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-emerald-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/40 backdrop-blur-md p-5 rounded-3xl border border-emerald-400/40">
              <div className="flex gap-3 text-3xl mb-1">
                <span>🕊️</span>
                <span>🏡</span>
                <span>📚</span>
              </div>
              <div className="bg-emerald-400 text-emerald-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                Freedom, Family & The Library Haven
              </div>
              <p className="text-[11px] text-emerald-100 font-serif italic mt-1.5">
                Justice prevails! Matilda and Miss Honey embrace a peaceful future full of books and love.
              </p>
            </div>
          </div>
        );

      case "elevator_orbit":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#0B0B1A] via-[#1A0B2E] to-[#2D0B4E] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-[#8B5CF6]">
            {/* Stars background */}
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(#C4B5FD_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white/10 backdrop-blur-md border-2 border-[#A78BFA] rounded-3xl p-5 text-center shadow-2xl flex flex-col items-center max-w-xs"
            >
              <div className="flex items-center gap-3 text-4xl mb-2">
                <span>🚀</span>
                <span>🌍</span>
                <span>✨</span>
              </div>
              <div className="bg-[#8B5CF6] text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Zero Gravity Orbit
              </div>
              <p className="text-[11px] text-[#DDD6FE] font-serif italic mt-1.5">
                Grandma Georgina & Grandpa Joe floating gracefully across the glass ceiling!
              </p>
            </motion.div>
          </div>
        );

      case "space_hotel":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#090D16] via-[#1E1B4B] to-[#312E81] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-cyan-400">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#67E8F9_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 flex flex-col items-center text-center max-w-sm bg-[#0F172A]/80 backdrop-blur-md p-5 rounded-3xl border border-cyan-400/50">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="text-4xl mb-2">
                🛸
              </motion.div>
              <div className="bg-cyan-400 text-[#0F172A] px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                Space Hotel "U.S.A."
              </div>
              <p className="text-[11px] text-cyan-100 font-serif italic mt-1.5">
                Floating hotel suites, silver carpets, and the giant Commuter Capsule!
              </p>
            </div>
          </div>
        );

      case "knid_encounter":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#180828] via-[#2A0845] to-[#0A0012] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-red-500">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-red-500/50">
              <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 1.8, repeat: Infinity }} className="flex gap-2 text-4xl mb-2">
                <span>👾</span>
                <span>🔴</span>
                <span>👁️</span>
              </motion.div>
              <div className="bg-red-600 text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Vermicious Knid Swarm
              </div>
              <p className="text-[11px] text-red-200 font-serif italic mt-1.5">
                Shape-shifting alien terror from Planet Vermes! Battering against the reinforced glass!
              </p>
            </div>
          </div>
        );

      case "minusland":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#020617] rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-indigo-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-indigo-950/70 backdrop-blur-md p-5 rounded-3xl border border-indigo-400/40">
              <div className="flex gap-3 text-3xl mb-1">
                <span>🌫️</span>
                <span>🧪</span>
                <span>👵</span>
              </div>
              <div className="bg-indigo-400 text-indigo-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                The Depths of Minusland
              </div>
              <p className="text-[11px] text-indigo-100 font-serif italic mt-1.5">
                A shadowy realm of people who are minus years old! Spraying Vita-Wonk to bring Grandma Georgina back!
              </p>
            </div>
          </div>
        );

      case "white_house_landing":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-blue-900 via-sky-800 to-emerald-800 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-yellow-300">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-white/20 backdrop-blur-md p-5 rounded-3xl border border-yellow-200/50">
              <div className="flex gap-3 text-3xl mb-1">
                <span>🏛️</span>
                <span>🚁</span>
                <span>🎖️</span>
              </div>
              <div className="bg-yellow-400 text-slate-900 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                South Lawn Landing & Presidential Gala
              </div>
              <p className="text-[11px] text-yellow-100 font-serif italic mt-1.5">
                President Gilligrass awards the Medal of Honor for saving the Space Hotel!
              </p>
            </div>
          </div>
        );

      case "danny_caravan":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-amber-900 via-emerald-950 to-stone-900 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-500">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:18px_18px]" />
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-amber-950/80 backdrop-blur-md border-2 border-amber-400 rounded-3xl p-5 text-center shadow-2xl flex flex-col items-center max-w-xs"
            >
              <div className="flex items-center gap-3 text-3xl mb-1">
                <span>🏕️</span>
                <span>🍎</span>
                <span>🏮</span>
                <span>🔧</span>
              </div>
              <div className="bg-amber-400 text-amber-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                The Yellow Gypsy Caravan
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                Sheltered under apple trees with warm lanterns, cast-iron stove, and sparky stories.
              </p>
            </motion.div>
          </div>
        );

      case "sleeping_potion":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-amber-800 via-rose-950 to-stone-900 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-rose-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/50 backdrop-blur-md p-5 rounded-3xl border border-rose-400/40">
              <div className="flex gap-3 text-3xl mb-1">
                <span>🍇</span>
                <span>💊</span>
                <span>💡</span>
              </div>
              <div className="bg-rose-400 text-rose-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                The Sleeping Beauty Innovation
              </div>
              <p className="text-[11px] text-rose-100 font-serif italic mt-1.5">
                Plump hydrated green raisins stuffed with calibrated sleeping powder!
              </p>
            </div>
          </div>
        );

      case "pheasant_roost":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-stone-950 via-emerald-950 to-stone-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-emerald-500">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-emerald-400/40">
              <motion.div animate={{ y: [-4, 6, -4] }} transition={{ duration: 2.2, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🌲</span>
                <span>🪶</span>
                <span>💤</span>
              </motion.div>
              <div className="bg-emerald-500 text-emerald-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-sm">
                The Harvest of Hazell's Wood
              </div>
              <p className="text-[11px] text-emerald-100 font-serif italic mt-1.5">
                Flump! Flump! One hundred and twenty sleeping birds gently tumbling into the mossy needles.
              </p>
            </div>
          </div>
        );

      case "champions_flight":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-amber-600 via-yellow-500 to-sky-600 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-300">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-amber-950/70 backdrop-blur-md p-5 rounded-3xl border border-amber-300/60">
              <div className="flex gap-3 text-3xl mb-1">
                <span>🏆</span>
                <span>🪶</span>
                <span>🚘</span>
                <span>✨</span>
              </div>
              <div className="bg-amber-300 text-amber-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Champion of the World!
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                Revived pheasants swarming over Mr. Hazell's Rolls-Royce before soaring free into the blue sky!
              </p>
            </div>
          </div>
        );

      case "mrs_winter_cat":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-purple-950 via-fuchsia-950 to-indigo-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-fuchsia-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-fuchsia-400/40">
              <motion.div animate={{ scale: [1, 1.15, 1], rotate: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>⚡</span>
                <span>🐱</span>
                <span> whiskers </span>
                <span> tail </span>
              </motion.div>
              <div className="bg-fuchsia-500 text-fuchsia-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Mrs. Winter's Cat Whiskers
              </div>
              <p className="text-[11px] text-fuchsia-100 font-serif italic mt-1.5">
                Sparks leap from the Magic Finger, sprouting whiskers and a bushy tail on the strict teacher!
              </p>
            </div>
          </div>
        );

      case "magic_finger_spark":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-rose-950 via-purple-950 to-indigo-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-rose-500">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-rose-400/40">
              <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 1.8, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>⚡</span>
                <span>🦆</span>
                <span>💥</span>
                <span>🌾</span>
              </motion.div>
              <div className="bg-rose-500 text-rose-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Electric Crimson Flash
              </div>
              <p className="text-[11px] text-rose-100 font-serif italic mt-1.5">
                Standing up for sixteen wild ducks: seeing red and zapping the hunters with a bolt of electric justice!
              </p>
            </div>
          </div>
        );

      case "duck_family_wings":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-teal-950 via-purple-950 to-indigo-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-teal-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-teal-400/40">
              <motion.div animate={{ y: [-4, 6, -4] }} transition={{ duration: 2, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🪶</span>
                <span>🦆</span>
                <span>🪽</span>
                <span>🏡</span>
              </motion.div>
              <div className="bg-teal-400 text-teal-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Wings Instead of Arms!
              </div>
              <p className="text-[11px] text-teal-100 font-serif italic mt-1.5">
                The miniature Greggs flap feathery wings while four giant ducks take over their cozy farmhouse!
              </p>
            </div>
          </div>
        );

      case "tree_nest_life":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-stone-950 via-amber-950 to-indigo-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-amber-400/40">
              <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🪺</span>
                <span>🌧️</span>
                <span>🪱</span>
                <span>🌳</span>
              </motion.div>
              <div className="bg-amber-400 text-amber-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The High Oak Tree Nest
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                Clinging together in the stormy treetops, tasting what it means to be a wild bird in the forest.
              </p>
            </div>
          </div>
        );

      case "flying_eggs":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-indigo-950 via-fuchsia-900 to-amber-900 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-fuchsia-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-fuchsia-400/40">
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 2.2, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🔨</span>
                <span>🌾</span>
                <span>🥚</span>
                <span>✨</span>
              </motion.div>
              <div className="bg-fuchsia-400 text-fuchsia-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Egg Family's Sacred Vow
              </div>
              <p className="text-[11px] text-fuchsia-100 font-serif italic mt-1.5">
                Guns smashed into scrap metal, barley scattered for flocks of wild birds, and a new life of kindness!
              </p>
            </div>
          </div>
        );

      case "marsh_mist":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-slate-900 via-stone-900 to-indigo-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-slate-500">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-slate-400/30">
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex gap-3 text-3xl mb-1">
                <span>🌫️</span>
                <span>🪦</span>
                <span>⛓️</span>
                <span>⛪</span>
              </motion.div>
              <div className="bg-slate-400 text-slate-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Foggy Kent Marshes
              </div>
              <p className="text-[11px] text-slate-200 font-serif italic mt-1.5">
                Misty reeds, churchyard shadows, and clanking iron chains in the winter wind.
              </p>
            </div>
          </div>
        );

      case "blacksmith_forge":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-stone-950 via-amber-950 to-orange-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-500">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#F59E0B_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/70 backdrop-blur-md p-5 rounded-3xl border border-amber-400/40">
              <motion.div animate={{ scale: [0.96, 1.04, 0.96] }} transition={{ duration: 1.8, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🔥</span>
                <span>🔨</span>
                <span>👨‍🏭</span>
                <span>✨</span>
              </motion.div>
              <div className="bg-amber-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Joe Gargery's Glowing Forge
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                Sparks dance across the anvil as hammer strikes ring out with honest warmth and friendship.
              </p>
            </div>
          </div>
        );

      case "satis_house":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-stone-950 via-neutral-900 to-amber-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-yellow-600">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#CA8A04_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/70 backdrop-blur-md p-5 rounded-3xl border border-yellow-600/40">
              <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex gap-3 text-3xl mb-1">
                <span>👰</span>
                <span>🕸️</span>
                <span>🕯️</span>
                <span>🕰️</span>
              </motion.div>
              <div className="bg-yellow-600 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Satis House & The Stopped Clocks
              </div>
              <p className="text-[11px] text-yellow-100 font-serif italic mt-1.5">
                Yellowed silk, dusty cobwebs, and ticking stopped forever at twenty minutes to nine.
              </p>
            </div>
          </div>
        );

      case "london_river":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-indigo-950 via-slate-900 to-sky-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-sky-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-sky-400/40">
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>⛵</span>
                <span>🎩</span>
                <span>🚣</span>
                <span>🌅</span>
              </motion.div>
              <div className="bg-sky-400 text-slate-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The River Thames & London Waters
              </div>
              <p className="text-[11px] text-sky-100 font-serif italic mt-1.5">
                Rowing down the misty river, learning true devotion beyond money or titles.
              </p>
            </div>
          </div>
        );

      case "secret_garden_door":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-emerald-950 via-stone-900 to-teal-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-emerald-500">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-emerald-400/40">
              <motion.div animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🗝️</span>
                <span>🚪</span>
                <span>🌿</span>
                <span>🐦</span>
              </motion.div>
              <div className="bg-emerald-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Hidden Ivy Door & Brass Key
              </div>
              <p className="text-[11px] text-emerald-100 font-serif italic mt-1.5">
                The wind parts the heavy ivy curtain, unlocking a magical world asleep for ten years.
              </p>
            </div>
          </div>
        );

      case "robin_perch":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-rose-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-rose-400/40">
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 2, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🐦</span>
                <span>🌱</span>
                <span>🧱</span>
                <span>🎶</span>
              </motion.div>
              <div className="bg-rose-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Robin on the Wall
              </div>
              <p className="text-[11px] text-rose-100 font-serif italic mt-1.5">
                A scarlet breast, bright black eyes, and a sweet bubbling song that awakens Mary's heart.
              </p>
            </div>
          </div>
        );

      case "garden_in_bloom":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-emerald-900 via-teal-800 to-green-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-green-400">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#4ADE80_1.5px,transparent_1.5px)] [background-size:18px_18px]" />
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-green-400/40">
              <motion.div animate={{ scale: [0.96, 1.04, 0.96] }} transition={{ duration: 2.2, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🌹</span>
                <span>🌷</span>
                <span>🦋</span>
                <span>✨</span>
              </motion.div>
              <div className="bg-green-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Secret Garden Awakens
              </div>
              <p className="text-[11px] text-green-100 font-serif italic mt-1.5">
                Wick with sap and green life! Thousands of climbing roses bursting in golden sunshine.
              </p>
            </div>
          </div>
        );

      case "colin_standing":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-amber-950 via-emerald-900 to-teal-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-amber-400/40">
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>👦</span>
                <span>🦽</span>
                <span>🏃</span>
                <span>🎉</span>
              </motion.div>
              <div className="bg-amber-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Standing Tall & Walking!
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                Colin discards the wheelchair, standing proud as an oak tree in the healing garden!
              </p>
            </div>
          </div>
        );

      case "attic_window":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-amber-950 via-stone-900 to-sky-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-amber-400/40">
              <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>🪟</span>
                <span>🌄</span>
                <span>🩼</span>
                <span>☀️</span>
              </motion.div>
              <div className="bg-amber-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                The Little Attic Window
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                Looking out over the green Vermont hills, discovering the magic of the Glad Game!
              </p>
            </div>
          </div>
        );

      case "sunlit_veranda":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-rose-950 via-amber-900 to-indigo-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-rose-400">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-rose-400/40">
              <motion.div animate={{ scale: [0.96, 1.04, 0.96] }} transition={{ duration: 2, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>☀️</span>
                <span>🐱</span>
                <span>🏡</span>
                <span>💖</span>
              </motion.div>
              <div className="bg-rose-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Sunbeams on the Veranda
              </div>
              <p className="text-[11px] text-rose-100 font-serif italic mt-1.5">
                Stray kittens, laughter, and melting Aunt Polly's icy heart with pure warmth.
              </p>
            </div>
          </div>
        );

      case "pendleton_mansion":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-stone-950 via-amber-950 to-neutral-900 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-amber-600">
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/70 backdrop-blur-md p-5 rounded-3xl border border-amber-600/40">
              <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 2.8, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>📚</span>
                <span>🌲</span>
                <span>🧔</span>
                <span>🤝</span>
              </motion.div>
              <div className="bg-amber-600 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Pendleton's Lonely Castle
              </div>
              <p className="text-[11px] text-amber-100 font-serif italic mt-1.5">
                A grand stone house in the deep woods, transformed by Jimmy Bean and a daughter's love.
              </p>
            </div>
          </div>
        );

      case "rainbow_prisms":
        return (
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-indigo-950 via-purple-950 to-pink-950 rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-2xl border-4 border-fuchsia-400">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#E879F9_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
            <div className="relative z-10 text-center flex flex-col items-center max-w-sm bg-black/60 backdrop-blur-md p-5 rounded-3xl border border-fuchsia-400/40">
              <motion.div animate={{ rotate: [-6, 6, -6] }} transition={{ duration: 2.5, repeat: Infinity }} className="flex gap-3 text-3xl mb-1">
                <span>💎</span>
                <span>🌈</span>
                <span>✨</span>
                <span>🛏️</span>
              </motion.div>
              <div className="bg-fuchsia-400 text-stone-950 px-4 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-md">
                Dancing Rainbow Prisms
              </div>
              <p className="text-[11px] text-fuchsia-100 font-serif italic mt-1.5">
                Dozens of iridescent rainbows dancing across Mrs. Snow's bedroom walls!
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className={`relative w-full h-56 sm:h-72 bg-gradient-to-r ${scene.backgroundGradient} rounded-[24px] overflow-hidden flex items-center justify-center p-4 shadow-xl border-2 border-[#FFD700]`}>
            <div className="text-center">
              <div className="text-5xl mb-2">📖</div>
              <div className="text-sm font-black text-[#2D1B36] bg-[#FDF6E3] px-4 py-1.5 rounded-full shadow-md">{scene.title}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Visual illustration stage with hot spots */}
      <div className="relative w-full group">
        {renderArt()}

        {/* Interactive Clickable Hotspots */}
        {scene.interactiveHotspots?.map((hotspot) => (
          <motion.button
            key={hotspot.id}
            id={`hotspot-${hotspot.id}`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleHotspot(hotspot)}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 bg-[#FDF6E3] text-[#2D1B36] px-3 py-1.5 rounded-full shadow-2xl border-2 border-[#FFD700] font-black text-xs cursor-pointer transition-all duration-150 animate-pulse hover:animate-none"
          >
            <span className="text-sm">{hotspot.icon}</span>
            <span className="hidden sm:inline font-black text-[11px] text-[#2D1B36]">{hotspot.label}</span>
            <Sparkles className="w-3 h-3 text-[#E74C3C]" />
          </motion.button>
        ))}

        {/* Sparkle Feedback animation */}
        <AnimatePresence>
          {sparkleActive && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center text-4xl"
            >
              ✨ 🌟 ✨
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Character Avatars & Dialogue Row */}
      {scene.characterAvatars && scene.characterAvatars.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {scene.characterAvatars.map((char, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#4A2D55] border-2 border-[#6D427D] px-3.5 py-1.5 rounded-full shadow-md text-xs font-black text-[#FDF6E3]"
            >
              <span className="text-base">{char.emoji}</span>
              <span className="font-black text-[#FFD700]">{char.name}:</span>
              <span className="italic text-[#FDF6E3]/90 font-medium">"{char.speech}"</span>
            </div>
          ))}
        </div>
      )}

      {/* Hotspot Fun Fact Popup Banner */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-start gap-2.5 bg-[#FFCC33] border-2 border-[#FFD700] p-3.5 rounded-2xl shadow-xl text-xs text-[#2D1B36]"
          >
            <span className="text-xl">{activeHotspot.icon}</span>
            <div className="flex-1">
              <span className="font-black text-[#2D1B36]">{activeHotspot.label}: </span>
              <span className="font-medium text-[#2D1B36]">{activeHotspot.funFact}</span>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-[#2D1B36] hover:text-[#E74C3C] font-black px-1.5 py-0.5 rounded cursor-pointer text-sm"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
