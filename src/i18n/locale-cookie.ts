import { LOCALE_COOKIE } from "./config";

// Set the locale cookie (client-side). Kept outside components so it can be
// called from event handlers cleanly.
export function setLocaleCookie(locale: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}
