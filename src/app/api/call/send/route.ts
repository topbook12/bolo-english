import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appendSignalMessage, parseParticipants, MAX_MESSAGE_BYTES } from "@/lib/signaling";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";

// POST /api/call/send  { roomId, peerId, to?, type, payload }
export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  // D50: signaling writes are roster-guarded but were unthrottled — a scripted
  // peer could churn the 400-message retention ring + DB writes per room.
  // Real calls send bursts (ICE trickle), so 120/min/peer is generous.
  const body = await req.json().catch(() => null);
  const { roomId, peerId, to, type, payload } = body ?? {};
  if (
    typeof roomId === "string" &&
    typeof peerId === "string" &&
    !checkIpLimit(req, "call-send", 120, 60_000, peerId.slice(0, 40))
  ) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "rateLimited") },
      { status: 429 }
    );
  }
  if (
    typeof roomId !== "string" ||
    typeof peerId !== "string" ||
    typeof type !== "string"
  ) {
    return NextResponse.json(
      { ok: false, error: apiMsg(locale, "paramsRequired") },
      { status: 400 }
    );
  }
  if (!["offer", "answer", "ice", "chat", "caption"].includes(type)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "signalInvalidType") }, { status: 400 });
  }

  // Validate sender is still in the room
  const room = await db.callRoom.findUnique({ where: { id: roomId } });
  if (!room || room.status !== "open") {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "signalRoomClosed") }, { status: 404 });
  }
  const participants = parseParticipants(room.participants);
  if (!participants.some((p) => p.peerId === peerId)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "notInRoom") }, { status: 403 });
  }

  // Audit P2-8: an oversized SDP used to be silently dropped with ok:true —
  // the sender believed the offer was delivered and only the 12s watchdog
  // could save the call. Fail loudly so the client's backoff reacts.
  if (JSON.stringify(payload ?? {}).length > MAX_MESSAGE_BYTES) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "paramsRequired") }, { status: 413 });
  }

  await appendSignalMessage(roomId, peerId, typeof to === "string" ? to : null, type, payload);
  return NextResponse.json({ ok: true });
}
