import { db } from "@/lib/db";
import {
  applyCaps,
  lastNDays,
  practiceToXpKind,
  XP_RULES,
  xpDay,
  type XpKind,
} from "@/lib/xp";

// ─── XP engine — server side (D29, ROADMAP-60) ──────────────────────────────
// The ONLY place XP rows are written. Every grant passes through awardXp(),
// which recomputes the caps from the DB at write time — concurrent requests
// can at worst race one grant past a cap boundary, never farm.

export interface AwardInput {
  deviceId: string;
  userId: string | null;
  kind: XpKind;
  xp: number;
  refId?: string;
  /** When true, an existing (deviceId, kind, refId, day) row blocks the grant. */
  dedupeRefId?: boolean;
}

export interface AwardResult {
  xp: number; // actually granted (0 when capped out / deduped)
  capped: boolean;
  todayTotal: number; // device total for the day AFTER this grant
}

async function daySum(deviceId: string, day: string): Promise<number> {
  const agg = await db.xpEvent.aggregate({ where: { deviceId, day }, _sum: { xp: true } });
  return agg._sum.xp ?? 0;
}

/** Grant XP for one verified activity. Applies per-kind + global caps first;
 *  a fully-capped grant writes NO row so the ledger stays honest. */
export async function awardXp(input: AwardInput): Promise<AwardResult> {
  const day = xpDay();
  const deviceId = input.deviceId;

  // Client-claimed kinds must be deduped per refId — an honest "mark done"
  // can only ever earn once per day per lesson.
  if (input.dedupeRefId && input.refId) {
    const dup = await db.xpEvent.findFirst({
      where: { deviceId: input.deviceId, kind: input.kind, refId: input.refId, day },
      select: { id: true },
    });
    if (dup) return { xp: 0, capped: true, todayTotal: await daySum(input.deviceId, day) };
  }

  const [dayAgg, kindAgg] = await Promise.all([
    db.xpEvent.aggregate({ where: { deviceId, day }, _sum: { xp: true } }),
    db.xpEvent.aggregate({
      where: { deviceId, day, kind: input.kind },
      _sum: { xp: true },
      _count: true,
    }),
  ]);

  const { xp: allowed, capped } = applyCaps({
    earned: input.xp,
    kind: input.kind,
    kindXpToday: kindAgg._sum.xp ?? 0,
    kindEventsToday: kindAgg._count ?? 0,
    dayXpToday: dayAgg._sum.xp ?? 0,
  });
  if (allowed <= 0) {
    return { xp: 0, capped: true, todayTotal: await daySum(input.deviceId, day) };
  }

  await db.xpEvent.create({
    data: {
      deviceId: input.deviceId,
      userId: input.userId,
      kind: input.kind,
      refId: (input.refId ?? "").slice(0, 120),
      xp: allowed,
      day,
    },
  });
  return { xp: allowed, capped, todayTotal: await daySum(input.deviceId, day) };
}

/** The wrapper used by API hooks — never let XP break the main activity. */
export async function awardXpSafe(input: AwardInput): Promise<AwardResult> {
  try {
    return await awardXp(input);
  } catch {
    return { xp: 0, capped: false, todayTotal: 0 };
  }
}

/** Convenience: award for a /api/practice row (maps the practice kind → XP). */
export async function awardForPractice(
  deviceId: string,
  userId: string | null,
  practiceKind: string,
  refId: string
): Promise<AwardResult> {
  const kind = practiceToXpKind(practiceKind);
  if (!kind) return { xp: 0, capped: false, todayTotal: 0 };
  const rule = XP_RULES[kind];
  const xp = rule.type === "flat" ? rule.xp : 0;
  return awardXpSafe({ deviceId, userId, kind, xp, refId: refId.slice(0, 120) });
}

export interface XpSummary {
  total: number;
  today: number;
  week: number;
  todayByKind: Record<string, number>;
  weekByKind: Record<string, number>;
  days: { day: string; xp: number }[]; // last 7 Dhaka days, oldest first
}

/** Aggregate summary for the UI (device-scoped). */
export async function xpSummary(deviceId: string): Promise<XpSummary> {
  const today = xpDay();
  const weekDays = lastNDays(7, today);
  const weekStart = weekDays[0];

  const [allTime, todays, weeks] = await Promise.all([
    db.xpEvent.aggregate({ where: { deviceId }, _sum: { xp: true } }),
    db.xpEvent.findMany({
      where: { deviceId, day: today },
      select: { kind: true, xp: true },
    }),
    db.xpEvent.findMany({
      where: { deviceId, day: { gte: weekStart } },
      select: { kind: true, xp: true, day: true },
    }),
  ]);

  const todayByKind: Record<string, number> = {};
  todays.forEach((r) => {
    todayByKind[r.kind] = (todayByKind[r.kind] ?? 0) + r.xp;
  });
  const weekByKind: Record<string, number> = {};
  const perDay: Record<string, number> = {};
  weeks.forEach((r) => {
    weekByKind[r.kind] = (weekByKind[r.kind] ?? 0) + r.xp;
    perDay[r.day] = (perDay[r.day] ?? 0) + r.xp;
  });

  return {
    total: allTime._sum.xp ?? 0,
    today: todays.reduce((a, r) => a + r.xp, 0),
    week: weeks.reduce((a, r) => a + r.xp, 0),
    todayByKind,
    weekByKind,
    days: weekDays.map((day) => ({ day, xp: perDay[day] ?? 0 })),
  };
}
