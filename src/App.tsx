import React, { useState, useEffect } from "react";
import { UserProfile, AgeTier, BookData, ChapterBite } from "./types";
import { INITIAL_USER_PROFILE, getZeroUserProfile } from "./data/koobitsData";
import { ROALD_DAHL_BOOKS } from "./data/storyData";
import { Navbar } from "./components/Navbar";
import { BookShelf } from "./components/BookShelf";
import { ReadingSession } from "./components/ReadingSession";
import { RewardHall } from "./components/RewardHall";
import { KoobitsArcade } from "./components/KoobitsArcade";
import { LeaderboardModal } from "./components/LeaderboardModal";
import { AIBookBuddyModal } from "./components/AIBookBuddyModal";
import { CertificateModal } from "./components/CertificateModal";
import { ResetConfirmModal } from "./components/ResetConfirmModal";
import { DisqusComments } from "./components/DisqusComments";
import { setSoundEnabled } from "./utils/audio";
import confetti from "canvas-confetti";

export default function App() {
  // Load saved profile or initialize
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem("kokoread_profile");
      if (saved) {
        const parsed = JSON.parse(saved);
        // If it was the legacy prototype seed (350 KP & 3 day streak), reset to zero
        if (parsed.kokoPoints === 350 && parsed.streakDays === 3 && parsed.totalMinutesRead === 45) {
          return getZeroUserProfile(parsed.ageGroup || "7-8");
        }
        // If saved currentBookId is a locked Roald Dahl book, migrate to Great Expectations
        const lockedIds = ["charlie", "matilda", "elevator", "danny", "magic_finger"];
        if (lockedIds.includes(parsed.currentBookId)) {
          parsed.currentBookId = "great_expectations";
        }
        return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_USER_PROFILE;
  });

  // Active View: 'bookshelf' | 'reading' | 'rewards' | 'arcade'
  const [activeView, setActiveView] = useState<"bookshelf" | "reading" | "rewards" | "arcade">("bookshelf");

  // Active reading chapter session
  const [activeChapterSession, setActiveChapterSession] = useState<{
    book: BookData;
    chapter: ChapterBite;
  } | null>(null);

  // Modals state
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showAIBuddy, setShowAIBuddy] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  // Save profile on update
  useEffect(() => {
    try {
      localStorage.setItem("kokoread_profile", JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updated }));
  };

  const handleAgeChange = (newAge: AgeTier) => {
    handleUpdateProfile({ ageGroup: newAge });
  };

  const handleConfirmReset = () => {
    const zeroed = getZeroUserProfile(profile.ageGroup);
    setProfile(zeroed);
    try {
      localStorage.setItem("kokoread_profile", JSON.stringify(zeroed));
    } catch (e) {
      console.error(e);
    }
    setShowResetModal(false);
    setActiveChapterSession(null);
    setActiveView("bookshelf");
  };

  const handleToggleSound = () => {
    const nextVal = !profile.soundEnabled;
    setSoundEnabled(nextVal);
    handleUpdateProfile({ soundEnabled: nextVal });
  };

  const handleStartChapter = (book: BookData, chapter: ChapterBite) => {
    if (book.isLocked) {
      return;
    }
    setActiveChapterSession({ book, chapter });
    setActiveView("reading");
  };

  const handleSessionComplete = (results: {
    minutesRead: number;
    kokoPointsEarned: number;
    gemsEarned: number;
    petExpEarned: number;
    perfectBonus: boolean;
  }) => {
    const chapterId = activeChapterSession?.chapter.id;
    const isNewChapter = chapterId && !profile.completedChapters.includes(chapterId);

    const newCompleted = isNewChapter
      ? [...profile.completedChapters, chapterId]
      : profile.completedChapters;

    // Check badges
    const newBadges = [...profile.badges];
    if (!newBadges.includes("badge_first_bite")) {
      newBadges.push("badge_first_bite");
    }
    if (results.perfectBonus && !newBadges.includes("badge_quiz_master")) {
      newBadges.push("badge_quiz_master");
    }
    if (profile.totalMinutesRead + results.minutesRead >= 30 && !newBadges.includes("badge_story_explorer")) {
      newBadges.push("badge_story_explorer");
    }

    handleUpdateProfile({
      kokoPoints: profile.kokoPoints + results.kokoPointsEarned,
      totalMinutesRead: profile.totalMinutesRead + results.minutesRead,
      petExp: profile.petExp + results.petExpEarned,
      goldenTickets: profile.goldenTickets + (results.perfectBonus ? 1 : 0),
      streakDays: profile.streakDays + 1,
      completedChapters: newCompleted,
      badges: newBadges,
    });

    setActiveChapterSession(null);
    setActiveView("bookshelf");
  };

  return (
    <div className="min-h-screen bg-[#2D1B36] text-[#FDF6E3] flex flex-col font-sans selection:bg-[#FFD700] selection:text-[#2D1B36]">
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        activeView={activeView === "reading" ? "bookshelf" : activeView}
        onChangeView={(v) => {
          setActiveChapterSession(null);
          setActiveView(v);
        }}
        onChangeAge={handleAgeChange}
        onOpenBuddy={() => setShowAIBuddy(true)}
        onOpenLeaderboard={() => setShowLeaderboard(true)}
        onToggleSound={handleToggleSound}
        onOpenReset={() => setShowResetModal(true)}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 flex flex-col items-center">
        {activeView === "bookshelf" && (
          <BookShelf 
            profile={profile} 
            onSelectChapter={handleStartChapter} 
            onOpenRewards={() => setActiveView("rewards")} 
            onOpenReset={() => setShowResetModal(true)}
          />
        )}

        {activeView === "reading" && activeChapterSession && (
          <ReadingSession
            chapter={activeChapterSession.chapter}
            bookTitle={activeChapterSession.book.title}
            ageGroup={profile.ageGroup}
            streakDays={profile.streakDays}
            onSessionComplete={handleSessionComplete}
            onExit={() => {
              setActiveChapterSession(null);
              setActiveView("bookshelf");
            }}
          />
        )}

        {activeView === "rewards" && (
          <RewardHall
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onOpenCertificate={() => setShowCertificate(true)}
            onOpenReset={() => setShowResetModal(true)}
          />
        )}

        {activeView === "arcade" && (
          <KoobitsArcade
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onBack={() => setActiveView("bookshelf")}
          />
        )}
      </main>

      {/* Disqus Community Comments Section */}
      <DisqusComments
        identifier={activeChapterSession ? `chapter-${activeChapterSession.chapter.id}` : `view-${activeView}`}
        title={activeChapterSession ? `${activeChapterSession.chapter.title} - KoKoRead` : `KoKoRead Community Club`}
      />

      {/* Footer */}
      <footer className="w-full bg-[#1F1225] border-t border-[#4A2D55] py-5 px-4 text-center text-xs text-[#FDF6E3]/70 font-medium">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🍫</span>
            <span>
              Inspired by Roald Dahl classics (<i>Charlie and the Chocolate Factory</i> & <i>Matilda</i>) & KooBits gamification mechanics.
            </span>
          </div>
          <span className="text-[#FFD700] font-black uppercase tracking-wider bg-[#4A2D55] border border-[#6D427D] px-3 py-1 rounded-full text-[11px]">
            15 Minutes Daily Reading Quest
          </span>
        </div>
      </footer>

      {/* Modals */}
      {showLeaderboard && (
        <LeaderboardModal profile={profile} onClose={() => setShowLeaderboard(false)} />
      )}

      {showAIBuddy && (
        <AIBookBuddyModal ageGroup={profile.ageGroup} onClose={() => setShowAIBuddy(false)} />
      )}

      {showCertificate && (
        <CertificateModal profile={profile} onClose={() => setShowCertificate(false)} />
      )}

      {showResetModal && (
        <ResetConfirmModal
          currentKP={profile.kokoPoints}
          currentMinutes={profile.totalMinutesRead}
          currentStreak={profile.streakDays}
          onConfirmReset={handleConfirmReset}
          onClose={() => setShowResetModal(false)}
        />
      )}
    </div>
  );
}
