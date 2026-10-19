// ─── Grammar seeds v4: BEGINNER batch B1A (1 lesson) ───
// Task 10-C1 — point-form roadmap upgrade. Source: grammar-v3-b1.ts →
// "Tense basics" (beginner), the owner's flagship example. Tense split per
// owner note: Present / Past / Future each get their own "when" and
// "formation" sections; the signal-word body became a word | tense | example
// table. title/intro/tips/quiz/examples copied UNCHANGED from the v3 source.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_B1A: SeedGrammarV4Entry[] = [
  /* ── 1. Tense Basics (Beginner) ────────────────────────────────────── */
  {
    topic: "Tense basics",
    level: "beginner",
    title: "Tense Basics (Beginner)",
    unit: 1,
    sortOrder: 0,
    data: {
      title: {
        bn: "টেন্সের বেসিক (বিগিনার)",
        en: "Tense Basics (Beginner)",
        hi: "टेंस के बेसिक (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের প্রথম ব্যাকরণ পাঠ — এর আগের কোনো ব্যাকরণ পাঠ লাগে না; রোজকার শব্দ (eat, go, school, market) আর am/is/are-এর সঙ্গে হালকা পরিচয় থাকলেই শুরু করা যাবে। বাংলায় ক্রিয়া কর্তা ও কাল অনুযায়ী রূপ বদলায়: আমি খাই, সে খায়, কাল খাব, গতকাল খেয়েছিলাম। ইংরেজিতেও ক্রিয়া বদলায়, কিন্তু বদলানোর নিয়ম আলাদা — আর সেই ফারাক থেকেই জন্মায় বাঙালি শিক্ষার্থীদের চেনা ভুলগুলো: 'He go', 'Yesterday I go', 'I did not went'। এই পাঠে তিনটে মূল কাল — present, past, future — কখন বসে, কীভাবে গঠিত হয়, কোন শব্দ কোন কালের আভাস দেয়, আর গল্প বলার সময় কাল কীভাবে ধরে রাখতে হয় — সব ধাপে ধাপে শিখব।",
        en: "This is the first grammar lesson on the learning path — no earlier grammar lesson is required; everyday words (eat, go, school, market) and a light acquaintance with am/is/are are enough to start. In Bengali the verb changes its form with the subject and the time: ami khai, she khay, kal khab, gotokal kheyechhilam. English verbs change too, but by different rules — and that gap produces the familiar Bengali-speaker mistakes: 'He go', 'Yesterday I go', 'I did not went'. In this lesson we learn, step by step, when the three basic tenses — present, past and future — are used, how each one is built, which words signal which tense, and how to keep the tense steady while telling a story.",
        hi: "यह लर्निंग पथ का पहला व्याकरण पाठ है — पहले कोई व्याकरण पाठ ज़रूरी नहीं; रोज़मर्रा के शब्द (eat, go, school, market) और am/is/are से हल्की पहचान ही काफ़ी है। बांग्ला में क्रिया का रूप कर्ता और समय के साथ बदलता है (आमি खाइ, से खाय)। अंग्रेज़ी में भी क्रिया बदलती है, पर नियम अलग हैं — और इसी फ़र्क़ से बांग्लाभाषी छात्रों की जानी-पहचानी गलतियाँ बनती हैं: 'He go', 'Yesterday I go', 'I did not went'। इस पाठ में हम कदम-दर-कदम सीखेंगे: तीन मूल काल — present, past, future — कब आते हैं, कैसे बनते हैं, कौन-से शब्द किस काल का संकेत देते हैं, और कहानी सुनाते समय काल को कैसे स्थिर रखा जाता है।",
      },
      roadmap: [
        { bn: "⏰ Present simple কখন — অভ্যাস, সত্য, সময়সূচির তিন কাজ", en: "⏰ When the present simple works: habits, truths, schedules", hi: "⏰ Present simple कब — आदत, सत्य और समय-सारणी के तीन काम" },
        { bn: "⏳ Past simple কখন — শুরু-শেষ দুটোই অতীতে বাঁধা কাজ", en: "⏳ When the past simple works: jobs finished in the past", hi: "⏳ Past simple कब — शुरू-अंत दोनों अतीत में बँधे काम" },
        { bn: "🔮 Future কখন — পরিকল্পনা, প্রতিশ্রুতি, ভবিষ্যদ্বাণী", en: "🔮 When the future works: plans, promises, predictions", hi: "🔮 Future कब — योजना, वादे, भविष्यवाणियाँ" },
        { bn: "🏗️ Present-এর গঠন: V1, আর he/she/it-এ s", en: "🏗️ Building the present: V1, plus s for he/she/it", hi: "🏗️ Present की बनावट: V1, और he/she/it पर s" },
        { bn: "🧱 Past-এর গঠন: সব পুরুষে ক্রিয়ার এক রূপ (V2)", en: "🧱 Building the past: one V2 form for every person", hi: "🧱 Past की बनावट: हर पुरुष में क्रिया का एक रूप (V2)" },
        { bn: "🛠️ Future-এর গঠন: will + মূল ক্রিয়া", en: "🛠️ Building the future: will + base verb", hi: "🛠️ Future की बनावट: will + मूल क्रिया" },
        { bn: "🚦 সংকেত শব্দের ছক: কোন শব্দ কোন কালের", en: "🚦 The signal-word table: which word points to which tense", hi: "🚦 संकेत-शब्दों की तालिका: कौन-सा शब्द किस काल का" },
        { bn: "👉 তৃতীয় পুরুষের -s: কর্তা চেনার ছোট চিহ্ন", en: "👉 The third-person -s: the tiny mark that shows the subject", hi: "👉 तृतीय पुरुष की -s: कर्ता पहचानने का छोटा चिह्न" },
        { bn: "✍️ -s-এর বানান আর does-এর ভাগ", en: "✍️ Spelling the -s and the does split", hi: "✍️ -s की वर्तनी और does का विभाजन" },
        { bn: "🔁 go/went/gone: অনিয়মিত ক্রিয়ার ১০ জোড়া", en: "🔁 go/went/gone: ten irregular pairs to memorise", hi: "🔁 go/went/gone: अनियमित क्रियाओं के 10 जोड़े" },
        { bn: "🧲 এক সময় — এক কাল: বাক্যে কাল মেশাবেন না", en: "🧲 One time, one tense: never mix tenses in a sentence", hi: "🧲 एक समय — एक काल: वाक्य में काल न मिलाएँ" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের ৫টা কমন ভুল — চিনে রাখুন", en: "⚠️ Five common Bengali-speaker mistakes — learn to spot them", hi: "⚠️ बांग्लाभाषी छात्रों की 5 आम गलतियाँ — पहचानना सीखें" },
        { bn: "📖 রিমার গল্পে তিন কাল + পুরো পাঠ এক নজরে", en: "📖 Rima's story in all three tenses + the lesson at a glance", hi: "📖 रिमा की कहानी में तीन काल + पूरा पाठ एक नज़र में" },
      ],
      sections: [
        {
          heading: {
            bn: "⏰ Present simple কখন — অভ্যাস, সত্য, সময়সূচি",
            en: "⏰ When to use the present simple — habits, truths, schedules",
            hi: "⏰ Present simple कब — आदतें, सत्य, समय-सारणी",
          },
          lead: {
            bn: "রোজকার অভ্যাস, চিরন্তন সত্য আর ঠিক সময়ের সূচি — এই তিনের ঘরই present simple।",
            en: "Daily habits, timeless truths and fixed schedules — all three live in the present simple.",
            hi: "रोज़ की आदतें, अनंत सत्य और तय समय-सारणी — तीनों का घर present simple है।",
          },
          points: [
            { bn: "**অভ্যাস বা রুটিন** — প্রতিদিনের কাজ: I drink tea every morning, He goes to office by bus।", en: "**A habit or routine** — everyday actions: I drink tea every morning, He goes to office by bus.", hi: "**आदत या रूटीन** — रोज़ के काम: I drink tea every morning, He goes to office by bus।" },
            { bn: "**চিরন্তন সত্য** — কখনো বদলায় না: The sun rises in the east, Water boils at 100 degrees।", en: "**Timeless truths** — things that never change: The sun rises in the east, Water boils at 100 degrees.", hi: "**अनंत सत्य** — कभी न बदलने वाली बातें: The sun rises in the east, Water boils at 100 degrees।" },
            { bn: "**স্থায়ী অবস্থা** — দীর্ঘমেয়াদি থাকা: She lives in Sylhet।", en: "**Permanent states** — long-term living: She lives in Sylhet.", hi: "**स्थायी अवस्था** — लंबे समय का रहना: She lives in Sylhet।" },
            { bn: "**সময়সূচি** — ঠিক সময়ে শুরু হওয়া কাজ: The class starts at ten।", en: "**Schedules** — things that start at a fixed time: The class starts at ten.", hi: "**समय-सारणी** — तय समय पर शुरू होने वाले काम: The class starts at ten।" },
            { bn: "বাংলায় যেসব বাক্য 'খাই, যাই, করি, থাকি' দিয়ে শেষ হয়, ইংরেজিতে তাদের ঘর present simple।", en: "Sentences that Bengali finishes with 'khai, jai, kori, thaki' belong to the present simple in English.", hi: "जो वाक्य बांग्ला में 'খাই, যাই, করি, থাকি' से खत्म होते हैं, उनका घर अंग्रेज़ी में present simple है।" },
          ],
          examples: [
            {
              wrong: "Every day he is going to school by bus.",
              right: "Every day he goes to school by bus.",
              note: {
                bn: "every day = প্রতিদিনের অভ্যাস → present simple। 'এখন চলছে' এমন কাজ নয়, তাই is going নয়।",
                en: "'Every day' marks a daily habit, so the present simple is right — this is not an action happening right now, so no 'is going'.",
                hi: "'every day' = रोज़ की आदत → present simple; अभी चल रहा काम नहीं, इसलिए 'is going' नहीं।",
              },
            },
            {
              wrong: "The sun rose in the east.",
              right: "The sun rises in the east.",
              note: {
                bn: "চিরন্তন সত্য সবসময় present-এ থাকে — শব্দটা অতীতের মতো শোনালেও সূর্য আজও পূর্বে ওঠে।",
                en: "Timeless truths always stay in the present — even if the verb sounds 'past', the sun still rises in the east today.",
                hi: "अनंत सत्य हमेशा present में रहते हैं — सूरज आज भी पूर्व से उगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⏳ Past simple কখন — শেষ হয়ে যাওয়া কাজ",
            en: "⏳ When to use the past simple — finished actions",
            hi: "⏳ Past simple कब — ख़त्म हुए काम",
          },
          lead: {
            bn: "শুরুও অতীতে, শেষও অতীতে — বাংলার 'খেলাম-গেলাম' পরিবারের ঠিকানা এখানে।",
            en: "Started in the past, ended in the past — the home of Bengali's 'khelam-gelam' family.",
            hi: "शुरुआत भी अतीत में, अंत भी अतीत में — बांग्ला के 'खेलाम-गेलाम' परिवार का ठिकाना यहीं।",
          },
          points: [
            { bn: "**শেষ হয়ে যাওয়া কাজ** — past simple বসে এখানেই: কাজের শুরুও অতীতে, শেষও অতীতে।", en: "**Finished actions** — this is where the past simple sits: the action started and ended in the past.", hi: "**ख़त्म हुए काम** — past simple यहीं बैठता है: काम की शुरुआत भी अतीत में, अंत भी अतीत में।" },
            { bn: "I watched a movie last night, He called me yesterday — দুটোই শেষ হয়ে যাওয়া কাজ।", en: "I watched a movie last night, He called me yesterday — both are finished actions.", hi: "I watched a movie last night, He called me yesterday — दोनों ख़त्म हुए काम।" },
            { bn: "We went to Cox's Bazar in December — পুরনো ভ্রমণ-গল্পও একই জায়গায় বসে।", en: "We went to Cox's Bazar in December — old travel stories sit in the same place.", hi: "We went to Cox's Bazar in December — पुरानी यात्रा-कहानियाँ भी उसी जगह बैठती हैं।" },
            { bn: "বাংলার 'খেলাম, গেলাম, করলাম' পরিবারের জায়গা ইংরেজিতে এই past simple।", en: "The Bengali 'khelam, gelam, korlam' family belongs to this past simple in English.", hi: "बांग्ला के 'खेलাম, গেলাম, করলাম' परिवार की जगह अंग्रेज़ी में यही past simple।" },
          ],
          examples: [
            {
              wrong: "I go to the market yesterday.",
              right: "I went to the market yesterday.",
              note: {
                bn: "yesterday আছে মানে কাজটা অতীতে শেষ — ক্রিয়াও past হবে: go→went। বাংলা 'গেলাম'-এর মতোই ইংরেজি ক্রিয়া নিজেই বদলায়।",
                en: "'Yesterday' means the action is finished, so the verb must go past: go becomes went — just as Bengali changes the verb itself.",
                hi: "'yesterday' है तो काम अतीत में खत्म — क्रिया भी past होगी: go→went।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔮 Future কখন — পরিকল্পনা, প্রতিশ্রুতি, ভবিষ্যদ্বাণী",
            en: "🔮 When to use the future — plans, promises, predictions",
            hi: "🔮 Future कब — योजना, वादे, भविष्यवाणियाँ",
          },
          lead: {
            bn: "এখনো ঘটেনি এমন কাজ — প্ল্যান, প্রতিশ্রুতি, আগাম খবর — সব চলবে will-এর সঙ্গে।",
            en: "Work that has not happened yet — plans, promises, predictions — all travel with will.",
            hi: "अभी घटित न हुआ काम — योजना, वादे, भविष्यवाणियाँ — सब will के साथ चलेगा।",
          },
          points: [
            { bn: "**এখনো ঘটেনি এমন কাজ** — future-এর জায়গা এখানে।", en: "**Actions that have not happened yet** — this is the future's place.", hi: "**अभी घटित न हुआ काम** — future की जगह यही है।" },
            { bn: "পরিকল্পনা: I will call you tomorrow, We will meet next week।", en: "Plans: I will call you tomorrow, We will meet next week.", hi: "योजना: I will call you tomorrow, We will meet next week।" },
            { bn: "প্রতিশ্রুতি: Don't worry, I will help you।", en: "Promises: Don't worry, I will help you.", hi: "वादा: Don't worry, I will help you।" },
            { bn: "ভবিষ্যদ্বাণী — সামনে কী ঘটবে তার আগাম খবরও will-এই বলা হয়।", en: "Predictions — news of what is coming is also told with will.", hi: "भविष्यवाणी — आगे क्या होगा उसकी ख़बर भी will से ही दी जाती है।" },
            { bn: "বাংলার 'খাব, যাব, করব' পরিবারের জায়গা ইংরেজিতে এই future।", en: "The Bengali 'khab, jabo, korbo' family belongs to this future in English.", hi: "बांग्ला के 'খাব, যাব, করব' परिवार की जगह अंग्रेज़ी में यही future।" },
          ],
          examples: [
            {
              wrong: "Tomorrow I buy a new phone.",
              right: "Tomorrow I will buy a new phone.",
              note: {
                bn: "tomorrow = ভবিষ্যতের সংকেত; ইংরেজিতে শুধু tomorrow লিখলেই হয় না — ক্রিয়ার সঙ্গে will লাগবেই।",
                en: "'Tomorrow' is a future signal; in English the word alone is not enough — the verb needs 'will' with it.",
                hi: "'tomorrow' = भविष्य का संकेत; केवल tomorrow काफ़ी नहीं — क्रिया के साथ will ज़रूरी है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏗️ Present simple গঠন — সব পুরুষ",
            en: "🏗️ Building the present simple — every person",
            hi: "🏗️ Present simple बनावट — हर पुरुष",
          },
          lead: {
            bn: "present-এর গঠন সহজ — শুধু he/she/it-এর জন্য ক্রিয়ায় s জুড়তে হয়।",
            en: "The present is easy to build — only he/she/it needs an s on the verb.",
            hi: "present की बनावट आसान — केवल he/she/it के लिए क्रिया में s जुड़ता है।",
          },
          formula: {
            bn: "কর্তা + ক্রিয়ার মূল রূপ (V1); he/she/it হলে ক্রিয়া + s",
            en: "subject + base verb (V1); he/she/it takes verb + s",
            hi: "कर्ता + मूल क्रिया (V1); he/she/it हो तो क्रिया + s",
          },
          points: [
            { bn: "I/you/we/they + ক্রিয়ার মূল রূপ (V1) — I play, they play।", en: "I/you/we/they + base verb (V1) — I play, they play.", hi: "I/you/we/they + मूल क्रिया (V1) — I play, they play।" },
            { bn: "he/she/it-এ ক্রিয়ার শেষে s — he plays, she plays।", en: "he/she/it takes the verb with s at the end — he plays, she plays.", hi: "he/she/it पर क्रिया के अंत में s — he plays, she plays।" },
            { bn: "নেগেটিভ: don't/doesn't + মূল ক্রিয়া — I don't play, He doesn't play।", en: "Negative: don't/doesn't + base verb — I don't play, He doesn't play.", hi: "निषेध: don't/doesn't + मूल क्रिया — I don't play, He doesn't play।" },
            { bn: "প্রশ্ন: Do/Does + কর্তা + মূল ক্রিয়া — Do you play? Does he play?", en: "Question: Do/Does + subject + base verb — Do you play? Does he play?", hi: "प्रश्न: Do/Does + कर्ता + मूल क्रिया — Do you play? Does he play?" },
          ],
          examples: [
            {
              wrong: "He don't like fish.",
              right: "He doesn't like fish.",
              note: {
                bn: "don't যায় শুধু I/you/we/they-এর সঙ্গে; he/she/it-এর জুটি doesn't — বাংলা 'পছন্দ করে না' সবার জন্য এক হওয়ায় এই ভাগ চোখে পড়ে না।",
                en: "'Don't' goes only with I/you/we/they; the partner for he/she/it is 'doesn't' — Bengali uses one form for everyone, so the split is easy to miss.",
                hi: "'don't' केवल I/you/we/they के साथ; he/she/it का जोड़ीदार 'doesn't' है।",
              },
            },
            {
              wrong: "I not like coffee.",
              right: "I don't like coffee.",
              note: {
                bn: "বাংলায় 'পছন্দ করি না' — শুধু না জুড়ে দিলেই হয়; ইংরেজিতে সাধারণ ক্রিয়ার নেগেটিভে do/does/did-এর ভেতরে not ঢোকে: don't/doesn't/didn't।",
                en: "Bengali just adds 'na' to negate; English negatives of ordinary verbs wrap 'not' inside do/does/did — don't/doesn't/didn't.",
                hi: "बांग्ला में केवल 'नहीं' जोड़ते हैं; अंग्रेज़ी में साधारण क्रिया का निषेध do/does/did के भीतर not लेकर बनता है।",
              },
            },
            {
              wrong: "Does he plays cricket?",
              right: "Does he play cricket?",
              note: {
                bn: "does-এ s আছে মানে তৃতীয় পুরুষের চিহ্ন ইঞ্জিনেই চলে গেছে — মূল ক্রিয়া সাধারণ রূপে (play) থাকবে; s একবারে এক জায়গায়।",
                en: "'Does' already carries the third-person s, so the main verb stays plain (play) — the s can only sit in one place.",
                hi: "'does' में s है, इसलिए मूल क्रिया साधारण रूप (play) में रहेगी — s एक ही जगह बैठता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧱 Past simple গঠন — সব পুরুষে এক",
            en: "🧱 Building the past simple — one form for all",
            hi: "🧱 Past simple बनावट — सबके लिए एक",
          },
          lead: {
            bn: "past-এর ভালো খবর: সূত্র সব পুরুষে এক — ক্রিয়া বসল past রূপেই।",
            en: "The good news about the past: one formula for every person — the verb just takes its past form.",
            hi: "past की अच्छी ख़बर: सूत्र हर पुरुष में एक — क्रिया बस past रूप में बैठती है।",
          },
          formula: {
            bn: "কর্তা (সব পুরুষ) + ক্রিয়ার past রূপ (V2)",
            en: "subject (every person) + past form of the verb (V2)",
            hi: "कर्ता (हर पुरुष) + क्रिया का past रूप (V2)",
          },
          points: [
            { bn: "ক্রিয়ার past রূপ (V2) সব পুরুষে এক: I played, you played, he played, we played, they played।", en: "The past form (V2) is the same for every person: I played, you played, he played, we played, they played.", hi: "क्रिया का past रूप (V2) हर पुरुष में एक: I played, you played, he played, we played, they played।" },
            { bn: "অনিয়মিত ক্রিয়ায় রূপ আলাদা — I went, she ate।", en: "Irregular verbs take their own shapes — I went, she ate.", hi: "अनियमित क्रियाओं का रूप अलग — I went, she ate।" },
            { bn: "নেগেটিভ: didn't + মূল ক্রিয়া — I didn't play; didn't played কখনো নয়।", en: "Negative: didn't + base verb — I didn't play; never 'didn't played'.", hi: "निषेध: didn't + मूल क्रिया — I didn't play; 'didn't played' कभी नहीं।" },
            { bn: "প্রশ্ন: Did + কর্তা + মূল ক্রিয়া — Did you play?", en: "Question: Did + subject + base verb — Did you play?", hi: "प्रश्न: Did + कर्ता + मूल क्रिया — Did you play?" },
          ],
          examples: [
            {
              wrong: "Did you went to class?",
              right: "Did you go to class?",
              note: {
                bn: "did নিজেই past বহন করে, তাই পরের ক্রিয়া V1 — অতীতের চিহ্ন বাক্যে একবারই আসে।",
                en: "'Did' already carries the past, so the next verb stays V1 — the past marker appears only once in the sentence.",
                hi: "'did' स्वयं past ले जाता है, इसलिए अगली क्रिया V1 रहती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🛠️ Future গঠন — will + মূল ক্রিয়া",
            en: "🛠️ Building the future — will + base verb",
            hi: "🛠️ Future बनावट — will + मूल क्रिया",
          },
          lead: {
            bn: "will জুড়লেই ভবিষ্যৎ — নেগেটিভ আর প্রশ্নও একই ছাঁচে ঢলে।",
            en: "Add will and the future is done — negatives and questions pour from the same mould.",
            hi: "will जोड़ते ही भविष्य तैयार — निषेध और प्रश्न भी उसी साँचे में ढलते हैं।",
          },
          formula: {
            bn: "কর্তা + will + ক্রিয়ার মূল রূপ (V1)",
            en: "subject + will + base verb (V1)",
            hi: "कर्ता + will + मूल क्रिया (V1)",
          },
          points: [
            { bn: "will + মূল ক্রিয়া — সূত্রও সব পুরুষে এক: I/you/he/she/it/we/they will go।", en: "will + base verb — the formula is the same for everyone: I/you/he/she/it/we/they will go.", hi: "will + मूल क्रिया — सूत्र सबके लिए एक: I/you/he/she/it/we/they will go।" },
            { bn: "নেগেটিভ: won't + মূল ক্রিয়া — I won't go।", en: "Negative: won't + base verb — I won't go.", hi: "निषेध: won't + मूल क्रिया — I won't go।" },
            { bn: "প্রশ্ন: Will + কর্তা + মূল ক্রিয়া? — Will you come?", en: "Question: Will + subject + base verb? — Will you come?", hi: "प्रश्न: Will + कर्ता + मूल क्रिया? — Will you come?" },
            { bn: "নেগেটিভ-প্রশ্নে কালের বোঝা বহন করে do/does/did/will — মূল ক্রিয়া সবসময় ফেরে সাধারণ V1 রূপে।", en: "In negatives and questions the tense is carried by do/does/did/will — the main verb always returns to its plain V1 form.", hi: "निषेध-प्रश्न में काल का बोझ ढोते हैं do/does/did/will — मूल क्रिया हमेशा साधारण V1 रूप में लौटती है।" },
            { bn: "He doesn't play ঠিক, He doesn't plays ভুল; Did you go ঠিক, Did you went ভুল।", en: "He doesn't play is right, He doesn't plays is wrong; Did you go is right, Did you went is wrong.", hi: "He doesn't play सही, He doesn't plays गलत; Did you go सही, Did you went गलत।" },
          ],
          examples: [
            {
              wrong: "She will comes tomorrow.",
              right: "She will come tomorrow.",
              note: {
                bn: "will-এর পরে সবার জন্য V1 — কোনো s নেই, কোনো past রূপ নেই; will নিজেই ভবিষ্যৎ বোঝায়।",
                en: "After 'will' every subject takes V1 — no s, no past form; 'will' alone shows the future.",
                hi: "'will' के बाद सबके लिए V1 — कोई s नहीं; भविष्य 'will' ही दिखाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — কাল চেনার সংকেত",
            en: "🚦 Signal words — clues that pick the tense",
            hi: "🚦 संकेत शब्द — काल पहचानने के सुराग",
          },
          lead: {
            bn: "সংকেত শব্দ দেখলেই কাল ধরা পড়ে — আগে সংকেত খুঁজুন, তারপর ক্রিয়া বসান।",
            en: "Signal words give the tense away — hunt for the signal first, then place the verb.",
            hi: "संकेत-शब्द देखते ही काल पकड़ में आता है — पहले संकेत खोजें, फिर क्रिया बिठाएँ।",
          },
          points: [
            { bn: "বাক্য বানানোর আগে সংকেত শব্দটা খুঁজুন — সংকেতই কাল ঠিক করে।", en: "Before building a sentence, hunt for the signal word — the signal fixes the tense.", hi: "वाक्य बनाने से पहले संकेत-शब्द खोजें — संकेत ही काल तय करता है।" },
            { bn: "কাল ঠিক হলে ক্রিয়ার রূপ নিজে নিজেই ঠিক হয়ে যায়।", en: "Once the tense is fixed, the verb form falls into place by itself.", hi: "काल तय होते ही क्रिया-रूप अपने आप ठीक हो जाता है।" },
            { bn: "present-এর সংকেত দেখলেই বুঝবেন কাজটা অভ্যাস — present simple।", en: "When you see a present signal, you know the action is a habit — present simple.", hi: "present के संकेत देखते ही समझ जाइए कि काम आदत का है — present simple।" },
            { bn: "সংকেত না থাকলে প্রেক্ষিত দেখুন — গল্প আগে থেকে past-এ চলছিল? তাহলে past-এই থাকুন।", en: "No signal? Read the context — if the story has been running in the past, stay in the past.", hi: "संकेत न हो तो संदर्भ देखें — कहानी पहले से past में चल रही है? तो past में ही रहें।" },
          ],
          table: {
            head: [
              { bn: "সংকেত শব্দ", en: "Signal words", hi: "संकेत शब्द" },
              { bn: "কোন কাল", en: "Tense", hi: "कौन-सा काल" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "every day, every week, always, usually", en: "every day, every week, always, usually", hi: "every day, every week, always, usually" },
                { bn: "Present — অভ্যাস/সত্য", en: "Present — habit/truth", hi: "Present — आदत/सत्य" },
                { bn: "I always get up at six", en: "I always get up at six", hi: "I always get up at six" },
              ],
              [
                { bn: "often, sometimes, never, on Fridays", en: "often, sometimes, never, on Fridays", hi: "often, sometimes, never, on Fridays" },
                { bn: "Present — অভ্যাস/সত্য", en: "Present — habit/truth", hi: "Present — आदत/सत्य" },
                { bn: "She never eats fast food", en: "She never eats fast food", hi: "She never eats fast food" },
              ],
              [
                { bn: "yesterday, last night, last week, last month", en: "yesterday, last night, last week, last month", hi: "yesterday, last night, last week, last month" },
                { bn: "Past — শেষ হওয়া কাজ", en: "Past — finished action", hi: "Past — ख़त्म हुआ काम" },
                { bn: "She called me two days ago", en: "She called me two days ago", hi: "She called me two days ago" },
              ],
              [
                { bn: "ago (two days ago, long ago), in 2015", en: "ago (two days ago, long ago), in 2015", hi: "ago (two days ago, long ago), in 2015" },
                { bn: "Past — শেষ হওয়া কাজ", en: "Past — finished action", hi: "Past — ख़त्म हुआ काम" },
                { bn: "We shifted to Dhaka in 2015", en: "We shifted to Dhaka in 2015", hi: "We shifted to Dhaka in 2015" },
              ],
              [
                { bn: "tomorrow, next week, next month, next Friday", en: "tomorrow, next week, next month, next Friday", hi: "tomorrow, next week, next month, next Friday" },
                { bn: "Future — এখনো ঘটেনি", en: "Future — not yet happened", hi: "Future — अभी घटित नहीं" },
                { bn: "We will start next Monday", en: "We will start next Monday", hi: "We will start next Monday" },
              ],
              [
                { bn: "soon, tonight, in ten minutes", en: "soon, tonight, in ten minutes", hi: "soon, tonight, in ten minutes" },
                { bn: "Future — এখনো ঘটেনি", en: "Future — not yet happened", hi: "Future — अभी घटित नहीं" },
                { bn: "The bus will leave in ten minutes", en: "The bus will leave in ten minutes", hi: "The bus will leave in ten minutes" },
              ],
            ],
          },
          examples: [
            {
              wrong: "My father always go to the mosque.",
              right: "My father always goes to the mosque.",
              note: {
                bn: "always → অভ্যাস → present simple; আর my father = he → ক্রিয়ায় s: goes।",
                en: "'Always' marks a habit — present simple; and 'my father' = he, so the verb takes s: goes.",
                hi: "'always' → आदत → present simple; और 'my father' = he → क्रिया में s: goes।",
              },
            },
            {
              wrong: "We visit our village last Eid.",
              right: "We visited our village last Eid.",
              note: {
                bn: "last Eid = নির্দিষ্ট অতীত সময় → past simple: visit→visited।",
                en: "'Last Eid' is a finished past time — past simple: visit becomes visited.",
                hi: "'last Eid' = निश्चित अतीत समय → past simple: visit→visited।",
              },
            },
            {
              wrong: "I tell you everything tomorrow.",
              right: "I will tell you everything tomorrow.",
              note: {
                bn: "tomorrow → future; ইংরেজিতে ভবিষ্যতের বাক্যে will ছাড়া সাধারণ ক্রিয়া চলে না।",
                en: "'Tomorrow' points to the future; an ordinary verb cannot carry a future sentence in English without 'will'.",
                hi: "'tomorrow' → भविष्य; भविष्य के वाक्य में साधारण क्रिया will के बिना नहीं चलती।",
              },
            },
            {
              wrong: "Two days ago I meet my old friend.",
              right: "Two days ago I met my old friend.",
              note: {
                bn: "ago = অতীতের সংকেত → past simple; meet-এর past met — meeted নয়।",
                en: "'Ago' signals the past — past simple; the past of meet is met, never 'meeted'.",
                hi: "'ago' = अतीत का संकेत → past simple; meet का past met है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "👉 তৃতীয় পুরুষের -s — ছোট চিহ্ন, বড় দায়িত্ব",
            en: "👉 The third-person -s — a tiny mark with a big job",
            hi: "👉 तृतीय पुरुष की -s — छोटा चिह्न, बड़ा दायित्व",
          },
          lead: {
            bn: "বাংলা ক্রিয়ার ভেতরে কর্তার খবর লুকিয়ে থাকে — ইংরেজিতে সেই কাজ করে একটাই চিহ্ন: s।",
            en: "Bengali hides the subject inside its verb — in English one tiny mark does the job: s.",
            hi: "बांग्ला क्रिया के भीतर कर्ता की ख़बर छिपी रहती है — अंग्रेज़ी में वह काम करता है एक चिह्न: s।",
          },
          formula: {
            bn: "একবচন কর্তা (he/she/it) + ক্রিয়া + s",
            en: "singular subject (he/she/it) + verb + s",
            hi: "एकवचन कर्ता (he/she/it) + क्रिया + s",
          },
          points: [
            { bn: "বাংলায় 'সে যায়' বললে কর্তার খবর ক্রিয়ার শেষের ভেতরেই মেশানো থাকে — ইংরেজিতে সেই খবর পৌঁছে দেয় শুধু একটা চিহ্ন: s।", en: "In Bengali 'se jay' packs the subject's identity inside the verb ending — in English one tiny mark delivers it: s.", hi: "बांग्ला में 'সে যায়' कहने पर कर्ता की ख़बर क्रिया के अंत में ही मिश्रित रहती है — अंग्रेज़ी में वह पहुँचाता है केवल एक चिह्न: s।" },
            { bn: "he/she/it বা যেকোনো একবচন নাম (Rahim, the dog, my mother) হলে ক্রিয়ার শেষে s — he goes, she eats, Rahim plays, the dog barks।", en: "With he/she/it or any singular name (Rahim, the dog, my mother) the verb takes s — he goes, she eats, Rahim plays, the dog barks.", hi: "he/she/it या कोई एकवचन नाम (Rahim, the dog, my mother) हो तो क्रिया के अंत में s — he goes, she eats, Rahim plays, the dog barks।" },
            { bn: "I/you/we/they-তে s নেই।", en: "I/you/we/they take no s.", hi: "I/you/we/they पर s नहीं आता।" },
            { bn: "s ছোট, মাঝে মাঝে শোনাও যায় না, কিন্তু বাদ গেলে বাক্য ভুল — ছোট চিহ্ন, বড় দায়িত্ব।", en: "The s is small and sometimes silent, but the sentence is wrong without it — a tiny mark with a big job.", hi: "s छोटा है, कभी-कभी सुनाई भी नहीं देता, पर छूट गया तो वाक्य गलत — छोटा चिह्न, बड़ा दायित्व।" },
          ],
          examples: [
            {
              wrong: "The baby cry at night.",
              right: "The baby cries at night.",
              note: {
                bn: "the baby = it → ক্রিয়ায় s; cry→cries। বাংলা 'শিশুটি কাঁদে' — 'কাঁদে'-র মতোই এখানে s-ই কর্তা বোঝায়।",
                en: "'The baby' = it, so the verb takes s: cry becomes cries — this s does the same job as the Bengali ending 'kande'.",
                hi: "'the baby' = it → क्रिया में s: cry→cries।",
              },
            },
            {
              wrong: "It rain a lot in Sylhet.",
              right: "It rains a lot in Sylhet.",
              note: {
                bn: "আবহাওয়া বোঝাতে it-ও তৃতীয় পুরুষ — তাই rains। 'সিলেটে বৃষ্টি হয়'-র 'হয়' এখানে s-এ অনুবাদ হয়।",
                en: "Weather sentences use 'it', which is third person too — so rains; the Bengali 'hoy' is carried by that little s.",
                hi: "मौसम के लिए 'it' भी तृतीय पुरुष है — इसलिए rains।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "✍️ -s-এর বানান আর does-এর নিয়ম",
            en: "✍️ Spelling the -s and the does rule",
            hi: "✍️ -s की वर्तनी और does का नियम",
          },
          lead: {
            bn: "s বসানোর আগে ক্রিয়ার শেষ ধ্বনিটা দেখুন — বানানের চারটে নিয়ম আর does-এর ভাগ।",
            en: "Check the verb's last sound before adding s — four spelling rules and the does split.",
            hi: "s जोड़ने से पहले क्रिया की आख़िरी ध्वनि देखें — वर्तनी के चार नियम और does का विभाजन।",
          },
          points: [
            { bn: "বেশিরভাগ ক্রিয়ায় শুধু +s: plays, eats।", en: "Most verbs just add s: plays, eats.", hi: "अधिकांश क्रियाओं में केवल +s: plays, eats।" },
            { bn: "-ch/-sh/-ss/-x/-o শেষে +es হয়: watches, washes, misses, fixes, goes।", en: "Verbs ending in -ch/-sh/-ss/-x/-o take es: watches, washes, misses, fixes, goes.", hi: "-ch/-sh/-ss/-x/-o अंत वाली क्रियाएँ +es लेती हैं: watches, washes, misses, fixes, goes।" },
            { bn: "ব্যঞ্জনধ্বনি + y শেষে y উড়ে ies হয়: study→studies, carry→carries।", en: "Consonant + y changes to ies: study→studies, carry→carries.", hi: "व्यंजन + y अंत में y उड़कर ies हो जाता है: study→studies, carry→carries।" },
            { bn: "ব্যতিক্রম দুটো মুখস্থ: have→has, do→does।", en: "Memorise the two odd ones: have→has, do→does.", hi: "दो अपवाद रट लें: have→has, do→does।" },
            { bn: "নেগেটিভ-প্রশ্নে s মূল ক্রিয়া ছেড়ে does-এর গায়ে চলে যায় — He doesn't play (play-তে s নেই), Does she work?", en: "In negatives and questions the s leaves the main verb and moves onto does — He doesn't play (no s on play), Does she work?", hi: "निषेध-प्रश्न में s मूल क्रिया छोड़कर does पर चला जाता है — He doesn't play (play में s नहीं), Does she work?" },
            { bn: "মনে রাখুন: s একবারে একটাই শব্দের হয় — does-এ s থাকলে মূল ক্রিয়ায় আর নয়।", en: "Remember: the s belongs to one word at a time — once it is on does, it leaves the main verb.", hi: "याद रखें: s एक समय में केवल एक शब्द का होता है — does पर है तो मूल क्रिया पर नहीं।" },
          ],
          examples: [
            {
              wrong: "My sister study in class nine.",
              right: "My sister studies in class nine.",
              note: {
                bn: "my sister = she → ক্রিয়ায় s; study শেষে consonant+y, তাই studies — studys নয়।",
                en: "'My sister' = she, so the verb takes s; study ends in consonant + y, so it becomes studies, not 'studys'.",
                hi: "'my sister' = she → क्रिया में s; study के अंत में व्यंजन+y, इसलिए studies।",
              },
            },
            {
              wrong: "Rahim watch TV after dinner.",
              right: "Rahim watches TV after dinner.",
              note: {
                bn: "Rahim = he → s; watch-এর শেষে -ch, তাই +es: watches।",
                en: "'Rahim' = he, so add s; watch ends in -ch, so it takes es: watches.",
                hi: "'Rahim' = he → s; watch का अंत -ch, इसलिए +es: watches।",
              },
            },
            {
              wrong: "He doesn't likes tea.",
              right: "He doesn't like tea.",
              note: {
                bn: "s-এর দায়িত্ব does নিয়ে নিয়েছে — মূল ক্রিয়া সাধারণ রূপে (like); দুই জায়গায় s আসা ভুল।",
                en: "'Does' has taken over the s, so the main verb stays plain (like) — the s must not appear twice.",
                hi: "s की ज़िम्मेदारी does ने ले ली — मूल क्रिया साधारण रूप (like) में; s दो जगह गलत।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔁 go/went/gone — past মানেই ক্রিয়ার নতুন রূপ",
            en: "🔁 go/went/gone — past means a new verb form",
            hi: "🔁 go/went/gone — past का मतलब क्रिया का नया रूप",
          },
          lead: {
            bn: "past-এ ক্রিয়া নতুন রূপ ধরে — অনিয়মিতদের রূপ মুখস্থ ছাড়া উপায় নেই।",
            en: "In the past the verb takes a new form — irregular verbs leave no way out but memorising.",
            hi: "past में क्रिया नया रूप धारण करती है — अनियमित क्रियाओं का एकमात्र उपाय रटना है।",
          },
          points: [
            { bn: "বাংলায় past বানাতে ক্রিয়ার শেষটা বদলায় (যাই→গেলাম, খাই→খেলাম) — ইংরেজিতেও ক্রিয়া নিজেই রূপ বদলায়; নতুন রূপের নাম **V2**।", en: "Bengali makes the past by changing the verb's ending (jai→gelam, khai→khelam); English verbs also change themselves — the new form is called **V2**.", hi: "बांग्ला में past बनाने के लिए क्रिया का अंत बदलता है (যাই→গেলাম); अंग्रेज़ी में भी क्रिया स्वयं रूप बदलती है — नए रूप का नाम **V2**।" },
            { bn: "অনেক শিক্ষার্থী V2 জানেন, কিন্তু বলার তাড়ায় পুরনো রূপ বেরিয়ে আসে — 'Yesterday I go'।", en: "Many learners know the V2, but in the rush of speaking the old form slips out — 'Yesterday I go'.", hi: "बहुत छात्र V2 जानते हैं, पर बोलने की जल्दी में पुराना रूप निकल आता है — 'Yesterday I go'।" },
            { bn: "ফাঁদ ১: didn't-এর পরে V2 নয় — did কাল বহন করে, তাই I didn't go (I didn't went নয়)।", en: "Trap 1: no V2 after didn't — 'did' carries the tense, so it is I didn't go (never 'I didn't went').", hi: "जाल 1: didn't के बाद V2 नहीं — did काल ढोता है, इसलिए I didn't go ('I didn't went' नहीं)।" },
            { bn: "ফাঁদ ২: অর্ধেক বদল ইংরেজিতে নেই — I goed, eated জাতীয় রূপের অস্তিত্বই নেই।", en: "Trap 2: no half-changes in English — forms like I goed, eated simply do not exist.", hi: "जाल 2: आधा-बदला रूप अंग्रेज़ी में नहीं — I goed, eated जैसे रूपों का अस्तित्व ही नहीं।" },
            { bn: "অনিয়মিত ক্রিয়ার V2 আলাদা করে মুখস্থই একমাত্র পথ — নিচের ছকে ১০টা জোড়া।", en: "Memorising each irregular V2 separately is the only route — ten pairs in the table below.", hi: "अनियमित क्रिया का V2 अलग करके रटना ही एकमात्र रास्ता — नीचे तालिका में 10 जोड़े।" },
            { bn: "ভালো খবর: শুরুর দিকে লাগবে যেগুলো, তার বড় অংশ নিয়মিত — শুধু +ed: play→played, watch→watched, call→called, visit→visited, study→studied।", en: "Good news: most of the verbs you need early are regular — just add ed: play→played, watch→watched, call→called, visit→visited, study→studied.", hi: "अच्छी ख़बर: शुरुआत में ज़रूरी अधिकांश क्रियाएँ नियमित हैं — केवल +ed: play→played, watch→watched, call→called, visit→visited, study→studied।" },
          ],
          table: {
            head: [
              { bn: "মূল রূপ (V1)", en: "Base (V1)", hi: "मूल रूप (V1)" },
              { bn: "past রূপ (V2)", en: "Past (V2)", hi: "past रूप (V2)" },
            ],
            rows: [
              [{ bn: "go", en: "go", hi: "go" }, { bn: "went", en: "went", hi: "went" }],
              [{ bn: "eat", en: "eat", hi: "eat" }, { bn: "ate", en: "ate", hi: "ate" }],
              [{ bn: "see", en: "see", hi: "see" }, { bn: "saw", en: "saw", hi: "saw" }],
              [{ bn: "come", en: "come", hi: "come" }, { bn: "came", en: "came", hi: "came" }],
              [{ bn: "buy", en: "buy", hi: "buy" }, { bn: "bought", en: "bought", hi: "bought" }],
              [{ bn: "take", en: "take", hi: "take" }, { bn: "took", en: "took", hi: "took" }],
              [{ bn: "give", en: "give", hi: "give" }, { bn: "gave", en: "gave", hi: "gave" }],
              [{ bn: "do", en: "do", hi: "do" }, { bn: "did", en: "did", hi: "did" }],
              [{ bn: "have", en: "have", hi: "have" }, { bn: "had", en: "had", hi: "had" }],
              [{ bn: "make", en: "make", hi: "make" }, { bn: "made", en: "made", hi: "made" }],
            ],
          },
          examples: [
            {
              wrong: "Yesterday I go to my uncle's house.",
              right: "Yesterday I went to my uncle's house.",
              note: {
                bn: "yesterday-তে কাজ শেষ — go-র past রূপ went; বাংলা 'গেলাম'-এর মতোই ক্রিয়া নিজেই বদলায়।",
                en: "With 'yesterday' the action is finished — 'go' takes its past form 'went', just as Bengali changes the verb itself.",
                hi: "'yesterday' के साथ काम खत्म — go का past रूप went।",
              },
            },
            {
              wrong: "I didn't went to school.",
              right: "I didn't go to school.",
              note: {
                bn: "didn't-এর পরে V1 — অতীতের চিহ্ন বাক্যে একবারই; went বসালে দুইবার অতীত হয়ে যায়।",
                en: "After 'didn't' use V1 — the past marker appears only once; adding 'went' doubles the past.",
                hi: "'didn't' के बाद V1 — past का चिह्न एक ही बार आता है।",
              },
            },
            {
              wrong: "She eated rice with fish curry.",
              right: "She ate rice with fish curry.",
              note: {
                bn: "eat-এর past 'ate' — eated-জাতীয় রূপ ইংরেজিতে অস্তিত্বই নেই।",
                en: "The past of eat is 'ate' — forms like 'eated' simply do not exist in English.",
                hi: "eat का past 'ate' — 'eated' जैसा रूप अंग्रेज़ी में नहीं होता।",
              },
            },
            {
              wrong: "He buyed a shirt last Friday.",
              right: "He bought a shirt last Friday.",
              note: {
                bn: "buy→bought অনিয়মিত — মুখস্থই একমাত্র পথ; কেনাকাটার গল্পে bought-ই বারবার আসবে।",
                en: "buy→bought is irregular — memorising is the only way; 'bought' will keep returning in shopping stories.",
                hi: "buy→bought अनियमित — रटना ही एकमात्र रास्ता है।",
              },
            },
            {
              wrong: "We didn't saw the movie.",
              right: "We didn't see the movie.",
              note: {
                bn: "did/didn't-এর পরে V1 (see); saw চলে শুধু নিজের বাক্যে — We saw the movie।",
                en: "After did/didn't use V1 (see); 'saw' only works in its own sentence — We saw the movie.",
                hi: "did/didn't के बाद V1 (see); 'saw' केवल अपने वाक्य में चलता है — We saw the movie।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧲 এক সময় — এক কাল: গল্পে কাল ধরে রাখা",
            en: "🧲 One time — one tense: keeping the tense steady in a story",
            hi: "🧲 एक समय — एक काल: कहानी में काल स्थिर रखना",
          },
          lead: {
            bn: "সময় এক হলে কালও এক — বাক্যের সব ক্রিয়া সেই এক কালে থাকবে।",
            en: "One time means one tense — every verb in the sentence stays inside it.",
            hi: "समय एक तो काल भी एक — वाक्य की हर क्रिया उसी एक काल में रहेगी।",
          },
          formula: {
            bn: "When/If + কর্তা + V1 (present), কর্তা + will + V1",
            en: "When/If + subject + V1 (present), subject + will + V1",
            hi: "When/If + कर्ता + V1 (present), कर्ता + will + V1",
          },
          points: [
            { bn: "বাংলায় গল্প বললে আমরা স্বাভাবিকভাবেই এক কালে থাকি — ইংরেজিতে স্পিকিং-এর তাড়ায় এক বাক্যেই কাল মিশে যায়।", en: "In Bengali we naturally stay in one tense while narrating — when speaking English under pressure, the tenses mix within a single sentence.", hi: "बांग्ला में कहानी सुनाते समय हम सहज ही एक काल में रहते हैं — अंग्रेज़ी बोलते समय एक ही वाक्य में काल मिल जाता है।" },
            { bn: "'Yesterday I go to the market and buy fish' — ভুল; সময় এক (গতকাল), দুই ক্রিয়াই past: went... bought।", en: "'Yesterday I go to the market and buy fish' — wrong; the time is one (yesterday), so both verbs go past: went... bought.", hi: "'Yesterday I go to the market and buy fish' — गलत; समय एक (कल), दोनों क्रियाएँ past में: went... bought।" },
            { bn: "এটাই **one time, one tense** — সময় এক হলে বাক্যের বা গল্পের টুকরোর সব ক্রিয়া একই কালে।", en: "That is **one time, one tense** — when the time is one, every verb in the sentence or story stretch stays in that tense.", hi: "यही है **one time, one tense** — समय एक हो तो वाक्य या कहानी-टुकड़े की हर क्रिया उसी काल में।" },
            { bn: "সময়ের শব্দ বদলালে ক্রিয়াকেও সঙ্গে নিতেই হয় — yesterday থাকলে ক্রিয়া past রূপে, tomorrow থাকলে will-এর সঙ্গে।", en: "A change of time word forces the verb to follow — with yesterday the verb goes past, with tomorrow it goes with will.", hi: "समय का शब्द बदले तो क्रिया भी साथ चलती है — yesterday हो तो क्रिया past रूप में, tomorrow हो तो will के साथ।" },
            { bn: "ভবিষ্যৎ বাক্যের ভেতরের when/if clause-এ future ঢোকে না — present বসে: When he comes, I will tell him।", en: "No future enters the when/if clause inside a future sentence — the present sits there: When he comes, I will tell him.", hi: "भविष्य के वाक्य के भीतर when/if clause में future नहीं घुसता — वहाँ present बैठता है: When he comes, I will tell him।" },
            { bn: "'When he will come' ভুল — বাংলা 'যখন সে আসবে তখন আমি বলব'-এর প্রতিটা অংশ future-এ গেলেই ভুল হয়।", en: "'When he will come' is wrong — pushing every part of Bengali 'jokhon she ashbe tokhon ami bolbo' into the future creates the error.", hi: "'When he will come' गलत — बांग्ला 'যখন সে আসবে তখন আমি বলব' का हर भाग future में ले जाने से ही यह गलती बनती है।" },
            { bn: "If you study, you will pass — শর্ত present-এ, ফল will-এ।", en: "If you study, you will pass — condition in the present, result with will.", hi: "If you study, you will pass — शर्त present में, परिणाम will में।" },
            { bn: "অনুশীলন: গতকালের দিন ৫ বাক্যে সব past, আজকের রুটিন ৫ বাক্যে সব present, কালকের প্ল্যান ৫ বাক্যে সব will।", en: "Practice: write yesterday in five sentences all in the past, today's routine in five all in the present, tomorrow's plan in five all with will.", hi: "अभ्यास: बीता दिन 5 वाक्यों में सब past, आज की रूटीन 5 वाक्यों में सब present, कल की योजना 5 वाक्यों में सब will।" },
          ],
          examples: [
            {
              wrong: "Yesterday I go to the market and buy some fish.",
              right: "Yesterday I went to the market and bought some fish.",
              note: {
                bn: "সময় এক (গতকাল) — দুই ক্রিয়াই past: went... bought; একটা present থাকলেই বাক্য ভেঙে পড়ে।",
                en: "One time (yesterday) — both verbs go past: went... bought; leaving one in the present breaks the sentence.",
                hi: "समय एक (कल) — दोनों क्रियाएँ past: went... bought।",
              },
            },
            {
              wrong: "Last night we watch TV and eat popcorn.",
              right: "Last night we watched TV and ate popcorn.",
              note: {
                bn: "watch→watched, eat→ate — একই অতীত সময়ের ধারায় সব ক্রিয়া V2-তে।",
                en: "watch→watched, eat→ate — in one past time-line every verb takes V2.",
                hi: "watch→watched, eat→ate — एक ही अतीत समय-रेखा में सब क्रियाएँ V2 में।",
              },
            },
            {
              wrong: "When he will come, I will give him the book.",
              right: "When he comes, I will give him the book.",
              note: {
                bn: "when clause-এ future আসে না — সময় বোঝাতে present (comes), ফলাফলে will; বাংলার 'আসবে... বলব' জোড়া ইংরেজিতে present + will হয়।",
                en: "No future inside the when-clause — the present (comes) marks the time, 'will' marks the result; the Bengali pair 'ashbe... bolbo' becomes present + will in English.",
                hi: "when clause में future नहीं आता — समय के लिए present (comes), परिणाम के लिए will।",
              },
            },
            {
              wrong: "If it will rain, we will stay home.",
              right: "If it rains, we will stay home.",
              note: {
                bn: "if clause-ও একই নিয়মে — শর্ত present-এ (rains), ফল will-এ (will stay); 'বৃষ্টি হবে... থাকব' জোড়া এখানে rains + will stay।",
                en: "Same rule for the if-clause — condition in the present (rains), result with will (will stay); the Bengali pair becomes rains + will stay.",
                hi: "if clause का भी वही नियम — शर्त present में (rains), परिणाम will में (will stay)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी छात्रों की आम गलतियाँ",
          },
          lead: {
            bn: "এই ভুলগুলো ক্লাসরুম-চ্যাট-ইন্টারভিউতে সবচেয়ে বেশি ঘোরে — চিনে রাখুন।",
            en: "These mistakes keep returning in classrooms, chats and interviews — learn to catch them.",
            hi: "ये गलतियाँ क्लासरूम-चैट-इंटरव्यू में सबसे ज़्यादा घूमती हैं — पहचानना सीखें।",
          },
          points: [
            { bn: "এই ভুলগুলো আমাদের ক্লাসরুমে, চ্যাটে, ইন্টারভিউতে সবচেয়ে বেশি দেখা যায়।", en: "These are the most common errors in our classrooms, chats and interviews.", hi: "ये गलतियाँ हमारे क्लासरूम, चैट और इंटरव्यू में सबसे ज़्यादा दिखती हैं।" },
            { bn: "প্রতিটা ভুলের পেছনে একটা বাংলা বাক্য-প্যাটার্ন কাজ করছে।", en: "Behind every one of them sits a Bengali sentence pattern.", hi: "हर एक के पीछे एक बांग्ला वाक्य-पैटर्न काम करता है।" },
            { bn: "দোষ আপনার নয় — দুই ভাষার প্যাটার্নের ফারাকের।", en: "The fault is not yours; it is the gap between the two languages' patterns.", hi: "दोष आपका नहीं — दोनों भाषाओं के पैटर्न के फ़र्क़ का है।" },
            { bn: "ভুলটা বাংলা বাক্যটা চিনে ধরুন, তারপর ঠিক বাক্যটা জোরে তিনবার বলে নিন।", en: "Catch the Bengali sentence behind each error, then say the correct one aloud three times.", hi: "हर गलती के पीछे का बांग्ला वाक्य पहचानें, फिर सही वाक्य तीन बार ज़ोर से बोलें।" },
            { bn: "কানে গেঁথে গেলেই বলার সময় আর ভুল বেরোয় না।", en: "Once the right sentence is fixed in your ear, it stops coming out wrong.", hi: "कान में बैठ जाए तो बोलते समय गलती फिर नहीं निकलती।" },
          ],
          examples: [
            {
              wrong: "He go to office every day.",
              right: "He goes to office every day.",
              note: {
                bn: "বাংলা 'সে প্রতিদিন অফিসে যায়' — 'যায়' শব্দেই কর্তা বোঝায়; ইংরেজিতে goes-এর s-ই সেই কাজ করে, s বাদ দিলে কর্তার চিহ্নই মিলিয়ে যায়।",
                en: "Bengali 'se protidin office-e jay' — the ending 'jay' already shows the subject; in English only the s of 'goes' does that job, so dropping it erases the subject's mark.",
                hi: "बांग्ला 'সে প্রতিদিন অফিসে যায়' — 'যায়' शब्द में ही कर्ता है; अंग्रेज़ी में goes का s वही काम करता है।",
              },
            },
            {
              wrong: "I am go to school.",
              right: "I go to school.",
              note: {
                bn: "বাংলায় 'আমি স্কুলে যাই' — কোনো 'হওয়া' নেই; be-verb (am/is/are) আর মূল ক্রিয়া একসঙ্গে বসে না — হয় I go (অভ্যাস), নয় I am going (এখন চলছে)।",
                en: "Bengali 'ami school-e jai' has no 'to be' in it; a be-verb (am/is/are) and a main verb never sit together — either I go (habit) or I am going (happening now).",
                hi: "बांग्ला 'आমি স্কুলে যাই' में कोई 'होना' नहीं; be-verb (am/is/are) और मूल क्रिया साथ नहीं बैठते — या I go, या I am going।",
              },
            },
            {
              wrong: "Yesterday I have gone to the bank.",
              right: "Yesterday I went to the bank.",
              note: {
                bn: "নির্দিষ্ট অতীত সময় (yesterday) বলা থাকলে শুধুই past simple — went; have gone সাথে আসে না। বাংলার 'গিয়েছি' শুনে have gone লেখাটা আপাত স্বাভাবিক লাগে, কিন্তু ভুল।",
                en: "With a stated past time (yesterday) only the past simple fits — went; 'have gone' cannot join it. Translating Bengali 'giyechhi' as 'have gone' looks natural but is wrong here.",
                hi: "निश्चित अतीत समय (yesterday) बताया हो तो केवल past simple — went; 'have gone' साथ नहीं आता।",
              },
            },
            {
              wrong: "He don't know the answer.",
              right: "He doesn't know the answer.",
              note: {
                bn: "don't/doesn't-এর ভাগ মনে রাখুন: I/you/we/they → don't, he/she/it → doesn't; বাংলায় 'জানে না' সবার জন্য এক, তাই এই ভাগ মাথায় রাখতে হয়।",
                en: "Keep the don't/doesn't split in mind: I/you/we/they → don't, he/she/it → doesn't; Bengali 'jane na' is one form for all, so the split needs conscious effort.",
                hi: "don't/doesn't का विभाजन याद रखें: I/you/we/they → don't, he/she/it → doesn't।",
              },
            },
            {
              wrong: "I will went to the market tomorrow.",
              right: "I will go to the market tomorrow.",
              note: {
                bn: "will-এর সঙ্গে ক্রিয়ার past রূপ আসে না; will ভবিষ্যৎ বহন করে, ক্রিয়া থাকে V1-এ — will went-এর মতো 'ডাবল কাল' ইংরেজিতে নেই।",
                en: "No past form can follow 'will'; will carries the future while the verb stays V1 — there is no 'double tense' like 'will went' in English.",
                hi: "'will' के साथ क्रिया का past रूप नहीं आता; will भविष्य ढोता है, क्रिया V1 में रहती है — 'will went' जैसा दोहरा काल नहीं होता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 See it in a mini story",
            hi: "📖 एक छोटी कहानी में देखें",
          },
          lead: {
            bn: "রিমার এক দিনের গল্পে তিন কালই ঘুরে আসে — শেষে পুরো পাঠ এক নজরে।",
            en: "One day of Rima's life walks through all three tenses — then the whole lesson at a glance.",
            hi: "रिमा के एक दिन की कहानी में तीनों काल घूमकर आते हैं — अंत में पूरा पाठ एक नज़र में।",
          },
          points: [
            { bn: "রিমা প্রতিদিন বলে, 'I get up at six and walk in the park.' — প্রতিদিনের কথা present-এ: get up, walk।", en: "Rima says every day, 'I get up at six and walk in the park.' — the everyday part stays in the present: get up, walk.", hi: "रिमा प्रतिदिन बोलती है, 'I get up at six and walk in the park.' — रोज़ की बात present में: get up, walk।" },
            { bn: "গতকাল সকালে সে তানিয়াকে ফোন করে বলল, 'I went to the doctor yesterday. I didn't sleep well last night.' — অতীতের কথা past-এ।", en: "Yesterday morning she phoned her friend Tania and said, 'I went to the doctor yesterday. I didn't sleep well last night.' — the yesterday part is in the past.", hi: "कल सुबह वह तानिया को फ़ोन कर बोली, 'I went to the doctor yesterday. I didn't sleep well last night.' — बीते कल की बात past में।" },
            { bn: "তানিয়া জিজ্ঞেস করল, 'Oh no! Did you take medicine?' — প্রশ্নে did + V1।", en: "Tania asked, 'Oh no! Did you take medicine?' — questions take did + V1.", hi: "तानिया पूछी, 'Oh no! Did you take medicine?' — प्रश्न में did + V1।" },
            { bn: "রিমা হেসে বলল, 'Yes, I took it after dinner and slept like a baby.' — গল্পের ধারা পুরোটাই past-এ।", en: "Rima smiled, 'Yes, I took it after dinner and slept like a baby.' — the whole story line stays in the past.", hi: "रिमा हँसकर बोली, 'Yes, I took it after dinner and slept like a baby.' — कहानी की धारा पूरी past में।" },
            { bn: "আজ সন্ধ্যায় সুস্থ রিমা বলবে, 'Tomorrow I will join my class again.' — আগামীর কথা future-এ।", en: "This evening, fully recovered, Rima will say, 'Tomorrow I will join my class again.' — the tomorrow part is in the future.", hi: "आज शाम को स्वस्थ रिमा कहेगी, 'Tomorrow I will join my class again.' — आने वाले कल की बात future में।" },
            { bn: "এক নজরে — present: অভ্যাস/সত্য, he/she/it-এ ক্রিয়ায় s; past: শেষ কাজ, ক্রিয়া V2-তে, নেগেটিভ-প্রশ্নে didn't/did + V1; future: will + V1।", en: "At a glance — present: habits/facts, verb + s with he/she/it; past: finished actions in V2, negatives and questions with didn't/did + V1; future: will + V1.", hi: "एक नज़र में — present: आदत/सत्य, he/she/it पर क्रिया में s; past: ख़त्म काम, क्रिया V2 में, निषेध-प्रश्न में didn't/did + V1; future: will + V1।" },
            { bn: "সংকেত শব্দ (yesterday, every day, tomorrow) কাল ঠিক করে, আর এক গল্পে এক কাল।", en: "Signal words (yesterday, every day, tomorrow) fix the tense, and one story keeps one tense.", hi: "संकेत शब्द (yesterday, every day, tomorrow) काल तय करते हैं, और एक कहानी में एक ही काल।" },
          ],
          examples: [
            {
              wrong: "Rima get up at six.",
              right: "Rima gets up at six.",
              note: {
                bn: "Rima = she → gets; প্রতিদিনের অভ্যাস, তাই present simple-ই।",
                en: "'Rima' = she, so gets; a daily habit, so the present simple it is.",
                hi: "'Rima' = she → gets; रोज़ की आदत है, इसलिए present simple।",
              },
            },
            {
              wrong: "Did you took medicine?",
              right: "Did you take medicine?",
              note: {
                bn: "did-এর পরে V1 — তানিয়ার প্রশ্নে take বসে, took নয়।",
                en: "After 'did' use V1 — Tania's question takes take, not took.",
                hi: "'did' के बाद V1 — तानिया के प्रश्न में take, took नहीं।",
              },
            },
            {
              wrong: "Tomorrow I will joined my class.",
              right: "Tomorrow I will join my class.",
              note: {
                bn: "will + V1 — will joined-এ দুই কাল চেপে বসে আছে, এমন কিছু ইংরেজিতে হয় না।",
                en: "will + V1 — 'will joined' squeezes two tenses together, which English never allows.",
                hi: "will + V1 — 'will joined' में दो काल साथ-साथ नहीं।",
              },
            },
            {
              wrong: "Last night I don't sleep well.",
              right: "Last night I didn't sleep well.",
              note: {
                bn: "অতীতের নেগেটিভ didn't — don't শুধু বর্তমানে I/you/we/they-এর; গতকাল রাতের কথা, তাই didn't।",
                en: "Past negative takes didn't — 'don't' only serves the present with I/you/we/they; last night demands didn't.",
                hi: "अतीत का निषेध didn't है — 'don't' केवल वर्तमान में I/you/we/they के साथ; बीती रात के लिए didn't चाहिए।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "বাক্য বানানোর আগে সংকেত শব্দ খুঁজুন — yesterday/ago মানে past, every day/always মানে present, tomorrow/next week মানে future। সংকেতই কাল ঠিক করে।",
          en: "Hunt for the signal word before building a sentence — yesterday/ago mean past, every day/always mean present, tomorrow/next week mean future. The signal fixes the tense.",
          hi: "वाक्य बनाने से पहले संकेत-शब्द खोजें — yesterday/ago का मतलब past, every day/always का मतलब present, tomorrow/next week का मतलब future। संकेत ही काल तय करता है।",
        },
        {
          bn: "Present-এ কর্তা he/she/it বা একবচন নাম (Rahim, the cat, my father) দেখলেই ক্রিয়ায় s — ছোট চিহ্ন, ভুল হলে বড় দাগ।",
          en: "In the present, whenever the subject is he/she/it or a singular name (Rahim, the cat, my father), the verb takes s — a tiny mark, but a glaring error when missed.",
          hi: "Present में कर्ता he/she/it या एकवचन नाम दिखे तो क्रिया में s लगता है — छोटा चिह्न, छूट जाए तो बड़ा दाग़।",
        },
        {
          bn: "did দেখলেই পরের ক্রিয়া V1: didn't go, Did you eat? — didn't went, Did you ate কখনো নয়।",
          en: "Whenever 'did' appears, the next verb is V1: didn't go, Did you eat? — never 'didn't went' or 'Did you ate'.",
          hi: "'did' देखते ही अगली क्रिया V1: didn't go, Did you eat? — 'didn't went' कभी नहीं।",
        },
        {
          bn: "নেগেটিভ-প্রশ্নে কালের দায়িত্ব do/does/did/will-এর — মূল ক্রিয়া সবসময় সাধারণ রূপে (V1) থাকে।",
          en: "In negatives and questions the tense is carried by do/does/did/will — the main verb always stays in its plain form (V1).",
          hi: "निषेध-प्रश्न में काल की ज़िम्मेदारी do/does/did/will की है — मूल क्रिया हमेशा V1 में।",
        },
        {
          bn: "will-এর পরে সব পুরুষে একই V1 — will goes, will went, will coming কিছুই নয়, শুধু will go।",
          en: "After 'will' every subject takes the same V1 — not will goes, not will went, not will coming; only will go.",
          hi: "'will' के बाद हर पुरुष में एक ही V1 — 'will go' के अलावा कुछ नहीं।",
        },
        {
          bn: "am/is/are আর মূল ক্রিয়া একসঙ্গে বসে না — হয় I go, নয়তো I am going (continuous পরের স্তরে); বাংলা 'আমি যাই'-তে কোনো be-verb নেই।",
          en: "A be-verb (am/is/are) and a main verb never sit together — either I go, or I am going (continuous comes later); Bengali 'ami jai' has no be-verb inside it.",
          hi: "am/is/are और मूल क्रिया साथ नहीं बैठते — या I go, या I am going; बांग्ला 'আমি যাই' में कोई be-verb नहीं।",
        },
        {
          bn: "১০টা অনিয়মিত ক্রিয়া রোজ জোরে জোড়ায় বলুন: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made।",
          en: "Say ten irregular verbs aloud in pairs every day: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made.",
          hi: "10 अनियमित क्रियाएँ रोज़ ज़ोर से जोड़े में बोलें: go-went, eat-ate, see-saw, come-came, buy-bought, take-took, give-gave, do-did, have-had, make-made।",
        },
        {
          bn: "গল্প বলা শুরুর আগে কাল একবার ঠিক করুন, তারপর সব ক্রিয়া সেই কালেই রাখুন — মাঝপথে বদলে ফেলবেন না।",
          en: "Decide the tense once before you start telling a story, then keep every verb in it — do not switch mid-way.",
          hi: "कहानी शुरू करने से पहले काल एक बार तय करें, फिर हर क्रिया उसी काल में रखें — बीच में न बदलें।",
        },
        {
          bn: "when/if clause-এ future ঢোকে না: When he comes, I will call you / If it rains, we will stay home — প্রথম অংশে present, দ্বিতীয় অংশে will।",
          en: "No future enters a when/if clause: When he comes, I will call you / If it rains, we will stay home — present in the first part, will in the second.",
          hi: "when/if clause में future नहीं आता: When he comes... / If it rains... — पहले भाग में present, दूसरे भाग में will।",
        },
        {
          bn: "রোজ ১০ মিনিটের দিনলিপি: সকালে আজকের প্ল্যান will-এ, রাতে সারাদিনের হিসাব past-এ — দুই কালের হাত এভাবেই পাকা হয়।",
          en: "A ten-minute daily diary: in the morning write today's plan with will, at night write the day's account in the past — this is how the hand gets steady in both tenses.",
          hi: "रोज़ 10 मिनट की डायरी: सुबह आज की योजना will में, रात में दिन का हिसाब past में — इसी तरह दोनों काल का अभ्यास पक्का होता है।",
        },
      ],
      quiz: [
        {
          question: "My sister ___ to college every morning.",
          options: ["go", "goes", "going", "went"],
          answer: 1,
          explanation: {
            bn: "every morning = প্রতিদিনের অভ্যাস → present simple; আর sister = she → ক্রিয়ায় s: goes।",
            en: "'Every morning' marks a habit — present simple; and 'sister' = she, so the verb takes s: goes.",
            hi: "'every morning' = रोज़ की आदत → present simple; और sister = she → क्रिया में s: goes।",
          },
        },
        {
          question: "I ___ my homework two hours ago.",
          options: ["do", "does", "did", "doing"],
          answer: 2,
          explanation: {
            bn: "ago = past-এর সংকেত → past simple: did; আর do-এর past রূপও did।",
            en: "'Ago' signals the past — past simple: did; and did happens to be the past of 'do' itself.",
            hi: "'ago' = past का संकेत → past simple: did।",
          },
        },
        {
          question: "He ___ like spicy food.",
          options: ["don't", "doesn't", "isn't", "didn't"],
          answer: 1,
          explanation: {
            bn: "he → doesn't; don't শুধু I/you/we/they-এর। বর্তমান অভ্যাসের কথা, তাই didn't নয়।",
            en: "'He' takes doesn't; don't is only for I/you/we/they. It is a present habit, so not didn't.",
            hi: "he → doesn't; 'don't' केवल I/you/we/they के लिए। वर्तमान आदत है, इसलिए didn't नहीं।",
          },
        },
        {
          question: "Did you ___ the match last night?",
          options: ["see", "saw", "seen", "sees"],
          answer: 0,
          explanation: {
            bn: "Did-এর পরে সবসময় V1 — see; অতীতের চিহ্ন did-এর পকেটে আছে।",
            en: "After 'Did' always use V1 — see; the past marker is already in did's pocket.",
            hi: "'Did' के बाद हमेशा V1 — see।",
          },
        },
        {
          question: "We ___ visit our grandparents next Friday.",
          options: ["do", "will", "does", "did"],
          answer: 1,
          explanation: {
            bn: "next Friday = ভবিষ্যতের সংকেত → will + V1 (will visit)।",
            en: "'Next Friday' signals the future — will + V1 (will visit).",
            hi: "'next Friday' = भविष्य का संकेत → will + V1।",
          },
        },
        {
          question: "Two days ago Rahim ___ a new cricket bat.",
          options: ["buy", "bought", "buys", "buying"],
          answer: 1,
          explanation: {
            bn: "ago → past; buy-এর past bought — buyed বলে কিছু নেই।",
            en: "'Ago' puts us in the past; the past of buy is bought — there is no 'buyed'.",
            hi: "'ago' → past; buy का past bought — 'buyed' नहीं होता।",
          },
        },
        {
          question: "___ your father work in a bank?",
          options: ["Is", "Do", "Does", "Did"],
          answer: 2,
          explanation: {
            bn: "your father = he → প্রশ্নে Does; Is হলে পরে ক্রিয়া চলে না।",
            en: "'Your father' = he, so the question takes Does; with Is no main verb can follow.",
            hi: "'your father' = he → प्रश्न में Does।",
          },
        },
        {
          question: "Every morning my mother ___ breakfast at eight.",
          options: ["has", "have", "had", "having"],
          answer: 0,
          explanation: {
            bn: "my mother = she → has; প্রতিদিনের রুটিন, তাই বর্তমান কালেই has।",
            en: "'My mother' = she, so has; a daily routine stays in the present — has.",
            hi: "'my mother' = she → has; रोज़ की रूटीन है, इसलिए has।",
          },
        },
        {
          question: "When it ___, we will play indoors.",
          options: ["will rain", "rained", "rains", "raining"],
          answer: 2,
          explanation: {
            bn: "when clause-এ future আসে না — সময় বোঝাতে present: rains; ফলাফলে will (will play)।",
            en: "No future inside a when-clause — the present (rains) marks the time; 'will play' carries the result.",
            hi: "when clause में future नहीं — समय के लिए present: rains; परिणाम में will (will play)।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "I didn't went to school.",
            "I didn't go to school.",
            "I don't went to school.",
            "I not went to school.",
          ],
          answer: 1,
          explanation: {
            bn: "didn't-এর পরে V1 (go); 'didn't went'-এ অতীত দুইবার, 'not went'-এ অতীত ঠিক আছে কিন্তু didn't/do-র সাহায্য নেই।",
            en: "After didn't use V1 (go); 'didn't went' doubles the past, and 'not went' has no helping did at all.",
            hi: "didn't के बाद V1 (go); 'didn't went' में अतीत दो बार।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_B1A;
