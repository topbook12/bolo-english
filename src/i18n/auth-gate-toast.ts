// Registration-toast strings keyed by the language the learner JUST picked
// (polish pass). The login gate's page locale is the pre-signup cookie
// (browser default on first visit — usually en), but this toast fires at the
// exact moment the account language changes, so it must speak the language
// the learner selected. Mirrors messages/sections/auth.*.json keys
// (gateWelcome / gateLangChosen) — keep both in sync.
import type { Locale } from "@/i18n/config";

export const GATE_TOAST: Record<Locale, { title: string; desc: string }> = {
  bn: {
    title: "অ্যাকাউন্ট তৈরি হয়েছে — শেখা শুরু করুন!",
    desc: "ভাষা বাংলা — অ্যাকাউন্টে লক করা হয়েছে",
  },
  hi: {
    title: "अकाउंट बन गया — सीखना शुरू करें!",
    desc: "भाषा हिन्दी — आपके अकाउंट पर लॉक है",
  },
  en: {
    title: "Account created — let's start learning!",
    desc: "Language: English — locked to your account",
  },
};
