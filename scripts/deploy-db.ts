/**
 * Push the Prisma schema to a remote libSQL/Turso database.
 *
 * Usage:
 *   bun scripts/deploy-db.ts
 * (reads TURSO_DATABASE_URL + TURSO_AUTH_TOKEN from .env or environment)
 */
import { createClient } from "@libsql/client";
import { execSync } from "child_process";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  console.error("TURSO_DATABASE_URL is required (e.g. libsql://your-db.turso.io)");
  process.exit(1);
}

// 1) Generate the SQL DDL from the Prisma schema
const sql = execSync(
  `npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script`,
  { encoding: "utf8", cwd: process.cwd() }
);

console.log(`Generated ${sql.split("-->").length} statement(s) from schema.`);

// 2) Execute against the remote database
const client = createClient({ url, authToken });

const statements = sql
  .split(";")
  .map((s) => s.trim())
  .filter((s) => {
    // keep only chunks that contain real SQL (skip pure comment blocks)
    const noComments = s
      .split("\n")
      .filter((l) => !l.trim().startsWith("--"))
      .join("\n")
      .trim();
    return noComments.length > 0;
  });

for (const stmt of statements) {
  try {
    await client.execute(stmt);
    const first = stmt.replace(/\s+/g, " ").slice(0, 72);
    console.log(`✓ ${first}`);
  } catch (e) {
    const msg = (e as Error).message ?? "";
    if (/already exists/i.test(msg)) {
      console.log(`• skipped (exists): ${stmt.replace(/\s+/g, " ").slice(0, 60)}`);
      continue;
    }
    console.error(`✗ FAILED: ${stmt.slice(0, 100)}`);
    console.error(msg);
    process.exit(1);
  }
}

console.log(`\n🎉 Schema deployed to ${url.replace(/:\/\/.*@/, "://")}`);
