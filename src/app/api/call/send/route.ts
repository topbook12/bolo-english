import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appendSignalMessage, parseParticipants } from "@/lib/signaling";
import { reqLocale, apiMsg } from "@/lib/api-i18n";

// POST /api/call/send  { roomId, peerId, to?, type, payload }
export async function POST(req: NextRequest) {
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const { roomId, peerId, to, type, payload } = body ?? {};
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

  await appendSignalMessage(roomId, peerId, typeof to === "string" ? to : null, type, payload);
  return NextResponse.json({ ok: true });
}
