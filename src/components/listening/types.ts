// Local types for the built-in Listening Library (Task: listening library).
// The shared AI contract in @/lib/types stays untouched — the library story
// is converted to ListeningStoryContent at the component boundary.

/** Trilingual text: Bengali primary, English + Hindi optional. */
export interface Tri {
  readonly bn: string;
  readonly en: string;
  readonly hi: string;
}

export type LibraryLevel = "beginner" | "intermediate" | "advanced";

export type LibraryCategory =
  | "daily"
  | "travel"
  | "work"
  | "culture"
  | "science"
  | "inspire";

export interface LibraryVocabItem {
  readonly word: string;
  readonly meaning: Tri;
  /** English example sentence using the word. */
  readonly example: string;
}

export interface LibraryQuizQuestion {
  readonly question: Tri;
  /** Exactly 4 options. */
  readonly options: Tri[];
  /** Index of the correct option (0-3). */
  readonly answer: 0 | 1 | 2 | 3;
  readonly explain: Tri;
}

export interface LibraryStory {
  /** Stable slug — also used as the completion-tracking key. */
  readonly id: string;
  readonly level: LibraryLevel;
  readonly category: LibraryCategory;
  /** Approximate listening time in minutes. */
  readonly minutes: number;
  readonly title: Tri;
  /** 2-3 sentence summary in all three languages. */
  readonly summary: Tri;
  /** The story itself — always ENGLISH (this is listening practice). */
  readonly paragraphs: readonly string[];
  readonly vocabulary: readonly LibraryVocabItem[];
  readonly quiz: readonly LibraryQuizQuestion[];
}

/**
 * Pick the right language from a trilingual field.
 * Fallback chain: current locale → "en" → "bn" (hi last, so nothing renders blank).
 */
export function pickLang(field: Tri, locale: string): string {
  const value = locale === "bn" ? field.bn : locale === "hi" ? field.hi : field.en;
  return value || field.en || field.bn || field.hi;
}
