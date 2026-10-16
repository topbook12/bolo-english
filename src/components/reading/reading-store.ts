"use client";

// Reading completion tracking — same external-store pattern as the listening
// library (hydration-safe via useSyncExternalStore; storage key v1).

const DONE_KEY = "bolo_reading_done_v1";
const DONE_EVENT = "bolo_reading_done_changed";

let doneCache: string[] | null = null;

/** Read the list of completed passage ids. Effects-only — never during first render. */
export function readDoneIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(DONE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** Hydration-safe external-store subscription. */
export function subscribeDoneIds(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(DONE_EVENT, onChange);
  return () => window.removeEventListener(DONE_EVENT, onChange);
}

export function getDoneIdsSnapshot(): string[] {
  if (typeof window === "undefined") return [];
  if (doneCache === null) doneCache = readDoneIds();
  return doneCache;
}

const EMPTY_DONE: string[] = [];

/** Server snapshot — always empty (localStorage is client-only). */
export function getDoneIdsServerSnapshot(): string[] {
  return EMPTY_DONE;
}

/** Mark a passage completed and persist. Notifies subscribers via a window event. */
export function markReadingDone(id: string): string[] {
  const done = readDoneIds();
  if (!done.includes(id)) done.push(id);
  try {
    window.localStorage.setItem(DONE_KEY, JSON.stringify(done));
  } catch {
    // storage unavailable (private mode) — progress stays session-only
  }
  doneCache = done;
  window.dispatchEvent(new Event(DONE_EVENT));
  return done;
}
