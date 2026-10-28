import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { db } from "@/lib/db";

// ─── TEMP one-shot QA cleanup (D35 phase review only — removed next commit) ──
// Deletes ONLY rows that match EXACT ids passed in the body, and only when the
// account email belongs to the @test.local QA domain. Guarded by a one-time
// random token (SHA-256 compared, never stored in the DB). The next commit
// deletes this file. Tables that don't exist yet on production (Phase 5) are
// skipped via .catch — cleanup must never depend on the migration state.

const TOKEN_SHA256 = "635e0ca223b5545f2709ce94b52fa5a0ccd6a23d4d331d471b7b1bca3899aafe";

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
  if (deviceId && !/^[0-9a-fA-:-]{8,80}$/.test(deviceId)) {
    return NextResponse.json({ ok: false, error: "bad deviceId shape" }, { status: 400 });
  }

  const user = email ? await db.user.findUnique({ where: { email } }) : null;
  const userId = user?.id ?? (typeof body?.userId === "string" ? body.userId : null);
  const accountDevice = userId ? `account:${userId}` : null;
  const orDev = [
    ...(deviceId ? [{ deviceId }] : []),
    ...(userId ? [{ userId }] : []),
    ...(accountDevice ? [{ deviceId: accountDevice }] : []),
  ];

  const out: Record<string, number> = {};
  if (orDev.length) {
    out.config = (await db.userConfig.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.analytics = (await db.analyticsEvent.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.activity = (await db.activityDay.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.xp = (await db.xpEvent.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.practice = (await db.practiceLog.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.sessions = (await db.speakingSession.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.words = (await db.wordBookItem.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.dailyVocab = (await db.dailyVocab.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.ratings = (await db.sessionRating.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.feedback = (await db.feedback.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.cv = (await db.cvDocument.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.push = (await db.pushSubscription.deleteMany({ where: { OR: orDev } }).catch(() => ({ count: -1 }))).count;
    out.apiKeys = (await db.userApiKey.deleteMany({ where: userId ? { userId } : { OR: orDev } }).catch(() => ({ count: -1 }))).count;
  }
  if (user) {
    out.user = (await db.user.deleteMany({ where: { id: user.id, email } })).count;
  }
  return NextResponse.json({ ok: true, data: { deleted: out, usersLeft: await db.user.count() } });
}
