"use client";

// D47 — guide article body with the trilingual (bn/en/hi) language switcher.
//
// The initial render is Bengali on both server and client (no hydration
// mismatch, crawlers index bn), and switching re-renders the same bundled
// data in English/Hindi instantly — no refetch, no layout shift. Every CTA
// band deep-links into the app via /?open=<tab> (consumed by AppShell).

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Compass,
  Languages,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import type { Guide, GuideLang, LocalizedText } from "@/lib/guides/types";
import { GUIDE_CTAS } from "@/lib/guides/cta";
import { localizedDate } from "@/lib/guides";

/** Minimal card data for the related-guides grid (all 3 languages). */
export interface GuideCardMini {
  slug: string;
  emoji: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  minutes: number;
}

const LANG_OPTIONS: { id: GuideLang; label: string }[] = [
  { id: "bn", label: "বাংলা" },
  { id: "en", label: "English" },
  { id: "hi", label: "हिन्दी" },
];

const MINUTES_LABEL: Record<GuideLang, string> = {
  bn: "মিনিটের পাঠ",
  en: "min read",
  hi: "मिनट की पढ़ाई",
};

const PUBLISHED_LABEL: Record<GuideLang, string> = {
  bn: "প্রকাশ",
  en: "Published",
  hi: "प्रकाशित",
};

const UPDATED_LABEL: Record<GuideLang, string> = {
  bn: "হালনাগাদ",
  en: "Updated",
  hi: "अपडेटेड",
};

const FAQ_TITLE: Record<GuideLang, string> = {
  bn: "সাধারণ প্রশ্ন",
  en: "Frequently asked questions",
  hi: "अक्सर पूछे जाने वाले सवाल",
};

const RELATED_TITLE: Record<GuideLang, string> = {
  bn: "আরও গাইড পড়ুন",
  en: "More guides to read",
  hi: "और गाइड पढ़ें",
};

const CTA_MAIN_TITLE: Record<GuideLang, string> = {
  bn: "পড়া শেষ — এখন প্র্যাকটিসের পালা",
  en: "Done reading — time to practise",
  hi: "पढ़ना पूरा — अब प्रैक्टिस की बारी",
};

const CTA_MAIN_DESC: Record<GuideLang, string> = {
  bn: "Bolo English অ্যাপে স্পিকিং, গ্রামার, লিসেনিং, শব্দ — সব ফ্রি। আজকের গাইডের প্রথম ধাপটি এখনই করে ফেলুন।",
  en: "Speaking, grammar, listening and vocabulary in the Bolo English app — all free. Do the first step from today's guide right now.",
  hi: "Bolo English ऐप में स्पीकिंग, ग्रामर, लिसनिंग, वोकैबुलरी — सब मुफ़्त। आज की गाइड का पहला कदम अभी उठाएँ।",
};

const CTA_MAIN_BUTTON: Record<GuideLang, string> = {
  bn: "ফ্রি অ্যাপ খুলুন",
  en: "Open the free app",
  hi: "फ्री ऐप खोलें",
};

const LEARN_BAND_TITLE: Record<GuideLang, string> = {
  bn: "ফ্রি গ্রামার লেসনও আছে",
  en: "Free grammar lessons too",
  hi: "फ्री ग्रामर लेसन भी हैं",
};

export default function GuideBody({
  guide,
  minutes,
  related,
}: {
  guide: Guide;
  /** Reading time (pre-computed server-side from the bn fields). */
  minutes: number;
  related: GuideCardMini[];
}) {
  const [lang, setLang] = useState<GuideLang>("bn");
  const { title, excerpt, sections, faqs } = guide;

  return (
    <>
      {/* Language switcher — initial state bn matches the server render */}
      <div className="mb-4 flex items-center justify-end gap-1.5">
        <Languages className="size-4 text-stone-400" aria-hidden />
        <div role="group" aria-label="ভাষা নির্বাচন" className="flex overflow-hidden rounded-full border border-stone-200 bg-white p-0.5 shadow-sm">
          {LANG_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setLang(opt.id)}
              aria-pressed={lang === opt.id}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                lang === opt.id
                  ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow"
                  : "text-stone-600 hover:text-emerald-700"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700">
          <Compass className="size-3.5" /> {lang === "en" ? "Guide" : lang === "hi" ? "गाइड" : "গাইড"}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
          <Clock3 className="size-3.5" /> {minutes} {MINUTES_LABEL[lang]}
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
        {title[lang]}
      </h1>
      <p className="mt-3 text-[15px] leading-7 text-stone-700">{excerpt[lang]}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5" />
          {PUBLISHED_LABEL[lang]}: {localizedDate(guide.publishedAt, lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="size-3.5" />
          {UPDATED_LABEL[lang]}: {localizedDate(guide.updatedAt, lang)}
        </span>
      </div>

      {/* Sections */}
      <article className="mt-8 space-y-9">
        {sections.map((section, si) => {
          const cta = section.cta ? GUIDE_CTAS[section.cta] : null;
          return (
            <section key={si} aria-labelledby={`g-sec-${si}`}>
              <h2
                id={`g-sec-${si}`}
                className="flex items-center gap-2 text-lg font-bold text-stone-900"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white">
                  {si + 1}
                </span>
                {section.heading[lang]}
              </h2>
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="mt-3 text-[15px] leading-7 text-stone-700">
                  {p[lang]}
                </p>
              ))}
              {section.steps && (
                <ol className="mt-4 space-y-2.5">
                  {section.steps.map((st, ti) => (
                    <li
                      key={ti}
                      className="flex items-start gap-2.5 rounded-xl border border-stone-200 bg-white p-3.5 text-sm leading-6 text-stone-700 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      <span>{st[lang]}</span>
                    </li>
                  ))}
                </ol>
              )}
              {cta && (
                <Link
                  href={cta.href}
                  className="group mt-4 flex items-center gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-4 shadow-sm transition hover:border-emerald-400 hover:bg-emerald-50"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm">
                    <cta.icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-emerald-900">
                      {cta.label[lang]}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-5 text-emerald-800/80">
                      {cta.desc[lang]}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-emerald-600 transition group-hover:translate-x-0.5" aria-hidden />
                </Link>
              )}
            </section>
          );
        })}
      </article>

      {/* FAQ */}
      <section className="mt-10" aria-labelledby="guide-faq">
        <h2 id="guide-faq" className="flex items-center gap-2 text-lg font-bold text-stone-900">
          <MessageCircleQuestion className="size-5 text-emerald-600" />
          {FAQ_TITLE[lang]}
        </h2>
        <div className="mt-4 space-y-2.5">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-stone-800 marker:hidden">
                {f.q[lang]}
                <ChevronDown className="size-4 shrink-0 text-stone-400 transition group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-2.5 border-t border-stone-100 pt-2.5 text-sm leading-6 text-stone-600">
                {f.a[lang]}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Main app CTA */}
      <section className="mt-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-md">
        <h2 className="text-lg font-bold">{CTA_MAIN_TITLE[lang]}</h2>
        <p className="mt-1.5 text-sm leading-6 text-emerald-50">{CTA_MAIN_DESC[lang]}</p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-emerald-700 shadow transition hover:bg-emerald-50"
        >
          {CTA_MAIN_BUTTON[lang]}
          <ArrowRight className="size-4" />
        </Link>
      </section>

      {/* Related guides — internal linking for the guide cluster */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-base font-bold text-stone-900">{RELATED_TITLE[lang]}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/guide/${r.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-emerald-400"
              >
                <span className="text-xl" aria-hidden>{r.emoji}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-stone-800 group-hover:text-emerald-800">
                    {r.title[lang]}
                  </span>
                  <span className="mt-1 flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                    <Clock3 className="size-3" /> {r.minutes} {MINUTES_LABEL[lang]}
                  </span>
                </span>
                <ChevronRight className="mt-1 size-4 shrink-0 text-stone-300 group-hover:text-emerald-600" aria-hidden />
              </Link>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-stone-800">{LEARN_BAND_TITLE[lang]}</p>
            <Link
              href="/learn"
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:underline"
            >
              {lang === "en" ? "Browse 36 grammar lessons" : lang === "hi" ? "36 ग्रामर लेसन देखें" : "৩৬টি গ্রামার লেসন দেখুন"}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
