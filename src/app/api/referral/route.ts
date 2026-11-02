import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";
import { isValidReferralCodeFormat, referralCodeFor, userIdForCode } from "@/lib/referral";
import { XP_DAILY_GLOBAL_CAP, xpDay } from "@/lib/xp";

export const dynamic = "force-dynamic";

// ─── Referral API (D41, ROADMAP-60) ─────────────────────────────────────────
// GET  /api/referral            (LOGIN REQUIRED) the caller's invite code +
//                               invited count + XP earned + last 5 invitees.
// POST /api/referral {code, deviceId}   (LOGIN REQUIRED) claim an invite:
//                               inviter +150 XP (their device), invitee +100
//                               XP (their device), one claim per account EVER
//                               (Referral.inviteeUserId is @unique).
//
// Codes are DERIVED, not stored: code = "R"+7 chars of SHA-256(userId+salt)
// (see src/lib/referral.ts) — GET derives on demand; POST resolves the code
// through the 10-minute in-memory code index built from the User table.
//
// XP notes:
//   • Device-scoped: the inviter's grant lands in the INVITER's XP ledger
//     (resolved via their UserConfig row), the invitee's in the invitee's
//     request deviceId. The 500 XP/day/device global cap may shrink a grant
//     — the Referral row records what was ACTUALLY granted (0 = capped out).
//   • The inviter's device is a best-effort resolution: UserConfig.deviceId
//     is @unique and login/register adopts the current device's config row,
//     so for any inviter who has actually used the app this is their device
//     (most recently active row wins when an account spans devices). No
//     UserConfig row at all → xpInviter stays 0; the friendship is still
//     recorded and the invitee's side always pays.
//   • Amounts (150/100) are passed explicitly — see awardReferralXp below.

const INVITER_XP = 150;
const INVITEE_XP = 100;
// Mirrors XP_RULES.referral.dailyEvents — the anti-farm safety net.
const REFERRAL_DAILY_EVENTS = 10;

function isUniqueViolation(e: unknown): boolean {
  return typeof e === "object" && e !== null && (e as { code?: string }).code === "P2002";
}

/* ── XP award for the referral kind ──────────────────────────────────────────
 * DEVIATION NOTE (deliberate, documented): awardXpSafe() cannot pass explicit
 * amounts for the frozen referral rule — applyCaps() computes the flat-kind
 * cap as (dailyEvents - eventsToday) * rule.xp, and XP_RULES.referral.xp is
 * 0, so EVERY grant would be mathematically zeroed (verified against
 * src/lib/xp.ts). This helper replicates awardXp's exact semantics for
 * kind "referral" with the route-chosen per-event amount, preserving every
 * anti-abuse property: refId dedupe, the 10 referral events/day/device
 * safety net, the 500 XP/day/device global cap, and never-throw (XP must
 * never break the claim — a failure reads as capped, same contract as
 * awardXpSafe). ensureDbTables() has already run at the top of the route,
 * so the self-migration property holds too. */
interface ReferralGrant {
  xp: number; // actually granted (0 = deduped / capped / failed)
  capped: boolean;
}

async function awardReferralXp(input: {
  deviceId: string;
  userId: string | null;
  xp: number;
  refId: string;
}): Promise<ReferralGrant> {
  try {
    const day = xpDay();
    // Same semantics as awardXp's dedupeRefId: one grant per referral row
    // per device per day (the row id is unique per claim anyway).
    const dup = await db.xpEvent.findFirst({
      where: { deviceId: input.deviceId, kind: "referral", refId: input.refId, day },
      select: { id: true },
    });
    if (dup) return { xp: 0, capped: true };

    const [kindAgg, dayAgg] = await Promise.all([
      db.xpEvent.aggregate({
        where: { deviceId: input.deviceId, day, kind: "referral" },
        _sum: { xp: true },
        _count: true,
      }),
      db.xpEvent.aggregate({ where: { deviceId: input.deviceId, day }, _sum: { xp: true } }),
    ]);

    const eventsLeft = REFERRAL_DAILY_EVENTS - (kindAgg._count ?? 0);
    const globalLeft = XP_DAILY_GLOBAL_CAP - (dayAgg._sum.xp ?? 0);
    const allowed = Math.max(0, Math.min(input.xp, eventsLeft > 0 ? input.xp : 0, globalLeft));
    if (allowed <= 0) return { xp: 0, capped: true };

    await db.xpEvent.create({
      data: {
        deviceId: input.deviceId,
        userId: input.userId,
        kind: "referral",
        refId: input.refId.slice(0, 120),
        xp: allowed,
        day,
      },
    });
    return { xp: allowed, capped: allowed < input.xp };
  } catch (e) {
    console.error(
      "[/api/referral] xp grant failed",
      e instanceof Error ? `${e.name}: ${e.message}` : String(e)
    );
    return { xp: 0, capped: false }; // never let XP break the claim
  }
}

/** GET — the signed-in learner's invite dashboard data. */
export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "referral-get", 60)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }

  // Invites must be attributable → the invite card requires an account.
  const user = await getSessionUser().catch(() => null);
  if (!user) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "referralLoginRequired") },
      { status: 401 }
    );
  }

  try {
    await ensureDbTables();

    const [invited, xpAgg, recentRows] = await Promise.all([
      db.referral.count({ where: { inviterUserId: user.id } }),
      db.referral.aggregate({ where: { inviterUserId: user.id }, _sum: { xpInviter: true } }),
      db.referral.findMany({
        where: { inviterUserId: user.id },
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { inviteeName: true, createdAt: true, xpInviter: true },
      }),
    ]);

    return NextResponse.json({
      ok: true,
      data: {
        code: referralCodeFor(user.id),
        invited,
        xpEarned: xpAgg._sum.xpInviter ?? 0,
        // inviteeName "" → the client shows the localized "a friend" fallback
        // (locale-reactive without a refetch).
        recent: recentRows.map((r) => ({
          name: r.inviteeName,
          createdAt: r.createdAt.toISOString(),
          xp: r.xpInviter,
        })),
      },
    });
  } catch (e) {
    console.error("[/api/referral]", e instanceof Error ? `${e.name}: ${e.message}` : String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}

/** POST — claim an invite: { code, deviceId } (invitee device, for their XP). */
export async function POST(req: NextRequest) {
  const locale = reqLocale(req);

  // Claiming requires an account (the reward is account-scoped and the
  // one-claim-ever gate keys on inviteeUserId).
  const user = await getSessionUser().catch(() => null);
  if (!user) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "referralLoginRequired") },
      { status: 401 }
    );
  }

  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "deviceIdRequired") },
      { status: 400 }
    );
  }

  try {
    await ensureDbTables();

    // 6 claims/min/IP — a real person claims once; this kills scripted loops.
    if (!checkIpLimit(req, "referral-post", 6, 60_000, deviceId)) {
      return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
    }

    const code = typeof body?.code === "string" ? body.code.trim().toUpperCase() : "";
    if (!isValidReferralCodeFormat(code)) {
      return NextResponse.json(
        { ok: false, error: apiMsg(locale, "referralCodeInvalid") },
        { status: 400 }
      );
    }

    const inviterId = await userIdForCode(code);
    if (!inviterId) {
      return NextResponse.json(
        { ok: false, error: apiMsg(locale, "referralCodeNotFound") },
        { status: 404 }
      );
    }
    // Claiming your own code (the only code you can derive for yourself).
    if (inviterId === user.id) {
      return NextResponse.json(
        { ok: false, error: apiMsg(locale, "referralSelfClaim") },
        { status: 400 }
      );
    }

    // One claim per new account, EVER (pre-check + P2002 race net below).
    const existing = await db.referral.findUnique({
      where: { inviteeUserId: user.id },
      select: { id: true },
    });
    if (existing) {
      return NextResponse.json(
        { ok: false, error: apiMsg(locale, "referralAlreadyClaimed") },
        { status: 409 }
      );
    }

    const [inviterUser, inviterCfg] = await Promise.all([
      db.user.findUnique({ where: { id: inviterId }, select: { name: true } }),
      // Inviter's XP ledger device — see the header note for the heuristic.
      db.userConfig.findFirst({
        where: { userId: inviterId },
        select: { deviceId: true },
        orderBy: { updatedAt: "desc" },
      }),
    ]);

    // Create the row FIRST (xp 0/0) so its id can anchor both XP grants'
    // refId dedupe; actual granted amounts are written back after.
    let row;
    try {
      row = await db.referral.create({
        data: {
          code,
          inviterUserId: inviterId,
          inviterDevice: inviterCfg?.deviceId ?? "", // unknown → inviter XP skipped below
          inviteeUserId: user.id,
          inviteeDevice: deviceId,
          inviteeName: (user.name || "").slice(0, 60),
        },
      });
    } catch (e) {
      if (isUniqueViolation(e)) {
        // Concurrent double-claim lost the race — same answer as the pre-check.
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "referralAlreadyClaimed") },
          { status: 409 }
        );
      }
      throw e;
    }

    const inviteeGrant = await awardReferralXp({
      deviceId, // the INVITEE's device — their XP lands here
      userId: user.id,
      xp: INVITEE_XP,
      refId: row.id,
    });
    const inviterGrant = inviterCfg?.deviceId
      ? await awardReferralXp({
          deviceId: inviterCfg.deviceId, // the INVITER's device — THEIR ledger
          userId: inviterId,
          xp: INVITER_XP,
          refId: row.id,
        })
      : { xp: 0, capped: false };

    // Record what was ACTUALLY granted (may be < the headline amounts when
    // a device is capped out for the day).
    await db.referral.update({
      where: { id: row.id },
      data: { xpInviter: inviterGrant.xp, xpInvitee: inviteeGrant.xp },
    });

    return NextResponse.json({
      ok: true,
      data: {
        ok: true,
        xpInvitee: inviteeGrant.xp,
        invitedName: inviterUser?.name || "",
      },
    });
  } catch (e) {
    console.error("[/api/referral]", e instanceof Error ? `${e.name}: ${e.message}` : String(e));
    return NextResponse.json({ ok: false, error: apiMsg(locale, "referralClaimFailed") }, { status: 503 });
  }
}
