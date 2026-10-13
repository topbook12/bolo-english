import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { GeminiError, geminiJson, getAiLevel, getUserApiKey } from "@/lib/gemini";
import type { DailyWord } from "@/lib/types";

export const maxDuration = 60;

const todayDhaka = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());

// GET /api/vocab/daily?deviceId=... → today's 3 words (generated once per day,
// shared cache so every user's quota is saved)
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });

  const date = todayDhaka();
  const level = await getAiLevel(deviceId);

  // fast path: already generated today
  const existing = await db.dailyVocab.findUnique({
    where: { deviceId_date: { deviceId, date } },
  });
  if (existing) {
    return NextResponse.json({ ok: true, data: { date, words: JSON.parse(existing.words) } });
  }

  // words already shown in last 30 days → avoid repeats
  const recent = await db.dailyVocab.findMany({
    where: { deviceId },
    orderBy: { date: "desc" },
    take: 30,
  });
  const exclude: string[] = [];
  for (const r of recent) {
    try {
      (JSON.parse(r.words) as DailyWord[]).forEach((w) => exclude.push(w.word));
    } catch {}
  }

  let apiKey: string;
  try {
    apiKey = await getUserApiKey(deviceId);
  } catch (e) {
    return NextResponse.json({ ok: false, error: (e as Error).message }, { status: 400 });
  }

  const data = await db.aiCache.findUnique({
    where: { feature_cacheKey: { feature: "vocab-daily", cacheKey: `${date}::${level}` } },
  });

  let words: DailyWord[];
  if (data) {
    words = JSON.parse(data.response) as DailyWord[];
  } else {
    try {
      words = await geminiJson<DailyWord[]>(
        apiKey,
        `Pick 3 practical, real-life English words that Bengali speakers learning English at ${level} level should learn TODAY (not too obscure, used in daily conversation/work).
Words already taught (do NOT repeat): ${exclude.slice(0, 90).join(", ") || "(none)"}.
All explanations in simple Bangla; English sentences stay in English.
Return STRICT JSON array of 3:
[ { "word": "English word", "pronunciation": "বাংলা উচ্চারণ যেমন: কম্ফর্টেবল", "partOfSpeech": "noun/verb/adj/adverb", "banglaMeaning": "বাংলা অর্থ", "englishMeaning": "simple English meaning", "examples": ["English sentence 1", "English sentence 2"], "usageTip": "কখন/কীভাবে বাস্তবে ব্যবহার করবে — বাংলায়" } ]
Words must be useful in real life (office, market, travel, feelings, internet). শুধু JSON array দাও।`,
        { temperature: 0.8, maxOutputTokens: 4096 }
      );
      await db.aiCache
        .create({
          data: { feature: "vocab-daily", cacheKey: `${date}::${level}`, response: JSON.stringify(words) },
        })
        .catch(() => null);
    } catch (e) {
      const err = e as GeminiError;
      return NextResponse.json({ ok: false, error: err.message }, { status: err.status ?? 500 });
    }
  }

  await db.dailyVocab.upsert({
    where: { deviceId_date: { deviceId, date } },
    create: { deviceId, date, words: JSON.stringify(words) },
    update: { words: JSON.stringify(words) },
  });

  return NextResponse.json({ ok: true, data: { date, words } });
}
