// Shared AI contract types used by the unified /api/ai endpoint,
// all section components and the progress module.

export interface DailyWord {
  word: string;
  pronunciation: string; // approx Bangla-friendly phonetics e.g. "রিলাক্স (রি-লাক্স)"
  partOfSpeech: string;
  banglaMeaning: string;
  englishMeaning: string;
  examples: string[]; // 2 example sentences using the word
  usageTip: string; // when/how to use in real life (Bangla)
}

export interface GrammarSectionItem {
  heading: string; // may start with an emoji
  /** One-line lead-in (v4 DB lessons). */
  lead?: string;
  /** v4 point-form bullets — the primary explanation. */
  points?: string[];
  /** v4 formula/pattern highlighted box. */
  formula?: string;
  /** v4 optional comparison table. */
  table?: { head: string[]; rows: string[][] };
  /** Legacy paragraph explanation (bank/AI content) — fallback. */
  explanation?: string;
  examples: { wrong: string; right: string; note: string }[];
}

export interface GrammarLessonContent {
  title: string;
  level: string;
  intro: string; // Bangla intro
  /** v4 roadmap — one step per section, shown at the top of the lesson. */
  roadmap?: string[];
  sections: GrammarSectionItem[];
  tips: string[]; // practical tips in Bangla
}

export interface QuizQuestion {
  question: string;
  options: string[]; // 4 options
  answer: number; // index of correct option
  explanation: string; // Bangla explanation
}

export interface ListeningStoryContent {
  title: string;
  level: string;
  story: string[]; // paragraphs in English (short sentences)
  banglaSummary: string;
  questions: QuizQuestion[];
}

export interface CorrectionItem {
  original: string;
  corrected: string;
  type: string; // grammar | vocabulary | pronunciation-spelling | better-alternative
  explanation: string; // Bangla
}

export interface RealtimeCorrections {
  corrections: CorrectionItem[];
  encouragement: string; // one line Bangla motivation
}

export interface ChatPartnerReply {
  reply: string; // English reply from AI partner
  banglaHint: string; // short Bangla hint about the reply
  corrections: CorrectionItem[];
  followUp: string; // a follow-up question in English to keep conversation going
}

/* ── CALL ANALYSIS (deep coach) ───────────────────────────────────────────
 * v2 "deep analysis" fields are ALL optional so previously stored analyses
 * (Sessions → analysis JSON) and old clients keep rendering untouched. */

/** One fixed mistake bucket — lets the UI group mistakes and track
 * recurring weaknesses across sessions. */
export type MistakeCategory =
  | "tense"
  | "article"
  | "preposition"
  | "word-choice"
  | "agreement"
  | "vocabulary"
  | "sentence-structure"
  | "other";

/** major = blocks understanding / repeated basic error; minor = polish. */
export type MistakeSeverity = "minor" | "major";

export interface AnalysisMistake {
  original: string;
  corrected: string;
  /** Deprecated alias of `category` — still filled by the server so old
   * UI code (AiPartner / ProgressSection) keeps working. */
  type: string;
  explanation: string;
  /** Deep-analysis additions (absent in old stored rows). */
  category?: MistakeCategory;
  severity?: MistakeSeverity;
}

/** One "how to develop further" roadmap step with a concrete drill. */
export interface AnalysisFocusStep {
  title: string;
  why: string;
  drill: string;
}

/** Objective numbers the SERVER computes from the learner's own lines
 * (never trusted from the LLM). */
export interface AnalysisStats {
  sentences: number;
  avgWordsPerSentence: number;
  uniqueWords: number;
  /** How many of the learner's lines the analysis covered — powers the
   * honest "N of M lines captured" note. */
  analyzedLines?: number;
}

export interface CallAnalysis {
  overallScore: number; // 0-100
  summary: string; // Bangla summary of the conversation quality
  fluencyScore: number; // 0-100
  grammarScore: number; // 0-100
  vocabularyScore: number; // 0-100
  mistakes: AnalysisMistake[];
  grammarGaps: string[]; // topics to study (Bangla)
  vocabularyGaps: { word: string; meaning: string }[]; // words user struggled with / should learn
  suggestions: string[]; // Bangla actionable suggestions
  betterDialogue: { original: string; improved: string }[]; // 2-3 improved versions of user's sentences
  /* ── deep-analysis v2 (optional for backward compatibility) ── */
  /** 2-4 things the learner did WELL — motivation matters. */
  strengths?: string[];
  /** 2-3 item "develop further" roadmap: what to practice, why, 5-min drill. */
  focusPlan?: AnalysisFocusStep[];
  /** Server-computed conversation numbers. */
  stats?: AnalysisStats;
  /** Mistake categories that recurred from the learner's previous sessions. */
  repeatedCategories?: string[];
}

export interface TranscriptLine {
  speaker: string;
  text: string;
  at: number;
  /** Stable per-participant identity for attribution when display names collide
   *  (two unnamed peers both broadcast "Student"). Optional so old records and
   *  AI-partner transcripts without a peerId keep working unchanged. */
  peerId?: string;
}

/** Result of the library "check my sentence" feature (feature: sentence-check). */
export interface SentenceCheckResult {
  verdict: "correct" | "incorrect";
  /** The corrected sentence (same as the learner's if already correct). */
  corrected: string;
  /** What was right / wrong, in the learner's UI language. */
  explanation: string;
  /** 2-3 short tips to use the word better, in the UI language. */
  suggestions: string[];
  /** A more natural, advanced rewrite of the learner's sentence. */
  improved: string;
}

/** Result of the library "ask a question" feature (feature: content-ask). */
export interface ContentAnswer {
  /** Clear answer in the learner's UI language (may contain \n). */
  answer: string;
  /** Optional 2-4 short key points in the UI language. */
  bullets: string[];
}

// Feature payload map for POST /api/ai
export type AiFeature =
  | "grammar-lesson"
  | "grammar-quiz"
  | "listening-story"
  | "vocab-daily"
  | "vocab-lookup"
  | "vocab-quiz"
  | "chat-partner"
  | "realtime-correction"
  | "call-analysis"
  | "sentence-check"
  | "content-ask";

export interface AiRequestBody {
  deviceId: string;
  feature: AiFeature;
  payload: Record<string, unknown>;
}

export interface AiResponseBody {
  ok: boolean;
  data?: unknown;
  error?: string;
}
