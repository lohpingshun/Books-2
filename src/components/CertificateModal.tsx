import React, { useState } from "react";
import { UserProfile } from "../types";
import { motion } from "motion/react";
import { Printer, Sparkles, X, Award, Check } from "lucide-react";

interface CertificateModalProps {
  profile: UserProfile;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ profile, onClose }) => {
  const [studentName, setStudentName] = useState(profile.name);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B36]/80 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-2xl bg-[#FDF6E3] rounded-[32px] shadow-2xl border-4 border-[#FFD700] overflow-hidden flex flex-col max-h-[90vh] text-[#2D1B36]"
      >
        {/* Action Toolbar (Hidden during print) */}
        <div className="bg-[#4A2D55] text-[#FDF6E3] p-4 flex items-center justify-between print:hidden border-b-2 border-[#6D427D]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#FFD700]">Student Name:</span>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="px-3 py-1 bg-[#2D1B36] border border-[#6D427D] rounded-xl text-xs font-bold text-[#FFD700] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-[#FFCC33] hover:bg-[#FFD700] text-[#2D1B36] px-4 py-1.5 rounded-xl font-black text-xs cursor-pointer shadow-md transition-all"
            >
              <Printer className="w-4 h-4 text-[#2D1B36]" /> Print Certificate
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-2xl bg-[#2D1B36] hover:bg-[#6D427D] border border-[#6D427D] flex items-center justify-center text-[#FDF6E3] cursor-pointer font-bold transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PRINTABLE CERTIFICATE FRAME */}
        <div className="p-6 sm:p-10 bg-[#FDF6E3] flex flex-col items-center justify-center text-center overflow-y-auto">
          <div className="w-full bg-white border-8 border-double border-[#4A2D55] rounded-[32px] p-8 shadow-2xl flex flex-col items-center gap-4 relative">
            {/* Corner Decorative Badges */}
            <span className="absolute top-3 left-3 text-2xl">🍫</span>
            <span className="absolute top-3 right-3 text-2xl">📚</span>
            <span className="absolute bottom-3 left-3 text-2xl">🪄</span>
            <span className="absolute bottom-3 right-3 text-2xl">✨</span>

            <span className="text-xs font-black uppercase tracking-widest text-[#E74C3C]">
              KooBits & Roald Dahl Reading Quest
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-[#2D1B36] font-serif">
              CERTIFICATE OF READING MASTERY
            </h1>

            <p className="text-xs font-bold text-[#2D1B36]/70">This honor is proudly awarded to</p>

            <div className="text-2xl sm:text-3xl font-black text-[#2D1B36] border-b-2 border-[#FFD700] pb-1 px-8 font-serif">
              {studentName || "Young Champion"}
            </div>

            <p className="text-xs text-[#2D1B36]/90 font-serif font-medium max-w-md leading-relaxed mt-2">
              For exemplary dedication to reading 15 minutes every single day, mastering Roald Dahl classic literature, discovering Gobblefunk vocabulary, and excelling in KooBits daily comprehension challenges!
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mt-2 pt-3 border-t border-black/10 text-xs font-black text-[#2D1B36]">
              <div>
                <span className="block text-[#E74C3C] text-sm">🔥 {profile.streakDays} Days</span>
                <span className="text-[10px] text-[#2D1B36]/60">Reading Streak</span>
              </div>
              <div>
                <span className="block text-[#4A2D55] text-sm">⏱️ {profile.totalMinutesRead} Mins</span>
                <span className="text-[10px] text-[#2D1B36]/60">Minutes Logged</span>
              </div>
              <div>
                <span className="block text-[#2D1B36] text-sm">🪙 {profile.kokoPoints} KP</span>
                <span className="text-[10px] text-[#2D1B36]/60">KoKo Points</span>
              </div>
            </div>

            {/* Signature & Seal */}
            <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-black/10 px-6">
              <div className="text-center">
                <span className="font-serif italic font-bold text-xs text-[#2D1B36]">Willy Wonka & Matilda</span>
                <span className="block text-[9px] uppercase font-black text-[#2D1B36]/50">Story Mentors</span>
              </div>

              {/* Gold Wax Seal */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FFD700] to-[#FFCC33] border-2 border-yellow-100 shadow-md flex items-center justify-center text-xl">
                🌟
              </div>

              <div className="text-center">
                <span className="font-bold text-xs text-[#2D1B36]">{new Date().toLocaleDateString()}</span>
                <span className="block text-[9px] uppercase font-black text-[#2D1B36]/50">Date Awarded</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
