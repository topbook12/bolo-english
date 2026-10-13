import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appendSignalMessage, parseParticipants } from "@/lib/signaling";

// POST /api/call/send  { roomId, peerId, to?, type, payload }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const { roomId, peerId, to, type, payload } = body ?? {};
  if (
    typeof roomId !== "string" ||
    typeof peerId !== "string" ||
    typeof type !== "string"
  ) {
    return NextResponse.json(
      { ok: false, error: "roomId, peerId, type required" },
      { status: 400 }
    );
  }
  if (!["offer", "answer", "ice", "chat", "caption"].includes(type)) {
    return NextResponse.json({ ok: false, error: "invalid type" }, { status: 400 });
  }

  // Validate sender is still in the room
  const room = await db.callRoom.findUnique({ where: { id: roomId } });
  if (!room || room.status !== "open") {
    return NextResponse.json({ ok: false, error: "room closed" }, { status: 404 });
  }
  const participants = parseParticipants(room.participants);
  if (!participants.some((p) => p.peerId === peerId)) {
    return NextResponse.json({ ok: false, error: "not in room" }, { status: 403 });
  }

  await appendSignalMessage(roomId, peerId, typeof to === "string" ? to : null, type, payload);
  return NextResponse.json({ ok: true });
}
