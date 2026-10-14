import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from "@/i18n/config";

// Trilingual message catalog for API errors / warnings / client fallbacks.
//
// WHY: every API route used to hardcode Bengali messages, so a Hindi or
// English user saw Bengali errors they couldn't read. Now each route reads
// the user's UI-language cookie (bolo_locale — same cookie next-intl uses)
// and answers in the language the user actually selected.
//
// The learning content itself (English words, sentences, stories) stays
// English — only the "explaining" text is localized, mirroring the AI
// language policy in /api/ai.

export type ApiLocale = Locale;

/** Server-side: resolve the request's UI locale from the locale cookie. */
export function reqLocale(req: NextRequest): ApiLocale {
  const raw = req.cookies.get(LOCALE_COOKIE)?.value;
  return isLocale(raw) ? raw : defaultLocale;
}

/** Client-side: read the same locale cookie from document.cookie. */
export function clientLocale(): ApiLocale {
  if (typeof document === "undefined") return defaultLocale;
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}=([^;]*)`));
  const raw = m?.[1] ? decodeURIComponent(m[1]) : null;
  return isLocale(raw) ? raw : defaultLocale;
}

type Catalog = Record<ApiLocale, string>;

const M = {
  /* ── auth ── */
  rateLimited: {
    en: "Too many requests — please try again in about a minute.",
    bn: "অনেক দ্রুত অনুরোধ — প্রায় এক মিনিট পর আবার চেষ্টা করুন।",
    hi: "बहुत तेज़ अनुरोध — करीब एक मिनट बाद फिर कोशिश करें।",
  },
  invalidEmail: {
    en: "Enter a valid email (e.g. name@gmail.com).",
    bn: "সঠিক ইমেইল দিন (যেমন: name@gmail.com)।",
    hi: "एक सही ईमेल डालें (जैसे: name@gmail.com)।",
  },
  weakPassword: {
    en: "Password must be at least 6 characters.",
    bn: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।",
    hi: "पासवर्ड कम से कम ६ अक्षरों का होना चाहिए।",
  },
  emailTaken: {
    en: "An account with this email already exists — please log in.",
    bn: "এই ইমেইলে আগেই অ্যাকাউন্ট খোলা আছে — লগইন করুন।",
    hi: "इस ईमेल पर पहले से अकाउंट है — कृपया लॉगिन करें।",
  },
  missingCredentials: {
    en: "Enter your email and password.",
    bn: "ইমেইল ও পাসওয়ার্ড দিন।",
    hi: "ईमेल और पासवर्ड डालें।",
  },
  wrongCredentials: {
    en: "Wrong email or password.",
    bn: "ইমেইল বা পাসওয়ার্ড ভুল।",
    hi: "ईमेल या पासवर्ड गलत है।",
  },

  /* ── settings / config / storage ── */
  keyBadFormat: {
    en: "The key wasn't copied fully or is wrong — open the key in AI Studio, press the COPY icon and paste it again.",
    bn: "কীটি সম্পূর্ণ কপি হয়নি বা ভুল — AI Studio-তে কী-টি খুলে COPY আইকনে চাপ দিয়ে আবার পেস্ট করুন।",
    hi: "की पूरी कॉपी नहीं हुई या गलत है — AI Studio में की खोलें, COPY आइकन दबाकर दोबारा पेस्ट करें।",
  },
  keyUnverified: {
    en: "Key saved, but it couldn't be verified — {reason}",
    bn: "কী সেভ হয়েছে, তবে যাচাই করা যায়নি — {reason}",
    hi: "की सेव हो गई, पर सत्यापित नहीं हो सकी — {reason}",
  },
  dbNotConfigured: {
    en: "The server database isn't configured yet — Vercel Dashboard → your Project → Settings → Environment Variables: add TURSO_DATABASE_URL and TURSO_AUTH_TOKEN, then Redeploy. Keys will save after that.",
    bn: "সার্ভারের ডাটাবেস এখনো কনফিগার করা হয়নি — Vercel Dashboard → আপনার Project → Settings → Environment Variables-এ TURSO_DATABASE_URL ও TURSO_AUTH_TOKEN যোগ করে Redeploy দিন। এর পরে কী সেভ হবে।",
    hi: "सर्वर डेटाबेस अभी कॉन्फ़िगर नहीं है — Vercel Dashboard → आपका Project → Settings → Environment Variables में TURSO_DATABASE_URL और TURSO_AUTH_TOKEN जोड़कर Redeploy करें। उसके बाद की सेव होगी।",
  },
  dbConnectFailed: {
    en: "Can't connect to the server database — please try again in a moment.",
    bn: "সার্ভারের ডাটাবেসে সংযোগ করা যাচ্ছে না — কিছুক্ষণ পর আবার চেষ্টা করুন।",
    hi: "सर्वर डेटाबेस से कनेक्ट नहीं हो पा रहा है — कुछ देर बाद फिर कोशिश करें।",
  },

  /* ── AI features ── */
  wordRequired: {
    en: "Type a word first.",
    bn: "শব্দ লিখুন।",
    hi: "पहले एक शब्द लिखें।",
  },
  quizNeedsWords: {
    en: "Save at least 3 words to take a quiz.",
    bn: "কুইজের জন্য অন্তত ৩টি শব্দ সেভ করুন।",
    hi: "क्विज़ के लिए कम से कम ३ शब्द सेव करें।",
  },
  analysisNeedsSentences: {
    en: "Say at least 2 sentences for the analysis.",
    bn: "বিশ্লেষণের জন্য অন্তত ২টি বাক্য বলুন।",
    hi: "विश्लेषण के लिए कम से कम २ वाक्य बोलें।",
  },
  aiFailed: {
    en: "AI call failed.",
    bn: "AI কল ব্যর্থ হয়েছে।",
    hi: "AI कॉल विफल हो गया।",
  },
  aiFailedReason: {
    en: "AI call failed: {reason}",
    bn: "AI কল ব্যর্থ: {reason}",
    hi: "AI कॉल विफल: {reason}",
  },
  aiNetwork: {
    en: "AI call failed — check your internet connection.",
    bn: "AI কল ব্যর্থ হয়েছে — ইন্টারনেট সংযোগ চেক করুন।",
    hi: "AI कॉल विफल — इंटरनेट कनेक्शन जाँचें।",
  },
  badFormat: {
    en: "The AI replied in a wrong format — please try again.",
    bn: "AI একটি ভুল ফরম্যাটে উত্তর দিয়েছে — আবার চেষ্টা করুন।",
    hi: "AI ने गलत फॉर्मैट में जवाब दिया — फिर कोशिश करें।",
  },
  empty: {
    en: "The AI returned an empty answer — please try again.",
    bn: "AI খালি উত্তর দিয়েছে, আবার চেষ্টা করুন।",
    hi: "AI ने खाली जवाब दिया — फिर कोशिश करें।",
  },
  safety: {
    en: "The AI can't answer this due to its safety policy — try asking differently.",
    bn: "AI নিরাপত্তা নীতির কারণে এই বিষয়ে উত্তর দিতে পারছে না — ভিন্নভাবে আবার চেষ্টা করুন।",
    hi: "AI सुरक्षा नीति के कारण इस विषय पर जवाब नहीं दे पा रहा — दूसरे तरीके से पूछें।",
  },
  noKey: {
    en: "Your Gemini API key isn't set yet — add it in Settings.",
    bn: "আপনার Gemini API Key সেট করা নেই। Settings-এ গিয়ে কী যোগ করুন।",
    hi: "आपकी Gemini API Key अभी सेट नहीं है — Settings में जाकर की जोड़ें।",
  },
  keyUnreadable: {
    en: "Your API key couldn't be read — open Settings and save it again.",
    bn: "আপনার API Key পড়া যায়নি — Settings-এ গিয়ে আবার সেভ করুন।",
    hi: "आपकी API Key पढ़ी नहीं जा सकी — Settings में जाकर दोबारा सेव करें।",
  },
  badKey: {
    en: "The API key isn't valid or has expired. Open Settings and enter a new key.",
    bn: "API Key সঠিক নয় বা বাতিল হয়ে গেছে। Settings-এ গিয়ে নতুন কী দিন।",
    hi: "API Key सही नहीं है या समाप्त हो गई है। Settings में जाकर नई की डालें।",
  },
  quota: {
    en: "Your Gemini quota is used up — please try again later.",
    bn: "আপনার Gemini কোটা শেষ — কিছুক্ষণ পর আবার চেষ্টা করুন।",
    hi: "आपका Gemini कोटा खत्म हो गया — कुछ देर बाद फिर कोशिश करें।",
  },
  geminiServer: {
    en: "Google Gemini server problem — please try again later.",
    bn: "Google Gemini সার্ভারে সমস্যা, একটু পরে চেষ্টা করুন।",
    hi: "Google Gemini सर्वर में समस्या — कुछ देर बाद कोशिश करें।",
  },

  /* ── generic params / validation ── */
  deviceIdRequired: {
    en: "Device id required — please refresh the page and try again.",
    bn: "ডিভাইস আইডি দরকার — পেজ রিফ্রেশ করে আবার চেষ্টা করুন।",
    hi: "डिवाइस आईडी चाहिए — पेज रिफ्रेश करके फिर कोशिश करें।",
  },
  nothingToUpdate: {
    en: "Nothing to update.",
    bn: "আপডেট করার কিছু নেই।",
    hi: "अपडेट करने के लिए कुछ नहीं है।",
  },
  unknownFeature: {
    en: "Unknown feature: {feature}",
    bn: "অজানা ফিচার: {feature}",
    hi: "अज्ञात फ़ीचर: {feature}",
  },
  paramsRequired: {
    en: "Missing required parameters.",
    bn: "প্রয়োজনীয় তথ্য অনুপস্থিত।",
    hi: "आवश्यक जानकारी गायब है।",
  },
  signalInvalidType: {
    en: "Invalid signal type.",
    bn: "অবৈধ সিগন্যাল টাইপ।",
    hi: "अमान्य सिग्नल प्रकार।",
  },
  signalRoomClosed: {
    en: "This call room has already closed.",
    bn: "এই কল রুমটি ইতিমধ্যে বন্ধ।",
    hi: "यह कॉल रूम पहले ही बंद हो चुकी है।",
  },
  notInRoom: {
    en: "You're not in this room.",
    bn: "আপনি এই রুমে নেই।",
    hi: "आप इस रूम में नहीं हैं।",
  },
  learnerName: {
    en: "Learner",
    bn: "শিক্ষার্থী",
    hi: "शिक्षार्थी",
  },

  /* ── storage pool (site owner) ── */
  storageAdminRequired: {
    en: "Storage admin token missing or wrong — set STORAGE_ADMIN_TOKEN and try again.",
    bn: "স্টোরেজ অ্যাডমিন টোকেন নেই বা ভুল — STORAGE_ADMIN_TOKEN সেট করে আবার চেষ্টা করুন।",
    hi: "स्टोरेज एडमिन टोकन गायब या गलत — STORAGE_ADMIN_TOKEN सेट करें और फिर कोशिश करें।",
  },
  storageFieldsRequired: {
    en: "Fill every field: label, endpoint, bucket, access key, secret key, public URL.",
    bn: "সব ঘর পূরণ করুন: নাম, endpoint, bucket, access key, secret key, পাবলিক URL।",
    hi: "सभी फ़ील्ड भरें: label, endpoint, bucket, access key, secret key, public URL.",
  },
  storageHttpsRequired: {
    en: "Endpoint and public URL must start with https://",
    bn: "Endpoint এবং পাবলিক URL অবশ্যই https:// দিয়ে শুরু হবে।",
    hi: "Endpoint और public URL https:// से शुरू होने चाहिए।",
  },
  storageNoOther: {
    en: "No other account in the pool to switch to — add one first.",
    bn: "পুলে অন্য কোনো অ্যাকাউন্ট নেই — আগে একটি যোগ করুন।",
    hi: "पूल में बदलने के लिए कोई दूसरा अकाउंट नहीं — पहले एक जोड़ें।",
  },
  mediaNotFound: {
    en: "This media file does not exist on the site storage.",
    bn: "এই মিডিয়া ফাইলটি সাইটের স্টোরেজে নেই।",
    hi: "यह मीडिया फ़ाइल साइट के स्टोरेज में नहीं है।",
  },
  unknownAction: {
    en: "Unknown action.",
    bn: "অজানা কাজ।",
    hi: "अज्ञात कार्य।",
  },
  turnFieldsRequired: {
    en: "Fill every field: name, TURN Token ID, API token.",
    bn: "সব ঘর পূরণ করুন: নাম, TURN Token ID, API token।",
    hi: "सभी फ़ील्ड भरें: नाम, TURN Token ID, API token.",
  },
  turnNoOther: {
    en: "No other TURN key in the pool — add one first.",
    bn: "পুলে অন্য কোনো TURN কী নেই — আগে একটি যোগ করুন।",
    hi: "पूल में कोई दूसरी TURN key नहीं — पहले एक जोड़ें।",
  },

  /* ── video call ── */
  roomCodeRequired: {
    en: "Enter the room code.",
    bn: "রুম কোড দিন।",
    hi: "रूम कोड डालें।",
  },
  roomNotFound: {
    en: "No open room with this code — double-check the code.",
    bn: "এই কোডের কোনো খোলা রুম নেই — কোড মিলিয়ে দেখুন।",
    hi: "इस कोड का कोई खुला रूम नहीं — कोड दोबारा जाँचें।",
  },
  roomFull: {
    en: "The room is full.",
    bn: "রুমটি পূর্ণ হয়ে গেছে।",
    hi: "रूम भर चुकी है।",
  },
  alreadyInRoom: {
    en: "You're already in this room (another tab).",
    bn: "আপনি ইতিমধ্যে এই রুমে আছেন (অন্য ট্যাব)।",
    hi: "आप पहले से इस रूम में हैं (दूसरा टैब)।",
  },
  joinFailed: {
    en: "Couldn't join the room — please try again.",
    bn: "রুমে যোগ দেওয়া যায়নি — আবার চেষ্টা করুন।",
    hi: "रूम में शामिल नहीं हो सके — फिर कोशिश करें।",
  },
  joinFailedStatus: {
    en: "Couldn't join the room ({status}).",
    bn: "রুমে যোগ দেওয়া যায়নি ({status})।",
    hi: "रूम में शामिल नहीं हो सके ({status})।",
  },

  /* ── generic client fallbacks ── */
  serverProblem: {
    en: "Server problem ({status})",
    bn: "সার্ভার সমস্যা ({status})",
    hi: "सर्वर समस्या ({status})",
  },
  networkServer: {
    en: "Can't reach the server — check your internet connection.",
    bn: "সার্ভারে পৌঁছানো যাচ্ছে না — ইন্টারনেট সংযোগ চেক করুন।",
    hi: "सर्वर तक पहुँच नहीं पा रहे — इंटरनेट कनेक्शन जाँचें।",
  },
  unexpectedResponse: {
    en: "The server sent an unexpected reply — refresh the page and try again.",
    bn: "সার্ভার অপ্রত্যাশিত উত্তর দিয়েছে — পেজ রিফ্রেশ করে আবার চেষ্টা করুন।",
    hi: "सर्वर ने अप्रत्याशित जवाब भेजा — पेज रिफ्रेश करके फिर कोशिश करें।",
  },
  connectFailed: {
    en: "Can't connect to the server — check your internet connection and refresh the page.",
    bn: "সার্ভারের সাথে সংযোগ করা যাচ্ছে না — ইন্টারনেট সংযোগ চেক করে পেজ রিফ্রেশ করুন।",
    hi: "सर्वर से कनेक्ट नहीं हो पा रहा — इंटरनेट जाँचकर पेज रिफ्रेश करें।",
  },

  /* ── speech recognition ── */
  micPermission: {
    en: "Microphone permission is needed — allow it from the browser settings.",
    bn: "মাইক্রোফোনের অনুমতি দরকার — ব্রাউজার সেটিংস থেকে অনুমতি দিন।",
    hi: "माइक्रोफ़ोन की अनुमति चाहिए — ब्राउज़र सेटिंग्स से अनुमति दें।",
  },
  micNotFound: {
    en: "No microphone found.",
    bn: "মাইক্রোফোন পাওয়া যাচ্ছে না।",
    hi: "माइक्रोफ़ोन नहीं मिला।",
  },
  speechUnsupported: {
    en: "Speech recognition isn't supported in this browser — use Chrome or Edge.",
    bn: "এই ব্রাউজারে স্পিচ রিকগনিশন সাপোর্ট নেই। Chrome বা Edge ব্যবহার করুন।",
    hi: "इस ब्राउज़र में स्पीच रिकग्निशन सपोर्ट नहीं है। Chrome या Edge इस्तेमाल करें।",
  },

  /* ── library (owner-authored content) ── */
  libraryAdminRequired: {
    en: "Admin token missing or wrong — set ADMIN_TOKEN (or STORAGE_ADMIN_TOKEN) and try again.",
    bn: "অ্যাডমিন টোকেন নেই বা ভুল — ADMIN_TOKEN (অথবা STORAGE_ADMIN_TOKEN) সেট করে আবার চেষ্টা করুন।",
    hi: "एडमिन टोकन गायब या गलत — ADMIN_TOKEN (या STORAGE_ADMIN_TOKEN) सेट करें और फिर कोशिश करें।",
  },
  libraryKindInvalid: {
    en: "Unknown library kind — use vocab, grammar or listening.",
    bn: "অজানা লাইব্রেরি ধরন — vocab, grammar অথবা listening হতে হবে।",
    hi: "अज्ञात लाइब्रेरी प्रकार — vocab, grammar या listening होना चाहिए।",
  },
  libraryEntryRequired: {
    en: "Entry data missing — send the full entry object.",
    bn: "এন্ট্রির তথ্য নেই — সম্পূর্ণ entry অবজেক্ট পাঠান।",
    hi: "एंट्री डेटा गायब है — पूरा entry ऑब्जेक्ट भेजें।",
  },
  libraryWordRequired: {
    en: "The word field is required.",
    bn: "শব্দ (word) ঘরটি পূরণ করুন।",
    hi: "शब्द (word) फ़ील्ड भरें।",
  },
  libraryTopicRequired: {
    en: "The topic and title fields are required.",
    bn: "topic এবং title ঘর দুটি পূরণ করুন।",
    hi: "topic और title फ़ील्ड भरें।",
  },
  libraryDataInvalid: {
    en: "Content data is invalid — check the required fields (title, sections, paragraphs…).",
    bn: "কনটেন্টের তথ্য সঠিক নয় — দরকারি ঘরগুলো (title, sections, paragraphs…) দেখে নিন।",
    hi: "कंटेंट डेटा अमान्य है — आवश्यक फ़ील्ड (title, sections, paragraphs…) जांचें।",
  },
  libraryIdRequired: {
    en: "Entry id is required.",
    bn: "এন্ট্রির id দরকার।",
    hi: "एंट्री की id चाहिए।",
  },
  libraryNotFound: {
    en: "This library entry does not exist (anymore).",
    bn: "এই লাইব্রেরি এন্ট্রিটি নেই (বা আর নেই)।",
    hi: "यह लाइब्रेरी एंट्री मौजूद नहीं है (अब नहीं है)।",
  },
  sentenceRequired: {
    en: "Write a sentence first, then check it.",
    bn: "আগে একটি বাক্য লিখুন, তারপর চেক করুন।",
    hi: "पहले एक वाक्य लिखें, फिर जांचें।",
  },
  questionRequired: {
    en: "Write your question first.",
    bn: "আগে আপনার প্রশ্ন লিখুন।",
    hi: "पहले अपना प्रश्न लिखें।",
  },
} satisfies Record<string, Catalog>;

export type ApiMsgKey = keyof typeof M;

/** Localize a catalog message; {vars} fill {placeholders}. */
export function apiMsg(
  locale: ApiLocale,
  key: ApiMsgKey,
  vars?: Record<string, string | number>
): string {
  const tpl = M[key][locale] ?? M[key][defaultLocale];
  if (!vars) return tpl;
  return tpl.replace(/\{(\w+)\}/g, (_, k: string) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`
  );
}

/** Client convenience: localize using the cookie locale. */
export function clientMsg(key: ApiMsgKey, vars?: Record<string, string | number>): string {
  return apiMsg(clientLocale(), key, vars);
}
