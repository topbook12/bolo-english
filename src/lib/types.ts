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
  heading: string;
  explanation: string; // Bangla explanation
  examples: { wrong: string; right: string; note: string }[];
}

export interface GrammarLessonContent {
  title: string;
  level: string;
  intro: string; // Bangla intro
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

export interface CallAnalysis {
  overallScore: number; // 0-100
  summary: string; // Bangla summary of the conversation quality
  fluencyScore: number; // 0-100
  grammarScore: number; // 0-100
  vocabularyScore: number; // 0-100
  mistakes: CorrectionItem[];
  grammarGaps: string[]; // topics to study (Bangla)
  vocabularyGaps: { word: string; meaning: string }[]; // words user struggled with / should learn
  suggestions: string[]; // Bangla actionable suggestions
  betterDialogue: { original: string; improved: string }[]; // 2-3 improved versions of user's sentences
}

export interface TranscriptLine {
  speaker: string;
  text: string;
  at: number;
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
  | "call-analysis";

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
