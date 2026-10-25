import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// ─── Health check (D5, ROADMAP-60.md) ───────────────────────────────────────
// GET /api/health — for external uptime pingers (UptimeRobot etc.) and for
// quick manual probes. No auth, no PII, no caching. 200 = app + DB alive,
// 503 = DB unreachable (app itself still responded → tells you the failure
// is data-layer, not the whole deployment).

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json(
      { ok: true, db: "up", time: new Date().toISOString() },
      { headers: { "cache-control": "no-store" } }
    );
  } catch (e) {
    console.error("health check db failure", e);
    return NextResponse.json(
      { ok: false, db: "down", time: new Date().toISOString() },
      { status: 503, headers: { "cache-control": "no-store" } }
    );
  }
}
