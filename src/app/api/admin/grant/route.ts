import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser, isAdminUser, normalizeEmail } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanStr } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";
import { ensurePlansSeeded } from "@/lib/entitlements-server";
import { parsePlanFeatures } from "@/lib/entitlements";

export const dynamic = "force-dynamic";

// ─── Admin grant console (D36, ROADMAP-60) ──────────────────────────────────
// POST /api/admin/grant — owner-only, fail-closed (non-admin sessions get
// 403, mirroring /api/admin/moderation). The FIRST grant-creation surface
// (referral/admin grants); D38-39 payments can add more sources without
// touching hasAccess(). NO paywalls — this hands out the free platform's
// premium feature set; priceBdt stays display-only.
//
// Body JSON (one action per request):
//   { action: "list" }
//   { action: "grant",  email, planKey, days?, note? }  — days: int 1–3650,
//        default = plan.durationDays; note ≤200 chars, owner-facing
//   { action: "revoke", grantId }
//
// Multiple active grants for the same user/plan are ALLOWED (union
// semantics — extending an expiry = create a longer grant). Revocation
// sets revokedAt and keeps the row (audit trail); rows are never deleted.

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!(await isAdminUser())) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "adminOnly") }, { status: 403 });
  }
  if (!checkIpLimit(req, "admin-grant", 60)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
  const body = await req.json().catch(() => null);
  const action = cleanStr(body?.action, 12);
  if (!action) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  try {
    await ensureDbTables();
    await ensurePlansSeeded();
    const now = new Date();

    /* ── list: plans catalog + currently-active grants ── */
    if (action === "list") {
      const [plans, grants] = await Promise.all([
        db.plan.findMany({ orderBy: { sortOrder: "asc" } }),
        db.entitlement.findMany({
          where: {
            revokedAt: null,
            OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
          },
          orderBy: { createdAt: "desc" },
          take: 100,
        }),
      ]);
      // Single batched join for the grantee emails (no FK by design).
      const users = grants.length
        ? await db.user.findMany({
            where: { id: { in: grants.map((g) => g.userId) } },
            select: { id: true, email: true },
          })
        : [];
      const emailById = new Map(users.map((u) => [u.id, u.email] as const));
      return NextResponse.json({
        ok: true,
        data: {
          plans: plans.map((p) => ({
            id: p.id,
            key: p.key,
            name: p.name,
            features: parsePlanFeatures(p.features),
            durationDays: p.durationDays,
            priceBdt: p.priceBdt,
            active: p.active,
          })),
          grants: grants.map((g) => ({
            id: g.id,
            email: emailById.get(g.userId) ?? "",
            planKey: g.planKey,
            source: g.source,
            note: g.note,
            grantedBy: g.grantedBy,
            startsAt: g.startsAt.toISOString(),
            expiresAt: g.expiresAt ? g.expiresAt.toISOString() : null,
          })),
        },
      });
    }

    /* ── grant: create one Entitlement row (source "grant") ── */
    if (action === "grant") {
      const email = normalizeEmail(body?.email);
      if (!email) {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "invalidEmail") }, { status: 400 });
      }
      const planKey = cleanStr(body?.planKey, 40);
      const plan = planKey ? await db.plan.findUnique({ where: { key: planKey } }) : null;
      if (!plan || !plan.active) {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "planKeyUnknown") }, { status: 400 });
      }
      const rawDays = body?.days;
      let days = plan.durationDays; // default = the plan's own duration
      if (rawDays !== undefined && rawDays !== null && rawDays !== "") {
        const n = typeof rawDays === "number" ? rawDays : Number(rawDays);
        if (!Number.isInteger(n) || n < 1 || n > 3650) {
          return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
        }
        days = n;
      }
      const note = cleanStr(body?.note, 200);
      const user = await db.user.findUnique({
        where: { email },
        select: { id: true, email: true },
      });
      if (!user) {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "emailNotFound") }, { status: 404 });
      }
      const adminUser = await getSessionUser().catch(() => null);
      const startsAt = new Date();
      const expiresAt = days > 0 ? new Date(startsAt.getTime() + days * 86400000) : null;
      const grant = await db.entitlement.create({
        data: {
          userId: user.id,
          planKey: plan.key,
          source: "grant",
          note,
          grantedBy: adminUser?.id ?? "",
          startsAt,
          expiresAt,
        },
      });
      return NextResponse.json({
        ok: true,
        data: {
          grant: {
            id: grant.id,
            email: user.email,
            planKey: grant.planKey,
            source: grant.source,
            note: grant.note,
            grantedBy: grant.grantedBy,
            startsAt: grant.startsAt.toISOString(),
            expiresAt: grant.expiresAt ? grant.expiresAt.toISOString() : null,
          },
        },
      });
    }

    /* ── revoke: flip revokedAt, keep the row (audit trail) ── */
    if (action === "revoke") {
      const grantId = cleanStr(body?.grantId, 64);
      if (!grantId) {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
      }
      const existing = await db.entitlement.findUnique({
        where: { id: grantId },
        select: { id: true },
      });
      if (!existing) {
        return NextResponse.json({ ok: false, error: apiMsg(locale, "grantNotFound") }, { status: 404 });
      }
      await db.entitlement.update({ where: { id: grantId }, data: { revokedAt: new Date() } });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: false, error: apiMsg(locale, "unknownAction") }, { status: 400 });
  } catch (e) {
    console.error("[/api/admin/grant]", e instanceof Error ? `${e.name}: ${e.message}` : String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
