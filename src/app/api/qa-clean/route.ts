import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { db } from "@/lib/db";

// ─── TEMP one-shot QA cleanup (D29 deploy window only — removed next commit) ──
// Deletes ONLY rows that match EXACT ids passed in the body, and only when the
// account email belongs to the @test.local QA domain. Guarded by a one-time
// random token (SHA-256 compared, never stored in the DB). The next commit
// deletes this file.

const TOKEN_SHA256 = "0d6338bc15a91b3e31026d979201554003049072a749b764c19eb9176dab48e5";

export async function POST(req: NextRequest) {
  const got = req.headers.get("x-qa-token") ?? "";
  if (createHash("sha256").update(got).digest("hex") !== TOKEN_SHA256) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.trim() : "";
  if (!email && !deviceId) {
    return NextResponse.json({ ok: false, error: "email or deviceId required" }, { status: 400 });
  }
  if (email && !/^[^@\s]+@test\.local$/.test(email)) {
    return NextResponse.json({ ok: false, error: "only @test.local QA emails" }, { status: 400 });
  }
  if (deviceId && !/^[0-9a-fA-F-]{8,64}$/.test(deviceId)) {
    return NextResponse.json({ ok: false, error: "bad deviceId shape" }, { status: 400 });
  }

  const user = email ? await db.user.findUnique({ where: { email } }) : null;
  const userId = user?.id ?? (typeof body?.userId === "string" ? body.userId : null);
  const deviceOr = [
    ...(deviceId ? [{ deviceId }] : []),
    ...(userId ? [{ userId }] : []),
  ];

  const out: Record<string, number> = {};
  if (deviceOr.length) {
    out.config = (await db.userConfig.deleteMany({ where: { OR: deviceOr } })).count;
    out.analytics = (await db.analyticsEvent.deleteMany({ where: { OR: deviceOr } })).count;
    out.activity = (await db.activityDay.deleteMany({ where: { OR: deviceOr } })).count;
    out.xp = (await db.xpEvent.deleteMany({ where: { OR: deviceOr } }).catch(() => ({ count: 0 }))).count;
    out.practice = (await db.practiceLog.deleteMany({ where: { OR: deviceOr } })).count;
    out.sessions = (await db.speakingSession.deleteMany({ where: { OR: deviceOr } })).count;
    out.words = (await db.wordBookItem.deleteMany({ where: { OR: deviceOr } })).count;
    out.ratings = (await db.sessionRating.deleteMany({ where: { OR: deviceOr } })).count;
    out.feedback = (await db.feedback.deleteMany({ where: { OR: deviceOr } })).count;
  }
  if (user) {
    out.user = (await db.user.deleteMany({ where: { id: user.id, email } })).count;
  }
  return NextResponse.json({ ok: true, data: { deleted: out, usersLeft: await db.user.count() } });
}
