import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimitStrict } from "@/lib/rate-limit";
import { ensureDbTables } from "@/lib/db-bootstrap";
import { isValidReferralCodeFormat, userIdForCode } from "@/lib/referral";

export const dynamic = "force-dynamic";

// ─── Referral code lookup (D41, ROADMAP-60) ─────────────────────────────────
// GET /api/referral/lookup?code=RXXXXXXX   PUBLIC (no login).
// The JOIN flow uses it to preview WHO invited you before claiming:
//   known code   → 200 { ok, data: { valid: true,  name } }   name ONLY —
//                  no email/id/XP ever leaks through this endpoint;
//   unknown code → 200 { ok, data: { valid: false } }         (never an error —
//                  the client just falls back to a generic invite banner).
// 20/min/IP: this is a pre-signup endpoint, so the strict per-IP axis (no
// device fallback) is the right shield against code enumeration.
// GET-only by construction (no other method is exported).

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimitStrict(req, "referral-lookup", 20)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }

  const code = (req.nextUrl.searchParams.get("code") ?? "").trim().toUpperCase();
  if (!isValidReferralCodeFormat(code)) {
    return NextResponse.json({ ok: true, data: { valid: false } });
  }

  try {
    await ensureDbTables();

    const inviterId = await userIdForCode(code);
    if (!inviterId) {
      return NextResponse.json({ ok: true, data: { valid: false } });
    }
    const inviter = await db.user.findUnique({
      where: { id: inviterId },
      select: { name: true },
    });
    if (!inviter) {
      return NextResponse.json({ ok: true, data: { valid: false } });
    }

    return NextResponse.json({ ok: true, data: { valid: true, name: inviter.name } });
  } catch (e) {
    console.error(
      "[/api/referral/lookup]",
      e instanceof Error ? `${e.name}: ${e.message}` : String(e)
    );
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "referralLookupFailed") },
      { status: 503 }
    );
  }
}
