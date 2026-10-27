import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { logAnalyticsEvent } from "@/lib/analytics-server";

// POST /api/practice  { deviceId, kind, refId, score, total }
// Hardened (audit P0-3): bounded fields + per-IP limiter.
export async function POST(req: NextRequest) {
  if (!checkIpLimit(req, "practice-post", 30)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const kind = cleanStr(body?.kind, 40);
  if (!deviceId || !kind || typeof body.score !== "number") {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }
  const userId = await getSessionUserId();
  const log = await db.practiceLog.create({
    data: {
      deviceId,
      userId,
      kind,
      refId: cleanStr(body.refId, 120),
      score: Math.min(Math.max(Number(body.score) || 0, 0), 1000),
      total: Math.min(Math.max(Number(body.total) || 0, 0), 1000),
    },
  });
  // Server-derived analytics (D1): every graded practice is a business signal.
  await logAnalyticsEvent("quiz_complete", deviceId, userId, {
    kind,
    score: log.score,
    total: log.total,
  });
  return NextResponse.json({ ok: true, data: { id: log.id } });
}

// GET /api/practice?deviceId=…&kind=grammar-quiz&take=120
// The learner's OWN practice history (device-scoped; no other device's rows,
// no admin data) — feeds the D24 adaptive weakness engine on the client.
// Bounded: hard take cap, newest first, lean fields only.
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const kind = cleanStr(req.nextUrl.searchParams.get("kind") ?? "", 40);
  const take = Math.min(Math.max(Number(req.nextUrl.searchParams.get("take")) || 120, 1), 200);
  const rows = await db.practiceLog.findMany({
    where: { deviceId, ...(kind ? { kind } : {}) },
    orderBy: { createdAt: "desc" },
    take,
    select: { id: true, kind: true, refId: true, score: true, total: true, createdAt: true },
  });
  return NextResponse.json({ ok: true, data: rows });
}
