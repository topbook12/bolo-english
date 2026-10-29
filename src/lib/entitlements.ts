// ─── Entitlement engine — PURE core (D36, ROADMAP-60) ────────────────────────
// No "server-only", no DB, no Next imports: importable by client-safe code
// (feature gates, plan badges) and by the server resolver alike.
//
// Model-agnostic by design: the owner's monetization decision (ROADMAP-60
// ক/খ) only changes HOW grants are created (D38-39 payments vs. referral /
// admin grants) — the resolution math below never changes. There is NO
// payment logic and NO paywall here — the whole platform stays free.

export const FEATURE_KEYS = [
  "core_learning",
  "community",
  "cv_studio",
  "platform_ai",
  "unlimited_analysis",
  "certificate",
  "priority_support",
] as const;

export type FeatureKey = (typeof FEATURE_KEYS)[number];

/** The implicit baseline EVERY signed-in user has — never an error state. */
export const FREE_FEATURES: readonly FeatureKey[] = [
  "core_learning",
  "community",
  "cv_studio",
];

/** What "premium" adds on top of the free baseline (display + grants only). */
export const PREMIUM_FEATURES: readonly FeatureKey[] = [
  "platform_ai",
  "unlimited_analysis",
  "certificate",
  "priority_support",
];

/** Grant-source whitelist (Entitlement.source — string column, guarded here). */
export const ENTITLEMENT_SOURCES = ["grant", "payment", "referral", "admin"] as const;
export type EntitlementSource = (typeof ENTITLEMENT_SOURCES)[number];

/** Minimal shape of a Plan row (Prisma rows satisfy it structurally). */
export interface PlanRowLike {
  key: string;
  name: string;
  features: string; // JSON: FeatureKey[]
  active: boolean;
  durationDays: number;
  priceBdt: number;
}

/** Minimal shape of an Entitlement row (Date or ISO string both accepted). */
export interface GrantRowLike {
  planKey: string;
  source: string;
  expiresAt: Date | string | null; // null = never expires
  revokedAt: Date | string | null; // set = revoked (row kept for audit)
}

/** The one answer everything else consumes: what this user may use NOW. */
export interface ResolvedEntitlement {
  plan: string; // displayed plan key ("free" baseline or the winning grant)
  planName: string; // English display name from the Plan row
  source: string; // baseline | grant source of the winning grant
  expiresAt: Date | null; // null = never expires
  features: FeatureKey[]; // the union actually enforced by hasAccess()
}

/* ── feature-key helpers ── */

export function isFeatureKey(v: unknown): v is FeatureKey {
  return typeof v === "string" && (FEATURE_KEYS as readonly string[]).includes(v);
}

/** Safe JSON.parse of Plan.features — unknown keys filtered out, never throws. */
export function parsePlanFeatures(json: string): FeatureKey[] {
  try {
    const parsed: unknown = JSON.parse(json);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isFeatureKey);
  } catch {
    return []; // corrupt JSON → no plan features (the free baseline still applies)
  }
}

/* ── grant lifecycle ── */

/**
 * A grant is ACTIVE when it is not revoked AND not expired.
 * (expiresAt null = never expires). Revoked rows stay in the DB purely as
 * an audit trail — they never grant anything again.
 */
export function isActiveGrant(g: GrantRowLike, now: Date = new Date()): boolean {
  if (g.revokedAt) return false;
  if (!g.expiresAt) return true;
  return new Date(g.expiresAt).getTime() > now.getTime();
}

/* ── resolution ── */

/**
 * PURE: plans + grants in, one ResolvedEntitlement out. No I/O, no clock
 * surprises (pass `now` in tests), never throws.
 *
 * Semantics:
 *  • Start from the free baseline: plan "free", planName "Free", source
 *    "baseline", expiresAt null, features = FREE_FEATURES. Every signed-in
 *    user always has it — a missing Entitlement row is NORMAL.
 *  • Consider only ACTIVE grants whose planKey matches an ACTIVE plan.
 *    Union their plan features into the result (most generous wins) and
 *    always include FREE_FEATURES (baseline can never be lost).
 *  • The DISPLAYED plan = the active grant (on an active plan) with the
 *    LATEST expiresAt — null (never expiring) ranks highest. `source`
 *    comes from that grant, `planName` from the plan row.
 *  • Unknown planKey grants are ignored (defensive — e.g. a plan renamed
 *    after grants were written).
 */
export function resolveEntitlement(
  plans: PlanRowLike[],
  grants: GrantRowLike[],
  now: Date = new Date()
): ResolvedEntitlement {
  const planByKey = new Map<string, PlanRowLike>(
    plans.map((p) => [p.key, p] as const)
  );

  const features = new Set<FeatureKey>(FREE_FEATURES);
  // Latest expiresAt wins; null (never expiring) ranks above every date.
  const rank = (exp: Date | null): number =>
    exp ? exp.getTime() : Number.POSITIVE_INFINITY;
  let shown: {
    plan: string;
    planName: string;
    source: string;
    expiresAt: Date | null;
  } | null = null;

  for (const g of grants) {
    if (!isActiveGrant(g, now)) continue; // revoked/expired → audit row only
    const plan = planByKey.get(g.planKey);
    if (!plan || !plan.active) continue; // unknown/inactive plan → ignored
    for (const f of parsePlanFeatures(plan.features)) features.add(f);
    const expiresAt = g.expiresAt ? new Date(g.expiresAt) : null;
    if (!shown || rank(expiresAt) > rank(shown.expiresAt)) {
      shown = { plan: plan.key, planName: plan.name, source: g.source, expiresAt };
    }
  }

  return shown
    ? { ...shown, features: [...features] }
    : { plan: "free", planName: "Free", source: "baseline", expiresAt: null, features: [...features] };
}
