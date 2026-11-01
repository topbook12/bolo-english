import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { logAnalyticsEvent } from "@/lib/analytics-server";
import { awardXpSafe } from "@/lib/xp-server";
import { writingTaskById } from "@/lib/writing-bank";

export const maxDuration = 30;

// ─── Writing practice persistence (Backlog A1) ──────────────────────────────
// POST /api/writing — save one graded submission (the AI grading itself
// happens in /api/ai feature "writing-feedback"; this endpoint only stores
// the already-computed result the client got back).
//   body: { deviceId, taskKey, text, overall, scores:{grammar,structure,vocabulary}, feedback }
// Hardened: bounded fields, bank-whitelisted task, per-IP limiter, XP at the
// verified write-point (writing → 15 XP, 4/day).

interface WritingScores {
  grammar: number;
  structure: number;
  vocabulary: number;
}

const clamp100 = (v: unknown): number => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(100, Math.max(0, Math.round(n))) : 0;
};

function cleanScores(raw: unknown): WritingScores {
  const o = (typeof raw === "object" && raw !== null ? raw : {}) as Record<string, unknown>;
  return {
    grammar: clamp100(o.grammar),
    structure: clamp100(o.structure),
    vocabulary: clamp100(o.vocabulary),
  };
}

export async function POST(req: NextRequest) {
  if (!checkIpLimit(req, "writing-post", 20)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const taskKey = cleanStr(body?.taskKey ?? "", 40);
  const task = writingTaskById(taskKey);
  const text = cleanStr(body?.text ?? "", 4000);

  if (!deviceId || !task || text.length < 20) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  const userId = await getSessionUserId();
  const scores = cleanScores(body?.scores);
  // Honest aggregate: the mean of the three axis scores, recomputed
  // server-side — the client number is never trusted blindly.
  const overall = Math.round((scores.grammar + scores.structure + scores.vocabulary) / 3);

  const row = await db.writingSubmission.create({
    data: {
      deviceId,
      userId,
      taskKey,
      kind: task.kind,
      text,
      overall,
      scores: JSON.stringify(scores),
      feedback: JSON.stringify(body?.feedback ?? {}).slice(0, 6000),
    },
    select: { id: true, createdAt: true },
  });

  // Business signal (D1): a finished essay is a strong "learning depth" event.
  await logAnalyticsEvent("writing_done", deviceId, userId, {
    kind: task.kind,
    score: overall,
  });

  // XP at the verified write-point — never fails the request.
  const xp = await awardXpSafe({
    deviceId,
    userId,
    kind: "writing",
    xp: 15,
    refId: task.id,
  });

  return NextResponse.json({ ok: true, data: { id: row.id, overall, xp: xp.xp } });
}

// GET /api/writing?deviceId=…&take=20 → the learner's OWN submissions
// (newest first, text included so the history view can reopen any essay).
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const take = Math.min(Math.max(Number(req.nextUrl.searchParams.get("take")) || 20, 1), 50);
  const rows = await db.writingSubmission.findMany({
    where: { deviceId },
    orderBy: { createdAt: "desc" },
    take,
    select: {
      id: true,
      taskKey: true,
      kind: true,
      text: true,
      overall: true,
      scores: true,
      feedback: true,
      createdAt: true,
    },
  });
  return NextResponse.json({ ok: true, data: rows });
}
