// ─── Grammar seeds v4: INTERMEDIATE batch I1a (2 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v3-i1a.ts
// (lessons "Present Perfect vs Past Simple" + "Subject-Verb Agreement" — v3 body
// paragraphs → scannable bullet points; roadmap + emoji headings + leads + formula
// boxes added; closed-frame vs open-frame signal-word comparison table and the
// tricky-subject agreement table (কর্তা | ক্রিয়া রূপ | উদাহরণ) added;
// title/intro/tips/examples/quiz copied EXACTLY from source).
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_I1A: SeedGrammarV4Entry[] = [
  /* ── 1. Present Perfect vs Past Simple (intermediate, unit 0, sortOrder 16) ─ */
  {
    topic: "Present Perfect vs Past Simple",
    level: "intermediate",
    title: "Present Perfect vs Past Simple (Intermediate)",
    unit: 0,
    sortOrder: 16,
    data: {
      title: {
        bn: "প্রেজেন্ট পারফেক্ট বনাম পাস্ট সিম্পল (মধ্যম স্তর)",
        en: "Present Perfect vs Past Simple (Intermediate)",
        hi: "प्रेज़ेंट परफेक्ट बनाम पास्ट सिंपल (मध्यम स्तर)",
      },
      intro: {
        bn: "আমরা সবাই জানি 'আমি খেয়েছি' আর 'আমি খেয়েছিলাম' এক নয় — কিন্তু কখন have eaten আর কখন ate, এই সিদ্ধান্তেই বাঙালি শিক্ষার্থীরা সবচেয়ে বেশি হোঁচট খায়। এই পাঠে ঢোকার আগে Simple Past-এর V2 রূপ আর present perfect-এর প্রাথমিক পরিচয় (beginner স্তরের Simple Past পাঠ) পাকা থাকা দরকার; intermediate স্তরের Since vs For পাঠটাও সঙ্গে থাকলে ভালো। এখানে শিখব: শেষ হয়ে যাওয়া সময়ের ফ্রেম বনাম এখনো খোলা ফ্রেম, already/yet/just/ever/never/still-এর জায়গা, since/for-এর জুটি, খবরের perfect, When-প্রশ্নে সবসময় past simple, আর কথোপকথনে দুই কালের প্রবাহ।",
        en: "We all know 'I have eaten' and 'I ate' are not the same — yet deciding when to use have eaten and when to use ate is exactly where Bengali-speaking learners stumble most. Before entering this lesson, make sure your Simple Past V2 forms and the basic idea of the present perfect are solid (the beginner Simple Past lesson); the intermediate Since vs For lesson will also help. Here you will learn: finished vs open time frames, the placement of already/yet/just/ever/never/still, the since/for pair, the news perfect, why When-questions always take the past simple, and how the two tenses flow inside a conversation.",
        hi: "हम सब जानते हैं कि 'मैंने खाया है' और 'मैंने खाया था' एक नहीं हैं — पर have eaten कब और ate कब, यही तय करने में विद्यार्थी सबसे ज़्यादा लड़खड़ाते हैं। इस पाठ से पहले Simple Past के V2 रूप और present perfect की मूल समझ (beginner का Simple Past पाठ) पक्की होनी चाहिए; intermediate का Since vs For पाठ भी साथ रहे तो अच्छा। यहाँ सीखेंगे: बंद हो चुके बनाम अब भी खुले समय-फ्रेम, already/yet/just/ever/never/still की जगह, since/for की जोड़ी, खबरों का perfect, When-प्रश्नों में हमेशा past simple, और बातचीत में दो कालों का बहाव।",
      },
      roadmap: [
        { bn: "⏰ কাটা বনাম খোলা সময়ের ফ্রেম — সিদ্ধান্তের মূল চাবি", en: "⏰ Closed vs open time frames — the master key", hi: "⏰ बंद बनाम खुले समय-फ्रेम — निर्णय की मूल चाबी" },
        { bn: "🏗️ have/has + V3 বনাম V2 — প্রশ্ন-নেগেটিভসহ গঠন", en: "🏗️ have/has + V3 vs V2 — with questions and negatives", hi: "🏗️ have/has + V3 बनाम V2 — प्रश्न-नकार सहित" },
        { bn: "🚦 already, just, yet, ever, never, still — কোন শব্দ কোন কালে", en: "🚦 already, just, yet, ever, never, still — which word goes with which tense", hi: "🚦 already, just, yet, ever, never, still — कौन सा शब्द कौन-सा काल" },
        { bn: "⏳ since + বিন্দু, for + মাপ — perfect-এর সময়-সঙ্গী", en: "⏳ since + a point, for + a span — the perfect's time partners", hi: "⏳ since + बिंदु, for + अवधि — perfect के समय-साथी" },
        { bn: "📰 খবর perfect-এ, বিস্তার ও When-প্রশ্ন past-এ", en: "📰 News in the perfect, details and When-questions in the past", hi: "📰 खबर perfect में, विवरण और When-प्रश्न past में" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের তিন ফাঁদ আর তাদের সমাধান", en: "⚠️ The three traps for Bengali speakers and their fixes", hi: "⚠️ बांग्लाभाषी विद्यार्थियों के तीन जाल और उनके समाधान" },
        { bn: "📖 ছোট অফিস-গল্পে দুই কালের প্রবাহ", en: "📖 A short office story with both tenses flowing", hi: "📖 छोटी ऑफिस-कहानी में दो कालों का बहाव" },
        { bn: "📊 পাঁচ সূত্রে পুরো পাঠের সারমর্ম", en: "📊 The whole lesson in five formulas", hi: "📊 पाँच सूत्रों में पूरे पाठ का सार" },
      ],
      sections: [
        {
          heading: {
            bn: "⏰ কখন ব্যবহার হয় — শেষ হয়ে যাওয়া সময় বনাম এখনো খোলা সময়ের ফ্রেম",
            en: "⏰ When to use them — finished time frames vs time frames still open",
            hi: "⏰ कब इस्तेमाल होते हैं — बंद समय-फ्रेम बनाम अब भी खुले समय-फ्रेम",
          },
          lead: {
            bn: "দুটো কালই অতীতের কথা বলে — ফারাক কাজে নয়, বক্তার দেখার কোণে।",
            en: "Both tenses look back — the difference lies in the speaker's viewpoint, not the action.",
            hi: "दोनों काल अतीत की बात करते हैं — फर्क बोलने वाले के नज़रिए में।",
          },
          points: [
            { bn: "দুটো কালই অতীতের কাজ বলে — ফারাক কাজে নয়, বক্তার **দেখার কোণে**।", en: "Both tenses talk about past actions — the difference lies not in the action but in the speaker's **viewpoint**.", hi: "दोनों काल अतीत के काम बताते हैं — फर्क काम में नहीं, बोलने वाले के **दृष्टिकोण** में।" },
            { bn: "**Past simple** = কাজটা কেটে-গেছা সময়ের ফ্রেমে, এখনের সাথে সংযোগ ছিঁড়ে: yesterday, last year, in 2019, two days ago — I visited Paris in 2019।", en: "**Past simple** = the action sits inside a closed frame cut off from now: yesterday, last year, in 2019, two days ago — I visited Paris in 2019.", hi: "**Past simple** = काम कटे-गुज़रे समय-फ्रेम में, अब से कटा हुआ: yesterday, last year, in 2019, two days ago — I visited Paris in 2019।" },
            { bn: "**Present perfect** = কাজ অতীতেই, কিন্তু ফ্রেম এখনো খোলা বা ফল এখনও লেগে আছে: today, this week, ever, so far — I have visited Paris three times (এখন পর্যন্ত মোট অভিজ্ঞতা)।", en: "**Present perfect** = the action is in the past, but the frame is still open or the result still touches now: today, this week, ever, so far — I have visited Paris three times (total experience up to now).", hi: "**Present perfect** = काम अतीत में ही, पर फ्रेम अब भी खुला या नतीजा अब भी साथ: today, this week, ever, so far — I have visited Paris three times (अब तक का कुल अनुभव)।" },
            { bn: "সূত্র একটাই: বাক্যে কাটা-গেছা সময়ের শব্দ বসলেই past simple; 'এখন পর্যন্ত' ভাব থাকলে present perfect।", en: "One formula: a closed-time word forces the past simple; an 'up to now' feeling takes the present perfect.", hi: "एक सूत्र: बंद-समय का शब्द आए तो past simple; 'अब तक' का भाव हो तो present perfect।" },
          ],
          formula: {
            bn: "কাটা সময়ের শব্দ → past simple; খোলা ফ্রেম / এখন-পর্যন্ত ভাব → present perfect",
            en: "A closed-time word → past simple; an open frame / 'up to now' feeling → present perfect",
            hi: "बंद-समय शब्द → past simple; खुला फ्रेम / 'अब तक' भाव → present perfect",
          },
          table: {
            head: [
              { bn: "ফ্রেম", en: "Frame", hi: "फ्रेम" },
              { bn: "আভাস শব্দ", en: "Signal words", hi: "संकेत शब्द" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "কাটা ফ্রেম → past simple", en: "Closed frame → past simple", hi: "बंद फ्रेम → past simple" },
                { bn: "yesterday, ago, last year, in 2019, two days ago", en: "yesterday, ago, last year, in 2019, two days ago", hi: "yesterday, ago, last year, in 2019, two days ago" },
                { bn: "I visited Paris in 2019", en: "I visited Paris in 2019", hi: "I visited Paris in 2019" },
              ],
              [
                { bn: "খোলা ফ্রেম → present perfect", en: "Open frame → present perfect", hi: "खुला फ्रेम → present perfect" },
                { bn: "today, this week, ever, so far", en: "today, this week, ever, so far", hi: "today, this week, ever, so far" },
                { bn: "I have visited Paris three times", en: "I have visited Paris three times", hi: "I have visited Paris three times" },
              ],
            ],
          },
          examples: [
            { wrong: "I have visited Paris last year.", right: "I visited Paris last year.", note: { bn: "'last year' কেটে গেছা ফ্রেম → past simple; perfect-এর সাথে কাটা সময়ের শব্দ কখনো বসে না।", en: "'Last year' is a closed frame → past simple; closed-time words never pair with the perfect.", hi: "'last year' बंद फ्रेम है → past simple; perfect के साथ बंद-समय शब्द नहीं आता।" } },
            { wrong: "I visited Paris three times so far.", right: "I have visited Paris three times so far.", note: { bn: "'so far' = এখন পর্যন্ত, ফ্রেম খোলা → present perfect; মোট অভিজ্ঞতার সংখ্যা perfect-এই বলা হয়।", en: "'So far' means 'up to now', an open frame → present perfect; totals of experience take the perfect.", hi: "'so far' = अब तक, फ्रेम खुला → present perfect; अनुभव की कुल संख्या perfect में।" } },
            { wrong: "Shakespeare has written 38 plays.", right: "Shakespeare wrote 38 plays.", note: { bn: "শেক্সপিয়ার মারা গেছেন — তাঁর রচনার সময় শেষ; মৃত ব্যক্তির জীবনকর্ম past simple। জীবিত লেখক হলে হতো: She has written five novels।", en: "Shakespeare is dead — his writing era is over; a dead person's life's work takes the past simple. For a living writer it would be: She has written five novels.", hi: "शेक्सपियर निधन हो चुके हैं — उनका लेखन-काल खत्म; मृत व्यक्ति की रचनाएँ past simple में। जीवित लेखक होता तो: She has written five novels।" } },
            { wrong: "I have seen that film when it came out.", right: "I saw that film when it came out.", note: { bn: "'when it came out' নির্দিষ্ট অতীত-ক্ষণের ক্লজ — এমন ক্লজ থাকলেই মূল বাক্য past simple।", en: "'When it came out' pins the action to a specific past moment — with such a clause the main clause takes the past simple.", hi: "'when it came out' विशिष्ट अतीत-क्षण का क्लज़ है — ऐसा क्लज़ हो तो मुख्य वाक्य past simple में।" } },
            { wrong: "This is the best film I ever saw.", right: "This is the best film I have ever seen.", note: { bn: "superlative + ever = এখন পর্যন্ত সর্বোচ্চ অভিজ্ঞতা → present perfect।", en: "A superlative with ever = the top experience up to now → present perfect.", hi: "superlative + ever = अब तक का सर्वोच्च अनुभव → present perfect।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — have/has + V3 বনাম V2: প্রশ্ন-নেগেটিভসহ",
            en: "🏗️ Formation — have/has + V3 vs V2, with questions and negatives",
            hi: "🏗️ गठन — have/has + V3 बनाम V2: प्रश्न-नकारात्मक सहित",
          },
          lead: {
            bn: "গঠন হাতে-কলমে পাকা থাকলে অর্ধেক ভুল আগেই বাদ।",
            en: "Nail the structures and half your mistakes vanish before they happen.",
            hi: "ढाँचे पक्के हों तो आधी गलतियाँ पहले ही छूट जाती हैं।",
          },
          points: [
            { bn: "**Present perfect** = have/has + ক্রিয়ার তৃতীয় রূপ: I have eaten, she has eaten, they have arrived।", en: "**Present perfect** = have/has + the third form: I have eaten, she has eaten, they have arrived.", hi: "**Present perfect** = have/has + क्रिया का तीसरा रूप: I have eaten, she has eaten, they have arrived।" },
            { bn: "প্রশ্ন-নেগেটিভে have/has নিজেই subject-এর সামনে চলে আসে: Have you finished? She hasn't finished — do/does/did আসে না।", en: "In questions and negatives have/has itself moves before the subject: Have you finished? She hasn't finished — no do/does/did.", hi: "प्रश्न-नकार में have/has खुद subject से पहले आता है: Have you finished? She hasn't finished — do/does/did नहीं आता।" },
            { bn: "**Past simple** = V2: I ate, she went, they arrived।", en: "**Past simple** = V2: I ate, she went, they arrived.", hi: "**Past simple** = V2: I ate, she went, they arrived।" },
            { bn: "প্রশ্ন-নেগেটিভে did + base রূপ: Did you eat? She didn't go — V2 শুধু পজিটিভ বাক্যে।", en: "Questions and negatives take did + the base form: Did you eat? She didn't go — V2 lives only in positive sentences.", hi: "प्रश्न-नकार में did + base रूप: Did you eat? She didn't go — V2 केवल सकारात्मक वाक्य में।" },
            { bn: "দুই কালের গঠন হাতে-কলমে পাকা থাকলে অর্ধেক ভুল আগেই বাদ।", en: "Nail these two structures and half your mistakes vanish.", hi: "दोनों ढाँचे पक्के हों तो आधी गलतियाँ पहले ही छूट जाती हैं।" },
          ],
          formula: {
            bn: "perfect: have/has + V3 · past: V2 (প্রশ্ন-নেগেটিভে did + V1)",
            en: "perfect: have/has + V3 · past: V2 (did + V1 in questions/negatives)",
            hi: "perfect: have/has + V3 · past: V2 (प्रश्न-नकार में did + V1)",
          },
          table: {
            head: [
              { bn: "কাল", en: "Tense", hi: "काल" },
              { bn: "পজিটিভ", en: "Positive", hi: "सकारात्मक" },
              { bn: "প্রশ্ন / নেগেটিভ", en: "Question / Negative", hi: "प्रश्न / नकारात्मक" },
            ],
            rows: [
              [
                { bn: "Present perfect", en: "Present perfect", hi: "Present perfect" },
                { bn: "I have eaten / she has arrived", en: "I have eaten / she has arrived", hi: "I have eaten / she has arrived" },
                { bn: "Have you finished? / She hasn't finished", en: "Have you finished? / She hasn't finished", hi: "Have you finished? / She hasn't finished" },
              ],
              [
                { bn: "Past simple", en: "Past simple", hi: "Past simple" },
                { bn: "I ate / she went", en: "I ate / she went", hi: "I ate / she went" },
                { bn: "Did you eat? / She didn't go", en: "Did you eat? / She didn't go", hi: "Did you eat? / She didn't go" },
              ],
            ],
          },
          examples: [
            { wrong: "I have went to the market.", right: "I have gone to the market.", note: { bn: "have-এর পরে V3 — gone; went হলো V2, একা বসে অতীত-সিম্পলে।", en: "After have comes V3 — gone; went is V2 and stands alone in the past simple.", hi: "have के बाद V3 — gone; went V2 है, अकेला past simple में आता है।" } },
            { wrong: "Do you have seen this movie?", right: "Have you seen this movie?", note: { bn: "perfect-এর প্রশ্নে do আসে না — have নিজেই subject-এর আগে উঠে আসে।", en: "No do in perfect questions — have itself moves in front of the subject.", hi: "perfect प्रश्न में do नहीं — have खुद subject से पहले आता है।" } },
            { wrong: "She doesn't have replied yet.", right: "She hasn't replied yet.", note: { bn: "does + have এখানে অসম্ভব; perfect-এর নেগেটিভ has not (hasn't) + V3।", en: "does + have is impossible here; the perfect negative is has not (hasn't) + V3.", hi: "does + have यहाँ असंभव; perfect का नकारात्मक has not (hasn't) + V3 है।" } },
            { wrong: "Did you ever eat sushi?", right: "Have you ever eaten sushi?", note: { bn: "ever = জীবনে-কখনো-অভিজ্ঞতা → present perfect, আর perfect-এর পরে V3 (eaten)।", en: "'Ever' asks about life experience → present perfect, with V3 after it (eaten).", hi: "ever = जीवन-अनुभव का प्रश्न → present perfect, और उसके बाद V3 (eaten)।" } },
            { wrong: "They hasn't arrived yet.", right: "They haven't arrived yet.", note: { bn: "has/hasn't শুধু he/she/it-এ; they-র সাথে have/haven't।", en: "has/hasn't only follows he/she/it; with they use have/haven't.", hi: "has/hasn't केवल he/she/it के साथ; they के साथ have/haven't।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — already, just, yet, ever, never, still",
            en: "🚦 Signal words — already, just, yet, ever, never, still",
            hi: "🚦 संकेत शब्द — already, just, yet, ever, never, still",
          },
          lead: {
            bn: "ছয়টা শব্দ প্রায় সবসময় present perfect-এর সঙ্গী — দেখামাত্র চেনা উচিত।",
            en: "Six words that almost always signal the present perfect — learn to spot them instantly.",
            hi: "छह शब्द लगभग हमेशा present perfect के साथ — देखते ही पहचानें।",
          },
          points: [
            { bn: "এই ছয়টা শব্দ প্রায় সবসময় present perfect-এর সঙ্গী — নিচের টেবিলে এক নজরে।", en: "These six words almost always walk with the present perfect — one glance at the table below.", hi: "ये छह शब्द लगभग हमेशा present perfect के साथ चलते हैं — नीचे तालिका में एक नज़र में।" },
            { bn: "**just** আর **already** বাক্যের মাঝে, have-এর পরে বসে: I have just eaten / I have already finished — আগেই হয়ে গেছে বোঝাতে already।", en: "**just** and **already** sit mid-sentence, after have: I have just eaten / I have already finished — already for 'sooner than expected'.", hi: "**just** और **already** वाक्य के बीच, have के बाद: I have just eaten / I have already finished — 'पहले ही' के लिए already।" },
            { bn: "**yet** শুধু প্রশ্ন-নেগেটিভে, বাক্যের শেষে: Have you finished yet? I haven't finished yet।", en: "**yet** lives only in questions and negatives, at the end: Have you finished yet? I haven't finished yet.", hi: "**yet** केवल प्रश्न-नकार में, वाक्य के अंत में: Have you finished yet? I haven't finished yet।" },
            { bn: "**never**-এর ভেতরেই নেগেটিভ আছে — ক্রিয়া পজিটিভ থাকে: I have never seen।", en: "**never** carries the negative inside it — the verb stays positive: I have never seen.", hi: "**never** में नकार भीतर ही है — क्रिया सकारात्मक रहती है: I have never seen।" },
            { bn: "**still** = এখনো, প্রত্যাশা ভাঙার ভাব — মূলত still + haven't/hasn't: The parcel still hasn't arrived।", en: "**still** = up to now against expectations — mainly still + haven't/hasn't: The parcel still hasn't arrived.", hi: "**still** = अब भी, अपेक्षा टूटने का भाव — मुख्यतः still + haven't/hasn't: The parcel still hasn't arrived।" },
            { bn: "Past simple-এর সঙ্গী অন্যরা: yesterday, ago, last..., in + বছর।", en: "The past simple keeps different company: yesterday, ago, last..., in + year.", hi: "Past simple के साथी अलग हैं: yesterday, ago, last..., in + वर्ष।" },
          ],
          formula: {
            bn: "just · already · yet · ever · never · still → present perfect",
            en: "just · already · yet · ever · never · still → present perfect",
            hi: "just · already · yet · ever · never · still → present perfect",
          },
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "অর্থ", en: "Meaning", hi: "अर्थ" },
              { bn: "জায়গা ও উদাহরণ", en: "Place and example", hi: "जगह और उदाहरण" },
            ],
            rows: [
              [
                { bn: "just", en: "just", hi: "just" },
                { bn: "এইমাত্র", en: "a moment ago", hi: "अभी-अभी" },
                { bn: "have-এর পরে, বাক্যের মাঝে — I have just eaten", en: "mid-sentence, after have — I have just eaten", hi: "have के बाद, वाक्य के बीच — I have just eaten" },
              ],
              [
                { bn: "already", en: "already", hi: "already" },
                { bn: "আগেই (চমক / তাড়াহুড়ো)", en: "sooner than expected", hi: "पहले ही" },
                { bn: "I have already finished", en: "I have already finished", hi: "I have already finished" },
              ],
              [
                { bn: "yet", en: "yet", hi: "yet" },
                { bn: "এখনো", en: "so far", hi: "अभी तक" },
                { bn: "প্রশ্ন-নেগেটিভে, শেষে — Have you finished yet?", en: "questions/negatives, at the end — Have you finished yet?", hi: "प्रश्न-नकार में, अंत में — Have you finished yet?" },
              ],
              [
                { bn: "ever", en: "ever", hi: "ever" },
                { bn: "জীবনে কখনো", en: "at any time in life", hi: "जीवन में कभी" },
                { bn: "Have you ever...?", en: "Have you ever...?", hi: "Have you ever...?" },
              ],
              [
                { bn: "never", en: "never", hi: "never" },
                { bn: "কখনোই না", en: "at no time", hi: "कभी नहीं" },
                { bn: "নেগেটিভ ভেতরেই — I have never seen", en: "negative inside it — I have never seen", hi: "नकार भीतर ही — I have never seen" },
              ],
              [
                { bn: "still", en: "still", hi: "still" },
                { bn: "এখনো (প্রত্যাশা ভাঙা)", en: "up to now, against expectation", hi: "अब भी (अपेक्षा टूटी)" },
                { bn: "still + hasn't — The parcel still hasn't arrived", en: "still + hasn't — The parcel still hasn't arrived", hi: "still + hasn't — The parcel still hasn't arrived" },
              ],
            ],
          },
          examples: [
            { wrong: "I have finished yet.", right: "I haven't finished yet.", note: { bn: "yet চায় নেগেটিভ বা প্রশ্ন; পজিটিভ বাক্যে 'আগেই' বোঝাতে already।", en: "yet needs a negative or a question; in a positive sentence 'sooner than expected' takes already.", hi: "yet नकारात्मक या प्रश्न चाहता है; सकारात्मक वाक्य में already आएगा।" } },
            { wrong: "I haven't never been to Darjeeling.", right: "I have never been to Darjeeling.", note: { bn: "never-এর ভেতরেই নেগেটিভ — আর একটা haven't দিলে দ্বিগুণ নেগেটিভ হয়ে যায়।", en: "never is negative by itself; adding haven't makes the sentence doubly negative.", hi: "never में नकार पहले से है; haven't जोड़ने पर दोहरा नकार हो जाता है।" } },
            { wrong: "Did you ever ride a horse?", right: "Have you ever ridden a horse?", note: { bn: "জীবন-অভিজ্ঞতা জানার প্রশ্ন → Have you ever + V3 (ridden)।", en: "A life-experience question → Have you ever + V3 (ridden).", hi: "जीवन-अनुभव का प्रश्न → Have you ever + V3 (ridden)।" } },
            { wrong: "The parcel still didn't arrive.", right: "The parcel still hasn't arrived.", note: { bn: "এখনো পর্যন্ত ফল নেই → still + present perfect negative; didn't বললে নির্দিষ্ট অতীত-ক্ষণ শোনায়।", en: "No result up to now → still + present perfect negative; didn't would pin it to one past moment.", hi: "अब तक नतीजा नहीं → still + present perfect negative; didn't एक विशिष्ट अतीत-क्षण बताएगा।" } },
            { wrong: "She has just went out.", right: "She has just gone out.", note: { bn: "just-এর পরেও have-এর মতোই V3 — gone; went নয়।", en: "After just, too, comes V3 — gone, not went.", hi: "just के बाद भी V3 — gone, went नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "⏳ since + বিন্দু, for + মাপ — perfect-এর সময়-সঙ্গী",
            en: "⏳ since + a point, for + a span — the time partners of the perfect",
            hi: "⏳ since + बिंदु, for + अवधि — perfect के समय-साथी",
          },
          lead: {
            bn: "perfect-এর প্রিয় সময়-সঙ্গী দুই জন — বিন্দু আর মাপ।",
            en: "The perfect keeps two favourite time partners — a point and a span.",
            hi: "perfect के दो प्रिय समय-साथी — बिंदु और अवधि।",
          },
          points: [
            { bn: "**since** = শুরুর বিন্দু: since 2015, since Monday, since I joined।", en: "**since** = a starting point: since 2015, since Monday, since I joined.", hi: "**since** = शुरुआती बिंदु: since 2015, since Monday, since I joined।" },
            { bn: "**for** = মাপ: for ten years, for two hours।", en: "**for** = a span: for ten years, for two hours.", hi: "**for** = अवधि: for ten years, for two hours।" },
            { bn: "'How long have you lived here?' — এমন 'কতদিন ধরে' প্রশ্ন-উত্তর পুরোটাই perfect-এর মাঠ।", en: "'How long have you lived here?' — such 'how long' questions and answers live entirely in perfect territory.", hi: "'How long have you lived here?' — ऐसे 'कितने समय से' प्रश्न-उत्तर पूरे perfect के क्षेत्र में।" },
            { bn: "since/for বাক্যে থাকলেই কাল উঠে যায় present perfect বা perfect continuous — দুটোই 'তখন থেকে এখন পর্যন্ত' বলে।", en: "When since/for appear, the tense climbs to present perfect or perfect continuous — both mean 'from then till now'.", hi: "since/for दिखते ही काल present perfect या perfect continuous पर चढ़ जाता है — दोनों का अर्थ 'तब से अब तक'।" },
            { bn: "since-এর সাথে পূর্ণ ক্লজ থাকলে সেই ক্লজ past simple: since I joined, নয় since I have joined।", en: "A full clause after since takes the past simple: since I joined, not since I have joined.", hi: "since के बाद पूरा क्लज़ past simple में: since I joined, not since I have joined।" },
            { bn: "বিস্তারিত শিখতে intermediate স্তরের Since vs For পাঠটা দেখুন।", en: "For the deep dive, see the intermediate Since vs For lesson.", hi: "गहराई के लिए intermediate का Since vs For पाठ देखें।" },
          ],
          formula: {
            bn: "since + বিন্দু / for + মাপ → present perfect (বা perfect continuous)",
            en: "since + a point / for + a span → present perfect (or perfect continuous)",
            hi: "since + बिंदु / for + अवधि → present perfect (या perfect continuous)",
          },
          examples: [
            { wrong: "I am living in Dhaka since 2015.", right: "I have been living in Dhaka since 2015.", note: { bn: "since + এখনো চলছে → present perfect continuous; বর্তমান continuous এই সঙ্গী পায় না।", en: "since + still running → present perfect continuous; the present continuous cannot carry it.", hi: "since + अब भी चल रहा → present perfect continuous; present continuous इसे नहीं ले सकता।" } },
            { wrong: "We know each other for ten years.", right: "We have known each other for ten years.", note: { bn: "'দশ বছর ধরে চিনি' → present perfect; know স্টেটিভ, তাই perfect simple, continuous নয়।", en: "'For ten years' of knowing → present perfect; know is stative, so perfect simple, not continuous.", hi: "'दस साल से जानते हैं' → present perfect; know stative है, इसलिए perfect simple, continuous नहीं।" } },
            { wrong: "I have lived here for 2019.", right: "I have lived here since 2019.", note: { bn: "বছরের নাম = বিন্দু → since; for-এর সাথে মাপ লাগবে (for six years)।", en: "A named year is a point → since; for needs a span (for six years).", hi: "साल का नाम = बिंदु → since; for के लिए अवधि चाहिए (for six years)।" } },
            { wrong: "He worked in this office since 2020.", right: "He has worked in this office since 2020.", note: { bn: "চাকরি এখনো চলছে বোঝাতে perfect; worked (past simple) বললে শোনায় চাকরি শেষ হয়ে গেছে।", en: "To show the job is still on, use the perfect; worked (past simple) would suggest the job is over.", hi: "नौकरी अब भी चल रही है → perfect; worked (past simple) कहने पर नौकरी खत्म लगेगी।" } },
            { wrong: "It's been a long time since we have met.", right: "It's been a long time since we met.", note: { bn: "since-ক্লজ সবসময় past simple — met; 'since we have met' নয়।", en: "The since-clause always takes the past simple — met; not 'since we have met'.", hi: "since-क्लज़ हमेशा past simple — met; 'since we have met' नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "📰 খবরের perfect, বিস্তারের past — আর When-প্রশ্নে সবসময় past simple",
            en: "📰 News in the perfect, details in the past — and When-questions always take the past simple",
            hi: "📰 खबर perfect में, विवरण past में — और When-प्रश्न हमेशा past simple में",
          },
          lead: {
            bn: "খবর আসে perfect-এ, বিস্তার নামে past-এ — সংবাদের সোনালি নিয়ম।",
            en: "News arrives in the perfect, details drop into the past — the golden news rule.",
            hi: "खबर perfect में, विवरण past में — खबरों का सुनहरा नियम।",
          },
          points: [
            { bn: "নতুন খবর প্রথমে **present perfect**-এ — খবরের গুরুত্ব 'এখনে': The train has arrived. The CEO has resigned. Our team has won!", en: "New news arrives in the **present perfect** — because the news matters now: The train has arrived. The CEO has resigned. Our team has won!", hi: "नई खबर पहले **present perfect** में — खबर का महत्त्व 'अभी' है: The train has arrived. The CEO has resigned. Our team has won!" },
            { bn: "তারপর বিস্তার — কখন, কোথায়, কীভাবে — **past simple**-এ: It arrived at 9:15. He resigned last night।", en: "Then the details — when, where, how — come in the **past simple**: It arrived at 9:15. He resigned last night.", hi: "फिर विवरण — कब, कहाँ, कैसे — **past simple** में: It arrived at 9:15. He resigned last night।" },
            { bn: "কথোপকথনেও একই প্রবাহ: 'Have you heard? Rina has got married!' — 'Really? When did she get married?' — 'Last Sunday।'", en: "Conversations flow the same way: 'Have you heard? Rina has got married!' — 'Really? When did she get married?' — 'Last Sunday.'", hi: "बातचीत में भी वही बहाव: 'Have you heard? Rina has got married!' — 'Really? When did she get married?' — 'Last Sunday।'" },
            { bn: "**When...?** প্রশ্ন মানেই বক্তা নির্দিষ্ট অতীত-সময় জানতে চাইছে — আর নির্দিষ্ট অতীত-সময় মানেই past simple।", en: "A **When...?** question means the speaker wants a specific past time — and a specific past time always takes the past simple.", hi: "**When...?** प्रश्न का मतलब है विशिष्ट अतीत-समय जानना — और विशिष्ट अतीत-समय = past simple।" },
            { bn: "তাই 'When have you bought it?' ইংরেজিতে কখনো হয় না।", en: "So 'When have you bought it?' simply does not exist in English.", hi: "इसलिए 'When have you bought it?' अंग्रेज़ी में कभी नहीं होता।" },
          ],
          formula: {
            bn: "নতুন খবর → present perfect; বিস্তার (কখন/কোথায়) → past simple; When-প্রশ্ন → সবসময় past simple",
            en: "New news → present perfect; the details (when/where) → past simple; When-questions → always past simple",
            hi: "नई खबर → present perfect; विवरण (कब/कहाँ) → past simple; When-प्रश्न → हमेशा past simple",
          },
          examples: [
            { wrong: "The train has arrived at 9:15.", right: "The train has arrived. It arrived at 9:15.", note: { bn: "খবর perfect-এ, সময়-বিস্তার past-এ; এক বাক্যে perfect + কাটা সময় আসে না।", en: "News in the perfect, the time detail in the past; the perfect never pairs with a closed time inside one clause.", hi: "खबर perfect में, समय-विवरण past में; एक ही वाक्य में perfect + बंद समय नहीं।" } },
            { wrong: "When have you bought this phone?", right: "When did you buy this phone?", note: { bn: "When-প্রশ্ন = নির্দিষ্ট অতীত-সময় জানতে চাওয়া → সবসময় past simple।", en: "A When-question asks for a specific past time → always the past simple.", hi: "When-प्रश्न = विशिष्ट अतीत-समय → हमेशा past simple।" } },
            { wrong: "She has got married last Sunday.", right: "She got married last Sunday.", note: { bn: "খবরের বাক্যে perfect ছিল ('Rina has got married!'); last Sunday বসামাত্র past simple।", en: "The news flash used the perfect ('Rina has got married!'); add last Sunday and it becomes past simple.", hi: "खबर वाले वाक्य में perfect था; last Sunday आते ही past simple।" } },
            { wrong: "I have seen him at the party. He has worn a red shirt.", right: "I saw him at the party. He was wearing a red shirt.", note: { bn: "নির্দিষ্ট অতীত-দৃশ্যের বিবরণ → past simple (চলমান পটভূমিতে past continuous)।", en: "Narrating a specific past scene → past simple (with a running backdrop, past continuous).", hi: "विशिष्ट अतीत-दृश्य का वर्णन → past simple (चलती पृष्ठभूमि में past continuous)।" } },
            { wrong: "Have you submitted the assignment? Yes, I have submitted it yesterday.", right: "Have you submitted the assignment? Yes, I submitted it yesterday.", note: { bn: "উত্তরে সময় বললেই past simple; সময় না বললে থাকতো 'Yes, I have.'", en: "Once the answer names a time, it becomes past simple; without a time it would be 'Yes, I have.'", hi: "उत्तर में समय बताते ही past simple; समय न बताओ तो 'Yes, I have.' रहता।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "তিনটা ফাঁদ চিনলে নম্বর বাঁচে — প্রতিটারই সমাধান আছে।",
            en: "Three traps cost the most marks — each has a simple fix.",
            hi: "तीन जाल पहचानिए, अंक बचाइए — हर एक का इलाज है।",
          },
          points: [
            { bn: "ফাঁদ ১: বাংলায় 'গেছি' একটাই রূপ সব সময় মেনে নেয় — তাই কাটা সময়ের শব্দেও perfect ধরা হয়: I have gone there last year।", en: "Trap 1: Bengali 'গেছি' covers every past meaning — so learners reach for the perfect even with closed-time words: I have gone there last year.", hi: "जाल 1: बांग्ला 'गया हूँ' एक ही रूप सब मेने लेता है — इसलिए बंद-समय शब्दों के साथ भी perfect: I have gone there last year।" },
            { bn: "সমাধান: yesterday / ago / last / in + বছর দেখলেই হাত স্বয়ংক্রিয়ভাবে past simple-এ।", en: "The fix: yesterday / ago / last / in + year must flip your hand to the past simple automatically.", hi: "समाधान: yesterday / ago / last / in + वर्ष देखते ही हाथ past simple पर।" },
            { bn: "ফাঁদ ২: ঘটনার গল্প সাজাতে ইংরেজিও বাংলার মতোই past simple-এ সাজায় — perfect শুধু পর্দা খোলে, গল্প চালায় না।", en: "Trap 2: when narrating a sequence of events, English builds the story in the past simple just like Bengali — the perfect opens the curtain but never drives the story.", hi: "जाल 2: घटनाओं की कहानी सुनाते समय अंग्रेज़ी भी past simple में बुनती है — perfect पर्दा खोलता है, कहानी नहीं चलाता।" },
            { bn: "ফাঁদ ৩: today / this morning আধা-খোলা ফ্রেম — দিন এখনো চললে perfect: I have had two calls this morning।", en: "Trap 3: today / this morning are half-open frames — while the day is still running use the perfect: I have had two calls this morning.", hi: "जाल 3: today / this morning अर्ध-खुले फ्रेम — दिन चल रहा हो तो perfect: I have had two calls this morning।" },
            { bn: "দিন শেষে সেই সকাল কাটা অতীত: I had two calls this morning।", en: "Once the day is over, that morning is closed past: I had two calls this morning.", hi: "दिन निकल गया तो वह सुबह बंद अतीत: I had two calls this morning।" },
          ],
          examples: [
            { wrong: "I have gone to Cox's Bazar last December.", right: "I went to Cox's Bazar last December.", note: { bn: "'গেছি' শুনে perfect ধরাই ফাঁদ — last December কাটা সময় → past simple।", en: "Hearing 'গেছি' tempts the perfect — last December is closed time → past simple.", hi: "'गया' सुनकर perfect लेना ही जाल है — last December बंद समय → past simple।" } },
            { wrong: "I have left the keys on the table an hour ago.", right: "I left the keys on the table an hour ago.", note: { bn: "an hour ago → past simple; perfect-এর সাথে ago অসম্ভব।", en: "An hour ago → past simple; ago never pairs with the perfect.", hi: "an hour ago → past simple; ago perfect के साथ नहीं आता।" } },
            { wrong: "I have watched that movie yesterday night.", right: "I watched that movie last night.", note: { bn: "'yesterday night' নয় — last night; আর কাটা সময় মানেই past simple।", en: "It is 'last night', not 'yesterday night'; and closed time means past simple.", hi: "'yesterday night' नहीं — last night; और बंद समय = past simple।" } },
            { wrong: "I have met him in 2018 at a conference.", right: "I met him in 2018 at a conference.", note: { bn: "পরিচয়ের গল্প বলা হয় নির্দিষ্ট অতীতে — in 2018 বসলেই past simple।", en: "The story of meeting someone is told in the past — with in 2018 the past simple is forced.", hi: "मुलाक़ात की कहानी विशिष्ट अतीत में — in 2018 आते ही past simple।" } },
            { wrong: "I have read this book in class nine.", right: "I read this book in class nine.", note: { bn: "'নবম শ্রেণিতে পড়েছিলাম' — স্কুল-জীবনের নির্দিষ্ট সময় → past simple।", en: "'Back in class nine' — a specific school-days time → past simple.", hi: "'नौवीं कक्षा में' — स्कूल-दिनों का विशिष्ट समय → past simple।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 A short story to see it all",
            hi: "📖 एक छोटी कहानी में सब देखें",
          },
          lead: {
            bn: "এক অফিস-দৃশ্যেই দুই কালের পুরো প্রবাহ চোখের সামনে।",
            en: "One office scene shows the full flow of both tenses before your eyes.",
            hi: "एक ऑफिस-दृश्य में दोनों कालों का पूरा बहाव।",
          },
          points: [
            { bn: "সকালে অফিসে সোহেল ঢুকেই শুনল: 'Have you heard? The CEO has resigned!'", en: "Sohel walked into the office and heard: 'Have you heard? The CEO has resigned!'", hi: "सोहेल ऑफिस पहुँचा और सुना: 'Have you heard? The CEO has resigned!'" },
            { bn: "চমকে গিয়ে জিজ্ঞেস করল: 'When did he resign?' — 'Last night. He sent the email at 11:45.'", en: "Startled, he asked: 'When did he resign?' — 'Last night. He sent the email at 11:45.'", hi: "चौंककर पूछा: 'When did he resign?' — 'Last night. He sent the email at 11:45.'" },
            { bn: "সহকর্মী নাদিয়া বলল: 'I have worked here for eight years and I have never seen anything like this. Did he give any reason?'", en: "His colleague Nadia said: 'I have worked here for eight years and I have never seen anything like this. Did he give any reason?'", hi: "सहकर्मी नादिया ने कहा: 'I have worked here for eight years and I have never seen anything like this. Did he give any reason?'" },
            { bn: "উত্তর এলো: 'No, he still hasn't said anything. The board has already called an emergency meeting.'", en: "The answer came: 'No, he still hasn't said anything. The board has already called an emergency meeting.'", hi: "जवाब आया: 'No, he still hasn't said anything. The board has already called an emergency meeting.'" },
            { bn: "সোহেল ভাবল: 'The news still hasn't sunk in!'", en: "Sohel thought: 'The news still hasn't sunk in!'", hi: "सोहेल ने सोचा: 'The news still hasn't sunk in!'" },
            { bn: "দেখুন: খবর perfect-এ, When-প্রশ্ন আর বিস্তার past-এ, অভিজ্ঞতা ও yet/already/never perfect-এ।", en: "Notice: news in the perfect, When-questions and details in the past, and experience/yet/already/never in the perfect.", hi: "देखें: खबर perfect में, When-प्रश्न और विवरण past में, और अनुभव/yet/already/never perfect में।" },
          ],
          examples: [
            { wrong: "The CEO has resigned last night.", right: "The CEO has resigned. He sent the email last night.", note: { bn: "খবর perfect-এ; last night-সহ বিস্তার আলাদা বাক্যে past-এ।", en: "News in the perfect; the last-night detail goes in a separate past-simple sentence.", hi: "खबर perfect में; last night वाला विवरण अलग past-simple वाक्य में।" } },
            { wrong: "When has he resigned?", right: "When did he resign?", note: { bn: "When-প্রশ্নে সবসময় past simple।", en: "When-questions always take the past simple.", hi: "When-प्रश्न में हमेशा past simple।" } },
            { wrong: "I never saw anything like this before.", right: "I have never seen anything like this before.", note: { bn: "never + before = এখন পর্যন্ত অভিজ্ঞতা → present perfect।", en: "never + before = experience up to now → present perfect.", hi: "never + before = अब तक का अनुभव → present perfect।" } },
            { wrong: "He still didn't say anything.", right: "He still hasn't said anything.", note: { bn: "এখনো পর্যন্ত কিছু নেই → still + hasn't + V3।", en: "Nothing up to now → still + hasn't + V3.", hi: "अब तक कुछ नहीं → still + hasn't + V3।" } },
          ],
        },
        {
          heading: {
            bn: "📊 এক নজরে — পুরো পাঠ ছোট করে",
            en: "📊 At a glance — the whole lesson in brief",
            hi: "📊 एक नज़र में — पूरा पाठ संक्षेप में",
          },
          lead: {
            bn: "পাঁচটা সূত্র মুখস্থ থাকলে পরীক্ষার হলেও কাজ চলবে।",
            en: "Five formulas are enough to carry you through any exam.",
            hi: "पाँच सूत्र याद हों तो परीक्षा-भवन में भी काम चलेगा।",
          },
          points: [
            { bn: "**সূত্র ১** — কাটা সময়ের শব্দ: yesterday, ago, last..., in + বছর, when + past-ক্লজ — দেখলেই past simple।", en: "**Rule 1** — closed-time words: yesterday, ago, last..., in + year, when + past clause — they force the past simple.", hi: "**सूत्र 1** — बंद-समय शब्द: yesterday, ago, last..., in + वर्ष, when + past-क्लज़ — past simple तय।" },
            { bn: "**সূত্র ২** — খোলা ফ্রেম বা এখন-পর্যন্ত ভাব: ever, never, just, already, yet, so far, recently, this week, today — দেখলেই present perfect।", en: "**Rule 2** — open frames and 'up to now': ever, never, just, already, yet, so far, recently, this week, today — they take the present perfect.", hi: "**सूत्र 2** — खुला फ्रेम / 'अब तक': ever, never, just, already, yet, so far, recently, this week, today — present perfect।" },
            { bn: "**সূত্র ৩** — since + বিন্দু, for + মাপ — দুটোই কালকে perfect-এ টানে।", en: "**Rule 3** — since + point, for + span — both pull the tense into the perfect.", hi: "**सूत्र 3** — since + बिंदु, for + अवधि — दोनों काल को perfect में खींचते हैं।" },
            { bn: "**সূত্র ৪** — খবর perfect-এ আসে, বিস্তার ও When-প্রশ্ন past-এ।", en: "**Rule 4** — news arrives in the perfect; details and When-questions go to the past.", hi: "**सूत्र 4** — खबर perfect में, विवरण और When-प्रश्न past में।" },
            { bn: "**সূত্র ৫** — perfect = অতীতের কাজ + এখনের সংযোগ; past simple = অতীতের কাজ + এখন থেকে ছিঁড়ে যাওয়া সময়।", en: "**Rule 5** — perfect = a past action connected to now; past simple = a past action cut off from now.", hi: "**सूत्र 5** — perfect = अतीत का काम + अब से जुड़ाव; past simple = अतीत का काम + अब से कटाव।" },
          ],
          examples: [
            { wrong: "I have finished it yesterday.", right: "I finished it yesterday.", note: { bn: "yesterday = কাটা সময় → past simple।", en: "Yesterday = closed time → past simple.", hi: "yesterday = बंद समय → past simple।" } },
            { wrong: "Did you ever try Kolkata biryani?", right: "Have you ever tried Kolkata biryani?", note: { bn: "জীবনে-কখনো অভিজ্ঞতা → Have you ever + V3।", en: "A life-experience question → Have you ever + V3.", hi: "जीवन-अनुभव प्रश्न → Have you ever + V3।" } },
            { wrong: "How long did you live in Dhaka?", right: "How long have you lived in Dhaka?", note: { bn: "এখনো থাকলে perfect; past simple বললে শোনায় এখন আর থাকেন না।", en: "If you still live there, use the perfect; the past simple suggests you no longer do.", hi: "अब भी रहते हैं तो perfect; past simple कहने पर लगेगा कि अब वहाँ नहीं रहते।" } },
            { wrong: "The guests didn't arrive yet.", right: "The guests haven't arrived yet.", note: { bn: "yet = এখন পর্যন্ত → present perfect negative।", en: "yet = up to now → present perfect negative.", hi: "yet = अब तक → present perfect negative।" } },
          ],
        },
      ],
      tips: [
        { bn: "কাটা-সময় তালিকা মুখস্ত: yesterday, ago, last week/month/year, in + বছর, when + past-ক্লজ — দেখলেই past simple।", en: "Memorise the closed-time list: yesterday, ago, last week/month/year, in + year, when + past clause — they force the past simple.", hi: "बंद-समय सूची रटें: yesterday, ago, last week/month/year, in + वर्ष, when + past-क्लज़ — past simple तय।" },
        { bn: "খোলা-ফ্রেম তালিকা: ever, never, just, already, yet, so far, recently, this week, today — দেখলেই present perfect।", en: "The open-frame list: ever, never, just, already, yet, so far, recently, this week, today — they take the present perfect.", hi: "खुले-फ्रेम सूची: ever, never, just, already, yet, so far, recently, this week, today — present perfect।" },
        { bn: "perfect-এর গঠন-পরীক্ষা: have/has + V3; প্রশ্ন-নেগেটিভে do/did নয় — Have you...? I haven't...", en: "Structure check for the perfect: have/has + V3; no do/did in questions or negatives — Have you...? I haven't...", hi: "perfect की बनावट: have/has + V3; प्रश्न-नकार में do/did नहीं — Have you...? I haven't..." },
        { bn: "since + বিন্দু, for + মাপ — দুটোর যেকোনোটা দেখলে কাল perfect বা perfect continuous হবে।", en: "since + point, for + span — if you see either one, the tense will be perfect or perfect continuous.", hi: "since + बिंदु, for + अवधि — कोई भी दिखे तो काल perfect या perfect continuous होगा।" },
        { bn: "When-প্রশ্ন ও When-উত্তর সবসময় past simple — 'When have you...' ইংরেজিতে নেই।", en: "When-questions and When-answers are always past simple — 'When have you...' does not exist in English.", hi: "When-प्रश्न और When-उत्तर हमेशा past simple — 'When have you...' अंग्रेज़ी में नहीं।" },
        { bn: "খবর perfect-এ, বিস্তার past-এ: 'The train has arrived. It arrived at 9:15.'", en: "News in the perfect, details in the past: 'The train has arrived. It arrived at 9:15.'", hi: "खबर perfect में, विवरण past में: 'The train has arrived. It arrived at 9:15.'" },
        { bn: "never-এর সাথে আর নেগেটিভ নয় — I have never seen; 'haven't never' দ্বিগুণ নেগেটিভ।", en: "Never add a negative to never — I have never seen; 'haven't never' is a double negative.", hi: "never के साथ और नकार नहीं — I have never seen; 'haven't never' दोहरा नकार।" },
        { bn: "জীবিত ব্যক্তির মোট-কর্ম perfect (She has written five novels); মৃত ব্যক্তির জীবনকর্ম past (Tagore wrote Gitanjali)।", en: "A living person's total output takes the perfect (She has written five novels); a dead person's life's work takes the past (Tagore wrote Gitanjali).", hi: "जीवित व्यक्ति की कुल रचनाएँ perfect में (She has written five novels); मृत व्यक्ति की रचनाएँ past में (Tagore wrote Gitanjali)।" },
        { bn: "ঘটনার গল্প সাজাতে past simple-ই ইঞ্জিন; perfect শুধু পর্দা খোলে।", en: "To build a story of events, the past simple is the engine; the perfect only opens the curtain.", hi: "घटनाओं की कहानी past simple से बनती है; perfect केवल पर्दा खोलता है।" },
      ],
      quiz: [
        { question: "I ___ my homework an hour ago.", options: ["have finished", "finished", "have finish", "am finishing"], answer: 1, explanation: { bn: "an hour ago = কাটা সময় → past simple।", en: "An hour ago = closed time → past simple.", hi: "an hour ago = बंद समय → past simple।" } },
        { question: "Have you ever ___ sushi?", options: ["ate", "eat", "eaten", "eating"], answer: 2, explanation: { bn: "have-এর পরে V3 — eaten।", en: "After have comes V3 — eaten.", hi: "have के बाद V3 — eaten।" } },
        { question: "I can't open the door — I ___ my keys somewhere.", options: ["lose", "lost", "have lost", "am losing"], answer: 2, explanation: { bn: "ফল এখনে — দরজা খুলছে না → present perfect (have lost); 'এখনো' ভাব perfect-ই চায়।", en: "The result is now — the door will not open → present perfect (have lost); the 'up to now' feeling takes the perfect.", hi: "परिणाम अभी है — दरवाज़ा नहीं खुल रहा → present perfect (have lost); 'अब तक' का भाव perfect माँगता है।" } },
        { question: "When ___ you buy this jacket?", options: ["have", "did", "do", "has"], answer: 1, explanation: { bn: "When-প্রশ্ন → সবসময় past simple (did you buy)।", en: "A When-question → always the past simple (did you buy).", hi: "When-प्रश्न → हमेशा past simple (did you buy)।" } },
        { question: "We ___ in this flat since 2018.", options: ["live", "are living", "have lived", "lived"], answer: 2, explanation: { bn: "since + এখনো চলছে → present perfect।", en: "since + still running → present perfect.", hi: "since + अब भी चल रहा → present perfect।" } },
        { question: "I ___ her at the market yesterday.", options: ["have met", "met", "meet", "had met"], answer: 1, explanation: { bn: "yesterday = কাটা সময় → past simple।", en: "Yesterday = closed time → past simple.", hi: "yesterday = बंद समय → past simple।" } },
        { question: "The guests ___ yet.", options: ["didn't arrive", "haven't arrived", "arrived", "don't arrive"], answer: 1, explanation: { bn: "yet = এখন পর্যন্ত → present perfect negative।", en: "yet = up to now → present perfect negative.", hi: "yet = अब तक → present perfect negative।" } },
        { question: "Which sentence is correct?", options: ["I have visited Rome last summer.", "I visited Rome last summer.", "I have visit Rome last summer.", "I visit Rome last summer."], answer: 1, explanation: { bn: "last summer = কাটা সময় → past simple; perfect-এর সাথে কাটা সময় আসে না।", en: "Last summer = closed time → past simple; the perfect never takes closed-time words.", hi: "last summer = बंद समय → past simple; perfect के साथ बंद समय नहीं।" } },
        { question: "Have you heard the news? The minister ___.", options: ["has just resigned", "just resign", "has just resign", "just resigning"], answer: 0, explanation: { bn: "has just + V3 — এইমাত্র পাওয়া খবর → present perfect।", en: "has just + V3 — brand-new news → present perfect.", hi: "has just + V3 — ताज़ा खबर → present perfect।" } },
        { question: "My grandfather ___ in the army during the war.", options: ["has served", "served", "has serve", "is serving"], answer: 1, explanation: { bn: "during the war = কাটা সময়ের ফ্রেম, আর প্রপিতামহের সময়ও শেষ → past simple।", en: "During the war = a closed frame, and the grandfather's era is over → past simple.", hi: "during the war = बंद फ्रेम, और दादाजी का काल भी खत्म → past simple।" } },
      ],
    },
  },

  /* ── 2. Subject-Verb Agreement (intermediate, unit 0, sortOrder 17) ────── */
  {
    topic: "Subject-Verb Agreement",
    level: "intermediate",
    title: "Subject-Verb Agreement (Intermediate)",
    unit: 0,
    sortOrder: 17,
    data: {
      title: {
        bn: "কর্তা-ক্রিয়ার মিল: সাবজেক্ট-ভার্ব অ্যাগ্রিমেন্ট (মধ্যম স্তর)",
        en: "Subject-Verb Agreement (Intermediate)",
        hi: "कर्ता-क्रिया मेल: सब्जेक्ट-वर्ब अग्रीमेंट (मध्यम स्तर)",
      },
      intro: {
        bn: "কর্তা একবচন তো ক্রিয়ায় -s, কর্তা বহুবচন তো ক্রিয়ায় -s নেই — নিয়মটা সহজ শোনায়, কিন্তু everyone, one of, there is, the box of chocolates-এর মতো ফাঁদগুলোতেই পরীক্ষার নম্বর কাটে। এই পাঠে ঢোকার আগে present simple-এর s, be/has/do রূপ আর মৌলিক বচন-ধারণা (beginner পাঠগুলো) পরিষ্কার থাকা দরকার; Present Perfect vs Past Simple পাঠের পরে এটা পড়লে কাল আর সংখ্যা — দুটোই একসাথে পাকা হবে। এখানে শিখব: মূল সূত্র ও one-s rule, একবচন-টানা আভাস শব্দ, কর্তা-ক্রিয়ার মাঝের লম্বা ফ্রেজ ও relative clause, there is/there are, সমষ্টিবাচক নাম আর The number of / A number of-এর জুটি।",
        en: "A singular subject takes verb + s; a plural subject drops it — the rule sounds easy, but the traps (everyone, one of, there is, the box of chocolates) are exactly where marks are lost. Before this lesson, make sure your present-simple s, be/has/do forms and basic number sense are solid (the beginner lessons); reading this after Present Perfect vs Past Simple will cement tense and number together. Here you will learn: the core rules and the one-s rule, singular-forcing signal words, long phrases and relative clauses between subject and verb, there is/there are, collective nouns, and The number of / A number of.",
        hi: "एकवचन कर्ता के साथ क्रिया में -s, बहुवचन में नहीं — नियम सरल लगता है, पर everyone, one of, there is, the box of chocolates जैसे जाल में ही अंक कटते हैं। इस पाठ से पहले present simple की s, be/has/do रूप और मूल वचन-समझ (beginner पाठ) स्पष्ट हों; Present Perfect vs Past Simple के बाद पढ़ें तो काल और वचन दोनों पक्के होंगे। यहाँ सीखेंगे: मूल नियम और one-s rule, एकवचन-संकेत शब्द, कर्ता-क्रिया के बीच लंबे वाक्यांश और relative clause, there is/there are, सामूहिक संज्ञाएँ और The number of / A number of।",
      },
      roadmap: [
        { bn: "🤝 Agreement মানে কী — ক্রিয়া কোথায় কোথায় মেলে", en: "🤝 What agreement means — where the verb matches", hi: "🤝 Agreement का अर्थ — क्रिया कहाँ-कहाँ मेल खाती है" },
        { bn: "🏗️ one-s rule আর subject খোঁজার সূত্র", en: "🏗️ The one-s rule and how to find the subject", hi: "🏗️ one-s rule और subject खोजने का सूत्र" },
        { bn: "🚦 each, every, everyone, neither, one of — একবচন-টানা শব্দ", en: "🚦 each, every, everyone, neither, one of — the singular-forcing words", hi: "🚦 each, every, everyone, neither, one of — एकवचन-संकेत शब्द" },
        { bn: "🧩 লম্বা ফ্রেজ আর relative clause-এর মিল", en: "🧩 Long phrases and relative-clause agreement", hi: "🧩 लंबे वाक्यांश और relative clause का मेल" },
        { bn: "🙈 there is/are, সমষ্টিবাচক নাম আর number-এর জুটি", en: "🙈 there is/are, collective nouns and the number pair", hi: "🙈 there is/are, सामूहिक संज्ञाएँ और number की जोड़ी" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল ও মূল কারণ", en: "⚠️ Common Bengali-speaker mistakes and their root causes", hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ और मूल कारण" },
        { bn: "📖 স্কুলের ঘোষণায় সব ফাঁদ একসাথে", en: "📖 Every trap together in a school announcement", hi: "📖 स्कूल की घोषणा में सारे जाल एक साथ" },
        { bn: "📊 সাত সূত্র + কঠিন কর্তার মিল-টেবিল", en: "📊 Seven rules + the tricky-subject agreement table", hi: "📊 सात सूत्र + कठिन कर्ताओं की मेल-तालिका" },
      ],
      sections: [
        {
          heading: {
            bn: "🤝 কখন ব্যবহার হয় — কর্তা বললে ক্রিয়া মানবে",
            en: "🤝 When it matters — the verb follows the subject",
            hi: "🤝 कब ज़रूरी — क्रिया कर्ता का पालन करती है",
          },
          lead: {
            bn: "Agreement মানেই মিল — কর্তা এক না বহু, ক্রিয়া সেটাই মানবে।",
            en: "Agreement is matching — one subject or many, the verb obeys it.",
            hi: "Agreement यानी मेल — कर्ता एक हो या अनेक, क्रिया वही मानेगी।",
          },
          points: [
            { bn: "**Agreement** মানে কর্তার সংখ্যা অনুযায়ী ক্রিয়ার রূপ — কর্তা বললে ক্রিয়া মানবে।", en: "**Agreement** means the verb matches the number of the subject — the verb follows the subject.", hi: "**Agreement** का अर्थ कर्ता की संख्या के अनुसार क्रिया का रूप — क्रिया कर्ता का पालन करती है।" },
            { bn: "**চার জায়গায়** মিল দেখা যায়: present simple-এর -s (he plays / they play), be (am/is/are, was/were), have/has, আর প্রশ্ন-নেগেটিভে do/does।", en: "**Four places** carry the match: the present-simple -s (he plays / they play), be (am/is/are, was/were), have/has, and do/does in questions and negatives.", hi: "**चार जगह** मेल दिखता है: present simple की -s (he plays / they play), be (am/is/are, was/were), have/has, और प्रश्न-नकार में do/does।" },
            { bn: "সূক্ষ্ম কথা: ইংরেজিতে ক্রিয়ার **-s** মানে একবচন কর্তা (he plays), কিন্তু নামের -s মানে বহুবচন (two boys) — চিহ্ন উল্টো দিকে, এখানেই গোলমালের শুরু।", en: "The subtlety: in English verb **-s** signals a singular subject (he plays), but noun -s signals a plural (two boys) — opposite signs, where the confusion begins.", hi: "सूक्ष्म बात: अंग्रेज़ी में क्रिया की **-s** = एकवचन कर्ता (he plays), पर संज्ञा की -s = बहुवचन (two boys) — चिह्न विपरीत, यहीं उलझन शुरू।" },
            { bn: "বাংলায় ক্রিয়া নামের সংখ্যায় এভাবে বদলায় না — তাই এই হাতে-হাতে মিলটা অভ্যাসে আনতে হয়: রোজ দু-একটা বাক্য বলুন।", en: "Bengali verbs do not change with the noun's number — so train the reflex: speak a couple of sentences every day.", hi: "हिंदी में क्रिया संज्ञा की संख्या से इस तरह नहीं बदलती — रोज़ दो-चार वाक्य बोलकर आदत बनाएँ।" },
          ],
          examples: [
            { wrong: "He play cricket every Sunday.", right: "He plays cricket every Sunday.", note: { bn: "তৃতীয় পুরুষ একবচন কর্তা → ক্রিয়ায় -s।", en: "A third-person singular subject → verb + s.", hi: "तृतीय पुरुष एकवचन कर्ता → क्रिया में -s।" } },
            { wrong: "The children plays in the field.", right: "The children play in the field.", note: { bn: "children বহুবচন (child-এর plural, s ছাড়া) → ক্রিয়ায় s নেই।", en: "children is plural (the plural of child, without s) → no s on the verb.", hi: "children बहुवचन है (child का plural, s के बिना) → क्रिया में s नहीं।" } },
            { wrong: "My brother and my sister is coming.", right: "My brother and my sister are coming.", note: { bn: "and-এ জোড়া লাগলে কর্তা বহুবচন → are।", en: "Joined by and, the subject becomes plural → are.", hi: "and से जुड़ने पर कर्ता बहुवचन → are।" } },
            { wrong: "Rina and Rahim has finished the project.", right: "Rina and Rahim have finished the project.", note: { bn: "দুই ব্যক্তির জোড়া → have; has শুধু একবচন তৃতীয় পুরুষে।", en: "A pair of two people → have; has only follows a singular third-person subject.", hi: "दो लोगों की जोड़ी → have; has केवल एकवचन तृतीय पुरुष के साथ।" } },
            { wrong: "The news are very good.", right: "The news is very good.", note: { bn: "news শেষে s থাকলেও একবচন — নামের s-এ ফাঁদ; maths/physics-ও তাই।", en: "news ends in s but is singular — the noun-s trap; so are maths and physics.", hi: "news के अंत में s होते हुए भी एकवचन — संज्ञा की s का जाल; maths और physics भी।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — one-s rule আর subject খোঁজার সূত্র",
            en: "🏗️ Formation — the one-s rule and how to find the subject",
            hi: "🏗️ गठन — one-s rule और subject खोजने का सूत्र",
          },
          lead: {
            bn: "একটা সূত্র আর subject খোঁজার একটা কৌশল — অর্ধেক নিয়ম এখানেই শেষ।",
            en: "One rule and one subject-finding trick — half the topic is done right here.",
            hi: "एक सूत्र और subject खोजने की एक तरकीब — आधा पाठ यहीं खत्म।",
          },
          points: [
            { bn: "**One-s rule** মুখস্ত করুন: একবচন কর্তায় নামে s নেই তো ক্রিয়ায় থাকে — the boy plays।", en: "Memorise the **one-s rule**: a singular subject with no -s on the noun keeps -s on the verb — the boy plays.", hi: "**One-s rule** रटें: एकवचन कर्ता में संज्ञा पर s नहीं तो क्रिया पर होगा — the boy plays।" },
            { bn: "উল্টোটাও সত্য: বহুবচন কর্তায় নামে s আছে তো ক্রিয়ায় নেই — the boys play।", en: "The reverse holds too: a plural subject with -s on the noun drops it from the verb — the boys play.", hi: "उल्टा भी सही: बहुवचन कर्ता में संज्ञा पर s है तो क्रिया पर नहीं — the boys play।" },
            { bn: "Subject খুঁজতে ক্রিয়ার আগে জিজ্ঞেস করুন: কে বা কী কাজটা করছে?", en: "To find the subject, ask who or what is doing the action before the verb.", hi: "subject खोजने के लिए क्रिया से पहले पूछें: कौन या क्या काम कर रहा है?" },
            { bn: "**Preposition** (of, with, for...)-এর পরের নাম কখনোই subject নয়।", en: "A noun after a **preposition** (of, with, for...) can never be the subject.", hi: "**Preposition** (of, with, for...) के बाद की संज्ञा कभी subject नहीं।" },
            { bn: "নিচের টেবিলে দুই দল কর্তার ক্রিয়া-রূপ এক নজরে।", en: "The table below shows the verb forms for the two subject groups at a glance.", hi: "नीचे तालिका में दोनों कर्ता-समूहों के क्रिया-रूप एक नज़र में।" },
          ],
          formula: {
            bn: "one-s rule: নামে s নেই → ক্রিয়ায় s (the boy plays); নামে s আছে → ক্রিয়ায় s নেই (the boys play)",
            en: "one-s rule: no s on the noun → s on the verb (the boy plays); s on the noun → no s on the verb (the boys play)",
            hi: "one-s rule: संज्ञा पर s नहीं → क्रिया पर s (the boy plays); संज्ञा पर s → क्रिया पर s नहीं (the boys play)",
          },
          table: {
            head: [
              { bn: "কর্তা", en: "Subject", hi: "कर्ता" },
              { bn: "ক্রিয়ার রূপ", en: "Verb forms", hi: "क्रिया रूप" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "I / you / we / they", en: "I / you / we / they", hi: "I / you / we / they" },
                { bn: "play, have, are, were, do", en: "play, have, are, were, do", hi: "play, have, are, were, do" },
                { bn: "They play cricket", en: "They play cricket", hi: "They play cricket" },
              ],
              [
                { bn: "he / she / it", en: "he / she / it", hi: "he / she / it" },
                { bn: "plays, has, is, was, does", en: "plays, has, is, was, does", hi: "plays, has, is, was, does" },
                { bn: "He plays cricket", en: "He plays cricket", hi: "He plays cricket" },
              ],
            ],
          },
          examples: [
            { wrong: "The list of names were on the desk.", right: "The list of names was on the desk.", note: { bn: "subject = list (একবচন); of names শুধু বর্ণনা — ক্রিয়া list-এর সাথে।", en: "The subject is list (singular); of names is only description — the verb follows list.", hi: "subject = list (एकवचन); of names केवल वर्णन — क्रिया list से मेल खाएगी।" } },
            { wrong: "My friends is waiting outside.", right: "My friends are waiting outside.", note: { bn: "friends বহুবচন → are/were।", en: "friends is plural → are/were.", hi: "friends बहुवचन है → are/were।" } },
            { wrong: "Rice and curry are my favourite dish.", right: "Rice and curry is my favourite dish.", note: { bn: "দুটো জিনিস মিলে একটা থালা — একক ভাব → একবচন ক্রিয়া।", en: "Two items forming one plate — a single-unit idea → singular verb.", hi: "दो चीज़ें मिलकर एक थाली — एक-इकाई भाव → एकवचन क्रिया।" } },
            { wrong: "Every one of the boys were punished.", right: "Every one of the boys was punished.", note: { bn: "every one = একে একে প্রত্যেকটা → একবচন; boys-এর s-এ চোখ যাবে না।", en: "every one = each single one → singular; do not let the s of boys catch your eye.", hi: "every one = हर एक → एकवचन; boys की s पर नज़र न जाए।" } },
            { wrong: "My trousers is new.", right: "My trousers are new.", note: { bn: "trousers/scissors/jeans — দুই পায়ের জিনিস, সবসময় বহুবচন → are।", en: "trousers/scissors/jeans — two-legged things, always plural → are.", hi: "trousers/scissors/jeans — दो पाँव वाली चीज़ें, हमेशा बहुवचन → are।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — each, every, everyone, neither, one of",
            en: "🚦 Signal words — each, every, everyone, neither, one of",
            hi: "🚦 संकेत शब्द — each, every, everyone, neither, one of",
          },
          lead: {
            bn: "কিছু শব্দ দেখামাত্র কর্তা একবচন — এদের তালিকা মুখস্থ করুন।",
            en: "Certain words force a singular subject — memorise the list.",
            hi: "कुछ शब्द देखते ही कर्ता एकवचन — यह सूची रट लें।",
          },
          points: [
            { bn: "**each / every** দেখামাত্র কর্তা একবচন: each student, every boy।", en: "**each / every** force a singular subject at once: each student, every boy.", hi: "**each / every** देखते ही कर्ता एकवचन: each student, every boy।" },
            { bn: "everyone/everybody, someone/somebody, anyone/anybody, no one/nobody — এই পরিবারটাও সবসময় একবচন।", en: "everyone/everybody, someone/somebody, anyone/anybody, no one/nobody — this whole family is always singular.", hi: "everyone/everybody, someone/somebody, anyone/anybody, no one/nobody — यह पूरा परिवार हमेशा एकवचन।" },
            { bn: "**either / neither**-ও একবচন ক্রিয়া চায়।", en: "**either / neither** also take a singular verb.", hi: "**either / neither** भी एकवचन क्रिया लेते हैं।" },
            { bn: "**one of + বহুবচন নাম** — subject 'one', নামটা নয়: One of the boys ___।", en: "**one of + plural noun** — the subject is 'one', not the noun: One of the boys ___.", hi: "**one of + बहुवचन संज्ञा** — subject 'one' है, संज्ञा नहीं: One of the boys ___।" },
            { bn: "ফাঁদ: 'boys' দেখে বহুবচন ক্রিয়া বসে — অথচ কাজটা করছে 'one'।", en: "The trap: seeing 'boys', learners reach for a plural verb — though the doer is 'one'.", hi: "जाल: 'boys' देखकर बहुवचन क्रिया आ जाती है — पर काम करता है 'one'।" },
            { bn: "আরেক ফাঁদ: বাংলা 'সবাই' টেনে everyone-কে বহুবচন ভাবা — ইংরেজিতে 'সবাই' হলেও everyone একবচন।", en: "The other trap: translating 'সবাই' makes everyone feel plural — but in English everyone is singular.", hi: "दूसरा जाल: 'सब लोग' सोचकर everyone को बहुवचन बनाना — अंग्रेज़ी में everyone एकवचन।" },
          ],
          examples: [
            { wrong: "Everyone have finished their lunch.", right: "Everyone has finished lunch.", note: { bn: "everyone সবসময় একবচন ক্রিয়া — has; 'সবাই' ভাব থাকলেও।", en: "everyone always takes a singular verb — has; even with the 'all of them' feeling.", hi: "everyone हमेशा एकवचन क्रिया लेता है — has; 'सब लोग' का भाव होते हुए भी।" } },
            { wrong: "Neither of the answers are correct.", right: "Neither of the answers is correct.", note: { bn: "neither (of...) → একবচন; 'দুটোর কোনোটাই না' — তবু ক্রিয়া একবচন।", en: "neither (of...) → singular; 'not one of the two' — yet the verb stays singular.", hi: "neither (of...) → एकवचन; 'दोनों में कोई नहीं' — फिर भी क्रिया एकवचन।" } },
            { wrong: "One of my friend lives in Sylhet.", right: "One of my friends lives in Sylhet.", note: { bn: "one of-এর পরে বহুবচন নাম (friends), কিন্তু ক্রিয়া একবচন (lives) — subject 'one'।", en: "After one of comes a plural noun (friends), but a singular verb (lives) — the subject is 'one'.", hi: "one of के बाद बहुवचन संज्ञा (friends), पर क्रिया एकवचन (lives) — subject 'one' है।" } },
            { wrong: "Each of the students have a locker.", right: "Each of the students has a locker.", note: { bn: "each → একে একে প্রত্যেকে → has।", en: "each → one by one → has.", hi: "each → हर एक → has।" } },
            { wrong: "Somebody were knocking at the door.", right: "Somebody was knocking at the door.", note: { bn: "somebody/anybody/nobody → was/is/has — সবই একবচন।", en: "somebody/anybody/nobody → was/is/has — all singular.", hi: "somebody/anybody/nobody → was/is/has — सब एकवचन।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 মাঝের ফাঁদ — লম্বা ফ্রেজ আর relative clause-এর মিল",
            en: "🧩 The distance trap — long phrases and relative-clause agreement",
            hi: "🧩 दूरी का जाल — लंबे वाक्यांश और relative clause का मेल",
          },
          lead: {
            bn: "কর্তা আর ক্রিয়ার মাঝ যত লম্বা, চোখের ভুল তত সহজ।",
            en: "The longer the gap between subject and verb, the more easily the eye slips.",
            hi: "कर्ता-क्रिया के बीच की दूरी बढ़े, तो नज़र की चूक आसान।",
          },
          points: [
            { bn: "কর্তা আর ক্রিয়ার মাঝের ফ্রেজ যত লম্বা, ভুল তত সহজ — চোখ কাছের নামটার সংখ্যায় চলে যায়।", en: "The longer the phrase between subject and verb, the easier the mistake — the eye slips to the nearest noun.", hi: "कर्ता और क्रिया के बीच वाक्यांश जितना लंबा, गलती उतनी आसान — नज़र पास की संज्ञा पर चली जाती है।" },
            { bn: "subject মূল নামটাই — of/with/including-ফ্রেজ শুধু বর্ণনা: The box of chocolates **is** on the table (box একবচন)।", en: "The subject is the head noun — of/with/including phrases are only description: The box of chocolates **is** on the table (box is singular).", hi: "subject मूल संज्ञा है — of/with/including वाक्यांश केवल वर्णन: The box of chocolates **is** on the table (box एकवचन)।" },
            { bn: "আরেকটা: The quality of the products is excellent — subject quality।", en: "Another: The quality of the products is excellent — the subject is quality.", hi: "एक और: The quality of the products is excellent — subject quality है।" },
            { bn: "**along with / as well as / together with** কর্তার সংখ্যা বদলায় না।", en: "**along with / as well as / together with** never change the subject's number.", hi: "**along with / as well as / together with** कर्ता की संख्या नहीं बदलते।" },
            { bn: "Relative clause-এ who/that/which-এর ক্রিয়া তার **antecedent**-এর সংখ্যা মানে চলে: the list of items that is on the desk (that = list)।", en: "In a relative clause, the verb after who/that/which agrees with its own **antecedent**: the list of items that is on the desk (that = list).", hi: "relative clause में who/that/which की क्रिया अपने **antecedent** से मेल खाती है: the list of items that is on the desk (that = list)।" },
            { bn: "antecedent বহুবচন হলে বহুবচন ক্রিয়া: the students who study hard (who = students)।", en: "A plural antecedent takes a plural verb: the students who study hard (who = students).", hi: "antecedent बहुवचन हो तो बहुवचन क्रिया: the students who study hard (who = students)।" },
            { bn: "সূত্র: মাঝের ফ্রেজ মুছে বাক্যটা আবার পড়ুন।", en: "Formula: delete the middle phrase and read the sentence again.", hi: "सूत्र: बीच का वाक्यांश हटाकर वाक्य फिर पढ़ें।" },
          ],
          formula: {
            bn: "মাঝের of/with/along with-ফ্রেজ মুছুন → আসল কর্তা + সঠিক ক্রিয়া ধরা পড়বে",
            en: "Delete the of/with/along with phrases → the real subject and the right verb surface",
            hi: "बीच के of/with/along with वाक्यांश हटाएँ → असली subject + सही क्रिया सामने",
          },
          examples: [
            { wrong: "The box of chocolates are on the table.", right: "The box of chocolates is on the table.", note: { bn: "subject box — chocolates শুধু of-এর পরের বর্ণনা।", en: "The subject is box — chocolates is only the phrase after of.", hi: "subject box है — chocolates केवल of के बाद का वर्णन।" } },
            { wrong: "The colour of these walls have faded.", right: "The colour of these walls has faded.", note: { bn: "রঙটা একটাই ফিকে হয়েছে — colour একবচন।", en: "One colour has faded — colour is singular.", hi: "एक ही रंग फीका पड़ा — colour एकवचन।" } },
            { wrong: "The teacher, along with her students, were present.", right: "The teacher, along with her students, was present.", note: { bn: "along with কর্তার সংখ্যা বদলায় না — কর্তা এখনো teacher।", en: "along with does not change the subject — the subject is still teacher.", hi: "along with कर्ता की संख्या नहीं बदलता — कर्ता फिर भी teacher।" } },
            { wrong: "This is one of the books that was written by Tagore.", right: "This is one of the books that were written by Tagore.", note: { bn: "এখানে that = books (বহুবচন) — 'তাঁর লেখা এমন বইগুলোর একটা'; ক্লজের ক্রিয়া books-এর সাথে।", en: "Here that = books (plural) — 'one of those books of his'; the clause verb follows books.", hi: "यहाँ that = books (बहुवचन) — 'उनकी लिखी ऐसी किताबों में से एक'; क्लज़ की क्रिया books से मेल खाएगी।" } },
            { wrong: "The students who plays football needs new shoes.", right: "The students who play football need new shoes.", note: { bn: "who-র antecedent students বহুবচন — মূল ক্রিয়া ও ক্লজ-ক্রিয়া দুটোই বহুবচন।", en: "The antecedent of who is students (plural) — both the main verb and the clause verb go plural.", hi: "who का antecedent students (बहुवचन) — मुख्य क्रिया और क्लज़-क्रिया दोनों बहुवचन।" } },
          ],
        },
        {
          heading: {
            bn: "🙈 আসল কর্তা লুকিয়ে — there is/are, সমষ্টিবাচক নাম আর number-এর জুটি",
            en: "🙈 Hidden subjects — there is/are, collective nouns, and the number pair",
            hi: "🙈 छिपा subject — there is/are, सामूहिक संज्ञाएँ और number की जोड़ी",
          },
          lead: {
            bn: "there, সমষ্টিবাচক নাম, number-এর জুটি — আসল কর্তা এখানেই লুকিয়ে থাকে।",
            en: "There, collective nouns and the number pair — this is where the real subject hides.",
            hi: "there, सामूहिक संज्ञाएँ, number की जोड़ी — असली subject यहीं छिपता है।",
          },
          points: [
            { bn: "**there is / there are** — there কর্তা নয়, আসল কর্তা পরে বসে: There is a problem / There are two problems।", en: "**there is / there are** — there is not the subject; the real subject sits after the verb: There is a problem / There are two problems.", hi: "**there is / there are** — there subject नहीं; असली subject क्रिया के बाद बैठता है: There is a problem / There are two problems।" },
            { bn: "**সমষ্টিবাচক নাম** — team, family, committee, audience, government: একক হিসেবে ভাবলে একবচন (Our team is winning)।", en: "**Collective nouns** — team, family, committee, audience, government: as one unit they take a singular verb (Our team is winning).", hi: "**सामूहिक संज्ञाएँ** — team, family, committee, audience, government: एक इकाई मानें तो एकवचन (Our team is winning)।" },
            { bn: "সদস্যদের আলাদা আলাদা ভাবলে বহুবচন: The team are arguing among themselves।", en: "As separate members they take a plural: The team are arguing among themselves.", hi: "सदस्यों को अलग-अलग मानें तो बहुवचन: The team are arguing among themselves।" },
            { bn: "পরীক্ষায় নিরাপদ পথ একবচন — তবে among themselves-এর মতো বহুবচন-ইঙ্গিত দেখলে বহুবচন।", en: "The safe exam path is singular — but plural signals like among themselves switch it to plural.", hi: "परीक्षा में सुरक्षित रास्ता एकवचन — पर among themselves जैसा बहुवचन-संकेत हो तो बहुवचन।" },
            { bn: "**The number of** + বহুবচন = 'সংখ্যাটা' → একবচন ক্রিয়া: The number of students is increasing।", en: "**The number of** + plural = 'the figure' → singular verb: The number of students is increasing.", hi: "**The number of** + बहुवचन = 'संख्या' → एकवचन क्रिया: The number of students is increasing।" },
            { bn: "**A number of** + বহুবচন = 'কিছুসংখ্যক' → বহুবচন ক্রিয়া: A number of students are absent।", en: "**A number of** + plural = 'quite a few' → plural verb: A number of students are absent.", hi: "**A number of** + बहुवचन = 'काफ़ी सारे' → बहुवचन क्रिया: A number of students are absent।" },
            { bn: "একই সুতোয় most/some/all/half of + নাম → ক্রিয়া সেই নামের সংখ্যা মানে।", en: "On the same thread, most/some/all/half of + noun → the verb follows that noun's number.", hi: "उसी धागे पर most/some/all/half of + संज्ञा → क्रिया उस संज्ञा की संख्या मानेगी।" },
          ],
          formula: {
            bn: "The number of + বহুবচন → একবচন ক্রিয়া; A number of + বহুবচন → বহুবচন ক্রিয়া",
            en: "The number of + plural → singular verb; A number of + plural → plural verb",
            hi: "The number of + बहुवचन → एकवचन क्रिया; A number of + बहुवचन → बहुवचन क्रिया",
          },
          examples: [
            { wrong: "There is many temples in this town.", right: "There are many temples in this town.", note: { bn: "আসল কর্তা temples বহুবচন → are; there মাত্র পরিচয়-শব্দ।", en: "The real subject is temples (plural) → are; there is only an opener.", hi: "असली subject temples (बहुवचन) → are; there केवल उद्घाटक शब्द।" } },
            { wrong: "There were a strange noise last night.", right: "There was a strange noise last night.", note: { bn: "আসল কর্তা a noise একবচন → was।", en: "The real subject is a noise (singular) → was.", hi: "असली subject a noise (एकवचन) → was।" } },
            { wrong: "Our team are winning the match.", right: "Our team is winning the match.", note: { bn: "দল একক হিসেবে জিতছে — পরীক্ষার নিরাপদ রূপ একবচন।", en: "The team wins as one unit — the safe exam form is singular.", hi: "टीम एक इकाई के रूप में जीत रही है — परीक्षा के लिए सुरक्षित रूप एकवचन।" } },
            { wrong: "The number of road accidents have increased.", right: "The number of road accidents has increased.", note: { bn: "'সংখ্যাটা বেড়েছে' — subject number (একবচন)।", en: "'The figure has risen' — the subject is number (singular).", hi: "'संख्या बढ़ी है' — subject number (एकवचन)।" } },
            { wrong: "A number of students was absent today.", right: "A number of students were absent today.", note: { bn: "a number of = কিছুসংখ্যক শিক্ষার্থী → বহুবচন ক্রিয়া।", en: "a number of = quite a few students → plural verb.", hi: "a number of = काफ़ी सारे विद्यार्थी → बहुवचन क्रिया।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "বাংলা-মনের দুটো কারণেই এই ভুলগুলো বারবার হয় — কারণ জানলে ভুল থামে।",
            en: "Two habits of the Bengali mind keep causing these mistakes — know the cause and they stop.",
            hi: "बांग्ला-मस्तिष्क के दो कारणों से ये गलतियाँ दोहराई जाती हैं — कारण जानिए, गलती रुकेगी।",
          },
          points: [
            { bn: "কারণ ১: বাংলা ক্রিয়ায় s-জাতীয় চিহ্ন নেই ('মা ভাত রাঁধে', 'বাচ্চারা খেলছে') — তাই ইংরেজিতে s বসানোর রিফ্লেক্স দুর্বল।", en: "Cause 1: Bengali verbs carry no s-like mark of the noun's number — so the reflex to add -s in English is weak.", hi: "कारण 1: बांग्ला क्रिया में s जैसा चिह्न नहीं — इसलिए अंग्रेज़ी में -s लगाने की आदत कमज़ोर।" },
            { bn: "কারণ ২: 'সবাই', 'উভয়ে', 'কেউ' — সবগুলোই বহুবচন-মনে হয়, কিন্তু everyone/somebody/nobody একবচন।", en: "Cause 2: 'all', 'both', 'somebody' all feel plural — but everyone/somebody/nobody are singular.", hi: "कारण 2: 'सब लोग', 'दोनों', 'कोई' — सब बहुवचन लगते हैं, पर everyone/somebody/nobody एकवचन।" },
            { bn: "**both of**-এর পরে বহুবচন নাম + বহুবচন ক্রিয়া: Both of my brothers are doctors।", en: "**both of** takes a plural noun + plural verb: Both of my brothers are doctors.", hi: "**both of** के बाद बहुवचन संज्ञा + बहुवचन क्रिया: Both of my brothers are doctors।" },
            { bn: "**people** নিজেই বহুবচন (people are) — persons লিখতে হয় না।", en: "**people** is already plural (people are) — no need for persons.", hi: "**people** स्वयं बहुवचन है (people are) — persons लिखने की ज़रूरत नहीं।" },
            { bn: "**police, staff, cattle**-ও বহুবচন-আচরণ করে: The police are investigating।", en: "**police, staff, cattle** also behave as plurals: The police are investigating.", hi: "**police, staff, cattle** भी बहुवचन-व्यवहार करते हैं: The police are investigating।" },
          ],
          examples: [
            { wrong: "My mother make great biryani.", right: "My mother makes great biryani.", note: { bn: "একবচন তৃতীয় পুরুষ → makes; s-বাদ পড়াই সাধারণ ভুল।", en: "Third-person singular → makes; dropping the s is the everyday slip.", hi: "तृतीय पुरुष एकवचन → makes; s छूट जाना ही रोज़ की गलती।" } },
            { wrong: "People is waiting for the bus.", right: "People are waiting for the bus.", note: { bn: "people নিজেই বহুবচন — persons লিখতে হয় না।", en: "people is already plural — no need for persons.", hi: "people स्वयं बहुवचन है — persons लिखने की ज़रूरत नहीं।" } },
            { wrong: "The police has arrested the thief.", right: "The police have arrested the thief.", note: { bn: "police বহুবচন-আচরণ করে → have/are।", en: "police behaves as a plural → have/are.", hi: "police बहुवचन की तरह चलता है → have/are।" } },
            { wrong: "He don't know the answer.", right: "He doesn't know the answer.", note: { bn: "একবচন কর্তায় doesn't; don't শুধু I/you/we/they।", en: "A singular subject takes doesn't; don't only goes with I/you/we/they.", hi: "एकवचन कर्ता के साथ doesn't; don't केवल I/you/we/they के साथ।" } },
            { wrong: "Both of my brother is doctors.", right: "Both of my brothers are doctors.", note: { bn: "both → বহুবচন ক্রিয়া, আর both of-এর পরে বহুবচন নাম (brothers)।", en: "both → a plural verb, and a plural noun after both of (brothers).", hi: "both → बहुवचन क्रिया, और both of के बाद बहुवचन संज्ञा (brothers)।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 A short story to see it all",
            hi: "📖 एक छोटी कहानी में सब देखें",
          },
          lead: {
            bn: "স্কুলের বার্ষিক সভার এক ঘোষণাতেই প্রায় সব ফাঁদ লুকানো।",
            en: "One school-announcement paragraph hides almost every trap in this lesson.",
            hi: "स्कूल की एक घोषणा में लगभग सारे जाल छिपे हैं।",
          },
          points: [
            { bn: "বার্ষিক সভার আগের দিন সাধারণ-শিক্ষক ঘরে ঘরে খবর দিচ্ছিলেন: 'The list of participants is ready, but there are two problems.'", en: "The day before the annual function, the class teacher announced room by room: 'The list of participants is ready, but there are two problems.'", hi: "वार्षिक समारोह से एक दिन पहले सामान्य शिक्षक कमरा-दर-कमरा सूचना दे रहे थे: 'The list of participants is ready, but there are two problems.'" },
            { bn: "'The number of chairs is too small, and a number of guests are coming from Sylhet.'", en: "'The number of chairs is too small, and a number of guests are coming from Sylhet.'", hi: "'The number of chairs is too small, and a number of guests are coming from Sylhet.'" },
            { bn: "'Everyone has to sit somewhere! Our team is preparing the hall, and the students who are on duty have arranged the sound system.'", en: "'Everyone has to sit somewhere! Our team is preparing the hall, and the students who are on duty have arranged the sound system.'", hi: "'Everyone has to sit somewhere! Our team is preparing the hall, and the students who are on duty have arranged the sound system.'" },
            { bn: "'Neither of the two microphones is working, and the principal, along with two teachers, is checking everything right now.'", en: "'Neither of the two microphones is working, and the principal, along with two teachers, is checking everything right now.'", hi: "'Neither of the two microphones is working, and the principal, along with two teachers, is checking everything right now.'" },
            { bn: "এক প্যারায় সব ফাঁদ: list is, there are, the number is, a number are, everyone has, team is, students who are... have, neither is, principal... is!", en: "Every trap in one paragraph: list is, there are, the number is, a number are, everyone has, team is, students who are... have, neither is, principal... is!", hi: "एक पैराग्राफ में सारे जाल: list is, there are, the number is, a number are, everyone has, team is, students who are... have, neither is, principal... is!" },
          ],
          examples: [
            { wrong: "The list of participants are ready.", right: "The list of participants is ready.", note: { bn: "subject list — participants শুধু বর্ণনা।", en: "The subject is list — participants is only description.", hi: "subject list है — participants केवल वर्णन।" } },
            { wrong: "There is two problems.", right: "There are two problems.", note: { bn: "আসল কর্তা problems বহুবচন → are।", en: "The real subject is problems (plural) → are.", hi: "असली subject problems (बहुवचन) → are।" } },
            { wrong: "Neither of the microphones are working.", right: "Neither of the microphones is working.", note: { bn: "neither → একবচন ক্রিয়া।", en: "neither → a singular verb.", hi: "neither → एकवचन क्रिया।" } },
            { wrong: "The principal, along with two teachers, are checking everything.", right: "The principal, along with two teachers, is checking everything.", note: { bn: "along with-এর পরের জিনিস কর্তা নয় — কর্তা principal (একবচন)।", en: "What follows along with is not the subject — the subject is principal (singular).", hi: "along with के बाद की चीज़ subject नहीं — subject principal (एकवचन)।" } },
            { wrong: "The students who is on duty have arranged the sound system.", right: "The students who are on duty have arranged the sound system.", note: { bn: "who-র antecedent students বহুবচন — ক্লজের ক্রিয়াও are।", en: "The antecedent of who is students (plural) — the clause verb takes are too.", hi: "who का antecedent students (बहुवचन) — क्लज़ की क्रिया भी are लेगी।" } },
          ],
        },
        {
          heading: {
            bn: "📊 এক নজরে — পুরো পাঠ ছোট করে",
            en: "📊 At a glance — the whole lesson in brief",
            hi: "📊 एक नज़र में — पूरा पाठ संक्षेप में",
          },
          lead: {
            bn: "সাত সূত্র আর এক টেবিল — পুরো পাঠের সারমর্ম হাতের মুঠোয়।",
            en: "Seven rules and one table — the whole lesson in your pocket.",
            hi: "सात सूत्र और एक तालिका — पूरा पाठ मुट्ठी में।",
          },
          points: [
            { bn: "**সূত্র ১** — one-s rule: একবচন কর্তা → ক্রিয়ায় s; বহুবচন কর্তা → ক্রিয়ায় s নেই।", en: "**Rule 1** — one-s rule: singular subject → -s on the verb; plural subject → no -s.", hi: "**सूत्र 1** — one-s rule: एकवचन कर्ता → क्रिया में s; बहुवचन → s नहीं।" },
            { bn: "**সূত্র ২** — of/with/along with-ফ্রেজ বাদ দিয়ে subject খুঁজুন — ক্রিয়া মূল নামের সাথেই।", en: "**Rule 2** — delete of/with/along with phrases to find the subject — the verb follows the head noun.", hi: "**सूत्र 2** — of/with/along with वाक्यांश हटाकर subject खोजें — क्रिया मूल संज्ञा से मेल खाएगी।" },
            { bn: "**সূত্র ৩** — each/every/everyone/somebody/nobody/either/neither/one of → একবচন।", en: "**Rule 3** — each/every/everyone/somebody/nobody/either/neither/one of → singular.", hi: "**सूत्र 3** — each/every/everyone/somebody/nobody/either/neither/one of → एकवचन।" },
            { bn: "**সূত্র ৪** — there-এর পরের নামই আসল কর্তা।", en: "**Rule 4** — after there, the noun that follows is the real subject.", hi: "**सूत्र 4** — there के बाद की संज्ञा ही असली subject।" },
            { bn: "**সূত্র ৫** — and-জোড়া → বহুবচন; একক-ভাব (rice and curry) হলে একবচন।", en: "**Rule 5** — an and-pair → plural; a single-unit idea (rice and curry) → singular.", hi: "**सूत्र 5** — and-जोड़ी → बहुवचन; एक-इकाई भाव (rice and curry) → एकवचन।" },
            { bn: "**সূত্র ৬** — The number of → একবচন; A number of → বহুবচন।", en: "**Rule 6** — The number of → singular; A number of → plural.", hi: "**सूत्र 6** — The number of → एकवचन; A number of → बहुवचन।" },
            { bn: "**সূত্র ৭** — people/police/staff/cattle → বহুবচন।", en: "**Rule 7** — people/police/staff/cattle → plural.", hi: "**सूत्र 7** — people/police/staff/cattle → बहुवचन।" },
          ],
          table: {
            head: [
              { bn: "কর্তা", en: "Subject", hi: "कर्ता" },
              { bn: "ক্রিয়া রূপ", en: "Verb form", hi: "क्रिया रूप" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "each / every", en: "each / every", hi: "each / every" },
                { bn: "একবচন", en: "singular", hi: "एकवचन" },
                { bn: "Each student has a locker", en: "Each student has a locker", hi: "Each student has a locker" },
              ],
              [
                { bn: "everyone / somebody / nobody", en: "everyone / somebody / nobody", hi: "everyone / somebody / nobody" },
                { bn: "একবচন", en: "singular", hi: "एकवचन" },
                { bn: "Everybody was happy", en: "Everybody was happy", hi: "Everybody was happy" },
              ],
              [
                { bn: "one of + বহুবচন নাম", en: "one of + plural noun", hi: "one of + बहुवचन संज्ञा" },
                { bn: "একবচন (subject 'one')", en: "singular (the subject is 'one')", hi: "एकवचन (subject 'one')" },
                { bn: "One of my friends lives in Sylhet", en: "One of my friends lives in Sylhet", hi: "One of my friends lives in Sylhet" },
              ],
              [
                { bn: "either / neither (of)", en: "either / neither (of)", hi: "either / neither (of)" },
                { bn: "একবচন", en: "singular", hi: "एकवचन" },
                { bn: "Neither of the answers is correct", en: "Neither of the answers is correct", hi: "Neither of the answers is correct" },
              ],
              [
                { bn: "and-জোড়া", en: "an and-pair", hi: "and-जोड़ी" },
                { bn: "বহুবচন", en: "plural", hi: "बहुवचन" },
                { bn: "Rina and Rahim have finished", en: "Rina and Rahim have finished", hi: "Rina and Rahim have finished" },
              ],
              [
                { bn: "সমষ্টিবাচক (team, family)", en: "collective (team, family)", hi: "सामूहिक (team, family)" },
                { bn: "একক ভাবে একবচন", en: "singular as one unit", hi: "एक इकाई में एकवचन" },
                { bn: "Our team is winning", en: "Our team is winning", hi: "Our team is winning" },
              ],
              [
                { bn: "The number of + বহুবচন", en: "The number of + plural", hi: "The number of + बहुवचन" },
                { bn: "একবচন", en: "singular", hi: "एकवचन" },
                { bn: "The number of students is increasing", en: "The number of students is increasing", hi: "The number of students is increasing" },
              ],
              [
                { bn: "A number of + বহুবচন", en: "A number of + plural", hi: "A number of + बहुवचन" },
                { bn: "বহুবচন", en: "plural", hi: "बहुवचन" },
                { bn: "A number of students are absent", en: "A number of students are absent", hi: "A number of students are absent" },
              ],
            ],
          },
          examples: [
            { wrong: "The quality of the mangoes are excellent.", right: "The quality of the mangoes is excellent.", note: { bn: "মানটা (quality) একবচন — mangoes শুধু বর্ণনা।", en: "It is the quality (singular) that is excellent — mangoes is only description.", hi: "गुणवत्ता (quality) एकवचन है — mangoes केवल वर्णन।" } },
            { wrong: "Everybody were happy.", right: "Everybody was happy.", note: { bn: "everybody → একবচন → was।", en: "everybody → singular → was.", hi: "everybody → एकवचन → was।" } },
            { wrong: "The number of tourists have doubled.", right: "The number of tourists has doubled.", note: { bn: "সংখ্যাটা দ্বিগুণ হয়েছে — subject number।", en: "The figure has doubled — the subject is number.", hi: "संख्या दोगुनी हुई — subject number है।" } },
            { wrong: "Rina and her sisters is going to the fair.", right: "Rina and her sisters are going to the fair.", note: { bn: "and-জোড়া (রিনা + বোনেরা) → বহুবচন → are।", en: "An and-pair (Rina + her sisters) → plural → are.", hi: "and-जोड़ी (रीना + बहनें) → बहुवचन → are।" } },
          ],
        },
      ],
      tips: [
        { bn: "ক্রিয়ার আগের of/with/along with-ফ্রেজ মুছে বাক্য পড়ুন — subject আর সঠিক ক্রিয়া দুটোই ধরা পড়বে।", en: "Delete of/with/along with phrases before the verb — the subject and the right verb will surface.", hi: "क्रिया से पहले के of/with/along with वाक्यांश हटाकर पढ़ें — subject और सही क्रिया सामने आ जाएँगे।" },
        { bn: "one-s rule: একবচন কর্তা → ক্রিয়ায় s (he plays); বহুবচন কর্তা → ক্রিয়ায় s নেই (they play)।", en: "one-s rule: singular subject → s on the verb (he plays); plural subject → no s (they play).", hi: "one-s rule: एकवचन कर्ता → क्रिया में s (he plays); बहुवचन → s नहीं (they play)।" },
        { bn: "each, every, everyone, somebody, nobody, either, neither, one of — সবই একবচন ক্রিয়া চায়।", en: "each, every, everyone, somebody, nobody, either, neither, one of — all of them demand a singular verb.", hi: "each, every, everyone, somebody, nobody, either, neither, one of — सब एकवचन क्रिया माँगते हैं।" },
        { bn: "everyone-কে 'সবাই' ভেবে বহুবচন নয় — ইংরেজিতে একবচন।", en: "Do not treat everyone as plural because of 'all of them' — in English it is singular.", hi: "'सब लोग' सोचकर everyone को बहुवचन न बनाएँ — अंग्रेज़ी में यह एकवचन है।" },
        { bn: "there-এর পরে আসল কর্তা: There is a problem / There are problems।", en: "The real subject follows there: There is a problem / There are problems.", hi: "there के बाद असली subject: There is a problem / There are problems।" },
        { bn: "and-জোড়া → বহুবচন; একক-ভাব (rice and curry, bread and butter) → একবচন।", en: "An and-pair → plural; a single-unit idea (rice and curry, bread and butter) → singular.", hi: "and-जोड़ी → बहुवचन; एक-इकाई भाव (rice and curry, bread and butter) → एकवचन।" },
        { bn: "along with / as well as / together with / including কর্তার সংখ্যা বদলায় না।", en: "along with / as well as / together with / including never change the subject's number.", hi: "along with / as well as / together with / including कर्ता की संख्या नहीं बदलते।" },
        { bn: "The number of + বহুবচন → একবচন ক্রিয়া; A number of + বহুবচন → বহুবচন ক্রিয়া।", en: "The number of + plural → singular verb; A number of + plural → plural verb.", hi: "The number of + बहुवचन → एकवचन क्रिया; A number of + बहुवचन → बहुवचन क्रिया।" },
        { bn: "people, police, staff, cattle — দেখতে একবচন-মতো, ব্যবহারে বহুবচন।", en: "people, police, staff, cattle — they look singular but behave as plurals.", hi: "people, police, staff, cattle — देखने में एकवचन जैसे, व्यवहार में बहुवचन।" },
      ],
      quiz: [
        { question: "Everyone ___ ready for the test.", options: ["are", "is", "were", "have"], answer: 1, explanation: { bn: "everyone → একবচন → is।", en: "everyone → singular → is.", hi: "everyone → एकवचन → is।" } },
        { question: "The box of toys ___ under the bed.", options: ["are", "were", "is", "have"], answer: 2, explanation: { bn: "subject box (একবচন) — of toys শুধু বর্ণনা।", en: "The subject is box (singular) — of toys is only description.", hi: "subject box (एकवचन) — of toys केवल वर्णन।" } },
        { question: "There ___ several reasons for the delay.", options: ["is", "was", "are", "has"], answer: 2, explanation: { bn: "আসল কর্তা reasons বহুবচন → are।", en: "The real subject is reasons (plural) → are.", hi: "असली subject reasons (बहुवचन) → are।" } },
        { question: "Neither of the two routes ___ short.", options: ["are", "is", "were", "have"], answer: 1, explanation: { bn: "neither of → একবচন ক্রিয়া।", en: "neither of → a singular verb.", hi: "neither of → एकवचन क्रिया।" } },
        { question: "One of my cousins ___ in Canada.", options: ["live", "are living", "lives", "have lived"], answer: 2, explanation: { bn: "subject 'one' — একবচন → lives; cousins শুধু of-ফ্রেজ।", en: "The subject is 'one' — singular → lives; cousins is only the of-phrase.", hi: "subject 'one' — एकवचन → lives; cousins केवल of-वाक्यांश।" } },
        { question: "The number of complaints ___ rising.", options: ["are", "were", "is", "have been"], answer: 2, explanation: { bn: "The number of → একবচন ক্রিয়া — 'সংখ্যাটা বাড়ছে'।", en: "The number of → a singular verb — 'the figure is rising'.", hi: "The number of → एकवचन क्रिया — 'संख्या बढ़ रही है'।" } },
        { question: "A number of students ___ absent today.", options: ["is", "was", "are", "has been"], answer: 2, explanation: { bn: "A number of = কিছুসংখ্যক → বহুবচন ক্রিয়া।", en: "A number of = quite a few → a plural verb.", hi: "A number of = काफ़ी सारे → बहुवचन क्रिया।" } },
        { question: "The teacher, as well as her assistants, ___ in the lab.", options: ["are", "were", "is", "have"], answer: 2, explanation: { bn: "as well as কর্তার সংখ্যা বদলায় না — কর্তা teacher (একবচন)।", en: "as well as does not change the subject — the subject is teacher (singular).", hi: "as well as कर्ता की संख्या नहीं बदलता — कर्ता teacher (एकवचन)।" } },
        { question: "Which sentence is correct?", options: ["There is many parks in the city.", "There are many parks in the city.", "There has many parks in the city.", "There be many parks in the city."], answer: 1, explanation: { bn: "আসল কর্তা parks বহুবচন → There are।", en: "The real subject is parks (plural) → There are.", hi: "असली subject parks (बहुवचन) → There are।" } },
        { question: "The team ___ among themselves about the new plan.", options: ["is arguing", "argues", "argue", "was arguing"], answer: 2, explanation: { bn: "'among themselves' = সদস্যরা একে অপরের সাথে — সমষ্টি সদস্য-ভাবে বহুবচন; একক ভাব হলে is arguing।", en: "'Among themselves' = members with each other — the collective goes plural; as one unit it would be is arguing.", hi: "'among themselves' = सदस्य आपस में — सामूहिक संज्ञा यहाँ बहुवचन; एक इकाई होती तो is arguing।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_I1A;
