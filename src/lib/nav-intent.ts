// ─── Cross-tab navigation intents ───
// The Learning Path ("path" tab) sends the student into the exact spot of
// another section: a specific vocab unit, a specific grammar lesson, a
// specific listening episode, or the reading library filtered to a unit
// (unit 0 = the bonus/standalone passages). Tabs are client-side state in AppShell, so a
// deep link is a one-shot "intent": set it here, switch tab, the target
// section consumes (and clears) it inside an effect. Effects-only — never
// read during first render — so hydration stays safe.

import type { LibraryLevel } from "./library-types";

export type NavIntent =
  | { tab: "vocab"; level: LibraryLevel; unit: number }
  | { tab: "grammar"; level: LibraryLevel; topic: string; topicName?: string }
  | { tab: "listening"; slug: string }
  | { tab: "reading"; unit: number };

const INTENT_KEY = "bolo_nav_intent";
const INTENT_EVENT = "bolo_nav_intent_changed";

export function setNavIntent(intent: NavIntent): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(INTENT_KEY, JSON.stringify(intent));
  } catch {
    // storage unavailable — navigation still works, deep link is lost
  }
  window.dispatchEvent(new Event(INTENT_EVENT));
}

/** Consume the pending intent (read + clear). Call from effects only. */
export function takeNavIntent(): NavIntent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(INTENT_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(INTENT_KEY);
    const parsed = JSON.parse(raw) as NavIntent;
    if (
      parsed &&
      (parsed.tab === "vocab" ||
        parsed.tab === "grammar" ||
        parsed.tab === "listening" ||
        parsed.tab === "reading")
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

/** Read the pending intent WITHOUT clearing it (for outer shells that must
 *  switch their own tab before the inner consumer takes it). Effects only. */
export function peekNavIntent(): NavIntent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(INTENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as NavIntent;
    if (
      parsed &&
      (parsed.tab === "vocab" ||
        parsed.tab === "grammar" ||
        parsed.tab === "listening" ||
        parsed.tab === "reading")
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

/** Subscribe to intent changes (fired right after set). */
export function subscribeNavIntent(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(INTENT_EVENT, onChange);
  return () => window.removeEventListener(INTENT_EVENT, onChange);
}
