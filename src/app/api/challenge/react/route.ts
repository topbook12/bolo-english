import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { REACTION_EMOJIS, type ReactionEmoji } from "@/lib/moderation";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Challenge peer reactions (D32) ─────────────────────────────────────────
// POST /api/challenge/react { deviceId, submissionId, emoji }
// One reaction per device per submission; tapping the SAME emoji again
// toggles it off. You cannot react to your own sentence (peer love only).

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "challenge-react", 40))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const submissionId = cleanStr(body?.submissionId, 40);
  const emoji = cleanStr(body?.emoji, 12) as ReactionEmoji;
  if (!deviceId || !submissionId || !REACTION_EMOJIS.includes(emoji)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  const userId = await getSessionUserId().catch(() => null);

  try {
    await ensureDbTables(); // pre-phase-5 production DB self-migrates here
    const sub = await db.sentenceSubmission.findUnique({
      where: { id: submissionId },
      select: { id: true, deviceId: true, hidden: true },
    });
    if (!sub || sub.hidden) {
      return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownAction") }, { status: 404 });
    }
    if (sub.deviceId === deviceId) {
      return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
    }

    const existing = await db.sentenceReaction.findUnique({
      where: { submissionId_deviceId: { submissionId, deviceId } },
    });
    if (existing && existing.emoji === emoji) {
      await db.sentenceReaction.delete({ where: { id: existing.id } });
      return NextResponse.json({ ok: true, data: { active: false, emoji } });
    }
    if (existing) {
      await db.sentenceReaction.update({ where: { id: existing.id }, data: { emoji } });
      return NextResponse.json({ ok: true, data: { active: true, emoji } });
    }
    await db.sentenceReaction.create({ data: { submissionId, deviceId, userId, emoji } });
    return NextResponse.json({ ok: true, data: { active: true, emoji } });
  } catch (e) {
    console.error("[/api/challenge/react]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
