import React from "react";
import { LeaderboardEntry, UserProfile } from "../types";
import { INITIAL_LEADERBOARD } from "../data/koobitsData";
import { motion } from "motion/react";
import { Trophy, Medal, Flame, X, Sparkles, BookOpen } from "lucide-react";

interface LeaderboardModalProps {
  profile: UserProfile;
  onClose: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ profile, onClose }) => {
  // Merge active user profile into leaderboard
  const list: LeaderboardEntry[] = INITIAL_LEADERBOARD.map((entry) => {
    if (entry.isUser) {
      return {
        ...entry,
        name: `${profile.name} (You)`,
        minutesRead: profile.totalMinutesRead,
        kokoPoints: profile.kokoPoints,
        streak: profile.streakDays,
      };
    }
    return entry;
  }).sort((a, b) => b.kokoPoints - a.kokoPoints);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B36]/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="w-full max-w-xl bg-[#FDF6E3] rounded-[32px] shadow-2xl border-4 border-[#FFD700] overflow-hidden flex flex-col max-h-[85vh] text-[#2D1B36]"
      >
        {/* Header */}
        <div className="bg-[#4A2D55] p-5 sm:p-6 text-[#FDF6E3] flex items-center justify-between border-b-2 border-[#6D427D]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#2D1B36] border-2 border-[#FFD700] flex items-center justify-center text-2xl shadow-inner">
              🏆
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
                KooBits Hall of Fame
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#FFD700]">Daily Reading Champions</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-2xl bg-[#2D1B36] hover:bg-[#6D427D] border border-[#6D427D] flex items-center justify-center text-[#FDF6E3] cursor-pointer font-bold transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col gap-2.5">
          {list.map((entry, idx) => {
            const rank = idx + 1;
            const isUser = entry.isUser;

            return (
              <div
                key={entry.name}
                className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border-2 transition-all ${
                  isUser
                    ? "bg-[#FFCC33]/30 border-[#FFD700] shadow-md"
                    : rank === 1
                    ? "bg-[#FFD700]/15 border-[#FFD700]"
                    : "bg-white border-black/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center ${
                      rank === 1
                        ? "bg-[#FFD700] text-[#2D1B36] shadow-sm font-black text-sm"
                        : rank === 2
                        ? "bg-slate-300 text-[#2D1B36]"
                        : rank === 3
                        ? "bg-[#FFB347] text-[#2D1B36]"
                        : "bg-black/5 text-[#2D1B36]/60"
                    }`}
                  >
                    {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : rank}
                  </span>

                  <span className="text-2xl">{entry.avatar}</span>

                  <div>
                    <h4 className="font-serif font-black text-xs sm:text-sm text-[#2D1B36] flex items-center gap-1.5">
                      <span>{entry.name}</span>
                      {isUser && (
                        <span className="bg-[#E74C3C] text-white text-[9px] px-2 py-0.5 rounded-full font-black">
                          YOU
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] text-[#2D1B36]/60 font-semibold">{entry.school}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-xs sm:text-sm font-black text-[#2D1B36]">
                      🪙 {entry.kokoPoints} KP
                    </span>
                    <span className="text-[10px] text-[#2D1B36]/70 font-bold">
                      {entry.minutesRead} mins • 🔥 {entry.streak}d
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
