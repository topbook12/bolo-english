import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";

// GET /api/sessions?deviceId=...&limit=30 → speaking sessions
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = req.nextUrl.searchParams.get("deviceId");
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  const limit = Math.min(Number(req.nextUrl.searchParams.get("limit") ?? 30), 100);
  const sessions = await db.speakingSession.findMany({
    where: { deviceId },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return NextResponse.json({
    ok: true,
    data: sessions.map((s) => ({
      id: s.id,
      type: s.type,
      partnerCount: s.partnerCount,
      durationSec: s.durationSec,
      score: s.score,
      analysis: JSON.parse(s.analysis),
      transcript: JSON.parse(s.transcript),
      createdAt: s.createdAt,
    })),
  });
}

// POST /api/sessions  { deviceId, type, partnerCount, durationSec, transcript, analysis }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.deviceId || !body?.type || !Array.isArray(body.transcript)) {
    return NextResponse.json(
      { ok: false, error: "deviceId, type, transcript required" },
      { status: 400 }
    );
  }
  const userId = await getSessionUserId();
  const s = await db.speakingSession.create({
    data: {
      deviceId: body.deviceId,
      userId,
      type: String(body.type).slice(0, 20),
      partnerCount: Number(body.partnerCount ?? 1),
      durationSec: Number(body.durationSec ?? 0),
      transcript: JSON.stringify(body.transcript),
      analysis: JSON.stringify(body.analysis ?? {}),
      score: Number(body.analysis?.overallScore ?? 0),
    },
  });
  return NextResponse.json({ ok: true, data: { id: s.id } });
}
