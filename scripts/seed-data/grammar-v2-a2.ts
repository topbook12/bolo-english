// ─── Learning-path grammar seeds: INTERMEDIATE batch A2 (3 lessons) ───
// Part of Task 9 (library enrichment). TriText = { bn, en, hi } — Bengali is
// the PRIMARY explanation language. quiz omitted (reserved for future).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV2Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number; // 1-5 = on the learning path; 0 = extra library lesson
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V2_A2: SeedGrammarV2Entry[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Relative Clauses
  // ─────────────────────────────────────────────────────────────
  {
    topic: "Relative Clauses",
    level: "intermediate",
    title: "Relative Clauses (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "who / which / that — কর্তা ও কর্ম হিসেবে",
            en: "who / which / that — subject and object",
            hi: "who / which / that — कर्ता और कर्म के रूप में",
          },
          body: {
            bn: "মানুষের জন্য who (বা that), জিনিস বা প্রাণীর জন্য which (বা that) বসে। যখন relative pronoun-টি ক্লজের কর্তা (subject) — 'The girl who won the prize is my sister' — তখন ওটা বাদ দেওয়া যায় না। কিন্তু কর্ম (object) হলে — 'The film (which/that) we watched was long' — প্রনাউন বাদ দেওয়া যায়, আর এটাই স্বাভাবিক ইংরেজি। বাঙালি শিক্ষার্থীদের সবচেয়ে পরিচিত ভুল: কর্ম থাকা সত্ত্বেও পেছনে him/it বসিয়ে দেওয়া — ইংরেজিতে কর্ম একবারই বসে।",
            en: "Use who (or that) for people and which (or that) for things. When the relative pronoun is the subject, it cannot be dropped. When it is the object, it can — and usually should — be left out for a natural sound.",
            hi: "लोगों के लिए who (या that), चीज़ों के लिए which (या that)। जब relative pronoun subject हो तो उसे हटाया नहीं जा सकता; object हो तो हटा सकते हैं — और हटाना ही बेहतर लगता है।",
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
            bn: "কমা বদলে দেয় অর্থ: defining vs non-defining",
            en: "Commas change the meaning: defining vs non-defining",
            hi: "कॉमा बदलता है मतलब: defining vs non-defining",
          },
          body: {
            bn: "কমা ছাড়া 'My brother who lives in Chattogram is a sailor' বোঝায় আমার একাধিক ভাই আছে, আর আমি চট্টগ্রামের ভাইটাকে আলাদা করে চিহ্নিত করলাম (defining)। আর কমা দিয়ে 'My brother, who lives in Chattogram, is a sailor' বোঝায় আমার ভাই একজনই, তিনি চট্টগ্রামে থাকেন — শুধু অতিরিক্ত তথ্য (non-defining)। মনে রাখবেন: non-defining ক্লজে that ব্যবহার করা যায় না, আর এই ক্লজ বাদ দিলেও বাক্যের মূল অর্থ অক্ষত থাকে।",
            en: "No commas = defining (tells us exactly which person/thing). Commas = non-defining (extra information; the sentence still works without it). Never use 'that' after a comma.",
            hi: "बिना कॉमा = defining (कौन-सा वाला पहचान)। कॉमा के साथ = non-defining (अतिरिक्त जानकारी)। कॉमा के बाद 'that' कभी नहीं आता।",
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
            bn: "whose, where, when — আর কর্ম-প্রনাউন বাদ দেওয়া",
            en: "whose, where, when — and dropping the object pronoun",
            hi: "whose, where, when — और object pronoun हटाना",
          },
          body: {
            bn: "whose = যার (মালিকানা) — 'the boy whose father is a pilot'। where = যেখানে (স্থান) — 'the café where we first met'। when = যখন (সময়) — 'the year when everything changed'। খেয়াল রাখুন: where ব্যবহার করলে শেষে in/at/on আর বসে না, কারণ where নিজেই সেই preposition-এর কাজ করে। আর কর্ম-অবস্থানের who/which/that বাদ দিলে বাক্য আরও স্বাভাবিক শোনায়।",
            en: "Use whose for possession, where for places, when for times. After 'where,' never add another in/at/on. And remember: an object who/which/that can usually be dropped.",
            hi: "कब्ज़े के लिए whose, जगह के लिए where, समय के लिए when। 'where' के बाद अलग से in/at/on नहीं लगता। object वाला who/which/that आमतौर पर हटा सकते हैं।",
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
                en: "For time, use 'when' (or drop the pronoun); 'which' alone would make 'the year' the object of nothing.",
                hi: "समय के लिए 'when' (या pronoun हटा दें); अकेला 'which' यहाँ ग़लत लगता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "Relative ক্লজে preposition: formal vs স্বাভাবিক ইংরেজি",
            en: "Prepositions in relative clauses: formal vs natural English",
            hi: "रिलेटिव क्लॉज़ में preposition: formal vs natural English",
          },
          body: {
            bn: "দুটি বৈধ ছাঁচ আছে — formal: 'the house in which I grew up' (preposition + which/whom), আর informal: 'the house which I grew up in' (preposition শেষে)। বাঙালি শিক্ষার্থীদের তিনটি ভুল দেখা যায়: preposition-এর পরে that বসানো, যা কখনোই হয় না; whom-এর জায়গায় who; আর বাংলা 'সাথে/থেকে/দিয়ে' অনুবাদে preposition পুরোপুরি বাদ পড়ে যাওয়া। মনে রাখুন — preposition + whom/which বাক্যকে formal ও পরীক্ষাযোগ্য করে, preposition stranding করে conversational।",
            en: "Two correct patterns exist: formal 'the house in which I grew up' and informal 'the house which I grew up in.' But never 'in that,' never 'with who,' and never drop the preposition entirely.",
            hi: "दो सही ढंग हैं: formal 'the house in which I grew up' और informal 'the house which I grew up in'। पर 'in that' और 'with who' कभी नहीं — preposition के बाद whom/which ही आएगा।",
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

  // ─────────────────────────────────────────────────────────────
  // 2. Gerunds & Infinitives
  // ─────────────────────────────────────────────────────────────
  {
    topic: "Gerunds & Infinitives",
    level: "intermediate",
    title: "Gerunds & Infinitives (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "verb + -ing: enjoy, avoid, mind, finish",
            en: "verb + -ing: enjoy, avoid, mind, finish",
            hi: "verb + -ing: enjoy, avoid, mind, finish",
          },
          body: {
            bn: "enjoy, avoid, mind, finish, practise, suggest, keep, can't stand — এই verb-গুলোর পরে সবসময় -ing বসে, কখনো to + verb নয়। বাঙালি শিক্ষার্থীরা প্রায়ই 'I enjoy to play' বলেন, কারণ বাংলায় 'খেলতে ভালো লাগে' — 'তে' শব্দটা to-কে টেনে আনে। মনে রাখুন: বাংলার অব্যয় (তে, করে, দিয়ে) ইংরেজি to নয়! আরেকটা সূত্র: go + ক্রিয়াকলাপ = -ing (go shopping, go swimming)।",
            en: "After enjoy, avoid, mind, finish, suggest, keep and can't stand, always use -ing, never to + verb. The Bengali '-তে' ending tricks learners into adding 'to.'",
            hi: "enjoy, avoid, mind, finish, suggest, keep, can't stand के बाद हमेशा -ing आता है, to + verb नहीं। बांग्ला '-ते' सुनकर learners 'to' जोड़ देते हैं।",
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
            bn: "verb + to-infinitive: want, decide, hope, promise",
            en: "verb + to-infinitive: want, decide, hope, promise",
            hi: "verb + to-infinitive: want, decide, hope, promise",
          },
          body: {
            bn: "want, decide, hope, promise, plan, agree, refuse, learn — এদের পরে to + verb বসে। 'আমি গাড়ি কেনার কথা ভাবছি' বাংলা বাক্যটাই সবচেয়ে ধরা খাওয়ার জায়গা: অনেকে বলেন 'I am thinking to buy a car' — ভুল! সঠিক হলো think + of + -ing, বা plan + to buy। আরেকটা কমন ভুল: 'She suggested me to go' — suggest-এর পরে কখনো person + to + verb আসে না।",
            en: "After want, decide, hope, promise, plan, agree and refuse, use to + verb. Two famous traps: 'I am thinking to buy' (→ thinking of buying) and 'She suggested me to go' (→ suggested that I go).",
            hi: "want, decide, hope, promise, plan, agree, refuse के बाद to + verb। दो प्रसिद्ध जाल: 'I am thinking to buy' (→ thinking of buying) और 'She suggested me to go' (→ suggested that I go)।",
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
            bn: "অর্থ বদলে যায়: stop, remember, try, forget",
            en: "Same verb, different meaning: stop, remember, try, forget",
            hi: "एक ही verb, अलग मतलब: stop, remember, try, forget",
          },
          body: {
            bn: "'I stopped smoking' = ধূমপান ছেড়ে দিলাম (অভ্যাস বন্ধ)। 'I stopped to smoke' = ধূমপান করতে থামলাম (অন্য কাজ থেকে বিরতি)। 'I remembered locking the door' = লক করেছিলাম, মনে আছে। 'I remembered to lock the door' = লক করতে ভুল হয়নি। 'try + -ing' = পরীক্ষামূলক চেষ্টা (try restarting the laptop), 'try + to' = কঠিন প্রচেষ্টা (I tried to open it, but it was jammed)। ছোট্ট একটা -ing/to পুরো গল্প উল্টে দেয়!",
            en: "stop + -ing = quit the activity; stop + to = pause in order to do it. remember/forget + -ing = a memory of something done; + to = a duty not missed. try + -ing = experiment; try + to = make a great effort.",
            hi: "stop + -ing = आदत छोड़ना; stop + to = रुककर करना। remember/forget + -ing = पहले की बात की याद; + to = काम न भूलना। try + -ing = प्रयोग; try + to = पूरी कोशिश।",
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
            bn: "preposition + -ing, adjective + to",
            en: "preposition + -ing, adjective + to",
            hi: "preposition + -ing, adjective + to",
          },
          body: {
            bn: "preposition-এর পরে আসল ক্রিয়া হলে সে প্রায় সবসময় -ing রূপে আসে: 'good at swimming', 'interested in learning', 'afraid of flying', 'tired of waiting'। বাঙালি শিক্ষার্থীরা প্রায়ই 'good in swimming' বা 'afraid from dogs' বলেন — বাংলা 'ভালো তে', 'ভয় পাওয়া থেকে'-র প্রভাব। অন্যদিকে adjective-এর পরে ব্যক্তিগত অনুভূতি বা প্রস্তুতি বোঝালে to + verb: 'happy to help', 'afraid to speak', 'eager to learn'। সূত্র: preposition-এর পরে সবসময় -ing; adjective + to = কেন, কী করতে।",
            en: "A real verb after a preposition is almost always -ing: good at swimming, interested in learning. And adjectives of feeling take to + verb: happy to help, afraid to speak.",
            hi: "Preposition के बाद क्रिया आए तो लगभग हमेशा -ing: good at swimming, interested in learning। भाव बताने वाले adjectives के साथ to + verb: happy to help, afraid to speak।",
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
          hi: "दो सूची दीवार पर लगाएँ: enjoy/avoid/mind/finish vs want/decide/hope/promise/plan/refuse। रोज़ एक बार बोलें।",
        },
        {
          bn: "'to'-এর পরে কী আসবে তা ঠিক করতে জিজ্ঞেস করুন — to কি এখানে preposition (of/at/for-এর মতো)? হ্যাঁ হলে -ing, না হলে base verb।",
          en: "Before choosing after 'to,' ask: is this 'to' a preposition (like at/for)? Yes → -ing; no → base verb.",
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

  // ─────────────────────────────────────────────────────────────
  // 3. Modals: Deduction & Politeness
  // ─────────────────────────────────────────────────────────────
  {
    topic: "Modals: Deduction & Politeness",
    level: "intermediate",
    title: "Modals: Deduction & Politeness (Intermediate)",
    unit: 0,
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
      sections: [
        {
          heading: {
            bn: "বর্তমানের অনুমান: must / can't / might",
            en: "Deducing the present: must / can't / might",
            hi: "वर्तमान का अनुमान: must / can't / might",
          },
          body: {
            bn: "must = নিশ্চিত অনুমান ('লাইট জ্বলছে — সে অবশ্যই ঘরে আছে')। can't = নিশ্চিত অসম্ভব ('ও তো সারাদিন অফিসে — এখন বাড়িতে হতে পারে না')। might/may = সম্ভব, পক্ষান্তর খোলা। সবচেয়ে পরিচিত ভুল: না-বোধক অনুমানে mustn't বসানো — ইংরেজিতে নিশ্চিত অসম্ভব বোঝাতে সবসময় can't; mustn't মানে নিষেধ! আর মনে রাখুন — অনুমানের must-এর পরে to ছাড়াই verb বসে।",
            en: "must = sure it's true; can't = sure it's impossible; might/may = possible. The classic error is mustn't for negative deduction — English always uses can't there; mustn't means 'forbidden.'",
            hi: "must = पक्का सच लगता है; can't = पक्का असंभव; might/may = संभव है। सबसे आम ग़लती: नकारात्मक अनुमान में mustn't — वहाँ हमेशा can't आता है; mustn't का मतलब है 'मना है'।",
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
            bn: "অতীতের অনুমান: must have / can't have / may have",
            en: "Deducing the past: must have / can't have / may have",
            hi: "अतीत का अनुमान: must have / can't have / may have",
          },
          body: {
            bn: "অতীতের অনুমানের ছাঁচ: modal + have + past participle (V3)। 'জানালার কাচ ভাঙা — ওরা অবশ্যই বল খেলেছিল (must have played)'। 'ও ফোন ধরছে না — ঘুমিয়ে পড়েছে হতে পারে (may/might have fallen asleep)'। দুটো সাধারণ ভুল: have-এর জায়গায় has বসানো ('must has gone' — কখনোই না), আর V3-এর জায়গায় V2 ('must have went' → 'must have gone')।",
            en: "For past guesses: modal + have + past participle. Two common slips: 'must has gone' (never — have never changes) and 'must have went' (needs V3: gone).",
            hi: "अतीत का अनुमान: modal + have + past participle। दो आम चूक: 'must has gone' (कभी नहीं — have नहीं बदलता) और 'must have went' (V3 चाहिए: gone)।",
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
            bn: "ভদ্রতার সিঁড়ি: Can → Could → Would you mind",
            en: "The politeness ladder: Can → Could → Would you mind",
            hi: "विनम्रता की सीढ़ी: Can → Could → Would you mind",
          },
          body: {
            bn: "একই অনুরোধ তিন স্তরে বলা যায় — 'Can you help me?' (বন্ধু-বান্ধব), 'Could you help me?' (শ্রদ্ধার সাথে, অফিসে), 'Would you mind helping me?' (সবচেয়ে ভদ্র)। লক্ষ করুন — সিঁড়ি যত ওপরে, বাক্য তত কম সরাসরি। ভুল হয় দুই জায়গায়: 'Could you please to open' (to বাদ), আর 'Would you mind to help' — mind-এর পরে সবসময় -ing! আর উত্তরে সাবধান: 'Would you mind opening the window?'-এর সদুত্তর 'Not at all' — ওঠা 'Yes' মানে 'হ্যাঁ, আমি আপত্তি করছি'!",
            en: "One request, three levels: 'Can you...?' (friendly), 'Could you...?' (respectful), 'Would you mind + -ing...?' (most polite). Watch two traps: never 'Could you please to open,' and after 'mind' always -ing. And answering 'Yes' to 'Would you mind...?' actually means you refuse!",
            hi: "एक अनुरोध, तीन स्तर: 'Can you...?' (दोस्ताना), 'Could you...?' (आदरपूर्ण), 'Would you mind + -ing?' (सबसे विनम्र)। दो जाल: 'Could you please to open' नहीं, और 'mind' के बाद हमेशा -ing। 'Would you mind...?' का जवाब 'Yes' देने का मतलब है इनकार!",
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
            bn: "অফার ও অনুমতি: Shall I / Would you like / May I",
            en: "Offering and permission: Shall I / Would you like / May I",
            hi: "पेशकश और अनुमति: Shall I / Would you like / May I",
          },
          body: {
            bn: "মেহমানকে অফার করতে: 'Shall I bring some water?' — 'Will I bring?' নয়; shall I মানে 'আমি কি করব, আপনার ইচ্ছা?'। কিছু দেওয়ার অফারে 'Would you like some tea?' — like-এর পরে to + verb বা সরাসরি noun। অনুমতি চাইতে: বন্ধুর কাছে 'Can I sit here?', আরও ভদ্রভাবে 'Could I / May I sit here?' — পরীক্ষক বা বড় লোকের কাছে May I সবচেয়ে মানানসই। বাংলা 'আসতে পারি, স্যার?' = 'May I come in, sir?' — ভুলে গেলে দরজায় দাঁড়িয়ে থাকতে হবে!",
            en: "To offer help or things: 'Shall I bring some water?' (never 'Will I...'). To offer something: 'Would you like some tea?' or 'Would you like to sit?' To ask permission: 'Can I...?' with friends, 'Could I / May I...?' with seniors and examiners.",
            hi: "मदद या चीज़ की पेशकश: 'Shall I bring some water?' ('Will I' नहीं)। कुछ देने की पेशकश: 'Would you like some tea?' या 'Would you like to sit?' अनुमति: दोस्तों से 'Can I...?', बड़ों से 'Could I / May I...?'।",
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
