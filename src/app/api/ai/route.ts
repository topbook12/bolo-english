import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { checkRateLimit, checkIpLimit } from "@/lib/rate-limit";
import { cleanStr } from "@/lib/validate";
import { logAnalyticsEvent } from "@/lib/analytics-server";
import { reqLocale, apiMsg, type ApiLocale } from "@/lib/api-i18n";
import { scenarioById, withName } from "@/lib/scenarios";
import { simSetById } from "@/lib/simulator-bank";
import { GeminiError, geminiJson, getAiLevel, getUserName, getUserApiKeyWithMeta } from "@/lib/gemini";
import { pruneAiCache } from "@/lib/ai-cache-prune";
import type {
  AnalysisMistake,
  CallAnalysis,
  ChatPartnerReply,
  ContentAnswer,
  DailyWord,
  GrammarLessonContent,
  ListeningStoryContent,
  MistakeCategory,
  QuizQuestion,
  SentenceCheckResult,
} from "@/lib/types";

export const maxDuration = 60;

/* ── Explanation-language policy (requirements: not Bengali-only) ─────────
 * The UI has 3 locales (bn/en/hi). The LEARNING content (English examples,
 * sentences, questions, stories, words) always stays English — that is the
 * skill being practiced. Every field that EXISTS to explain (intro,
 * explanation, note, tips, summaries, usage tips, quiz explanations,
 * analysis text) is written in the user's selected UI language:
 *   bn → simple Bengali (primary audience)
 *   en → simple clear English (international users)
 *   hi → simple Hindi
 * Prompts below carry the directive per request, and AI cache keys are
 * locale-scoped so switching language re-generates rather than serving the
 * old language from cache. */
interface LangPolicy {
  /** Master directive prepended to every prompt. */
  rule: string;
  /** Short phrase used inside JSON field hints, e.g. "কেন — বাংলায়". */
  short: string;
  /** Pronunciation-guide style for vocab. */
  pron: string;
}

const LANG_POLICY: Record<string, LangPolicy> = {
  bn: {
    rule:
      "সব ব্যাখ্যা, টিপস ও সাজেশন অবশ্যই সহজ বাংলায় লিখবে। ইংরেজি উদাহরণ ও বাক্য থাকবে ইংরেজিতে।",
    short: "বাংলায়",
    pron: "বাংলা উচ্চারণ যেমন: কম্ফর্টেবল",
  },
  en: {
    rule:
      "Write every explanation, note, tip and suggestion in SIMPLE, CLEAR English (short sentences, no jargon — the learner is not fluent yet). Example sentences and the learning content itself stay in natural English.",
    short: "in simple English",
    pron: "easy pronunciation respelling, e.g. KUMF-ter-bul",
  },
  hi: {
    rule:
      "सभी व्याख्या, नोट्स, टिप्स और सुझाव आसान हिंदी में लिखें। उदाहरण वाक्य और अंग्रेज़ी सीखने की सामग्री अंग्रेज़ी में रहेगी।",
    short: "हिंदी में",
    pron: "हिंदी उच्चारण जैसे: कम्फ़र्टेबल",
  },
};

// English is the international default; bn/hi opt in via the language switch.
const DEFAULT_POLICY = LANG_POLICY.en;

/* ── Prompt-quality building blocks (Task 26-b) ───────────────────────────
 * Shared across every feature so each prompt carries the same
 * ROLE → TASK → LEVEL → QUALITY-BAR → FORMAT discipline without bloating
 * the strings. Level rules are concrete CEFR anchors the model can follow;
 * unknown levels safely fall back to beginner (the app's default level). */
const LEVEL_RULES: Record<string, string> = {
  beginner:
    "beginner (CEFR A1-A2): use ONLY high-frequency everyday words; sentences of 10 words or fewer; concrete familiar topics. If a harder word is unavoidable, add a very simple gloss right after it",
  intermediate:
    "intermediate (CEFR B1-B2): natural everyday English with common idioms; sentences up to ~18 words; concrete topics plus opinions with short reasons",
  advanced:
    "advanced (CEFR C1): idiomatic, nuanced English with natural collocations; varied sentence lengths; abstract topics and precise vocabulary",
};
const levelRule = (level: string): string => LEVEL_RULES[level] ?? LEVEL_RULES.beginner;

/** Real-life scenario list — keeps generated content in the students' world
 * instead of generic AI prose. */
const SCENARIOS =
  "real-life student scenarios (school, family, market shopping, food, sports, mobile phones, travel)";

const JSON_ONLY =
  "Return ONLY raw JSON — no markdown fences, no commentary before or after.";

function jsonOk(data: unknown) {
  return NextResponse.json({ ok: true, data });
}
function jsonErr(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

/** Translate a thrown error into the user's UI language via error codes. */
function geminiErrMsg(locale: ApiLocale, e: unknown): string {
  if (e instanceof GeminiError && e.code) {
    if (e.code === "aiFailed") {
      // e.message is the raw technical reason (never user-language specific)
      return apiMsg(locale, "aiFailedReason", { reason: e.message.slice(0, 140) });
    }
    return apiMsg(locale, e.code);
  }
  return (e as Error)?.message || apiMsg(locale, "aiFailed");
}

async function cachedJson<T>(
  feature: string,
  cacheKey: string,
  apiKey: string,
  prompt: string,
  temperature = 0.6,
  opts: { maxOutputTokens?: number } = {}
): Promise<T> {
  const hit = await db.aiCache.findUnique({
    where: { feature_cacheKey: { feature, cacheKey } },
  });
  if (hit) return JSON.parse(hit.response) as T;
  // Per-feature output cap + label for token accounting. Capped budgets keep
  // long answers from truncating mid-JSON while preventing runaway replies.
  const data = await geminiJson<T>(apiKey, prompt, { temperature, label: feature, ...opts });
  await db.aiCache
    .create({ data: { feature, cacheKey, response: JSON.stringify(data) } })
    .catch(() => null);
  // Keep the cache under its byte cap (LRU) so the free Turso tier never
  // overflows — fire-and-forget, never blocks the response.
  void pruneAiCache();
  return data;
}

// Bounded prompt inputs — every uncapped string here lands in BOTH the model
// prompt AND the shared AiCache key (audit: a giant topic once meant a giant
// cacheKey row + token burn on the caller's own key).
const LEVELS = ["beginner", "intermediate", "advanced"] as const;
const cleanLevel = (v: unknown, fallback: string): string => {
  const s = typeof v === "string" ? v.trim() : "";
  return (LEVELS as readonly string[]).includes(s) ? s : fallback;
};

/* ── CALL-ANALYSIS helpers (feature: call-analysis ONLY) ──────────────────
 * Deep-analysis support: defensive transcript parsing, learner-line
 * attribution (peerId-first with speaker-name fallback), objective learner
 * stats, cross-session trend awareness and a strict output sanitizer.
 * Nothing here is used by the other features. */

const ANALYSIS_CATEGORIES: readonly MistakeCategory[] = [
  "tense",
  "article",
  "preposition",
  "word-choice",
  "agreement",
  "vocabulary",
  "sentence-structure",
  "other",
];

/** Wire shape of one transcript line. `peerId` is optional — newer clients
 * (12-b) attach it, older ones only send speaker/text. */
interface AnalysisLine {
  speaker: string;
  text: string;
  peerId?: string;
}

/** Defensive parse of the raw transcript array the client sent. */
function toAnalysisLines(raw: unknown[]): AnalysisLine[] {
  const out: AnalysisLine[] = [];
  for (const item of raw) {
    if (typeof item !== "object" || item === null) continue;
    const l = item as Record<string, unknown>;
    const text = typeof l.text === "string" ? l.text.trim() : "";
    if (!text) continue;
    const speaker =
      typeof l.speaker === "string" && l.speaker.trim() ? l.speaker.trim() : "?";
    const peerId = typeof l.peerId === "string" && l.peerId ? l.peerId : undefined;
    out.push(peerId ? { speaker, text, peerId } : { speaker, text });
  }
  return out;
}

const clampScore = (v: unknown): number => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(100, Math.max(0, Math.round(n))) : 0;
};

const asStringArray = (v: unknown, cap: number): string[] =>
  (Array.isArray(v) ? v : [])
    .filter((x): x is string => typeof x === "string" && x.trim().length > 0)
    .map((s) => s.trim())
    .slice(0, cap);

function asCategory(v: unknown): MistakeCategory {
  const s = typeof v === "string" ? v.toLowerCase().trim() : "";
  return (ANALYSIS_CATEGORIES as readonly string[]).includes(s)
    ? (s as MistakeCategory)
    : "other";
}

/** Sentence count inside one spoken line (Bangla danda included). */
function countSentences(text: string): number {
  const parts = text
    .split(/[.!?]+|\u0964+/g)
    .map((s) => s.trim())
    .filter(Boolean);
  return parts.length || (text.trim() ? 1 : 0);
}

/** Objective conversation numbers — computed from the learner's own lines,
 * never from the LLM (LLM numbers get overwritten with these). */
function computeLearnerStats(lines: AnalysisLine[]): {
  sentences: number;
  avgWordsPerSentence: number;
  uniqueWords: number;
} {
  let sentences = 0;
  let words = 0;
  const unique = new Set<string>();
  for (const l of lines) {
    sentences += countSentences(l.text);
    for (const w of l.text.split(/\s+/)) {
      const clean = w.toLowerCase().replace(/[^\p{L}\p{N}'-]/gu, "");
      if (!clean) continue;
      words += 1;
      unique.add(clean);
    }
  }
  return {
    sentences,
    avgWordsPerSentence: sentences ? Math.round((words / sentences) * 10) / 10 : 0,
    uniqueWords: unique.size,
  };
}

interface AnalysisTrend {
  /** English hint injected into the prompt ("" when nothing repeated). */
  hint: string;
  /** category → how often it appeared in the previous sessions. */
  prevCategories: Map<string, number>;
}

/** Cross-session trend: last 3 stored sessions for this device. DB is
 * best-effort — any failure just means no trend hint. */
async function buildAnalysisTrend(deviceId: string): Promise<AnalysisTrend> {
  const empty: AnalysisTrend = { hint: "", prevCategories: new Map() };
  try {
    const rows = await db.speakingSession.findMany({
      where: { deviceId },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: { analysis: true },
    });
    const catCount = new Map<string, number>();
    const gapCount = new Map<string, number>();
    for (const row of rows) {
      let parsed: unknown;
      try {
        parsed = JSON.parse(row.analysis);
      } catch {
        continue;
      }
      const a = (typeof parsed === "object" && parsed !== null ? parsed : {}) as Record<string, unknown>;
      for (const m of Array.isArray(a.mistakes) ? a.mistakes : []) {
        if (typeof m !== "object" || m === null) continue;
        // Only recognized deep-analysis categories count; legacy rows store
        // free-text `type` ("grammar"…) that would map to "other" noise.
        const raw = (m as Record<string, unknown>).category;
        const cat = typeof raw === "string" ? raw.toLowerCase().trim() : "";
        if (cat && cat !== "other" && (ANALYSIS_CATEGORIES as readonly string[]).includes(cat)) {
          catCount.set(cat, (catCount.get(cat) ?? 0) + 1);
        }
      }
      for (const g of asStringArray(a.grammarGaps, 8)) {
        const key = g.slice(0, 60);
        gapCount.set(key, (gapCount.get(key) ?? 0) + 1);
      }
    }
    const topCats = [...catCount.entries()].sort((x, y) => y[1] - x[1]).slice(0, 5);
    const topGaps = [...gapCount.entries()].sort((x, y) => y[1] - x[1]).slice(0, 5);
    if (topCats.length === 0 && topGaps.length === 0) return empty;
    const parts: string[] = [];
    if (topCats.length > 0) {
      parts.push(`mistake categories repeated before: ${topCats.map(([c, n]) => `${c} (x${n})`).join(", ")}`);
    }
    if (topGaps.length > 0) {
      parts.push(`grammar topics from earlier sessions: ${topGaps.map(([g, n]) => (n > 1 ? `${g} (x${n})` : g)).join("; ")}`);
    }
    return {
      hint: `TREND — this learner's history (last 3 sessions): ${parts.join(" | ")}. Emphasize whether these problems recur today, praise progress where fixed, and make focusPlan attack the most repeated ones.`,
      prevCategories: catCount,
    };
  } catch {
    return empty; // DB unavailable — analysis still works, just no trend
  }
}

/** Strict sanitizer for the model's reply — a malformed field never reaches
 * the client; deep fields are capped and normalized. Stats are ALWAYS the
 * server-computed ones (never trusted from the LLM). */
function sanitizeCallAnalysis(
  raw: unknown,
  stats: { sentences: number; avgWordsPerSentence: number; uniqueWords: number; analyzedLines: number }
): CallAnalysis {
  const r = (typeof raw === "object" && raw !== null ? raw : {}) as Record<string, unknown>;

  const seen = new Set<string>();
  const mistakes: AnalysisMistake[] = (Array.isArray(r.mistakes) ? r.mistakes : [])
    // audit token fix #7: outer cap aligned to the prompt cap (max 10) so the
    // model can never make us sanitize — and pay for — items we then drop
    .slice(0, 10)
    .flatMap((m): AnalysisMistake[] => {
      if (typeof m !== "object" || m === null) return [];
      const o = m as Record<string, unknown>;
      const original = typeof o.original === "string" ? o.original.trim() : "";
      const corrected = typeof o.corrected === "string" ? o.corrected.trim() : "";
      const explanation = typeof o.explanation === "string" ? o.explanation.trim() : "";
      if (!original || !corrected) return [];
      const category = asCategory(o.category ?? o.type); // legacy alias accepted
      // dedupe by underlying grammar point (same bucket + same fix)
      const key = `${category}::${corrected.toLowerCase().replace(/\s+/g, " ")}`;
      if (seen.has(key)) return [];
      seen.add(key);
      const severity = o.severity === "major" ? "major" : "minor";
      return [{ original, corrected, type: category, category, severity, explanation }];
    })
    .slice(0, 10);

  const betterDialogue = (Array.isArray(r.betterDialogue) ? r.betterDialogue : [])
    // prompt cap 2-3 → sanitize at most 3
    .slice(0, 3)
    .flatMap((d) => {
      if (typeof d !== "object" || d === null) return [];
      const o = d as Record<string, unknown>;
      const original = typeof o.original === "string" ? o.original.trim() : "";
      const improved = typeof o.improved === "string" ? o.improved.trim() : "";
      return original && improved ? [{ original, improved }] : [];
    })
    .slice(0, 3);

  const vocabularyGaps = (Array.isArray(r.vocabularyGaps) ? r.vocabularyGaps : [])
    // prompt cap 3-6 → sanitize at most 6
    .slice(0, 6)
    .flatMap((v) => {
      if (typeof v !== "object" || v === null) return [];
      const o = v as Record<string, unknown>;
      const word = typeof o.word === "string" ? o.word.trim() : "";
      const meaning = typeof o.meaning === "string" ? o.meaning.trim() : "";
      return word && meaning ? [{ word, meaning }] : [];
    })
    .slice(0, 6);

  const focusPlan = (Array.isArray(r.focusPlan) ? r.focusPlan : [])
    .slice(0, 3)
    .flatMap((f) => {
      if (typeof f !== "object" || f === null) return [];
      const o = f as Record<string, unknown>;
      const title = typeof o.title === "string" ? o.title.trim() : "";
      const why = typeof o.why === "string" ? o.why.trim() : "";
      const drill = typeof o.drill === "string" ? o.drill.trim() : "";
      return title ? [{ title, why, drill }] : [];
    })
    .slice(0, 3);

  return {
    overallScore: clampScore(r.overallScore),
    fluencyScore: clampScore(r.fluencyScore),
    grammarScore: clampScore(r.grammarScore),
    vocabularyScore: clampScore(r.vocabularyScore),
    summary: typeof r.summary === "string" ? r.summary.trim() : "",
    strengths: asStringArray(r.strengths, 4),
    mistakes,
    grammarGaps: asStringArray(r.grammarGaps, 6),
    vocabularyGaps,
    suggestions: asStringArray(r.suggestions, 5),
    betterDialogue,
    focusPlan,
    stats,
  };
}

export async function POST(req: NextRequest) {
  // UI locale from the locale cookie — every message below answers in the
  // language the user actually selected (never hardcoded Bengali).
  const locale: ApiLocale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId: string | undefined = body?.deviceId;
  const feature: string | undefined = body?.feature;
  const payload = body?.payload ?? {};

  if (!deviceId || !feature) {
    return jsonErr(apiMsg(locale, "paramsRequired"), 400);
  }

  if (!checkRateLimit(deviceId)) {
    return jsonErr(apiMsg(locale, "rateLimited"), 429);
  }
  // Second axis: per-IP. The device key above is client-supplied (trivially
  // rotated) — the IP limit catches loops and key-drain bots (audit P1-5).
  if (!checkIpLimit(req, "ai", 60)) {
    return jsonErr(apiMsg(locale, "rateLimited"), 429);
  }

  // Server-derived analytics (D1): which AI features learners actually use.
  // Logged for every ACCEPTED attempt — even no-key failures are a valuable
  // signal (demand the UX isn't converting yet). Fire-safe: never throws.
  await logAnalyticsEvent("ai_call", deviceId, await getSessionUserId(), {
    feature: String(feature).slice(0, 40),
  });

  // Explanation language follows the UI locale (en default, bn/hi optional)
  const lang = LANG_POLICY[locale] ?? DEFAULT_POLICY;

  let apiKey: string;
  try {
    apiKey = (await getUserApiKeyWithMeta(deviceId)).apiKey;
  } catch (e) {
    return jsonErr(geminiErrMsg(locale, e), (e as GeminiError).status ?? 400);
  }
  const userLevel = await getAiLevel(deviceId);
  const userName = await getUserName(deviceId);

  try {
    switch (feature) {
      /* ---------------- GRAMMAR ---------------- */
      case "grammar-lesson": {
        const topic = String(payload.topic ?? "");
        const level = String(payload.level ?? userLevel);
        const data = await cachedJson<GrammarLessonContent>(
          "grammar-lesson",
          `${topic}::${level}::${locale}`,
          apiKey,
          `You are a patient, encouraging English grammar teacher for Bengali- and Hindi-speaking school students. ${levelRule(level)}.
TASK: Teach the grammar topic "${topic}" as one structured lesson. ${lang.rule}
QUALITY: explanations of 1-3 short sentences, grounded in ${SCENARIOS}; every example grammatically correct; each "wrong"/"right" pair differs ONLY by the grammar point being taught; never repeat an example sentence; warm tone, never condescending.
Return STRICT JSON with this exact shape:
{
  "title": "English topic title",
  "level": "${level}",
  "intro": "2-3 sentence intro ${lang.short} — why this topic matters in daily life",
  "sections": [
    {
      "heading": "sub-topic name (English grammar terms are ok)",
      "explanation": "clear explanation ${lang.short}, compare with the student's everyday language if it helps",
      "examples": [ { "wrong": "incorrect English sentence", "right": "corrected English sentence", "note": "1 short sentence — why ${lang.short}" } ]
    }
  ],
  "tips": ["5-6 practical memory/usage tips ${lang.short}, 1 line each"]
}
Rules: 3-4 "sections" progressing easy → harder, each with 2-3 examples; examples and headings stay in English. ${JSON_ONLY}`,
          0.4
        );
        return jsonOk(data);
      }

      case "grammar-quiz": {
        const topic = String(payload.topic ?? "");
        const level = String(payload.level ?? userLevel);
        const count = Math.min(Number(payload.count ?? 5), 10);
        const data = await cachedJson<QuizQuestion[]>(
          "grammar-quiz",
          `${topic}::${level}::${count}::${locale}`,
          apiKey,
          `You are an encouraging English quiz master for school students. ${levelRule(level)}.
TASK: Write ${count} multiple-choice questions that each test the grammar topic "${topic}" from a different angle. ${lang.rule}
QUALITY: questions, options and sentences in ENGLISH; exactly 4 options per question with ONE unambiguously correct answer; distractors are typical learner mistakes for "${topic}" — plausible but clearly wrong; contexts vary across ${SCENARIOS}; no two questions reuse the same sentence; "explanation" = 1-2 short sentences ${lang.short} on why the answer is correct (and why the tempting distractor is not).
Return STRICT JSON array, exactly this shape per item:
[ { "question": "English question with a blank ___ or a choice", "options": ["a","b","c","d"], "answer": 0, "explanation": "why this is correct ${lang.short}" } ]
"answer" is the 0-based index of the correct option. ${JSON_ONLY}`,
          0.5
        );
        return jsonOk(data);
      }

      /* ---------------- LISTENING ---------------- */
      case "listening-story": {
        const topic = String(payload.topic ?? "daily life");
        const level = String(payload.level ?? userLevel);
        const data = await cachedJson<ListeningStoryContent>(
          "listening-story",
          `${topic}::${level}::${locale}`,
          apiKey,
          `You are a warm storyteller-teacher writing English listening practice for Bengali- and Hindi-speaking students. ${levelRule(level)}.
TASK: Write ONE original short English story about "${topic}" plus comprehension questions. ${lang.rule}
QUALITY: 4-6 story paragraphs of 2-4 short natural sentences each with a clear beginning-middle-end; characters use everyday names; settings come from ${SCENARIOS}; vocabulary obeys the level rule — gloss any harder word inline in simpler words; no sentence appears twice; each question tests a DIFFERENT paragraph or detail; options plausible with exactly one correct.
Return STRICT JSON:
{
  "title": "English story title",
  "level": "${level}",
  "story": ["English paragraph 1 (2-3 short sentences)", "English paragraph 2", "... 4-6 paragraphs total"],
  "banglaSummary": "2-3 sentence story summary ${lang.short} (shown after listening)",
  "questions": [ { "question": "English comprehension question", "options": ["a","b","c","d"], "answer": 0, "explanation": "where in the story the answer comes from ${lang.short}" } ]
}
Exactly 5 comprehension questions; "answer" = 0-based index. ${JSON_ONLY}`,
          0.8
        );
        return jsonOk(data);
      }

      /* ---------------- GRAMMAR ---------------- */
      case "grammar-lesson": {
        const topic = cleanStr(payload.topic, 120);
        const level = cleanLevel(payload.level, userLevel);
        const data = await cachedJson<GrammarLessonContent>(
          "grammar-lesson",
          `${topic}::${level}::${locale}`,
          apiKey,
          `You are a patient, encouraging English grammar teacher for Bengali- and Hindi-speaking school students. ${levelRule(level)}.
TASK: Teach the grammar topic "${topic}" as one structured lesson. ${lang.rule}
QUALITY: explanations of 1-3 short sentences, grounded in ${SCENARIOS}; every example grammatically correct; each "wrong"/"right" pair differs ONLY by the grammar point being taught; never repeat an example sentence; warm tone, never condescending.
Return STRICT JSON with this exact shape:
{
  "title": "English topic title",
  "level": "${level}",
  "intro": "2-3 sentence intro ${lang.short} — why this topic matters in daily life",
  "sections": [
    {
      "heading": "sub-topic name (English grammar terms are ok)",
      "explanation": "clear explanation ${lang.short}, compare with the student's everyday language if it helps",
      "examples": [ { "wrong": "incorrect English sentence", "right": "corrected English sentence", "note": "1 short sentence — why ${lang.short}" } ]
    }
  ],
  "tips": ["5-6 practical memory/usage tips ${lang.short}, 1 line each"]
}
Rules: 3-4 "sections" progressing easy → harder, each with 2-3 examples; examples and headings stay in English. ${JSON_ONLY}`,
          0.4,
          { maxOutputTokens: 8192 }
        );
        return jsonOk(data);
      }

      case "grammar-quiz": {
        const topic = cleanStr(payload.topic, 120);
        const level = cleanLevel(payload.level, userLevel);
        const count = Math.min(Number(payload.count ?? 5), 10);
        const data = await cachedJson<QuizQuestion[]>(
          "grammar-quiz",
          `${topic}::${level}::${count}::${locale}`,
          apiKey,
          `You are an encouraging English quiz master for school students. ${levelRule(level)}.
TASK: Write ${count} multiple-choice questions that each test the grammar topic "${topic}" from a different angle. ${lang.rule}
QUALITY: questions, options and sentences in ENGLISH; exactly 4 options per question with ONE unambiguously correct answer; distractors are typical learner mistakes for "${topic}" — plausible but clearly wrong; contexts vary across ${SCENARIOS}; no two questions reuse the same sentence; "explanation" = 1-2 short sentences ${lang.short} on why the answer is correct (and why the tempting distractor is not).
Return STRICT JSON array, exactly this shape per item:
[ { "question": "English question with a blank ___ or a choice", "options": ["a","b","c","d"], "answer": 0, "explanation": "why this is correct ${lang.short}" } ]
"answer" is the 0-based index of the correct option. ${JSON_ONLY}`,
          0.5,
          { maxOutputTokens: 4096 }
        );
        return jsonOk(data);
      }

      /* ---------------- LISTENING ---------------- */
      case "listening-story": {
        const topic = cleanStr(payload.topic ?? "daily life", 120);
        const level = cleanLevel(payload.level, userLevel);
        const data = await cachedJson<ListeningStoryContent>(
          "listening-story",
          `${topic}::${level}::${locale}`,
          apiKey,
          `You are a warm storyteller-teacher writing English listening practice for Bengali- and Hindi-speaking students. ${levelRule(level)}.
TASK: Write ONE original short English story about "${topic}" plus comprehension questions. ${lang.rule}
QUALITY: 4-6 story paragraphs of 2-4 short natural sentences each with a clear beginning-middle-end; characters use everyday names; settings come from ${SCENARIOS}; vocabulary obeys the level rule — gloss any harder word inline in simpler words; no sentence appears twice; each question tests a DIFFERENT paragraph or detail; options plausible with exactly one correct.
Return STRICT JSON:
{
  "title": "English story title",
  "level": "${level}",
  "story": ["English paragraph 1 (2-3 short sentences)", "English paragraph 2", "... 4-6 paragraphs total"],
  "banglaSummary": "2-3 sentence story summary ${lang.short} (shown after listening)",
  "questions": [ { "question": "English comprehension question", "options": ["a","b","c","d"], "answer": 0, "explanation": "where in the story the answer comes from ${lang.short}" } ]
}
Exactly 5 comprehension questions; "answer" = 0-based index. ${JSON_ONLY}`,
          0.8,
          { maxOutputTokens: 8192 }
        );
        return jsonOk(data);
      }

      /* ---------------- VOCABULARY ---------------- */
      case "vocab-lookup": {
        const word = cleanStr(payload.word, 40);
        if (!word) return jsonErr(apiMsg(locale, "wordRequired"), 400);
        // Deterministic lookup (temp 0.3): the same word+level+locale always
        // yields the same answer — cache it so repeat lookups are FREE
        // (audit: this was uncached, so every re-check paid full tokens).
        const data = await cachedJson<DailyWord>(
          "vocab-lookup",
          `${word.toLowerCase()}::${userLevel}::${locale}`,
          apiKey,
          `You are a friendly vocabulary coach for Bengali- and Hindi-speaking English learners. ${levelRule(userLevel)}.
TASK: Explain the English word "${word}" so a ${userLevel} learner understands it and can use it the same day. ${lang.rule}
QUALITY: "partOfSpeech" = its most common use (noun/verb/adjective/adverb/phrase); "englishMeaning" = 1-2 simple sentences; "banglaMeaning" = the natural equivalent ${lang.short} (add a short sense note if the word has several meanings); the two example sentences are ORIGINAL everyday sentences from ${SCENARIOS} that obey the level rule — not dictionary clichés; "usageTip" = 1-2 short sentences ${lang.short} on when/how to use it and one common wrong use to avoid.
Return STRICT JSON:
{ "word": "${word}", "pronunciation": "${lang.pron}", "partOfSpeech": "...", "banglaMeaning": "meaning ${lang.short}", "englishMeaning": "...", "examples": ["sentence 1", "sentence 2"], "usageTip": "real usage ${lang.short}" }
If "${word}" is not a real English word, still return the JSON but set "word": "" and explain in "usageTip" ${lang.short} that it looks invalid. ${JSON_ONLY}`,
          0.3,
          { maxOutputTokens: 1536 }
        );
        return jsonOk(data);
      }

      case "vocab-quiz": {
        const words = (Array.isArray(payload.words) ? payload.words : [])
          .map((w) => cleanStr(w, 40))
          .filter(Boolean)
          .slice(0, 10);
        if (words.length < 3) return jsonErr(apiMsg(locale, "quizNeedsWords"), 400);
        // Same saved words → same quiz: cache by the sorted word set (audit).
        const wordKey = [...words.map((w) => w.toLowerCase())].sort().join("+");
        const data = await cachedJson<QuizQuestion[]>(
          "vocab-quiz",
          `${wordKey}::${locale}`,
          apiKey,
          `You are a playful English vocabulary quiz master for school students.
TASK: Write a 6-question multiple-choice quiz that tests EXACTLY these words: ${words.join(", ")}. ${lang.rule}
QUALITY: mix the question types — 2 fill-in-the-blank, 2 meaning-match, 2 correct-usage-in-context; every listed word is tested at least once; questions, options and sentences in ENGLISH; exactly 4 options per question with ONE clearly correct answer; distractors are plausible but obviously wrong to anyone who knows the word; contexts come from ${SCENARIOS}; no two questions share a sentence pattern; "explanation" = 1-2 short sentences ${lang.short}.
Return STRICT JSON array:
[ { "question": "English question", "options": ["a","b","c","d"], "answer": 0, "explanation": "explanation ${lang.short}" } ]
"answer" = 0-based index of the correct option. ${JSON_ONLY}`,
          0.5,
          { maxOutputTokens: 4096 }
        );
        return jsonOk(data);
      }

      /* ---------------- SPEAKING: AI PARTNER ---------------- */
      case "chat-partner": {
        const history = Array.isArray(payload.history) ? payload.history.slice(-12) : [];
        const topic = cleanStr(payload.topic ?? "free conversation", 80);
        // D16: goal-based roleplay — when a valid scenario id arrives, Raha
        // plays the scenario's character and the prompt pushes toward the
        // learner's mission (same JSON shape, so the UI is unchanged).
        const scenarioId = cleanStr(payload.scenario ?? "", 40);
        const scen = scenarioById(scenarioId);
        const persona = scen
          ? `SCENE: ${withName(scen.role, userName)}\nThe learner's mission: ${scen.mission.en}\nRULES: Always stay in character as the role above — never mention being an AI, never break the scene. Keep replies to 1-3 spoken sentences and move the SCENE forward (the learner has a mission to complete).\n`
          : "";
        const data = await geminiJson<ChatPartnerReply>(
          apiKey,
          `You are "Raha", a warm, encouraging English conversation partner for ${userName}, an English learner at ${userLevel} level. ${levelRule(userLevel)}.
${persona}Topic: ${topic}. ${lang.rule}
TASK: React to the user's LAST message so the conversation keeps flowing — acknowledge what they said, gently fix their recent English mistakes, then invite them to say more.
QUALITY: "reply" = 1-3 natural spoken-English sentences obeying the level rule (a friend talking, never a lecture); "banglaHint" = ONE short line ${lang.short} suggesting what THEY could say next; "corrections" = only REAL grammar/vocabulary/word-choice problems in the user's last message, max 3, [] if none — "type" exactly one of "grammar" | "vocabulary" | "pronunciation-spelling" | "better-alternative", "explanation" = 1 short encouraging sentence ${lang.short}; "followUp" = ONE simple English question about their life that invites a longer answer. Keep the same friendly persona and energy across turns.
Conversation history (JSON): ${JSON.stringify(history)}
Return STRICT JSON:
{ "reply": "Your English reply (1-3 sentences)", "banglaHint": "one-line hint ${lang.short} about what to say", "corrections": [ { "original": "user's wrong sentence", "corrected": "corrected sentence", "type": "grammar", "explanation": "why ${lang.short}" } ], "followUp": "Your follow-up question in English" }
Shape example (1 item, values are placeholders — hints/explanations must be written ${lang.short}): {"reply":"Cricket sounds fun! I watch it every weekend.","banglaHint":"hint ${lang.short}","corrections":[{"original":"I am play cricket","corrected":"I play cricket","type":"grammar","explanation":"why — ${lang.short}"}],"followUp":"Who do you usually play with?"}
${JSON_ONLY}`,
          { temperature: 0.7, maxOutputTokens: 2048, label: "chat-partner" }
        );
        return jsonOk(data);
      }

      /* ---------------- SPEAKING: ROLEPLAY FEEDBACK (D16) ---------------- */
      case "scenario-feedback": {
        const scenarioId = cleanStr(payload.scenario ?? "", 40);
        const scen = scenarioById(scenarioId);
        if (!scen) {
          return jsonErr("scenario_unknown", 400);
        }
        const history = Array.isArray(payload.history) ? payload.history.slice(-20) : [];
        const data = await geminiJson<{
          goalAchieved: boolean;
          score: number;
          strengths: string;
          improvements: string;
        }>(
          apiKey,
          `You are Raha, an encouraging English coach reviewing a finished ROLEPLAY for ${userName} (${userLevel} level). ${levelRule(userLevel)}.
Scenario: ${withName(scen.role, userName)}
The learner's mission was: ${scen.mission.en}
Conversation (JSON, speaking order; "role":"user" lines are the LEARNER):
${JSON.stringify(history)}
TASK: Judge whether the learner accomplished the mission, then coach.
QUALITY: "goalAchieved" = true only if every mission element was at least attempted; "score" = 0-100 (mission completion 60%, English quality 40%) — be generous with beginners, honest with advanced; "strengths" = 1-2 sentences ${lang.short} about what they did WELL (name concrete phrases they used); "improvements" = 1-2 sentences ${lang.short} with ONE specific, actionable next step.
Return STRICT JSON: { "goalAchieved": true, "score": 75, "strengths": "... ${lang.short}", "improvements": "... ${lang.short}" }
${JSON_ONLY}`,
          { temperature: 0.5, maxOutputTokens: 1024, label: "scenario-feedback" }
        );
        return jsonOk(data);
      }

      /* ---------------- SPEAKING: SIMULATOR FEEDBACK (D17) ---------------- */
      case "simulator-feedback": {
        const setId = cleanStr(payload.setId ?? "", 40);
        const set = simSetById(setId);
        if (!set) {
          return jsonErr("set_unknown", 400);
        }
        const answers = Array.isArray(payload.answers)
          ? payload.answers
              .filter((a: unknown) => a && typeof a === "object")
              .slice(0, 12)
              .map((a: { question?: unknown; answer?: unknown; kind?: unknown }) => ({
                question: cleanStr(a.question ?? "", 200),
                answer: cleanStr(a.answer ?? "", 1200),
                kind: cleanStr(a.kind ?? "p1", 4),
              }))
              .filter((a: { answer: string }) => a.answer.length > 0)
          : [];
        if (answers.length === 0) {
          return jsonErr("no_answers", 400);
        }
        const data = await geminiJson<{
          overallBand: number;
          bands: { fluency: number; lexical: number; grammar: number };
          summary: string;
          topTip: string;
        }>(
          apiKey,
          `You are an experienced IELTS speaking examiner grading ${userName} (${userLevel} level) after a full mock test. ${levelRule(userLevel)}.
The exam set: "${set.title}" — Part 1 interview, Part 2 long turn ("${set.part2.topic}"), Part 3 discussion.
Answers in order (JSON; "kind" marks the part; answers may be STT transcripts — treat punctuation/case noise kindly):
${JSON.stringify(answers)}
TASK: Grade band-style like the real test.
QUALITY: "bands" = 4.0-9.0 each in 0.5 steps — "fluency" (pace, hesitation, linking), "lexical" (vocabulary range, collocations), "grammar" (range + accuracy); "overallBand" = the rounded mean; be encouraging but honest — a learner who answered everything with short simple sentences is 4.5-5.5, natural connected speech is 6.5-7.5; "summary" = 2-3 sentences ${lang.short} naming ONE thing that went well and ONE clear weakness; "topTip" = ONE concrete drill ${lang.short} they can do today.
Return STRICT JSON: { "overallBand": 6.0, "bands": { "fluency": 6.0, "lexical": 5.5, "grammar": 6.0 }, "summary": "... ${lang.short}", "topTip": "... ${lang.short}" }
${JSON_ONLY}`,
          { temperature: 0.4, maxOutputTokens: 1024, label: "simulator-feedback" }
        );
        return jsonOk(data);
      }

      /* ---------------- VOCAB: LEVEL-TUNED AI EXAMPLES (D23) ---------------- */
      case "vocab-example": {
        const word = cleanStr(payload.word ?? "", 40);
        if (!word) {
          return jsonErr(apiMsg(locale, "paramsRequired"), 400);
        }
        // Shared AiCache (word|level) — one learner's request warms it for
        // everyone; no PII in the key. BYOK pays once per word per level.
        const data = await cachedJson<{ sentences: { en: string; note: string }[] }>(
          "vocab-example",
          `${word.toLowerCase()}|${userLevel}`,
          apiKey,
          `You are a friendly English teacher writing example sentences for ${userName} (${userLevel} level). ${levelRule(userLevel)}
WORD: "${word}"
TASK: write exactly 3 NEW, natural, everyday example sentences that USE the word — each one a DIFFERENT real-life situation (home, work/study, out in the world). Match ${userName}'s level: useful and natural, never textbook-stiff. For each sentence add "note": a one-line ${lang.short} gloss of the sentence.
Return STRICT JSON: { "sentences": [ { "en": "…", "note": "… ${lang.short}" }, { "en": "…", "note": "… ${lang.short}" }, { "en": "…", "note": "… ${lang.short}" } ] }
${JSON_ONLY}`,
          0.7,
          { maxOutputTokens: 700 }
        );
        const sentences = Array.isArray(data?.sentences)
          ? data.sentences
              .filter((s: unknown) => s && typeof s === "object")
              .slice(0, 3)
              .map((s: { en?: unknown; note?: unknown }) => ({
                en: cleanStr(s.en ?? "", 200),
                note: cleanStr(s.note ?? "", 160),
              }))
              .filter((s: { en: string }) => s.en.length > 0)
          : [];
        if (sentences.length === 0) {
          return jsonErr(apiMsg(locale, "aiFailed"), 502);
        }
        return jsonOk({ sentences });
      }

      /* ---------------- READING: TAP-A-WORD LOOKUP (D27) ---------------- */
      case "word-lookup": {
        const word = cleanStr(payload.word ?? "", 40);
        if (!word) {
          return jsonErr(apiMsg(locale, "paramsRequired"), 400);
        }
        // Shared AiCache (word|level) — the meaning is identical for every
        // learner at a level; the key pays once per word per level.
        const data = await cachedJson<{
          pronunciation: string;
          partOfSpeech: string;
          banglaMeaning: string;
          englishMeaning: string;
          examples: string[];
          usageTip: string;
        }>(
          "word-lookup",
          `${word.toLowerCase()}|${userLevel}`,
          apiKey,
          `You are a bilingual English teacher building a wordbook entry for ${userName} (${userLevel} level). ${levelRule(userLevel)}
WORD: "${word}"
TASK: fill a DailyWord entry. "pronunciation" = Bangla-friendly phonetic respelling (e.g. "রিলাক্স (রি-লাক্স)"); "partOfSpeech" = noun|verb|adjective|adverb|phrase; "banglaMeaning" = meaning in BANGLA (short); "englishMeaning" = simple English meaning (one line); "examples" = exactly 2 short natural English sentences using the word; "usageTip" = one-line ${lang.short} tip on when/how to use it in real life.
Return STRICT JSON: { "pronunciation": "…", "partOfSpeech": "…", "banglaMeaning": "…", "englishMeaning": "…", "examples": ["…", "…"], "usageTip": "… ${lang.short}" }
${JSON_ONLY}`,
          0.5,
          { maxOutputTokens: 600 }
        );
        const out = {
          pronunciation: cleanStr(data?.pronunciation ?? "", 60),
          partOfSpeech: cleanStr(data?.partOfSpeech ?? "", 20),
          banglaMeaning: cleanStr(data?.banglaMeaning ?? "", 120),
          englishMeaning: cleanStr(data?.englishMeaning ?? "", 160),
          examples: Array.isArray(data?.examples)
            ? data.examples.slice(0, 2).map((x: unknown) => cleanStr(x ?? "", 160)).filter(Boolean)
            : [],
          usageTip: cleanStr(data?.usageTip ?? "", 160),
        };
        if (!out.englishMeaning && !out.banglaMeaning) {
          return jsonErr(apiMsg(locale, "aiFailed"), 502);
        }
        return jsonOk(out);
      }

      /* ---------------- SPEAKING: CALL ANALYSIS (deep coach) ---------------- */
      case "call-analysis": {
        const rawLines = Array.isArray(payload.transcript) ? payload.transcript : [];
        const transcript = toAnalysisLines(rawLines);
        const durationSec = Number(payload.durationSec ?? 0);
        const partnerCount = Number(payload.partnerCount ?? 1);
        const myName = String(payload.myName ?? "");
        // peerId attribution (12-b) — exact match when available, otherwise
        // speaker-name fallback so old clients keep working.
        const myPeerId = typeof payload.myPeerId === "string" ? payload.myPeerId : "";
        const isLearnerLine = (l: AnalysisLine): boolean => {
          if (myPeerId && l.peerId) return l.peerId === myPeerId;
          return myName ? l.speaker === myName : true;
        };
        const userLines = transcript.filter(isLearnerLine).slice(-60);
        if (userLines.length < 2) {
          return jsonErr(apiMsg(locale, "analysisNeedsSentences"), 400);
        }

        const stats = computeLearnerStats(userLines);
        const trend = await buildAnalysisTrend(deviceId);

        // Context-aware dialogue view — the coach sees WHO said what, so
        // betterDialogue improves the learner's REPLY to the actual partner
        // line, not the sentence in isolation.
        const dialogue = transcript.slice(-80).map((l) => ({
          who: isLearnerLine(l) ? "me" : "partner",
          name: l.speaker,
          text: l.text,
        }));

        // TOKEN FIX (audit): the learner's lines used to be embedded TWICE —
        // once inside `dialogue` (marked who:"me") and again as a separate
        // `userLines` array (~500-1,000 duplicated tokens per analysis,
        // doubled by retries). The dialogue's who-markers carry the same
        // information — the separate block is gone.
        const rawAnalysis = await geminiJson<unknown>(
          apiKey,
          `You are a senior, encouraging English communication coach for Bengali- and Hindi-speaking students, doing a DEEP post-call analysis of a real conversation (video call, ${Math.round(durationSec / 60)} min, ${partnerCount} participant(s)). ${levelRule(userLevel)}
Learner: ${userName}.

Full dialogue in speaking order — "who":"me" marks the LEARNER's lines (analyze THESE), "who":"partner" is the other person (context). Use it so every correction and improvement fits what was actually said:
${JSON.stringify(dialogue)}

${trend.hint}
${lang.rule}

QUALITY: quote ONLY sentences that actually appear in the dialogue — never invent errors; every explanation, strength, suggestion and plan item is 1-2 short sentences ${lang.short}; scores must reflect what was actually said (a short but clean call scores well); tone = honest, specific, motivating.
Coach deeply — this is a real development plan, not a surface report:
1) Scores: overallScore, fluencyScore, grammarScore, vocabularyScore (0-100 each — honest, encouraging but realistic).
2) mistakes: max 10, DEDUPLICATED by the underlying grammar point (never explain the same rule twice). Each gets "category" EXACTLY one of "tense" | "article" | "preposition" | "word-choice" | "agreement" | "vocabulary" | "sentence-structure" | "other", and "severity": "major" (blocks understanding / repeated basic error) or "minor" (polish). Corrections keep the learner's meaning. If a partner line is needed to understand the mistake, mention it briefly inside "explanation".
3) betterDialogue: 2-3 of the learner's replies rewritten context-aware and native-like — improve the REPLY to what the partner actually said.
4) strengths: 2-4 SPECIFIC things the learner did well (good phrases, brave attempts, nice vocabulary) — motivation matters.
5) focusPlan: 2-3 prioritized roadmap items for how to develop further: "title" (short), "why" (1-2 sentences), "drill" (a concrete 5-minute solo practice drill the learner can do today).
6) grammarGaps: 3-6 grammar topics to study next. vocabularyGaps: 3-6 useful words worth learning (used wrongly or missing in the talk). suggestions: 4-5 actionable suggestions.

Mistake-item shape example (1 item, values are placeholders — explanation must be written ${lang.short}): {"original":"I am go to school daily","corrected":"I go to school daily","category":"tense","severity":"minor","explanation":"why — 1-2 short sentences ${lang.short}"}

Return STRICT JSON:
{
  "overallScore": 0, "fluencyScore": 0, "grammarScore": 0, "vocabularyScore": 0,
  "summary": "3-4 sentence overall assessment ${lang.short} — name one strength and one priority",
  "strengths": ["specific positive ${lang.short}"],
  "mistakes": [ { "original": "learner's sentence", "corrected": "corrected sentence", "category": "tense", "severity": "minor", "explanation": "why ${lang.short}" } ],
  "grammarGaps": ["grammar topic ${lang.short}"],
  "vocabularyGaps": [ { "word": "English word", "meaning": "meaning ${lang.short}" } ],
  "suggestions": ["actionable suggestion ${lang.short}"],
  "betterDialogue": [ { "original": "learner's sentence", "improved": "context-aware native-like version" } ],
  "focusPlan": [ { "title": "short title ${lang.short}", "why": "why it matters ${lang.short}", "drill": "concrete 5-minute drill ${lang.short}" } ]
}
Return ONLY the JSON.`,
          { temperature: 0.4, maxOutputTokens: 8192, label: "call-analysis" }
        );

        const analysis = sanitizeCallAnalysis(rawAnalysis, {
          ...stats,
          analyzedLines: userLines.length,
        });

        // Trend: categories that appeared again today after appearing in the
        // learner's previous sessions (server-side, never hallucinated).
        const todayCats = new Set(
          analysis.mistakes.map((m) => m.category ?? "other")
        );
        analysis.repeatedCategories = [...todayCats].filter(
          (c) => c !== "other" && trend.prevCategories.has(c)
        );

        return jsonOk(analysis);
      }

      /* ---------------- LIBRARY: SENTENCE CHECK ---------------- */
      // Used by the owner-authored Vocabulary Library: the learner writes a
      // sentence with a library word and asks "is my sentence correct?".
      // This is the moment the learner's own Gemini key is consumed —
      // BROWSING the library itself stays 100% free.
      case "sentence-check": {
        const word = cleanStr(payload.word, 60);
        const sentence = cleanStr(payload.sentence, 300);
        if (!sentence) return jsonErr(apiMsg(locale, "sentenceRequired"), 400);
        const meaning = cleanStr(payload.meaning, 200);
        const data = await geminiJson<SentenceCheckResult>(
          apiKey,
          `You are a patient, encouraging English teacher checking a ${userLevel} learner's sentence. ${levelRule(userLevel)}
The learner wrote a sentence using the word "${word}"${meaning ? ` (word meaning: ${meaning})` : ""}.
Their sentence: "${sentence}"
TASK: judge it, correct it, and coach them to use "${word}" better. ${lang.rule}
QUALITY: "corrected" keeps the learner's meaning with the smallest honest fix; verdict "correct" when the sentence is understandable and natural — tiny style issues go in "suggestions" (a lowercase "i" alone never makes a sentence incorrect); if the sentence does not actually use the word "${word}", verdict is "incorrect" and "explanation" says so; "explanation" = 1-3 short sentences ${lang.short} noting what was right AND what was wrong; "suggestions" = 2-3 short tips ${lang.short} to use the word more naturally; "improved" = a more natural, slightly more advanced version of the same idea.
Return STRICT JSON:
{
  "verdict": "correct" or "incorrect",
  "corrected": "the corrected sentence (exactly the learner's sentence if it is already correct)",
  "explanation": "what was right or wrong ${lang.short}, 1-3 short sentences",
  "suggestions": ["2-3 short tips to use this word better ${lang.short}"],
  "improved": "a more natural, advanced version of their sentence"
}
Be encouraging, never harsh. ${JSON_ONLY}`,
          { temperature: 0.3, maxOutputTokens: 2048, label: "sentence-check" }
        );
        return jsonOk(data);
      }

      /* ---------------- LIBRARY: ASK A QUESTION ---------------- */
      // The learner is viewing FREE stored content (a library word, grammar
      // lesson or listening story) and asks about something they did not
      // understand. The content itself is passed in as context; only this
      // interaction uses the learner's Gemini key.
      case "content-ask": {
        const question = cleanStr(payload.question, 400);
        if (!question) return jsonErr(apiMsg(locale, "questionRequired"), 400);
        const title = cleanStr(payload.title, 120);
        const context = cleanStr(payload.context, 4000);
        // Same content + same question → same answer: cache by a hash of the
        // (bounded) context so repeated asks on a library page are FREE.
        const ctxHash = createHash("sha256").update(context).digest("hex").slice(0, 16);
        const data = await cachedJson<ContentAnswer>(
          "content-ask",
          `${title}::${ctxHash}::${question.toLowerCase()}::${locale}`,
          apiKey,
          `You are a friendly, knowledgeable English teacher on a learning site for Bengali- and Hindi-speaking students. ${lang.rule}
A learner is reading this stored content:
Title: ${title || "(library content)"}
Content: ${context || "(no extra context)"}
The learner asks: "${question}" (they may ask in Bengali or Hindi — the language rule above applies anyway).
TASK: Answer that question directly and simply in max ~120 words, based on the content above; if the answer is not in the content, still help as their teacher from general knowledge.
QUALITY: "answer" = 2-6 short sentences ${lang.short}, defining any English term you must use in one clause; "bullets" = 0-4 very short key points ${lang.short} (empty array when the answer is a simple yes/no or a definition); never invent facts about the content — if it does not cover the question, say so briefly in one clause, then answer generally.
Return STRICT JSON:
{ "answer": "clear answer ${lang.short} (2-6 sentences)", "bullets": ["optional 2-4 very short key points ${lang.short}"] }
${JSON_ONLY}`,
          0.4,
          { maxOutputTokens: 1536 }
        );
        return jsonOk(data);
      }

      default:
        return jsonErr(apiMsg(locale, "unknownFeature", { feature }), 400);
    }
  } catch (e) {
    const err = e as GeminiError;
    return jsonErr(geminiErrMsg(locale, err), err.status ?? 500);
  }
}
