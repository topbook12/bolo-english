import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET /api/call/ice → { ok, data: { iceServers } }
//
// WebRTC ICE configuration served at call time so TURN credentials never have
// to live in the client bundle. Site owner can drop in Cloudflare Calls TURN
// (1 TB/month free — https://developers.cloudflare.com/calls/turn/) via env:
//   TURN_URLS        comma-separated, e.g. "turn:turn.cloudflare.com:3478?transport=udp,turn:turn.cloudflare.com:3478?transport=tcp,turns:turn.cloudflare.com:5349?transport=tcp"
//   TURN_USERNAME    the static credential id
//   TURN_CREDENTIAL  the static credential secret
// No redeploy needed — the client fetches this on every call start.
//
// Fallback chain when env is unset: the STUN pair (works for most home
// networks) + the metered.ca OpenRelay attempt (harmless if the free
// credential has lapsed — gathering just skips it).

const STUN: { urls: string[] } = {
  urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
};

const FALLBACK_TURN = {
  urls: [
    "turn:standard.relay.metered.ca:80",
    "turn:standard.relay.metered.ca:80?transport=tcp",
    "turn:standard.relay.metered.ca:443",
    "turn:standard.relay.metered.ca:443?transport=tcp",
  ],
  username: "e8dd651bbe22f4a616b1c04f",
  credential: "MakTy9FvEZjSyZ2o",
};

export async function GET() {
  const urls = (process.env.TURN_URLS ?? "")
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean);

  const iceServers: Array<{ urls: string[]; username?: string; credential?: string }> = [STUN];

  if (urls.length > 0 && process.env.TURN_USERNAME && process.env.TURN_CREDENTIAL) {
    iceServers.push({
      urls,
      username: process.env.TURN_USERNAME,
      credential: process.env.TURN_CREDENTIAL,
    });
  } else {
    iceServers.push(FALLBACK_TURN);
  }

  return NextResponse.json(
    { ok: true, data: { iceServers } },
    { headers: { "Cache-Control": "no-store" } }
  );
}
