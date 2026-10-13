import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
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

const BANGLA_RULE =
  "সব ব্যাখ্যা, টিপস ও সাজেশন অবশ্যই সহজ বাংলায় লিখবে। ইংরেজি উদাহরণ ও বাক্য থাকবে ইংরেজিতে।";

function jsonOk(data: unknown) {
  return NextResponse.json({ ok: true, data });
}
function jsonErr(message: string, status = 500) {
  return NextResponse.json({ ok: false, error: message }, { status });
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
  // long Bangla answers never truncate mid-JSON.
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
  if (!checkRateLimit(deviceId)) {
    return jsonErr("অনেক দ্রুত অনুরোধ আসছে — ১ মিনিট পর আবার চেষ্টা করুন।", 429);
  }

  let apiKey: string;
  try {
    apiKey = await getUserApiKey(deviceId);
  } catch (e) {
    return jsonErr((e as Error).message, (e as GeminiError).status ?? 400);
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
          `${topic}::${level}`,
          apiKey,
          `You are an expert English grammar teacher for Bengali-speaking students.
Teach the grammar topic "${topic}" at ${level} level. ${BANGLA_RULE}
Return STRICT JSON with this shape:
{
  "title": "English topic title",
  "level": "${level}",
  "intro": "২-৩ বাক্যে বাংলায় ভূমিকা — কেন এই টপিক জরুরি",
  "sections": [
    {
      "heading": "উপ-টপিকের নাম (বাংলা/ইংরেজি মিশ্র)",
      "explanation": "সহজ বাংলায় ব্যাখ্যা, বাংলা তুলনা দিলে ভালো হয়",
      "examples": [ { "wrong": "wrong English sentence", "right": "correct English sentence", "note": "কেন ভুল/সঠিক — বাংলায়" } ]
    }
  ],
  "tips": ["৫-৬টি বাস্তব টিপস বাংলায়"]
}
"sections" এ ৩-৪টি সেকশন দাও, প্রতিটিতে ২-৩টি example। শুধু JSON দাও, অন্য কিছু নয়।`,
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
          `${topic}::${level}::${count}`,
          apiKey,
          `You are an English quiz master for Bengali speakers.
Create ${count} multiple-choice questions to practice "${topic}" grammar at ${level} level.
${BANGLA_RULE} Return STRICT JSON array:
[ { "question": "English question with a blank or choice", "options": ["a","b","c","d"], "answer": 0, "explanation": "কেন এটি সঠিক — বাংলায়" } ]
"answer" is the 0-based index of the correct option. Options must be plausible. Questions must be in English. শুধু JSON array দাও।`,
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
          `${topic}::${level}`,
          apiKey,
          `You write short English listening stories for Bengali learners.
Write a story about "${topic}" at ${level} English level. ${BANGLA_RULE}
Return STRICT JSON:
{
  "title": "English story title",
  "level": "${level}",
  "story": ["English paragraph 1 (2-3 short sentences)", "English paragraph 2", "... 4-6 paragraphs total"],
  "banglaSummary": "গল্পের ২-৩ বাক্যের বাংলা সারসংক্ষেপ (শেষে দেখানোর জন্য)",
  "questions": [ { "question": "English comprehension question", "options": ["a","b","c","d"], "answer": 0, "explanation": "গল্পের কোথায় উত্তর আছে — বাংলায়" } ]
}
5 comprehension questions. Sentences short & natural. শুধু JSON দাও।`,
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
          `${date}::${userLevel}`,
          apiKey,
          `Pick 3 practical, real-life English words that Bengali speakers learning English at ${userLevel} level should learn TODAY (not too obscure, used in daily conversation/work).
Words already taught (do NOT repeat): ${exclude || "(none)"}. ${BANGLA_RULE}
Return STRICT JSON array of 3:
[ { "word": "English word", "pronunciation": "বাংলা উচ্চারণ যেমন: কম্ফর্টেবল", "partOfSpeech": "noun/verb/adj/adverb", "banglaMeaning": "বাংলা অর্থ", "englishMeaning": "simple English meaning", "examples": ["English sentence 1", "English sentence 2"], "usageTip": "কখন/কীভাবে বাস্তবে ব্যবহার করবে — বাংলায়" } ]
Words must be useful in real life (office, market, travel, feelings, internet). শুধু JSON array দাও।`,
          0.8
        );
        return jsonOk(data);
      }

      case "vocab-lookup": {
        const word = String(payload.word ?? "").trim().slice(0, 40);
        if (!word) return jsonErr("শব্দ লিখুন।", 400);
        const data = await geminiJson<DailyWord>(
          apiKey,
          `Explain the English word "${word}" for a Bengali speaker at ${userLevel} level. ${BANGLA_RULE}
Return STRICT JSON: { "word": "${word}", "pronunciation": "বাংলা উচ্চারণ", "partOfSpeech": "...", "banglaMeaning": "...", "englishMeaning": "...", "examples": ["sentence 1","sentence 2"], "usageTip": "বাস্তব ব্যবহার — বাংলায়" }
If "${word}" is not a real English word, still return JSON but put "word": "" and explain in usageTip that it seems invalid. শুধু JSON দাও।`,
          { temperature: 0.3 }
        );
        return jsonOk(data);
      }

      case "vocab-quiz": {
        const words = (Array.isArray(payload.words) ? payload.words : []).slice(0, 10);
        if (words.length < 3) return jsonErr("কুইজের জন্য অন্তত ৩টি শব্দ সেভ করুন।", 400);
        const data = await geminiJson<QuizQuestion[]>(
          apiKey,
          `Create a 6-question multiple-choice English vocabulary quiz for a Bengali speaker testing these words: ${words.join(", ")}. ${BANGLA_RULE}
Mix question types: fill-in-the-blank, meaning-match, correct-usage.
Return STRICT JSON array:
[ { "question": "English question", "options": ["a","b","c","d"], "answer": 0, "explanation": "বাংলায় ব্যাখ্যা" } ]
"answer" = 0-based index of the correct option. শুধু JSON array দাও।`,
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
          `You are "Raha", a friendly English conversation partner for ${userName}, a Bengali speaker at ${userLevel} level.
Topic: ${topic}. ${levelInstruction[userLevel] ?? levelInstruction.beginner}.
Reply to the user's LAST message keeping a natural conversation going, gently correct their recent English mistakes, then ask ONE follow-up question to keep them talking. ${BANGLA_RULE}
Conversation history (JSON): ${JSON.stringify(history)}
Return STRICT JSON:
{ "reply": "Your English reply (1-3 sentences)", "banglaHint": "কী বললে সেটা ১ বাক্যে বাংলায়", "corrections": [ { "original": "user's wrong sentence", "corrected": "corrected sentence", "type": "grammar", "explanation": "কেন — বাংলায়" } ], "followUp": "Your follow-up question in English" }
corrections may be empty if user's English is fine. শুধু JSON দাও।`,
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
          `A Bengali speaker is practicing spoken English in a live video call. Below are their spoken sentences (JSON). ${BANGLA_RULE}
Find ONLY clear grammar/vocabulary/word-choice mistakes worth fixing now (max 4). Ignore fillers, minor punctuation, and pronunciation spelling. Be encouraging, not harsh.
Sentences: ${JSON.stringify(lines)}
Return STRICT JSON:
{ "corrections": [ { "original": "spoken sentence", "corrected": "better sentence", "type": "grammar", "explanation": "১ লাইনে কেন — বাংলায়" } ], "encouragement": "১ লাইনের বাংলা উৎসাহ" }
If no real mistakes: { "corrections": [], "encouragement": "..." } শুধু JSON দাও।`,
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
          return jsonErr("বিশ্লেষণের জন্য অন্তত ২টি বাক্য বলুন।", 400);
        }
        const data = await geminiJson<CallAnalysis>(
          apiKey,
          `You are an expert English communication coach analyzing a Bengali speaker's real conversation (video call, ${Math.round(durationSec / 60)} min, ${partnerCount} participant(s)).
The user's spoken lines (JSON, newest last): ${JSON.stringify(userLines)}
${BANGLA_RULE}
Analyze: fluency, grammar, vocabulary richness. Score 0-100 each. Find top mistakes (max 8), grammar topics to study, useful words to learn, actionable suggestions.
Return STRICT JSON:
{
  "overallScore": 0, "fluencyScore": 0, "grammarScore": 0, "vocabularyScore": 0,
  "summary": "৩-৪ বাক্যে বাংলায় সামগ্রিক মূল্যায়ন",
  "mistakes": [ { "original": "...", "corrected": "...", "type": "grammar", "explanation": "বাংলায়" } ],
  "grammarGaps": ["যে গ্রামার টপিক আরও শিখতে হবে — বাংলায়"],
  "vocabularyGaps": [ { "word": "English word", "meaning": "বাংলা অর্থ" } ],
  "suggestions": ["৪-৫টি বাস্তব সাজেশন বাংলায়"],
  "betterDialogue": [ { "original": "user sentence", "improved": "native-like improved version" } ]
}
Scores must reflect honest assessment — be encouraging but realistic. শুধু JSON দাও।`,
          { temperature: 0.4 }
        );
        return jsonOk(data);
      }

      default:
        return jsonErr(`Unknown feature: ${feature}`, 400);
    }
  } catch (e) {
    const err = e as GeminiError;
    return jsonErr(err.message ?? "AI কল ব্যর্থ হয়েছে।", err.status ?? 500);
  }
}
