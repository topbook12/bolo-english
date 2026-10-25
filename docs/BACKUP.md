# Database backup guide — Bolo English (D6, ROADMAP-60)

Production data lives in Turso (libsql://english-topubiswas…). Backups are a
plain-SQL dump — restorable with `sqlite3` or `turso db shell`.

## One-off backup (30 seconds)

From the project folder (credentials already saved in `.env.turso`, gitignored):

```bash
set -a; source .env.turso; set +a; bun scripts/db-backup.ts
```

Output: `backups/bolo-<date>-<time>.sql` (gitignored) with schema + all rows.
Restore anywhere:

```bash
sqlite3 restored.db < backups/bolo-….sql
# or straight into a fresh Turso database:
turso db shell <new-db-name> < backups/bolo-….sql
```

Verified restore drill (2026-10-25): the dump restored into a scratch DB with
identical row counts (9 users, 19 events). Without the sqlite3 CLI, this also
works (what the drill used):

```bash
bun -e 'import { createClient } from "@libsql/client";
import { readFileSync } from "node:fs";
const db = createClient({ url: "file:/tmp/restore-drill.db" });
await db.executeMultiple(readFileSync("backups/bolo-….sql", "utf8"));'
```

## Keep it scheduled (pick ONE)

### Option A — GitHub Actions (recommended: free, off-machine, keeps 90 days)

Create `.github/workflows/backup.yml`:

```yaml
name: weekly-db-backup
on:
  schedule: [{ cron: "0 2 * * 1" }] # Mondays 02:00 UTC = 08:00 Dhaka
  workflow_dispatch: {}
jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun scripts/db-backup.ts
        env:
          TURSO_DATABASE_URL: ${{ secrets.TURSO_DATABASE_URL }}
          TURSO_AUTH_TOKEN: ${{ secrets.TURSO_AUTH_TOKEN }}
      - uses: actions/upload-artifact@v4
        with:
          name: db-backup-${{ github.run_id }}
          path: backups/*.sql
          retention-days: 90
```

Then add the two secrets (repo → Settings → Secrets and variables → Actions)
with the same values as `.env.turso`. Download the artifact any time from the
Actions tab. **Note:** scheduled workflows only run on the default branch and
auto-pause after 60 days of repo inactivity — push something or re-run
manually (`workflow_dispatch`) to keep them alive.

### Option B — your own machine (cron)

```bash
crontab -e
# Mondays 08:00 Dhaka time:
0 8 * * 1 cd /path/to/bolo-english && set -a && . ./.env.turso && set +a && bun scripts/db-backup.ts >> backups/backup.log 2>&1
```

(Windows: Task Scheduler → run the same command weekly.)

### Option C — Turso's own platform backups (zero work)

The Turso dashboard can schedule platform-side backups on paid plans — if the
project ever moves there, platform backups + this script's dumps are redundant
protection.

## Rule of thumb

- **Minimum**: run the one-off command every Monday before the weekly review.
- **Better**: Option A above — then backups exist even when you forget.
- Verify a restore at least once before you actually need it (D54 does this
  as a formal drill).
