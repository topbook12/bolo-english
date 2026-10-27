"use client";

// ---- spaced-repetition review state (localStorage "bolo_vocab_review_v1") ----
//
// The psychology behind the Learning Path's missing 4th phase: words fade
// along the Ebbinghaus forgetting curve, but each successful RECALL right
// before forgetting flattens the curve dramatically (retrieval practice /
// desirable difficulty).
//
// D22 upgrade — SM-2-LITE: every word now carries a per-word ease factor
// (default 2.5, clamped 1.3–2.8, Anki-style). The interval for a box is
// baseInterval(box) × (ease / 2.5), so words the learner keeps recalling
// stretch further out while shaky words come back sooner:
//
//   box 0 → 10 min      (just learned / just forgotten — comes back today)
//   box 1 → 1 day
//   box 2 → 3 days
//   box 3 → 7 days
//   box 4 → 14 days
//   box 5 → 30 days     (graduated — "পাকা")
//
//   remembered → box +1, interval scaled by ease, ease +0.05
//   forgot     → box 0 (back in 10 min), ease −0.20 (harder words stick
//                closer — the core SM-2 idea, minus the full 6-quality
//                complexity that a 2-button flashcard can't measure)
//
// There are no accounts and no API calls — progress lives on the device,
// like the learned-word list. Old entries without an ease field keep
// working: they read as ease 2.5 (the classic Leitner cadence).

const KEY = "bolo_vocab_review_v1";
const EVENT = "bolo_vocab_review_changed";

/** Interval in minutes for each box at NEUTRAL ease (index = box number). */
const INTERVALS_MIN = [10, 24 * 60, 3 * 24 * 60, 7 * 24 * 60, 14 * 24 * 60, 30 * 24 * 60];

/** Graduated box — the word is considered fully memorised. */
export const REVIEW_MASTERED_BOX = 5;

/** SM-2-lite ease bounds + nudges. */
const EASE_DEFAULT = 2.5;
const EASE_MIN = 1.3;
const EASE_MAX = 2.8;
const EASE_UP = 0.05; // per successful recall
const EASE_DOWN = 0.2; // per lapse (Anki-style "handle hard words sooner")

export interface ReviewEntry {
  box: number; // 0..5
  due: number; // epoch ms when the word is due again
  ease?: number; // SM-2-lite per-word ease (undefined = legacy entry = 2.5)
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
        // D22: PRESERVE the SM-2-lite ease through sanitization — dropping it
        // here made every gradeWord() call erase the other words' ease (each
        // card silently reset to the 2.5 default), so the adaptive schedule
        // never adapted. Clamp keeps hostile/legacy JSON bounded.
        const ease =
          typeof e.ease === "number"
            ? Math.min(EASE_MAX, Math.max(EASE_MIN, e.ease))
            : undefined;
        out[word] = {
          box: Math.min(5, Math.max(0, Math.round(e.box))),
          due: e.due,
          ...(ease !== undefined ? { ease } : {}),
        };
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
 * Grade one card with SM-2-lite.
 *  remembered → box +1, interval = baseInterval(box) × (ease/2.5), ease +0.05
 *  forgot     → box 0 (10 min), ease −0.20 — shaky words come back sooner
 * Both clamp ease into [1.3, 2.8]. Legacy entries (no ease) start at 2.5.
 */
export function gradeWord(word: string, remembered: boolean): void {
  const map = readReviewMap();
  const prev = map[word];
  const ease = Math.min(EASE_MAX, Math.max(EASE_MIN, (prev?.ease ?? EASE_DEFAULT) + (remembered ? EASE_UP : -EASE_DOWN)));
  if (remembered) {
    const box = Math.min(REVIEW_MASTERED_BOX, (prev?.box ?? 0) + 1);
    const scaled = Math.round(INTERVALS_MIN[box] * (ease / EASE_DEFAULT));
    map[word] = { box, due: Date.now() + scaled * 60_000, ease };
  } else {
    map[word] = { box: 0, due: Date.now() + INTERVALS_MIN[0] * 60_000, ease };
  }
  persist(map);
}

/**
 * Words due right now, best-ordered for the session — FORGOTTEN FIRST:
 *   • box 0 (just forgotten / never reviewed) comes back before everything
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
    .filter(({ box, due }) => (box >= REVIEW_MASTERED_BOX ? false : due <= now))
    .sort((a, b) => a.box - b.box || a.due - b.due)
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
