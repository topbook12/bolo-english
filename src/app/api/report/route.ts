import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { REPORT_REASONS, REPORT_TARGETS, type ReportReason, type ReportTarget } from "@/lib/moderation";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Community report API (D33, ROADMAP-60) ─────────────────────────────────
// POST /api/report { deviceId, targetType, targetId, reason, note? }
//
// Any learner can flag any community content (a challenge sentence, a call
// room, a partner profile). Reports land in the ADMIN moderation queue
// (Settings → Moderation, fail-closed 403 API). Community-safety auto-rule:
// a sentence reported by ≥3 DIFFERENT devices is hidden immediately pending
// review (raiding-proof: one angry user cannot hide someone alone).

const AUTO_HIDE_REPORTS = 3;

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "report", 10))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const targetType = cleanStr(body?.targetType, 12) as ReportTarget;
  const targetId = cleanStr(body?.targetId, 40);
  const reason = cleanStr(body?.reason, 12) as ReportReason;
  const note = cleanStr(body?.note ?? "", 200);
  if (!deviceId || !targetId || !REPORT_TARGETS.includes(targetType) || !REPORT_REASONS.includes(reason)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  const userId = await getSessionUserId().catch(() => null);

  try {
    await ensureDbTables(); // ContentReport/SentenceSubmission may not exist yet on prod
    // Self-reports of own content are meaningless → reject quietly.
    if (targetType === "sentence") {
      const sub = await db.sentenceSubmission.findUnique({ where: { id: targetId }, select: { deviceId: true } });
      if (sub?.deviceId === deviceId) {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownAction") }, { status: 400 });
      }
    }

    const report = await db.contentReport.create({
      data: { targetType, targetId, reason, note, reporterDeviceId: deviceId, reporterUserId: userId },
    });

    // Community auto-hide at ≥3 distinct reporters on one sentence.
    let autoHidden = false;
    if (targetType === "sentence") {
      const open = await db.contentReport.findMany({
        where: { targetType: "sentence", targetId, status: "open" },
        select: { reporterDeviceId: true },
      });
      const distinct = new Set(open.map((r) => r.reporterDeviceId));
      if (distinct.size >= AUTO_HIDE_REPORTS) {
        await db.sentenceSubmission.update({ where: { id: targetId }, data: { hidden: true } }).catch(() => null);
        autoHidden = true;
      }
    }
    if (targetType === "room") {
      // A reported LIVE room closes immediately — calls are private spaces;
      // one credible abuse signal beats leaving it running.
      await db.callRoom.update({ where: { id: targetId }, data: { status: "closed" } }).catch(() => null);
    }

    return NextResponse.json({ ok: true, data: { id: report.id, autoHidden } });
  } catch (e) {
    console.error("[/api/report]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
