// ─────────────────────────────────────────────────────────────────────────────
// Database backup (D6, ROADMAP-60) — dumps the production (Turso) database to
// a plain-SQL file that can restore with `sqlite3` or `turso db shell`.
//
// USAGE (from the project folder, credentials in .env.turso):
//   set -a; source .env.turso; set +a; bun scripts/db-backup.ts
//   (a `file:` URL also works — backs up a local SQLite database instead)
//
// OUTPUT: backups/bolo-<date>-<time>.sql  (gitignored)
//   CREATE TABLE statements + INSERT statements per table, wrapped in a
//   transaction for fast, atomic restore.
//
// RESTORE (the two commands that matter):
//   sqlite3 new.db < backups/bolo-….sql
//   turso db shell <database-name> < backups/bolo-….sql
//
// SCHEDULING options are described in docs/BACKUP.md — never commit the
// token anywhere; the script reads it from the environment only.
// ─────────────────────────────────────────────────────────────────────────────

import { createClient, type Client } from "@libsql/client";
import { mkdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const DB_URL = process.env.TURSO_DATABASE_URL ?? "";
if (!DB_URL) {
  console.error("✗ TURSO_DATABASE_URL is not set (source .env.turso first)");
  process.exit(1);
}

const db: Client = createClient({
  url: DB_URL,
  authToken: process.env.TURSO_AUTH_TOKEN || undefined,
});

/** SQL string literal with '' escaping; NULL-safe. */
function sqlValue(v: unknown): string {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "NULL";
  if (typeof v === "bigint") return String(v);
  if (v instanceof Uint8Array) {
    return `X'${Array.from(v).map((b) => b.toString(16).padStart(2, "0")).join("")}'`;
  }
  const s = String(v).replace(/'/g, "''");
  return `'${s}'`;
}

async function main() {
  console.log(`Connected → ${DB_URL.replace(/^[^:]+:/, "")}`);
  const tablesRes = await db.execute(
    `SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name`
  );
  const tables = tablesRes.rows.map((r) => String(r.name));
  if (tables.length === 0) {
    console.error("✗ No tables found — wrong database?");
    process.exit(1);
  }

  const stamp = new Date().toISOString().replace(/[:T]/g, "-").slice(0, 16);
  const dir = join(process.cwd(), "backups");
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `bolo-${stamp}.sql`);

  const out: string[] = [
    `-- Bolo English DB backup ${new Date().toISOString()}`,
    `-- source: ${DB_URL.replace(/^[^:]+:/, "")}`,
    "BEGIN TRANSACTION;",
    "PRAGMA foreign_keys=OFF;",
  ];

  let totalRows = 0;
  for (const table of tables) {
    // Schema (CREATE TABLE exactly as it exists).
    const schema = await db.execute(
      `SELECT sql FROM sqlite_master WHERE type='table' AND name='${table.replace(/'/g, "''")}'`
    );
    const createSql = schema.rows[0]?.sql;
    if (createSql) out.push(`${String(createSql)};`);

    // Indexes for this table.
    const idx = await db.execute(
      `SELECT sql FROM sqlite_master WHERE type='index' AND sql IS NOT NULL AND tbl_name='${table.replace(/'/g, "''")}'`
    );
    for (const r of idx.rows) out.push(`${String(r.sql)};`);

    // Data.
    const rows = await db.execute(`SELECT * FROM "${table.replace(/"/g, '""')}"`);
    if (rows.rows.length > 0) {
      const cols = rows.columns.map((c) => `"${c}"`).join(",");
      for (const row of rows.rows) {
        const vals = rows.columns.map((c) => sqlValue(row[c])).join(",");
        out.push(`INSERT INTO "${table.replace(/"/g, '""')}" (${cols}) VALUES (${vals});`);
      }
      totalRows += rows.rows.length;
    }
    console.log(`  ${table}: ${rows.rows.length} rows`);
  }

  out.push("PRAGMA foreign_keys=ON;", "COMMIT;", "");

  writeFileSync(file, out.join("\n"), "utf8");
  const kb = Math.round(statSync(file).size / 1024);
  console.log(
    `\nBACKUP COMPLETE ✅  ${tables.length} tables, ${totalRows} rows → ${file} (${kb} KB)`
  );
  console.log("Restore:  sqlite3 new.db < " + file);
  process.exit(0);
}

main().catch((e) => {
  console.error("✗ Backup failed:", e instanceof Error ? e.message : e);
  process.exit(1);
});
