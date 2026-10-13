import "server-only";
import { db } from "./db";
import { getSessionUser, type SessionUser } from "./auth";

export type ConfigRow = Awaited<ReturnType<typeof db.userConfig.findFirst>>;

/* ── Single source of truth for the user's config row ──────────────────────
 * The Gemini API key, display name and level used to be keyed by deviceId
 * only, so the same email logging in on another device found nothing (the
 * key "didn't work"), while a different email on the same device still saw
 * the old key. Resolution is now ACCOUNT-first:
 *
 *   1. Logged in  → the row tagged with the user's userId. The key follows
 *      the ACCOUNT, so every device with the same email sees the same key.
 *   2. Logged in, no account row yet → adopt this device's local row (a
 *      guest save), copying it into a new account row and scrubbing the
 *      device copy so the key can never leak to a different email later.
 *   3. Guest (no session) → the device-local row (unchanged behavior).
 */
export async function resolveConfigRow(deviceId: string): Promise<ConfigRow> {
  const user = await getSessionUser();
  if (!user) {
    return db.userConfig.findUnique({ where: { deviceId } });
  }
  return resolveAccountRow(user, deviceId);
}

export async function resolveAccountRow(
  user: SessionUser,
  deviceId: string
): Promise<ConfigRow> {
  let acc = await db.userConfig.findFirst({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
  });
  const dev = await db.userConfig.findUnique({ where: { deviceId } });
  // Only an untagged (guest) row on this device may be adopted. A row tagged
  // to this user is already the account row (found above); a row tagged to a
  // different user must never leak its key.
  const adoptable = !!dev && !dev.userId;

  // First read after login/registration: adopt this device's local config
  // (saved as a guest) into the account — but never a row that already
  // belongs to a different account.
  if (adoptable && dev) {
    if (!acc) {
      let created: ConfigRow = null;
      try {
        created = await db.userConfig.create({
          data: {
            // Synthetic per-account deviceId; `account:` can never collide
            // with real client device ids (random UUIDs).
            deviceId: `account:${user.id}`,
            userId: user.id,
            apiKeyEnc: dev.apiKeyEnc,
            keyPreview: dev.keyPreview,
            displayName: dev.displayName,
            level: dev.level,
          },
        });
      } catch {
        // Raced with a parallel request that created the account row first.
        created = await db.userConfig.findFirst({ where: { userId: user.id } });
      }
      if (created && (dev.keyPreview || dev.apiKeyEnc)) {
        // The key now belongs to the account — scrub it from the device slot
        // so a different email logging in on this device never inherits it.
        await db.userConfig
          .update({ where: { id: dev.id }, data: { apiKeyEnc: "", keyPreview: "" } })
          .catch(() => null);
      }
      return created;
    }
    // Account exists but has no key yet, while this device's guest slot does
    // (saved here before logging in) → move the key into the account.
    if (!acc.keyPreview && dev.keyPreview) {
      await db.userConfig
        .update({
          where: { id: acc.id },
          data: { apiKeyEnc: dev.apiKeyEnc, keyPreview: dev.keyPreview },
        })
        .catch(() => null);
      await db.userConfig
        .update({ where: { id: dev.id }, data: { apiKeyEnc: "", keyPreview: "" } })
        .catch(() => null);
      acc = { ...acc, apiKeyEnc: dev.apiKeyEnc, keyPreview: dev.keyPreview };
    }
  }
  return acc;
}
