import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";

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
  return NextResponse.json({ ok: true, data: { id: log.id } });
}
