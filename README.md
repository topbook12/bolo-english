# 🎤 Bolo English — নির্ভয়ে ইংরেজি বলুন

বাংলাভাষী শিক্ষার্থীদের জন্য **১০০% ফ্রি** ইংরেজি প্র্যাকটিস PWA (Progressive Web App)।
মোবাইল-ফার্স্ট ডিজাইন, ৩টি ভাষা (বাংলা 🇧🇩 · English 🇬🇧 · हिन्दी 🇮🇳), এবং AI-চালিত প্রিমিয়াম ফিচার।

## ✨ ফিচারসমূহ

| ফিচার | বর্ণনা |
|---|---|
| 📹 **১:১ ভিডিও কল** | অন্য শিক্ষার্থীর সাথে সাথে ম্যাচ হয়ে ইংরেজিতে কথা বলুন (WebRTC, P2P — ফ্রি) |
| 👥 **গ্রুপ কনভারসেশন** | কোড শেয়ার করে ৪ জন পর্যন্ত রুমে প্র্যাকটিস |
| ✨ **লাইভ AI সাবটাইটেল** | কথা বললেই সাবটাইটেল ধরা পড়ে, ভুল হলে লাইভ সংশোধন |
| 📊 **AI কল-বিশ্লেষণ** | কল শেষে পুরো ডায়ালগ বিশ্লেষণ — ফ্লুয়েন্সি/গ্রামার/ভোকাবুলারি স্কোর, Gap ডিটেকশন, উন্নতির সাজেশন |
| 🤖 **AI পার্টনার** | কেউ না থাকলে AI "রাহা"-র সাথে ভয়েস + টেক্সট কথোপকথন |
| 📚 **গ্রামার** | টপিক-ভিত্তিক লেসন + কুইজ (বাংলায় ব্যাখ্যা) |
| 📅 **ডেইলি ভোকাবুলারি** | প্রতিদিন ৩টি বাস্তব-জীবনের শব্দ + উচ্চারণ + ব্যবহার |
| 🎧 **লিসেনিং** | AI গল্প শুনুন (ভয়েস স্পিড কন্ট্রোল) + কম্প্রিহেনশন কুইজ |
| 🔥 **প্রোগ্রেস** | স্ট্রিক, গ্রাফ, সেশন-হিস্ট্রি, প্র্যাকটিস লগ |
| 👤 **স্টুডেন্ট লগইন** | ইমেইল+পাসওয়ার্ড অ্যাকাউন্ট — ডেটা ডিভাইস-জুড়ে সিঙ্ক |
| 🌐 **ত্রিভাষা UI** | বাংলা / English / हिन्दी — এক ক্লিকে বদলান |
| 📲 **PWA ইনস্টল** | ফোনে অ্যাপের মতো ইনস্টল করে ব্যবহার করুন |

## 💰 কস্ট মডেল: কেন এটা চিরকাল ফ্রি?

- **AI**: BYOK (Bring Your Own Key) — ইউজার নিজের **ফ্রি Gemini API Key**
  ([aistudio.google.com/apikey](https://aistudio.google.com/apikey)) Settings-এ দেয়।
  কী **AES-256-GCM-এ এনক্রিপ্টেড** থাকে, কখনো ব্রাউজারে ফেরত আসে না।
- **ডেটাবেজ**: Turso free tier · **ভিডিও কল**: P2P WebRTC (সার্ভার শুধু ছোট সিগন্যালিং মেসেজ) ·
  **সিগন্যালিং**: HTTP-polling (Vercel serverless-এ চলে, আলাদা সার্ভার লাগে না)।

## 🚀 Vercel-এ Deploy (৩ ধাপ, একদম জিরো-কনফিগ)

> আগেই দুটো জিনিস লাগবে (সবই ফ্রি):
> ① একটা **Turso** ডেটাবেজ → [app.turso.io](https://app.turso.io) থেকে খুলুন
> ② এই রিপো **import করে** Vercel-এ বসান।

1. **Vercel** ([vercel.com/new](https://vercel.com/new)) → এই GitHub রিপো **Import** করুন।
   Framework নিজেই ধরে নেবে — কিছু সেট করা লাগবে না।
2. **Environment Variables** যোগ করুন (Project → Settings → Environment Variables):
   - `TURSO_DATABASE_URL` → আপনার `libsql://...` URL
   - `TURSO_AUTH_TOKEN` → Turso database-এর token
3. **Deploy** চাপুন। ব্যস! 🎉 (schema আগেই Turso-তে push করা থাকলে আর কিছুই লাগবে না;
   নতুন ডেটাবেজ হলে নিচের কমান্ড একবার চালান)

```bash
# নতুন/ফাঁকা Turso ডেটাবেজে টেবিল তৈরি করতে (লোকাল মেশিন থেকে একবার):
TURSO_DATABASE_URL="libsql://your-db.turso.io" \
TURSO_AUTH_TOKEN="your-token" \
bun scripts/deploy-db.ts
```

### 🔐 ভ্যারিয়েবলের বিবরণ (`.env.example` দেখুন)
| ভ্যারিয়েবল | বাধ্যতামূলক? | কাজ |
|---|---|---|
| `TURSO_DATABASE_URL` | ✅ | Turso ডেটাবেজ URL |
| `TURSO_AUTH_TOKEN` | ✅ | Turso access token |
| `ENCRYPTION_SECRET` | অপশনাল | Gemini key এনক্রিপশন (অটো-ডেরাইভ হয়) |
| `AUTH_SECRET` | অপশনাল | লগইন সেশন সিক্রেট (অটো-ডেরাইভ হয়) |

## 🛠 লোকাল ডেভেলপমেন্ট

```bash
bun install          # ডিপেন্ডেন্সি
bun run db:push      # লোকাল SQLite স্কিমা
bun run dev          # http://localhost:3000
bun run lint         # ESLint
npx tsc --noEmit     # TypeScript চেক
bun tests/call-signaling-e2e.ts   # সিগন্যালিং E2E টেস্ট (dev চালু অবস্থায়)
```

## 🏗 আর্কিটেকচার

- **Next.js 16 (App Router) + TypeScript + Tailwind 4 + shadcn/ui** — মোবাইল-ফার্স্ট PWA
- **Prisma + SQLite (লোকাল) / Turso libSQL (প্রোডাকশন)** — একই কোডপাথ, `src/lib/db.ts`
- **WebRTC mesh** (Google STUN) — মিডিয়া P2P; সিগন্যালিং ডেটাবেজ-ব্যাকড HTTP polling
  (`/api/call/join|send|poll|leave`) — serverless-সামঞ্জস্যপূর্ণ
- **next-intl** — কুকি-ভিত্তিক ত্রিভাষা (URL prefix ছাড়া); মেসেজ ফাইল: `messages/`
- **AI proxy** — ইউজারের এনক্রিপ্টেড key সার্ভারে ডিক্রিপ্ট হয়ে সরাসরি Gemini API-তে যায়,
  rate-limited, রেসপন্স ক্যাশ হয় (`AiCache`)
- **Auth** — bcrypt + JWT (httpOnly cookie), লগইনে ডিভাইস-ডেটা অটো-মার্জ

## 📁 গুরুত্বপূর্ণ ফোল্ডার

```
src/app/api/        # AI proxy, auth, call signaling, vocab, progress...
src/components/     # sections/ (হোম, কথা, গ্রামার...), speaking/ (কল), shared/ (ডিজাইন সিস্টেম)
src/i18n/           # ত্রিভাষা কনফিগ + LocaleSwitcher
messages/           # bn/en/hi অনুবাদ (core + sections)
prisma/schema.prisma# ডেটাবেজ স্কিমা
scripts/deploy-db.ts# Turso-তে স্কিমা push
```

---

**Bolo English** — ভুল করতে ভয় পেয়ো না, বলতে শুরু করো! 💚
