import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminUser } from "@/lib/auth";
import { computeWeekDigest, weekKeyOf } from "@/lib/digest";

export const dynamic = "force-dynamic";

// ─── Weekly metrics digest API (D6, ROADMAP-60.md) ──────────────────────────
// GET  /api/digest   (admin) → live-computed week digest + last saved snapshot
// POST /api/digest   (Vercel cron with CRON_SECRET, or admin) → compute and
//                    upsert the week's snapshot into MetricDigest
//
// All aggregation is SQL-side; no raw rows leave the database. The cron is
// configured in vercel.json (Mondays 03:00 UTC = 09:00 Asia/Dhaka); Vercel
// automatically sends `Authorization: Bearer $CRON_SECRET` when the env var
// exists — set CRON_SECRET in Vercel to enable the weekly snapshot.

function cronAuthorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization") || "";
  return header === `Bearer ${secret}`;
}

export async function GET() {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  try {
    const digest = await computeWeekDigest(db);
    const saved = await db.metricDigest.findUnique({
      where: { weekKey: weekKeyOf() },
      select: { weekKey: true, updatedAt: true, data: true },
    });
    return NextResponse.json({
      ok: true,
      digest,
      saved: saved
        ? { weekKey: saved.weekKey, updatedAt: saved.updatedAt }
        : null,
    });
  } catch (e) {
    console.error("digest compute failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!cronAuthorized(req) && !(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  try {
    const digest = await computeWeekDigest(db);
    const row = await db.metricDigest.upsert({
      where: { weekKey: digest.weekKey },
      create: { weekKey: digest.weekKey, data: JSON.stringify(digest) },
      update: { data: JSON.stringify(digest) },
    });
    return NextResponse.json({ ok: true, weekKey: row.weekKey });
  } catch (e) {
    console.error("digest save failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
