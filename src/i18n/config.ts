// i18n configuration: English (default, international) · Bangla · Hindi
export const locales = ["en", "bn", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "bolo_locale";

export const localeMeta: Record<Locale, { label: string; flag: string; htmlLang: string }> = {
  bn: { label: "বাংলা", flag: "🇧🇩", htmlLang: "bn" },
  en: { label: "English", flag: "🇬🇧", htmlLang: "en" },
  hi: { label: "हिन्दी", flag: "🇮🇳", htmlLang: "hi" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
