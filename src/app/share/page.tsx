// D48 share-cards — public streak-share landing (/share?kind=streak&…).
//
// When a learner shares their streak from the app, the LINK they share points
// here (not the app root). WhatsApp/fetchers read THIS page's og tags, so the
// preview shows the personalized streak card (/api/og?kind=streak) instead of
// the generic brand card. The body is a tiny, Bengali-first landing: the big
// number, the inviter's name, and one CTA into the app.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { ogImageUrl } from "@/lib/og";

export const dynamic = "force-dynamic";

function clean(v: string | null | undefined, max: number): string {
  if (!v) return "";
  return v.replace(/[\u0000-\u001f<>]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

type ShareParams = { kind?: string; name?: string; streak?: string };

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<ShareParams>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const name = clean(sp.name, 40);
  const streakRaw = clean(sp.streak, 4);
  const streak = /^\d+$/.test(streakRaw) ? parseInt(streakRaw, 10) : 0;
  const who = name || "তোমার বন্ধু";
  const title = `${who} ${streak || 1} দিনের স্ট্রিকে ইংরেজি শিখছে | ${SITE_NAME}`;
  const description = "তুমিও শুরু করতে পারো — বাংলা ব্যাখ্যায় ইংরেজি, সম্পূর্ণ ফ্রি।";
  const image = ogImageUrl("streak", { name, streak: streak || 1 });
  return {
    title,
    description,
    // personalized landing — no SEO value, keep it out of search indexes
    // (WhatsApp/social crawlers still read the og tags above)
    robots: { index: false, follow: true },
    alternates: { canonical: `${SITE_URL}/share` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/share`,
      type: "website",
      siteName: SITE_NAME,
      locale: "bn_BD",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function SharePage({
  searchParams,
}: {
  searchParams: Promise<ShareParams>;
}) {
  const sp = await searchParams;
  const name = clean(sp.name, 40);
  const streakRaw = clean(sp.streak, 4);
  const streak = /^\d+$/.test(streakRaw) ? parseInt(streakRaw, 10) : 0;
  const who = name || "তোমার বন্ধু";

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-muted-foreground shadow-sm">
            <span className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-[11px] font-bold text-white">
              B
            </span>
            {SITE_NAME}
          </div>

          <div className="rounded-3xl border border-orange-200/80 bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50 p-8 shadow-md dark:border-orange-900 dark:from-orange-950/50 dark:via-amber-950/30 dark:to-orange-950/40">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
              <Flame className="size-8" aria-hidden />
            </span>
            <p className="mt-4 text-lg font-semibold text-orange-900 dark:text-orange-200">
              {who} এখন যাচ্ছেন —
            </p>
            <p className="mt-1 flex items-baseline justify-center gap-2">
              <span className="text-6xl font-extrabold leading-none text-orange-700 dark:text-orange-300">
                {streak || 1}
              </span>
              <span className="text-xl font-bold text-orange-900 dark:text-orange-200">
                দিনের স্ট্রিকে 🔥
              </span>
            </p>
            <p className="mt-4 text-sm leading-6 text-orange-800/80 dark:text-orange-200/80">
              প্রতিদিন অল্প অল্প প্র্যাকটিসেই ইংরেজি হাতে-কলমে শেখা যায়। আপনিও আজই শুরু করুন!
            </p>
          </div>

          <Link
            href="/"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-7 text-base font-bold text-white shadow-md transition hover:opacity-90"
          >
            আমিও ফ্রি শুরু করব
            <ArrowRight className="size-5" aria-hidden />
          </Link>
          <p className="mt-4 text-xs text-muted-foreground">
            ফ্রি লেসন · কুইজ · স্পিকিং প্র্যাকটিস — কোনো পেমেন্ট নেই
          </p>
        </div>
      </main>

      <footer className="border-t border-border/80 bg-card py-4 text-center text-xs text-muted-foreground">
        {SITE_NAME} — নির্ভয়ে ইংরেজি বলুন
      </footer>
    </div>
  );
}
