import { PrismaClient } from "@prisma/client";
import { NPS_PASSIVE_MIN, NPS_PROMOTER_MIN } from "@/lib/rating";

// ─── Weekly metrics digest computation (D6, ROADMAP-60) ─────────────────────
// Shared by GET /api/digest (admin, live view) and POST /api/digest (Vercel
// cron, weekly snapshot into MetricDigest). All aggregation happens in SQL —
// raw rows never leave the database. Day buckets are UTC (documented in
// /api/analytics too); fine for weekly views.

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
interface NpsRow {
  score: number;
  n: bigint | number;
}

const num = (v: bigint | number | null | undefined) => Number(v ?? 0);

export function weekKeyOf(date = new Date()): string {
  // ISO-8601 week number (weeks start Monday; week 1 contains Jan 4).
  const d = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

function dayStr(offsetDays: number): string {
  return new Date(Date.now() - offsetDays * 86_400_000).toISOString().slice(0, 10);
}

export interface WeekDigest {
  weekKey: string;
  generatedAt: string;
  window: { from: string; to: string };
  users: { total: number; new7: number };
  active: { weekDevices: number; dauTrend: { date: string; devices: number }[] };
  learning: {
    quiz7: { count: number; avgRatio: number | null };
    speaking7: { count: number; minutes: number | null };
    aiCalls7: number;
  };
  sentiment: {
    speaking: { count: number; avg: number | null };
    quizRating: { count: number; avg: number | null };
    nps7: { total: number; score: number | null };
  };
  feedback: { new7: number; byCategory: { kind: string; n: number }[] };
  errors: { last24h: number; last7: number };
  topSections: { kind: string; n: number }[];
}

export async function computeWeekDigest(db: PrismaClient): Promise<WeekDigest> {
  const d6 = dayStr(6);

  const [
    usersTotal,
    usersNew7,
    activeWeek,
    dauByDay,
    quiz7,
    speaking7,
    aiCalls7,
    ratingSpeaking,
    ratingQuiz,
    nps7,
    feedbackNew7,
    feedbackByCat,
    errors24h,
    errors7,
    topSections,
  ] = await Promise.all([
    db.user.count(),
    db.user.count({ where: { createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } } }),
    db.$queryRawUnsafe<DayRow[]>(
      `SELECT COUNT(DISTINCT deviceId) n FROM AnalyticsEvent
       WHERE substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d6
    ),
    db.$queryRawUnsafe<DayRow[]>(
      `SELECT substr(datetime(createdAt/1000,'unixepoch'),1,10) d, COUNT(DISTINCT deviceId) n
       FROM AnalyticsEvent WHERE substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY d ORDER BY d`,
      d6
    ),
    db.$queryRawUnsafe<QuizRow[]>(
      `SELECT COUNT(*) n, AVG(CASE WHEN json_extract(props,'$.total') > 0
              THEN 1.0 * json_extract(props,'$.score') / json_extract(props,'$.total') END) avg_ratio
       FROM AnalyticsEvent WHERE name='quiz_complete' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d6
    ),
    db.$queryRawUnsafe<SumRow[]>(
      `SELECT COUNT(*) n, SUM(json_extract(props,'$.durationSec')) total
       FROM AnalyticsEvent WHERE name='speaking_session' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?`,
      d6
    ),
    db.analyticsEvent.count({
      where: { name: "ai_call", createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } },
    }),
    db.sessionRating.aggregate({
      _count: { _all: true },
      _avg: { score: true },
      where: { kind: "speaking", createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } },
    }),
    db.sessionRating.aggregate({
      _count: { _all: true },
      _avg: { score: true },
      where: { kind: "quiz", createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } },
    }),
    db.$queryRawUnsafe<NpsRow[]>(
      `SELECT score, COUNT(*) n FROM SessionRating
       WHERE kind='nps' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY score`,
      d6
    ),
    db.feedback.count({
      where: { createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } },
    }),
    db.$queryRawUnsafe<KeyRow[]>(
      `SELECT COALESCE(category,'?') k, COUNT(*) n FROM Feedback
       WHERE substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY k ORDER BY n DESC`,
      d6
    ),
    db.clientError.count({
      where: { createdAt: { gte: new Date(Date.now() - 86_400_000) } },
    }),
    db.clientError.count({
      where: { createdAt: { gte: new Date(Date.now() - 7 * 86_400_000) } },
    }),
    db.$queryRawUnsafe<KeyRow[]>(
      `SELECT COALESCE(json_extract(props,'$.section'),'?') k, COUNT(*) n
       FROM AnalyticsEvent WHERE name='section_view' AND substr(datetime(createdAt/1000,'unixepoch'),1,10) >= ?
       GROUP BY k ORDER BY n DESC LIMIT 5`,
      d6
    ),
  ]);

  // NPS from the 7-day score distribution.
  let promoters = 0;
  let detractors = 0;
  let npsTotal = 0;
  for (const r of nps7) {
    const n = num(r.n);
    npsTotal += n;
    if (r.score >= NPS_PROMOTER_MIN) promoters += n;
    else if (r.score < NPS_PASSIVE_MIN) detractors += n;
  }

  const dauMap = new Map<string, number>(
    dauByDay.map((r) => [String(r.d), num(r.n)])
  );
  const dauTrend: { date: string; devices: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = dayStr(i);
    dauTrend.push({ date, devices: dauMap.get(date) ?? 0 });
  }

  const quiz = quiz7[0];
  const speak = speaking7[0];

  return {
    weekKey: weekKeyOf(),
    generatedAt: new Date().toISOString(),
    window: { from: dayStr(6), to: dayStr(0) },
    users: { total: usersTotal, new7: usersNew7 },
    active: { weekDevices: num(activeWeek[0]?.n), dauTrend },
    learning: {
      quiz7: {
        count: num(quiz?.n),
        avgRatio: quiz?.avg_ratio != null ? Number(Number(quiz.avg_ratio).toFixed(3)) : null,
      },
      speaking7: {
        count: num(speak?.n),
        minutes: speak?.total != null ? Math.round(Number(speak.total) / 60) : null,
      },
      aiCalls7: aiCalls7,
    },
    sentiment: {
      speaking: {
        count: ratingSpeaking._count._all,
        avg: ratingSpeaking._avg.score != null ? Number(ratingSpeaking._avg.score.toFixed(2)) : null,
      },
      quizRating: {
        count: ratingQuiz._count._all,
        avg: ratingQuiz._avg.score != null ? Number(ratingQuiz._avg.score.toFixed(2)) : null,
      },
      nps7: {
        total: npsTotal,
        score: npsTotal ? Math.round(((promoters - detractors) / npsTotal) * 100) : null,
      },
    },
    feedback: {
      new7: feedbackNew7,
      byCategory: feedbackByCat.map((r) => ({ kind: String(r.k ?? "?"), n: num(r.n) })),
    },
    errors: { last24h: errors24h, last7: errors7 },
    topSections: topSections.map((r) => ({ kind: String(r.k ?? "?"), n: num(r.n) })),
  };
}
