// D46 SEO — /learn hub: the public index of every grammar landing page.
// Internal-linking root for the topic cluster (every /learn/<slug> page
// links back here, and this page links to every topic once).

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, ChevronRight, GraduationCap } from "lucide-react";
import { allLearnPages } from "@/lib/learn-slugs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `বাংলায় ইংরেজি গ্রামার — সব ফ্রি লেসন | ${SITE_NAME}`,
  description:
    "টেন্স, আর্টিকেল, প্রিপজিশন, কন্ডিশনালসহ ৩৬টি টপিকের সহজ বাংলা গ্রামার লেসন — প্রতিটিতে ভুল→সঠিক উদাহরণ ও কুইজ। কোনো লগইন লাগে না।",
  alternates: { canonical: `${SITE_URL}/learn` },
  openGraph: {
    title: `বাংলায় ইংরেজি গ্রামার — সব ফ্রি লেসন | ${SITE_NAME}`,
    description:
      "টেন্স, আর্টিকেল, প্রিপজিশন, কন্ডিশনালসহ ৩৬টি টপিকের সহজ বাংলা গ্রামার লেসন।",
    url: `${SITE_URL}/learn`,
    type: "website",
    siteName: SITE_NAME,
    locale: "bn_BD",
  },
};

export default function LearnHubPage() {
  const pages = allLearnPages();
  const foundation = pages.filter((p) => !p.advanced);
  const advanced = pages.filter((p) => p.advanced);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "বাংলায় ইংরেজি গ্রামার লেসন",
    inLanguage: "bn",
    url: `${SITE_URL}/learn`,
    hasPart: pages.map((p) => ({
      "@type": "Article",
      headline: p.lesson.title,
      url: `${SITE_URL}/learn/${p.slug}`,
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
          <Link href="/learn" className="flex items-center gap-2 font-bold text-stone-900">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <BookOpenCheck className="size-4" />
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
          <span className="text-stone-700 font-medium">গ্রামার লেসন</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          বাংলায় ইংরেজি গ্রামার — {pages.length}টি ফ্রি লেসন
        </h1>
        <p className="mt-3 text-[15px] leading-7 text-stone-700">
          একেকটি লেসনে আছে সহজ বাংলা ব্যাখ্যা, ভুল → সঠিক উদাহরণ আর মনে রাখার
          টিপস। পছন্দের টপিকে ক্লিক করে এখনই পড়া শুরু করুন — কোনো লগইন বা
          পেমেন্ট লাগে না।
        </p>

        {[
          { title: "ভিত্তির টপিক", sub: "শুরু করার সেরা জায়গা — A2 লেভেল", list: foundation },
          { title: "অ্যাডভান্সড টপিক", sub: "C1-লেভেল — nuance, style, academic", list: advanced },
        ].map((group) => (
          <section key={group.title} className="mt-8" aria-labelledby={group.title}>
            <h2 id={group.title} className="text-lg font-bold text-stone-900">
              {group.title}
              <span className="ml-2 text-sm font-normal text-stone-500">{group.sub}</span>
            </h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {group.list.map((p) => (
                <Link
                  key={p.slug}
                  href={`/learn/${p.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition hover:border-emerald-400"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-stone-800 group-hover:text-emerald-800">
                      {p.lesson.title}
                    </span>
                    <span className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                      <GraduationCap className="size-3" />
                      {p.advanced ? "অ্যাডভান্সড" : "বিগিনার"}
                    </span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-stone-400 group-hover:text-emerald-600" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="mt-auto border-t border-stone-200/80 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 text-sm text-stone-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-semibold text-stone-700">{SITE_NAME}</span>
            <Link href="/" className="hover:text-emerald-700">অ্যাপ</Link>
            <Link href="/guide" className="hover:text-emerald-700">গাইড</Link>
            <Link href="/guide/english-speaking-25-din" className="hover:text-emerald-700">২৫ দিনে স্পিকিং</Link>
            <Link href="/learn/tenses" className="hover:text-emerald-700">টেন্স</Link>
            <Link href="/learn/articles" className="hover:text-emerald-700">আর্টিকেল</Link>
            <Link href="/learn/conditionals" className="hover:text-emerald-700">কন্ডিশনাল</Link>
          </div>
          <p className="mt-3 text-xs leading-5 text-stone-400">
            বাংলায় সহজ ইংরেজি গ্রামার — ফ্রি লেসন, কুইজ ও প্র্যাকটিস।
          </p>
        </div>
      </footer>
    </div>
  );
}
