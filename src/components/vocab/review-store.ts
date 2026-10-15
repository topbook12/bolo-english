"use client";

// ---- spaced-repetition review state (localStorage "bolo_vocab_review_v1") ----
//
// The psychology behind the Learning Path's missing 4th phase: words fade
// along the Ebbinghaus forgetting curve, but each successful RECALL right
// before forgetting flattens the curve dramatically (retrieval practice /
// desirable difficulty). A Leitner-box schedule is the simplest, most
// transparent way to give every learned word that treatment:
//
//   box 0 → 10 min      (just learned / just forgotten — comes back today)
//   box 1 → 1 day
//   box 2 → 3 days
//   box 3 → 7 days
//   box 4 → 14 days
//   box 5 → 30 days     (graduated — "পাকা")
//
// "Remembered" promotes a word one box; "forgot" drops it back to box 0.
// There are no accounts and no API calls — progress lives on the device,
// like the learned-word list.

const KEY = "bolo_vocab_review_v1";
const EVENT = "bolo_vocab_review_changed";

/** Interval in minutes for each box (index = box number). */
const INTERVALS_MIN = [10, 24 * 60, 3 * 24 * 60, 7 * 24 * 60, 14 * 24 * 60, 30 * 24 * 60];

/** Graduated box — the word is considered fully memorised. */
export const REVIEW_MASTERED_BOX = 5;

export interface ReviewEntry {
  box: number; // 0..5
  due: number; // epoch ms when the word is due again
}

export type ReviewMap = Record<string, ReviewEntry>;

let mapCache: ReviewMap | null = null;

/** Read the raw review map. Effects only — never during first render. */
export function readReviewMap(): ReviewMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const out: ReviewMap = {};
    for (const [word, entry] of Object.entries(parsed as Record<string, unknown>)) {
      if (!entry || typeof entry !== "object") continue;
      const e = entry as Partial<ReviewEntry>;
      if (typeof e.box === "number" && typeof e.due === "number") {
        out[word] = { box: Math.min(5, Math.max(0, Math.round(e.box))), due: e.due };
      }
    }
    return out;
  } catch {
    return {};
  }
}

/** Hydration-safe external-store snapshot (stable reference until it changes). */
export function subscribeReviewMap(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

export function getReviewMapSnapshot(): ReviewMap {
  if (typeof window === "undefined") return {};
  if (mapCache === null) mapCache = readReviewMap();
  return mapCache;
}

const EMPTY_MAP: ReviewMap = {};

export function getReviewMapServerSnapshot(): ReviewMap {
  return EMPTY_MAP;
}

function persist(map: ReviewMap): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    // storage unavailable (private mode) — review progress stays session-only
  }
  mapCache = map;
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Grade one card. `remembered` promotes the box (interval grows); `forgot`
 * resets to box 0 so the word comes back in 10 minutes.
 */
export function gradeWord(word: string, remembered: boolean): void {
  const map = readReviewMap();
  const prev = map[word];
  const box = remembered ? Math.min(REVIEW_MASTERED_BOX, (prev?.box ?? 0) + 1) : 0;
  map[word] = { box, due: Date.now() + INTERVALS_MIN[box] * 60_000 };
  persist(map);
}

/**
 * Words due right now, best-ordered for the session:
 *   • learned words with NO review entry count as due (box 0) — first review
 *   • then the lowest box first, oldest due first
 * Pass the device's learned-word list so we never schedule unlearned words.
 */
export function dueWords(learned: string[], now = Date.now()): string[] {
  const map = readReviewMap();
  return learned
    .map((word) => {
      const entry = map[word];
      const box = entry?.box ?? 0;
      const due = entry?.due ?? 0; // no entry → overdue since epoch → first
      return { word, box, due };
    })
    .filter(({ box, due }) => box >= REVIEW_MASTERED_BOX ? false : due <= now)
    .sort((a, b) => (a.box - b.box) || (a.due - b.due))
    .map(({ word }) => word);
}

/** How many learned words are currently due (for badges/cards). */
export function countDue(learned: string[], now = Date.now()): number {
  return dueWords(learned, now).length;
}

/** How many learned words have graduated (box 5). */
export function countMastered(learned: string[]): number {
  const map = readReviewMap();
  return learned.filter((w) => (map[w]?.box ?? 0) >= REVIEW_MASTERED_BOX).length;
}
