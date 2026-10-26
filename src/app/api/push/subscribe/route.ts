import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { isPushConfigured } from "@/lib/push-server";

// POST /api/push/subscribe { deviceId, locale, subscription }
//   Upserts the browser's push subscription (keyed by the unique endpoint).
//   20/min/IP — retries are fine, floods aren't. Fails closed with 503 when
//   VAPID isn't configured so the client can surface "unavailable".
export async function POST(req: NextRequest) {
  if (!isPushConfigured()) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId_required" }, { status: 400 });
  }
  if (!checkIpLimit(req, "push-sub", 20, 60_000, deviceId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  const sub = body?.subscription;
  const endpoint = typeof sub?.endpoint === "string" ? sub.endpoint.slice(0, 500) : "";
  const p256dh = typeof sub?.keys?.p256dh === "string" ? sub.keys.p256dh.slice(0, 200) : "";
  const auth = typeof sub?.keys?.auth === "string" ? sub.keys.auth.slice(0, 200) : "";
  if (!endpoint || !p256dh || !auth) {
    return NextResponse.json({ ok: false, error: "bad_subscription" }, { status: 400 });
  }
  const locale = ["bn", "hi", "en"].includes(body?.locale) ? body.locale : "en";

  try {
    const userId = await getSessionUserId();
    await db.pushSubscription.upsert({
      where: { endpoint },
      create: { endpoint, p256dh, auth, deviceId, locale, ...(userId ? { userId } : {}) },
      update: { p256dh, auth, deviceId, locale, ...(userId ? { userId } : {}) },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[/api/push/subscribe] failed:", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
