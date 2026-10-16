// ─── Learning-path grammar seeds v3: INTERMEDIATE batch I1a (2 deep lessons) ───
// Part of Task 9.3 (intermediate gap-filling). TriText = { bn, en, hi } — Bengali
// is the PRIMARY explanation language; en + hi are complete faithful translations.
// English example sentences stay English; wrong/right pairs capture realistic
// Bengali-speaker errors. quiz included (8-10 items per lesson, reserved schema).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string; // canonical topic id (stable, unique vs static bank topics)
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_I1A: SeedGrammarV3Entry[] = [
  /* ── 1. Present Perfect vs Past Simple ─────────────────────────────── */
  {
    topic: "Present Perfect vs Past Simple",
    level: "intermediate",
    title: "Present Perfect vs Past Simple (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — শেষ হয়ে যাওয়া সময় বনাম এখনো খোলা সময়ের ফ্রেম",
            en: "When to use them — finished time frames vs time frames still open",
            hi: "कब इस्तेमाल होते हैं — बंद समय-फ्रेम बनाम अब भी खुले समय-फ्रेम",
          },
          body: {
            bn: "দুটো কালই অতীতের কাজ বলে — ফারাক কাজে নয়, বক্তার দেখার কোণে। Past simple = কাজটা এমন সময়ের ফ্রেমে ঘটেছে যা কেটে গেছে এবং এখনের সাথে সংযোগ ছিঁড়ে গেছে: yesterday, last year, in 2019, two days ago — 'I visited Paris in 2019'। Present perfect = কাজ অতীতেই ঘটেছে, কিন্তু সময়ের ফ্রেম এখনো খোলা বা ফলটা এখনও সাথে লেগে আছে: today, this week, ever, so far — 'I have visited Paris three times' (এখন পর্যন্ত মোট অভিজ্ঞতা)। সূত্র একটাই: বাক্যে কাটা-গেছা সময়ের শব্দ বসলেই past simple; সময় না বলে 'এখন পর্যন্ত' ভাব থাকলে present perfect।",
            en: "Both tenses talk about past actions — the difference lies not in the action but in the speaker's viewpoint. The past simple places the action inside a time frame that is closed and cut off from now: yesterday, last year, in 2019, two days ago — 'I visited Paris in 2019'. The present perfect says the action happened in the past but the frame is still open or the result still touches now: today, this week, ever, so far — 'I have visited Paris three times' (total experience up to now). One formula: a closed-time word forces the past simple; an open 'up to now' feeling takes the present perfect.",
            hi: "दोनों काल अतीत के काम बताते हैं — फर्क काम में नहीं, बोलने वाले के दृष्टिकोण में है। Past simple = काम उस समय-फ्रेम में हुआ जो बंद हो चुका है और अब से कट चुका है: yesterday, last year, in 2019, two days ago — 'I visited Paris in 2019'। Present perfect = काम अतीत में ही हुआ, पर फ्रेम अब भी खुला है या नतीजा अब भी साथ है: today, this week, ever, so far — 'I have visited Paris three times' (अब तक का कुल अनुभव)। एक सूत्र: बंद-समय का शब्द आए तो past simple; 'अब तक' का भाव हो तो present perfect।",
          },
          examples: [
            { wrong: "I have visited Paris last year.", right: "I visited Paris last year.", note: { bn: "'last year' কেটে গেছা ফ্রেম → past simple; perfect-এর সাথে কাটা সময়ের শব্দ কখনো বসে না।", en: "'Last year' is a closed frame → past simple; closed-time words never pair with the perfect.", hi: "'last year' बंद फ्रेम है → past simple; perfect के साथ बंद-समय शब्द नहीं आता।" } },
            { wrong: "I visited Paris three times so far.", right: "I have visited Paris three times so far.", note: { bn: "'so far' = এখন পর্যন্ত, ফ্রেম খোলা → present perfect; মোট অভিজ্ঞতার সংখ্যা perfect-এই বলা হয়।", en: "'So far' means 'up to now', an open frame → present perfect; totals of experience take the perfect.", hi: "'so far' = अब तक, फ्रेम खुला → present perfect; अनुभव की कुल संख्या perfect में।" } },
            { wrong: "Shakespeare has written 38 plays.", right: "Shakespeare wrote 38 plays.", note: { bn: "শেক্সপিয়ার মারা গেছেন — তাঁর রচনার সময় শেষ; মৃত ব্যক্তির জীবনকর্ম past simple। জীবিত লেখক হলে হতো: She has written five novels।", en: "Shakespeare is dead — his writing era is over; a dead person's life work takes the past simple. For a living writer it would be: She has written five novels.", hi: "शेक्सपियर निधन हो चुके हैं — उनका लेखन-काल खत्म; मृत व्यक्ति की रचनाएँ past simple में। जीवित लेखक होती तो: She has written five novels।" } },
            { wrong: "I have seen that film when it came out.", right: "I saw that film when it came out.", note: { bn: "'when it came out' নির্দিষ্ট অতীত-ক্ষণের ক্লজ — এমন ক্লজ থাকলেই মূল বাক্য past simple।", en: "'When it came out' pins the action to a specific past moment — with such a clause the main clause takes the past simple.", hi: "'when it came out' विशिष्ट अतीत-क्षण का क्लज़ है — ऐसा क्लज़ हो तो मुख्य वाक्य past simple में।" } },
            { wrong: "This is the best film I ever saw.", right: "This is the best film I have ever seen.", note: { bn: "superlative + ever = এখন পর্যন্ত সর্বোচ্চ অভিজ্ঞতা → present perfect।", en: "A superlative with ever = the top experience up to now → present perfect.", hi: "superlative + ever = अब तक का सर्वोच्च अनुभव → present perfect।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — have/has + V3 বনাম V2: প্রশ্ন-নেগেটিভসহ",
            en: "Formation — have/has + V3 vs V2, with questions and negatives",
            hi: "गठन — have/has + V3 बनाम V2: प्रश्न-नकारात्मक सहित",
          },
          body: {
            bn: "Present perfect = have/has + ক্রিয়ার তৃতীয় রূপ: I have eaten, she has eaten, they have arrived। প্রশ্ন-নেগেটিভে have/has নিজেই subject-এর সামনে চলে আসে — Have you finished? She hasn't finished; do/does/did এখানে আসে না। Past simple = V2: I ate, she went, they arrived; প্রশ্ন-নেগেটিভে did + base রূপ — Did you eat? She didn't go; V2 শুধু পজিটিভ বাক্যে। দুই কালের গঠন-সূত্র হাতে-কলমে পাকা থাকলে অর্ধেক ভুল আগেই বাদ।",
            en: "Present perfect = have/has + the third form: I have eaten, she has eaten, they have arrived. In questions and negatives have/has moves before the subject itself — Have you finished? She hasn't finished; no do/does/did here. Past simple = V2: I ate, she went, they arrived; questions and negatives use did + the base form — Did you eat? She didn't go; V2 lives only in positive sentences. Nail these two structures and half your mistakes vanish.",
            hi: "Present perfect = have/has + क्रिया का तीसरा रूप: I have eaten, she has eaten, they have arrived। प्रश्न-नकार में have/has खुद subject से पहले आता है — Have you finished? She hasn't finished; यहाँ do/does/did नहीं आता। Past simple = V2: I ate, she went, they arrived; प्रश्न-नकार में did + base रूप — Did you eat? She didn't go; V2 केवल सकारात्मक वाक्य में। दोनों ढाँचे पक्के हों तो आधी गलतियाँ पहले ही छूट जाती हैं।",
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
            bn: "আভাস শব্দ — already, just, yet, ever, never, still",
            en: "Signal words — already, just, yet, ever, never, still",
            hi: "संकेत शब्द — already, just, yet, ever, never, still",
          },
          body: {
            bn: "এই ছয়টা শব্দ প্রায় সবসময় present perfect-এর সঙ্গী। just = এইমাত্র: I have just eaten (just বাক্যের মাঝে, have-এর পরে)। already = আগেই: I have already finished — চমক বা তাড়াহুড়োর ভাব। yet = এখনো: শুধু প্রশ্ন-নেগেটিভে, বাক্যের শেষে — Have you finished yet? I haven't finished yet। ever = জীবনে কখনো: Have you ever...? never = কখনোই না — এর ভেতরেই নেগেটিভ আছে, তাই ক্রিয়া পজিটিভ থাকে: I have never seen। still = এখনো (প্রত্যাশা ভাঙার ভাব) — মূলত still + haven't/hasn't: The parcel still hasn't arrived। Past simple-এর সঙ্গী অন্যরা: yesterday, ago, last..., in + বছর।",
            en: "These six words almost always walk with the present perfect. just = a moment ago: I have just eaten (just sits mid-sentence, after have). already = sooner than expected: I have already finished. yet = so far: only in questions and negatives, at the end — Have you finished yet? I haven't finished yet. ever = at any time in life: Have you ever...? never = at no time — the negative is already inside it, so the verb stays positive: I have never seen. still = up to now against expectations — mainly still + haven't/hasn't: The parcel still hasn't arrived. The past simple keeps different company: yesterday, ago, last..., in + year.",
            hi: "ये छह शब्द लगभग हमेशा present perfect के साथ चलते हैं। just = अभी-अभी: I have just eaten (just वाक्य के बीच, have के बाद)। already = पहले ही: I have already finished। yet = अभी तक: केवल प्रश्न-नकार में, वाक्य के अंत में — Have you finished yet? I haven't finished yet। ever = जीवन में कभी: Have you ever...? never = कभी नहीं — नकारात्मकता इसके भीतर है, इसलिए क्रिया सकारात्मक रहती है: I have never seen। still = अब भी (अपेक्षा टूटने का भाव) — मुख्यतः still + haven't/hasn't: The parcel still hasn't arrived। Past simple के साथी अलग हैं: yesterday, ago, last..., in + वर्ष।",
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
            bn: "since + বিন্দু, for + মাপ — perfect-এর সময়-সঙ্গী",
            en: "since + a point, for + a span — the time partners of the perfect",
            hi: "since + बिंदु, for + अवधि — perfect के समय-साथी",
          },
          body: {
            bn: "Present perfect-এর প্রিয় সময়-সঙ্গী দুই জন: since (শুরুর বিন্দু — since 2015, since Monday, since I joined) আর for (মাপ — for ten years, for two hours)। 'How long have you lived here?' — এমন 'কতদিন ধরে' প্রশ্ন-উত্তর পুরোটাই perfect-এর মাঠ। since/for বাক্যে থাকলেই কাল উঠে যায় present perfect বা perfect continuous-এ — কারণ দুটোই 'তখন থেকে এখন পর্যন্ত' বলে। আর since-এর সাথে পূর্ণ ক্লজ থাকলে সেই ক্লজ past simple-এ (since I joined, নয় since I have joined)। বিস্তারিত শিখতে intermediate স্তরের Since vs For পাঠটা দেখুন।",
            en: "The perfect keeps two favourite time partners: since (a starting point — since 2015, since Monday, since I joined) and for (a span — for ten years, for two hours). 'How long have you lived here?' — such 'how long' questions and answers live entirely in perfect territory. When since/for appear, the tense climbs to present perfect or perfect continuous — both mean 'from then till now'. And a full clause after since takes the past simple (since I joined, not since I have joined). For the deep dive, see the intermediate Since vs For lesson.",
            hi: "Present perfect के दो प्रिय समय-साथी: since (शुरुआती बिंदु — since 2015, since Monday, since I joined) और for (अवधि — for ten years, for two hours)। 'How long have you lived here?' — ऐसे 'कितने समय से' प्रश्न-उत्तर पूरे perfect के क्षेत्र में रहते हैं। since/for दिखते ही काल present perfect या perfect continuous पर चढ़ जाता है — दोनों का अर्थ 'तब से अब तक'। और since के बाद पूरा क्लज़ past simple में (since I joined, not since I have joined)। गहराई के लिए intermediate का Since vs For पाठ देखें।",
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
            bn: "খবরের perfect, বিস্তারের past — আর When-প্রশ্নে সবসময় past simple",
            en: "News in the perfect, details in the past — and When-questions always take the past simple",
            hi: "खबर perfect में, विवरण past में — और When-प्रश्न हमेशा past simple में",
          },
          body: {
            bn: "নতুন খবর প্রথমে present perfect-এ আসে — কারণ খবরের গুরুত্ব 'এখনে': The train has arrived. The CEO has resigned. Our team has won! তারপর বিস্তার — কখন, কোথায়, কীভাবে — past simple-এ: It arrived at 9:15. He resigned last night। কথোপকথনেও একই প্রবাহ: 'Have you heard? Rina has got married!' — 'Really? When did she get married?' — 'Last Sunday।' মনে রাখুন: When...? প্রশ্ন মানেই বক্তা নির্দিষ্ট অতীত-সময় জানতে চাইছে, আর নির্দিষ্ট অতীত-সময় মানেই past simple — তাই 'When have you bought it?' ইংরেজিতে কখনো হয় না।",
            en: "New news arrives in the present perfect — because the news matters now: The train has arrived. The CEO has resigned. Our team has won! Then the details — when, where, how — come in the past simple: It arrived at 9:15. He resigned last night. Conversations flow the same way: 'Have you heard? Rina has got married!' — 'Really? When did she get married?' — 'Last Sunday.' Remember: a When...? question means the speaker wants a specific past time, and a specific past time always takes the past simple — so 'When have you bought it?' simply does not exist in English.",
            hi: "नई खबर पहले present perfect में आती है — क्योंकि खबर का महत्त्व 'अभी' है: The train has arrived. The CEO has resigned. Our team has won! फिर विवरण — कब, कहाँ, कैसे — past simple में: It arrived at 9:15. He resigned last night। बातचीत में भी वही बहाव: 'Have you heard? Rina has got married!' — 'Really? When did she get married?' — 'Last Sunday।' याद रखें: When...? प्रश्न का मतलब है बोलने वाला विशिष्ट अतीत-समय जानना चाहता है, और विशिष्ट अतीत-समय = past simple — इसलिए 'When have you bought it?' अंग्रेज़ी में कभी नहीं होता।",
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
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "ফাঁদ তিনটে। এক: বাংলায় 'গেছি' একটাই রূপ 'সেদিন গেছিলাম' থেকে 'এইমাত্র গেছি' — সব মেনে নেয়; তাই শিক্ষার্থীরা কাটা সময়ের শব্দেও perfect ধরে বসেন: 'I have gone there last year'। সমাধান: yesterday/ago/last/in + বছর দেখলেই হাত স্বয়ংক্রিয়ভাবে past simple-এ। দুই: ঘটনার গল্প সাজানোর সময় (কী হয়েছিল, তারপর কী হলো) ইংরেজিও বাংলার মতোই past simple-এ সাজায় — perfect শুধু পর্দা খোলে, গল্প চালায় না। তিন: today/this morning-এর মতো আধা-খোলা ফ্রেম — দিন এখনো চললে perfect (I have had two calls this morning), দিন শেষে সেই সকাল কাটা অতীত (I had two calls this morning)।",
            en: "Three traps. One: Bengali uses one form for 'I have gone there', 'I went there yesterday' and 'I have just gone' — so learners reach for the perfect even with closed-time words: 'I have gone there last year'. The fix: yesterday/ago/last/in + year must flip your hand to the past simple automatically. Two: when narrating a sequence of events (what happened, then what happened next), English, like Bengali, builds the story in the past simple — the perfect opens the curtain but never drives the story. Three: half-open frames like today/this morning — while the day is still running use the perfect (I have had two calls this morning); once the day is over, that morning is closed past (I had two calls this morning).",
            hi: "तीन जाल। एक: स्थानीय भाषाओं में 'गया हूँ' एक ही रूप कई अर्थ लेता है; इसलिए विद्यार्थी बंद-समय शब्दों के साथ भी perfect ले लेते हैं: 'I have gone there last year'। समाधान: yesterday/ago/last/in + वर्ष देखते ही हाथ past simple पर चला जाए। दो: घटनाओं की कहानी सुनाते समय अंग्रेज़ी भी past simple में बुनती है — perfect पर्दा खोलता है, कहानी नहीं चलाता। तीन: today/this morning जैसे अर्ध-खुले फ्रेम — दिन चल रहा है तो perfect (I have had two calls this morning); दिन निकल गया तो वह सुबह बंद अतीत (I had two calls this morning)।",
          },
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
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "সকালে অফিসে সোহেল ঢুকেই শুনল, 'Have you heard? The CEO has resigned!' সোহেল চমকে গিয়ে জিজ্ঞেস করল, 'When did he resign?' — 'Last night. He sent the email at 11:45.' সহকর্মী নাদিয়া বলল, 'I have worked here for eight years and I have never seen anything like this. Did he give any reason?' — 'No, he still hasn't said anything. The board has already called an emergency meeting.' সোহেল ভাবল, 'The news still hasn't sunk in!' — দেখুন: খবর perfect-এ, When-প্রশ্ন আর বিস্তার past-এ, অভিজ্ঞতা ও yet/already/never perfect-এ।",
            en: "Sohel walked into the office and heard, 'Have you heard? The CEO has resigned!' Startled, he asked, 'When did he resign?' — 'Last night. He sent the email at 11:45.' His colleague Nadia said, 'I have worked here for eight years and I have never seen anything like this. Did he give any reason?' — 'No, he still hasn't said anything. The board has already called an emergency meeting.' Sohel thought, 'The news still hasn't sunk in!' — notice: news in the perfect, When-questions and details in the past, and experience/yet/already/never in the perfect.",
            hi: "सोहेल ऑफिस पहुँचा और सुना, 'Have you heard? The CEO has resigned!' चौंककर उसने पूछा, 'When did he resign?' — 'Last night. He sent the email at 11:45.' सहकर्मी नादिया ने कहा, 'I have worked here for eight years and I have never seen anything like this. Did he give any reason?' — 'No, he still hasn't said anything. The board has already called an emergency meeting.' सोहेल ने सोचा, 'The news still hasn't sunk in!' — देखें: खबर perfect में, When-प्रश्न और विवरण past में, और अनुभव/yet/already/never perfect में।",
          },
          examples: [
            { wrong: "The CEO has resigned last night.", right: "The CEO has resigned. He sent the email last night.", note: { bn: "খবর perfect-এ; last night-সহ বিস্তার আলাদা বাক্যে past-এ।", en: "News in the perfect; the last-night detail goes in a separate past-simple sentence.", hi: "खबर perfect में; last night वाला विवरण अलग past-simple वाक्य में।" } },
            { wrong: "When has he resigned?", right: "When did he resign?", note: { bn: "When-প্রশ্নে সবসময় past simple।", en: "When-questions always take the past simple.", hi: "When-प्रश्न में हमेशा past simple।" } },
            { wrong: "I never saw anything like this before.", right: "I have never seen anything like this before.", note: { bn: "never + before = এখন পর্যন্ত অভিজ্ঞতা → present perfect।", en: "never + before = experience up to now → present perfect.", hi: "never + before = अब तक का अनुभव → present perfect।" } },
            { wrong: "He still didn't say anything.", right: "He still hasn't said anything.", note: { bn: "এখনো পর্যন্ত কিছু নেই → still + hasn't + V3।", en: "Nothing up to now → still + hasn't + V3.", hi: "अब तक कुछ नहीं → still + hasn't + V3।" } },
          ],
        },
        {
          heading: {
            bn: "এক নজরে — পুরো পাঠ ছোট করে",
            en: "At a glance — the whole lesson in short",
            hi: "एक नज़र में — पूरा पाठ संक्षेप में",
          },
          body: {
            bn: "পাঁচটা সূত্রে সারমর্ম: (১) কাটা সময়ের শব্দ — yesterday, ago, last..., in + বছর, when + past-ক্লজ — দেখলেই past simple। (২) খোলা ফ্রেম বা এখন-পর্যন্ত ভাব — ever, never, just, already, yet, so far, recently, this week, today — দেখলেই present perfect। (৩) since + বিন্দু, for + মাপ — দুটোই কালকে perfect-এ টানে। (৪) খবর perfect-এ আসে, বিস্তার ও When-প্রশ্ন past-এ। (৫) perfect = অতীতের কাজ + এখনের সংযোগ; past simple = অতীতের কাজ + এখন থেকে ছিঁড়ে যাওয়া সময়।",
            en: "The essence in five formulas: (1) closed-time words — yesterday, ago, last..., in + year, when + past clause — force the past simple. (2) Open frames and 'up to now' — ever, never, just, already, yet, so far, recently, this week, today — take the present perfect. (3) since + point, for + span — both pull the tense into the perfect. (4) News arrives in the perfect; details and When-questions go to the past. (5) Perfect = a past action connected to now; past simple = a past action cut off from now.",
            hi: "पाँच सूत्रों में सार: (1) बंद-समय शब्द — yesterday, ago, last..., in + वर्ष, when + past-क्लज़ — देखते ही past simple। (2) खुला फ्रेम / 'अब तक' — ever, never, just, already, yet, so far, recently, this week, today — present perfect। (3) since + बिंदु, for + अवधि — दोनों काल को perfect में खींचते हैं। (4) खबर perfect में, विवरण और When-प्रश्न past में। (5) perfect = अतीत का काम + अब से जुड़ाव; past simple = अतीत का काम + अब से कटाव।",
          },
          examples: [
            { wrong: "I have finished it yesterday.", right: "I finished it yesterday.", note: { bn: "yesterday = কাটা সময় → past simple।", en: "Yesterday = closed time → past simple.", hi: "yesterday = बंद समय → past simple।" } },
            { wrong: "Did you ever try Kolkata biryani?", right: "Have you ever tried Kolkata biryani?", note: { bn: "জীবনে-কখনো অভিজ্ঞতা → Have you ever + V3।", en: "A life-experience question → Have you ever + V3.", hi: "जीवन-अनुभव प्रश्न → Have you ever + V3।" } },
            { wrong: "How long did you live in Dhaka?", right: "How long have you lived in Dhaka?", note: { bn: "এখনো থাকলে perfect; past simple বললে শোনায় এখন আর থাকেন না।", en: "If you still live there, use the perfect; the past simple suggests you no longer do.", hi: "अब भी रहते हैं तो perfect; past simple कहने पर अब नहीं रहते लगेगा।" } },
            { wrong: "The guests didn't arrive yet.", right: "The guests haven't arrived yet.", note: { bn: "yet = এখন পর্যন্ত → present perfect negative।", en: "yet = up to now → present perfect negative.", hi: "yet = अब तक → present perfect negative।" } },
          ],
        },
      ],
      tips: [
        { bn: "কাটা-সময় তালিকা মুখস্ত: yesterday, ago, last week/month/year, in + বছর, when + past-ক্লজ — দেখলেই past simple।", en: "Memorise the closed-time list: yesterday, ago, last week/month/year, in + year, when + past clause — they force the past simple.", hi: "बंद-समय सूची रटें: yesterday, ago, last week/month/year, in + वर्ष, when + past-क्लज़ — past simple तय।" },
        { bn: "খোলা-ফ্রেম তালিকা: ever, never, just, already, yet, so far, recently, this week, today — দেখলেই present perfect।", en: "The open-frame list: ever, never, just, already, yet, so far, recently, this week, today — they take the present perfect.", hi: "खुले-फ्रेम सूची: ever, never, just, already, yet, so far, recently, this week, today — present perfect।" },
        { bn: "perfect-এর গঠন-পরীক্ষা: have/has + V3; প্রশ্ন-নেগেটিভে do/did নয় — Have you...? I haven't...", en: "Structure check for the perfect: have/has + V3; no do/did in questions or negatives — Have you...? I haven't...", hi: "perfect की बनावट: have/has + V3; प्रश्न-नकार में do/did नहीं — Have you...? I haven't..." },
        { bn: "since + বিন্দু, for + মাপ — দুটোর যেকোনোটা দেখলে কাল perfect বা perfect continuous হবে।", en: "since + point, for + span — seeing either one, the tense will be perfect or perfect continuous.", hi: "since + बिंदु, for + अवधि — कोई भी दिखे तो काल perfect या perfect continuous होगा।" },
        { bn: "When-প্রশ্ন ও When-উত্তর সবসময় past simple — 'When have you...' ইংরেজিতে নেই।", en: "When-questions and When-answers are always past simple — 'When have you...' does not exist in English.", hi: "When-प्रश्न और When-उत्तर हमेशा past simple — 'When have you...' अंग्रेज़ी में नहीं।" },
        { bn: "খবর perfect-এ, বিস্তার past-এ: 'The train has arrived. It arrived at 9:15.'", en: "News in the perfect, details in the past: 'The train has arrived. It arrived at 9:15.'", hi: "खबर perfect में, विवरण past में: 'The train has arrived. It arrived at 9:15.'" },
        { bn: "never-এর সাথে আর নেগেটিভ নয় — I have never seen; 'haven't never' দ্বিগুণ নেগেটিভ।", en: "Never add a negative to never — I have never seen; 'haven't never' is a double negative.", hi: "never के साथ और नकार नहीं — I have never seen; 'haven't never' दोहरा नकार।" },
        { bn: "জীবিত ব্যক্তির মোট-কর্ম perfect (She has written five novels); মৃত ব্যক্তির জীবনকর্ম past (Tagore wrote Gitanjali)।", en: "A living person's total output takes the perfect (She has written five novels); a dead person's life work takes the past (Tagore wrote Gitanjali).", hi: "जीवित व्यक्ति की कुल रचनाएँ perfect में (She has written five novels); मृत व्यक्ति की रचनाएँ past में (Tagore wrote Gitanjali)।" },
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

  /* ── 2. Subject-Verb Agreement ─────────────────────────────────────── */
  {
    topic: "Subject-Verb Agreement",
    level: "intermediate",
    title: "Subject-Verb Agreement (Intermediate)",
    unit: 0,
    data: {
      title: {
        bn: "কর্তা-ক্রিয়ার মিল: সাবজেক্ট-ভার্ব অ্যাগ্রিমেন্ট (মধ্যম স্তর)",
        en: "Subject-Verb Agreement (Intermediate)",
        hi: "कर्ता-क्रिया मेल: सब्जेक्ट-वर्ब अग्रीमेंट (मध्यम स्तर)",
      },
      intro: {
        bn: "কর্তা একবচন তো ক্রিয়ায় -s, কর্তা বহুবচন তো ক্রিয়ায় -s নেই — নিয়মটা সহজ শোনায়, কিন্তু everyone, one of, there is, the box of chocolates-এর মতো ফাঁদগুলোতেই পরীক্ষার নম্বর কাটে। এই পাঠে ঢোকার আগে present simple-এর s, be/has/do রূপ আর মৌলিক বচন-ধারণা (beginner পাঠগুলো) পরিষ্কার থাকা দরকার; Present Perfect vs Past Simple পাঠের পরে এটা পড়লে কাল আর সংখ্যা — দুটোই একসাথে পাকা হবে। এখানে শিখব: মূল সূত্র ও one-s rule, একবচন-টানা আভাস শব্দ, কর্তা-ক্রিয়ার মাঝের লম্বা ফ্রেজ ও relative clause, there is/there are, সমষ্টিবাচক নাম আর The number of / A number of-এর জুটি।",
        en: "A singular subject takes verb + s; a plural subject drops it — the rule sounds easy, but the traps (everyone, one of, there is, the box of chocolates) are exactly where marks are lost. Before this lesson, make sure your present-simple s, be/has/do forms and basic number sense are solid (the beginner lessons); reading this after Present Perfect vs Past Simple will set tense and number together. Here you will learn: the core rules and the one-s rule, singular-forcing signal words, long phrases and relative clauses between subject and verb, there is/there are, collective nouns, and The number of / A number of.",
        hi: "एकवचन कर्ता के साथ क्रिया में -s, बहुवचन में नहीं — नियम सरल लगता है, पर everyone, one of, there is, the box of chocolates जैसे जाल में ही अंक कटते हैं। इस पाठ से पहले present simple की s, be/has/do रूप और मूल वचन-समझ (beginner पाठ) स्पष्ट हों; Present Perfect vs Past Simple के बाद पढ़ें तो काल और वचन दोनों पक्के होंगे। यहाँ सीखेंगे: मूल नियम और one-s rule, एकवचन-संकेत शब्द, कर्ता-क्रिया के बीच लंबे वाक्यांश और relative clause, there is/there are, सामूहिक संज्ञाएँ और The number of / A number of।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — কর্তা বললে ক্রিয়া মানবে",
            en: "When it matters — the verb follows the subject",
            hi: "कब ज़रूरी — क्रिया कर्ता का पालन करती है",
          },
          body: {
            bn: "Agreement মানে কর্তার সংখ্যা অনুযায়ী ক্রিয়ার রূপ। চার জায়গায় দেখা যায়: (১) present simple-এ -s: he plays / they play; (২) be-ক্রিয়া: am/is/are, was/were; (৩) have/has; (৪) প্রশ্ন-নেগেটিভে do/does। সূক্ষ্ম কথা: ইংরেজিতে ক্রিয়ার -s মানে একবচন কর্তা (he plays), কিন্তু নামের -s মানে বহুবচন (two boys) — চিহ্ন উল্টো দিকে, এখানেই গোলমালের শুরু। বাংলায় ক্রিয়া নামের সংখ্যায় এভাবে বদলায় না, তাই এই হাতে-হাতে মিলটা অভ্যাসে আনতে হয় — রোজ দু-একটা বাক্য বলে।",
            en: "Agreement means the verb matches the number of the subject. It shows in four places: (1) the present-simple -s: he plays / they play; (2) be: am/is/are, was/were; (3) have/has; (4) do/does in questions and negatives. The subtlety: in English verb -s signals a singular subject (he plays), but noun -s signals a plural (two boys) — opposite signs, and that is where the confusion begins. Bengali verbs do not change with the noun's number this way, so the reflex must be trained with a couple of spoken sentences a day.",
            hi: "Agreement का अर्थ क्रिया कर्ता की संख्या से मेल खाए। चार जगह दिखता है: (1) present simple की -s: he plays / they play; (2) be: am/is/are, was/were; (3) have/has; (4) प्रश्न-नकार में do/does। सूक्ष्म बात: अंग्रेज़ी में क्रिया की -s = एकवचन कर्ता (he plays), पर संज्ञा की -s = बहुवचन (two boys) — चिह्न विपरीत, यहीं उलझन शुरू। हिंदी में क्रिया संज्ञा की संख्या से इस तरह नहीं बदलती, इसलिए रोज़ दो-चार वाक्य बोलकर आदत बनाएँ।",
          },
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
            bn: "গঠন — one-s rule আর subject খোঁজার সূত্র",
            en: "Formation — the one-s rule and how to find the subject",
            hi: "गठन — one-s rule और subject खोजने का सूत्र",
          },
          body: {
            bn: "একটাই সূত্র মুখস্ত করুন — one-s rule: একবচন কর্তায় নামে s নেই তো ক্রিয়ায় থাকে (the boy plays); বহুবচন কর্তায় নামে s আছে তো ক্রিয়ায় নেই (the boys play)। আর subject খুঁজতে: ক্রিয়ার আগে 'কে বা কী কাজটা করছে' জিজ্ঞেস করুন — preposition (of, with, for...)-এর পরের নাম কখনোই subject নয়। মূল টেবিল: I/you/we/they → play, have, are, were, do; he/she/it → plays, has, is, was, does।",
            en: "Memorise one formula — the one-s rule: a singular subject with no -s on the noun keeps -s on the verb (the boy plays); a plural subject with -s on the noun drops it from the verb (the boys play). To find the subject, ask who or what is doing the action before the verb — a noun after a preposition (of, with, for...) can never be the subject. Core table: I/you/we/they → play, have, are, were, do; he/she/it → plays, has, is, was, does.",
            hi: "एक सूत्र रटें — one-s rule: एकवचन कर्ता में संज्ञा पर s नहीं तो क्रिया पर होगा (the boy plays); बहुवचन कर्ता में संज्ञा पर s है तो क्रिया पर नहीं (the boys play)। subject खोजने के लिए क्रिया से पहले पूछें 'कौन या क्या काम कर रहा है' — preposition (of, with, for...) के बाद की संज्ञा कभी subject नहीं। मूल तालिका: I/you/we/they → play, have, are, were, do; he/she/it → plays, has, is, was, does।",
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
            bn: "আভাস শব্দ — each, every, everyone, neither, one of",
            en: "Signal words — each, every, everyone, neither, one of",
            hi: "संकेत शब्द — each, every, everyone, neither, one of",
          },
          body: {
            bn: "কিছু শব্দ দেখামাত্র কর্তা একবচন: each, every (each student, every boy); everyone/everybody, someone/somebody, anyone/anybody, no one/nobody; either/neither; আর one of + বহুবচন নাম — যেখানে subject 'one', নামটা নয়। ফাঁদ দুটো: one of the boys ___ — 'boys' দেখে বহুবচন ক্রিয়া বসে, অথচ কাজটা 'one' করছে। আর everyone-কে বাংলা 'সবাই' টেনে বহুবচন ভাবা — ইংরেজিতে 'সবাই' হলেও everyone একবচন।",
            en: "Certain words force a singular subject: each, every (each student, every boy); everyone/everybody, someone/somebody, anyone/anybody, no one/nobody; either/neither; and one of + plural noun — where the subject is 'one', not the noun. Two traps: in 'one of the boys...', learners see 'boys' and reach for a plural verb, though the doer is 'one'. And translating 'সবাই' makes everyone feel plural — but in English everyone is singular.",
            hi: "कुछ शब्द कर्ता को एकवचन बाँधते हैं: each, every (each student, every boy); everyone/everybody, someone/somebody, anyone/anybody, no one/nobody; either/neither; और one of + बहुवचन संज्ञा — यहाँ subject 'one' है, संज्ञा नहीं। दो जाल: 'one of the boys...' में 'boys' देखकर बहुवचन क्रिया आ जाती है, पर कर्ता 'one' है। और 'सब लोग' सोचकर everyone को बहुवचन बना देना — अंग्रेज़ी में everyone एकवचन है।",
          },
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
            bn: "মাঝের ফাঁদ — লম্বা ফ্রেজ আর relative clause-এর মিল",
            en: "The distance trap — long phrases and relative-clause agreement",
            hi: "दूरी का जाल — लंबे वाक्यांश और relative clause का मेल",
          },
          body: {
            bn: "কর্তা আর ক্রিয়ার মাঝে ফ্রেজ যত লম্বা, ভুল তত সহজ — চোখ কাছের নামটার সংখ্যায় চলে যায়। নিয়ম: subject মূল নামটাই; of/with/including-ফ্রেজ শুধু বর্ণনা: The box of chocolates is on the table (box একবচন); The quality of the products is excellent (quality)। along with/as well as/together with-ও কর্তার সংখ্যা বদলায় না। Relative clause-এ who/that/which-এর ক্রিয়া তার নিজের আগের নামের (antecedent) সংখ্যা মেনে চলে: the list of items that is on the desk (that = list); the students who study hard (who = students)। সূত্র: মাঝের ফ্রেজ মুছে বাক্যটা আবার পড়ুন।",
            en: "The longer the phrase between subject and verb, the easier the mistake — the eye slips to the number of the nearest noun. The rule: the subject is the head noun; of/with/including phrases are only description: The box of chocolates is on the table (box is singular); The quality of the products is excellent (quality). along with/as well as/together with never change the subject's number. In a relative clause, the verb after who/that/which agrees with its own antecedent: the list of items that is on the desk (that = list); the students who study hard (who = students). Formula: delete the middle phrase and read the sentence again.",
            hi: "कर्ता और क्रिया के बीच वाक्यांश जितना लंबा, गलती उतनी आसान — नज़र पास की संज्ञा की संख्या पर जा लगती है। नियम: subject मूल संज्ञा; of/with/including वाक्यांश केवल वर्णन: The box of chocolates is on the table (box एकवचन); The quality of the products is excellent (quality)। along with/as well as/together with कर्ता की संख्या नहीं बदलते। relative clause में who/that/which की क्रिया अपने antecedent से मेल खाती है: the list of items that is on the desk (that = list); the students who study hard (who = students)। सूत्र: बीच का वाक्यांश हटाकर वाक्य फिर पढ़ें।",
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
            bn: "আসল কর্তা লুকিয়ে — there is/are, সমষ্টিবাচক নাম আর number-এর জুটি",
            en: "Hidden subjects — there is/are, collective nouns, and the number pair",
            hi: "छिपा subject — there is/are, सामूहिक संज्ञाएँ और number की जोड़ी",
          },
          body: {
            bn: "তিন পরিবারের ফাঁদ। (১) there is/there are — there কর্তা নয়, আসল কর্তা পরে বসে: There is a problem / There are two problems। (২) সমষ্টিবাচক নাম — team, family, committee, audience, government: একক হিসেবে ভাবলে একবচন (Our team is winning), সদস্যদের আলাদা আলাদা ভাবলে বহুবচন (The team are arguing among themselves) — পরীক্ষায় নিরাপদ পথ একবচন, তবে among themselves-এর মতো বহুবচন-ইঙ্গিত দেখলে বহুবচন। (৩) number-এর জুটি: The number of + বহুবচন = 'সংখ্যাটা' → একবচন ক্রিয়া (The number of students is increasing); A number of + বহুবচন = 'কিছুসংখ্যক' → বহুবচন ক্রিয়া (A number of students are absent)। একই সুতোয় most/some/all/half of + নাম → ক্রিয়া সেই নামের সংখ্যা মানে।",
            en: "Three trap families. (1) there is/there are — there is not the subject; the real subject sits after the verb: There is a problem / There are two problems. (2) Collective nouns — team, family, committee, audience, government: as one unit they take a singular verb (Our team is winning); as separate members, a plural (The team are arguing among themselves) — the safe exam path is singular, but plural signals like among themselves switch it to plural. (3) The number pair: The number of + plural = 'the figure' → singular verb (The number of students is increasing); A number of + plural = 'quite a few' → plural verb (A number of students are absent). On the same thread, most/some/all/half of + noun → the verb follows that noun's number.",
            hi: "तीन जाल-परिवार। (1) there is/there are — there subject नहीं; असली subject क्रिया के बाद बैठता है: There is a problem / There are two problems। (2) सामूहिक संज्ञाएँ — team, family, committee, audience, government: एक इकाई मानें तो एकवचन (Our team is winning), सदस्यों को अलग-अलग मानें तो बहुवचन (The team are arguing among themselves) — परीक्षा में सुरक्षित रास्ता एकवचन, पर among themselves जैसा बहुवचन-संकेत हो तो बहुवचन। (3) number की जोड़ी: The number of + बहुवचन = 'संख्या' → एकवचन क्रिया (The number of students is increasing); A number of + बहुवचन = 'काफ़ी सारे' → बहुवचन क्रिया (A number of students are absent)। उसी धागे पर most/some/all/half of + संज्ञा → क्रिया उस संज्ञा की संख्या मानेगी।",
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
            bn: "বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "Common mistakes by Bengali speakers",
            hi: "बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          body: {
            bn: "মূল কারণ দুটো। এক: বাংলা ক্রিয়া নামের সংখ্যায় s-জাতীয় চিহ্ন নেই — 'মা ভাত রাঁধে', 'বাচ্চারা খেলছে' — ক্রিয়ার রূপ কর্তার সংখ্যায় এমনভাবে ঝুলে নেই; তাই ইংরেজিতে s বসানোর রিফ্লেক্স দুর্বল। দুই: 'সবাই', 'উভয়ে', 'কেউ' — সবগুলোই বহুবচন-মনে হয়, কিন্তু ইংরেজিতে everyone/somebody/nobody একবচন, আর both of-এর পরে বহুবচন নাম + বহুবচন ক্রিয়া। জেনে রাখুন: people নিজেই বহুবচন (people are); police, staff, cattle-ও বহুবচন-আচরণ করে (The police are investigating)।",
            en: "Two root causes. One: Bengali verbs carry no s-like mark of the noun's number — the verb form does not hang on the subject's number — so the reflex to add -s in English is weak. Two: 'all', 'both', 'somebody' — they all feel plural, but in English everyone/somebody/nobody are singular, while both of takes a plural noun + plural verb. Note: people is already plural (people are); police, staff and cattle also behave as plurals (The police are investigating).",
            hi: "दो मूल कारण। एक: बांग्ला क्रिया में s जैसा चिह्न नहीं — क्रिया-रूप कर्ता की संख्या पर इस तरह टिका नहीं — इसलिए अंग्रेज़ी में -s लगाने की आदत कमज़ोर। दो: 'सब लोग', 'दोनों', 'कोई' — सब बहुवचन लगते हैं, पर अंग्रेज़ी में everyone/somebody/nobody एकवचन, और both of के बाद बहुवचन संज्ञा + बहुवचन क्रिया। जान लें: people स्वयं बहुवचन है (people are); police, staff, cattle भी बहुवचन-व्यवहार करते हैं (The police are investigating)।",
          },
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
            bn: "ছোট গল্পে দেখা যাক",
            en: "A short story to see it all",
            hi: "एक छोटी कहानी में सब देखें",
          },
          body: {
            bn: "স্কুলের বার্ষিক সভার আগের দিন সাধারণ-শিক্ষক ঘরে ঘরে খবর দিচ্ছিলেন: 'The list of participants is ready, but there are two problems. The number of chairs is too small, and a number of guests are coming from Sylhet. Everyone has to sit somewhere! Our team is preparing the hall, and the students who are on duty have arranged the sound system. Neither of the two microphones is working, and the principal, along with two teachers, is checking everything right now.' — এক প্যারায় সব ফাঁদ: list is, there are, the number is, a number are, everyone has, team is, students who are... have, neither is, principal... is!",
            en: "The day before the school's annual function, the general teacher was announcing room by room: 'The list of participants is ready, but there are two problems. The number of chairs is too small, and a number of guests are coming from Sylhet. Everyone has to sit somewhere! Our team is preparing the hall, and the students who are on duty have arranged the sound system. Neither of the two microphones is working, and the principal, along with two teachers, is checking everything right now.' — every trap in one paragraph: list is, there are, the number is, a number are, everyone has, team is, students who are... have, neither is, principal... is!",
            hi: "स्कूल के वार्षिक समारोह से एक दिन पहले सामान्य शिक्षक कमरा-दर-कमरा सूचना दे रहे थे: 'The list of participants is ready, but there are two problems. The number of chairs is too small, and a number of guests are coming from Sylhet. Everyone has to sit somewhere! Our team is preparing the hall, and the students who are on duty have arranged the sound system. Neither of the two microphones is working, and the principal, along with two teachers, is checking everything right now.' — एक पैराग्राफ में सारे जाल: list is, there are, the number is, a number are, everyone has, team is, students who are... have, neither is, principal... is!",
          },
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
            bn: "এক নজরে — পুরো পাঠ ছোট করে",
            en: "At a glance — the whole lesson in short",
            hi: "एक नज़र में — पूरा पाठ संक्षेप में",
          },
          body: {
            bn: "সাতটা সূত্রে সারমর্ম: (১) one-s rule — একবচন কর্তা → ক্রিয়ায় s; বহুবচন কর্তা → ক্রিয়ায় s নেই। (২) of/with/along with-ফ্রেজ বাদ দিয়ে subject খুঁজুন — ক্রিয়া মূল নামের সাথেই। (৩) each/every/everyone/somebody/nobody/either/neither/one of → একবচন। (৪) there-এর পরের নামই আসল কর্তা। (৫) and-জোড়া → বহুবচন, একক-ভাব (rice and curry) হলে একবচন। (৬) The number of → একবচন; A number of → বহুবচন। (৭) people/police/staff/cattle → বহুবচন।",
            en: "The essence in seven formulas: (1) one-s rule — singular subject → -s on the verb; plural subject → no -s. (2) Delete of/with/along with phrases to find the subject — the verb follows the head noun. (3) each/every/everyone/somebody/nobody/either/neither/one of → singular. (4) After there, the noun that follows is the real subject. (5) An and-pair → plural; a single-unit idea (rice and curry) → singular. (6) The number of → singular; A number of → plural. (7) people/police/staff/cattle → plural.",
            hi: "सात सूत्रों में सार: (1) one-s rule — एकवचन कर्ता → क्रिया में s; बहुवचन → s नहीं। (2) of/with/along with वाक्यांश हटाकर subject खोजें — क्रिया मूल संज्ञा से मेल खाएगी। (3) each/every/everyone/somebody/nobody/either/neither/one of → एकवचन। (4) there के बाद की संज्ञा ही असली subject। (5) and-जोड़ी → बहुवचन; एक-इकाई भाव (rice and curry) → एकवचन। (6) The number of → एकवचन; A number of → बहुवचन। (7) people/police/staff/cattle → बहुवचन।",
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
