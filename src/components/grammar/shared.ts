// Grammar section shared data + helpers (client-safe, no React/hook code).
// UI strings (topic names, level labels) live in messages/sections/grammar.*.json
// under the "grammar" namespace — this file holds only ids, icons and logic.

import {
  ArrowDownUp,
  Blocks,
  CircleHelp,
  Clock3,
  Combine,
  Ellipsis,
  Feather,
  Gauge,
  GitBranch,
  GraduationCap,
  History,
  Hourglass,
  KeyRound,
  LetterText,
  MapPin,
  MessagesSquare,
  Puzzle,
  Repeat,
  Scale,
  Shuffle,
  SlidersHorizontal,
  Split,
  TriangleAlert,
  Users,
  WandSparkles,
  Workflow,
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

/** Difficulty group of the topic grid — i18n key under grammar.groups.<key>. */
export type TopicGroupKey = "foundation" | "advanced";

export interface GrammarTopicGroup {
  key: TopicGroupKey;
  topics: (GrammarTopic & { tint: string })[];
}

// Rotating gradient chips for the foundation grid (premium tints — no blue/indigo).
const TINT_CYCLE = [
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-teal-500 to-cyan-600",
  "from-orange-500 to-amber-600",
] as const;

// Distinct rotation for the advanced grid — richer, C1-flavoured accents.
const ADVANCED_TINT_CYCLE = [
  "from-rose-500 to-pink-500",
  "from-amber-500 to-orange-500",
  "from-teal-500 to-cyan-600",
  "from-orange-500 to-amber-600",
  "from-emerald-500 to-teal-500",
] as const;

// Foundation grid — the core A2/B1 topics every learner needs first.
const FOUNDATION_META: Pick<GrammarTopic, "topic" | "key" | "icon">[] = [
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

// Advanced grid — C1-level topics: nuance, style and academic English.
// `topic` is the canonical English string sent to the AI (also the cache key
// part and the completed-topics id), so it must stay stable once released.
const ADVANCED_META: Pick<GrammarTopic, "topic" | "key" | "icon">[] = [
  {
    topic: "Inversion & Emphasis Structures",
    key: "inversion",
    icon: ArrowDownUp,
  },
  {
    topic: "Mixed & Inverted Conditionals",
    key: "mixedConditionals",
    icon: Shuffle,
  },
  { topic: "Cleft Sentences", key: "cleft", icon: Split },
  { topic: "Subjunctive & Unreal Uses", key: "subjunctive", icon: WandSparkles },
  { topic: "Participle Clauses", key: "participleClauses", icon: Combine },
  {
    topic: "Discourse Markers & Cohesion",
    key: "discourse",
    icon: Workflow,
  },
  {
    topic: "Hedging & Softening Language",
    key: "hedging",
    icon: Feather,
  },
  { topic: "Advanced Reported Speech", key: "reportedSpeech", icon: MessagesSquare },
  {
    topic: "Nominalisation & Academic Style",
    key: "nominalisation",
    icon: GraduationCap,
  },
  { topic: "Ellipsis & Substitution", key: "ellipsis", icon: Ellipsis },
  {
    topic: "Collocations & Word Partnerships",
    key: "collocations",
    icon: Puzzle,
  },
  {
    topic: "Register: Formal vs Informal English",
    key: "register",
    icon: SlidersHorizontal,
  },
  {
    topic: "Advanced Tense & Aspect Nuances",
    key: "tenseAspect",
    icon: History,
  },
  {
    topic: "Precision Articles & Quantifiers",
    key: "precisionArticles",
    icon: Gauge,
  },
];

function withTints(
  meta: Pick<GrammarTopic, "topic" | "key" | "icon">[],
  cycle: readonly string[]
): (GrammarTopic & { tint: string })[] {
  return meta.map((t, i) => ({ ...t, tint: cycle[i % cycle.length] }));
}

export const FOUNDATION_TOPICS = withTints(FOUNDATION_META, TINT_CYCLE);
export const ADVANCED_TOPICS = withTints(ADVANCED_META, ADVANCED_TINT_CYCLE);

/** Every topic (foundation first) — used for totals and done-badge lookups. */
export const TOPICS: (GrammarTopic & { tint: string })[] = [
  ...FOUNDATION_TOPICS,
  ...ADVANCED_TOPICS,
];

/** Topic grid grouped by difficulty, in display order. */
export const TOPIC_GROUPS: GrammarTopicGroup[] = [
  { key: "foundation", topics: FOUNDATION_TOPICS },
  { key: "advanced", topics: ADVANCED_TOPICS },
];

/** Small accent bar + heading chip color per group (premium, no blue/indigo). */
export const GROUP_ACCENT: Record<TopicGroupKey, { bar: string; chip: string }> = {
  foundation: {
    bar: "from-emerald-500 to-teal-500",
    chip: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
  advanced: {
    bar: "from-amber-500 to-orange-500",
    chip: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
};

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
const DONE_EVENT = "bolo_grammar_done_changed";

let doneCache: string[] | null = null;

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

/** Hydration-safe external-store snapshot for useSyncExternalStore users. */
export function subscribeDoneTopics(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(DONE_EVENT, onChange);
  return () => window.removeEventListener(DONE_EVENT, onChange);
}

export function getDoneTopicsSnapshot(): string[] {
  if (typeof window === "undefined") return [];
  if (doneCache === null) doneCache = readDoneTopics();
  return doneCache;
}

const EMPTY_DONE_TOPICS: string[] = [];

export function getDoneTopicsServerSnapshot(): string[] {
  return EMPTY_DONE_TOPICS;
}

export function saveDoneTopic(topicId: string): string[] {
  const list = readDoneTopics();
  if (!list.includes(topicId)) list.push(topicId);
  try {
    localStorage.setItem(DONE_KEY, JSON.stringify(list));
  } catch {
    // private mode / quota — completion badge just won't persist
  }
  doneCache = list;
  // Notify live consumers (the Learning Path listens for this).
  if (typeof window !== "undefined") window.dispatchEvent(new Event(DONE_EVENT));
  return list;
}
