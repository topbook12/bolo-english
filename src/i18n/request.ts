import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from "./config";
import { loadMessages } from "./messages";

export default getRequestConfig(async () => {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  return {
    locale,
    messages: loadMessages(locale),
    timeZone: "Asia/Dhaka",
    now: new Date(),
  };
});
