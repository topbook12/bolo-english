import "server-only";
import { randomBytes } from "crypto";
import { db } from "./db";

// HTTP-polling WebRTC signaling backed by the database.
// Works identically in local dev and on Vercel serverless (no WebSocket
// server needed). Media still flows peer-to-peer — signaling rows are tiny
// and pruned aggressively, so it stays essentially free.

// STALE_ROOM_MS is generous (3 min) because backgrounded tabs poll slowly
// (Chrome throttles timers); the client heartbeats whenever >45s elapsed, so
// an alive caller always refreshes well inside this window.
export const STALE_ROOM_MS = 180_000;

// A participant that has not polled for this long is considered gone (killed
// tab, crashed app, lost network — cases where the client never managed to
// POST /leave). The poll route prunes such peers from the roster and
// broadcasts a "bye" so every remaining caller drops their video tile
// immediately. 150s is safely above the ~60s worst-case background-tab poll
// gap, so a live (throttled) caller is never wrongly dropped.
export const STALE_PARTICIPANT_MS = 150_000;

// Offers/answers with large ICE candidate lists can reach ~40 KB of SDP.
export const MAX_MESSAGE_BYTES = 64_000;

export interface RoomParticipant {
  peerId: string;
  name: string;
  deviceId: string;
  joinedAt: number;
  /** Last time this peer polled (set by /poll). Optional for rooms created
   *  before the field existed — those fall back to joinedAt. */
  lastSeenAt?: number;
}

/** Best-known proof of life for a participant. */
export function participantLastSeen(p: RoomParticipant): number {
  return typeof p.lastSeenAt === "number" && p.lastSeenAt > 0 ? p.lastSeenAt : p.joinedAt;
}

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function makeRoomCode(): string {
  const bytes = randomBytes(6);
  let code = "";
  for (let i = 0; i < 6; i++) code += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  return code;
}

export function makePeerId(): string {
  return randomBytes(8).toString("hex");
}

export function parseParticipants(json: string): RoomParticipant[] {
  try {
    const arr = JSON.parse(json);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function serializeParticipants(list: RoomParticipant[]): string {
  return JSON.stringify(list.slice(0, 8));
}

/** Delete stale rooms (no heartbeat). Cheap: only rooms untouched 90s+ */
export async function pruneStaleRooms(): Promise<void> {
  const cutoff = new Date(Date.now() - STALE_ROOM_MS);
  await db.callRoom.deleteMany({ where: { updatedAt: { lt: cutoff } } }).catch(() => null);
}

export async function pruneOldMessages(roomId: string): Promise<void> {
  // keep the most recent 400 messages per room
  await db
    .$executeRawUnsafe(
      `DELETE FROM SignalMessage WHERE roomId = ? AND id <= (SELECT MAX(id) - 400 FROM SignalMessage WHERE roomId = ?)`,
      roomId,
      roomId
    )
    .catch(() => null);
}

/** Find a public room that still has room for a quick-match joiner */
export async function findQuickRoom(intent: string) {
  const rooms = await db.callRoom.findMany({
    where: {
      intent,
      visibility: "public",
      status: "open",
      updatedAt: { gt: new Date(Date.now() - STALE_ROOM_MS) },
    },
    orderBy: { createdAt: "asc" },
    take: 10,
  });
  for (const room of rooms) {
    const participants = parseParticipants(room.participants);
    if (participants.length < room.maxPeers) return room;
  }
  return null;
}

export async function appendSignalMessage(
  roomId: string,
  fromPeer: string,
  toPeer: string | null,
  type: string,
  payload: unknown
): Promise<void> {
  const json = JSON.stringify(payload ?? {});
  if (json.length > MAX_MESSAGE_BYTES) return; // ignore oversized
  await db.signalMessage.create({
    data: { roomId, fromPeer, toPeer, type, payload: json },
  });
}
