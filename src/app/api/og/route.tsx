// D48 share-cards — dynamic OG image renderer (/api/og?kind=…).
//
// One Satori (next/og ImageResponse) route draws every social-preview card:
//   kind=home    brand card for the app root (layout metadata default)
//   kind=learn   /learn/<slug> topic pages — badge + lesson title
//   kind=guide   /guide/<slug> articles — badge + guide title
//   kind=streak  in-app streak share — learner name + big day count
//
// Fonts are the project's OWN files (public/fonts, downloaded at build of
// this feature) — zero runtime network dependency, so cards render inside
// restricted environments too. Noto Sans Bengali covers Bangla, Inter covers
// Latin; Satori picks per glyph from the registered set.
//
// WhatsApp-friendliness notes: 1200×630 (the ratio WhatsApp crops least),
// text starts inside the safe zone, response carries long cache headers so
// crawler fetches stay cheap.

import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";
import type { NextRequest } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import type { ReactElement, ReactNode } from "react";

export const runtime = "nodejs";

/* ── fonts: read once, cache at module level ─────────────────────────────── */
interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 700;
  style: "normal";
}

let fontsPromise: Promise<OgFont[]> | null = null;

async function loadFonts(): Promise<OgFont[]> {
  if (!fontsPromise) {
    fontsPromise = (async () => {
      const dir = path.join(process.cwd(), "public", "fonts");
      const read = (f: string) => readFile(path.join(dir, f));
      const [bn400, bn700, lat400, lat700] = await Promise.all([
        read("noto-bengali-400.ttf"),
        read("noto-bengali-700.ttf"),
        read("inter-400.ttf"),
        read("inter-700.ttf"),
      ]);
      const font = (name: string, data: Buffer, weight: 400 | 700): OgFont => ({
        name,
        data: data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer,
        weight,
        style: "normal",
      });
      return [
        font("NotoSansBengali", bn400, 400),
        font("NotoSansBengali", bn700, 700),
        font("Inter", lat400, 400),
        font("Inter", lat700, 700),
      ];
    })().catch((e: unknown) => {
      fontsPromise = null; // don't cache a failed load — next request retries
      throw e;
    });
  }
  return fontsPromise;
}

/* ── query params: strictly capped, everything falls back safely ─────────── */
const KINDS = new Set(["home", "learn", "guide", "streak"]);

function clean(v: string | null, max: number): string {
  if (!v) return "";
  // strip control chars and angle brackets, collapse whitespace, cap length
  return v
    .replace(/[\u0000-\u001f<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

const BRAND_FONT = '"NotoSansBengali", "Inter", sans-serif';

/** Shared brand frame (top chip + bottom bar) around the kind-specific body. */
function frame(body: ReactNode, badgeText: string): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 56,
        backgroundImage: "linear-gradient(135deg, #047857 0%, #0d9488 55%, #0f766e 100%)",
        color: "white",
        fontFamily: BRAND_FONT,
      }}
    >
      {/* top row: brand chip + kind badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.16)",
              border: "2px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>{SITE_NAME}</div>
            <div style={{ fontSize: 19, opacity: 0.85 }}>Speak English fearlessly</div>
          </div>
        </div>
        {badgeText ? (
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "2px solid rgba(255,255,255,0.3)",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {badgeText}
          </div>
        ) : (
          <div style={{ display: "flex", fontSize: 22, fontWeight: 700, opacity: 0.9 }}>
            ১০০% ফ্রি
          </div>
        )}
      </div>

      {/* kind-specific body */}
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {body}
      </div>

      {/* bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid rgba(255,255,255,0.25)",
          paddingTop: 24,
        }}
      >
        <div style={{ display: "flex", fontSize: 22, opacity: 0.9 }}>
          ফ্রি লেসন · কুইজ · স্পিকিং প্র্যাকটিস
        </div>
        <div style={{ display: "flex", fontSize: 22, fontWeight: 700 }}>{SITE_NAME}</div>
      </div>
    </div>
  );
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const kindRaw = sp.get("kind") ?? "home";
  const kind = KINDS.has(kindRaw) ? kindRaw : "home";
  const title = clean(sp.get("title"), 110);
  const sub = clean(sp.get("sub"), 150);
  const name = clean(sp.get("name"), 40);
  const streakRaw = clean(sp.get("streak"), 4);
  const streak = /^\d+$/.test(streakRaw) ? parseInt(streakRaw, 10) : 0;

  let body: ReactNode;
  let badge = "";

  if (kind === "streak") {
    badge = "স্ট্রিক";
    body = (
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <div
          style={{
            display: "flex",
            width: 220,
            height: 220,
            borderRadius: 48,
            background: "linear-gradient(135deg, #f59e0b, #ea580c)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 110,
            fontWeight: 700,
            color: "white",
          }}
        >
          {Math.min(streak, 9999) || 1}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 34, opacity: 0.9 }}>{name || "তোমার বন্ধু"}</div>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.15 }}>
            দিনের স্ট্রিকে ইংরেজি শিখছে
          </div>
          <div style={{ fontSize: 26, opacity: 0.85 }}>তুমিও শুরু করতে পারো — মাত্র ৫ মিনিটে</div>
        </div>
      </div>
    );
  } else if (kind === "learn" && title) {
    badge = "ফ্রি গ্রামার লেসন";
    body = (
      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 950 }}>
        <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.25 }}>{title}</div>
        {sub ? <div style={{ fontSize: 27, lineHeight: 1.5, opacity: 0.88 }}>{sub}</div> : null}
      </div>
    );
  } else if (kind === "guide" && title) {
    badge = "ফ্রি গাইড";
    body = (
      <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 950 }}>
        <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.28 }}>{title}</div>
        {sub ? <div style={{ fontSize: 27, lineHeight: 1.5, opacity: 0.88 }}>{sub}</div> : null}
      </div>
    );
  } else {
    // home (and any unknown param combo → safe brand card)
    body = (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.2 }}>নির্ভয়ে ইংরেজি বলুন</div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          গ্রামার · ভোকাবুলারি · লিসেনিং · রিডিং · স্পিকিং — বাংলা ব্যাখ্যায়, সম্পূর্ণ ফ্রি
        </div>
      </div>
    );
  }

  try {
    const fonts = await loadFonts();
    // ImageResponse IS a Response in Next.js — headers pass through directly
    // (crawler/social fetches repeat often, so everything caches a day).
    return new ImageResponse(frame(body, badge), {
      width: 1200,
      height: 630,
      fonts,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch (e) {
    console.error("[/api/og] render failed:", e instanceof Error ? e.message : String(e));
    return new Response("OG render failed", { status: 500 });
  }
}
