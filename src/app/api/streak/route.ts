import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { computeStreaks, todayLocalDay } from "@/lib/streak-days";

// ─── Streak API (D11, ROADMAP-60.md) ─────────────────────────────────────────
// POST /api/streak { deviceId, day: "YYYY-MM-DD" }
//   Marks the device (and, when signed in, the account) active on the
//   CLIENT-LOCAL calendar day — timezone-safe without storing the timezone.
//   Idempotent per (deviceId, day); 30/min per IP is plenty for retries.
// GET /api/streak?deviceId=...[&today=YYYY-MM-DD]
//   → { current, longest, last7, todayDone } computed from the union of the
//   device's days and (when signed in) the account's days — an account's
//   streak survives device switches. `today` (optional, validated) lets the
//   CLIENT anchor the boundary to its own local calendar; the server clock
//   (UTC on Vercel) is only a fallback.

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId_required" }, { status: 400 });
  }
  if (!checkIpLimit(req, "streak-post", 30, 60_000, deviceId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  const day = typeof body?.day === "string" ? body.day : "";
  if (!DAY_RE.test(day)) {
    return NextResponse.json({ ok: false, error: "bad_day" }, { status: 400 });
  }
  try {
    const userId = await getSessionUserId();
    await db.activityDay.upsert({
      where: { deviceId_day: { deviceId, day } },
      create: { deviceId, day, ...(userId ? { userId } : {}) },
      update: userId ? { userId } : {},
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    // Never break the UX for a streak mark — log and answer OK (the client
    // treats this endpoint as best-effort anyway).
    console.error("[/api/streak] mark failed:", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: true, stored: false });
  }
}

export async function GET(req: NextRequest) {
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId_required" }, { status: 400 });
  }
  try {
    const userId = await getSessionUserId();
    const rows = await db.activityDay.findMany({
      where: userId ? { OR: [{ deviceId }, { userId }] } : { deviceId },
      select: { day: true },
    });
    // The "today" boundary that matters is the CLIENT's local calendar; the
    // server clock (UTC on Vercel) is only a fallback.
    const todayParam = req.nextUrl.searchParams.get("today") ?? "";
    const today = DAY_RE.test(todayParam) ? todayParam : todayLocalDay();
    const info = computeStreaks(
      rows.map((r) => r.day),
      today
    );
    return NextResponse.json({ ok: true, data: info });
  } catch (e) {
    console.error("[/api/streak] read failed:", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
