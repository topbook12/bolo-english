import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { parseTrackBatch } from "@/lib/analytics";

// POST /api/track  { deviceId, events: [{ name, props? }] }
// Privacy-first product analytics ingest (D1, ROADMAP-60.md):
//   • whitelist-validated batch (≤20 events, bad entries dropped silently)
//   • userId attached server-side from the session cookie — never sent by
//     the client, never an email
//   • no IP / user-agent stored; per-IP rate limit stops floods
//   • analytics must NEVER break UX: 4xx/5xx are always quiet JSON
export async function POST(req: NextRequest) {
  // 60 batches/min per IP+device — a batch holds ≤20 events, far above any
  // legitimate client's volume (queue flushes 10-event batches every 5s).
  if (!checkIpLimit(req, "track", 60)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId) || "anon";
  const events = parseTrackBatch(body?.events);
  if (!events.length) {
    return NextResponse.json({ ok: true, stored: 0 });
  }
  const userId = await getSessionUserId();
  try {
    await db.analyticsEvent.createMany({
      data: events.map((e) => ({
        name: e.name,
        deviceId,
        userId,
        props: e.props,
      })),
    });
  } catch (e) {
    // Never surface DB problems to the client — analytics is best-effort.
    console.error("track insert failed", e);
  }
  return NextResponse.json({ ok: true, stored: events.length });
}
