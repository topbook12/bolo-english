import crypto from "node:crypto";
import { createClient } from "@libsql/client";

// Real P-256 ECDH keypair → valid p256dh/auth for web-push encryption.
const server = crypto.createECDH("prime256v1");
server.generateKeys();
const client = crypto.createECDH("prime256v1");
client.generateKeys();
const clientPub = client.getPublicKey(); // 65 bytes uncompressed
const auth = crypto.randomBytes(16);
const shared = client.computeSecret(server.getPublicKey());

// the CLIENT's public key is the p256dh the server encrypts against
const p256dhB64 = clientPub.toString("base64url");
const authB64 = auth.toString("base64url");
console.log("p256dh len:", clientPub.length, "auth len:", auth.length);

const c = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:./db/custom.db",
  authToken: process.env.TURSO_AUTH_TOKEN,
});
const endpoint = "https://fcm.googleapis.com/fcm/send/qa-real-crypto-42";
await c.execute({
  sql: `INSERT INTO PushSubscription (id, endpoint, p256dh, auth, deviceId, locale, createdAt, updatedAt)
        VALUES (lower(hex(randomblob(16))), ?, ?, ?, 'qa-d12', 'bn', datetime('now'), datetime('now'))
        ON CONFLICT(endpoint) DO UPDATE SET p256dh=excluded.p256dh, auth=excluded.auth`,
  args: [endpoint, p256dhB64, authB64],
});
console.log("real-crypto sub inserted:", endpoint.slice(-18));
