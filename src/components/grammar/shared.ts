// Grammar section shared data + helpers (client-safe, no React/hook code).
// UI strings (topic names, level labels) live in messages/sections/grammar.*.json
// under the "grammar" namespace — this file holds only ids, icons and logic.

import {
  Blocks,
  CircleHelp,
  Clock3,
  GitBranch,
  Hourglass,
  KeyRound,
  LetterText,
  MapPin,
  Repeat,
  Scale,
  TriangleAlert,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Level = "beginner" | "intermediate" | "advanced";

export interface GrammarTopic {
  /** Canonical English topic id sent to the AI + used as cache key part. */
  topic: string;
  /** i18n key under grammar.topics.<key>.{name,sub}. */
  key: string;
  icon: LucideIcon;
}

export const LEVEL_ORDER: Level[] = ["beginner", "intermediate", "advanced"];

// Rotating gradient chips for the topic grid (premium tints — no blue/indigo).
const TINT_CYCLE = [
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-teal-500 to-cyan-600",
  "from-orange-500 to-amber-600",
] as const;

// Hardcoded topic grid — 12 topics for Bengali-speaking learners.
const TOPIC_META: Pick<GrammarTopic, "topic" | "key" | "icon">[] = [
  { topic: "Tense basics", key: "tense", icon: Clock3 },
  {
    topic: "Present Perfect vs Past Simple",
    key: "presentPerfect",
    icon: Scale,
  },
  { topic: "Articles (a/an/the)", key: "articles", icon: LetterText },
  { topic: "Prepositions (in/on/at)", key: "prepositions", icon: MapPin },
  { topic: "Subject-Verb Agreement", key: "agreement", icon: Users },
  { topic: "Question Formation", key: "questions", icon: CircleHelp },
  { topic: "Conditionals", key: "conditionals", icon: GitBranch },
  { topic: "Passive Voice", key: "passive", icon: Repeat },
  { topic: "Modals (can/should/must)", key: "modals", icon: KeyRound },
  { topic: "Phrasal Verbs", key: "phrasal", icon: Blocks },
  {
    topic: "Common Mistakes by Bengali Speakers",
    key: "mistakes",
    icon: TriangleAlert,
  },
  { topic: "Since vs For", key: "sinceFor", icon: Hourglass },
];

export const TOPICS: (GrammarTopic & { tint: string })[] = TOPIC_META.map(
  (t, i) => ({ ...t, tint: TINT_CYCLE[i % TINT_CYCLE.length] })
);

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/** Convert 0-9 digits to Bengali numerals (e.g. 4 → "৪"). */
export function toBn(n: number): string {
  return String(n)
    .split("")
    .map((c) => (c >= "0" && c <= "9" ? BN_DIGITS[Number(c)] : c))
    .join("");
}

/** Locale-aware numeral: Bengali digits for bn, Latin digits otherwise. */
export function fmtNum(n: number, locale: string): string {
  return locale === "bn" ? toBn(n) : String(n);
}

/** Normalize caught errors into a message; unknown errors use the i18n fallback. */
export function errMessage(e: unknown, fallback: string): string {
  return e instanceof Error && e.message ? e.message : fallback;
}

/* ---- completed topics (per device/browser, tiny localStorage list) ---- */

const DONE_KEY = "bolo_grammar_done";

export function readDoneTopics(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(DONE_KEY);
    const list = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(list) ? list.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function saveDoneTopic(topicId: string): string[] {
  const list = readDoneTopics();
  if (!list.includes(topicId)) list.push(topicId);
  try {
    localStorage.setItem(DONE_KEY, JSON.stringify(list));
  } catch {
    // private mode / quota — completion badge just won't persist
  }
  return list;
}
