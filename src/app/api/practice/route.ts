import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";

// POST /api/practice  { deviceId, kind, refId, score, total }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.deviceId || !body?.kind || typeof body.score !== "number") {
    return NextResponse.json({ ok: false, error: "deviceId, kind, score required" }, { status: 400 });
  }
  const userId = await getSessionUserId();
  const log = await db.practiceLog.create({
    data: {
      deviceId: body.deviceId,
      userId,
      kind: String(body.kind).slice(0, 40),
      refId: String(body.refId ?? "").slice(0, 120),
      score: Number(body.score) || 0,
      total: Number(body.total) || 0,
    },
  });
  return NextResponse.json({ ok: true, data: { id: log.id } });
}
