import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanDeviceId } from "@/lib/validate";
import { getSessionUserId } from "@/lib/auth";
import { computeStreaks, todayLocalDay } from "@/lib/streak-days";

// GET /api/progress?deviceId=... → stats for the progress section
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });

  // D11: the streak is server-tracked via ActivityDay (client-local days).
  // When signed in, the account's days merge with this device's days so a
  // streak survives device switches.
  const userId = await getSessionUserId().catch(() => null);

  const [sessions, practice, wordCount, activityDays] = await Promise.all([
    db.speakingSession.findMany({
      where: { deviceId },
      orderBy: { createdAt: "asc" },
      select: { score: true, durationSec: true, type: true, createdAt: true },
    }),
    db.practiceLog.findMany({
      where: { deviceId },
      orderBy: { createdAt: "desc" },
      take: 200,
    }),
    db.wordBookItem.count({ where: { deviceId } }),
    db.activityDay.findMany({
      where: userId ? { OR: [{ deviceId }, { userId }] } : { deviceId },
      select: { day: true },
    }),
  ]);

  const totalSeconds = Math.round(sessions.reduce((a, s) => a + s.durationSec, 0));
  const totalMinutes = Math.round(sessions.reduce((a, s) => a + s.durationSec, 0) / 60);
  const avgScore = sessions.length
    ? Math.round(sessions.reduce((a, s) => a + s.score, 0) / sessions.length)
    : 0;

  // Streak from ActivityDay (timezone-safe: days arrive already localized by
  // the device). "today" is anchored to the client's calendar when provided.
  const todayParam = req.nextUrl.searchParams.get("today") ?? "";
  const streakInfo = computeStreaks(
    activityDays.map((r) => r.day),
    /^\d{4}-\d{2}-\d{2}$/.test(todayParam) ? todayParam : todayLocalDay()
  );
  const streak = streakInfo.current;
  const streakLongest = streakInfo.longest;

  // score trend (last 10 sessions)
  const trend = sessions.slice(-10).map((s, i) => ({
    name: `${i + 1}`,
    score: s.score,
  }));

  const practiceByKind: Record<string, { count: number; correct: number; total: number }> = {};
  practice.forEach((p) => {
    const k = practiceByKind[p.kind] ?? { count: 0, correct: 0, total: 0 };
    k.count++;
    k.correct += p.score;
    k.total += p.total;
    practiceByKind[p.kind] = k;
  });

  return NextResponse.json({
    ok: true,
    data: {
      totalSessions: sessions.length,
      // totalSeconds lets the UI show short sessions honestly (a 40s call is
      // not "0 min" — that used to look like progress never updating)
      totalSeconds,
      totalMinutes,
      avgScore,
      streak,
      streakLongest,
      todayDone: streakInfo.todayDone,
      wordCount,
      trend,
      practiceByKind,
    },
  });
}
