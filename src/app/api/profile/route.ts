import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { computeStreaks, DAY_RE } from "@/lib/streak-days";
import { computeBadges, avatarEmoji, type BadgeProgress } from "@/lib/badges";
import { lastNDays } from "@/lib/xp";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Profile API (D34, ROADMAP-60) ──────────────────────────────────────────
// GET /api/profile?deviceId=…&today=YYYY-MM-DD (client-local day, optional)
//
// Aggregates EVERYTHING the profile card shows from data the product already
// holds — badges are computed SERVER-SIDE from real counts (never claimed by
// the client). Streak reuses the D11 math over the union of device days and
// account days (survives device switches), anchored to the CLIENT's local
// calendar day like /api/streak so the boundary is timezone-safe.
//
// → { name, avatar, level, goal, xp: {total, week}, streak: {current, longest,
//     last7, todayDone}, badges: BadgeProgress[] }

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  if (!checkIpLimit(req, "profile", 30))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });

  const rawToday = req.nextUrl.searchParams.get("today") ?? "";
  const today = DAY_RE.test(rawToday) ? rawToday : new Date().toISOString().slice(0, 10);

  const user = await getSessionUser().catch(() => null);

  try {
    // Pre-phase-5 prod DB self-migrates on this first hit (XpEvent +
    // SentenceSubmission live here); on DDL failure the catch below keeps
    // the profile a 503-hide instead of a 500.
    await ensureDbTables();
    const config = await db.userConfig.findFirst({
      where: user ? { userId: user.id } : { deviceId },
      orderBy: { updatedAt: "desc" },
      select: { displayName: true, level: true, goal: true, avatar: true },
    });
    const level = config?.level ?? "beginner";

    // When signed in the account owns the numbers (device switches don't
    // reset badges) — mirrors how XP/ActivityDay rows carry userId.
    const ownerWhere = user ? { OR: [{ userId: user.id }, { deviceId }] } : { deviceId };
    const xpWhere = user ? { OR: [{ userId: user.id }, { deviceId }] } : { deviceId };

    const weekStart = lastNDays(7)[0]!;
    const [sessions, words, quizzes, xpAgg, weekAgg, lessonEvents, challenges, days] = await Promise.all([
      db.speakingSession.count({ where: ownerWhere }),
      db.wordBookItem.count({ where: ownerWhere }),
      db.practiceLog.count({ where: ownerWhere }),
      db.xpEvent.aggregate({ where: xpWhere, _sum: { xp: true } }),
      db.xpEvent.aggregate({ where: { AND: [xpWhere, { day: { gte: weekStart } }] }, _sum: { xp: true } }),
      db.xpEvent.count({ where: { AND: [xpWhere, { kind: "lesson" }] } }),
      db.sentenceSubmission.count({ where: ownerWhere }),
      db.activityDay.findMany({
        where: user ? { OR: [{ userId: user.id }, { deviceId }] } : { deviceId },
        select: { day: true },
      }),
    ]);

    const streak = computeStreaks(
      days.map((d) => d.day),
      today
    );

    const badges: BadgeProgress[] = computeBadges({
      sessions,
      streakLongest: streak.longest,
      words,
      quizzes,
      lessons: lessonEvents,
      xpTotal: Number(xpAgg._sum.xp ?? 0),
      challenges,
    });

    const storedName = config?.displayName ?? null;
    const fallbackName = apiMsg(locale, "learnerName");
    const name = user?.name?.trim() && user.name.trim().length > 0 ? user.name.trim().slice(0, 24) : storedName?.trim() || fallbackName;

    return NextResponse.json({
      ok: true,
      data: {
        name,
        avatar: avatarEmoji(config?.avatar, level),
        avatarKey: config?.avatar ?? "",
        level,
        goal: config?.goal ?? "general",
        xp: {
          total: Number(xpAgg._sum.xp ?? 0),
          week: Number(weekAgg._sum.xp ?? 0),
        },
        streak,
        badges,
      },
    });
  } catch (e) {
    console.error("[/api/profile]", e instanceof Error ? `${e.name}: ${e.message}` : JSON.stringify(e) ?? String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
