import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import type { DailyWord } from "@/lib/types";

// GET /api/vocab?deviceId=...  → wordbook
export async function GET(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId) return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
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
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.deviceId || !body?.word?.word) {
    return NextResponse.json({ ok: false, error: "deviceId & word required" }, { status: 400 });
  }
  const w: DailyWord = body.word;
  const wordKey = String(w.word).trim().toLowerCase();
  const userId = await getSessionUserId();
  const item = await db.wordBookItem.upsert({
    where: { deviceId_word: { deviceId: body.deviceId, word: wordKey } },
    create: { deviceId: body.deviceId, word: wordKey, data: JSON.stringify(w), userId },
    update: { data: JSON.stringify(w) },
  });
  return NextResponse.json({ ok: true, data: { id: item.id } });
}

// DELETE /api/vocab?deviceId=...&word=... or {deviceId, id}
export async function DELETE(req: NextRequest) {
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  const word = req.nextUrl.searchParams.get("word")?.toLowerCase();
  const id = req.nextUrl.searchParams.get("id");
  if (!deviceId || (!word && !id)) {
    return NextResponse.json({ ok: false, error: "deviceId & (word|id) required" }, { status: 400 });
  }
  await db.wordBookItem.deleteMany({
    where: { deviceId, ...(id ? { id } : { word: word! }) },
  });
  return NextResponse.json({ ok: true });
}
