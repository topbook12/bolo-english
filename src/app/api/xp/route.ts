import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId, cleanStr } from "@/lib/validate";
import { awardXpSafe, xpSummary } from "@/lib/xp-server";
import { XP_RULES, type XpKind } from "@/lib/xp";

// ─── XP API (D29, ROADMAP-60) ────────────────────────────────────────────────
// GET  /api/xp?deviceId=… → device-scoped summary (total/today/week/7-day bars)
// POST /api/xp { deviceId, kind:"lesson", refId } → the ONE client-claimable
//   kind (grammar lesson marked done). The server fixes the amount (6 XP),
//   day-dedupes per (device, lesson) and applies the daily caps — the client
//   never sends a number, so this endpoint cannot be farmed beyond the caps.

const CLIENT_KINDS: XpKind[] = ["lesson"];

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId)
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  // Failure-tolerant: before the XpEvent table exists on a fresh production
  // DB this must NOT 500 (the Progress section fetches it in a Promise.all
  // together with progress+sessions) — degrade to an honest zeroed summary.
  try {
    const data = await xpSummary(deviceId);
    return NextResponse.json({ ok: true, data });
  } catch {
    const zero = { total: 0, today: 0, week: 0, todayByKind: {}, weekByKind: {}, days: [] };
    return NextResponse.json({ ok: true, data: zero });
  }
}

export async function POST(req: NextRequest) {
  if (!checkIpLimit(req, "xp-post", 20)) {
    return NextResponse.json({ ok: false, error: "rate limited" }, { status: 429 });
  }
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const kind = cleanStr(body?.kind, 20) as XpKind;
  const refId = cleanStr(body?.refId ?? "", 120);
  if (!deviceId || !CLIENT_KINDS.includes(kind) || !refId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }
  const userId = await getSessionUserId().catch(() => null);
  const rule = XP_RULES[kind];
  const result = await awardXpSafe({
    deviceId,
    userId,
    kind,
    xp: rule.type === "flat" ? rule.xp : 0,
    refId,
    dedupeRefId: true,
  });
  return NextResponse.json({
    ok: true,
    data: { xp: result.xp, capped: result.capped, todayTotal: result.todayTotal },
  });
}
