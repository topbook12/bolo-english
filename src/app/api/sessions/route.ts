import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanLine } from "@/lib/validate";
import { logAnalyticsEvent } from "@/lib/analytics-server";
import { awardXpSafe } from "@/lib/xp-server";
import { callXp } from "@/lib/xp";

// GET /api/sessions?deviceId=...&limit=30 → speaking sessions
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
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
// Hardened (audit P0-3): every field is bounded — a spoofed/flooded device id
// can no longer push megabytes of transcript/analysis JSON into the shared
// 5 GB DB, and the IP limiter stops bulk-writes.
const MAX_TRANSCRIPT_LINES = 200;
const MAX_ANALYSIS_BYTES = 65_536;

export async function POST(req: NextRequest) {
  if (!checkIpLimit(req, "sessions-post", 12)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId || !body?.type || !Array.isArray(body.transcript)) {
    return NextResponse.json(
      { ok: false, error: "deviceId, type, transcript required" },
      { status: 400 }
    );
  }
  const transcript = body.transcript
    .slice(0, MAX_TRANSCRIPT_LINES)
    .map((l: unknown) => cleanLine(l))
    .filter(Boolean);
  const analysisStr = JSON.stringify(body.analysis ?? {});
  if (analysisStr.length > MAX_ANALYSIS_BYTES) {
    return NextResponse.json({ ok: false, error: "analysis too large" }, { status: 413 });
  }
  const userId = await getSessionUserId();
  const s = await db.speakingSession.create({
    data: {
      deviceId,
      userId,
      type: String(body.type).slice(0, 20),
      partnerCount: Math.min(Math.max(Number(body.partnerCount ?? 1) || 1, 0), 16),
      durationSec: Math.min(Math.max(Number(body.durationSec ?? 0) || 0, 0), 86_400),
      transcript: JSON.stringify(transcript),
      analysis: analysisStr,
      score: Math.min(Math.max(Number(body.analysis?.overallScore ?? 0) || 0, 0), 100),
    },
  });
  // Server-derived analytics (D1): speaking is the core product — measure it.
  await logAnalyticsEvent("speaking_session", deviceId, userId, {
    type: s.type,
    durationSec: s.durationSec,
    partnerCount: s.partnerCount,
  });
  // D29: call XP at the verified write-point — minute-based, capped per call
  // and per day, computed entirely from the stored duration. Fire-safe.
  await awardXpSafe({
    deviceId,
    userId,
    kind: "call",
    xp: callXp(s.durationSec),
    refId: s.id,
  });
  return NextResponse.json({ ok: true, data: { id: s.id } });
}
