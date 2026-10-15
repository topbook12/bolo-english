// ---- learned-word tracking (localStorage "bolo_vocab_learned_v1") ----
// Same pattern as the listening done-store: a subscribable localStorage list
// consumed via useSyncExternalStore (hydration-safe). One entry per WORD —
// word+level is unique in the library, and a word learned at one level stays
// learned.
//
// Part of the learning path (Task 9): marking words learned drives the
// per-unit mastery ring (≥ VOCAB_UNIT_MASTERY words = unit words done) and
// applies the testing effect — the learner actively recalls each word.

const LEARNED_KEY = "bolo_vocab_learned_v1";
const LEARNED_EVENT = "bolo_vocab_learned_changed";

let learnedCache: string[] | null = null;

/** Read the list of learned words. Effects only — never during first render. */
export function readLearnedWords(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LEARNED_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** Hydration-safe external-store snapshot (stable reference until it changes). */
export function subscribeLearnedWords(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(LEARNED_EVENT, onChange);
  return () => window.removeEventListener(LEARNED_EVENT, onChange);
}

export function getLearnedWordsSnapshot(): string[] {
  if (typeof window === "undefined") return [];
  if (learnedCache === null) learnedCache = readLearnedWords();
  return learnedCache;
}

const EMPTY_LEARNED: string[] = [];

/** Server snapshot — always empty (localStorage is client-only). */
export function getLearnedWordsServerSnapshot(): string[] {
  return EMPTY_LEARNED;
}

function persist(list: string[]): void {
  try {
    window.localStorage.setItem(LEARNED_KEY, JSON.stringify(list));
  } catch {
    // storage unavailable (private mode) — progress stays session-only
  }
  learnedCache = list;
  window.dispatchEvent(new Event(LEARNED_EVENT));
}

/** Toggle a word's learned state and persist. Returns the new list. */
export function toggleLearnedWord(word: string): string[] {
  const list = readLearnedWords();
  const idx = list.indexOf(word);
  if (idx >= 0) list.splice(idx, 1);
  else list.push(word);
  persist(list);
  return list;
}

/** Mark a word learned (idempotent). */
export function markWordLearned(word: string): string[] {
  const list = readLearnedWords();
  if (!list.includes(word)) list.push(word);
  persist(list);
  return list;
}
