import React, { useState, useEffect } from "react";
import { MessageSquare, Sparkles, Send, Heart, User, BookOpen, ThumbsUp, ShieldCheck } from "lucide-react";
import { playClickSound, playSuccessSound } from "../utils/audio";

interface DisqusCommentsProps {
  identifier?: string;
  title?: string;
  url?: string;
}

interface DisqusPageConfig {
  page: {
    url?: string;
    identifier?: string;
    title?: string;
  };
}

interface CommunityComment {
  id: string;
  author: string;
  avatar: string;
  role: string;
  text: string;
  timestamp: string;
  likes: number;
  likedByUser?: boolean;
  topicTag?: string;
}

declare global {
  interface Window {
    DISQUS?: {
      reset: (args: {
        reload: boolean;
        config?: (this: DisqusPageConfig) => void;
      }) => void;
    };
    disqus_config?: (this: DisqusPageConfig) => void;
  }
}

const INITIAL_COMMENTS: CommunityComment[] = [
  {
    id: "c-1",
    author: "Charlie B.",
    avatar: "🍫",
    role: "Golden Ticket Explorer",
    text: "The trickiest question in today's quiz was about Willy Wonka's everlasting gobstopper! I scored a perfect 100% on standard mode!",
    timestamp: "10 mins ago",
    likes: 14,
    topicTag: "Charlie & the Chocolate Factory",
  },
  {
    id: "c-2",
    author: "Matilda W.",
    avatar: "📚",
    role: "Library Prodigy",
    text: "Remember to look at character motivations during the reflection checkpoints! It helps you get all +15 KP bonuses.",
    timestamp: "35 mins ago",
    likes: 28,
    topicTag: "Reading Strategy",
  },
  {
    id: "c-3",
    author: "Danny S.",
    avatar: "🚗",
    role: "Caravan Mechanic",
    text: "Danny the Champion of the World has such cozy caravan moments. Reading 15 minutes a day before bedtime is the best habit!",
    timestamp: "1 hour ago",
    likes: 9,
    topicTag: "Danny the Champion",
  },
];

const AVATAR_OPTIONS = [
  { emoji: "🍫", name: "Charlie" },
  { emoji: "🎩", name: "Wonka" },
  { emoji: "📚", name: "Matilda" },
  { emoji: "👩‍🏫", name: "Miss Honey" },
  { emoji: "🚗", name: "Danny" },
  { emoji: "🧑‍🌾", name: "Oompa Loompa" },
  { emoji: "🦊", name: "Fantastic Fox" },
  { emoji: "🍑", name: "James" },
];

export const DisqusComments: React.FC<DisqusCommentsProps> = ({
  identifier = "kokoread-main-discussions",
  title = "KoKoRead Community Book Club",
  url,
}) => {
  const [disqusStatus, setDisqusStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [activeTab, setActiveTab] = useState<"community" | "disqus">("community");

  // Local comments state with localStorage persistence
  const [comments, setComments] = useState<CommunityComment[]>(() => {
    try {
      const saved = localStorage.getItem("kokoread_community_comments");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_COMMENTS;
  });

  const [authorName, setAuthorName] = useState("Young Reader");
  const [selectedAvatar, setSelectedAvatar] = useState("🍫");
  const [newCommentText, setNewCommentText] = useState("");
  const [selectedTag, setSelectedTag] = useState("Reading Discussion");

  // Save comments on change
  useEffect(() => {
    try {
      localStorage.setItem("kokoread_community_comments", JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [comments]);

  // Attempt safe Disqus initialization without uncaught script errors
  useEffect(() => {
    let isMounted = true;

    try {
      const pageUrl = url || (typeof window !== "undefined" ? window.location.href : "");
      const pageIdentifier = identifier;
      const pageTitle = title;

      window.disqus_config = function (this: DisqusPageConfig) {
        this.page.url = pageUrl;
        this.page.identifier = pageIdentifier;
        this.page.title = pageTitle;
      };

      if (window.DISQUS) {
        try {
          window.DISQUS.reset({
            reload: true,
            config: window.disqus_config,
          });
          if (isMounted) setDisqusStatus("ready");
        } catch {
          if (isMounted) setDisqusStatus("fallback");
        }
      } else {
        const existingScript = document.getElementById("disqus-embed-script");
        if (!existingScript) {
          const s = document.createElement("script");
          s.id = "disqus-embed-script";
          s.src = "https://newsforne.disqus.com/embed.js";
          s.setAttribute("data-timestamp", String(+new Date()));
          s.async = true;
          s.onload = () => {
            if (isMounted) setDisqusStatus("ready");
          };
          s.onerror = () => {
            if (isMounted) setDisqusStatus("fallback");
          };
          (document.head || document.body).appendChild(s);
        } else {
          if (isMounted) setDisqusStatus("ready");
        }
      }
    } catch {
      if (isMounted) setDisqusStatus("fallback");
    }

    return () => {
      isMounted = false;
    };
  }, [identifier, title, url]);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: CommunityComment = {
      id: `c-${Date.now()}`,
      author: authorName.trim() || "Young Reader",
      avatar: selectedAvatar,
      role: "Dahl Scholar",
      text: newCommentText.trim(),
      timestamp: "Just now",
      likes: 1,
      likedByUser: true,
      topicTag: selectedTag,
    };

    setComments((prev) => [newComment, ...prev]);
    setNewCommentText("");
    playSuccessSound();
  };

  const handleToggleLike = (commentId: string) => {
    playClickSound();
    setComments((prev) =>
      prev.map((c) => {
        if (c.id === commentId) {
          const wasLiked = c.likedByUser;
          return {
            ...c,
            likes: wasLiked ? Math.max(0, c.likes - 1) : c.likes + 1,
            likedByUser: !wasLiked,
          };
        }
        return c;
      })
    );
  };

  return (
    <section
      id="community-disqus-section"
      className="w-full max-w-5xl mx-auto my-8 px-3 sm:px-6"
    >
      <div className="bg-[#FDF6E3] text-[#2D1B36] rounded-3xl p-5 sm:p-8 shadow-2xl border-4 border-[#FFCC33]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-5 border-b-2 border-black/10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#2D1B36] text-[#FFD700] flex items-center justify-center text-2xl shadow-md shrink-0">
              <MessageSquare className="w-6 h-6 text-[#FFCC33]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#E74C3C] bg-[#E74C3C]/10 px-2.5 py-0.5 rounded-full border border-[#E74C3C]/20">
                  Roald Dahl Reader Club
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-200/70 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-600" /> Kid-Friendly Community
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-black text-[#2D1B36] mt-1">
                Community Discussion & Chapter Thoughts
              </h2>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-black/10 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("community")}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === "community"
                  ? "bg-[#2D1B36] text-[#FFD700] shadow-sm"
                  : "text-[#2D1B36]/70 hover:text-[#2D1B36]"
              }`}
            >
              💬 Interactive Club Board ({comments.length})
            </button>
            <button
              onClick={() => setActiveTab("disqus")}
              className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === "disqus"
                  ? "bg-[#2D1B36] text-[#FFD700] shadow-sm"
                  : "text-[#2D1B36]/70 hover:text-[#2D1B36]"
              }`}
            >
              🌐 Disqus Embed
            </button>
          </div>
        </div>

        {activeTab === "community" ? (
          <div className="flex flex-col gap-6">
            {/* New Comment Box */}
            <form
              onSubmit={handlePostComment}
              className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-black/10 shadow-xs flex flex-col gap-4"
            >
              <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#2D1B36] uppercase tracking-wider">
                    Your Avatar:
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {AVATAR_OPTIONS.map((av) => (
                      <button
                        type="button"
                        key={av.name}
                        onClick={() => {
                          setSelectedAvatar(av.emoji);
                          playClickSound();
                        }}
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-base transition-all cursor-pointer ${
                          selectedAvatar === av.emoji
                            ? "bg-[#FFCC33] scale-110 shadow-sm border border-[#2D1B36]"
                            : "bg-black/5 hover:bg-black/10 opacity-70"
                        }`}
                        title={av.name}
                      >
                        {av.emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#2D1B36]">Your Name:</span>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="E.g. Bookworm Leo"
                    maxLength={25}
                    className="bg-[#FDF6E3] border border-black/15 rounded-xl px-3 py-1 text-xs font-bold text-[#2D1B36] focus:outline-none focus:ring-2 focus:ring-[#FFCC33]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Share your thoughts on the chapter, favorite Dahl quote, or quiz tip..."
                  rows={3}
                  className="w-full bg-[#FDF6E3]/60 border border-black/15 rounded-xl p-3 text-xs sm:text-sm font-medium text-[#2D1B36] placeholder:text-[#2D1B36]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC33] resize-none"
                />

                <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#2D1B36]/70">Topic Tag:</span>
                    <select
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className="bg-[#FDF6E3] border border-black/15 rounded-lg px-2.5 py-1 text-[11px] font-bold text-[#2D1B36]"
                    >
                      <option value="Reading Discussion">📖 Reading Discussion</option>
                      <option value="Daily Quiz Tip">💡 Daily Quiz Tip</option>
                      <option value="Favorite Dahl Quote">✨ Favorite Dahl Quote</option>
                      <option value="Gobblefunk Word">🍭 Gobblefunk Word</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={!newCommentText.trim()}
                    className={`flex items-center gap-2 px-5 py-2 rounded-xl font-black text-xs transition-all shadow-md cursor-pointer ${
                      newCommentText.trim()
                        ? "bg-[#2D1B36] hover:bg-[#4A2D55] text-[#FFD700] hover:scale-102"
                        : "bg-black/10 text-black/30 cursor-not-allowed"
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Thought (+15 KP)</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Comments Feed */}
            <div className="flex flex-col gap-3">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-black/10 shadow-xs flex items-start gap-3.5 transition-all hover:border-[#FFCC33]"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#FDF6E3] border border-black/10 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                    {comment.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-xs sm:text-sm text-[#2D1B36]">
                          {comment.author}
                        </span>
                        <span className="text-[10px] font-bold text-[#E74C3C] bg-[#E74C3C]/10 px-2 py-0.5 rounded-full">
                          {comment.role}
                        </span>
                        {comment.topicTag && (
                          <span className="text-[10px] font-semibold text-[#2D1B36]/60 bg-black/5 px-2 py-0.5 rounded-full hidden sm:inline">
                            {comment.topicTag}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-[#2D1B36]/50">
                        {comment.timestamp}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-serif text-[#2D1B36]/90 mt-1.5 leading-relaxed">
                      {comment.text}
                    </p>

                    <div className="flex items-center gap-3 mt-3 pt-2 border-t border-black/5">
                      <button
                        onClick={() => handleToggleLike(comment.id)}
                        className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                          comment.likedByUser
                            ? "bg-rose-100 text-rose-700 font-black"
                            : "bg-black/5 text-[#2D1B36]/70 hover:bg-black/10"
                        }`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${
                            comment.likedByUser ? "fill-rose-600 text-rose-600" : ""
                          }`}
                        />
                        <span>{comment.likes} {comment.likes === 1 ? "Cheer" : "Cheers"}</span>
                      </button>

                      <span className="text-[11px] text-[#2D1B36]/50 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Kid-Safe Moderated
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Disqus Embed Container */
          <div className="min-h-[240px] bg-white rounded-2xl p-4 sm:p-6 border border-black/10 shadow-xs flex flex-col gap-3">
            {disqusStatus === "loading" && (
              <div className="flex items-center justify-center py-8 text-xs font-bold text-[#2D1B36]/60">
                <span className="animate-spin mr-2">⏳</span> Loading Disqus Reader Forum...
              </div>
            )}
            <div id="disqus_thread"></div>
            {disqusStatus === "fallback" && (
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex flex-col gap-2">
                <span className="font-black">Notice: External Disqus embed blocked by browser security sandbox.</span>
                <p>You can switch to the <strong>💬 Interactive Club Board</strong> above to post comments and interact immediately!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
