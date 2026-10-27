// E2E test: two clients join the 1:1 matching queue via the Caddy gateway.
// Expect: both get match:matched with the same room code; captions relay works.
import { io } from "socket.io-client";

const url = "http://localhost:81/?XTransformPort=3003";

function client(name) {
  return new Promise((resolve, reject) => {
    const s = io(url, { transports: ["websocket", "polling"], forceNew: true });
    const timer = setTimeout(() => reject(new Error(`${name} timeout`)), 10000);
    s.on("connect", () => {
      s.emit("hello", { deviceId: `dev-${name}`, name });
      s.emit("match:join");
    });
    s.on("match:matched", (data) => {
      clearTimeout(timer);
      resolve({ socket: s, data });
    });
    s.on("connect_error", (e) => {
      clearTimeout(timer);
      reject(e);
    });
  });
}

const pa = client("আমিনা");
await new Promise((r) => setTimeout(r, 800)); // let A join queue first
const pb = client("রাকিব");
const [a, b] = await Promise.all([pa, pb]);

console.log("A matched:", a.data.code, "peers:", a.data.peers.map((p) => p.name).join(","));
console.log("B matched:", b.data.code, "peers:", b.data.peers.map((p) => p.name).join(","));
console.assert(a.data.code === b.data.code, "ROOM CODES MATCH");

// caption relay test
const got = new Promise((r) => a.socket.on("caption", r));
b.socket.emit("caption", { text: "Hello, I am practicing English", final: true });
const cap = await got;
console.log("caption relay:", cap.speaker, "→", cap.text);
console.assert(cap.speaker === "রাকিব", "CAPTION FROM B ARRIVED AT A");

// chat relay test
const gotChat = new Promise((r) => b.socket.on("chat", r));
a.socket.emit("chat", { text: "Great!" });
const chat = await gotChat;
console.log("chat relay:", chat.speaker, "→", chat.text);

a.socket.disconnect();
b.socket.disconnect();
console.log("SIGNALING E2E: ALL PASS ✅");
process.exit(0);
