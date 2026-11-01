import { NextRequest, NextResponse } from "next/server";
import { getActiveKey } from "@/lib/key-pool";
import { probeGemini } from "@/lib/gemini";
import { probeZai } from "@/lib/zai";
import { maskKey } from "@/lib/crypto";
import { getSessionUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { ensureDbTables } from "@/lib/db-bootstrap";

export const dynamic = "force-dynamic";

// GET /api/ai/status?deviceId=...[&probe=1][&probeBackup=1] — AI Hub diagnostics.
//
// Cheap path (no probe): resolve the caller's active Gemini key (pool →
// legacy, exactly like every AI call) and report pool health for logged-in
// users. Never leaks the plaintext key — only a masked preview. Always
// reports `backup` — the platform's built-in Z.ai AI that every AI feature
// transparently falls back to when Gemini is unavailable.
//
// probe=1 / probeBackup=1: adds a tiny LIVE round-trip (latency + which
// model/provider answers). Rate-limited per IP because the Gemini probe
// spends a real request against the user's quota.

type PoolRow = { cooldownUntil: Date | null; failures: number };

export async function GET(req: NextRequest) {
  const locale = reqLocale(req);
  const deviceId = cleanDeviceId(req.nextUrl.searchParams.get("deviceId"));
  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }
  const probe = req.nextUrl.searchParams.get("probe") === "1";
  const probeBackup = req.nextUrl.searchParams.get("probeBackup") === "1";
  if ((probe || probeBackup) && !checkIpLimit(req, "ai-status-probe", 10)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }

  try {
    // Pool table may be missing on a not-yet-migrated production DB — the
    // bootstrap is idempotent and cheap after the first call.
    await ensureDbTables().catch(() => null);

    // Never throws: pool errors degrade to the legacy path internally.
    const active = await getActiveKey(deviceId);

    // Pool health (logged-in users only — guests have no pool rows).
    const user = await getSessionUser();
    let pool: { total: number; healthy: number; cooldown: number; failures: number } | null = null;
    if (user) {
      try {
        const rows = (await db.userApiKey.findMany({
          where: { userId: user.id },
          select: { cooldownUntil: true, failures: true },
        })) as PoolRow[];
        const now = Date.now();
        const healthy = rows.filter((r) => !r.cooldownUntil || r.cooldownUntil.getTime() <= now).length;
        pool = {
          total: rows.length,
          healthy,
          cooldown: rows.length - healthy,
          failures: rows.reduce((s, r) => s + r.failures, 0),
        };
      } catch {
        pool = null; // pre-migration DB etc. — the hub just omits the chips
      }
    }

    const data: Record<string, unknown> = {
      hasKey: !!active.key,
      source: active.key ? active.source : null,
      keyPreview: active.key ? maskKey(active.key) : null,
      unreadable: !!active.unreadable,
      // Provider-level backup: every AI feature transparently retries here
      // when Gemini is unavailable — reported so the hub can show it.
      backup: { available: true, name: "Z.ai" },
      ...(pool ? { pool } : {}),
    };

    if (probe && active.key) {
      data.probe = await probeGemini(active.key);
    }
    if (probeBackup) {
      data.backupProbe = await probeZai();
    }

    return NextResponse.json({ ok: true, data });
  } catch (e) {
    // Storage-level failure (config row unreadable DB, Turso down…) — honest
    // 503 with an actionable message, never a bare 500.
    const msg = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    console.error("[/api/ai/status] failed:", msg);
    return NextResponse.json({ ok: false, error: apiMsg(locale, "dbConnectFailed") }, { status: 503 });
  }
}
