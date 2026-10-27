import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { xpDay } from "@/lib/xp";
import { promptForDay } from "@/lib/challenge-bank";
import { flagText, REACTION_EMOJIS } from "@/lib/moderation";
import { privacyName } from "@/lib/leaderboard";
import { isNoName } from "@/lib/no-name";
import { avatarEmoji } from "@/lib/badges";
import { awardXpSafe } from "@/lib/xp-server";
import { blockedDeviceIds } from "@/lib/block-set";

export const dynamic = "force-dynamic";

// ─── Daily sentence challenge (D32, ROADMAP-60) ─────────────────────────────
// GET  /api/challenge?deviceId=…
//   → today's prompt (deterministic from the day string — zero AI cost),
//     my submission (if any), the public feed (≤30, hidden/blocked excluded),
//     reaction counts + my reactions, and participant stats.
// POST /api/challenge { deviceId, text }
//   → create/update TODAY's submission (one per device per Dhaka day —
//     editing keeps the single XP grant). Auto word-list flag: a flagged
//     sentence goes straight to hidden pending admin review (D33).

const MAX_LEN = 300;

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  if (!checkIpLimit(req, "challenge-get", 30))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });

  const day = xpDay();
  const prompt = promptForDay(day);
  const fallback = apiMsg(locale, "learnerName");

  try {
    const myUserId = await getSessionUserId().catch(() => null);
    const blocked = await blockedDeviceIds(deviceId, myUserId);

    const feedRaw = await db.sentenceSubmission.findMany({
      where: { day, hidden: false, deviceId: { notIn: blocked } },
      orderBy: { createdAt: "desc" },
      take: 30,
    });
    const [mine, reactions] = await Promise.all([
      db.sentenceSubmission.findUnique({ where: { deviceId_day: { deviceId, day } } }),
      db.sentenceReaction.findMany({
        where: { submissionId: { in: feedRaw.map((f) => f.id) } },
        select: { submissionId: true, deviceId: true, emoji: true },
      }),
    ]);

    // Authors: account name when the submitter was signed in (the norm in a
    // login-first app), else the localized "Learner". Levels/avatars from the
    // config row for the level chip.
    const userIds = [...new Set(feedRaw.map((f) => f.userId).filter((v): v is string => Boolean(v)))];
    const [accounts, configs] = await Promise.all([
      userIds.length ? db.user.findMany({ where: { id: { in: userIds } }, select: { id: true, name: true } }) : [],
      db.userConfig.findMany({
        where: { OR: [{ userId: { in: userIds } }, { deviceId: { in: feedRaw.map((f) => f.deviceId) } }] },
        select: { userId: true, deviceId: true, level: true, avatar: true },
      }),
    ]);
    const accountNames = new Map(accounts.map((a) => [a.id, a.name] as const));
    const cfgByUser = new Map(configs.filter((c) => c.userId).map((c) => [c.userId as string, c] as const));

    const counts = new Map<string, Record<string, number>>();
    const myReactions = new Map<string, string>();
    for (const r of reactions) {
      const row = counts.get(r.submissionId) ?? {};
      row[r.emoji] = (row[r.emoji] ?? 0) + 1;
      counts.set(r.submissionId, row);
      if (r.deviceId === deviceId) myReactions.set(r.submissionId, r.emoji);
    }

    const feed = feedRaw.map((f) => {
      const stored = f.userId ? (accountNames.get(f.userId) ?? null) : null;
      const cfg = f.userId ? cfgByUser.get(f.userId) : undefined;
      return {
        id: f.id,
        name: privacyName(stored && !isNoName(stored) ? stored : "", fallback),
        level: cfg?.level ?? "beginner",
        avatar: avatarEmoji(cfg?.avatar, cfg?.level),
        mine: f.deviceId === deviceId,
        text: f.text,
        flagged: f.flagged,
        feedback: f.feedback || null,
        reactions: counts.get(f.id) ?? {},
        myReaction: myReactions.get(f.id) ?? null,
        createdAt: f.createdAt.toISOString(),
      };
    });

    return NextResponse.json({
      ok: true,
      data: {
        day,
        prompt: {
          id: prompt.id,
          en: prompt.en,
          bn: prompt.bn,
          hi: prompt.hi,
          starters: prompt.starters,
        },
        mine: mine
          ? {
              id: mine.id,
              text: mine.text,
              flagged: mine.flagged,
              hidden: mine.hidden,
              feedback: mine.feedback || null,
            }
          : null,
        feed,
        participants: feed.length,
      },
    });
  } catch {
    // Pre-migration safety: prompt + empty feed, never a 500.
    return NextResponse.json({
      ok: true,
      data: {
        day,
        prompt: { id: prompt.id, en: prompt.en, bn: prompt.bn, hi: prompt.hi, starters: prompt.starters },
        mine: null,
        feed: [],
        participants: 0,
      },
    });
  }
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "challenge-post", 10))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const text = cleanStr(body?.text, MAX_LEN);
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  if (!text || text.length < 3)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "sentenceRequired") }, { status: 400 });

  const userId = await getSessionUserId().catch(() => null);
  const day = xpDay();
  const prompt = promptForDay(day);
  const { flagged } = flagText(text);

  try {
    const existing = await db.sentenceSubmission.findUnique({
      where: { deviceId_day: { deviceId, day } },
    });
    const sub = await db.sentenceSubmission.upsert({
      where: { deviceId_day: { deviceId, day } },
      create: {
        deviceId,
        userId,
        day,
        promptId: prompt.id,
        text,
        flagged,
        hidden: flagged, // flagged text waits for an admin, never auto-public
      },
      update: {
        text,
        promptId: prompt.id,
        flagged,
        hidden: flagged,
        // editing re-opens review: clear the old AI feedback (it describes the
        // previous sentence) and any un-hide — the flag re-decides
        feedback: "",
      },
    });

    // One XP grant per day (cap 1/day + refId dedupe on the day itself).
    const xp = await awardXpSafe({
      deviceId,
      userId,
      kind: "challenge",
      xp: 12,
      refId: `challenge:${day}`,
      dedupeRefId: true,
    });

    return NextResponse.json({
      ok: true,
      data: {
        id: sub.id,
        flagged: sub.flagged,
        hidden: sub.hidden,
        edited: Boolean(existing),
        xp: xp.xp,
        capped: xp.capped,
      },
    });
  } catch (e) {
    console.error("[/api/challenge POST]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
