import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";
import { ensurePlansSeeded, getUserEntitlements } from "@/lib/entitlements-server";

export const dynamic = "force-dynamic";

// ─── Plan API (D36, ROADMAP-60) ──────────────────────────────────────────────
// GET /api/plan?deviceId=… → the caller's resolved entitlement + the upgrade
// catalog. Guests and signed-out devices get the free baseline (a missing
// Entitlement row is NORMAL, never an error). NO payment logic, NO paywalls
// — `upgrades` is display data for the UI; the platform stays free.
//
// → { ok, data: { plan, planName, source, expiresAt, daysLeft, features,
//                 upgrades: [{ key, name, priceBdt, durationDays }] } }

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  if (!checkIpLimit(req, "plan", 60))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });

  const user = await getSessionUser().catch(() => null);

  try {
    await ensureDbTables(); // self-migrating: old prod DBs gain Plan/Entitlement here
    await ensurePlansSeeded(); // create-only catalog seed (never overwrites owner edits)

    const now = new Date();
    // Never throws — DB failures degrade to the free baseline (honest-empty).
    const ent = await getUserEntitlements(user?.id ?? null);

    // Upgrade catalog: every ACTIVE plan that isn't the caller's current plan
    // and isn't the implicit free baseline, cheapest-display order.
    const upgrades = await db.plan.findMany({
      where: { active: true, key: { notIn: [ent.plan, "free"] } },
      orderBy: { sortOrder: "asc" },
    });

    const daysLeft = ent.expiresAt
      ? Math.max(0, Math.ceil((ent.expiresAt.getTime() - now.getTime()) / 86400000))
      : null;

    return NextResponse.json({
      ok: true,
      data: {
        plan: ent.plan,
        planName: ent.planName,
        source: ent.source,
        expiresAt: ent.expiresAt ? ent.expiresAt.toISOString() : null,
        daysLeft,
        features: ent.features,
        upgrades: upgrades.map((p) => ({
          key: p.key,
          name: p.name,
          priceBdt: p.priceBdt,
          durationDays: p.durationDays,
        })),
      },
    });
  } catch (e) {
    console.error("[/api/plan]", e instanceof Error ? `${e.name}: ${e.message}` : String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
