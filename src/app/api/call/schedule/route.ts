import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { makeRoomCode, pruneStaleRooms } from "@/lib/signaling";
import { logAnalyticsEvent } from "@/lib/analytics-server";
import { cleanDeviceId } from "@/lib/validate";

export const dynamic = "force-dynamic";

// POST /api/call/schedule  (D20 — ROADMAP-60)
// { deviceId, name?, topic, scheduledFor (ISO), intent?: "group" }
// → { ok, data: { code, topic, scheduledFor, status } }
//
// Creates a topic-based practice room in ADVANCE ("practice tonight at 9").
//   • scheduledFor in the future  → status "scheduled" (invisible to quick
//     match and to the stale-prune; opens by code-join 5 minutes early)
//   • scheduledFor within a minute of now (the UI's "start now") → status
//     "open" public room that immediately appears in discovery
// Privacy: topic is user-typed but BOUNDED (≤60 chars) and shown to other
// learners by design; no identity beyond the display name they chose.

const MAX_TOPIC = 60;

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  // 10/min/IP — scheduling is a deliberate act, not a loop.
  if (!checkIpLimit(req, "call-schedule", 10)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const topic = (typeof body?.topic === "string" ? body.topic.trim() : "").slice(0, MAX_TOPIC);
  if (!topic) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }
  const intent = body?.intent === "one" ? "one" : "group";
  const when = new Date(typeof body?.scheduledFor === "string" ? body.scheduledFor : "");
  if (Number.isNaN(when.getTime())) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }
  const now = Date.now();
  const min = now - 60_000; // 1 min clock-skew grace
  const max = now + 7 * 24 * 60 * 60 * 1000; // a week ahead
  if (when.getTime() < min || when.getTime() > max) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  await pruneStaleRooms();

  const startNow = when.getTime() <= now + 60_000;
  const code = await allocateCode();
  const room = await db.callRoom.create({
    data: {
      code,
      intent,
      visibility: "public",
      topic,
      scheduledFor: startNow ? null : when,
      hostPeerId: `sched-${Math.random().toString(36).slice(2, 10)}`,
      status: startNow ? "open" : "scheduled",
      maxPeers: intent === "one" ? 2 : 4,
      participants: "[]",
    },
  });

  await logAnalyticsEvent("room_scheduled", deviceId, null, {
    intent,
    when: startNow ? "now" : "later",
  });

  return NextResponse.json({
    ok: true,
    data: {
      code: room.code,
      topic: room.topic,
      scheduledFor: startNow ? when.toISOString() : room.scheduledFor?.toISOString() ?? when.toISOString(),
      status: room.status,
    },
  });
}

async function allocateCode(): Promise<string> {
  for (let i = 0; i < 5; i++) {
    const code = makeRoomCode();
    const exists = await db.callRoom.findUnique({ where: { code } });
    if (!exists) return code;
  }
  return makeRoomCode() + Date.now().toString(36).slice(-2).toUpperCase();
}
