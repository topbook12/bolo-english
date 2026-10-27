import { NextRequest, NextResponse } from "next/server";
import type { CallRoom } from "@prisma/client";
import { db } from "@/lib/db";
import { reqLocale, apiMsg } from "@/lib/api-i18n";
import { checkIpLimit } from "@/lib/rate-limit";
import { logAnalyticsEvent } from "@/lib/analytics-server";
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
  // Audit P2-13: quick-match room creation / code brute force had no throttle.
  // 20 joins/min per IP is far above any real usage (a call starts once),
  // but it stops join spam and code brute-forcing from a single host.
  if (!checkIpLimit(req, "call-join", 20)) {
    return NextResponse.json({ ok: false, error: apiMsg(locale, "rateLimited") }, { status: 429 });
  }
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
        if (!room || room.status === "closed") {
          return NextResponse.json(
            { ok: false, error: apiMsg(locale, "roomNotFound") },
            { status: 404 }
          );
        }
        // D20: a scheduled room opens by code-join 5 minutes before its
        // time — anyone from the discovery list can start it then. Earlier
        // than that it is politely not open yet.
        if (room.status === "scheduled") {
          const opensAt = room.scheduledFor
            ? room.scheduledFor.getTime() - 5 * 60 * 1000
            : 0;
          if (Date.now() < opensAt) {
            return NextResponse.json(
              { ok: false, error: apiMsg(locale, "roomNotYet") },
              { status: 423 }
            );
          }
          const flipped = await db.callRoom
            .updateMany({
              where: { id: room.id, status: "scheduled" },
              data: { status: "open" },
            })
            .catch(() => ({ count: 0 }));
          if (flipped.count > 0) {
            room = { ...room, status: "open" };
          }
        }
      } else if (mode === "quick") {
        // Final attempt: force-create. Under a burst of simultaneous joiners
        // every room can fill between our findQuickRoom read and the CAS
        // write ("full" on every retry) — failing with roomFull used to
        // bounce a real learner out of matching. Worst case they wait in
        // their own room and the client's matching re-roll converges them
        // into the oldest open room (Task 17 stress-test finding).
        room = attempt === 3 ? null : await findQuickRoom(intent);
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
        // D20 server-derived analytics: a room was CREATED (the opening
        // half of the discovery funnel). mode distinguishes quick/private.
        void logAnalyticsEvent("room_opened", deviceId, null, { intent, mode });
        return respond(room.id, room.code, peerId, intent, [
          { peerId, name },
        ]);
      }

      // join existing room — recheck capacity INSIDE a transaction so two
      // concurrent joins can't both pass the check and lose a participant.
      // The update itself is a COMPARE-AND-SWAP on the participants JSON we
      // just read: if another join/leave/poll-prune committed between our
      // read and write, the UPDATE matches 0 rows and we retry with a fresh
      // read (Task 17 audit — last-writer-wins used to silently drop one of
      // two simultaneous joiners, exactly the "who connects with whom"
      // failure under many concurrent calls).
      const joined = await db.$transaction(async (tx) => {
        const fresh = await tx.callRoom.findUnique({ where: { id: room.id } });
        if (!fresh || fresh.status !== "open") return null;
        const participants = parseParticipants(fresh.participants);
        // Same deviceId already in the room? A CRASHED client (killed app /
        // lost network) leaves a ghost participant; the newest session of the
        // same device always WINS — the ghost is replaced immediately, no
        // 90-second lockout (a mobile kill+reopen used to be locked out with
        // 409 until the ghost's heartbeat expired). A device cannot meaning-
        // fully be in two calls: the old tab's next poll returns closed.
        const existingIdx = participants.findIndex((p) => p.deviceId === deviceId);
        if (existingIdx !== -1) participants.splice(existingIdx, 1);
        if (participants.length >= fresh.maxPeers) return "full" as const;
        participants.push({ peerId, name, deviceId, joinedAt: Date.now(), lastSeenAt: Date.now() });
        const asRead = fresh.participants;
        const updated = await tx
          .$executeRawUnsafe(
            `UPDATE "CallRoom" SET "participants" = ?, "updatedAt" = ? WHERE "id" = ? AND "participants" = ?`,
            serializeParticipants(participants),
            new Date(),
            fresh.id,
            asRead
          )
          .catch(() => 0);
        if (updated === 0) return "contended" as const;
        return participants.map((p) => ({ peerId: p.peerId, name: p.name }));
      });

      if (joined === null) {
        if (attempt < 3) continue; // room vanished — retry (any mode)
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "roomNotFound") },
          { status: 404 }
        );
      }
      if (joined === "contended") {
        if (attempt < 3) continue; // concurrent roster change — retry with a fresh read
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "joinFailed") },
          { status: 500 }
        );
      }
      if (joined === "full") {
        if (mode === "quick" && attempt < 3) continue; // try another room/create
        return NextResponse.json(
          { ok: false, error: apiMsg(locale, "roomFull") },
          { status: 409 }
        );
      }
      // D20 server-derived analytics: someone JOINED an existing room —
      // the social-discovery signal (rooms that actually fill up).
      void logAnalyticsEvent("room_joined", deviceId, null, { intent, mode });
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
