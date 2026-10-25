import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getSessionUserId, isAdminUser } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import {
  cleanMessage,
  cleanPage,
  isCategory,
  isStatus,
  MIN_MESSAGE_LEN,
} from "@/lib/feedback";

// ─── In-app feedback API (D3, ROADMAP-60.md) ────────────────────────────────
// POST   /api/feedback   { deviceId, category, message, page? }   (anyone)
// GET    /api/feedback?status=new|seen|resolved|all&limit=100            (admin)
// PATCH  /api/feedback   { id, status }                                 (admin)
// DELETE /api/feedback   { id }                                         (admin)
//
// Privacy: no IP/UA/email stored; userId attached server-side from the
// session cookie; `page` is path-only (src/lib/feedback.ts contract).
// Unlike analytics, DB failures here DO return 500 — the submission IS the
// user's request, so they must know when it failed.

/** POST — widget submissions. Anonymous-friendly, 5/min per IP+device. */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId) || "anon";
  // 5/min per IP+device: kills flood abuse; the device axis keeps a shared
  // school-NAT IP from throttling many legitimate learners.
  if (!checkIpLimit(req, "feedback", 5, 60_000, deviceId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  if (!isCategory(body?.category)) {
    return NextResponse.json({ ok: false, error: "bad_category" }, { status: 400 });
  }
  const message = cleanMessage(body?.message);
  if (message.length < MIN_MESSAGE_LEN) {
    return NextResponse.json({ ok: false, error: "bad_message" }, { status: 400 });
  }
  const userId = await getSessionUserId();
  try {
    const row = await db.feedback.create({
      data: {
        category: body.category,
        message,
        page: cleanPage(body?.page),
        deviceId,
        userId,
      },
    });
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error("feedback insert failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

/** GET — admin queue: pre-shaped rows + status counts (no raw user ids). */
export async function GET(req: NextRequest) {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const url = new URL(req.url);
  const status = url.searchParams.get("status") ?? "all";
  const where = isStatus(status) ? { status } : {};
  const limit = Math.min(Number(url.searchParams.get("limit")) || 100, 200);
  try {
    const [rows, newCount, seenCount, resolvedCount] = await Promise.all([
      db.feedback.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: limit,
        select: {
          id: true,
          category: true,
          message: true,
          status: true,
          page: true,
          userId: true,
          createdAt: true,
        },
      }),
      db.feedback.count({ where: { status: "new" } }),
      db.feedback.count({ where: { status: "seen" } }),
      db.feedback.count({ where: { status: "resolved" } }),
    ]);
    return NextResponse.json({
      ok: true,
      counts: {
        new: newCount,
        seen: seenCount,
        resolved: resolvedCount,
        total: newCount + seenCount + resolvedCount,
      },
      data: rows.map(({ userId, ...r }) => ({ ...r, hasAccount: !!userId })),
    });
  } catch (e) {
    console.error("feedback list failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

/** PATCH — admin triage: move an item along new → seen → resolved (or back). */
export async function PATCH(req: NextRequest) {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id.slice(0, 64) : "";
  if (!id || !isStatus(body?.status)) {
    return NextResponse.json({ ok: false, error: "bad_input" }, { status: 400 });
  }
  try {
    const row = await db.feedback.update({
      where: { id },
      data: { status: body.status },
    });
    return NextResponse.json({ ok: true, id: row.id, status: row.status });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }
    console.error("feedback patch failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

/** DELETE — admin cleanup of spam/accidental submissions. */
export async function DELETE(req: NextRequest) {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id.slice(0, 64) : "";
  if (!id) {
    return NextResponse.json({ ok: false, error: "bad_input" }, { status: 400 });
  }
  try {
    await db.feedback.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025") {
      return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
    }
    console.error("feedback delete failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
