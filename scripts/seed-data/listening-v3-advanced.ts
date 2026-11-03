// ─── Listening library v3 · ADVANCED — 5 standalone graded stories (D45) ───
// Story paragraphs are ALWAYS English (that is the listening skill); all
// learner-facing meta (title/summary/vocabulary meanings/quiz) is TriText
// (bn primary). Standalone (unit 0) extra practice stories — none are path
// episodes. Each story is self-contained with South-Asian settings, C1
// phrasing (participle clauses, occasional inversion) and 6-8 paragraphs
// totalling ~450-600 English words. Quiz questions may test inference and
// attitude, not only recall.
import type {
  LibraryListeningData,
  LibraryLevel,
  LibraryListeningCategory,
} from "../../src/lib/library-types";

export interface SeedListeningV3Entry {
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit: number; // 0 = standalone
  data: LibraryListeningData;
}

export const SEED_LISTENING_V3_ADVANCED: SeedListeningV3Entry[] = [
  /* ── 1 · work — the midnight release that broke, and the honesty that saved it ── */
  {
    slug: "story3-c1-01",
    level: "advanced",
    category: "work",
    minutes: 5,
    unit: 0,
    data: {
      title: {
        bn: "মিডনাইট রিলিজের পোস্ট-মর্টেম",
        en: "The Midnight Release Post-Mortem",
        hi: "मिडनाइट रिलीज़ का पोस्ट-मॉर्टम",
      },
      summary: {
        bn: "রাত ১২টায় রিলিজ শেষ হতেই ক্লায়েন্টের পেমেন্ট সিস্টেম ভেঙে পড়ে — একটা মিস করা কনফিগ ফ্ল্যাগ, আর রিভিউ-প্রক্রিয়াটাই ছিল দুর্বল। ঢাকার সফটওয়্যার টিম দোষারোপ নয়, রোলব্যাক আর সৎ পোস্ট-মর্টেম বেছে নেয়: জুনিয়র ইঞ্জিনিয়ার রিয়া নিজেই ভুলটা পর্দায় তোলে, প্রতিটা শিক্ষা পায় মালিক আর সময়সীমা। ক্লায়েন্ট চুক্তি নবায়ন করে ঠিক এই সততার জন্য — কারণ যে টিম ভোর একটায় সত্যি বলে, তার দাম টাকায় হয় না।",
        en: "A midnight release breaks a client's payment system — one missed config flag, and a review process that let a single pair of eyes carry a deploy. The Dhaka team chooses rollback and a blameless post-mortem over blame; the junior engineer presents her own error, every finding gets an owner and a date, and the client renews — because a team that tells the truth at 1 a.m. is rare.",
        hi: "आधी रात की रिलीज़ क्लाइंट का पेमेंट सिस्टम तोड़ देती है — एक छूटा कॉन्फ़िग फ़्लैग और कमज़ोर समीक्षा-प्रक्रिया। ढाका की टीम दोषारोपण की बजाय रोलबैक और ईमानदार पोस्ट-मॉर्टम चुनती है; जूनियर इंजीनियर अपनी ग़लती ख़ुद प्रस्तुत करती है, और क्लाइंट ठीक इसी ईमानदारी के लिए ठेका नवीनीकृत करता है।",
      },
      paragraphs: [
        "At 11:58 p.m. the deploy dashboard turned green, and the Dhaka office of Lumenworks briefly allowed itself to celebrate. Payment-Nest, a fintech client in Singapore, had waited four months for this release. Tanvir, the tech lead, closed his laptop the way a surgeon puts down instruments after a long operation. Nobody noticed that a single configuration flag — buried on line four hundred of an environment file — had travelled from staging to production untouched.",
        "The first alert arrived at 12:14. A cascade of failed transactions scrolled up the monitoring channel; refunds were failing too, each retry stamping the log with another crimson line. Rhea, the most junior engineer on rotation, had met this pattern exactly once — in a training video. Her hands shook as she typed the words every on-call engineer dreads: “I think the release broke payments. I may have missed the config review.”",
        "What happened next, Tanvir would later call the most important forty seconds of his career. He did not ask who to blame. “Rollback first, post-mortem after,” he said, and together they reverted the release while Rhea drafted the client note. By 1:05 a.m. Payment-Nest's checkout was breathing again; by 1:30 the client knew, in plain language, what had failed and what had been restored.",
        "Three days later the team gathered — not to hunt a culprit but to hold what they call a blameless post-mortem. Rhea presented it herself. “I missed the flag,” she said, “but the process allowed a single pair of eyes to carry a midnight deploy.” Hindsight, she admitted, was luxurious; at 12:14 it had felt like drowning.",
        "On the whiteboard the timeline grew longer and more honest. The config review had been skipped because the reviewer was on leave and nobody enforced a substitute. The alarm that should have paged two engineers had been muted during the previous release and never re-enabled. Each finding ended in an action item; each action item had an owner and a date. That is what accountability looks like in daylight.",
        "The client's CTO joined the call expecting a defence; instead he received the document unedited, including the sentence “our review gate failed.” Years later he told a conference that this honesty was why Payment-Nest renewed its contract. “Tools I can buy,” he said. “A team that tells me the truth at one in the morning — that is rare.”",
        "Rhea, who once apologised for simply existing in stand-up, now runs a release checklist that carries her initials. The team still jokes about the midnight that went wrong, but the joke has no teeth. Mistakes, they learned, are inevitable; burying them is optional. Had anyone chosen a scapegoat that week, the truth would have gone underground — and the next failure would have found them unprepared.",
      ],
      vocabulary: [
        {
          word: "post-mortem",
          meaning: {
            bn: "ঘটনার পরে করা গভীর বিশ্লেষণ — কী ঘটেছিল, কেন ঘটেছিল; যেমন পরীক্ষা শেষে খাতা মিলিয়ে দেখা কোথায় ভুল হলো",
            en: "a detailed review held after an event to find out what went wrong and why",
            hi: "किसी घटना के बाद की गहन समीक्षा — क्या ग़लत हुआ और क्यों हुआ",
          },
          example: "Three days after the failure, the team held a blameless post-mortem.",
        },
        {
          word: "rollback",
          meaning: {
            bn: "সিস্টেমকে আগের ভালো অবস্থায় ফিরিয়ে আনা — যেমন ভুল চাল খেয়ে ঘুঁটি পিছিয়ে নেওয়া",
            en: "returning software to its previous working version after a failure",
            hi: "ख़राबी के बाद सॉफ़्टवेयर को पिछली सही स्थिति में लौटा देना",
          },
          example: "“Rollback first, post-mortem after,” Tanvir said, and they restored the old version.",
        },
        {
          word: "cascade",
          meaning: {
            bn: "একটার পর একটা বাড়তে থাকা বিপর্যয় — প্রথম কার্ডটা ধাক্কা খেয়ে পড়লে সারি ধরে আরও কার্ড পড়ে যাওয়ার মতো",
            en: "a chain of failures in which one problem triggers the next",
            hi: "एक के बाद एक चलती विफलताओं की श्रृंखला",
          },
          example: "A cascade of failed transactions scrolled up the monitoring channel.",
        },
        {
          word: "hindsight",
          meaning: {
            bn: "ঘটে যাওয়ার পরে স্পষ্ট দৃষ্টি — 'তখন তো বুঝলাম' বলার বোধ",
            en: "the clear understanding of an event that comes only after it has happened",
            hi: "घटना के बाद साफ़ दिखने वाली समझ",
          },
          example: "Hindsight, she admitted, was luxurious; at 12:14 it had felt like drowning.",
        },
        {
          word: "accountability",
          meaning: {
            bn: "নিজের কাজের দায় নিজে নেওয়া — ফাঁকি নয়, 'এটা আমার, আমিই ঠিক করব' বলা",
            en: "taking responsibility for one's own actions and their results",
            hi: "अपने काम और उसके नतीजों की ज़िम्मेदारी लेना",
          },
          example: "Accountability meant an owner and a date beside every finding on the whiteboard.",
        },
        {
          word: "scapegoat",
          meaning: {
            bn: "সবার ভুলের বোঝা একজনের ঘাড়ে চাপানো ব্যক্তি — যেমন হারা ম্যাচের পর দল শুধু গোলরক্ষককে দোষ দেয়",
            en: "a person made to take the blame for mistakes that were not only theirs",
            hi: "दूसरों की ग़लतियों का ठीकरा झेलने वाला व्यक्ति",
          },
          example: "Had anyone chosen a scapegoat that week, the truth would have gone underground.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "Payment-Nest-এর চেকআউট কখন আবার চলতে শুরু করে?",
            en: "When did Payment-Nest's checkout start working again?",
            hi: "Payment-Nest का चेकआउट कब दोबारा चलने लगा?",
          },
          options: [
            { bn: "রাত ১২:১৪টায়", en: "At 12:14 a.m.", hi: "रात 12:14 बजे" },
            { bn: "রাত ১১:৫৮টায়", en: "At 11:58 p.m.", hi: "रात 11:58 बजे" },
            { bn: "ভোর ১:০৫টায়", en: "At 1:05 a.m.", hi: "रात 1:05 बजे" },
            { bn: "পরদিন সকালে", en: "The next morning", hi: "अगली सुबह" },
          ],
          answer: 2,
          explain: {
            bn: "রোলব্যাক শেষ হয়ে ভোর ১:০৫টায় চেকআউট আবার চলে; ১:৩০টায় ক্লায়েন্ট পুরো ব্যাপারটা জানে।",
            en: "The rollback finished and the checkout was breathing again by 1:05 a.m.; by 1:30 the client knew everything.",
            hi: "रोलबैक पूरा होकर रात 1:05 तक चेकआउट फिर चलने लगा; 1:30 तक क्लाइंट को सब बता दिया गया।",
          },
        },
        {
          question: {
            bn: "টানভীরের প্রথম নির্দেশ — 'আগে রোলব্যাক, পোস্ট-মর্টেম পরে' — তার নেতৃত্ব সম্পর্কে কী বলে?",
            en: "What does Tanvir's first instruction — 'Rollback first, post-mortem after' — reveal about his leadership?",
            hi: "टनवीर का पहला आदेश — 'पहले रोलबैक, बाद में पोस्ट-मॉर्टम' — उनकी नेतृत्व-शैली के बारे में क्या बताता है?",
          },
          options: [
            { bn: "আগে সেবা ফিরিয়ে আনা, দোষ খোঁজা পরে", en: "Restore the service first; finding fault comes later", hi: "पहले सेवा बहाल करो; दोष खोजना बाद में" },
            { bn: "রিয়াকে দ্রুত দোষী সাব্যস্ত করা", en: "Rush to blame Rhea", hi: "जल्दी में रिया को दोषी ठहराना" },
            { bn: "ক্লায়েন্টকে সব চুপচাপ রাখা", en: "Keep the client in the dark", hi: "क्लाइंट को अनजान रखना" },
            { bn: "রিলিজ আদৌ করা উচিত হয়নি মনে করা", en: "Believing the release should never have happened", hi: "मानना कि रिलीज़ होनी ही नहीं चाहिए थी" },
          ],
          answer: 0,
          explain: {
            bn: "তিনি কাউকে দোষ দিতে যাননি; প্রথমে সিস্টেম ঠিক করা, তারপর বিশ্লেষণ — এটাই তার অগ্রাধিকার।",
            en: "He never asked who to blame: restore first, analyse afterwards — that ordering is the leadership lesson.",
            hi: "वह किसी को दोष देने नहीं गए: पहले सुधार, फिर विश्लेषण — यही उनकी प्राथमिकता थी।",
          },
        },
        {
          question: {
            bn: "ক্লায়েন্টের CTO সততাকে 'বিরল' বলছেন কেন?",
            en: "Why does the client's CTO call the team's honesty rare?",
            hi: "क्लाइंट का CTO टीम की ईमानदारी को 'दुर्लभ' क्यों कहता है?",
          },
          options: [
            { bn: "কারণ রিলিজটা বিনামূল্যে হয়েছিল", en: "Because the release was free", hi: "क्योंकि रिलीज़ मुफ़्त थी" },
            { bn: "কারণ পোস্ট-মর্টেমে কোনো ভুল ধরা পড়েনি", en: "Because the post-mortem found no errors", hi: "क्योंकि पोस्ट-मॉर्टम में कोई ग़लती नहीं मिली" },
            { bn: "কারণ ইঞ্জিনিয়াররা রাতে কাজ করে না", en: "Because engineers never work at night", hi: "क्योंकि इंजीनियर रात में काम नहीं करते" },
            { bn: "সরঞ্জাম টাকায় কেনা যায়, কিন্তু ভোর একটায় সত্যি বলা টিম কেনার জিনিস নয়", en: "Tools can be bought; a team that tells the truth at 1 a.m. is not for sale", hi: "उपकरण ख़रीदे जा सकते हैं, पर रात 1 बजे सच बोलने वाली टीम बिकने वाली चीज़ नहीं" },
          ],
          answer: 3,
          explain: {
            bn: "তার ভাষায়: 'টুলস আমি কিনতে পারি; একটা টিম যে ভোর একটায় আমাকে সত্যি বলে — সেটা বিরল।'",
            en: "In his words: “Tools I can buy. A team that tells me the truth at one in the morning — that is rare.”",
            hi: "उनके शब्दों में: “उपकरण मैं ख़रीद सकता हूँ। रात एक बजे सच बोलने वाली टीम — वह दुर्लभ है।”",
          },
        },
        {
          question: {
            bn: "পোস্ট-মর্টেমে অ্যালার্ম নিয়ে কী ধরা পড়ল?",
            en: "What did the post-mortem reveal about the alarm?",
            hi: "पोस्ट-मॉर्टम में अलार्म के बारे में क्या पता चला?",
          },
          options: [
            { bn: "অ্যালার্মের হার্ডওয়্যারই ছিল না", en: "The alarm hardware was missing", hi: "अलार्म का हार्डवेयर ही ग़ायब था" },
            { bn: "আগের রিলিজের সময় মিউট করা হয়েছিল, আর কখনো চালু করা হয়নি", en: "It had been muted during the previous release and never re-enabled", hi: "पिछली रिलीज़ के समय म्यूट किया गया था और फिर कभी चालू नहीं हुआ" },
            { bn: "দুজনের বদলে চার ইঞ্জিনিয়ারকে কল করত", en: "It paged four engineers instead of two", hi: "यह दो की जगह चार इंजीनियरों को कॉल करता" },
            { bn: "আওয়াজ এত তেজ ছিল যে ভয় লাগত", en: "It was set too loud", hi: "इसकी आवाज़ बहुत तेज़ थी" },
          ],
          answer: 1,
          explain: {
            bn: "আগের রিলিজের সময় অ্যালার্ম মিউট করা হয়েছিল আর আর চালু করা হয়নি — এজন্যই দুজন ইঞ্জিনিয়ার জাগেনি।",
            en: "The alarm had been muted during the previous release and never re-enabled — which is why two engineers slept through the failure.",
            hi: "पिछली रिलीज़ में अलार्म म्यूट हो गया था और दोबारा चालू नहीं हुआ — इसीलिए दो इंजीनियर सोते रह गए।",
          },
        },
      ],
    },
  },

  /* ── 2 · culture — an ageing jatra director's final curtain call ── */
  {
    slug: "story3-c1-02",
    level: "advanced",
    category: "culture",
    minutes: 5,
    unit: 0,
    data: {
      title: {
        bn: "শেষ যাত্রা, শেষ মঞ্চ",
        en: "The Last Journey, the Last Stage",
        hi: "आख़िरी सफ़र, आख़िरी मंच",
      },
      summary: {
        bn: "নদীর ধারে খোলা মঞ্চে যাত্রা এখন বিরল; আশি বছরের নির্দেশক হারুন বসু জানেন তার দলের শেষ খেলাটা কবে। ১৯৬৩ সালে শিক্ষকের শেখানো মাছ-রানীর খেলা, মাঝরাত পেরোনো দর্শক-তর্ক, গানে জবাব দেওয়া হেকলার — আর এক কিশোরী আন্ডারস্টাডি, যে সব দেখছে। শেষ কার্টেন কলে বুড়ো মানুষটা নিজে না ঝুঁকে মেয়েটাকে সামনে ঠেলে দেন; পরের শীতে সেই পুকুরপাড়েই মিতালির নিজের দল মহড়া দিচ্ছে।",
        en: "Open-air jatra is fading, and eighty-year-old director Harun Bose knows exactly when his company's last play will be. The fisher-queen myth his own teacher taught him in 1963, sung arguments running past midnight, a heckler answered in song — and a teenage understudy watching everything. At the final curtain call he pushes the girl forward instead of bowing; next winter, her own troupe rehearses by the same pond.",
        hi: "खुले मंच की जात्रा अब लुप्त हो रही है, और अस्सी वर्षीय निर्देशक हारुन बोस जानते हैं कि उनकी टोली का अंतिम खेल कब होगा। 1963 में गुरु ने जो मछुआरा-रानी की कथा सिखाई थी, वही अंतिम प्रस्तुति है — और एक किशोरी अंडरस्टडी सब देख रही है। आख़िरी कर्टेन कॉल पर वे झुकने की बजाय उस लड़की को आगे खड़ा कर देते हैं; अगली सर्दियों में उसी तालाब के पास उसकी अपनी टोली रिहर्सल करती है।",
      },
      paragraphs: [
        "In Naldanga, the bamboo stage had not seen a full house since the year the new bridge opened. Jatra — the open-air folk theatre that once turned village ponds into royal courts and midnight into history — was dwindling, crowded out by phone screens and diesel-lit fairs. Harun Bose, eighty, had directed plays on this ground for six decades; his voice, once famous for carrying across three fields without a microphone, now needed a rest between sentences.",
        "He announced the company's last performance himself, pasting the notice on the banyan tree where posters had been shared for generations. The repertoire he chose was the play his own teacher had taught him in 1963 — a myth of a fisher-queen who argues with the river itself. “If the form must sleep,” he told the troupe, “let it sleep after a proper farewell, not after an illness nobody named.”",
        "Rehearsals began at dusk, when the fields cooled and the drums could hear themselves. The youngest member, seventeen-year-old Mitali, had never held a jatra script; she was an understudy who sang the choruses and watched everything. Harun taught her the old discipline — no cut in a performance, however long the night, because villagers walk miles and deserve the whole journey. Between scenes he improvised new verses about local rivers and new bridges, as jatra has always done, folding the present into the myth.",
        "On the night of the show, four hundred people came — old men on cots, children on shoulders, one busload from a neighbouring district that had read about the farewell online. The khel, that swift exchange of sung argument between actor and audience, ran past midnight. When a heckler shouted that theatre was dying, Harun answered in song, his old voice steady over the drums: “Rivers dwindle in winter too, yet nobody calls them dead.”",
        "It was three in the morning when the fisher-queen made her final argument with the river, and the crowd, holding oil lamps, answered the last line together, like a congregation at prayer. At the curtain call Harun did not bow first; he pushed Mitali forward — an old director's gesture that weighed more than any speech. Then he stood aside and let the youngest take the centre as the lamps were dimmed one by one.",
        "Harun Bose died the following spring, much of his repertoire otherwise unrecorded. But next winter a new troupe rehearsed by the same pond, Mitali directing and thirty schoolchildren in the chorus. The benches were not full yet; the form may never fill them again. Yet on that stage improvised verses about new bridges and new floods rose over old drumbeats — proof that what is shared live, among people who answer back, refuses to disappear.",
      ],
      vocabulary: [
        {
          word: "repertoire",
          meaning: {
            bn: "কোনো শিল্পী বা দলের আয়ত্ত করা পুরো সংগ্রহ — যেমন এক গায়কের মুখস্থ গানের তালিকা",
            en: "all the plays or songs an artist or company knows and can perform",
            hi: "किसी कलाकार या दल का समूचा तैयार संग्रह",
          },
          example: "The repertoire he chose was the play his own teacher had taught him in 1963.",
        },
        {
          word: "dwindle",
          meaning: {
            bn: "ক্রমে কমে যাওয়া, শুকিয়ে যাওয়া — যেমন শীতে কমে যাওয়া নদীর জল",
            en: "to become gradually fewer, smaller, or weaker",
            hi: "धीरे-धीरे घटना या सिमटना",
          },
          example: "Jatra was dwindling, crowded out by phone screens and diesel-lit fairs.",
        },
        {
          word: "improvise",
          meaning: {
            bn: "প্রস্তুতি ছাড়াই মুহূর্তে বানিয়ে ফেলা — যেমন বাদ্য হারিয়ে হাততালিতে সুর মেলানো",
            en: "to create or perform something on the spot, without preparation",
            hi: "बिना तैयारी के तुरंत कुछ रचना या प्रस्तुत करना",
          },
          example: "Between scenes he improvised new verses about local rivers and new bridges.",
        },
        {
          word: "understudy",
          meaning: {
            bn: "মূল অভিনেতার অনুপস্থিতিতে ভূমিকায় নামার জন্য প্রস্তুত বিকল্প অভিনেতা — মঞ্চের পেছনে চুপচাপ শেখা মানুষ",
            en: "an actor who learns a main role so they can perform it if needed",
            hi: "मुख्य कलाकार की जगह लेने के लिए तैयार रहने वाला अभिनेता",
          },
          example: "She was an understudy who sang the choruses and watched everything.",
        },
        {
          word: "heckler",
          meaning: {
            bn: "দর্শক-সারিতে বসে ঠাট্টা বা বিরক্তিকর চিৎকার করে পারফর্মারকে ঘায়েল করতে চাওয়া মানুষ",
            en: "a person who shouts rude or mocking comments at a performer",
            hi: "प्रदर्शन के बीच चिढ़ाने वाली चीखें मारने वाला व्यक्ति",
          },
          example: "When a heckler shouted that theatre was dying, Harun answered in song.",
        },
        {
          word: "congregation",
          meaning: {
            bn: "উপাসনায় একসঙ্গে দাঁড়ানো ভক্তের সমাবেশ; এখানে — এক স্বরে জবাব দেওয়া দর্শকভিড়",
            en: "a gathering of worshippers; here, a crowd responding as one voice",
            hi: "पूजा में एकत्र भक्तों का समूह; यहाँ — एक साथ जवाब देती भीड़",
          },
          example: "The crowd answered the last line together, like a congregation at prayer.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "শেষ পারফরম্যান্সের জন্য হারুন বসু কোন নাটক বেছে নেন?",
            en: "Which play did Harun Bose choose for the final performance?",
            hi: "अंतिम प्रस्तुति के लिए हारुन बोस ने कौन-सा नाटक चुना?",
          },
          options: [
            { bn: "একদম নতুন লেখা একটা নাটক", en: "A brand-new script", hi: "एकदम नया लिखा नाटक" },
            { bn: "১৯৬৩ সালে শিক্ষকের শেখানো নাটক — নদীর সঙ্গে তর্কে নামা মাছ-রানী", en: "The play his teacher taught him in 1963 — the fisher-queen who argues with the river", hi: "1963 में गुरु द्वारा सिखाया नाटक — नदी से बहस करने वाली मछुआरा-रानी" },
            { bn: "একটা জনপ্রিয় চলচ্চিত্রের মঞ্চসংস্করণ", en: "A stage version of a popular film", hi: "एक लोकप्रिय फ़िल्म का मंच रूपांतरण" },
            { bn: "কোনো নাটক নয়, শুধু গানের অনুষ্ঠান", en: "No play, only a concert of songs", hi: "कोई नाटक नहीं, सिर्फ़ गानों का कार्यक्रम" },
          ],
          answer: 1,
          explain: {
            bn: "তিনি নিজের শিক্ষকের শেখানো ১৯৬৩-র খেলাটাই বেছে নেন — মাছ-রানী নদীর সঙ্গে যুক্তিতে নামে।",
            en: "He chose the play his own teacher had taught him in 1963 — the myth of the fisher-queen who argues with the river.",
            hi: "उन्होंने वही नाटक चुना जो 1963 में उनके गुरु ने सिखाया था — नदी से बहस करने वाली मछुआरा-रानी की कथा।",
          },
        },
        {
          question: {
            bn: "'নিজের নাম না করা অসুখে নয়, সঠিক বিদায়ের পরে ঘুমাও' — হারুন কেন এমন বলেন?",
            en: "Why does Harun say the form should sleep 'after a proper farewell, not after an illness nobody named'?",
            hi: "हारुन यह क्यों कहते हैं कि कला को 'बेनाम बीमारी से नहीं, ठीक विदाई के बाद' सोना चाहिए?",
          },
          options: [
            { bn: "যাত্রারা মঞ্চে দেরি করে আসে", en: "The actors arrive late to the stage", hi: "कलाकार मंच पर देर से आते हैं" },
            { bn: "টিকিটের দাম আরও কমাতে চান", en: "He wants to lower ticket prices further", hi: "वह टिकट की क़ीमत और घटाना चाहते हैं" },
            { bn: "বাঁশের মঞ্চটা দুর্বল হয়ে গেছে", en: "The bamboo stage has become weak", hi: "बाँस का मंच कमज़ोर हो गया है" },
            { bn: "যাত্রার মৃত্যু চুপচাপ নয়, স্বীকৃত বিদায়ের মাধ্যমে হোক — শিল্পরূপটাকে সম্মান জানিয়ে", en: "Jatra's ending should be an acknowledged farewell, not a silent unnamed decline — out of respect for the art form", hi: "जात्रा का अंत चुपचाप नहीं, पहचाने हुए विदाई के साथ हो — कला के सम्मान में" },
          ],
          answer: 3,
          explain: {
            bn: "তিনি চান না যাত্রা নাম-না-জানা অসুখে হারিয়ে যাক; একটা স্বীকৃত, সম্মানজনক বিদায়ই তার কাম্য।",
            en: "He refuses to let jatra fade unnamed; he wants an acknowledged, dignified farewell instead.",
            hi: "वह नहीं चाहते कि जात्रा बिना नाम की बीमारी की तरह ग़ायब हो; वे सम्मानजनक विदाई चाहते हैं।",
          },
        },
        {
          question: {
            bn: "শেষ খেলার আগে মিতালির ভূমিকা কী ছিল?",
            en: "What was Mitali's role before the final show?",
            hi: "अंतिम शो से पहले मिताली की भूमिका क्या थी?",
          },
          options: [
            { bn: "আন্ডারস্টাডি — কোরাস গাইতেন আর সব দেখে শুধুতেন", en: "She was the understudy, singing the choruses and watching everything", hi: "वह अंडरस्टडी थी, कोरस गाती और सब कुछ देखती" },
            { bn: "টিকিট বিক্রি করতেন", en: "She sold tickets at the gate", hi: "वह गेट पर टिकट बेचती थी" },
            { bn: "মূল নায়িকার অভিনয় করতেন", en: "She played the lead queen", hi: "वह मुख्य रानी का अभिनय करती थी" },
            { bn: "দর্শকদের চা পরোসতেন", en: "She served tea to the audience", hi: "वह दर्शकों को चाय परोसती थी" },
          ],
          answer: 0,
          explain: {
            bn: "সতেরো বছরের মিতালি আগে কোনো যাত্রার স্ক্রিপ্ট ধরেনি; সে কোরাস গাইত আর সব দেখে শিখত।",
            en: "Seventeen-year-old Mitali had never held a jatra script; she sang the choruses and learned by watching.",
            hi: "सत्रह वर्षीय मिताली ने कभी जात्रा की पटकथा नहीं पकड़ी थी; वह कोरस गाती और देखकर सीखती थी।",
          },
        },
        {
          question: {
            bn: "পরের শীতে মিতালির নিজের দল সেই পুকুরপাড়ে মহড়া দিচ্ছে — এ থেকে কী বোঝা যায়?",
            en: "What does it mean that Mitali's own troupe rehearses by the same pond next winter?",
            hi: "अगली सर्दियों में मिताली की अपनी टोली उसी तालाब के पास रिहर्सल कर रही है — इससे क्या संकेत मिलता है?",
          },
          options: [
            { bn: "যাত্রা সম্পূর্ণ মরে গেছে", en: "Jatra has completely died", hi: "जात्रा पूरी तरह ख़त्म हो गई" },
            { bn: "এখন শো কেবল পর্যটকদের জন্য", en: "Shows are now only for tourists", hi: "अब शो सिर्फ़ पर्यटकों के लिए हैं" },
            { bn: "প্রাণবন্ত ঐতিহ্য উত্তরসূরি পেয়েছে — যা সরাসরি শেয়ার হয়, তা অদৃশ্য হতে চায় না", en: "The living tradition found a successor; what is shared live refuses to disappear", hi: "जीवंत परंपरा को उत्तराधिकारी मिला; साझा की गई कला मिटना नहीं चाहती" },
            { bn: "হারুন বসু নাকি এখনো বেঁচে আছেন", en: "Harun Bose is secretly still alive", hi: "हारुन बोस असल में अभी ज़िंदा हैं" },
          ],
          answer: 2,
          explain: {
            bn: "বেঞ্চ ভরেনি, কিন্তু নতুন কণ্ঠে নতুন পাল্লা পুরনো ঢোলে উঠছে — সরাসরি ভাগ হওয়া শিল্প উত্তরসূরি চায়, এবং পেল।",
            en: "The benches are not full, but new verses rise over old drumbeats — the live tradition found, and trained, its successor.",
            hi: "बेंच भरी नहीं, पर पुराने ढोल पर नए पद उठ रहे हैं — जीवंत परंपरा को उत्तराधिकारी मिल गया।",
          },
        },
      ],
    },
  },

  /* ── 3 · science — avulsion: a geographer's field diary on rivers that jump course ── */
  {
    slug: "story3-c1-03",
    level: "advanced",
    category: "science",
    minutes: 5,
    unit: 0,
    data: {
      title: {
        bn: "যে নদী পথ বদলায়",
        en: "The River That Changes Its Path",
        hi: "जो नदी रास्ता बदलती है",
      },
      summary: {
        bn: "ভূগোলবিদ নাদিয়া হকের মাঠ-ডায়েরি: প্রতি বর্ষায় পলি জমিয়ে নদী নিজের বিছানা উঁচু করে ফেলে, তারপর এক বন্যায় এক রাতেই গতিপথ বদলে নেয় — একে বলে avulsion। নতুন গতিপথের গ্রাম স্কুল হারায়, মরা শাখার গ্রাম নদী হারায়; মানচিত্র পুরনো, নদী মানচিত্র পড়ে না। প্লিন্থ উঁচু করা, ছাদে বীজব্যাংক, কোনাকুনি হাট — বদ্বীপে বেঁচে থাকা মানে বদলের হিসাব করে বাঁচা।",
        en: "A geographer's field diary: every monsoon, sediment raises a delta river's bed until one flood makes it jump course overnight — avulsion. The village on the new channel loses its school; the village on the abandoned channel loses its river. Maps lag behind, and rivers never read them. Raised plinths, rooftop seed banks, a market that moves with the shoreline: living in a delta means building while expecting change.",
        hi: "एक भूगोलविद् की फ़ील्ड डायरी: हर मानसून में तलछट नदी का तल ऊँचा करती है, और एक बाढ़ में नदी एक ही रात में मार्ग बदल लेती है — अवल्शन। नए रास्ते पर बसा गाँव अपना स्कूल खोता है, छूटे चैनल वाला गाँव अपनी नदी। नक्शे पिछड़ जाते हैं; डेल्टा में जीने का मतलब है — बदलाव की उम्मीद के साथ बसना।",
      },
      paragraphs: [
        "Field diary, 12 August. The boat left at first light, and by eight we were standing on what the map politely calls the old channel — bone-dry, planted with mustard, children using its sandbars as cricket pitches. Rivers in a delta do not simply flow; they wander, and every few decades one of them abandons its bed overnight. Geographers call the jump avulsion, and a side-channel of the Jamuna chose a moonless night last September to perform it, without asking either district.",
        "The mechanics are almost insultingly simple. Each monsoon the river lays down sediment — sand and silt — on its own bed, raising the floor millimetre by millimetre, the way a carpet quietly thickens under years of footsteps. A meander sharpens until the banks thin to a ribbon of clay. Then one exceptional flood finds a shortcut across a low mustard field, and gravity, patient for years, does the rest. By morning the main current runs through somebody's pumpkin patch, and the old bed wakes up as dry land.",
        "Diary, 13 August. Char Mollarpara, on the new course, gained a river and lost a school. The water took the building itself, leaving the flagpole standing in midstream like a question mark. Villagers showed me aerial photographs from ten years ago: their homes were farmland then, and the river ran a kilometre east. Erosion on the outer bank had been eating metres each season while the inner side quietly gathered new land — a ledger nobody signed but everybody keeps.",
        "Diary, 15 August. Downstream, Kamarjani tells the opposite story. The river left, and the abandoned channel is silting into a beel — stagnant in the dry months, fishless, smelling of weed. Boats now park on grass; cattle walk where the ferry used to cut its wake. The village has water poverty beside a river-shaped memory. “We did not move from the river,” the old ferryman told me, straightening his lungi. “The river moved from us.”",
        "Government maps still show the old alignment; the river, characteristically, has never read a map. What struck me most was the community's own vocabulary — people speak of the river as a tenant who broke no law, only the lease of centuries. Their adaptation is unglamorous and exact: homestead plinths raised a metre, seed banks kept on rooftops, land deeds guarded in tin boxes, a weekly market that relocates with the shoreline. Nobody here expects the state to arrive in time.",
        "Diary, 20 August. On my last evening an old woman walked me to the new bank and pointed at the current with her winnowing fan. “The river is not cruel,” she said. “It is only doing what rivers do.” Prediction is our best mitigation — satellite models now flag avulsion-prone reaches years ahead, and the ward office has finally pinned both maps side by side. But resilience here looks less like engineering and more like humility: building on the quiet assumption that the ground beneath you is a loan, not a gift.",
      ],
      vocabulary: [
        {
          word: "avulsion",
          meaning: {
            bn: "নদীর হঠাৎ গতিপথ পরিবর্তন — এক রাতেই নদী পুরনো বিছানা ছেড়ে নতুন পথ নেয়",
            en: "the sudden change of a river's course to a new channel",
            hi: "नदी का अचानक मार्ग बदल देना",
          },
          example: "Geographers call the sudden jump of a river to a new channel avulsion.",
        },
        {
          word: "sediment",
          meaning: {
            bn: "পানিতে ভেসে এসে জমা হওয়া বালু-পলি — যেমন চায়ের পাত্রের তলানি",
            en: "sand and silt carried by water and left settled on its bed",
            hi: "पानी से बहकर जमा हुई रेत और गाद",
          },
          example: "Each monsoon the river lays down sediment, raising its own bed millimetre by millimetre.",
        },
        {
          word: "meander",
          meaning: {
            bn: "আঁকাবাঁকা গতিতে বয়ে চলা; সাপের মতো বাঁকা নদীর বাঁক",
            en: "a sharp winding bend in a river; to wind slowly along",
            hi: "नदी का साँप की तरह बल खाता मोड़",
          },
          example: "A meander sharpens until the banks thin to a ribbon of clay.",
        },
        {
          word: "erosion",
          meaning: {
            bn: "স্রোতে কিনারা ক্ষয়ে যাওয়া — ধীরে ধীরে মাটি খেয়ে ফেলা",
            en: "the gradual wearing away of land by water or wind",
            hi: "बहाव से किनारे की धीरे-धीरे कटान",
          },
          example: "Erosion on the outer bank had been eating metres of land each season.",
        },
        {
          word: "mitigation",
          meaning: {
            bn: "ক্ষতি কমানোর ব্যবস্থা — দুর্যোগ আটকানো না পারলেও তার আঘাত নরম করা",
            en: "actions taken to reduce the harm of something bad",
            hi: "नुक़सान घटाने के उपाय",
          },
          example: "Prediction is our best mitigation — models now flag avulsion-prone reaches years ahead.",
        },
        {
          word: "resilience",
          meaning: {
            bn: "আঘাতের পরে মুখরিত হয়ে আবার উঠে দাঁড়ানোর ক্ষমতা — ব্যক্তিরও, গ্রামেরও",
            en: "the ability to recover and keep going after shocks or disasters",
            hi: "सदमे या आपदा के बाद फिर उठ खड़े होने की क्षमता",
          },
          example: "Resilience here looks less like engineering and more like humility.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "কামারজানির ফেরিওয়ালার 'নদী আমাদের থেকে চলে গেছে' কথাটি কী বোঝায়?",
            en: "What does the Kamarjani ferryman's line 'The river moved from us' convey?",
            hi: "कमरजानी के माल्लाह की पंक्ति 'नदी हमसे चली गई' क्या दर्शाती है?",
          },
          options: [
            { bn: "গ্রামটি উঠে গিয়েছিল", en: "The village was relocated", hi: "गाँव खाली कर दिया गया" },
            { bn: "নদী পুরোপুরি শুকিয়ে গেছে", en: "The river dried up completely", hi: "नदी पूरी तरह सूख गई" },
            { bn: "সরকারি মানচিত্র ভুল ছিল", en: "The government map was wrong", hi: "सरकारी नक्शा ग़लत था" },
            { bn: "গ্রাম তার জায়গায়ই ছিল, কিন্তু নদীর প্রবাহ পথ বদলে দূরে চলে গেছে", en: "The village stayed put while the current changed course and moved away", hi: "गाँव वहीं रहा, पर नदी की धारा मार्ग बदलकर दूर चली गई" },
          ],
          answer: 3,
          explain: {
            bn: "গ্রাম স্থান বদলায়নি; নদী গতিপথ বদলে চলে গেছে — তাই বলা 'নদী আমাদের থেকে চলে গেছে'।",
            en: "The village never moved; the river's course did — hence the inversion of the usual complaint.",
            hi: "गाँव कहीं नहीं गया; नदी का मार्ग बदल गया — इसीलिए यह उलटी बात कही गई।",
          },
        },
        {
          question: {
            bn: "নদী কেন হঠাৎ পথ বদলে ফেলে?",
            en: "Why does the river suddenly jump to a new course?",
            hi: "नदी अचानक नया रास्ता क्यों अपना लेती है?",
          },
          options: [
            { bn: "বাঁধ ভেঙে যাওয়ায়", en: "Because a dam breaks", hi: "बाँध टूटने से" },
            { bn: "পলি জমে নদীর তলা উঁচু হয়ে পড়ে; এক বড় বন্যায় জল নিচু মাঠের শর্টকাট ধরে", en: "Sediment raises the river bed until a great flood takes a shortcut across low fields", hi: "तलछट से नदी का तल ऊँचा हो जाता है; बड़ी बाढ़ में पानी निचले खेतों से शॉर्टकट ले लेता है" },
            { bn: "মাছ ধরার নৌকা বেশি হয়ে যাওয়ায়", en: "Because there are too many fishing boats", hi: "बहुत ज़्यादा मछुआरे नावों की वजह से" },
            { bn: "জলবায়ু পরিবর্তনে জল কমে যাওয়ায়", en: "Because climate change reduces the water", hi: "जलवायु परिवर्तन से पानी कम होने से" },
          ],
          answer: 1,
          explain: {
            bn: "প্রতি বর্ষায় পলি তলা উঁচু করে; এক ব্যতিক্রমী বন্যায় জল নিচু মাঠে শর্টকাট নেয়, মাধ্যাকর্ষণ বাকিটা সারায়।",
            en: "Sediment raises the bed each monsoon; one exceptional flood finds a shortcut, and gravity does the rest.",
            hi: "हर मानसून में तलछट तल ऊँचा करती है; एक बड़ी बाढ़ शॉर्टकट ढूँढ़ लेती है, और गुरुत्वाकर्षण बाकी कर देता है।",
          },
        },
        {
          question: {
            bn: "চর মোল্লারপাড়ায় নদীর পথ বদলানোর পর কী হলো?",
            en: "What happened at Char Mollarpara when the river changed course?",
            hi: "नदी के मार्ग बदलने पर चर मोल्लापाड़ा में क्या हुआ?",
          },
          options: [
            { bn: "মাছ ধরা নিষিদ্ধ হলো", en: "Fishing was banned", hi: "मछली पकड़ना प्रतिबंधित हो गया" },
            { bn: "মানচিত্র সঙ্গে সঙ্গে বদলে ফেলা হলো", en: "The maps were redrawn immediately", hi: "नक्शे तुरंत बदल दिए गए" },
            { bn: "গ্রামে নদী এসেছে, কিন্তু স্কুলটা পানি নিয়ে গেছে", en: "The village gained the river but lost its school to the water", hi: "गाँव को नदी मिली, पर स्कूल पानी में चला गया" },
            { bn: "নদী আবার পুরনো পথে ফিরে এলো", en: "The river soon returned to its old course", hi: "नदी फिर पुराने रास्ते पर लौट आई" },
          ],
          answer: 2,
          explain: {
            bn: "নতুন গতিপথে গ্রাম নদী পেল, কিন্তু স্কুলভবন পানি নিয়ে যায় — মাঝস্রোতে শুধু দণ্ড দাঁড়িয়ে থাকে।",
            en: "The village gained a river and lost a school; only the flagpole remained standing in midstream.",
            hi: "गाँव को नदी मिली पर स्कूल डूब गया; मध्य-धारा में सिर्फ़ ध्वज-दंड खड़ा रह गया।",
          },
        },
        {
          question: {
            bn: "'তোমার নিচের মাটি উপহার নয়, ধার' — এই ভাবনাটার মানে কী?",
            en: "What does 'the ground beneath you is a loan, not a gift' suggest?",
            hi: "'तुम्हारे नीचे की ज़मीन उपहार नहीं, क़र्ज़ है' — इसका आशय क्या है?",
          },
          options: [
            { bn: "বদ্বীপের মাটি স্থায়ী নয়; বদলের ধারণা করেই বাঁচতে হয়", en: "Delta land is temporary; life must be built while expecting change", hi: "डेल्टा की ज़मीन स्थायी नहीं; बदलाव की सोच के साथ बसना होता है" },
            { bn: "জমি কিনতে ব্যাংক-ধার নিতে হয়", en: "Land must be bought with bank loans", hi: "ज़मीन बैंक क़र्ज़ से ख़रीदनी पड़ती है" },
            { bn: "ভূগোলবিদরা গ্রামে জমি দান করেন", en: "Geographers donate land to villages", hi: "भूगोलविद् गाँवों को ज़मीन दान करते हैं" },
            { bn: "নদীকে প্রতি বছর উপহার দিতে হয়", en: "Rivers must be offered gifts every year", hi: "नदी को हर साल उपहार देने चाहिए" },
          ],
          answer: 0,
          explain: {
            bn: "বদ্বীপে জমি আসে-যায়; তাই সেখানে বাঁচা মানে বদল ধরে রাখা পরিকল্পনা — স্থায়ী ভরসা নয়।",
            en: "In a delta land comes and goes; living there means planning for change, not assuming permanence.",
            hi: "डेल्टा में ज़मीन आती-जाती है; वहाँ जीने का अर्थ है बदलाव के लिए योजना बनाना, स्थायित्व की धारणा नहीं।",
          },
        },
      ],
    },
  },

  /* ── 4 · inspire — the floating library-boat of Char Rahmatpur ── */
  {
    slug: "story3-c1-04",
    level: "advanced",
    category: "inspire",
    minutes: 5,
    unit: 0,
    data: {
      title: {
        bn: "ভাসমান লাইব্রেরির নৌকা",
        en: "The Floating Library Boat",
        hi: "तैरती लाइब्रेरी की नाव",
      },
      summary: {
        bn: "চর রহমতপুরের স্কুলের মাঠ নদী খেয়ে নিলে শিক্ষিকা সালমা পারভীন পাঠাগার তুলে নেন সমতলের নৌকায় — জোয়ার-ভাটা মেনে চরে চরে ঘোরে বইয়ের ভাণ্ডার। পনেরো বছর পরে তার ছাত্ররাই ফেরে শিক্ষক হয়ে: রহিমা নিজের বইয়ের বাক্স নিয়ে, জুবায়ের সোলার ল্যাম্প নিয়ে — নদীই যখন একমাত্র রাস্তা, সেই রাস্তাকেই তিনি শেখার দিকে ঘুরিয়ে দিয়েছিলেন।",
        en: "When the river swallowed the school ground on Char Rahmatpur, teacher Salma Parvein moved the library onto a flat-bottomed boat that drifts with the tide from char to char. Fifteen years on, her students return as teachers — Rahima with a box of her own books, Jubayer with solar lamps — proof that a library which cannot be flooded can also raise its own successors.",
        hi: "जब नदी चर रहमतपुर के स्कूल का मैदान निगल गई, तो अध्यापिका सलमा परवीन ने पुस्तकालय को एक सपाट तले की नाव पर रख दिया, जो ज्वार के साथ एक चर से दूसरे चर तक जाती है। पंद्रह साल बाद उन्हीं छात्र शिक्षक बनकर लौटते हैं — अपनी किताबें और सोलर लैंप लेकर।",
      },
      paragraphs: [
        "The first flood took the tin roof of the school; the second took the ground itself. On Char Rahmatpur — a river island that appears on maps like a rumour — losing land is a normal season, grieved for a week and then ploughed around. But Salma Parvein, who had spent three years walking door to door to persuade parents that daughters deserved classrooms, refused to let the library drown with the courtyard. “Books sink,” she told her husband, not looking up from the register. “Reading must not.”",
        "Her solution was almost embarrassing in its simplicity: a flat-bottomed country boat, welded railings to hold the shelves, a canopy stitched from old sails. The boat moored beside whichever homestead still stood, drifting between chars with the tide, a lantern hung at the bow like a patient lighthouse. Children waded out with trousers rolled to the knee; the ladder was a plank, polished smooth by bare feet within a month. On its first evening afloat, forty-two readers sat shoulder to shoulder over three hundred rescued books, and nobody wanted to leave.",
        "Running a floating library is an act of permanent improvisation. Monsoon currents dragged the anchor twice in one week, so Salma taught the older students to read the water the way they read words — by the colour, the drift of foam, the lean of the reeds. Termites ate a shelf of stories; the village carpenter, repaid in evening English lessons, rebuilt it stronger. When a publisher in Dhaka heard about the boat, he sent a crate of picture books addressed simply: “To the library that cannot be flooded.”",
        "Fifteen years passed the way river years do — rearranging the geography but not the affection. Salma's students sat national exams on that deck, revising with their feet in the water; two of them won scholarships to the city. This winter they came back: Rahima, now a trained teacher, carrying a box of books she had bought with her first salary, and Jubayer, an engineering student, bringing solar lamps so that reading could outlast the dark. They had not returned to visit her, Salma realised. They had returned to relieve her on watch.",
        "There are three library-boats working that stretch of the river now, each catalogued, each with a lending register that travels home in a waterproof bag. Salma still climbs the plank every afternoon, slower now, her knees protesting the monsoon. She insists she did nothing extraordinary. “A char takes what the river gives and makes a life anyway,” she says. “I only added books to the arithmetic.”",
        "One evening a new member, seven years old and smelling of river mud, asked Rahima why the library floated. “Because the river is our only road,” Rahima said, tightening the lamp. “And our teacher decided the road would carry us somewhere.” The boat rocked gently under the lamplight, agreed in its slow way, and turned another page.",
      ],
      vocabulary: [
        {
          word: "persuade",
          meaning: {
            bn: "যুক্তি বা ভালোবাসা দিয়ে রাজি করানো — ভয় দেখিয়ে নয়, বোঝিয়ে",
            en: "to make someone agree to do something by giving good reasons",
            hi: "समझा-बुझाकर किसी को सहमत करना",
          },
          example: "She spent three years persuading parents that daughters deserved classrooms.",
        },
        {
          word: "canopy",
          meaning: {
            bn: "ওপরে ঢেকে রাখার ছাউনি — যেমন বৃষ্টি থেকে বাঁচাতে গাছের পাতার ছাদ",
            en: "a covering stretched above, like a roof of cloth or leaves",
            hi: "ऊपर फैलाया ढकना, छतरी जैसा आवरण",
          },
          example: "The boat carried shelves below and a canopy stitched from old sails above.",
        },
        {
          word: "improvisation",
          meaning: {
            bn: "যা আছে তা দিয়েই মুহূর্তে সমাধান বানানোর কায়দা",
            en: "making or doing something with whatever is available, on the spot",
            hi: "जो मौजूद है उसी से तुरंत समाधान बनाना",
          },
          example: "Running a floating library is an act of permanent improvisation.",
        },
        {
          word: "anchor",
          meaning: {
            bn: "নোঙর — পানিতে ফেললে নৌকা স্থির থাকে, স্রোতে ভেসে যায় না",
            en: "a heavy object dropped into water to hold a boat still",
            hi: "लंगर — पानी में गिराने से नाव स्थिर रहती है",
          },
          example: "Monsoon currents dragged the anchor twice in one week.",
        },
        {
          word: "outlast",
          meaning: {
            bn: "কোনো কিছুর চেয়েও বেশিদিন টিকে থাকা — রাতের চেয়েও দীর্ঘ হওয়া",
            en: "to last longer than something else",
            hi: "किसी चीज़ से अधिक समय टिकना",
          },
          example: "Jubayer brought solar lamps so that reading could outlast the dark.",
        },
        {
          word: "catalogue",
          meaning: {
            bn: "তালিকাভুক্ত করা — নম্বর ও নাম দিয়ে জিনিস গুছিয়ে রাখা",
            en: "to list and organise items systematically",
            hi: "सूचीबद्ध करना, व्यवस्थित रखना",
          },
          example: "Each library-boat is catalogued, with a lending register kept in a waterproof bag.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "সালমা পারভীন কেন লাইব্রেরিটা নৌকায় তোলেন?",
            en: "Why does Salma Parvein move the library onto a boat?",
            hi: "सलमा परवीन पुस्तकालय नाव पर क्यों रखती हैं?",
          },
          options: [
            { bn: "নদী স্কুলের মাঠ খেয়ে ফেলেছিল", en: "The flood had taken the school ground", hi: "बाढ़ स्कूल का मैदान निगल गई थी" },
            { bn: "স্কুলটা শহরে সরে গিয়েছিল", en: "The school had moved to the city", hi: "स्कूल शहर चला गया था" },
            { bn: "নৌকায় বই বেশি সুন্দর লাগে", en: "Books look nicer on boats", hi: "किताबें नाव पर सुंदर लगती हैं" },
            { bn: "সরকার আদেশ দিয়েছিল", en: "The government ordered it", hi: "सरकार ने आदेश दिया था" },
          ],
          answer: 0,
          explain: {
            bn: "প্রথম বাঢ়ে ছাদ গেল, দ্বিতীয় বাঢ়ে মাঠই গেল — কিন্তু পড়া বন্ধ হবে না, এটাই তার সিদ্ধান্ত।",
            en: "The first flood took the roof, the second took the ground — but reading, she decided, must not sink with it.",
            hi: "पहली बाढ़ में छत गई, दूसरी में मैदान — पर पढ़ाई डूबने नहीं देना था, यही उनका निर्णय था।",
          },
        },
        {
          question: {
            bn: "পনেরো বছর পরে রহিমা ও জুবায়ের কী নিয়ে ফেরে?",
            en: "What do Rahima and Jubayer bring when they return after fifteen years?",
            hi: "पंद्रह साल बाद रहिमा और जुबैर क्या लेकर लौटते हैं?",
          },
          options: [
            { bn: "খেলনা আর মিষ্টি", en: "Toys and sweets", hi: "खिलौने और मिठाई" },
            { bn: "শুধু ছবি তুলতে", en: "Only cameras, to take photos", hi: "सिर्फ़ तस्वीरें लेने के लिए कैमरे" },
            { bn: "নিজের কেনা বইয়ের বাক্স আর সোলার ল্যাম্প — পড়া যেন অন্ধকারকেও টিকিয়ে রাখে", en: "A box of books bought with her salary, and solar lamps so reading could outlast the dark", hi: "उनकी कमाई से ख़रीदी किताबों का बक्सा और सोलर लैंप, ताकि पढ़ाई अँधेरे से लंबी चले" },
            { bn: "নতুন স্কুলের চাবি", en: "The keys to a new school building", hi: "नए स्कूल की चाबियाँ" },
          ],
          answer: 2,
          explain: {
            bn: "রহিমা প্রথম বেতনের বইয়ের বাক্স নিয়ে আসে, জুবায়ের আনে সোলার ল্যাম্প — রাতেও পড়া চলুক।",
            en: "Rahima brings a box of books bought with her first salary; Jubayer brings solar lamps so reading can continue after dark.",
            hi: "रहिमा पहली तनख़्वाह से ख़रीदी किताबें लाती है; जुबैर सोलर लैंप लाता है ताकि रात में भी पढ़ाई चले।",
          },
        },
        {
          question: {
            bn: "'আমি শুধু হিসাবে বই যোগ করেছি' — সালমার কথাটার আসল মানে কী?",
            en: "What does Salma really mean by 'I only added books to the arithmetic'?",
            hi: "'मैंने बस गणित में किताबें जोड़ दीं' — सलमा का आशय क्या है?",
          },
          options: [
            { bn: "বইয়ের খরচের হিসাব কষছেন", en: "She is calculating the cost of the books", hi: "वह किताबों का ख़र्च गिन रही हैं" },
            { bn: "চরের মানুষ আগে থেকেই নদীর সঙ্গে মানিয়ে বাঁচে; তিনি তার ওপর শেখার সুযোগ যোগ করেছেন", en: "Char people already survive by adapting; she added learning on top of that", hi: "चर के लोग पहले से ढलकर जीते हैं; उन्होंने उस पर पढ़ाई का अवसर जोड़ा" },
            { bn: "গণিত পড়ানোই তার মূল কাজ", en: "Teaching maths is her main job", hi: "गणित पढ़ाना उनका मुख्य काम है" },
            { bn: "নৌকা কেনা খুব কঠিন ছিল", en: "Buying the boat was very difficult", hi: "नाव ख़रीदना बहुत मुश्किल था" },
          ],
          answer: 1,
          explain: {
            bn: "চরবাসী নদীর দেওয়া দিয়েই জীবন গোছায় — সালমা সেই টিকে থাকার হিসাবে শুধু পড়ার আলো যোগ করেছেন।",
            en: "Char people already build lives from whatever the river gives; Salma simply added the light of learning to that arithmetic.",
            hi: "चर के लोग नदी से मिले सबसे ही जीवन बना लेते हैं; सलमा ने उसी में सीखने की रोशनी जोड़ी।",
          },
        },
        {
          question: {
            bn: "রাহিমা কেন বলে 'নদীই আমাদের একমাত্র রাস্তা'?",
            en: "Why does Rahima say 'the river is our only road'?",
            hi: "रहिमा 'नदी ही हमारी इकलौती सड़क है' क्यों कहती है?",
          },
          options: [
            { bn: "চরে কোনো সাঁকো নেই", en: "There is no bridge on the char", hi: "चर पर कोई पुल नहीं है" },
            { bn: "নদী শীতে শুকিয়ে যায়", en: "The river dries up in winter", hi: "नदी सर्दियों में सूख जाती है" },
            { bn: "নৌকাটা পুরনো স্কুলের সম্পত্তি ছিল", en: "The boat once belonged to the old school", hi: "नाव पहले पुराने स्कूल की संपत्ति थी" },
            { bn: "নদীই চরের সংযোগ ও পথ; শিক্ষিকা সেই পথকেই শেখার দিকে ঘুরিয়ে দিয়েছেন", en: "The river is the char's only connection; her teacher turned that road toward learning", hi: "नदी ही चर का एकमात्र जोड़ है; शिक्षिका ने उसी रास्ते को पढ़ाई की ओर मोड़ दिया" },
          ],
          answer: 3,
          explain: {
            bn: "চরে রাস্তা নদীই; সালমা সেই একমাত্র পথটাকে বই বয়ে নেওয়া পথ বানিয়েছিলেন — এটাই রাহিমার উত্তরের গভীরতা।",
            en: "On a char the river is the only road; Salma turned that single road into one that carries books — the depth behind Rahima's answer.",
            hi: "चर पर सड़क केवल नदी है; सलमा ने उसी रास्ते को किताबें ले जाने वाला रास्ता बना दिया — यही रहिमा के उत्तर की गहराई है।",
          },
        },
      ],
    },
  },

  /* ── 5 · travel — a delayed train, and a night at the stationmaster's house ── */
  {
    slug: "story3-c1-05",
    level: "advanced",
    category: "travel",
    minutes: 4,
    unit: 0,
    data: {
      title: {
        bn: "স্টেশনমাস্টারের বাড়ির রাত",
        en: "A Night at the Stationmaster's House",
        hi: "स्टेशनमास्टर के घर की रात",
      },
      summary: {
        bn: "সিগন্যাল ফেইলিউরে গ্রামের ছোট্ট জংশনে আটকে যায় একাকী ভ্রমণকারী — হোটেল বুকিং বাতিল, ফোনের চার্জ শেষ। স্টেশনমাস্টার ত্রিপাঠি তাকে বাড়িতে নিয়ে যান: মাঝরাতের ডাল-ভাত, ইংরেজি পরীক্ষার অভ্যাস করা ছেলে, আর 'হাতির অগ্রাধিকার' গল্প। ভোর ১:১০-এর ট্রেনে ফেরা যায়, কিন্তু সফরের সবচেয়ে ভালো অংশটা পরিকল্পনার বাইরেই হলো — সেরেন্ডিপিটির ঠিকানা: পানির ট্যাংকের পেছনে।",
        en: "A signal failure strands a solo traveller at a two-platform junction in rural India: hotel cancelled, phone dying. Stationmaster Tripathi simply takes him home — midnight dal and rice, a son rehearsing English exam questions, and the story of the elephant that once delayed the mail train. The 1:10 train arrives, the green flag rises, and the ruined itinerary turns out to hold the journey's best memory.",
        hi: "सिग्नल फेल होने से अकेला यात्री गाँव के छोटे जंक्शन पर फँस जाता है। स्टेशनमास्टर त्रिपाठी उसे बस घर ले आते हैं — आधी रात की दाल-चावल, अंग्रेज़ी के सवाल रटता बेटा, और वह किस्सा जब एक हाथी ने मेल ट्रेन चार घंटे रोक दी थी। बिगड़ा हुआ प्लान ही यात्रा की सबसे अच्छी याद निकलता है।",
      },
      paragraphs: [
        "The announcement crackled from a speaker older than I am: “Signal failure. No expected time of arrival.” At Bhagwanpur Junction — two platforms, one tea stall, a dog asleep on the weighing scale — my 8:40 train dissolved into the night. My itinerary had a hotel booked in Raipur, a morning appointment, a return flight. Stranded with a dying phone and forty rupees of change, I did what anxious travellers do: I checked the timetable again, as if staring could move trains.",
        "The stationmaster watched me from his glass office with the calm of a man who has watched a thousand delays. When the last tea-stall shutter came down, he crossed the platform, tapped my backpack, and said, “You will sleep badly here. My house is behind the water tank. Come.” It was not an offer so much as an administrative decision, delivered in the tone of a man rearranging a timetable he personally controlled.",
        "His home was two rooms and a courtyard of warm hens. Mrs. Tripathi, unembarrassed by the hour, fried onions, and the smell renegotiated my hunger on the spot. We ate dal, rice, and lime pickle off steel plates while their son rehearsed English exam questions on me. Nobody apologised for the food being simple; nobody needed to. Hospitality, I was learning, is not performance — it is procedure, the way some households simply run. On the wall hung a yellowed timetable signed by three generations of stationmasters, my host's grandfather's ink still legible along the border.",
        "We talked until the lamplight went low — about his thirty-one years on the same seat, about the weddings that happen on platforms, about the elephant that once delayed the mail train (four hours; “the elephant had right of way”). He spoke of passengers the way a doctor speaks of patients: individually, with notes. Somewhere outside, a goods train groaned past; he did not even glance up. “Your train will come at 1:10,” he said finally. “I have already informed them you are safe. Sleep.”",
        "At five past one his wife shook me awake. My train, impossibly, was on time for the first time all day. I tried to pay; he refused with real offence. “Write to me if the journey treats you well,” he said, handing me a steel tumbler of sweet tea for the platform. As the train pulled out I saw him raise the green flag — the whole night's kindness folded into one small, luminous gesture.",
        "I missed my appointment, lost the hotel money, and arrived unshaven. None of it registers in memory. What remains is dal at midnight, an elephant with right of way, and the discovery that serendipity — the art of finding the unplanned journey better than the planned one — has an address: behind the water tank, second door, Bhagwanpur Junction.",
      ],
      vocabulary: [
        {
          word: "stranded",
          meaning: {
            bn: "আটকে পড়া — গাড়ি বা পথ না পেয়ে অসহায় হয়ে থেকে যাওয়া",
            en: "left somewhere without a way to travel on",
            hi: "बिना साधन के कहीं अटका हुआ",
          },
          example: "A signal failure left me stranded at a two-platform junction.",
        },
        {
          word: "itinerary",
          meaning: {
            bn: "ভ্রমণের আগে থেকে ঠিক করা পরিকল্পনা — কোথায়, কখন, কীভাবে",
            en: "a planned route and schedule for a journey",
            hi: "यात्रा की पहले से तय योजना या कार्यक्रम",
          },
          example: "My itinerary had a hotel in Raipur, a meeting, and a flight home.",
        },
        {
          word: "hospitality",
          meaning: {
            bn: "মেহমানদারি — অপরিচিতকেও যেভাবে আপন করে খাওয়ানো-ঘুমানো",
            en: "friendly and generous treatment of guests or strangers",
            hi: "मेहमानों के साथ आत्मीय और उदार व्यवहार",
          },
          example: "Hospitality, I was learning, is not performance — it is procedure.",
        },
        {
          word: "gesture",
          meaning: {
            bn: "অল্প শব্দে মনের ভাব বোঝানো ছোট কাজ বা ইশারা — যেমন বিদায়ে হাত তোলা",
            en: "a small action that expresses a feeling or intention",
            hi: "भाव प्रकट करने वाला छोटा काम या इशारा",
          },
          example: "Raising the green flag became the whole night's kindness in one gesture.",
        },
        {
          word: "luminous",
          meaning: {
            bn: "উজ্জ্বল, আলো ছড়ানো — অন্ধকারে যেটা নিজেই জ্বলে",
            en: "giving light; glowing softly or brightly",
            hi: "चमकीला, रोशनी देने वाला",
          },
          example: "Against the dark platform, the small flag looked like a luminous sign.",
        },
        {
          word: "serendipity",
          meaning: {
            bn: "অপ্রত্যাশিত সৌভাগ্য — যা খুঁজছিলে না, পথে তার চেয়েও ভালো কিছু পেয়ে যাওয়া",
            en: "the lucky discovery of good things while looking for something else",
            hi: "बिना खोजे, संयोग से मिला सुखद अनुभव",
          },
          example: "The ruined itinerary taught me the art of serendipity.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "ট্রেনটা কেন দেরি হচ্ছিল?",
            en: "Why was the train delayed?",
            hi: "ट्रेन क्यों देर से चल रही थी?",
          },
          options: [
            { bn: "একটা হাতির কারণে", en: "Because of an elephant", hi: "एक हाथी की वजह से" },
            { bn: "রেলকর্মীদের ধর্মঘটে", en: "Because of a railway strike", hi: "रेल कर्मचारियों की हड़ताल से" },
            { bn: "সিগন্যাল ফেইলিউরে", en: "Because of a signal failure", hi: "सिग्नल फेल होने से" },
            { bn: "ভারী বৃষ্টিতে", en: "Because of heavy rain", hi: "भारी बारिश से" },
          ],
          answer: 2,
          explain: {
            bn: "ঘোষণাই বলছিল: সিগন্যাল ফেইলিউর, আগমনের সম্ভাব্য সময় অজানা — হাতির কাণ্ড ছিল অন্য এক পুরনো গল্প।",
            en: "The announcement itself said: signal failure, no expected time — the elephant was a different, older story.",
            hi: "घोषणा में ख़ुद कहा गया था: सिग्नल फेल, आगमन का समय अज्ञात — हाथी वाली बात एक और पुरानी कहानी थी।",
          },
        },
        {
          question: {
            bn: "স্টেশনমাস্টার ভ্রমণকারীকে বাড়িতে নেওয়ার প্রস্তাব কীভাবে দেন?",
            en: "How does the stationmaster invite the traveller home?",
            hi: "स्टेशनमास्टर यात्री को घर बुलाते कैसे हैं?",
          },
          options: [
            { bn: "শান্ত প্রশাসনিক সিদ্ধান্তের মতো — 'আমার বাড়ি পানির ট্যাংকের পেছনে, আসো'", en: "Like a calm administrative decision: 'My house is behind the water tank. Come.'", hi: "एक शांत प्रशासनिक निर्णय की तरह: 'मेरा घर पानी की टंकी के पीछे है। आओ।'" },
            { bn: "লজ্জিত হয়ে ফিসফিসিয়ে", en: "Shyly, in a whisper", hi: "शर्मिंडा होकर, फुसफुसाते हुए" },
            { bn: "থাকার ভাড়া নিয়ে", en: "In exchange for a fee", hi: "कुछ पैसे लेकर" },
            { bn: "বিনোদনমূলক বক্র হাসির সঙ্গে", en: "Mockingly, with a cruel joke", hi: "व्यंग्यपूर्ण हँसी के साथ" },
          ],
          answer: 0,
          explain: {
            bn: "লেখক লেখে — এটা অনুরোধের চেয়ে বেশি 'প্রশাসনিক সিদ্ধান্ত'; যে মানুষ নিজের সময়সূচি বদলায়, সেভাবে বলা।",
            en: "The narrator calls it 'not an offer so much as an administrative decision' — the tone of a man rearranging his own timetable.",
            hi: "लेखक इसे 'पेशकश से अधिक प्रशासनिक निर्णय' कहता है — जैसे कोई व्यक्ति अपना ही समय-सारणी संभाल रहा हो।",
          },
        },
        {
          question: {
            bn: "একসময় মেইল ট্রেন কতক্ষণ দেরি হয়েছিল এবং কেন?",
            en: "How long was the mail train once delayed, and why?",
            hi: "एक बार मेल ट्रेन कितनी देर से रुकी थी, और क्यों?",
          },
          options: [
            { bn: "দুই দিন — তুষারঝড়ে", en: "Two days — a snowstorm", hi: "दो दिन — बर्फ़ीले तूफ़ान से" },
            { bn: "চার ঘণ্টা — একটা হাতির কারণে; 'হাতির অগ্রাধিকার ছিল'", en: "Four hours — because of an elephant; 'the elephant had right of way'", hi: "चार घंटे — एक हाथी की वजह से; 'हाथी को पहले जाने का अधिकार था'" },
            { bn: "এক ঘণ্টা — পাড়ে মোরগের লড়াইয়ে", en: "An hour — a cockfight beside the track", hi: "एक घंटा — पटरी के पास मुर्ग़ों की लड़ाई" },
            { bn: "কখনো দেরি হয়নি", en: "It was never delayed", hi: "वह कभी देर से नहीं आई" },
          ],
          answer: 1,
          explain: {
            bn: "ত্রিপাঠির কথায়: চার ঘণ্টা, কারণ 'হাতির অগ্রাধিকার ছিল' — প্ল্যাটফর্ম-গল্পের রাজা।",
            en: "In Tripathi's telling: four hours, because “the elephant had right of way” — the king of platform stories.",
            hi: "त्रिपाठी के अनुसार: चार घंटे, क्योंकि 'हाथी को पहले जाने का अधिकार था' — प्लेटफ़ॉर्म कहानियों का राजा।",
          },
        },
        {
          question: {
            bn: "'মেহমানদারি অভিনয় নয়, প্রক্রিয়া' — লেখকের এই আবিষ্কারের মানে কী?",
            en: "What does the writer mean by 'Hospitality is not performance — it is procedure'?",
            hi: "'मेहमान-नवाज़ी प्रदर्शन नहीं, नियमित ढंग है' — लेखक का यह अर्थ क्या है?",
          },
          options: [
            { bn: "ত্রিপাঠিরা প্রভাবিত করতে রাঁধে", en: "The Tripathis cook to impress guests", hi: "त्रिपाठी मेहमानों को प्रभावित करने के लिए खाना बनाते हैं" },
            { bn: "খাবারটা রেস্তোরাঁর মানের ছিল", en: "The food was restaurant-quality", hi: "खाना रेस्तराँ जैसा था" },
            { bn: "লেখক টাকা দিতে চেয়েছিল", en: "The writer wanted to pay", hi: "लेखक पैसे देना चाहता था" },
            { bn: "আন্তরিকতা ওই ঘরের স্বাভাবিক চলন — কোনো মঞ্চায়ন বা কৃতজ্ঞতার দাবি ছাড়াই", en: "Kindness is simply how that household runs — no show, no thanks demanded", hi: "अच्छाई उनके घर का सहज नियम है — कोई दिखावा नहीं, कोई शुक्रिये की माँग नहीं" },
          ],
          answer: 3,
          explain: {
            bn: "কেউ সাধারণ খাবারের জন্য ক্ষমা চায়নি, কেউ প্রদর্শন করেনি — মেহমানদারি তাদের ঘরে চলমান নিয়মমাত্র।",
            en: "Nobody apologised for the simple food, nobody performed — hospitality was simply how that household ran.",
            hi: "किसी ने सादे खाने के लिए माफ़ी नहीं माँगी, किसी ने दिखावा नहीं किया — मेहमान-नवाज़ी उनके घर का सहज चलन थी।",
          },
        },
      ],
    },
  },
];
