// Bolo English service worker — PWA offline support
// v4 (Backlog A4 — অফলাইন মোড): the app shell + static assets keep working
// offline, GET content APIs (daily words, library lists) fall back to the
// last cached copy, and the grammar bank / wordbook (bundled + localStorage)
// keep working with zero network. Writes (POST/PUT/DELETE) are NEVER cached.
const CACHE = "bolo-english-v4";
const PRECACHE = ["/", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).catch(() => null)
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// GET content APIs cached for offline fallback (network-first, cache as the
// offline copy). Only safe, device-scoped GET endpoints — never auth, calls
// or anything the learner sends.
const API_CACHE_PATHS = [
  "/api/vocab/daily",
  "/api/library",
];

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Static assets: cache-first (incl. illustrations now)
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/illustrations/") ||
    url.pathname === "/manifest.webmanifest"
  ) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => null);
            return res;
          })
      )
    );
    return;
  }

  // Content APIs: network-first with cache fallback (Backlog A4).
  // Never cached: responses that are not ok (errors must not poison the
  // offline copy) and everything not on the whitelist.
  if (API_CACHE_PATHS.some((p) => url.pathname.startsWith(p))) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => null);
          }
          return res;
        })
        .catch(() =>
          caches.match(req).then(
            (hit) =>
              hit ||
              new Response(JSON.stringify({ ok: false, error: "offline" }), {
                status: 503,
                headers: { "Content-Type": "application/json" },
              })
          )
        )
    );
    return;
  }

  // All other API calls (AI, STT, writes, calls): straight through, offline
  // callers get the browser's own network error.
  if (url.pathname.startsWith("/api/")) return;

  // Pages: network-first with cache fallback (offline shell)
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => null);
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match("/")))
  );
});

/* Web Push (D12): the server sends {title, body, url, tag}. Show a
 * notification for every push (userVisibleOnly requires it anyway), then
 * focus the existing tab or open a new one on click. */
self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: "Bolo English", body: (event.data && event.data.text()) || "" };
  }
  const title = data.title || "Bolo English";
  const options = {
    body: data.body || "",
    tag: data.tag || "bolo",
    renotify: true,
    badge: "/icons/icon-192.png",
    icon: "/icons/icon-192.png",
    data: { url: data.url || "/" },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ("focus" in client) {
          client.navigate(url).catch(() => null);
          return client.focus();
        }
      }
      return self.clients.openWindow(url);
    })
  );
});
