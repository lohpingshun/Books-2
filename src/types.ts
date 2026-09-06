export type AgeTier = "5-6" | "7-8" | "9+";

export type BookId =
  | "charlie"
  | "matilda"
  | "elevator"
  | "danny"
  | "magic_finger"
  | "great_expectations"
  | "secret_garden"
  | "pollyanna";

export interface InteractiveHotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  label: string;
  icon: string;
  soundEffect: string;
  funFact: string;
  action: "sparkle" | "bounce" | "reveal" | "sound";
}

export interface CharacterAvatar {
  name: string;
  emoji: string;
  avatarUrl?: string;
  speech?: string;
  position: "left" | "center" | "right";
}

export interface VisualScene {
  id: string;
  title: string;
  backgroundGradient: string;
  illustrationType:
    | "wonka_gates"
    | "golden_ticket"
    | "chocolate_waterfall"
    | "inventing_room"
    | "matilda_library"
    | "chalk_magic"
    | "chokey_escape"
    | "miss_honey_cottage"
    | "great_glass_elevator"
    | "space_hotel"
    | "vermicious_knid"
    | "wonka_vites"
    | "minusland"
    | "danny_caravan"
    | "pheasant_roost"
    | "sleeping_potion"
    | "champions_flight"
    | "magic_finger_spark"
    | "mrs_winter_cat"
    | "duck_family_wings"
    | "tree_nest_life"
    | "flying_eggs"
    | "marsh_mist"
    | "blacksmith_forge"
    | "satis_house"
    | "london_river"
    | "secret_garden_door"
    | "robin_perch"
    | "garden_in_bloom"
    | "colin_standing"
    | "pollyanna_attic"
    | "crystal_prisms"
    | "glad_game_circle"
    | "rainbow_steps"
    | "attic_window"
    | "sunlit_veranda"
    | "pendleton_mansion"
    | "rainbow_prisms";
  characterAvatars: CharacterAvatar[];
  caption: string;
  interactiveHotspots?: InteractiveHotspot[];
}

export interface VocabWord {
  word: string;
  phonics: string;
  definition: string;
  funExample: string;
  emoji: string;
}

export interface MicroChallenge {
  id: string;
  title: string;
  type:
    | "word_scramble"
    | "golden_ticket_scratch"
    | "candy_sort"
    | "telekinesis_order"
    | "space_docking"
    | "pheasant_capture"
    | "potion_mix";
  prompt: string;
  targetWord?: string;
  scrambleLetters?: string[];
  options?: string[];
  correctOrder?: string[];
  rewardGems: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  visualClueEmoji?: string;
  points: number;
}

export interface GobblefunkWord {
  word: string;
  meaning: string;
  roaldDahlQuote: string;
}

export interface DialogueBite {
  speaker: string;
  text: string;
  avatarEmoji: string;
  side: "left" | "right";
}

export interface ReflectionPrompt {
  id: string;
  question: string;
  options: string[];
  correctInsightIndex?: number;
  insight: string;
  rewardKP: number;
}

export interface StoryPage {
  pageNumber: number;
  pageTitle: string;
  paragraphs: string[];
  dialogueBites?: DialogueBite[];
  reflectionPrompt?: ReflectionPrompt;
  sceneIllustration?: string;
  bgAtmosphere?: string;
}

export interface ChapterBite {
  id: string;
  dayNumber: number;
  title: string;
  subtitle: string;
  estReadingMinutes: number;
  totalWordCount?: number;
  summary: string;
  visualScenes: VisualScene[];
  paragraphs?: string[];
  pages?: StoryPage[];
  dialogueBites?: DialogueBite[];
  vocabList: VocabWord[];
  microChallenge: MicroChallenge;
  quizQuestions: QuizQuestion[];
  dahlGobblefunk?: GobblefunkWord[];
}

export type Book = {
  id: BookId;
  title: string;
  author: string;
  badgeTitle: string;
  coverColor: string;
  accentColor: string;
  borderColor: string;
  themeIcon: string;
  descriptionByAge: Record<AgeTier, string>;
  chaptersByAge: Record<AgeTier, ChapterBite[]>;
  isLocked?: boolean;
  lockReason?: string;
};

export type BookData = Book;

export interface PetEvolution {
  id: string;
  name: string;
  stage: number;
  maxStage: number;
  emoji: string;
  title: string;
  description: string;
  requiredExp: number;
}

export interface KooBitsShopItem {
  id: string;
  name: string;
  category: "avatar" | "pet" | "hat" | "certificate" | "powerup";
  costKP: number;
  costTickets?: number;
  icon: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export interface KooBitsBadge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlockedAt?: string;
  requirement: string;
  category: "reading" | "quiz" | "streak" | "special";
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  school: string;
  minutesRead: number;
  kokoPoints: number;
  streak: number;
  badge: string;
  isUser?: boolean;
}

export interface UserProfile {
  name: string;
  avatarId: string;
  avatarEmoji: string;
  ageGroup: AgeTier;
  currentBookId: BookId;
  currentDay: number;
  totalMinutesRead: number;
  todayMinutesRead: number;
  dailyTargetMinutes: number;
  kokoPoints: number;
  goldenTickets: number;
  streakDays: number;
  lastReadDate: string;
  completedQuests?: string[];
  completedChapters: string[];
  unlockedItems: string[];
  currentPetId: string;
  petLevel: number;
  petExp: number;
  badges: string[];
  soundEnabled: boolean;
  speechRate: number; // 0.8 to 1.2
}
