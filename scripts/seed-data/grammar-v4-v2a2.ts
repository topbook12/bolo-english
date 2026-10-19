// ─── Grammar seeds v4: v2-a2 intermediate batch (3 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: scripts/seed-data/grammar-v2-a2.ts.
// Every body paragraph became scannable bullet points + roadmap + emoji headings;
// title/intro/tips/examples copied EXACTLY from source; body omitted; quiz omitted
// (source lessons have no quiz). unit kept exactly; sortOrder from integration table.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_V2A2: SeedGrammarV4Entry[] = [
  /* ── 1. Relative Clauses ────────────────────────────────────── */
  {
    topic: "Relative Clauses",
    level: "intermediate",
    title: "Relative Clauses (Intermediate)",
    unit: 0,
    sortOrder: 7,
    data: {
      title: {
        bn: "রিলেটিভ ক্লজ (মধ্যম স্তর)",
        en: "Relative Clauses (Intermediate)",
        hi: "रिलेटिव क्लॉज़ (मध्यम स्तर)",
      },
      intro: {
        bn: "দুটি ছোট বাক্যকে একটি সুন্দর বাক্যে জোড়া দেওয়ার জাদুই হলো Relative Clause। 'The man is my uncle. He lives in Dhaka' — এই দুটিকে বলা যায় 'The man who lives in Dhaka is my uncle'। এই পাঠে আমরা শিখব who, which, that, whose, where, when কখন বসে, কোথায় কমা বসলে অর্থ বদলে যায়, আর কখন প্রনাউন বাদ দেওয়া যায়।",
        en: "A relative clause joins two short sentences into one elegant sentence. Instead of 'I met a man. He sells flowers,' you can say 'I met a man who sells flowers.' This lesson covers who/which/that, the commas that change meaning, whose/where/when, and prepositions in relative clauses.",
        hi: "रिलेटिव क्लॉज़ दो छोटे वाक्यों को जोड़कर एक अच्छा वाक्य बना देता है। 'I met a man. He sells flowers' की जगह आप कह सकते हैं 'I met a man who sells flowers'। इस पाठ में who/which/that, कॉमा का फ़र्क़, whose/where/when और prepositions — सब सीखेंगे।",
      },
      roadmap: [
        {
          bn: "🧩 কে who, কে which/that — আর কখন প্রনাউন বাদ যায়",
          en: "🧩 who vs which/that — and when the pronoun can vanish",
          hi: "🧩 कौन who, कौन which/that — और pronoun कब हट सकता है",
        },
        {
          bn: "🔍 একটা কমার খেলা: defining বনাম non-defining ক্লজ",
          en: "🔍 The comma game: defining vs non-defining clauses",
          hi: "🔍 कॉमा का खेल: defining बनाम non-defining क्लॉज़",
        },
        {
          bn: "🗝️ whose, where, when — মালিকানা, জায়গা আর সময়ের চাবি",
          en: "🗝️ whose, where, when — the keys to possession, place and time",
          hi: "🗝️ whose, where, when — स्वामित्व, जगह और समय की चाबियाँ",
        },
        {
          bn: "🎓 preposition + whom/which — formal আর স্বাভাবিক ইংরেজির দুই ছাঁচ",
          en: "🎓 preposition + whom/which — the formal and the natural pattern",
          hi: "🎓 preposition + whom/which — formal और natural English के दो ढाँचे",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🧩 who / which / that — কর্তা ও কর্ম হিসেবে",
            en: "🧩 who / which / that — subject and object",
            hi: "🧩 who / which / that — कर्ता और कर्म के रूप में",
          },
          lead: {
            bn: "দুটো ছোট বাক্য জোড়ার প্রথম ধাপ — সঠিক relative pronoun বাছা, আর জানা কখন ওটা বাদ যায়।",
            en: "Pick the right relative pronoun — and learn when you can drop it.",
            hi: "दो वाक्य जोड़ने का पहला कदम — सही relative pronoun चुनना, और जानना कि वह कब हट सकता है।",
          },
          points: [
            { bn: "**who** — মানুষের জন্য: The girl who won the prize is my sister (that-ও চলে)।", en: "**who** — for people: The girl who won the prize is my sister ('that' also works).", hi: "**who** — लोगों के लिए: The girl who won the prize is my sister ('that' भी चलता है)।" },
            { bn: "**which / that** — জিনিস বা প্রাণীর জন্য: the film (which/that) we watched।", en: "**which / that** — for things or animals: the film (which/that) we watched.", hi: "**which / that** — चीज़ों या जानवरों के लिए: the film (which/that) we watched।" },
            { bn: "কর্তা-অবস্থানে (subject) relative pronoun কখনো বাদ দেওয়া যায় না — ক্লজ কর্তা ছাড়া ঝুলে থাকে।", en: "A subject relative pronoun can never be dropped — the clause would hang without a subject.", hi: "Subject वाला relative pronoun कभी नहीं हटता — क्लॉज़ बिना subject के अधूरा लटक जाता है।" },
            { bn: "কর্ম-অবস্থানে (object) প্রনাউন বাদ দেওয়া যায় — আর বাদ দিলেই ইংরেজি বেশি স্বাভাবিক শোনায়।", en: "An object relative pronoun can be dropped — and leaving it out sounds more natural.", hi: "Object वाला pronoun हटाया जा सकता है — और हटाने पर अंग्रेज़ी ज़्यादा natural लगती है।" },
            { bn: "কর্ম থাকা সত্ত্বেও পেছনে him/it বসানো বাঙালি শিক্ষার্থীদের চেনা ভুল — ইংরেজিতে কর্ম একবারই বসে।", en: "Adding him/it after the clause, even though the pronoun already plays the object, is the classic Bengali-speaker mistake — the object appears only once.", hi: "कर्म होते हुए भी पीछे him/it जोड़ना बांग्लाभाषियों की चिरपरिचित ग़लती है — अंग्रेज़ी में object एक ही बार आता है।" },
          ],
          table: {
            head: [
              { bn: "প্রনাউন", en: "Pronoun", hi: "Pronoun" },
              { bn: "কখন বসে", en: "When to use", hi: "कब लगता है" },
              { bn: "ছোট উদাহরণ", en: "Quick example", hi: "छोटा उदाहरण" },
            ],
            rows: [
              [{ bn: "who", en: "who", hi: "who" }, { bn: "মানুষ", en: "people", hi: "लोग" }, { bn: "the man who called me", en: "the man who called me", hi: "the man who called me" }],
              [{ bn: "whom", en: "whom", hi: "whom" }, { bn: "preposition-এর ঠিক পরে মানুষ", en: "people, straight after a preposition", hi: "preposition के तुरंत बाद" }, { bn: "with whom I share an office", en: "with whom I share an office", hi: "with whom I share an office" }],
              [{ bn: "which", en: "which", hi: "which" }, { bn: "জিনিস বা প্রাণী", en: "things or animals", hi: "चीज़ें या जानवर" }, { bn: "the car which is parked outside", en: "the car which is parked outside", hi: "the car which is parked outside" }],
              [{ bn: "that", en: "that", hi: "that" }, { bn: "মানুষ বা জিনিস — তবে কমার পরে নয়", en: "people or things — never after a comma", hi: "लोग या चीज़ें — कॉमा के बाद नहीं" }, { bn: "the book that I bought", en: "the book that I bought", hi: "the book that I bought" }],
              [{ bn: "whose", en: "whose", hi: "whose" }, { bn: "মালিকানা — 'যার'", en: "possession ('whose')", hi: "मालिकी ('जिसका')" }, { bn: "the girl whose bag was stolen", en: "the girl whose bag was stolen", hi: "the girl whose bag was stolen" }],
            ],
          },
          examples: [
            {
              wrong: "I know a man works in a bank.",
              right: "I know a man who works in a bank.",
              note: {
                bn: "কর্তা-অবস্থানের who বাদ দেওয়া যায় না — মানুষের জন্য who আবশ্যক, নইলে ক্লজটা কর্তা ছাড়া ঝুলে থাকে।",
                en: "A subject relative pronoun cannot be omitted; 'a man works in a bank' needs 'who' to link it to 'a man'.",
                hi: "Subject वाला relative pronoun नहीं हट सकता — 'who' ज़रूरी है, वरना क्लॉज़ अधूरा लगता है।",
              },
            },
            {
              wrong: "The book which I bought it is very interesting.",
              right: "The book I bought is very interesting.",
              note: {
                bn: "which নিজেই 'bought'-এর কর্ম, তাই আলাদা it লাগবে না। বাংলায় 'যে বইটা আমি কিনলাম সেটা' — 'সেটা' অনুবাদ করতে গিয়েই এই ভুল হয়।",
                en: "'Which' is already the object of 'bought'; adding 'it' doubles the object (a resumptive pronoun — very common when translating 'সেটা').",
                hi: "'which' पहले से ही 'bought' का object है; 'it' जोड़ना दोहराव है — यह दक्षिण एशियाई अनुवाद की आम ग़लती है।",
              },
            },
            {
              wrong: "The car who is parked outside belongs to my boss.",
              right: "The car which is parked outside belongs to my boss.",
              note: {
                bn: "গাড়ি জিনিস — who নয়, which/that বসবে। মনে রাখার সূত্র: মানুষের জন্য who, বাকি সবের জন্য which/that।",
                en: "Cars are things, so use which (or that), not who.",
                hi: "गाड़ी एक चीज़ है — who नहीं, which/that आएगा।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔍 কমা বদলে দেয় অর্থ: defining vs non-defining",
            en: "🔍 Commas change the meaning: defining vs non-defining",
            hi: "🔍 कॉमा बदलता है मतलब: defining vs non-defining",
          },
          lead: {
            bn: "একটা কমা পুরো অর্থ বদলে দেয় — কোন ক্লজ শনাক্ত করে, কোনটা শুধু অতিরিক্ত তথ্য দেয়।",
            en: "A single comma can flip the meaning: which clause identifies, and which one just adds extra?",
            hi: "एक कॉमा पूरा मतलब बदल देता है — कौन-सा क्लॉज़ पहचान बताता है, कौन-सा सिर्फ़ अतिरिक्त जानकारी।",
          },
          points: [
            { bn: "কমা ছাড়ার ক্লজ = **defining** — ঠিক কোন মানুষ/জিনিসটা, তা-ই শনাক্ত করে।", en: "A clause without commas = **defining** — it pins down exactly which person or thing.", hi: "बिना कॉमा का क्लॉज़ = **defining** — यह ठीक-ठाक बताता है कौन-सा व्यक्ति या चीज़।" },
            { bn: "My brother who lives in Chattogram is a sailor — বোঝায় আপনার একাধিক ভাই আছে, আপনি চট্টগ্রামের ভাইটাকে বোঝালেন।", en: "My brother who lives in Chattogram is a sailor — you have several brothers, and you mean the Chattogram one.", hi: "My brother who lives in Chattogram is a sailor — आपके कई भाई हैं, और आप चट्टग्राम वाले की बात कर रहे हैं।" },
            { bn: "কমার মধ্যের ক্লজ = **non-defining** — শুধু অতিরিক্ত তথ্য, মূল অর্থ নয়।", en: "A clause inside commas = **non-defining** — just extra information, not the core meaning.", hi: "कॉमा के बीच का क्लॉज़ = **non-defining** — सिर्फ़ अतिरिक्त जानकारी, मुख्य अर्थ नहीं।" },
            { bn: "My brother, who lives in Chattogram, is a sailor — মানে আপনার ভাই একজনই, তিনি চট্টগ্রামে থাকেন।", en: "My brother, who lives in Chattogram, is a sailor — meaning you have exactly one brother, and he lives in Chattogram.", hi: "My brother, who lives in Chattogram, is a sailor — मतलब भाई एक ही है, और वह चट्टग्राम में रहता है।" },
            { bn: "non-defining ক্লজে that ব্যবহার করা যায় না — কমার পরে শুধু which/who।", en: "'That' is impossible in a non-defining clause — after a comma, only which/who.", hi: "Non-defining क्लॉज़ में 'that' असंभव है — कॉमा के बाद केवल which/who।" },
            { bn: "non-defining ক্লজ বাদ দিলেও বাক্যের মূল অর্থ অক্ষত থাকে — এটাই কমার পরীক্ষা।", en: "Remove a non-defining clause and the core meaning survives — that is the comma test.", hi: "Non-defining क्लॉज़ हटाने पर भी वाक्य का मुख्य अर्थ सुरक्षित रहता है — यही कॉमा की परीक्षा है।" },
          ],
          table: {
            head: [
              { bn: "বৈশিষ্ট্য", en: "Feature", hi: "विशेषता" },
              { bn: "defining (কমা নেই)", en: "defining (no commas)", hi: "defining (कॉमा नहीं)" },
              { bn: "non-defining (কমা আছে)", en: "non-defining (with commas)", hi: "non-defining (कॉमा के साथ)" },
            ],
            rows: [
              [{ bn: "কাজ", en: "Job", hi: "काम" }, { bn: "কোনটা তা-ই শনাক্ত করে", en: "identifies exactly which one", hi: "ठीक-ठाक बताता है कौन-सा" }, { bn: "শুধু অতিরিক্ত তথ্য দেয়", en: "just adds extra information", hi: "सिर्फ़ अतिरिक्त जानकारी देता है" }],
              [{ bn: "that-এর অনুমতি", en: "'that' allowed?", hi: "'that' की छूट" }, { bn: "যায়", en: "yes", hi: "हाँ" }, { bn: "কখনোই নয়", en: "never", hi: "कभी नहीं" }],
              [{ bn: "ক্লজ বাদ দিলে", en: "if you remove the clause", hi: "क्लॉज़ हटाने पर" }, { bn: "মূল অর্থ বদলে যায়", en: "the core meaning changes", hi: "मुख्य अर्थ बदल जाता है" }, { bn: "বাক্য তবু সঠিক থাকে", en: "the sentence still stands", hi: "वाक्य फिर भी ठीक रहता है" }],
            ],
          },
          examples: [
            {
              wrong: "My mother who is a teacher lives in Sylhet.",
              right: "My mother, who is a teacher, lives in Sylhet.",
              note: {
                bn: "মায়ের সংখ্যা একটাই, তাই 'who is a teacher' অতিরিক্ত তথ্য — দুই পাশে কমা লাগবেই। unique nouns (my mother, Dhaka, the sun) এর পরে non-defining ক্লজ আসে।",
                en: "'My mother' is already unique, so the clause is extra information — commas are required.",
                hi: "'my mother' एक ही होती है, इसलिए क्लॉज़ अतिरिक्त जानकारी है → कॉमा ज़रूरी।",
              },
            },
            {
              wrong: "Dhaka, that is the capital of Bangladesh, is very crowded.",
              right: "Dhaka, which is the capital of Bangladesh, is very crowded.",
              note: {
                bn: "কমার পরে (non-defining ক্লজে) that আসতে পারে না — শুধু which/who। এটা ইংরেজির কড়া নিয়ম, পরীক্ষায় প্রায়ই আসে।",
                en: "After a comma, 'that' is impossible; only which/who can introduce a non-defining clause.",
                hi: "कॉमा के बाद 'that' असंभव है; केवल which/who आता है।",
              },
            },
            {
              wrong: "My uncle who lives in Khulna is a farmer.",
              right: "My uncle, who lives in Khulna, is a farmer.",
              note: {
                bn: "চাচা একজনই — তাহলে কমা ছাড়া লিখলে শ্রোতা ভাববে আপনার একাধিক চাচা আছে এবং আপনি খুলনার চাচাটাকে বোঝাচ্ছেন। কমা এখানে অর্থের পার্থক্য।",
                en: "With no commas, the sentence implies you have several uncles and you mean the Khulna one.",
                hi: "बिना कॉमा का मतलब होगा कि आपके कई चाचा हैं और आप खुलना वाले की बात कर रहे हैं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🗝️ whose, where, when — আর কর্ম-প্রনাউন বাদ দেওয়া",
            en: "🗝️ whose, where, when — and dropping the object pronoun",
            hi: "🗝️ whose, where, when — और object pronoun हटाना",
          },
          lead: {
            bn: "মালিকানা, জায়গা, সময় — এই তিন চাবিতে বাক্য আরও বাস্তব হয়ে ওঠে।",
            en: "Possession, place, time — three small keys that make your sentences concrete and vivid.",
            hi: "स्वामित्व, जगह, समय — ये तीन चाबियाँ वाक्य को ज़्यादा असली बना देती हैं।",
          },
          points: [
            { bn: "**whose** = যার (মালিকানা): the boy whose father is a pilot।", en: "**whose** = possession: the boy whose father is a pilot.", hi: "**whose** = संबंध/मालिकी ('जिसका'): the boy whose father is a pilot।" },
            { bn: "**where** = যেখানে (স্থান): the café where we first met।", en: "**where** = place: the café where we first met.", hi: "**where** = जगह ('जहाँ'): the café where we first met।" },
            { bn: "**when** = যখন (সময়): the year when everything changed।", en: "**when** = time: the year when everything changed.", hi: "**when** = समय ('जब'): the year when everything changed।" },
            { bn: "where ব্যবহার করলে শেষে in/at/on আর বসে না — where নিজেই সেই preposition-এর কাজ করে।", en: "After 'where' never add in/at/on again — 'where' already does that preposition's job.", hi: "'where' के बाद फिर से in/at/on नहीं — 'where' खुद उस preposition का काम करता है।" },
            { bn: "who's আর whose উচ্চারণে এক, অর্থে আকাশ-পাতাল আলাদা — মালিকানা বোঝাতে সবসময় whose।", en: "Who's and whose sound identical but mean worlds apart — possession is always whose.", hi: "who's और whose उच्चारण में एक, अर्थ में आसमान-ज़मीन का फ़र्क़ — मालिकी हमेशा whose से।" },
            { bn: "কর্ম-অবস্থানের who/which/that বাদ দিলে বাক্য আরও স্বাভাবিক শোনায়।", en: "An object who/which/that can usually be dropped — the sentence sounds more natural without it.", hi: "Object वाला who/which/that आमतौर पर हटा दें — वाक्य ज़्यादा natural सुनाई देता है।" },
          ],
          formula: {
            bn: "স্থানে where · সময়ে when · মালিকানায় whose",
            en: "Place → where · Time → when · Possession → whose",
            hi: "जगह पर where · समय पर when · मालिकी पर whose",
          },
          examples: [
            {
              wrong: "This is the house where I live in.",
              right: "This is the house where I live.",
              note: {
                bn: "where = in which; তাই শেষে in বসালে দ্বিগুণ হয়ে যায়। বাংলায় 'যে বাড়িতে আমি থাকি' — 'তে/এ' অনুবাদের প্রভাবেই এই ভুল।",
                en: "'Where' already contains the idea of 'in which,' so the final 'in' is doubled.",
                hi: "'where' में ही 'in which' का भाव है, इसलिए आख़िरी 'in' दोहराव है।",
              },
            },
            {
              wrong: "The girl who's bag was stolen is crying.",
              right: "The girl whose bag was stolen is crying.",
              note: {
                bn: "whose = যার (মালিকানা), আর who's = who is — উচ্চারণ এক, অর্থ আকাশ-পাতাল আলাদা। মালিকানা বোঝাতে সবসময় whose।",
                en: "'Whose' shows possession; 'who's' = 'who is.' Same sound, totally different job.",
                hi: "'whose' = संबंध/का; 'who's' = 'who is' — आवाज़ एक, अर्थ बिल्कुल अलग।",
              },
            },
            {
              wrong: "2015 was the year which my daughter was born.",
              right: "2015 was the year when my daughter was born.",
              note: {
                bn: "সময় বোঝাতে when (বা প্রনাউন সম্পূর্ণ বাদ) — which বসালে 'বছরটা জন্ম নিল' মনে হয়। স্থানে where, সময়ে when, মালিকানায় whose — এই সূত্র মনে রাখুন।",
                en: "For time, use 'when' (or drop the pronoun); with 'which' the clause would read 'the year was born' — nonsense.",
                hi: "समय के लिए 'when' (या pronoun हटा दें); अकेला 'which' यहाँ ग़लत लगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🎓 Relative ক্লজে preposition: formal vs স্বাভাবিক ইংরেজি",
            en: "🎓 Prepositions in relative clauses: formal vs natural English",
            hi: "🎓 रिलेटिव क्लॉज़ में preposition: formal vs natural English",
          },
          lead: {
            bn: "পরীক্ষার খাতায় formal, বন্ধুর সাথে স্বাভাবিক — preposition-এর দুই বৈধ আসন।",
            en: "Formal for the exam paper, natural with friends — two legal seats for the preposition.",
            hi: "परीक्षा में formal, दोस्तों के साथ natural — preposition के दो वैध ठिकाने।",
          },
          points: [
            { bn: "দুটি বৈধ ছাঁচ — formal: the house in which I grew up (preposition + which/whom)।", en: "Two legal patterns — formal: the house in which I grew up (preposition + which/whom).", hi: "दो वैध ढाँचे — formal: the house in which I grew up (preposition + which/whom)।" },
            { bn: "আর informal: the house which I grew up in (preposition বাক্যের শেষে)।", en: "And informal: the house which I grew up in (preposition at the end).", hi: "और informal: the house which I grew up in (preposition वाक्य के अंत में)।" },
            { bn: "preposition-এর পরে that কখনোই বসে না — শুধু which (জিনিস) বা whom (মানুষ)।", en: "A preposition is never followed by that — only which (things) or whom (people).", hi: "Preposition के बाद 'that' कभी नहीं — केवल which (चीज़ें) या whom (लोग)।" },
            { bn: "preposition-এর ঠিক পরে মানুষ হলে whom — with whom I share an office; who সেখানে ভুল।", en: "Straight after a preposition, people take whom: with whom I share an office — never who there.", hi: "Preposition के तुरंत बाद लोगों के लिए whom आता है: with whom I share an office — वहाँ who ग़लत।" },
            { bn: "বাংলা 'সাথে/থেকে/দিয়ে' অনুবাদে preposition পুরোপুরি বাদ পড়ে যায় — learn FROM the teacher।", en: "Bengali 'সাথে/থেকে/দিয়ে' translations swallow the preposition whole — you learn FROM the teacher.", hi: "बांग्ला 'साथে/থেকে/दিয়ে' अनुवाद में preposition पूरा छूट जाता है — you learn FROM the teacher।" },
            { bn: "preposition + whom/which বাক্যকে formal ও পরীক্ষাযোগ্য করে; preposition stranding করে conversational।", en: "Preposition + whom/which makes a sentence formal and exam-ready; preposition stranding keeps it conversational.", hi: "Preposition + whom/which वाक्य को formal और exam-ready बनाता है; preposition stranding उसे conversational रखता है।" },
          ],
          formula: {
            bn: "formal: the house in which I grew up · informal: the house which I grew up in",
            en: "formal: the house in which I grew up · informal: the house which I grew up in",
            hi: "formal: the house in which I grew up · informal: the house which I grew up in",
          },
          examples: [
            {
              wrong: "The chair on that I sat was broken.",
              right: "The chair on which I sat was broken.",
              note: {
                bn: "preposition-এর পরে that কখনো আসে না — শুধু which (জিনিস) বা whom (মানুষ)। informal চাইলে: 'The chair I sat on was broken'।",
                en: "A preposition can never be followed by 'that' — use which/whom. Informal alternative: 'The chair I sat on was broken.'",
                hi: "Preposition के बाद 'that' कभी नहीं आ सकता — which/whom ही लगेगा। informal: 'The chair I sat on was broken'।",
              },
            },
            {
              wrong: "She is the colleague with who I share an office.",
              right: "She is the colleague with whom I share an office.",
              note: {
                bn: "preposition-এর ঠিক পরে সবসময় whom (মানুষ)। তবে কথার ভাষায় preposition শেষে সরিয়ে 'the colleague who I share an office with' বললেও চলে।",
                en: "Straight after a preposition you need 'whom' for people. In speech, move the preposition to the end: '...who I share an office with.'",
                hi: "Preposition के तुरंत बाद लोगों के लिए 'whom' आता है। बोलचाल में preposition को वाक्य के अंत में ले जा सकते हैं।",
              },
            },
            {
              wrong: "That is the teacher whom we learnt a lot.",
              right: "That is the teacher from whom we learnt a lot.",
              note: {
                bn: "বাংলায় 'যে শিক্ষকের কাছ থেকে আমরা অনেক শিখলাম' — 'কাছ থেকে' অনুবাদে preposition বাদ পড়ে যায়। ইংরেজিতে learn FROM — prepositionটা অবশ্যই দরকার।",
                en: "The verb 'learn' needs 'from' — Bengali 'কাছ থেকে' hides it. Formal: 'from whom we learnt'; natural: 'we learnt a lot from.'",
                hi: "'learn' के साथ 'from' ज़रूरी है — बांग्ला 'काछ थेके' अनुवाद में छूट जाता है। formal: 'from whom'; natural: '...a lot from'।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "পরীক্ষার খাতায় formal ছাঁচ (preposition + whom/which) লিখলে নম্বর পাওয়ার সম্ভাবনা বেশি; কথায় বন্ধুদের সাথে preposition শেষে রাখুন — দুটোই ভুল নয়।",
          en: "In exams, prefer the formal pattern (preposition + whom/which); in conversation, ending with the preposition is perfectly natural.",
          hi: "परीक्षा में formal रूप (preposition + whom/which) बेहतर; बातचीत में preposition अंत में बिल्कुल ठीक है।",
        },
        {
          bn: "কমা দেখলে জিজ্ঞেস করুন — এই ক্লজ বাদ দিলে কি বাক্যের মূল তথ্য বদলে যায়? যদি বদলে যায়, তবে কমা ভুল বসানো হয়েছে।",
          en: "Test every comma: if removing the clause changes the core meaning, the commas are wrong.",
          hi: "हर कॉमा की जाँच करें: क्लॉज़ हटाने पर मुख्य अर्थ बदल जाता है तो कॉमा ग़लत है।",
        },
        {
          bn: "'who's' আর 'whose' কনফিউশন এড়াতে উচ্চারণে নয়, অর্থে বিশ্বাস করুন — মালিকানা = whose, সংক্ষিপ্ত 'is/has' = who's।",
          en: "Confuse 'who's' and 'whose'? Ask: possession → whose; 'is/has' → who's.",
          hi: "'who's' vs 'whose' confusion? स्वामित्व → whose; 'is/has' → who's.",
        },
        {
          bn: "একই বাক্যে relative pronoun আর him/it/her একসাথে আসবে না — 'The man who he called me' নয়, 'The man who called me'। বাংলা 'যে...সে' ঢাঁচা অনুবাদে একবারই যথেষ্ট।",
          en: "Never use a relative pronoun plus a resumptive pronoun in the same clause — one is enough.",
          hi: "Relative pronoun के साथ दूसरा pronoun (he/it) न जोड़ें — एक ही काफ़ी है।",
        },
      ],
    },
  },

  /* ── 2. Gerunds & Infinitives ───────────────────────────────── */
  {
    topic: "Gerunds & Infinitives",
    level: "intermediate",
    title: "Gerunds & Infinitives (Intermediate)",
    unit: 0,
    sortOrder: 8,
    data: {
      title: {
        bn: "জেরান্ড ও ইনফিনিটিভ (মধ্যম স্তর)",
        en: "Gerunds & Infinitives (Intermediate)",
        hi: "जेरंड्स और इनफिनिटिव्स (मध्यम स्तर)",
      },
      intro: {
        bn: "enjoy-এর পরে কি to, নাকি -ing? এই পাঠে দুটি নিয়ম পরিষ্কার হবে: কোন verb-এর পরে -ing আসে, কোনটার পরে to + verb। সাথে stop, remember, try-এর মতো verb-গুলোর পরে দুটোই বসতে পারে কিন্তু অর্থ বদলে যায় — সেই সূক্ষ্ম পার্থক্যও শিখব। নিয়ম মুখস্থ না করে ছাঁচে ফেলে রাখলেই লিখতে-বলতে আর ভুল হবে না।",
        en: "Some verbs take -ing (enjoy, avoid), others take to + verb (want, decide), and a few change meaning with each form (stop, remember, try). Learn the patterns, not isolated rules.",
        hi: "कुछ verbs के साथ -ing (enjoy, avoid), कुछ के साथ to + verb (want, decide), और कुछ के साथ दोनों लेकिन मतलब बदल जाता है (stop, remember, try)।",
      },
      roadmap: [
        {
          bn: "🏊 যে verb-গুলোর পরে সবসময় -ing: enjoy, avoid, mind, finish",
          en: "🏊 Verbs that always take -ing: enjoy, avoid, mind, finish",
          hi: "🏊 जिन verbs के बाद हमेशा -ing: enjoy, avoid, mind, finish",
        },
        {
          bn: "🚀 যে verb-গুলোর পরে to + verb: want, decide, hope, promise",
          en: "🚀 Verbs that take to + verb: want, decide, hope, promise",
          hi: "🚀 जिन verbs के बाद to + verb: want, decide, hope, promise",
        },
        {
          bn: "🎭 stop, remember, try, forget — একই verb, অর্থ উল্টে যায়",
          en: "🎭 stop, remember, try, forget — same verb, flipped meaning",
          hi: "🎭 stop, remember, try, forget — वही verb, मतलब पलट जाता है",
        },
        {
          bn: "🔗 preposition-এর পরে -ing, adjective-এর পরে to",
          en: "🔗 -ing after prepositions, to after adjectives",
          hi: "🔗 preposition के बाद -ing, adjective के बाद to",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🏊 verb + -ing: enjoy, avoid, mind, finish",
            en: "🏊 verb + -ing: enjoy, avoid, mind, finish",
            hi: "🏊 verb + -ing: enjoy, avoid, mind, finish",
          },
          lead: {
            bn: "প্রথম পরিবার: এই verb-গুলোর পরে -ing ছাড়া কিছুই চলে না।",
            en: "Family one: after these verbs, nothing but -ing works.",
            hi: "पहला परिवार: इन verbs के बाद -ing के अलावा कुछ नहीं चलता।",
          },
          points: [
            { bn: "**enjoy, avoid, mind, finish** — এই পরিবারের পরে সবসময় -ing, কখনো to + verb নয়।", en: "**enjoy, avoid, mind, finish** — after this family, always -ing, never to + verb.", hi: "**enjoy, avoid, mind, finish** — इस परिवार के बाद हमेशा -ing, to + verb कभी नहीं।" },
            { bn: "তালিকা আরও বড়: practise, suggest, keep, can't stand — সবাই একই -ing পরিবারের সদস্য।", en: "The list is longer: practise, suggest, keep, can't stand — all members of the same -ing family.", hi: "सूची और लंबी है: practise, suggest, keep, can't stand — सब उसी -ing परिवार के सदस्य।" },
            { bn: "বাংলায় 'খেলতে ভালো লাগে' — 'তে' শব্দটা to-কে টেনে আনে; অথচ বাংলার অব্যয় ইংরেজি to নয়!", en: "Bengali says 'khelte bhalo lage' — that '-তে' ending drags in a 'to'; but Bengali endings are not the English to!", hi: "बांग्ला 'খেলতে ভালো লাগে' का '-তे' सुनकर learners 'to' जोड़ देते हैं — पर बांग्ला के अव्यय अंग्रेज़ी का to नहीं!" },
            { bn: "**go + ক্রিয়াকলাপ = -ing**: go shopping, go swimming, go fishing।", en: "**go + activity = -ing**: go shopping, go swimming, go fishing.", hi: "**go + activity = -ing**: go shopping, go swimming, go fishing।" },
            { bn: "Would you mind opening the window? — এই ভদ্র অনুরোধের ছাঁচটা পুরোটা মুখস্থ করে ফেলুন।", en: "Would you mind opening the window? — memorise this polite request pattern as one whole chunk.", hi: "Would you mind opening the window? — यह polite request का ढाँचा पूरा रट लें।" },
          ],
          formula: {
            bn: "কর্তা + enjoy / avoid / mind / finish + verb-ing",
            en: "subject + enjoy / avoid / mind / finish + verb-ing",
            hi: "कर्ता + enjoy / avoid / mind / finish + verb-ing",
          },
          examples: [
            {
              wrong: "I enjoy to play cricket in the afternoon.",
              right: "I enjoy playing cricket in the afternoon.",
              note: {
                bn: "enjoy-এর পরে -ing নিশ্চিত। বাংলা 'খেলতে ভালো লাগে'-র 'তে' অনুবাদে to ঢুকে যায় — অথচ ইংরেজিতে enjoy + -ing ছাড়া কিছু চলে না।",
                en: "'Enjoy' is always followed by -ing. The Bengali '-তে' (khelte bhalo lage) is a false friend of 'to.'",
                hi: "'enjoy' के बाद हमेशा -ing। बांग्ला '-ते' का 'to' से कोई लेना-देना नहीं।",
              },
            },
            {
              wrong: "Would you mind to open the window?",
              right: "Would you mind opening the window?",
              note: {
                bn: "mind একটি -ing verb — polite request-এর এই ছাঁচটা দৈনন্দিন ইংরেজিতে প্রতিদিন লাগে, পুরোটা মুখস্থ করে ফেলুন।",
                en: "'Mind' takes -ing: 'Would you mind opening...?' — a daily politeness pattern worth memorising whole.",
                hi: "'mind' के बाद -ing: 'Would you mind opening...?' — यह पैटर्न रट लें।",
              },
            },
            {
              wrong: "She avoided to answer my question.",
              right: "She avoided answering my question.",
              note: {
                bn: "avoid, admit, deny, suggest — এরা সবাই -ing পরিবারের সদস্য। একসাথে মুখস্থ করলে আলাদা করে ভাবতে হবে না।",
                en: "avoid, admit, deny and suggest all take -ing; learn them as one family.",
                hi: "avoid, admit, deny, suggest — सब -ing लेते हैं; एक साथ याद करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚀 verb + to-infinitive: want, decide, hope, promise",
            en: "🚀 verb + to-infinitive: want, decide, hope, promise",
            hi: "🚀 verb + to-infinitive: want, decide, hope, promise",
          },
          lead: {
            bn: "দ্বিতীয় পরিবার: পরিকল্পনা আর ইচ্ছার verb — এরা পরে to + verb চায়।",
            en: "Family two: the plan-makers — they take to + verb after them.",
            hi: "दूसरा परिवार: योजना वाले verbs — इनके बाद to + verb चाहिए।",
          },
          points: [
            { bn: "**want, decide, hope, promise** — এদের পরে to + verb বসে।", en: "**want, decide, hope, promise** — after these, to + verb follows.", hi: "**want, decide, hope, promise** — इनके बाद to + verb आता है।" },
            { bn: "পরিবারের বাকি সদস্যরা: plan, agree, refuse, learn — এরাও to + verb নেয়।", en: "The rest of the family: plan, agree, refuse, learn — they too take to + verb.", hi: "परिवार के बाक़ी सदस्य: plan, agree, refuse, learn — ये भी to + verb लेते हैं।" },
            { bn: "'আমি গাড়ি কেনার কথা ভাবছি' → I am thinking to buy a car ভুল — সঠিক: thinking of buying বা plan to buy।", en: "'আমি গাড়ি কেনার কথা ভাবছি' → 'I am thinking to buy a car' is wrong — say thinking of buying or plan to buy.", hi: "'आमি গাড়ি কেনার কথা ভাবছি' → 'I am thinking to buy a car' ग़लत — कहें thinking of buying या plan to buy।" },
            { bn: "**suggest** কখনো মানুষ + to + verb নেয় না: She suggested me to go ভুল — suggested that I go ঠিক।", en: "**suggest** never takes a person + to + verb: 'She suggested me to go' is wrong — 'suggested that I go' is right.", hi: "**suggest** कभी व्यक्ति + to + verb नहीं लेता: 'She suggested me to go' ग़लत — 'suggested that I go' सही।" },
            { bn: "decide আর enjoy পরস্পরের বিপরীত পরিবার — দুটো তালিকা পাশাপাশি মুখস্থ করুন।", en: "Decide and enjoy are opposite families — keep the two lists side by side and memorise them together.", hi: "Decide और enjoy एक-दूसरे के विपरीत परिवार — दोनों सूचियाँ साथ-साथ रखकर याद करें।" },
          ],
          formula: {
            bn: "কর্তা + want / decide / hope / promise / plan + to + verb",
            en: "subject + want / decide / hope / promise / plan + to + verb",
            hi: "कर्ता + want / decide / hope / promise / plan + to + verb",
          },
          examples: [
            {
              wrong: "I am thinking to buy a new phone.",
              right: "I am thinking of buying a new phone.",
              note: {
                bn: "think-এর পরে পরিকল্পনা বোঝাতে of + -ing। 'ভাবছি কিনব' ঢাঁচাটা বাংলা-ইংরেজির সবচেয়ে পরিচিত ভুলগুলোর একটা।",
                en: "'Think of + -ing' expresses a plan under consideration; 'thinking to buy' is a classic South Asianism.",
                hi: "'think of + -ing' सही रूप है; 'thinking to buy' एक आम दक्षिण एशियाई ग़लती है।",
              },
            },
            {
              wrong: "My teacher suggested me to join the debate club.",
              right: "My teacher suggested that I join the debate club.",
              note: {
                bn: "suggest কখনো 'মানুষ + to + verb' নেয় না। হয় suggest + -ing, নয়তো suggest that + subject + verb। বাংলা 'আমাকে পরামর্শ দিল' অনুবাদে me ঢুকে যায়।",
                en: "'Suggest' never takes an object before a to-infinitive; use 'suggested that I join' or 'suggested joining.'",
                hi: "'suggest' के साथ object + to-infinitive कभी नहीं चलता; 'suggested that I join' कहें।",
              },
            },
            {
              wrong: "We decided going to Cox's Bazar instead.",
              right: "We decided to go to Cox's Bazar instead.",
              note: {
                bn: "decide-এর পরে to-infinitive — decide আর enjoy পরস্পরের বিপরীত পরিবারে। দুটো তালিকা পাশাপাশি মুখস্থ করুন।",
                en: "'Decide' takes the to-infinitive — the opposite family from 'enjoy.' Keep the two lists side by side.",
                hi: "'decide' के बाद to-infinitive आता है — 'enjoy' के विपरीत दल। दोनों सूची साथ-साथ याद करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🎭 অর্থ বদলে যায়: stop, remember, try, forget",
            en: "🎭 Same verb, different meaning: stop, remember, try, forget",
            hi: "🎭 एक ही verb, अलग मतलब: stop, remember, try, forget",
          },
          lead: {
            bn: "একই verb, দুই অর্থ — ছোট্ট একটা -ing বা to পুরো গল্প উল্টে দেয়।",
            en: "Same verb, two meanings — one tiny -ing or to flips the whole story.",
            hi: "एक ही verb, दो मतलब — छोटा-सा -ing या to पूरी कहानी पलट देता है।",
          },
          points: [
            { bn: "**stop + -ing** = অভ্যাসটাই ছেড়ে দেওয়া: I stopped smoking = ধূমপান ছেড়ে দিলাম।", en: "**stop + -ing** = quit the habit: I stopped smoking = I gave up smoking.", hi: "**stop + -ing** = आदत छोड़ देना: I stopped smoking = धूम्रपान छोड़ दिया।" },
            { bn: "**stop + to** = অন্য কাজ থেকে বিরতি: I stopped to smoke = থেমে ধূমপান করলাম।", en: "**stop + to** = pause one activity to do another: I stopped to smoke = I paused in order to smoke.", hi: "**stop + to** = दूसरे काम के लिए रुकना: I stopped to smoke = रुककर धूम्रपान किया।" },
            { bn: "**remember + -ing** = কাজ করেছিলেন, স্মৃতি আছে: I remembered locking the door।", en: "**remember + -ing** = you did it and the memory remains: I remembered locking the door.", hi: "**remember + -ing** = काम हुआ था, याद है: I remembered locking the door।" },
            { bn: "**remember + to** = করতে ভুল হয়নি — দায়িত্ব পূরণ: I remembered to lock the door।", en: "**remember + to** = you didn't miss your duty: I remembered to lock the door.", hi: "**remember + to** = ज़िम्मेदारी नहीं भूले: I remembered to lock the door।" },
            { bn: "**try + -ing** = পরীক্ষামূলক চেষ্টা: try restarting the laptop।", en: "**try + -ing** = an experiment: try restarting the laptop.", hi: "**try + -ing** = प्रयोग: try restarting the laptop।" },
            { bn: "**try + to** = কঠিন প্রচেষ্টা: I tried to open it, but it was jammed।", en: "**try + to** = a great effort: I tried to open it, but it was jammed.", hi: "**try + to** = कठिन प्रयास: I tried to open it, but it was jammed।" },
            { bn: "**forget**-ও একই নিয়মে: forgot to bring = আনতেই ভুল; forgot bringing = এনেছিলেন, তারপর ভুলে গেছেন।", en: "**forget** follows the same rule: forgot to bring = never brought it; forgot bringing = brought it, then forgot the act.", hi: "**forget** भी वही नियम: forgot to bring = लाना भूल गए; forgot bringing = लाए थे, फिर भूल गए।" },
            { bn: "ছোট্ট একটা -ing না to — পুরো গল্প উল্টে দেয়!", en: "One tiny -ing or to — and the whole story flips!", hi: "छोटा-सा एक -ing या to — और पूरी कहानी पलट जाती है!" },
          ],
          formula: {
            bn: "-ing = কাজটা নিয়ে · to = কাজটার দিকে",
            en: "-ing = about the activity · to = toward the next action",
            hi: "-ing = काम के बारे में · to = काम की ओर",
          },
          table: {
            head: [
              { bn: "verb + gerund (-ing)", en: "verb + gerund (-ing)", hi: "verb + gerund (-ing)" },
              { bn: "verb + to-infinitive", en: "verb + to-infinitive", hi: "verb + to-infinitive" },
              { bn: "দুটোই নেয় — অর্থ বদলায়", en: "both — meaning changes", hi: "दोनों लेते हैं — मतलब बदलता है" },
            ],
            rows: [
              [{ bn: "enjoy, avoid, mind, finish", en: "enjoy, avoid, mind, finish", hi: "enjoy, avoid, mind, finish" }, { bn: "want, decide, hope, promise", en: "want, decide, hope, promise", hi: "want, decide, hope, promise" }, { bn: "stop — ছাড়া বনাম থামা", en: "stop — quit vs pause", hi: "stop — छोड़ना बनाम रुकना" }],
              [{ bn: "practise, suggest, keep, can't stand", en: "practise, suggest, keep, can't stand", hi: "practise, suggest, keep, can't stand" }, { bn: "plan, agree, refuse, learn", en: "plan, agree, refuse, learn", hi: "plan, agree, refuse, learn" }, { bn: "remember / forget — স্মৃতি বনাম দায়িত্ব", en: "remember / forget — memory vs duty", hi: "remember / forget — याद बनाम ज़िम्मेदारी" }],
              [{ bn: "go + ক্রিয়াকলাপ (go shopping)", en: "go + activity (go shopping)", hi: "go + activity (go shopping)" }, { bn: "would you like + to (would you like to sit?)", en: "would you like + to (would you like to sit?)", hi: "would you like + to (would you like to sit?)" }, { bn: "try — আজমানো বনাম চেষ্টা", en: "try — experiment vs effort", hi: "try — आज़माना बनाम कोशिश" }],
            ],
          },
          examples: [
            {
              wrong: "My father stopped to smoke for health reasons.",
              right: "My father stopped smoking for health reasons.",
              note: {
                bn: "'ছেড়ে দিলেন' মানে অভ্যাস বন্ধ — stopped smoking। stopped to smoke বললে মনে হবে হাঁটার পথে বিরতি নিয়ে ধূমপান করলেন!",
                en: "'Stopped smoking' = quit the habit. 'Stopped to smoke' = paused (e.g. mid-walk) in order to smoke.",
                hi: "'stopped smoking' = आदत छोड़ दी। 'stopped to smoke' = रुककर सिगरेट पीना।",
              },
            },
            {
              wrong: "I forgot bringing my admission card.",
              right: "I forgot to bring my admission card.",
              note: {
                bn: "কাজটা ভুলে গেছেন, করেননি — তাই forget + to do। forgot bringing বললে অর্থ দাঁড়ায় 'ব্রিং করেছিলাম, সেটা ভুলে গেছি' — অদ্ভুত শোনায়।",
                en: "The action never happened, so 'forgot to bring.' 'Forgot bringing' would mean you brought it and then forgot the act.",
                hi: "काम हुआ नहीं, तो 'forgot to bring'। 'forgot bringing' का मतलब होगा लाए थे पर भूल गए।",
              },
            },
            {
              wrong: "The screen is frozen — you should try to restarting it.",
              right: "The screen is frozen — you should try restarting it.",
              note: {
                bn: "try + -ing মানে 'একবার করে দেখো' — পরামর্শে এটাই মানানসই। try to restart ব্যাকরণগত ঠিক, তবে মানে হয় 'কঠিন চেষ্টা করো' — আবেদনের স্বর বদলে যায়।",
                en: "'Try + -ing' = experiment with it ('give it a go'). 'Try to + verb' is grammatical but means 'make an effort,' which changes the tone of the advice.",
                hi: "'try + -ing' = एक बार आज़माओ। 'try to + verb' सही है पर मतलब 'पूरी कोशिश करो' — सलाह का अंदाज़ बदल जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔗 preposition + -ing, adjective + to",
            en: "🔗 preposition + -ing, adjective + to",
            hi: "🔗 preposition + -ing, adjective + to",
          },
          lead: {
            bn: "preposition-এর পরে -ing, adjective-এর পরে to — দুই ছোট নিয়মে হাজারো বাক্য ঠিক হয়ে যায়।",
            en: "-ing after prepositions, to after feeling-adjectives — two small rules that fix thousands of sentences.",
            hi: "Preposition के बाद -ing, adjective के बाद to — दो नियमों से हज़ारों वाक्य ठीक हो जाते हैं।",
          },
          points: [
            { bn: "preposition-এর পরে আসল ক্রিয়া প্রায় সবসময় -ing রূপে আসে।", en: "A real verb after a preposition almost always arrives in its -ing form.", hi: "Preposition के बाद आने वाली असली क्रिया लगभग हमेशा -ing रूप में आती है।" },
            { bn: "জোড়াগুলো মুখস্থ করুন: **good at** swimming, interested in learning, afraid of flying, tired of waiting।", en: "Memorise the pairs: **good at** swimming, interested in learning, afraid of flying, tired of waiting.", hi: "जोड़े याद करें: **good at** swimming, interested in learning, afraid of flying, tired of waiting।" },
            { bn: "বাংলা 'ভালো তে', 'ভয় পাওয়া থেকে'-র প্রভাবে good in swimming বা afraid from dogs হয়ে যায় — দুটোই ভুল।", en: "Bengali 'ভালো তে' and 'ভয় পাওয়া থেকে' produce 'good in swimming' or 'afraid from dogs' — both wrong.", hi: "बांग्ला 'ভালো তে', 'ভয় পাওয়া থেকে' के प्रभाव से 'good in swimming' या 'afraid from dogs' बन जाता है — दोनों ग़लत।" },
            { bn: "adjective-এর পরে অনুভূতি বা প্রস্তুতি বোঝালে to + verb: happy to help, afraid to speak, eager to learn।", en: "Adjectives of feeling or readiness take to + verb: happy to help, afraid to speak, eager to learn.", hi: "भाव या तैयारी बताने वाले adjectives के बाद to + verb: happy to help, afraid to speak, eager to learn।" },
            { bn: "look forward to-র to-ও preposition — তাই I am looking forward to meeting you।", en: "The 'to' in 'look forward to' is a preposition too — hence I am looking forward to meeting you.", hi: "'look forward to' का 'to' भी preposition है — इसलिए I am looking forward to meeting you।" },
            { bn: "'for + -ing' কারণ বোঝায় (Thank you for helping me), আর happy to help বোঝায় প্রস্তুতি — দুজনের কাজ আলাদা।", en: "'For + -ing' explains a reason (Thank you for helping me), while happy to help shows readiness — different jobs.", hi: "'for + -ing' कारण बताता है (Thank you for helping me), जबकि happy to help तैयारी — दोनों का काम अलग है।" },
          ],
          formula: {
            bn: "preposition + verb-ing · adjective + to + verb",
            en: "preposition + verb-ing · adjective + to + verb",
            hi: "preposition + verb-ing · adjective + to + verb",
          },
          table: {
            head: [
              { bn: "ছাঁচ", en: "Pattern", hi: "ढाँचा" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "preposition + -ing", en: "preposition + -ing", hi: "preposition + -ing" }, { bn: "good at swimming, interested in learning", en: "good at swimming, interested in learning", hi: "good at swimming, interested in learning" }],
              [{ bn: "adjective + to + verb", en: "adjective + to + verb", hi: "adjective + to + verb" }, { bn: "happy to help, eager to learn", en: "happy to help, eager to learn", hi: "happy to help, eager to learn" }],
              [{ bn: "look forward to + -ing", en: "look forward to + -ing", hi: "look forward to + -ing" }, { bn: "I look forward to meeting you", en: "I look forward to meeting you", hi: "I look forward to meeting you" }],
            ],
          },
          examples: [
            {
              wrong: "My sister is very good in swimming.",
              right: "My sister is very good at swimming.",
              note: {
                bn: "বাংলা 'ভালো তে' — তাই in ভেসে আসে। ইংরেজি নিয়ম: good AT। একইভাবে interested in, afraid of, tired of মুখস্থ করুন।",
                en: "Bengali 'ভালো তে' smuggles in 'in'; English says good AT. Learn the pairs: interested in, afraid of, tired of.",
                hi: "बांग्ला 'भालो ते' के प्रभाव से 'in' आ जाता है; अंग्रेज़ी में good AT। interested in, afraid of भी याद रखें।",
              },
            },
            {
              wrong: "I am looking forward to meet you.",
              right: "I am looking forward to meeting you.",
              note: {
                bn: "এখানে to কোনো infinitive-চিহ্ন নয় — to হলো preposition (look forward TO), তাই পরে -ing লাগবেই। সবচেয়ে বিখ্যাত ফাঁদগুলোর একটা, প্রফেশনাল ইমেইলেও প্রতিদিন দেখা যায়।",
                en: "The 'to' in 'look forward to' is a preposition, not an infinitive marker — so it needs -ing. A famous trap, even in professional emails.",
                hi: "'look forward to' में 'to' preposition है, infinitive चिह्न नहीं — इसलिए -ing चाहिए। यह बहुत मशहूर जाल है।",
              },
            },
            {
              wrong: "Thank you for your offer — I am happy for helping you.",
              right: "Thank you for your offer — I am happy to help you.",
              note: {
                bn: "adjective + to + verb = কেন/কী করতে প্রস্তুত (happy to help)। 'for + -ing' তখনই বসে যখন কারণ ব্যাখ্যা করা হয় — 'Thank you FOR helping me' ঠিক, কিন্তু 'happy to help'।",
                en: "Adjective + to + verb shows readiness ('happy to help'). 'For + -ing' explains a reason ('Thank you for helping') — different job.",
                hi: "Adjective + to + verb तैयारी दिखाता है ('happy to help')। 'for + -ing' कारण बताता है ('Thank you for helping')।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "তালিকা আলাদা করে দেয়ালে টানান: enjoy/avoid/mind/finish/suggest/keep বনাম want/decide/hope/promise/plan/refuse। প্রতিদিন একবার উচ্চারণ করুন।",
          en: "Pin two lists on your wall: enjoy/avoid/mind/finish/suggest vs want/decide/hope/promise/plan/refuse. Say them once a day.",
          hi: "दो सूचियाँ दीवार पर लगाएँ: enjoy/avoid/mind/finish vs want/decide/hope/promise/plan/refuse। रोज़ एक बार बोलें।",
        },
        {
          bn: "'to'-এর পরে কী আসবে তা ঠিক করতে জিজ্ঞেস করুন — to কি এখানে preposition (of/at/for-এর মতো)? হ্যাঁ হলে -ing, না হলে base verb।",
          en: "Before choosing what comes after 'to', ask: is this 'to' a preposition (like at/for)? Yes → -ing; no → base verb.",
          hi: "'to' के आगे क्या आएगा, यह तय करने से पहले पूछें: क्या यह 'to' preposition है? हाँ → -ing; नहीं → verb।",
        },
        {
          bn: "stop/remember/try/forget-এর জন্য এক লাইনের মন্ত্র: -ing = কাজটা নিয়ে, to = কাজটার দিকে।",
          en: "One-line mantra for the tricky four: -ing = about the activity; to = toward the next action.",
          hi: "चार मुश्किल verbs का मंत्र: -ing = काम के बारे में; to = काम की ओर।",
        },
        {
          bn: "'suggested me to', 'discussed about', 'thinking to' — এই তিনটা বাক্যাংশ জীবনে লিখবেন না; ইমেইল পাঠানোর আগে এগুলো খুঁজে দেখুন।",
          en: "Banish 'suggested me to,' 'discussed about,' and 'thinking to' forever — search your own emails for them before sending.",
          hi: "'suggested me to', 'discussed about', 'thinking to' — ये तीन phrases कभी न लिखें; अपने emails में ढूँढ़कर सुधारें।",
        },
      ],
    },
  },

  /* ── 3. Modals: Deduction & Politeness ──────────────────────── */
  {
    topic: "Modals: Deduction & Politeness",
    level: "intermediate",
    title: "Modals: Deduction & Politeness (Intermediate)",
    unit: 0,
    sortOrder: 9,
    data: {
      title: {
        bn: "মোডাল: অনুমান ও ভদ্রতা (মধ্যম স্তর)",
        en: "Modals: Deduction & Politeness (Intermediate)",
        hi: "मोडल: अनुमान और विनम्रता (मध्यम स्तर)",
      },
      intro: {
        bn: "চোখ বন্ধ করে ভাবুন — বন্ধু এখনো এল না, মোবাইলও ধরছে না। বলবেন 'He must be busy' নাকি 'He can't be busy'? এই পাঠে শিখব কীভাবে must, can't, might দিয়ে নিশ্চিত-অনিশ্চিত অনুমান করা যায়, অতীতের জন্য কোন রূপ বসে, আর বাংলার 'একটু আদর করে বলা' ইংরেজিতে কেমন হয়।",
        en: "When you guess without seeing, English uses must, can't and might — and adds 'have' for the past. This lesson also climbs the politeness ladder from 'Can you...?' to 'Would you mind...?'",
        hi: "जब बिना देखे अनुमान लगाना हो, तो अंग्रेज़ी must, can't, might इस्तेमाल करती है — अतीत के लिए 'have' जुड़ता है। इस पाठ में Can → Could → Would you mind की politeness ladder भी सीखेंगे।",
      },
      roadmap: [
        {
          bn: "🕵️ বর্তমানের অনুমান: must, can't, might-এর নিশ্চয়তার স্কেল",
          en: "🕵️ Deducing the present: the certainty scale of must, can't, might",
          hi: "🕵️ वर्तमान का अनुमान: must, can't, might की निश्चितता की सीढ़ी",
        },
        {
          bn: "⏳ অতীতের অনুমান: modal + have + V3 — একটাই ছাঁচ",
          en: "⏳ Deducing the past: one template — modal + have + V3",
          hi: "⏳ अतीत का अनुमान: एक ही ढाँचा — modal + have + V3",
        },
        {
          bn: "🪜 ভদ্রতার সিঁড়ি: Can → Could → Would you mind",
          en: "🪜 The politeness ladder: Can → Could → Would you mind",
          hi: "🪜 विनम्रता की सीढ़ी: Can → Could → Would you mind",
        },
        {
          bn: "🤲 অফার আর অনুমতি: Shall I, Would you like, May I",
          en: "🤲 Offering and permission: Shall I, Would you like, May I",
          hi: "🤲 पेशकश और अनुमति: Shall I, Would you like, May I",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🕵️ বর্তমানের অনুমান: must / can't / might",
            en: "🕵️ Deducing the present: must / can't / might",
            hi: "🕵️ वर्तमान का अनुमान: must / can't / might",
          },
          lead: {
            bn: "চোখে না দেখেও নিশ্চয়তার মাত্রা বোঝানোর তিনটা মোডাল — গুপ্তচরের মতো অনুমান।",
            en: "Three modals to guess without seeing — deduce like a detective, from sure to impossible.",
            hi: "बिना देखे अनुमान लगाने के तीन modals — जासूस की तरह, पक्के से असंभव तक।",
          },
          points: [
            { bn: "**must** — নিশ্চিত অনুমান: লাইট জ্বলছে — সে অবশ্যই ঘরে আছে (He must be home)।", en: "**must** — sure it's true: the lights are on — he must be home.", hi: "**must** — पक्का सच: लाइट जल रही है — वह घर पर ही होगा (He must be home)।" },
            { bn: "**can't** — নিশ্চিত অসম্ভব: ও সারাদিন অফিসে — এখন বাড়িতে হতে পারে না।", en: "**can't** — sure it's impossible: he's in the office all day — he can't be home now.", hi: "**can't** — पक्का असंभव: वह सारा दिन ऑफिस में — अभी घर पर होना असंभव है।" },
            { bn: "**might / may** — সম্ভব, পক্ষান্তর খোলা: He might be in the library।", en: "**might / may** — possible, both doors open: He might be in the library.", hi: "**might / may** — संभव, दोनों रास्ते खुले: He might be in the library।" },
            { bn: "না-বোধক অনুমানে mustn't বসানো সবচেয়ে চেনা ভুল — ইংরেজিতে সবসময় can't।", en: "Using mustn't for negative deduction is the most familiar mistake — English always uses can't there.", hi: "नकारात्मक अनुमान में mustn't लगाना सबसे चिरपरिचित ग़लती है — अंग्रेज़ी वहाँ हमेशा can't लेती है।" },
            { bn: "mustn't মানে নিষেধ — অনুমানের 'না' আর নিষেধ এক জিনিস নয়।", en: "Mustn't means forbidden — a negative guess and a prohibition are not the same thing.", hi: "Mustn't का मतलब है मना — अनुमान का 'नहीं' और रोक-टोक एक नहीं हैं।" },
            { bn: "অনুমানের must-এর পরে to ছাড়াই verb বসে: must be, might be, can't be।", en: "After a deduction 'must', the verb comes without to: must be, might be, can't be.", hi: "अनुमान के must के बाद to के बिना verb: must be, might be, can't be।" },
          ],
          formula: {
            bn: "কর্তা + must / can't / might + verb (to ছাড়া)",
            en: "subject + must / can't / might + bare verb (no to)",
            hi: "कर्ता + must / can't / might + verb (to के बिना)",
          },
          table: {
            head: [
              { bn: "মোডাল", en: "Modal", hi: "मोडल" },
              { bn: "আস্থার মাত্রা", en: "Certainty", hi: "आस्था की मात्रा" },
              { bn: "ছোট বাক্য", en: "Quick line", hi: "छोटा वाक्य" },
            ],
            rows: [
              [{ bn: "must", en: "must", hi: "must" }, { bn: "প্রায় নিশ্চিত (৯৫%)", en: "almost sure (95%)", hi: "पक्के के क़रीब (95%)" }, { bn: "He must be busy", en: "He must be busy", hi: "He must be busy" }],
              [{ bn: "may / might", en: "may / might", hi: "may / might" }, { bn: "সম্ভব (৫০%)", en: "possible (50%)", hi: "संभव (50%)" }, { bn: "He might be in the library", en: "He might be in the library", hi: "He might be in the library" }],
              [{ bn: "can't", en: "can't", hi: "can't" }, { bn: "নিশ্চিত অসম্ভব", en: "sure it's impossible", hi: "पक्का असंभव" }, { bn: "He can't be a fan", en: "He can't be a fan", hi: "He can't be a fan" }],
            ],
          },
          examples: [
            {
              wrong: "He never watches football — he mustn't be a fan.",
              right: "He never watches football — he can't be a fan.",
              note: {
                bn: "অনুমানের না-বোধক রূপ mustn't নয়, can't। mustn't মানে 'নিষিদ্ধ' — অর্থ পুরো উল্টে যায়। এটা বাঙালি শিক্ষার্থীদের সবচেয়ে ঘন ঘন ভুলগুলোর একটা।",
                en: "The negative of deduction 'must' is 'can't,' not 'mustn't' — mustn't means forbidden, flipping your meaning.",
                hi: "अनुमान का नकारात्मक रूप 'mustn't' नहीं, 'can't' है — mustn't का अर्थ 'मना' होता है।",
              },
            },
            {
              wrong: "She studied all night, so she must to be exhausted.",
              right: "She studied all night, so she must be exhausted.",
              note: {
                bn: "modal-এর পরে to আসে না — must be, might be, can't be। to শুধু সাধারণ infinitive-এ: want to be, hope to be।",
                en: "Modals are followed by the bare infinitive — 'must be,' never 'must to be.' 'To' belongs to ordinary infinitives like 'want to be.'",
                hi: "Modal के बाद to नहीं आता — 'must be'। 'to' केवल 'want to be' जैसे साधारण infinitive में।",
              },
            },
            {
              wrong: "Where is Rahim? — He might is in the library.",
              right: "Where is Rahim? — He might be in the library.",
              note: {
                bn: "might/may/could সবাই bare infinitive নেয়। 'He might is' বা 'he cans' — modal + to/modal + s কখনোই নয়। অতীতে যেতে হলে might + have + V3।",
                en: "might/may/could all take the bare infinitive: 'he might be.' Modal + to, or modal + -s, is always wrong.",
                hi: "might/may/could सभी के बाद bare infinitive आता है: 'he might be'। Modal + to या Modal + -s कभी नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⏳ অতীতের অনুমান: must have / can't have / may have",
            en: "⏳ Deducing the past: must have / can't have / may have",
            hi: "⏳ अतीत का अनुमान: must have / can't have / may have",
          },
          lead: {
            bn: "অতীতের ঘটনার ওপর অনুমান? একটাই ছাঁচ — modal + have + V3।",
            en: "Guessing about the past? One template covers everything: modal + have + V3.",
            hi: "अतीत पर अनुमान? एक ही ढाँचा काफ़ी है: modal + have + V3।",
          },
          points: [
            { bn: "অতীতের অনুমানের ছাঁচ একটাই: modal + have + past participle (V3)।", en: "Past guesses have one template: modal + have + past participle (V3).", hi: "अतीत के अनुमान का एक ही ढाँचा: modal + have + past participle (V3)।" },
            { bn: "জানালার কাচ ভাঙা — ওরা অবশ্যই বল খেলেছিল: They must have played।", en: "The window is broken — they must have played ball.", hi: "खिड़की का शीशा टूटा है — वे ज़रूर बॉल खेले होंगे: They must have played।" },
            { bn: "ও ফোন ধরছে না — ঘুমিয়ে পড়েছে হতে পারে: She may/might have fallen asleep।", en: "She isn't answering — she may/might have fallen asleep.", hi: "वह फ़ोन नहीं उठा रही — सो गई होगी: She may/might have fallen asleep।" },
            { bn: "have কখনো রূপ বদলায় না — must has gone কখনোই নয়; he/she/it হলেও শুধু have।", en: "Have never changes form — 'must has gone' is impossible; even with he/she/it, just have.", hi: "Have कभी रूप नहीं बदलता — 'must has gone' कभी नहीं; he/she/it होने पर भी सिर्फ़ have।" },
            { bn: "have-এর পরে V3: must have gone, forgotten, done — have + V2 (must have went) কখনো নয়।", en: "After have comes V3: must have gone, forgotten, done — never have + V2 ('must have went').", hi: "Have के बाद V3 आता है: must have gone, forgotten, done — have + V2 ('must have went') कभी नहीं।" },
            { bn: "'have' বাদ দেওয়া যায় না: may slept মানে এক ক্লজে দুটি কাল ঝড় করা!", en: "'Have' cannot be dropped: 'may slept' crashes two tenses into one clause!", hi: "'have' नहीं छूट सकता: 'may slept' में एक ही क्लॉज़ में दो काल टकरा जाते हैं!" },
          ],
          formula: {
            bn: "কর্তা + must / can't / may + have + V3 (অতীতের অনুমান)",
            en: "subject + must / can't / may + have + V3 (past deduction)",
            hi: "कर्ता + must / can't / may + have + V3 (अतीत का अनुमान)",
          },
          examples: [
            {
              wrong: "The floor is wet — it must has rained.",
              right: "The floor is wet — it must have rained.",
              note: {
                bn: "modal-এর পরে have কখনো রূপ বদলায় না — has নয়, had নয়, সবসময় have। subject থার্ড পার্সন হলেও না।",
                en: "'Have' after a modal never changes — not 'has,' not 'had,' even with he/she/it.",
                hi: "Modal के बाद 'have' कभी नहीं बदलता — he/she/it होने पर भी 'has' नहीं।",
              },
            },
            {
              wrong: "Sabbir didn't come — he must have forgot about the party.",
              right: "Sabbir didn't come — he must have forgotten about the party.",
              note: {
                bn: "have-এর পরে past participle (V3): forgotten, gone, done, seen। forgot/gone/did হলো V2 — 'have + V2' কখনো হয় না।",
                en: "After 'have' you need the V3 participle: forgotten, gone, done. 'Have + V2' (have went, have did) is never correct.",
                hi: "'have' के बाद V3 आता है: forgotten, gone, done। 'have went / have did' कभी सही नहीं।",
              },
            },
            {
              wrong: "Nadia isn't answering — she may slept already.",
              right: "Nadia isn't answering — she may have slept already.",
              note: {
                bn: "অতীতের অনুমানে 'have' বাদ দেওয়া যায় না — may + have + V3। may slept মানে এক ক্লজে দুটি কাল ঝড় করা।",
                en: "Past guesses need the full chain: may + have + V3. Dropping 'have' crashes two tenses into one clause.",
                hi: "अतीत के अनुमान में 'have' ज़रूरी है — may + have + V3। 'have' छोड़ने से दो काल टकरा जाते हैं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🪜 ভদ্রতার সিঁড়ি: Can → Could → Would you mind",
            en: "🪜 The politeness ladder: Can → Could → Would you mind",
            hi: "🪜 विनम्रता की सीढ़ी: Can → Could → Would you mind",
          },
          lead: {
            bn: "একই অনুরোধ তিন স্তরে — সিঁড়ি যত ওপরে, বাক্য তত কম সরাসরি।",
            en: "One request, three politeness levels — the higher you climb, the softer the sentence.",
            hi: "एक अनुरोध, विनम्रता के तीन स्तर — जितनी ऊपर सीढ़ी, वाक्य उतना कम सीधा।",
          },
          points: [
            { bn: "একই অনুরোধ তিন ধাপে বলা যায় — সিঁড়ি যত ওপরে, বাক্য তত কম সরাসরি।", en: "One request, three levels — the higher you climb, the less direct the sentence.", hi: "एक ही अनुरोध तीन स्तरों में — जितनी ऊपर सीढ़ी, वाक्य उतना कम सीधा।" },
            { bn: "ধাপ ১ — **Can you help me?** বন্ধু-বান্ধবের মধ্যে।", en: "Step 1 — **Can you help me?** — among friends.", hi: "स्तर 1 — **Can you help me?** — दोस्तों के बीच।" },
            { bn: "ধাপ ২ — **Could you help me?** শ্রদ্ধার স্বরে — অফিসের নিরাপদ ছাঁচ।", en: "Step 2 — **Could you help me?** — respectful, the safe office pattern.", hi: "स्तर 2 — **Could you help me?** — आदर भरे स्वर में, ऑफिस के लिए।" },
            { bn: "ধাপ ৩ — **Would you mind helping me?** সবচেয়ে ভদ্র।", en: "Step 3 — **Would you mind helping me?** — the most polite.", hi: "स्तर 3 — **Would you mind helping me?** — सबसे विनम्र।" },
            { bn: "to-ফাঁদ: Could you please to open ভুল — could-এর পরে bare verb, please ঢুকলেও to ফেরত আসে না।", en: "The to-trap: 'Could you please to open' is wrong — after could the verb is bare; adding 'please' doesn't revive 'to'.", hi: "to-जाल: 'Could you please to open' ग़लत — could के बाद bare verb; 'please' जोड़ने पर भी to वापस नहीं आता।" },
            { bn: "mind-এর পরে সবসময় -ing: Would you mind to help কখনোই নয়।", en: "After 'mind' always -ing: 'Would you mind to help' is never correct.", hi: "'mind' के बाद हमेशा -ing: 'Would you mind to help' कभी सही नहीं।" },
            { bn: "উত্তরের ফাঁদ: Would you mind opening the window?-এর সদুত্তর Not at all — ওঠা Yes মানে 'হ্যাঁ, আমি আপত্তি করছি'!", en: "The answer trap: the right reply to 'Would you mind opening the window?' is 'Not at all' — a quick 'Yes' means 'yes, I object'!", hi: "जवाब का जाल: 'Would you mind opening the window?' का सही उत्तर 'Not at all' — तुरंत 'Yes' कहने का मतलब 'हाँ, मुझे आपत्ति है'!" },
          ],
          formula: {
            bn: "Can → Could → Would you mind + -ing (ভদ্রতা বাড়ে)",
            en: "Can → Could → Would you mind + -ing (politeness rises)",
            hi: "Can → Could → Would you mind + -ing (विनम्रता बढ़ती है)",
          },
          table: {
            head: [
              { bn: "ধাপ", en: "Rung", hi: "स्तर" },
              { bn: "কোথায়", en: "Where", hi: "कहाँ" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [{ bn: "Can you…?", en: "Can you…?", hi: "Can you…?" }, { bn: "বন্ধু-বান্ধব", en: "friends", hi: "दोस्तों के बीच" }, { bn: "Can you help me?", en: "Can you help me?", hi: "Can you help me?" }],
              [{ bn: "Could you…?", en: "Could you…?", hi: "Could you…?" }, { bn: "অফিস, শ্রদ্ধার সাথে", en: "office, respectfully", hi: "ऑफिस, आदर से" }, { bn: "Could you help me?", en: "Could you help me?", hi: "Could you help me?" }],
              [{ bn: "Would you mind + -ing", en: "Would you mind + -ing", hi: "Would you mind + -ing" }, { bn: "সবচেয়ে ভদ্র", en: "most polite", hi: "सबसे विनम्र" }, { bn: "Would you mind helping me?", en: "Would you mind helping me?", hi: "Would you mind helping me?" }],
            ],
          },
          examples: [
            {
              wrong: "Would you mind to help me carry these bags?",
              right: "Would you mind helping me carry these bags?",
              note: {
                bn: "mind একটি -ing verb (জেরান্ড পাঠ মনে আছে?) — mind + to + verb কখনোই নয়। সিঁড়ির ওপরের ধাপটা পুরো বাক্য হিসেবে মুখস্থ করে ফেলুন।",
                en: "'Mind' takes -ing, always. Memorise the whole top rung as one chunk: 'Would you mind + -ing?'",
                hi: "'mind' के बाद सदा -ing आता है। पूरा फ़ॉर्मूला याद कर लें: 'Would you mind + -ing?'",
              },
            },
            {
              wrong: "Could you please to send me the report today?",
              right: "Could you please send me the report today?",
              note: {
                bn: "Could you please-এর পরে bare infinitive — please ঢুকলেও to ফেরত আসে না। 'please to send' হলো বাংলা 'অনুগ্রহ করে পাঠাতে'-র প্রভাব।",
                en: "'Could you please + bare verb' — adding 'please' doesn't revive 'to.' 'Please to send' mirrors Bengali 'অনুগ্রহ করে পাঠাতে' but is wrong.",
                hi: "'Could you please + verb' — 'please' जोड़ने पर भी 'to' वापस नहीं आता।",
              },
            },
            {
              wrong: "Can you borrow me your umbrella?",
              right: "Can you lend me your umbrella?",
              note: {
                bn: "দক্ষিণ এশিয়ার সর্বকালের ক্লাসিক! borrow = ধার নেওয়া, lend = ধার দেওয়া। বাংলা 'ধার দিতে পারবে?'-র 'ধার' শব্দটাই borrow-কে ডেকে আনে। অন্যকে দিতে বলছেন — তাই lend।",
                en: "The classic South Asian mix-up! You borrow FROM someone; you lend TO someone. Asking another person to give → lend.",
                hi: "क्लासिक ग़लती! borrow = लेना, lend = देना। दूसरे से माँग रहे हैं देने के लिए → lend।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🤲 অফার ও অনুমতি: Shall I / Would you like / May I",
            en: "🤲 Offering and permission: Shall I / Would you like / May I",
            hi: "🤲 पेशकश और अनुमति: Shall I / Would you like / May I",
          },
          lead: {
            bn: "মেহমানদারি আর অনুমতির চারটা তৈরি ছাঁচ — মুখস্থ থাকলে মুহূর্তে বলা যায়।",
            en: "Ready-made patterns for offering and asking permission — memorise them and they come out instantly.",
            hi: "पेशकश और अनुमति के तैयार ढाँचे — याद हों तो तुरंत निकल आते हैं।",
          },
          points: [
            { bn: "**Shall I bring some water?** — সাহায্যের অফার; 'Will I bring?' নয়।", en: "**Shall I bring some water?** — offering help; never 'Will I bring?'", hi: "**Shall I bring some water?** — मदद की पेशकश; 'Will I bring?' नहीं।" },
            { bn: "shall I-এর আসল স্বর: 'আমি কি করব, আপনার ইচ্ছা?' — আধুনিক ইংরেজিতে shall-এর এই কাজটাই সবচেয়ে জীবন্ত।", en: "The real tone of 'shall I': 'shall I do it, as you wish?' — the liveliest surviving job of shall in modern English.", hi: "'shall I' की असली आवाज़: 'मैं कर दूँ, आपकी इच्छा?' — आधुनिक अंग्रेज़ी में shall का सबसे जीवित काम यही है।" },
            { bn: "কিছু দেওয়ার অফারে **Would you like**: Would you like some tea? বা Would you like to sit?", en: "To offer something: **Would you like** — 'Would you like some tea?' or 'Would you like to sit?'", hi: "कुछ देने की पेशकश में **Would you like**: 'Would you like some tea?' या 'Would you like to sit?'" },
            { bn: "like-এর পরে to + verb বা সরাসরি noun — would you like ছাঁচে to বাধ্যতামূলক।", en: "After 'like' comes to + verb or a straight noun — in the 'would you like' pattern, 'to' is compulsory.", hi: "'like' के बाद to + verb या सीधे noun — 'would you like' ढाँचे में to अनिवार्य है।" },
            { bn: "অনুমতি চাইতে বন্ধুর কাছে: Can I sit here? — আরও ভদ্রভাবে Could I / May I sit here?", en: "Asking permission among friends: 'Can I sit here?' — more politely, 'Could I / May I sit here?'", hi: "दोस्तों से अनुमति: 'Can I sit here?' — और विनम्र होकर 'Could I / May I sit here?'" },
            { bn: "পরীক্ষক বা বড় লোকের কাছে **May I** সবচেয়ে মানানসই — বাংলা 'আসতে পারি, স্যার?' = May I come in, sir?", en: "With examiners or seniors, **May I** fits best — Bengali 'আসতে পারি, স্যার?' = 'May I come in, sir?'", hi: "परीक्षक या बड़ों के सामने **May I** सबसे उचित — 'May I come in, sir?' कक्षा में रोज़ काम आएगा!" },
          ],
          formula: {
            bn: "Shall I + verb…? · Would you like + noun / to + verb · May I + verb…?",
            en: "Shall I + verb…? · Would you like + noun / to + verb · May I + verb…?",
            hi: "Shall I + verb…? · Would you like + noun / to + verb · May I + verb…?",
          },
          table: {
            head: [
              { bn: "কাজ", en: "Job", hi: "काम" },
              { bn: "ছাঁচ", en: "Pattern", hi: "ढाँचा" },
            ],
            rows: [
              [{ bn: "সাহায্যের অফার", en: "offering help", hi: "मदद की पेशकश" }, { bn: "Shall I…?", en: "Shall I…?", hi: "Shall I…?" }],
              [{ bn: "কিছু দেওয়ার অফার", en: "offering a thing", hi: "कुछ देने की पेशकश" }, { bn: "Would you like…?", en: "Would you like…?", hi: "Would you like…?" }],
              [{ bn: "অনুমতি — বন্ধুর কাছে", en: "permission — friends", hi: "अनुमति — दोस्तों से" }, { bn: "Can I…?", en: "Can I…?", hi: "Can I…?" }],
              [{ bn: "অনুমতি — বড় লোকের কাছে", en: "permission — seniors", hi: "अनुमति — बड़ों से" }, { bn: "Could I…? / May I…?", en: "Could I…? / May I…?", hi: "Could I…? / May I…?" }],
            ],
          },
          examples: [
            {
              wrong: "It's hot outside — will I bring you a cold drink?",
              right: "It's hot outside — shall I bring you a cold drink?",
              note: {
                bn: "অফার করতে shall I (I/we বিষয়ক প্রশ্নে)। Will I শুনলে মনে হয় নিজের ভবিষ্যৎ সম্পর্কে তথ্য জানতে চাইছেন — অফার নয়। আধুনিক ইংরেজিতে shall-এর এই কাজটাই সবচেয়ে জীবন্ত।",
                en: "Offers to do something use 'Shall I...?' 'Will I...?' sounds like you're asking about your own future — not offering.",
                hi: "पेशकश के लिए 'Shall I...?' — 'Will I...?' सुनने में भविष्य की जानकारी माँगने जैसा लगता है।",
              },
            },
            {
              wrong: "Would you like drink some tea?",
              right: "Would you like to drink some tea?",
              note: {
                bn: "would you like + to + verb (বা সরাসরি noun: some tea)। like একা থাকলে -ing নেয়, কিন্তু would you like-এর পরে সবসময় to + verb — অফারের নির্দিষ্ট ছাঁচ।",
                en: "'Would you like + to + verb' (or a noun: 'some tea'). 'Like' alone takes -ing, but the offer pattern 'would you like' always wants 'to.'",
                hi: "'Would you like + to + verb' (या noun: 'some tea')। अकेला 'like' -ing लेता है, पर 'would you like' के साथ सदा 'to'।",
              },
            },
            {
              wrong: "Teacher, I can go to the toilet?",
              right: "Sir, may I go to the toilet?",
              note: {
                bn: "অনুমতির প্রশ্নে বাক্য ঘুরিয়ে বলতে হয় — 'I can go?' নয়, 'May I go?'। শ্রেণিকক্ষে may I বললে ভদ্রতা পূর্ণ হয়; 'can' চলে, কিন্তু 'may' পরীক্ষা-ইন্টারভিউতে নম্বর আনে। বাংলা স্বরটা তুলে ধরতে sir/ma'am যোগ করুন।",
                en: "Permission questions need inversion: 'May I go...?' — not 'I can go?' 'May' is the polished classroom/exam choice; 'can' is fine informally.",
                hi: "अनुमति में वाक्य पलटता है: 'May I go...?' — 'I can go?' नहीं। कक्षा-परीक्षा में 'may' सबसे शिष्ट है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "অনুমানের স্কেল মুখস্থ করুন: must (৯৫% নিশ্চিত) → may/might (৫০%) → can't (নিশ্চিত না)। অতীতে গেলে মাঝখানে have + V3 বসান।",
          en: "Memorise the certainty scale: must (95% sure) → may/might (50%) → can't (sure it's false). For the past, insert have + V3.",
          hi: "निश्चितता का स्केल याद करें: must → may/might → can't। अतीत के लिए बीच में have + V3 जोड़ें।",
        },
        {
          bn: "mustn't আর can't-এর পার্থক্য জীবনে ভুলবেন না: mustn't = নিষেধ, can't = অসম্ভব। অনুমানে 'না' আসলে সবসময় can't।",
          en: "Never confuse mustn't (forbidden) with can't (impossible). For negative deduction, always can't.",
          hi: "mustn't (मना) और can't (असंभव) में अंतर कभी न भूलें। नकारात्मक अनुमान में सदा can't।",
        },
        {
          bn: "অফিসের ইমেইলে সবচেয়ে নিরাপদ অনুরোধ: 'Could you please...?' আর সবচেয়ে ভদ্র: 'Would you mind + -ing...?' রাজি হলে উত্তর দিন 'Not at all' বা 'Sure'।",
          en: "Safest office request: 'Could you please...?' Most polite: 'Would you mind + -ing...?' Agree by answering 'Not at all' or 'Sure.'",
          hi: "ऑफिस के लिए सुरक्षित: 'Could you please...?' सबसे विनम्र: 'Would you mind + -ing...?' जवाब: 'Not at all' या 'Sure'।",
        },
        {
          bn: "বাজারে-দোকানে কাজে লাগবে এই তিন ছাঁচ: 'Could I have...?', 'Would you like...?', 'Shall I...?' — রোজ একবার জোরে বলুন, মুখে বসে যাবে।",
          en: "Shop-ready chunks: 'Could I have...?', 'Would you like...?', 'Shall I...?' — say each aloud daily until automatic.",
          hi: "दुकान-तैयार वाक्यांश: 'Could I have...?', 'Would you like...?', 'Shall I...?' — रोज़ ज़ोर से बोलें।",
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_V2A2;
