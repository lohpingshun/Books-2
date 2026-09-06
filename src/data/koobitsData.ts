import { AgeTier, KooBitsBadge, KooBitsShopItem, LeaderboardEntry, PetEvolution, UserProfile } from "../types";

export const PET_EVOLUTIONS: PetEvolution[] = [
  {
    id: "pet-1",
    name: "Choco Pip",
    stage: 1,
    maxStage: 3,
    emoji: "🐣",
    title: "Baby Book Sprout",
    description: "A tiny chocolate fledgling that nibbles on bedtime stories and sweet rhymes.",
    requiredExp: 100,
  },
  {
    id: "pet-2",
    name: "Wonka Whizz-Hound",
    stage: 2,
    maxStage: 3,
    emoji: "🐶",
    title: "Gobstopper Explorer",
    description: "A playful hound wearing a candy wrapper collar that barks when you find new vocabulary words!",
    requiredExp: 350,
  },
  {
    id: "pet-3",
    name: "Golden Dahl Griffin",
    stage: 3,
    maxStage: 3,
    emoji: "🦅",
    title: "Master Telekinetic Guardian",
    description: "A magnificent mythical companion with feathers spun of pure golden tickets and telekinetic light!",
    requiredExp: 800,
  },
];

export const KOOBITS_SHOP_ITEMS: KooBitsShopItem[] = [
  {
    id: "item-wonka-hat",
    name: "Willy Wonka Top Hat",
    category: "hat",
    costKP: 150,
    costTickets: 1,
    icon: "🎩",
    description: "Willy Wonka's iconic plum top hat. Adds +10% bonus KoKo Points during reading!",
    rarity: "rare",
  },
  {
    id: "item-matilda-crown",
    name: "Telekinetic Crown",
    category: "avatar",
    costKP: 200,
    costTickets: 2,
    icon: "👑",
    description: "Sparkles with purple telekinesis energy when you answer quiz questions correctly!",
    rarity: "epic",
  },
  {
    id: "item-golden-bookmark",
    name: "Golden Foil Bookmark",
    category: "powerup",
    costKP: 100,
    icon: "🔖",
    description: "Saves your daily streak even if you miss a day! A golden lifesaver.",
    rarity: "rare",
  },
  {
    id: "item-oompa-costume",
    name: "Oompa Loompa Dungarees",
    category: "avatar",
    costKP: 250,
    costTickets: 1,
    icon: "🧑‍🌾",
    description: "Bright white dungarees with striped socks. You will whistle a happy tune!",
    rarity: "epic",
  },
  {
    id: "item-magic-chalk",
    name: "Floating Magic Chalk",
    category: "powerup",
    costKP: 180,
    icon: "🪄",
    description: "Eliminates one wrong option automatically in the daily KooBits Quiz!",
    rarity: "epic",
  },
  {
    id: "item-gobstopper-orb",
    name: "Everlasting Gobstopper Orb",
    category: "pet",
    costKP: 300,
    costTickets: 3,
    icon: "🔮",
    description: "Feeds your reading pet with unlimited EXP candy!",
    rarity: "legendary",
  },
  {
    id: "item-gold-cert",
    name: "Dahl Royal Champion Certificate",
    category: "certificate",
    costKP: 120,
    icon: "📜",
    description: "Unlocks the high-resolution printable Roald Dahl Reading Certificate with gold seal!",
    rarity: "common",
  },
];

export const KOOBITS_BADGES: KooBitsBadge[] = [
  {
    id: "badge-first-read",
    name: "First Story Voyage",
    icon: "⛵",
    description: "Completed your very first 15-minute daily reading adventure!",
    requirement: "Finish 1 chapter bite",
    category: "reading",
  },
  {
    id: "badge-golden-finder",
    name: "Golden Ticket Finder",
    icon: "🎫",
    description: "Discovered the secret golden ticket in Charlie & the Chocolate Factory!",
    requirement: "Complete Charlie Day 1",
    category: "special",
  },
  {
    id: "badge-telekinesis",
    name: "Mind Over Matter",
    icon: "🪄",
    description: "Unlocked Matilda's magic flying chalk through deep reading concentration!",
    requirement: "Complete Matilda Day 3",
    category: "special",
  },
  {
    id: "badge-streak-3",
    name: "3-Day Reading Flame",
    icon: "🔥",
    description: "Maintained a continuous 3-day reading habit!",
    requirement: "Reach a 3-day streak",
    category: "streak",
  },
  {
    id: "badge-quiz-ace",
    name: "KooBits Quiz Grand Master",
    icon: "⭐",
    description: "Scored 100% on any daily reading quiz on the first attempt!",
    requirement: "Get all quiz answers correct",
    category: "quiz",
  },
  {
    id: "badge-vocab-wizard",
    name: "Gobblefunk Lexicon Ace",
    icon: "🧙‍♂️",
    description: "Tapped and explored 10 tricky vocabulary words!",
    requirement: "Explore 10 vocabulary cards",
    category: "reading",
  },
];

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "Sophie B.", avatar: "👧", school: "Dahl Academy", minutesRead: 240, kokoPoints: 1850, streak: 12, badge: "Golden Ticket Finder" },
  { rank: 2, name: "Leo K.", avatar: "👦", school: "Wonka Elementary", minutesRead: 210, kokoPoints: 1620, streak: 9, badge: "Quiz Master" },
  { rank: 3, name: "Maya R.", avatar: "✨", school: "Crunchem Hall", minutesRead: 195, kokoPoints: 1480, streak: 8, badge: "Telekinetic Ace" },
  { rank: 4, name: "Lucas T.", avatar: "🚀", school: "St. Jude Primary", minutesRead: 165, kokoPoints: 1290, streak: 6, badge: "Book Devourer" },
  { rank: 5, name: "Aria M.", avatar: "🌸", school: "Greenwood School", minutesRead: 135, kokoPoints: 980, streak: 5, badge: "Vocab Wizard" },
  { rank: 6, name: "Oliver S.", avatar: "🎩", school: "Roald Dahl House", minutesRead: 120, kokoPoints: 850, streak: 4, badge: "Story Voyager" },
  { rank: 7, name: "You (Reader)", avatar: "🌟", school: "KoKoRead Scholars", minutesRead: 0, kokoPoints: 0, streak: 0, badge: "First Voyage", isUser: true },
];

export const LUCKY_SPIN_PRIZES = [
  { label: "50 KoKo Points", points: 50, icon: "🪙", color: "bg-amber-500" },
  { label: "1 Golden Ticket", tickets: 1, icon: "🎫", color: "bg-yellow-400" },
  { label: "100 KoKo Points", points: 100, icon: "💰", color: "bg-emerald-500" },
  { label: "Pet Snack (+50 EXP)", petExp: 50, icon: "🧁", color: "bg-pink-500" },
  { label: "Magic Chalk Shield", points: 30, icon: "🪄", color: "bg-purple-500" },
  { label: "250 Jackpot Points", points: 250, icon: "💎", color: "bg-indigo-600" },
];

export function getInitialUserProfile(ageGroup: AgeTier = "7-8"): UserProfile {
  return {
    name: "Young Reader",
    avatarId: "avatar-star",
    avatarEmoji: "🌟",
    ageGroup: ageGroup,
    currentBookId: "great_expectations",
    currentDay: 1,
    totalMinutesRead: 0,
    todayMinutesRead: 0,
    dailyTargetMinutes: 15,
    kokoPoints: 0,
    goldenTickets: 0,
    streakDays: 0,
    lastReadDate: "",
    completedQuests: [],
    completedChapters: [],
    unlockedItems: [],
    currentPetId: "pet-1",
    petLevel: 1,
    petExp: 0,
    badges: [],
    soundEnabled: true,
    speechRate: 0.95,
  };
}

export function getZeroUserProfile(ageGroup: AgeTier = "7-8"): UserProfile {
  return getInitialUserProfile(ageGroup);
}

export const INITIAL_USER_PROFILE: UserProfile = getInitialUserProfile();
