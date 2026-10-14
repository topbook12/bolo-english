import { NextRequest, NextResponse } from "next/server";
import type { CallRoom } from "@prisma/client";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import {
  makeRoomCode,
  makePeerId,
  parseParticipants,
  serializeParticipants,
  pruneStaleRooms,
  findQuickRoom,
  type RoomParticipant,
} from "@/lib/signaling";

export const dynamic = "force-dynamic";

// POST /api/call/join
// { deviceId, name, intent: "one"|"group", mode: "quick"|"private"|"code", code? }
// → { roomId, peerId, code, intent, peers: [{peerId, name}] }

function cleanName(name: unknown, fallback: string): string {
  const n = typeof name === "string" ? name.trim() : "";
  return (n || fallback).slice(0, 24);
}

export async function POST(req: NextRequest) {
  // Answer in the user's UI language (locale cookie) — resolved first so even
  // validation errors come back localized.
  const locale = reqLocale(req);
  const body = await req.json().catch(() => null);
  const deviceId = typeof body?.deviceId === "string" ? body.deviceId.slice(0, 80) : "";
  // Fallback display name in the joiner's UI language (shown to peers).
  const name = cleanName(body?.name, apiMsg(locale, "learnerName"));
  const intent = body?.intent === "one" ? "one" : "group";
  const mode = ["quick", "private", "code"].includes(body?.mode) ? body.mode : "quick";
  const code =
    typeof body?.code === "string" ? body.code.trim().toUpperCase().slice(0, 6) : "";

  if (!deviceId) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "deviceIdRequired") }, { status: 400 });
  }

  await pruneStaleRooms();

  const maxPeers = intent === "one" ? 2 : 4;

  // Retry loop guards against race conditions on quick match
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      let room: CallRoom | null = null;

      if (mode === "code") {
        if (!code) {
          return NextResponse.json(
            { ok: false, error: apiMsg(locale, "roomCodeRequired") },
            { status: 400 }
          );
        }
        room = await db.callRoom.findUnique({ where: { code } });
        if (!room || room.status !== "open") {
          return NextResponse.json(
            { ok: false, error: apiMsg(locale, "roomNotFound") },
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
        const me: RoomParticipant = {
          peerId,
          name,
          deviceId,
          joinedAt: Date.now(),
          lastSeenAt: Date.now(),
        };
        room = await db.callRoom.create({
          data: {
            code: newCode,
            intent,
            visibility: mode === "private" ? "private" : "public",
            hostPeerId: peerId,
            status: "open",
            maxPeers,
            participants: serializeParticipants([me]),
          },
        });
        return respond(room.id, room.code, peerId, intent, [
          { peerId, name },
        ]);
      }

      // join existing room — recheck capacity INSIDE a transaction so two
      // concurrent joins can't both pass the check and lose a participant
      // (read-modify-write on the participants JSON is not atomic otherwise).
      const joined = await db.$transaction(async (tx) => {
        const fresh = await tx.callRoom.findUnique({ where: { id: room.id } });
        if (!fresh || fresh.status !== "open") return null;
        const participants = parseParticipants(fresh.participants);
        if (participants.length >= fresh.maxPeers) return "full" as const;
        if (participants.some((p) => p.deviceId === deviceId)) return "already" as const;
        participants.push({ peerId, name, deviceId, joinedAt: Date.now(), lastSeenAt: Date.now() });
        await tx.callRoom.update({
          where: { id: fresh.id },
          data: { participants: serializeParticipants(participants) },
        });
        return participants.map((p) => ({ peerId: p.peerId, name: p.name }));
      });

      if (joined === null) {
        if (mode === "quick" && attempt < 3) continue; // room vanished — retry
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "roomNotFound") },
          { status: 404 }
        );
      }
      if (joined === "full") {
        if (mode === "quick" && attempt < 3) continue; // try another room/create
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "roomFull") },
          { status: 409 }
        );
      }
      if (joined === "already") {
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "alreadyInRoom") },
          { status: 409 }
        );
      }
      return respond(room.id, room.code, peerId, intent, joined);
    } catch (e) {
      if (attempt === 3) {
        console.error("call/join failed", e);
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "joinFailed") },
          { status: 500 }
        );
      }
    }
  }
  return NextResponse.json({ ok: false, error: apiMsg(locale, "joinFailed") }, { status: 500 });
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
