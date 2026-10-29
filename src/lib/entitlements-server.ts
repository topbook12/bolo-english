import "server-only";

import { db } from "@/lib/db";
import {
  FREE_FEATURES,
  PREMIUM_FEATURES,
  resolveEntitlement,
  type FeatureKey,
  type ResolvedEntitlement,
} from "@/lib/entitlements";

// ─── Entitlement engine — server side (D36, ROADMAP-60) ─────────────────────
// Reads the plan CATALOG (Plan) + the per-user GRANTS (Entitlement) and
// resolves them into one answer via the PURE resolver in entitlements.ts.
// Model-agnostic: how grants are CREATED is a separate concern (D38-39
// payments, referral/admin grants) — hasAccess() below is the only gate
// other routes need. No payment logic, no paywalls — the platform is free.
//
// Degrade-safe policy (honest-empty): any DB failure resolves to the free
// baseline instead of throwing, so an outage can never 500 a route or lock
// a learner out of the free core.

export const PLAN_SEED = [
  {
    key: "free",
    name: "Free",
    features: FREE_FEATURES,
    durationDays: 0, // 0 = never expires
    priceBdt: 0, // display-only until payments land (D38)
    sortOrder: 0,
  },
  {
    key: "premium",
    name: "Premium",
    features: [...FREE_FEATURES, ...PREMIUM_FEATURES],
    durationDays: 30,
    priceBdt: 0,
    sortOrder: 1,
  },
] as const;

let plansReady = false;

/**
 * Idempotent catalog seeding — CREATE-ONLY by design: when a Plan row
 * already exists it is left untouched so owner edits in the DB survive
 * every deploy/restart. Failures are logged and swallowed (callers never
 * see a throw); the next request retries until the flag can be set.
 */
export async function ensurePlansSeeded(): Promise<void> {
  if (plansReady) return;
  try {
    for (const seed of PLAN_SEED) {
      const existing = await db.plan.findUnique({
        where: { key: seed.key },
        select: { id: true },
      });
      if (existing) continue; // never overwrite owner edits — create only
      await db.plan.create({
        data: {
          key: seed.key,
          name: seed.name,
          features: JSON.stringify(seed.features),
          durationDays: seed.durationDays,
          priceBdt: seed.priceBdt,
          sortOrder: seed.sortOrder,
        },
      });
    }
    plansReady = true;
  } catch (e) {
    console.error("[entitlements] ensurePlansSeeded failed:", e);
    // swallowed on purpose — honest seeding, retried on the next request
  }
}

/**
 * The resolved entitlement for one user (or the free baseline for guests /
 * unknown ids / DB failure). NEVER throws. Reads are bounded: active plan
 * rows + the user's last 50 grant rows (audit-safe; revoked/expired grants
 * are filtered by the pure resolver, not deleted).
 */
export async function getUserEntitlements(
  userId: string | null
): Promise<ResolvedEntitlement> {
  try {
    const [plans, grants] = await Promise.all([
      db.plan.findMany({ where: { active: true } }),
      userId
        ? db.entitlement.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
            take: 50,
          })
        : Promise.resolve([]),
    ]);
    return resolveEntitlement(plans, grants);
  } catch (e) {
    console.error("[entitlements] getUserEntitlements degraded to free:", e);
    return resolveEntitlement([], []);
  }
}

/**
 * THE roadmap-mandated feature-flag middleware. True when the user's
 * resolved feature union contains `feature`. On a totally unexpected
 * failure (getUserEntitlements already degrades to the free baseline, so
 * this is belt-and-braces) only free-baseline features stay open — the
 * free core is never blocked by an entitlement outage.
 */
export async function hasAccess(
  userId: string | null,
  feature: FeatureKey
): Promise<boolean> {
  try {
    const ent = await getUserEntitlements(userId);
    return ent.features.includes(feature);
  } catch (e) {
    console.error("[entitlements] hasAccess degraded:", e);
    return (FREE_FEATURES as readonly FeatureKey[]).includes(feature);
  }
}

/**
 * Route-guard form of hasAccess() — same semantics, reads naturally at the
 * top of a handler: `if (!(await requireFeature(userId, "certificate"))) …`.
 */
export async function requireFeature(
  userId: string | null,
  feature: FeatureKey
): Promise<boolean> {
  return hasAccess(userId, feature);
}
