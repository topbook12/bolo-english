import "server-only";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { db } from "./db";

// Re-exported for route handlers that import { db } from "@/lib/auth"
export { db };

// Student accounts: email + password (bcrypt) with a signed JWT session
// cookie (httpOnly). Works on Vercel serverless with zero extra setup:
// AUTH_SECRET falls back to a value derived from ENCRYPTION_SECRET /
// TURSO_AUTH_TOKEN so sessions survive across serverless instances.

const COOKIE_NAME = "bolo_session";
const SESSION_DAYS = 30;

function getAuthSecret(): Uint8Array {
  let base = process.env.AUTH_SECRET;
  if (!base || base.length < 32) {
    const fallback =
      process.env.ENCRYPTION_SECRET || process.env.TURSO_AUTH_TOKEN || "";
    base =
      fallback.length >= 16
        ? crypto.createHash("sha256").update(`bolo-auth:${fallback}`).digest("hex")
        : "bolo-english-local-dev-secret-key-0123456789";
  }
  return new TextEncoder().encode(base);
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
}

/* ── password ── */
export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 10);
}
export function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

/* ── session cookie ── */
export async function createSessionCookie(userId: string): Promise<string> {
  return new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(getAuthSecret());
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}

export async function setSessionCookie(userId: string): Promise<void> {
  const token = await createSessionCookie(userId);
  const store = await cookies();
  store.set(COOKIE_NAME, token, sessionCookieOptions());
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, "", { ...sessionCookieOptions(), maxAge: 0 });
}

export async function getSessionUser(): Promise<SessionUser | null> {
  try {
    const store = await cookies();
    const token = store.get(COOKIE_NAME)?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, getAuthSecret());
    const userId = String(payload.sub ?? "");
    if (!userId) return null;
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true },
    });
    return user;
  } catch {
    return null;
  }
}

/** userId from the session cookie, or null (safe inside route handlers) */
export async function getSessionUserId(): Promise<string | null> {
  try {
    const store = await cookies();
    const token = store.get(COOKIE_NAME)?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, getAuthSecret());
    return String(payload.sub ?? "") || null;
  } catch {
    return null;
  }
}

/* ── device data merge (account sync) ──
   When a user logs in on a device, their account data "moves" to this
   device: rows tagged with userId are re-pointed to the current deviceId
   so every device-keyed feature (wordbook, progress, history) shows the
   account's data. Device-local duplicates that would conflict are removed. */
export async function mergeDeviceData(
  userId: string,
  deviceId: string
): Promise<void> {
  try {
    // 1) WordBookItem — unique(deviceId, word): drop device rows colliding
    //    with the account's words, move account rows that don't collide,
    //    then remove leftover account rows on other devices.
    await db.$executeRawUnsafe(
      `DELETE FROM WordBookItem WHERE deviceId = ? AND word IN (SELECT word FROM WordBookItem WHERE userId = ?)`,
      deviceId,
      userId
    );
    await db.$executeRawUnsafe(
      `UPDATE WordBookItem SET deviceId = ? WHERE userId = ? AND word NOT IN (SELECT word FROM WordBookItem WHERE deviceId = ?)`,
      deviceId,
      userId,
      deviceId
    );
    await db.practiceLog.updateMany({
      where: { userId, NOT: { deviceId } },
      data: { deviceId },
    });
    await db.speakingSession.updateMany({
      where: { userId, NOT: { deviceId } },
      data: { deviceId },
    });
  } catch (e) {
    console.error("mergeDeviceData failed", e);
  }
}

/* ── validation ── */
export function normalizeEmail(email: unknown): string | null {
  if (typeof email !== "string") return null;
  const e = email.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 120 ? e : null;
}

export function validatePassword(pw: unknown): string | null {
  if (typeof pw !== "string" || pw.length < 6 || pw.length > 72) return null;
  return pw;
}

export function cleanName(name: unknown, fallback = "শিক্ষার্থী"): string {
  const n = typeof name === "string" ? name.trim() : "";
  return (n || fallback).slice(0, 40);
}
