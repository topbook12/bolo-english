import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { cleanDeviceId } from "@/lib/validate";

// GET /api/progress?deviceId=... → stats for the progress section
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });

  const [sessions, practice, wordCount] = await Promise.all([
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
  ]);

  const totalMinutes = Math.round(sessions.reduce((a, s) => a + s.durationSec, 0) / 60);
  const avgScore = sessions.length
    ? Math.round(sessions.reduce((a, s) => a + s.score, 0) / sessions.length)
    : 0;

  // streak: consecutive days (Asia/Dhaka) with any activity
  const days = new Set<string>();
  sessions.forEach((s) => days.add(dhaka(s.createdAt)));
  practice.forEach((p) => days.add(dhaka(p.createdAt)));
  let streak = 0;
  const d = new Date();
  for (;;) {
    const key = dhaka(d);
    if (days.has(key)) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else break;
  }

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
      totalMinutes,
      avgScore,
      streak,
      wordCount,
      trend,
      practiceByKind,
    },
  });
}

function dhaka(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(date);
}
