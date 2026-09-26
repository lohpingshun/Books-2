import React from "react";
import { motion } from "motion/react";
import { RotateCcw, AlertTriangle, X, Check, Trash2, Sparkles } from "lucide-react";
import { playClickSound, playWrongSound } from "../utils/audio";

interface ResetConfirmModalProps {
  currentKP: number;
  currentMinutes: number;
  currentStreak: number;
  onConfirmReset: () => void;
  onClose: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  currentKP,
  currentMinutes,
  currentStreak,
  onConfirmReset,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B36]/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 10 }}
        className="w-full max-w-md bg-[#FDF6E3] rounded-[32px] shadow-2xl border-4 border-[#E74C3C] overflow-hidden flex flex-col text-[#2D1B36]"
      >
        {/* Header */}
        <div className="bg-[#E74C3C] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">
              <RotateCcw className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
                Fresh Start Option
              </span>
              <h3 className="text-lg font-serif font-black text-white">Reset Points & Reading to 0?</h3>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer font-bold transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <div className="bg-amber-100 border-2 border-amber-300 rounded-2xl p-4 flex items-start gap-3 text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-black">This will reset your profile back to day 1 with 0 points:</p>
              <ul className="list-disc list-inside mt-1.5 space-y-0.5 text-amber-950 font-medium">
                <li><strong>KoKo Points:</strong> {currentKP} ➔ <span className="text-rose-600 font-bold">0 KP</span></li>
                <li><strong>Minutes Read:</strong> {currentMinutes} mins ➔ <span className="text-rose-600 font-bold">0 mins</span></li>
                <li><strong>Reading Streak:</strong> {currentStreak} days ➔ <span className="text-rose-600 font-bold">0 days</span></li>
                <li><strong>Chapters & Badges:</strong> Unlocks reset to beginning</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-[#2D1B36]/80 text-center font-medium">
            You can use this anytime to test the reading quests and quizzes completely from scratch with a fresh slate!
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="px-4 py-3 bg-black/10 hover:bg-black/15 text-[#2D1B36] rounded-2xl font-black text-xs cursor-pointer transition-all text-center"
            >
              Cancel (Keep Stats)
            </button>
            <button
              onClick={() => {
                playWrongSound();
                onConfirmReset();
              }}
              className="px-4 py-3 bg-[#E74C3C] hover:bg-[#c0392b] text-white rounded-2xl font-black text-xs cursor-pointer shadow-lg transition-all flex items-center justify-center gap-1.5 hover:scale-102"
            >
              <Trash2 className="w-4 h-4" />
              <span>Reset Everything to 0</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
