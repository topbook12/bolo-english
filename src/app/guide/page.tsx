// D47 SEO — /guide hub: the public index of every guide article.
// Internal-linking root for the guide cluster (every /guide/<slug> page
// links back here via footer + related cards, and this page lists each
// guide exactly once). Also cross-links the /learn grammar cluster.

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, ChevronRight, Clock3, Compass } from "lucide-react";
import { allGuides, guideMinutes } from "@/lib/guides";
import { allLearnPages } from "@/lib/learn-slugs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `ইংরেজি শেখার গাইড — ফ্রি রোডম্যাপ ও টিপস | ${SITE_NAME}`,
  description:
    "২৫ দিনে স্পিকিং, IELTS ব্যান্ড ৭, চাকরির ইন্টারভিউ, শব্দ মনে রাখা — বাংলায় ইংরেজি শেখার সব গাইড, ধাপে ধাপে প্ল্যান ও ফ্রি প্র্যাকটিস অ্যাপ-লিংকসহ।",
  alternates: { canonical: `${SITE_URL}/guide` },
  openGraph: {
    title: `ইংরেজি শেখার গাইড — ফ্রি রোডম্যাপ ও টিপস | ${SITE_NAME}`,
    description:
      "২৫ দিনে স্পিকিং, IELTS ব্যান্ড ৭, চাকরির ইন্টারভিউ, শব্দ মনে রাখা — বাংলায় ইংরেজি শেখার সব গাইড।",
    url: `${SITE_URL}/guide`,
    type: "website",
    siteName: SITE_NAME,
    locale: "bn_BD",
  },
};

export default function GuideHubPage() {
  const guides = allGuides().map((g) => ({ g, minutes: guideMinutes(g) }));
  const lessonCount = allLearnPages().length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ইংরেজি শেখার গাইড (বাংলা)",
    inLanguage: "bn",
    url: `${SITE_URL}/guide`,
    hasPart: guides.map(({ g }) => ({
      "@type": "Article",
      headline: g.title.bn,
      url: `${SITE_URL}/guide/${g.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-stone-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-stone-200/80 bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <Link href="/guide" className="flex items-center gap-2 font-bold text-stone-900">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <Compass className="size-4" />
            </span>
            {SITE_NAME}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            অ্যাপে প্র্যাকটিস করুন
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 sm:px-6 py-8">
        <nav aria-label="ব্রেডক্রাম্ব" className="mb-4 flex items-center gap-1 text-sm text-stone-500">
          <Link href="/" className="hover:text-emerald-700">হোম</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-stone-700 font-medium">গাইড</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          ইংরেজি শেখার গাইড — {guides.length}টি ফ্রি রোডম্যাপ
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-stone-700">
          প্রতিটি গাইড একটি সম্পূর্ণ প্ল্যান — কোথা থেকে শুরু, প্রতিদিন কী
          প্র্যাকটিস, কোথায় আটকায় মানুষ আর কীভাবে উন্নতি মাপবেন। পড়া শেষে
          সরাসরি অ্যাপে গিয়ে প্র্যাকটিস করার লিংকও দেওয়া আছে। তিন ভাষায় পড়া
          যায় — বাংলা, English, हिन्दी।
        </p>

        <section className="mt-8" aria-label="সব গাইড">
          <div className="grid gap-3 sm:grid-cols-2">
            {guides.map(({ g, minutes }) => (
              <Link
                key={g.slug}
                href={`/guide/${g.slug}`}
                className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-emerald-400 hover:shadow"
              >
                <span className="text-3xl" aria-hidden>{g.emoji}</span>
                <span className="mt-3 block text-[15px] font-bold leading-6 text-stone-900 group-hover:text-emerald-800">
                  {g.title.bn}
                </span>
                <span className="mt-1.5 block flex-1 text-[13px] leading-5 text-stone-600 line-clamp-3">
                  {g.excerpt.bn}
                </span>
                <span className="mt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    <Clock3 className="size-3" /> ~{minutes} মিনিট
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                    পড়ুন
                    <ChevronRight className="size-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Cross-cluster link: guides → grammar lessons */}
        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
          <h2 className="flex items-center gap-2 text-base font-bold text-stone-900">
            <BookOpenCheck className="size-5 text-emerald-600" />
            টপিক-ধরে গ্রামার শিখতে চান?
          </h2>
          <p className="mt-1.5 text-sm leading-6 text-stone-600">
            গাইডের পাশাপাশি {lessonCount}টি গ্রামার টপিকের ফ্রি লেসনও আছে — টেন্স, আর্টিকেল, কন্ডিশনাল থেকে অ্যাডভান্সড স্টাইল পর্যন্ত।
          </p>
          <Link
            href="/learn"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            সব গ্রামার লেসন দেখুন
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>

      <footer className="mt-auto border-t border-stone-200/80 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 text-sm text-stone-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-semibold text-stone-700">{SITE_NAME}</span>
            <Link href="/" className="hover:text-emerald-700">অ্যাপ</Link>
            <Link href="/guide/english-speaking-25-din" className="hover:text-emerald-700">২৫ দিনে স্পিকিং</Link>
            <Link href="/guide/ielts-band-7-roadmap" className="hover:text-emerald-700">IELTS ব্যান্ড ৭</Link>
            <Link href="/guide/chakrir-interview-english" className="hover:text-emerald-700">ইন্টারভিউ ইংরেজি</Link>
            <Link href="/learn" className="hover:text-emerald-700">গ্রামার লেসন</Link>
          </div>
          <p className="mt-3 text-xs leading-5 text-stone-400">
            বাংলায় ইংরেজি শেখার ফ্রি গাইড, রোডম্যাপ ও প্র্যাকটিস অ্যাপ।
          </p>
        </div>
      </footer>
    </div>
  );
}
