// ─── Reading library seeds v2: ADVANCED (C1) ───
// Roadmap D45 content-scale wave: 3 STANDALONE reading passages (unit 0 —
// extras on top of the v1 unit 1–5 series). English paragraphs are the
// learning content (rich C1 prose: idiomatic collocation, narrative pacing,
// formal + epistolary register); bn/hi are faithful line-by-line assist
// translations. 6 vocab + 5 quiz per passage.
//
// Entries: 1 The Night Shift of the Brain (article · science) ·
// 2 A Letter from the Flood Camp (letter · work) ·
// 3 The Tea Stall at the Crossing (story · culture).
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

export const SEED_READING_V2_ADVANCED: SeedReadingEntry[] = [
  /* ───────────── 1. The Night Shift of the Brain (article · science) ───────────── */
  {
    slug: "read-a2-sleep",
    level: "advanced",
    category: "science",
    minutes: 5,
    unit: 0,
    data: {
      title: {
        bn: "ঘুমন্ত মস্তিষ্কের নৈশ শিফট",
        en: "The Night Shift of the Brain",
        hi: "मस्तिष्क की नाइट-शिफ़्ट",
      },
      summary: {
        bn: "ঘুম কোনো বিরতি নয় — মস্তিষ্কের সবচেয়ে ব্যস্ত নৈশ কর্মসূচি: স্মৃতি বাছাই, আবর্জনা ফেলা, আগামীকালের প্রস্তুতি। তবে আধুনিক ফোনের নীল আলো এই পুরনো ছন্দের সঙ্গে যুদ্ধ ঘোষণা করে বসেছে।",
        en: "Sleep is not a pause — it is the brain's busiest night shift: sorting memories, flushing out waste, rehearsing tomorrow. Modern screens, however, have declared war on this ancient rhythm.",
        hi: "नींद कोई ठहराव नहीं — यह मस्तिष्क की सबसे व्यस्त नाइट-शिफ़्ट है: यादें छाँटना, कचरा बाहर निकालना, कल की तैयारी करना। पर आधुनिक स्क्रीनों ने इस प्राचीन ताल के साथ युद्ध छेड़ दिया है।",
      },
      genre: "article",
      paragraphs: [
        {
          en: "For centuries, sleep was described as a small death — a pause, an empty room, nothing more. Modern science has overturned that picture completely. While the body lies still, the brain runs one of the busiest night shifts in biology: filing memories, washing out waste, and rehearsing tomorrow's problems, all in the dark.",
          bn: "শতাব্দীর পর শতাব্দী ঘুমকে বলা হতো ছোট্ট এক মৃত্যু — মাত্র এক বিরতি, ফাঁকা এক ঘর, বেশি কিছু নয়। আধুনিক বিজ্ঞান সেই ছবিটাই উল্টে দিয়েছে। শরীর যখন নিথর, মস্তিষ্ক তখন জীববিজ্ঞানের অন্যতম ব্যস্ত নৈশ শিফটে: স্মৃতি গুছিয়ে ফাইল করে, আবর্জনা ধুয়ে ফেলে, আগামীকালের সমস্যাগুলোর মহড়া দেয় — সবটুকু অন্ধকারে।",
          hi: "सदियों तक नींद को एक छोटी मौत कहा जाता था — बस एक ठहराव, ख़ाली एक कमरा, इससे ज़्यादा कुछ नहीं। आधुनिक विज्ञान ने वह तस्वीर पूरी तरह उलट दी है। शरीर जब निश्चल पड़ा रहता है, मस्तिष्क तब जीवविज्ञान की सबसे व्यस्त नाइट-शिफ़्ट पर होता है: यादें फ़ाइल करना, कचरा धोना, कल की समस्याओं का अभ्यास करना — सब अँधेरे में।",
        },
        {
          en: "Consider what happens to memory. During the day, the hippocampus — the brain's scrappy notebook — scribbles down everything that matters. At night, in slow, deep waves, it replays the day and copies the essential parts into the cortex for long-term storage. Experiments show that people who sleep after studying remember measurably more than those who stay up revising; the revision is, quite literally, being done for them.",
          bn: "স্মৃতির ভাগ্যটাই একবার ভাবুন। দিনের বেলা হিপোক্যাম্পাস — মস্তিষ্কের সেই ছেঁড়াখানা নোটবই — সব গুরুত্বপূর্ণ কিছু লিখে রাখে খুঁটিয়ে। রাতে, ধীর-গভীর ঢেউয়ের ছন্দে, সে দিনটাকে মনে করিয়ে নিয়ে অত্যাবশ্যকীয় অংশগুলো কপি করে রাখে কর্টেক্সে — দীর্ঘমেয়াদি ভাণ্ডারে। পরীক্ষাগুলো বলছে, পড়ার পর ঘুমিয়ে পড়া মানুষ জাগিয়ে-জাগিয়ে চেষ্টা করা মানুষের চেয়ে স্পষ্টভাবেই বেশি মনে রাখে; রিভিশনটা তার বদলে সত্যিই হয়ে যায়।",
          hi: "स्मृति के साथ क्या होता है, एक बार सोचिए। दिन के समय हिप्पोकैम्पस — मस्तिष्क की वह फटी-पुरानी नोटबुक — हर ज़रूरी बात ख़रोख़र लिख लेता है। रात में, धीमी-गहरी लहरों की थाप पर, वह दिन का रील चलाकर ज़रूरी हिस्सों को कॉर्टेक्स में कॉपी कर देता है — लंबी अवधि के भंडार में। प्रयोग बताते हैं कि पढ़ने के बाद सो जाने वाले लोग जागकर दोहराने वालों से स्पष्ट रूप से ज़्यादा याद रखते हैं; रिवीज़न वाक़ई उनकी ओर से हो जाता है।",
        },
        {
          en: "Sleep is also the brain's sanitation shift. During deep sleep the neurons shrink slightly, widening the channels between them so that cerebrospinal fluid can flush out the day's metabolic debris — including the stubborn proteins associated with Alzheimer's disease. Skipping sleep, then, is rather like refusing to take out the rubbish: nothing explodes at once, but the household slowly fills up.",
          bn: "স্বাস্থ্যসেবার নৈশ শিফটও তো দরকার। গভীর ঘুমে নিউরনগুলো সামান্য সরু হয়ে যায়, ফলে তাদের মাঝের খালগুলো চওড়া হয়ে যায়, আর সেরিব্রোস্পাইনাল ফ্লুইড ধুয়ে ফেলে দিনভরের বিপাকীয় আবর্জনা — অ্যালঝাইমারের সঙ্গে জড়িত সেই জেদি প্রোটিনগুলোও। তাই ঘুম কাটানো আসলে আবর্জনা না-ফেলার মতোই: একবারে কিছু বিস্ফোরিত হয় না, কিন্তু ঘরটা ধীরে ধীরে ভরে ওঠে।",
          hi: "मस्तिष्क की सफ़ाई-शिफ़्ट भी तो चाहिए। गहरी नींद में न्यूरॉन्स हल्के-से सिकुड़ जाते हैं, जिससे उनके बीच के नाले चौड़े हो जाते हैं और सेरेब्रोस्पाइनल फ़्लुइड दिन-भर की चयापचयी गंदगी बाहर निकाल देता है — अल्ज़ाइमर से जुड़े उन ज़िद्दी प्रोटीनों समेत। इसलिए नींद काटना ठीक वैसा ही है जैसे कचरा बाहर फेंकने से इनकार: एक बार में कुछ नहीं फटता, पर घर धीरे-धीरे भरता जाता है।",
        },
        {
          en: "The trouble is that modern life has declared war on this ancient rhythm. Our circadian clock expects candlelight after sunset; instead it receives the blue glare of phones, which suppresses melatonin, the hormone of darkness. A teenager scrolling at midnight is, in effect, sending his brain a false telegram: the sun is still up — keep working.",
          bn: "অসুবিধা হলো, আধুনিক জীবন এই প্রাচীন ছন্দের বিরুদ্ধেই যুদ্ধ ঘোষণা করে বসেছে। আমাদের দিনচক্র-ঘড়ি সূর্যাস্তের পরে আশা করে মোমবাতির আলো; বদলে তার হাতে পৌঁছে যায় ফোনের নীল ঝলক, যা দমিয়ে দেয় মেলাটোনিনকে — অন্ধকারের হরমোনটাকে। মাঝরাতে স্ক্রল করা এক কিশোর আসলে তার মস্তিষ্কে পাঠাচ্ছে বাঁকা এক তারবার্তা: সূর্য এখনও উঠেছে — কাজ চালিয়ে যাও।",
          hi: "दिक़्क़त यह है कि आधुनिक ज़िंदगी ने इस प्राचीन ताल के ख़िलाफ़ ही युद्ध छेड़ दिया है। हमारी सर्कैडियन घड़ी सूर्यास्त के बाद मानती है मोमबत्ती की रोशनी; उसके हाथ में पहुँच जाती है फ़ोन की नीली चमक, जो दबा देती है मेलाटोनिन को — अँधेरे का वह हार्मोन। आधी रात स्क्रॉल करता किशोर असल में अपने मस्तिष्क को भेज रहा है एक झूठा तार: सूरज अभी ऊपर है — काम जारी रखो।",
        },
        {
          en: "The costs of this deprivation are quiet but heavy. After several short nights, reaction time slows to the level of legal drunkenness, emotions lose their brakes, and the immune system lowers its guard. Public-health researchers now rank chronic sleep loss alongside poor diet and inactivity as a slow, modern plague — invisible, respectable, and everywhere.",
          bn: "এই বঞ্চনার বিলটা চুপচাপ, তবে ভারী। কয়েক রাত ঘুম কম হলেই প্রতিক্রিয়ার সময় ধীর হয়ে পড়ে বৈধ মদ্যপানের পর্যায়ে; আবেগ হারায় তার ব্রেক; রোগ-প্রতিরোধ ব্যবস্থা নামিয়ে রাখে তার পাহারা। জনস্বাস্থ্য গবেষকেরা এখন দীর্ঘমেয়াদি ঘুম-বঞ্চনাকে এক আস্ত আধুনিক অভিশাপ হিসেবে গুনছেন — দৃশ্যমান নয়, সম্মানজনকও নয়, তবু সর্বত্রই।",
          hi: "इस वंचना का बिल चुपचाप आता है, पर भारी होता है। कुछ ही छोटी रातों के बाद प्रतिक्रिया का समय धीमा पड़ जाता है वैध नशे के स्तर तक; भावनाएँ अपनी ब्रेक खो देती हैं; रोग-प्रतिरोधक तंत्र अपनी चौकसी घटा लेता है। जन-स्वास्थ्य शोधकर्ता अब दीर्घकालिक नींद की कमी को एक धीमी आधुनिक महामारी मानते हैं — दिखती नहीं, सम्मानजनक लगती है, पर हर जगह है।",
        },
        {
          en: "The remedy is stubbornly old-fashioned. Keep a fixed bedtime, even on weekends; let the last hour be dim and screen-free; treat the bedroom as a place for sleep rather than an argument with strangers on the internet. The brain does not need an app to do its night work — only the dark, the quiet, and the courtesy of an undisturbed eight hours.",
          bn: "প্রতিকারটা কিন্তু জেদ ধরা মাত্রে পুরনো-পদ্ধতির। ঠিক করা সময়েই ঘুমাতে যান, ছুটির দিনেও; দিনের শেষ ঘণ্টাটা রাখুন ম্লান আর স্ক্রিন-মুক্ত; শোবার ঘরটাকে ঘুমের জায়গা বানান, ইন্টারনেটের অচেনা মানুষের সঙ্গে তর্কের অখাড়া নয়। মস্তিষ্কের নৈশ কাজের জন্য অ্যাপের দরকার নেই — দরকার শুধু অন্ধকার, নীরবতা, আর বিঘ্নহীন আট ঘণ্টার একটু সম্মান।",
          hi: "इलाज दृढ़ता से पुराने दौर का है। सोने का एक निश्चित समय रखें, छुट्टी के दिनों में भी; दिन का आख़िरी घंटा रखें मंद और स्क्रीन-मुक्त; शयनकक्ष को नींद का कमरा बनाइए, इंटरनेट के अनजान लोगों से बहस का अखाड़ा नहीं। मस्तिष्क की रात की कार्यवाही के लिए ऐप की ज़रूरत नहीं — ज़रूरत है सिर्फ़ अँधेरे, ख़ामोशी और बाधा-रहित आठ घंटों की एक छोटी-सी इज़्ज़त।",
        },
      ],
      vocabulary: [
        {
          word: "overturn",
          meaning: {
            bn: "উল্টে দেওয়া — প্রতিষ্ঠিত ধারণা বা সিদ্ধান্ত ভেঙে ফেলা",
            en: "to change a belief or decision completely",
            hi: "पलट देना — स्थापित धारणा या निर्णय को बदल देना",
          },
          example: "New data overturned the old theory.",
        },
        {
          word: "scribble",
          meaning: {
            bn: "তাড়াহুড়ায় খোঁচাখোঁচা লেখা",
            en: "to write quickly and untidily",
            hi: "जल्दी में फुरसत में लिख डालना",
          },
          example: "She scribbled the number on her palm.",
        },
        {
          word: "debris",
          meaning: {
            bn: "ধ্বংসাবশেষ/আবর্জনা — এখানে শরীরে জমা বর্জ্য পদার্থ",
            en: "scattered waste; here, metabolic waste in the body",
            hi: "मलबा/कचरा — यहाँ शरीर में जमा चयापचयी बर्बादी",
          },
          example: "The fluid washes the day's debris out of the brain.",
        },
        {
          word: "suppress",
          meaning: {
            bn: "দমন করা — কোনো কিছুর স্বাভাবিক প্রকাশ আটকে রাখা",
            en: "to stop something from appearing or working",
            hi: "दबा देना — किसी चीज़ का प्रकट होना रोक देना",
          },
          example: "Bright light suppresses melatonin at night.",
        },
        {
          word: "deprivation",
          meaning: {
            bn: "বঞ্চনা — দরকারি কিছু থেকে বঞ্চিত হওয়া",
            en: "the state of not having something you need",
            hi: "वंचना — ज़रूरी चीज़ से वंचित होना",
          },
          example: "Sleep deprivation slows your reaction time.",
        },
        {
          word: "plague",
          meaning: {
            bn: "মহামারি; এখানে — সমাজকে ধীরে নাগাল ধরা বড় অভিশাপ",
            en: "a deadly epidemic; here, a widespread modern harm",
            hi: "महामारी; यहाँ — समाज को धीरे-धीरे घेरने वाली व्यापक क्षति",
          },
          example: "Inactivity has become a modern plague.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "গভীর ঘুমে নিউরনগুলোর কী ঘটে?",
            en: "What happens to neurons during deep sleep?",
            hi: "गहरी नींद में न्यूरॉन्स का क्या होता है?",
          },
          options: [
            { bn: "সেগুলো সামান্য সরু হয়", en: "They shrink slightly", hi: "वे हल्के-से सिकुड़ जाते हैं" },
            { bn: "সেগুলো বাড়তে থাকে", en: "They keep growing", hi: "वे बढ़ते रहते हैं" },
            { bn: "সেগুলো সম্পূর্ণ বন্ধ হয়ে যায়", en: "They shut down completely", hi: "वे पूरी तरह बंद हो जाते हैं" },
            { bn: "সেগুলো বিভক্ত হয়", en: "They divide", hi: "वे विभाजित होते हैं" },
          ],
          answer: 0,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে লেখা — গভীর ঘুমে নিউরনগুলো সামান্য সরু হয়ে যায়, খালগুলো চওড়া হয়।",
            en: "The third paragraph says the neurons shrink slightly, widening the channels between them.",
            hi: "तीसरा अनुच्छेद कहता है कि गहरी नींद में न्यूरॉन्स हल्के-से सिकुड़ जाते हैं, नाले चौड़े हो जाते हैं।",
          },
        },
        {
          question: {
            bn: "পরীক্ষাগুলো ঘুম আর পড়াশোনা নিয়ে কী বলে?",
            en: "What do the experiments show about sleep and study?",
            hi: "प्रयोग नींद और पढ़ाई के बारे में क्या बताते हैं?",
          },
          options: [
            { bn: "জাগিয়ে রিভিশনই বেশি কার্যকর", en: "Staying up to revise works best", hi: "जागकर दोहराना सबसे असरदार है" },
            { bn: "পড়ার পরে ঘুমালে বেশি মনে থাকে", en: "Sleeping after studying improves recall", hi: "पढ़ने के बाद सोने से ज़्यादा याद रहता है" },
            { bn: "ঘুম স্মৃতিতে কোনো প্রভাব ফেলে না", en: "Sleep has no effect on memory", hi: "नींद का स्मृति पर कोई असर नहीं" },
            { bn: "কফি ঘুমের বদলে দাঁড়িয়ে যায়", en: "Coffee can replace sleep", hi: "कॉफ़ी नींद की जगह ले लेती है" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে লেখা — পড়ার পর ঘুমিয়ে পড়া মানুষ স্পষ্টভাবেই বেশি মনে রাখে।",
            en: "The second paragraph says people who sleep after studying remember measurably more.",
            hi: "दूसरा अनुच्छेद कहता है कि पढ़ने के बाद सोने वाले लोग स्पष्ट रूप से ज़्यादा याद रखते हैं।",
          },
        },
        {
          question: {
            bn: "ফোনের নীল আলো কীসের ক্ষতি করে?",
            en: "What does the phone's blue light harm?",
            hi: "फ़ोन की नीली रोशनी किसे नुक़सान पहुँचाती है?",
          },
          options: [
            { bn: "কর্টেক্স", en: "The cortex", hi: "कॉर्टेक्स" },
            { bn: "মেলাটোনিন, অন্ধকারের হরমোন", en: "Melatonin, the hormone of darkness", hi: "मेलाटोनिन, अँधेरे का हार्मोन" },
            { bn: "হিপোক্যাম্পাস", en: "The hippocampus", hi: "हिप्पोकैम्पस" },
            { bn: "রোগ-প্রতিরোধ ব্যবস্থা", en: "The immune system", hi: "रोग-प्रतिरोधक तंत्र" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — ফোনের নীল ঝলক দমিয়ে দেয় মেলাটোনিনকে।",
            en: "The fourth paragraph says the blue glare of phones suppresses melatonin.",
            hi: "चौथा अनुच्छेद कहता है कि फ़ोन की नीली चमक मेलाटोनिन को दबा देती है।",
          },
        },
        {
          question: {
            bn: "কয়েক রাত ঘুম কম হলে প্রতিক্রিয়ার সময় কেমন হয়?",
            en: "What happens to reaction time after several short nights?",
            hi: "कुछ छोटी रातों के बाद प्रतिक्रिया का समय कैसा हो जाता है?",
          },
          options: [
            { bn: "আরও দ্রুত হয়ে ওঠে", en: "It becomes faster", hi: "वह तेज़ हो जाता है" },
            { bn: "বৈধ মদ্যপানের স্তরে ধীর হয়", en: "It slows to the level of legal drunkenness", hi: "वैध नशे के स्तर तक धीमा पड़ जाता है" },
            { bn: "একদম অপরিবর্তিত থাকে", en: "It stays exactly the same", hi: "वह बिल्कुल वैसा ही रहता है" },
            { bn: "শুধু রাতেই কমে", en: "It drops only at night", hi: "सिर्फ़ रात में घटता है" },
          ],
          answer: 1,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে লেখা — কয়েক রাত ঘুম কম হলেই প্রতিক্রিয়ার সময় বৈধ মদ্যপানের পর্যায়ে ধীর হয়।",
            en: "The fifth paragraph says reaction time slows to the level of legal drunkenness after several short nights.",
            hi: "पाँचवाँ अनुच्छेद कहता है कि कुछ छोटी रातों के बाद प्रतिक्रिया का समय वैध नशे के स्तर तक धीमा पड़ जाता है।",
          },
        },
        {
          question: {
            bn: "লেখকের পরামর্শ অনুযায়ী শেষ ঘণ্টাটা কেমন হওয়া উচিত?",
            en: "According to the writer, how should the last hour of the day be?",
            hi: "लेखक के अनुसार दिन का आख़िरी घंटा कैसा होना चाहिए?",
          },
          options: [
            { bn: "উজ্জ্বল আর ব্যস্ত", en: "Bright and busy", hi: "उज्ज्वल और व्यस्त" },
            { bn: "স্ক্রিন-মুক্ত আর ম্লান আলোর", en: "Dim and screen-free", hi: "मंद और स्क्रीन-मुक्त" },
            { bn: "সোশ্যাল মিডিয়ায় ভরা", en: "Full of social media", hi: "सोशल मीडिया से भरा" },
            { bn: "শরীরচর্চার জন্য ভালো", en: "Best spent exercising", hi: "व्यायाम में बिताना बेहतर" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — দিনের শেষ ঘণ্টাটা রাখুন ম্লান আর স্ক্রিন-মুক্ত।",
            en: "The last paragraph says to keep the last hour dim and screen-free.",
            hi: "अंतिम अनुच्छेद कहता है कि आख़िरी घंटा मंद और स्क्रीन-मुक्त रखें।",
          },
        },
      ],
    },
  },

  /* ───────────── 2. A Letter from the Flood Camp (letter · work) ───────────── */
  {
    slug: "read-a2-floodletter",
    level: "advanced",
    category: "work",
    minutes: 6,
    unit: 0,
    data: {
      title: {
        bn: "বন্যার পাড় থেকে এক চিঠি",
        en: "A Letter from the Flood Camp",
        hi: "बाढ़ शिविर से एक चिट्ठी",
      },
      summary: {
        bn: "তরুণ এক ডাক্তার তাঁর পুরনো অধ্যাপককে লেখা চিঠিতে সুনামগঞ্জের বন্যা-ত্রাণ মেডিকেল ক্যাম্পের দু'সপ্তাহের বিবরণ দেন — রোগী, রসদ, আর যা কোনো পাঠ্যবইয়ে পড়ানো হয়নি।",
        en: "A young doctor writes to her former professor, describing two weeks at a flood-relief medical camp in Sunamganj — the patients, the logistics, and everything the textbook never taught.",
        hi: "एक युवा डॉक्टर अपने पुराने प्रोफ़ेसर को लिखे पत्र में सुनामगंज के बाढ़-राहत मेडिकल कैंप के दो हफ़्तों का ब्योरा देती है — मरीज़, रसद, और वह सब जो पाठ्यपुस्तक नहीं सिखा सकी।",
      },
      genre: "letter",
      paragraphs: [
        {
          en: "Dear Professor Haque, You told us once, in a crowded lecture hall, that a rural posting would teach us more than any textbook. I have just finished two weeks at a flood-relief medical camp in Sunamganj, and I am writing to confess that you were right — though not in the way I expected.",
          bn: "সম্মানিত অধ্যাপক হক, এক ভিড়গাড়া ক্লাসরুমে আপনি একবার বলেছিলেন — গ্রামের পোস্টিংই আমাদের পাঠ্যবইয়ের চেয়ে বেশি শেখাবে। সুনামগঞ্জের এক বন্যা-ত্রাণ মেডিকেল ক্যাম্পে দু'সপ্তাহ কাটিয়ে ফিরেই চিঠিটা লিখছি, স্বীকার করতে — আপনি ঠিক ছিলেন; যদিও আমি যেভাবে ভেবেছিলাম, সেভাবে নয়।",
          hi: "माननीय प्रोफ़ेसर हक़, भरे हुए एक व्याख्यान कक्ष में आपने एक बार कहा था कि गाँव की पोस्टिंग हमें किसी पाठ्यपुस्तक से ज़्यादा सिखाएगी। सुनामगंज के एक बाढ़-राहत मेडिकल कैंप में दो हफ़्ते पूरे करके ही यह पत्र लिख रही हूँ, स्वीकार करने के लिए — आप सही थे; हालाँकि उस तरह नहीं, जैसी मैंने सोची थी।",
        },
        {
          en: "The camp sits on the rain-bared skeleton of a primary school, forty minutes by country boat from the nearest dry road. Water has entered three hundred homes; half the tube wells are under it. Every morning the queue forms before we do — grandmothers on cots, fathers holding children above the waterline, and a boy arriving with a plastic sheet full of tablets whose names he cannot read.",
          bn: "ক্যাম্পটা বসে আছে এক প্রাইমারি স্কুলের বৃষ্টি-ধোয়া কঙ্কালের ওপর, নিকটতম শুকনো রাস্তা থেকে নৌকায় চল্লিশ মিনিট। তিনশো ঘরে ঢুকেছে পানি; নলকূপের অর্ধেক তার নিচেই। প্রতি সকালে আমাদের আগেই সারি লেগে যায় — খাটে বসা নানি-দাদিরা, বুকের ওপরে ওপরে শিশু তুলে ধরা বাবারা, আর এক কিশোর, প্লাস্টিকের থলেজুড়ে ওষুধ নিয়ে এসেছে, যার নামগুলো সে পড়তে পারে না।",
          hi: "कैंप टिका है एक प्राथमिक विद्यालय के बारिश-धुले कंकाल पर, नज़दीकी सूखी सड़क से देशी नाव में चालीस मिनट। तीन सौ घरों में पानी घुस चुका है; नलकूपों का आधा उसी के नीचे है। हर सुबह हमसे पहले ही क़तार बन जाती है — खाटों पर बैठी नानियाँ-दादियाँ, बच्चों को पानी की रेखा से ऊपर उठाए बाप, और एक किशोर, जो प्लास्टिक की थैली-भर गोलियाँ लाया है, जिनके नाम वह पढ़ नहीं सकता।",
        },
        {
          en: "We see the classics of every flood: diarrhoea, skin infections, fever. An outbreak of dysentery swept through the eastern shelter in the first week; we contained it with chlorine, instruction, and sheer repetition. Dehydration is the quietest enemy — it walks in politely, sits down, and does not announce itself until the eyes have gone soft. Oral saline is our single most precious cargo, and I have learned to prepare it faster than I ever typed a prescription.",
          bn: "প্রতিটা বন্যার সেই চিরায়ত রোগগুলোই পাই: ডায়রিয়া, চর্মরোগ, জ্বর। প্রথম সপ্তাহেই পূর্ব-দিকের আশ্রয়কেন্দ্রে আমাশয়ের প্রাদুর্ভাব দেখা দিল; ক্লোরিন, নির্দেশনা আর নিরলস পুনরাবৃত্তি দিয়ে সেটা নিয়ন্ত্রণে এনেছি। পানিশূন্যতা সবচেয়ে ফিসফিসে শত্রু — ভদ্রভাবে ঢুকে বসে, নিজের অস্তিত্ব ঘোষণা করে না, যতক্ষণ না চোখগুলো নরম হয়ে যায়। ওরাল স্যালাইনই আমাদের একমাত্র অমূল্য মালপত্র, আর আমি এমন দ্রুত স্যালাইন তৈরি করতে শিখেছি, যত দ্রুত কোনোদিন প্রেসক্রিপশন টাইপ করিনি।",
          hi: "हर बाढ़ के वही प्राचीन रोग मिलते हैं: डायरिया, चर्मरोग, बुख़ार। पहले हफ़्ते ही पूर्व के आश्रय में पेचिश का प्रकोप फैला; क्लोरीन, निर्देश और अथक दोहराव से हमने उसे नियंत्रित किया। पानी की कमी सबसे फुसफुसाता दुश्मन है — विनम्रता से घुसकर बैठ जाता है, और जब तक आँखें नरम न पड़ जाएँ, अपनी हाज़िरी नहीं देता। ओरल सैलाइन ही हमारा सबसे अनमोल सामान है, और मैंने उतनी तेज़ी से सैलाइन बनाना सीख लिया है, जितनी तेज़ी से कभी पर्चा टाइप नहीं किया।",
        },
        {
          en: "What no textbook prepared me for was logistics. Two hundred patients, one autoclave, and a generator that coughs like an old man in winter. When the generator failed on the eighth night, we examined patients by the light of three phone torches held steady by volunteers, and I understood, at last, why triage is a moral word, not a technical one: deciding who waits is also deciding who matters.",
          bn: "যা কোনো পাঠ্যবই আমাকে শেখায়নি, তা হলো রসদ-সংগঠন। দুইশো রোগী, একটা অটোক্লেভ, আর শীতের বুড়ো মানুষের মতো কাশতে কাশতে চলা এক জেনারেটর। অষ্টম রাতে জেনারেটর নিভে গেল, তিনটা ফোনের টর্চে স্বেচ্ছাসেবকদের স্থির হাতে ধরা আলোয় আমরা রোগী দেখি, আর সে রাতেই শেষবারের মতো বুঝলাম, ট্রায়াজ কেন একটা নৈতিক শব্দ, কারিগরি নয়: কে অপেক্ষা করবে তা ঠিক করাও ঠিক করারই অন্য নাম — কার মূল্য বেশি।",
          hi: "जो किसी पाठ्यपुस्तक ने मुझे नहीं सिखाया, वह था रसद-प्रबंध। दो सौ मरीज़, एक ऑटोक्लेव, और एक जनरेटर जो सर्दियों के बूढ़े आदमी की तरह खाँसता है। आठवीं रात जनरेटर बुझ गया, तीन फ़ोनों की टॉर्च की रोशनी में, स्वयंसेवकों के स्थिर हाथों से थामे हुए, हमने मरीज़ देखे, और उसी रात समझ गई कि ट्रायाज़ आख़िर एक नैतिक शब्द क्यों है, तकनीकी नहीं: यह तय करना कि कौन इंतज़ार करेगा, यह भी तय करना है कि किसका मूल्य ज़्यादा है।",
        },
        {
          en: "There was light too, of course. An old farmer named Abdur Rahman refused to leave his submerged house but paddled daily to the camp, not for medicine, he said, but for company. On the last evening he brought us a tin of puffed rice and said, with the gravity of a minister: \"The water takes the house; it has no power over manners.\" I have repeated that sentence to myself every day since.",
          bn: "আলোও ছিল, অবশ্যই। আবদুর রহমান নামে এক বৃদ্ধ কৃষক ডুবন্ত ঘর ছাড়লেন না, তবু রোজ় নৌকায় ভেসে আসতেন ক্যাম্পে — ওষুধের জন্য নয়, সঙ্গের জন্য, তিনি বলতেন। শেষ সন্ধ্যায় এক টিন মুড়ি নিয়ে এসে, যে গম্ভীরতায় মন্ত্রী ভাষণ দেন, বললেন: 'পানি ঘর নিতে পারে; আদব নিতে পারে না।' সেই বাক্যটা আমি তখন থেকে প্রতিদিন নিজেকে শোনাই।",
          hi: "रोशनी भी थी, बेशक। अब्दुर रहमान नाम के एक बुज़ुर्ग किसान डूबते घर को छोड़ने को तैयार नहीं हुए, पर रोज़ नाव से कैंप पहुँचते रहे — दवा के लिए नहीं, साथ के लिए, वे कहते थे। आख़िरी शाम एक डिब्बा मुरमुरा लाकर, मंत्री की तरह गंभीर होकर बोले: 'पानी घर ले सकता है; तहज़ीब नहीं ले सकता।' उस दिन से वह वाक्य मैं रोज़ ख़ुद से दोहराती हूँ।",
        },
        {
          en: "I used to think relief work was about medicine. Now I suspect it is mostly about systems, patience, and the refusal to be embarrassed by your own limits. Please give my regards to the department. If the camp reopens next monsoon, I intend to return — this time with two more graduates and a spare generator. Yours sincerely, Dr. Farhana Yeasmin.",
          bn: "ত্রাণকর্ম মানে আমি ভাবতাম চিকিৎসা। এখন সন্দেহ করি, এর বড় অংশ আসলে ব্যবস্থা, ধৈর্য, আর নিজের সীমার সামনে লজ্জা না পাওয়ার জেদ। বিভাগকে আমার শুভেচ্ছা জানাবেন, প্লিজ। আগামী বর্ষায় ক্যাম্প আবার খুলল ফিরতে চাই — এবার সঙ্গে আরও দুই স্নাতক আর একটা রিজার্ভ জেনারেটর নিয়ে। আপনার বিশ্বস্ত, ডা. ফারহানা ইয়াসমিন।",
          hi: "राहत-कार्य से मेरा मतलब समझती थी सिर्फ़ चिकित्सा। अब संदेह करती हूँ कि उसका बड़ा हिस्सा है व्यवस्था, धैर्य, और अपनी सीमाओं के सामने शर्मिंदा न होने की ज़िद। विभाग को मेरा नमस्कार कहिए, प्लीज़। अगली बरसात में कैंप फिर खुला, तो लौटूँगी — इस बार दो और स्नातक और एक रिज़र्व जनरेटर साथ लेकर। आपकी विश्वस्त, डॉ. फ़रहाना यासमीन।",
        },
      ],
      vocabulary: [
        {
          word: "relief",
          meaning: {
            bn: "ত্রাণ — দুর্যোগে পড়া মানুষের সাহায্যের ব্যবস্থা",
            en: "help given to people in a disaster",
            hi: "राहत — आपदा में लोगों को दी जाने वाली सहायता",
          },
          example: "The relief boats reached the village by noon.",
        },
        {
          word: "outbreak",
          meaning: {
            bn: "প্রাদুর্ভাব — রোগের হঠাৎ, দ্রুত বিস্তার",
            en: "the sudden spread of a disease",
            hi: "प्रकोप — किसी बीमारी का अचानक फैलना",
          },
          example: "An outbreak of dysentery hit the eastern shelter.",
        },
        {
          word: "dehydration",
          meaning: {
            bn: "পানিশূন্যতা — শরীরে প্রয়োজনের চেয়ে কম পানি",
            en: "the loss of more water than the body takes in",
            hi: "पानी की कमी — शरीर द्वारा ली गई जल से अधिक हानि",
          },
          example: "Oral saline cures mild dehydration fast.",
        },
        {
          word: "logistics",
          meaning: {
            bn: "রসদ-সংগঠন — জিনিস, যান আর মানুষ ঠিক জায়গায় পৌঁছানোর পরিকল্পনা",
            en: "the planning of moving goods, transport and people",
            hi: "रसद-प्रबंध — सामान, वाहन और लोगों को सही जगह पहुँचाने की योजना",
          },
          example: "Good logistics kept the camp stocked with saline.",
        },
        {
          word: "triage",
          meaning: {
            bn: "ট্রায়াজ — জরুরি রোগীদের অগ্রাধিকার অনুযায়ী সাজানো",
            en: "deciding which patients need care first",
            hi: "ट्रायाज़ — किन मरीज़ों को पहले इलाज चाहिए, यह तय करना",
          },
          example: "Triage put the weakest patients at the front.",
        },
        {
          word: "submerged",
          meaning: {
            bn: "নিমজ্জিত — পানির নিচে ঢাকা পড়া",
            en: "covered completely by water",
            hi: "जलमग्न — पानी के नीचे पूरी तरह दबा हुआ",
          },
          example: "Half the village stood submerged in October.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "ডাক্তার কেন এই চিঠিটা লিখছেন?",
            en: "Why is the doctor writing this letter?",
            hi: "डॉक्टर यह पत्र क्यों लिख रही है?",
          },
          options: [
            { bn: "ছুটির আবেদন করতে", en: "To ask for leave", hi: "छुट्टी माँगने के लिए" },
            { bn: "স্বীকার করতে যে অধ্যাপক ঠিক ছিলেন", en: "To admit the professor was right", hi: "मानने के लिए कि प्रोफ़ेसर सही थे" },
            { bn: "চাকরির অনুরোধ করতে", en: "To request a job", hi: "नौकरी की निवेदन करने के लिए" },
            { bn: "টিকিট বুক করাতে", en: "To book a ticket", hi: "टिकट बुक कराने के लिए" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে তিনি লেখেন — স্বীকার করতে লিখছেন, আপনি ঠিক ছিলেন।",
            en: "In the first paragraph she writes to confess that the professor was right.",
            hi: "पहले अनुच्छेद में वह लिखती है कि स्वीकार करने के लिए लिख रही है कि प्रोफ़ेसर सही थे।",
          },
        },
        {
          question: {
            bn: "সবচেয়ে ফিসফিসে শত্রু বলা হয়েছে কাকে?",
            en: "Which illness is called the quietest enemy?",
            hi: "सबसे फुसफुसाता दुश्मन किसे कहा गया है?",
          },
          options: [
            { bn: "জ্বর", en: "Fever", hi: "बुख़ार" },
            { bn: "চর্মরোগ", en: "Skin infection", hi: "चर्मरोग" },
            { bn: "পানিশূন্যতা", en: "Dehydration", hi: "पानी की कमी" },
            { bn: "ডায়রিয়া", en: "Diarrhoea", hi: "डायरिया" },
          ],
          answer: 2,
          explain: {
            bn: "তৃতীয় অনুচ্ছেদে লেখা — পানিশূন্যতা সবচেয়ে ফিসফিসে শত্রু।",
            en: "The third paragraph says dehydration is the quietest enemy.",
            hi: "तीसरा अनुच्छेद कहता है कि पानी की कमी सबसे फुसफुसाता दुश्मन है।",
          },
        },
        {
          question: {
            bn: "অষ্টম রাতে জেনারেটর নিভে গেলে কী হয়?",
            en: "What happens on the eighth night when the generator fails?",
            hi: "आठवीं रात जनरेटर बुझने पर क्या होता है?",
          },
          options: [
            { bn: "ক্যাম্প একদিনের জন্য বন্ধ হয়", en: "The camp closes for a day", hi: "कैंप एक दिन के लिए बंद हो जाता है" },
            { bn: "রোগী দেখা হয় তিন ফোন-টর্চের আলোয়", en: "Patients are examined by three phone torches", hi: "मरीज़ तीन फ़ोन-टॉर्च की रोशनी में देखे जाते हैं" },
            { bn: "সব রোগীকে নৌকায় পাঠানো হয়", en: "All patients are sent away by boat", hi: "सभी मरीज़ों को नाव से भेज दिया जाता है" },
            { bn: "স্বেচ্ছাসেবকরা কেরোসিনের লণ্ঠন আনে", en: "Volunteers bring kerosene lamps", hi: "स्वयंसेवक केरोसिन के लालटेन लाते हैं" },
          ],
          answer: 1,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — তিনটা ফোনের টর্চে স্থির হাতে ধরা আলোয় রোগী দেখা হয়।",
            en: "The fourth paragraph says patients were examined by the light of three phone torches.",
            hi: "चौथा अनुच्छेद कहता है कि तीन फ़ोनों की टॉर्च की रोशनी में मरीज़ देखे गए।",
          },
        },
        {
          question: {
            bn: "আবদুর রহমান রোজ় ক্যাম্পে আসতেন কেন?",
            en: "Why did Abdur Rahman visit the camp daily?",
            hi: "अब्दुर रहमान रोज़ कैंप क्यों आते थे?",
          },
          options: [
            { bn: "ওষুধের জন্য", en: "For medicine", hi: "दवा के लिए" },
            { bn: "খাবারের জন্য", en: "For food", hi: "खाने के लिए" },
            { bn: "সঙ্গের জন্য", en: "For company", hi: "साथ के लिए" },
            { bn: "জেনারেটর সারাতে", en: "To fix the generator", hi: "जनरेटर ठीक कराने के लिए" },
          ],
          answer: 2,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে তিনি বলেন — ওষুধের জন্য নয়, সঙ্গের জন্য আসেন।",
            en: "In the fifth paragraph he says he comes not for medicine but for company.",
            hi: "पाँचवें अनुच्छेद में वे कहते हैं कि दवा के लिए नहीं, साथ के लिए आते हैं।",
          },
        },
        {
          question: {
            bn: "আগামী বর্ষায় ফেরার সময় ডাক্তার কী নিয়ে যেতে চান?",
            en: "What does the doctor plan to bring next monsoon?",
            hi: "अगली बरसात डॉक्टर क्या लाने की योजना बना रही है?",
          },
          options: [
            { bn: "নতুন অটোক্লেভ", en: "A new autoclave", hi: "नया ऑटोक्लेव" },
            { bn: "দুই স্নাতক আর রিজার্ভ জেনারেটর", en: "Two more graduates and a spare generator", hi: "दो और स्नातक और एक रिज़र्व जनरेटर" },
            { bn: "এক নৌকা ওরাল স্যালাইন", en: "A boatload of oral saline", hi: "नाव-भर ओरल सैलाइन" },
            { bn: "তিনটা ফোন-টর্চ", en: "Three phone torches", hi: "तीन फ़ोन-टॉर्च" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে লেখা — এবার সঙ্গে আরও দুই স্নাতক আর একটা রিজার্ভ জেনারেটর।",
            en: "The last paragraph says she will return with two more graduates and a spare generator.",
            hi: "अंतिम अनुच्छेद कहता है कि वह दो और स्नातक और एक रिज़र्व जनरेटर लेकर लौटेगी।",
          },
        },
      ],
    },
  },

  /* ───────────── 3. The Tea Stall at the Crossing (story · culture) ───────────── */
  {
    slug: "read-a2-teastall",
    level: "advanced",
    category: "culture",
    minutes: 5,
    unit: 0,
    data: {
      title: {
        bn: "মোড়ের চায়ের দোকান",
        en: "The Tea Stall at the Crossing",
        hi: "मोड़ पर चाय की दुकान",
      },
      summary: {
        bn: "বগুড়ার এক মোড়ে ১৯৫২ সাল থেকে দাঁড়িয়ে আছে নামহীন এক চায়ের দোকান — তিন প্রজন্ম, এক কেটলি, আর এক খাতায় জমা পুরো শহরের বিশ্বাসের হিসাব।",
        en: "At a crossing in Bogura stands a nameless tea stall, alive since 1952 — three generations, one kettle, and a ledger that keeps the town's accounts of trust.",
        hi: "बोगुरा के एक मोड़ पर खड़ी है बेनाम एक चाय की दुकान, 1952 से ज़िंदा — तीन पीढ़ियाँ, एक केतली, और एक बही-ख़ाता जो शहर के भरोसे का हिसाब रखता है।",
      },
      genre: "story",
      paragraphs: [
        {
          en: "At the crossing of Sherpur Road and the old station lane in Bogura stands a tea stall with no name. Everyone simply calls it Modhur Chaa — 'sweet tea' — after the man who founded it in 1952 with a kettle, a hurricane lamp, and one bench of salvaged teak.",
          bn: "বগুড়ার শেরপুর রোড আর পুরনো স্টেশন-গলির মোড়ে দাঁড়িয়ে আছে বেনাম এক চায়ের দোকান। সবাই ডাকে শুধু মধুর চা বলে — ১৯৫২ সালে যে মানুষটা এক কেটলি, এক হ্যারিকেন, আর উদ্ধার করা এক বেঞ্চ সেগুন কাঠ নিয়ে দোকানটা গড়েছিলেন, তাঁর নামেই।",
          hi: "बोगुरा की शेरपुर रोड और पुराने स्टेशन-गली के मोड़ पर खड़ी है बेनाम एक चाय की दुकान। सब बस मधुर चाय कहकर पुकारते हैं — उस आदमी के नाम पर, जिसने 1952 में एक केतली, एक लालटेन और बचाई हुई सागवान की एक बेंच के सहारे दुकान खड़ी की थी।",
        },
        {
          en: "Modhur Mia sold his first cups to bullock-cart drivers carrying jute to the river. He kept a thick ledger, wrapped in polythene on rainy days, in which every unpaid cup was marked with a small tick. \"Debts are weather,\" he liked to say. \"They come and go, but the pot must keep boiling.\"",
          bn: "মধু মিয়ার প্রথম চায়ের ক্রেতা ছিল নদীর দিকে পাট বয়ে নেওয়া গাড়িওয়ালেরা। তিনি রাখতেন মোটা এক খাতা, বৃষ্টির দিনে পলিথিনে মোড়া — যার প্রতিটা অপরিশোধিত কাপের পাশে ছোট্ট একটা টিক। 'ঋণ আসলে আবহাওয়া,' প্রায়ই বলতেন তিনি। 'আসে-যায়, কিন্তু কেটলি ফুটতেই থাকতে হবে।'",
          hi: "मधु मियाँ की पहली चाय के ग्राहक थे नदी की ओर पटसन ढोने वाले ठेला-चालक। वे रखते थे मोटा एक बही-ख़ाता, बारिश के दिनों में पॉलिथीन में लिपटा — जिसमें हर बकाया कप के पास एक छोटा टिक था। 'क़र्ज़ मौसम है,' वे अक्सर कहते। 'आते-जाते रहते हैं, पर केतली उबलती रहनी चाहिए।'",
        },
        {
          en: "The stall passed to his son, then to his grandson Rafiq, and it has watched the town change like a patient witness. The carts vanished; buses arrived; the river trade died and the highway roared awake. Two banks rose opposite the crossing, and students from the nearby college colonised the back bench, arguing about cricket, politics, and whether the tea had gone weaker.",
          bn: "দোকান পৌঁছাল তাঁর ছেলের হাতে, তারপর নাতি রফিকের হাতে, আর ধৈর্যশীল এক সাক্ষীর মতো দেখতে দেখতে বদলে গেল পুরো শহর। গাড়িগুলো হারিয়ে গেল; এল বাস; নদীর বেচাকেনা মরে গেল, আর জেগে উঠল হাইওয়ের গর্জন। মোড়ের ওপাশে উঠল দুই ব্যাংক, আর কাছের কলেজের ছাত্ররা পিছনের বেঞ্চ দখল করে বসল — টক-টক করতে ক্রিকেট, রাজনীতি, আর চায়ের শক্তি কি কমে গেছে তা নিয়ে।",
          hi: "दुकान पहुँची उनके बेटे के हाथ, फिर पोते रफ़ीक़ के हाथ, और एक धैर्यवान गवाह की तरह देखते-देखते पूरा शहर बदल गया। ठेले ग़ायब हुए; आए बसें; नदी का व्यापार मर गया, और हाईवे गरजने लगा। मोड़ के सामने खड़े हुए दो बैंक, और पास के कॉलेज के छात्रों ने पीछे की बेंच कब्ज़ा ली — क्रिकेट, राजनीति और चाय के पतले होने पर झगड़ते हुए।",
        },
        {
          en: "The regulars insist the recipe has not changed, and they may be right. Strong leaf, a thread of lemon peel, cardamom crushed under a thumb, milk boiled twice — the formula has outlived three fuel crises. The kettle has never been replaced, only re-tinned, and the first cup of the day still goes, free, to the sweeper of the crossing, exactly as it did in Modhur Mia's time.",
          bn: "নিয়মিত ক্রেতারা জোর দিয়ে বলেন, রেসিপিটা এক ফোঁটাও বদলায়নি, আর তাঁরা হয়তো ঠিক। জোরালো পাতা, লেবুর খোসার সুতো, আঙুলের থাবায় থেঁতো এলাচ, দু'বার ফোটানো দুধ — ফর্মুলাটা পেরিয়ে গেছে তিনটা জ্বালানি-সংকট। কেটলি কোনোদিন বদলায়নি, শুধু নতুন টিন লাগানো হয়েছে; আর দিনের প্রথম কাপটা আজও ফ্রি যায় মোড়ের মেথরের হাতে — ঠিক যেমন যেত মধু মিয়ার দিনে।",
          hi: "नियमित ग्राहक दृढ़ता से कहते हैं कि रेसिपी में एक बूँद भी नहीं बदली, और शायद वे ठीक हैं। तेज़ पत्ती, नींबू के छिलके का धागा, अँगूठे से कुटा इलायची, दो बार उबला दूध — यह फ़ॉर्मूला तीन ईंधन-संकट पार कर चुका है। केतली कभी नहीं बदली, सिर्फ़ नई टिन चढ़ाई गई; और दिन का पहला कप आज भी मुफ़्त जाता है मोड़ के साफ़-करने वाले के हाथ में — ठीक वैसे ही, जैसे मधु मियाँ के ज़माने में जाता था।",
        },
        {
          en: "Last winter a researcher from Dhaka University arrived with a camera and began photographing the ledger. Rafiq was puzzled until she explained: those small ticks were a folk archive of the town's lean years — the famine of '74, the flood of '88, the strike months — times when half the crossing drank on credit and, mostly, repaid. The university wants the ledger for its history department; Rafiq has promised a photocopy, not the book.",
          bn: "গত শীতে ঢাকা বিশ্ববিদ্যালয়ের এক গবেষক ক্যামেরা নিয়ে এলেন, আর ছবি তুলতে শুরু করলেন সেই খাতার। রফিক হতভম্ব — যতক্ষণ না তিনি ব্যাখ্যা করলেন: ওই ছোট ছোট টিকগুলো আসলে শহরের দুর্দিনের এক জনগানের সংগ্রহশালা — '৭৪-এর দুর্ভিক্ষ, '৮৮-এর বন্যা, হরতালের মাসগুলো — যখন মোড়ের অর্ধেক মানুষ বাকিতে চা খেত, আর বেশিরভাগই শোধও করত। বিশ্ববিদ্যালয় খাতাটা চায় ইতিহাস বিভাগের জন্য; রফিক ফটোকপির ওয়াদা করেছে, খাতার নয়।",
          hi: "पिछली सर्दियों में ढाका विश्वविद्यालय की एक शोधकर्ता कैमरा लेकर आईं, और उसी बही-ख़ाते की तस्वीरें लेने लगीं। रफ़ीक़ हक्का-बक्का रह गया — जब तक उन्होंने समझाया: वे छोटे-छोटे टिक असल में शहर के बुरे दिनों का एक लोक-संग्रह हैं — '74 का अकाल, '88 की बाढ़, हड़ताल के महीने — जब मोड़ का आधा शहर उधार चाय पीता था, और ज़्यादातर चुका भी देता था। विश्वविद्यालय ख़ाता इतिहास विभाग के लिए चाहता है; रफ़ीक़ ने फ़ोटोकॉपी का वादा किया है, ख़ाते का नहीं।",
        },
        {
          en: "\"My grandfather counted trust, not money,\" Rafiq said, and turned back to his kettle. The stall remains, then, with its cracked benches and its kettle of patience. Visit at six in the evening, when the lamps come on and the back bench erupts: a whole town arguing, laughing, steaming — one sweet cup at a time.",
          bn: "'আমার দাদু হিসাব রাখতেন বিশ্বাসের, টাকার নয়,' বলেই রফিক ঘুরে ফিরল তার কেটলির কাছে। দোকানটা তাহলে স্থির — ফাটা বেঞ্চ, ধৈর্যের কেটলি নিয়েই। একবার আসুন সন্ধ্যা ছ'টায়, যখন লণ্ঠন জ্বলে ওঠে, আর পিছনের বেঞ্চ উথলে ওঠে: গোটা শহর তখন তর্ক করছে, হাসছে, ফুটছে — প্রতি মিষ্টি কাপে এক কাপ করে।",
          hi: "'मेरे दादा हिसाब रखते थे भरोसे का, पैसों का नहीं,' रफ़ीक़ ने कहा, और लौट गया अपनी केतली के पास। दुकान फिर अडिग है — फटी बेंचें, और धैर्य की केतली लिए। कभी शाम छह बजे आइए, जब लालटेन जल उठती है, और पीछे की बेंच उबल पड़ती है: पूरा शहर उस समय बहस करता, हँसता, उबलता है — हर मीठे कप के साथ।",
        },
      ],
      vocabulary: [
        {
          word: "salvaged",
          meaning: {
            bn: "উদ্ধার করা — নষ্ট বা ফেলে দেওয়া কিছু থেকে বাঁচিয়ে তোলা",
            en: "saved from loss or destruction",
            hi: "बचाया हुआ — ख़राब या फेंकी गई चीज़ से उबारा हुआ",
          },
          example: "The bench was built from salvaged wood.",
        },
        {
          word: "ledger",
          meaning: {
            bn: "খাতা/বহি — দেনা-পাওনার হিসাব রাখার বই",
            en: "a book for keeping accounts",
            hi: "बही-ख़ाता — हिसाब रखने की किताब",
          },
          example: "Every unpaid cup was marked in the ledger.",
        },
        {
          word: "regulars",
          meaning: {
            bn: "নিয়মিত ক্রেতা — প্রতিদিন যাঁরা একই দোকানে আসেন",
            en: "customers who come every day",
            hi: "नियमित ग्राहक — रोज़ एक ही दुकान पर आने वाले",
          },
          example: "The regulars take the same corner seats.",
        },
        {
          word: "famine",
          meaning: {
            bn: "দুর্ভিক্ষ — খাদ্যের ভীষণ অভাবের কাল",
            en: "a period of extreme food shortage",
            hi: "अकाल — भोजन की अत्यंत कमी का दौर",
          },
          example: "The famine of 1974 is still remembered here.",
        },
        {
          word: "archive",
          meaning: {
            bn: "সংগ্রহশালা — ঐতিহাসিক নথি-ভাণ্ডার",
            en: "a collection of historical records",
            hi: "अभिलेखागार — ऐतिहासिक दस्तावेज़ों का संग्रह",
          },
          example: "The ticks formed a folk archive of hard years.",
        },
        {
          word: "on credit",
          meaning: {
            bn: "বাকিতে — টাকা পরে দেওয়ার শর্তে",
            en: "paying later for something taken now",
            hi: "उधार पर — अभी लेकर पैसे बाद में देना",
          },
          example: "Half the crossing drank tea on credit.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "দোকানটা কে, কবে গড়েছিলেন?",
            en: "Who founded the stall, and when?",
            hi: "दुकान किसने और कब खड़ी की थी?",
          },
          options: [
            { bn: "রফিক, ১৯৮৮ সালে", en: "Rafiq, in 1988", hi: "रफ़ीक़, 1988 में" },
            { bn: "মধু মিয়া, ১৯৫২ সালে", en: "Modhur Mia, in 1952", hi: "मधु मियाँ, 1952 में" },
            { bn: "মধু মিয়ার ছেলে, ১৯৭৪ সালে", en: "Modhur Mia's son, in 1974", hi: "मधु मियाँ के बेटे, 1974 में" },
            { bn: "এক কলেজ-ছাত্র, ১৯৬০ সালে", en: "A college student, in 1960", hi: "एक कॉलेज छात्र, 1960 में" },
          ],
          answer: 1,
          explain: {
            bn: "প্রথম অনুচ্ছেদে লেখা — ১৯৫২ সালে মধু মিয়া দোকানটা গড়েছিলেন।",
            en: "The first paragraph says Modhur Mia founded the stall in 1952.",
            hi: "पहला अनुच्छेद कहता है कि मधु मियाँ ने 1952 में दुकान खड़ी की थी।",
          },
        },
        {
          question: {
            bn: "খাতায় ছোট্ট টিকগুলো কী চিহ্নিত করত?",
            en: "What did the small ticks in the ledger mark?",
            hi: "बही-ख़ाते में छोटे टिक क्या चिह्नित करते थे?",
          },
          options: [
            { bn: "বিক্রি হওয়া চায়ের কাপ", en: "Cups sold in cash", hi: "नक़द बिके चाय के कप" },
            { bn: "অপরিশোধিত কাপ", en: "Unpaid cups", hi: "बकाया कप" },
            { bn: "নতুন ক্রেতার নাম", en: "Names of new customers", hi: "नए ग्राहकों के नाम" },
            { bn: "কেটলি ফোটার সময়", en: "Times the kettle boiled", hi: "केतली उबलने के समय" },
          ],
          answer: 1,
          explain: {
            bn: "দ্বিতীয় অনুচ্ছেদে লেখা — প্রতিটা অপরিশোধিত কাপের পাশে ছোট্ট একটা টিক।",
            en: "The second paragraph says every unpaid cup was marked with a small tick.",
            hi: "दूसरा अनुच्छेद कहता है कि हर बकाया कप के पास एक छोटा टिक लगता था।",
          },
        },
        {
          question: {
            bn: "দিনের প্রথম কাপ আজ কার হাতে যায়?",
            en: "Who receives the first cup of the day today?",
            hi: "आज दिन का पहला कप किसे मिलता है?",
          },
          options: [
            { bn: "সবচেয়ে বয়স্ক ক্রেতা", en: "The oldest customer", hi: "सबसे बुज़ुर्ग ग्राहक" },
            { bn: "কলেজের ছাত্রনেতা", en: "The college student leader", hi: "कॉलेज के छात्र नेता" },
            { bn: "মোড়ের মেথর", en: "The sweeper of the crossing", hi: "मोड़ का साफ़-करने वाला" },
            { bn: "রফিকের বাবা", en: "Rafiq's father", hi: "रफ़ीक़ के पिता" },
          ],
          answer: 2,
          explain: {
            bn: "চতুর্থ অনুচ্ছেদে লেখা — দিনের প্রথম কাপ ফ্রি যায় মোড়ের মেথরের হাতে।",
            en: "The fourth paragraph says the first cup of the day still goes free to the sweeper of the crossing.",
            hi: "चौथा अनुच्छेद कहता है कि दिन का पहला कप आज भी मुफ़्त जाता है मोड़ के साफ़-करने वाले के हाथ में।",
          },
        },
        {
          question: {
            bn: "ঢাকা বিশ্ববিদ্যালয়ের গবেষক খাতায় কী দেখতে পান?",
            en: "What does the Dhaka University researcher see in the ledger?",
            hi: "ढाका विश्वविद्यालय की शोधकर्ता ख़ाते में क्या देखती है?",
          },
          options: [
            { bn: "এক জনগানের সংগ্রহশালা — শহরের দুর্দিনের", en: "A folk archive of the town's lean years", hi: "शहर के बुरे दिनों का एक लोक-संग्रह" },
            { bn: "রফিকের পারিবারিক ফটো", en: "Rafiq's family photos", hi: "रफ़ीक़ की पारिवारिक तस्वीरें" },
            { bn: "চায়ের রেসিপি", en: "The tea recipe", hi: "चाय की रेसिपी" },
            { bn: "ব্যাংকের কাগজপত্র", en: "Bank documents", hi: "बैंक के दस्तावेज़" },
          ],
          answer: 0,
          explain: {
            bn: "পঞ্চম অনুচ্ছেদে লেখা — টিকগুলো আসলে শহরের দুর্দিনের জনগানের সংগ্রহশালা।",
            en: "The fifth paragraph says the ticks are a folk archive of the town's lean years.",
            hi: "पाँचवाँ अनुच्छेद कहता है कि वे टिक शहर के बुरे दिनों का लोक-संग्रह हैं।",
          },
        },
        {
          question: {
            bn: "রফিক কেন খাতাটা হস্তান্তর করতে রাজি নয়?",
            en: "Why will Rafiq not hand over the ledger?",
            hi: "रफ़ीक़ ख़ाता क्यों नहीं सौंपना चाहता?",
          },
          options: [
            { bn: "সেটা এখনও বিক্রির হিসাবে লাগে", en: "It is still used for accounts", hi: "वह अब भी हिसाब के काम आता है" },
            { bn: "দাদু বিশ্বাসের হিসাব রাখতেন, টাকার নয়", en: "His grandfather counted trust, not money", hi: "दादा भरोसे का हिसाब रखते थे, पैसों का नहीं" },
            { bn: "গবেষকেরা বকেয়া টাকা চান", en: "The researcher wants the debts paid", hi: "शोधकर्ता बकाया पैसे माँगती हैं" },
            { bn: "খাতাটা হারানোর ভয়", en: "He is afraid of losing it", hi: "उसे ख़ाता खोने का डर है" },
          ],
          answer: 1,
          explain: {
            bn: "শেষ অনুচ্ছেদে রফিক বলে — 'আমার দাদু হিসাব রাখতেন বিশ্বাসের, টাকার নয়।'",
            en: "In the last paragraph Rafiq says: 'My grandfather counted trust, not money.'",
            hi: "अंतिम अनुच्छेद में रफ़ीक़ कहता है, 'मेरे दादा हिसाब रखते थे भरोसे का, पैसों का नहीं।'",
          },
        },
      ],
    },
  },
];

export default SEED_READING_V2_ADVANCED;
