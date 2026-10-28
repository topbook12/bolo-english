import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { lastNDays, xpDay } from "@/lib/xp";
import { privacyName } from "@/lib/leaderboard";
import { isNoName } from "@/lib/no-name";
import { avatarEmoji } from "@/lib/badges";
import { blockedDeviceIds } from "@/lib/block-set";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Practice-partner matching (D31, ROADMAP-60) ────────────────────────────
// GET /api/partners?deviceId=…
//
// PRIVACY-FIRST MATCHING — what we deliberately do NOT do:
//   • NO timezone is stored anywhere in the product (privacy promise), so we
//     match on RECENT ACTIVITY instead: "active today / yesterday" is the
//     honest proxy for "probably awake in my hours" without learning anyone's
//     location. The roadmap's timezone idea is satisfied via this proxy, and
//     the UI says so plainly.
//   • NOBODY appears unless they explicitly OPTED IN (UserConfig.partnerOptIn).
//   • Output is privacy-safe: first name + last initial, level, goal, avatar,
//     last-active bucket, this week's XP — never email/full name/device clock.
//
// Scoring: same level +2 · same goal +1 · active in the last 2 days +2.
// Blocks (D33) are honored in BOTH directions.

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  if (!checkIpLimit(req, "partners", 30))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });

  const user = await getSessionUserId().catch(() => null);
  if (!user) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "signInRequired") }, { status: 401 });
  }

  try {
    await ensureDbTables(); // partnerOptIn column + XpEvent appear on first hit
    const my = await db.userConfig.findFirst({
      where: { userId: user },
      orderBy: { updatedAt: "desc" },
      select: { level: true, goal: true, partnerOptIn: true },
    });
    const myLevel = my?.level ?? "beginner";
    const myGoal = my?.goal ?? "general";

    // blocks in both directions — expanded to every device form of the
    // blocked person (browser uuid + synthetic account row)
    const excluded = new Set<string>(await blockedDeviceIds(deviceId, user));

    const candidates = await db.userConfig.findMany({
      where: {
        partnerOptIn: true,
        AND: [{ userId: { not: null } }, { userId: { not: user } }],
      },
      select: {
        userId: true,
        deviceId: true,
        displayName: true,
        level: true,
        goal: true,
        avatar: true,
        updatedAt: true,
      },
      take: 120,
      orderBy: { updatedAt: "desc" },
    });

    const recentDay = lastNDays(3, xpDay())[0]!;
    const deviceIds = candidates.map((c) => c.deviceId);
    const [recent, accounts, weekGrouped] = await Promise.all([
      db.activityDay.findMany({
        where: { deviceId: { in: deviceIds }, day: { gte: recentDay } },
        select: { deviceId: true, day: true },
      }),
      db.user.findMany({
        where: { id: { in: candidates.map((c) => c.userId as string) } },
        select: { id: true, name: true },
      }),
      db.xpEvent.groupBy({
        by: ["userId"],
        where: { userId: { in: candidates.map((c) => c.userId as string) }, day: { gte: lastNDays(7, xpDay())[0]! } },
        _sum: { xp: true },
      }),
    ]);

    const lastActive = new Map<string, string>();
    const today = xpDay();
    for (const r of recent) {
      const prev = lastActive.get(r.deviceId);
      const best = r.day > (prev ?? "") ? r.day : prev;
      lastActive.set(r.deviceId, best ?? r.day);
    }
    const accountNames = new Map(accounts.map((a) => [a.id, a.name] as const));
    const weekXp = new Map(
      weekGrouped.map((g) => [g.userId, Number(g._sum.xp ?? 0)] as const)
    );

    type Partner = {
      deviceId: string;
      name: string;
      level: string;
      goal: string;
      avatar: string;
      lastActive: "today" | "yesterday" | "earlier";
      xpWeek: number;
      score: number;
    };
    const partners: Partner[] = [];
    for (const c of candidates) {
      if (excluded.has(c.deviceId)) continue; // blocked either way
      const userId = c.userId as string;
      const stored = accountNames.get(userId) ?? null;
      const name = privacyName(stored && !isNoName(stored) ? stored : "", apiMsg(locale, "learnerName"));

      const activeDay = lastActive.get(c.deviceId) ?? "";
      const activity: Partner["lastActive"] =
        activeDay === today ? "today" : activeDay === lastNDays(2, xpDay())[0] ? "yesterday" : "earlier";

      const score = (c.level === myLevel ? 2 : 0) + (c.goal === myGoal ? 1 : 0) + (activity === "today" || activity === "yesterday" ? 2 : 0);
      partners.push({
        deviceId: c.deviceId,
        name,
        level: c.level,
        goal: c.goal,
        avatar: avatarEmoji(c.avatar, c.level),
        lastActive: activity,
        xpWeek: weekXp.get(userId) ?? 0,
        score,
      });
    }

    partners.sort((a, b) => b.score - a.score || b.xpWeek - a.xpWeek || a.name.localeCompare(b.name));
    const top = partners.slice(0, 8).map(({ deviceId: pid, ...rest }) => ({ ...rest, deviceId: pid }));

    return NextResponse.json({
      ok: true,
      data: {
        me: { optIn: my?.partnerOptIn ?? false, level: myLevel, goal: myGoal },
        partners: top,
        totalOptIn: partners.length,
      },
    });
  } catch (e) {
    console.error("[/api/partners]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: true, data: { me: { optIn: false, level: "beginner", goal: "general" }, partners: [], totalOptIn: 0 } });
  }
}
