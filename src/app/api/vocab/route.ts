import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import type { DailyWord } from "@/lib/types";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";

// GET /api/vocab?deviceId=...  → wordbook
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  const items = await db.wordBookItem.findMany({
    where: { deviceId },
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  return NextResponse.json({
    ok: true,
    data: items.map((i) => ({ ...(JSON.parse(i.data) as DailyWord), id: i.id, word: i.word })),
  });
}

// POST /api/vocab  { deviceId, word: DailyWord }  → upsert into wordbook
// Hardened (audit P0-3): bounded word + bounded JSON blob + per-IP limiter —
// `data` used to accept an UNBOUNDED body that landed raw in the DB row.
const MAX_WORD_JSON_BYTES = 8_192;

export async function POST(req: NextRequest) {
  if (!checkIpLimit(req, "vocab-post", 30)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId || !body?.word?.word) {
    return NextResponse.json({ ok: false, error: "deviceId & word required" }, { status: 400 });
  }
  const w: DailyWord = body.word;
  const wordKey = String(w.word).trim().toLowerCase().slice(0, 40);
  const dataStr = JSON.stringify(w);
  if (dataStr.length > MAX_WORD_JSON_BYTES) {
    return NextResponse.json({ ok: false, error: "word data too large" }, { status: 413 });
  }
  const userId = await getSessionUserId();
  const item = await db.wordBookItem.upsert({
    where: { deviceId_word: { deviceId, word: wordKey } },
    create: { deviceId, word: wordKey, data: dataStr, userId },
    update: { data: dataStr },
  });
  return NextResponse.json({ ok: true, data: { id: item.id } });
}

// DELETE /api/vocab?deviceId=...&word=... or {deviceId, id}
export async function DELETE(req: NextRequest) {
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  const word = req.nextUrl.searchParams.get("word")?.toLowerCase().slice(0, 40);
  const id = req.nextUrl.searchParams.get("id")?.slice(0, 40);
  if (!deviceId || (!word && !id)) {
    return NextResponse.json({ ok: false, error: "deviceId & (word|id) required" }, { status: 400 });
  }
  await db.wordBookItem.deleteMany({
    where: { deviceId, ...(id ? { id } : { word: word! }) },
  });
  return NextResponse.json({ ok: true });
}
