import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSessionUserId } from "@/lib/auth";
import { checkIpLimit } from "@/lib/rate-limit";
import { cleanDeviceId } from "@/lib/validate";
import { gradePlacement } from "@/lib/placement-bank";

// ─── Placement test API (D8, ROADMAP-60.md) ─────────────────────────────────
// POST /api/placement { deviceId, answers: number[12] }  (any signed-in user)
//   → grades SERVER-SIDE against the bank (client can't fake a score by
//     sending one), upserts UserConfig.level (A1/A2→beginner, B1→intermediate,
//     B2→advanced), returns the full result.
// 5/min per IP+device — retakes are fine, floods aren't.

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId) || "anon";
  if (!checkIpLimit(req, "placement", 5, 60_000, deviceId)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  const graded = gradePlacement(body?.answers);
  if (!graded.valid) {
    return NextResponse.json({ ok: false, error: "bad_answers" }, { status: 400 });
  }
  try {
    const userId = await getSessionUserId();
    // Prefer the user's own config; fall back to upsert-by-deviceId so a
    // first-time visitor (config created lazily by the device init) still
    // gets their level stored. apiKeyEnc stays "" — no key implied.
    let cfg = await db.userConfig.findFirst({
      where: userId ? { userId } : { deviceId },
    });
    if (cfg) {
      cfg = await db.userConfig.update({
        where: { id: cfg.id },
        data: { level: graded.stored },
      });
    } else {
      cfg = await db.userConfig.upsert({
        where: { deviceId },
        create: { deviceId, apiKeyEnc: "", keyPreview: "", level: graded.stored, userId },
        update: { level: graded.stored, ...(userId ? { userId } : {}) },
      });
    }
    return NextResponse.json({
      ok: true,
      score: graded.score,
      total: 12,
      level: graded.level,
      stored: graded.stored,
      saved: true,
    });
  } catch (e) {
    console.error("placement save failed", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}
