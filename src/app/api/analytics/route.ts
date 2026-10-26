import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/analytics — admin-only aggregate dashboard feed (D2, ROADMAP-60).
//
// Everything is PRE-AGGREGATED here (SQL GROUP BY / json_extract) so the
// dashboard ships numbers, never raw event rows — privacy stays intact even
// inside the admin UI. Day buckets are UTC (Bangladesh = UTC+6; fine for
// trend views, documented here so nobody is surprised by the 6h shift).
//
// Guard: fail-closed (isAdminUser). Non-admins get 403 — the Settings card
// is hidden for them too, but the API never trusts the UI.

interface DayRow {
  d: string;
  n: bigint | number;
}
interface KeyRow {
  k: string | null;
  n: bigint | number;
}
interface QuizRow {
  k: string | null;
  n: bigint | number;
  avg_ratio: number | null;
}
interface SumRow {
  n: bigint | number;
  total: number | null;
}

const num = (v: bigint | number | null | undefined) => Number(v ?? 0);

function dayStr(offsetDays: number): string {
  return new Date(Date.now() - offsetDays * 86_400_000).toISOString().slice(0, 10);
}

export async function GET() {
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const d6 = dayStr(6);
  const d13 = dayStr(13);
  const d29 = dayStr(29);

  const [
    usersTotal,
    users7,
    users30,
    dauByDay,
    activeWeek,
    activeMonth,
    sessionsToday,
    sessEnd7,
    topSections,
    topFeatures,
    quiz7,
    speaking7,
    devices30,
  ] = await Promise.all([
    db.user.count(),
    db.user.count({ where: { createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } } }),
    db.user.count({ where: { createdAt: { gte: new Date(Date.now() - 30 * 86_400_000) } } }),
    db.$queryRawUnsafe<DayRow[]>(
      `SELECT substr(datetime(createdAt/1000,'unixepoch'),1,10) d, COUNT(DISTINCT deviceId) n
       FROM AnalyticsEvent WHERE substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY d ORDER BY d`,
      d13
    ),
    db.$queryRawUnsafe<DayRow[]>(
      `SELECT COUNT(DISTINCT deviceId) n FROM AnalyticsEvent WHERE substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d6
    ),
    db.$queryRawUnsafe<DayRow[]>(
      `SELECT COUNT(DISTINCT deviceId) n FROM AnalyticsEvent WHERE substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d29
    ),
    db.analyticsEvent.count({
      where: { name: "session_start", createdAt: { gte: new Date(Date.now() - 86_400_000) } },
    }),
    db.$queryRawUnsafe<SumRow[]>(
      `SELECT COUNT(*) n, AVG(json_extract(props,'$.durationSec')) total
       FROM AnalyticsEvent WHERE name='session_end' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d6
    ),
    db.$queryRawUnsafe<KeyRow[]>(
      `SELECT COALESCE(json_extract(props,'$.section'),'?') k, COUNT(*) n
       FROM AnalyticsEvent WHERE name='section_view' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY k ORDER BY n DESC LIMIT 8`,
      d6
    ),
    db.$queryRawUnsafe<KeyRow[]>(
      `SELECT COALESCE(json_extract(props,'$.feature'),'?') k, COUNT(*) n
       FROM AnalyticsEvent WHERE name='ai_call' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY k ORDER BY n DESC LIMIT 8`,
      d6
    ),
    db.$queryRawUnsafe<QuizRow[]>(
      `SELECT COALESCE(json_extract(props,'$.kind'),'?') k, COUNT(*) n,
              AVG(CASE WHEN json_extract(props,'$.total') > 0
                       THEN 1.0 * json_extract(props,'$.score') / json_extract(props,'$.total') END) avg_ratio
       FROM AnalyticsEvent WHERE name='quiz_complete' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY k ORDER BY n DESC LIMIT 8`,
      d6
    ),
    db.$queryRawUnsafe<SumRow[]>(
      `SELECT COUNT(*) n, SUM(json_extract(props,'$.durationSec')) total
       FROM AnalyticsEvent WHERE name='speaking_session' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d6
    ),
    db.$queryRawUnsafe<KeyRow[]>(
      `SELECT COALESCE(json_extract(props,'$.plat'),'?') k, COUNT(*) n
       FROM AnalyticsEvent WHERE name='session_start' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY k ORDER BY n DESC`,
      d29
    ),
  ]);

  // Fill the full 14-day window so the trend chart never has gaps.
  const byDay = new Map<string, number>(
    dauByDay.map((r) => [String(r.d), num(r.n)])
  );
  const trend: { date: string; devices: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const date = dayStr(i);
    trend.push({ date, devices: byDay.get(date) ?? 0 });
  }

  // D13: D1/D7 retention over the ActivityDay streak ledger. Cohort = a
  // device's FIRST active day; retained = that device (account days merged
  // in JS) having a mark exactly 1 / 7 days later. Only cohorts old enough
  // to be judged are counted (a device whose first day was yesterday can't
  // have a D7 verdict yet).
  const activityRows = await db.activityDay.findMany({
    select: { deviceId: true, userId: true, day: true },
  });
  const todayUtc = dayStr(0);
  const epoch = (d: string) => Math.floor(Date.parse(`${d}T00:00:00Z`) / 86_400_000);
  const plusDays = (d: string, n: number) =>
    new Date((epoch(d) + n) * 86_400_000).toISOString().slice(0, 10);

  const firstByDevice = new Map<string, string>();
  const daysByDevice = new Map<string, Set<string>>();
  const daysByUser = new Map<string, Set<string>>();
  for (const r of activityRows) {
    const f = firstByDevice.get(r.deviceId);
    if (!f || r.day < f) firstByDevice.set(r.deviceId, r.day);
    (daysByDevice.get(r.deviceId) ?? daysByDevice.set(r.deviceId, new Set()).get(r.deviceId)!).add(r.day);
    if (r.userId)
      (daysByUser.get(r.userId) ?? daysByUser.set(r.userId, new Set()).get(r.userId)!).add(r.day);
  }

  const retention = (() => {
    let cohort1 = 0;
    let kept1 = 0;
    let cohort7 = 0;
    let kept7 = 0;
    for (const [deviceId, first] of firstByDevice) {
      const days = new Set<string>([
        ...(daysByDevice.get(deviceId) ?? []),
      ]);
      // merge account days of any user who used this device
      for (const [uid, set] of daysByUser) {
        if (set.size && activityRows.some((r) => r.deviceId === deviceId && r.userId === uid)) {
          for (const d of set) days.add(d);
        }
      }
      const fE = epoch(first);
      if (epoch(todayUtc) - fE >= 1) {
        cohort1++;
        if (days.has(plusDays(first, 1))) kept1++;
      }
      if (epoch(todayUtc) - fE >= 7) {
        cohort7++;
        if (days.has(plusDays(first, 7))) kept7++;
      }
    }
    return {
      cohort1,
      d1: cohort1 ? Math.round((kept1 / cohort1) * 100) : null,
      cohort7,
      d7: cohort7 ? Math.round((kept7 / cohort7) * 100) : null,
    };
  })();

  return NextResponse.json({
    ok: true,
    data: {
      generatedAt: new Date().toISOString(),
      users: { total: usersTotal, new7: users7, new30: users30 },
      retention,
      dau: trend[trend.length - 1]?.devices ?? 0,
      wau: num((activeWeek as DayRow[])[0]?.n),
      mau: num((activeMonth as DayRow[])[0]?.n),
      trend,
      sessions: {
        today: sessionsToday,
        avgDurationSec7d: Math.round(num((sessEnd7 as SumRow[])[0]?.total)),
      },
      topSections: (topSections as KeyRow[]).map((r) => ({ key: String(r.k), count: num(r.n) })),
      topFeatures: (topFeatures as KeyRow[]).map((r) => ({ key: String(r.k), count: num(r.n) })),
      quiz: (quiz7 as QuizRow[]).map((r) => ({
        kind: String(r.k),
        count: num(r.n),
        avgPct: r.avg_ratio == null ? null : Math.round(Number(r.avg_ratio) * 100),
      })),
      speaking: {
        count7d: num((speaking7 as SumRow[])[0]?.n),
        minutes7d: Math.round(num((speaking7 as SumRow[])[0]?.total) / 60),
      },
      devices: (devices30 as KeyRow[]).map((r) => ({ key: String(r.k), count: num(r.n) })),
    },
  });
}
