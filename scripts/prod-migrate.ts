// ─────────────────────────────────────────────────────────────────────────────
// Production (Turso) DB migration runner — Task 27 delta + schema-drift repair,
// IDEMPOTENT.
//
// What it applies (only the pieces that are MISSING — safe to run any number
// of times, on the wrong machine, or after a partial failure):
//   * User.nativeLang, User.role   (Tasks 27-c / 27-e)
//   * UserApiKey table + index     (Task 27-d key pool)
//   * CvDocument table + index     (CV Studio — found missing on production
//                                   during the 2026-10 drift audit)
//   * AnalyticsEvent table + idx   (D1 product analytics — 60-day roadmap;
//                                   /api/track degrades to console errors
//                                   without it, so apply before the deploy
//                                   that ships D1 reaches production)
//
// WHY THIS EXISTS: the new login code (already deployed to Vercel) selects
// User.role / User.nativeLang — until the columns exist in the production
// database, LOGIN ON THE LIVE SITE FAILS. This script closes that gap.
//
// HOW TO RUN (from the project folder, after `bun install`):
//   1. Copy the two values from Vercel → Project → Settings →
//      Environment Variables:  TURSO_DATABASE_URL  and  TURSO_AUTH_TOKEN
//   2. macOS / Linux (bash):
//        export TURSO_DATABASE_URL="libsql://your-db.turso.io"
//        export TURSO_AUTH_TOKEN="your-token"
//        bun scripts/prod-migrate.ts
//      Windows (PowerShell):
//        $env:TURSO_DATABASE_URL = "libsql://your-db.turso.io"
//        $env:TURSO_AUTH_TOKEN   = "your-token"
//        bun scripts/prod-migrate.ts
//
// The token is read from env only — never typed as an argument, never logged.
// A `file:` URL also works (used by the self-test against a scratch DB).
// ─────────────────────────────────────────────────────────────────────────────

import { createClient, type Client } from "@libsql/client";

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

function log(color: string, msg: string) {
  console.log(`${color}${msg}${RESET}`);
}

async function tablesOf(db: Client): Promise<Set<string>> {
  const res = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`
  );
  return new Set(res.rows.map((r) => String(r.name)));
}

async function columnsOf(db: Client, table: string): Promise<Set<string>> {
  const res = await db.execute(`PRAGMA table_info("${table}")`);
  return new Set(res.rows.map((r) => String(r.name)));
}

async function main() {
  // IMPORTANT: deliberately NO fallback to DATABASE_URL. Bun auto-loads the
  // project .env (which holds the LOCAL dev DATABASE_URL) — silently running
  // against the local file would print "COMPLETE ✅" while production stays
  // unmigrated. Only an explicit TURSO_DATABASE_URL is accepted.
  const url = process.env.TURSO_DATABASE_URL || "";
  const authToken = process.env.TURSO_AUTH_TOKEN || "";

  if (!url) {
    log(
      RED,
      [
        "MIGRATION FAILED — no database URL found.",
        "",
        "Set the two env vars from Vercel → Settings → Environment Variables:",
        '  export TURSO_DATABASE_URL="libsql://your-db.turso.io"',
        '  export TURSO_AUTH_TOKEN="your-token"',
        "then run:  bun scripts/prod-migrate.ts",
      ].join("\n")
    );
    process.exit(1);
  }

  // Show only the host so the operator can confirm the right database —
  // never print credentials.
  let host = url;
  try {
    host = new URL(url.replace(/^libsql:/, "https:")).host;
    if (!host) host = url; // file: URLs have no host — show the path
  } catch {
    // keep raw url (harmless, local filename only)
  }
  log(GREEN, `Connected → ${host}`);

  const db = createClient({ url, authToken: authToken || undefined });

  // ── Guard: must be the Bolo English database ──────────────────────────────
  const tables = await tablesOf(db);
  if (!tables.has("User")) {
    log(
      RED,
      [
        'MIGRATION ABORTED — no "User" table found in this database.',
        "That means TURSO_DATABASE_URL points at the wrong database.",
        "Nothing was changed. Check the value on Vercel and try again.",
      ].join("\n")
    );
    process.exit(1);
  }

  let changed = 0;

  // ── 1) User.nativeLang ────────────────────────────────────────────────────
  const userCols = await columnsOf(db, "User");
  if (!userCols.has("nativeLang")) {
    await db.execute(`ALTER TABLE "User" ADD COLUMN "nativeLang" TEXT`);
    log(GREEN, 'Added  User.nativeLang  (signup language lock)');
    changed++;
  } else {
    log(YELLOW, 'Skip   User.nativeLang  (already exists)');
  }

  // ── 2) User.role ──────────────────────────────────────────────────────────
  if (!userCols.has("role")) {
    await db.execute(`ALTER TABLE "User" ADD COLUMN "role" TEXT`);
    log(GREEN, 'Added  User.role  (admin role)');
    changed++;
  } else {
    log(YELLOW, 'Skip   User.role  (already exists)');
  }

  // ── 3) UserApiKey table + index ───────────────────────────────────────────
  if (!tables.has("UserApiKey")) {
    await db.execute(/* sql */ `
      CREATE TABLE "UserApiKey" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "userId" TEXT NOT NULL,
          "apiKeyEnc" TEXT NOT NULL,
          "keyPreview" TEXT NOT NULL,
          "sortOrder" INTEGER NOT NULL DEFAULT 0,
          "cooldownUntil" DATETIME,
          "failures" INTEGER NOT NULL DEFAULT 0,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    log(GREEN, 'Created  UserApiKey table  (Gemini key pool)');
    changed++;
  } else {
    log(YELLOW, "Skip     UserApiKey table  (already exists)");
  }

  const idx = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='index' AND name='UserApiKey_userId_idx'`
  );
  if (idx.rows.length === 0) {
    await db.execute(
      `CREATE INDEX "UserApiKey_userId_idx" ON "UserApiKey"("userId")`
    );
    log(GREEN, "Created  UserApiKey_userId_idx  (index)");
    changed++;
  } else {
    log(YELLOW, "Skip     UserApiKey_userId_idx  (already exists)");
  }

  // ── 4) CvDocument table + index (CV Studio) ──────────────────────────────
  // Found missing on production during the drift audit — CV Studio would
  // 500 on the live site without it.
  if (!tables.has("CvDocument")) {
    await db.execute(/* sql */ `
      CREATE TABLE "CvDocument" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "deviceId" TEXT NOT NULL,
          "title" TEXT NOT NULL DEFAULT 'আমার সিভি',
          "data" TEXT NOT NULL,
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" DATETIME NOT NULL
      )
    `);
    log(GREEN, "Created  CvDocument table  (CV Studio)");
    changed++;
  } else {
    log(YELLOW, "Skip     CvDocument table  (already exists)");
  }

  const cvIdx = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='index' AND name='CvDocument_deviceId_idx'`
  );
  if (cvIdx.rows.length === 0) {
    await db.execute(
      `CREATE INDEX "CvDocument_deviceId_idx" ON "CvDocument"("deviceId")`
    );
    log(GREEN, "Created  CvDocument_deviceId_idx  (index)");
    changed++;
  } else {
    log(YELLOW, "Skip     CvDocument_deviceId_idx  (already exists)");
  }

  // ── 5) AnalyticsEvent table + indexes (D1 product analytics) ─────────────
  // Privacy-first event log (see prisma/schema.prisma comment). All inserts
  // are best-effort on the server, but applying the table keeps the data
  // flowing from day one of the 60-day plan.
  if (!tables.has("AnalyticsEvent")) {
    await db.execute(/* sql */ `
      CREATE TABLE "AnalyticsEvent" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "name" TEXT NOT NULL,
          "deviceId" TEXT NOT NULL,
          "userId" TEXT,
          "props" TEXT NOT NULL DEFAULT '{}',
          "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    log(GREEN, "Created  AnalyticsEvent table  (product analytics)");
    changed++;
  } else {
    log(YELLOW, "Skip     AnalyticsEvent table  (already exists)");
  }

  for (const idx of [
    "AnalyticsEvent_name_createdAt_idx",
    "AnalyticsEvent_deviceId_createdAt_idx",
    "AnalyticsEvent_userId_createdAt_idx",
  ] as const) {
    const have = await db.execute(
      `SELECT name FROM sqlite_master WHERE type='index' AND name='${idx}'`
    );
    if (have.rows.length === 0) {
      const target =
        idx === "AnalyticsEvent_name_createdAt_idx"
          ? `("name","createdAt")`
          : idx === "AnalyticsEvent_deviceId_createdAt_idx"
            ? `("deviceId","createdAt")`
            : `("userId","createdAt")`;
      await db.execute(
        `CREATE INDEX "${idx}" ON "AnalyticsEvent"${target}`
      );
      log(GREEN, `Created  ${idx}  (index)`);
      changed++;
    } else {
      log(YELLOW, `Skip     ${idx}  (already exists)`);
    }
  }

  // ── Final verification (reads the REAL state, not our assumptions) ────────
  const finalTables = await tablesOf(db);
  const finalCols = await columnsOf(db, "User");
  const ok =
    finalCols.has("nativeLang") &&
    finalCols.has("role") &&
    finalTables.has("UserApiKey") &&
    finalTables.has("CvDocument") &&
    finalTables.has("AnalyticsEvent");

  console.log("");
  if (ok) {
    log(
      GREEN,
      `MIGRATION COMPLETE ✅  (${changed} change${changed === 1 ? "" : "s"} applied — ${
        changed === 0 ? "database was already up to date" : "live login now works"
      })`
    );
    console.log(
      "Tables:",
      [...finalTables].sort().filter((t) => !t.startsWith("sqlite_")).join(", ")
    );
  } else {
    log(RED, "MIGRATION INCOMPLETE ❌ — verification failed, tell the developer.");
    process.exit(1);
  }
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  log(RED, `MIGRATION FAILED ❌ — ${message}`);
  if (/unauthorized|401|403/i.test(message)) {
    console.error(
      "→ The TURSO_AUTH_TOKEN is missing or wrong. Copy the exact value\n" +
        "  from Vercel → Settings → Environment Variables and try again."
    );
  }
  process.exit(1);
});
