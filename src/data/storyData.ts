import { Book } from "../types";
import { EXPECTATIONS_BOOK } from "./expectationsData";
import { OLIVER_BOOK } from "./oliverData";
import { CAROL_BOOK } from "./carolData";
import { DAVID_COPPERFIELD_BOOK } from "./davidCopperfieldData";
import { TALE_OF_TWO_CITIES_BOOK } from "./taleOfTwoCitiesData";

export const BOOKS_DATA: Book[] = [
  // Charles Dickens Masterpieces Collection (8 chapters each, fully unlocked)
  EXPECTATIONS_BOOK,
  OLIVER_BOOK,
  CAROL_BOOK,
  DAVID_COPPERFIELD_BOOK,
  TALE_OF_TWO_CITIES_BOOK,
];

export const UNLOCKED_BOOKS = BOOKS_DATA.filter((b) => !b.isLocked);
export const LOCKED_BOOKS = BOOKS_DATA.filter((b) => b.isLocked);
export const CHARLES_DICKENS_BOOKS = BOOKS_DATA;
// Legacy alias for compatibility
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
