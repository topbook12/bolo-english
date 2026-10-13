"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";

// Locale-aware number formatting — renders Bengali numerals (২/৬) for the bn UI
// and Devanagari (२/६) for hi, so counters match the translated strings.
// Locale always comes from next-intl (bn/en/hi), so the constructor is safe.
export function useLocaleNum(): (n: number) => string {
  const locale = useLocale();
  return useMemo(
    () => (n: number) => new Intl.NumberFormat(locale).format(n),
    [locale]
  );
}
