import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// ─── Block API (D33, ROADMAP-60) ────────────────────────────────────────────
// POST /api/block { deviceId, blockedDeviceId, block: boolean }
//
// One-sided, silent, never notified: blocking removes the other learner from
// YOUR partner suggestions and THEIR submissions from YOUR challenge feed.
// Unblock deletes the row. Rate-limited modestly (a list cleanup is legal).
//
// `blockedDeviceId` may be the partner's BROWSER device id (uuid) OR their
// synthetic `account:<userId>` config id (the form partner matching lists).
// The blockedDeviceIds() helper resolves either form everywhere downstream.

/** UUID or server-generated `account:<cuid>` — nothing else. */
function cleanBlockTarget(v: unknown): string {
  if (typeof v !== "string") return "";
  const s = v.trim().slice(0, 80);
  if (s.startsWith("account:")) {
    return /^account:[0-9a-z]{20,40}$/i.test(s) ? s : "";
  }
  return cleanDeviceId(s);
}

export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  if (!checkIpLimit(req, "block", 20))
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  const blockedDeviceId = cleanBlockTarget(body?.blockedDeviceId);
  const block = body?.block !== false; // default: block
  if (!deviceId || !blockedDeviceId || deviceId === blockedDeviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 400 });
  }

  const userId = await getSessionUserId().catch(() => null);

  try {
    await ensureDbTables(); // UserBlock may not exist yet on the pre-phase-5 prod DB
    if (block) {
      await db.userBlock.upsert({
        where: { deviceId_blockedDeviceId: { deviceId, blockedDeviceId } },
        create: { deviceId, blockedDeviceId, userId },
        update: {},
      });
    } else {
      await db.userBlock.deleteMany({ where: { deviceId, blockedDeviceId } });
    }
    return NextResponse.json({ ok: true, data: { blocked: block } });
  } catch (e) {
    console.error("[/api/block]", (e as Error)?.message ?? e);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
