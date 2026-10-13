import { NextRequest, NextResponse } from "next/server";
import type { CallRoom } from "@prisma/client";
import { db } from "@/lib/db";
import {
  makeRoomCode,
  makePeerId,
  parseParticipants,
  serializeParticipants,
  pruneStaleRooms,
  findQuickRoom,
} from "@/lib/signaling";

export const dynamic = "force-dynamic";

// POST /api/call/join
// { deviceId, name, intent: "one"|"group", mode: "quick"|"private"|"code", code? }
// → { roomId, peerId, code, intent, peers: [{peerId, name}] }

function cleanName(name: unknown): string {
  const n = typeof name === "string" ? name.trim() : "";
  return (n || "শিক্ষার্থী").slice(0, 24);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.slice(0, 80) : "";
  const name = cleanName(body?.name);
  const intent = body?.intent === "one" ? "one" : "group";
  const mode = ["quick", "private", "code"].includes(body?.mode) ? body.mode : "quick";
  const code =
    typeof body?.code === "string" ? body.code.trim().toUpperCase().slice(0, 6) : "";

  if (!deviceId) {
    return NextResponse.json({ ok: false, error: "deviceId required" }, { status: 400 });
  }

  await pruneStaleRooms();

  const maxPeers = intent === "one" ? 2 : 4;

  // Retry loop guards against race conditions on quick match
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      let room: CallRoom | null = null;

      if (mode === "code") {
        if (!code) {
          return NextResponse.json({ ok: false, error: "রুম কোড দিন।" }, { status: 400 });
        }
        room = await db.callRoom.findUnique({ where: { code } });
        if (!room || room.status !== "open") {
          return NextResponse.json(
            { ok: false, error: "এই কোডের কোনো খোলা রুম নেই — কোড মিলিয়ে দেখুন।" },
            { status: 404 }
          );
        }
      } else if (mode === "quick") {
        room = await findQuickRoom(intent);
      }
      // mode === "private" → always create a fresh room

      const peerId = makePeerId();

      if (!room) {
        // create new room
        const newCode = await allocateCode();
        room = await db.callRoom.create({
          data: {
            code: newCode,
            intent,
            visibility: mode === "private" ? "private" : "public",
            hostPeerId: peerId,
            status: "open",
            maxPeers,
            participants: serializeParticipants([
              { peerId, name, deviceId, joinedAt: Date.now() },
            ]),
          },
        });
        return respond(room.id, room.code, peerId, intent, [
          { peerId, name },
        ]);
      }

      // join existing room — recheck capacity atomically
      const participants = parseParticipants(room.participants);
      if (participants.length >= room.maxPeers) {
        if (mode === "quick" && attempt < 3) continue; // try another room/create
        return NextResponse.json(
          { ok: false, error: "রুমটি পূর্ণ হয়ে গেছে।" },
          { status: 409 }
        );
      }
      if (participants.some((p) => p.deviceId === deviceId)) {
        return NextResponse.json(
          { ok: false, error: "আপনি ইতিমধ্যে এই রুমে আছেন (অন্য ট্যাব)।" },
          { status: 409 }
        );
      }

      participants.push({ peerId, name, deviceId, joinedAt: Date.now() });
      await db.callRoom.update({
        where: { id: room.id },
        data: { participants: serializeParticipants(participants) },
      });
      return respond(
        room.id,
        room.code,
        peerId,
        intent,
        participants.map((p) => ({ peerId: p.peerId, name: p.name }))
      );
    } catch (e) {
      if (attempt === 3) {
        console.error("call/join failed", e);
        return NextResponse.json(
          { ok: false, error: "রুমে যোগ দেওয়া যায়নি — আবার চেষ্টা করুন।" },
          { status: 500 }
        );
      }
    }
  }
  return NextResponse.json({ ok: false, error: "join failed" }, { status: 500 });
}

async function allocateCode(): Promise<string> {
  for (let i = 0; i < 5; i++) {
    const code = makeRoomCode();
    const exists = await db.callRoom.findUnique({ where: { code } });
    if (!exists) return code;
  }
  return makeRoomCode() + Date.now().toString(36).slice(-2).toUpperCase();
}

function respond(
  roomId: string,
  code: string,
  peerId: string,
  intent: string,
  peers: { peerId: string; name: string }[]
) {
  return NextResponse.json({ ok: true, data: { roomId, code, peerId, intent, peers } });
}
