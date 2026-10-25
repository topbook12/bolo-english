import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getSessionUserId, isAdminUser } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import {
  cleanComment,
  cleanContext,
  isKind,
  isValidScore,
  NPS_PASSIVE_MIN,
  NPS_PROMOTER_MIN,
} from "@/lib/rating";

// ─── Session rating + NPS API (D4, ROADMAP-60.md) ───────────────────────────
// POST   /api/rating   { kind, score, comment?, context? }   (anyone)
// GET    /api/rating   (admin) aggregates: per-kind avg/count, NPS score,
//                      score distribution, recent comments (no user ids)
// DELETE /api/rating   { id }                                   (admin)
//
// Privacy: no IP/UA/email stored; userId attached server-side from the
// session cookie; `context` sanitized to a path/topic-tag charset.
// Like feedback, DB failures here DO return 500 — the rating IS the user's
// request, so they must know when it failed.

/** POST — rating submissions. Anonymous-friendly, 30/min per IP+device. */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId) || "anon";
  // 30/min per IP+device: ratings fire per session end, so this must be far
  // looser than feedback's 5/min — still kills flood abuse.
  if (!checkIpLimit(req, "rating", 30, 60_000, deviceId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  if (!isKind(body?.kind)) {
    return NextResponse.json({ ok: false, error: "bad_kind" }, { status: 400 });
  }
  const kind = body.kind;
  if (!isValidScore(kind, body?.score)) {
    return NextResponse.json({ ok: false, error: "bad_score" }, { status: 400 });
  }
  const userId = await getSessionUserId();
  try {
    const row = await db.sessionRating.create({
      data: {
        kind,
        score: body.score as number,
        comment: cleanComment(body?.comment),
        context: cleanContext(body?.context),
        deviceId,
        userId,
      },
    });
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error("rating insert failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

/** GET — admin aggregates: shaped, no raw user ids. */
export async function GET() {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  try {
    const [perKind, npsScores, recent] = await Promise.all([
      db.sessionRating.groupBy({
        by: ["kind"],
        _count: { _all: true },
        _avg: { score: true },
      }),
      db.sessionRating.groupBy({
        by: ["score"],
        _count: { score: true },
        where: { kind: "nps" },
      }),
      db.sessionRating.findMany({
        where: { comment: { not: "" } },
        orderBy: { createdAt: "desc" },
        take: 30,
        select: {
          id: true,
          kind: true,
          score: true,
          comment: true,
          context: true,
          createdAt: true,
        },
      }),
    ]);

    const kindStats = perKind.map((k) => ({
      kind: k.kind,
      count: k._count._all,
      avg: k._avg.score ? Number(k._avg.score.toFixed(2)) : null,
    }));

    // Standard NPS: %promoters(9-10) − %detractors(0-6), passives(7-8) ignored.
    let promoters = 0;
    let passives = 0;
    let detractors = 0;
    let npsTotal = 0;
    for (const s of npsScores) {
      const n = s._count.score;
      npsTotal += n;
      if (s.score >= NPS_PROMOTER_MIN) promoters += n;
      else if (s.score >= NPS_PASSIVE_MIN) passives += n;
      else detractors += n;
    }
    const nps = npsTotal
      ? Math.round(((promoters - detractors) / npsTotal) * 100)
      : null;

    return NextResponse.json({
      ok: true,
      kindStats,
      nps: { score: nps, total: npsTotal, promoters, passives, detractors },
      recent,
    });
  } catch (e) {
    console.error("rating aggregate failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

/** DELETE — admin removes an abusive/spam comment row. */
export async function DELETE(req: NextRequest) {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";
  if (!id) {
    return NextResponse.json({ ok: false, error: "bad_id" }, { status: 400 });
  }
  try {
    await db.sessionRating.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }
    console.error("rating delete failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
