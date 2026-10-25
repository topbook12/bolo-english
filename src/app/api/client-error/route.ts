import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getSessionUserId, isAdminUser } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import {
  cleanErrorDigest,
  cleanErrorMessage,
  cleanErrorPath,
  cleanErrorStack,
  isSource,
} from "@/lib/client-error";

// ─── Client error monitoring API (D5, ROADMAP-60.md) ────────────────────────
// POST   /api/client-error   { message, stack?, digest?, path?, source? } (anyone)
// GET    /api/client-error   (admin) recent reports + 24h/total counts
// DELETE /api/client-error   { id } | { all: true }               (admin)
//
// Privacy: no IP/UA/email stored; userId attached server-side; path is
// path-only. Unlike analytics, DB failures here DO return 500 — but this
// endpoint is only called BY the error path, so it must itself never throw:
// it returns quiet ok:false instead of throwing raw (the client already
// handles failure silently — an error reporter can't toast-loop).

/** POST — error reports from the boundary / window handlers. 30/min. */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId) || "anon";
  if (!checkIpLimit(req, "client-error", 30, 60_000, deviceId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  const message = cleanErrorMessage(body?.message);
  // An empty message carries nothing actionable — accept but store nothing.
  if (!message) {
    return NextResponse.json({ ok: true, stored: false });
  }
  const source = isSource(body?.source) ? body.source : "window";
  const userId = await getSessionUserId();
  try {
    const row = await db.clientError.create({
      data: {
        message,
        stack: cleanErrorStack(body?.stack),
        digest: cleanErrorDigest(body?.digest),
        path: cleanErrorPath(body?.path),
        source,
        deviceId,
        userId,
      },
    });
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    // Never throw from the error reporter — swallow quietly.
    console.error("client-error insert failed", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

/** GET — admin: recent reports + counts (shaped, no raw user ids). */
export async function GET() {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  try {
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [recent, last24h, total] = await Promise.all([
      db.clientError.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
        select: {
          id: true,
          message: true,
          digest: true,
          path: true,
          source: true,
          createdAt: true,
        },
      }),
      db.clientError.count({ where: { createdAt: { gte: since24h } } }),
      db.clientError.count(),
    ]);
    return NextResponse.json({ ok: true, recent, last24h, total });
  } catch (e) {
    console.error("client-error aggregate failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

/** DELETE — admin clears one report or the whole log (post-triage). */
export async function DELETE(req: NextRequest) {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  try {
    if (body?.all === true) {
      const r = await db.clientError.deleteMany({});
      return NextResponse.json({ ok: true, deleted: r.count });
    }
    const id = typeof body?.id === "string" ? body.id : "";
    if (!id) {
      return NextResponse.json({ ok: false, error: "bad_id" }, { status: 400 });
    }
    await db.clientError.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }
    console.error("client-error delete failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
