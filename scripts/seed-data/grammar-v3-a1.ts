// ─── Learning-path grammar seeds v3: ADVANCED batch A1 (5 deep lessons) ───
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_A1: SeedGrammarV3Entry[] = [
  /* ── 1. Advanced Tense & Aspect Nuances (Unit 1) ───────────────────── */
  {
    topic: "Advanced Tense & Aspect Nuances",
    level: "advanced",
    title: "Advanced Tense & Aspect Nuances",
    unit: 1,
    data: {
      title: {
        bn: "অ্যাডভান্সড টেন্স ও অ্যাসপেক্ট: সূক্ষ্ম পার্থক্য",
        en: "Advanced Tense & Aspect Nuances",
        hi: "एडवांस्ड टेंस और एस्पेक्ट: सूक्ष्म अंतर",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি প্রথম পাঠ (Unit 1)। শুরু করার আগে intermediate স্তরের Present Perfect Continuous, Passive Voice — All Tenses এবং Reported Speech পাঠগুলো শেষ করে নিন — এই পাঠ সেগুলোর উপরেই দাঁড়িয়ে আছে। ইংরেজি tense আসলে দুটো জিনিসের মিশ্রণ: time (কখন) + aspect (দৃষ্টিভঙ্গি — কাজটা চলছে, শেষ হয়েছে, নাকি সাধারণ সত্য)। বাংলায় 'করছি', 'করেছি', 'করি' — এই তিন রূপেই aspect বোঝাই, তবে ম্যাপিং হুবহু নয়: 'আমি কাল যাব' বাক্যে ইংরেজি চার রকম ভবিষ্যতের যে-কোনো একটা বেছে নিতে পারে (I will go / I am going to go / I am going / I go)। এই পাঠে সেই সূক্ষ্ম পছন্দগুলো — সময়সূচির present simple, future continuous বনাম future perfect, state verb-এর কথ্য continuous, আর past perfect-এর সঠিক জায়গা — ধাপে ধাপে গুছিয়ে শিখব।",
        en: "This is the first lesson of the advanced Learning Path (Unit 1). Before starting, finish the intermediate lessons on Present Perfect Continuous, Passive Voice — All Tenses and Reported Speech — this lesson builds directly on them. An English tense is really two things combined: time (when) + aspect (viewpoint — is the action in progress, complete, or a general fact?). Bengali marks aspect with 'করছি', 'করেছি', 'করি', but the mapping is not one-to-one: the Bengali sentence 'আমি কাল যাব' can become four different English futures (I will go / I am going to go / I am going / I go). In this lesson we sort out exactly those fine choices: the present simple of schedules, future continuous vs future perfect, continuous forms of state verbs, and the correct home of the past perfect.",
        hi: "यह एडवांस्ड Learning Path का पहला पाठ (Unit 1) है। शुरू करने से पहले intermediate स्तर के Present Perfect Continuous, Passive Voice — All Tenses और Reported Speech पाठ पूरे कर लें — यह पाठ उन्हीं पर खड़ा है। अंग्रेज़ी tense दो चीज़ों का मिश्रण है: time (कब) + aspect (दृष्टिकोण — काम चल रहा है, पूरा हो चुका है, या सामान्य सत्य है)। हिंदी में 'कर रहा हूँ', 'कर चुका हूँ', 'करता हूँ' से aspect बनता है, पर मैपिंग सीधी नहीं: 'मैं कल जाऊँगा' अंग्रेज़ी के चार अलग future बन सकता है (I will go / I am going to go / I am going / I go)। इस पाठ में यही सूक्ष्म चुनाव सीखेंगे — समय-सारणी का present simple, future continuous बनाम future perfect, state verbs का continuous, और past perfect की सही जगह।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — tense মানেই শুধু সময় নয়",
            en: "When to use what — tense is not just time",
            hi: "कब क्या इस्तेमाल होता है — tense सिर्फ़ समय नहीं है",
          },
          body: {
            bn: "Aspect মানে দৃষ্টিভঙ্গি: simple form কাজটাকে সম্পূর্ণ বা সাধারণ সত্য হিসেবে দেখে (She writes reports); continuous form কাজটাকে চলমান প্রক্রিয়া হিসেবে দেখে (She is writing a report); perfect form কাজটাকে একটা নির্দিষ্ট সময়ের আগেই সম্পূর্ণ বলে দেখে (She has written the report)। বাংলাভাষী শিক্ষার্থীরা tense শেখার সময় শুধু 'কখন' ভাবে, তাই ভবিষ্যতের সব বাক্য will দিয়ে ঢেকে ফেলে। Advanced স্তরে প্রথম প্রশ্ন হওয়া উচিত: বক্তা কাজটাকে কোন দৃষ্টিতে দেখছে?\n\nসিদ্ধান্তের ধাপগুলো এরকম: (১) ঘটনাটা কি নির্ধারিত সময়সূচির অংশ — train, bus, class, exam, show? তাহলে ভবিষ্যতের জন্যও present simple: The train leaves at 6. (২) ব্যক্তিগত ব্যবস্থা — ডাক্তার দেখানো, বন্ধুর সঙ্গে দেখা, বিয়ের ভেন্যু বুকিং? তাহলে present continuous: I am seeing Rina tomorrow. (৩) বলার মুহূর্তেই নেওয়া সিদ্ধান্ত? তাহলে will: OK, I will help you. (৪) আগে থেকে নেওয়া অভিপ্রায় বা চোখে দেখা প্রমাণ? তাহলে be going to: It is going to rain.\n\nতারপর আসে উচ্চ স্তরের জোড়া: ভবিষ্যতের এক নির্দিষ্ট মুহূর্তে কাজ চলমান থাকবে বোঝাতে future continuous (will be doing), আর নির্দিষ্ট ভবিষ্যৎ সময়ের মধ্যে কাজ শেষ হয়ে যাবে বোঝাতে future perfect (will have done)। অতীতের গল্পে দুটো ঘটনার মধ্যে আগেরটাকে চিহ্নিত করতে past perfect (had done)। এই ছয়টা জায়গাতেই এই পাঠের মূল মনোযোগ।",
            en: "Aspect is viewpoint: the simple form presents an action as complete or generally true (She writes reports); the continuous presents it as an ongoing process (She is writing a report); the perfect presents it as finished before a certain point (She has written the report). Bengali-speaking learners think only about 'when', so they cover every future with 'will'. At advanced level the first question should be: from which viewpoint is the speaker looking at the action?\n\nThe decision steps: (1) Is the event part of a fixed timetable — train, bus, class, exam, show? Then use the present simple even for the future: The train leaves at 6. (2) A personal arrangement — a doctor's appointment, meeting a friend, a booked wedding venue? Then the present continuous: I am seeing Rina tomorrow. (3) A decision made at the moment of speaking? Then will: OK, I will help you. (4) A prior intention or visible evidence? Then be going to: It is going to rain.\n\nThen come the advanced pairs: future continuous (will be doing) shows an action in progress at a specific future moment, and future perfect (will have done) shows an action finished by a specific future time. In past narration, the past perfect (had done) marks the earlier of two past events. These six areas are the core of this lesson.",
            hi: "Aspect यानी दृष्टिकोण: simple form काम को पूर्ण या सामान्य सत्य दिखाता है (She writes reports); continuous उसे चलती हुई प्रक्रिया दिखाता है (She is writing a report); perfect उसे किसी बिंदु से पहले पूरा बताता है (She has written the report)। हिंदीभाषी शिक्षार्थी सिर्फ़ 'कब' सोचते हैं, इसलिए हर future को 'will' से ढक देते हैं। एडवांस्ड स्तर पर पहला सवाल होना चाहिए: बोलने वाला काम को किस नज़रिए से देख रहा है?\n\nनिर्णय के चरण: (1) क्या घटना तय समय-सारणी का हिस्सा है — train, bus, class, exam, show? तो future के लिए भी present simple: The train leaves at 6. (2) व्यक्तिगत arrangement — डॉक्टर से मुलाक़ात, दोस्त से भेंट, बुक्ड वेन्यू? तो present continuous: I am seeing Rina tomorrow. (3) बोलते ही लिया गया निर्णय? तो will: OK, I will help you. (4) पहले से इरादा या दिखने वाला सबूत? तो be going to: It is going to rain.\n\nफिर आती है एडवांस्ड जोड़ी: future continuous (will be doing) भविष्य के किसी ठीक समय पर चलता काम दिखाता है, और future perfect (will have done) किसी तय भविष्य-समय तक पूरा हो चुका काम। अतीत की कहानी में past perfect (had done) दो घटनाओं में से पहली को चिह्नित करता है। इन्हीं छह क्षेत्रों पर इस पाठ का ध्यान है।",
          },
          examples: [
            {
              wrong: "The meeting will start at 9 tomorrow; it is in the company calendar.",
              right: "The meeting starts at 9 tomorrow; it is in the company calendar.",
              note: {
                bn: "ক্যালেন্ডারে বাঁধা সময়সূচির ঘটনায় ভবিষ্যতের জন্যও present simple চলে — will লাগবে না; বাংলা 'হবে' রূপের টানে will বসিয়ে দেওয়া হয়।",
                en: "An event fixed in a timetable takes the present simple even for the future — no 'will'; Bengali 'হবে' tempts learners to add will.",
                hi: "कैलेंडर में तय घटना के लिए भी present simple चलता है — 'will' नहीं; हिंदी 'होगा' के चलते will घुस जाता है।",
              },
            },
            {
              wrong: "I will meet the dentist at 5 — I booked it last week.",
              right: "I am meeting the dentist at 5 — I booked it last week.",
              note: {
                bn: "আগে থেকে করা ব্যক্তিগত arrangement (বুকিং হয়ে গেছে) বোঝাতে present continuous সবচেয়ে স্বাভাবিক; will শুনলে মনে হয় এইমাত্র ঠিক করলেন।",
                en: "A pre-arranged personal appointment (already booked) is most natural in the present continuous; 'will' sounds like a decision made just now.",
                hi: "पहले से तय व्यक्तिगत appointment (बुकिंग हो चुकी) के लिए present continuous सबसे सहज है; 'will' बोलते ही लगता है अभी फ़ैसला लिया।",
              },
            },
            {
              wrong: "This time tomorrow we will fly to Dhaka.",
              right: "This time tomorrow we will be flying to Dhaka.",
              note: {
                bn: "'আগামীকাল এই সময়ে' — ওই নির্দিষ্ট মুহূর্তে উড়ানটা তখনও চলছে, তাই future continuous: will be + V-ing।",
                en: "'This time tomorrow' — at that exact moment the flight is still in progress, so the future continuous fits: will be + V-ing.",
                hi: "'कल इसी समय' — उस क्षण उड़ान अब भी चल रही होगी, इसलिए future continuous: will be + V-ing।",
              },
            },
            {
              wrong: "The show will start before we will reach the hall.",
              right: "The show will have started before we reach the hall.",
              note: {
                bn: "পৌঁছানোর আগেই শো শুরু — আগের ঘটনায় future perfect, আর before-clause-এ will আসে না; দুই ভুল একসঙ্গে ঠিক হলো।",
                en: "The show finishes first — that earlier action takes the future perfect, and a before-clause never takes will; two fixes in one.",
                hi: "हॉल पहुँचने से पहले ही शो शुरू — पहली घटना future perfect लेती है, और before-clause में will नहीं आता; दो सुधार एक साथ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — সাতটা প্যাটার্ন এক নজরে",
            en: "Formation — seven patterns at a glance",
            hi: "गठन — सात पैटर्न एक नज़र में",
          },
          body: {
            bn: "নিচের তালিকাটা প্রসার-টেবিলের মতো পড়ুন — প্রতিটা সারিতে আগে প্যাটার্ন, তারপর উদাহরণ: • নির্ধারিত সময়সূচি: Subject + V-s + সময় → The train leaves at 6. • ব্যক্তিগত arrangement: Subject + am/is/are + V-ing + সময় → I am seeing the dentist at 5. • তৎক্ষণাৎ সিদ্ধান্ত/প্রতিশ্রুতি: Subject + will + V1 → I will carry that bag for you. • আগে থেকে অভিপ্রায় বা প্রমাণ-ভিত্তিক ভবিষ্যদ্বাণী: Subject + am/is/are going to + V1 → It is going to rain. • ভবিষ্যতের নির্দিষ্ট মুহূর্তে চলমান: Subject + will be + V-ing → At 8 tonight I will be cooking. • ভবিষ্যতের নির্দিষ্ট সময়ের মধ্যে সম্পূর্ণ: Subject + will have + V3 (+ by + সময়) → By Sunday I will have finished the report. • দুই অতীতের আগেরটা: Subject + had + V3 → The train had left when we arrived.\n\nদুটো শব্দ এই টেবিলের চাবি: by মানে 'ওই সময়ের মধ্যে অবধি' — সম্পূর্ণতার শব্দ, তাই সঙ্গে will have + V3; আর at বা this time মানে 'ওই মুহূর্তে' — চলমানের শব্দ, তাই সঙ্গে will be + V-ing। কোনো বাক্যে এই দুটোর একটা দেখলেই অর্ধেক কাজ শেষ।",
            en: "Read the list like a prose table — each row gives the pattern first, then an example: • Fixed timetable: Subject + V-s + time → The train leaves at 6. • Personal arrangement: Subject + am/is/are + V-ing + time → I am seeing the dentist at 5. • On-the-spot decision / promise: Subject + will + V1 → I will carry that bag for you. • Prior intention or evidence-based prediction: Subject + am/is/are going to + V1 → It is going to rain. • In progress at a specific future moment: Subject + will be + V-ing → At 8 tonight I will be cooking. • Finished by a specific future time: Subject + will have + V3 (+ by + time) → By Sunday I will have finished the report. • The earlier of two past events: Subject + had + V3 → The train had left when we arrived.\n\nTwo words are the key to this table: by means 'no later than that time' — a completeness word, so it pairs with will have + V3; while at or this time means 'at that very moment' — a progress word, pairing with will be + V-ing. Spot one of them in a sentence and half the work is done.",
            hi: "सूची को गद्य-तालिका जैसा पढ़ें — हर पंक्ति में पहले पैटर्न, फिर उदाहरण: • तय समय-सारणी: Subject + V-s + समय → The train leaves at 6. • व्यक्तिगत arrangement: Subject + am/is/are + V-ing + समय → I am seeing the dentist at 5. • तुरंत लिया निर्णय/वादा: Subject + will + V1 → I will carry that bag for you. • पहले से इरादा या सबूत-आधारित भविष्यवाणी: Subject + am/is/are going to + V1 → It is going to rain. • भविष्य के ठीक समय पर चलता काम: Subject + will be + V-ing → At 8 tonight I will be cooking. • तय भविष्य-समय तक पूरा: Subject + will have + V3 (+ by + समय) → By Sunday I will have finished the report. • दो अतीत घटनाओं में पहली: Subject + had + V3 → The train had left when we arrived.\n\nइस तालिका की कुंजी दो शब्द: by यानी 'उस समय तक' — पूर्णता का शब्द, साथ will have + V3; और at या this time यानी 'उसी क्षण' — चलते काम का शब्द, साथ will be + V-ing। वाक्य में इनमें से कोई एक दिख जाए तो आधा काम हो गया।",
          },
          examples: [
            {
              wrong: "I will finishing the report by Friday.",
              right: "I will have finished the report by Friday.",
              note: {
                bn: "will-এর পরে সরাসরি V-ing আসে না; by + ভবিষ্যৎ সময় মানে কাজ সম্পূর্ণ — তাই will have + V3।",
                en: "'Will' is never followed directly by V-ing; by + future time signals completion — will have + V3.",
                hi: "'Will' के बाद सीधे V-ing नहीं आता; by + भविष्य-समय पूर्णता दिखाता है — will have + V3।",
              },
            },
            {
              wrong: "We will have dinner at 9 tonight, so please do not call then.",
              right: "We will be having dinner at 9 tonight, so please do not call then.",
              note: {
                bn: "৯টার সময়ে ডিনার তখন চলছে — ওই মুহূর্তের চলমান কাজ বোঝাতে will be + V-ing; will have হলে মানে দাঁড়ায় '৯টার মধ্যে ডিনার শেষ'।",
                en: "At 9 the dinner will be in progress — a future-moment activity takes will be + V-ing; will have would mean 'dinner finished by 9'.",
                hi: "9 बजे डिनर चल रहा होगा — उस क्षण का चलता काम will be + V-ing लेता है; will have होता तो मतलब '9 तक डिनर ख़त्म'।",
              },
            },
            {
              wrong: "The Dhaka flight will leave at 7 every morning.",
              right: "The Dhaka flight leaves at 7 every morning.",
              note: {
                bn: "প্রতিদিনের নিয়মিত সময়সূচি — ভবিষ্যৎ হলেও present simple-ই সঠিক; every শব্দটাই আভাস।",
                en: "A daily, repeated schedule stays in the present simple even about the future; the word 'every' is the signal.",
                hi: "रोज़ की नियमित सारणी — future होते हुए भी present simple ही सही; 'every' शब्द ही संकेत है।",
              },
            },
            {
              wrong: "When I will get home, I will call you.",
              right: "When I get home, I will call you.",
              note: {
                bn: "when/before/after/until/as soon as-clause-এ ভবিষ্যৎ বোঝালেও present form চলে — মূল বাক্যেই শুধু will।",
                en: "In when/before/after/until/as soon as clauses use the present form even for future meaning — will appears only in the main clause.",
                hi: "when/before/after/until/as soon as clause में भविष्य के लिए भी present form — will केवल मुख्य वाक्य में।",
              },
            },
            {
              wrong: "She had went out before I arrived.",
              right: "She had gone out before I arrived.",
              note: {
                bn: "past perfect-এর গঠন had + V3 — had-এর সঙ্গে V2 (went) মেশানো একটা পুরোনো অভ্যাস; উচ্চ স্তরেও মাঝে মাঝে ফিরে আসে।",
                en: "Past perfect is had + V3; mixing had with V2 (went) is an old habit that resurfaces even at advanced level.",
                hi: "Past perfect है had + V3; had के साथ V2 (went) मिलाना पुरानी आदत है जो एडवांस्ड स्तर पर भी लौट आती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন — কোন শব্দ কোন tense ডাকে",
            en: "Signals — which words call which tense",
            hi: "संकेत — कौन-सा शब्द कौन-सा tense बुलाता है",
          },
          body: {
            bn: "Advanced স্তরের দক্ষতা হলো বাক্যের ভেতরের সংকেত শব্দগুলো তৎক্ষণাৎ চিনে ফেলা: • 'by + ভবিষ্যৎ সময়' (by Friday, by next March, by 2030, by the time you arrive) → future perfect। • 'this time tomorrow / at 8 tonight / this day next week' → future continuous। • ঘড়ির সময় + সময়সূচির শব্দ (train, bus, flight, class, exam, show, match) → present simple future। • ব্যক্তি + সময় + পরিকল্পনা (I am meeting Rina on Sunday) → present continuous। • already, just, never, yet — এদের সঙ্গে অতীতের দুই ধাপ থাকলে past perfect; শুধু 'এখন পর্যন্ত' বোঝালে present perfect।\n\nআরেকটা সোনার নিয়ম: when, before, after, until, as soon as দিয়ে শুরু হওয়া clause ভবিষ্যতের হলেও তাতে present form বসে; will শুধু মূল বাক্যে। এই সংকেতগুলো চোখে পড়ামাত্র tense সিদ্ধান্তের অর্ধেক কাজ শেষ — বাকি অর্ধেক হলো aspect-এর প্রশ্ন: কাজটা চলছে, নাকি শেষ?",
            en: "Advanced skill means instantly spotting the signal words inside a sentence: • 'by + future time' (by Friday, by next March, by 2030, by the time you arrive) → future perfect. • 'this time tomorrow / at 8 tonight / this day next week' → future continuous. • Clock time + timetable words (train, bus, flight, class, exam, show, match) → present simple future. • Person + time + plan (I am meeting Rina on Sunday) → present continuous. • already, just, never, yet — with two past steps they take the past perfect; with only 'up to now' they take the present perfect.\n\nOne golden rule more: clauses beginning with when, before, after, until, as soon as take the present form even when they refer to the future; will stays only in the main clause. Spotting these signals does half the tense decision — the other half is the aspect question: is the action in progress or complete?",
            hi: "एडवांस्ड कौशल है वाक्य के भीतर संकेत-शब्द तुरंत पकड़ना: • 'by + भविष्य-समय' (by Friday, by next March, by 2030, by the time you arrive) → future perfect। • 'this time tomorrow / at 8 tonight / this day next week' → future continuous। • घड़ी का समय + सारणी-शब्द (train, bus, flight, class, exam, show, match) → present simple future। • व्यक्ति + समय + योजना (I am meeting Rina on Sunday) → present continuous। • already, just, never, yet — दो अतीत-चरणों के साथ past perfect; केवल 'अब तक' के साथ present perfect।\n\nएक और सुनहरा नियम: when, before, after, until, as soon as से शुरू होने वाले clause भविष्य की बात करते हुए भी present form लेते हैं; will केवल मुख्य वाक्य में। ये संकेत देखते ही tense-निर्णय का आधा काम हो जाता है — बाकी आधा aspect का सवाल: काम चल रहा है या पूरा?",
          },
          examples: [
            {
              wrong: "By next March they will open the new campus.",
              right: "By next March they will have opened the new campus.",
              note: {
                bn: "by + ভবিষ্যৎ সময় = 'ওই সময়ের মধ্যে শেষ' — completion-এর সংকেত, তাই future perfect।",
                en: "by + future time = 'finished no later than that time' — a completion signal, hence the future perfect.",
                hi: "by + भविष्य-समय = 'उस समय तक पूरा' — पूर्णता का संकेत, इसलिए future perfect।",
              },
            },
            {
              wrong: "Do not phone me at 9 — I will watch my favourite serial.",
              right: "Do not phone me at 9 — I will be watching my favourite serial.",
              note: {
                bn: "৯টার সময় সিরিয়াল দেখা তখন চলছে — নির্দিষ্ট ভবিষ্যৎ মুহূর্তের চলমান দৃশ্য → future continuous।",
                en: "At 9 the watching will be in progress — a scene in progress at a specific future moment → future continuous.",
                hi: "9 बजे सीरियल देखना चल रहा होगा — तय भविष्य-क्षण में चलता दृश्य → future continuous।",
              },
            },
            {
              wrong: "The class will begin at 10 sharp; the schedule says so.",
              right: "The class begins at 10 sharp; the schedule says so.",
              note: {
                bn: "schedule শব্দটাই ঘোষণা করে দিচ্ছে — নির্ধারিত সময়সূচি বোঝাতে present simple।",
                en: "The word 'schedule' gives it away — fixed timetables take the present simple.",
                hi: "'schedule' शब्द ही बता दे रहा है — तय समय-सारणी present simple लेती है।",
              },
            },
            {
              wrong: "I am knowing his brother very well.",
              right: "I know his brother very well.",
              note: {
                bn: "know, believe, own, contain — এদের মতো state verb চলমান প্রক্রিয়া নয়, তাই continuous হয় না; কথ্য ভাষাতেও know-এর continuous অচল।",
                en: "State verbs such as know, believe, own, contain are not ongoing processes, so they reject the continuous — even in casual speech 'I am knowing' stays wrong.",
                hi: "know, believe, own, contain जैसे state verbs चलती प्रक्रिया नहीं हैं, इसलिए continuous नहीं लेते — बोलचाल में भी 'I am knowing' गलत ही है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ভবিষ্যতের চার মুখ — will, going to, present continuous, present simple",
            en: "Four faces of the future — will, going to, present continuous, present simple",
            hi: "भविष्य के चार रूप — will, going to, present continuous, present simple",
          },
          body: {
            bn: "বাংলায় 'কাল যাব', 'কাল যাচ্ছি' — এক-আধ রূপেই সব ভবিষ্যৎ চলে যায়, তাই শিক্ষার্থীরা will-কেই default বানিয়ে ফেলে। ইংরেজিতে ভবিষ্যতের চারটা আলাদা মুখ আছে, প্রতিটার নিজের রং: will = বলার মুহূর্তে নেওয়া সিদ্ধান্ত, প্রতিশ্রুতি, বা অনুমাননির্ভর ভবিষ্যদ্বাণী (I think United will win); be going to = আগে থেকে নেওয়া অভিপ্রায়, আর চোখে দেখা প্রমাণ থেকে ভবিষ্যদ্বাণী (Look at those clouds — it is going to rain); present continuous = আগে থেকে ঠিক করা, বুকিং-টিকিট-সহ ব্যক্তিগত arrangement (I am meeting Rina tomorrow); present simple = সময়সূচিতে বাঁধা ঘটনা (The match starts at 5)।\n\nএকই ঘটনা, চার রকম রং: 'I will visit grandma' (এই কথা বলতে বলতে ঠিক করলাম), 'I am going to visit grandma' (দিন দুয়েক ধরে প্ল্যান করছি), 'I am visiting grandma tomorrow' (ট্রেনের টিকিট কেটে ফেলেছি), 'The train leaves at 6' (সময়সূচি নির্ধারিত)। বাক্য লেখার আগে নিজেকে জিজ্ঞেস করুন — এটা কি সিদ্ধান্ত, অভিপ্রায়, arrangement, নাকি schedule? উত্তরই রূপটা বেছে দেবে।",
            en: "In Bengali, 'কাল যাব' or 'কাল যাচ্ছি' covers every future, so learners make 'will' the default. English has four distinct faces of the future, each with its own colour: will = a decision made while speaking, a promise, or an opinion-based prediction (I think United will win); be going to = a prior intention, or a prediction based on visible evidence (Look at those clouds — it is going to rain); present continuous = a personal arrangement already fixed, with bookings and tickets (I am meeting Rina tomorrow); present simple = an event bound to a timetable (The match starts at 5).\n\nOne event, four colours: 'I will visit grandma' (deciding as I speak), 'I am going to visit grandma' (planning it for days), 'I am visiting grandma tomorrow' (train ticket already bought), 'The train leaves at 6' (the official timetable). Before writing, ask yourself: is this a decision, an intention, an arrangement, or a schedule? The answer chooses the form.",
            hi: "हिंदी में 'कल जाऊँगा', 'कल जा रहा हूँ' हर future को ढक लेते हैं, इसलिए शिक्षार्थी 'will' को default बना देते हैं। अंग्रेज़ी में भविष्य के चार अलग रूप हैं: will = बोलते ही लिया निर्णय, वादा, या राय-आधारित भविष्यवाणी (I think United will win); be going to = पहले से इरादा, या दिख रहे सबूत से भविष्यवाणी (Look at those clouds — it is going to rain); present continuous = बुकिंग-टिकट सहित तय व्यक्तिगत arrangement (I am meeting Rina tomorrow); present simple = सारणी में बँधा कार्यक्रम (The match starts at 5)।\n\nएक घटना, चार रंग: 'I will visit grandma' (बोलते ही तय किया), 'I am going to visit grandma' (दिनों से प्लान), 'I am visiting grandma tomorrow' (ट्रेन की टिकट कट गई), 'The train leaves at 6' (आधिकारिक सारणी)। लिखने से पहले पूछें — यह निर्णय, इरादा, arrangement या schedule? जवाब ही रूप चुनेगा।",
          },
          examples: [
            {
              wrong: "A: The phone is ringing. B: OK, I am going to answer it.",
              right: "A: The phone is ringing. B: OK, I will answer it.",
              note: {
                bn: "ফোন বাজা দেখে মুহূর্তে সিদ্ধান্ত নেওয়া হলো — তৎক্ষণাৎ সিদ্ধান্তে will; going to বলতে হলে আগে থেকেই প্ল্যান থাকতে হবে।",
                en: "The ringing phone triggers an instant decision — on-the-spot decisions take will; going to needs a plan made earlier.",
                hi: "घंटी देखकर तुरंत निर्णय — ऐसे फ़ैसले will लेते हैं; going to के लिए पहले से बना प्लान चाहिए।",
              },
            },
            {
              wrong: "Look at those black clouds! It will rain.",
              right: "Look at those black clouds! It is going to rain.",
              note: {
                bn: "চোখে দেখা প্রমাণ (কালো মেঘ) থেকে ভবিষ্যদ্বাণী — এটা going to-এর ক্লাসিক জায়গা; will শুধু অনুমান, প্রমাণ নয়।",
                en: "A prediction from visible evidence (black clouds) is the classic home of going to; will is mere opinion.",
                hi: "दिख रहे सबूत (काले बादल) से भविष्यवाणी — यह going to की क्लासिक जगह है; will महज़ अंदाज़ा है।",
              },
            },
            {
              wrong: "We will get married in December; the hall is already booked.",
              right: "We are getting married in December; the hall is already booked.",
              note: {
                bn: "হল বুকড, কার্ড ছাপা — এটা arrangement; আগে থেকে ঠিক করা ব্যক্তিগত ভবিষ্যৎ present continuous-এ বসে।",
                en: "The hall is booked, the cards are printed — this is an arrangement; a pre-fixed personal future takes the present continuous.",
                hi: "हॉल बुक, कार्ड छपे — यह arrangement है; पहले से तय निजी भविष्य present continuous में आता है।",
              },
            },
            {
              wrong: "My IELTS exam will begin at 10 on Sunday.",
              right: "My IELTS exam begins at 10 on Sunday.",
              note: {
                bn: "পরীক্ষার সময় আগেই ঘোষিত সময়সূচির অংশ — ঘড়ির সময় + exam শুনে present simple বসান।",
                en: "The exam time is part of a published schedule — clock time + exam is a present-simple signal.",
                hi: "परीक्षा का समय घोषित सारणी का हिस्सा है — समय + exam देखकर present simple लगाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Future continuous বনাম future perfect — 'চলছে' নাকি 'শেষ হয়ে গেছে'",
            en: "Future continuous vs future perfect — in progress or already done",
            hi: "Future continuous बनाम future perfect — चल रहा है या हो चुका है",
          },
          body: {
            bn: "will be doing-কে ক্যামেরার ফ্রেম ভাবুন: ভবিষ্যতের এক নির্দিষ্ট মুহূর্তে তুলে ধরা ছবিতে কাজটা তখন চলছে — This time tomorrow I will be flying to Dubai. এর দুটো বাড়তি কাজ আছে: (১) polite জিজ্ঞাসা — Will you be using the laptop tonight? সরাসরি অনুমতি না চেয়ে পরিকল্পনাটা জানতে চাওয়া, যা বাঙালি ভদ্রতার সঙ্গে বেশ মানানসই; (২) 'কাজটা তবু ঘটবেই' বোঝানো — I will be passing the market anyway; shall I buy some eggs?\n\nwill have done-কে টাইমলাইনের টিক-চিহ্ন ভাবুন: নির্দিষ্ট ভবিষ্যৎ সময়ের আগেই কাজটা সম্পূর্ণ — By December I will have saved enough money. দুটো একসঙ্গেও আসে: By 6 I will have reached home, and I will be cooking dinner. — ৬টার মধ্যে পৌঁছে যাওয়া (সম্পূর্ণ), তারপর রান্না চলছে (চলমান)। ফারাকটা মনে রাখার সহজ কথা: by + সময় = শেষ; at / this time + সময় = চলছে।",
            en: "Think of will be doing as a camera frame: in the picture taken at a specific future moment, the action is in progress — This time tomorrow I will be flying to Dubai. It has two extra jobs: (1) polite enquiries — Will you be using the laptop tonight? asks about plans instead of demanding permission, which suits Bengali politeness well; (2) 'it will happen anyway' — I will be passing the market anyway; shall I buy some eggs?\n\nThink of will have done as a tick on the timeline: the action is complete before a specific future time — By December I will have saved enough money. They can appear together: By 6 I will have reached home, and I will be cooking dinner. — arrival complete by 6, then cooking in progress. Easy summary: by + time = finished; at / this time = in progress.",
            hi: "will be doing को कैमरे का फ्रेम समझें: भविष्य के किसी ठीक क्षण की तस्वीर में काम तब चल रहा होगा — This time tomorrow I will be flying to Dubai. इसके दो अतिरिक्त काम: (1) विनम्र प्रश्न — Will you be using the laptop tonight? अनुमति माँगने के बजाय योजना पूछना, जो भारतीय-बांग्ला शिष्टता से मेल खाता है; (2) 'फिर भी होगा ही' — I will be passing the market anyway; shall I buy some eggs?\n\nwill have done को टाइमलाइन का टिक समझें: तय भविष्य-समय से पहले ही काम पूरा — By December I will have saved enough money. दोनों साथ भी आ सकते हैं: By 6 I will have reached home, and I will be cooking dinner. — 6 तक पहुँचना पूरा, फिर खाना चल रहा। आसान सारांश: by + समय = पूरा; at / this time = चल रहा।",
          },
          examples: [
            {
              wrong: "Do not call me at 10; I will sleep.",
              right: "Do not call me at 10; I will be sleeping.",
              note: {
                bn: "১০টায় ঘুম তখন চলমান অবস্থা — চলমান দৃশ্য বোঝাতে will be sleeping; will sleep মানে দাঁড়ায় '১০টায় ঘুমাতে শুরু করব'।",
                en: "At 10 the sleeping will be in progress — the in-progress view takes will be sleeping; will sleep would mean 'I start sleeping at 10'.",
                hi: "10 बजे नींद चल रही होगी — चलते दृश्य के लिए will be sleeping; will sleep का मतलब बनेगा '10 बजे सोना शुरू करूँगा'।",
              },
            },
            {
              wrong: "By the time you come back, I will cook dinner.",
              right: "By the time you come back, I will have cooked dinner.",
              note: {
                bn: "by the time = 'তুমি ফিরার আগেই' — আগে শেষ হওয়া কাজ, তাই future perfect; by-শব্দটা দেখলেই এই সিদ্ধান্ত নেবেন।",
                en: "by the time = 'before you return' — the earlier-finished action takes the future perfect; the word by should trigger this choice.",
                hi: "by the time = 'तुम्हारे लौटने से पहले' — पहले पूरा हुआ काम future perfect लेता है; by शब्द देखते ही यही चुनाव करें।",
              },
            },
            {
              wrong: "Will you use the office printer this evening? I need it too.",
              right: "Will you be using the office printer this evening? I need it too.",
              note: {
                bn: "অন্যের পরিকল্পনা জানতে চাওয়া — will be + V-ing নরম, polite শোনায়; সরাসরি will you use আদেশ-জাতীয় কড়া গোছা হয়ে যায়।",
                en: "Asking about someone's plan — will be + V-ing sounds soft and polite; a bare will you use comes across as abrupt.",
                hi: "दूसरे की योजना पूछना — will be + V-ing नरम, विनम्र लगता है; सीधा will you use रूखा लगता है।",
              },
            },
            {
              wrong: "By next year I will be completing my degree.",
              right: "By next year I will have completed my degree.",
              note: {
                bn: "by + ভবিষ্যৎ সময় সম্পূর্ণতা বোঝায় — ডিগ্রি তখন শেষ; চলমান নয়, তাই will have + V3।",
                en: "by + future time expresses completion — the degree will be done, not ongoing; hence will have + V3.",
                hi: "by + भविष्य-समय पूर्णता दिखाता है — डिग्री तब ख़त्म होगी, चल रही नहीं; इसलिए will have + V3।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "State verb-এর continuous — 'I am loving it' কখন চলে, কখন চলে না",
            en: "Continuous with state verbs — when 'I am loving it' works",
            hi: "State verbs के साथ continuous — 'I am loving it' कब चलता है",
          },
          body: {
            bn: "State verb মানে অবস্থা বোঝানো verb — know, own, believe, contain, understand, prefer। অবস্থার কোনো 'চলমান প্রক্রিয়া' নেই, তাই এরা সাধারণত continuous-এ যায় না: I am knowing him ভুল, I know him ঠিক। কিন্তু আধুনিক কথ্য ইংরেজি আর বিজ্ঞাপনের ভাষা নিয়মটা নমনীয় করেছে: love, like, enjoy, hope, wonder — এই গুচ্ছকে মুহূর্তের অনুভূতি হিসেবে continuous-এ শোনা যায়: I am loving this weather, I am hoping you can join us। মনে রাখবেন — এটা কথ্য রং; পরীক্ষার লেখা বা রিপোর্টে I love / I hope-ই লিখুন।\n\nআরও সূক্ষ্ম স্তর: কিছু verb state ও dynamic — দুই চরিত্রেই চলে, আর অর্থ বদলে যায়। think: I think he is right (মতামত) বনাম I am thinking about it (মাথা চালাচ্ছি); have: I have a car (মালিকানা) বনাম I am having lunch (খাচ্ছি) বা I am having second thoughts (দ্বিধায় ভুগছি); see: I see what you mean (বুঝছি) বনাম I am seeing the doctor tomorrow (দেখা করছি)। সুতরাং প্রশ্নটা 'verb-টা state কি' নয় — প্রশ্নটা 'এই বাক্যে verb-টা state অর্থে ব্যবহৃত কি'।",
            en: "A state verb describes a condition — know, own, believe, contain, understand, prefer. A condition has no 'ongoing process', so these verbs normally reject the continuous: I am knowing him is wrong; I know him is right. But modern spoken English and advertising have bent the rule for one group: love, like, enjoy, hope, wonder can be heard in the continuous as momentary feelings — I am loving this weather, I am hoping you can join us. Remember: this is casual colour; in exam answers and reports write I love / I hope.\n\nA subtler layer: some verbs are both state and dynamic, and the meaning shifts with them. think: I think he is right (opinion) vs I am thinking about it (deliberating); have: I have a car (ownership) vs I am having lunch (eating) or I am having second thoughts (feeling doubt); see: I see what you mean (understand) vs I am seeing the doctor tomorrow (meeting). So the question is not 'is this verb a state verb?' but 'is it used in its state sense in this sentence?'",
            hi: "State verb अवस्था बताते हैं — know, own, believe, contain, understand, prefer। अवस्था की कोई 'चलती प्रक्रिया' नहीं होती, इसलिए ये सामान्यतः continuous नहीं लेते: I am knowing him गलत, I know him सही। पर आधुनिक बोलचाल और विज्ञापन-भाषा एक समूह के लिए नियम झुका देती है: love, like, enjoy, hope, wonder को क्षणिक भावना के रूप में continuous में सुना जा सकता है — I am loving this weather, I am hoping you can join us। याद रखें — यह केवल बोलचाल का रंग है; परीक्षा और रिपोर्ट में I love / I hope ही लिखें।\n\nएक सूक्ष्म तह: कुछ verbs state और dynamic दोनों हैं, और अर्थ बदल जाता है। think: I think he is right (राय) vs I am thinking about it (सोच रहा हूँ); have: I have a car (स्वामित्व) vs I am having lunch (खा रहा हूँ) या I am having second thoughts (संदेह); see: I see what you mean (समझ रहा हूँ) vs I am seeing the doctor tomorrow (मिल रहा हूँ)। सवाल यह नहीं कि verb state है या नहीं — सवाल यह है कि इस वाक्य में वह state-अर्थ में है या नहीं।",
          },
          examples: [
            {
              wrong: "I am loving this biryani! (in an exam essay)",
              right: "I love this biryani! (in an exam essay)",
              note: {
                bn: "পরীক্ষার উত্তরপত্রে state verb-এর continuous এড়িয়ে চলুন; I am loving it কেবল কথ্য, বিজ্ঞাপনি রঙে চলে — মুহূর্তের আনন্দ বোঝাতে।",
                en: "Avoid continuous state verbs in exam writing; I am loving it belongs to casual, advertising-flavoured speech for a moment's delight.",
                hi: "परीक्षा-लेखन में state verbs का continuous टालें; I am loving it केवल बोलचाल, विज्ञापनी रंग की बात है।",
              },
            },
            {
              wrong: "Sorry, I am not understanding the last part.",
              right: "Sorry, I do not understand the last part.",
              note: {
                bn: "understand প্রায় সব প্রসঙ্গে state — negative-তেও continuous অচল; বাংলা 'বুঝতে পারছি না' রূপটাই এই ভুলের উৎস।",
                en: "understand is a state verb in nearly every context — the continuous fails even in negatives; Bengali 'বুঝতে পারছি না' is the source of this error.",
                hi: "understand लगभग हर संदर्भ में state verb है — negative में भी continuous नहीं चलता; हिंदी 'समझ नहीं पा रहा' ही इस गलती का स्रोत है।",
              },
            },
            {
              wrong: "I have second thoughts about the deal.",
              right: "I am having second thoughts about the deal.",
              note: {
                bn: "এখানে have = 'অনুভব করছি' — dynamic ব্যবহার, তাই continuous বৈধ; মালিকানার have (I have a car) continuous হয় না।",
                en: "Here have = 'experiencing' — a dynamic use, so the continuous is valid; ownership have (I have a car) never takes it.",
                hi: "यहाँ have = 'अनुभव कर रहा हूँ' — dynamic उपयोग, इसलिए continuous मान्य; स्वामित्ववाला have (I have a car) कभी continuous नहीं लेता।",
              },
            },
            {
              wrong: "She is owning two houses in Dhaka.",
              right: "She owns two houses in Dhaka.",
              note: {
                bn: "own = মালিকানার state — কথ্য ভাষাতেও কখনও continuous হয় না; ব্যতিক্রমহীন নিয়ম।",
                en: "own is a pure ownership state — it never takes the continuous, even in casual speech; this rule has no exceptions.",
                hi: "own शुद्ध स्वामित्व की अवस्था है — बोलचाल में भी कभी continuous नहीं होता; यह नियम अपवादरहित है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors made by advanced learners",
            hi: "एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "Advanced শিক্ষার্থীদের ভুল আর নতুন শিক্ষার্থীদের ভুল আলাদা — এগুলো বাক্যের গড়ন ঠিক রেখেই ঘটে, তাই পড়তে গিয়ে ধরা পড়ে না। প্রথম দল: perfect-এর জায়গা না বোঝা — since/for থাকলে কাজ এখনও চলমান মানে have/has been + -ing, কিন্তু বাংলা 'থাকি' রূপের টানে অনেকে লেখেন I am living here since 2019। দ্বিতীয় দল: time clause-এ will ঢুকিয়ে দেওয়া — when he will come। তৃতীয় দল: by + সময় দেখেও future perfect না বসানো।\n\nতারপর আসে past perfect-এর অতি-ব্যবহার: After I had eaten dinner, I had watched TV — এখানে একটা ঘটনা আগে, একটা পরে; শুধু আগেরটাতে had, পরেরটায় সাধারণ past। প্রতিটা past বাক্যে had ছড়িয়ে দিলে গল্প ভারী, জাদুঘরের নোটের মতো শোনায়। শেষ দল: wish/if only-এর backshift — বর্তমান পরিস্থিতির আফসোসেও অতীত রূপ বসে: I wish I had more time। এই চার দল মাঝে মাঝে নিজের লেখায় খুঁজে দেখুন — উচ্চ স্তরের উত্থান ঠিক এখানেই ঘটে।",
            en: "Advanced learners' mistakes differ from beginners' — they happen inside well-formed sentences, so they slip past a quick read. Group one: misplacing the perfect — with since/for and an ongoing action you need have/has been + -ing, but the pull of the Bengali 'থাকি' form makes many write I am living here since 2019. Group two: will sneaking into time clauses — when he will come. Group three: seeing by + time and still not choosing the future perfect.\n\nThen comes past perfect over-use: After I had eaten dinner, I had watched TV — of the two events, only the earlier takes had; the later one is plain past. Sprinkling had into every past sentence makes a story sound like a museum label. The last group: the backshift after wish/if only — even a present regret takes a past form: I wish I had more time. Scan your own writing for these four groups from time to time — advanced growth happens exactly here.",
            hi: "एडवांस्ड शिक्षार्थियों की गलतियाँ नए शिक्षार्थियों से अलग हैं — ये व्यवस्थित वाक्यों के भीतर घटती हैं, इसलिए पढ़ते हुए पकड़ में नहीं आतीं। पहला समूह: perfect की जगह गलत — since/for और चलते काम के साथ have/has been + -ing चाहिए, पर हिंदी 'रहता हूँ' के खिंचाव से कई लिख देते हैं I am living here since 2019। दूसरा समूह: time clause में will घुस जाना — when he will come। तीसरा समूह: by + समय देखकर भी future perfect न लगाना।\n\nफिर आता है past perfect का अति-प्रयोग: After I had eaten dinner, I had watched TV — दो घटनाओं में से केवल पहली पर had; बाद वाली साधारण past। हर past वाक्य में had बिखेर देने से कहानी संग्रहालय-पट्टिका जैसी लगने लगती है। अंतिम समूह: wish/if only का backshift — वर्तमान पछतावे पर भी past रूप: I wish I had more time। समय-समय पर अपने लेखन में ये चार समूह ढूँढें — एडवांस्ड उन्नति यहीं होती है।",
          },
          examples: [
            {
              wrong: "I am living in Chattogram since 2019.",
              right: "I have been living in Chattogram since 2019.",
              note: {
                bn: "since/for + এখনও চলমান কাজ → present perfect continuous; বাংলা '২০১৯ থেকে থাকি' — বর্তমান-কালের রূপ ধরে present continuous বসিয়ে দেয়।",
                en: "since/for + an action still in progress → present perfect continuous; the Bengali present-tense form 'থাকি' pulls learners into the present continuous.",
                hi: "since/for + अब भी चल रहा काम → present perfect continuous; हिंदी '2019 से रहता हूँ' — वर्तमान-काल का रूप continuous में खींच लेता है।",
              },
            },
            {
              wrong: "When he will arrive, we will start the meeting.",
              right: "When he arrives, we will start the meeting.",
              note: {
                bn: "when/until/as soon as-clause ভবিষ্যতের হলেও present form — will শুধু মূল বাক্যে; বাংলা 'যখন আসবে' রূপটা will টেনে আনে।",
                en: "when/until/as soon as clauses use the present form even about the future — will only in the main clause; the Bengali 'যখন আসবে' drags will in.",
                hi: "when/until/as soon as clause भविष्य की बात पर भी present form लेते हैं — will केवल मुख्य वाक्य में; हिंदी 'जब आएगा' will खींच लाता है।",
              },
            },
            {
              wrong: "After I had finished dinner, I had watched the news.",
              right: "After I had finished dinner, I watched the news.",
              note: {
                bn: "দুই ঘটনার ক্রম একবারই চিহ্নিত করতে হয় — আগেরটায় had, পরেরটায় সাধারণ past; দুবার had লিখলে দুটোই আরও আগের ঘটনা মনে হয়।",
                en: "Mark the order once — the earlier event takes had, the later one plain past; doubling had makes both sound like even earlier events.",
                hi: "क्रम एक बार ही चिह्नित करें — पहली घटना पर had, बाद वाली पर साधारण past; दोनों पर had लिखने से दोनों और पुरानी लगने लगती हैं।",
              },
            },
            {
              wrong: "I wish I have more time to practise.",
              right: "I wish I had more time to practise.",
              note: {
                bn: "wish-এর পরে বাস্তবের বিপরীত কল্পনা — tense এক ধাপ পিছিয়ে যায় (backshift); বর্তমান সমস্যাতেও had।",
                en: "After wish the tense steps one step back (backshift) — even a present problem takes had.",
                hi: "wish के बाद tense एक क़दम पीछे खिसकता है (backshift) — वर्तमान समस्या पर भी had।",
              },
            },
            {
              wrong: "By the time the project ends, the team will spend a crore.",
              right: "By the time the project ends, the team will have spent a crore.",
              note: {
                bn: "by the time + ভবিষ্যৎ = ওই আগেই খরচ শেষ — সম্পূর্ণতার দৃষ্টি, তাই future perfect; by-কে দেখেই ঘড়ির কাঁটা সামনে বসান।",
                en: "by the time + future = the spending is over before that point — the completion viewpoint, hence the future perfect; let every by pull your timeline forward.",
                hi: "by the time + भविष्य = उससे पहले ही ख़र्च पूरा — पूर्णता की दृष्टि, इसलिए future perfect; by देखते ही टाइमलाइन आगे बढ़ाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক + এক নজরে",
            en: "Seen in a short story + at a glance",
            hi: "छोटी कहानी में देखिए + एक नज़र में",
          },
          body: {
            bn: "নিচের ছোট অনুচ্ছেদটা পড়ুন — এই পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে: 'The 6 o'clock ferry leaves from Sadarghat, and by 7 we will be crossing the Buriganga. Rina is joining us — she booked the tickets last week. By the time the office bus reaches Gabtoli, we will have finished breakfast. This time tomorrow I will be sitting in the Chittagong workshop, and honestly, I am loving the idea of a work trip. The manager had promised us this visit months before the project even started.' প্রতিটা বাক্যে জিজ্ঞেস করুন: বক্তা কাজটাকে কোন দৃষ্টিতে দেখছে — সময়সূচি, চলমান, সম্পূর্ণ, নাকি মুহূর্তের অনুভূতি?\n\nএক নজরে: (১) সময়সূচির ঘটনা → present simple; (২) ব্যক্তিগত arrangement → present continuous; (৩) ভবিষ্যতের নির্দিষ্ট মুহূর্তে চলমান → will be doing; (৪) by + ভবিষ্যৎ সময় → will have done; (৫) দুই অতীতের আগেরটা → had + V3; (৬) কথ্য রঙে state verb → am loving/hoping। পাঠের বাইরে অনুশীলন: নিজের আগামীকালের প্ল্যান তিন বাক্যে লিখুন, ইচ্ছা করে চার রকম ভবিষ্যৎ-রূপ ফিট করে।",
            en: "Read this short paragraph — every pattern of the lesson is at work: 'The 6 o'clock ferry leaves from Sadarghat, and by 7 we will be crossing the Buriganga. Rina is joining us — she booked the tickets last week. By the time the office bus reaches Gabtoli, we will have finished breakfast. This time tomorrow I will be sitting in the Chittagong workshop, and honestly, I am loving the idea of a work trip. The manager had promised us this visit months before the project even started.' Ask of each sentence: from which viewpoint is the speaker seeing the action — schedule, in progress, complete, or a moment's feeling?\n\nAt a glance: (1) timetable events → present simple; (2) personal arrangements → present continuous; (3) in progress at a specific future moment → will be doing; (4) by + future time → will have done; (5) the earlier of two pasts → had + V3; (6) casual state verbs → am loving / hoping. Practice beyond the lesson: write tomorrow's plan in three sentences, deliberately fitting in all four future forms.",
            hi: "यह छोटा अनुच्छेद पढ़ें — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं: 'The 6 o'clock ferry leaves from Sadarghat, and by 7 we will be crossing the Buriganga. Rina is joining us — she booked the tickets last week. By the time the office bus reaches Gabtoli, we will have finished breakfast. This time tomorrow I will be sitting in the Chittagong workshop, and honestly, I am loving the idea of a work trip. The manager had promised us this visit months before the project even started.' हर वाक्य में पूछें: बोलने वाला काम को किस नज़रिए से देख रहा है — सारणी, चल रहा, पूरा, या क्षणिक भावना?\n\nएक नज़र में: (1) सारणी की घटना → present simple; (2) व्यक्तिगत arrangement → present continuous; (3) तय भविष्य-क्षण में चलता काम → will be doing; (4) by + भविष्य-समय → will have done; (5) दो अतीतों में पहली → had + V3; (6) बोलचाल के state verbs → am loving / hoping। पाठ से बाहर अभ्यास: कल की योजना तीन वाक्यों में लिखें, जानबूझकर चारों future रूप फिट करके।",
          },
          examples: [
            {
              wrong: "The ferry will leave from Sadarghat at 6; it is on the official timetable.",
              right: "The ferry leaves from Sadarghat at 6; it is on the official timetable.",
              note: {
                bn: "official timetable — শব্দটাই সিদ্ধান্ত বদলে দেয়: নির্ধারিত সময়সূচি present simple-এই থাকে।",
                en: "official timetable — the phrase itself settles it: fixed schedules stay in the present simple.",
                hi: "official timetable — यही शब्द निर्णय बदल देता है: तय सारणी present simple में रहती है।",
              },
            },
            {
              wrong: "By 7 we will cross the Buriganga. (meaning: at 7, we will be mid-river)",
              right: "By 7 we will be crossing the Buriganga. (meaning: at 7, we will be mid-river)",
              note: {
                bn: "'৭টার সময় নদীর মাঝখানে থাকব' — চলমান দৃশ্য → will be crossing; '৭টার মধ্যে পার হয়ে যাব' বোঝালে will have crossed।",
                en: "'At 7 we will be mid-river' — a scene in progress → will be crossing; 'we will be over by 7' would be will have crossed.",
                hi: "'7 बजे नदी के बीच होंगे' — चलता दृश्य → will be crossing; '7 तक पार कर लेंगे' होता तो will have crossed।",
              },
            },
            {
              wrong: "The manager has promised us this visit months before the project started.",
              right: "The manager had promised us this visit months before the project started.",
              note: {
                bn: "'project started'-এর আগের প্রতিশ্রুতি → past perfect; বাংলা 'করেছিলেন' রূপ শুনে has বসিয়ে দেওয়া হয়, কিন্তু রেফারেন্স-বিন্দুটা অতীত।",
                en: "A promise made before 'the project started' → past perfect; the Bengali 'করেছিলেন' tempts learners into has, but the reference point is past.",
                hi: "'project started' से पहले किया वादा → past perfect; हिंदी 'कर चुके थे' सुनकर has लग जाता है, पर संदर्भ-बिंदु अतीत है।",
              },
            },
            {
              wrong: "This time tomorrow I will sit in the workshop.",
              right: "This time tomorrow I will be sitting in the workshop.",
              note: {
                bn: "'আগামীকাল এই সময়ে' ওই মুহূর্তে বসে থাকার অবস্থা চলমান — future continuous; will sit মানে ওই সময়ে বসা শুরু করা।",
                en: "'This time tomorrow' the sitting will be ongoing — future continuous; will sit would mean the sitting starts at that moment.",
                hi: "'कल इसी समय' बैठना चल रहा होगा — future continuous; will sit का मतलब होगा उसी क्षण बैठना शुरू।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "by + সময় দেখলে চোখ বন্ধ করে future perfect বসান; this time বা at + সময় + চলমান দৃশ্য দেখলে future continuous।",
          en: "When you see by + time, choose the future perfect; when you see this time or at + time with a scene in progress, choose the future continuous.",
          hi: "by + समय देखते ही future perfect लगाएँ; this time या at + समय + चलता दृश्य देखें तो future continuous।",
        },
        {
          bn: "train, bus, flight, class, exam, show — এই শব্দগুলোর সঙ্গে ঘড়ির সময় থাকলে ভবিষ্যতের বাক্যেও present simple।",
          en: "With train, bus, flight, class, exam, show and clock time, use the present simple even in a future sentence.",
          hi: "train, bus, flight, class, exam, show के साथ घड़ी का समय हो तो भविष्य-वाक्य में भी present simple।",
        },
        {
          bn: "when, before, after, until, as soon as-clause-এ will কখনও নয় — ভবিষ্যৎ অর্থেও present form বসান।",
          en: "Never put will in when/before/after/until/as soon as clauses — use the present form even for future meaning.",
          hi: "when, before, after, until, as soon as clause में will कभी नहीं — भविष्य के लिए भी present form लगाएँ।",
        },
        {
          bn: "since/for দেখলে প্রশ্ন করুন: কাজটা এখনও চলছে? হ্যাঁ হলে have/has been + -ing।",
          en: "On seeing since/for ask: is the action still going on? If yes, use have/has been + -ing.",
          hi: "since/for देखकर पूछें: काम अब भी चल रहा है? हाँ हो तो have/has been + -ing।",
        },
        {
          bn: "wish/if only-এর পরে tense সবসময় এক ধাপ পিছিয়ে যায় — বর্তমান আফসোসেও অতীত রূপ।",
          en: "After wish/if only the tense always steps back one — even present regrets take a past form.",
          hi: "wish/if only के बाद tense हमेशा एक क़दम पीछे — वर्तमान पछतावे पर भी past रूप।",
        },
        {
          bn: "past perfect গল্পে মসলার মতো — দুটো অতীত ঘটনার ক্রম স্পষ্ট করতেই শুধু দিন, প্রতি বাক্যে নয়।",
          en: "Use the past perfect like a spice — only to order two past events, not in every sentence.",
          hi: "past perfect मसाले जैसा है — केवल दो अतीत घटनाओं का क्रम साफ़ करने के लिए, हर वाक्य में नहीं।",
        },
        {
          bn: "I am loving / I am hoping কথ্য ভাষার রং; রিপোর্ট, ইমেইল বা পরীক্ষার উত্তরে I love / I hope লিখুন।",
          en: "I am loving / I am hoping is casual colour; in reports, emails or exam answers write I love / I hope.",
          hi: "I am loving / I am hoping बोलचाल का रंग है; रिपोर्ट, ईमेल या परीक्षा में I love / I hope लिखें।",
        },
        {
          bn: "বাংলা থেকে অনুবাদের আগে জিজ্ঞেস করুন: এটা schedule, arrangement, অভিপ্রায়, নাকি মুহূর্তের সিদ্ধান্ত? — উত্তরই ভবিষ্যৎ-রূপ ঠিক করবে।",
          en: "Before translating from Bengali ask: is this a schedule, an arrangement, an intention, or a decision made now? — the answer picks the future form.",
          hi: "हिंदी/बांग्ला से अनुवाद से पहले पूछें: यह schedule, arrangement, इरादा, या अभी का निर्णय? — जवाब ही future-रूप चुनेगा।",
        },
        {
          bn: "রাতে ঘুমানোর আগে দিনের ঘটনাগুলো মুখে বলুন — আগে ঘটা ঘটনায় had, পরেরগুলোতে সাধারণ past; এভাবেই past perfect-এর নিয়ন্ত্রণ আসে।",
          en: "Retell the day's events aloud before bed — had on the earlier events, plain past on the rest; that is how past perfect control grows.",
          hi: "सोने से पहले दिन की घटनाएँ बोलकर दोहराएँ — पहली घटनाओं पर had, बाकी पर साधारण past; इसी से past perfect का नियंत्रण आता है।",
        },
      ],
      quiz: [
        {
          question: "The Dhaka train ______ at 6 tomorrow morning; it is on the official timetable.",
          options: ["will leave", "leaves", "is leaving", "leave"],
          answer: 1,
          explanation: {
            bn: "নির্ধারিত সময়সূচির ঘটনা (train + ঘড়ির সময়) — ভবিষ্যতের জন্যও present simple: leaves।",
            en: "A fixed timetable event (train + clock time) takes the present simple even for the future: leaves.",
            hi: "तय समय-सारणी की घटना (train + समय) — भविष्य के लिए भी present simple: leaves।",
          },
        },
        {
          question: "This time next Sunday I ______ on the beach in Cox's Bazar.",
          options: ["will lie", "will be lying", "am lying", "lie"],
          answer: 1,
          explanation: {
            bn: "'আগামী রবিবার এই সময়ে' — ওই মুহূর্তে শুয়ে থাকা চলমান → future continuous: will be lying।",
            en: "'This time next Sunday' — at that moment the lying-down is in progress → future continuous: will be lying.",
            hi: "'अगले रविवार इसी समय' — उस क्षण लेटना चल रहा होगा → future continuous: will be lying।",
          },
        },
        {
          question: "By December we ______ the whole syllabus.",
          options: ["will finish", "are finishing", "will have finished", "finish"],
          answer: 2,
          explanation: {
            bn: "by + ভবিষ্যৎ সময় = ওই সময়ের মধ্যে সম্পূর্ণ → future perfect: will have finished।",
            en: "by + future time = complete no later than that time → future perfect: will have finished.",
            hi: "by + भविष्य-समय = उस समय तक पूरा → future perfect: will have finished।",
          },
        },
        {
          question: "______ you ______ the office car tonight? I might need it later.",
          options: ["Will — use", "Do — use", "Will — be using", "Are — using"],
          answer: 2,
          explanation: {
            bn: "অন্যের পরিকল্পনা জানার polite জিজ্ঞাসা → future continuous: Will you be using...? সরাসরি will you use কড়া শোনায়।",
            en: "A polite enquiry about someone's plans → future continuous: Will you be using...? A bare will you use sounds abrupt.",
            hi: "किसी की योजना जानने का विनम्र प्रश्न → future continuous: Will you be using...? सीधा will you use रूखा लगता है।",
          },
        },
        {
          question: "When she ______, call me immediately.",
          options: ["will arrive", "arrives", "is arriving", "arrive"],
          answer: 1,
          explanation: {
            bn: "when-clause-এ ভবিষ্যৎ অর্থেও present form: arrives — will কেবল মূল বাক্যে।",
            en: "A when-clause takes the present form even for future meaning: arrives — will only in the main clause.",
            hi: "when-clause भविष्य के लिए भी present form लेता है: arrives — will केवल मुख्य वाक्य में।",
          },
        },
        {
          question: "I ______ in this city since 2019.",
          options: ["am living", "live", "have been living", "lived"],
          answer: 2,
          explanation: {
            bn: "since + এখনও চলমান কাজ → present perfect continuous: have been living; present simple/continuous অচল।",
            en: "since + an action still in progress → present perfect continuous: have been living; the simple or continuous present fails here.",
            hi: "since + अब भी चल रहा काम → present perfect continuous: have been living; present simple/continuous यहाँ नहीं चलता।",
          },
        },
        {
          question: "I wish I ______ more free time these days.",
          options: ["have", "had", "will have", "am having"],
          answer: 1,
          explanation: {
            bn: "wish-এর পরে backshift — বর্তমান পরিস্থিতির আফসোসেও অতীত রূপ: had।",
            en: "After wish the tense backshifts — even a present regret takes the past form: had.",
            hi: "wish के बाद backshift — वर्तमान पछतावे पर भी past रूप: had।",
          },
        },
        {
          question: "Why is 'I am loving this weather!' acceptable in casual speech?",
          options: [
            "Because love is always a state verb",
            "Because in casual English love can express a momentary feeling",
            "Because all verbs take the continuous in speech",
            "Because it is a question",
          ],
          answer: 1,
          explanation: {
            bn: "কথ্য ইংরেজিতে love মুহূর্তের আনন্দ বোঝাতে continuous নিতে পারে; তবে এটা কথ্য রং — লেখায় I love বসান।",
            en: "In casual English love can take the continuous to express a momentary delight; still, in writing prefer I love.",
            hi: "बोलचाल की अंग्रेज़ी में love क्षणिक आनंद के लिए continuous ले सकता है; लेखन में I love ही रखें।",
          },
        },
        {
          question: "The show ______ by the time we reached the hall.",
          options: ["already started", "had already started", "has already started", "already starts"],
          answer: 1,
          explanation: {
            bn: "'reached'-এর আগেই শো শুরু — দুই অতীতের আগেরটা → past perfect: had already started।",
            en: "The show began before 'we reached' — the earlier of two past events → past perfect: had already started.",
            hi: "'पहुँचने' से पहले ही शो शुरू — दो अतीतों में पहली → past perfect: had already started।",
          },
        },
        {
          question: "By the time you arrive tonight, I ______ dinner, so we can eat at once.",
          options: ["will cook", "will be cooking", "will have cooked", "cook"],
          answer: 2,
          explanation: {
            bn: "'তুমি আসার আগেই রান্না শেষ, তাই একসঙ্গে খেতে পারব' — by the time-এ সম্পূর্ণতা → future perfect: will have cooked।",
            en: "The cooking must be OVER before you arrive, so we can eat together — completion with by the time → future perfect: will have cooked.",
            hi: "'तुम्हारे आने से पहले खाना बन चुका होगा, ताकि साथ खा सकें' — by the time के साथ पूर्णता → future perfect: will have cooked।",
          },
        },
      ],
    },
  },

  /* ── 2. Participle Clauses (Unit 2) ────────────────────────────────── */
  {
    topic: "Participle Clauses",
    level: "advanced",
    title: "Participle Clauses",
    unit: 2,
    data: {
      title: {
        bn: "পার্টিসিপল ক্লজ: -ing দিয়ে বাক্য চেপে লেখা",
        en: "Participle Clauses",
        hi: "पार्टिसिपल क्लॉज़: -ing से वाक्य संकुचित करना",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি দ্বিতীয় পাঠ (Unit 2)। এটি ভালোভাবে বোঝার জন্য আগের ইউনিটের Advanced Tense & Aspect Nuances-এর সঙ্গে intermediate স্তরের Relative Clauses ও Passive Voice পাঠ দুটো শেষ করে নিন — participle clause আসলে এই দুটোর সংকুচিত (compressed) রূপ। বাংলায় আমরা অবিচ্ছিন্ন কৃদন্ত দিয়ে অবশ্যই এ কাজ করি — 'হেঁটে বাড়ি ফিরছিলাম, একটা দুর্ঘটনা দেখলাম', 'কাজ শেষ করে সে চলে গেল' — অর্থাৎ কাঠামোটা চেনা চেনা। কিন্তু ইংরেজিতে এর নিজস্ব স্ব-অর্থ নিয়ম আছে: কর্তা এক হতে হবে, আগের কাজে having + V3, আর কর্তা-বিহীন participle হলে বাক্য মজা করে অন্য কাউকে দোষ দেয় (dangling modifier)। এই পাঠে চার রকম participle clause, তাদের গঠন, dangling ধরার কৌশল আর লেখায় সুন্দরভাবে ব্যবহারের নিয়ম শিখব।",
        en: "This is the second lesson of the advanced Learning Path (Unit 2). To follow it well, first finish Unit 1 (Advanced Tense & Aspect Nuances) plus the intermediate lessons on Relative Clauses and Passive Voice — a participle clause is simply a compressed form of both. Bengali does the same job with conjunctive participles — 'হেঁটে বাড়ি ফিরছিলাম, একটা দুর্ঘটনা দেখলাম', 'কাজ শেষ করে সে চলে গেল' — so the structure feels familiar. English, however, has its own strict rules: the subject must be shared, an earlier action needs having + V3, and a participle with no owner commits the famous dangling-modifier crime. In this lesson we cover the four participle clause types, their formation, how to catch danglers, and how to use them elegantly in writing.",
        hi: "यह एडवांस्ड Learning Path का दूसरा पाठ (Unit 2) है। इसे अच्छी तरह समझने के लिए पहले Unit 1 (Advanced Tense & Aspect Nuances) और intermediate स्तर के Relative Clauses व Passive Voice पाठ पूरे करें — participle clause दरअसल दोनों का संकुचित रूप है। हिंदी में हम द्वंद्व-समास/कृदंत से यही काम करते हैं — 'घर लौटते हुए मैंने एक दुर्घटना देखी', 'काम करके वह चला गया' — ढाँचा परिचित लगता है। पर अंग्रेज़ी में इसके सख़्त नियम हैं: subject साझा होना चाहिए, पहले का काम having + V3 लेता है, और बेमालिक participle प्रसिद्ध dangling-modifier ग़लती कर बैठता है। इस पाठ में चारों प्रकार, गठन, dangling पकड़ने की तरकीब और लेखन में सुंदर प्रयोग सीखेंगे।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — পুরো clause না লিখে কাজের কথা",
            en: "When to use them — saying it without a full clause",
            hi: "कब इस्तेमाल होते हैं — पूरा clause लिखे बिना कहना",
          },
          body: {
            bn: "Participle clause মানে পূর্ণ clause-এর সংকুচিত রূপ — কর্তা আর সহায়ক verb বাদ দিয়ে শুধু participle রেখে বাক্য ছোট করা। 'While I was walking home, I saw an accident' বাক্যটা 'Walking home, I saw an accident' হয়ে যায়; 'Because he had finished the report, he left' হয়ে যায় 'Having finished the report, he left'। দুটো ব্যবহার-ক্ষেত্র মনে রাখুন: (১) সময়, কারণ বা পরিস্থিতি বোঝাতে — Walking along the road, I noticed a strange house; (২) relative clause-এর সংকুচিত রূপ হিসেবে — the man who is standing at the door → the man standing at the door।\n\nকোথায় এগুলো বেশি দেখা যায়? সংবাদের প্রথম লাইনে (Caught in heavy traffic, ministers arrived late), ছবির বর্ণনায় (A boy flying a kite on the rooftop), উপন্যাসের বর্ণনায়, আর formal লেখায় — যেখানে বাক্য টানটান ও ছোট রাখতে হয়। কথ্য ভাষায় মানুষ পুরো clause বলে, কিন্তু লেখায় participle clause-ই লেখকের তূর্ণি। তবে শর্ত: participle-এর অন্তর্নিহিত কর্তা আর মূল বাক্যের কর্তা এক হতে হবে — এই এক শর্তই পরের সেকশনের ভিত্তি।",
            en: "A participle clause is a compressed full clause — the subject and helping verb are dropped, leaving only the participle, and the sentence shrinks. 'While I was walking home, I saw an accident' becomes 'Walking home, I saw an accident'; 'Because he had finished the report, he left' becomes 'Having finished the report, he left'. Remember the two main jobs: (1) expressing time, reason or circumstance — Walking along the road, I noticed a strange house; (2) compressing a relative clause — the man who is standing at the door → the man standing at the door.\n\nWhere do you meet them most? In news openers (Caught in heavy traffic, ministers arrived late), in photo captions (A boy flying a kite on the rooftop), in novelistic description, and in formal writing where sentences must stay tight. In speech people say the full clause, but in writing the participle is the writer's wand. One condition, though: the implied subject of the participle and the subject of the main clause must be the same — this single condition underpins the next sections.",
            hi: "Participle clause पूर्ण clause का संकुचित रूप है — subject और सहायक verb हटाकर केवल participle रखने से वाक्य छोटा हो जाता है। 'While I was walking home, I saw an accident' बन जाता है 'Walking home, I saw an accident'; 'Because he had finished the report, he left' बनता है 'Having finished the report, he left'। दो मुख्य काम याद रखें: (1) समय, कारण या परिस्थिति बताना — Walking along the road, I noticed a strange house; (2) relative clause को सिकोड़ना — the man who is standing at the door → the man standing at the door।\n\nसबसे ज़्यादा कहाँ दिखते हैं? समाचार की पहली पंक्तियों में (Caught in heavy traffic, ministers arrived late), फ़ोटो-कैप्शन में (A boy flying a kite on the rooftop), कथा-वर्णन में और औपचारिक लेखन में — जहाँ वाक्य तने हुए रखने होते हैं। बोलचाल में लोग पूरा clause बोलते हैं, पर लेखन में participle ही लेखक की जादूई छड़ी है। शर्त मात्र एक: participle का अन्तर्निहित subject और मुख्य वाक्य का subject एक हों — यही शर्त अगले भागों की नींव है।",
          },
          examples: [
            {
              wrong: "While I was walking home, while I was thinking about the exam, I saw an accident.",
              right: "Walking home, thinking about the exam, I saw an accident.",
              note: {
                bn: "একই কর্তার দুটো সমকালীন কাজ — দুটো while-clause-এর বদলে দুটো participle clause পাশাপাশি বসিয়ে বাক্য তাজা শোনায়।",
                en: "Two simultaneous actions with one subject — replace both while-clauses with two participle clauses side by side; the sentence breathes.",
                hi: "एक subject के दो समकालीन काम — दोनों while-clauses की जगह दो participle clauses क्रम से रखें; वाक्य ताज़ा लगता है।",
              },
            },
            {
              wrong: "The man who is standing at the door is our new manager.",
              right: "The man standing at the door is our new manager.",
              note: {
                bn: "relative clause-এর কর্তা who + be verb হলে দুটোই ফেলে দিয়ে শুধু -ing রাখা যায় — এটাই reduced relative clause।",
                en: "When a relative clause is subject + be, drop both and keep the -ing — that is a reduced relative clause.",
                hi: "relative clause अगर who + be हो, तो दोनों हटाकर केवल -ing रखें — यही reduced relative clause है।",
              },
            },
            {
              wrong: "Because she was tired after the long shift, she slept on the bus.",
              right: "Tired after the long shift, she slept on the bus.",
              note: {
                bn: "কারণ-বোঝাতে be + adjective থাকলে adjective-ই participle clause হয়ে যায় — Being শব্দটা বাদ দিলে আরও পরিপাটি।",
                en: "For a reason with be + adjective, the adjective itself becomes the participle clause — dropping 'Being' is even tighter.",
                hi: "कारण बताने में be + adjective हो तो adjective ही participle clause बन जाता है — 'Being' हटाने पर और भी सहज।",
              },
            },
            {
              wrong: "Having saw the signal, the driver slowed down.",
              right: "Having seen the signal, the driver slowed down.",
              note: {
                bn: "having-এর পরে সবসময় V3 (seen, done, written) — having + V2 নয়; এই মিশ্রণ প্রায়ই দেখা যায়।",
                en: "having always takes V3 (seen, done, written) — never having + V2; this mix-up appears surprisingly often.",
                hi: "having के बाद हमेशा V3 (seen, done, written) — having + V2 कभी नहीं; यह मिलावट अक्सर दिखती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — চার রকম participle clause",
            en: "Formation — four kinds of participle clause",
            hi: "गठन — चार प्रकार के participle clause",
          },
          body: {
            bn: "প্রসার-টেবিলের মতো পড়ুন: • Present participle (V-ing, সক্রিয় + একই সময়): Walking home, I met Karim — 'হেঁটে যাওয়ার সময়'। • Perfect participle (having + V3, সক্রিয় + আগের কাজ): Having finished the report, he left — 'শেষ করে'। • Past participle (V3, নিষ্ক্রিয়): Built in 1990, the bridge still stands — 'নির্মিত হয়েছিল বলে'। • Being + V3 (নিষ্ক্রিয় + কারণ/চলমান): Being written in simple English, the guide suits beginners — 'লেখা হচ্ছে বলে'।\n\nতিনটা অতিরিক্ত গড়ন: (১) Negative: not + participle — Not knowing the answer, he stayed quiet; (২) নিজের কর্তাসহ (absolute): The sun having set, we lit the lanterns — মূল বাক্যের কর্তা আলাদা হলে participle-এর সামনে কর্তা বসে; (৩) জায়গা: participle clause মূল বাক্যের আগেও পরেও বসে; আগে বসলে পরে কমা বাধ্যতামূলক — Having opened the gate, the guard waved at us। পরে বসলে কমা প্রায়ই দেওয়া হয়, বিশেষত কারণ-অর্থে: He left early, feeling unwell।",
            en: "Read like a prose table: • Present participle (V-ing, active + same time): Walking home, I met Karim. • Perfect participle (having + V3, active + earlier action): Having finished the report, he left. • Past participle (V3, passive): Built in 1990, the bridge still stands. • Being + V3 (passive + reason/ongoing): Being written in simple English, the guide suits beginners.\n\nThree extra shapes: (1) Negative: not + participle — Not knowing the answer, he stayed quiet; (2) with its own subject (absolute construction): The sun having set, we lit the lanterns — when the main subject differs, put the subject before the participle; (3) Position: a participle clause sits before or after the main clause; before it, a comma is compulsory — Having opened the gate, the guard waved at us. After it, a comma is usual, especially for a reason: He left early, feeling unwell.",
            hi: "गद्य-तालिका जैसा पढ़ें: • Present participle (V-ing, सक्रिय + उसी समय): Walking home, I met Karim। • Perfect participle (having + V3, सक्रिय + पहले का काम): Having finished the report, he left। • Past participle (V3, निष्क्रिय): Built in 1990, the bridge still stands। • Being + V3 (निष्क्रिय + कारण/चलता): Being written in simple English, the guide suits beginners।\n\nतीन अतिरिक्त रूप: (1) Negative: not + participle — Not knowing the answer, he stayed quiet; (2) अपना subject सहित (absolute): The sun having set, we lit the lanterns — मुख्य subject अलग हो तो participle के पहले subject रखें; (3) स्थान: participle clause मुख्य वाक्य से पहले या बाद बैठता है; पहले हो तो बाद में कॉमा अनिवार्य — Having opened the gate, the guard waved at us। बाद में हो तो कॉमा आमतौर पर देते हैं, विशेषतः कारण-अर्थ में: He left early, feeling unwell।",
          },
          examples: [
            {
              wrong: "Finish the report, he left the office.",
              right: "Having finished the report, he left the office.",
              note: {
                bn: "V1 দিয়ে clause শুরু করা যায় না; আগের কাজ বোঝাতে having + V3 — কমা পরে।",
                en: "A clause cannot open with V1; for the earlier action use having + V3 — followed by a comma.",
                hi: "Clause V1 से नहीं शुरू होता; पहले का काम having + V3 लेता है — उसके बाद कॉमा।",
              },
            },
            {
              wrong: "Not known the answer, he stayed quiet.",
              right: "Not knowing the answer, he stayed quiet.",
              note: {
                bn: "negative participle = not + V-ing যখন কর্তা সক্রিয়; V3 (known) বসলে অর্থ হয়ে যায় 'উত্তরটা জানা না-হওয়ায়'।",
                en: "A negative participle = not + V-ing when the subject is active; putting V3 (known) flips the meaning to 'as the answer was not known'.",
                hi: "Negative participle = not + V-ing जब subject सक्रिय है; V3 (known) रखने से अर्थ बदल जाता है 'जवाब न जाने जाने से'।",
              },
            },
            {
              wrong: "The sun having set, we lit the lanterns, and we lit a fire also.",
              right: "The sun having set, we lit the lanterns.",
              note: {
                bn: "absolute construction-এ participle-এর নিজের কর্তা (the sun) আছে, তাই কর্তা-মিলের নিয়ম ভাঙে না — কিন্তু বাড়তি বাক্য জোড়ার দরকার নেই।",
                en: "In an absolute construction the participle owns its subject (the sun), so the shared-subject rule does not apply — but do not tack on extra clauses.",
                hi: "Absolute construction में participle का अपना subject (the sun) है, इसलिए साझा-subject नियम नहीं टूटता — पर फ़ालतू clause जोड़ने की ज़रूरत नहीं।",
              },
            },
            {
              wrong: "Walking home I met Karim and we talked about the match.",
              right: "Walking home, I met Karim and we talked about the match.",
              note: {
                bn: "বাক্যের শুরুর participle clause-এর পরে কমা বাধ্যতামূলক — পাঠককে জানায় clause এখানেই শেষ।",
                en: "A sentence-initial participle clause must be closed with a comma — it tells the reader where the clause ends.",
                hi: "वाक्य-प्रारंभिक participle clause के बाद कॉमा अनिवार्य — पाठक को बताता है कि clause यहीं ख़त्म।",
              },
            },
            {
              wrong: "Being the bridge built in 1990, it still stands strong.",
              right: "Built in 1990, the bridge still stands strong.",
              note: {
                bn: "নিষ্ক্রিয় অর্থে শুধু V3-ই যথেষ্ট — Built in 1990, the bridge...; Being + গোলমেলে কর্তা-গোছানো অপ্রয়োজনীয়।",
                en: "For passive meaning, plain V3 is enough — Built in 1990, the bridge...; piling Being on top muddles the structure.",
                hi: "निष्क्रिय अर्थ के लिए सादा V3 ही काफ़ी है — Built in 1990, the bridge...; Being जोड़ने से ढाँचा उलझ जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন — কোনটা কখন বসবে",
            en: "Signals — choosing the right participle",
            hi: "संकेत — कौन-सा participle कब बैठेगा",
          },
          body: {
            bn: "তিনটা প্রশ্ন করলেই সিদ্ধান্ত হয়ে যায়: (১) কাজটা কে করছে — মূল বাক্যের কর্তা নিজে? তাহলে V-ing বা having + V3। মূল কর্তা কাজটা 'পেয়েছে' (নিষ্ক্রিয়)? তাহলে V3। (২) দুটো কাজের সময় — একসঙ্গে ঘটছে নাকি একটা আগে? একসঙ্গে হলে V-ing (Opening the door, she smiled); আগে-পরে হলে having + V3 (Having opened the door, she walked in)। (৩) clause-টা কাকে বর্ণনা করছে — মূল বাক্যের কর্তাকে নাকি পাশের কোনো noun-কে? পাশের noun-কে হলে সেটা reduced relative (the girl standing by the window)।\n\nনিশ্চিত করার পরীক্ষা: participle clause-টা পুরো clause-এ ভেঙে দেখুন — Walking home, I met Karim → While I was walking home, I met Karim (ঠিক আছে); Built in 1990, the bridge stands → Because it was built in 1990... (ঠিক আছে)। ভাঙলে যদি অর্থ আর কর্তা দুটোই সংগত থাকে, participle সঠিক। ভাঙলে যদি কর্তা গায়েব হয়ে যায় বা বদলে যায় — তাহলে dangling, পরের-পরের সেকশনের বিষয়।",
            en: "Three questions settle the choice: (1) Who performs the action — the main subject itself? Then V-ing or having + V3. Does the main subject receive it (passive)? Then V3. (2) Timing of two actions — simultaneous, or one first? Simultaneous takes V-ing (Opening the door, she smiled); earlier-first takes having + V3 (Having opened the door, she walked in). (3) What is the clause describing — the main subject or a nearby noun? A nearby noun means a reduced relative (the girl standing by the window).\n\nThe confirmation test: expand the participle clause into a full clause — Walking home, I met Karim → While I was walking home, I met Karim (works); Built in 1990, the bridge stands → Because it was built in 1990... (works). If expansion keeps both the meaning and the subject sensible, the participle is correct. If the subject vanishes or changes on expansion — that is a dangler, the business of the next sections.",
            hi: "तीन सवाल चुनाव तय कर देते हैं: (1) काम कौन कर रहा है — मुख्य subject स्वयं? तो V-ing या having + V3। मुख्य subject काम 'पाता' है (निष्क्रिय)? तो V3। (2) दो कामों का समय — एक साथ या एक पहले? एक साथ तो V-ing (Opening the door, she smiled); पहले-बाद तो having + V3 (Having opened the door, she walked in)। (3) clause किसे वर्णित कर रहा है — मुख्य subject को या नज़दीकी noun को? नज़दीकी noun हो तो वह reduced relative है (the girl standing by the window)।\n\nपुष्टि का परीक्षण: participle clause को पूरे clause में खोलें — Walking home, I met Karim → While I was walking home, I met Karim (ठीक); Built in 1990, the bridge stands → Because it was built in 1990... (ठीक)। खोलने पर अर्थ और subject दोनों संगत रहें तो participle सही। खोलने पर subject ग़ायब या बदल जाए — तो वह dangling है, जो अगले भागों का विषय है।",
          },
          examples: [
            {
              wrong: "Opened in 1990, the engineer still remembers the ceremony.",
              right: "Built in 1990, the bridge is a city landmark. / Having opened in 1990, the bridge still carries traffic.",
              note: {
                bn: "bridge 'খোলা হয়েছে' — কিন্তু মূল কর্তা engineer; কর্তা-অমিল। হয় কর্তা বদলান (the bridge), নয়তো বর্ণনার বিষয় বদলান।",
                en: "The bridge was opened, but the main subject is the engineer — a subject mismatch. Either change the subject (the bridge) or change what is being described.",
                hi: "Bridge खोला गया था, पर मुख्य subject engineer है — subject-असंगति। या तो subject बदलें (the bridge), या वर्णन का विषय बदलें।",
              },
            },
            {
              wrong: "Opening the letter, she started to cry, and after opening it she read it twice.",
              right: "Opening the letter, she started to cry, then read it twice.",
              note: {
                bn: "একই participle clause দুবার লেখা অপ্রয়োজনীয় — একবার বললেই চলে; তারপরের কাজ মূল verb-এ চলে যায়।",
                en: "Repeating the same participle clause twice is redundant — say it once; later actions ride on the main verbs.",
                hi: "एक ही participle clause दो बार लिखना बेमतलब — एक बार कहें; बाद के काम मुख्य verbs पर चलते हैं।",
              },
            },
            {
              wrong: "The girl who standing by the window is my cousin.",
              right: "The girl standing by the window is my cousin.",
              note: {
                bn: "reduced relative-এ who/that + be দুটোই বাদ — শুধু -ing রাখুন; who + কাঁচা verb বসানো উচ্চ স্তরেও হয়।",
                en: "In a reduced relative, drop who/that + be together — keep only the -ing; leaving a bare verb after who still happens at advanced level.",
                hi: "Reduced relative में who/that + be दोनों हटाएँ — केवल -ing रखें; who के बाद कच्चा verb छूट जाना एडवांस्ड स्तर पर भी होता है।",
              },
            },
            {
              wrong: "Having finished the report, the report was sent to the client.",
              right: "Having finished the report, she sent it to the client.",
              note: {
                bn: "report নিজে নিজের রিপোর্ট শেষ করতে পারে না — কর্তা হতে হবে কাজ করা মানুষ; মূল কর্তায় she বসালে বাক্য সোজা।",
                en: "A report cannot finish its own report — the subject must be the person doing the action; putting she in the main clause straightens the sentence.",
                hi: "रिपोर्ट अपनी ही रिपोर्ट पूरी नहीं कर सकती — subject काम करने वाला व्यक्ति होना चाहिए; मुख्य subject she करने पर वाक्य सीधा हो जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "having + V3 — 'করেই' দিয়ে আগের কাজ",
            en: "having + V3 — marking the earlier action",
            hi: "having + V3 — पहले हुए काम की निशानी",
          },
          body: {
            bn: "বাংলায় আমরা অবিচ্ছিন্ন কৃদন্ত দিয়ে খুব স্বাভাবিকভাবে ক্রম বোঝাই — 'খুলে', 'করে', 'শেষ করেই'। having + V3 ঠিক সেই কাজটাই ইংরেজিতে করে: দুটো কাজের মধ্যে আগেরটাকে চিহ্নিত করে। Opening the gate, the guard waved at us = খোলার সঙ্গে সঙ্গেই হাত নাড়লেন (একই সময়)। Having opened the gate, the guard checked our passes = গেট খুলে নেওয়ার পর পাস দেখলেন (আগে খোলা, পরে দেখা)। ফারাকটা চোখে আঙুল দিয়ে দেখানোর মতো, কিন্তু শিক্ষার্থীরা প্রায়ই দুটোর জায়গা অদল-বদল করেন।\n\nকখন having + V3 আর কখন after + -ing? দুটোই সঠিক: Having finished the exam, she walked out = After finishing the exam, she walked out। লেখার ভাষায় having + V3 বেশি আনুষ্ঠানিক ও ঘন; কথ্য ভাষায় after/before + -ing বেশি চলে। আরেকটা সতর্কতা: আগের কাজটা মূল কর্তার হলেই having + V3 — কর্তা আলাদা হলে পুরো clause লিখতে হবে: After the guests had left, we washed the dishes (এখানে having + V3 নয়, কারণ অতিথিরা আর আমরা এক নই)।",
            en: "Bengali marks sequence very naturally with conjunctive participles — 'খুলে', 'করে', 'শেষ করেই'. having + V3 does exactly that job in English: it flags the earlier of two actions. Opening the gate, the guard waved at us = waving at the same time as opening. Having opened the gate, the guard checked our passes = opened first, then checked. The difference is as clear as daylight, yet learners often swap the two.\n\nWhen having + V3 and when after + -ing? Both are correct: Having finished the exam, she walked out = After finishing the exam, she walked out. Formal writing prefers having + V3 for its tightness; speech prefers after/before + -ing. One caution: having + V3 works only when the earlier action belongs to the main subject — with a different subject, write the full clause: After the guests had left, we washed the dishes (not having + V3, because the guests and we are not one).",
            hi: "हिंदी/बांग्ला क्रम बहुत सहजता से कृदंत से दिखाते हैं — 'खोलकर', 'करके', 'पूरा करके ही'। having + V3 अंग्रेज़ी में वही काम करता है: दो कामों में से पहले को चिह्नित करता है। Opening the gate, the guard waved at us = खोलते ही हाथ हिलाया (एक ही समय)। Having opened the gate, the guard checked our passes = पहले खोला, फिर पास देखा। फ़र्क़ साफ़ है, फिर भी शिक्षार्थी दोनों की जगह अक्सर बदल देते हैं।\n\nhaving + V3 कब और after + -ing कब? दोनों सही: Having finished the exam, she walked out = After finishing the exam, she walked out। औपचारिक लेखन having + V3 की तनी हुई बनावट पसंद करता है; बोलचाल after/before + -ing पसंद करता है। एक सावधानी: having + V3 तभी जब पहला काम मुख्य subject का हो — subject अलग हो तो पूरा clause लिखें: After the guests had left, we washed the dishes (having + V3 नहीं, क्योंकि मेहमान और हम एक नहीं)।",
          },
          examples: [
            {
              wrong: "Finishing the exam, she walked out of the hall.",
              right: "Having finished the exam, she walked out of the hall.",
              note: {
                bn: "পরীক্ষা শেষ হওয়া আগে, হল থেকে বেরোনো পরে — ক্রম স্পষ্ট হলে having + V3; শুধু -ing হলে মনে হয় শেষ করছিল বেরোনোর সময়।",
                en: "Finishing came first, leaving second — with a clear sequence use having + V3; plain -ing suggests the finishing was still going on as she left.",
                hi: "परीक्षा पहले ख़त्म हुई, निकलना बाद में — स्पष्ट क्रम में having + V3; केवल -ing होता तो लगता कि निकलते वक़्त परीक्षा अभी ख़त्म हो रही थी।",
              },
            },
            {
              wrong: "Having cooked dinner, the phone rang.",
              right: "Having cooked dinner, she sat down to eat. / She was cooking dinner when the phone rang.",
              note: {
                bn: "ফোন রান্না করে না — dangling; হয় মূল কর্তায় রাঁধুনি (she), নয়তো when-clause দিয়ে সময় বোঝান।",
                en: "The phone does not cook — a dangler; either make the cook the main subject (she), or show the timing with a when-clause.",
                hi: "फ़ोन खाना नहीं बनाता — dangling; या तो रसोइए को मुख्य subject बनाएँ (she), या when-clause से समय दिखाएँ।",
              },
            },
            {
              wrong: "After the guests had left, having washed the dishes, we watched TV.",
              right: "After the guests had left, we washed the dishes and watched TV.",
              note: {
                bn: "কর্তা আলাদা হলে (guests ≠ we) having + V3 চলে না — পুরো clause লিখুন; আর বাক্য টানটান রাখতে অতিরিক্ত participle এড়িয়ে চলুন।",
                en: "With a different subject (guests ≠ we), having + V3 is out — write the full clause; and skip extra participles to keep the sentence tight.",
                hi: "Subject अलग हो (guests ≠ we) तो having + V3 नहीं चलेगा — पूरा clause लिखें; और वाक्य तना रखने के लिए अतिरिक्त participles टालें।",
              },
            },
            {
              wrong: "Having been finished the report, she emailed it.",
              right: "Having finished the report, she emailed it.",
              note: {
                bn: "কর্তা নিজেই কাজ করেছে (সক্রিয়) — having + V3-ই যথেষ্ট; Having been finished নিষ্ক্রিয় রূপ, অর্থ উল্টে যায়।",
                en: "The subject did the finishing (active) — having + V3 is enough; Having been finished is the passive shape and reverses the meaning.",
                hi: "Subject ने स्वयं काम पूरा किया (सक्रिय) — having + V3 ही काफ़ी; Having been finished निष्क्रिय रूप है और अर्थ उलट देता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Dangling modifiers — participle কাকে বর্ণনা করছে?",
            en: "Dangling modifiers — who is the participle describing?",
            hi: "Dangling modifiers — participle किसे वर्णित कर रहा है?",
          },
          body: {
            bn: "Walking home, the rain started — এই বাক্যে ইংরেজি ব্যাকরণ কান পেতে বসে: কে হেঁটেছিল? বাক্যের গড়ন অনুযায়ী উত্তর হয়ে দাঁড়ায় the rain — বৃষ্টি হেঁটেছিল! এটাই dangling modifier: participle clause-এর অন্তর্নিহিত কর্তা মূল বাক্যের কর্তার সঙ্গে মেলে না, ফলে হাস্যকর বা অসংগত অর্থ তৈরি হয়। বাংলা পাঠ্যবইয়ের একটা বিখ্যাত ক্যাল্ক ভুল: 'Being a rainy day, we stayed home' — দিন আমরা নয়; সঠিক হবে It being a rainy day, we stayed home বা Because it was a rainy day, we stayed home।\n\nধরার কৌশল তিন ধাপে: (১) participle clause-এর সামনে মনে মনে কর্তা বসান — Walking home, [I] saw... ; (২) সেই মনগড়া কর্তা কি মূল বাক্যের কর্তারই রূপ? (৩) না হলে ভুল। মেরামতের তিন রাস্তা: মূল কর্তা বদলান (Walking home, I got caught in the rain); পুরো clause লিখুন (While I was walking home, it started raining); বা participle-কে নিজের কর্তা দিন (The sky being dark, we turned back)। সংবাদপত্র পড়তে পড়তে নিজে একবার dangling ধরতে পারলে এই দক্ষতা স্থায়ী হয়ে যায়।",
            en: "In 'Walking home, the rain started' English grammar pricks up its ears: who walked? By sentence structure the answer becomes the rain — the rain walked! That is a dangling modifier: the implied subject of the participle clause does not match the main subject, producing comic or incoherent meaning. A famous textbook calque: 'Being a rainy day, we stayed home' — the day is not us; correct is It being a rainy day, we stayed home or Because it was a rainy day, we stayed home.\n\nA three-step detection routine: (1) mentally place a subject before the participle — Walking home, [I] saw...; (2) is that imagined subject the same as the main-clause subject? (3) If not, it is wrong. Three repair routes: change the main subject (Walking home, I got caught in the rain); write the full clause (While I was walking home, it started raining); or give the participle its own subject (The sky being dark, we turned back). Once you can catch a dangler in a newspaper, the skill is permanent.",
            hi: "'Walking home, the rain started' में अंग्रेज़ी व्याकरण कान खड़ा करता है: कौन चला? ढाँचे के हिसाब से जवाब बन जाता है the rain — बारिश चली! यही dangling modifier है: participle का अन्तर्निहित subject मुख्य subject से मेल नहीं खाता, और हास्यास्पद या असंगत अर्थ बन जाता है। पाठ्यपुस्तकों की प्रसिद्ध कॉपी-ग़लती: 'Being a rainy day, we stayed home' — दिन हम नहीं हैं; सही होगा It being a rainy day, we stayed home या Because it was a rainy day, we stayed home।\n\nपकड़ने की तीन-चरणीय विधि: (1) participle से पहले मन में subject रखें — Walking home, [I] saw...; (2) क्या वह काल्पनिक subject मुख्य वाक्य के subject से मिलता है? (3) नहीं तो ग़लत। मरम्मत के तीन रास्ते: मुख्य subject बदलें (Walking home, I got caught in the rain); पूरा clause लिखें (While I was walking home, it started raining); या participle को अपना subject दें (The sky being dark, we turned back)। अख़बार में ख़ुद एक dangler पकड़ लेना — यह कौशल तब स्थायी हो जाता है।",
          },
          examples: [
            {
              wrong: "Walking home, the rain started.",
              right: "Walking home, I got caught in the rain. / While I was walking home, it started raining.",
              note: {
                bn: "বৃষ্টি হাঁটে না — কর্তা-অমিল; হয় মূল কর্তায় 'আমি', নয়তো while-clause-এ বৃষ্টির নিজের কর্তা।",
                en: "Rain does not walk — a subject mismatch; either make 'I' the main subject, or give the rain its own while-clause.",
                hi: "बारिश नहीं चलती — subject-असंगति; या तो मुख्य subject 'I' करें, या बारिश को अपना while-clause दें।",
              },
            },
            {
              wrong: "Being a rainy day, we stayed home.",
              right: "It being a rainy day, we stayed home. / Because it was a rainy day, we stayed home.",
              note: {
                bn: "'বৃষ্টির দিন হওয়ায়' বাংলা গড়নের সরাসরি অনুবাদ — ইংরেজিতে দিনের নিজের কর্তা (it) লাগবে বা পুরো clause।",
                en: "A direct translation of the Bengali 'বৃষ্টির দিন হওয়ায়' — English needs the day's own subject (it) or a full clause.",
                hi: "बांग्ला 'बारिश का दिन होने से' का सीधा अनुवाद — अंग्रेज़ी में दिन का अपना subject (it) चाहिए या पूरा clause।",
              },
            },
            {
              wrong: "Having entered the room, the light was switched on.",
              right: "Having entered the room, she switched on the light.",
              note: {
                bn: "আলো ঘরে ঢোকে না — ঢোকা মানুষটাই মূল কর্তা হবে; প্রশ্ন করুন: কে ঢুকল, কে জ্বালাল?",
                en: "The light does not enter the room — the person who entered must be the subject; ask: who entered, who switched on?",
                hi: "रोशनी कमरे में नहीं घुसती — घुसने वाला ही subject होगा; पूछें: कौन घुसा, किसने जलाया?",
              },
            },
            {
              wrong: "Standing on the balcony, the view is amazing.",
              right: "Standing on the balcony, we enjoyed an amazing view.",
              note: {
                bn: "view বারান্দায় দাঁড়ায় না — দাঁড়ানো মানুষটাই কর্তা; বাংলা 'বারান্দায় দাঁড়ালে দৃশ্য দারুণ লাগে' গড়নটাই এই ভুল করায়।",
                en: "The view does not stand on the balcony — the standing person is the subject; the Bengali framing 'বারান্দায় দাঁড়ালে দৃশ্য দারুণ লাগে' invites this error.",
                hi: "नज़ारा बालकनी पर नहीं खड़ा होता — खड़ा होने वाला ही subject है; 'बालकनी पर खड़े होकर नज़ारा शानदार लगता है' ढाँचा यही ग़लती कराता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "নিষ্ক্রিয় participle ও reduced relative — লেখার ছুরি",
            en: "Passive participles and reduced relatives — the writer's knife",
            hi: "निष्क्रिय participles और reduced relatives — लेखक की छुरी",
          },
          body: {
            bn: "মূল কর্তা কাজটা নিজে করে না, বরং কাজটার উপরে ঘটে — তখন V3 দিয়ে clause শুরু হয়: Built in 1990, the bridge is still the busiest in town (= which was built); Written in simple English, the guide helps beginners (= which is written); Kept in a cool place, this medicine lasts two years (= if it is kept)। চলমান নিষ্ক্রিয় অর্থে being + V3: Being repaired, the lift is out of service (= as it is being repaired)। বাংলা '১৯৯০ সালে নির্মিত' — 'মিত' প্রত্যয়ের রূপটাই V3-এর হুবহু প্রতিবিম্ব, তাই এই গড়ন বাঙালি পাঠকের চোখে চেনা।\n\nলেখার সবচেয়ে কাজের হাতিয়ার reduced relative: noun-এর পরে who/which/that + be ফেলে দিয়ে participle বসানো — the parcel that was delivered yesterday → the parcel delivered yesterday; students who wish to apply → students wishing to apply; a house which is being built → a house being built। আর এক উচ্চ-স্তরের রত্ন, absolute construction: মূল বাক্যের কর্তা আলাদা হলে participle-এর সামনে কর্তা বসে — He stood at the door, his eyes fixed on the clock; The exams being over, the hostel emptied out। সাহিত্য আর সংবাদ উভয়েই এই গড়নে ভরা।",
            en: "When the main subject does not perform the action but undergoes it, the clause opens with V3: Built in 1990, the bridge is still the busiest in town (= which was built); Written in simple English, the guide helps beginners (= which is written); Kept in a cool place, this medicine lasts two years (= if it is kept). For an ongoing passive, being + V3: Being repaired, the lift is out of service (= as it is being repaired). The Bengali '১৯৯০ সালে নির্মিত' — the '-মিত' suffix form — is a mirror image of V3, so this shape looks familiar to Bengali readers.\n\nThe writer's sharpest tool is the reduced relative: after a noun, drop who/which/that + be and keep the participle — the parcel that was delivered yesterday → the parcel delivered yesterday; students who wish to apply → students wishing to apply; a house which is being built → a house being built. And one advanced gem, the absolute construction: when the main subject is different, place a subject before the participle — He stood at the door, his eyes fixed on the clock; The exams being over, the hostel emptied out. Both fiction and news are full of this shape.",
            hi: "जब मुख्य subject काम करता नहीं बल्कि काम उस पर होता है, तो clause V3 से शुरू होता है: Built in 1990, the bridge is still the busiest in town (= which was built); Written in simple English, the guide helps beginners (= which is written); Kept in a cool place, this medicine lasts two years (= if it is kept)। चलते निष्क्रिय अर्थ के लिए being + V3: Being repaired, the lift is out of service (= as it is being repaired)। बांग्ला '1990 सालে नির্মিত' — '-मित' प्रत्यय वाला रूप V3 की हूबहू प्रतिबिंब है, इसलिए यह आकार बांग्ला-हिंदी पाठक को परिचित लगता है।\n\nलेखक का सबसे तेज़ औज़ार reduced relative है: noun के बाद who/which/that + be हटाकर participle रखें — the parcel that was delivered yesterday → the parcel delivered yesterday; students who wish to apply → students wishing to apply; a house which is being built → a house being built। और एक एडवांस्ड रत्न, absolute construction: मुख्य subject अलग हो तो participle के पहले subject रखें — He stood at the door, his eyes fixed on the clock; The exams being over, the hostel emptied out। कहानी और ख़बर दोनों इसी आकार से भरे हैं।",
          },
          examples: [
            {
              wrong: "The bridge which was built in 1990 is still the busiest in town.",
              right: "Built in 1990, the bridge is still the busiest in town.",
              note: {
                bn: "which was built-এর সংকুচিত রূপ Built in 1990 — কমা দিয়ে শুরুতে সরিয়ে লেখা তৎক্ষণাৎ পেশাদার দেখায়।",
                en: "Built in 1990 compresses which was built — moved to the front with a comma, the sentence instantly reads professional.",
                hi: "Built in 1990, which was built को सिकोड़ता है — कॉमा सहित शुरू में रखते ही वाक्य पेशेवर लगता है।",
              },
            },
            {
              wrong: "The parcel which delivered yesterday has not arrived.",
              right: "The parcel delivered yesterday has not arrived.",
              note: {
                bn: "parcel 'পৌঁছে দেওয়া হয়েছে' — নিষ্ক্রিয়; which was delivered → delivered; which + V2 গড়নটা ভুল।",
                en: "The parcel was delivered (passive) — which was delivered → delivered; a which + V2 shape is wrong.",
                hi: "Parcel 'पहुँचाया गया' — निष्क्रिय; which was delivered → delivered; which + V2 वाला रूप ग़लत है।",
              },
            },
            {
              wrong: "The lift is out of service, because it is repaired now.",
              right: "Being repaired, the lift is out of service.",
              note: {
                bn: "'এই মুহূর্তে মেরামত হচ্ছে' — চলমান নিষ্ক্রিয় → being + V3; because-clause না লিখেও কারণ বোঝানো যায়।",
                en: "'Repair is happening right now' — ongoing passive → being + V3; the reason survives without a because-clause.",
                hi: "'अभी मरम्मत चल रही है' — चलता निष्क्रिय → being + V3; because-clause के बिना भी कारण बनता है।",
              },
            },
            {
              wrong: "He stood at the door and his eyes were fixed on the clock and he waited.",
              right: "He stood at the door, his eyes fixed on the clock, and waited.",
              note: {
                bn: "absolute construction — his eyes fixed on the clock-এ 'eyes'-এর নিজের কর্তা আছে; and...and শৃঙ্খল ভেঙে লেখা টানটান হয়।",
                en: "An absolute construction — his eyes fixed on the clock carries its own subject; breaking the and...and chain tightens the writing.",
                hi: "Absolute construction — his eyes fixed on the clock का अपना subject है; and...and की श्रृंखला तोड़ने से लेखन तना रहता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors made by advanced learners",
            hi: "एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "Advanced স্তরে participle-এর ভুল তিন জায়গায় লুকিয়ে থাকে। প্রথম: সূচনার শব্দ ভুল — After finished my work, I went out (After-এর পরে -ing বা পূর্ণ clause, V1/V2 নয়); সঠিক After finishing my work বা Having finished my work। দ্বিতীয়: কমার অনুপস্থিতি — বাক্যের শুরুর participle clause-এর পরে কমা না দিলে পাঠক প্রথম পড়ায় বিভ্রান্ত হয়: Walking home I saw a dog-এ কমা ছাড়া পড়ে গেলে হাঁটা আর দেখার সীমানা মিলিয়ে যায়।\n\nতৃতীয় আর সবচেয়ে মজার দল: ঠিক participle-কে ভুল ধরে মেরামত করা! Considering the weather, we cancelled the trip — এখানে considering fixed idiom (যেমন considering, regarding, judging by); এর পরে কর্তা-মিল লাগে না, তাই এটা dangling নয়। একইভাবে Seen from the hill, the city looks beautiful সঠিক — শহরই দেখা যাচ্ছে (নিষ্ক্রিয়)। উচ্চ স্তরের শিক্ষার্থীরা প্রায়ই এ দুটোকে dangling ভেবে ভাঙা মেরামত করেন আর লেখাটা খামখেয়ালি হয়ে যায়। নিয়মটা মনে রাখুন: নিষ্ক্রিয় অর্থ স্পষ্ট হলে V3-clause থাক, আর idiom-participle-এ হাত দেবেন না।",
            en: "At advanced level, participle errors hide in three places. First: the wrong opener — After finished my work, I went out (after takes -ing or a full clause, not V1/V2); correct is After finishing my work or Having finished my work. Second: the missing comma — without a comma after a sentence-initial participle clause, the first reading stumbles: in Walking home I saw a dog, walking and seeing blur together.\n\nThird, and the most interesting group: repairing participles that were actually right! Considering the weather, we cancelled the trip — considering is a fixed idiom (like regarding, judging by); it needs no subject match, so it is not a dangler. Likewise Seen from the hill, the city looks beautiful is correct — the city is what is seen (passive). Advanced learners often mistake both for danglers and 'fix' them, making the writing erratic. Remember: if the passive meaning is clear, keep the V3 clause, and never touch idiom-participles.",
            hi: "एडवांस्ड स्तर पर participle की ग़लतियाँ तीन जगह छिपी होती हैं। पहला: ग़लत आरंभ-शब्द — After finished my work, I went out (after के बाद -ing या पूर्ण clause, V1/V2 नहीं); सही है After finishing my work या Having finished my work। दूसरा: कॉमा की कमी — वाक्य-प्रारंभिक participle clause के बाद कॉमा न हो तो पहली पढ़ाई में पैर फिसलता है: Walking home I saw a dog में चलना और देखना मिल जाते हैं।\n\nतीसरा, और सबसे रोचक समूह: सही participle को ग़लत समझकर मरम्मत! Considering the weather, we cancelled the trip — considering एक स्थिर मुहावरा है (जैसे regarding, judging by); इसे subject-मेल नहीं चाहिए, इसलिए यह dangling नहीं। इसी तरह Seen from the hill, the city looks beautiful सही है — शहर ही दिख रहा है (निष्क्रिय)। एडवांस्ड शिक्षार्थी दोनों को dangling समझकर 'सुधार' देते हैं और लेखन बिगड़ जाता है। नियम याद रखें: निष्क्रिय अर्थ स्पष्ट हो तो V3-clause रखें, और idiom-participle को हाथ न लगाएँ।",
          },
          examples: [
            {
              wrong: "After finished my work, I went out for a walk.",
              right: "Having finished my work, I went out for a walk. / After finishing my work, I went out for a walk.",
              note: {
                bn: "After-এর পরে V1 (finished-এর নaked রূপ) আসে না — হয় after + -ing, নয়তো having + V3।",
                en: "After is never followed by V1 — use after + -ing or having + V3.",
                hi: "After के बाद V1 नहीं आता — after + -ing या having + V3 लगाएँ।",
              },
            },
            {
              wrong: "Walking home I saw a snake and I froze.",
              right: "Walking home, I saw a snake and froze.",
              note: {
                bn: "সূচনা-participle-এর পরে কমা আবশ্যক; আর দ্বিতীয় I বাদ দিয়ে froze-ই যথেষ্ট — বাক্য টানটান হয়।",
                en: "A comma after the opening participle is compulsory; and dropping the second I keeps the sentence taut.",
                hi: "शुरुआती participle के बाद कॉमा अनिवार्य; और दूसरा I हटाकर froze ही काफ़ी — वाक्य तना रहता है।",
              },
            },
            {
              wrong: "Considered the weather, we cancelled the trip.",
              right: "Considering the weather, we cancelled the trip.",
              note: {
                bn: "considering fixed idiom — 'ভেবে দেখে'; V3 (considered) দিলে অর্থ হয় 'আমরা বিবেচিত হয়ে...' — বাজে।",
                en: "considering is a fixed idiom — 'taking into account'; V3 (considered) would absurdly mean 'as we were considered'.",
                hi: "considering स्थिर मुहावरा है — 'ध्यान में रखते हुए'; V3 (considered) लिखने से बेतुका अर्थ बनता है।",
              },
            },
            {
              wrong: "Seen from the hill, we thought the city looked beautiful. (intended: the city looks beautiful)",
              right: "Seen from the hill, the city looks beautiful.",
              note: {
                bn: "এখানে V3-clause সঠিক — শহরই দেখা যাচ্ছে; মেরামতের নামে 'we thought' ঢুকিয়ে দিলে শক্তিশালী গড়নটা নরম হয়ে যায়।",
                en: "Here the V3 clause is already right — the city is what is seen; 'fixing' it by inserting we thought only weakens a strong shape.",
                hi: "यहाँ V3-clause पहले से सही है — शहर ही दिख रहा है; 'सुधार' के नाम पर we thought जोड़ने से ताक़तवर रूप कमज़ोर हो जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক + এক নজরে",
            en: "Seen in a short story + at a glance",
            hi: "छोटी कहानी में देखिए + एक नज़र में",
          },
          body: {
            bn: "নিচের অনুচ্ছেদটা পড়ুন — প্রতিটা participle clause-এর নিচে মনে মনে পুরো clause খুলে দেখুন: 'Built in 1971, the old library still stands at the corner of the campus. Having climbed the creaky stairs, I found the reading room almost empty. Sunlight streamed through the tall windows, falling on rows of dusty shelves. Not wanting to disturb the librarian, I tip-toed to the history section. An old map, drawn by a colonial surveyor, hung beside the door. Standing there, I felt time slow down. Having spent an hour among those books, I left with two new friends tucked under my arm.' দেখুন — সক্রিয়, নিষ্ক্রিয়, perfect, negative, absolute: পাঁচ রকম রং এক প্যারায়।\n\nএক নজরে: (১) কর্তা এক হতে হবে — অমিল হলে dangling; (২) একসঙ্গের কাজ → V-ing; আগের কাজ → having + V3; (৩) নিষ্ক্রিয় অর্থ → V3 বা being + V3; (৪) বাক্যের শুরুর clause-এর পরে কমা; (৫) relative clause সংকুচিত করতে who/which + be ফেলুন; (৬) considering/regarding-এর মতো idiom-participle-এ হাত দেবেন না। অনুশীলন: নিজের দিনের ব্যাপার্টা লিখুন, প্রতি বাক্যে একটা করে participle clause ঢোকান — তারপর dangling-এর জন্য শিকারির মতো পড়ুন।",
            en: "Read this paragraph — under each participle clause, mentally expand the full clause: 'Built in 1971, the old library still stands at the corner of the campus. Having climbed the creaky stairs, I found the reading room almost empty. Sunlight streamed through the tall windows, falling on rows of dusty shelves. Not wanting to disturb the librarian, I tip-toed to the history section. An old map, drawn by a colonial surveyor, hung beside the door. Standing there, I felt time slow down. Having spent an hour among those books, I left with two new friends tucked under my arm.' Notice — active, passive, perfect, negative, absolute: five shades in one paragraph.\n\nAt a glance: (1) the subject must be shared — mismatch means dangler; (2) simultaneous action → V-ing; earlier action → having + V3; (3) passive meaning → V3 or being + V3; (4) a comma after a sentence-initial clause; (5) compress relatives by dropping who/which + be; (6) leave idiom-participles like considering/regarding untouched. Practice: write an account of your day slipping one participle clause into each sentence — then read it like a hunter after danglers.",
            hi: "यह अनुच्छेद पढ़ें — हर participle clause के नीचे मन में पूरा clause खोलें: 'Built in 1971, the old library still stands at the corner of the campus. Having climbed the creaky stairs, I found the reading room almost empty. Sunlight streamed through the tall windows, falling on rows of dusty shelves. Not wanting to disturb the librarian, I tip-toed to the history section. An old map, drawn by a colonial surveyor, hung beside the door. Standing there, I felt time slow down. Having spent an hour among those books, I left with two new friends tucked under my arm.' देखिए — सक्रिय, निष्क्रिय, perfect, negative, absolute: एक पैराग्राफ़ में पाँच रंग।\n\nएक नज़र में: (1) subject साझा होना चाहिए — असंगति यानी dangling; (2) समकालीन काम → V-ing; पहले का काम → having + V3; (3) निष्क्रिय अर्थ → V3 या being + V3; (4) वाक्य-प्रारंभिक clause के बाद कॉमा; (5) relative clause सिकोड़ने के लिए who/which + be हटाएँ; (6) considering/regarding जैसे idiom-participles को हाथ न लगाएँ। अभ्यास: अपने दिन का ब्योरा लिखें, हर वाक्य में एक participle clause घुसाएँ — फिर danglers के शिकारी की तरह पढ़ें।",
          },
          examples: [
            {
              wrong: "Built in 1971, I love the old library.",
              right: "Built in 1971, the old library still stands at the corner of the campus.",
              note: {
                bn: "লাইব্রেরি ১৯৭১-এ নির্মিত, আমি নই — মূল কর্তা অবশ্যই নির্মিত জিনিসটা হবে।",
                en: "The library was built in 1971, not I — the main subject must be the thing built.",
                hi: "लाइब्रेरी 1971 में बनी, मैं नहीं — मुख्य subject वही बनी चीज़ होनी चाहिए।",
              },
            },
            {
              wrong: "Sunlight streamed through the windows, it fell on the shelves.",
              right: "Sunlight streamed through the windows, falling on the shelves.",
              note: {
                bn: "দ্বিতীয় কাজটা একই কর্তার, একই সময়ের — নতুন বাক্যের বদলে -ing clause; কমা + falling-ই যথেষ্ট।",
                en: "The second action belongs to the same subject at the same time — use an -ing clause instead of a new sentence; a comma + falling is enough.",
                hi: "दूसरा काम उसी subject का उसी समय का है — नए वाक्य की जगह -ing clause; कॉमा + falling ही काफ़ी।",
              },
            },
            {
              wrong: "Having spent an hour among the books, the door closed behind me.",
              right: "Having spent an hour among the books, I left, the door closing behind me.",
              note: {
                bn: "প্রথম clause-এর কর্তা 'আমি' — তাই মূল কর্তাও আমি; the door closing behind me আলাদা absolute construction হিসেবে বসে।",
                en: "The first clause's subject is 'I' — so the main subject stays I; the door closing behind me sits as a separate absolute construction.",
                hi: "पहले clause का subject 'I' है — इसलिए मुख्य subject भी I; the door closing behind me अलग absolute construction के रूप में बैठता है।",
              },
            },
            {
              wrong: "An old map, drew by a colonial surveyor, hung beside the door.",
              right: "An old map, drawn by a colonial surveyor, hung beside the door.",
              note: {
                bn: "মানচিত্র 'আঁকা হয়েছিল' — নিষ্ক্রিয় অর্থে V3 (drawn); V2 (drew) নয়। মাঝে-বাইরে দুটো কমাও absolute গড়নের পরিচয়।",
                en: "The map 'was drawn' — passive meaning takes V3 (drawn), never V2 (drew); the paired commas mark the absolute shape.",
                hi: "नक़्शा 'बनाया गया था' — निष्क्रिय अर्थ V3 (drawn) लेता है, V2 (drew) नहीं; दोनों ओर के कॉमा absolute रूप की पहचान हैं।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "participle clause লেখার আগে মনে মনে পুরো clause বানান (While I was.../Because he had...), তারপর কর্তা+সহায়ক verb ফেলে ছোট করুন — উল্টো করে করলে dangling হয়।",
          en: "Before writing a participle clause, build the full clause in your head (While I was.../Because he had...), then cut subject + helping verb — doing it backwards invites danglers.",
          hi: "Participle clause लिखने से पहले मन में पूरा clause बनाएँ (While I was.../Because he had...), फिर subject + सहायक verb हटाएँ — उलटा करने से dangling बनता है।",
        },
        {
          bn: "দুটো কাজ একসঙ্গে হলে V-ing; একটা আগে হলে having + V3 — 'করে' বনাম 'করেই' ফারাকটা মনে রাখুন।",
          en: "Simultaneous actions take V-ing; a first-then pair takes having + V3 — remember the 'করে' vs 'করেই' difference.",
          hi: "एक साथ के काम V-ing लेते हैं; पहले-बाद की जोड़ी having + V3 — 'करके' बनाम 'करके ही' का फ़र्क़ याद रखें।",
        },
        {
          bn: "মূল কর্তা কাজ পেয়েছে (নিষ্ক্রিয়) বোঝালে V3-দিয়ে শুরু করুন — Built in 1990, Written in simple English।",
          en: "When the main subject undergoes the action (passive), open with V3 — Built in 1990, Written in simple English.",
          hi: "मुख्य subject काम का ग्रहीता हो (निष्क्रिय) तो V3 से शुरू करें — Built in 1990, Written in simple English।",
        },
        {
          bn: "বাক্যের শুরুর participle clause-এর পরে কমা বাধ্যতামূলক — পাঠকের প্রথম পড়া এখানেই থামে।",
          en: "A sentence-initial participle clause must be followed by a comma — that is where the reader's first breath falls.",
          hi: "वाक्य-प्रारंभिक participle clause के बाद कॉमा अनिवार्य — पाठक की पहली साँस यहीं रुकती है।",
        },
        {
          bn: "dangling ধরতে participle-এর সামনে মনে মনে কর্তা বসান; সে মূল বাক্যের কর্তা না হলে ভুল।",
          en: "To catch danglers, imagine a subject before the participle; if it is not the main-clause subject, the sentence is wrong.",
          hi: "Danglers पकड़ने के लिए participle से पहले मन में subject रखें; वह मुख्य वाक्य का subject न हो तो वाक्य ग़लत।",
        },
        {
          bn: "relative clause সংকুচিত করতে who/which/that + be একসঙ্গে ফেলুন — the man who is waiting → the man waiting।",
          en: "To compress a relative clause drop who/which/that + be together — the man who is waiting → the man waiting.",
          hi: "Relative clause सिकोड़ने के लिए who/which/that + be एक साथ हटाएँ — the man who is waiting → the man waiting।",
        },
        {
          bn: "considering, regarding, judging by, speaking of — এই idiom-participle-গুলোর কর্তা-মিল লাগে না; এদের ভুল dangling ভাববেন না।",
          en: "considering, regarding, judging by, speaking of — these idiom-participles need no subject match; do not mistake them for danglers.",
          hi: "considering, regarding, judging by, speaking of — इन idiom-participles को subject-मेल नहीं चाहिए; इन्हें dangling न समझें।",
        },
        {
          bn: "কর্তা আলাদা হলে হয় পুরো clause লিখুন, নয়তো absolute construction: The exams being over, we relaxed।",
          en: "With a different subject, either write the full clause or use an absolute construction: The exams being over, we relaxed.",
          hi: "Subject अलग हो तो या पूरा clause लिखें, या absolute construction: The exams being over, we relaxed।",
        },
        {
          bn: "সংবাদের প্রথম প্যারা পড়ুন আর participle clause গুনুন — প্রতিদিন দশটা দেখলে গড়নটা চোখের অভ্যাস হয়ে যায়।",
          en: "Read news lead paragraphs and count participle clauses — ten a day turns the shape into a visual habit.",
          hi: "ख़बरों का पहला पैराग्राफ़ पढ़ें और participle clauses गिनें — रोज़ दस देखने से आकार आँख की आदत बन जाता है।",
        },
      ],
      quiz: [
        {
          question: "______ down the street, I ran into an old friend.",
          options: ["Walked", "Walking", "Being walked", "Walk"],
          answer: 1,
          explanation: {
            bn: "আমি নিজেই হেটেছি, বন্ধু দেখা একই সময়ে — সক্রিয় + সমকালীন → V-ing: Walking।",
            en: "I did the walking, and the meeting happened at the same time — active + simultaneous → V-ing: Walking.",
            hi: "मैंने ही चला, मुलाक़ात उसी समय — सक्रिय + समकालीन → V-ing: Walking।",
          },
        },
        {
          question: "______ the documents, the clerk left for the day.",
          options: ["Finished", "Finishing", "Having finished", "Finish"],
          answer: 2,
          explanation: {
            bn: "দলিল শেষ করা আগে, চলে যাওয়া পরে — ক্রম স্পষ্ট → having + V3: Having finished।",
            en: "Finishing came first, leaving second — a clear sequence → having + V3: Having finished.",
            hi: "काग़ज़ात पहले ख़त्म, फिर जाना — स्पष्ट क्रम → having + V3: Having finished।",
          },
        },
        {
          question: "______ in 1857, this college is one of the oldest in Asia.",
          options: ["Establishing", "Established", "Establish", "Having established"],
          answer: 1,
          explanation: {
            bn: "কলেজ 'প্রতিষ্ঠিত হয়েছে' — নিষ্ক্রিয় অর্থ → V3: Established; which was established-এর সংকুচিত রূপ।",
            en: "The college 'was established' — passive meaning → V3: Established; a compression of which was established.",
            hi: "कॉलेज 'स्थापित हुआ' — निष्क्रिय अर्थ → V3: Established; which was established का संकुचित रूप।",
          },
        },
        {
          question: "Which sentence has NO dangling modifier?",
          options: [
            "Walking through the park, the flowers looked beautiful.",
            "Walking through the park, I noticed the flowers.",
            "Walking through the park, it started to rain.",
            "Walking through the park, my phone rang.",
          ],
          answer: 1,
          explanation: {
            bn: "'Walking'-এর কর্তা হতে হবে মানুষ — শুধু 'I noticed the flowers'-এই কর্তা মিলেছে; ফুল, বৃষ্টি বা ফোন হাঁটে না।",
            en: "The walker must be the main subject — only 'I noticed the flowers' matches; flowers, rain and phones do not walk.",
            hi: "चलने वाला ही मुख्य subject होना चाहिए — केवल 'I noticed the flowers' मेल खाता है; फूल, बारिश या फ़ोन नहीं चलते।",
          },
        },
        {
          question: "Not ______ the address, I had to ask a policeman.",
          options: ["known", "knowing", "knew", "know"],
          answer: 1,
          explanation: {
            bn: "negative participle সক্রিয় কর্তায় not + V-ing: not knowing; known হলে অর্থ নিষ্ক্রিয় হয়ে যায়।",
            en: "A negative participle with an active subject is not + V-ing: not knowing; known would turn the meaning passive.",
            hi: "सक्रिय subject के साथ negative participle है not + V-ing: not knowing; known अर्थ को निष्क्रिय कर देगा।",
          },
        },
        {
          question: "The woman ______ at the reception desk is our new manager.",
          options: ["stands", "standing", "stood", "is standing"],
          answer: 1,
          explanation: {
            bn: "who is standing-এর reduced রূপ standing — who/that + be ফেলে দিয়ে V-ing থাকে।",
            en: "standing compresses who is standing — drop who/that + be and keep the V-ing.",
            hi: "standing, who is standing का संकुचित रूप है — who/that + be हटाकर V-ing रखें।",
          },
        },
        {
          question: "Why is 'Having lost the key, the door had to be broken open' wrong?",
          options: [
            "having + V3 is never correct",
            "The implied subject (the person) does not match the main subject (the door)",
            "The past perfect is missing",
            "The comma is missing",
          ],
          answer: 1,
          explanation: {
            bn: "কী হারায় মানুষ, দরজা নয় — কর্তা-অমিল; ঠিক হবে Having lost the key, he had to break the door open।",
            en: "A person loses the key, not the door — subject mismatch; correct is Having lost the key, he had to break the door open.",
            hi: "चाबी आदमी खोता है, दरवाज़ा नहीं — subject-असंगति; सही है Having lost the key, he had to break the door open।",
          },
        },
        {
          question: "______ in a cool place, this medicine lasts two years.",
          options: ["Keeping", "Kept", "Keep", "Having kept"],
          answer: 1,
          explanation: {
            bn: "ওষুধ 'রাখা হয়' — নিষ্ক্রিয় → V3: Kept (= if it is kept); keeping হলে ওষুধ নিজে রাখছে ভাবতে হয়।",
            en: "The medicine 'is kept' — passive → V3: Kept (= if it is kept); keeping would make the medicine the keeper.",
            hi: "दवा 'रखी जाती है' — निष्क्रिय → V3: Kept (= if it is kept); keeping होता तो दवा ही रखने वाली बन जाती।",
          },
        },
        {
          question: "Which pair correctly shows the difference in timing?",
          options: [
            "Opening the door, she waved = she waved first; Having opened the door, she waved = same time",
            "Opening the door, she waved = same time; Having opened the door, she waved = she opened first",
            "Both mean the same",
            "Both are wrong",
          ],
          answer: 1,
          explanation: {
            bn: "V-ing = সমকালীন; having + V3 = আগের কাজ — দরজা আগে খোলা, পরে ওঠা বা হাত নাড়া।",
            en: "V-ing = simultaneous; having + V3 = the earlier action — the door opened first, then the wave.",
            hi: "V-ing = समकालीन; having + V3 = पहले का काम — दरवाज़ा पहले खुला, फिर हाथ हिलाया।",
          },
        },
        {
          question: "He was found ______ on the kitchen floor.",
          options: ["lie", "lying", "lay", "lain"],
          answer: 1,
          explanation: {
            bn: "নিষ্ক্রিয় অর্থে reduced relative: who was lying → lying; lie-এর -ing রূপ lying (ie → y)।",
            en: "A reduced relative in passive context: who was lying → lying; the -ing form of lie is lying (ie → y).",
            hi: "निष्क्रिय संदर्भ में reduced relative: who was lying → lying; lie का -ing रूप lying (ie → y) है।",
          },
        },
      ],
    },
  },

  /* ── 3. Cleft Sentences (Unit 3) ───────────────────────────────────── */
  {
    topic: "Cleft Sentences",
    level: "advanced",
    title: "Cleft Sentences",
    unit: 3,
    data: {
      title: {
        bn: "ক্লেফট সেনটেন্স: বাক্য ভেঙে জোর দেওয়া",
        en: "Cleft Sentences",
        hi: "क्लेफ़्ट सेंटेंस: वाक्य तोड़कर ज़ोर देना",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এটি তৃতীয় পাঠ (Unit 3)। আগের ইউনিটের Participle Clauses-এর সঙ্গে intermediate স্তরের Relative Clauses পাঠটা ঝালিয়ে নিন — it-cleft-এর মেরুদণ্ডই হলো who/that/which-clause। বাংলায় জোর দেওয়ার হাতিয়ার তিনটা: শব্দকে বাক্যের সামনে টেনে আনা ('ফোনটা রীনাই করেছিল'), 'ই'-কার যোগ করা ('রীনাই করেছিল'), আর কণ্ঠস্বরে চাপ। ইংরেজিতে লেখার কাগজে কণ্ঠস্বর নেই, আর শব্দ সরালে ব্যাকরণ ভাঙে — তাই জোর দেওয়ার জন্য বাক্যটাকে দুই ভাগে ফেটে (cleft মানেই ফাটা) নতুন গড়নে সাজানো হয়: It was Rina who called / What I need is time / All I want is peace। এই পাঠে it-cleft, wh-cleft, reversed wh-cleft, all-cleft আর reason-cleft — পাঁচটা গড়ন, কোনটা কখন, আর কোথায় না-লিখলেই বা কোথায় লিখলে ভুল — সব বিস্তারিত শিখব।",
        en: "This is the third lesson of the advanced Learning Path (Unit 3). Refresh the intermediate lesson on Relative Clauses alongside Unit 2 (Participle Clauses) — the backbone of an it-cleft is a who/that/which-clause. Bengali has three emphasis tools: pulling a word to the front ('ফোনটা রীনাই করেছিল'), adding the '-ই' particle ('রীনাই করেছিল'), and vocal stress. Written English has no voice, and moving words breaks the grammar — so instead, the sentence is split (cleft literally means split) into two parts and rebuilt for emphasis: It was Rina who called / What I need is time / All I want is peace. In this lesson we cover five shapes — it-cleft, wh-cleft, reversed wh-cleft, all-cleft and reason-cleft — when to use each, and exactly where mistakes live.",
        hi: "यह एडवांस्ड Learning Path का तीसरा पाठ (Unit 3) है। Unit 2 (Participle Clauses) के साथ intermediate स्तर का Relative Clauses पाठ दोहरा लें — it-cleft की रीढ़ who/that/which-clause ही है। हिंदी/बांग्ला में ज़ोर देने के तीन औज़ार: शब्द को वाक्य के सामने खींचना ('फ़ोन रीना ही ने किया था'), 'ही' कण जोड़ना, और आवाज़ का ज़ोर। लिखी हुई अंग्रेज़ी में आवाज़ नहीं है, और शब्द हिलाने से व्याकरण टूटता है — इसलिए वाक्य को दो भागों में फाड़कर (cleft = split) नई बनावट दी जाती है: It was Rina who called / What I need is time / All I want is peace। इस पाठ में पाँच रूप — it-cleft, wh-cleft, reversed wh-cleft, all-cleft और reason-cleft — कब कौन-सा, और ग़लतियाँ कहाँ छिपती हैं, सब विस्तार से।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — বাক্যকে স্পটলাইট দেওয়া",
            en: "When to use them — putting a sentence in the spotlight",
            hi: "कब इस्तेमाल होते हैं — वाक्य पर स्पॉटलाइट डालना",
          },
          body: {
            bn: "সাধারণ বাক্য Rina called yesterday পাঁচটা তথ্য সমান ওজনে বহন করে — কে, কী, কখন। Cleft বাক্য তার মধ্যে এক টুকরোকে স্পটলাইটে তুলে বাকিটাকে ছায়ায় ফেলে দেয়। কখন দরকার হয়? (১) ভুল ধারণা শোধরাতে — 'মিনা ফোন করেছিল?' — No, it was Rina who called; (২) অভিযোগ নরমভাবে করতে — It was not my fault that the file got deleted; (৩) লেখায় কণ্ঠ-জোর বদলে কাঠামো-জোর — রচনার মূল প্রতিবাদী বাক্যে What matters most is not talent but practice; (৪) তথ্যের ধারা মসৃণ রাখতে — পুরোনো তথ্য আগে, নতুন তথ্য শেষে (end-focus)।\n\nউচ্চ স্তরের লেখকরা cleft-কে মসলার মতো ব্যবহার করেন: পুরো অনুচ্ছেদে এক-দুটো, ঠিক যেখানে পাঠকের চোখ আটকাতে চান। IELTS/TOEFL-এর লেখায় একটা সঠিক wh-cleft (What the data shows is...) পরীক্ষকের চোখে লেভেল উঁচিয়ে দেয়। তবে মনে রাখবেন — সব বাক্যই জোর দিলে আসলে কোনোটাই জোর পায় না; cleft-এর শক্তি তার বিরলতায়।",
            en: "A plain sentence like Rina called yesterday carries five pieces of information with equal weight. A cleft lifts one piece into the spotlight and pushes the rest into shadow. When do you need it? (1) To correct a misunderstanding — 'মিনা ফোন করেছিল?' — No, it was Rina who called; (2) to soften a complaint — It was not my fault that the file got deleted; (3) to replace vocal stress with structural stress in writing — in an essay's key rebuttal: What matters most is not talent but practice; (4) to keep the flow of information smooth — old information first, new information last (end-focus).\n\nAdvanced writers treat clefts like a spice: one or two per paragraph, exactly where they want the reader's eye to snag. In IELTS/TOEFL writing, a correct wh-cleft (What the data shows is...) visibly lifts the level in an examiner's eyes. But remember — if every sentence is emphasised, nothing is; the power of a cleft lies in its rarity.",
            hi: "सादा वाक्य Rina called yesterday पाँच जानकारियाँ बराबर वज़न से ले जाता है — कौन, क्या, कब। Cleft उनमें से एक टुकड़े को स्पॉटलाइट में उठा देता है और बाकी को छाया में धकेल देता है। कब ज़रूरत पड़ती है? (1) ग़लतफ़हमी दूर करने को — 'रीना ने फ़ोन किया?' — No, it was Rina who called; (2) शिकायत नरम रखने को — It was not my fault that the file got deleted; (3) लेखन में आवाज़-ज़ोर की जगह ढाँचे-ज़ोर — निबंध के मुख्य प्रतिवाद में What matters most is not talent but practice; (4) जानकारी का प्रवाह सहज रखने को — पुरानी जानकारी पहले, नई अंत में (end-focus)।\n\nएडवांस्ड लेखक cleft को मसाले की तरह इस्तेमाल करते हैं: हर अनुच्छेद में एक-दो, ठीक जहाँ पाठक की नज़र रुकनी चाहिए। IELTS/TOEFL लेखन में सही wh-cleft (What the data shows is...) परीक्षक की नज़र में स्तर ऊँचा दिखाता है। पर याद रखें — हर वाक्य ज़ोर दे तो कुछ भी ज़ोरदार नहीं रहता; cleft की ताक़त उसकी दुर्लभता में है।",
          },
          examples: [
            {
              wrong: "No, Mina called you yesterday. (replying to: Was it Mina who called me?)",
              right: "No, it was Rina who called you yesterday.",
              note: {
                bn: "ভুল ধারণা শোধরাতে ঠিক সেই অংশটা (রীনা) স্পটলাইটে — it was Rina who called; বাংলার 'রীনাই'-এর ইংরেজি রূপ এটাই।",
                en: "To correct the misunderstanding, the exact piece (Rina) goes into the spotlight — it was Rina who called; this is English for Bengali 'রীনাই'.",
                hi: "ग़लतफ़हमी दूर करने को ठीक वही टुकड़ा (रीना) स्पॉटलाइट में — it was Rina who called; यही 'रीना ही' का अंग्रेज़ी रूप है।",
              },
            },
            {
              wrong: "The file got deleted and this is not my fault.",
              right: "It was not my fault that the file got deleted.",
              note: {
                bn: "অভিযোগ নরম করতে প্রতিরক্ষাটা (my fault) আগে স্পটলাইটে — দুটো বাক্যের বদলে এক সুন্দর it-cleft।",
                en: "To soften the complaint, the defence (my fault) takes the spotlight first — one elegant it-cleft instead of two flat sentences.",
                hi: "शिकायत नरम रखने को बचाव (my fault) पहले स्पॉटलाइट में — दो सपाट वाक्यों की जगह एक सुंदर it-cleft।",
              },
            },
            {
              wrong: "Practice is important and talent is also important.",
              right: "What matters most is not talent but practice.",
              note: {
                bn: "রচনার মূল বক্তব্যে দুই সমান বাক্যের বদলে একটা তুলনামূলক wh-cleft — লেভেল তৎক্ষণাৎ উঁচু শোনায়।",
                en: "In an essay's key claim, one contrastive wh-cleft beats two equal sentences — the level instantly sounds higher.",
                hi: "निबंध के मुख्य दावे में दो बराबर वाक्यों की जगह एक तुलनात्मक wh-cleft — स्तर तुरंत ऊँचा लगता है।",
              },
            },
            {
              wrong: "The surprise was his honesty. His honesty was the surprise.",
              right: "What surprised me was his honesty.",
              note: {
                bn: "একই তথ্য দুবার ফেরানো নয় — wh-cleft দিয়ে একবারেই নতুন তথ্যকে শেষে বসিয়ে দিন (end-focus)।",
                en: "Do not loop the same information twice — one wh-cleft places the new information at the end (end-focus).",
                hi: "एक ही जानकारी दो बार घुमाना नहीं — एक wh-cleft नई जानकारी को अंत में बिठा देता है (end-focus)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন — পাঁচটা cleft প্যাটার্ন",
            en: "Formation — five cleft patterns",
            hi: "गठन — पाँच cleft पैटर्न",
          },
          body: {
            bn: "প্রসার-টেবিলের মতো পড়ুন: • it-cleft: It + be + ফোকাস + who/that + বাকি বাক্য → It was the noise that woke me / It was Karim who fixed it। • wh-cleft (pseudo-cleft): What + বাকি বাক্য + be + ফোকাস → What woke me was the noise / What I need is time। • reversed wh-cleft: ফোকাস + be + what-clause → Time is what I need / The noise was what woke me। • all-cleft: All (that) + বাকি + be + ফোকাস → All I want is a little peace। • reason-cleft: The reason (why)... is that... → The reason I called is that I need advice।\n\nদুটো চাবি-কথা: (১) it-cleft-এর ফোকাস মানুষ হলে who, জিনিস/ঘটনা হলে that (আরও আনুষ্ঠানিক হলে which); (২) wh-cleft-এর ফোকাস বাক্যের শেষে বসে — পাঠক যা মনে রাখবে সেটা শেষ শব্দ; reversed wh-cleft সেটা শুরুতে তুলে নেয় যখন শিরোনাম-ধাঁচের জোর চাই।",
            en: "Read like a prose table: • it-cleft: It + be + focus + who/that + the rest → It was the noise that woke me / It was Karim who fixed it. • wh-cleft (pseudo-cleft): What + the rest + be + focus → What woke me was the noise / What I need is time. • reversed wh-cleft: focus + be + what-clause → Time is what I need / The noise was what woke me. • all-cleft: All (that) + the rest + be + focus → All I want is a little peace. • reason-cleft: The reason (why)... is that... → The reason I called is that I need advice.\n\nTwo key notes: (1) in an it-cleft the linking word is who when the focus is a person, that (or, more formally, which) for things/events; (2) in a wh-cleft the focus sits at the END of the sentence — the last word is what the reader keeps; a reversed wh-cleft lifts it to the front when you want a headline-like punch.",
            hi: "गद्य-तालिका जैसा पढ़ें: • it-cleft: It + be + फ़ोकस + who/that + बाकी वाक्य → It was the noise that woke me / It was Karim who fixed it। • wh-cleft (pseudo-cleft): What + बाकी + be + फ़ोकस → What woke me was the noise / What I need is time। • reversed wh-cleft: फ़ोकस + be + what-clause → Time is what I need / The noise was what woke me। • all-cleft: All (that) + बाकी + be + फ़ोकस → All I want is a little peace। • reason-cleft: The reason (why)... is that... → The reason I called is that I need advice।\n\nदो चाबी-बातें: (1) it-cleft में फ़ोकस व्यक्ति हो तो who, वस्तु/घटना हो तो that (और अधिक औपचारिक हो तो which); (2) wh-cleft में फ़ोकस वाक्य के अंत में बैठता है — पाठक जो याद रखेगा वह आख़िरी शब्द; reversed wh-cleft उसे शुरू में उठा लेता है जब सुर्ख़ी-जैसा ज़ोर चाहिए।",
          },
          examples: [
            {
              wrong: "It was Karim which fixed the projector.",
              right: "It was Karim who fixed the projector.",
              note: {
                bn: "it-cleft-এ ফোকাস মানুষ হলে who — which শুধু জিনিসের জন্য; এই ভুল it-cleft-এর সবচেয়ে পরিচিত ফাঁদ।",
                en: "In an it-cleft a person takes who — which is only for things; this is the most familiar trap of the it-cleft.",
                hi: "it-cleft में व्यक्ति के लिए who — which केवल वस्तु के लिए; यह it-cleft की सबसे जानी-पहचानी फँसी है।",
              },
            },
            {
              wrong: "What I need, that is time.",
              right: "What I need is time.",
              note: {
                bn: "বাংলার 'যা দরকার, সেটা হলো সময়' — সেটা (that) পুনরাবৃত্তি ইংরেজি গড়নে চলে না; What + clause + is + ফোকাস — শেষ।",
                en: "The Bengali resumption 'যা দরকার, সেটা হলো সময়' cannot repeat in the English frame; What + clause + is + focus — and stop.",
                hi: "बांग्ला 'जो चाहिए, वह है समय' का दोहराव अंग्रेज़ी ढाँचे में नहीं चलता; What + clause + is + फ़ोकस — बस।",
              },
            },
            {
              wrong: "All I want — a little peace.",
              right: "All I want is a little peace.",
              note: {
                bn: "cleft গড়নে be-verb ছাড়া বাক্য দাঁড়ায় না — All/What + clause-এর পরে is/was বাধ্যতামূলক।",
                en: "A cleft cannot stand without its be-verb — after All/What + clause, is/was is compulsory.",
                hi: "cleft ढाँचे में be-verb के बिना वाक्य खड़ा नहीं होता — All/What + clause के बाद is/was अनिवार्य।",
              },
            },
            {
              wrong: "The reason why I called is because I need advice.",
              right: "The reason why I called is that I need advice.",
              note: {
                bn: "'the reason is because' কথ্য ভাষায় শোনা যায়, কিন্তু লেখায় the reason is that — reason-এর ভেতরেই because-এর অর্থ আছে, দুবার বলা বাড়তি।",
                en: "'The reason is because' is heard in speech, but in writing prefer the reason is that — 'reason' already contains the because-meaning.",
                hi: "'The reason is because' बोलचाल में सुनाई देता है, पर लेखन में the reason is that — 'reason' में because का अर्थ पहले से है।",
              },
            },
            {
              wrong: "Time is which I need most.",
              right: "Time is what I need most.",
              note: {
                bn: "wh-cleft সবসময় what ধারণ করে (reversed রূপেও) — which নয়; গড়ন: ফোকাস + is + what-clause।",
                en: "A wh-cleft always runs on what (even reversed) — not which; frame: focus + is + what-clause.",
                hi: "wh-cleft हमेशा what पर चलता है (उलटे रूप में भी) — which नहीं; ढाँचा: फ़ोकस + is + what-clause।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন — বাঙালি 'ই'-কার পরীক্ষা",
            en: "Signals — the Bengali '-ই' particle test",
            hi: "संकेत — बांग्ला 'ही' कण का परीक्षण",
          },
          body: {
            bn: "কোন cleft বসবে ঠিক করার একটা দেশি পরীক্ষা আছে: ইংরেজি বাক্যটা বাংলায় বলে দেখুন, 'ই'-কার কোথায় বসবে? 'রীনাই ফোন করেছিল' — ফোকাস কর্তা → it-cleft (It was Rina who called)। 'আমার যা দরকার তা হলো সময়' — ফোকাস শেষে → wh-cleft (What I need is time)। 'আমি শুধু একটু শান্তি চাই' → all-cleft (All I want is a little peace)। 'ডাকার কারণ হলো পরামর্শ লাগবে' → reason-cleft। এই অনুবাদ-পরীক্ষা সেই জোরটাকেই ধরে, যা বাঙালি কণ্ঠস্বরে স্বাভাবিক।\n\nআরেকটা প্যাটার্ন-সংকেত: it-cleft প্রায়ই সংলাপে সংশোধন বা পরিচয় প্রকাশে (It was not me, sir); wh-cleft লেখার সিদ্ধান্ত-বাক্যে (What we need now is action, not words); all-cleft অভিযোগ ও আবেগে (All she did was smile); reason-cleft ব্যাখ্যায়। বিপরীত-জোড় দেখলে (not X but Y) cleft-এর সম্ভাবনা বাড়ে: It is not the price that worries me — it is the delay।",
            en: "There is a home-grown test for choosing the right cleft: say the English sentence in Bengali and see where the '-ই' particle would fall. 'রীনাই ফোন করেছিল' — the focus is the subject → it-cleft (It was Rina who called). 'আমার যা দরকার তা হলো সময়' — focus at the end → wh-cleft (What I need is time). 'আমি শুধু একটু শান্তি চাই' → all-cleft (All I want is a little peace). 'ডাকার কারণ হলো পরামর্শ লাগবে' → reason-cleft. This translation test captures exactly the emphasis a Bengali voice carries naturally.\n\nAnother pattern signal: it-clefts dominate in dialogue — corrections and identifications (It was not me, sir); wh-clefts live in a written conclusion (What we need now is action, not words); all-clefts carry complaint and emotion (All she did was smile); reason-clefts explain. When you see a contrast pair (not X but Y), the odds of a cleft rise: It is not the price that worries me — it is the delay.",
            hi: "सही cleft चुनने का एक देसी परीक्षण है: अंग्रेज़ी वाक्य को बांग्ला/हिंदी में बोलकर देखें, 'ही' कण कहाँ बैठेगा? 'रीना ही ने फ़ोन किया' — फ़ोकस subject है → it-cleft (It was Rina who called)। 'मुझे जो चाहिए वह है समय' — फ़ोकस अंत में → wh-cleft (What I need is time)। 'मैं बस थोड़ी शांति चाहता हूँ' → all-cleft (All I want is a little peace)। 'बुलाने का कारण है सलाह' → reason-cleft। यह अनुवाद-परीक्षण वही ज़ोर पकड़ता है जो बोली में सहज होता है।\n\nएक और पैटर्न-संकेत: it-cleft संवाद में संशोधन-पहचान में बोलबाला (It was not me, sir); wh-cleft लिखे निष्कर्ष-वाक्य में (What we need now is action, not words); all-cleft शिकायत और भावना में (All she did was smile); reason-cleft व्याख्या में। विरोध-जोड़ी (not X but Y) दिखते ही cleft की संभावना बढ़ती है: It is not the price that worries me — it is the delay।",
          },
          examples: [
            {
              wrong: "Was Mina who called you? No, it was not me.",
              right: "Was it Mina who called you? No, it was not me.",
              note: {
                bn: "প্রশ্ন-রূপেও it + be আগে আসে — Was it Mina who...?; it-cleft-এর it বাদ দিলে বাক্য ভেঙে পড়ে।",
                en: "Even in the question form it + be comes first — Was it Mina who...?; dropping the it of the cleft collapses the frame.",
                hi: "प्रश्न-रूप में भी it + be पहले आता है — Was it Mina who...?; cleft का it हटाने से ढाँचा ढह जाता है।",
              },
            },
            {
              wrong: "It was not me, sir. I am not the one broke the vase.",
              right: "It was not me, sir. I am not the one who broke the vase.",
              note: {
                bn: "the one/it-এর পরে relative শব্দ (who) বাধ্যতামূলক — cleft-পরিবারের বাক্যগুলো প্রায়ই who/that ছাড়া অচল।",
                en: "After the one / it a relative word (who) is compulsory — cleft-family sentences usually collapse without who/that.",
                hi: "the one / it के बाद relative शब्द (who) अनिवार्य — cleft-परिवार के वाक्य who/that के बिना प्रायः टूट जाते हैं।",
              },
            },
            {
              wrong: "What we need now is action, not words, and what we need also is patience.",
              right: "What we need now is action, not words. What we need next is patience.",
              note: {
                bn: "এক বাক্যে দুটো cleft চাপা দেওয়া নয় — cleft একবার, তারপর স্বচ্ছ নতুন বাক্য; ঘন cleft পাঠককে ক্লান্ত করে।",
                en: "Do not cram two clefts into one sentence — one cleft, then a clean new sentence; dense clefts exhaust the reader.",
                hi: "एक वाक्य में दो cleft ठूँसना नहीं — एक cleft, फिर साफ़ नया वाक्य; घने cleft पाठक को थका देते हैं।",
              },
            },
            {
              wrong: "It is not the price worries me, it is the delay.",
              right: "It is not the price that worries me — it is the delay.",
              note: {
                bn: "it-cleft-এ ফোকাসের পরে that + verb বাধ্যতামূলক — that worries me ছাড়া গড়ন অসম্পূর্ণ; বিপরীত-জোড়ে ড্যাশ বা কমা ভালো খাপ খায়।",
                en: "In an it-cleft the focus must be followed by that + verb — without that worries me the frame is incomplete; a dash or comma fits the contrast pair well.",
                hi: "it-cleft में फ़ोकस के बाद that + verb अनिवार्य — that worries me के बिना ढाँचा अधूरा; विरोध-जोड़ी में डैश या कॉमा सुखद बैठता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "it-cleft গভীরে — who/that, tense, বহুবচন ফোকাস",
            en: "The it-cleft in depth — who/that, tense, plural focus",
            hi: "it-cleft गहराई में — who/that, tense, बहुवचन फ़ोकस",
          },
          body: {
            bn: "it-cleft-এর তিনটা সূক্ষ্ম স্তর। প্রথম: who নাকি that — ফোকাস মানুষ হলে who সবচেয়ে স্বাভাবিক (It was Rina who called), জিনিস বা ঘটনা হলে that (It was the noise that woke me); আনুষ্ঠানিক লেখায় জিনিসের জন্য which-ও চলে (It was the treaty which changed the border)। দ্বিতীয়: It is নাকি It was — মূল ঘটনার সময় মেনে নিন: ঘটে যাওয়া ঘটনায় It was (It was Karim who fixed it yesterday), স্থায়ী সত্যে It is (It is the children who suffer most)। তৃতীয়: ফোকাস বহুবচন হলেও গড়ন একই — It was my friends who solved the problem; who-এর পরে বহুবচন verb (solved) আসে, কারণ তার কর্তা friends।\n\nআরও এক উঁচু স্তর: negative + contrastive cleft — It is not what you said but how you said it that hurt her; এখানে দুটো what-phrase ফোকাসের জুড়ি, শেষে that + verb। প্রশ্ন-রূপও চলে: Was it you who left the window open? — অভিযোগ নরম করে জিজ্ঞাসায় বদলে দেয়। এই গড়নগুলো সংবাদ আর রচনায় প্রতিদিন দেখবেন — পড়ার সময় ফোকাসটা আঙুল দিয়ে চিহ্নিত করুন।",
            en: "Three subtle layers of the it-cleft. First: who or that — when the focus is a person, who is most natural (It was Rina who called); for things or events, that (It was the noise that woke me); in formal writing which is also possible for things (It was the treaty which changed the border). Second: It is or It was — match the time of the underlying event: a finished event takes It was (It was Karim who fixed it yesterday), a standing truth takes It is (It is the children who suffer most). Third: the frame stays the same with a plural focus — It was my friends who solved the problem; the verb after who is plural (solved) because its subject is friends.\n\nOne higher layer: the negative contrastive cleft — It is not what you said but how you said it that hurt her; here two what-phrases form the focus pair, closed by that + verb. The question form works too: Was it you who left the window open? — it turns an accusation into a soft enquiry. You will meet these shapes daily in news and essays — while reading, point a finger at the focus.",
            hi: "it-cleft की तीन सूक्ष्म परतें। पहली: who या that — फ़ोकस व्यक्ति हो तो who सबसे सहज (It was Rina who called); वस्तु/घटना हो तो that (It was the noise that woke me); औपचारिक लेखन में वस्तु के लिए which भी चलता है (It was the treaty which changed the border)। दूसरी: It is या It was — मूल घटना के समय से मिलाएँ: बीती घटना पर It was (It was Karim who fixed it yesterday), स्थायी सत्य पर It is (It is the children who suffer most)। तीसरी: फ़ोकस बहुवचन हो तो भी ढाँचा वही — It was my friends who solved the problem; who के बाद बहुवचन verb (solved), क्योंकि उसका subject friends है।\n\nएक ऊँची परत: negative + contrastive cleft — It is not what you said but how you said it that hurt her; यहाँ दो what-phrases फ़ोकस-जोड़ी बनते हैं, अंत में that + verb। प्रश्न-रूप भी चलता है: Was it you who left the window open? — दोष लगाने को नरम पूछताछ में बदल देता है। समाचार और निबंधों में ये रूप रोज़ मिलेंगे — पढ़ते समय फ़ोकस पर उँगली रखें।",
          },
          examples: [
            {
              wrong: "It is Karim who fixed the projector yesterday.",
              right: "It was Karim who fixed the projector yesterday.",
              note: {
                bn: "আগেরকালের কাজ — cleft-এর be-verb-ও অতীতে যাবে: It was; It is শুধু চলমান/স্থায়ী সত্যে।",
                en: "The fixing happened yesterday — the cleft's be-verb also goes past: It was; It is only for ongoing or standing truths.",
                hi: "काम बीते कल का — cleft का be-verb भी अतीत में जाएगा: It was; It is केवल चलते/स्थायी सत्य पर।",
              },
            },
            {
              wrong: "It was my friends who solves the problem.",
              right: "It was my friends who solved the problem.",
              note: {
                bn: "who-এর পরের verb-এর কর্তা friends — বহুবচন solved; cleft-এর It ছদ্ম-কর্তা মাত্র, verb-অমিল এখানেই ধরা পড়ে।",
                en: "The verb after who agrees with friends — plural solved; the it of the cleft is only a dummy, and verb agreement slips exactly here.",
                hi: "who के बाद की verb friends से मिलती है — बहुवचन solved; cleft का it मात्र dummy है, verb-असंगति यहीं पकड़ी जाती है।",
              },
            },
            {
              wrong: "It was not what he said what hurt her.",
              right: "It is not what he said but how he said it that hurt her.",
              note: {
                bn: "এক it-cleft-এ দুটো what/that চলে না — ফোকাস-জুড়ির শেষে একবারই that + verb আসে; বিপরীত not... but... জোড়া ফোকাস বহন করে।",
                en: "One it-cleft cannot hold two whats — after the focus pair, that + verb comes exactly once; the not... but... pair carries the focus.",
                hi: "एक it-cleft में दो what नहीं चलते — फ़ोकस-जोड़ी के बाद that + verb ठीक एक बार; not... but... जोड़ी फ़ोकस ले जाती है।",
              },
            },
            {
              wrong: "It was the treaty who changed the border.",
              right: "It was the treaty that changed the border.",
              note: {
                bn: "ফোকাস জিনিস (treaty) — that (formal-এ which); who শুধু মানুষের জন্য।",
                en: "The focus is a thing (treaty) — that (or formal which); who is for people only.",
                hi: "फ़ोकस वस्तु (treaty) है — that (औपचारिक में which); who केवल व्यक्तियों के लिए।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "wh-cleft গভীরে — What, All, The thing, The person",
            en: "The wh-cleft in depth — What, All, The thing, The person",
            hi: "wh-cleft गहराई में — What, All, The thing, The person",
          },
          body: {
            bn: "wh-cleft-এর পরিবার What-এর চেয়ে বড়। মূল সদস্য: What I need is time — যা চাওয়ার বিষয় ফোকাসে। What happened was (that) the bus broke down — ঘটনা-বর্ণনায়; what-clause-এর পরে that চাইলে যোগ হয়, না দিলেও চলে। All (that) I want is a little peace — সীমিত চাওয়ার জোর; all মানে 'শুধু এটুকুই'। The thing (that) I like most is the ending — thing-এর জায়গায় person (The person who helped me was Karim), place (The place where we met was the old library), day (The day when it rained was my wedding day) — noun বেছে ফোকাসের জাত নির্ধারণ করুন।\n\nverb-অমিলের সতর্কতা: what-clause সবসময় একবচন verb নেয় — What I need IS time; তবে ফোকাস বহুবচন হলে আধুনিক লেখায় বহুবচন verb-ও শোনা যায় (What we need are better tools) — পরীক্ষায় একবচনটাই নিরাপদ। Reversed wh-cleft-এ ফোকাস সামনে: Time is what I need; The truth is what matters — এরা শিরোনাম, উপসংহার আর প্রতিবাদে ঝলমল করে।",
            en: "The wh-cleft family is bigger than What. Core members: What I need is time — the wanted thing sits in focus. What happened was (that) the bus broke down — for narrating events; an optional that may follow the what-clause. All (that) I want is a little peace — stressing a limited wish; all means 'nothing but this'. The thing (that) I like most is the ending — swap thing for person (The person who helped me was Karim), place (The place where we met was the old library), day (The day when it rained was my wedding day) — choose the noun to fix the type of focus.\n\nA warning on agreement: a what-clause normally takes a singular verb — What I need IS time; though when the focus is plural, modern writing sometimes allows a plural verb (What we need are better tools) — in exams the singular is the safe choice. In a reversed wh-cleft the focus moves to the front: Time is what I need; The truth is what matters — these glitter in headlines, conclusions and rebuttals.",
            hi: "wh-cleft परिवार What से बड़ा है। मुख्य सदस्य: What I need is time — माँगी हुई चीज़ फ़ोकस में। What happened was (that) the bus broke down — घटना-वर्णन में; what-clause के बाद that चाहें तो जोड़ें। All (that) I want is a little peace — सीमित चाहत का ज़ोर; all यानी 'बस इतना ही'। The thing (that) I like most is the ending — thing की जगह person (The person who helped me was Karim), place (The place where we met was the old library), day (The day when it rained was my wedding day) — noun चुनकर फ़ोकस की जाति तय करें।\n\nverb-असंगति की सावधानी: what-clause सामान्यतः एकवचन verb लेता है — What I need IS time; फ़ोकस बहुवचन होने पर आधुनिक लेखन में बहुवचन verb भी सुनाई देता है (What we need are better tools) — परीक्षा में एकवचन ही सुरक्षित। Reversed wh-cleft में फ़ोकस सामने: Time is what I need; The truth is what matters — ये सुर्ख़ियों, निष्कर्षों और प्रतिवादों में चमकते हैं।",
          },
          examples: [
            {
              wrong: "What I need are time and patience. (in an exam answer)",
              right: "What I need is time and patience.",
              note: {
                bn: "পরীক্ষার উত্তরে নিরাপদ নিয়ম — what-clause একবচন verb: is; বহুবচন verb (are) বিতর্কিত ক্ষেত্র।",
                en: "The safe exam rule — a what-clause takes a singular verb: is; the plural verb (are) is a debated case.",
                hi: "परीक्षा का सुरक्षित नियम — what-clause एकवचन verb लेता है: is; बहुवचन verb (are) विवादित क्षेत्र है।",
              },
            },
            {
              wrong: "What happened, the bus broke down on the bridge.",
              right: "What happened was that the bus broke down on the bridge.",
              note: {
                bn: "what-clause-এর পরে be-verb বাধ্যতামূলক — What happened was (that)...; কমা দিয়ে বাক্য ভাঙলে cleft গড়ন মরে যায়।",
                en: "A be-verb must follow the what-clause — What happened was (that)...; breaking the sentence with a comma kills the cleft frame.",
                hi: "what-clause के बाद be-verb अनिवार्य — What happened was (that)...; कॉमा से वाक्य तोड़ने से cleft ढाँचा मर जाता है।",
              },
            },
            {
              wrong: "All what I want is a little peace.",
              right: "All (that) I want is a little peace.",
              note: {
                bn: "all-এর পরে what আসে না — হয় all (that), নয়তো শুধু all; 'all what' বাংলা 'যা কিছু চাই'-এর ছায়া।",
                en: "what never follows all — either all (that) or plain all; 'all what' is a shadow of the Bengali 'যা কিছু চাই'.",
                hi: "all के बाद what कभी नहीं — या all (that), या केवल all; 'all what' बांग्ला 'जो कुछ चाहिए' की छाया है।",
              },
            },
            {
              wrong: "The person who helped me was Karim, and the person also was polite.",
              right: "The person who helped me was Karim. He was unfailingly polite.",
              note: {
                bn: "person/place/day-cleft-এ এক ফোকাস, এক বাক্য; দ্বিতীয় তথ্যটা নতুন স্পষ্ট বাক্যে — He দিয়ে শুরু করলে ধারাটা মসৃণ।",
                en: "One focus per sentence in person/place/day-clefts; park the second fact in a fresh clear sentence — starting it with He keeps the flow.",
                hi: "person/place/day-cleft में एक वाक्य, एक फ़ोकस; दूसरी जानकारी नए साफ़ वाक्य में — He से शुरू करने से धार सहज रहती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "জোর দেওয়ার ভারসাম্য — কথায় stress, লেখায় cleft",
            en: "Balancing emphasis — stress in speech, clefts in writing",
            hi: "ज़ोर का संतुलन — बोलने में stress, लेखन में cleft",
          },
          body: {
            bn: "একই বাক্য, দুই মাধ্যমে দুই যন্ত্র: কথায় শুধু শব্দের ওপর চাপ — 'আমি বলিনি তিনি (তুমি) চুরি করেছে'; লেখায় সেই প্রতিটা রূপ cleft-এ ফেটে যায়: I did not say HE stole it → লেখায় It was not him I accused — it was his assistant। মানে, লেখায় যে জোর চাই, তার ইংরেজি যন্ত্র cleft; বাঙালি শিক্ষার্থীরা কথার চাপকে লেখায় বহন করার জন্য শুধু CAPS বা বিস্ময়চিহ্ন ব্যবহার করে — আনুষ্ঠানিক লেখায় এটা অপরিপক্ব দেখায়।\n\nসীমা টানার নিয়ম: এক অনুচ্ছেদে একটা, সর্বোচ্চ দুটো cleft; cleft-শৃঙ্খল পড়ে পাঠক ক্লান্ত হয় আর জোরের পাহাড়ে সমতল হারায়। আরেকটা ভারসাম্য: wh-cleft তথ্য-প্রবাহের পরিবেশক — পুরোনো তথ্য what-clause-এ, নতুন তথ্য শেষে; তাই এটা বাক্য-শুরুর চেয়ে মাঝ-শেষে সবচেয়ে কাজের। সংবাদের উপসংহার আর IELTS-এর শেষ প্যারা পড়লে দেখবেন — লেখকরা cleft-কে ঠিক শেষ চাপের জায়গায় বসান।",
            en: "One sentence, two media, two machines: in speech you simply stress a word — 'I did not say HE stole it'; in writing each such stress becomes a cleft: It was not him I accused — it was his assistant. So the cleft is writing's machine for the emphasis a voice carries; Bengali-speaking learners often try to carry vocal stress into writing using only CAPS or exclamation marks — which looks immature in formal prose.\n\nRules for restraint: one cleft per paragraph, two at most; chains of clefts tire the reader and flatten emphasis into noise. Another balance: a wh-cleft is a courier of information flow — old information in the what-clause, new information at the end; it therefore works best mid-to-late in a paragraph rather than as an opener. Read news conclusions and final IELTS paragraphs and you will see — writers plant clefts exactly at the point of final push.",
            hi: "एक वाक्य, दो माध्यम, दो यंत्र: बोलने में शब्द पर ज़ोर — 'मैंने यह नहीं कहा कि उसने (उसने!) चोरी की'; लेखन में वही ज़ोर cleft में फटता है: I did not say HE stole it → It was not him I accused — it was his assistant। यानी लेखन में आवाज़ के ज़ोर का यंत्र cleft है; बांग्ला-हिंदी शिक्षार्थी अक्सर उस ज़ोर को CAPS या विस्मय-चिह्न से ढोते हैं — जो औपचारिक गद्य में अपरिपक्व लगता है।\n\nसंयम के नियम: हर अनुच्छेद में एक, अधिकतम दो cleft; cleft की माला पाठक को थका देती है और ज़ोर का पहाड़ मैदान बन जाता है। एक संतुलन: wh-cleft जानकारी-प्रवाह का दूत है — पुरानी जानकारी what-clause में, नई अंत में; इसलिए यह वाक्य-आरंभ से ज़्यादा मध्य-अंत में काम करता है। समाचार के निष्कर्ष और IELTS का आख़िरी पैराग्राफ़ पढ़ें — लेखक cleft को ठीक अंतिम ठेलाव पर बिठाते हैं।",
          },
          examples: [
            {
              wrong: "I DID NOT SAY HE STOLE IT!!!",
              right: "It was not him that I accused of theft — it was his assistant.",
              note: {
                bn: "CAPS আর বিস্ময়চিহ্ন কথার চাপের দুর্বল ছায়া — cleft গড়নেই লেখার জোর; আনুষ্ঠানিক প্রতিবাদ এভাবেই লেখা হয়।",
                en: "CAPS and exclamations are weak shadows of vocal stress — the cleft frame is written emphasis; formal rebuttals are built this way.",
                hi: "CAPS और विस्मय-चिह्न आवाज़ी ज़ोर की कमज़ोर छाया हैं — लिखित ज़ोर cleft ढाँचे में ही; औपचारिक प्रतिवाद इसी से बनता है।",
              },
            },
            {
              wrong: "What I need is time. What you need is time. What we need is time.",
              right: "What I need is time. You, on the other hand, need rest.",
              note: {
                bn: "এক প্যারায় cleft-শৃঙ্খল জোরকে সমতল করে ফেলে — একটা cleft, বাকিগুলো সাধারণ গড়নে; বৈচিত্র্যই শক্তি।",
                en: "A chain of clefts in one paragraph flattens emphasis — keep one, return the rest to plain frames; variety is the power.",
                hi: "एक पैराग्राफ़ में cleft की माला ज़ोर को समतल कर देती है — एक रखें, बाकी सादे ढाँचे में; विविधता ही शक्ति है।",
              },
            },
            {
              wrong: "Time is what I need is what matters.",
              right: "Time is what I need. And what matters is patience.",
              note: {
                bn: "দুটো cleft এক বাক্যে জোড়া যায় না — ভেঙে দুই বাক্য; দ্বিতীয়টায় wh-cleft সাধারণ রূপে ফিরে আসে।",
                en: "Two clefts cannot be welded into one sentence — split into two; the second returns to the plain wh-cleft form.",
                hi: "दो cleft एक वाक्य में वेल्ड नहीं होते — दो वाक्यों में बाँटें; दूसरा साधारण wh-cleft रूप में लौटता है।",
              },
            },
            {
              wrong: "The manager shouted, 'IT WAS KARIM WHO FIXED IT.'",
              right: "The manager made it clear that it was Karim who had fixed the projector.",
              note: {
                bn: "reported লেখায় চিৎকার-চিহ্নের বদলে cleft-কে বিবৃতির ভেতরে ঢোকান — tense-ও এক ধাপ পিছায় (had fixed)।",
                en: "In reported writing fold the cleft inside the statement instead of shouting — and the tense steps back one (had fixed).",
                hi: "reported लेखन में चिल्लाने की जगह cleft को कथन के भीतर मोड़ें — और tense एक क़दम पीछे (had fixed)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors made by advanced learners",
            hi: "एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "cleft-এর সূক্ষ্ম ভুলগুলো বাক্যের দেহ ঠিক রেখে হাড়ে গর্ত করে। প্রথম দল: পুনরাবৃত্ত সর্বনাম — বাংলার 'যা দরকার, সেটা হলো' ছায়ায় What I need, that is time / What I need, it is time লেখা হয়; ইংরেজি cleft-এ resumption নেই — what-clause শেষ হলে সরাসরি is। দ্বিতীয় দল: ফোকাস-পুনরাবৃত্তি — It was Rina who she called; who-ই কর্তা, তাই she বাড়তি। তৃতীয় দল: verb-অমিল — What surprises me IS his patience (একবচন), অথচ অনেকে are বসান।\n\nচতুর্থ দল: tense-অসংগতি — বিগত ঘটনায় It was, অথচ অভ্যাসে It is Karim who fixed it yesterday লেখা হয়। পঞ্চম দল: be-verb গায়েব — All I want — peace (ড্যাশ দিয়ে is-এর কাজ নেওয়া চলে না)। ষষ্ঠ দল: the reason is because — লেখায় the reason is that। প্রতিটা দল পরীক্ষার উত্তরে বারবার ফিরে আসে; নিজের লেখায় cleft দেখা মাত্র এই তালিকাটা চোখে বুলিয়ে নিন — এক মিনিটের পরীক্ষায় আধা দরকার।",
            en: "Cleft's subtle errors hollow out a healthy sentence. Group one: resumptive pronouns — under the shadow of Bengali 'যা দরকার, সেটা হলো', learners write What I need, that is time / What I need, it is time; English clefts take no resumption — when the what-clause ends, is follows directly. Group two: focus duplication — It was Rina who she called; who is already the subject, so she is extra. Group three: agreement — What surprises me IS his patience (singular), though many write are.\n\nGroup four: tense mismatch — finished events take It was, yet habit writes It is Karim who fixed it yesterday. Group five: the missing be-verb — All I want — peace (a dash cannot do is's job). Group six: the reason is because — in writing prefer the reason is that. Every group returns again and again in exam answers; the moment a cleft appears in your writing, run your eyes down this list — a one-minute check that pays half the marks.",
            hi: "cleft की सूक्ष्म ग़लतियाँ सेहतमंद वाक्य में हड्डी में गड्ढा करती हैं। पहला समूह: पुनरुक्ति-सर्वनाम — बांग्ला/हिंदी 'जो चाहिए, वह है' की छाया में What I need, that is time / What I need, it is time लिख दिया जाता है; अंग्रेज़ी cleft में resumption नहीं — what-clause ख़त्म, फिर सीधे is। दूसरा समूह: फ़ोकस-दोहराव — It was Rina who she called; who ही subject है, इसलिए she फ़ालतू। तीसरा समूह: verb-असंगति — What surprises me IS his patience (एकवचन), फिर भी कई are लिखते हैं।\n\nचौथा समूह: tense-असंगति — बीती घटना पर It was, फिर भी आदत से It is Karim who fixed it yesterday। पाँचवाँ समूह: be-verb ग़ायब — All I want — peace (डैश से is का काम नहीं चलता)। छठा समूह: the reason is because — लेखन में the reason is that। हर समूह परीक्षा-उत्तरों में बार-बार लौटता है; अपने लेखन में cleft दिखते ही यह सूची आँखों से बुलवा लें — एक मिनट की जाँच आधे अंक बचा लेती है।",
          },
          examples: [
            {
              wrong: "What I need, it is more practice.",
              right: "What I need is more practice.",
              note: {
                bn: "বাংলা 'যা দরকার, সেটা হলো...' — resumptive it/that ইংরেজি cleft-এ নিষিদ্ধ; what-clause + is + ফোকাস, শেষ।",
                en: "The Bengali 'যা দরকার, সেটা হলো...' habit — resumptive it/that is banned in English clefts; what-clause + is + focus, full stop.",
                hi: "बांग्ला 'जो चाहिए, वह है...' आदत — resumptive it/that अंग्रेज़ी cleft में वर्जित; what-clause + is + फ़ोकस, बस।",
              },
            },
            {
              wrong: "It was Rina who she called me.",
              right: "It was Rina who called me.",
              note: {
                bn: "who-clause-এর কর্তা who-ই — she দুবার গোছানো; ফোকাস (Rina) একবার, কর্তা-দায়িত্ব who-এর।",
                en: "The subject of the who-clause is who itself — she doubles the job; the focus (Rina) appears once, and who carries the subject role.",
                hi: "who-clause का subject who स्वयं है — she काम दोहराती है; फ़ोकस (रीना) एक बार, subject-जिम्मेदारी who की।",
              },
            },
            {
              wrong: "What surprise me is his patience.",
              right: "What surprises me is his patience.",
              note: {
                bn: "what-clause-এর ভেতরের verb-ও একবচন: surprises; পুরো what-clause-টাই বাক্যের একক কর্তা।",
                en: "Even the verb inside the what-clause is singular: surprises; the whole what-clause is the single subject of the sentence.",
                hi: "what-clause के भीतर की verb भी एकवचन: surprises; पूरा what-clause ही वाक्य का एकमात्र subject है।",
              },
            },
            {
              wrong: "All I did was to asking a question.",
              right: "All I did was ask a question.",
              note: {
                bn: "All/What + did-বিশিষ্ট cleft-এর পরে bare infinitive: was ask; to-ও বাদ দেওয়া যায়, V-ing নয়।",
                en: "After an All/What + did cleft use the bare infinitive: was ask; the to is optional at best, and V-ing is wrong.",
                hi: "All/What + did वाले cleft के बाद bare infinitive: was ask; to वैकल्पिक, V-ing ग़लत।",
              },
            },
            {
              wrong: "The reason he resigned is because the workload doubled.",
              right: "The reason he resigned is that the workload doubled.",
              note: {
                bn: "the reason is that — লেখার ভাষার পছন্দ; is because কথ্য রঙ, পরীক্ষার রচনায় ফাঁকি মনে হয়।",
                en: "the reason is that — the written-language choice; is because is casual colour and reads as a shortcut in exam essays.",
                hi: "the reason is that — लिखित भाषा का पसंदीदा रूप; is because बोलचाल का रंग है, परीक्षा-निबंध में शॉर्टकट लगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট গল্পে দেখা যাক + এক নজরে",
            en: "Seen in a short story + at a glance",
            hi: "छोटी कहानी में देखिए + एक नज़र में",
          },
          body: {
            bn: "নিচের সংলাপ-অংশটা পড়ুন — প্রতিটা cleft চিহ্নিত করুন আর ভাবুন লেখক কী স্পটলাইট দিচ্ছেন: 'It was Karim who fixed the projector before the client arrived — nobody else even touched it. What surprised us was how calmly he handled the crisis. All I did was restart it, he laughed. But the manager knew better: it is not the hours you give that matter; it is the attention you pay. The reason he stayed till ten was that the demo had to be perfect. A week later, when the client praised the training, it was Karim's preparation they mentioned first.' পাঁচ ধরনের cleft, পাঁচ জায়গায় — সংশোধন, বিস্ময়, বিনয়, শিক্ষা, কারণ।\n\nএক নজরে: (১) it-cleft = 'ই'-কারের ইংরেজি — ফোকাস আগে, who/that + বাকি; (২) wh-cleft = ফোকাস শেষে, what-clause আগে; (৩) reversed wh-cleft = ফোকাস শিরোনামের মতো সামনে; (৪) all-cleft = 'শুধু এটুকুই'; (৫) the reason... is that... = কারণ-জোর; (৬) এক অনুচ্ছেদে এক-দুটোই; (৭) tense ও verb-অমিল পরীক্ষা করুন। অনুশীলন: আজকের দিনের একটা ঘটনা তিন ভাবে বলুন — একবার it-cleft, একবার wh-cleft, একবার all-cleft — ফোকাস বদলায় কীভাবে দেখুন।",
            en: "Read this dialogue piece — mark every cleft and ask what the writer is spotlighting: 'It was Karim who fixed the projector before the client arrived — nobody else even touched it. What surprised us was how calmly he handled the crisis. All I did was restart it, he laughed. But the manager knew better: it is not the hours you give that matter; it is the attention you pay. The reason he stayed till ten was that the demo had to be perfect. A week later, when the client praised the training, it was Karim's preparation they mentioned first.' Five cleft types in five places — correction, wonder, modesty, lesson, reason.\n\nAt a glance: (1) it-cleft = English for the '-ই' particle — focus first, who/that + rest; (2) wh-cleft = focus at the end, what-clause first; (3) reversed wh-cleft = focus pulled front like a headline; (4) all-cleft = 'nothing but this'; (5) the reason... is that... = reason emphasis; (6) one or two clefts per paragraph at most; (7) always check tense and verb agreement. Practice: retell one incident of today three ways — once as an it-cleft, once as a wh-cleft, once as an all-cleft — and watch the focus move.",
            hi: "यह संवाद-अंश पढ़ें — हर cleft चिह्नित करें और सोचें लेखक किस पर स्पॉटलाइट डाल रहा है: 'It was Karim who fixed the projector before the client arrived — nobody else even touched it. What surprised us was how calmly he handled the crisis. All I did was restart it, he laughed. But the manager knew better: it is not the hours you give that matter; it is the attention you pay. The reason he stayed till ten was that the demo had to be perfect. A week later, when the client praised the training, it was Karim's preparation they mentioned first.' पाँच प्रकार के cleft, पाँच जगहों पर — संशोधन, आश्चर्य, विनम्रता, सीख, कारण।\n\nएक नज़र में: (1) it-cleft = 'ही' कण की अंग्रेज़ी — फ़ोकस पहले, who/that + बाकी; (2) wh-cleft = फ़ोकस अंत में, what-clause पहले; (3) reversed wh-cleft = फ़ोकस सुर्ख़ी की तरह सामने; (4) all-cleft = 'बस इतना ही'; (5) the reason... is that... = कारण-ज़ोर; (6) हर अनुच्छेद में अधिकतम एक-दो; (7) tense और verb-असंगति हमेशा जाँचें। अभ्यास: आज की एक घटना तीन तरह से कहें — एक बार it-cleft, एक बार wh-cleft, एक बार all-cleft — फ़ोकस कैसे खिसकता है देखें।",
          },
          examples: [
            {
              wrong: "What surprised us was how calmly he handled the crisis, was it not?",
              right: "What surprised us was how calmly he handled the crisis.",
              note: {
                bn: "wh-cleft-এর পরে tag-question জুড়তে হয় না — গড়নটাই সম্পূর্ণ; tag চাইলে সাধারণ বাক্যে যান।",
                en: "A wh-cleft needs no tag-question — the frame is complete; if you want a tag, move to a plain sentence.",
                hi: "wh-cleft के बाद tag-question नहीं जोड़ते — ढाँचा पूरा है; tag चाहिए तो सादे वाक्य पर आएँ।",
              },
            },
            {
              wrong: "All he did was restarting the projector.",
              right: "All he did was restart the projector.",
              note: {
                bn: "All + did-cleft-এর পরে bare infinitive (restart) — restarting নয়; did-এর ছায়ায় verb নগ্ন রূপে ফেরে।",
                en: "After an All + did cleft comes the bare infinitive (restart) — not restarting; in the shadow of did the verb returns naked.",
                hi: "All + did cleft के बाद bare infinitive (restart) — restarting नहीं; did की छाया में verb नंगे रूप में लौटता है।",
              },
            },
            {
              wrong: "It was Karim's preparation what they mentioned first.",
              right: "It was Karim's preparation that they mentioned first.",
              note: {
                bn: "it-cleft-এর দ্বিতীয় ভাগে that (বা who) — what শুধু wh-cleft-এর মাথায়; দুই পরিবারের শব্দ অদল-বদল হয় না।",
                en: "The second half of an it-cleft takes that (or who) — what belongs only at the head of a wh-cleft; the two families do not swap words.",
                hi: "it-cleft का दूसरा हिस्सा that (या who) लेता है — what केवल wh-cleft के सिर पर; दो परिवार के शब्द आपस में नहीं बदलते।",
              },
            },
            {
              wrong: "The reason he stayed till ten was that the demo had to be perfect, and the reason also was his pride.",
              right: "The reason he stayed till ten was that the demo had to be perfect. Pride, of course, played its part too.",
              note: {
                bn: "দুটো reason-cleft এক সারিতে নয় — প্রথমটা cleft, দ্বিতীয়টা সাধারণ বাক্যে; reason-cleft একবারেই শক্তিশালী।",
                en: "Two reason-clefts do not share one line — the first stays a cleft, the second drops to a plain sentence; one reason-cleft is strong enough.",
                hi: "दो reason-cleft एक पंक्ति में नहीं — पहला cleft रहता है, दूसरा सादे वाक्य में उतर जाता है; एक reason-cleft पर्याप्त है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "ইংরেজি বাক্যটা মনে মনে বাংলায় বলুন — 'ই'-কার কোথায় বসে, সেখানেই cleft-এর ফোকাস।",
          en: "Say the English sentence to yourself in Bengali — wherever the '-ই' particle falls, that is the focus of your cleft.",
          hi: "अंग्रेज़ी वाक्य मन में हिंदी/बांग्ला में बोलें — 'ही' कण जहाँ बैठे, वही cleft का फ़ोकस है।",
        },
        {
          bn: "it-cleft = It + be + ফোকাস + who/that + বাকি; wh-cleft = What + বাকি + is + ফোকাস — দুই সূত্র মুখস্থ রাখুন।",
          en: "it-cleft = It + be + focus + who/that + rest; wh-cleft = What + rest + is + focus — memorise both formulas.",
          hi: "it-cleft = It + be + फ़ोकस + who/that + बाकी; wh-cleft = What + बाकी + is + फ़ोकस — दोनों सूत्र याद रखें।",
        },
        {
          bn: "মানুষ → who, জিনিস/ঘটনা → that (formal লেখায় which); who/that-এর পরে verb-এর কর্তা ফোকাস, তাই অমিল যাবে না।",
          en: "People → who; things/events → that (which in formal writing); the verb after who/that agrees with the focus — no mismatch allowed.",
          hi: "व्यक्ति → who; वस्तु/घटना → that (औपचारिक लेखन में which); who/that के बाद की verb फ़ोकस से मिले — असंगति नहीं।",
        },
        {
          bn: "বিগত ঘটনার cleft-এ It was; স্থায়ী সত্যে It is — সময় মেলানো ভুলে যাবেন না।",
          en: "Finished events take It was; standing truths take It is — never forget to match the time.",
          hi: "बीती घटना पर It was; स्थायी सत्य पर It is — समय मिलाना न भूलें।",
        },
        {
          bn: "What-clause একবচন verb নেয় — What I need IS time; পরীক্ষায় একবচনই নিরাপদ।",
          en: "A what-clause takes a singular verb — What I need IS time; in exams the singular is the safe bet.",
          hi: "what-clause एकवचन verb लेता है — What I need IS time; परीक्षा में एकवचन ही सुरक्षित।",
        },
        {
          bn: "All + did-cleft-এর পরে bare infinitive — All she did was smile; to বা -ing নয়।",
          en: "After an All + did cleft use the bare infinitive — All she did was smile; no to, no -ing.",
          hi: "All + did cleft के बाद bare infinitive — All she did was smile; न to, न -ing।",
        },
        {
          bn: "বাংলা 'সেটা হলো' ছায়ায় resumptive it/that আসবে — What I need, that is time ✗; what-clause শেষ হলে সরাসরি is।",
          en: "Under the Bengali 'সেটা হলো' shadow a resumptive it/that will creep in — What I need, that is time is wrong; after the what-clause, is follows directly.",
          hi: "बांग्ला/हिंदी 'वह है' की छाया में resumptive it/that घुसेगा — What I need, that is time ग़लत; what-clause के बाद सीधे is।",
        },
        {
          bn: "এক অনুচ্ছেদে এক-দুটো cleft-ই যথেষ্ট — সব জোর দিলে কিছুই জোরদার থাকে না।",
          en: "One or two clefts per paragraph are enough — when everything is emphasised, nothing is.",
          hi: "हर अनुच्छेद में एक-दो cleft ही काफ़ी — सब पर ज़ोर हो तो कुछ भी ज़ोरदार नहीं।",
        },
        {
          bn: "রচনার উপসংহারে একটা wh-cleft বসান — What this shows is... — পরীক্ষকের চোখে স্তর উঁচিয়ে দেয়।",
          en: "Plant one wh-cleft in your essay's conclusion — What this shows is... — it visibly lifts the level in an examiner's eyes.",
          hi: "निबंध के निष्कर्ष में एक wh-cleft रखें — What this shows is... — परीक्षक की नज़र में स्तर ऊँचा दिखता है।",
        },
      ],
      quiz: [
        {
          question: "______ was Karim who solved the puzzle.",
          options: ["That", "It", "This", "What"],
          answer: 1,
          explanation: {
            bn: "it-cleft-এর সূত্র It + be + ফোকাস + who + বাকি — It was Karim who solved the puzzle।",
            en: "The it-cleft formula is It + be + focus + who + rest — It was Karim who solved the puzzle.",
            hi: "it-cleft सूत्र है It + be + फ़ोकस + who + बाकी — It was Karim who solved the puzzle।",
          },
        },
        {
          question: "What I need right now ______ a long holiday.",
          options: ["are", "were", "is", "be"],
          answer: 2,
          explanation: {
            bn: "what-clause একবচন verb নেয় — What I need IS a long holiday; পরীক্ষার নিরাপদ নিয়ম।",
            en: "A what-clause takes a singular verb — What I need IS a long holiday; the safe exam rule.",
            hi: "what-clause एकवचन verb लेता है — What I need IS a long holiday; परीक्षा का सुरक्षित नियम।",
          },
        },
        {
          question: "It was the noise ______ woke the baby.",
          options: ["who", "what", "that", "which of"],
          answer: 2,
          explanation: {
            bn: "ফোকাস জিনিস (the noise) — that; who মানুষের জন্য, what wh-cleft-এর মাথায়।",
            en: "The focus is a thing (the noise) — that; who is for people, what heads only wh-clefts.",
            hi: "फ़ोकस वस्तु (the noise) है — that; who व्यक्तियों के लिए, what केवल wh-cleft के सिर पर।",
          },
        },
        {
          question: "______ I want is a little peace and quiet.",
          options: ["Everything what", "All", "That all", "Which"],
          answer: 1,
          explanation: {
            bn: "all-cleft: All (that) I want is... — all-এর পরে what আসে না।",
            en: "The all-cleft: All (that) I want is... — what never follows all.",
            hi: "all-cleft: All (that) I want is... — all के बाद what नहीं आता।",
          },
        },
        {
          question: "The reason ______ I called is that the server is down.",
          options: ["because", "why", "that why", "for"],
          answer: 1,
          explanation: {
            bn: "The reason why I called is that... — reason-এর পরে why-clause, আর be-verb-এর পরে that-clause (because নয়)।",
            en: "The reason why I called is that... — a why-clause after reason, and a that-clause after the be-verb (not because).",
            hi: "The reason why I called is that... — reason के बाद why-clause, और be-verb के बाद that-clause (because नहीं)।",
          },
        },
        {
          question: "Which sentence best corrects someone who thinks Rahim gave the gift?",
          options: [
            "Rahim she gave the gift.",
            "It was Mina who gave the gift.",
            "It was Mina which gave the gift.",
            "What Mina gave was the gift.",
          ],
          answer: 1,
          explanation: {
            bn: "ব্যক্তিকে শোধরাতে it-cleft + who: It was Mina who gave the gift; তৃতীয়টায় which ভুল, চতুর্থটা ফোকাস জিনিসে সরিয়ে দেয়।",
            en: "To correct a person, use the it-cleft with who: It was Mina who gave the gift; the third takes wrong which, the fourth shifts focus to the thing.",
            hi: "व्यक्ति शोधरने के लिए it-cleft + who: It was Mina who gave the gift; तीसरे में which ग़लत, चौथा फ़ोकस वस्तु पर खिसका देता है।",
          },
        },
        {
          question: "Which cleft shifts the focus to the OBJECT of the sentence 'Rahim gave me a pen yesterday'?",
          options: [
            "It was Rahim who gave me a pen.",
            "What Rahim gave me was a pen.",
            "It was yesterday that Rahim gave me a pen.",
            "Rahim did give me a pen.",
          ],
          answer: 1,
          explanation: {
            bn: "wh-cleft-এ ফোকাস শেষে — What Rahim gave me was A PEN; সংলাপের বাকিটা ছায়ায়।",
            en: "In a wh-cleft the focus sits at the end — What Rahim gave me was A PEN; the rest of the sentence fades.",
            hi: "wh-cleft में फ़ोकस अंत में — What Rahim gave me was A PEN; बाकी वाक्य छाया में।",
          },
        },
        {
          question: "What surprises me ______ his endless patience.",
          options: ["are", "were", "is", "have been"],
          answer: 2,
          explanation: {
            bn: "পুরো what-clause একক কর্তা — একবচন is; এছাড়া ভেতরের verb-ও একবচন: What surprises me।",
            en: "The whole what-clause is one subject — singular is; the verb inside is singular too: What surprises me.",
            hi: "पूरा what-clause एक ही subject है — एकवचन is; भीतर की verb भी एकवचन: What surprises me।",
          },
        },
        {
          question: "All she did was ______ the address on a sticky note.",
          options: ["writing", "to writing", "write", "wrote"],
          answer: 2,
          explanation: {
            bn: "All + did-cleft-এর পরে bare infinitive — was write; to ঐচ্ছিক, -ing ভুল।",
            en: "After an All + did cleft comes the bare infinitive — was write; to is optional, -ing is wrong.",
            hi: "All + did cleft के बाद bare infinitive — was write; to वैकल्पिक, -ing ग़लत।",
          },
        },
        {
          question: "Why is 'What I need, that is time' considered wrong in written English?",
          options: [
            "what-clauses never need a be-verb",
            "English clefts take no resumptive pronoun after the what-clause",
            "that is never used in clefts",
            "the comma is unnecessary",
          ],
          answer: 1,
          explanation: {
            bn: "বাংলা 'সেটা হলো'-র ছায়ায় that/it পুনরাবৃত্তি — ইংরেজি cleft-এ what-clause শেষ হলে সরাসরি is: What I need is time।",
            en: "The Bengali 'সেটা হলো' shadow adds a resumptive that/it — English clefts go straight to is: What I need is time.",
            hi: "बांग्ला 'वह है' की छाया that/it दोहराती है — अंग्रेज़ी cleft में सीधे is: What I need is time।",
          },
        },
      ],
    },
  },

  /* ── 4. Discourse Markers & Cohesion (Unit 4) ───────────────────────── */
  {
    topic: "Discourse Markers & Cohesion",
    level: "advanced",
    title: "Discourse Markers & Cohesion",
    unit: 4,
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — বাক্য শেষ মানেই কাজ শেষ নয়",
            en: "When to use them — the end of a sentence is not the end of the job",
            hi: "कब इस्तेमाल होते हैं — वाक्य खत्म होना काम खत्म होना नहीं",
          },
          body: {
            bn: "ডিসকোর্স মার্কার হলো বাক্যের বাইরের সংযোগসূত্র — এরা দুটো বাক্যের (বা দুটো ভাবনার) মধ্যে সম্পর্ক নামিয়ে আনে: বিপরীত (however), ফল (therefore), যোগ (moreover), উদাহরণ (for instance), সময়ক্রম (meanwhile)। বাংলা রচনাতেও আমরা এই কাজ করি — 'তবে', 'সুতরাং', 'তাছাড়া', 'যেমন'। পার্থক্য হলো জায়গা আর যতিচিহ্ন: বাংলায় 'কিন্তু' যেখানে সেখানে বসে, কিন্তু ইংরেজির however-এর নিজস্ব তিনটা আসন আর কমার আইন আছে। কোথায় এদের সবচেয়ে দরকার? রচনা, রিপোর্ট, ইমেইল, presentation script — যেখানে কয়েকটা ভাবনা একটা যুক্তির স্রোতে বয়ে যেতে হয়। কোথায় কম? কথ্য ভাষায় সংকেত দেয় সুর আর বিরতি, তাই মার্কার কম লাগে। একটা সতর্কতা এখনই: প্রতি দ্বিতীয় বাক্যে however বসানো cohesion নয়, যান্ত্রিকতা। মার্কার মানে যুক্তির ট্রাফিক-সংকেত — রাস্তায় যত বেশি সংকেত, তত জট।",
            en: "Discourse markers are the connectors beyond the sentence — they name the relationship between two sentences (or two ideas): contrast (however), result (therefore), addition (moreover), example (for instance), time sequence (meanwhile). Bengali writing does the same job with 'তবে', 'সুতরাং', 'তাছাড়া', 'যেমন'. The difference lies in position and punctuation: Bengali 'কিন্তু' sits anywhere, but English however has three fixed seats and its own comma law. Where are they needed most? Essays, reports, emails, presentation scripts — anywhere several ideas must flow as one argument. Where less? In speech, tone and pauses do the signalling, so fewer markers are used. One warning now: putting however in every second sentence is not cohesion, it is machinery. A marker is a traffic signal for logic — the more signals on the road, the worse the jam.",
            hi: "डिसकोर्स मार्कर वाक्य से आगे के संयोजक हैं — दो वाक्यों (या दो विचारों) के बीच संबंध नाम देते हैं: विरोध (however), परिणाम (therefore), जोड़ (moreover), उदाहरण (for instance), क्रम (meanwhile)। हिंदी में भी यही काम 'लेकिन', 'इसलिए', 'इसके अलावा', 'जैसे' करते हैं। फ़र्क स्थान और विराम-चिह्न का है: हिंदी का 'लेकिन' कहीं भी बैठता है, पर अंग्रेज़ी however की तीन तय सीटें और अपना comma-कानून है। सबसे ज़्यादा ज़रूरत कहाँ? निबंध, रिपोर्ट, ईमेल, प्रेज़ेंटेशन स्क्रिप्ट — जहाँ कई विचार एक तर्क-धारा में बहें। कहाँ कम? बोलचाल में लहजा और ठहराव संकेत देते हैं, इसलिए मार्कर कम। एक चेतावनी: हर दूसरे वाक्य में however लगाना कोहेशन नहीं, यांत्रिकता है। मार्कर तर्क का ट्रैफ़िक-सिग्नल है — सिग्नल जितने ज़्यादा, जाम उतना गहरा।",
          },
          examples: [
            { wrong: "The report was late. The client was angry. We apologized. We changed the process.", right: "The report was late; therefore the client was angry, and we apologized before changing the process.", note: { bn: "চারটা ছোট বাক্যের চেয়ে একটা causal স্রোত বেশি পেশাদার শোনায় — therefore আর before সম্পর্কগুলো নামিয়ে আনে।", en: "One causal stream sounds far more professional than four short sentences — therefore and before name the relationships.", hi: "चार छोटे वाक्यों की बजाय एक कार्य-धारा ज़्यादा प्रोफेशनल लगती है — therefore और before संबंध दर्शाते हैं।" } },
            { wrong: "The medicine is cheap. It has serious side effects.", right: "The medicine is cheap; however, it has serious side effects.", note: { bn: "দুই ভাবনার মধ্যে বিপরীত আছে — however-জাতীয় মার্কার সেটা নাম করে বলে দেয়।", en: "The two ideas stand in contrast — a however-type marker names that contrast explicitly.", hi: "दोनों विचारों में विरोध है — however जैसा मार्कर उसे स्पष्ट नाम देता है।" } },
            { wrong: "I like tea very much. I drink tea in the morning. Tea is good for me.", right: "I like tea so much that I start every morning with it.", note: { bn: "একই শব্দ তিন বাক্যে — pronoun (it) আর so...that গঠন পুনরাবৃত্তি গিলে ফেলে।", en: "The same word three times — the pronoun (it) and the so...that frame swallow the repetition.", hi: "एक ही शब्द तीन बार — it सर्वनाम और so...that ढाँचा दोहराव निगल जाता है।" } },
            { wrong: "Mobile phones are useful. They are also harmful. They are cheap.", right: "Mobile phones are useful and affordable, yet they can also be harmful.", note: { bn: "addition (and affordable) আর contrast (yet) এক বাক্যে — তিন বাক্যের কাজ শেষ।", en: "Addition (and affordable) and contrast (yet) in one sentence — three sentences' work done.", hi: "जोड़ (and affordable) और विरोध (yet) एक ही वाक्य में — तीन वाक्यों का काम पूरा।" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — linking adverb বনাম conjunction: কোথায় বসে, কোন যতি",
            en: "Formation — linking adverb vs conjunction: position and punctuation",
            hi: "गठन — linking adverb बनाम conjunction: स्थान और विराम-चिह्न",
          },
          body: {
            bn: "প্রথমে দল চেনুন। Coordinating conjunction (and, but, or, so, yet) clause-এর মাঝখানে বসে, আগে কমা: The plan was bold, but the board rejected it। Subordinating conjunction (although, because, while, whereas) দুটো clause-কে অসমান করে — একটা অধীন হয়ে যায়: Although the plan was bold, the board rejected it। আর linking adverb (however, therefore, moreover, consequently, nevertheless) আসলে adverb — এরা clause জোড়ে না, মন্তব্য যোগ করে। তাই এদের নিজস্ব যতি-আইন: (১) বাক্যের শুরুতে — However, the board rejected it (পরে কমা)। (২) clause-এর মাঝে — The plan, however, was rejected (দুই কমায় বন্দি)। (৩) বাক্যের শেষে — The plan was rejected, however (কমার পরে)। সবচেয়ে জরুরি আইন: দুই পূর্ণ বাক্যের মাঝে শুধু কমা দিয়ে however বসানো যায় না — আগে semicolon (;) বা full stop চাই: It was late; however, we kept working।",
            en: "First, know the teams. A coordinating conjunction (and, but, or, so, yet) sits between clauses with a comma before it: The plan was bold, but the board rejected it. A subordinating conjunction (although, because, while, whereas) makes the two clauses unequal — one becomes dependent: Although the plan was bold, the board rejected it. A linking adverb (however, therefore, moreover, consequently, nevertheless) is really an adverb — it does not join clauses, it comments. Hence its own punctuation law: (1) at the start — However, the board rejected it (comma after). (2) inside the clause — The plan, however, was rejected (held between two commas). (3) at the end — The plan was rejected, however (after the comma). And the most important law: two full sentences cannot be joined by a comma plus however — a semicolon or full stop must come first: It was late; however, we kept working.",
            hi: "पहले टीमें पहचानें। Coordinating conjunction (and, but, or, so, yet) clauses के बीच बैठता है, आगे comma: The plan was bold, but the board rejected it। Subordinating conjunction (although, because, while, whereas) दोनों clauses को असमान बनाता है — एक आश्रित हो जाता है: Although the plan was bold, the board rejected it। और linking adverb (however, therefore, moreover, consequently, nevertheless) असल में adverb है — यह clauses नहीं जोड़ता, टिप्पणी करता है। इसलिए इसका अपना विराम-कानून: (1) वाक्य की शुरुआत में — However, the board rejected it (बाद में comma)। (2) clause के भीतर — The plan, however, was rejected (दो commas के बीच)। (3) वाक्य के अंत में — The plan was rejected, however (comma के बाद)। सबसे ज़रूरी कानून: दो पूरे वाक्यों को केवल comma + however से नहीं जोड़ सकते — पहले semicolon (;) या full stop चाहिए: It was late; however, we kept working।",
          },
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
            bn: "আভাস ও প্যাটার্ন — অর্থের পরিবারে মার্কার বাছাই",
            en: "Signals and patterns — choosing markers by meaning family",
            hi: "संकेत और पैटर्न — अर्थ-परिवार से मार्कर का चुनाव",
          },
          body: {
            bn: "মার্কার মুখস্থ করার আগে পরিবার চিনুন: • বিপরীত/লঘু-অসম্মতি: however, nevertheless, nonetheless, still, yet, on the other hand, in contrast • কারণ-ফল: therefore, thus, hence, consequently, as a result • সংযোজন: moreover, furthermore, in addition, what is more • উদাহরণ: for instance, for example, namely, such as • ক্রম/সময়: first, subsequently, meanwhile, finally • সংশোধন-জোর: in fact, actually, as a matter of fact, on the contrary। নিয়ম একটাই: আগের বাক্যের সঙ্গে নতুন বাক্যের সম্পর্ক আগে ঠিক করুন, তারপর পরিবার থেকে মার্কার তুলুন। therefore লিখলে পাঠক আগে কারণ খোঁজে — আগের বাক্যে কারণ না থাকলে মার্কারটাই ভুল। moreover-এর আগে অন্তত একটা পয়েন্ট থাকতে হবে যেটার সঙ্গে যোগ হচ্ছে; in fact-এর আগে এমন কিছু থাকতে হবে যা সংশোধন বা জোর দাবি করে।",
            en: "Before memorising markers, know the families: • contrast/mild disagreement: however, nevertheless, nonetheless, still, yet, on the other hand, in contrast • cause-result: therefore, thus, hence, consequently, as a result • addition: moreover, furthermore, in addition, what is more • example: for instance, for example, namely, such as • sequence/time: first, subsequently, meanwhile, finally • correction-emphasis: in fact, actually, as a matter of fact, on the contrary. The rule is single: first decide the relationship between the previous sentence and the new one, then pick a marker from that family. When a reader meets therefore, they look backwards for a cause — if the previous sentence holds no cause, the marker itself is wrong. Before moreover there must be at least one point to add to; before in fact something that demands emphasis or correction.",
            hi: "मार्कर रटने से पहले परिवार पहचानें: • विरोध/हल्का असहमति: however, nevertheless, nonetheless, still, yet, on the other hand, in contrast • कारण-परिणाम: therefore, thus, hence, consequently, as a result • जोड़: moreover, furthermore, in addition, what is more • उदाहरण: for instance, for example, namely, such as • क्रम/समय: first, subsequently, meanwhile, finally • संशोधन-बल: in fact, actually, as a matter of fact, on the contrary। नियम एक ही है: पिछले और नए वाक्य के बीच संबंध पहले तय करें, फिर उसी परिवार से मार्कर चुनें। therefore पढ़ते ही पाठक पीछे कारण ढूँढता है — पिछले वाक्य में कारण न हो तो मार्कर ही ग़लत है। moreover से पहले कम-से-कम एक बिंदु होना चाहिए; in fact से पहले कुछ ऐसा जो बल या संशोधन माँगे।",
          },
          examples: [
            { wrong: "The medicine is affordable; moreover, it has side effects.", right: "The medicine is affordable; however, it has side effects.", note: { bn: "পাশের ভাবনাটা যোগ নয়, বিপরীত — পরিবারই বেছে নেওয়া ভুল হলো।", en: "The neighbouring idea is a contrast, not an addition — the family itself was mispicked.", hi: "बगल का विचार जोड़ नहीं, विरोध है — परिवार का चुनाव ही ग़लत हुआ।" } },
            { wrong: "Sales rose sharply; nevertheless, we expanded the team.", right: "Sales rose sharply; therefore, we expanded the team.", note: { bn: "nevertheless মানে 'এ সবকিছু সত্ত্বেও'; ফল বোঝাতে চাইলে therefore।", en: "Nevertheless means 'despite all this'; for the result you need therefore.", hi: "Neverthelesss का अर्थ 'इन सबके बावजूद'; परिणाम बताने के लिए therefore।" } },
            { wrong: "He missed the train; as a result, he arrived early.", right: "He missed the train; consequently, he arrived late.", note: { bn: "মার্কার ঠিক হলেও যুক্তি উল্টে যায় না — as a result-এর পরে আসে ফল, আর ফলটা বাস্তবসঙ্গত হতে হবে।", en: "Even a correct marker cannot reverse logic — as a result must be followed by a plausible consequence.", hi: "मार्कर सही होकर भी तर्क उलट नहीं सकता — as a result के बाद विवेकसंगत परिणाम आए।" } },
            { wrong: "Many students failed — in fact, Rina and Karim failed.", right: "Many students failed — for instance, Rina and Karim.", note: { bn: "উদাহরণ দিতে for instance; in fact জোর বা সংশোধনে চলে — পরিবার মিশিয়ে ফেলা ক্লাসিক ভুল।", en: "Examples take for instance; in fact signals emphasis or correction — mixing the families is a classic slip.", hi: "उदाहरण के लिए for instance; in fact बल या संशोधन के लिए — परिवार मिलाना क्लासिक चूक है।" } },
          ],
        },
        {
          heading: {
            bn: "despite + বিশেষ্য বনাম although + পূর্ণ clause — সীমান্তের নিয়ম",
            en: "despite + noun vs although + full clause — the border rule",
            hi: "despite + संज्ञा बनाम although + पूर्ण clause — सीमा का नियम",
          },
          body: {
            bn: "এই জুটির নিয়ম কঠোর: despite আর in spite of পরে বিশেষ্য, pronoun বা -ing নেয় — কখনও পূর্ণ clause নয়; although, even though, though পরে পূর্ণ clause (subject + verb) নেয়। বাংলার 'সত্ত্বেও/হলেও' দুই জায়গাতেই চলে যায় বলে বাঙালি লেখক সীমান্ত ভুলে যান। সেতু তিনটা মনে রাখুন: despite the fact that + clause, in spite of the fact that + clause, আর -ing রূপান্তর — Despite it was raining → Despite the rain বা Despite the fact that it was raining। কারণ-পাশেও একই ছবি: because of + বিশেষ্য, because + clause; owing to আর due to আনুষ্ঠানিক রঙের because of। আর ছোট্ট কিন্তু আছে — despite-এর পরে of আসে না; of শুধু in spite OF-এ।",
            en: "The rule for this pair is strict: despite and in spite of take a noun, pronoun or -ing form — never a full clause; although, even though and though take a full clause (subject + verb). Because Bengali 'সত্ত্বেও/হলেও' serves both sides, Bengali writers cross the border often. Keep three bridges in mind: despite the fact that + clause, in spite of the fact that + clause, and the -ing conversion — Despite it was raining → Despite the rain or Despite the fact that it was raining. The cause side mirrors this: because of + noun, because + clause; owing to and due to are the formal colours of because of. And a small but: no of ever follows despite — of belongs only to in spite OF.",
            hi: "इस जोड़ी का नियम सख़्त है: despite और in spite of के बाद संज्ञा, सर्वनाम या -ing आता है — कभी पूर्ण clause नहीं; although, even though, though के बाद पूर्ण clause (subject + verb)। हिंदी का 'के बावजूद' दोनों ओर चलता है, इसलिए लेखक सीमा लाँघ जाते हैं। तीन पुल याद रखें: despite the fact that + clause, in spite of the fact that + clause, और -ing रूपांतरण — Despite it was raining → Despite the rain या Despite the fact that it was raining। कारण-पक्ष में भी वही चित्र: because of + संज्ञा, because + clause; owing to और due to because of के औपचारिक रंग। और एक छोटी बात — despite के बाद of कभी नहीं; of केवल in spite OF में।",
          },
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
            bn: "reference devices ও lexical chains — আগের কথা টেনে ধরা",
            en: "Reference devices and lexical chains — pulling earlier ideas forward",
            hi: "reference devices और lexical chains — पिछली बात को खींचकर पकड़ना",
          },
          body: {
            bn: "কোহেশনের আরেক হাত — পুনরাবৃত্তি না করে আগের জিনিস ধরে রাখা। সরঞ্জাম চারটা: (১) this/that/these/those + বিশেষ্য — The policy caused confusion. This decision surprised everyone (this decision = ওই নীতি ঘোষণাটাই)। (২) it বনাম this — it শুধু শেষ উল্লেখিত জিনিস ধরে, this নতুন ফোকাস তৈরি করে; অস্পষ্ট হলে this + বিশেষ্যই নিরাপদ। (৩) the former...the latter — ঠিক দুটো উল্লেখের মধ্যে আগে উল্লিখিতটা আর পরে উল্লিখিতটা; তিন বা তার বেশি আইটেমে চলে না। (৪) lexical chain — একই ধারণা বিভিন্ন শব্দে বেড়ে ওঠা: traffic jam → congestion → the delay; students → learners → the class। চেইন থাকলে লেখা জৈব শোনায়; একই শব্দ পাঁচবার ফিরলে লেখা স্থবির হয়ে যায়।",
            en: "The other hand of cohesion — holding on to earlier things without repeating them. Four tools: (1) this/that/these/those + noun — The policy caused confusion. This decision surprised everyone (this decision = that very announcement). (2) it vs this — it only picks up the last-mentioned item, while this creates a fresh focus; when in doubt, this + noun is the safe choice. (3) the former...the latter — of exactly two mentions, the one named first and the one named second; with three or more items it fails. (4) the lexical chain — one idea growing through different words: traffic jam → congestion → the delay; students → learners → the class. A chain keeps writing organic; the same word five times makes it stiff.",
            hi: "कोहेशन का दूसरा हाथ — दोहराए बिना पिछली चीज़ें पकड़े रखना। चार औज़ार: (1) this/that/these/those + संज्ञा — The policy caused confusion. This decision surprised everyone (this decision = वही घोषणा)। (2) it बनाम this — it केवल अंतिम उल्लिखित वस्तु लेता है, this नया फ़ोकस बनाता है; संदेह हो तो this + संज्ञा सुरक्षित। (3) the former...the latter — ठीक दो उल्लेखों में पहला और दूसरा; तीन या अधिक वस्तुओं पर यह नहीं चलता। (4) lexical chain — एक ही विचार अलग-अलग शब्दों में बढ़ता है: traffic jam → congestion → the delay; students → learners → the class। शृंखला हो तो लेखन जीवंत लगता है; एक ही शब्द पाँच बार आए तो लेखन अकड़ जाता है।",
          },
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
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors made by advanced learners",
            hi: "एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "এই পাঠের ভুলগুলো ব্যাকরণ ঠিক রেখেই ঘটে, তাই পড়তে গিয়ে ধরা পড়ে না। প্রথম দল: যুগল-মার্কার — বাংলার 'যদিও...কিন্তু', 'কারণ...তাই' জোড়া ইংরেজিতে নিষিদ্ধ: Although he is rich, but he is humble / Because he was ill, therefore he stayed home — এক clause, এক connector। দ্বিতীয় দল: comma splice — however, therefore, moreover-কে কমার পরে বসিয়ে দুই পূর্ণ বাক্য জোড়া; semicolon বা full stop ছাড়া এরা চলে না। তৃতীয় দল: however-ঘনত্ব — প্রতি দ্বিতীয় বাক্যে however; ঘুরিয়ে লগান yet, still, nevertheless, even so। চতুর্থ দল: besides আর moreover-এর রেজিস্টার গোলমাল — besides কথ্য ও 'আর তো কী' টোনের; লেখ্য ভাষায় furthermore/in addition। পঞ্চম দল: the former/latter-কে তিন বা তার বেশি আইটেমে টেনে আনা — এ জুটি শুধু দুটোর জন্য।",
            en: "The errors of this lesson happen inside correct grammar, so they slip past a quick read. Group one: paired markers — the Bengali 'যদিও...কিন্তু', 'কারণ...তাই' couples are banned in English: Although he is rich, but he is humble / Because he was ill, therefore he stayed home — one clause, one connector. Group two: the comma splice — joining two full sentences over a comma with however, therefore or moreover; without a semicolon or full stop they cannot stand. Group three: however density — however in every second sentence; rotate yet, still, nevertheless, even so. Group four: register confusion between besides and moreover — besides is casual, with an 'and anyway' tone; in writing prefer furthermore/in addition. Group five: dragging the former/latter into three or more items — the pair serves exactly two.",
            hi: "इस पाठ की गलतियाँ सही व्याकरण के भीतर घटती हैं, इसलिए जल्दी पढ़ने पर पकड़ में नहीं आतीं। पहला समूह: युगल-मार्कर — 'जबकि...लेकिन', 'क्योंकि...इसलिए' की जोड़ियाँ अंग्रेज़ी में वर्जित हैं: Although he is rich, but he is humble / Because he was ill, therefore he stayed home — एक clause, एक connector। दूसरा समूह: comma splice — दो पूरे वाक्य comma पर however, therefore, moreover रखकर जोड़ना; semicolon या full stop के बिना ये टिकते नहीं। तीसरा समूह: however की घनत्व — हर दूसरे वाक्य में however; yet, still, nevertheless, even so घुमाएँ। चौथा समूह: besides और moreover का रजिस्टर-भ्रम — besides बोलचाल का है, 'और वैसे भी' लहजे का; लेखन में furthermore/in addition। पाँचवाँ समूह: the former/latter को तीन या अधिक वस्तुओं पर खींचना — यह जोड़ी केवल दो की है।",
          },
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
            bn: "ছোট লেখায় দেখা যাক",
            en: "Seen in a short piece of writing",
            hi: "छोटे लेखन में देखिए",
          },
          body: {
            bn: "নিচের অনুচ্ছেদটা একটা পরীক্ষার রচনা বা রিপোর্টের মতো লেখা — পাঠের সব মার্কার একসঙ্গে কাজ করছে: 'Online education has grown rapidly in Bangladesh. However, access is uneven: city students enjoy fast internet, while many village learners struggle with weak signals. Despite these barriers, enrolment keeps rising, and the results are encouraging. This growth has created a new challenge — quality control. Moreover, employers still prefer face-to-face training; consequently, institutes now offer blended courses. Of the two models, the former saves travel costs, whereas the latter builds discipline. Although neither is perfect, the combination may serve both. Therefore, the real question is not whether to go online, but how to do it well.' প্রতিটা মার্কারের নিচে দাগ দিন আর জিজ্ঞেস করুন: লেখক কোন সম্পর্ক নামিয়ে আনছেন — বিপরীত, ফল, নাকি যোগ? যতিচিহ্নগুলোর দিকেও চোখ রাখুন — semicolon-এর পরে মার্কার, মার্কারের পরে কমা।",
            en: "Read this paragraph like an exam essay or a report — every marker of the lesson is at work: 'Online education has grown rapidly in Bangladesh. However, access is uneven: city students enjoy fast internet, while many village learners struggle with weak signals. Despite these barriers, enrolment keeps rising, and the results are encouraging. This growth has created a new challenge — quality control. Moreover, employers still prefer face-to-face training; consequently, institutes now offer blended courses. Of the two models, the former saves travel costs, whereas the latter builds discipline. Although neither is perfect, the combination may serve both. Therefore, the real question is not whether to go online, but how to do it well.' Underline each marker and ask: which relationship is the writer naming — contrast, result or addition? Watch the punctuation too — a marker after a semicolon, a comma after the marker.",
            hi: "इस अनुच्छेद को परीक्षा-निबंध या रिपोर्ट जैसा पढ़ें — पाठ के सारे मार्कर एक साथ काम कर रहे हैं: 'Online education has grown rapidly in Bangladesh. However, access is uneven: city students enjoy fast internet, while many village learners struggle with weak signals. Despite these barriers, enrolment keeps rising, and the results are encouraging. This growth has created a new challenge — quality control. Moreover, employers still prefer face-to-face training; consequently, institutes now offer blended courses. Of the two models, the former saves travel costs, whereas the latter builds discipline. Although neither is perfect, the combination may serve both. Therefore, the real question is not whether to go online, but how to do it well.' हर मार्कर के नीचे रेखा खींचें और पूछें: लेखक कौन-सा संबंध नाम दे रहा है — विरोध, परिणाम या जोड़? विराम-चिह्न भी देखें — semicolon के बाद मार्कर, मार्कर के बाद comma।",
          },
          examples: [
            { wrong: "Despite of uneven internet, enrolment keeps rising.", right: "Despite uneven internet, enrolment keeps rising.", note: { bn: "despite + of অসম্ভব — of শুধু in spite of-এ।", en: "despite + of is impossible — of belongs only to in spite of.", hi: "despite + of असंभव — of केवल in spite of में।" } },
            { wrong: "Employers still prefer face-to-face training, consequently institutes now offer blended courses.", right: "Employers still prefer face-to-face training; consequently, institutes now offer blended courses.", note: { bn: "দুই পূর্ণ বাক্য — কমার জায়গায় semicolon, তারপর consequently, (কমা)।", en: "Two full sentences — a semicolon where the comma was, then consequently, (with a comma).", hi: "दो पूरे वाक्य — comma की जगह semicolon, फिर consequently, (comma सहित)।" } },
            { wrong: "City students enjoy fast internet. Many village learners struggle with weak signals.", right: "City students enjoy fast internet, while many village learners struggle with weak signals.", note: { bn: "while দুই অর্ধকে এক বাক্যে মেরে বিপরীত দেখায় — টুকরো বাক্যের জট কমায়।", en: "while welds the two halves into one sentence of contrast — fewer choppy sentences.", hi: "while दोनों हिस्सों को एक विरोध-वाक्य में जोड़ देता है — टुकड़े-टुकड़े वाक्य कम।" } },
            { wrong: "Although neither model is perfect, but the combination may serve both.", right: "Although neither model is perfect, the combination may serve both.", note: { bn: "লেখার মাঝপথেও যুগল-মার্কার ফিরে আসে — শেষ সম্পাদনায় শিকারি চোখে খুঁজুন।", en: "The double-marker habit returns mid-essay — hunt for it in the final edit.", hi: "लेखन के बीच में भी युगल-मार्कर लौट आता है — अंतिम संपादन में शिकार करें।" } },
          ],
        },
        {
          heading: {
            bn: "এক নজরে",
            en: "At a glance",
            hi: "एक नज़र में",
          },
          body: {
            bn: "এক নজরে: (১) linking adverb তিন আসনে বসে — শুরুতে + কমা, clause-এর মাঝে দুই কমায়, বাক্যের শেষে কমার পরে; (২) দুই পূর্ণ বাক্য শুধু কমায় জোড়া যায় না — semicolon বা full stop, তারপর মার্কার + কমা; (৩) আগের বাক্যের সম্পর্ক ভেবে পরিবার থেকে মার্কার নিন — contrast, cause-result, addition, example, sequence; (৪) despite/in spite of + বিশেষ্য বা -ing; although/even though + পূর্ণ clause; despite the fact that সেতু; despite-এর পরে of নেই; (৫) reference: this + বিশেষ্য সবচেয়ে নিরাপদ, the former/the latter শুধু দুই আইটেমে; (৬) lexical chain-এ ধারণা বদলে শব্দ বদলাক — jam → delay; (৭) এক clause, এক connector — 'যদিও...কিন্তু' অভ্যাস জলে ভাসান। অনুশীলন: নিজের পুরোনো একটা রচনা বা ইমেইল খুলুন; প্রতিটা and/but/so-এর জায়গায় থামুন — ওই সম্পর্কটা কি আরও নিখুঁত মার্কারে নামানো যায়? প্রতি অনুচ্ছেদে অন্তত একটা this + বিশেষ্য আর একটা lexical chain ঢোকানোর চেষ্টা করুন।",
            en: "At a glance: (1) a linking adverb sits in three seats — start + comma, inside the clause between two commas, at the end after a comma; (2) two full sentences never join over a bare comma — semicolon or full stop, then marker + comma; (3) decide the relationship with the previous sentence first, then pick from the family — contrast, cause-result, addition, example, sequence; (4) despite/in spite of + noun or -ing; although/even though + full clause; despite the fact that is the bridge; no of after despite; (5) reference: this + noun is the safest, the former/the latter serve exactly two items; (6) let a lexical chain change the word as the idea flows — jam → delay; (7) one clause, one connector — drown the 'যদিও...কিন্তু' habit. Practice: open an old essay or email of yours; pause at every and/but/so — can that relationship be named more precisely? Try to add at least one this + noun and one lexical chain per paragraph.",
            hi: "एक नज़र में: (1) linking adverb तीन सीटों पर बैठता है — शुरुआत + comma, clause के भीतर दो commas के बीच, अंत में comma के बाद; (2) दो पूरे वाक्य खाली comma पर नहीं जुड़ते — semicolon या full stop, फिर मार्कर + comma; (3) पिछले वाक्य से संबंध पहले तय करें, फिर परिवार से चुनें — contrast, cause-result, addition, example, sequence; (4) despite/in spite of + संज्ञा या -ing; although/even though + पूर्ण clause; despite the fact that पुल है; despite के बाद of नहीं; (5) संदर्भ: this + संज्ञा सबसे सुरक्षित, the former/the latter केवल दो वस्तुओं के लिए; (6) lexical chain में विचार बहते हुए शब्द बदले — jam → delay; (7) एक clause, एक connector — 'जबकि...लेकिन' आदत जल में फेंक दें। अभ्यास: अपना पुराना निबंध या ईमेल खोलें; हर and/but/so पर रुकें — क्या वह संबंध अधिक सटीक मार्कर में उतर सकता है? हर अनुच्छेद में कम-से-कम एक this + संज्ञा और एक lexical chain जोड़ने की कोशिश करें।",
          },
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

  /* ── 5. Collocations & Word Partnerships (Unit 5) ───────────────────── */
  {
    topic: "Collocations & Word Partnerships",
    level: "advanced",
    title: "Collocations & Word Partnerships",
    unit: 5,
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
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয় — সঠিক নয়, স্বাভাবিক হোন",
            en: "When to use them — aim for natural, not merely correct",
            hi: "कब इस्तेमाल होते हैं — केवल सही नहीं, सहज बनें",
          },
          body: {
            bn: "Collocation মানে শব্দের নিয়মিত জুটি — এমন দুই-তিন শব্দ যারা ভাষার অভ্যাসে সবসময় একসঙ্গে থাকে: take a photo, heavy rain, fast food, make a decision। নেটিভ স্পিকার একেকটা শব্দ জোড়া দেয় না; সে পুরো chunk একবারে টেনে বের করে — মস্তিষ্কের সাথে-সাথে ভাণ্ডার। এজন্যই বাঙালি শিক্ষার্থীর 'সঠিক' বাক্য মাঝে মাঝে অদ্ভুত শোনায়: The strong rain spoiled our picnic — ব্যাকরণে কোনো ভুল নেই, কিন্তু কানে বাজে। কোথায় collocation সবচেয়ে বেশি দাবি করে? ইন্টারভিউ, পরীক্ষার লেখা, ইমেইল, presentation — যেখানে প্রথম ছয় সেকেন্ডেই শ্রোতা আপনার ভাষার মান ওজন করে। আরেকটা সুবিধা ভুলো না: chunk জানলে বলতে দ্রুত হয় — প্রতিটা শব্দ আলাদা করে ভাবতে হয় না, গোটা ফ্রেজ এক টানে আসে।",
            en: "A collocation is a habitual partnership of words — two or three words that the language's habit always keeps together: take a photo, heavy rain, fast food, make a decision. A native speaker does not assemble a sentence word by word; the whole chunk is pulled out in one go — memory at lightning speed. That is why a Bengali learner's 'correct' sentence sometimes sounds odd: The strong rain spoiled our picnic — no grammar rule is broken, yet the ear protests. Where do collocations matter most? Interviews, exam writing, emails, presentations — anywhere the listener weighs your language in the first six seconds. And do not forget the bonus: knowing chunks makes you faster — no word-by-word assembly, the whole phrase arrives in one pull.",
            hi: "Collocation यानी शब्दों की आदतन जोड़ी — दो-तीन शब्द जो भाषा की आदत में हमेशा साथ रहते हैं: take a photo, heavy rain, fast food, make a decision। Native वक्ता शब्द-दर-शब्द वाक्य नहीं जोड़ता; पूरा chunk एक ही खिंचाव में निकल आता है — याददाश्त बिजली-सी। इसीलिए बांग्लाभाषी विद्यार्थी का 'सही' वाक्य कभी-कभी अजीब लगता है: The strong rain spoiled our picnic — व्याकरण में कोई चूक नहीं, पर कान बयान दे देता है। सबसे ज़्यादा ज़रूरत कहाँ? इंटरव्यू, परीक्षा-लेखन, ईमेल, प्रेज़ेंटेशन — जहाँ पहले छह सेकंड में ही आपकी भाषा तौली जाती है। और एक बोनस भूलें नहीं: chunk याद हों तो बोलना तेज़ होता है — पूरा वाक्यांश एक ही खिंचाव में आता है।",
          },
          examples: [
            { wrong: "The strong rain spoiled our picnic.", right: "The heavy rain spoiled our picnic.", note: { bn: "বৃষ্টির স্থায়ী সঙ্গী heavy — strong-এর জায়গা চা-কফির কাপে।", en: "Rain's permanent partner is heavy — strong belongs in the tea and coffee cup.", hi: "बारिश का स्थायी साथी heavy — strong चाय-कॉफ़ी के कप में रहता है।" } },
            { wrong: "I need a fast shower before the interview.", right: "I need a quick shower before the interview.", note: { bn: "shower-এর জুটি quick — fast খাবারের সঙ্গে চলে (fast food)।", en: "A shower pairs with quick — fast goes with food (fast food).", hi: "Shower की जोड़ी quick — fast खाने के साथ चलता है (fast food)।" } },
            { wrong: "She has a big experience in marketing.", right: "She has vast experience in marketing.", note: { bn: "experience (অগণনীয়) বড় হয় vast/extensive/considerable হয়ে — big নয়।", en: "Uncountable experience grows vast/extensive/considerable — not big.", hi: "अगणनीय experience vast/extensive/considerable होता है — big नहीं।" } },
            { wrong: "We made a party for his birthday.", right: "We had a party for his birthday.", note: { bn: "party-র সঙ্গী have/throw — make মানে দল তৈরি করা হয়ে যায়!", en: "The partners of party are have/throw — make would mean manufacturing a party!", hi: "party के साथी have/throw — make कहने पर पार्टी बनाने लगेगी!" } },
          ],
        },
        {
          heading: {
            bn: "গঠন — পাঁচ পরিবারে শব্দ-জুটি",
            en: "Formation — five families of word partnerships",
            hi: "गठन — शब्द-जोड़ियों के पाँच परिवार",
          },
          body: {
            bn: "প্রসার-টেবিলের মতো পড়ুন: • verb + noun: take a photo, pay attention, break the news, catch a cold, keep a promise, make progress • adjective + noun: heavy rain, strong tea, big mistake, deep sleep, close friend, tight deadline • adverb + adjective: deeply concerned, fully aware, bitterly cold, highly successful, wide awake • noun + noun (of-কাঠামো): a bar of soap, a round of applause, a sense of humour • verb + adverb / adverb + verb: listen carefully, work hard, whisper softly। মনে রাখার সূত্র: এই জুটির মাঝের শব্দ বদলানো যায় (take a photo → take a video), কিন্তু জুটির সদস্য বদলানো যায় না (make a photo ✗)। তাই নতুন শব্দ শেখার দিনই তার নির্ধারিত সঙ্গীও নোট করুন — শব্দ নয়, জোড়া মুখস্থ।",
            en: "Read this like a prose table: • verb + noun: take a photo, pay attention, break the news, catch a cold, keep a promise, make progress • adjective + noun: heavy rain, strong tea, big mistake, deep sleep, close friend, tight deadline • adverb + adjective: deeply concerned, fully aware, bitterly cold, highly successful, wide awake • noun + noun (of-structures): a bar of soap, a round of applause, a sense of humour • verb + adverb / adverb + verb: listen carefully, work hard, whisper softly. The rule to remember: the middle word can change (take a photo → take a video), but the partners cannot (make a photo ✗). So from day one, note a new word together with its assigned partner — memorise the pair, not the lone word.",
            hi: "इसे गद्य-तालिका जैसा पढ़ें: • verb + noun: take a photo, pay attention, break the news, catch a cold, keep a promise, make progress • adjective + noun: heavy rain, strong tea, big mistake, deep sleep, close friend, tight deadline • adverb + adjective: deeply concerned, fully aware, bitterly cold, highly successful, wide awake • noun + noun (of-ढाँचा): a bar of soap, a round of applause, a sense of humour • verb + adverb / adverb + verb: listen carefully, work hard, whisper softly। याद रखने का सूत्र: बीच का शब्द बदल सकता है (take a photo → take a video), पर साथी नहीं (make a photo ✗)। इसलिए नया शब्द सीखने के दिन से ही उसका तय साथी भी नोट करें — अकेला शब्द नहीं, जोड़ी रटें।",
          },
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
            bn: "আভাস ও প্যাটার্ন — light verb আর chunk শেখার কৌশল",
            en: "Signals and patterns — light verbs and the chunk habit",
            hi: "संकेत और पैटर्न — light verb और chunk की आदत",
          },
          body: {
            bn: "সবচেয়ে বেশি ভুল হয় হালকা বা light verb-গুলোতে — do, make, take, have, give, pay, catch, break, keep: এরা শত শত noun-এর সঙ্গী হয়, আর প্রতিটা সঙ্গী আলাদা নিয়মে বাঁটা। শেখার কৌশল তিনটা: (১) নোটবইয়ে কখনও একা শব্দ লেখেন না — attention নয়, pay attention to; photo নয়, take a photo। (২) নতুন শব্দ শিখলে প্রশ্ন করুন — এর সঙ্গী কে? ডিকশনারি খুললে example sentence-গুলোতেই উত্তর লুকানো। (৩) chunk-এর সঙ্গে register-ও নোট করুন: have a chat কথ্য, hold a discussion লেখ্য। আর একটা আভাস: জুটি ভাঙা যায় না, কিন্তু ভেতরের noun বদলাতে পারে — pay attention/pay close attention/pay no attention — তাই মূল কাঠামো ধরে রাখুন, বিশেষণ ছায়া-মতো ঢুকতে দিন।",
            en: "Most mistakes happen with the light verbs — do, make, take, have, give, pay, catch, break, keep: they partner hundreds of nouns, and each partnership is handed out by its own rule. Three strategies: (1) never write a lone word in your notebook — not attention but pay attention to; not photo but take a photo. (2) When you meet a new word, ask — who is its partner? The dictionary's example sentences hold the answer. (3) Note the register with the chunk: have a chat is casual, hold a discussion is formal. One more signal: the partnership cannot be broken, but the noun inside can vary — pay attention / pay close attention / pay no attention — so hold the core frame and let adjectives slip in like shadows.",
            hi: "सबसे ज़्यादा चूक light verbs में होती है — do, make, take, have, give, pay, catch, break, keep: ये सैकड़ों संज्ञाओं के साथी बनते हैं, और हर साथी अपने नियम से बँटता है। तीन रणनीति: (1) नोटबुक में कभी अकेला शब्द न लिखें — attention नहीं, pay attention to; photo नहीं, take a photo। (2) नया शब्द मिले तो पूछें — उसका साथी कौन? डिक्शनरी के example वाक्यों में जवाब छिपा है। (3) chunk के साथ register भी नोट करें: have a chat बोलचाल का, hold a discussion औपचारिक। एक और संकेत: जोड़ी टूटती नहीं, पर भीतर की संज्ञा बदल सकती है — pay attention / pay close attention / pay no attention — मूल ढाँचा पकड़े रखें, विशेषण छाया की तरह घुसने दें।",
          },
          examples: [
            { wrong: "I learned the word 'attention' yesterday.", right: "I learned the phrase 'pay attention to' yesterday.", note: { bn: "শব্দ নয়, chunk — নোটবইয়ের প্রথম নিয়ম; একা attention ব্যবহারের সময়ই ভুল হবে।", en: "The chunk, not the word — the notebook's first rule; a lone attention will stumble the moment you use it.", hi: "शब्द नहीं, chunk — नोटबुक का पहला नियम; अकेला attention इस्तेमाल में ही ठोकर खाएगा।" } },
            { wrong: "He did a lot of mistakes in the exam.", right: "He made a lot of mistakes in the exam.", note: { bn: "mistake-র সঙ্গী make — do মানে কাজ চালানো, mistake তো ফল হয়ে জন্মায়।", en: "Mistake partners with make — do runs tasks, but a mistake is born as a result.", hi: "Mistake का साथी make — do काम चलाता है, गलती परिणाम बनकर जन्मती है।" } },
            { wrong: "We did a meeting with the client.", right: "We had a meeting with the client.", note: { bn: "meeting-এর সঙ্গী have/arrange/attend — সভা হয়, করা হয় না।", en: "Meeting pairs with have/arrange/attend — meetings are had, not done.", hi: "Meeting के साथी have/arrange/attend — बैठक 'होती' है, 'की' नहीं जाती।" } },
            { wrong: "She took a quick decision.", right: "She made a quick decision.", note: { bn: "সিদ্ধান্ত make হয়; take a decision দক্ষিণ এশিয়ার অফিসি-ইংরেজির অভ্যাস — আন্তর্জাতিক লেখায় made।", en: "Decisions are made; take a decision is a South-Asian officialese habit — international writing prefers made.", hi: "निर्णय make होता है; take a decision दक्षिण एशियाई दफ़्तरी अंग्रेज़ी की आदत है — अंतरराष्ट्रीय लेखन में made।" } },
          ],
        },
        {
          heading: {
            bn: "do বনাম make — বাংলা 'করা'-র দুই মুখ",
            en: "do vs make — the two faces of Bengali 'করা'",
            hi: "do बनाम make — हिंदी 'करना' के दो रूप",
          },
          body: {
            bn: "বাংলা 'করা' দুটো কাজই করে — কাজ চালানো আর কিছু তৈরি করা; ইংরেজি সেই ভার দুই ভাইয়ের মধ্যে ভাগ করে দিয়েছে। DO = কর্মকাণ্ড, দায়িত্ব, পুনরাবৃত্ত কাজ: do homework, do the dishes, do business, do research, do a favour, do harm, do well। MAKE = তৈরি, উৎপাদন, ফলাফল জন্মানো: make a mistake, make a decision, make money, make noise, make progress, make friends, make sure, make the bed। মোটা সূত্র: কিছু জন্মাচ্ছে বা ফল বেরোচ্ছে → make; কাজ চলছে বা সম্পন্ন হচ্ছে → do। তবু শেষ কথা অভ্যাসের — do someone a favour, make the bed-এর মতো জুটি শুধু মুখস্থই হতে হবে, কারণ সূত্র এখানে চুপচাপ।",
            en: "Bengali 'করা' does both jobs — running a task and creating something; English splits that load between two brothers. DO = activities, duties, repeated work: do homework, do the dishes, do business, do research, do a favour, do harm, do well. MAKE = creating, producing, results being born: make a mistake, make a decision, make money, make noise, make progress, make friends, make sure, make the bed. The broad rule: something is coming into being or a result is emerging → make; a task is running or being completed → do. Still, the last word is habit — pairs like do someone a favour and make the bed must simply be memorised, because the rule falls silent there.",
            hi: "हिंदी 'करना' दोनों काम करता है — काम चलाना और कुछ बनाना; अंग्रेज़ी ने वह बोझ दो भाइयों में बाँट दिया। DO = गतिविधि, कर्तव्य, दोहराया काम: do homework, do the dishes, do business, do research, do a favour, do harm, do well। MAKE = निर्माण, उत्पादन, परिणाम का जन्म: make a mistake, make a decision, make money, make noise, make progress, make friends, make sure, make the bed। मोटा सूत्र: कुछ जन्म रहा है या परिणाम निकल रहा है → make; काम चल रहा है या पूरा हो रहा है → do। फिर भी अंतिम बात आदत की है — do someone a favour और make the bed जैसी जोड़ियाँ रटनी ही पड़ेंगी, क्योंकि सूत्र वहाँ मौन है।",
          },
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
            bn: "বাংলা calque — এক ক্রিয়ার দাসত্ব থেকে মুক্তি",
            en: "Bengali calques — escaping the one-verb servitude",
            hi: "बांग्ला calque — एक-क्रिया की दासता से मुक्ति",
          },
          body: {
            bn: "Calque মানে হুবহু অনুবাদের ছায়া — বাংলা বাক্যের গড়ন ইংরেজি শব্দে ঢেলে দেওয়া। 'লাইট অন করো' → open the light; 'ফ্যান বন্ধ করো' → close the fan; 'পরীক্ষা দিলাম' → gave an exam; 'মিথ্যা বলেছি' → said a lie — এই চারটাই বাঙালি মুখের ক্লাসিক ছাপ। আসল নিয়ম: বিদ্যুৎ-যন্ত্র turn on/turn off হয়, খোলা-বন্ধ (open/close) শুধু বই, দরজা, জানালা, বোতল; পরীক্ষা শিক্ষার্থী take করে, শিক্ষক give/conduct করে; মিথ্যা tell হয় — tell a lie, tell the truth, tell a story — কারণ গল্প-মিথ্যা-সত্য সব কানে পৌঁছানোর ব্যাপার। সমাধান একটাই: ক্রিয়া অনুবাদ করবেন না — পুরো অভিব্যক্তির ইংরেজি জুটি শিখে নিন।",
            en: "A calque is the shadow of a literal translation — the Bengali sentence's frame poured into English words. 'লাইট অন করো' → open the light; 'ফ্যান বন্ধ করো' → close the fan; 'পরীক্ষা দিলাম' → gave an exam; 'মিথ্যা বলেছি' → said a lie — four classic fingerprints of Bengali speakers. The real rules: electrical devices turn on/turn off; open and close serve only books, doors, windows and bottles; the student takes an exam while the teacher gives/conducts it; a lie is told — tell a lie, tell the truth, tell a story — because tales, lies and truths are all matters of reaching the ear. One solution only: do not translate the verb — learn the whole English partnership of the expression.",
            hi: "Calque यानी शब्दशः अनुवाद की छाया — हिंदी वाक्य का ढाँचा अंग्रेज़ी शब्दों में उड़ेल देना। 'लाइट ऑन करो' → open the light; 'पंखा बंद करो' → close the fan; 'परीक्षा दी' → gave an exam; 'झूठ बोला' → said a lie — चार क्लासिक निशान। असली नियम: बिजली के यंत्र turn on/turn off होते हैं; open-close केवल किताब, दरवाज़ा, खिड़की, बोतल के लिए; परीक्षा विद्यार्थी take करता है, शिक्षक give/conduct; झूठ tell होता है — tell a lie, tell the truth, tell a story — क्योंकि कहानी-झूठ-सच सब कान तक पहुँचने का विषय हैं। एक ही समाधान: क्रिया का अनुवाद न करें — पूरे भाव की अंग्रेज़ी जोड़ी सीखें।",
          },
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
            bn: "adjective+noun ও adverb+adjective — সঠিক সঙ্গী বাছাই",
            en: "adjective+noun and adverb+adjective — picking the exact partner",
            hi: "adjective+noun और adverb+adjective — सटीक साथी का चयन",
          },
          body: {
            bn: "heavy rain, strong tea, big mistake — তিনটা adjective, তিনটা নিজস্ব রাজ্য; রাজ্য বদলালেই বাক্য অদ্ভুত: strong rain, heavy tea, large mistake। আরও সমৃদ্ধ জুটি: heavy traffic, strong coffee, deep sleep, sound sleep, close friend, tight schedule, serious mistake, fatal accident। adverb+adjective পরিবারে: deeply concerned/sorry/moved, fully aware, bitterly disappointed/cold, highly successful/unlikely, wide awake, fast asleep, badly damaged। এদের কোনো ব্যাকরণ-নিয়ম নেই — ব্যবহার-ঘনত্বই নিয়ম; ভাষা সময়ের সাথে এই জুটিগুলোকে বাছাই করেছে। শেখার একমাত্র পথ: reading-এ জুটি শিকার — প্রতিটা adjective-এর পাশে কী বসে চোখ রাখুন, আর নিজের নোটবইয়ে পুরো ফ্রেজ তুলে রাখুন।",
            en: "heavy rain, strong tea, big mistake — three adjectives, three private kingdoms; cross the border and the sentence turns strange: strong rain, heavy tea, large mistake. Richer pairs: heavy traffic, strong coffee, deep sleep, sound sleep, close friend, tight schedule, serious mistake, fatal accident. In the adverb+adjective family: deeply concerned/sorry/moved, fully aware, bitterly disappointed/cold, highly successful/unlikely, wide awake, fast asleep, badly damaged. There is no grammar rule here — frequency of use is the rule; the language has chosen these pairs over time. The only road to mastery: hunting pairs while reading — watch what sits beside every adjective, and store the whole phrase in your notebook.",
            hi: "heavy rain, strong tea, big mistake — तीन विशेषण, तीन निजी राज्य; सीमा लाँघते ही वाक्य अजीब: strong rain, heavy tea, large mistake। समृद्ध जोड़ियाँ: heavy traffic, strong coffee, deep sleep, sound sleep, close friend, tight schedule, serious mistake, fatal accident। adverb+adjective परिवार में: deeply concerned/sorry/moved, fully aware, bitterly disappointed/cold, highly successful/unlikely, wide awake, fast asleep, badly damaged। यहाँ कोई व्याकरण-नियम नहीं — प्रयोग की आवृत्ति ही नियम है; भाषा ने समय से ये जोड़ियाँ चुनी हैं। सीखने का एकमात्र रास्ता: पढ़ते समय जोड़ियों का शिकार — हर विशेषण के पास क्या बैठता है देखें, और नोटबुक में पूरा वाक्यांश रखें।",
          },
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
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors made by advanced learners",
            hi: "एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "Advanced শিক্ষার্থীর collocation-ভুলগুলো ব্যাকরণের চশমায় ধরা পড়ে না, কারণ গড়ন ঠিক থাকে। প্রথম দল: preposition-সঙ্গী — pay attention on → pay attention TO; depend OF-জাতীয় ভুলও এই পরিবার। দ্বিতীয় দল: অগণনীয় বিশেষ্যের সঙ্গে ভুল ক্রিয়া — do a research → do research; make a research-ও ভুল। তৃতীয় দল: দক্ষিণ এশিয়ার অফিসি-ইংরেজির জীবাশ্ম — take a decision (→ make a decision), do the needful, kindly do the favour। চতুর্থ দল: শরীর আর অনুভূতির জুটি — strong headache নয়, bad/severe/slight headache; heavy pain নয়, severe/sharp pain। পঞ্চম দল: সিদ্ধান্ত-খবরের ক্রিয়া — give a decision নয়, make/reach a decision; say the news নয়, break/announce the news। এই পাঁচ দল ইন্টারভিউ-পরীক্ষা দুই জায়গাতেই পয়েন্ট কাটে।",
            en: "An advanced learner's collocation errors escape the grammar lens because the structure stays correct. Group one: preposition partners — pay attention on → pay attention TO (the depend OF family lives here too). Group two: wrong verbs with uncountable nouns — do a research → do research; make a research is equally wrong. Group three: South-Asian officialese fossils — take a decision (→ make a decision), do the needful, kindly do the favour. Group four: body-and-feeling pairs — not strong headache but bad/severe/slight headache; not heavy pain but severe/sharp pain. Group five: verbs of decision and news — not give a decision but make/reach a decision; not say the news but break/announce the news. These five groups cost points in interviews and exams alike.",
            hi: "एडवांस्ड शिक्षार्थी की collocation-चूकें व्याकरण के चश्मे से नहीं पकड़ में आतीं, क्योंकि ढाँचा सही रहता है। पहला समूह: preposition-साथी — pay attention on → pay attention TO (depend OF जैसी चूकें भी इसी परिवार की)। दूसरा समूह: अगणनीय संज्ञा के साथ ग़लत क्रिया — do a research → do research; make a research भी ग़लत। तीसरा समूह: दक्षिण एशियाई दफ़्तरी अंग्रेज़ी के जीवाश्म — take a decision (→ make a decision), do the needful, kindly do the favour। चौथा समूह: शरीर-भावना की जोड़ियाँ — strong headache नहीं, bad/severe/slight headache; heavy pain नहीं, severe/sharp pain। पाँचवाँ समूह: निर्णय-समाचार की क्रियाएँ — give a decision नहीं, make/reach a decision; say the news नहीं, break/announce the news। ये पाँच समूह इंटरव्यू और परीक्षा दोनों में अंक काटते हैं।",
          },
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
            bn: "ছোট লেখায় দেখা যাক + এক নজরে",
            en: "Seen in a short piece of writing + at a glance",
            hi: "छोटे लेखन में देखिए + एक नज़र में",
          },
          body: {
            bn: "নিচের অনুচ্ছেদটা একটা অফিস-রিপোর্টের সুরে — পাঠের জুটিগুলো একসঙ্গে কাজ করছে: 'Last week our team had to prepare a client presentation in two days. We made a tight schedule and paid close attention to every slide. Despite heavy rain on the final evening, we stayed fully aware of the deadline and finished the deck before midnight. In the meeting the client raised a serious question about costs; our manager broke the news gently and did her best to keep the discussion calm. We made a few small mistakes, of course, but the client was deeply impressed, and we took detailed notes for the next project.' জুটিগুলো খুঁজে বের করুন — made a tight schedule, paid close attention, heavy rain, fully aware, broke the news, made a few small mistakes, deeply impressed, took detailed notes।\n\nএক নজরে: (১) নতুন শব্দ শিখলে তার সঙ্গী-ক্রিয়াও শিখুন — শব্দ নয়, chunk; (২) do = কর্মকাণ্ড/দায়িত্ব, make = তৈরি/ফল — সন্দেহ হলে ডিকশনারির example; (৩) বিদ্যুৎ-যন্ত্র turn on/off — open/close বই-দরজার জন্য; (৪) পরীক্ষা শিক্ষার্থী take করে, মিথ্যা tell হয়; (৫) heavy rain, strong tea, big mistake, deep sleep, close friend, tight schedule; (৬) adverb+adjective মুখস্থ: fully aware, deeply concerned, bitterly cold, wide awake, fast asleep; (৭) pay attention TO — preposition-সহ জুটি। অনুশীলন: আজ শেখা দশটা জুটি দিয়ে নিজের দিনের ডায়েরি লিখুন — প্রতিটা জুটি অন্তত একবার ব্যবহার হতে হবে।",
            en: "Read this paragraph in an office-report voice — the lesson's pairs are all at work: 'Last week our team had to prepare a client presentation in two days. We made a tight schedule and paid close attention to every slide. Despite heavy rain on the final evening, we stayed fully aware of the deadline and finished the deck before midnight. In the meeting the client raised a serious question about costs; our manager broke the news gently and did her best to keep the discussion calm. We made a few small mistakes, of course, but the client was deeply impressed, and we took detailed notes for the next project.' Hunt the pairs — made a tight schedule, paid close attention, heavy rain, fully aware, broke the news, made a few small mistakes, deeply impressed, took detailed notes.\n\nAt a glance: (1) learn a new word with its verb partner — the chunk, not the word; (2) do = activities/duties, make = creating/results — when unsure, check the dictionary examples; (3) electrical devices turn on/off — open/close serve books and doors; (4) the student takes an exam, a lie is told; (5) heavy rain, strong tea, big mistake, deep sleep, close friend, tight schedule; (6) memorise the adverb+adjective set: fully aware, deeply concerned, bitterly cold, wide awake, fast asleep; (7) pay attention TO — pairs travel with their prepositions. Practice: write today's diary using ten of these pairs — each must appear at least once.",
            hi: "इस अनुच्छेद को ऑफिस-रिपोर्ट के सुर में पढ़ें — पाठ की जोड़ियाँ एक साथ काम कर रही हैं: 'Last week our team had to prepare a client presentation in two days. We made a tight schedule and paid close attention to every slide. Despite heavy rain on the final evening, we stayed fully aware of the deadline and finished the deck before midnight. In the meeting the client raised a serious question about costs; our manager broke the news gently and did her best to keep the discussion calm. We made a few small mistakes, of course, but the client was deeply impressed, and we took detailed notes for the next project.' जोड़ियाँ ढूँढें — made a tight schedule, paid close attention, heavy rain, fully aware, broke the news, made a few small mistakes, deeply impressed, took detailed notes।\n\nएक नज़र में: (1) नया शब्द उसके क्रिया-साथी के साथ सीखें — chunk, अकेला शब्द नहीं; (2) do = गतिविधि/कर्तव्य, make = निर्माण/परिणाम — संदेह हो तो डिक्शनरी के उदाहरण; (3) बिजली के यंत्र turn on/off — open/close किताब-दरवाज़े के लिए; (4) परीक्षा विद्यार्थी take करता है, झूठ tell होता है; (5) heavy rain, strong tea, big mistake, deep sleep, close friend, tight schedule; (6) adverb+adjective रटें: fully aware, deeply concerned, bitterly cold, wide awake, fast asleep; (7) pay attention TO — जोड़ी preposition सहित चलती है। अभ्यास: आज सीखी दस जोड़ियों से अपने दिन की डायरी लिखें — हर जोड़ी कम-से-कम एक बार आए।",
          },
          examples: [
            { wrong: "We did a tight schedule for the launch.", right: "We made a tight schedule for the launch.", note: { bn: "schedule 'তৈরি' হয় → make; সঙ্গী adjective tight।", en: "A schedule is 'created' → make; its adjective partner is tight.", hi: "Schedule 'बनाया' जाता है → make; साथी विशेषण tight।" } },
            { wrong: "The manager said the bad news gently.", right: "The manager broke the bad news gently.", note: { bn: "খারাপ খবর জানানো = break the news — said the news unnatural।", en: "Delivering bad news = break the news — said the news is unnatural.", hi: "बुरी खबर देना = break the news — said the news असहज है।" } },
            { wrong: "The client was strong impressed.", right: "The client was deeply impressed.", note: { bn: "impressed-এর সঙ্গী deeply/highly/very — strong বিশেষণ, adverb নয়।", en: "Impressed partners with deeply/highly/very — strong is an adjective, not an adverb.", hi: "Impressed के साथ deeply/highly/very — strong विशेषण है, क्रिया-विशेषण नहीं।" } },
            { wrong: "We took attention to every detail.", right: "We paid close attention to every detail.", note: { bn: "pay attention to — take attention বলে কিছু নেই; বিশেষণ close/brief/no বসতে পারে।", en: "pay attention to — there is no take attention; close/brief/no may slip in as adjectives.", hi: "pay attention to — take attention जैसी कोई चीज़ नहीं; close/brief/no विशेषण बैठ सकते हैं।" } },
          ],
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
