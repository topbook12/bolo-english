// ─── Grammar seeds v4: Beginner batch C (1 lesson) ───
// Task 10 — point-form roadmap upgrade. Source: grammar-v3-b1.ts.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_B1C: SeedGrammarV4Entry[] = [
  /* ── 1. Prepositions (in/on/at) ────── */
  {
    topic: "Prepositions (in/on/at)",
    level: "beginner",
    title: "Prepositions in/on/at (Beginner)",
    unit: 4,
    sortOrder: 3,
    data: {
      title: {
        bn: "প্রিপজিশন in/on/at (বিগিনার)",
        en: "Prepositions in/on/at (Beginner)",
        hi: "प्रेपोज़िशन in/on/at (बिगिनर)",
      },
      intro: {
        bn: "এই পাঠ লার্নিং পথের চতুর্থ ব্যাকরণ পাঠ — আগের পাঠগুলো, বিশেষ করে 'Question Formation', শেষ করে তবেই শুরু করুন। বাংলায় জায়গা আর সময় বোঝাতে একটাই জাদুকরী প্রত্যয় '-ে/-তে': ঘরে, টেবিলে, ঢাকায়, সকালে, সোমবারে — সব এক সূত্রে। কিন্তু ইংরেজিতে সেই এক সূত্র তিনটা শব্দে ভাগ হয়ে গেছে: in, on, at — আর সরাসরি অনুবাদ করলেই ভুল হয়। তাই বাঙালি শিক্ষার্থীরা লিখে ফেলেন 'I am in home', 'I will come in Monday', 'at the morning'। এই পাঠে শিখব — in মানে ভেতরে ঘেরা জায়গা ও মাস-বছর, on মানে ওপরের তল ও দিন-তারিখ, at মানে নির্দিষ্ট বিন্দু ও ঘড়ার সময় — আর যেসব জুটি (at home, in Dhaka, on Monday, at night) মুখস্থ করতেই হবে।",
        en: "This is the fourth grammar lesson on the learning path — finish the earlier lessons, especially 'Question Formation', before you start. In Bengali one magical suffix '-e/-te' does every job of place and time: ghore (in the house), tebile (on the table), Dhakay (in Dhaka), sokale (in the morning), Som bare (on Monday) — all by one rule. In English that single suffix has split into three words: in, on, at — and translating it directly produces mistakes. So Bengali speakers write 'I am in home', 'I will come in Monday', 'at the morning'. In this lesson we learn — in for enclosed spaces and months/years, on for surfaces and days/dates, at for points and clock times — and the fixed pairs (at home, in Dhaka, on Monday, at night) that simply have to be memorised.",
        hi: "यह लर्निंग पथ का चौथा व्याकरण पाठ है — पहले के पाठ, विशेषकर 'Question Formation', पूरे करके ही शुरू करें। बांग्ला में स्थान और समय का हर काम एक ही जादुई प्रत्यय '-এ/-তে' करता है: घरे, टेबिले, ढाकाय, सोकाले, सोमबारे — सब एक ही नियम से। अंग्रेज़ी में वही एक प्रत्यय तीन शब्दों में बँट गया: in, on, at — और सीधा अनुवाद करने पर गलतियाँ बनती हैं। इसलिए बांग्लाभाषी छात्र लिख देते हैं: 'I am in home', 'I will come in Monday', 'at the morning'। इस पाठ में हम सीखेंगे — in घिरे हुए स्थान और महीने-साल के लिए, on सतह और दिन-तारीख के लिए, at बिन्दु और घड़ी के समय के लिए — और वे स्थिर जोड़े (at home, in Dhaka, on Monday, at night) जो रटने ही होते हैं।",
      },
      roadmap: [
        { bn: "🎯 তিন শব্দ, তিন ভূমি — কোথায় in, কোথায় on, কোথায় at", en: "🎯 Three words, three grounds — where in, on, at belong", hi: "🎯 तीन शब्द, तीन भूमि — in, on, at कहाँ बैठते हैं" },
        { bn: "🏗️ বাক্যে বসার নিয়ম — preposition + স্থান", en: "🏗️ How they sit in a sentence — preposition + place", hi: "🏗️ वाक्य में बैठने का नियम — preposition + स्थान" },
        { bn: "🚦 সময়ের আভাস শব্দ — তিন পরিবার আর সময়ের সিঁড়ি", en: "🚦 Time signal words — three families and the staircase of time", hi: "🚦 समय के संकेत शब्द — तीन परिवार और समय की सीढ़ी" },
        { bn: "🗺️ স্থানের মানচিত্র — ঘেরা জায়গা, তল, বিন্দু, যানবাহন", en: "🗺️ The map of place — enclosed spaces, surfaces, points, vehicles", hi: "🗺️ स्थान का नक़्शा — घिरी जगह, सतह, बिन्दु, वाहन" },
        { bn: "⏰ চার ব্যতিক্রম — at night কিন্তু in the morning", en: "⏰ Four exceptions — at night but in the morning", hi: "⏰ चार अपवाद — at night पर in the morning" },
        { bn: "🔗 স্থির জুটি — at home, in bed, on time মুখস্থ", en: "🔗 Fixed pairs — memorise at home, in bed, on time", hi: "🔗 स्थिर जोड़े — at home, in bed, on time रटें" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের পাঁচ কমন ভুল আর চিকিৎসা", en: "⚠️ Five common Bengali-speaker mistakes and the cure", hi: "⚠️ बांग्लाभाषियों की पाँच कॉमन गलतियाँ और इलाज" },
        { bn: "📖 সাবিনার এক দিন — সব নিয়ম এক গল্পে", en: "📖 Sabina's one day — every rule in a single story", hi: "📖 साबिना का एक दिन — सारे नियम एक कहानी में" },
        { bn: "🧠 এক নজরে — স্থান, সময়, স্থির জুটি এক ফ্রেমে", en: "🧠 In a nutshell — place, time and fixed pairs in one frame", hi: "🧠 एक नज़र में — स्थान, समय, स्थिर जोड़े एक फ्रेम में" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — তিন শব্দ, তিন ভূমি",
            en: "🎯 When to use them — three words, three grounds",
            hi: "🎯 कब इस्तेमाल करें — तीन शब्द, तीन भूमि",
          },
          lead: {
            bn: "তিনটা ছোট শব্দের কাজের ভূমি তিন রকম — ভূমি চিনলেই preposition মিলে যায়।",
            en: "Three small words stand on three different grounds — recognise the ground and the preposition follows.",
            hi: "तीन छोटे शब्दों की भूमि तीन रकम की है — भूमि पहचानिए, preposition बैठ जाएगा।",
          },
          points: [
            { bn: "**in** — ভেতরে: চার দিক থেকে ঘেরা জায়গা — in the room, in the box, in Dhaka।", en: "**in** — inside: a space closed on all sides — in the room, in the box, in Dhaka.", hi: "**in** — भीतर: चारों ओर से घिरी जगह — in the room, in the box, in Dhaka।" },
            { bn: "**on** — ওপরের তল: কোনো কিছুর পৃষ্ঠে ছোঁয়া — on the table, on the wall।", en: "**on** — the upper surface: touching the face of something — on the table, on the wall.", hi: "**on** — ऊपरी सतह: किसी चीज़ के पृष्ठ पर — on the table, on the wall।" },
            { bn: "**at** — নির্দিষ্ট বিন্দু: ভেতরে-ওপরে না ভেবে ম্যাপে একটা দাগ — at the door, at the bus stop।", en: "**at** — a fixed point: not inside or on top, just a mark on the map — at the door, at the bus stop.", hi: "**at** — निश्चित बिन्दु: भीतर-ऊपर नहीं सोचना, बस नक़्शे पर एक निशान — at the door, at the bus stop।" },
            { bn: "সময়েও একই তিন স্তর — **in** = বড় সময়ের ঘের: in March, in 2024, in the morning।", en: "Time has the same three levels — **in** = a large wrap of time: in March, in 2024, in the morning.", hi: "समय में भी वही तीन स्तर — **in** = समय का बड़ा घेरा: in March, in 2024, in the morning।" },
            { bn: "তারপর **on** = নির্দিষ্ট দিন-তারিখ: on Sunday, on 16 December।", en: "Then **on** = a specific day or date: on Sunday, on 16 December.", hi: "फिर **on** = निश्चित दिन-तारीख: on Sunday, on 16 December।" },
            { bn: "আর **at** = ঘড়ার বিন্দু: at 6 o'clock।", en: "And **at** = a point on the clock: at 6 o'clock.", hi: "और **at** = घड़ी का बिन्दु: at 6 o'clock।" },
            { bn: "বাংলায় একটাই প্রত্যয় '-ে/-তে' — ঘরে, টেবিলে, সকালে, সোমবারে, দশটায়; তাই অনুবাদ করতে গেলে সবখানে in চেপে বসে যায়।", en: "Bengali runs one magical suffix '-e/-te' through all of them — ghore, tebile, sokale, Som bare, dosh-tay; so while translating, 'in' tries to squeeze in everywhere.", hi: "बांग्ला में एक ही जादुई प्रत्यय '-ए/-ते' — घरे, टेबिले, सोकाले, सोमबारे, दशटाय; इसलिए अनुवाद में in हर जगह छा जाता है।" },
            { bn: "তাই বাংলার '-ে' অনুবাদ করবেন না — আগে ভাবুন: ভেতরে? ওপরের তল? নির্দিষ্ট বিন্দু?", en: "So do not translate the Bengali '-e' — first ask: inside? a surface? a fixed point?", hi: "इसलिए बांग्ला '-ए' का अनुवाद न करें — पहले पूछें: भीतर? सतह? बिन्दु?" },
          ],
          examples: [
            {
              wrong: "The book is in the table.",
              right: "The book is on the table.",
              note: {
                bn: "টেবিলের ওপরের তল → on; বাংলা 'টেবিলে' শুনলে in মনে হলেও পৃষ্ঠে ছোঁয়া জিনিস on নেয়।",
                en: "The upper surface of the table takes on — although Bengali 'tebile' tempts in, a thing touching the surface takes on.",
                hi: "टेबल की ऊपरी सतह → on; 'টেবিলে' सुनकर in का मोह न करें।",
              },
            },
            {
              wrong: "I live at Dhaka.",
              right: "I live in Dhaka.",
              note: {
                bn: "শহর = বড় ঘেরা এলাকা → in; at শুধু নির্দিষ্ট বিন্দুর জন্য।",
                en: "A city is a large enclosed area — in; at is only for fixed points.",
                hi: "शहर = बड़ा घिरा क्षेत्र → in; at केवल बिन्दु के लिए।",
              },
            },
            {
              wrong: "I will come in Monday.",
              right: "I will come on Monday.",
              note: {
                bn: "বারের নাম → on; 'সোমবারে'-র '-ে' অনুবাদ করবেন না।",
                en: "Names of days take on — do not translate the '-e' of 'Som bare'.",
                hi: "बार का नाम → on; 'सोमবারे' का '-ए' अनुवाद न करें।",
              },
            },
            {
              wrong: "The class starts in 10 a.m.",
              right: "The class starts at 10 a.m.",
              note: {
                bn: "ঘড়ার বিন্দু → at; ক্লাস কখন শুরু — ঠিক ওই সময়টায়।",
                en: "A clock time takes at — the class starts at that exact point of the clock.",
                hi: "घड़ी का बिन्दु → at; कक्षा ठीक उसी समय शुरू होती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — বাক্যে in/on/at বসার নিয়ম",
            en: "🏗️ Formation — how in/on/at sit in a sentence",
            hi: "🏗️ बनावट — वाक्य में in/on/at कैसे बैठते हैं",
          },
          lead: {
            bn: "preposition বসে স্থানের নামের ঠিক আগে — বাক্যে জায়গা ঠিক করাই আজকের কাজ।",
            en: "The preposition sits right before the place-name — placing it correctly in the sentence is today's job.",
            hi: "preposition स्थान के नाम के ठीक पहले बैठता है — वाक्य में जगह सही रखना ही आज का काम।",
          },
          points: [
            { bn: "**in/on/at** বসে স্থানের নামের ঠিক আগে, আর স্থান বসে সাধারণত ক্রিয়ার পরে।", en: "**in/on/at** sit right before the place-name, and the place usually stands after the verb.", hi: "**in/on/at** स्थान के नाम के ठीक पहले बैठते हैं, और स्थान साधारणतः क्रिया के बाद आता है।" },
            { bn: "I live in Khulna. She sits on the bench. He waits at the gate — তিন ভূমির তিন নমুনা।", en: "I live in Khulna. She sits on the bench. He waits at the gate — three grounds, three samples.", hi: "I live in Khulna. She sits on the bench. He waits at the gate — तीन भूमि के तीन नमूने।" },
            { bn: "কর্তা বদলালে ক্রিয়া মিল অনুযায়ী বদলায়, কিন্তু preposition কখনো বদলায় না — I live in Sylhet, He lives in Sylhet, They lived in Sylhet।", en: "When the subject changes, the verb changes with it, but the preposition never does — I live in Sylhet, He lives in Sylhet, They lived in Sylhet.", hi: "कर्ता बदलने पर क्रिया मिलान के अनुसार बदलती है, पर preposition कभी नहीं बदलता — I live in Sylhet, He lives in Sylhet, They lived in Sylhet।" },
            { bn: "ঘেরা জায়গা ও বড় এলাকা → **in**: in the kitchen, in the box, in Dhaka, in Bangladesh, in the world।", en: "Enclosed spaces and large areas → **in**: in the kitchen, in the box, in Dhaka, in Bangladesh, in the world.", hi: "घिरी जगह और बड़ा क्षेत्र → **in**: in the kitchen, in the box, in Dhaka, in Bangladesh, in the world।" },
            { bn: "তল বা পৃষ্ঠ → **on**: on the table, on the floor, on the wall, on the roof।", en: "Surfaces → **on**: on the table, on the floor, on the wall, on the roof.", hi: "सतह → **on**: on the table, on the floor, on the wall, on the roof।" },
            { bn: "নির্দিষ্ট বিন্দু → **at**: at the door, at the gate, at the bus stop, at the corner।", en: "Fixed points → **at**: at the door, at the gate, at the bus stop, at the corner.", hi: "निश्चित बिन्दु → **at**: at the door, at the gate, at the bus stop, at the corner।" },
            { bn: "লম্বা বাক্যেও নিয়ম এক: preposition + স্থান — বাংলার মতো স্থান-শব্দ '-এ' নিয়ে শেষে ঘোরানোর দরকার নেই।", en: "Long sentences keep the same rule: preposition + place — no need to drag the place-word around the way Bengali does with '-e'.", hi: "लंबे वाक्यों में भी नियम वही: preposition + स्थान — बांग्ला की तरह स्थान-शब्द '-ए' लेकर घुमाने की ज़रूरत नहीं।" },
          ],
          formula: {
            bn: "কর্তা + ক্রিয়া + in/on/at + স্থানের নাম",
            en: "subject + verb + in/on/at + place",
            hi: "कर्ता + क्रिया + in/on/at + स्थान का नाम",
          },
          examples: [
            {
              wrong: "My shoes are in the bed.",
              right: "My shoes are on the bed.",
              note: {
                bn: "বিছানার ওপরের তল → on; 'বিছানায়' শুনলে in মনে হয়, কিন্তু জিনিস বিছানার পৃষ্ঠে ছোঁয়া।",
                en: "The surface of the bed takes on — 'bichanay' tempts in, but the thing touches the surface.",
                hi: "बिस्तर की सतह → on; 'बिछानाय' सुनकर in मत सोचें।",
              },
            },
            {
              wrong: "There is a picture in the wall.",
              right: "There is a picture on the wall.",
              note: {
                bn: "দেয়ালের পৃষ্ঠে ছোঁয়া → on; 'দেয়ালে' শুনলেও ছবিটা দেয়ালের ভেতরে নয়, তলে।",
                en: "The picture touches the face of the wall — on; it is not inside the wall.",
                hi: "तस्वीर दीवार की सतह पर है → on; दीवार के भीतर नहीं।",
              },
            },
            {
              wrong: "I met her in the bus stop.",
              right: "I met her at the bus stop.",
              note: {
                bn: "বাস স্টপ = রাস্তার একটা নির্দিষ্ট বিন্দু → at।",
                en: "A bus stop is a fixed point on the road — at.",
                hi: "बस स्टॉप = सड़क का एक निश्चित बिन्दु → at।",
              },
            },
            {
              wrong: "Our school is at Mirpur.",
              right: "Our school is in Mirpur.",
              note: {
                bn: "মহল্লা/এলাকা/শহর = ঘেরা জায়গা → in; at এখানে বসে না।",
                en: "A neighbourhood, area or city is an enclosed space — in; at does not sit here.",
                hi: "मुहल्ला/क्षेत्र/शहर = घिरी जगह → in।",
              },
            },
            {
              wrong: "The keys are at the drawer.",
              right: "The keys are in the drawer.",
              note: {
                bn: "ড্রয়ারের ভেতরে ঢোকা যায় → in; চাবি ড্রয়ারের তলে ছোঁয়া নয়, ভেতরে।",
                en: "A drawer has an inside you can enter — in; the keys are not touching a surface, they are inside.",
                hi: "ड्रॉवर के भीतर जा सकते हैं → in; चाबियाँ भीतर हैं, सतह पर नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস শব্দ — সময়ে in/on/at চেনার সংকেত",
            en: "🚦 Signal words — clues for in/on/at in time",
            hi: "🚦 संकेत शब्द — समय में in/on/at पहचानने के सुराग",
          },
          lead: {
            bn: "সময়ের শব্দটা নিজেই সংকেত দেয় — পরিবার চিনলেই in, on, at আলাদা হয়ে যায়।",
            en: "The time word itself signals the choice — know the family and in, on, at separate out.",
            hi: "समय का शब्द खुद संकेत देता है — परिवार पहचानिए, in, on, at अलग हो जाएँगे।",
          },
          points: [
            { bn: "সময়ের আভাস শব্দ দেখেই preposition বাছুন — শব্দটা কোন পরিবারে পড়ে সেটাই সংকেত।", en: "Pick the preposition from the time signal — which family the word belongs to is the clue.", hi: "समय का संकेत शब्द देखकर preposition चुनें — शब्द किस परिवार में पड़ता है, वही सुराग है।" },
            { bn: "**in**-পরিবার: মাস (in January, in April), বছর (in 2024), ঋতু (in winter, in summer)।", en: "The **in**-family: months (in January, in April), years (in 2024), seasons (in winter, in summer).", hi: "**in**-परिवार: महीने (in January, in April), साल (in 2024), ऋतु (in winter, in summer)।" },
            { bn: "দিনের বড় অংশও in: in the morning, in the afternoon, in the evening।", en: "Large parts of the day take in too: in the morning, in the afternoon, in the evening.", hi: "दिन का बड़ा भाग भी in: in the morning, in the afternoon, in the evening।" },
            { bn: "**on**-পরিবার: বারের নাম (on Monday, on Friday), তারিখ (on 16 December), বিশেষ দিন (on Eid day, on my birthday)।", en: "The **on**-family: days (on Monday, on Friday), dates (on 16 December), special days (on Eid day, on my birthday).", hi: "**on**-परिवार: बार के नाम (on Monday, on Friday), तारीख (on 16 December), विशेष दिन (on Eid day, on my birthday)।" },
            { bn: "**at**-পরিবার: ঘড়ার সময় — at 6 o'clock, at half past nine, at 10 p.m.।", en: "The **at**-family: clock times — at 6 o'clock, at half past nine, at 10 p.m.", hi: "**at**-परिवार: घड़ी का समय — at 6 o'clock, at half past nine, at 10 p.m.।" },
            { bn: "সঙ্গে মনে রাখুন: at night, at noon, at midnight, at lunchtime — ঘড়া ছাড়াও at-এর জুটি।", en: "Also memorise: at night, at noon, at midnight, at lunchtime — at-pairs beyond the clock.", hi: "साथ में याद रखें: at night, at noon, at midnight, at lunchtime — घड़ी के अलावा भी at के जोड़े।" },
            { bn: "সিঁড়ি মনে রাখুন: in 2024 → in March → on 16 March → on Monday → at 8 a.m. — সিঁড়ি নামলেই in থেকে on, on থেকে at।", en: "Keep the staircase in mind: in 2024 → in March → on 16 March → on Monday → at 8 a.m. — going down, in turns into on, on into at.", hi: "सीढ़ी याद रखें: in 2024 → in March → on 16 March → on Monday → at 8 a.m. — सीढ़ी उतरते ही in से on, on से at।" },
            { bn: "নিয়মটা এক কথায়: যত বড় সময়ের ঘের তত in, যত ছোট নির্দিষ্ট বিন্দু তত at।", en: "In one line: the larger the wrap of time, the more in; the smaller the fixed point, the more at.", hi: "एक पंक्ति में: जितना बड़ा घेरा उतना in, जितना छोटा बिन्दु उतना at।" },
          ],
          formula: {
            bn: "in (মাস-বছর) → on (বার-তারিখ) → at (ঘড়ার বিন্দু)",
            en: "in (months-years) → on (days-dates) → at (clock points)",
            hi: "in (महीना-साल) → on (बार-तारीख) → at (घड़ी का बिन्दु)",
          },
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "কখন?", en: "When?", hi: "कब?" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "in", en: "in", hi: "in" },
                { bn: "মাস, বছর, ঋতু, দিনের অংশ", en: "Months, years, seasons, parts of the day", hi: "महीना, साल, ऋतु, दिन का भाग" },
                { bn: "in March, in 2024, in the morning", en: "in March, in 2024, in the morning", hi: "in March, in 2024, in the morning" },
              ],
              [
                { bn: "on", en: "on", hi: "on" },
                { bn: "বার, তারিখ, বিশেষ দিন", en: "Days, dates, special days", hi: "बार, तारीख, विशेष दिन" },
                { bn: "on Monday, on 16 December, on Eid day", en: "on Monday, on 16 December, on Eid day", hi: "on Monday, on 16 December, on Eid day" },
              ],
              [
                { bn: "at", en: "at", hi: "at" },
                { bn: "ঘড়ার সময়, night-noon", en: "Clock times, night-noon", hi: "घड़ी का समय, night-noon" },
                { bn: "at 6 o'clock, at 10 p.m., at night", en: "at 6 o'clock, at 10 p.m., at night", hi: "at 6 o'clock, at 10 p.m., at night" },
              ],
            ],
          },
          examples: [
            {
              wrong: "I was born at 1999.",
              right: "I was born in 1999.",
              note: {
                bn: "বছর = বড় সময়ের ঘের → in; '১৯৯৯ সালে'র অনুবাদ in 1999।",
                en: "A year is a large wrap of time — in; the Bengali '1999 sale' translates to in 1999.",
                hi: "साल = समय का बड़ा घेरा → in।",
              },
            },
            {
              wrong: "We have a holiday in Friday.",
              right: "We have a holiday on Friday.",
              note: {
                bn: "বারের নাম → on; ছুটি সারা শুক্রবার — নির্দিষ্ট দিন।",
                en: "A day of the week takes on; the holiday covers the whole of Friday — a specific day.",
                hi: "बार के नाम पर on; छुट्टी पूरे शुक्रवार को — निश्चित दिन।",
              },
            },
            {
              wrong: "He sleeps at the morning.",
              right: "He sleeps in the morning.",
              note: {
                bn: "দিনের বড় অংশ → in — in the morning; at শুধু ঘড়ার বিন্দুর জন্য।",
                en: "A large part of the day takes in — in the morning; at is only for clock points.",
                hi: "दिन का बड़ा भाग → in — in the morning।",
              },
            },
            {
              wrong: "The train leaves in 7 o'clock.",
              right: "The train leaves at 7 o'clock.",
              note: {
                bn: "ঘড়ার নির্দিষ্ট বিন্দু → at — at 7 o'clock।",
                en: "A specific clock point takes at — at 7 o'clock.",
                hi: "घड़ी का निश्चित बिन्दु → at — at 7 o'clock।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🗺️ স্থানের মানচিত্র — ঘেরা জায়গা, তল, বিন্দু",
            en: "🗺️ The map of place — enclosed spaces, surfaces, points",
            hi: "🗺️ स्थान का नक़्शा — घिरे स्थान, सतह, बिन्दु",
          },
          lead: {
            bn: "জায়গাটা ভেতরে? তলে? নাকি ম্যাপের বিন্দু? — উত্তরই preposition বেছে দেয়।",
            en: "Inside it? On its surface? A point on the map? — the answer itself picks the preposition.",
            hi: "भीतर है? सतह पर? नक़्शे का बिन्दु? — जवाब ही preposition चुन देगा।",
          },
          points: [
            { bn: "**in** — যেখানে ভেতরে ঢোকা যায় বা যা চারদিক থেকে ঘেরে: in the room, in the kitchen, in the drawer, in the pocket, in the water।", en: "**in** — somewhere you can enter, or something that surrounds: in the room, in the kitchen, in the drawer, in the pocket, in the water.", hi: "**in** — जहाँ भीतर जा सकते हैं या जो चारों ओर से घेरे: in the room, in the kitchen, in the drawer, in the pocket, in the water।" },
            { bn: "ছোট যানবাহনের ভেতরেও in — in a car; আর শহর-দেশ-মহাদেশ: in Dhaka, in Bangladesh, in Asia।", en: "The inside of a small vehicle takes in too — in a car; and cities, countries, continents: in Dhaka, in Bangladesh, in Asia.", hi: "छोटे वाहन के भीतर भी in — in a car; और शहर-देश-महाद्वीप: in Dhaka, in Bangladesh, in Asia।" },
            { bn: "**on** — ওপরের তলে ছোঁয়া: on the table, on the bed, on the wall, on the shelf, on the floor।", en: "**on** — touching the upper surface: on the table, on the bed, on the wall, on the shelf, on the floor.", hi: "**on** — ऊपरी सतह पर: on the table, on the bed, on the wall, on the shelf, on the floor।" },
            { bn: "বড় যানবাহন — যেখানে উঠে চলা-বসা যায় → on: on the bus, on the train, on the plane, on a ship।", en: "Large vehicles you can walk inside → on: on the bus, on the train, on the plane, on a ship.", hi: "बड़े वाहन — जहाँ उठकर चल-बैठ सकते हैं → on: on the bus, on the train, on the plane, on a ship।" },
            { bn: "**at** — বিন্দু বা স্টেশন-মতো জায়গা: at the door, at the gate, at the bus stop, at the traffic light, at the airport।", en: "**at** — a point or a station-like place: at the door, at the gate, at the bus stop, at the traffic light, at the airport.", hi: "**at** — बिन्दु या स्टेशन-जैसी जगह: at the door, at the gate, at the bus stop, at the traffic light, at the airport।" },
            { bn: "কর্মস্থল → at: at school, at work, at the office।", en: "Workplaces → at: at school, at work, at the office.", hi: "कार्यस्थल → at: at school, at work, at the office।" },
            { bn: "একই জায়গা অর্থভেদে বদলায় — in the station মানে ভবনের ভেতরে, at the station মানে ওই বিন্দুতে।", en: "The same place can shift with meaning — in the station means inside the building, at the station means at that point.", hi: "एक ही जगह अर्थ-भेद से बदलती है — in the station = भवन के भीतर, at the station = उस बिन्दु पर।" },
            { bn: "শুরুর স্তরে গেট-স্টপ-স্টেশন at-এর সঙ্গে মনে রাখুন।", en: "At the beginner stage, keep gate-stop-station with at.", hi: "शुरुआती स्तर में gate-stop-station को at के साथ रखें।" },
          ],
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "কোথায়?", en: "Where?", hi: "कहाँ?" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "in", en: "in", hi: "in" },
                { bn: "ঘেরা জায়গা, শহর-দেশ, ছোট যান", en: "Enclosed spaces, cities-countries, small vehicles", hi: "घिरी जगह, शहर-देश, छोटा वाहन" },
                { bn: "in the room, in Dhaka, in a car", en: "in the room, in Dhaka, in a car", hi: "in the room, in Dhaka, in a car" },
              ],
              [
                { bn: "on", en: "on", hi: "on" },
                { bn: "ওপরের তল, বড় যানবাহন", en: "Surfaces, large vehicles", hi: "ऊपरी सतह, बड़े वाहन" },
                { bn: "on the table, on the bus, on a ship", en: "on the table, on the bus, on a ship", hi: "on the table, on the bus, on a ship" },
              ],
              [
                { bn: "at", en: "at", hi: "at" },
                { bn: "নির্দিষ্ট বিন্দু, কর্মস্থল", en: "Fixed points, workplaces", hi: "निश्चित बिन्दु, कार्यस्थल" },
                { bn: "at the gate, at the station, at school", en: "at the gate, at the station, at school", hi: "at the gate, at the station, at school" },
              ],
            ],
          },
          examples: [
            {
              wrong: "I left my phone on the car.",
              right: "I left my phone in the car.",
              note: {
                bn: "ছোট যানবাহনের ভেতরে → in; বড় যানবাহনে ওঠা-চলা যায় বলে on — in a car, on the bus।",
                en: "The inside of a small vehicle takes in; a large vehicle you walk into takes on — in a car, on the bus.",
                hi: "छोटे वाहन के भीतर → in; बड़े वाहन में on — in a car, on the bus।",
              },
            },
            {
              wrong: "I read newspapers in the bus.",
              right: "I read newspapers on the bus.",
              note: {
                bn: "বাস = বড় যানবাহন → on the bus; 'বাসে' শুনলে in লিখবেন না।",
                en: "A bus is a large vehicle — on the bus; do not write in just because Bengali says 'base'.",
                hi: "बस = बड़ा वाहन → on the bus।",
              },
            },
            {
              wrong: "She is standing in the bus stop.",
              right: "She is standing at the bus stop.",
              note: {
                bn: "স্টপ মানে সেখানে ভেতরে না থেকে ওই বিন্দুতে দাঁড়ানো → at।",
                en: "Standing at a stop means at that point, not inside anything — at.",
                hi: "स्टॉप पर खड़े होना = उस बिन्दु पर → at।",
              },
            },
            {
              wrong: "My uncle lives on Sylhet.",
              right: "My uncle lives in Sylhet.",
              note: {
                bn: "শহর/এলাকা → in; on শুধু তল বা বড় যানবাহনের।",
                en: "A city or area takes in; on belongs to surfaces or large vehicles.",
                hi: "शहर/क्षेत्र → in; on केवल सतह या बड़े वाहन के लिए।",
              },
            },
            {
              wrong: "The baby is crawling in the floor.",
              right: "The baby is crawling on the floor.",
              note: {
                bn: "মেঝের ওপরের তল → on; 'মেঝেতে' শুনলেও বাচ্চা মেঝের পৃষ্ঠে হামাগুড়ি দেয়।",
                en: "The upper surface of the floor takes on — the baby crawls on the surface, not inside it.",
                hi: "फ़र्श की सतह → on।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⏰ সময়ের ব্যতিক্রম — at night কিন্তু in the morning",
            en: "⏰ The exceptions of time — at night but in the morning",
            hi: "⏰ समय के अपवाद — at night पर in the morning",
          },
          lead: {
            bn: "নিয়মের ফাঁকে চারটা ব্যতিক্রম — এখানেই বাঙালি শিক্ষার্থীরা সবচেয়ে বেশি ফিসলে পড়ে।",
            en: "Four exceptions hide between the rules — this is exactly where Bengali speakers slip most.",
            hi: "नियमों के बीच चार अपवाद — यहीं बांग्लाभाषी सबसे ज़्यादा फिसलते हैं।",
          },
          points: [
            { bn: "দিনের অংশ **in** নেয় — in the morning, in the afternoon, in the evening।", en: "Parts of the day take **in** — in the morning, in the afternoon, in the evening.", hi: "दिन के भाग **in** लेते हैं — in the morning, in the afternoon, in the evening।" },
            { bn: "কিন্তু night-এর সঙ্গে **at**: at night, at midnight, at noon, at lunchtime।", en: "But night goes with **at**: at night, at midnight, at noon, at lunchtime.", hi: "पर night के साथ **at**: at night, at midnight, at noon, at lunchtime।" },
            { bn: "যুক্তি খুঁজবেন না — এটা ভাষার প্রথা; জুটি মুখস্থ করুন: in the morning, at night।", en: "Do not hunt for logic — it is a habit of the language; memorise the pair: in the morning, at night.", hi: "तर्क ढूँढें नहीं — यह भाषा की आदत है; जोड़ी रटें: in the morning, at night।" },
            { bn: "বার + দিনের অংশ জুড়লে **on** জেতে — on Monday morning, on Friday evening, on Saturday night।", en: "When a day joins a part of the day, **on** wins — on Monday morning, on Friday evening, on Saturday night.", hi: "बार + दिन का भाग जुड़े तो **on** जीतता है — on Monday morning, on Friday evening, on Saturday night।" },
            { bn: "উৎসব-দিন on নেয়: on Eid day, on my birthday; উৎসব-বিন্দু হিসেবে কিন্তু at Eid, at Christmas।", en: "Festival days take on: on Eid day, on my birthday; as festival points, however, at Eid, at Christmas.", hi: "पर्व-दिन on लेते हैं: on Eid day, on my birthday; पर्व-बिन्दु के रूप में at Eid, at Christmas।" },
            { bn: "ব্রিটিশ ইংরেজিতে at the weekend, আমেরিকানে on the weekend — একটা বেছে নিয়মিত সেটাই ব্যবহার করুন।", en: "British English says at the weekend, American English on the weekend — pick one and use it steadily.", hi: "ब्रिटिश अंग्रेज़ी में at the weekend, अमेरिकी में on the weekend — एक चुनकर लगातार वही बोलें।" },
          ],
          examples: [
            {
              wrong: "I read at the morning.",
              right: "I read in the morning.",
              note: {
                bn: "দিনের বড় অংশ in — in the morning; at the morning ইংরেজিতে নেই।",
                en: "A large part of the day takes in — in the morning; 'at the morning' does not exist in English.",
                hi: "दिन का बड़ा भाग in — in the morning; 'at the morning' अंग्रेज़ी में नहीं है।",
              },
            },
            {
              wrong: "We watch TV in the night.",
              right: "We watch TV at night.",
              note: {
                bn: "night-এর ব্যতিক্রম — at night; in the night নয় (in the night মাঝে মাঝে লম্বা বর্ণনায় চলে, কিন্তু দৈনন্দিন বাক্যে at night-ই স্বাভাবিক)।",
                en: "Night is the exception — at night; 'in the night' only appears in longer descriptions, but everyday sentences take at night.",
                hi: "night अपवाद है — at night; रोज़मर्रा के वाक्यों में at night ही।",
              },
            },
            {
              wrong: "I wake up at 6 in Friday.",
              right: "I wake up at 6 on Friday.",
              note: {
                bn: "ঘড়া at + বার on — দুটো আলাদা নিয়মে, একসঙ্গে মিশে না।",
                en: "Clock time takes at and the day takes on — two separate rules that never merge.",
                hi: "घड़ी at + बार on — दो अलग नियम, एक नहीं मिलते।",
              },
            },
            {
              wrong: "On midnight the shop closes.",
              right: "At midnight the shop closes.",
              note: {
                bn: "midnight/noon সবসময় at — at midnight, at noon; এরা ঘড়ার বিন্দুর পরিবার।",
                en: "Midnight and noon always take at — at midnight, at noon; they belong to the clock-point family.",
                hi: "midnight/noon सदा at — at midnight, at noon।",
              },
            },
            {
              wrong: "In Monday morning I have a class.",
              right: "On Monday morning I have a class.",
              note: {
                bn: "বার + দিনের অংশ জুড়লে on জেতে — on Monday morning; একা থাকলে in the morning, কিন্তু বার জুড়লে on।",
                en: "Day + part of day takes on — on Monday morning; alone it is in the morning, but with the day on wins.",
                hi: "बार + दिन का भाग → on — on Monday morning।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔗 স্থির জুটি — যুক্তি নয়, অভ্যাস",
            en: "🔗 Fixed pairs — not logic, habit",
            hi: "🔗 स्थिर जोड़े — तर्क नहीं, आदत",
          },
          lead: {
            bn: "এই জুটিগুলো যুক্তি মানে না — প্রথা, তাই জোড়ায় জোড়ায় মুখস্থ করতেই হবে।",
            en: "These pairs ignore logic — they are custom, so they must be memorised in pairs.",
            hi: "ये जोड़े तर्क नहीं मानते — ये रिवायत हैं, इसलिए जोड़ी में रटने ही होंगे।",
          },
          points: [
            { bn: "অনেক জুটি যুক্তিতে নয়, প্রথায় মেলে — এগুলো জোড়ায় জোড়ায় মুখস্থ করতেই হবে।", en: "Many pairs match by custom, not logic — these must be memorised in pairs.", hi: "बहुत से जोड़े तर्क से नहीं, रिवायत से मिलते हैं — इन्हें जोड़ी में रटना ही होगा।" },
            { bn: "**at**-জুটি: at home (কখনো in home নয়), at school, at work, at the moment (এই মুহূর্তে), at first (শুরুতে)।", en: "**at**-pairs: at home (never in home), at school, at work, at the moment (right now), at first (in the beginning).", hi: "**at**-जोड़े: at home (कभी in home नहीं), at school, at work, at the moment (इस समय), at first।" },
            { bn: "কারো বাড়িতে গেলেও at — at my friend's house, at their place।", en: "Going to someone's house takes at too — at my friend's house, at their place.", hi: "किसी के घर पर भी at — at my friend's house, at their place।" },
            { bn: "**in**-জুটি: in bed (শোবার উদ্দেশ্যে শুয়ে), in hospital (ভর্তি হয়ে থাকছে), in a hurry (তাড়াহুড়োয়), in time।", en: "**in**-pairs: in bed (lying down to sleep), in hospital (admitted as a patient), in a hurry (in a rush), in time.", hi: "**in**-जोड़े: in bed (सोने के लिए लेटा), in hospital (भर्ती हुआ), in a hurry, in time।" },
            { bn: "**on**-জুটি: on time (ঠিক সময়ে — বাস বা ফ্লাইটের মতো), on holiday, on the phone (ফোনে কথা বলছে)।", en: "**on**-pairs: on time (exactly at the agreed time — like a bus or flight), on holiday, on the phone (talking by phone).", hi: "**on**-जोड़े: on time (तय समय पर — बस या फ्लाइट की तरह), on holiday, on the phone।" },
            { bn: "বাংলার '-এ' প্রতিটা ক্ষেত্রে in চাপবে — 'ঘরে', 'সময়ে' শুনলে in মনে হলেও ইংরেজি প্রথা অন্য কথা বলে।", en: "The Bengali '-e' will push in into every one of these — 'ghore' and 'shomoye' tempt in, but English custom speaks differently.", hi: "बांग्ला '-ए' हर जगह in थोपेगा — 'घरे', 'समये' सुनकर in मत सोचें; अंग्रेज़ी रिवायत कुछ और कहती है।" },
            { bn: "রোজ এই জুটিগুলো জোরে জোরে বলুন — at home, in bed, on time — জিহ্বাতেই নিয়ম বসে যাবে।", en: "Say these pairs aloud every day — at home, in bed, on time — and the rule settles on the tongue.", hi: "रोज़ ये जोड़े ज़ोर से बोलें — at home, in bed, on time — नियम ज़ुबान पर बैठ जाएगा।" },
          ],
          examples: [
            {
              wrong: "I am in home now.",
              right: "I am at home now.",
              note: {
                bn: "স্থির জুটি at home — বাড়ি মানে ঘেরা জায়গা ভেবে in home লেখা যায় না।",
                en: "The fixed pair is at home — home is not treated as a generic enclosed space here.",
                hi: "स्थिर जोड़ी at home — 'in home' गलत।",
              },
            },
            {
              wrong: "I will meet you in my friend's house.",
              right: "I will meet you at my friend's house.",
              note: {
                bn: "কারো বাড়ি মানে ওই বিন্দুতে হাজির হওয়া → at; বাড়ির ভেতরের কক্ষ নিয়ে কথা নয়।",
                en: "Meeting at someone's house means arriving at that point — at; it is not about a room inside.",
                hi: "किसी के घर मिलना = उस बिन्दु पर → at।",
              },
            },
            {
              wrong: "She always comes in time.",
              right: "She always comes on time.",
              note: {
                bn: "ঠিক সময়ে = on time; in time মানে কাজে দেরির আগে, ঠিক মুহূর্তে পৌঁছানো — দুই অর্থ।",
                en: "Punctual means on time; in time means reaching before it is too late — two different ideas.",
                hi: "समय पर = on time; in time का अर्थ अलग है — देर होने से पहले पहुँचना।",
              },
            },
            {
              wrong: "He is in work now.",
              right: "He is at work now.",
              note: {
                bn: "কাজের জায়গা → at — at work, at school, at the office; সেখানে 'কাজে' গেছে, ঘেরে ঢোকার কথা নয়।",
                en: "A workplace takes at — at work, at school, at the office; he has gone to work, not entered an enclosure.",
                hi: "कार्यस्थल → at — at work, at school, at the office।",
              },
            },
            {
              wrong: "My mother is cooking at the kitchen.",
              right: "My mother is cooking in the kitchen.",
              note: {
                bn: "রান্নাঘর ঘেরা জায়গা, ভেতরে আছে → in; স্টপ-গেট-স্টেশনের মতো বিন্দু নয়।",
                en: "A kitchen is an enclosed space you are inside — in; it is not a point like a stop, gate or station.",
                hi: "रसोई घिरी जगह है, भीतर है → in।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল — in-এর ছায়া",
            en: "⚠️ Common mistakes by Bengali speakers — the shadow of in",
            hi: "⚠️ बांग्लाभाषी छात्रों की कॉमन गलतियाँ — in की छाया",
          },
          lead: {
            bn: "'-ে/-তে' অনুবাদ করলেই in-এর ছায়া পড়ে — পাঁচ ভুল-পরিবার চিনে নিন।",
            en: "Translate '-e/-te' directly and in casts its shadow everywhere — meet the five error families.",
            hi: "'-ए/-ते' सीधा अनुवाद करें तो in की छाया पड़ती है — पाँच गलती-परिवार पहचानें।",
          },
          points: [
            { bn: "ভুলের শিকড় একটাই — '-ে/-তে' প্রত্যয় তিন কাজে চলে বলে অনুবাদে সবখানে in ছায়া ফেলে।", en: "The root of the mistakes is one — the suffix '-e/-te' does three jobs, so in casts its shadow everywhere in translation.", hi: "गलतियों की जड़ एक है — '-ए/-ते' प्रत्यय तीन काम करता है, इसलिए अनुवाद में in हर जगह छाया डालता है।" },
            { bn: "তলের জায়গায় in — টেবিলে, দেয়ালে, বিছানায় → in the table/wall/bed (ঠিক: on)।", en: "in where on belongs — tebile, deyale, bichanay → in the table/wall/bed (right: on).", hi: "सतह पर in — in the table/wall/bed (सही: on)।" },
            { bn: "বিন্দুর জায়গায় in — বাসস্ট্যান্ডে, দরজায় → in the bus stop/door (ঠিক: at)।", en: "in where at belongs — bas-stande, dorjay → in the bus stop/door (right: at).", hi: "बिन्दु पर in — in the bus stop/door (सही: at)।" },
            { bn: "স্থির জুটি ভাঙা — in home (ঠিক: at home), in my friend's house (ঠিক: at)।", en: "Broken fixed pairs — in home (right: at home), in my friend's house (right: at).", hi: "स्थिर जोड़े टूटना — in home (सही: at home), in my friend's house (सही: at)।" },
            { bn: "সময়ের ভাগ ভুল — at the morning (ঠিক: in), in the night (ঠিক: at night), in Monday (ঠিক: on)।", en: "Mixed-up time — at the morning (right: in), in the night (right: at night), in Monday (right: on).", hi: "समय की मिलावट — at the morning (सही: in), in the night (सही: at night), in Monday (सही: on)।" },
            { bn: "যানবাহনে in the bus — ঠিক হবে on the bus।", en: "Vehicles — in the bus is wrong; the right one is on the bus.", hi: "वाहन में in the bus — सही होगा on the bus।" },
            { bn: "চিকিৎসা: অনুবাদের আগে তিনটা প্রশ্ন — ভেতরে ঢোকা যায়? ওপরের তল? নির্দিষ্ট বিন্দু বা ঘড়ার সময়? — উত্তরই preposition বেছে দেবে।", en: "The cure: before translating, ask three questions — can you enter it? a surface? a point or a clock time? — the answer itself picks the preposition.", hi: "इलाज: अनुवाद से पहले तीन सवाल — भीतर जा सकते हैं? सतह? बिन्दु या घड़ी का समय? — जवाब ही preposition चुन देगा।" },
          ],
          examples: [
            {
              wrong: "The rice is on the pot.",
              right: "The rice is in the pot.",
              note: {
                bn: "হাঁড়ির ভেতরে → in; 'হাঁড়িতে' শুনলে on চাপার উল্টো ভুলও হয় — আগে ভাবুন ভেতরে না তলে।",
                en: "Inside the pot — in; the opposite mistake happens too when 'hantite' tempts on — first ask inside or surface.",
                hi: "हांड़ी के भीतर → in; उल्टी गलती भी होती है — पहले भीतर या सतह सोचें।",
              },
            },
            {
              wrong: "I live in home with my parents.",
              right: "I live at home with my parents.",
              note: {
                bn: "স্থির জুটি at home; 'ঘরে থাকি'-র '-ে' ইংরেজিতে in হবে না।",
                en: "The fixed pair is at home; the '-e' of Bengali 'ghore thaki' does not become in.",
                hi: "स्थिर जोड़ी at home; 'घरे থাকি' का '-ए' in नहीं बनेगा।",
              },
            },
            {
              wrong: "I go to office in 9 a.m.",
              right: "I go to office at 9 a.m.",
              note: {
                bn: "ঘড়ার বিন্দু → at; অফিসের জায়গায় at the office, ঘড়ার জায়গায় at 9 a.m. — দুটো আলাদা at।",
                en: "A clock time takes at; the workplace also takes at (at the office), the clock too (at 9 a.m.) — two different ats.",
                hi: "घड़ी का बिन्दु → at; कार्यस्थल भी at the office।",
              },
            },
            {
              wrong: "We will meet in Sunday.",
              right: "We will meet on Sunday.",
              note: {
                bn: "বার → on; 'রবিবারে/সোমবারে' শুনলেই in নয়।",
                en: "A day of the week takes on; hearing 'Som bare' should not bring in.",
                hi: "बार → on; 'सोमবারे' सुनकर in नहीं।",
              },
            },
            {
              wrong: "She was born on March.",
              right: "She was born in March.",
              note: {
                bn: "মাস → in; on আসবে তারিখ জুড়লে — on 16 March, একা মাসে in March।",
                en: "A month takes in; on arrives with a date — on 16 March, but the month alone is in March.",
                hi: "महीना → in; तारीख जुड़े तब on — on 16 March।",
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
            bn: "সাবিনার এক দিনের গল্পে in, on, at-এর সব নিয়ম একসঙ্গে কাজ করে।",
            en: "In one day of Sabina's life every rule of in, on, at works together.",
            hi: "साबिना के एक दिन में in, on, at के सारे नियम एक साथ काम करते हैं।",
          },
          points: [
            { bn: "সোমবার সকালে সাবিনার দিন শুরু ছয়টায় — 'I get up at six.' সে মিরপুরের এক হোস্টেলে থাকে: 'I live in a hostel in Mirpur'।", en: "Sabina's Monday starts at six — 'I get up at six.' She lives in a hostel in Mirpur: 'I live in a hostel in Mirpur.'", hi: "सोमवार सुबह साबिना का दिन छह बजे शुरू होता है — 'I get up at six.' वह मीरपुर के एक हॉस्टल में रहती है: 'I live in a hostel in Mirpur'।" },
            { bn: "আটটায় বাস স্টপে দাঁড়িয়ে: 'I am at the bus stop'; বাসে উঠে জানালার পাশে বসে: 'I am on the bus now'।", en: "At eight she stands at the bus stop: 'I am at the bus stop'; she boards the bus and sits by the window: 'I am on the bus now.'", hi: "आठ बजे बस स्टॉप पर खड़ी: 'I am at the bus stop'; बस में चढ़कर खिड़की के पास बैठती है: 'I am on the bus now'।" },
            { bn: "ন'টায় অফিসে টিফিন বক্সের ভেতরে, তাকের ওপরে রাখে — 'The box is on the shelf; the tiffin is in the box'।", en: "At nine, in the office, the tiffin goes inside the box on the shelf — 'The box is on the shelf; the tiffin is in the box.'", hi: "नौ बजे दफ़्तर में टिफ़िन डिब्बे में, शेल्फ़ पर — 'The box is on the shelf; the tiffin is in the box'।" },
            { bn: "রাতে মাকে ফোনে বলে, 'I will visit you in December, on the 20th, at ten at night' — মা হাসেন, 'We will all be at home'।", en: "At night she tells her mother on the phone, 'I will visit you in December, on the 20th, at ten at night' — mother smiles, 'We will all be at home.'", hi: "रात में माँ को फ़ोन पर कहती है, 'I will visit you in December, on the 20th, at ten at night' — माँ हँसती हैं, 'We will all be at home'।" },
          ],
          examples: [
            {
              wrong: "She gets up in six o'clock.",
              right: "She gets up at six o'clock.",
              note: {
                bn: "ঘড়ার বিন্দু → at; ছয়টায় = at six।",
                en: "A clock point takes at — at six.",
                hi: "घड़ी का बिन्दु → at — at six।",
              },
            },
            {
              wrong: "She sits in the bus.",
              right: "She sits on the bus.",
              note: {
                bn: "বড় যানবাহন → on the bus।",
                en: "A large vehicle takes on — on the bus.",
                hi: "बड़ा वाहन → on the bus।",
              },
            },
            {
              wrong: "I will visit you at December.",
              right: "I will visit you in December.",
              note: {
                bn: "মাস → in; at আসবে শুধু ঘড়ায় — at ten।",
                en: "A month takes in; at arrives only with the clock — at ten.",
                hi: "महीना → in; at केवल घड़ी के साथ — at ten।",
              },
            },
            {
              wrong: "I will come at the 20th.",
              right: "I will come on the 20th.",
              note: {
                bn: "তারিখ → on; '২০ তারিখে'-র '-ে' অনুবাদ on।",
                en: "A date takes on — the '-e' of 'bish tarikhe' translates to on.",
                hi: "तारीख → on।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧠 এক নজরে — পুরো পাঠ এক ফ্রেমে",
            en: "🧠 In a nutshell — the whole lesson in one frame",
            hi: "🧠 एक नज़र में — पूरा पाठ एक फ्रेम में",
          },
          lead: {
            bn: "পুরো পাঠ শেষ — তিন স্তরের মানচিত্রটা এক ফ্রেমে দেখে নিন।",
            en: "The lesson is done — see the three-level map again in a single frame.",
            hi: "पाठ पूरा — तीन स्तर का नक़्शा एक फ्रेम में देख लें।",
          },
          points: [
            { bn: "গল্পের জুটিগুলো দেখুন — at six (ঘড়া), in a hostel (ঘেরা জায়গা), in Mirpur (এলাকা), at the bus stop (বিন্দু)।", en: "Look at the story pairs — at six (clock time), in a hostel (enclosed space), in Mirpur (area), at the bus stop (point).", hi: "कहानी के जोड़े देखें — at six (घड़ी), in a hostel (घिरा स्थान), in Mirpur (क्षेत्र), at the bus stop (बिन्दु)।" },
            { bn: "আরও — on the bus (বড় যানবাহন), on the shelf (তল), in the box (ভেতরে), in December (মাস)।", en: "And more — on the bus (large vehicle), on the shelf (surface), in the box (inside), in December (month).", hi: "और भी — on the bus (बड़ा वाहन), on the shelf (सतह), in the box (भीतर), in December (महीना)।" },
            { bn: "শেষ তিন — on the 20th (তারিখ), at ten at night (ঘড়া + at night ব্যতিক্রম), at home (স্থির জুটি)।", en: "The last three — on the 20th (date), at ten at night (clock time + the at-night exception), at home (fixed pair).", hi: "अंतिम तीन — on the 20th (तारीख), at ten at night (घड़ी + at night अपवाद), at home (स्थिर जोड़ी)।" },
            { bn: "এক নজরে স্থান — **in** = ঘেরা জায়গা, শহর-দেশ; on = তল, বড় যানবাহন; at = বিন্দু, কর্মস্থল।", en: "Place in a nutshell — **in** = enclosed spaces, cities and countries; on = surfaces, large vehicles; at = points, workplaces.", hi: "स्थान एक नज़र में — **in** = घिरे स्थान, शहर-देश; on = सतह, बड़े वाहन; at = बिन्दु, कार्यस्थल।" },
            { bn: "এক নজরে সময় — **in** = মাস-বছর-দিনের অংশ; on = বার-তারিখ; at = ঘড়া ও at night।", en: "Time in a nutshell — **in** = months, years, parts of the day; on = days, dates; at = clock times and at night.", hi: "समय एक नज़र में — **in** = महीना-साल-दिन का भाग; on = बार-तारीख; at = घड़ी और at night।" },
            { bn: "স্থির জুটি মুখস্থ — at home, on the bus, on time।", en: "Memorise the fixed pairs — at home, on the bus, on time.", hi: "स्थिर जोड़े रटें — at home, on the bus, on time।" },
          ],
          examples: [],
        },
      ],
      tips: [
        {
          bn: "তিনটা ছবি মনে রাখুন — in = বাক্সের ভেতর, on = টেবিলের ওপরের তল, at = ম্যাপে একটা বিন্দু।",
          en: "Keep three pictures in mind — in = inside a box, on = the top surface of a table, at = a point on the map.",
          hi: "तीन चित्र याद रखें — in = डिब्बे के भीतर, on = टेबल की सतह, at = नक़्शे का बिन्दु।",
        },
        {
          bn: "সময়ের সিঁড়ি — in (মাস, বছর) → on (বার, তারিখ) → at (ঘড়া); যত ছোট বিন্দু, তত at।",
          en: "The staircase of time — in (months, years) → on (days, dates) → at (clock times); the smaller the point, the more at.",
          hi: "समय की सीढ़ी — in (महीना, साल) → on (बार, तारीख) → at (घड़ी)।",
        },
        {
          bn: "at home, at school, at work — থাকা বা কাজের উদ্দেশ্যে সেই জায়গা হলে at; in home কখনো নয়।",
          en: "at home, at school, at work — when the place is for living or working, use at; never in home.",
          hi: "at home, at school, at work — रहने या काम की जगह हो तो at; in home कभी नहीं।",
        },
        {
          bn: "কারো বাড়িতে মানে at — at my friend's house; নিজের বাড়ি at home।",
          en: "At someone's house takes at — at my friend's house; your own is at home.",
          hi: "किसी के घर = at — at my friend's house; अपना घर at home।",
        },
        {
          bn: "বড় যানবাহনে on (on the bus/train/plane), ছোট যানবাহনে in (in a car/taxi); যাতায়াতের মোড়ে by — by bus, by car।",
          en: "Large vehicles take on (on the bus/train/plane), small vehicles take in (in a car/taxi); for the mode of travel use by — by bus, by car.",
          hi: "बड़े वाहन में on, छोटे में in (in a car/taxi); यात्रा के मोड़ पर by — by bus, by car।",
        },
        {
          bn: "in the morning/afternoon/evening কিন্তু at night, at midnight, at noon — ব্যতিক্রম জুটি জোরে জোরে বলুন।",
          en: "in the morning/afternoon/evening but at night, at midnight, at noon — say the exception pairs aloud.",
          hi: "in the morning पर at night, at midnight, at noon — अपवाद की जोड़ियाँ ज़ोर से बोलें।",
        },
        {
          bn: "বার + দিনের অংশ জুড়লে on জেতে — on Monday morning, on Friday night।",
          en: "Day + part of day takes on — on Monday morning, on Friday night.",
          hi: "बार + दिन का भाग → on — on Monday morning, on Friday night।",
        },
        {
          bn: "তারিখ আর ঘড়া একসঙ্গে এলে আলাদা করে ধরুন — on 16 December at 5 p.m.।",
          en: "When a date and a clock time come together, handle them separately — on 16 December at 5 p.m.",
          hi: "तारीख और घड़ी साथ आएँ तो अलग-अलग — on 16 December at 5 p.m.।",
        },
        {
          bn: "অনুবাদে ঢুকবেন না — 'ঘরে/টেবিলে/সকালে' শুনলেই in লিখবেন না; আগে ভাবুন: ভেতরে? তল? বিন্দু?",
          en: "Do not dive into translation — hearing 'ghore/tebile/sokale' should not automatically mean in; first ask: inside? surface? point?",
          hi: "अनुवाद में मत उतरें — 'घरे/टेबिले/सोकाले' सुनकर हर जगह in न लिखें; पहले पूछें: भीतर? सतह? बिन्दु?",
        },
        {
          bn: "রোজ একটা বাক্যে তিনটাই ফেলুন — At seven on Friday morning I sat on the bus — জুটিগুলো অভ্যাস হয়ে যাবে।",
          en: "Use all three in one sentence every day — At seven on Friday morning I sat on the bus — and the pairs become habit.",
          hi: "रोज़ एक वाक्य में तीनों डालें — At seven on Friday morning I sat on the bus — जोड़े आदत बन जाएँगे।",
        },
      ],
      quiz: [
        {
          question: "The cat is sleeping ___ the sofa.",
          options: ["in", "on", "at", "by"],
          answer: 1,
          explanation: {
            bn: "sofa-র ওপরের তল → on; বিড়াল সোফার পৃষ্ঠে, ভেতরে নয়।",
            en: "The upper surface of the sofa takes on — the cat is on the surface, not inside.",
            hi: "सोफ़ा की सतह → on; बिल्ली सतह पर है, भीतर नहीं।",
          },
        },
        {
          question: "My birthday is ___ 5 March.",
          options: ["in", "on", "at", "from"],
          answer: 1,
          explanation: {
            bn: "তারিখ → on — on 5 March; একা মাস হলে in March।",
            en: "A date takes on — on 5 March; the month alone would be in March.",
            hi: "तारीख → on — on 5 March।",
          },
        },
        {
          question: "We have an English class ___ Monday.",
          options: ["in", "on", "at", "by"],
          answer: 1,
          explanation: {
            bn: "বারের নাম → on — on Monday।",
            en: "A day of the week takes on — on Monday.",
            hi: "बार का नाम → on — on Monday।",
          },
        },
        {
          question: "I usually go to bed ___ 11 o'clock.",
          options: ["in", "on", "at", "to"],
          answer: 2,
          explanation: {
            bn: "ঘড়ার বিন্দু → at — at 11 o'clock।",
            en: "A clock time takes at — at 11 o'clock.",
            hi: "घड़ी का समय → at — at 11 o'clock।",
          },
        },
        {
          question: "She was born ___ 2003.",
          options: ["on", "in", "at", "of"],
          answer: 1,
          explanation: {
            bn: "বছর → in — in 2003।",
            en: "A year takes in — in 2003.",
            hi: "साल → in — in 2003।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "I am in home.",
            "I am at home.",
            "I am on home.",
            "I am to home.",
          ],
          answer: 1,
          explanation: {
            bn: "স্থির জুটি at home — in home ভুল, on/to home অস্তিত্বই নেই।",
            en: "The fixed pair is at home — 'in home' is wrong and on/to home do not exist.",
            hi: "स्थिर जोड़ी at home — 'in home' गलत।",
          },
        },
        {
          question: "He sleeps ___ the afternoon.",
          options: ["at", "in", "on", "by"],
          answer: 1,
          explanation: {
            bn: "দিনের বড় অংশ → in — in the afternoon; ব্যতিক্রম শুধু night-এ (at night)।",
            en: "A large part of the day takes in — in the afternoon; the exception is only night (at night).",
            hi: "दिन का बड़ा भाग → in — in the afternoon; अपवाद केवल night (at night)।",
          },
        },
        {
          question: "I read a magazine ___ the train.",
          options: ["in", "on", "at", "over"],
          answer: 1,
          explanation: {
            bn: "বড় যানবাহন → on — on the train।",
            en: "A large vehicle takes on — on the train.",
            hi: "बड़ा वाहन → on — on the train।",
          },
        },
        {
          question: "___ night the streets are quiet.",
          options: ["In", "On", "At", "By"],
          answer: 2,
          explanation: {
            bn: "night-এর ব্যতিক্রম — At night; In night নয়।",
            en: "Night is the exception — at night, never 'in night'.",
            hi: "night अपवाद है — At night, 'In night' नहीं।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: [
            "The meeting is at 4 p.m. on Wednesday.",
            "The meeting is on 4 p.m. at Wednesday.",
            "The meeting is in 4 p.m. on Wednesday.",
            "The meeting is at 4 p.m. in Wednesday.",
          ],
          answer: 0,
          explanation: {
            bn: "ঘড়া at + বার on — at 4 p.m. on Wednesday; সিঁড়ির নিয়ম দুই জায়গায়ই খাটে।",
            en: "Clock time takes at and the day takes on — at 4 p.m. on Wednesday; the staircase rule applies in both slots.",
            hi: "घड़ी at + बार on — at 4 p.m. on Wednesday।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_B1C;
