import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminUser } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanStr } from "@/lib/validate";

export const dynamic = "force-dynamic";

// ─── Admin moderation queue (D33, ROADMAP-60) ───────────────────────────────
// GET  /api/admin/moderation → open reports (+ target content preview) and
//                               auto-flagged sentences (word-list hits).
// POST /api/admin/moderation { reportId, action }      — act on a report
// POST /api/admin/moderation { submissionId, action }  — hide/unhide a flagged
//        sentence that has NO report yet.
//
// Actions: "reviewed" (mark seen, keep content) · "hide" (hide the sentence /
// close the room + actioned) · "unhide" (restore the sentence + actioned).
// Fail-closed: non-admin sessions get 403 (double gate with the hidden card).

export async function GET() {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: apiMsg("en", "adminOnly") }, { status: 403 });
  }
  try {
    const reports = await db.contentReport.findMany({
      where: { status: "open" },
      orderBy: { createdAt: "desc" },
      take: 100,
    });

    // Preview the reported content (bounded — the queue shows what it needs).
    const sentenceIds = reports.filter((r) => r.targetType === "sentence").map((r) => r.targetId);
    const roomIds = reports.filter((r) => r.targetType === "room").map((r) => r.targetId);
    const [sentences, rooms] = await Promise.all([
      sentenceIds.length
        ? db.sentenceSubmission.findMany({
            where: { id: { in: sentenceIds } },
            select: { id: true, text: true, hidden: true, flagged: true, day: true },
          })
        : [],
      roomIds.length
        ? db.callRoom.findMany({
            where: { id: { in: roomIds } },
            select: { id: true, topic: true, status: true, visibility: true },
          })
        : [],
    ]);
    const sentMap = new Map(sentences.map((s) => [s.id, s] as const));
    const roomMap = new Map(rooms.map((r) => [r.id, r] as const));

    const flagged = await db.sentenceSubmission.findMany({
      where: { flagged: true, hidden: true },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: { id: true, text: true, day: true, createdAt: true },
    });

    return NextResponse.json({
      ok: true,
      data: {
        reports: reports.map((r) => ({
          id: r.id,
          targetType: r.targetType,
          targetId: r.targetId,
          reason: r.reason,
          note: r.note,
          createdAt: r.createdAt.toISOString(),
          sentence: r.targetType === "sentence" ? (sentMap.get(r.targetId) ?? null) : null,
          room: r.targetType === "room" ? (roomMap.get(r.targetId) ?? null) : null,
        })),
        flagged,
      },
    });
  } catch (e) {
    console.error("[/api/admin/moderation GET]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: apiMsg("en", "dbConnectFailed") }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "adminOnly") }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  const reportId = cleanStr(body?.reportId, 40);
  const submissionId = cleanStr(body?.submissionId, 40);
  const action = cleanStr(body?.action, 12);
  if (!action || (!reportId && !submissionId)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  try {
    if (reportId) {
      const report = await db.contentReport.findUnique({ where: { id: reportId } });
      if (!report) return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownAction") }, { status: 404 });

      if (action === "reviewed") {
        await db.contentReport.update({ where: { id: reportId }, data: { status: "reviewed" } });
      } else if (action === "hide") {
        if (report.targetType === "sentence") {
          await db.sentenceSubmission.update({ where: { id: report.targetId }, data: { hidden: true } }).catch(() => null);
        } else if (report.targetType === "room") {
          await db.callRoom.update({ where: { id: report.targetId }, data: { status: "closed" } }).catch(() => null);
        }
        await db.contentReport.update({ where: { id: reportId }, data: { status: "actioned" } });
      } else if (action === "unhide") {
        if (report.targetType === "sentence") {
          await db.sentenceSubmission.update({ where: { id: report.targetId }, data: { hidden: false, flagged: false } }).catch(() => null);
        }
        await db.contentReport.update({ where: { id: reportId }, data: { status: "actioned" } });
      } else {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownAction") }, { status: 400 });
      }
      return NextResponse.json({ ok: true });
    }

    // Flagged sentence without a report: hide / unhide directly.
    if (submissionId) {
      if (action === "hide") {
        await db.sentenceSubmission.update({ where: { id: submissionId }, data: { hidden: true } });
      } else if (action === "unhide") {
        await db.sentenceSubmission.update({ where: { id: submissionId }, data: { hidden: false, flagged: false } });
      } else {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownAction") }, { status: 400 });
      }
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  } catch (e) {
    console.error("[/api/admin/moderation POST]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
