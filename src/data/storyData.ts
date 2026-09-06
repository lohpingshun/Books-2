import { Book } from "../types";
import { CHARLIE_BOOK } from "./charlieData";
import { MATILDA_BOOK } from "./matildaData";
import { ELEVATOR_BOOK } from "./elevatorData";
import { DANNY_BOOK } from "./dannyData";
import { MAGIC_FINGER_BOOK } from "./magicFingerData";
import { EXPECTATIONS_BOOK } from "./expectationsData";
import { GARDEN_BOOK } from "./gardenData";
import { POLLYANNA_BOOK } from "./pollyannaData";

export const ROALD_DAHL_LOCKED_REASON =
  "Locked for now — kids just memorise and repeat. Explore our new classics for fresh reading and comprehension!";

export const BOOKS_DATA: Book[] = [
  // Active Unlocked Children's Classics (8 chapters each)
  EXPECTATIONS_BOOK,
  GARDEN_BOOK,
  POLLYANNA_BOOK,
  // Roald Dahl Classics - Locked for now
  { ...CHARLIE_BOOK, isLocked: true, lockReason: ROALD_DAHL_LOCKED_REASON },
  { ...MATILDA_BOOK, isLocked: true, lockReason: ROALD_DAHL_LOCKED_REASON },
  { ...ELEVATOR_BOOK, isLocked: true, lockReason: ROALD_DAHL_LOCKED_REASON },
  { ...DANNY_BOOK, isLocked: true, lockReason: ROALD_DAHL_LOCKED_REASON },
  { ...MAGIC_FINGER_BOOK, isLocked: true, lockReason: ROALD_DAHL_LOCKED_REASON },
];

export const UNLOCKED_BOOKS = BOOKS_DATA.filter((b) => !b.isLocked);
export const LOCKED_BOOKS = BOOKS_DATA.filter((b) => b.isLocked);
export const ROALD_DAHL_BOOKS = BOOKS_DATA;

export function isBookLocked(bookId: string): boolean {
  const book = BOOKS_DATA.find((b) => b.id === bookId);
  return book?.isLocked ?? false;
}

export function getBookById(id: string): Book | undefined {
  return BOOKS_DATA.find((b) => b.id === id);
}

export function getChapterById(bookId: string, ageTier: string, chapterId: string) {
  const book = getBookById(bookId);
  if (!book) return undefined;
  const chapters = book.chaptersByAge[ageTier as keyof typeof book.chaptersByAge] || [];
  return chapters.find((c) => c.id === chapterId);
}
