import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAiLevel } from "@/lib/gemini";
import { bankWordsForDay, type BankLevel } from "@/lib/daily-words";
import type { DailyWord } from "@/lib/types";
import { reqLocale } from "@/lib/api-i18n";

// GET /api/vocab/daily?deviceId=... → today's 3 words.
//
// STATIC CONTENT ON OUR OWN SERVERS (user requirement): the words come from
// the curated trilingual bank in src/lib/daily-words.ts — zero Gemini API
// keys, no AI call, works for every guest on every device. Rotation is
// date-based so everyone at the same level sees the same 3 words each day,
// and the cycle repeats every 15 days (45 words per level). The per-user
// dailyVocab row is still written so progress tracking keeps working.

const todayDhaka = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());

// Stable day index (days since epoch) driving the bank rotation.
const dayIndex = (date: string) =>
  Math.floor(Date.parse(`${date}T00:00:00Z`) / 86_400_000);

const LEVELS: BankLevel[] = ["beginner", "intermediate", "advanced"];

export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });

  const date = todayDhaka();
  const levelRaw = await getAiLevel(deviceId);
  const level: BankLevel = LEVELS.includes(levelRaw as BankLevel)
    ? (levelRaw as BankLevel)
    : "beginner";
  const locale = reqLocale(req);

  // Localized meaning/usage per UI language; the English word & sentences
  // stay English (that's what's being learned).
  const words: DailyWord[] = bankWordsForDay(level, dayIndex(date)).map((w) => ({
    word: w.word,
    pronunciation: w.pronunciation[locale],
    partOfSpeech: w.partOfSpeech,
    banglaMeaning: w.meaning[locale],
    englishMeaning: w.englishMeaning,
    examples: w.examples,
    usageTip: w.usageTip[locale],
  }));

  await db.dailyVocab
    .upsert({
      where: { deviceId_date: { deviceId, date } },
      create: { deviceId, date, words: JSON.stringify(words) },
      update: {},
    })
    .catch(() => null);

  return NextResponse.json({ ok: true, data: { date, words } });
}
