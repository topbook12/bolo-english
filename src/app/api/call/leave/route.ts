import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appendSignalMessage, parseParticipants, serializeParticipants } from "@/lib/signaling";

// POST /api/call/leave  { roomId, peerId }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const roomId = typeof body?.roomId === "string" ? body.roomId : "";
  const peerId = typeof body?.peerId === "string" ? body.peerId : "";
  if (!roomId || !peerId) {
    return NextResponse.json({ ok: false, error: "roomId & peerId required" }, { status: 400 });
  }

  const room = await db.callRoom.findUnique({ where: { id: roomId } });
  if (room) {
    const participants = parseParticipants(room.participants).filter(
      (p) => p.peerId !== peerId
    );
    if (participants.length === 0) {
      await db.callRoom.delete({ where: { id: roomId } }).catch(() => null);
    } else {
      await db.callRoom
        .update({
          where: { id: roomId },
          data: { participants: serializeParticipants(participants) },
        })
        .catch(() => null);
      // tell the others immediately
      await appendSignalMessage(roomId, peerId, null, "bye", { peerId });
    }
  }
  return NextResponse.json({ ok: true });
}
