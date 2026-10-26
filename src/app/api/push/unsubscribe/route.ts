import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { checkIpLimitStrict } from "@/lib/rate-limit";

// POST /api/push/unsubscribe { endpoint }
//   Deletes the subscription row (Settings "turn off"). Idempotent: a
//   missing endpoint is still a success.
export async function POST(req: NextRequest) {
  if (!checkIpLimitStrict(req, "push-unsub", 20)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const endpoint = typeof body?.endpoint === "string" ? body.endpoint.slice(0, 500) : "";
  if (!endpoint) {
    return NextResponse.json({ ok: false, error: "endpoint_required" }, { status: 400 });
  }
  try {
    await db.pushSubscription.deleteMany({ where: { endpoint } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[/api/push/unsubscribe] failed:", (e as Error)?.message ?? e);
    // Treat as success — the user wants OFF; never trap them.
    return NextResponse.json({ ok: true, deleted: false });
  }
}
