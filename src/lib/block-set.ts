import "server-only";
import { db } from "@/lib/db";

// ─── Block-list resolution (D33, ROADMAP-60) ────────────────────────────────
// Blocks are stored as raw device-id pairs, but a learner can carry TWO kinds
// of device ids: their real browser UUID (used on submissions, activity days)
// and the synthetic `account:<userId>` row (used by account-scoped config —
// which is what partner matching lists). A block made against either form
// must hide that person everywhere, so this helper expands the raw block rows
// into the FULL device-id set covering both forms for both directions.

export async function blockedDeviceIds(
  myDeviceId: string,
  myUserId: string | null
): Promise<string[]> {
  const rows = await db.userBlock.findMany({
    where: {
      OR: [
        { deviceId: myDeviceId }, // people I blocked
        { blockedDeviceId: myDeviceId }, // people who blocked me (by browser id)
        ...(myUserId ? [{ blockedDeviceId: `account:${myUserId}` }] : []), // …or by account id
      ],
    },
    select: { deviceId: true, blockedDeviceId: true },
  });

  const raw = new Set<string>();
  for (const r of rows) {
    raw.add(r.deviceId === myDeviceId ? r.blockedDeviceId : r.deviceId);
  }
  if (raw.size === 0) return [];

  // Expand every blocked id to ALL device ids of that person (browser ids +
  // the synthetic account row), so feed filters (browser ids) and partner
  // filters (account ids) both hit.
  const firstHop = await db.userConfig.findMany({
    where: { deviceId: { in: [...raw] } },
    select: { userId: true, deviceId: true },
  });
  const userIds = [...new Set(firstHop.map((c) => c.userId).filter((v): v is string => Boolean(v)))];
  const secondHop = userIds.length
    ? await db.userConfig.findMany({
        where: { userId: { in: userIds } },
        select: { deviceId: true },
      })
    : [];

  const out = new Set<string>(raw);
  for (const c of firstHop) out.add(c.deviceId);
  for (const c of secondHop) out.add(c.deviceId);
  out.delete(myDeviceId);
  if (myUserId) out.delete(`account:${myUserId}`);
  return [...out];
}
