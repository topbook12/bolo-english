import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { reqLocale, apiMsg, type ApiLocale } from "@/lib/api-i18n";
import { GeminiError, geminiJson, getAiLevel, getUserName, getUserApiKey } from "@/lib/gemini";
import type {
  CallAnalysis,
  ChatPartnerReply,
  DailyWord,
  GrammarLessonContent,
  ListeningStoryContent,
  QuizQuestion,
  RealtimeCorrections,
  TranscriptLine,
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
  temperature = 0.6
): Promise<T> {
  const hit = await db.aiCache.findUnique({
    where: { feature_cacheKey: { feature, cacheKey } },
  });
  if (hit) return JSON.parse(hit.response) as T;
  // No explicit token cap — geminiJson applies a generous per-model budget so
  // long answers never truncate mid-JSON.
  const data = await geminiJson<T>(apiKey, prompt, { temperature });
  await db.aiCache
    .create({ data: { feature, cacheKey, response: JSON.stringify(data) } })
    .catch(() => null);
  return data;
}

const todayDhaka = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId: string | undefined = body?.deviceId;
  const feature: string | undefined = body?.feature;
  const payload = body?.payload ?? {};

  if (!deviceId || !feature) {
    return jsonErr("deviceId and feature are required", 400);
  }

  // UI locale from the locale cookie — every message below answers in the
  // language the user actually selected (never hardcoded Bengali).
  const locale: ApiLocale = reqLocale(req);

  if (!checkRateLimit(deviceId)) {
    return jsonErr(apiMsg(locale, "rateLimited"), 429);
  }

  // Explanation language follows the UI locale (en default, bn/hi optional)
  const lang = LANG_POLICY[locale] ?? DEFAULT_POLICY;

  let apiKey: string;
  try {
    apiKey = await getUserApiKey(deviceId);
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
          `You are an expert English grammar teacher. The student reads explanations in ${locale === "bn" ? "Bengali" : locale === "hi" ? "Hindi" : "simple English"}.
Teach the grammar topic "${topic}" at ${level} level. ${lang.rule}
Return STRICT JSON with this shape:
{
  "title": "English topic title",
  "level": "${level}",
  "intro": "2-3 sentence intro ${lang.short} — why this topic matters",
  "sections": [
    {
      "heading": "sub-topic name (may mix English terms)",
      "explanation": "clear explanation ${lang.short}, use a comparison to the student's everyday language if it helps",
      "examples": [ { "wrong": "wrong English sentence", "right": "correct English sentence", "note": "why wrong/right ${lang.short}" } ]
    }
  ],
  "tips": ["5-6 practical tips ${lang.short}"]
}
"sections" must have 3-4 sections, each with 2-3 examples. Return ONLY the JSON.`,
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
          `You are an English quiz master.
Create ${count} multiple-choice questions to practice "${topic}" grammar at ${level} level.
${lang.rule} Return STRICT JSON array:
[ { "question": "English question with a blank or choice", "options": ["a","b","c","d"], "answer": 0, "explanation": "why this is correct ${lang.short}" } ]
"answer" is the 0-based index of the correct option. Options must be plausible. Questions must be in English. Return ONLY the JSON array.`,
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
          `You write short English listening stories for English learners.
Write a story about "${topic}" at ${level} English level. ${lang.rule}
Return STRICT JSON:
{
  "title": "English story title",
  "level": "${level}",
  "story": ["English paragraph 1 (2-3 short sentences)", "English paragraph 2", "... 4-6 paragraphs total"],
  "banglaSummary": "2-3 sentence story summary ${lang.short} (shown after listening)",
  "questions": [ { "question": "English comprehension question", "options": ["a","b","c","d"], "answer": 0, "explanation": "where the answer comes from ${lang.short}" } ]
}
5 comprehension questions. Sentences short & natural. Return ONLY the JSON.`,
          0.8
        );
        return jsonOk(data);
      }

      /* ---------------- VOCABULARY ---------------- */
      case "vocab-daily": {
        const date = String(payload.date ?? todayDhaka());
        const exclude = Array.isArray(payload.exclude) ? payload.exclude.join(", ") : "";
        const data = await cachedJson<DailyWord[]>(
          "vocab-daily",
          `${date}::${userLevel}::${locale}`,
          apiKey,
          `Pick 3 practical, real-life English words that learners at ${userLevel} level should learn TODAY (not too obscure, used in daily conversation/work).
Words already taught (do NOT repeat): ${exclude || "(none)"}. ${lang.rule}
Return STRICT JSON array of 3:
[ { "word": "English word", "pronunciation": "${lang.pron}", "partOfSpeech": "noun/verb/adj/adverb", "banglaMeaning": "meaning ${lang.short}", "englishMeaning": "simple English meaning", "examples": ["English sentence 1", "English sentence 2"], "usageTip": "when/how to really use it ${lang.short}" } ]
Words must be useful in real life (office, market, travel, feelings, internet). Return ONLY the JSON array.`,
          0.8
        );
        return jsonOk(data);
      }

      case "vocab-lookup": {
        const word = String(payload.word ?? "").trim().slice(0, 40);
        if (!word) return jsonErr(apiMsg(locale, "wordRequired"), 400);
        const data = await geminiJson<DailyWord>(
          apiKey,
          `Explain the English word "${word}" for a learner at ${userLevel} level. ${lang.rule}
Return STRICT JSON: { "word": "${word}", "pronunciation": "${lang.pron}", "partOfSpeech": "...", "banglaMeaning": "meaning ${lang.short}", "englishMeaning": "...", "examples": ["sentence 1","sentence 2"], "usageTip": "real usage ${lang.short}" }
If "${word}" is not a real English word, still return JSON but put "word": "" and explain in usageTip that it seems invalid. Return ONLY the JSON.`,
          { temperature: 0.3 }
        );
        return jsonOk(data);
      }

      case "vocab-quiz": {
        const words = (Array.isArray(payload.words) ? payload.words : []).slice(0, 10);
        if (words.length < 3) return jsonErr(apiMsg(locale, "quizNeedsWords"), 400);
        const data = await geminiJson<QuizQuestion[]>(
          apiKey,
          `Create a 6-question multiple-choice English vocabulary quiz testing these words: ${words.join(", ")}. ${lang.rule}
Mix question types: fill-in-the-blank, meaning-match, correct-usage.
Return STRICT JSON array:
[ { "question": "English question", "options": ["a","b","c","d"], "answer": 0, "explanation": "explanation ${lang.short}" } ]
"answer" = 0-based index of the correct option. Return ONLY the JSON array.`,
          { temperature: 0.5 }
        );
        return jsonOk(data);
      }

      /* ---------------- SPEAKING: AI PARTNER ---------------- */
      case "chat-partner": {
        const history = Array.isArray(payload.history) ? payload.history.slice(-12) : [];
        const topic = String(payload.topic ?? "free conversation");
        const levelInstruction: Record<string, string> = {
          beginner: "use very simple English, short sentences",
          intermediate: "use natural everyday English",
          advanced: "use rich natural native-level English",
        };
        const data = await geminiJson<ChatPartnerReply>(
          apiKey,
          `You are "Raha", a friendly English conversation partner for ${userName}, an English learner at ${userLevel} level.
Topic: ${topic}. ${levelInstruction[userLevel] ?? levelInstruction.beginner}.
Reply to the user's LAST message keeping a natural conversation going, gently correct their recent English mistakes, then ask ONE follow-up question to keep them talking. ${lang.rule}
Conversation history (JSON): ${JSON.stringify(history)}
Return STRICT JSON:
{ "reply": "Your English reply (1-3 sentences)", "banglaHint": "one-line hint ${lang.short} about what to say", "corrections": [ { "original": "user's wrong sentence", "corrected": "corrected sentence", "type": "grammar", "explanation": "why ${lang.short}" } ], "followUp": "Your follow-up question in English" }
corrections may be empty if user's English is fine. Return ONLY the JSON.`,
          { temperature: 0.7 }
        );
        return jsonOk(data);
      }

      /* ---------------- SPEAKING: LIVE CORRECTION ---------------- */
      case "realtime-correction": {
        const lines = (Array.isArray(payload.lines) ? payload.lines : []).slice(-14);
        if (lines.length === 0) return jsonOk({ corrections: [], encouragement: "" });
        const data = await geminiJson<RealtimeCorrections>(
          apiKey,
          `An English learner is practicing spoken English in a live video call. Below are their spoken sentences (JSON). ${lang.rule}
Find ONLY clear grammar/vocabulary/word-choice mistakes worth fixing now (max 4). Ignore fillers, minor punctuation, and pronunciation spelling. Be encouraging, not harsh.
Sentences: ${JSON.stringify(lines)}
Return STRICT JSON:
{ "corrections": [ { "original": "spoken sentence", "corrected": "better sentence", "type": "grammar", "explanation": "one line — why ${lang.short}" } ], "encouragement": "one-line encouragement ${lang.short}" }
If no real mistakes: { "corrections": [], "encouragement": "..." } Return ONLY the JSON.`,
          { temperature: 0.3 }
        );
        return jsonOk(data);
      }

      /* ---------------- SPEAKING: CALL ANALYSIS ---------------- */
      case "call-analysis": {
        const transcript = (Array.isArray(payload.transcript) ? payload.transcript : []) as TranscriptLine[];
        const durationSec = Number(payload.durationSec ?? 0);
        const partnerCount = Number(payload.partnerCount ?? 1);
        const myName = String(payload.myName ?? "");
        const userLines = transcript.filter((l) => myName ? l.speaker === myName : true).slice(-60);
        if (userLines.length < 2) {
          return jsonErr(apiMsg(locale, "analysisNeedsSentences"), 400);
        }
        const data = await geminiJson<CallAnalysis>(
          apiKey,
          `You are an expert English communication coach analyzing a learner's real conversation (video call, ${Math.round(durationSec / 60)} min, ${partnerCount} participant(s)).
The user's spoken lines (JSON, newest last): ${JSON.stringify(userLines)}
${lang.rule}
Analyze: fluency, grammar, vocabulary richness. Score 0-100 each. Find top mistakes (max 8), grammar topics to study, useful words to learn, actionable suggestions.
Return STRICT JSON:
{
  "overallScore": 0, "fluencyScore": 0, "grammarScore": 0, "vocabularyScore": 0,
  "summary": "3-4 sentence overall assessment ${lang.short}",
  "mistakes": [ { "original": "...", "corrected": "...", "type": "grammar", "explanation": "${lang.short}" } ],
  "grammarGaps": ["grammar topics to study next ${lang.short}"],
  "vocabularyGaps": [ { "word": "English word", "meaning": "meaning ${lang.short}" } ],
  "suggestions": ["4-5 actionable suggestions ${lang.short}"],
  "betterDialogue": [ { "original": "user sentence", "improved": "native-like improved version" } ]
}
Scores must reflect honest assessment — be encouraging but realistic. Return ONLY the JSON.`,
          { temperature: 0.4 }
        );
        return jsonOk(data);
      }

      default:
        return jsonErr(`Unknown feature: ${feature}`, 400);
    }
  } catch (e) {
    const err = e as GeminiError;
    return jsonErr(geminiErrMsg(locale, err), err.status ?? 500);
  }
}
