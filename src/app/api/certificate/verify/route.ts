import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimitStrict } from "@/lib/rate-limit";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Certificate verification (D40, ROADMAP-60) ─────────────────────────────
// GET /api/certificate/verify?code=BOLO-XXXX-XXXX — PUBLIC, no auth. Anyone
// holding a certificate's code can confirm it is genuine, exactly like the
// issuer's own verification page. Rate-limited per IP (20/min) because it is
// the only unauthenticated read into certificate data (and only ever returns
// name/level/tier/date — never emails or device ids).
//
// Codes are normalized aggressively: case, spaces and dashes are repaired
// ("bolo ab2c 9xyz" → "BOLO-AB2C-9XYZ") so near-miss typing still verifies.
// NOT found → 200 {valid:false} (the dialog treats valid=false as "not
// found"; a 404 would read like an error to the caller).

interface CertStats {
  xp: number;
  activeDays: number;
  streak: number;
}

function normalizeCode(raw: string): string {
  // Strip everything except A-Z and 0-9 (also folds a-z via uppercase first),
  // drop a leading "BOLO" if present, then re-chunk 4+4.
  const stripped = raw.toUpperCase().replace(/[^A-Z0-9]/g, "").replace(/^BOLO/, "");
  if (stripped.length !== 8) return "";
  return `BOLO-${stripped.slice(0, 4)}-${stripped.slice(4)}`;
}

function parseXpActiveDays(raw: string): { xp: number; activeDays: number } {
  try {
    const o = JSON.parse(raw) as Partial<CertStats>;
    return { xp: Number(o.xp) || 0, activeDays: Number(o.activeDays) || 0 };
  } catch {
    return { xp: 0, activeDays: 0 };
  }
}

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);

  // Fully anonymous route → strict per-IP limiter (no device fallback).
  if (!checkIpLimitStrict(req, "certificate-verify", 20)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }

  const code = normalizeCode(req.nextUrl.searchParams.get("code") ?? "");
  if (!code) {
    // Malformed / missing code — a valid=false answer, not an error: the
    // verify dialog shows the same friendly "not found" state.
    return NextResponse.json({ ok: true, data: { valid: false } });
  }

  try {
    await ensureDbTables();
    const row = await db.certificate.findUnique({ where: { code } });
    if (!row) return NextResponse.json({ ok: true, data: { valid: false } });

    const { xp, activeDays } = parseXpActiveDays(row.stats);
    return NextResponse.json({
      ok: true,
      data: {
        valid: true,
        name: row.name,
        level: row.level,
        tier: row.tier,
        issuedAt: row.createdAt.toISOString(),
        xp,
        activeDays,
      },
    });
  } catch (e) {
    console.error(
      "[/api/certificate/verify]",
      e instanceof Error ? `${e.name}: ${e.message}` : String(e)
    );
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
