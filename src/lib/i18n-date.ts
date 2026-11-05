// Shared, Intl-free localized date formatting (deterministic on server and
// client — no hydration mismatch). Extracted from the D47 guide registry so
// any client component (e.g. vocab daily strip) can format a date in the
// learner's language without importing the heavy guide data.

import type { Locale } from "@/i18n/config";

const bnDigits = "০১২৩৪৫৬৭৮৯";

/** "2026-11-05" → "৫ নভেম্বর ২০২৬" / "5 November 2026" / "५ नवंबर २०२६" */
export function localizedDate(iso: string, lang: Locale): string {
  const [y, m, d] = iso.split("-").map((n) => parseInt(n, 10));
  if (!y || !m || !d) return iso; // malformed input → echo back unchanged
  const months: Record<Locale, string[]> = {
    bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    hi: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
  };
  const digits: Record<Locale, string> = { bn: bnDigits, en: "0123456789", hi: "०१२३४५६७८९" };
  const toDigits = (n: number) =>
    String(n)
      .split("")
      .map((c) => digits[lang][Number(c)] ?? c)
      .join("");
  return `${toDigits(d)} ${months[lang][m - 1]} ${toDigits(y)}`;
}
