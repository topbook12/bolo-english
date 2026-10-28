import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { lastNDays, xpDay } from "@/lib/xp";
import { leagueFor, privacyName, rankSort } from "@/lib/leaderboard";
import { isNoName } from "@/lib/no-name";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Leaderboard API (D30, ROADMAP-60) ──────────────────────────────────────
// GET /api/leaderboard?deviceId=…&range=week|all
//
//   • Only SIGNED-IN learners appear (privacy: guests stay invisible) — the
//     app is login-first anyway. Aggregation is by userId, so one person on
//     two devices is ONE row, never double-counted.
//   • Names are privacy-safe: first name + last initial ("Topu B."), built
//     server-side; full names / emails / device ids never leave the server.
//   • range=week = the same last-7-Dhaka-days window the XP card uses;
//     range=all = all-time totals. The league badge is always THIS week's
//     league (weekly by design — it resets, so everyone can climb):
//     gold ≥ 250 / silver ≥ 100 / wood below.
//
// → { range, me: {rank,name,xp,league}|null, top: [{rank,name,xp,league,isMe}],
//     learners, weekStart }

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  if (!checkIpLimit(req, "leaderboard", 30))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });

  const range = req.nextUrl.searchParams.get("range") === "all" ? "all" : "week";
  const meId = await getSessionUserId().catch(() => null);
  const fallback = apiMsg(locale, "learnerName");
  const weekStart = lastNDays(7, xpDay())[0]!;

  try {
    // Self-migrate first: a pre-phase-5 production DB gains XpEvent here,
    // so the very first visitor upgrades the DB (never a 500 either way).
    await ensureDbTables();
    const grouped = await db.xpEvent.groupBy({
      by: ["userId"],
      where: range === "week" ? { day: { gte: weekStart }, userId: { not: null } } : { userId: { not: null } },
      _sum: { xp: true },
    });
    const raw = grouped
      .filter((g): g is { userId: string; _sum: { xp: number | null } } => Boolean(g.userId))
      .map((g) => ({ userId: g.userId, xp: Number(g._sum.xp ?? 0) }));

    const ids = [...new Set(raw.map((r) => r.userId))].slice(0, 200);
    const users = ids.length
      ? await db.user.findMany({ where: { id: { in: ids } }, select: { id: true, name: true } })
      : [];
    const names = new Map(users.map((u) => [u.id, u.name] as const));

    // THIS week's XP per user — the league basis for BOTH ranges (a league is
    // a weekly badge: even the all-time board shows this week's league).
    const weekGrouped = await db.xpEvent.groupBy({
      by: ["userId"],
      where: { day: { gte: weekStart }, userId: { not: null } },
      _sum: { xp: true },
    });
    const weekXp = new Map(
      weekGrouped
        .filter((g): g is { userId: string; _sum: { xp: number | null } } => Boolean(g.userId))
        .map((g) => [g.userId, Number(g._sum.xp ?? 0)] as const)
    );

    type Row = { userId: string; name: string; xp: number; week: number; isMe: boolean };
    const rows: Row[] = raw.map((r) => {
      const stored = names.get(r.userId) ?? null;
      const name = stored && !isNoName(stored) ? stored : fallback;
      return {
        userId: r.userId,
        name: privacyName(name, fallback),
        xp: r.xp,
        week: weekXp.get(r.userId) ?? 0,
        isMe: r.userId === meId,
      };
    });
    rows.sort((a, b) => rankSort(a, b));

    const top = rows.slice(0, 50).map((r, i) => ({
      rank: i + 1,
      name: r.name,
      xp: r.xp,
      league: leagueFor(r.week),
      isMe: r.isMe,
    }));
    const myRow = meId ? rows.find((r) => r.isMe) : undefined;
    const me = myRow
      ? {
          rank: rows.indexOf(myRow) + 1,
          name: myRow.name,
          xp: myRow.xp,
          league: leagueFor(myRow.week),
        }
      : null;

    return NextResponse.json({
      ok: true,
      data: {
        range,
        weekStart,
        learners: rows.length,
        top,
        me,
      },
    });
  } catch {
    // Pre-migration / fresh-DB safety: an empty board, never a 500.
    return NextResponse.json({
      ok: true,
      data: { range, weekStart: lastNDays(7)[0]!, learners: 0, top: [], me: null },
    });
  }
}
