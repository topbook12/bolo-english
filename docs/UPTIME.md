# Uptime monitoring — Bolo English (D5, ROADMAP-60)

The app ships a health endpoint that checks BOTH the app and the database:

```
GET https://bolo-english-mu.vercel.app/api/health
→ 200 {"ok":true,"db":"up","time":"…"}   app + DB alive
→ 503 {"ok":false,"db":"down","time":"…"} app alive, DB unreachable
```

## Owner setup (free, ~3 minutes — UptimeRobot)

1. Create a free account at https://uptimerobot.com (Free plan: 50 monitors, 5-min checks).
2. **Add New Monitor** →
   - Monitor Type: **HTTP(s)**
   - Friendly Name: `Bolo English — health`
   - URL: `https://bolo-english-mu.vercel.app/api/health`
   - Checking Interval: `5 minutes` (or 10)
   - Advanced → **Keyword check**: enable, keyword `"ok":true` — this makes the
     monitor fail when the DB is down even though HTTP responds (503 already
     fails an HTTP monitor, but the keyword adds a second layer for proxies
     that swallow status codes).
3. **Alert Contacts** → add your email (and Telegram if you prefer).
4. Save. Within 5 minutes the monitor shows "Up" with the first check.

## What you'll be alerted on

| Signal | Meaning | First response |
|---|---|---|
| Monitor DOWN (HTTP fail/timeout) | Deployment or runtime crash | Check Vercel dashboard → Deployments; roll back if the latest is broken |
| 503 db:down | Turso unreachable / token expired | Check Turso status page + token expiry in the Turso dashboard |
| Keyword miss (200 but `"ok":true` absent) | Middleware/proxy mangling responses | Inspect recent deploy changes to /api/health |

## Local / on-demand probes

```bash
curl https://bolo-english-mu.vercel.app/api/health
# {"ok":true,"db":"up","time":"2026-10-25T…"}
```
