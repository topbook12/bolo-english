// ─── Grammar seeds v4: Bolo English advanced batch a1c (2 lessons) ───
// Task 10 (10-C12) — point-form roadmap upgrade. Source: grammar-v3-a1.ts
// Lessons: "Discourse Markers & Cohesion" (sortOrder 3), "Collocations & Word Partnerships" (sortOrder 4).
// v4 shape: roadmap + emoji headings + lead + points (+ formula/table); body omitted.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A1C: SeedGrammarV4Entry[] = [
  /* ── 1. Discourse Markers & Cohesion (Unit 4) ─────────────────────── */
  {
    topic: "Discourse Markers & Cohesion",
    level: "advanced",
    title: "Discourse Markers & Cohesion",
    unit: 4,
    sortOrder: 3,
    data: {
      title: {
        bn: "ডিসকোর্স মার্কার ও কোহেশন: বাক্যের বাইরে লেখা জোড়ানোর কারিগরি",
        en: "Discourse Markers & Cohesion",
        hi: "डिसकोर्स मार्कर और कोहेशन: वाक्य से आगे लेखन जोड़ने की कारीगरी",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি চতুর্থ পাঠ (Unit 4)। শুরু করার আগে intermediate স্তরের Linking Words পাঠটি এবং এই স্তরের Advanced Tense & Aspect Nuances ও Participle Clauses পাঠগুলো শেষ করে নিন — বাক্য-স্তরের নিয়ন্ত্রণ ছাড়া অনুচ্ছেদ-স্তরে ওঠা কঠিন। এতদিন আমরা একেকটা বাক্য ঠিক করেছি; এবার বাক্যগুলোর মধ্যে সেতু বাঁধব। ইংরেজি লেখায় পেশাদারিত্বের গন্ধ আসে কোহেশন (cohesion) থেকে — বাক্যগুলো যেন একই সুতোয় গাঁথা মালা। এই সুতোর দুই মুখ: linking adverb (however, therefore, moreover — যতি-সহ তিন জায়গায় বসে) আর reference device (this decision, the former, the latter — আগের কথা টেনে ধরে)। সঙ্গে থাকবে despite বনাম although-এর সীমানা, and...and...and-এর বিকল্প, আর বাঙালি লেখকদের চিরচেনা 'যদিও...কিন্তু' অভ্যাসের চিকিৎসা।",
        en: "This is the fourth lesson of the advanced Learning Path (Unit 4). Before starting, finish the intermediate Linking Words lesson and the earlier advanced lessons (Advanced Tense & Aspect Nuances, Participle Clauses) — without sentence-level control, moving to paragraph level is hard. So far we fixed one sentence at a time; now we will build bridges between sentences. The professional feel of English writing comes from cohesion — sentences threaded like beads on one string. The string has two faces: linking adverbs (however, therefore, moreover — sitting in three places with their own punctuation) and reference devices (this decision, the former, the latter — pulling earlier ideas forward). Alongside: the border between despite and although, alternatives to and...and...and, and the cure for the familiar Bengali 'যদিও...কিন্তু' double-marker habit.",
        hi: "यह एडवांस्ड Learning Path का चौथा पाठ है (Unit 4)। शुरू करने से पहले intermediate स्तर का Linking Words पाठ और इसी स्तर के Advanced Tense & Aspect Nuances व Participle Clauses पाठ पूरे करें — वाक्य-स्तर के नियंत्रण के बिना अनुच्छेद-स्तर पर जाना मुश्किल है। अब तक हम एक-एक वाक्य ठीक कर रहे थे; अब वाक्यों के बीच पुल बाँधेंगे। अंग्रेज़ी लेखन में प्रोफेशनल रंग कोहेशन से आता है — वाक्य माला के मनकों जैसे एक धागे में बँधे हों। इस धागे के दो रूप: linking adverb (however, therefore, moreover — विराम-चिह्न सहित तीन स्थानों पर) और reference device (this decision, the former, the latter — पिछली बात को खींचकर पकड़ना)। साथ में: despite बनाम although की सीमा, and...and...and के विकल्प, और 'जबकि...लेकिन' जैसी दोहरे-मार्कर आदत का इलाज।",
      },
      roadmap: [
        { bn: "🎯 মার্কার কী — বাক্যের বাইরে সম্পর্ক নামিয়ে আনার শিল্প", en: "🎯 What markers are — naming relationships beyond the sentence", hi: "🎯 मार्कर क्या है — वाक्य से आगे संबंध का नाम लेना" },
        { bn: "🏗️ তিন দল — conjunction বনাম linking adverb: আসন ও যতি", en: "🏗️ Three teams — conjunction vs linking adverb: seats and punctuation", hi: "🏗️ तीन टीमें — conjunction बनाम linking adverb: स्थान और विराम" },
        { bn: "🚦 অর্থের পরিবার চিনে মার্কার বাছাই — এক টেবিলে", en: "🚦 Pick markers by meaning family — all in one table", hi: "🚦 अर्थ-परिवार पहचानकर मार्कर चुनना — एक टेबल में" },
        { bn: "🚧 despite বনাম although — সীমান্তের কঠোর নিয়ম ও তিন সেতু", en: "🚧 despite vs although — the strict border rule and three bridges", hi: "🚧 despite बनाम although — सख़्त सीमा-नियम और तीन पुल" },
        { bn: "🔗 this decision, the former/latter, lexical chain — আগের কথা ধরে রাখা", en: "🔗 this decision, the former/latter, lexical chains — holding earlier ideas", hi: "🔗 this decision, the former/latter, lexical chain — पिछली बात पकड़े रखना" },
        { bn: "⚠️ পাঁচ গোত্রের সূক্ষ্ম ভুল — যুগল-মার্কার থেকে comma splice", en: "⚠️ Five families of subtle errors — paired markers to comma splice", hi: "⚠️ सूक्ष्म गलतियों के पाँच समूह — युगल-मार्कर से comma splice तक" },
        { bn: "📖 আস্ত অনুচ্ছেদে মার্কার শিকার — প্রতিটা সম্পর্ক চিনুন", en: "📖 Marker hunting in a full paragraph — name every relationship", hi: "📖 पूरे अनुच्छेद में मार्कर शिकार — हर संबंध पहचानें" },
        { bn: "🧭 এক নজরে সাত নিয়ম + নিজের লেখায় অনুশীলন", en: "🧭 Seven rules at a glance + practice on your own writing", hi: "🧭 एक नज़र में सात नियम + अपने लेखन पर अभ्यास" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — বাক্য শেষ মানেই কাজ শেষ নয়",
            en: "🎯 When to use them — the end of a sentence is not the end of the job",
            hi: "🎯 कब इस्तेमाल होते हैं — वाक्य खत्म होना काम खत्म होना नहीं",
          },
          lead: {
            bn: "বাক্য আর বাক্যের মাঝের সেতু — discourse marker পেশাদার লেখার প্রথম চিহ্ন।",
            en: "The bridge between sentences — discourse markers are the first sign of professional writing.",
            hi: "वाक्यों के बीच का पुल — discourse marker प्रोफेशनल लेखन की पहली पहचान।",
          },
          points: [
            { bn: "**ডিসকোর্স মার্কার** — বাক্যের বাইরের সংযোগসূত্র; দুটো বাক্যের (বা ভাবনার) সম্পর্ক নামিয়ে আনে: however, therefore, moreover।", en: "**Discourse markers** — connectors beyond the sentence; they name the relationship between two sentences (or ideas): however, therefore, moreover.", hi: "**डिसकोर्स मार्कर** — वाक्य से आगे के संयोजक; दो वाक्यों (या विचारों) का संबंध बताते हैं: however, therefore, moreover।" },
            { bn: "সম্পর্ক পাঁচ রকম — বিপরীত (however), ফল (therefore), যোগ (moreover), উদাহরণ (for instance), সময়ক্রম (meanwhile)।", en: "Five kinds of relationship — contrast (however), result (therefore), addition (moreover), example (for instance), time sequence (meanwhile).", hi: "पाँच तरह का संबंध — विरोध (however), परिणाम (therefore), जोड़ (moreover), उदाहरण (for instance), क्रम (meanwhile)।" },
            { bn: "বাংলা রচনাতেও একই কাজ করে 'তবে', 'সুতরাং', 'তাছাড়া', 'যেমন'।", en: "Bengali writing does the same job with 'তবে', 'সুতরাং', 'তাছাড়া', 'যেমন'.", hi: "हिंदी लेखन में भी यही काम 'लेकिन', 'इसलिए', 'इसके अलावा', 'जैसे' करते हैं।" },
            { bn: "পার্থক্য জায়গা আর যতিচিহ্নে — বাংলার 'কিন্তু' যেখানে সেখানে বসে; however-এর নিজস্ব তিনটা আসন আর কমার আইন।", en: "The difference is position and punctuation — Bengali 'কিন্তু' sits anywhere; however has three fixed seats and its own comma law.", hi: "फ़र्क़ स्थान और विराम-चिह्न का — हिंदी का 'लेकिन' कहीं भी बैठता है; however की तीन तय सीटें और अपना comma-कानून है।" },
            { bn: "সবচেয়ে দরকার লেখায় — রচনা, রিপোর্ট, ইমেইল, presentation script: কয়েকটা ভাবনা একটা যুক্তির স্রোতে বয়ে যেতে হয়।", en: "They are needed most in writing — essays, reports, emails, presentation scripts: several ideas must flow as one argument.", hi: "सबसे ज़्यादा ज़रूरत लेखन में — निबंध, रिपोर्ट, ईमेल, presentation script: कई विचार एक तर्क-धारा में बहें।" },
            { bn: "কথ্য ভাষায় মার্কার কম — সংকেত দেয় সুর আর বিরতি।", en: "Fewer markers in speech — tone and pauses do the signalling.", hi: "बोलचाल में मार्कर कम — लहजा और ठहराव संकेत देते हैं।" },
            { bn: "সতর্কতা: প্রতি দ্বিতীয় বাক্যে however বসানো cohesion নয় — যান্ত্রিকতা।", en: "A warning: putting however in every second sentence is not cohesion — it is machinery.", hi: "चेतावनी: हर दूसरे वाक्य में however लगाना कोहेशन नहीं — यांत्रिकता है।" },
            { bn: "মার্কার মানে যুক্তির ট্রাফিক-সংকেত — রাস্তায় যত বেশি সংকেত, তত জট।", en: "A marker is a traffic signal for logic — the more signals on the road, the worse the jam.", hi: "मार्कर यानी तर्क का ट्रैफ़िक-सिग्नल — सिग्नल जितने ज़्यादा, जाम उतना गहरा।" },
          ],
          examples: [
            { wrong: "The report was late. The client was angry. We apologized. We changed the process.", right: "The report was late; therefore the client was angry, and we apologized before changing the process.", note: { bn: "চারটা ছোট বাক্যের চেয়ে একটা causal স্রোত বেশি পেশাদার শোনায় — therefore আর before সম্পর্কগুলো নামিয়ে আনে।", en: "One causal stream sounds far more professional than four short sentences — therefore and before name the relationships.", hi: "चार छोटे वाक्यों की बजाय एक कार्य-धारा ज़्यादा प्रोफेशनल लगती है — therefore और before संबंध दर्शाते हैं।" } },
            { wrong: "The medicine is cheap. It has serious side effects.", right: "The medicine is cheap; however, it has serious side effects.", note: { bn: "দুই ভাবনার মধ্যে বিপরীত আছে — however-জাতীয় মার্কার সেটা নাম করে বলে দেয়।", en: "The two ideas stand in contrast — a however-type marker names that contrast explicitly.", hi: "दोनों विचारों में विरोध है — however जैसा मार्कर उसे स्पष्ट नाम देता है।" } },
            { wrong: "I like tea very much. I drink tea in the morning. Tea is good for me.", right: "I like tea so much that I start every morning with it.", note: { bn: "একই শব্দ তিন বাক্যে — pronoun (it) আর so...that গঠন পুনরাবৃত্তি গিলে ফেলে।", en: "The same word three times — the pronoun (it) and the so...that frame swallow the repetition.", hi: "एक ही शब्द तीन बार — it सर्वनाम और so...that ढाँचा दोहराव निगल जाता है।" } },
            { wrong: "Mobile phones are useful. They are also harmful. They are cheap.", right: "Mobile phones are useful and affordable, yet they can also be harmful.", note: { bn: "addition (and affordable) আর contrast (yet) এক বাক্যে — তিন বাক্যের কাজ শেষ।", en: "Addition (and affordable) and contrast (yet) in one sentence — three sentences' work done.", hi: "जोड़ (and affordable) और विरोध (yet) एक ही वाक्य में — तीन वाक्यों का काम पूरा।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — linking adverb বনাম conjunction: কোথায় বসে, কোন যতি",
            en: "🏗️ Formation — linking adverb vs conjunction: position and punctuation",
            hi: "🏗️ गठन — linking adverb बनाम conjunction: स्थान और विराम-चिह्न",
          },
          lead: {
            bn: "প্রথমে দল চেনুন — তিন দলের আসন আর যতি-আইন আলাদা; বেশিরভাগ ভুলের মূল এখানেই।",
            en: "Know the teams first — three teams, three different seats and punctuation laws; most errors start here.",
            hi: "पहले टीमें पहचानें — तीन टीमों की सीटें और विराम-कानून अलग; ज़्यादातर गलतियों की जड़ यहीं है।",
          },
          formula: {
            bn: "দুই পূর্ণ বাক্য? → semicolon / full stop + however, + বাকি অংশ",
            en: "Two full sentences? → semicolon / full stop + however, + the rest",
            hi: "दो पूरे वाक्य? → semicolon / full stop + however, + बाकी हिस्सा",
          },
          table: {
            head: [
              { bn: "ধরন", en: "Type", hi: "प्रकार" },
              { bn: "সদস্য", en: "Members", hi: "सदस्य" },
              { bn: "আসন ও যতি", en: "Seat and punctuation", hi: "स्थान और विराम" },
            ],
            rows: [
              [{ bn: "Coordinating conjunction", en: "Coordinating conjunction", hi: "Coordinating conjunction" }, { bn: "and, but, or, so, yet", en: "and, but, or, so, yet", hi: "and, but, or, so, yet" }, { bn: "clause-এর মাঝে, আগে কমা", en: "between clauses, comma before", hi: "clauses के बीच, पहले comma" }],
              [{ bn: "Subordinating conjunction", en: "Subordinating conjunction", hi: "Subordinating conjunction" }, { bn: "although, because, while, whereas", en: "although, because, while, whereas", hi: "although, because, while, whereas" }, { bn: "দুই clause অসমান করে — একটা অধীন", en: "makes clauses unequal — one dependent", hi: "clauses असमान बनाता है — एक आश्रित" }],
              [{ bn: "Linking adverb", en: "Linking adverb", hi: "Linking adverb" }, { bn: "however, therefore, moreover, consequently, nevertheless", en: "however, therefore, moreover, consequently, nevertheless", hi: "however, therefore, moreover, consequently, nevertheless" }, { bn: "তিন আসন + নিজস্ব কমার আইন", en: "three seats + its own comma law", hi: "तीन सीट + अपना comma-कानून" }],
            ],
          },
          points: [
            { bn: "**Coordinating conjunction** — and, but, or, so, yet: clause-এর মাঝখানে বসে, আগে কমা: The plan was bold, but the board rejected it।", en: "**Coordinating conjunction** — and, but, or, so, yet: sits between clauses with a comma before it: The plan was bold, but the board rejected it.", hi: "**Coordinating conjunction** — and, but, or, so, yet: clauses के बीच बैठता है, पहले comma: The plan was bold, but the board rejected it।" },
            { bn: "**Subordinating conjunction** — although, because, while, whereas: দুই clause অসমান করে, একটা অধীন হয়ে যায়: Although the plan was bold, the board rejected it।", en: "**Subordinating conjunction** — although, because, while, whereas: makes the clauses unequal, one becomes dependent: Although the plan was bold, the board rejected it.", hi: "**Subordinating conjunction** — although, because, while, whereas: दोनों clauses असमान करता है, एक आश्रित हो जाता है: Although the plan was bold, the board rejected it।" },
            { bn: "**Linking adverb** — however, therefore, moreover, consequently, nevertheless: আসলে adverb; clause জোড়ে না, মন্তব্য যোগ করে।", en: "**Linking adverb** — however, therefore, moreover, consequently, nevertheless: really an adverb; it does not join clauses, it comments.", hi: "**Linking adverb** — however, therefore, moreover, consequently, nevertheless: असल में adverb; clauses नहीं जोड़ता, टिप्पणी करता है।" },
            { bn: "আসন ১ — বাক্যের শুরুতে: However, the board rejected it (পরে কমা)।", en: "Seat 1 — at the start: However, the board rejected it (comma after).", hi: "सीट 1 — वाक्य की शुरुआत में: However, the board rejected it (बाद में comma)।" },
            { bn: "আসন ২ — clause-এর মাঝে: The plan, however, was rejected (দুই কমায় বন্দি)।", en: "Seat 2 — inside the clause: The plan, however, was rejected (held between two commas).", hi: "सीट 2 — clause के भीतर: The plan, however, was rejected (दो commas के बीच)।" },
            { bn: "আসন ৩ — বাক্যের শেষে: The plan was rejected, however (কমার পরে)।", en: "Seat 3 — at the end: The plan was rejected, however (after the comma).", hi: "सीट 3 — वाक्य के अंत में: The plan was rejected, however (comma के बाद)।" },
            { bn: "সবচেয়ে জরুরি আইন: দুই পূর্ণ বাক্যের মাঝে শুধু কমা দিয়ে however বসানো যায় না — আগে semicolon বা full stop: It was late; however, we kept working।", en: "The most important law: two full sentences cannot be joined by a comma plus however — a semicolon or full stop comes first: It was late; however, we kept working.", hi: "सबसे ज़रूरी कानून: दो पूरे वाक्यों के बीच केवल comma से however नहीं बैठता — पहले semicolon या full stop: It was late; however, we kept working।" },
          ],
          examples: [
            { wrong: "It was raining, however we went out.", right: "It was raining; however, we went out.", note: { bn: "comma splice — however-এর আগে দুটো পূর্ণ বাক্য কমায় জোড়া যায় না; semicolon বা full stop লাগবে।", en: "A comma splice — two full sentences cannot join over a comma before however; a semicolon or full stop is required.", hi: "Comma splice — however से पहले दो पूरे वाक्य comma पर नहीं जुड़ते; semicolon या full stop चाहिए।" } },
            { wrong: "The deadline was near therefore we worked all night.", right: "The deadline was near; therefore, we worked all night.", note: { bn: "therefore-ও linking adverb — একই যতি-আইন; বাক্যের শুরুতে বসলে therefore, (কমা-সহ)।", en: "Therefore is also a linking adverb — the same punctuation law; at the start of a sentence write therefore, (with a comma).", hi: "Therefore भी linking adverb है — वही विराम-कानून; वाक्य की शुरुआत में therefore, (comma सहित)।" } },
            { wrong: "The plan however is risky.", right: "The plan, however, is risky.", note: { bn: "clause-এর মাঝের অবস্থানে দুই কমা বাধ্যতামূলক — however-কে দুই পাশ থেকে বন্দি করুন।", en: "In mid-clause position the two commas are mandatory — trap however from both sides.", hi: "Clause के बीच की स्थिति में दो comma अनिवार्य — however को दोनों ओर से घेरें।" } },
            { wrong: "He was tired, but however he kept working.", right: "He was tired, but he kept working.", note: { bn: "but আর however একসঙ্গে দুই মার্কার — একটাই যথেষ্ট; conjunction আর adverb দ্বিগুণ হয় না।", en: "But and however are two markers together — one is enough; a conjunction plus an adverb doubles up.", hi: "But और however साथ-साथ दो मार्कर हैं — एक ही काफ़ी है।" } },
            { wrong: "We interviewed students, and we surveyed teachers, and we checked records, and we wrote the report.", right: "We interviewed students, surveyed teachers and checked records before writing the report.", note: { bn: "and...and...and-এর বিকল্প — parallel verbs এক কমার স্রোতে, শেষে before + -ing কাজের ক্রম দেখায়।", en: "The alternative to and...and...and — parallel verbs in one comma stream, with before + -ing showing the order.", hi: "and...and...and का विकल्प — parallel verbs एक comma-धारा में, अंत में before + -ing क्रम दिखाता है।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — অর্থের পরিবারে মার্কার বাছাই",
            en: "🚦 Signals and patterns — choosing markers by meaning family",
            hi: "🚦 संकेत और पैटर्न — अर्थ-परिवार से मार्कर का चुनाव",
          },
          lead: {
            bn: "মার্কার রটার আগে পরিবার চিনুন — সম্পর্ক ঠিক হলে মার্কার নিজেই হাতে আসবে।",
            en: "Meet the families before memorising markers — once the relationship is clear, the marker picks itself.",
            hi: "मार्कर रटने से पहले परिवार पहचानें — संबंध साफ़ हो तो मार्कर खुद चुन लिया जाता है।",
          },
          table: {
            head: [
              { bn: "কাজ", en: "Function", hi: "काम" },
              { bn: "মার্কার", en: "Markers", hi: "मार्कर" },
            ],
            rows: [
              [{ bn: "যোগ", en: "Addition", hi: "जोड़" }, { bn: "and, moreover, furthermore, in addition, what is more", en: "and, moreover, furthermore, in addition, what is more", hi: "and, moreover, furthermore, in addition, what is more" }],
              [{ bn: "বিপরীত", en: "Contrast", hi: "विरोध" }, { bn: "but, however, nevertheless, still, yet, on the other hand, in contrast", en: "but, however, nevertheless, still, yet, on the other hand, in contrast", hi: "but, however, nevertheless, still, yet, on the other hand, in contrast" }],
              [{ bn: "কারণ", en: "Cause", hi: "कारण" }, { bn: "because, since, as", en: "because, since, as", hi: "because, since, as" }],
              [{ bn: "ফলাফল", en: "Result", hi: "परिणाम" }, { bn: "so, therefore, thus, hence, consequently, as a result", en: "so, therefore, thus, hence, consequently, as a result", hi: "so, therefore, thus, hence, consequently, as a result" }],
              [{ bn: "উদাহরণ দিলে", en: "Giving an example", hi: "उदाहरण देते समय" }, { bn: "for instance, for example, namely, such as", en: "for instance, for example, namely, such as", hi: "for instance, for example, namely, such as" }],
              [{ bn: "ক্রম/সময়", en: "Sequence/time", hi: "क्रम/समय" }, { bn: "first, subsequently, meanwhile, finally", en: "first, subsequently, meanwhile, finally", hi: "first, subsequently, meanwhile, finally" }],
              [{ bn: "সংশোধন-জোর", en: "Correction-emphasis", hi: "संशोधन-बल" }, { bn: "in fact, actually, as a matter of fact, on the contrary", en: "in fact, actually, as a matter of fact, on the contrary", hi: "in fact, actually, as a matter of fact, on the contrary" }],
            ],
          },
          points: [
            { bn: "নিয়ম একটাই — আগের বাক্যের সঙ্গে নতুন বাক্যের সম্পর্ক আগে ঠিক করুন, তারপর পরিবার থেকে মার্কার তুলুন।", en: "One single rule — first decide the relationship between the previous sentence and the new one, then pick a marker from that family.", hi: "नियम एक ही है — पिछले और नए वाक्य के बीच संबंध पहले तय करें, फिर उसी परिवार से मार्कर चुनें।" },
            { bn: "**therefore** পড়েই পাঠক পেছনে কারণ খোঁজে — আগের বাক্যে কারণ না থাকলে মার্কারটাই ভুল।", en: "On reading **therefore** the reader looks backwards for a cause — if the previous sentence holds no cause, the marker itself is wrong.", hi: "**therefore** पढ़ते ही पाठक पीछे कारण ढूँढता है — पिछले वाक्य में कारण न हो तो मार्कर ही ग़लत है।" },
            { bn: "**moreover**-এর আগে অন্তত একটা পয়েন্ট থাকতে হবে — যার সঙ্গে যোগ হচ্ছে।", en: "Before **moreover** there must be at least one point — something to add to.", hi: "**moreover** से पहले कम-से-कम एक बिंदु होना चाहिए — जिससे जोड़ा जा रहा है।" },
            { bn: "**in fact**-এর আগে এমন কিছু থাকতে হবে যা সংশোধন বা জোর দাবি করে।", en: "Before **in fact** there must be something that demands emphasis or correction.", hi: "**in fact** से पहले कुछ ऐसा होना चाहिए जो बल या संशोधन माँगे।" },
            { bn: "উদাহরণের পরিবার আর জোরের পরিবার গুলিয়ে ফেলবেন না — for instance উদাহরণ দেয়, in fact জোর বা সংশোধন।", en: "Never mix the example family with the emphasis family — for instance gives examples, in fact adds emphasis or correction.", hi: "उदाहरण और बल के परिवार मत मिलाइए — for instance उदाहरण देता है, in fact बल या संशोधन।" },
          ],
          examples: [
            { wrong: "The medicine is affordable; moreover, it has side effects.", right: "The medicine is affordable; however, it has side effects.", note: { bn: "পাশের ভাবনাটা যোগ নয়, বিপরীত — পরিবারই বেছে নেওয়া ভুল হলো।", en: "The neighbouring idea is a contrast, not an addition — the family itself was mispicked.", hi: "बगल का विचार जोड़ नहीं, विरोध है — परिवार का चुनाव ही ग़लत हुआ।" } },
            { wrong: "Sales rose sharply; nevertheless, we expanded the team.", right: "Sales rose sharply; therefore, we expanded the team.", note: { bn: "nevertheless মানে 'এ সবকিছু সত্ত্বেও'; ফল বোঝাতে চাইলে therefore।", en: "Nevertheless means 'despite all this'; for the result you need therefore.", hi: "Nevertheless का अर्थ 'इन सबके बावजूद'; परिणाम बताने के लिए therefore।" } },
            { wrong: "He missed the train; as a result, he arrived early.", right: "He missed the train; consequently, he arrived late.", note: { bn: "মার্কার ঠিক হলেও যুক্তি উল্টে যায় না — as a result-এর পরে আসে ফল, আর ফলটা বাস্তবসঙ্গত হতে হবে।", en: "Even a correct marker cannot reverse logic — as a result must be followed by a plausible consequence.", hi: "मार्कर सही होकर भी तर्क उलट नहीं सकता — as a result के बाद विवेकसंगत परिणाम आए।" } },
            { wrong: "Many students failed — in fact, Rina and Karim failed.", right: "Many students failed — for instance, Rina and Karim.", note: { bn: "উদাহরণ দিতে for instance; in fact জোর বা সংশোধনে চলে — পরিবার মিশিয়ে ফেলা ক্লাসিক ভুল।", en: "Examples take for instance; in fact signals emphasis or correction — mixing the families is a classic slip.", hi: "उदाहरण के लिए for instance; in fact बल या संशोधन के लिए — परिवार मिलाना क्लासिक चूक है।" } },
          ],
        },
        {
          heading: {
            bn: "🚧 despite + বিশেষ্য বনাম although + পূর্ণ clause — সীমান্তের নিয়ম",
            en: "🚧 despite + noun vs although + full clause — the border rule",
            hi: "🚧 despite + संज्ञा बनाम although + पूर्ण clause — सीमा का नियम",
          },
          lead: {
            bn: "বাঙালি লেখকের চিরচেনা সীমান্ত-লঙ্ঘন — 'সত্ত্বেও' শব্দটাই এখানে ফাঁদে ফেলে।",
            en: "The border Bengali writers cross daily — the word 'সত্ত্বেও' itself lays the trap.",
            hi: "लेखकों का रोज़ का सीमा-उल्लंघन — 'के बावजूद' शब्द ही यहाँ जाल बिछाता है।",
          },
          formula: {
            bn: "despite / in spite of + বিশেষ্য / -ing  |  although / even though + পূর্ণ clause",
            en: "despite / in spite of + noun / -ing  |  although / even though + full clause",
            hi: "despite / in spite of + संज्ञा / -ing  |  although / even though + पूर्ण clause",
          },
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "পরে যা বসে", en: "What follows", hi: "बाद में क्या" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "despite / in spite of", en: "despite / in spite of", hi: "despite / in spite of" }, { bn: "বিশেষ্য, pronoun, -ing", en: "noun, pronoun, -ing", hi: "संज्ञा, pronoun, -ing" }, { bn: "Despite the rain, the match continued", en: "Despite the rain, the match continued", hi: "Despite the rain, the match continued" }],
              [{ bn: "although / even though / though", en: "although / even though / though", hi: "although / even though / though" }, { bn: "পূর্ণ clause (subject + verb)", en: "full clause (subject + verb)", hi: "पूर्ण clause (subject + verb)" }, { bn: "Although it rained, the match continued", en: "Although it rained, the match continued", hi: "Although it rained, the match continued" }],
              [{ bn: "despite the fact that / in spite of the fact that", en: "despite the fact that / in spite of the fact that", hi: "despite the fact that / in spite of the fact that" }, { bn: "পূর্ণ clause — সেতু", en: "full clause — the bridge", hi: "पूर्ण clause — पुल" }, { bn: "Despite the fact that it rained, ...", en: "Despite the fact that it rained, ...", hi: "Despite the fact that it rained, ..." }],
              [{ bn: "because of / owing to / due to", en: "because of / owing to / due to", hi: "because of / owing to / due to" }, { bn: "বিশেষ্য", en: "noun", hi: "संज्ञा" }, { bn: "because of the heavy traffic", en: "because of the heavy traffic", hi: "because of the heavy traffic" }],
              [{ bn: "because", en: "because", hi: "because" }, { bn: "পূর্ণ clause", en: "full clause", hi: "पूर्ण clause" }, { bn: "because the traffic was heavy", en: "because the traffic was heavy", hi: "because the traffic was heavy" }],
            ],
          },
          points: [
            { bn: "**despite / in spite of** — পরে বিশেষ্য, pronoun বা -ing নেয়; কখনও পূর্ণ clause নয়।", en: "**despite / in spite of** — followed by a noun, pronoun or -ing form; never a full clause.", hi: "**despite / in spite of** — बाद में संज्ञा, pronoun या -ing आता है; कभी पूर्ण clause नहीं।" },
            { bn: "**although / even though / though** — পরে পূর্ণ clause (subject + verb) নেয়।", en: "**although / even though / though** — followed by a full clause (subject + verb).", hi: "**although / even though / though** — बाद में पूर्ण clause (subject + verb)।" },
            { bn: "বাংলার 'সত্ত্বেও/হলেও' দুই জায়গাতেই চলে যায় বলে বাঙালি লেখক সীমান্ত ভুলে যান।", en: "Bengali 'সত্ত্বেও/হলেও' serves both sides, so Bengali writers forget the border.", hi: "हिंदी का 'के बावजूद' दोनों ओर चलता है, इसलिए लेखक सीमा भूल जाते हैं।" },
            { bn: "সেতু ১ ও ২ — despite the fact that + clause, in spite of the fact that + clause।", en: "Bridges 1 and 2 — despite the fact that + clause, in spite of the fact that + clause.", hi: "पुल 1 और 2 — despite the fact that + clause, in spite of the fact that + clause।" },
            { bn: "সেতু ৩ — -ing রূপান্তর: Despite it was raining → Despite the rain।", en: "Bridge 3 — the -ing conversion: Despite it was raining → Despite the rain.", hi: "पुल 3 — -ing रूपांतरण: Despite it was raining → Despite the rain।" },
            { bn: "কারণ-পাশে একই ছবি — because of + বিশেষ্য, কিন্তু because + পূর্ণ clause।", en: "The cause side mirrors this — because of + noun, but because + full clause.", hi: "कारण-पक्ष में वही चित्र — because of + संज्ञा, पर because + पूर्ण clause।" },
            { bn: "owing to আর due to — because of-এর আনুষ্ঠানিক রং।", en: "owing to and due to — the formal colours of because of.", hi: "owing to और due to — because of के औपचारिक रंग।" },
            { bn: "ছোট্ট কিন্তু — despite-এর পরে of আসে না; of শুধু in spite OF-এর অংশ।", en: "A small but — no of ever follows despite; of belongs only to in spite OF.", hi: "एक छोटी बात — despite के बाद of कभी नहीं; of केवल in spite OF का हिस्सा है।" },
          ],
          examples: [
            { wrong: "Despite it was raining, the match continued.", right: "Despite the rain, the match continued.", note: { bn: "despite + বিশেষ্য; পূর্ণ clause চাইলে Although it was raining, the match continued।", en: "despite + noun; for a full clause switch to Although it was raining, the match continued.", hi: "despite + संज्ञा; पूर्ण clause चाहिए तो Although it was raining, the match continued।" } },
            { wrong: "Although the heavy traffic, we reached in time.", right: "Despite the heavy traffic, we reached in time.", note: { bn: "উল্টো দিকের ভুল — although-এর পরে বিশেষ্য-খণ্ড নয়, clause লাগবে।", en: "The reverse error — although cannot be followed by a bare noun phrase; it needs a clause.", hi: "उलटी दिशा की चूक — although के बाद मात्र संज्ञा-खंड नहीं, clause चाहिए।" } },
            { wrong: "He passed the exam despite of his illness.", right: "He passed the exam despite his illness.", note: { bn: "despite-এর পরে of আসে না; of শুধু in spite of-এর অংশ — 'despite of' একটা ছদ্ম-শব্দ।", en: "No of follows despite; of belongs only to in spite of — 'despite of' is a phantom phrase.", hi: "despite के बाद of नहीं आता; of केवल in spite of में है — 'despite of' काल्पनिक शब्द है।" } },
            { wrong: "Despite he had little money, he bought books.", right: "Despite having little money, he bought books.", note: { bn: "clause ফেলে দিতে পারলে -ing-এ রূপান্তর করুন, নয়তো despite the fact that he had little money।", en: "If you can shed the clause, convert to -ing; otherwise despite the fact that he had little money.", hi: "Clause हटा सकें तो -ing में बदलें, अन्यथा despite the fact that he had little money।" } },
            { wrong: "In spite of the fact we started late, we finished on time.", right: "In spite of the fact that we started late, we finished on time.", note: { bn: "fact-এর পরে that এই প্যাটার্নে বাদ দেওয়া যায় না — the fact that এক অবিভাজ্য জোড়া।", en: "The that after fact is not optional in this pattern — the fact that is an inseparable pair.", hi: "इस पैटर्न में fact के बाद that छोड़ा नहीं जा सकता — the fact that अविभाज्य जोड़ी है।" } },
          ],
        },
        {
          heading: {
            bn: "🔗 reference devices ও lexical chains — আগের কথা টেনে ধরা",
            en: "🔗 Reference devices and lexical chains — pulling earlier ideas forward",
            hi: "🔗 reference devices और lexical chains — पिछली बात को खींचकर पकड़ना",
          },
          lead: {
            bn: "কোহেশনের দ্বিতীয় হাত — পুনরাবৃত্তি না করে আগের জিনিস ধরে রাখার চার সরঞ্জাম।",
            en: "Cohesion's second hand — four tools for holding earlier things without repeating them.",
            hi: "कोहेशन का दूसरा हाथ — दोहराए बिना पिछली चीज़ें पकड़े रखने के चार औज़ार।",
          },
          table: {
            head: [
              { bn: "সরঞ্জাম", en: "Tool", hi: "औज़ार" },
              { bn: "কাজ", en: "Job", hi: "काम" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "this/that/these/those + বিশেষ্য", en: "this/that/these/those + noun", hi: "this/that/these/those + संज्ञा" }, { bn: "রেফারেন্স নিখুঁত করে, নতুন ফোকাস তৈরি করে", en: "pins the reference down, creates a fresh focus", hi: "संदर्भ कील की तरह ठीक करता है, नया फ़ोकस बनाता है" }, { bn: "This decision caused confusion", en: "This decision caused confusion", hi: "This decision caused confusion" }],
              [{ bn: "it", en: "it", hi: "it" }, { bn: "শুধু শেষ উল্লিখিত জিনিস ধরে", en: "picks up only the last-mentioned item", hi: "केवल अंतिम उल्लिखित वस्तु लेता है" }, { bn: "The policy caused confusion. It ...", en: "The policy caused confusion. It ...", hi: "The policy caused confusion. It ..." }],
              [{ bn: "the former...the latter", en: "the former...the latter", hi: "the former...the latter" }, { bn: "ঠিক দুটো উল্লেখের আগেটা / পরেটা", en: "of exactly two mentions — the first / the second", hi: "ठीक दो उल्लेखों में पहला / दूसरा" }, { bn: "Tea and coffee — the former exports better", en: "Tea and coffee — the former exports better", hi: "Tea and coffee — the former exports better" }],
              [{ bn: "lexical chain", en: "lexical chain", hi: "lexical chain" }, { bn: "ধারণা বদলালে শব্দও বদলায়", en: "the word changes as the idea flows", hi: "विचार बहते हुए शब्द बदले" }, { bn: "jam → congestion → the delay", en: "jam → congestion → the delay", hi: "jam → congestion → the delay" }],
            ],
          },
          points: [
            { bn: "**this/that/these/those + বিশেষ্য** — The policy caused confusion. This decision surprised everyone (this decision = ওই ঘোষণাটাই)।", en: "**this/that/these/those + noun** — The policy caused confusion. This decision surprised everyone (this decision = that very announcement).", hi: "**this/that/these/those + संज्ञा** — The policy caused confusion. This decision surprised everyone (this decision = वही घोषणा)।" },
            { bn: "**it** শুধু শেষ উল্লিখিত জিনিস ধরে; **this** নতুন ফোকাস তৈরি করে — অস্পষ্ট হলে this + বিশেষ্যই নিরাপদ।", en: "**it** only picks up the last-mentioned item; **this** creates a fresh focus — when in doubt, this + noun is the safe choice.", hi: "**it** केवल अंतिम उल्लिखित वस्तु लेता है; **this** नया फ़ोकस बनाता है — संदेह हो तो this + संज्ञा सुरक्षित।" },
            { bn: "**the former...the latter** — ঠিক দুটো উল্লেখের আগে উল্লিখিতটা আর পরে উল্লিখিতটা; তিন বা তার বেশি আইটেমে চলে না।", en: "**the former...the latter** — of exactly two mentions, the one named first and the one named second; fails with three or more items.", hi: "**the former...the latter** — ठीक दो उल्लेखों में पहले उल्लिखित और बाद में उल्लिखित; तीन या अधिक वस्तुओं पर नहीं चलता।" },
            { bn: "**lexical chain** — একই ধারণা বিভিন্ন শব্দে বেড়ে ওঠা: traffic jam → congestion → the delay।", en: "**lexical chain** — one idea growing through different words: traffic jam → congestion → the delay.", hi: "**lexical chain** — एक ही विचार अलग-अलग शब्दों में बढ़ता है: traffic jam → congestion → the delay।" },
            { bn: "আরেক চেইন: students → learners → the class।", en: "Another chain: students → learners → the class.", hi: "एक और शृंखला: students → learners → the class।" },
            { bn: "চেইন থাকলে লেখা জৈব শোনায়; একই শব্দ পাঁচবার ফিরলে লেখা স্থবির হয়ে যায়।", en: "A chain keeps writing organic; the same word five times makes it stiff.", hi: "शृंखला हो तो लेखन जीवंत लगता है; एक ही शब्द पाँच बार आए तो लेखन अकड़ जाता है।" },
          ],
          examples: [
            { wrong: "The government announced a new tax policy. It caused confusion.", right: "The government announced a new tax policy. This decision caused confusion.", note: { bn: "this + বিশেষ্য রেফারেন্স নিখুঁত করে; খালি it পড়ুয়াকে পেছনে ঝুঁকতে বাধ্য করে।", en: "this + noun pins the reference down; a bare it forces the reader to lean backwards.", hi: "this + संज्ञा संदर्भ कील की तरह ठीक करता है; खाली it पाठक को पीछे झुकने पर मजबूर करता है।" } },
            { wrong: "Tea and coffee both grow here; the first one exports better.", right: "Tea and coffee both grow here; the former exports better.", note: { bn: "দুটোর মধ্যে আগে উল্লিখিতটা the former — 'the first one' লেখ্য ভাষায় দুর্বল শোনায়।", en: "Of two items, the one mentioned first is the former — 'the first one' sounds weak in writing.", hi: "दो में से पहले उल्लिखित the former — 'the first one' लेखन में कमज़ोर लगता है।" } },
            { wrong: "Cricket and football — I prefer the last one.", right: "Cricket and football — I prefer the latter.", note: { bn: "পরে উল্লিখিতটা the latter — the former/the latter জুটি সংবাদ-সম্পাদকীয়র প্রিয় হাতিয়ার।", en: "The one mentioned second is the latter — the former/latter pair is an editorial favourite.", hi: "बाद में उल्लिखित the latter — the former/latter जोड़ी संपादकीय लेखन की प्रिय चीज़।" } },
            { wrong: "The traffic jam delayed the bus. The traffic jam also cost us the meeting.", right: "The jam delayed the bus; the delay also cost us the meeting.", note: { bn: "lexical chain — একই ধারণা (জ্যাম) নতুন শব্দে (delay) বেড়ে ওঠা; পুনরাবৃত্তির চেয়ে স্বাভাবিক।", en: "A lexical chain — the same idea (the jam) grows into a new word (delay); more natural than repetition.", hi: "Lexical chain — वही विचार (जैम) नए शब्द (delay) में बदलता है; दोहराव से ज़्यादा सहज।" } },
            { wrong: "Rahim met Karim at the station. He was carrying a huge suitcase, but he looked tired.", right: "Rahim met Karim at the station. Karim was carrying a huge suitcase and looked tired.", note: { bn: "দুই পুরুষ থাকলে he অস্পষ্ট — নাম ফিরিয়ে আনুন বা বাক্য গুছিয়ে pronoun-অস্পষ্টতা মুছুন।", en: "With two males, he turns ambiguous — bring the name back or restructure to kill unclear pronoun reference.", hi: "दो पुरुष हों तो he अस्पष्ट हो जाता है — नाम लौटाएँ या वाक्य सजाकर सर्वनाम-अस्पष्टता मिटाएँ।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "পাঁচ গোত্রের ভুল — ব্যাকরণ ঠিক রেখেই ঘটে, তাই পড়তে গিয়ে ধরা পড়ে না।",
            en: "Five families of errors — grammar stays correct, so a quick read misses them.",
            hi: "गलतियों के पाँच समूह — व्याकरण सही रहता है, इसलिए जल्दी पढ़ने पर पकड़ में नहीं आतीं।",
          },
          points: [
            { bn: "এই ভুলগুলো ব্যাকরণ ঠিক রেখেই ঘটে — পড়তে গিয়ে ধরা পড়ে না, কানে বাজে।", en: "These errors happen inside correct grammar — they slip past a quick read, yet the ear protests.", hi: "ये गलतियाँ सही व्याकरण के भीतर घटती हैं — जल्दी पढ़ने पर पकड़ में नहीं आतीं, कान बयान दे देता है।" },
            { bn: "**যুগল-মার্কার** — বাংলার 'যদিও...কিন্তু', 'কারণ...তাই' জোড়া ইংরেজিতে নিষিদ্ধ: Although he is rich, but he is humble।", en: "**Paired markers** — the Bengali 'যদিও...কিন্তু', 'কারণ...তাই' couples are banned in English: Although he is rich, but he is humble.", hi: "**युगल-मार्कर** — 'जबकि...लेकिन', 'क्योंकि...इसलिए' की जोड़ियाँ अंग्रेज़ी में वर्जित: Although he is rich, but he is humble।" },
            { bn: "এক clause, এক connector — Because he was ill, therefore he stayed home-ও একই রোগ।", en: "One clause, one connector — Because he was ill, therefore he stayed home suffers from the same disease.", hi: "एक clause, एक connector — Because he was ill, therefore he stayed home भी वही बीमारी है।" },
            { bn: "**comma splice** — কমার পরে however, therefore, moreover বসিয়ে দুই পূর্ণ বাক্য জোড়া যায় না; semicolon বা full stop চাই।", en: "**Comma splice** — joining two full sentences over a comma with however, therefore or moreover is impossible; a semicolon or full stop is required.", hi: "**Comma splice** — comma के बाद however, therefore, moreover रखकर दो पूरे वाक्य नहीं जुड़ते; semicolon या full stop चाहिए।" },
            { bn: "**however-ঘনত্ব** — প্রতি দ্বিতীয় বাক্যে however নয়; ঘুরিয়ে লগান yet, still, nevertheless, even so।", en: "**However density** — not however in every second sentence; rotate yet, still, nevertheless, even so.", hi: "**however की घनत्व** — हर दूसरे वाक्य में however नहीं; yet, still, nevertheless, even so घुमाएँ।" },
            { bn: "**besides বনাম moreover** — besides কথ্য ও 'আর তো কী' টোনের; লেখ্য ভাষায় furthermore/in addition।", en: "**besides vs moreover** — besides is casual, with an 'and anyway' tone; in writing prefer furthermore/in addition.", hi: "**besides बनाम moreover** — besides बोलचाल का, 'और वैसे भी' लहजे का; लेखन में furthermore/in addition।" },
            { bn: "**the former/latter** — তিন বা তার বেশি আইটেমে টানা যায় না — এ জুটি শুধু দুটোর।", en: "**the former/latter** — cannot be dragged into three or more items — the pair serves exactly two.", hi: "**the former/latter** — तीन या अधिक वस्तुओं पर खींचा नहीं जा सकता — यह जोड़ी केवल दो की है।" },
          ],
          examples: [
            { wrong: "Although he is rich, but he is humble.", right: "Although he is rich, he is humble.", note: { bn: "'যদিও...কিন্তু' ছায়া — ইংরেজিতে একটাই মার্কার; but ফেলে দিন।", en: "The 'যদিও...কিন্তু' shadow — English allows one marker; drop the but.", hi: "'जबकि...लेकिन' की छाया — अंग्रेज़ी में एक ही मार्कर; but हटा दें।" } },
            { wrong: "Because the server was down, therefore we lost the whole morning.", right: "Because the server was down, we lost the whole morning.", note: { bn: "because...therefore যুগল-মার্কার — একই অভ্যাসের আরেক মুখ; 'কারণ...তাই' অনুবাদ করবেন না।", en: "The because...therefore double marker — the same habit in another face; never translate 'কারণ...তাই' literally.", hi: "because...therefore युगल-मार्कर — वही आदत दूसरे रूप में; 'क्योंकि...इसलिए' शब्दशः मत लिखें।" } },
            { wrong: "The results were poor, moreover the budget was cut.", right: "The results were poor; moreover, the budget was cut.", note: { bn: "moreover-ও linking adverb — আগে semicolon/full stop, তারপর মার্কার + কমা।", en: "Moreover is also a linking adverb — semicolon/full stop first, then marker + comma.", hi: "Moreover भी linking adverb है — पहले semicolon/full stop, फिर मार्कर + comma।" } },
            { wrong: "We compared the bus, the train and the plane; the former is the cheapest.", right: "We compared the bus, the train and the plane; the bus is the cheapest.", note: { bn: "তিন আইটেমে the former চলে না — নাম বা this + বিশেষ্য বলুন।", en: "The former cannot serve three items — name the item or use this + noun.", hi: "तीन वस्तुओं पर the former नहीं चलता — नाम बोलें या this + संज्ञा लें।" } },
            { wrong: "However the weather was bad, we started early.", right: "Although the weather was bad, we started early.", note: { bn: "concession-clause-এর মাথায় however নয় — however পূর্ণ বাক্যের মন্তব্য; এখানে although/even though।", en: "However never heads a concession clause — it comments on full sentences; here you need although/even though.", hi: "Concession clause के सिर पर however नहीं — however पूरे वाक्य पर टिप्पणी करता है; यहाँ although/even though।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক",
            en: "📖 Seen in a short piece of writing",
            hi: "📖 छोटे लेखन में देखिए",
          },
          lead: {
            bn: "আস্ত এক অনুচ্ছেদ — পাঠের সব মার্কার একসঙ্গে যুক্তির স্রোত বানাচ্ছে।",
            en: "One whole paragraph — every marker of the lesson building one stream of argument.",
            hi: "एक पूरा अनुच्छेद — पाठ के सारे मार्कर मिलकर तर्क-धारा बना रहे हैं।",
          },
          points: [
            { bn: "নিচের অনুচ্ছেদটা পরীক্ষার রচনা বা রিপোর্টের মতো লেখা — প্রতিটা বাক্য আগেরটার সঙ্গে সম্পর্ক গেঁথে আছে।", en: "Read the paragraph below like an exam essay or a report — every sentence is stitched to the one before it.", hi: "नीचे का अनुच्छेद परीक्षा-निबंध या रिपोर्ट जैसा है — हर वाक्य पिछले से जुड़ा हुआ है।" },
            { bn: "প্রথম অংশ: 'Online education has grown rapidly in Bangladesh. However, access is uneven: city students enjoy fast internet, while many village learners struggle with weak signals. Despite these barriers, enrolment keeps rising, and the results are encouraging.'", en: "First part: 'Online education has grown rapidly in Bangladesh. However, access is uneven: city students enjoy fast internet, while many village learners struggle with weak signals. Despite these barriers, enrolment keeps rising, and the results are encouraging.'", hi: "पहला भाग: 'Online education has grown rapidly in Bangladesh. However, access is uneven: city students enjoy fast internet, while many village learners struggle with weak signals. Despite these barriers, enrolment keeps rising, and the results are encouraging.'" },
            { bn: "দ্বিতীয় অংশ: 'This growth has created a new challenge — quality control. Moreover, employers still prefer face-to-face training; consequently, institutes now offer blended courses.'", en: "Second part: 'This growth has created a new challenge — quality control. Moreover, employers still prefer face-to-face training; consequently, institutes now offer blended courses.'", hi: "दूसरा भाग: 'This growth has created a new challenge — quality control. Moreover, employers still prefer face-to-face training; consequently, institutes now offer blended courses.'" },
            { bn: "শেষ অংশ: 'Of the two models, the former saves travel costs, whereas the latter builds discipline. Although neither is perfect, the combination may serve both. Therefore, the real question is not whether to go online, but how to do it well.'", en: "Final part: 'Of the two models, the former saves travel costs, whereas the latter builds discipline. Although neither is perfect, the combination may serve both. Therefore, the real question is not whether to go online, but how to do it well.'", hi: "अंतिम भाग: 'Of the two models, the former saves travel costs, whereas the latter builds discipline. Although neither is perfect, the combination may serve both. Therefore, the real question is not whether to go online, but how to do it well.'" },
            { bn: "প্রতিটা মার্কারের নিচে দাগ দিন আর জিজ্ঞেস করুন — লেখক কোন সম্পর্ক নামিয়ে আনছেন: বিপরীত, ফল, নাকি যোগ?", en: "Underline each marker and ask — which relationship is the writer naming: contrast, result or addition?", hi: "हर मार्कर के नीचे रेखा खींचें और पूछें — लेखक कौन-सा संबंध नाम दे रहा है: विरोध, परिणाम या जोड़?" },
            { bn: "যতিচিহ্নগুলোর দিকেও চোখ রাখুন — semicolon-এর পরে মার্কার, মার্কারের পরে কমা।", en: "Watch the punctuation too — a marker after a semicolon, a comma after the marker.", hi: "विराम-चिह्न भी देखें — semicolon के बाद मार्कर, मार्कर के बाद comma।" },
          ],
          examples: [
            { wrong: "Despite of uneven internet, enrolment keeps rising.", right: "Despite uneven internet, enrolment keeps rising.", note: { bn: "despite + of অসম্ভব — of শুধু in spite of-এ।", en: "despite + of is impossible — of belongs only to in spite of.", hi: "despite + of असंभव — of केवल in spite of में।" } },
            { wrong: "Employers still prefer face-to-face training, consequently institutes now offer blended courses.", right: "Employers still prefer face-to-face training; consequently, institutes now offer blended courses.", note: { bn: "দুই পূর্ণ বাক্য — কমার জায়গায় semicolon, তারপর consequently, (কমা)।", en: "Two full sentences — a semicolon where the comma was, then consequently, (with a comma).", hi: "दो पूरे वाक्य — comma की जगह semicolon, फिर consequently, (comma सहित)।" } },
            { wrong: "City students enjoy fast internet. Many village learners struggle with weak signals.", right: "City students enjoy fast internet, while many village learners struggle with weak signals.", note: { bn: "while দুই অর্ধকে এক বাক্যে মেরে বিপরীত দেখায় — টুকরো বাক্যের জট কমায়।", en: "while welds the two halves into one sentence of contrast — fewer choppy sentences.", hi: "while दोनों हिस्सों को एक विरोध-वाक्य में जोड़ देता है — टुकड़े-टुकड़े वाक्य कम।" } },
            { wrong: "Although neither model is perfect, but the combination may serve both.", right: "Although neither model is perfect, the combination may serve both.", note: { bn: "লেখার মাঝপথেও যুগল-মার্কার ফিরে আসে — শেষ সম্পাদনায় শিকারি চোখে খুঁজুন।", en: "The double-marker habit returns mid-essay — hunt for it in the final edit.", hi: "लेखन के बीच में भी युगल-मार्कर लौट आता है — अंतिम संपादन में शिकार करें।" } },
          ],
        },
        {
          heading: {
            bn: "🧭 এক নজরে",
            en: "🧭 At a glance",
            hi: "🧭 एक नज़र में",
          },
          lead: {
            bn: "সাত নিয়ম আর এক অনুশীলন — এই পাঠের পুরো সুতো এক ফ্রেমে।",
            en: "Seven rules and one exercise — the whole lesson's thread in one frame.",
            hi: "सात नियम और एक अभ्यास — पूरे पाठ का धागा एक फ़्रेम में।",
          },
          points: [
            { bn: "linking adverb তিন আসনে বসে — শুরুতে + কমা, clause-এর মাঝে দুই কমায়, বাক্যের শেষে কমার পরে।", en: "A linking adverb sits in three seats — at the start with a comma, inside the clause between two commas, at the end after a comma.", hi: "linking adverb तीन सीटों पर बैठता है — शुरुआत + comma, clause के भीतर दो commas के बीच, अंत में comma के बाद।" },
            { bn: "দুই পূর্ণ বাক্য শুধু কমায় জোড়া যায় না — semicolon বা full stop, তারপর মার্কার + কমা।", en: "Two full sentences never join over a bare comma — semicolon or full stop, then marker + comma.", hi: "दो पूरे वाक्य खाली comma पर नहीं जुड़ते — semicolon या full stop, फिर मार्कर + comma।" },
            { bn: "আগের বাক্যের সম্পর্ক ভেবে পরিবার থেকে মার্কার নিন — contrast, cause-result, addition, example, sequence।", en: "Decide the relationship with the previous sentence first, then pick from the family — contrast, cause-result, addition, example, sequence.", hi: "पिछले वाक्य से संबंध पहले तय करें, फिर परिवार से चुनें — contrast, cause-result, addition, example, sequence।" },
            { bn: "despite/in spite of + বিশেষ্য বা -ing; although/even though + পূর্ণ clause; despite the fact that সেতু — despite-এর পরে of নেই।", en: "despite/in spite of + noun or -ing; although/even though + full clause; despite the fact that is the bridge — no of after despite.", hi: "despite/in spite of + संज्ञा या -ing; although/even though + पूर्ण clause; despite the fact that पुल है — despite के बाद of नहीं।" },
            { bn: "reference: this + বিশেষ্য সবচেয়ে নিরাপদ; the former/the latter শুধু দুই আইটেমে।", en: "Reference: this + noun is the safest; the former/the latter serve exactly two items.", hi: "संदर्भ: this + संज्ञा सबसे सुरक्षित; the former/the latter केवल दो वस्तुओं के लिए।" },
            { bn: "lexical chain-এ ধারণা বদলালে শব্দ বদলাক — jam → delay।", en: "Let a lexical chain change the word as the idea flows — jam → delay.", hi: "lexical chain में विचार बदले तो शब्द भी बदले — jam → delay।" },
            { bn: "এক clause, এক connector — 'যদিও...কিন্তু' অভ্যাস জলে ভাসান।", en: "One clause, one connector — drown the 'যদিও...কিন্তু' habit.", hi: "एक clause, एक connector — 'जबकि...लेकिन' की आदत जल में फेंक दें।" },
            { bn: "অনুশীলন: পুরোনো একটা রচনা বা ইমেইল খুলুন; প্রতিটা and/but/so-এর জায়গায় থামুন — সম্পর্কটা কি আরও নিখুঁত মার্কারে নামানো যায়? প্রতি অনুচ্ছেদে অন্তত একটা this + বিশেষ্য আর একটা lexical chain ঢোকানোর চেষ্টা করুন।", en: "Practice: open an old essay or email of yours; pause at every and/but/so — can that relationship be named more precisely? Try to add at least one this + noun and one lexical chain per paragraph.", hi: "अभ्यास: अपना पुराना निबंध या ईमेल खोलें; हर and/but/so पर रुकें — क्या वह संबंध अधिक सटीक मार्कर में उतर सकता है? हर अनुच्छेद में कम-से-कम एक this + संज्ञा और एक lexical chain जोड़ने की कोशिश करें।" },
          ],
          examples: [
            { wrong: "The experiment failed; therefore, the results were fine.", right: "The experiment failed; nevertheless, the team continued its research.", note: { bn: "মার্কার আর যুক্তি একই দিকে হাঁটতে হবে — therefore-এর পরে ফল, বিপরীতে nevertheless।", en: "Marker and logic must walk the same direction — therefore promises a result; for contrast take nevertheless.", hi: "मार्कर और तर्क एक ही दिशा में चलें — therefore परिणाम का वादा करता है; विरोध के लिए nevertheless।" } },
            { wrong: "This is a good idea. This will save money. This everyone will like.", right: "This proposal will save money and win everyone's approval.", note: { bn: "this + বিশেষ্য একবারই — পুনরাবৃত্ত this লেখাকে রোবটের প্রতিবেদন বানায়।", en: "this + noun once — a repeated this turns the paragraph into a robot report.", hi: "this + संज्ञा एक ही बार — दोहराया this अनुच्छेद को रोबोट-रिपोर्ट बना देता है।" } },
            { wrong: "Despite the fact of rising costs, the project continued.", right: "Despite the rising costs, the project continued.", note: { bn: "the fact-এর পরে that-clause হয়, of-ফ্রেজ নয়; সহজ পথ — বিশেষ্যই যথেষ্ট।", en: "The fact is followed by a that-clause, not an of-phrase; the easy road — the noun alone suffices.", hi: "fact के बाद that-clause आता है, of-वाक्यांश नहीं; आसान रास्ता — संज्ञा ही काफ़ी।" } },
            { wrong: "We tested two designs, and the latter one was good, and we chose it, and the client approved.", right: "We tested two designs; the latter performed better, so we chose it and the client approved.", note: { bn: "semicolon + so + একটাই and — যোগসূত্র কম, স্রোত বেশি।", en: "Semicolon + so + a single and — fewer joints, more flow.", hi: "Semicolon + so + एक ही and — जोड़ कम, बहाव ज़्यादा।" } },
          ],
        },
      ],
      tips: [
        { bn: "however/therefore/moreover বাক্যের শুরুতে এলে পরেই কমা: However, we agreed।", en: "When however/therefore/moreover start a sentence, a comma follows at once: However, we agreed.", hi: "however/therefore/moreover वाक्य की शुरुआत में आएँ तो तुरंत comma: However, we agreed।" },
        { bn: "clause-এর মাঝে বসলে দুই কমায় বন্দি: The plan, however, is risky।", en: "In mid-clause position hold it between two commas: The plan, however, is risky.", hi: "Clause के बीच में दो commas के बीच बाँधें: The plan, however, is risky।" },
        { bn: "দুই পূর্ণ বাক্যের মাঝে শুধু কমা নয় — semicolon বা full stop, তারপর মার্কার + কমা।", en: "Between two full sentences never just a comma — a semicolon or full stop, then marker + comma.", hi: "दो पूरे वाक्यों के बीच केवल comma नहीं — semicolon या full stop, फिर मार्कर + comma।" },
        { bn: "despite/in spite of + বিশেষ্য বা -ing; although/even though + পূর্ণ clause; despite-এর পরে of আসে না।", en: "despite/in spite of + noun or -ing; although/even though + full clause; no of after despite.", hi: "despite/in spite of + संज्ञा या -ing; although/even though + पूर्ण clause; despite के बाद of नहीं।" },
        { bn: "because...therefore আর although...but — বাংলা যুগল-মার্কার অভ্যাস ছাড়ুন; এক clause, এক connector।", en: "Drop the Bengali paired-marker habits because...therefore and although...but — one clause, one connector.", hi: "because...therefore और although...but जैसी युगल-मार्कर आदतें छोड़ें — एक clause, एक connector।" },
        { bn: "the former/the latter শুধু দুটো আইটেমের জন্য; তিন বা তার বেশি হলে নাম বা this + বিশেষ্য।", en: "the former/the latter serve exactly two items; for three or more, name the item or use this + noun.", hi: "the former/the latter केवल दो वस्तुओं के लिए; तीन या अधिक पर नाम लें या this + संज्ञा।" },
        { bn: "অস্পষ্ট it-এর জায়গায় this + বিশেষ্য (this decision, this policy) — পাঠক পেছনে ঝুঁকবে না।", en: "Replace an unclear it with this + noun (this decision, this policy) — the reader never leans backwards.", hi: "अस्पष्ट it की जगह this + संज्ञा (this decision, this policy) — पाठक पीछे नहीं झुकेगा।" },
        { bn: "and...and...and বদলে parallel verbs, as well as, furthermore, in addition — স্রোত ফিরে আসে।", en: "Swap and...and...and for parallel verbs, as well as, furthermore, in addition — the flow returns.", hi: "and...and...and की जगह parallel verbs, as well as, furthermore, in addition — बहाव लौट आता है।" },
        { bn: "লেখায় however-এর ঘনত্ব কমান — yet, still, nevertheless, even so ঘুরিয়ে লগান।", en: "Thin out however in your writing — rotate yet, still, nevertheless, even so.", hi: "लेखन में however का घनत्व घटाएँ — yet, still, nevertheless, even so घुमाएँ।" },
        { bn: "পড়ার সময় মার্কার শিকার করুন — লেখক কোন সম্পর্ক নামিয়ে আনছেন? উত্তরটা নিজের লেখায় চুরি করুন।", en: "Hunt markers while reading — which relationship is the writer naming? Steal the answer into your own writing.", hi: "पढ़ते समय मार्कर का शिकार करें — लेखक कौन-सा संबंध नाम दे रहा है? उत्तर अपने लेखन में चुरा लें।" },
      ],
      quiz: [
        { question: "______ the heavy traffic, we reached the venue on time.", options: ["Despite", "Although", "However", "Because"], answer: 0, explanation: { bn: "despite + বিশেষ্য-ফ্রেজ (the heavy traffic); although-এর পরে পূর্ণ clause লাগত।", en: "despite + noun phrase (the heavy traffic); although would need a full clause.", hi: "despite + संज्ञा-वाक्यांश (the heavy traffic); although को पूर्ण clause चाहिए।" } },
        { question: "Although the ticket was expensive, ______.", options: ["but I bought it", "I bought it", "however I bought it", "so I bought it"], answer: 1, explanation: { bn: "although-এর পরে পূর্ণ clause, কোনো দ্বিতীয় মার্কার নয় — 'যদিও...কিন্তু' জোড়া ইংরেজিতে নেই।", en: "Although is followed by a plain full clause with no second marker — the 'যদিও...কিন্তু' pair does not exist in English.", hi: "Although के बाद सादा पूर्ण clause, कोई दूसरा मार्कर नहीं — 'जबकि...लेकिन' जोड़ी अंग्रेज़ी में नहीं।" } },
        { question: "The plan was risky; ______, the board approved it.", options: ["moreover", "therefore", "however", "because"], answer: 2, explanation: { bn: "ঝুঁকি আর অনুমোদনের মধ্যে বিপরীত — however; moreover যোগ, therefore ফল বোঝায়।", en: "Risk and approval stand in contrast — however; moreover adds, therefore gives a result.", hi: "जोखिम और स्वीकृति में विरोध है — however; moreover जोड़ता है, therefore परिणाम देता है।" } },
        { question: "Sales fell sharply last quarter; ______, the company cut its costs.", options: ["however", "therefore", "nevertheless", "in spite of"], answer: 1, explanation: { bn: "বিক্রি পতন → খরচ কাটা — ফলের সম্পর্ক → therefore; nevertheless মানে হতো 'সত্ত্বেও'।", en: "Falling sales → cost cuts — a result relation → therefore; nevertheless would mean 'despite this'.", hi: "बिक्री गिरी → लागत कटौती — परिणाम का संबंध → therefore; nevertheless का अर्थ होता 'फिर भी'।" } },
        { question: "Where can the linking adverb 'however' appear?", options: ["Only at the beginning of a sentence", "Only at the end of a sentence", "At the start (plus comma), inside the clause (between commas), or at the end (after a comma)", "Anywhere without any comma"], answer: 2, explanation: { bn: "however-এর তিন আসন — প্রতিটা আসনের নিজস্ব কমার আইন আছে।", en: "However has three seats — each with its own comma law.", hi: "However की तीन सीटें — हर सीट का अपना comma-कानून।" } },
        { question: "Which sentence fixes the comma splice 'It was late, however we kept working'?", options: ["It was late, however, we kept working.", "It was late; however, we kept working.", "It was late however we kept working.", "It was late, and however we kept working."], answer: 1, explanation: { bn: "দুই পূর্ণ বাক্যের মাঝে however-এর আগে semicolon বাধ্যতামূলক; কমা একা যথেষ্ট নয়।", en: "A semicolon is mandatory before however between two full sentences; a bare comma never suffices.", hi: "दो पूरे वाक्यों के बीच however से पहले semicolon अनिवार्य; अकेला comma कभी काफ़ी नहीं।" } },
        { question: "We compared bus travel and train travel; ______ is cheaper but slower.", options: ["the former", "the latter", "the last one", "the first of former"], answer: 0, explanation: { bn: "দুটোর মধ্যে আগে উল্লিখিতটা (bus travel) the former।", en: "Of the two, the one mentioned first (bus travel) is the former.", hi: "दो में से पहले उल्लिखित (bus travel) the former है।" } },
        { question: "______ having very little experience, she got the job.", options: ["Although", "Despite", "Even though", "Because of"], answer: 1, explanation: { bn: "despite + -ing (having); although/even though-এর পরে পূর্ণ clause লাগত।", en: "despite + -ing (having); although/even though would need a full clause.", hi: "despite + -ing (having); although/even though को पूर्ण clause चाहिए।" } },
        { question: "Which version replaces 'and...and...and' most naturally? 'We visited the factory, and we interviewed workers, and we checked the records.'", options: ["We visited the factory, interviewed workers and checked the records.", "We visited the factory and interviewed workers and checked the records.", "We visited the factory, moreover we interviewed workers, moreover we checked the records.", "We visited the factory; and interviewed workers; and checked the records."], answer: 0, explanation: { bn: "একই সময়ের তিন কাজ parallel verbs-এ এক কমার স্রোতে — শেষ and-এর আগে কমা ঐচ্ছিক, বাকি and-গুলো গায়েব।", en: "Three simultaneous actions become parallel verbs in one comma stream — the extra ands vanish.", hi: "एक ही समय के तीन काम parallel verbs में एक comma-धारा में — अतिरिक्त and गायब।" } },
        { question: "Why is 'Although he is talented, but he is lazy' considered wrong?", options: ["'Although' cannot begin a sentence", "English allows only one connector per clause — the extra 'but' is a shadow of the Bengali double-marker habit", "'but' must always come first", "Nothing is wrong with it"], answer: 1, explanation: { bn: "বাংলা 'যদিও...কিন্তু' জোড়ার ছায়া — ইংরেজিতে এক clause-এ একটাই connector থাকে।", en: "It is the shadow of the Bengali 'যদিও...কিন্তু' pair — English keeps exactly one connector per clause.", hi: "यह 'जबकि...लेकिन' जोड़ी की छाया है — अंग्रेज़ी में प्रति clause एक ही connector।" } },
      ],
    },
  },

  /* ── 2. Collocations & Word Partnerships (Unit 5) ─────────────────── */
  {
    topic: "Collocations & Word Partnerships",
    level: "advanced",
    title: "Collocations & Word Partnerships",
    unit: 5,
    sortOrder: 4,
    data: {
      title: {
        bn: "কলোকেশন ও শব্দ-জুটি: স্বাভাবিক ইংরেজির চাবি",
        en: "Collocations & Word Partnerships",
        hi: "कोलोकेशन और शब्द-जोड़ी: सहज अंग्रेज़ी की चाबी",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি পঞ্চম ও শেষ পাঠ (Unit 5)। শুরু করার আগে intermediate স্তরের Phrasal Verbs এবং Common Mistakes by Bengali Speakers পাঠ দুটো শেষ করে নিন — phrasal verb-ও আসলে বড় পরিসরের collocation, আর common mistakes-এর বেশিরভাগই এখানকার নিয়মেরই ভাঙা রূপ। এই পাঠের মূল কথা: ইংরেজিতে শব্দ একা একা বেরোয় না, জুটিতে বেরোয়। বৃষ্টি হয় heavy, চা হয় strong, ভুল হয় big — কিন্তু বিনিময় করলেই বাক্য ব্যাকরণ-সঠিক থেকেও অদ্ভুত শোনায়। শিখব: collocation কী, কেন native-রা শব্দ নয় chunk মুখস্থ করে, do/make/take/have/give/pay-এর শত-জুটি, বাংলা 'করা'-র অনুবাদ-ছায়া, আর কীভাবে নোটবইয়ে পুরো ফ্রেজ ধরে রাখা যায়।",
        en: "This is the fifth and final lesson of the advanced Learning Path (Unit 5). Before starting, finish the intermediate lessons Phrasal Verbs and Common Mistakes by Bengali Speakers — a phrasal verb is really a collocation on a grander scale, and most common mistakes are just broken versions of this lesson's rules. The heart of the lesson: in English words do not leave home alone, they leave in pairs. Rain is heavy, tea is strong, a mistake is big — swap the partners and a grammatically correct sentence suddenly sounds strange. You will learn: what a collocation is, why natives memorise chunks rather than words, the hundred partnerships of do/make/take/have/give/pay, the translation shadow of Bengali 'করা', and how to keep whole phrases in your notebook.",
        hi: "यह एडवांस्ड Learning Path का पाँचवाँ और अंतिम पाठ है (Unit 5)। शुरू करने से पहले intermediate स्तर के Phrasal Verbs और Common Mistakes by Bengali Speakers पाठ पूरे करें — phrasal verb वास्तव में बड़े पैमाने की collocation है, और अधिकांश common mistakes इसी पाठ के नियमों के टूटे रूप हैं। पाठ की मूल बात: अंग्रेज़ी में शब्द अकेले निकलते नहीं, जोड़ी में निकलते हैं। बारिश heavy होती है, चाय strong, गलती big — साथी बदलते ही व्याकरण-सही वाक्य अजीब लगने लगता है। आप सीखेंगे: collocation क्या है, native शब्द नहीं chunk क्यों रटते हैं, do/make/take/have/give/pay की सौ-जोड़ियाँ, 'करना' की अनुवाद-छाया, और नोटबुक में पूरा वाक्यांश कैसे सँभालें।",
      },
      roadmap: [
        { bn: "🎯 Collocation কী — সঠিক নয়, স্বাভাবিক হওয়ার চাবি", en: "🎯 What a collocation is — the key to natural, not merely correct", hi: "🎯 collocation क्या है — केवल सही नहीं, सहज होने की चाबी" },
        { bn: "🧩 পাঁচ পরিবারে শব্দ-জুটি — এক টেবিলে পুরো ভাণ্ডার", en: "🧩 Five families of word partnerships — the whole map in one table", hi: "🧩 शब्द-जोड़ियों के पाँच परिवार — एक टेबल में पूरा नक़्शा" },
        { bn: "💡 light verb ও chunk — নোটবইয়ের তিন কৌশল", en: "💡 Light verbs and chunks — three notebook strategies", hi: "💡 light verb और chunk — नोटबुक की तीन रणनीति" },
        { bn: "⚖️ do বনাম make — 'করা'-র অনুবাদ-ফাঁদ", en: "⚖️ do vs make — escaping the 'করা' translation trap", hi: "⚖️ do बनाम make — 'करना' के अनुवाद-जाल से मुक्ति" },
        { bn: "🔄 open the light থেকে said a lie — calque শিকার", en: "🔄 From open the light to said a lie — hunting calques", hi: "🔄 open the light से said a lie तक — calque का शिकार" },
        { bn: "🎨 heavy rain না strong rain? সঙ্গী বাছাইয়ের রাজ্যসীমা", en: "🎨 heavy rain or strong rain? The kingdoms of adjective partners", hi: "🎨 heavy rain या strong rain? विशेषण-साथी के राज्य" },
        { bn: "⚠️ পাঁচ গোত্রের সূক্ষ্ম ভুল — ইন্টারভিউ-পরীক্ষায় পয়েন্ট কাটে", en: "⚠️ Five families of subtle errors — they cost marks in interviews and exams", hi: "⚠️ सूक्ष्म गलतियों के पाँच समूह — इंटरव्यू-परीक्षा में अंक काटती हैं" },
        { bn: "📖 অফিস-রিপোর্টের অনুচ্ছেদে জুটি শিকার", en: "📖 Pair hunting in an office-report paragraph", hi: "📖 ऑफिस-रिपोर्ट अनुच्छेद में जोड़ियों का शिकार" },
        { bn: "🧭 এক নজরে সাত নিয়ম + ডায়েরি অনুশীলন", en: "🧭 Seven rules at a glance + the diary exercise", hi: "🧭 एक नज़र में सात नियम + डायरी अभ्यास" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — সঠিক নয়, স্বাভাবিক হোন",
            en: "🎯 When to use them — aim for natural, not merely correct",
            hi: "🎯 कब इस्तेमाल होते हैं — केवल सही नहीं, सहज बनें",
          },
          lead: {
            bn: "শব্দ একা একা বেরোয় না, জুটিতে বেরোয় — এই পাঠের প্রথম সত্য এটাই।",
            en: "Words never leave home alone, they leave in pairs — the first truth of this lesson.",
            hi: "शब्द अकेले निकलते नहीं, जोड़ी में निकलते हैं — इस पाठ की पहली सच्चाई।",
          },
          points: [
            { bn: "**Collocation** — শব্দের নিয়মিত জুটি; ভাষার অভ্যাসে যারা সবসময় একসঙ্গে: take a photo, heavy rain, fast food, make a decision।", en: "**Collocation** — a habitual partnership of words; the language's habit always keeps them together: take a photo, heavy rain, fast food, make a decision.", hi: "**Collocation** — शब्दों की आदतन जोड़ी; भाषा की आदत में हमेशा साथ: take a photo, heavy rain, fast food, make a decision।" },
            { bn: "নেটিভ স্পিকার শব্দ জোড়া দিয়ে বাক্য বানায় না — পুরো chunk এক টানে টেনে বের করে।", en: "A native speaker never assembles a sentence word by word — the whole chunk is pulled out in one go.", hi: "Native वक्ता शब्द-दर-शब्द वाक्य नहीं जोड़ता — पूरा chunk एक ही खिंचाव में निकल आता है।" },
            { bn: "এজন্যই 'সঠিক' বাক্যও অদ্ভুত শোনায়: The strong rain spoiled our picnic — ব্যাকরণে ভুল নেই, কিন্তু কানে বাজে।", en: "That is why a 'correct' sentence can sound odd: The strong rain spoiled our picnic — no grammar rule broken, yet the ear protests.", hi: "इसीलिए 'सही' वाक्य भी अजीब लगता है: The strong rain spoiled our picnic — व्याकरण में चूक नहीं, पर कान बयान दे देता है।" },
            { bn: "সবচেয়ে বেশি দাবি — ইন্টারভিউ, পরীক্ষার লেখা, ইমেইল, presentation: প্রথম ছয় সেকেন্ডেই ভাষার মান ওজন হয়।", en: "They matter most — interviews, exam writing, emails, presentations: the listener weighs your language in the first six seconds.", hi: "सबसे ज़्यादा ज़रूरत — इंटरव्यू, परीक्षा-लेखन, ईमेल, प्रेज़ेंटेशन: पहले छह सेकंड में ही भाषा तौली जाती है।" },
            { bn: "বোনাস: chunk জানলে বলতে দ্রুত হয় — প্রতিটা শব্দ আলাদা করে ভাবতে হয় না, গোটা ফ্রেজ এক টানে আসে।", en: "Bonus: knowing chunks makes you faster — no word-by-word assembly, the whole phrase arrives in one pull.", hi: "बोनस: chunk याद हों तो बोलना तेज़ — हर शब्द अलग से नहीं सोचना पड़ता, पूरा वाक्यांश एक खिंचाव में आता है।" },
          ],
          examples: [
            { wrong: "The strong rain spoiled our picnic.", right: "The heavy rain spoiled our picnic.", note: { bn: "বৃষ্টির স্থায়ী সঙ্গী heavy — strong-এর জায়গা চা-কফির কাপে।", en: "Rain's permanent partner is heavy — strong belongs in the tea and coffee cup.", hi: "बारिश का स्थायी साथी heavy — strong चाय-कॉफ़ी के कप में रहता है।" } },
            { wrong: "I need a fast shower before the interview.", right: "I need a quick shower before the interview.", note: { bn: "shower-এর জুটি quick — fast খাবারের সঙ্গে চলে (fast food)।", en: "A shower pairs with quick — fast goes with food (fast food).", hi: "Shower की जोड़ी quick — fast खाने के साथ चलता है (fast food)।" } },
            { wrong: "She has a big experience in marketing.", right: "She has vast experience in marketing.", note: { bn: "experience (অগণনীয়) বড় হয় vast/extensive/considerable হয়ে — big নয়।", en: "Uncountable experience grows vast/extensive/considerable — not big.", hi: "अगणनीय experience vast/extensive/considerable होता है — big नहीं।" } },
            { wrong: "We made a party for his birthday.", right: "We had a party for his birthday.", note: { bn: "party-র সঙ্গী have/throw — make মানে দল তৈরি করা হয়ে যায়!", en: "The partners of party are have/throw — make would mean manufacturing a party!", hi: "party के साथी have/throw — make कहने पर पार्टी बनाने लगेगी!" } },
          ],
        },
        {
          heading: {
            bn: "🧩 গঠন — পাঁচ পরিবারে শব্দ-জুটি",
            en: "🧩 Formation — five families of word partnerships",
            hi: "🧩 गठन — शब्द-जोड़ियों के पाँच परिवार",
          },
          lead: {
            bn: "প্রসার-টেবিলের মতো পড়ুন — পাঁচ পরিবার চিনলে শত-জুটিও গোছানো লাগে।",
            en: "Read it like a prose table — five families keep even a hundred partnerships tidy.",
            hi: "गद्य-तालिका जैसा पढ़ें — पाँच परिवार चिन लें तो सौ-जोड़ियाँ भी व्यवस्थित लगती हैं।",
          },
          formula: {
            bn: "মাঝের শব্দ বদলায়: take a photo → take a video | জুটির সদস্য বদলায় না: make a photo (চলে না)",
            en: "The middle word can change: take a photo → take a video | the partners cannot: make a photo (wrong)",
            hi: "बीच का शब्द बदल सकता है: take a photo → take a video | साथी नहीं: make a photo (ग़लत)",
          },
          table: {
            head: [
              { bn: "জুটির ধরন", en: "Type", hi: "जोड़ी का प्रकार" },
              { bn: "উদাহরণ", en: "Examples", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "verb + noun", en: "verb + noun", hi: "verb + noun" }, { bn: "take a photo, pay attention, break the news, catch a cold, keep a promise, make progress", en: "take a photo, pay attention, break the news, catch a cold, keep a promise, make progress", hi: "take a photo, pay attention, break the news, catch a cold, keep a promise, make progress" }],
              [{ bn: "adjective + noun", en: "adjective + noun", hi: "adjective + noun" }, { bn: "heavy rain, strong tea, big mistake, deep sleep, close friend, tight deadline", en: "heavy rain, strong tea, big mistake, deep sleep, close friend, tight deadline", hi: "heavy rain, strong tea, big mistake, deep sleep, close friend, tight deadline" }],
              [{ bn: "adverb + adjective", en: "adverb + adjective", hi: "adverb + adjective" }, { bn: "deeply concerned, fully aware, bitterly cold, highly successful, wide awake", en: "deeply concerned, fully aware, bitterly cold, highly successful, wide awake", hi: "deeply concerned, fully aware, bitterly cold, highly successful, wide awake" }],
              [{ bn: "noun + noun (of-কাঠামো)", en: "noun + noun (of-structures)", hi: "noun + noun (of-ढाँचा)" }, { bn: "a bar of soap, a round of applause, a sense of humour", en: "a bar of soap, a round of applause, a sense of humour", hi: "a bar of soap, a round of applause, a sense of humour" }],
              [{ bn: "verb + adverb / adverb + verb", en: "verb + adverb / adverb + verb", hi: "verb + adverb / adverb + verb" }, { bn: "listen carefully, work hard, whisper softly", en: "listen carefully, work hard, whisper softly", hi: "listen carefully, work hard, whisper softly" }],
            ],
          },
          points: [
            { bn: "পাঁচ পরিবার টেবিলে দেওয়া — নতুন জুটি শুনলে প্রথমে ভাবুন, কোন পরিবারের।", en: "The five families sit in the table — when you hear a new pair, first ask which family it belongs to.", hi: "पाँच परिवार टेबल में दिए हैं — नई जोड़ी सुनें तो पहले सोचें, कौन-सा परिवार।" },
            { bn: "মনে রাখার সূত্র: জুটির মাঝের শব্দ বদলানো যায় (take a photo → take a video), কিন্তু জুটির সদস্য বদলানো যায় না (make a photo চলে না)।", en: "The rule to remember: the middle word can change (take a photo → take a video), but the partners cannot (make a photo does not work).", hi: "याद रखने का सूत्र: बीच का शब्द बदल सकता है (take a photo → take a video), पर साथी नहीं (make a photo नहीं चलता)।" },
            { bn: "তাই নতুন শব্দ শেখার দিনই তার নির্ধারিত সঙ্গীও নোট করুন — শব্দ নয়, জোড়া মুখস্থ।", en: "So from day one, note a new word together with its assigned partner — memorise the pair, not the lone word.", hi: "इसलिए नया शब्द सीखने के दिन से ही उसका तय साथी भी नोट करें — अकेला शब्द नहीं, जोड़ी रटें।" },
            { bn: "of-কাঠামোর noun + noun জুটি পরিমাপ-অভিব্যক্তির ভাণ্ডার — a bar of soap, a round of applause, a sense of humour।", en: "The noun + noun of-structures are a treasury of measure expressions — a bar of soap, a round of applause, a sense of humour.", hi: "of-ढाँचे की noun + noun जोड़ियाँ माप के ख़ज़ाने हैं — a bar of soap, a round of applause, a sense of humour।" },
          ],
          examples: [
            { wrong: "I will do a photo of the team.", right: "I will take a photo of the team.", note: { bn: "photo-র স্থায়ী ক্রিয়া-সঙ্গী take — ছবি 'তোলা' হয়, 'করা' হয় না।", en: "The permanent verb partner of photo is take — photos are taken, not done.", hi: "photo का स्थायी क्रिया-साथी take — फ़ोटो 'ली' जाती है, 'की' नहीं।" } },
            { wrong: "Please pay attention on the board.", right: "Please pay attention to the board.", note: { bn: "pay attention TO — জুটির সঙ্গে preposition-ও মুখস্থ; on এখানে বাংলা 'প্রতি' ছায়া।", en: "pay attention TO — memorise the preposition with the pair; on is the shadow of the Bengali 'প্রতি'.", hi: "pay attention TO — जोड़ी के साथ preposition भी रटें; on यहाँ हिंदी 'प्रति' की छाया है।" } },
            { wrong: "She gave a promise to return.", right: "She made a promise to return.", note: { bn: "promise-এর তিন সঙ্গী: make (করা), keep (রাখা), break (ভাঙা) — give কেউ দেয় না।", en: "Promise has three partners: make, keep, break — nobody gives it.", hi: "Promise के तीन साथी: make, keep, break — कोई उसे give नहीं करता।" } },
            { wrong: "We had a big sleep after the journey.", right: "We had a deep sleep after the journey.", note: { bn: "ঘুম হয় deep বা sound — big বড় জিনিসের সঙ্গী (big house, big mistake)।", en: "Sleep is deep or sound — big belongs to large objects (big house, big mistake).", hi: "नींद deep या sound होती है — big बड़ी चीज़ों का साथी है (big house, big mistake)।" } },
            { wrong: "Everyone is full aware of the new rules.", right: "Everyone is fully aware of the new rules.", note: { bn: "adverb+adjective জুটি: fully aware — full বিশেষণ এখানে ঢুকতে পারে না।", en: "The adverb+adjective pair is fully aware — the adjective full cannot sneak in.", hi: "adverb+adjective जोड़ी fully aware — विशेषण full यहाँ घुस नहीं सकता।" } },
          ],
        },
        {
          heading: {
            bn: "💡 আভাস ও প্যাটার্ন — light verb আর chunk শেখার কৌশল",
            en: "💡 Signals and patterns — light verbs and the chunk habit",
            hi: "💡 संकेत और पैटर्न — light verb और chunk की आदत",
          },
          lead: {
            bn: "শত-ভুলের ঠিকানা light verb — আর chunk-অভ্যাসই ওষুধ।",
            en: "Light verbs are where most mistakes live — the chunk habit is the cure.",
            hi: "ज़्यादातर चूक light verbs में होती है — chunk की आदत ही इलाज है।",
          },
          formula: {
            bn: "নোটবইয়ের নিয়ম: শব্দ + সঙ্গী-ক্রিয়া + (preposition) — pay attention to",
            en: "Notebook rule: word + partner verb + (preposition) — pay attention to",
            hi: "नोटबुक का नियम: शब्द + साथी-क्रिया + (preposition) — pay attention to",
          },
          points: [
            { bn: "সবচেয়ে বেশি ভুল **light verb**-গুলোতে — do, make, take, have, give, pay, catch, break, keep।", en: "Most mistakes happen with the **light verbs** — do, make, take, have, give, pay, catch, break, keep.", hi: "सबसे ज़्यादा चूक **light verbs** में — do, make, take, have, give, pay, catch, break, keep।" },
            { bn: "এরা শত শত noun-এর সঙ্গী হয়, আর প্রতিটা সঙ্গী আলাদা নিয়মে বাঁটা।", en: "They partner hundreds of nouns, and each partnership is handed out by its own rule.", hi: "ये सैकड़ों संज्ञाओं के साथी बनते हैं, और हर साथी अपने नियम से बँटता है।" },
            { bn: "কৌশল ১ — নোটবইয়ে কখনও একা শব্দ লেখেন না: attention নয়, pay attention to; photo নয়, take a photo।", en: "Strategy 1 — never write a lone word in your notebook: not attention but pay attention to; not photo but take a photo.", hi: "रणनीति 1 — नोटबुक में कभी अकेला शब्द न लिखें: attention नहीं, pay attention to; photo नहीं, take a photo।" },
            { bn: "কৌশল ২ — নতুন শব্দে প্রশ্ন করুন: এর সঙ্গী কে? ডিকশনারির example sentence-গুলোতেই উত্তর লুকানো।", en: "Strategy 2 — when you meet a new word, ask: who is its partner? The dictionary's example sentences hold the answer.", hi: "रणनीति 2 — नए शब्द पर पूछें: उसका साथी कौन? डिक्शनरी के example वाक्यों में जवाब छिपा है।" },
            { bn: "কৌশল ৩ — chunk-এর সঙ্গে register-ও নোট করুন: have a chat কথ্য, hold a discussion লেখ্য।", en: "Strategy 3 — note the register with the chunk: have a chat is casual, hold a discussion is formal.", hi: "रणनीति 3 — chunk के साथ register भी नोट करें: have a chat बोलचाल का, hold a discussion औपचारिक।" },
            { bn: "জুটি ভাঙা যায় না, কিন্তু ভেতরের noun বদলাতে পারে — pay attention / pay close attention / pay no attention।", en: "The partnership cannot be broken, but the noun inside can vary — pay attention / pay close attention / pay no attention.", hi: "जोड़ी टूटती नहीं, पर भीतर की संज्ञा बदल सकती है — pay attention / pay close attention / pay no attention।" },
            { bn: "মূল কাঠামো ধরে রাখুন — বিশেষণ ছায়ার মতো ঢুকতে দিন।", en: "Hold the core frame — let adjectives slip in like shadows.", hi: "मूल ढाँचा पकड़े रखें — विशेषण छाया की तरह घुसने दें।" },
          ],
          examples: [
            { wrong: "I learned the word 'attention' yesterday.", right: "I learned the phrase 'pay attention to' yesterday.", note: { bn: "শব্দ নয়, chunk — নোটবইয়ের প্রথম নিয়ম; একা attention ব্যবহারের সময়ই ভুল হবে।", en: "The chunk, not the word — the notebook's first rule; a lone attention will stumble the moment you use it.", hi: "शब्द नहीं, chunk — नोटबुक का पहला नियम; अकेला attention इस्तेमाल में ही ठोकर खाएगा।" } },
            { wrong: "He did a lot of mistakes in the exam.", right: "He made a lot of mistakes in the exam.", note: { bn: "mistake-র সঙ্গী make — do মানে কাজ চালানো, mistake তো ফল হয়ে জন্মায়।", en: "Mistake partners with make — do runs tasks, but a mistake is born as a result.", hi: "Mistake का साथी make — do काम चलाता है, गलती परिणाम बनकर जन्मती है।" } },
            { wrong: "We did a meeting with the client.", right: "We had a meeting with the client.", note: { bn: "meeting-এর সঙ্গী have/arrange/attend — সভা হয়, করা হয় না।", en: "Meeting pairs with have/arrange/attend — meetings are had, not done.", hi: "Meeting के साथी have/arrange/attend — बैठक 'होती' है, 'की' नहीं जाती।" } },
            { wrong: "She took a quick decision.", right: "She made a quick decision.", note: { bn: "সিদ্ধান্ত make হয়; take a decision দক্ষিণ এশিয়ার অফিসি-ইংরেজির অভ্যাস — আন্তর্জাতিক লেখায় made।", en: "Decisions are made; take a decision is a South-Asian officialese habit — international writing prefers made.", hi: "निर्णय make होता है; take a decision दक्षिण एशियाई दफ़्तरी अंग्रेज़ी की आदत है — अंतरराष्ट्रीय लेखन में made।" } },
          ],
        },
        {
          heading: {
            bn: "⚖️ do বনাম make — বাংলা 'করা'-র দুই মুখ",
            en: "⚖️ do vs make — the two faces of Bengali 'করা'",
            hi: "⚖️ do बनाम make — हिंदी 'करना' के दो रूप",
          },
          lead: {
            bn: "বাংলা 'করা' দুই কাজ একসঙ্গে করে; ইংরেজি ভার ভাগ করে দুই ভাইকে।",
            en: "Bengali 'করা' does two jobs at once; English splits the load between two brothers.",
            hi: "हिंदी 'करना' दोनों काम एक साथ करता है; अंग्रेज़ी बोझ बाँटती है दो भाइयों में।",
          },
          formula: {
            bn: "কিছু জন্মাচ্ছে / ফল বেরোচ্ছে → make | কাজ চলছে / সম্পন্ন হচ্ছে → do",
            en: "Something coming into being / a result emerging → make | a task running / being completed → do",
            hi: "कुछ जन्म रहा है / परिणाम निकल रहा है → make | काम चल रहा है / पूरा हो रहा है → do",
          },
          table: {
            head: [
              { bn: "ক্রিয়া", en: "Verb", hi: "क्रिया" },
              { bn: "কাজ", en: "Job", hi: "काम" },
              { bn: "জুটি", en: "Partnerships", hi: "जोड़ियाँ" },
            ],
            rows: [
              [{ bn: "do", en: "do", hi: "do" }, { bn: "কর্মকাণ্ড, দায়িত্ব, পুনরাবৃত্ত কাজ", en: "activities, duties, repeated work", hi: "गतिविधि, कर्तव्य, दोहराया काम" }, { bn: "do homework, do the dishes, do business, do research, do a favour, do harm, do well", en: "do homework, do the dishes, do business, do research, do a favour, do harm, do well", hi: "do homework, do the dishes, do business, do research, do a favour, do harm, do well" }],
              [{ bn: "make", en: "make", hi: "make" }, { bn: "তৈরি, উৎপাদন, ফলাফল জন্মানো", en: "creating, producing, results being born", hi: "निर्माण, उत्पादन, परिणाम का जन्म" }, { bn: "make a mistake, make a decision, make money, make noise, make progress, make friends, make sure, make the bed", en: "make a mistake, make a decision, make money, make noise, make progress, make friends, make sure, make the bed", hi: "make a mistake, make a decision, make money, make noise, make progress, make friends, make sure, make the bed" }],
            ],
          },
          points: [
            { bn: "বাংলা 'করা' দুটো কাজই করে — কাজ চালানো আর কিছু তৈরি করা; ইংরেজি সেই ভার দুই ভাইয়ের মধ্যে ভাগ করেছে।", en: "Bengali 'করা' does both jobs — running a task and creating something; English splits that load between two brothers.", hi: "हिंदी 'करना' दोनों काम करता है — काम चलाना और कुछ बनाना; अंग्रेज़ी ने वह बोझ दो भाइयों में बाँट दिया।" },
            { bn: "**do** = কর্মকাণ্ড, দায়িত্ব, পুনরাবৃত্ত কাজ: do homework, do the dishes, do business, do research, do a favour।", en: "**do** = activities, duties, repeated work: do homework, do the dishes, do business, do research, do a favour.", hi: "**do** = गतिविधि, कर्तव्य, दोहराया काम: do homework, do the dishes, do business, do research, do a favour।" },
            { bn: "**make** = তৈরি, উৎপাদন, ফলাফল জন্মানো: make a mistake, make a decision, make money, make noise, make progress, make friends।", en: "**make** = creating, producing, results being born: make a mistake, make a decision, make money, make noise, make progress, make friends.", hi: "**make** = निर्माण, उत्पादन, परिणाम का जन्म: make a mistake, make a decision, make money, make noise, make progress, make friends।" },
            { bn: "মোটা সূত্র: কিছু জন্মাচ্ছে বা ফল বেরোচ্ছে → make; কাজ চলছে বা সম্পন্ন হচ্ছে → do।", en: "The broad rule: something is coming into being or a result is emerging → make; a task is running or being completed → do.", hi: "मोटा सूत्र: कुछ जन्म रहा है या परिणाम निकल रहा है → make; काम चल रहा है या पूरा हो रहा है → do।" },
            { bn: "তবু শেষ কথা অভ্যাসের — do someone a favour, make the bed-এর মতো জুটি শুধু মুখস্থই হতে হবে।", en: "Still, the last word is habit — pairs like do someone a favour and make the bed must simply be memorised.", hi: "फिर भी अंतिम बात आदत की है — do someone a favour और make the bed जैसी जोड़ियाँ रटनी ही पड़ेंगी।" },
            { bn: "কারণ সূত্র এখানে চুপচাপ — অভ্যাসই একমাত্র শিক্ষক।", en: "Because the rule falls silent there — habit is the only teacher.", hi: "क्योंकि सूत्र वहाँ मौन है — आदत ही एकमात्र शिक्षक।" },
          ],
          examples: [
            { wrong: "I have to make my homework tonight.", right: "I have to do my homework tonight.", note: { bn: "homework = কর্মকাণ্ড → do; বাংলা 'হোমওয়ার্ক করা' রূপটা make টেনে আনে।", en: "Homework is an activity → do; the Bengali 'হোমওয়ার্ক করা' drags make in.", hi: "Homework = गतिविधि → do; 'होमवर्क करना' की छाया make खींच लाती है।" } },
            { wrong: "We did a big mistake in the invoice.", right: "We made a big mistake in the invoice.", note: { bn: "mistake = জন্মানো ফল → make; mistake-র সঙ্গে do কখনও নেই।", en: "A mistake is a born result → make; do never partners mistake.", hi: "Mistake = जन्मा परिणाम → make; mistake के साथ do कभी नहीं।" } },
            { wrong: "She made research for two years.", right: "She did research for two years.", note: { bn: "research = দীর্ঘ কর্মকাণ্ড → do; সাথে uncountable — 'a research' নয়।", en: "Research is a long activity → do; and it is uncountable — no 'a research'.", hi: "Research = लंबी गतिविधि → do; और अगणनीय है — 'a research' नहीं।" } },
            { wrong: "He did a promise to call every day.", right: "He made a promise to call every day.", note: { bn: "promise = জন্মানো বাক্য → make; রাখলে keep, ভাঙলে break।", en: "A promise is a created utterance → make; kept it becomes keep, broken becomes break.", hi: "Promise = बनाया गया वचन → make; निभाया तो keep, टूटा तो break।" } },
            { wrong: "The child is doing noise again.", right: "The child is making noise again.", note: { bn: "noise, progress, money, friends — সব 'জন্মে' বলে make-পরিবার।", en: "Noise, progress, money, friends — all 'born', so all in the make family.", hi: "Noise, progress, money, friends — सब 'जन्मते' हैं, इसलिए make-परिवार में।" } },
          ],
        },
        {
          heading: {
            bn: "🔄 বাংলা calque — এক ক্রিয়ার দাসত্ব থেকে মুক্তি",
            en: "🔄 Bengali calques — escaping the one-verb servitude",
            hi: "🔄 बांग्ला calque — एक-क्रिया की दासता से मुक्ति",
          },
          lead: {
            bn: "হুবহু অনুবাদের ছাপ কানে ধরা পড়ে — চার ক্লাসিক ছায়া এখানে ধরা।",
            en: "Literal translation leaves fingerprints on the ear — four classic shadows caught here.",
            hi: "शब्दशः अनुवाद के निशान कान तक आते हैं — चार क्लासिक छायाएँ यहाँ पकड़ी गईं।",
          },
          table: {
            head: [
              { bn: "বাংলা ছায়া (ভুল)", en: "Calque shadow (wrong)", hi: "अनुवाद-छाया (ग़लत)" },
              { bn: "সঠিক ইংরেজি জুটি", en: "The natural English pair", hi: "सहज अंग्रेज़ी जोड़ी" },
            ],
            rows: [
              [{ bn: "open the light", en: "open the light", hi: "open the light" }, { bn: "turn on the light", en: "turn on the light", hi: "turn on the light" }],
              [{ bn: "close the fan", en: "close the fan", hi: "close the fan" }, { bn: "turn off the fan", en: "turn off the fan", hi: "turn off the fan" }],
              [{ bn: "gave an exam", en: "gave an exam", hi: "gave an exam" }, { bn: "took an exam", en: "took an exam", hi: "took an exam" }],
              [{ bn: "said a lie", en: "said a lie", hi: "said a lie" }, { bn: "told a lie", en: "told a lie", hi: "told a lie" }],
              [{ bn: "made a party", en: "made a party", hi: "made a party" }, { bn: "had / threw a party", en: "had / threw a party", hi: "had / threw a party" }],
            ],
          },
          points: [
            { bn: "**Calque** — হুবহু অনুবাদের ছায়া; বাংলা বাক্যের গড়ন ইংরেজি শব্দে ঢেলে দেওয়া।", en: "**Calque** — the shadow of a literal translation; the Bengali sentence's frame poured into English words.", hi: "**Calque** — शब्दशः अनुवाद की छाया; हिंदी वाक्य का ढाँचा अंग्रेज़ी शब्दों में उड़ेल देना।" },
            { bn: "'লাইট অন করো' → open the light; 'ফ্যান বন্ধ করো' → close the fan — ক্লাসিক ছাপ।", en: "'লাইট অন করো' → open the light; 'ফ্যান বন্ধ করো' → close the fan — classic fingerprints.", hi: "'लाइट ऑन करो' → open the light; 'पंखा बंद करो' → close the fan — क्लासिक निशान।" },
            { bn: "'পরীক্ষা দিলাম' → gave an exam; 'মিথ্যা বলেছি' → said a lie — আরও দুই ছাপ।", en: "'পরীক্ষা দিলাম' → gave an exam; 'মিথ্যা বলেছি' → said a lie — two more fingerprints.", hi: "'परीक्षा दी' → gave an exam; 'झूठ बोला' → said a lie — दो और निशान।" },
            { bn: "আসল নিয়ম: বিদ্যুৎ-যন্ত্র turn on/turn off হয়; open/close শুধু বই, দরজা, জানালা, বোতল।", en: "The real rules: electrical devices turn on/turn off; open and close serve only books, doors, windows and bottles.", hi: "असली नियम: बिजली के यंत्र turn on/turn off होते हैं; open/close केवल किताब, दरवाज़ा, खिड़की, बोतल के लिए।" },
            { bn: "পরীক্ষা শিক্ষার্থী take করে; শিক্ষক give/conduct করে।", en: "The student takes an exam; the teacher gives/conducts it.", hi: "परीक्षा विद्यार्थी take करता है; शिक्षक give/conduct करता है।" },
            { bn: "মিথ্যা tell হয় — tell a lie, tell the truth, tell a story: গল্প-মিথ্যা-সত্য সব কানে পৌঁছানোর ব্যাপার।", en: "A lie is told — tell a lie, tell the truth, tell a story: tales, lies and truths all reach the ear.", hi: "झूठ tell होता है — tell a lie, tell the truth, tell a story: कहानी-झूठ-सच सब कान तक पहुँचने के विषय।" },
            { bn: "সমাধান একটাই: ক্রিয়া অনুবাদ করবেন না — পুরো অভিব্যক্তির ইংরেজি জুটি শিখে নিন।", en: "One solution only: do not translate the verb — learn the whole English partnership of the expression.", hi: "एक ही समाधान: क्रिया का अनुवाद न करें — पूरे भाव की अंग्रेज़ी जोड़ी सीख लें।" },
          ],
          examples: [
            { wrong: "Please open the light; the room is dark.", right: "Please turn on the light; the room is dark.", note: { bn: "লাইট-ফ্যান-টিভি-এসি turn on/off হয় — open/close তাদের প্রাণ নেয় না।", en: "Lights, fans, TVs and ACs turn on/off — open/close never touches them.", hi: "लाइट-पंखा-टीवी-एसी turn on/off होते हैं — open/close उन्हें छूते नहीं।" } },
            { wrong: "Close the TV before you sleep.", right: "Turn off the TV before you sleep.", note: { bn: "একই নিয়ম উল্টো দিকে — বন্ধ করাও switch off/turn off।", en: "The same rule from the other side — switching off is switch off/turn off.", hi: "वही नियम उलटी दिशा में — बंद करना भी switch off/turn off।" } },
            { wrong: "I gave the IELTS exam last month.", right: "I took the IELTS exam last month.", note: { bn: "'পরীক্ষা দেওয়া' বাংলা প্রবাদ-রূপ; ইংরেজিতে শিক্ষার্থী take করে, give করে পরীক্ষক।", en: "'Giving an exam' is the Bengali idiom's shadow; in English the student takes it — the examiner gives it.", hi: "'परीक्षा देना' हिंदी मुहावरे की छाया; अंग्रेज़ी में विद्यार्थी take करता है — परीक्षक give।" } },
            { wrong: "He said a lie to hide the delay.", right: "He told a lie to hide the delay.", note: { bn: "মিথ্যা tell হয় — tell a lie / tell the truth; say-এর পরে শুধু উদ্ধৃত কথা আসে।", en: "A lie is told — tell a lie / tell the truth; say only carries quoted words.", hi: "झूठ tell होता है — tell a lie / tell the truth; say के बाद केवल कथन आता है।" } },
            { wrong: "We will do a party after the results.", right: "We will have a party after the results.", note: { bn: "'আড্ডা/পার্টি করা' বাংলা অভ্যাস — ইংরেজিতে have a party / throw a party।", en: "'Doing a party' is a Bengali habit — English has a party / throws a party.", hi: "'पार्टी करना' देसी आदत है — अंग्रेज़ी में have a party / throw a party।" } },
          ],
        },
        {
          heading: {
            bn: "🎨 adjective+noun ও adverb+adjective — সঠিক সঙ্গী বাছাই",
            en: "🎨 adjective+noun and adverb+adjective — picking the exact partner",
            hi: "🎨 adjective+noun और adverb+adjective — सटीक साथी का चयन",
          },
          lead: {
            bn: "তিন adjective, তিন নিজস্ব রাজ্য — রাজ্য বদলালেই বাক্য অদ্ভুত।",
            en: "Three adjectives, three private kingdoms — cross the border and the sentence turns strange.",
            hi: "तीन विशेषण, तीन निजी राज्य — सीमा लाँघते ही वाक्य अजीब हो जाता है।",
          },
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "নির্ধারিত সঙ্গী", en: "Its partner", hi: "तय साथी" },
              { bn: "সঙ্গী নয়", en: "Not a partner", hi: "साथी नहीं" },
            ],
            rows: [
              [{ bn: "rain", en: "rain", hi: "rain" }, { bn: "heavy", en: "heavy", hi: "heavy" }, { bn: "strong", en: "strong", hi: "strong" }],
              [{ bn: "tea / coffee", en: "tea / coffee", hi: "tea / coffee" }, { bn: "strong", en: "strong", hi: "strong" }, { bn: "heavy", en: "heavy", hi: "heavy" }],
              [{ bn: "sleep", en: "sleep", hi: "sleep" }, { bn: "deep / sound", en: "deep / sound", hi: "deep / sound" }, { bn: "big", en: "big", hi: "big" }],
              [{ bn: "schedule", en: "schedule", hi: "schedule" }, { bn: "tight", en: "tight", hi: "tight" }, { bn: "tightly", en: "tightly", hi: "tightly" }],
              [{ bn: "awake", en: "awake", hi: "awake" }, { bn: "wide", en: "wide", hi: "wide" }, { bn: "total", en: "total", hi: "total" }],
            ],
          },
          points: [
            { bn: "**heavy rain, strong tea, big mistake** — তিন adjective, তিন নিজস্ব রাজ্য; রাজ্য বদলালেই বাক্য অদ্ভুত: strong rain, heavy tea, large mistake।", en: "**heavy rain, strong tea, big mistake** — three adjectives, three private kingdoms; cross the border and the sentence turns strange: strong rain, heavy tea, large mistake.", hi: "**heavy rain, strong tea, big mistake** — तीन विशेषण, तीन निजी राज्य; सीमा लाँघते ही वाक्य अजीब: strong rain, heavy tea, large mistake।" },
            { bn: "আরও সমৃদ্ধ জুটি — heavy traffic, strong coffee, deep sleep, sound sleep, close friend, tight schedule, serious mistake, fatal accident।", en: "Richer pairs — heavy traffic, strong coffee, deep sleep, sound sleep, close friend, tight schedule, serious mistake, fatal accident.", hi: "समृद्ध जोड़ियाँ — heavy traffic, strong coffee, deep sleep, sound sleep, close friend, tight schedule, serious mistake, fatal accident।" },
            { bn: "**adverb+adjective** পরিবার — deeply concerned/sorry/moved, fully aware, bitterly disappointed/cold, highly successful/unlikely।", en: "The **adverb+adjective** family — deeply concerned/sorry/moved, fully aware, bitterly disappointed/cold, highly successful/unlikely.", hi: "**adverb+adjective** परिवार — deeply concerned/sorry/moved, fully aware, bitterly disappointed/cold, highly successful/unlikely।" },
            { bn: "fixed জুটি মুখস্থ — wide awake, fast asleep, badly damaged।", en: "Fixed pairs to memorise — wide awake, fast asleep, badly damaged.", hi: "स्थिर जोड़ियाँ रटें — wide awake, fast asleep, badly damaged।" },
            { bn: "এদের কোনো ব্যাকরণ-নিয়ম নেই — ব্যবহার-ঘনত্বই নিয়ম; ভাষা সময়ের সাথে জুটিগুলো বাছাই করেছে।", en: "There is no grammar rule here — frequency of use is the rule; the language has chosen these pairs over time.", hi: "यहाँ कोई व्याकरण-नियम नहीं — प्रयोग की आवृत्ति ही नियम है; भाषा ने समय के साथ ये जोड़ियाँ चुनी हैं।" },
            { bn: "শেখার একমাত্র পথ — reading-এ জুটি শিকার: প্রতিটা adjective-এর পাশে কী বসে চোখ রাখুন।", en: "The only road to mastery — hunting pairs while reading: watch what sits beside every adjective.", hi: "सीखने का एकमात्र रास्ता — पढ़ते समय जोड़ियों का शिकार: हर विशेषण के पास क्या बैठता है देखें।" },
            { bn: "নোটবইয়ে পুরো ফ্রেজ তুলে রাখুন — adjective আলাদা করে নয়।", en: "Store the whole phrase in your notebook — never the adjective on its own.", hi: "नोटबुक में पूरा वाक्यांश रखें — विशेषण अलग से नहीं।" },
          ],
          examples: [
            { wrong: "Due to the strong rain, the match was called off.", right: "Due to the heavy rain, the match was called off.", note: { bn: "rain-এর সিংহাসনে heavy; strong-এর রাজ্য চা-কফি-পাহাড় (strong tea, strong wind-এর মতো ব্যতিক্রম বাদে)।", en: "heavy sits on rain's throne; strong rules tea, coffee and argument (with exceptions like strong wind).", hi: "rain के सिंहासन पर heavy; strong चाय, कॉफ़ी और तर्क का राजा है (strong wind जैसे अपवाद छोड़)।" } },
            { wrong: "She drank a heavy tea after lunch.", right: "She drank strong tea after lunch.", note: { bn: "উল্টো ভুলও ঘটে — চায়ের জোর strong-এ; heavy মানে ওজন বা ফোঁটা-ঘনত্ব।", en: "The reverse error happens too — tea takes strong; heavy means weight or density.", hi: "उलटी चूक भी होती है — चाय strong लेती है; heavy का अर्थ भार या घनत्व।" } },
            { wrong: "We are strongly worried about the deadline.", right: "We are deeply worried about the deadline.", note: { bn: "worried-এর সঙ্গী deeply/seriously/badly — strongly বিশ্বাস-মতভেদের জগতে (strongly believe, strongly oppose)।", en: "Worried partners with deeply/seriously/badly — strongly belongs to belief and disagreement (strongly believe, strongly oppose).", hi: "Worried के साथ deeply/seriously/badly — strongly विश्वास और मतभेद की दुनिया में है (strongly believe, strongly oppose)।" } },
            { wrong: "After the coffee I was total awake.", right: "After the coffee I was wide awake.", note: { bn: "fixed জুটি: wide awake (পুরোপুরি জেগে) আর fast asleep (গভীর ঘুমে) — দুটোই মুখস্থ।", en: "Fixed pairs: wide awake (fully alert) and fast asleep (deep asleep) — both must be memorised.", hi: "स्थिर जोड़ियाँ: wide awake (पूरी तरह जागता) और fast asleep (गहरी नींद में) — दोनों रटें।" } },
            { wrong: "They made a tightly schedule for the launch.", right: "They made a tight schedule for the launch.", note: { bn: "schedule-এর সঙ্গী tight; জুটি বাঁধার আগে adjective-টা রূপ বদলায় না।", en: "Schedule pairs with tight; the adjective never changes form to fit the pair.", hi: "Schedule का साथी tight; जोड़ी बनने से पहले विशेषण रूप नहीं बदलता।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "গড়ন ঠিক থাকে বলেই এই ভুল ব্যাকরণের চশমায় ধরা পড়ে না।",
            en: "Because the structure stays correct, these errors escape the grammar lens.",
            hi: "ढाँचा सही रहता है, इसलिए ये गलतियाँ व्याकरण के चश्मे से नहीं पकड़ में आतीं।",
          },
          points: [
            { bn: "Advanced collocation-ভুলের লক্ষণ — গড়ন ঠিক, শব্দ-জুটি ভুল; তাই ব্যাকরণের চশমায় ধরা পড়ে না।", en: "The sign of an advanced collocation error — structure correct, partnership wrong; so the grammar lens misses it.", hi: "Advanced collocation-चूक की पहचान — ढाँचा सही, जोड़ी ग़लत; इसलिए व्याकरण के चश्मे से नहीं पकड़ में आती।" },
            { bn: "**preposition-সঙ্গী** — pay attention on → pay attention TO; depend OF-জাতীয় ভুলও এই পরিবারে।", en: "**Preposition partners** — pay attention on → pay attention TO; the depend OF family lives here too.", hi: "**preposition-साथी** — pay attention on → pay attention TO; depend OF जैसी चूकें भी इसी परिवार की।" },
            { bn: "**অগণনীয় বিশেষ্যের ভুল ক্রিয়া** — do a research → do research; make a research-ও ভুল।", en: "**Wrong verbs with uncountable nouns** — do a research → do research; make a research is equally wrong.", hi: "**अगणनीय संज्ञा के साथ ग़लत क्रिया** — do a research → do research; make a research भी ग़लत।" },
            { bn: "**অফিসি-ইংরেজির জীবাশ্ম** — take a decision → make a decision; do the needful, kindly do the favour।", en: "**South-Asian officialese fossils** — take a decision → make a decision; do the needful, kindly do the favour.", hi: "**दफ़्तरी अंग्रेज़ी के जीवाश्म** — take a decision → make a decision; do the needful, kindly do the favour।" },
            { bn: "**শরীর আর অনুভূতির জুটি** — strong headache নয়, bad/severe/slight headache; heavy pain নয়, severe/sharp pain।", en: "**Body-and-feeling pairs** — not strong headache but bad/severe/slight headache; not heavy pain but severe/sharp pain.", hi: "**शरीर-भावना की जोड़ियाँ** — strong headache नहीं, bad/severe/slight headache; heavy pain नहीं, severe/sharp pain।" },
            { bn: "**সিদ্ধান্ত-খবরের ক্রিয়া** — give a decision নয়, make/reach a decision; say the news নয়, break/announce the news।", en: "**Verbs of decision and news** — not give a decision but make/reach a decision; not say the news but break/announce the news.", hi: "**निर्णय-समाचार की क्रियाएँ** — give a decision नहीं, make/reach a decision; say the news नहीं, break/announce the news।" },
            { bn: "এই পাঁচ দল ইন্টারভিউ-পরীক্ষা দুই জায়গাতেই পয়েন্ট কাটে।", en: "These five groups cost points in interviews and exams alike.", hi: "ये पाँच समूह इंटरव्यू और परीक्षा दोनों में अंक काटते हैं।" },
          ],
          examples: [
            { wrong: "We must pay more attention on pronunciation.", right: "We must pay more attention to pronunciation.", note: { bn: "pay attention TO — preposition জুটির অংশ, আলাদা কোনো নিয়ম নেই।", en: "pay attention TO — the preposition is part of the partnership, with no separate rule.", hi: "pay attention TO — preposition जोड़ी का हिस्सा है, अलग कोई नियम नहीं।" } },
            { wrong: "The committee took a decision yesterday.", right: "The committee made a decision yesterday.", note: { bn: "আন্তর্জাতিক প্রমিত ইংরেজিতে সিদ্ধান্ত make/reach হয়; take a decision দক্ষিণ এশিয়ার দাপ্তরিক রং।", en: "In standard international English decisions are made/reached; take a decision is South-Asian officialese.", hi: "प्रमित अंतरराष्ट्रीय अंग्रेज़ी में निर्णय make/reach होता है; take a decision दक्षिण एशियाई दाप्तरिक रंग है।" } },
            { wrong: "He is doing good progress in speaking.", right: "He is making good progress in speaking.", note: { bn: "progress 'জন্মায়' বলে make-পরিবার; সাথে uncountable — বহুবচন নেই।", en: "Progress is 'born', so it sits in the make family; uncountable too — no plural.", hi: "Progress 'जन्मता' है, इसलिए make-परिवार में; अगणनीय भी — कोई बहुवचन नहीं।" } },
            { wrong: "I have a strong headache today.", right: "I have a bad headache today.", note: { bn: "ব্যথার জোর bad/severe/slight/splitting — strong শুধু চা-কফি-বাতাস-যুক্তির সঙ্গী।", en: "Pain takes bad/severe/slight/splitting — strong is reserved for tea, coffee, wind and arguments.", hi: "दर्द bad/severe/slight/splitting लेता है — strong चाय, कॉफ़ी, हवा और तर्क के लिए आरक्षित।" } },
            { wrong: "She gave an important decision in the meeting.", right: "She made an important decision in the meeting.", note: { bn: "সিদ্ধান্ত make/announce/reach হয় — give করে শুধু পরীক্ষা বা উপহার।", en: "Decisions are made/announced/reached — giving is for exams and gifts.", hi: "निर्णय make/announce/reach होता है — give परीक्षा और उपहार के लिए।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক",
            en: "📖 Seen in a short piece of writing",
            hi: "📖 छोटे लेखन में देखिए",
          },
          lead: {
            bn: "অফিস-রিপোর্টের সুরে আস্ত এক অনুচ্ছেদ — পাঠের জুটিগুলো একসঙ্গে কাজ করছে।",
            en: "One whole paragraph in an office-report voice — every pair of the lesson at work.",
            hi: "ऑफिस-रिपोर्ट के सुर में एक पूरा अनुच्छेद — पाठ की सारी जोड़ियाँ एक साथ काम पर।",
          },
          points: [
            { bn: "নিচের অনুচ্ছেদটা একটা অফিস-রিপোর্টের সুরে লেখা — পাঠের জুটিগুলো একসঙ্গে কাজ করছে।", en: "The paragraph below is written in an office-report voice — the lesson's pairs are all at work.", hi: "नीचे का अनुच्छेद ऑफिस-रिपोर्ट के सुर में लिखा है — पाठ की जोड़ियाँ एक साथ काम कर रही हैं।" },
            { bn: "প্রথম অংশ: 'Last week our team had to prepare a client presentation in two days. We made a tight schedule and paid close attention to every slide. Despite heavy rain on the final evening, we stayed fully aware of the deadline and finished the deck before midnight.'", en: "First part: 'Last week our team had to prepare a client presentation in two days. We made a tight schedule and paid close attention to every slide. Despite heavy rain on the final evening, we stayed fully aware of the deadline and finished the deck before midnight.'", hi: "पहला भाग: 'Last week our team had to prepare a client presentation in two days. We made a tight schedule and paid close attention to every slide. Despite heavy rain on the final evening, we stayed fully aware of the deadline and finished the deck before midnight.'" },
            { bn: "শেষ অংশ: 'In the meeting the client raised a serious question about costs; our manager broke the news gently and did her best to keep the discussion calm. We made a few small mistakes, of course, but the client was deeply impressed, and we took detailed notes for the next project.'", en: "Final part: 'In the meeting the client raised a serious question about costs; our manager broke the news gently and did her best to keep the discussion calm. We made a few small mistakes, of course, but the client was deeply impressed, and we took detailed notes for the next project.'", hi: "अंतिम भाग: 'In the meeting the client raised a serious question about costs; our manager broke the news gently and did her best to keep the discussion calm. We made a few small mistakes, of course, but the client was deeply impressed, and we took detailed notes for the next project.'" },
            { bn: "শিকার-তালিকা: made a tight schedule, paid close attention, heavy rain, fully aware, broke the news, made a few small mistakes, deeply impressed, took detailed notes।", en: "The hunting list: made a tight schedule, paid close attention, heavy rain, fully aware, broke the news, made a few small mistakes, deeply impressed, took detailed notes.", hi: "शिकार-सूची: made a tight schedule, paid close attention, heavy rain, fully aware, broke the news, made a few small mistakes, deeply impressed, took detailed notes।" },
          ],
          examples: [
            { wrong: "We did a tight schedule for the launch.", right: "We made a tight schedule for the launch.", note: { bn: "schedule 'তৈরি' হয় → make; সঙ্গী adjective tight।", en: "A schedule is 'created' → make; its adjective partner is tight.", hi: "Schedule 'बनाया' जाता है → make; साथी विशेषण tight।" } },
            { wrong: "The manager said the bad news gently.", right: "The manager broke the bad news gently.", note: { bn: "খারাপ খবর জানানো = break the news — said the news unnatural।", en: "Delivering bad news = break the news — said the news is unnatural.", hi: "बुरी खबर देना = break the news — said the news असहज है।" } },
            { wrong: "The client was strong impressed.", right: "The client was deeply impressed.", note: { bn: "impressed-এর সঙ্গী deeply/highly/very — strong বিশেষণ, adverb নয়।", en: "Impressed partners with deeply/highly/very — strong is an adjective, not an adverb.", hi: "Impressed के साथ deeply/highly/very — strong विशेषण है, क्रिया-विशेषण नहीं।" } },
            { wrong: "We took attention to every detail.", right: "We paid close attention to every detail.", note: { bn: "pay attention to — take attention বলে কিছু নেই; বিশেষণ close/brief/no বসতে পারে।", en: "pay attention to — there is no take attention; close/brief/no may slip in as adjectives.", hi: "pay attention to — take attention जैसी कोई चीज़ नहीं; close/brief/no विशेषण बैठ सकते हैं।" } },
          ],
        },
        {
          heading: {
            bn: "🧭 এক নজরে",
            en: "🧭 At a glance",
            hi: "🧭 एक नज़र में",
          },
          lead: {
            bn: "সাত নিয়ম আর এক ডায়েরি-অনুশীলন — পুরো পাঠ এক ফ্রেমে।",
            en: "Seven rules and one diary exercise — the whole lesson in one frame.",
            hi: "सात नियम और एक डायरी-अभ्यास — पूरा पाठ एक फ़्रेम में।",
          },
          points: [
            { bn: "নতুন শব্দ শিখলে তার সঙ্গী-ক্রিয়াও শিখুন — শব্দ নয়, chunk।", en: "Learn a new word with its verb partner — the chunk, not the word.", hi: "नया शब्द उसके क्रिया-साथी के साथ सीखें — अकेला शब्द नहीं, chunk।" },
            { bn: "do = কর্মকাণ্ড/দায়িত্ব; make = তৈরি/ফল — সন্দেহ হলে ডিকশনারির example।", en: "do = activities/duties; make = creating/results — when unsure, check the dictionary examples.", hi: "do = गतिविधि/कर्तव्य; make = निर्माण/परिणाम — संदेह हो तो डिक्शनरी के उदाहरण।" },
            { bn: "বিদ্যুৎ-যন্ত্র turn on/off হয় — open/close শুধু বই-দরজার।", en: "Electrical devices turn on/off — open/close serves books and doors.", hi: "बिजली के यंत्र turn on/off होते हैं — open/close किताब-दरवाज़े के लिए।" },
            { bn: "পরীক্ষা শিক্ষার্থী take করে; মিথ্যা tell হয়।", en: "The student takes an exam; a lie is told.", hi: "परीक्षा विद्यार्थी take करता है; झूठ tell होता है।" },
            { bn: "heavy rain, strong tea, big mistake, deep sleep, close friend, tight schedule — সঙ্গী বদলালে বাক্য অদ্ভুত।", en: "heavy rain, strong tea, big mistake, deep sleep, close friend, tight schedule — swap partners and the sentence turns strange.", hi: "heavy rain, strong tea, big mistake, deep sleep, close friend, tight schedule — साथी बदलें तो वाक्य अजीब।" },
            { bn: "adverb+adjective মুখস্থ: fully aware, deeply concerned, bitterly cold, wide awake, fast asleep।", en: "Memorise the adverb+adjective set: fully aware, deeply concerned, bitterly cold, wide awake, fast asleep.", hi: "adverb+adjective रटें: fully aware, deeply concerned, bitterly cold, wide awake, fast asleep।" },
            { bn: "pay attention TO — preposition-সহ জুটি মুখস্থ।", en: "pay attention TO — pairs travel with their prepositions; memorise them together.", hi: "pay attention TO — जोड़ी preposition सहित रटें।" },
            { bn: "অনুশীলন: আজ শেখা দশটা জুটি দিয়ে নিজের দিনের ডায়েরি লিখুন — প্রতিটা জুটি অন্তত একবার ব্যবহার হতে হবে।", en: "Practice: write today's diary using ten of these pairs — each must appear at least once.", hi: "अभ्यास: आज सीखी दस जोड़ियों से अपने दिन की डायरी लिखें — हर जोड़ी कम-से-कम एक बार आए।" },
          ],
          examples: [],
        },
      ],
      tips: [
        { bn: "নতুন শব্দ শিখলে তার সঙ্গী-ক্রিয়াও শিখুন — নোটবইয়ে আলাদা শব্দ নয়, পুরো chunk।", en: "Learn every new word with its verb partner — store the whole chunk in your notebook, never the lone word.", hi: "नया शब्द सीखें तो उसका क्रिया-साथी भी सीखें — नोटबुक में अकेला शब्द नहीं, पूरा chunk।" },
        { bn: "do = কাজ/দায়িত্ব; make = তৈরি/ফলাফল — সন্দেহ হলে ডিকশনারির example sentence দেখুন।", en: "do = tasks/duties; make = creating/results — when unsure, read the dictionary's example sentences.", hi: "do = काम/कर्तव्य; make = निर्माण/परिणाम — संदेह हो तो डिक्शनरी के example वाक्य देखें।" },
        { bn: "লাইট-ফ্যান-টিভি-এসি turn on/off হয় — open/close শুধু বই, দরজা, জানালা, বোতলের জন্য।", en: "Lights, fans, TVs and ACs turn on/off — open/close is only for books, doors, windows and bottles.", hi: "लाइट-पंखा-टीवी-एसी turn on/off होते हैं — open/close केवल किताब, दरवाज़ा, खिड़की, बोतल के लिए।" },
        { bn: "পরীক্ষা শিক্ষার্থী take করে, শিক্ষক give করে; মিথ্যা tell হয় — say a lie অসম্ভব।", en: "The student takes an exam, the teacher gives it; a lie is told — say a lie is impossible.", hi: "परीक्षा विद्यार्थी take करता है, शिक्षक give; झूठ tell होता है — say a lie असंभव।" },
        { bn: "বৃষ্টি heavy, চা strong, ভুল big, ঘুম deep/sound, বন্ধু close, সময়সূচি tight — সঙ্গী বদলালে বাক্য অদ্ভুত।", en: "Rain heavy, tea strong, mistake big, sleep deep/sound, friend close, schedule tight — swap partners and the sentence turns strange.", hi: "बारिश heavy, चाय strong, गलती big, नींद deep/sound, दोस्त close, schedule tight — साथी बदलें तो वाक्य अजीब।" },
        { bn: "adverb+adjective জুটি মুখস্থ করুন: fully aware, deeply concerned, bitterly cold, highly successful, wide awake, fast asleep।", en: "Memorise the adverb+adjective set: fully aware, deeply concerned, bitterly cold, highly successful, wide awake, fast asleep.", hi: "adverb+adjective जोड़ियाँ रटें: fully aware, deeply concerned, bitterly cold, highly successful, wide awake, fast asleep।" },
        { bn: "বাংলা 'করা' অনুবাদের আগে থামুন — do না make, উত্তর লুকিয়ে আছে পুরো ফ্রেজে।", en: "Pause before translating Bengali 'করা' — do or make? The answer hides in the whole phrase.", hi: "'करना' अनुवाद से पहले ठहरें — do या make? जवाब पूरे वाक्यांश में छिपा है।" },
        { bn: "take a decision, do the needful — দক্ষিণ এশিয়ার দাপ্তরিক ইংরেজির জীবাশ্ম; আন্তর্জাতিক লেখায় make a decision, handle the matter।", en: "take a decision and do the needful are South-Asian officialese fossils; international writing prefers make a decision and handle the matter.", hi: "take a decision और do the needful दक्षिण एशियाई दफ़्तरी अंग्रेज़ी के जीवाश्म हैं; अंतरराष्ट्रीय लेखन में make a decision, handle the matter।" },
        { bn: "register মনে রাখুন: have a chat (কথ্য) — hold a discussion (লেখ্য); throw a party (কথ্য) — host an event (আনুষ্ঠানিক)।", en: "Mind the register: have a chat (casual) — hold a discussion (formal); throw a party (casual) — host an event (formal).", hi: "Register याद रखें: have a chat (बोलचाल) — hold a discussion (औपचारिक); throw a party (कैज़ुअल) — host an event (औपचारिक)।" },
        { bn: "প্রতিদিন reading-এ একটা নতুন জুটি শিকার করুন — ছয় মাসে ছয়শত স্বাভাবিক বাক্য নিজে থেকেই আসবে।", en: "Hunt one new pair in your reading every day — six months later six hundred natural sentences arrive on their own.", hi: "रोज़ पढ़ाई में एक नई जोड़ी का शिकार करें — छह महीने में छह सौ सहज वाक्य अपने आप आ जाएँगे।" },
      ],
      quiz: [
        { question: "I have to ______ an urgent phone call to the bank.", options: ["do", "make", "take", "give"], answer: 1, explanation: { bn: "phone call-এর সঙ্গী make — make a call; do a call বলে কিছু নেই।", en: "The partner of phone call is make — make a call; there is no do a call.", hi: "Phone call का साथी make — make a call; do a call जैसी कोई चीज़ नहीं।" } },
        { question: "The match was cancelled because of the ______ rain.", options: ["strong", "big", "heavy", "great"], answer: 2, explanation: { bn: "বৃষ্টির স্থায়ী সঙ্গী heavy rain; strong চা-কফির রাজ্যে।", en: "Rain's permanent partner is heavy; strong rules the tea-and-coffee kingdom.", hi: "बारिश का स्थायी साथी heavy; strong चाय-कॉफ़ी के राज्य में रहता है।" } },
        { question: "Please ______ the light; the room is dark.", options: ["open", "close", "turn on", "make on"], answer: 2, explanation: { bn: "বিদ্যুৎ-যন্ত্র turn on হয় — 'open the light' বাংলা 'অন করা'-র ছায়া।", en: "Electrical devices turn on — 'open the light' is the shadow of the Bengali 'অন করা'.", hi: "बिजली के यंत्र turn on होते हैं — 'open the light' 'ऑन करना' की छाया है।" } },
        { question: "She ______ close attention to every detail.", options: ["gives", "makes", "pays", "takes"], answer: 2, explanation: { bn: "pay attention to — একমাত্র ক্রিয়া-সঙ্গী; বিশেষণ close/brief/no ভেতরে ঢুকতে পারে।", en: "pay attention to — the only verb partner; close/brief/no may slip in as adjectives.", hi: "pay attention to — एकमात्र क्रिया-साथी; close/brief/no विशेषण भीतर आ सकते हैं।" } },
        { question: "We are ______ concerned about the delay.", options: ["deep", "deeply", "depth", "deepen"], answer: 1, explanation: { bn: "adverb+adjective জুটি: deeply concerned; deep বিশেষণ, এখানে ঢুকতে পারে না।", en: "The adverb+adjective pair is deeply concerned; deep is an adjective and cannot enter here.", hi: "adverb+adjective जोड़ी deeply concerned; deep विशेषण है, यहाँ नहीं घुस सकता।" } },
        { question: "He ______ a serious mistake in the calculation.", options: ["did", "took", "made", "gave"], answer: 2, explanation: { bn: "mistake 'জন্মানো ফল' → make a mistake; do mistake অসম্ভব।", en: "A mistake is a 'born result' → make a mistake; do mistake is impossible.", hi: "Mistake 'जन्मा परिणाम' है → make a mistake; do mistake असंभव।" } },
        { question: "I ______ my final exam last week.", options: ["gave", "took", "made", "did"], answer: 1, explanation: { bn: "শিক্ষার্থী take an exam করে; give করে পরীক্ষক — 'পরীক্ষা দিলাম' ছায়া এখানেই ভুল।", en: "The student takes an exam; the examiner gives it — the 'পরীক্ষা দিলাম' shadow fails right here.", hi: "विद्यार्थी take an exam करता है; परीक्षक give करता है — 'परीक्षा दी' की छाया यहीं चूक करती है।" } },
        { question: "The doctor ______ the news to the family gently.", options: ["said", "spoke", "broke", "made"], answer: 2, explanation: { bn: "খবর জানানো = break the news; খারাপ খবরের ক্লাসিক জুটি।", en: "Delivering news = break the news — the classic pair for unwelcome information.", hi: "खबर देना = break the news; बुरी खबर की क्लासिक जोड़ी।" } },
        { question: "Which is the natural pair?", options: ["strong tea", "heavy tea", "powerful tea", "mighty tea"], answer: 0, explanation: { bn: "চায়ের জোর strong — strong tea/strong coffee; heavy-র রাজ্য বৃষ্টি-ট্রাফিক-ওজন।", en: "Tea's strength is strong — strong tea/strong coffee; heavy rules rain, traffic and weight.", hi: "चाय की ताक़त strong — strong tea/strong coffee; heavy बारिश, ट्रैफ़िक और भार का राजा।" } },
        { question: "Why should you learn 'pay attention to' as a whole chunk?", options: ["Because attention is always singular", "Because collocations are fixed partnerships — the whole phrase keeps the verb and preposition natural together", "Because chunks are shorter words", "Because prepositions are optional in English"], answer: 1, explanation: { bn: "কলোকেশন নির্দিষ্ট জুটি — verb, preposition সব একসঙ্গে মুখস্থ হলে ব্যবহারে ভুল হয় না।", en: "Collocations are fixed partnerships — memorising the whole phrase keeps verb and preposition natural together.", hi: "Collocations स्थिर साझेदारी हैं — पूरा वाक्यांश रटने से क्रिया और preposition साथ-साथ सहज रहते हैं।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A1C;
