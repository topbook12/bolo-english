import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { isPushConfigured, sendToSubscription, notificationCopy } from "@/lib/push-server";
import { computeStreaks } from "@/lib/streak-days";
import { bankWordsForDay, type BankLevel } from "@/lib/daily-words";

// ─── Daily push sender (D12, ROADMAP-60.md) ─────────────────────────────────
// POST /api/push/send-daily — called by the Vercel cron (CRON_SECRET) or an
// admin's manual trigger. For every stored subscription:
//   • streak danger  → the streak is alive but today has no mark yet:
//     "🔥 practice today or lose your N-day streak" (highest-value nudge)
//   • otherwise      → today's words for the learner's level
// Notifications are sent in the subscriber's UI language (stored at
// subscribe time). Dead endpoints (404/410) are pruned. Timezone note: the
// UTC calendar is the shared boundary here (audience is IST/BST-centered);
// the streak itself is still tracked client-locally.

const MAX_SUBS = 500;

export async function POST(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const user = await getSessionUser().catch(() => null);
  const isAdmin = user?.role === "admin";
  const bearer = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!isAdmin && (!secret || bearer !== secret)) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  if (!isPushConfigured()) {
    return NextResponse.json(
      { ok: false, error: "not_configured", hint: "set VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY" },
      { status: 503 }
    );
  }

  const subs = await db.pushSubscription.findMany({
    orderBy: { createdAt: "asc" },
    take: MAX_SUBS,
  });
  if (subs.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, pruned: 0 });
  }

  const deviceIds = [...new Set(subs.map((s) => s.deviceId))];
  const userIds = [...new Set(subs.map((s) => s.userId).filter((v): v is string => !!v))];

  const [dayRows, configs] = await Promise.all([
    db.activityDay.findMany({
      where: { OR: [{ deviceId: { in: deviceIds } }, { userId: { in: userIds } }] },
      select: { deviceId: true, userId: true, day: true },
    }),
    db.userConfig.findMany({
      where: { deviceId: { in: deviceIds } },
      select: { deviceId: true, level: true },
    }),
  ]);

  const daysByDevice = new Map<string, Set<string>>();
  const daysByUser = new Map<string, Set<string>>();
  for (const r of dayRows) {
    (daysByDevice.get(r.deviceId) ?? daysByDevice.set(r.deviceId, new Set()).get(r.deviceId)!).add(r.day);
    if (r.userId)
      (daysByUser.get(r.userId) ?? daysByUser.set(r.userId, new Set()).get(r.userId)!).add(r.day);
  }
  const levelByDevice = new Map(configs.map((c) => [c.deviceId, c.level]));

  // UTC calendar day (see timezone note above) driving the bank rotation.
  const today = new Date().toISOString().slice(0, 10);
  const dayIdx = Math.floor(Date.parse(`${today}T00:00:00Z`) / 86_400_000);

  let sent = 0;
  let pruned = 0;
  let failed = 0;

  for (const sub of subs) {
    const days = new Set<string>([
      ...(daysByDevice.get(sub.deviceId) ?? []),
      ...(sub.userId ? (daysByUser.get(sub.userId) ?? []) : []),
    ]);
    const info = computeStreaks(days, today);
    const copy = notificationCopy(sub.locale);

    let payload;
    if (info.current > 0 && !info.todayDone) {
      payload = { title: copy.streakTitle, body: copy.streakBody(info.current), url: "/", tag: "streak-danger" };
    } else if (!info.todayDone) {
      const level = (levelByDevice.get(sub.deviceId) as BankLevel) || "beginner";
      const w = bankWordsForDay(level, dayIdx)[0];
      const meaning = sub.locale === "en" ? w.englishMeaning : w.meaning[sub.locale as "bn" | "hi"];
      payload = {
        title: copy.dailyTitle,
        body: copy.dailyBody(w.word, meaning),
        url: "/",
        tag: "daily-word",
      };
    } else {
      continue; // already active today — no nudge needed
    }

    const res = await sendToSubscription(sub, payload);
    if (res === "ok") sent++;
    else if (res === "gone") {
      pruned++;
      await db.pushSubscription.deleteMany({ where: { endpoint: sub.endpoint } }).catch(() => null);
    } else failed++;
  }

  return NextResponse.json({ ok: true, total: subs.length, sent, pruned, failed });
}
