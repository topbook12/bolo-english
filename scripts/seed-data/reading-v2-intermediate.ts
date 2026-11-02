// ─── Reading library seeds v2: INTERMEDIATE (B1–B2) ───
// Roadmap D45 content-scale wave: 3 STANDALONE reading passages (unit 0 —
// extras on top of the v1 unit 1–5 series). English paragraphs are the
// learning content (CEFR B1–B2: present perfect, past continuous, first
// conditional, simple passive); bn/hi are faithful line-by-line assist
// translations. 6 vocab + 5 quiz per passage.
//
// Entries: 1 Dhaka metro news (travel) · 2 pharmacy dialog (daily) ·
// 3 village-library news (inspire).
import type {
  LibraryReadingCategory,
  LibraryReadingData,
  LibraryReadingGenre,
  LibraryLevel,
} from "../../src/lib/library-types";

export interface SeedReadingEntry {
  slug: string;
  level: LibraryLevel;
  category: LibraryReadingCategory;
  minutes: number;
  unit: number; // 0 = standalone
  data: LibraryReadingData;
}

export const SEED_READING_V2_INTERMEDIATE: SeedReadingEntry[] = [
  /* ───────────────── 1. A Train Above the City (news · travel) ───────────────── */
  {
    slug: "read-i2-metro",
    level: "intermediate",
    category: "travel",
    minutes: 4,
    unit: 0,
    data: {
      title: {
        bn: "শহরের মাথার ওপর মেট্রো",
        en: "A Train Above the City",
        hi: "शहर के ऊपर की मेट्रो",
      },
      summary: {
        bn: "যানজটের জন্য কুখ্যাত ঢাকায় প্রথমবার চালু হলো মেট্রো রেল। উত্তরা স্টেশনের প্রথম সকালে এক সংবাদদাতার চোখে — নিয়মিত যাত্রীদের অভিজ্ঞতা, সুবিধা-অসুবিধা আর এক টুকরো নতুন আশা।",
        en: "Dhaka, long famous for its traffic jams, finally has a metro rail. Through a reporter's eyes on the first morning at Uttara station — the commuters' stories, the comforts and the flaws, and one fresh piece of hope.",
        hi: "जाम के लिए कुख्यात ढाका को आख़िरकार मिली मेट्रो रेल। उत्तरा स्टेशन पर पहली सुबह एक रिपोर्टर की नज़र से — नियमित यात्रियों के क़िस्से, सुविधा-असुविधा और एक नई उम्मीद की झलक।",
      },
      genre: "news",
      paragraphs: [
        {
          en: "For decades, Dhaka has been famous for one unhappy thing — traffic jams. A bus from Uttara to Motijheel could easily take two hours. But since December 2022, something has changed: the metro rail now runs above the city's busiest roads, and thousands of passengers ride it every day.",
          bn: "দশকের পর দশক ধরে ঢাকা পরিচিত এক মনখারাপ করা বাস্তবতায় — যানজট। উত্তরা থেকে মতিঝিল পর্যন্ত বাসে যেতে সহজেই দু'ঘণ্টা কেটে যেত। কিন্তু ২০২২ সালের ডিসেম্বর থেকে কিছু একটা বদলে গেছে: এখন শহরের সবচেয়ে ব্যস্ত সড়কগুলোর ঠিক ওপর দিয়ে চলে মেট্রো রেল, আর প্রতিদিন হাজারো যাত্রী ওঠে সেই ট্রেনে।",
          hi: "दशकों से ढाका एक उदास हक़ीक़त के लिए जाना जाता है — ट्रैफ़िक जाम। उत्तरा से मोतीझील तक बस में आसानी से दो घंटे निकल जाते थे। पर दिसंबर 2022 से कुछ बदल गया है: अब शहर की सबसे व्यस्त सड़कों के ठीक ऊपर चलती है मेट्रो रेल, और रोज़ हज़ारों यात्री उसमें सवार होते हैं।",
        },
        {
          en: "Last week I joined the morning queue at Uttara station to see the new line for myself. The platform was spotless, and a digital board showed the next train in both Bangla and English. Every ten minutes an air-conditioned coach arrived; the doors opened with a soft beep, and the crowd moved in quietly, like water into a clean channel.",
          bn: "নিজের চোখে নতুন লাইনটা দেখতে গত সপ্তাহে আমি উত্তরা স্টেশনের সকালের লাইনে দাঁড়ালাম। প্ল্যাটফর্মটা ঝকঝকে, আর ডিজিটাল বোর্ডে বাংলা-ইংরেজি দুই ভাষাতেই ভেসে উঠছিল পরের ট্রেনের সময়। প্রতি দশ মিনিটে এল শীতাতপ কোচ; হালকা বিপ-শব্দে খুলল দরজা, আর ভিড়টা শান্তভাবে ঢুকে পড়ল ভেতরে — যেন পরিষ্কার খালে ঢুকছে স্রোত।",
          hi: "नई लाइन को अपनी आँखों से देखने के लिए पिछले हफ़्ते मैं उत्तरा स्टेशन की सुबह की क़तार में खड़ा हुआ। प्लेटफ़ॉर्म चमक रहा था, और डिजिटल बोर्ड पर बांग्ला और अंग्रेज़ी दोनों में अगली ट्रेन का समय झिलमिला रहा था। हर दस मिनट में आई वातानुकूलित कोच; हल्की बीप के साथ खुले दरवाज़े, और भीड़ चुपचाप अंदर उतर गई — जैसे साफ़ नाले में उतरता है पानी।",
        },
        {
          en: "\"I used to leave home at six to reach my office by nine,\" Shormi, a bank officer, told me while the train slid over Mirpur. \"Now I sleep thirty minutes more. If the trains stay this punctual, I will never go back to the road again.\" Around us, students were reading, and a retired teacher was showing a young man how to top up his card.",
          bn: "'আগে সকাল ছ'টায় বাড়ি থেকে বের হতাম, ন'টার মধ্যে অফিসে পৌঁছাতে,' মিরপুরের ওপর দিয়ে ট্রেন সরতে সরতে বললেন শর্মি, এক ব্যাংক কর্মকর্তা। 'এখন আরও ত্রিশ মিনিট ঘুমাতে পারি। ট্রেনগুলো যদি এভাবে সময়নিষ্ঠ থাকে, আমি আর কোনোদিন রাস্তায় ফিরব না।' চারপাশে ছাত্ররা বই পড়ছিল, আর অবসরপ্রাপ্ত এক শিক্ষক দেখিয়ে দিচ্ছিলেন তরুণ এক যাত্রীকে কার্ডে টাকা তোলার নিয়ম।",
          hi: "'पहले मैं सुबह छह बजे घर से निकलती थी ताकि नौ तक दफ़्तर पहुँच जाऊँ,' मीरपुर के ऊपर से ट्रेन सरकते हुए बोलीं शर्मी, एक बैंक अधिकारी। 'अब मैं तीस मिनट ज़्यादा सो पाती हूँ। अगर ट्रेनें इस तरह समय की पाबंद रहीं, तो मैं दोबारा सड़क का रास्ता कभी नहीं चुनूँगी।' आस-पास छात्र किताबें पढ़ रहे थे, और एक सेवानिवृत्त अध्यापक युवा यात्री को कार्ड में पैसे डालना सिखा रहे थे।",
        },
        {
          en: "The first phase of the line covers about twenty kilometres, from Uttara to Agargaon, and new sections are being added towards Kamalapur. The system is designed for speed and comfort: the coaches are cleaned every night, and the whole service runs on electricity. An official explained that over one lakh passengers are carried on a normal working day.",
          bn: "লাইনটির প্রথম ধাপ জুড়েছে প্রায় বিশ কিলোমিটার — উত্তরা থেকে আগারগাঁও, আর কমলাপুরের দিকে নতুন অংশ নির্মাণাধীন। গতি আর আরামের কথা ভেবেই পুরো ব্যবস্থাটা সাজানো: রাতে পরিষ্কার হয় সব কোচ, আর পুরো সেবাটা চলে বিদ্যুতে। এক কর্মকর্তা জানালেন, সাধারণ এক কার্যদিবসে যাত্রী বহন হয় লক্ষাধিক।",
          hi: "लाइन के पहले चरण में शामिल है लगभग बीस किलोमीटर — उत्तरा से आगारगाँव तक, और कमलापुर की ओर नए हिस्से बन रहे हैं। रफ़्तार और आराम को ध्यान में रखकर ही पूरी व्यवस्था बनाई गई है: हर रात साफ़ होते हैं सभी कोच, और पूरी सेवा चलती है बिजली पर। एक अधिकारी ने बताया कि सामान्य कार्यदिवस में लाखों यात्रियों को ढोया जाता है।",
        },
        {
          en: "Of course, the metro is not perfect. Weekend queues are long, and some stations still need better ramps for elderly passengers. Yet most commuters agree on one thing: for the first time in decades, Dhaka has public transport that keeps its promise. The city may still crawl below — but above the traffic, at last, it flies.",
          bn: "অবশ্য, মেট্রো নিখুঁত নয়। ছুটির দিনে লাইন লম্বা হয়ে যায়, আর কিছু স্টেশনে বয়স্ক যাত্রীদের জন্য এখনও দরকার ভালো রাম্প। তবু বেশিরভাগ নিয়মিত যাত্রী এক বিষয়ে একমত: দশকের পর দশক পরে এই প্রথম ঢাকার থাকল এমন গণপরিবহন, যে কথা দিলে রাখে। নিচে শহর এখনও হামাগুড়ি দিতে পারে — কিন্তু যানজটের ওপরে, শেষমেশ, ওড়া শুরু করেছে।",
          hi: "अलबत्ता, मेट्रो निखलती नहीं। छुट्टी के दिनों में क़तारें लंबी हो जाती हैं, और कुछ स्टेशनों पर बुज़ुर्ग यात्रियों के लिए अब भी बेहतर रैंप की ज़रूरत है। फिर भी ज़्यादातर नियमित यात्री एक बात पर सहमत हैं: दशकों में पहली बार ढाका के पास ऐसा सार्वजनिक परिवहन है जो अपना वादा निभाता है। नीचे शहर अब भी रेंग सकता है — पर जाम के ऊपर, आख़िरकार, वह उड़ने लगा है।",
        },
      ],
      vocabulary: [
        {
          word: "traffic jam",
          meaning: {
            bn: "যানজট — রাস্তায় গাড়ির দীর্ঘ, নড়াচড়া-বন্ধ সারি",
            en: "a long line of stopped vehicles on a road",
            hi: "ट्रैफ़िक जाम — सड़क पर रुके वाहनों की लंबी क़तार",
          },
          example: "A traffic jam stole two hours of my morning.",
        },
        {
          word: "queue",
          meaning: {
            bn: "লাইন/সারি — পালা করে দাঁড়ানো মানুষের ধারা",
            en: "a line of people waiting for their turn",
            hi: "क़तार — अपनी बारी के लिए इंतज़ार करते लोगों की लाइन",
          },
          example: "The ticket queue moved quickly this evening.",
        },
        {
          word: "punctual",
          meaning: {
            bn: "সময়নিষ্ঠ — ঠিক সময়ে কাজ করে বা হয় এমন",
            en: "always happening or arriving at the right time",
            hi: "समय का पाबंद — हमेशा सही समय पर होने वाला",
          },
          example: "Our new metro is surprisingly punctual.",
        },
        {
          word: "commuter",
          meaning: {
            bn: "নিয়মিত যাত্রী — রোজ় বাড়ি-কর্মস্থলে যাতায়াত করা মানুষ",
            en: "a person who travels to work every day",
            hi: "नियमित यात्री — रोज़ घर-कार्यस्थल के बीच यात्रा करने वाला",
          },
          example: "Commuters read books during the metro ride.",
        },
        {
          word: "phase",
          meaning: {
            bn: "ধাপ/পর্যায় — বড় কাজের একেকটা ভাগ",
            en: "one stage of a bigger plan",
            hi: "चरण — किसी बड़ी योजना का एक हिस्सा",
          },
          example: "The second phase of the project starts in July.",
        },
        {
          word: "ramp",
          meaning: {
            bn: "রাম্প — সিঁড়ির বদলে চাকা বা পা দিয়ে ওঠার ঢালু পথ",
            en: "a sloped path instead of stairs",
            hi: "रैंप — सीढ़ियों की जगह ढलान वाला रास्ता",
          },
          example: "The new station has a ramp for wheelchairs.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "দশকের পর দশক ধরে ঢাকা কীসের জন্য কুখ্যাত ছিল?",
            en: "For what has Dhaka long been famous?",
            hi: "दशकों से ढाका किस चीज़ के लिए मशहूर रहा है?",
          },
          options: [
            { bn: "নদী", en: "Its rivers", hi: "अपनी नदियों के लिए" },
            { bn: "যানজট", en: "Its traffic jams", hi: "ट्रैफ़िक जाम के लिए" },
            { bn: "বাজার", en: "Its markets", hi: "अपने बाज़ारों के लिए" },
            { bn: "চা-বাগান", en: "Its tea gardens", hi: "चाय के बाग़ानों के लिए" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — দশকের পর দশক ঢাকা পরিচিত যানজটের বাস্তবতায়।",
            en: "The first paragraph says Dhaka has long been famous for traffic jams.",
            hi: "पहला अनुच्छेद कहता है कि ढाका दशकों से ट्रैफ़िक जाम के लिए जाना जाता है।",
          },
        },
        {
          question: {
            bn: "কত ঘণ্টা অন্তর অন্তর ট্রেন আসে?",
            en: "How often does a train arrive?",
            hi: "ट्रेन कितने समय अंतराल पर आती है?",
          },
          options: [
            { bn: "প্রতি পাঁচ মিনিটে", en: "Every five minutes", hi: "हर पाँच मिनट में" },
            { bn: "প্রতি দশ মিনিটে", en: "Every ten minutes", hi: "हर दस मिनट में" },
            { bn: "প্রতি আধ ঘণ্টায়", en: "Every thirty minutes", hi: "हर तीस मिनट में" },
            { bn: "প্রতি ঘণ্টায়", en: "Every hour", hi: "हर घंटे में" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে লেখা — প্রতি দশ মিনিটে এল শীতাতপ কোচ।",
            en: "The second paragraph says an air-conditioned coach arrived every ten minutes.",
            hi: "दूसरा अनुच्छेद कहता है कि हर दस मिनट में वातानुकूलित कोच आती थी।",
          },
        },
        {
          question: {
            bn: "মেট্রো চালুর পরে শর্মির কী বদলেছে?",
            en: "What has changed for Shormi since the metro opened?",
            hi: "मेट्रो खुलने के बाद शर्मी की ज़िंदगी में क्या बदला?",
          },
          options: [
            { bn: "সে অফিস ছেড়েছে", en: "She has left her office", hi: "उन्होंने नौकरी छोड़ दी" },
            { bn: "সে আরও ত্রিশ মিনিট ঘুমায়", en: "She sleeps thirty minutes more", hi: "वे तीस मिनट ज़्यादा सोती हैं" },
            { bn: "সে উত্তরায় চলে গেছে", en: "She has moved to Uttara", hi: "वे उत्तरा चली गई हैं" },
            { bn: "সে এখন বাসেই যায়", en: "She still takes the bus", hi: "वे अब भी बस लेती हैं" },
          ],
          answer: 1,
          explain: {
            bn: "শর্মি বলেন — 'এখন আরও ত্রিশ মিনিট ঘুমাতে পারি।'",
            en: "Shormi says: 'Now I sleep thirty minutes more.'",
            hi: "शर्मी कहती हैं, 'अब मैं तीस मिनट ज़्यादा सो पाती हूँ।'",
          },
        },
        {
          question: {
            bn: "লাইনের প্রথম ধাপটা কোথা থেকে কোথায়?",
            en: "What does the first phase of the line cover?",
            hi: "लाइन का पहला चरण कहाँ से कहाँ तक है?",
          },
          options: [
            { bn: "উত্তরা থেকে মতিঝিল", en: "Uttara to Motijheel", hi: "उत्तरा से मोतीझील" },
            { bn: "উত্তরা থেকে আগারগাঁও", en: "Uttara to Agargaon", hi: "उत्तरा से आगारगाँव" },
            { bn: "মিরপুর থেকে কমলাপুর", en: "Mirpur to Kamalapur", hi: "मीरपुर से कमलापुर" },
            { bn: "আগারগাঁও থেকে মতিঝিল", en: "Agargaon to Motijheel", hi: "आगारगाँव से मोतीझील" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — প্রথম ধাপ প্রায় বিশ কিলোমিটার, উত্তরা থেকে আগারগাঁও।",
            en: "The fourth paragraph says the first phase covers about twenty kilometres, from Uttara to Agargaon.",
            hi: "चौथा अनुच्छेद कहता है कि पहला चरण लगभग बीस किलोमीटर, उत्तरा से आगारगाँव तक है।",
          },
        },
        {
          question: {
            bn: "বেশিরভাগ নিয়মিত যাত্রী কোন বিষয়ে একমত?",
            en: "What do most commuters agree on?",
            hi: "ज़्यादातर नियमित यात्री किस बात पर सहमत हैं?",
          },
          options: [
            { bn: "ভাড়া এখনও বেশি", en: "The fare is still too high", hi: "किराया अभी भी ज़्यादा है" },
            { bn: "স্টেশনগুলো বড় নয়", en: "The stations are too small", hi: "स्टेशन बहुत छोटे हैं" },
            { bn: "মেট্রো কথা দিলে রাখে", en: "The metro keeps its promise", hi: "मेट्रो अपना वादा निभाती है" },
            { bn: "বাস ভালো ছিল", en: "The bus was better", hi: "बस बेहतर थी" },
          ],
          answer: 2,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — এই প্রথম ঢাকার থাকল এমন গণপরিবহন, যে কথা দিলে রাখে।",
            en: "The last paragraph says Dhaka finally has public transport that keeps its promise.",
            hi: "अंतिम अनुच्छेद कहता है कि ढाका को आख़िरकार वादा निभाने वाला सार्वजनिक परिवहन मिल गया।",
          },
        },
      ],
    },
  },

  /* ───────────────── 2. At the Pharmacy (dialog · daily) ───────────────── */
  {
    slug: "read-i2-pharmacy",
    level: "intermediate",
    category: "daily",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "ফার্মেসিতে",
        en: "At the Pharmacy",
        hi: "फार्मेसी में",
      },
      summary: {
        bn: "তিন দিন ধরে গলা ব্যথা নিয়ে মিনা পাড়ার ফার্মেসিতে। ফার্মাসিস্টের প্রশ্ন, সাবধানবাণী আর একটা ভালো উপদেশ — অ্যান্টিবায়োটিক নয়, বিশ্রামই প্রথম ওষুধ।",
        en: "Mina has had a sore throat for three days, so she visits the neighbourhood pharmacy. The pharmacist asks, advises, and warns: no antibiotics without a doctor — rest is the first medicine.",
        hi: "तीन दिन से गले में दर्द लेकर मीना मोहल्ले की फार्मेसी पहुँची। फार्मासिस्ट के सवाल, सलाह और चेतावनी — डॉक्टर के बिना एंटीबायोटिक नहीं, आराम ही पहली दवा है।",
      },
      genre: "dialog",
      paragraphs: [
        {
          en: "Mina: Excuse me, can you help me? I have had a sore throat since Monday, and today my head aches too.\nPharmacist: Of course. Do you have a fever as well? Any cough at night?",
          bn: "মিনা: এক্সকিউজ মি, একটু সাহায্য করবেন? সোমবার থেকে আমার গলা ব্যথা করছে, আজ মাথাও ব্যথা করছে।\nফার্মাসিস্ট: অবশ্যই। জ্বরও আছে তো? রাতে কাশি হয়?",
          hi: "मीना: एक्सक्यूज़ मी, आप मदद कर सकते हैं? सोमवार से मेरा गला दर्द कर रहा है, आज सिर भी दर्द कर रहा है।\nफार्मासिस्ट: ज़रूर। बुख़ार भी है? रात में खाँसी आती है?",
        },
        {
          en: "Mina: A little fever after sunset. I cough when I lie down.\nPharmacist: I see. Any medicine you have taken so far? Anything unusual you have eaten?",
          bn: "মিনা: সন্ধ্যার পরে হালকা জ্বর হয়। শুয়ে পড়লেই কাশি ওঠে।\nফার্মাসিস্ট: বুঝতে পারছি। এ পর্যন্ত কোনো ওষুধ খেয়েছেন? এমন কিছু খেয়েছেন যা খেতেন না আগে?",
          hi: "मीना: शाम के बाद हल्का बुख़ार होता है। लेटते ही खाँसी शुरू हो जाती है।\nफार्मासिस्ट: समझ गया। अब तक कोई दवा ली है? कुछ ऐसा खाया जो पहले नहीं खाती थीं?",
        },
        {
          en: "Mina: Only warm water with salt.\nPharmacist: It sounds like a common viral infection — the weather has changed quickly this week. Take this paracetamol: one tablet after meals, three times a day. Gargle with warm salt water before bed. If the fever continues after three days, you should see a doctor.",
          bn: "মিনা: শুধু গরম লবণ-পানি খেয়েছি।\nফার্মাসিস্ট: শুনে মনে হচ্ছে সাধারণ এক ভাইরাল ইনফেকশন — এই সপ্তাহে আবহাওয়া হঠাৎ বদলে গেছে। এই প্যারাসিটামল নিন: খাবারের পরে একটা করে ট্যাবলেট, দিনে তিনবার। ঘুমানোর আগে গরম লবণ-পানিতে কুলকুচি করবেন। তিন দিন পরেও জ্বর থাকলে ডাক্তার দেখাবেন।",
          hi: "मीना: सिर्फ़ गुनगुना नमक-पानी पिया है।\nफार्मासिस्ट: सुनकर लगता है आम वायरल इंफ़ेक्शन है — इस हफ़्ते मौसम अचानक बदल गया। यह पैरासिटामोल लीजिए: खाने के बाद एक गोली, दिन में तीन बार। सोने से पहले गुनगुने नमक-पानी से गरारे करें। तीन दिन बाद भी बुख़ार रहा तो डॉक्टर को दिखा लें।",
        },
        {
          en: "Mina: Actually, I was going to buy an antibiotic. My neighbour suggested one.\nPharmacist: Please don't. Antibiotics do not work on viruses, and taking them without a prescription can harm your body. Rest and water are the best medicines today.",
          bn: "মিনা: আসলে আমি একটা অ্যান্টিবায়োটিক কিনতে যাচ্ছিলাম। প্রতিবেশী একটার নাম সাজেস্ট করেছিলেন।\nফার্মাসিস্ট: আর করবেন না, প্লিজ। ভাইরাসের ওপর অ্যান্টিবায়োটিক কাজ করে না, আর ডাক্তারের প্রেসক্রিপশন ছাড়া খেলে শরীরের ক্ষতি হয়। আজকাল বিশ্রাম আর পানির চেয়ে ভালো ওষুধ আর নেই।",
          hi: "मीना: असल में मैं एक एंटीबायोटिक ख़रीदने जा रही थी। पड़ोसी ने एक का नाम सुझाया था।\nफार्मासिस्ट: ऐसा मत कीजिए, प्लीज़। वायरस पर एंटीबायोटिक असर नहीं करती, और डॉक्टर के पर्चे के बिना लेने से शरीर को नुक़सान होता है। आजकल आराम और पानी से बढ़िया दवा कोई नहीं।",
        },
        {
          en: "Mina: I understand. And how much is everything?\nPharmacist: Two hundred and forty taka. Drink plenty of fluids, and sleep early tonight. If your throat gets worse, come back any time.\nMina: Thank you so much for your advice.",
          bn: "মিনা: বুঝেছি। আর সব মিলিয়ে দাম কত?\nফার্মাসিস্ট: দুইশো চল্লিশ টাকা। প্রচুর তরল খাবেন, আর আজ রাতে তাড়াতাড়ি ঘুমাবেন। গলা খারাপ হলে যেকোনো সময় ফিরে আসবেন।\nমিনা: আপনার উপদেশের জন্য অনেক ধন্যবাদ।",
          hi: "मीना: समझ गई। और सब मिलाकर कितना हुआ?\nफार्मासिस्ट: दो सौ चालीस टका। ख़ूब तरल लीजिए, और आज रात जल्दी सो जाइए। गला बिगड़े तो कभी भी लौट आइए।\nमीना: आपकी सलाह के लिए बहुत-बहुत धन्यवाद।",
        },
      ],
      vocabulary: [
        {
          word: "sore throat",
          meaning: {
            bn: "গলা ব্যথা — গিলতে বা কথা বলতে গলার ভেতরে ব্যথা",
            en: "pain inside the throat when swallowing",
            hi: "गले में दर्द — निगलने या बोलने में गले का दर्द",
          },
          example: "Hot tea soothes a sore throat.",
        },
        {
          word: "ache",
          meaning: {
            bn: "ব্যথা/পিড়া — ধীরে ধীরে, টানা অনুভূত ব্যথা",
            en: "a steady, dull pain",
            hi: "दर्द — धीमा, लगातार बना रहने वाला दर्द",
          },
          example: "My head aches when I read in dim light.",
        },
        {
          word: "viral",
          meaning: {
            bn: "ভাইরাসজনিত — ভাইরাস ঘটিত রোগ",
            en: "caused by a virus",
            hi: "वायरल — वायरस से होने वाला",
          },
          example: "Most winter colds are viral.",
        },
        {
          word: "gargle",
          meaning: {
            bn: "কুলকুচি করা — পানি মুখে নিয়ে গলা ধুয়ে ফেলা",
            en: "to wash the throat with liquid in the mouth",
            hi: "गरारा करना — मुँह में पानी लेकर गला साफ़ करना",
          },
          example: "Gargle twice a day with warm salt water.",
        },
        {
          word: "prescription",
          meaning: {
            bn: "প্রেসক্রিপশন — ডাক্তারের লেখা ওষুধের পর্চা",
            en: "a doctor's written order for medicine",
            hi: "पर्चा — डॉक्टर की लिखी दवा की सूची",
          },
          example: "You cannot buy this drug without a prescription.",
        },
        {
          word: "antibiotic",
          meaning: {
            bn: "অ্যান্টিবায়োটিক — ব্যাকটেরিয়ার সংক্রমণ সারানোর ওষুধ",
            en: "a medicine that fights bacterial infections",
            hi: "एंटीबायोटिक — बैक्टीरिया से हुए संक्रमण की दवा",
          },
          example: "Antibiotics do not cure viral fevers.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "মিনার গলা কবে থেকে ব্যথা করছে?",
            en: "Since when has Mina had a sore throat?",
            hi: "मीना को कब से गले में दर्द है?",
          },
          options: [
            { bn: "সোমবার থেকে", en: "Since Monday", hi: "सोमवार से" },
            { bn: "বুধবার থেকে", en: "Since Wednesday", hi: "बुधवार से" },
            { bn: "শুক্রবার থেকে", en: "Since Friday", hi: "शुक्रवार से" },
            { bn: "এক মাস ধরে", en: "For a month", hi: "एक महीने से" },
          ],
          answer: 0,
          explain: {
            bn: "মিনার প্রথম কথাই ছিল — 'সোমবার থেকে আমার গলা ব্যথা করছে।'",
            en: "Mina's first line is: 'I have had a sore throat since Monday.'",
            hi: "मीना की पहली बात ही थी — 'सोमवार से मेरा गला दर्द कर रहा है।'",
          },
        },
        {
          question: {
            bn: "ফার্মাসিস্ট প্রথমে কোন ওষুধটা দেন?",
            en: "Which medicine does the pharmacist suggest first?",
            hi: "फार्मासिस्ट पहले कौन-सी दवा सुझाते हैं?",
          },
          options: [
            { bn: "অ্যান্টিবায়োটিক", en: "An antibiotic", hi: "एंटीबायोटिक" },
            { bn: "প্যারাসিটামল", en: "Paracetamol", hi: "पैरासिटामोल" },
            { bn: "কাশির সিরাপ", en: "Cough syrup", hi: "खाँसी की सिरप" },
            { bn: "ভিটামিন", en: "Vitamins", hi: "विटामिन" },
          ],
          answer: 1,
          explain: {
            bn: "ফার্মাসিস্ট বলেন — খাবারের পরে একটা করে প্যারাসিটামল, দিনে তিনবার।",
            en: "The pharmacist suggests one paracetamol tablet after meals, three times a day.",
            hi: "फार्मासिस्ट कहते हैं — खाने के बाद एक पैरासिटामोल, दिन में तीन बार।",
          },
        },
        {
          question: {
            bn: "মিনা কী কিনতে যাচ্ছিল আর কেন বাধা দেওয়া হলো?",
            en: "What was Mina about to buy, and why was she stopped?",
            hi: "मीना क्या ख़रीदने जा रही थी, और उसे क्यों रोका गया?",
          },
          options: [
            { bn: "অ্যান্টিবায়োটিক — ভাইরাসে কাজ করে না বলে", en: "An antibiotic — it does not work on viruses", hi: "एंटीबायोटिक — वायरस पर असर नहीं करती इसलिए" },
            { bn: "প্যারাসিটামল — দাম বেশি বলে", en: "Paracetamol — it was too expensive", hi: "पैरासिटामोल — बहुत महँगी थी इसलिए" },
            { bn: "সিরাপ — মেয়াদ শেষ বলে", en: "A syrup — it had expired", hi: "सिरप — उसकी मेयाद ख़त्म थी इसलिए" },
            { bn: "ভিটামিন — দরকার নেই বলে", en: "Vitamins — they were unnecessary", hi: "विटामिन — ज़रूरत नहीं थी इसलिए" },
          ],
          answer: 0,
          explain: {
            bn: "চতুর্থ অংশে ফার্মাসিস্ট ব্যাখ্যা করেন — ভাইরাসের ওপর অ্যান্টিবায়োটিক কাজ করে না, প্রেসক্রিপশন ছাড়া খেলে ক্ষতি।",
            en: "In the fourth part, the pharmacist explains that antibiotics do not work on viruses and can harm without a prescription.",
            hi: "चौथे हिस्से में फार्मासिस्ट समझाते हैं कि वायरस पर एंटीबायोटिक असर नहीं करती और पर्चे के बिना नुक़सान करती है।",
          },
        },
        {
          question: {
            bn: "জ্বর কত দিন পরেও থাকলে ডাক্তার দেখাতে বলা হয়েছে?",
            en: "After how many days should she see a doctor if the fever continues?",
            hi: "बुख़ार कितने दिन बाद भी रहे तो डॉक्टर को दिखाना चाहिए?",
          },
          options: [
            { bn: "এক দিন", en: "One day", hi: "एक दिन" },
            { bn: "তিন দিন", en: "Three days", hi: "तीन दिन" },
            { bn: "সাত দিন", en: "Seven days", hi: "सात दिन" },
            { bn: "দশ দিন", en: "Ten days", hi: "दस दिन" },
          ],
          answer: 1,
          explain: {
            bn: "ফার্মাসিস্টের পরামর্শ — তিন দিন পরেও জ্বর থাকলে ডাক্তার দেখাবেন।",
            en: "The pharmacist advises seeing a doctor if the fever continues after three days.",
            hi: "फार्मासिस्ट की सलाह है कि तीन दिन बाद भी बुख़ार रहे तो डॉक्टर को दिखाएँ।",
          },
        },
        {
          question: {
            bn: "সব ওষুধ মিলিয়ে দাম কত?",
            en: "How much does everything cost in total?",
            hi: "सब कुछ मिलाकर क़ीमत कितनी है?",
          },
          options: [
            { bn: "একশো চল্লিশ টাকা", en: "One hundred and forty taka", hi: "एक सौ चालीस टका" },
            { bn: "দুইশো চল্লিশ টাকা", en: "Two hundred and forty taka", hi: "दो सौ चालीस टका" },
            { bn: "দুইশো টাকা", en: "Two hundred taka", hi: "दो सौ टका" },
            { bn: "তিনশো টাকা", en: "Three hundred taka", hi: "तीन सौ टका" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অংশে ফার্মাসিস্ট বলেন — সব মিলিয়ে দুইশো চল্লিশ টাকা।",
            en: "In the last part, the pharmacist says everything costs two hundred and forty taka.",
            hi: "अंतिम हिस्से में फार्मासिस्ट कहते हैं — सब मिलाकर दो सौ चालीस टका।",
          },
        },
      ],
    },
  },

  /* ───────────────── 3. The Girl Who Built a Village Library (news · inspire) ───────────────── */
  {
    slug: "read-i2-librarygirl",
    level: "intermediate",
    category: "inspire",
    minutes: 3,
    unit: 0,
    data: {
      title: {
        bn: "যে মেয়েটি গ্রামে লাইব্রেরি বানাল",
        en: "The Girl Who Built a Village Library",
        hi: "लड़की जिसने गाँव में पुस्तकालय बनाया",
      },
      summary: {
        bn: "মহামারিতে স্কুল বন্ধ হলে কুড়িগ্রামের কলেজছাত্রী নুসরাত বাবার পুরনো টিনের ঘরটাই বানিয়ে ফেলে ফ্রি লাইব্রেরি — আজ পনেরো শো বই আর দুই শো সদস্যের ঠিকানা সেই ঘর।",
        en: "When schools closed during the pandemic, a college student in Kurigram turned her father's old tin shed into a free library — today it holds fifteen hundred books and two hundred members.",
        hi: "महामारी में स्कूल बंद होने पर कुड़िग्राम की कॉलेज छात्रा ने पिता के पुराने टिन के कमरे को ही बना डाला मुफ़्त पुस्तकालय — आज वहीं हैं पंद्रह सौ किताबें और दो सौ सदस्य।",
      },
      genre: "news",
      paragraphs: [
        {
          en: "In a small village in Kurigram, an old tin shed is now the busiest place after sunset. Children sit on bamboo mats, reading about tigers, planets, and faraway countries. Three years ago, there was not a single library in this area.",
          bn: "কুড়িগ্রামের এক ছোট্ট গ্রামে পুরনো এক টিনের ঘর এখন সন্ধ্যার পরে সবচেয়ে ব্যস্ত ঠিকানা। বাঁশের পাটিতে বসে ছেলেমেয়েরা পড়ছে বাঘ, গ্রহ-নক্ষত্র আর দূর-দেশের গল্প। তিন বছর আগেও এই অঞ্চলে ছিল না একটাও লাইব্রেরি।",
          hi: "कुड़िग्राम के एक छोटे गाँव में पुराना टिन का कमरा अब शाम के बाद सबसे व्यस्त जगह है। बाँस की चटाई पर बैठे बच्चे पढ़ रहे हैं बाघों, ग्रहों और दूर देशों के बारे में। तीन साल पहले तक इस इलाक़े में एक भी पुस्तकालय नहीं था।",
        },
        {
          en: "The change began with Nusrat Jahan, then a first-year college student. While her school closed during the pandemic, she watched village children spending their days in the fields. \"If they cannot go to the books, the books must come to them,\" she told her father. He handed her the old shed.",
          bn: "বদলের সূচনা হয়েছিল নুসরাত জাহানের হাত ধরে, তখন সে কলেজের প্রথম বর্ষের ছাত্রী। মহামারিতে স্কুল বন্ধ থাকার দিনগুলোতে সে দেখল গ্রামের ছেলেমেয়েরা কাটাচ্ছে মাঠে-ঘাটে। বাবাকে বলল, 'ওরা যদি বইয়ের কাছে যেতে না পারে, তাহলে বইকে এসে ওদের কাছে যেতেই হবে।' বাবা তাকে দিলেন পুরনো টিনের ঘরটা।",
          hi: "बदलाव की शुरुआत हुई नुसरत जहाँ के हाथों, वह तब कॉलेज के पहले साल की छात्रा थी। महामारी में स्कूल बंद रहने के दिनों में उसने देखा कि गाँव के बच्चे खेतों में ही दिन गुज़ार रहे हैं। उसने पिता से कहा, 'अगर वे किताबों तक नहीं जा सकते, तो किताबों को ही उनके पास आना होगा।' पिता ने उसे पुराना टिन का कमरा सौंप दिया।",
        },
        {
          en: "At first there were only forty books — Nusrat's own textbooks and a few novels. She posted photos on Facebook and requested old books. The response surprised her: teachers, students, and even strangers sent parcels from Dhaka and Chattogram. Within a year, the collection had grown to one thousand five hundred books.",
          bn: "শুরুতে ছিল মাত্র চল্লিশটা বই — নুসরাতের নিজের পাঠ্যবই আর কয়েকটা উপন্যাস। সে ফেসবুকে ছবি দিয়ে পুরনো বইয়ের জন্য আবেদন করল। সাড়া দেখে সে-ই অবাক: শিক্ষক, ছাত্রছাত্রী, এমনকি চেনা-অচেনা মানুষও ঢাকা আর চট্টগ্রাম থেকে পার্সেলে বই পাঠাতে লাগল। এক বছরের মধ্যে সংগ্রহ বেড়ে হলো পনেরো শো।",
          hi: "शुरुआत में थीं सिर्फ़ चालीस किताबें — नुसरत की अपनी पाठ्यपुस्तकें और कुछ उपन्यास। उसने फ़ेसबुक पर तस्वीरें डालकर पुरानी किताबों के लिए अपील की। जवाब देखकर वह ख़ुद हैरान रह गई: शिक्षक, छात्र, यहाँ तक कि अनजान लोग भी ढाका और चट्टग्राम से पार्सल में किताबें भेजने लगे। एक साल के भीतर संग्रह बढ़कर पंद्रह सौ हो गया।",
        },
        {
          en: "Today the library opens every evening. Older students teach the younger ones, and a retired headmaster runs a free English class on Fridays. This year the library has also received a national youth award. If Nusrat gets her expected scholarship, she will buy a small computer for the children.",
          bn: "আজ লাইব্রেরিটা খোলে প্রতি সন্ধ্যায়। বড় ছাত্ররা পড়ায় ছোটদের, আর শুক্রবারে অবসরপ্রাপ্ত এক প্রধান শিক্ষক চালান ফ্রি ইংলিশ ক্লাস। এ বছর লাইব্রেরিটা পেয়েছে এক জাতীয় যুব পুরস্কারও। নুসরাত প্রত্যাশিত বৃত্তিটা পেয়ে গেলে ছেলেমেয়েদের জন্য কিনবে ছোট্ট এক কম্পিউটার।",
          hi: "आज पुस्तकालय खुलता है हर शाम को। बड़े छात्र छोटों को पढ़ाते हैं, और शुक्रवार को एक सेवानिवृत्त प्रधानाध्यापक मुफ़्त इंग्लिश क्लास चलाते हैं। इस साल पुस्तकालय को एक राष्ट्रीय युवा पुरस्कार भी मिला है। अगर नुसरत को अपेक्षित छात्रवृत्ति मिल गई, तो वह बच्चों के लिए एक छोटा कंप्यूटर ख़रीदेगी।",
        },
        {
          en: "\"People ask me why I do not leave for the city,\" Nusrat laughs. \"But look at these faces. I have already found my future here — it is being written, sentence by sentence, inside a tin shed.\"",
          bn: "'মানুষ জিজ্ঞেস করে, শহরে চলে যাই না কেন,' হেসে ফেলেন নুসরাত। 'কিন্তু এই মুখগুলোর দিকে তাকান তো। আমার ভবিষ্যৎ আমি এখানেই খুঁজে নিয়েছি — টিনের এই ঘরের ভেতরে, একেকটা বাক্য জুড়ে জুড়ে সে লেখা হচ্ছে।'",
          hi: "'लोग पूछते हैं कि मैं शहर क्यों नहीं चली जाती,' नुसरत हँस देती हैं। 'पर इन चेहरों को देखिए तो। मेरा भविष्य मैं यहीं ढूँढ चुकी हूँ — टिन के इस कमरे के भीतर, वाक्य-दर-वाक्य वह लिखा जा रहा है।'",
        },
      ],
      vocabulary: [
        {
          word: "pandemic",
          meaning: {
            bn: "মহামারি — সারা দেশ বা পৃথিবীজুড়ে ছড়ানো রোগ",
            en: "a disease that spreads across the whole world",
            hi: "महामारी — पूरे देश या दुनिया में फैलने वाली बीमारी",
          },
          example: "Schools closed again during the pandemic.",
        },
        {
          word: "shed",
          meaning: {
            bn: "টিনের ঘর/ছাউনি — ধাতব চালের সাধারণ ঘর",
            en: "a simple building with a metal roof",
            hi: "टिन का कमरा — धातु की छत वाला सादा कमरा",
          },
          example: "The tools are kept in the garden shed.",
        },
        {
          word: "collection",
          meaning: {
            bn: "সংগ্রহ — এক জায়গায় জমা করা জিনিসের ভাণ্ডার",
            en: "a set of things gathered in one place",
            hi: "संग्रह — एक जगह इकट्ठा की गई चीज़ें",
          },
          example: "The library has a fine collection of folk tales.",
        },
        {
          word: "response",
          meaning: {
            bn: "সাড়া/জবাব — কারো আবেদনে মানুষের প্রতিক্রিয়া",
            en: "a reply or reaction to a request",
            hi: "प्रतिक्रिया — किसी अपील पर लोगों का जवाब",
          },
          example: "The response to our book drive was huge.",
        },
        {
          word: "scholarship",
          meaning: {
            bn: "বৃত্তি — পড়ার জন্য দেওয়া টাকা বা পুরস্কার",
            en: "money given to a student for studying",
            hi: "छात्रवृत्ति — पढ़ाई के लिए दी जाने वाली राशि",
          },
          example: "She won a scholarship to study in Dhaka.",
        },
        {
          word: "award",
          meaning: {
            bn: "পুরস্কার — ভালো কাজের জন্য দেওয়া স্বীকৃতি",
            en: "a prize for good work",
            hi: "पुरस्कार — अच्छे काम के लिए मिलने वाला सम्मान",
          },
          example: "The library received a youth award this year.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "লাইব্রেরিটা কোন জেলায়?",
            en: "Where is the library?",
            hi: "पुस्तकालय कहाँ है?",
          },
          options: [
            { bn: "কুড়িগ্রামে", en: "In Kurigram", hi: "कुड़िग्राम में" },
            { bn: "সিরাজগঞ্জে", en: "In Sirajganj", hi: "सिराजगंज में" },
            { bn: "নেত্রকোনায়", en: "In Netrakona", hi: "नेत्रकोना में" },
            { bn: "বাগেরহাটে", en: "In Bagerhat", hi: "बागेरहाट में" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — কুড়িগ্রামের এক ছোট্ট গ্রামে পুরনো এক টিনের ঘর।",
            en: "The first paragraph places the library in a small village in Kurigram.",
            hi: "पहला अनुच्छेद बताता है कि पुस्तकालय कुड़िग्राम के एक छोटे गाँव में है।",
          },
        },
        {
          question: {
            bn: "শুরুতে লাইব্রেরিতে কয়টা বই ছিল?",
            en: "How many books did the library have at first?",
            hi: "शुरुआत में पुस्तकालय में कितनी किताबें थीं?",
          },
          options: [
            { bn: "চল্লিশটা", en: "Forty", hi: "चालीस" },
            { bn: "পনেরো শো", en: "Fifteen hundred", hi: "पंद्रह सौ" },
            { bn: "দুই শো", en: "Two hundred", hi: "दो सौ" },
            { bn: "এক হাজার", en: "One thousand", hi: "एक हज़ार" },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে লেখা — শুরুতে ছিল মাত্র চল্লিশটা বই।",
            en: "The third paragraph says there were only forty books at first.",
            hi: "तीसरा अनुच्छेद कहता है कि शुरुआत में सिर्फ़ चालीस किताबें थीं।",
          },
        },
        {
          question: {
            bn: "শুক্রবারে লাইব্রেরিতে কী ঘটে?",
            en: "What happens at the library on Fridays?",
            hi: "शुक्रवार को पुस्तकालय में क्या होता है?",
          },
          options: [
            { bn: "বই বিক্রি হয়", en: "Books are sold", hi: "किताबें बिकती हैं" },
            { bn: "চলে ফ্রি ইংলিশ ক্লাস", en: "A free English class runs", hi: "मुफ़्त इंग्लिश क्लास चलती है" },
            { bn: "পুরস্কার দেওয়া হয়", en: "Awards are given", hi: "पुरस्कार दिए जाते हैं" },
            { bn: "লাইব্রেরি বন্ধ থাকে", en: "The library stays closed", hi: "पुस्तकालय बंद रहता है" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — শুক্রবারে অবসরপ্রাপ্ত প্রধান শিক্ষক চালান ফ্রি ইংলিশ ক্লাস।",
            en: "The fourth paragraph says a retired headmaster runs a free English class on Fridays.",
            hi: "चौथा अनुच्छेद कहता है कि शुक्रवार को सेवानिवृत्त अध्यापक मुफ़्त इंग्लिश क्लास चलाते हैं।",
          },
        },
        {
          question: {
            bn: "বৃত্তি পেলে নুসরাত কী কিনবে?",
            en: "What will Nusrat buy if she gets the scholarship?",
            hi: "छात्रवृत्ति मिलने पर नुसरत क्या ख़रीदेगी?",
          },
          options: [
            { bn: "নতুন টিনের চাল", en: "A new tin roof", hi: "नई टिन की छत" },
            { bn: "ছোট্ট এক কম্পিউটার", en: "A small computer", hi: "एक छोटा कंप्यूटर" },
            { bn: "এক হাজার বই", en: "A thousand books", hi: "एक हज़ार किताबें" },
            { bn: "বাঁশের পাটি", en: "Bamboo mats", hi: "बाँस की चटाइयाँ" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — বৃত্তি পেলে ছেলেমেয়েদের জন্য ছোট্ট কম্পিউটার কিনবে।",
            en: "The fourth paragraph says she will buy a small computer for the children if the scholarship comes.",
            hi: "चौथा अनुच्छेद कहता है कि छात्रवृत्ति मिलने पर वह बच्चों के लिए एक छोटा कंप्यूटर ख़रीदेगी।",
          },
        },
        {
          question: {
            bn: "নুসরাত শহরে না যাওয়ার কারণ কী বলেছে?",
            en: "What reason does Nusrat give for staying?",
            hi: "रुकने का कारण नुसरत क्या बताती हैं?",
          },
          options: [
            { bn: "শহর খুব ব্যয়বহুল", en: "The city is too expensive", hi: "शहर बहुत महँगा है" },
            { bn: "গ্রামের বইয়ের অভাব", en: "The village lacks books", hi: "गाँव में किताबों की कमी है" },
            { bn: "পরিবারের অনুমতি নেই", en: "Her family will not allow it", hi: "परिवार की अनुमति नहीं है" },
            { bn: "সে ভবিষ্যৎ এখানেই খুঁজে পেয়েছে", en: "She has found her future here", hi: "उसे अपना भविष्य यहीं मिल गया है" },
          ],
          answer: 3,
          explain: {
            bn: "শেষ অনুচ্ছেদে সে বলে — আমার ভবিষ্যৎ আমি এখানেই খুঁজে নিয়েছি।",
            en: "In the last paragraph she says she has already found her future here.",
            hi: "अंतिम अनुच्छेद में वह कहती है कि उसे अपना भविष्य यहीं मिल चुका है।",
          },
        },
      ],
    },
  },
];

export default SEED_READING_V2_INTERMEDIATE;
