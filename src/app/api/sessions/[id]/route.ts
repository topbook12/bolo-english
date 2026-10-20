import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { cleanDeviceId } from "@/lib/validate";

// PATCH /api/sessions/[id]  { deviceId, analysis?, durationSec? }
//
// Why this exists (user report: "কত মিনিট কথা বলেছে / প্রগ্রেস আপডেট হচ্ছে না"):
// the call itself is now AUTO-SAVED the moment it ends (POST /api/sessions,
// fire-and-forget), so minutes and progress never depend on the optional AI
// analysis. When the AI analysis later succeeds, the client PATCHes it onto
// that already-saved session here.
//
// Owner-guarded: only the device that created the session may update it.
const MAX_ANALYSIS_BYTES = 65_536;

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const deviceId = cleanDeviceId(body?.deviceId);
  if (!deviceId || !id) {
    return NextResponse.json({ ok: false, error: "deviceId and id required" }, { status: 400 });
  }

  const session = await db.speakingSession.findUnique({ where: { id } });
  if (!session || session.deviceId !== deviceId) {
    return NextResponse.json({ ok: false, error: "session not found" }, { status: 404 });
  }

  const data: { analysis?: string; score?: number; durationSec?: number } = {};

  if (body?.analysis !== undefined) {
    const analysisStr = JSON.stringify(body.analysis ?? {});
    if (analysisStr.length > MAX_ANALYSIS_BYTES) {
      return NextResponse.json({ ok: false, error: "analysis too large" }, { status: 413 });
    }
    data.analysis = analysisStr;
    data.score = Math.min(Math.max(Number(body.analysis?.overallScore ?? 0) || 0, 0), 100);
  }
  if (body?.durationSec !== undefined) {
    data.durationSec = Math.min(Math.max(Number(body.durationSec) || 0, 0), 86_400);
  }
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ ok: false, error: "nothing to update" }, { status: 400 });
  }

  await db.speakingSession.update({ where: { id }, data });
  return NextResponse.json({ ok: true });
}
