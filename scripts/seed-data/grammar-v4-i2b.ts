// ─── Grammar seeds v4: Intermediate I2b — Common Mistakes + Since vs For (2 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: grammar-v3-i2.ts.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_I2B: SeedGrammarV4Entry[] = [
  /* ── 1. Common Mistakes by Bengali Speakers ────────────────────────── */
  {
    topic: "Common Mistakes by Bengali Speakers",
    level: "intermediate",
    title: "Common Mistakes by Bengali Speakers (Intermediate)",
    unit: 0,
    sortOrder: 22,
    data: {
      title: {
        bn: "বাঙালিদের কমন ইংরেজি ভুল (মধ্যম স্তর)",
        en: "Common Mistakes by Bengali Speakers (Intermediate)",
        hi: "बांग्लाभाषियों की सामान्य अंग्रेज़ी गलतियाँ (मध्यम स्तर)",
      },
      intro: {
        bn: "এই পাঠ হাতে নেওয়ার আগে present perfect, basic prepositions আর মোডালের মূল গঠন জানা থাকা ভালো — আগের পাঠগুলো (Linking Words, Modals, Since vs For) শেষ করে এলে এখানের প্যাটার্নগুলো তৎক্ষণাৎ চেনা যাবে। বিষয়বস্তু: ক্রিয়া-প্রি-পজিশন কলোকেশন (depend ON, married TO), 'I am agree'-জাতীয় ক্রিয়া-ভুল, uncountable noun-এর ফাঁদ (informations, furnitures), শব্দক্রম-ক্যালক, suggest-প্যাটার্ন, ভারতীয়-ইংরেজি ফ্রেজ আর উচ্চারণ-ফাঁদ (v/b, s/sh) — প্রতিটার পেছনের বাংলা-উৎস চিনে চিরতরে শোধরানো।",
        en: "Before taking on this lesson, it helps to know the present perfect, basic prepositions and core modal forms — finishing the earlier lessons (Linking Words, Modals, Since vs For) will let you recognise these patterns instantly. Contents: verb-preposition collocations (depend ON, married TO), verb-form errors like 'I am agree', uncountable-noun traps (informations, furnitures), word-order calques, the suggest pattern, Indian-English phrases and pronunciation traps (v/b, s/sh) — fixing each by spotting the Bengali source underneath.",
        hi: "इस पाठ से पहले present perfect, basic prepositions और मोडल के मूल रूप जानना अच्छा है — पिछले पाठ (Linking Words, Modals, Since vs For) पूरे करके आएँगे तो यहाँ के पैटर्न तुरंत पहचानेंगे। विषय: क्रिया-preposition कोलोकेशन (depend ON, married TO), 'I am agree' जैसी क्रिया-गलतियाँ, uncountable noun के जाल (informations, furnitures), शब्द-क्रम के अनुवाद, suggest पैटर्न, भारतीय-अंग्रेज़ी वाक्यांश और उच्चारण-जाल (v/b, s/sh) — हर गलती का बांग्ला-स्रोत पहचानकर स्थायी सुधार।",
      },
      roadmap: [
        { bn: "🧭 ভুলের উৎস — মাথায় বাংলা, মুখে ইংরেজি", en: "🧭 Where the errors come from — Bengali in the head, English in the mouth", hi: "🧭 गलतियों का स्रोत — दिमाग में बांग्ला, मुँह पर अंग्रेज़ी" },
        { bn: "🏗️ শব্দক্রম: বাংলা SOV বনাম ইংরেজি SVO", en: "🏗️ Word order: Bengali SOV vs English SVO", hi: "🏗️ शब्द-क्रम: बांग्ला SOV बनाम अंग्रेज़ी SVO" },
        { bn: "✍️ লেখা শোধরানোর চার-ধাপ চেকলিস্ট", en: "✍️ The four-pass checklist for self-editing", hi: "✍️ खुद का लेखन सुधारने की चार-चरण चेकलिस्ट" },
        { bn: "🧩 ক্রিয়া-প্রি-পজিশনের দশটা জোড়া", en: "🧩 Ten verb-preposition pairs to memorise", hi: "🧩 क्रिया-preposition की दस जोड़ियाँ" },
        { bn: "⚠️ I am agree, didn't went, am knowing — তিন ফাঁদ", en: "⚠️ I am agree, didn't went, am knowing — three traps", hi: "⚠️ I am agree, didn't went, am knowing — तीन जाल" },
        { bn: "🚫 informations নয় — অগণনযোগ্য noun-এর নিয়ম", en: "🚫 No informations — the uncountable-noun rules", hi: "🚫 informations नहीं — uncountable noun के नियम" },
        { bn: "🎯 suggest-প্যাটার্ন: ব্যক্তি + to চলে না", en: "🎯 The suggest pattern: no 'person + to'", hi: "🎯 suggest पैटर्न: 'व्यक्ति + to' नहीं चलता" },
        { bn: "🗣️ উচ্চারণে v/b আর s/sh আলাদা করা", en: "🗣️ Telling v/b and s/sh apart", hi: "🗣️ v/b और s/sh को अलग करना" },
        { bn: "📖 নাদিয়ার দুই ইমেইলে সব ভুল চিনুন", en: "📖 Spot every error in Nadia's two emails", hi: "📖 नादिया के दो ईमेल में हर गलती पहचानें" },
      ],
      sections: [
        {
          heading: {
            bn: "🧭 ভুল কোথা থেকে আসে — কখন, কেন",
            en: "🧭 Where the mistakes come from — when and why",
            hi: "🧭 गलतियाँ कहाँ से आती हैं — कब, क्यों",
          },
          lead: {
            bn: "বেশিরভাগ ভুল ব্যাকরণের নয় — মাথার ভেতরের অনুবাদ-পাইপলাইনের।",
            en: "Most mistakes are not grammar errors — they come from the translation pipeline in your head.",
            hi: "अधिकांश गलतियाँ व्याकरण की नहीं — दिमाग की अनुवाद-पाइपलाइन की हैं।",
          },
          points: [
            { bn: "বেশিরভাগ ইংরেজি-ভুল হলো **অনুবাদ-ছায়া** — মাথায় আগে বাংলা বাক্য আসে, তারপর শব্দে শব্দে রূপান্তর।", en: "Most English errors are **translation shadows** — the Bengali sentence forms in the head first, then gets converted word by word.", hi: "अधिकांश अंग्रेज़ी-गलतियाँ **अनुवाद-छाया** हैं — दिमाग में पहले बांग्ला वाक्य आता है, फिर शब्द-दर-शब्द बदला जाता है।" },
            { bn: "ফলে প্রি-পজিশন গুলিয়ে যায়: depend on → 'depend of'।", en: "So prepositions get mixed up: depend on becomes 'depend of'.", hi: "इससे prepositions उलझ जाते हैं: depend on → 'depend of'।" },
            { bn: "অগণনযোগ্য noun-এ -s বসে যায়: 'informations', 'furnitures'।", en: "Uncountable nouns pick up -s: 'informations', 'furnitures'.", hi: "अगणनीय noun पर -s लग जाता है: 'informations', 'furnitures'।" },
            { bn: "বাংলার ক্রিয়া-গঠন সরাসরি কপি হয়: 'I am agree'।", en: "Bengali verb structures get copied directly: 'I am agree'.", hi: "क्रिया-संरचना सीधे कॉपी हो जाती है: 'I am agree'।" },
            { bn: "ভারত-বাংলাদেশের পুরনো অফিস-ইংরেজি প্রজন্মের পর প্রজন্ম চলে আসছে।", en: "Old office-English of the subcontinent travels down generation after generation.", hi: "उपमहाद्वीप का पुराना ऑफिस-इंग्लिश पीढ़ी-दर-पीढ़ी चला आ रहा है।" },
            { bn: "'do the needful', 'kindly revert', 'pass out' — আন্তর্জাতিক ইংরেজিতে কোনোটার অর্থ অন্য, কোনোটার অর্থ একেবারেই নেই।", en: "'do the needful', 'kindly revert', 'pass out' — in international English some mean something else, some mean nothing at all.", hi: "'do the needful', 'kindly revert', 'pass out' — अंतरराष्ट्रीय अंग्रेज़ी में कुछ का अर्थ कुछ और, कुछ का कुछ भी नहीं।" },
          ],
          examples: [
            { wrong: "Myself Rafi, and I am from Chattogram.", right: "I'm Rafi, and I'm from Chattogram.", note: { bn: "'Myself X' দিয়ে পরিচয় দেওয়া ভারতীয় ইংরেজি; নেটিভ ইংরেজিতে myself শুধু জোর দেওয়ার শব্দ (I did it myself)।", en: "Introducing yourself as 'Myself X' is Indian English; in native English myself only adds emphasis (I did it myself).", hi: "'Myself X' से परिचय भारतीय अंग्रेज़ी है; नेटिव अंग्रेज़ी में myself केवल बल देता है (I did it myself)।" } },
            { wrong: "Kindly do the needful and revert back to me.", right: "Please take the necessary action and reply to me.", note: { bn: "do the needful / revert back পুরনো অফিস-ইংরেজি; revert মানে ফিরে যাওয়া — উত্তর দেওয়া নয়, back তো দূরের কথা।", en: "do the needful / revert back are legacy office-English; revert means to go back — replying is 'reply', and 'back' doubles it.", hi: "do the needful / revert back पुरानी ऑफिस-इंग्लिश; revert का अर्थ वापस जाना — जवाब देना 'reply', और back तो दोहराव।" } },
            { wrong: "He passed out from Dhaka University in 2020.", right: "He graduated from Dhaka University in 2020.", note: { bn: "আন্তর্জাতিক ইংরেজিতে pass out = অজ্ঞান হওয়া! পাস করে বের হওয়া = graduate।", en: "In international English pass out = faint! Completing a course = graduate.", hi: "अंतरराष्ट्रीय अंग्रेज़ी में pass out = बेहोश होना! पाठ्यक्रम पूरा करना = graduate।" } },
            { wrong: "I am having two brothers and one sister.", right: "I have two brothers and one sister.", note: { bn: "মালিকানা-সম্পর্ক বোঝাতে have; 'am having' মানে এখন গ্রহণ করছি (I am having lunch)।", en: "Possession takes have; 'am having' means consuming/receiving right now (I am having lunch).", hi: "संबंध/अधिकार के लिए have; 'am having' का अर्थ अभी ग्रहण कर रहा हूँ (I am having lunch)।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — শব্দক্রম ও বাক্যের কঙ্কাল",
            en: "🏗️ Formation — word order and the sentence skeleton",
            hi: "🏗️ गठन — शब्द-क्रम और वाक्य की कंकाल",
          },
          lead: {
            bn: "বাংলা বাক্যে ক্রিয়া থাকে শেষে, ইংরেজিতে মাঝখানে — এই ফারাকই ভুলের জন্ম দেয়।",
            en: "Bengali keeps the verb at the end, English in the middle — that gap creates the errors.",
            hi: "बांग्ला वाक्य में क्रिया अंत में, अंग्रेज़ी में बीच में — यही अंतर गलतियाँ बनाता है।",
          },
          points: [
            { bn: "**বাংলা** — Subject + Object + Verb: 'আমি বইটা পড়ি'।", en: "**Bengali** — Subject + Object + Verb: 'আমি বইটা পড়ি'.", hi: "**बांग्ला** — Subject + Object + Verb: 'আমি বইটা পড়ি'।" },
            { bn: "**ইংরেজি** — Subject + Verb + Object: I read the book।", en: "**English** — Subject + Verb + Object: I read the book.", hi: "**अंग्रेज़ी** — Subject + Verb + Object: I read the book।" },
            { bn: "এই গড়নের ফারাকটাই শব্দক্রমের ভুল তৈরি করে।", en: "This gap in the skeleton is what creates the word-order errors.", hi: "यही ढाँचे का अंतर शब्द-क्रम की गलतियाँ बनाता है।" },
            { bn: "প্রশ্নে auxiliary সামনে যায়: 'What you are doing?' নয় — 'What are you doing?'।", en: "In questions the auxiliary moves first: not 'What you are doing?' but 'What are you doing?'.", hi: "प्रश्न में auxiliary आगे जाता है: 'What you are doing?' नहीं — 'What are you doing?'।" },
            { bn: "ভদ্রতার নিয়ম: 'I and my brother' নয় — 'My brother and I'।", en: "The courtesy rule: not 'I and my brother' but 'My brother and I'.", hi: "विनम्रता का नियम: 'I and my brother' नहीं — 'My brother and I'।" },
            { bn: "তুলনায় দ্বিগুণ তুলনা বাংলা-প্যাটার্ন: 'more better' নয় — better একাই তুলনা বোঝায়।", en: "Doubling the comparative is a Bengali pattern: not 'more better' — better alone compares.", hi: "तुलना में दोहरी तुलना बांग्ला-पैटर्न है: 'more better' नहीं — better अकेला ही तुलना करता है।" },
          ],
          formula: {
            bn: "Subject + Verb + Object — I read the book",
            en: "Subject + Verb + Object — I read the book",
            hi: "Subject + Verb + Object — I read the book",
          },
          table: {
            head: [{ bn: "ভাষা", en: "Language", hi: "भाषा" }, { bn: "গড়ন", en: "Pattern", hi: "ढाँचा" }, { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" }],
            rows: [
              [{ bn: "বাংলা", en: "Bengali", hi: "बांग्ला" }, { bn: "Subject + Object + Verb", en: "Subject + Object + Verb", hi: "Subject + Object + Verb" }, { bn: "আমি বইটা পড়ি", en: "আমি বইটা পড়ি", hi: "आमি বইটা পড়ি" }],
              [{ bn: "ইংরেজি", en: "English", hi: "अंग्रेज़ी" }, { bn: "Subject + Verb + Object", en: "Subject + Verb + Object", hi: "Subject + Verb + Object" }, { bn: "I read the book", en: "I read the book", hi: "I read the book" }],
            ],
          },
          examples: [
            { wrong: "What you are doing now?", right: "What are you doing now?", note: { bn: "প্রশ্নে auxiliary (are) subject-এর আগে; বাংলা ক্রম সরাসরি কপি করা যায় না।", en: "In questions the auxiliary (are) moves before the subject; the Bengali order cannot be copied.", hi: "प्रश्न में auxiliary (are) subject से पहले; बांग्ला क्रम सीधा कॉपी नहीं होता।" } },
            { wrong: "I and my cousin went to Cox's Bazar.", right: "My cousin and I went to Cox's Bazar.", note: { bn: "ভদ্রতার নিয়ম — নিজের নাম শেষে: my cousin and I।", en: "Courtesy order — your own name comes last: my cousin and I.", hi: "विनम्रता का नियम — अपना नाम अंत में: my cousin and I।" } },
            { wrong: "This phone is more better than mine.", right: "This phone is better than mine.", note: { bn: "better-ই তুলনা; more যোগ করলে দ্বিগুণ তুলনা হয়ে যায়।", en: "Better already compares; adding more doubles the comparison.", hi: "better खुद तुलना करता है; more जोड़ने पर दोहरी तुलना हो जाती है।" } },
            { wrong: "He gave to me the keys yesterday.", right: "He gave me the keys yesterday.", note: { bn: "give me the keys / give the keys to me — দুই প্যাটার্নের মিশ্রণ চলে না।", en: "Either give me the keys or give the keys to me — never a blend of both patterns.", hi: "give me the keys या give the keys to me — दोनों पैटर्न का मिश्रण नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "✍️ আভাস ও প্যাটার্ন — নিজের লেখা নিজে শোধরানোর চেকলিস্ট",
            en: "✍️ Cues and patterns — a self-editing checklist",
            hi: "✍️ संकेत और पैटर्न — खुद के लेखन का चेकलिस्ट",
          },
          lead: {
            bn: "লেখা জমা দেওয়ার আগে চার ধাপে চোখ বুলালে বেশিরভাগ ভুল নিজেই ধরা পড়ে।",
            en: "Four quick passes over your writing catch most mistakes before you submit.",
            hi: "जमा करने से पहले चार चरण में जाँच से ज़्यादातर गलतियाँ खुद पकड़ में आती हैं।",
          },
          points: [
            { bn: "লেখা শেষ করে চার ধাপে চোখ বুলান — প্রতিটা ধাপ একেকটা ভুল-পরিবার ধরে।", en: "After writing, sweep your eyes in four passes — each pass catches one error family.", hi: "लिखने के बाद चार चरण में जाँचें — हर चरण एक गलती-परिवार पकड़ता है।" },
            { bn: "**ধাপ ১ — ক্রিয়া:** agree, discuss, reach, enter, resemble, marry-র চারপাশে বাড়তি প্রি-পজিশন বা am/is আছে কি না।", en: "**Pass 1 — verbs:** around the agree, discuss, reach, enter, resemble, marry family, check for extra prepositions or a stray am/is.", hi: "**चरण 1 — क्रिया:** agree, discuss, reach, enter, resemble, marry परिवार के आसपास बाहरी preposition या am/is तो नहीं।" },
            { bn: "**ধাপ ২ — noun:** information, furniture, advice, luggage, equipment, news — এই দলের সাথে -s বা a আছে কি না খুঁজুন।", en: "**Pass 2 — nouns:** search for -s or a beside information, furniture, advice, luggage, equipment, news.", hi: "**चरण 2 — noun:** information, furniture, advice, luggage, equipment, news के साथ -s या a तो नहीं।" },
            { bn: "**ধাপ ৩ — কাল:** didn't + V1, since/for + perfect — সময়ের শব্দ দেখে কাল মিলান।", en: "**Pass 3 — tenses:** didn't + V1, since/for + perfect — match the tense to the time words.", hi: "**चरण 3 — काल:** didn't + V1, since/for + perfect — समय शब्द देखकर काल मिलाएँ।" },
            { bn: "**ধাপ ৪ — শব্দক্রম:** প্রশ্নে auxiliary সামনে, বর্ণনাশব্দ noun-এর আগে।", en: "**Pass 4 — order:** auxiliary first in questions, descriptors before nouns.", hi: "**चरण 4 — क्रम:** प्रश्न में auxiliary पहले, वर्णन शब्द noun से पहले।" },
          ],
          table: {
            head: [{ bn: "ধাপ", en: "Pass", hi: "चरण" }, { bn: "কী দেখবেন", en: "What to check", hi: "क्या देखें" }],
            rows: [
              [{ bn: "১ — ক্রিয়া", en: "1 — verbs", hi: "1 — क्रिया" }, { bn: "বাড়তি প্রি-পজিশন বা am/is", en: "extra prepositions or am/is", hi: "बाहरी preposition या am/is" }],
              [{ bn: "২ — noun", en: "2 — nouns", hi: "2 — noun" }, { bn: "-s বা a", en: "-s or a", hi: "-s या a" }],
              [{ bn: "৩ — কাল", en: "3 — tenses", hi: "3 — काल" }, { bn: "didn't + V1, since/for + perfect", en: "didn't + V1, since/for + perfect", hi: "didn't + V1, since/for + perfect" }],
              [{ bn: "৪ — শব্দক্রম", en: "4 — order", hi: "4 — क्रम" }, { bn: "প্রশ্নে auxiliary সামনে, বর্ণনাশব্দ noun-এর আগে", en: "auxiliary first in questions, descriptors before nouns", hi: "प्रश्न में auxiliary पहले, adjective noun से पहले" }],
            ],
          },
          examples: [
            { wrong: "Please listen my problem first.", right: "Please listen to my problem first.", note: { bn: "listen TO, wait FOR, depend ON — ক্রিয়া-প্রি-পজিশন জুটিতে মুখস্থ করুন।", en: "listen TO, wait FOR, depend ON — memorise verb-preposition pairs together.", hi: "listen TO, wait FOR, depend ON — क्रिया-preposition जोड़ी साथ रटें।" } },
            { wrong: "We reached to the station before the train left.", right: "We reached the station before the train left.", note: { bn: "reach ট্রানজিটিভ — object সরাসরি; 'reach to' বাংলা 'পৌঁছানোতে'-র ছায়া।", en: "Reach is transitive — direct object; 'reach to' shadows the Bengali verb form.", hi: "reach transitive है — सीधा object; 'reach to' अनुवाद-छाया है।" } },
            { wrong: "She told that she was busy.", right: "She said that she was busy.", note: { bn: "tell-এর সাথে ব্যক্তি লাগে (tell me), say-র সাথে কথা (say that)।", en: "Tell needs a person (tell me); say takes the words (say that).", hi: "tell के साथ व्यक्ति (tell me), say के साथ बात (say that)।" } },
            { wrong: "He is my cousin brother.", right: "He is my cousin.", note: { bn: "cousin নিজেই পুরুষ/মহিলা দুটোই বোঝায় — brother/sister যোগ করা ভারতীয় ইংরেজির বাড়তি।", en: "Covers male and female alike — adding brother/sister is an Indian-English extra.", hi: "cousin स्वयं पुरुष/महिला दोनों दर्शाता है — brother/sister जोड़ना भारतीय अंग्रेज़ी की बाड़।" } },
          ],
        },
        {
          heading: {
            bn: "🧩 প্রি-পজিশন কলোকেশন — কোন ক্রিয়ার সাথে কোনটা",
            en: "🧩 Preposition collocations — which one goes with which verb",
            hi: "🧩 Preposition कोलोकेशन — कौन-सी क्रिया के साथ कौन-सा",
          },
          lead: {
            bn: "প্রি-পজিশন যুক্তি মানে না — জোড়া হিসেবে মুখস্থ করলেই গোলমাল বন্ধ।",
            en: "Prepositions follow no logic — memorise the pairs and the confusion stops.",
            hi: "Prepositions तर्क नहीं मानते — जोड़ियाँ रट लें, उलझन बंद।",
          },
          points: [
            { bn: "প্রি-পজিশন কোনো যুক্তি মানে না — ক্রিয়ার সাথে জোড়া হিসেবে মুখস্থ করতেই হয়।", en: "Prepositions follow no logic — they must be memorised as pairs with their verbs.", hi: "Prepositions कोई तर्क नहीं मानते — क्रिया के साथ जोड़ी के रूप में रटना ही पड़ता है।" },
            { bn: "**depend ON** — নির্ভর করা: It depends on the weather।", en: "**depend ON** — to rely on: It depends on the weather.", hi: "**depend ON** — निर्भर करना: It depends on the weather।" },
            { bn: "**listen TO** — শোনা; wait FOR — অপেক্ষা করা।", en: "**listen TO** — listen; wait FOR — wait for someone.", hi: "**listen TO** — सुनना; wait FOR — इंतज़ार करना।" },
            { bn: "**married TO** — বিবাহিত: She is married to a doctor।", en: "**married TO** — married to: She is married to a doctor.", hi: "**married TO** — विवाहित: She is married to a doctor।" },
            { bn: "**arrive AT** — ছোট নির্দিষ্ট জায়গা; arrive IN — বড় শহর-দেশ।", en: "**arrive AT** — a small specific spot; arrive IN — a big city or country.", hi: "**arrive AT** — छोटी निश्चित जगह; arrive IN — बड़ा शहर-देश।" },
            { bn: "**belong TO** — অন্তর্ভুক্ত: This book belongs to me।", en: "**belong TO** — belongs to: This book belongs to me.", hi: "**belong TO** — संबंधित होना: This book belongs to me।" },
            { bn: "**congratulate ON** — অভিনন্দন জানানো; complain ABOUT — অভিযোগ করা।", en: "**congratulate ON** — congratulate; complain ABOUT — complain about.", hi: "**congratulate ON** — बधाई देना; complain ABOUT — शिकायत करना।" },
            { bn: "**apologize FOR** — ক্ষমা চাওয়া; believe IN — বিশ্বাস করা।", en: "**apologize FOR** — apologise; believe IN — believe in.", hi: "**apologize FOR** — माफ़ी माँगना; believe IN — विश्वास करना।" },
          ],
          table: {
            head: [{ bn: "ক্রিয়া", en: "Verb", hi: "क्रिया" }, { bn: "প্রি-পজিশন", en: "Preposition", hi: "Preposition" }, { bn: "অর্থ", en: "Meaning", hi: "अर्थ" }],
            rows: [
              [{ bn: "depend", en: "depend", hi: "depend" }, { bn: "ON", en: "ON", hi: "ON" }, { bn: "নির্ভর করা", en: "rely on", hi: "निर्भर करना" }],
              [{ bn: "listen", en: "listen", hi: "listen" }, { bn: "TO", en: "TO", hi: "TO" }, { bn: "শোনা", en: "listen", hi: "सुनना" }],
              [{ bn: "wait", en: "wait", hi: "wait" }, { bn: "FOR", en: "FOR", hi: "FOR" }, { bn: "অপেক্ষা করা", en: "wait", hi: "इंतज़ार करना" }],
              [{ bn: "married", en: "married", hi: "married" }, { bn: "TO", en: "TO", hi: "TO" }, { bn: "বিবাহিত", en: "married to", hi: "विवाहित" }],
              [{ bn: "arrive", en: "arrive", hi: "arrive" }, { bn: "AT / IN", en: "AT / IN", hi: "AT / IN" }, { bn: "পৌঁছানো (ছোট জায়গা AT / বড় শহর-দেশ IN)", en: "reach (small spot AT / big city-country IN)", hi: "पहुँचना (छोटी जगह AT / बड़ा शहर-देश IN)" }],
              [{ bn: "belong", en: "belong", hi: "belong" }, { bn: "TO", en: "TO", hi: "TO" }, { bn: "অন্তর্ভুক্ত", en: "belongs to", hi: "संबंधित होना" }],
              [{ bn: "congratulate", en: "congratulate", hi: "congratulate" }, { bn: "ON", en: "ON", hi: "ON" }, { bn: "অভিনন্দন জানানো", en: "congratulate", hi: "बधाई देना" }],
              [{ bn: "complain", en: "complain", hi: "complain" }, { bn: "ABOUT", en: "ABOUT", hi: "ABOUT" }, { bn: "অভিযোগ করা", en: "complain", hi: "शिकायत करना" }],
              [{ bn: "apologize", en: "apologize", hi: "apologize" }, { bn: "FOR", en: "FOR", hi: "FOR" }, { bn: "ক্ষমা চাওয়া", en: "apologise", hi: "माफ़ी माँगना" }],
              [{ bn: "believe", en: "believe", hi: "believe" }, { bn: "IN", en: "IN", hi: "IN" }, { bn: "বিশ্বাস করা", en: "believe in", hi: "विश्वास करना" }],
            ],
          },
          examples: [
            { wrong: "It depends of the weather.", right: "It depends on the weather.", note: { bn: "depend ON — of/with নয়।", en: "depend ON — not of or with.", hi: "depend ON — of/with नहीं।" } },
            { wrong: "I am married with a doctor.", right: "I am married to a doctor.", note: { bn: "married TO; তবে ক্রিয়া হিসেবে 'She married a doctor' — প্রি-পজিশন ছাড়া।", en: "married TO; as a verb, 'She married a doctor' takes no preposition.", hi: "married TO; क्रिया के रूप में 'She married a doctor' — preposition नहीं।" } },
            { wrong: "We arrived to Cox's Bazar at night.", right: "We arrived in Cox's Bazar at night.", note: { bn: "শহর-দেশে IN, স্টেশন-এয়ারপোর্টের মতো নির্দিষ্ট স্থানে AT — 'arrive to' বলে কিছু নেই।", en: "IN for cities and countries, AT for specific spots like stations and airports — 'arrive to' does not exist.", hi: "शहर-देश के लिए IN, स्टेशन-एयरपोर्ट जैसे स्थान के लिए AT — 'arrive to' कुछ नहीं।" } },
            { wrong: "He entered into the room quietly.", right: "He entered the room quietly.", note: { bn: "enter + object; enter into শুধু চুক্তি-আলোচনার অর্থে (enter into an agreement)।", en: "enter + object; enter into survives only in agreements and discussions (enter into an agreement).", hi: "enter + object; enter into केवल अनुबंध-विचार-विमर्श के अर्थ में (enter into an agreement)।" } },
            { wrong: "They congratulated him for his success.", right: "They congratulated him on his success.", note: { bn: "congratulate someone ON something — for নয়।", en: "congratulate someone ON something — not for.", hi: "congratulate someone ON something — for नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ 'I am agree' থেকে 'didn't went' — ক্রিয়া-রূপের ফাঁদ",
            en: "⚠️ From 'I am agree' to 'didn't went' — verb-form traps",
            hi: "⚠️ 'I am agree' से 'didn't went' — क्रिया-रूप के जाल",
          },
          lead: {
            bn: "দ্বি-ক্রিয়া, দ্বি-অতীত আর স্টেটিভ continuous — বাংলা-গঠন থেকে টেনে আনা তিন ফাঁদ।",
            en: "Double verbs, double pasts and stative continuous — three traps dragged in from Bengali structure.",
            hi: "द्वि-क्रिया, द्वि-अतीत और stative continuous — बांग्ला-संरचना से खिंचे आए तीन जाल।",
          },
          points: [
            { bn: "'আমি সম্মত' → **I agree** — agree নিজেই ক্রিয়া, তাই 'I am agree' দ্বি-ক্রিয়া ভুল।", en: "'আমি সম্মত' → **I agree** — agree is already a verb, so 'I am agree' doubles it wrongly.", hi: "'मैं सहमत' → **I agree** — agree स्वयं क्रिया है, इसलिए 'I am agree' दोहरी क्रिया है।" },
            { bn: "একই পরিবার: 'I am belong to...' নয় — belong ক্রিয়া।", en: "Same family: not 'I am belong to...' — belong is a verb.", hi: "वही परिवार: 'I am belong to...' नहीं — belong क्रिया है।" },
            { bn: "দ্বি-অতীতের ফাঁদ: বাংলায় 'যাইনি' এক শব্দে, তাই didn't + অতীত দুটোই বসিয়ে দেন — 'I didn't went'।", en: "The double-past trap: Bengali packs 'didn't go' into one word, so learners write didn't + past — 'I didn't went'.", hi: "द्वि-अतीत का जाल: स्थानीय भाषा में एक शब्द में अतीत-नकार, इसलिए didn't + past दोनों लिख दिया जाता है — 'I didn't went'।" },
            { bn: "নিয়ম: didn't-এর পরে V1 — didn't go, didn't eat, didn't come।", en: "Rule: after didn't comes V1 — didn't go, didn't eat, didn't come.", hi: "नियम: didn't के बाद V1 — didn't go, didn't eat, didn't come।" },
            { bn: "স্টেটিভ ক্রিয়া (know, believe, understand, love) continuous নয় — 'I am knowing' নয়, simple কালেই থাকে।", en: "Stative verbs (know, believe, understand, love) resist continuous — not 'I am knowing'; they stay simple.", hi: "स्टेटिव क्रियाएँ (know, believe, understand, love) continuous नहीं लेतीं — 'I am knowing' नहीं, simple काल में रहती हैं।" },
          ],
          formula: {
            bn: "didn't + V1 — didn't go, didn't eat, didn't come",
            en: "didn't + V1 — didn't go, didn't eat, didn't come",
            hi: "didn't + V1 — didn't go, didn't eat, didn't come",
          },
          examples: [
            { wrong: "I am agree with your opinion.", right: "I agree with your opinion.", note: { bn: "agree ক্রিয়া — সামনে am লাগে না; 'সম্মত আছি' শুনলেও ইংরেজিতে এক ক্রিয়াই যথেষ্ট।", en: "Agree is a verb — no am in front; even though it feels like a state, one verb suffices.", hi: "agree क्रिया है — आगे am नहीं; 'सहमत हूँ' सुनने पर भी एक क्रिया काफ़ी।" } },
            { wrong: "I didn't went to the class yesterday.", right: "I didn't go to the class yesterday.", note: { bn: "didn't নিজেই অতীত বোঝায় — পরে সবসময় V1।", en: "didn't already carries the past — V1 always follows.", hi: "didn't खुद अतीत दर्शाता है — बाद में हमेशा V1।" } },
            { wrong: "She is knowing the answer.", right: "She knows the answer.", note: { bn: "know/believe/understand-এর মতো স্টেটিভ ক্রিয়া continuous হয় না।", en: "Stative verbs like know, believe and understand do not take continuous forms.", hi: "know, believe, understand जैसी स्टेटिव क्रियाएँ continuous नहीं लेतीं।" } },
            { wrong: "One of my friend lives in Sylhet.", right: "One of my friends lives in Sylhet.", note: { bn: "one of + বহুবচন noun — বন্ধুদের একজন; verb থাকবে singular (lives)।", en: "one of + plural noun — one among the friends; the verb stays singular (lives).", hi: "one of + बहुवचन noun — दोस्तों में एक; क्रिया singular (lives)।" } },
            { wrong: "He didn't came and didn't called anyone.", right: "He didn't come and didn't call anyone.", note: { bn: "প্রতিটা didn't-এর পরেই V1 — প্যাটার্নটা পুরো বাক্যে ধরে রাখুন।", en: "V1 follows every didn't — keep the pattern across the whole sentence.", hi: "हर didn't के बाद V1 — पैटर्न पूरे वाक्य में बनाए रखें।" } },
          ],
        },
        {
          heading: {
            bn: "🚫 অগণনযোগ্য noun — informations নয়!",
            en: "🚫 Uncountable nouns — never informations!",
            hi: "🚫 अगणनीय noun — informations कभी नहीं!",
          },
          lead: {
            bn: "তথ্যগুলো, ফার্নিচারগুলো — বাংলা-ভাবনার -s ইংরেজিতে কখনো চলে না।",
            en: "informations, furnitures — the Bengali-minded -s never works in English.",
            hi: "informations, furnitures — बांग्ला-सोच का -s अंग्रेज़ी में कभी नहीं चलता।",
          },
          points: [
            { bn: "এরা কখনো বহুবচন হয় না: information, furniture, advice, luggage, baggage, equipment, news, homework।", en: "These never go plural: information, furniture, advice, luggage, baggage, equipment, news, homework.", hi: "ये कभी बहुवचन नहीं होते: information, furniture, advice, luggage, baggage, equipment, news, homework।" },
            { bn: "একই দলে: machinery, traffic, money, progress, research, hair (মাথার চুল সামগ্রিকভাবে)।", en: "Same group: machinery, traffic, money, progress, research, hair (hair of the head as a whole).", hi: "वही दल: machinery, traffic, money, progress, research, hair (सिर के बाल सामूहिक रूप में)।" },
            { bn: "এদের পরে singular verb বসে — 'The information is useful', 'The furniture looks new'।", en: "They take singular verbs — 'The information is useful', 'The furniture looks new'.", hi: "इनके बाद singular क्रिया — 'The information is useful', 'The furniture looks new'।" },
            { bn: "বাংলায় 'তথ্যগুলো', 'ফার্নিচারগুলো' বলি বলে -s-এর টান পড়ে।", en: "Bengali says 'তথ্যগুলো', 'ফার্নিচারগুলো' — which drags in the -s.", hi: "बांग्ला में 'तथ्यগुलो', 'फার्नিচারগুলো' कहने से -s का खिंचाव आता है।" },
            { bn: "কিন্তু ইংরেজিতে এই ধারণাগুলো **অবিভাজ্য পিণ্ড** — ভাগ করে গোনা যায় না।", en: "But English treats these ideas as **indivisible masses** — they cannot be split and counted.", hi: "पर अंग्रेज़ी में ये धारणाएँ **अविभाज्य पिंड** हैं — बाँटकर गिना नहीं जा सकता।" },
            { bn: "পরিমাণ বোঝাতে পরিমাপ-শব্দ যোগ করুন: a piece of information/advice/news, an item of furniture/luggage।", en: "To show quantity, add measure words: a piece of information/advice/news, an item of furniture/luggage.", hi: "मात्रा बताने के लिए माप-शब्द जोड़ें: a piece of information/advice/news, an item of furniture/luggage।" },
          ],
          formula: {
            bn: "a piece of information / an item of furniture — গুনতে চাইলে পরিমাপ-শব্দ",
            en: "a piece of information / an item of furniture — measure words to count them",
            hi: "a piece of information / an item of furniture — गिनने के लिए माप-शब्द",
          },
          examples: [
            { wrong: "He gave me many informations about the scholarship.", right: "He gave me a lot of information about the scholarship.", note: { bn: "information অগণনযোগ্য — many informations অসম্ভব; পরিমাণে a lot of/much।", en: "Information is uncountable — many informations is impossible; quantity takes a lot of / much.", hi: "information अगणनीय — many informations असंभव; मात्रा के लिए a lot of / much।" } },
            { wrong: "The room has no furnitures.", right: "The room has no furniture.", note: { bn: "furniture সবসময় singular রূপে — আসবাবের সেট বোঝাতে pieces of furniture।", en: "Furniture stays in singular form — for sets, say pieces of furniture.", hi: "furniture सदैव singular — सेट के लिए pieces of furniture।" } },
            { wrong: "My luggages are still at the airport.", right: "My luggage is still at the airport.", note: { bn: "luggage/baggage অগণনযোগ্য — singular verb is।", en: "luggage/baggage are uncountable — singular verb is.", hi: "luggage/baggage अगणनीय — singular क्रिया is।" } },
            { wrong: "She gave me three good advices.", right: "She gave me three good pieces of advice.", note: { bn: "গুনতে হলে piece of advice-এর মতো পরিমাপ-শব্দ লাগবে।", en: "To count, you need a measure word like piece of advice.", hi: "गिनने के लिए piece of advice जैसा माप-शब्द चाहिए।" } },
            { wrong: "The news are really shocking today.", right: "The news is really shocking today.", note: { bn: "news দেখতে বহুবচন, বাস্তবে singular — the news is।", en: "News looks plural but is singular — the news is.", hi: "news देखने में बहुवचन, वास्तव में singular — the news is।" } },
          ],
        },
        {
          heading: {
            bn: "🎯 suggest-প্যাটার্ন — advise-ও একই পরিবার",
            en: "🎯 The suggest pattern — advise is in the same family",
            hi: "🎯 suggest पैटर्न — advise भी उसी परिवार में",
          },
          lead: {
            bn: "'তাকে যেতে বললাম' অনুবাদে বাঙালিরা লেখেন I suggested him to go — সেটাই ভুল।",
            en: "Translating 'I told him to go', Bengali speakers write I suggested him to go — that is the error.",
            hi: "'उसे जाने के लिए कहा' का अनुवाद 'I suggested him to go' लिख दिया जाता है — यही गलती।",
          },
          points: [
            { bn: "suggest-এর গঠন ১ — **suggest + -ing**: He suggested going।", en: "Suggest structure 1 — **suggest + -ing**: He suggested going.", hi: "suggest की संरचना 1 — **suggest + -ing**: He suggested going।" },
            { bn: "গঠন ২ — suggest that + subject + verb: He suggested that I go।", en: "Structure 2 — suggest that + subject + verb: He suggested that I go.", hi: "संरचना 2 — suggest that + subject + verb: He suggested that I go।" },
            { bn: "suggest somebody to do — এমন গঠন ইংরেজিতে নেই।", en: "There is no 'suggest somebody to do' structure in English.", hi: "'suggest somebody to do' जैसी संरचना अंग्रेज़ी में नहीं है।" },
            { bn: "ব্যক্তিকে + to চাইলে advise ব্যবহার করুন: He advised me to go।", en: "When you need person + to, use advise: He advised me to go.", hi: "व्यक्ति + to चाहिए तो advise लें: He advised me to go।" },
            { bn: "একই পরিবার: recommend, insist, propose — সবগুলোর নিয়ম এক।", en: "The same family: recommend, insist, propose — one rule for all of them.", hi: "वही परिवार: recommend, insist, propose — सबका नियम एक।" },
          ],
          formula: {
            bn: "suggest + -ing / suggest that + subject + verb — 'suggest me to' নেই",
            en: "suggest + -ing / suggest that + subject + verb — no 'suggest me to'",
            hi: "suggest + -ing / suggest that + subject + verb — 'suggest me to' नहीं",
          },
          examples: [
            { wrong: "The doctor suggested me to take rest.", right: "The doctor suggested that I take rest.", note: { bn: "suggest + that + subject (+ base verb); ব্যক্তি + to চাইলে advise ব্যবহার করুন — 'advised me to take rest'।", en: "suggest + that + subject (+ base verb); for person + to, use advise — 'advised me to take rest'.", hi: "suggest + that + subject (+ base verb); व्यक्ति + to के लिए advise — 'advised me to take rest'।" } },
            { wrong: "He suggested to postpone the meeting.", right: "He suggested postponing the meeting.", note: { bn: "suggest-এর পরে সরাসরি কাজ বোঝালে -ing রূপ — suggest doing।", en: "After suggest, a direct action takes the -ing form — suggest doing.", hi: "suggest के बाद सीधा काम -ing रूप में — suggest doing।" } },
            { wrong: "They insisted me to join the dinner.", right: "They insisted that I join the dinner.", note: { bn: "insist-ও suggest-পরিবার — that + subject; 'insist somebody to' নেই।", en: "Insist belongs to the same family — that + subject; 'insist somebody to' does not exist.", hi: "insist भी वही परिवार — that + subject; 'insist somebody to' नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🗣️ উচ্চারণ-ফাঁদ — v/b আর s/sh",
            en: "🗣️ Pronunciation traps — v/b and s/sh",
            hi: "🗣️ उच्चारण-जाल — v/b और s/sh",
          },
          lead: {
            bn: "বাংলায় নেই এমন দুই ধ্বনি — v আর sh — অর্থ উলটে দেয়।",
            en: "Two sounds Bengali lacks — v and sh — and they flip meanings.",
            hi: "बांग्ला में नहीं दो ध्वनियाँ — v और sh — अर्थ उलट देती हैं।",
          },
          points: [
            { bn: "বাংলায় v-ধ্বনি নেই বলে very-কে 'বেরি/ব্যারি' উচ্চারণ হয়ে যায়।", en: "Bengali has no /v/ sound, so very becomes 'bery/bhery'.", hi: "स्थानीय भाषा में /v/ ध्वनि नहीं, इसलिए very 'bery' हो जाता है।" },
            { bn: "**v** — ঠোঁটের নিচের দাঁতে ঠোঁট লাগিয়ে উচ্চারণ করুন; berry ≠ very।", en: "**v** — rest the lip on the lower teeth; berry is not very.", hi: "**v** — होंठ निचले दाँत पर रखकर बोलें; berry ≠ very।" },
            { bn: "s আর sh ইংরেজিতে দুই আলাদা ধ্বনি — **shirt**-এ sh লাগে।", en: "s and sh are two separate English sounds — **shirt** takes sh.", hi: "s और sh अंग्रेज़ी में दो अलग ध्वनि — **shirt** में sh लगता है।" },
            { bn: "'সার্ট' বললে অর্থ অন্য কিছু হয়ে যায় — sh-টা আলাদা করে অনুশীলন করুন।", en: "Saying 'sirt' changes the meaning — practise keeping the sh distinct.", hi: "'sirt' कहने पर अर्थ बदल जाता है — sh को अलग रखकर अभ्यास करें।" },
          ],
          examples: [
            { wrong: "He bought a 'bery' expensive watch.", right: "He bought a very expensive watch.", note: { bn: "বাংলায় v-ধ্বনি নেই বলে very-কে 'বেরি/ব্যারি' উচ্চারণ হয় — ঠোঁটের নিচের দাঁতে ঠোঁট লাগিয়ে v; berry ≠ very।", en: "Bengali has no /v/ sound, so very becomes 'bery/bhery' — rest the lip on the lower teeth for v; berry ≠ very.", hi: "स्थानीय भाषाओं में /v/ ध्वनि नहीं, इसलिए very 'bery' हो जाता है — v के लिए होंठ निचले दाँत पर रखें; berry ≠ very।" } },
            { wrong: "She is wearing a beautiful 'sirt'.", right: "She is wearing a beautiful shirt.", note: { bn: "s আর sh ইংরেজিতে আলাদা ধ্বনি — shirt-এ sh; 'সার্ট' বললে অর্থ অন্য কিছু হয়ে যায়।", en: "s and sh are separate English sounds — shirt takes sh; saying 'sirt' changes the meaning.", hi: "s और sh अंग्रेज़ी में अलग ध्वनि — shirt में sh; 'sirt' कहने पर अर्थ बदल जाता है।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 A short story to see it all",
            hi: "📖 एक छोटी कहानी में सब देखें",
          },
          lead: {
            bn: "নাদিয়ার দুটো ইমেইল — আগেরটায় ভুল, পরেরটায় শুদ্ধ রূপ।",
            en: "Nadia's two emails — errors in the first, the corrected form in the second.",
            hi: "नादिया के दो ईमेल — पहले में गलतियाँ, दूसरे में शुद्ध रूप।",
          },
          points: [
            { bn: "নাদিয়ার প্রথম আন্তর্জাতিক ইমেইল: 'Dear Ms. Brown, I am agree with your plan and I want to discuss about it.'", en: "Nadia's first international email: 'Dear Ms. Brown, I am agree with your plan and I want to discuss about it.'", hi: "नादिया का पहला अंतरराष्ट्रीय ईमेल: 'Dear Ms. Brown, I am agree with your plan and I want to discuss about it.'" },
            { bn: "শেষ পর্যন্ত: 'Kindly do the needful and revert back. Myself Nadia, one of your new team member.'", en: "And the ending: 'Kindly do the needful and revert back. Myself Nadia, one of your new team member.'", hi: "और अंत: 'Kindly do the needful and revert back. Myself Nadia, one of your new team member.'" },
            { bn: "কোচিং সেন্টারে শেখার পর লিখল: 'I agree with your plan and would like to discuss it. Could we meet on Friday?'", en: "After coaching she rewrote it: 'I agree with your plan and would like to discuss it. Could we meet on Friday?'", hi: "कोचिंग सेंटर से सीखकर लिखा: 'I agree with your plan and would like to discuss it. Could we meet on Friday?'" },
            { bn: "সইটা এখন: 'Best regards, Nadia — one of the new members of your team' — one of + বহুবচন।", en: "The sign-off is now: 'Best regards, Nadia — one of the new members of your team' — one of + plural.", hi: "साइन-ऑफ़ अब: 'Best regards, Nadia — one of the new members of your team' — one of + बहुवचन।" },
            { bn: "উত্তর এলো দুই ঘণ্টায়: 'Delighted to hear from you!'", en: "The reply came in two hours: 'Delighted to hear from you!'", hi: "जवाब दो घंटे में आया: 'Delighted to hear from you!'" },
          ],
          examples: [
            { wrong: "I am agree with your plan and want to discuss about it.", right: "I agree with your plan and want to discuss it.", note: { bn: "দুই কমন ভুল একসাথে — agree-র আগে am নেই, discuss-এর পরে about নেই।", en: "Two common errors in one line — no am before agree, no about after discuss.", hi: "एक लाइन में दो सामान्य गलती — agree से पहले am नहीं, discuss के बाद about नहीं।" } },
            { wrong: "Myself Nadia, one of your new team member.", right: "I'm Nadia, one of your new team members.", note: { bn: "পরিচয় দিতে I'm/my name is; one of + বহুবচন।", en: "Introduce yourself with I'm / my name is; one of + plural.", hi: "परिचय के लिए I'm / my name is; one of + बहुवचन।" } },
            { wrong: "Kindly revert back with your informations.", right: "Please reply with the details.", note: { bn: "revert back দ্বি-পুনরাবৃত্তি, informations অসম্ভব — দুটোই ঠিক করে reply with the details।", en: "revert back is doubled, informations impossible — fix both with reply with the details.", hi: "revert back दोहराव है, informations असंभव — दोनों सुधारकर reply with the details।" } },
            { wrong: "She suggested me to apply for the scholarship.", right: "She suggested that I apply for the scholarship.", note: { bn: "suggest-এ 'ব্যক্তি + to' চলে না; that-ক্লজ, নয়তো advise-এর to-প্যাটার্ন।", en: "suggest takes no 'person + to'; use a that-clause, or advise for the to-pattern.", hi: "suggest में 'व्यक्ति + to' नहीं चलता; that-clause या advise का to-पैटर्न।" } },
          ],
        },
      ],
      tips: [
        { bn: "'মাথায় বাংলা → মুখে ইংরেজি' পাইপলাইনই ভুলের উৎস — জটিল বাক্যে আগে ইংরেজি কঙ্কাল (S-V-O) ভাবুন।", en: "The 'Bengali in the head → English in the mouth' pipeline is the source — think the English skeleton (S-V-O) first for complex sentences.", hi: "'दिमाग में बांग्ला → मुँह में अंग्रेज़ी' पाइपलाइन ही जड़ है — जटिल वाक्य में पहले अंग्रेज़ी कंकाल (S-V-O) सोचें।" },
        { bn: "ক্রিয়া-প্রি-পজিশন জোড়া মুখস্থ: depend ON, listen TO, wait FOR, married TO, arrive AT/IN, belong TO।", en: "Memorise verb-preposition pairs: depend ON, listen TO, wait FOR, married TO, arrive AT/IN, belong TO.", hi: "क्रिया-preposition जोड़ी रटें: depend ON, listen TO, wait FOR, married TO, arrive AT/IN, belong TO।" },
        { bn: "এই ক্রিয়াগুলোর পরে প্রি-পজিশন নেই: discuss, reach, enter, marry, resemble, accompany, answer।", en: "These verbs take no preposition: discuss, reach, enter, marry, resemble, accompany, answer.", hi: "इन क्रियाओं के बाद preposition नहीं: discuss, reach, enter, marry, resemble, accompany, answer।" },
        { bn: "I agree — am নেই; I didn't go — went নয়; She knows — is knowing নয়।", en: "I agree — no am; I didn't go — not went; She knows — not is knowing.", hi: "I agree — am नहीं; I didn't go — went नहीं; She knows — is knowing नहीं।" },
        { bn: "informations/furnitures/advices/luggages অসম্ভব — পরিমাপ চাইলে a piece of / an item of।", en: "informations/furnitures/advices/luggages are impossible — measure with a piece of / an item of.", hi: "informations/furnitures/advices/luggages असंभव — मापने के लिए a piece of / an item of।" },
        { bn: "He suggested that I go / suggested going — 'suggested me to go' ইংরেজিতে নেই; ব্যক্তি + to চাইলে advised।", en: "He suggested that I go / suggested going — 'suggested me to go' does not exist; use advised for person + to.", hi: "He suggested that I go / suggested going — 'suggested me to go' अंग्रेज़ी में नहीं; व्यक्ति + to के लिए advised।" },
        { bn: "'Myself Rafi', 'do the needful', 'revert back', 'pass out', 'cousin brother' — আন্তর্জাতিক ইংরেজিতে এড়িয়ে চলুন।", en: "Avoid 'Myself Rafi', 'do the needful', 'revert back', 'pass out', 'cousin brother' in international English.", hi: "'Myself Rafi', 'do the needful', 'revert back', 'pass out', 'cousin brother' — अंतरराष्ट्रीय अंग्रेज़ी में टालें।" },
        { bn: "উচ্চারণ-ফাঁদ: very/berry-র v, shirt/sir-এর sh, Wednesday-island-listen-এর নীরব অক্ষর।", en: "Pronunciation traps: the v of very/berry, the sh of shirt vs sir, silent letters in Wednesday, island, listen.", hi: "उच्चारण-जाल: very/berry का v, shirt/sir का sh, Wednesday-island-listen की मौन अक्षरें।" },
        { bn: "প্রতিটা ধরা পড়া ভুলের পাশে বাংলা উৎস-বাক্যটা নোট করুন — উৎস বন্ধ হলে ভুলও বন্ধ হয়।", en: "Next to every caught error, note the Bengali source sentence — stop the source and the error stops too.", hi: "हर पकड़ी गई गलती के पास बांग्ला स्रोत-वाक्य नोट करें — स्रोत बंद हुआ तो गलती भी बंद।" },
      ],
      quiz: [
        { question: "It depends ___ the weather.", options: ["on", "of", "for", "at"], answer: 0, explanation: { bn: "depend ON — নির্ভর করা; of/for/at কোনোটাই নয়।", en: "depend ON — to rely on; never of, for or at.", hi: "depend ON — निर्भर करना; of/for/at कुछ नहीं।" } },
        { question: "Which sentence is correct?", options: ["I am agree with you.", "I agree with you.", "I am agreeing with you.", "I agreeing with you."], answer: 1, explanation: { bn: "agree নিজেই ক্রিয়া — am/is লাগে না, continuous-ও হয় না।", en: "Agree is itself a verb — no am/is and no continuous.", hi: "agree स्वयं क्रिया है — am/is नहीं, continuous भी नहीं।" } },
        { question: "She has been married ___ Rahim for five years.", options: ["with", "to", "of", "by"], answer: 1, explanation: { bn: "married TO someone — with নয়; ক্রিয়া হিসেবে married-এ কিছুই লাগে না।", en: "married TO someone — not with; as a plain verb, marry takes nothing.", hi: "married TO someone — with नहीं; क्रिया के रूप में marry के साथ कुछ नहीं।" } },
        { question: "The report contains a lot of useful ___.", options: ["informations", "information", "pieces of informations", "an information"], answer: 1, explanation: { bn: "information অগণনযোগ্য — বহুবচন বা 'an' অসম্ভব।", en: "Information is uncountable — no plural and no 'an'.", hi: "information अगणनीय — बहुवचन या 'an' असंभव।" } },
        { question: "He suggested ___ the meeting to Monday.", options: ["me to move", "moving", "that me move", "for moving"], answer: 1, explanation: { bn: "suggest + -ing; 'suggest me to' গঠন ইংরেজিতে নেই।", en: "suggest + -ing; the structure 'suggest me to' does not exist in English.", hi: "suggest + -ing; 'suggest me to' संरचना अंग्रेज़ी में नहीं।" } },
        { question: "I didn't ___ to school yesterday.", options: ["went", "gone", "go", "going"], answer: 2, explanation: { bn: "didn't-এর পরে V1 — didn't go; দ্বি-অতীত নয়।", en: "V1 follows didn't — didn't go; no double past.", hi: "didn't के बाद V1 — didn't go; दोहरा अतीत नहीं।" } },
        { question: "Which sentence is correct?", options: ["We discussed about it.", "We discussed it.", "We discussed on it.", "We discussed for it."], answer: 1, explanation: { bn: "discuss ট্রানজিটিভ — object সরাসরি, প্রি-পজিশন ছাড়া।", en: "Discuss is transitive — a direct object, no preposition.", hi: "discuss transitive है — सीधा object, बिना preposition।" } },
        { question: "One of my ___ lives in Sylhet.", options: ["friend", "friends", "friend's", "friendships"], answer: 1, explanation: { bn: "one of + বহুবচন noun — one of my friends; মূল verb থাকে singular (lives)।", en: "one of + plural noun — one of my friends; the main verb stays singular (lives).", hi: "one of + बहुवचन noun — one of my friends; मुख्य क्रिया singular (lives)।" } },
        { question: "In standard English, 'He passed out' means he ___.", options: ["graduated", "fainted", "passed the exam", "left the job"], answer: 1, explanation: { bn: "আন্তর্জাতিক ইংরেজিতে pass out = অজ্ঞান হওয়া; পাস করে বের হওয়া = graduate।", en: "In standard English pass out = faint; completing a course = graduate.", hi: "मानक अंग्रेज़ी में pass out = बेहोश होना; पाठ्यक्रम पूरा करना = graduate।" } },
        { question: "Which sentence is correct?", options: ["My luggages are heavy.", "My luggage is heavy.", "My luggage are heavy.", "My luggages is heavy."], answer: 1, explanation: { bn: "luggage অগণনযোগ্য — singular রূপ, singular verb is।", en: "Luggage is uncountable — singular form, singular verb is.", hi: "luggage अगणनीय — singular रूप, singular क्रिया is।" } },
      ],
    },
  },

  /* ── 2. Since vs For ───────────────────────────────────────────────── */
  {
    topic: "Since vs For",
    level: "intermediate",
    title: "Since vs For (Intermediate)",
    unit: 0,
    sortOrder: 23,
    data: {
      title: {
        bn: "Since বনাম For (মধ্যম স্তর)",
        en: "Since vs For (Intermediate)",
        hi: "Since बनाम For (मध्यम स्तर)",
      },
      intro: {
        bn: "এই পাঠের প্রয়োজনীয় পূর্বশর্ত: present perfect (have/has + V3) আর present perfect continuous (have been + -ing) — এই দুই কাল জানা ছাড়া since/for-এর নিয়ম বোঝা যায় না; আগে ওই কালের পাঠগুলো শেষ করুন। এখানে শিখব: since + শুরুর বিন্দু বনাম for + দৈর্ঘ্যের মাপ, বাংলার 'থেকে/ধরে'র দুই-মুখো ফাঁদ, since বনাম from, 'It's been two years since we met'-জাতীয় কাঠামো, perfect continuous-এর জোড়া, আর 'I am here since 2020'-এর মতো ক্লাসিক ভুলের চিরতরে শোধরানো।",
        en: "The required prerequisites for this lesson: the present perfect (have/has + V3) and the present perfect continuous (have been + -ing) — without these two tenses the rules of since/for make no sense, so finish those lessons first. Here you will learn: since + starting point vs for + duration, the two-faced trap of Bengali 'থেকে/ধরে', since vs from, structures like 'It's been two years since we met', the perfect-continuous pairing, and a permanent fix for classic errors like 'I am here since 2020'.",
        hi: "इस पाठ की आवश्यक पूर्व-शर्तें: present perfect (have/has + V3) और present perfect continuous (have been + -ing) — इन दो कालों के बिना since/for के नियम समझ नहीं आते, पहले वे पाठ पूरे करें। यहाँ सीखेंगे: since + शुरुआती बिंदु बनाम for + अवधि, 'थे/धरे' जैसी दो-मुखी जाल, since बनाम from, 'It's been two years since we met' जैसी संरचनाएँ, perfect continuous की जोड़ी, और 'I am here since 2020' जैसी क्लासिक गलतियों का स्थायी सुधार।",
      },
      roadmap: [
        { bn: "⏰ এক লাইনের সূত্র: since = বিন্দু, for = মাপ", en: "⏰ The one-line rule: since = point, for = span", hi: "⏰ एक-लाइन सूत्र: since = बिंदु, for = अवधि" },
        { bn: "🏗️ since/for তুলনা-ছক আর শুরুর বাক্যাংশ", en: "🏗️ The since/for comparison table and starting phrases", hi: "🏗️ since/for तुलना-तालिका और शुरुआती वाक्यांश" },
        { bn: "🚦 তিনটা দ্রুত পরীক্ষা দিয়ে সঠিকটা বাছা", en: "🚦 Pick the right one with three quick tests", hi: "🚦 तीन त्वरित जाँच से सही चुनाव" },
        { bn: "👬 বাংলা 'থেকে' কখন since, কখন from", en: "👬 When Bengali 'from' means since and when from", hi: "👬 स्थानीय 'से' कब since, कब from" },
        { bn: "🧱 'It's been two years since we met'-এর কাঠামো", en: "🧱 Building 'It's been two years since we met'", hi: "🧱 'It's been two years since we met' की संरचना" },
        { bn: "⏳ চলমান কাজ মাপা: perfect continuous + How long", en: "⏳ Measuring ongoing time: perfect continuous + How long", hi: "⏳ चलते समय को मापना: perfect continuous + How long" },
        { bn: "⚠️ বাঙালি শিক্ষার্থীদের চারটা কমন ভুল", en: "⚠️ Four common mistakes by Bengali speakers", hi: "⚠️ बांग्लाभाषी छात्रों की चार सामान्य गलतियाँ" },
        { bn: "📖 রিইউনিয়নের গল্পে চার প্যাটার্ন একসাথে", en: "📖 All four patterns in one reunion chat", hi: "📖 रियूनियन की कहानी में चारों पैटर्न" },
      ],
      sections: [
        {
          heading: {
            bn: "⏰ কখন ব্যবহার হয় — বিন্দু নাকি দূরত্ব",
            en: "⏰ When to use them — point or distance",
            hi: "⏰ कब इस्तेमाल होते हैं — बिंदु या दूरी",
          },
          lead: {
            bn: "এক লাইনের সূত্র মুখস্থ থাকলে since/for-এর নব্বই শতাংশ ভুল আর হয় না।",
            en: "Memorise the one-line rule and ninety per cent of since/for errors disappear.",
            hi: "एक-लाइन सूत्र रट लें, तो since/for की नब्बे प्रतिशत गलतियाँ गायब।",
          },
          points: [
            { bn: "**since** — শুরুর বিন্দু বোঝায় (কখন থেকে): I have lived in Dhaka since 2020।", en: "**since** — marks the starting point (since when): I have lived in Dhaka since 2020.", hi: "**since** — शुरुआती बिंदु बताता है (कब से): I have lived in Dhaka since 2020।" },
            { bn: "**for** — সময়ের দৈর্ঘ্য বোঝায় (কতক্ষণ ধরে): I have lived in Dhaka for five years।", en: "**for** — marks the length of time (how long): I have lived in Dhaka for five years.", hi: "**for** — समय की दूरी बताता है (कितने समय से): I have lived in Dhaka for five years।" },
            { bn: "২০২০ নামটা শুরুর বিন্দু; পাঁচ বছর রুলারে মাপা দূরত্ব।", en: "2020 names the start point; five years is a span measured with a ruler.", hi: "2020 नाम ही शुरुआती बिंदु है; पाँच वर्ष रूलर से मापी दूरी।" },
            { bn: "দুটোই মূলত present perfect আর present perfect continuous-এর সঙ্গী।", en: "Both ride mainly with the present perfect and the present perfect continuous.", hi: "दोनों मुख्यतः present perfect और present perfect continuous के साथी हैं।" },
            { bn: "এই কালগুলো অতীত থেকে এখন পর্যন্ত টানটান অবস্থা বোঝায়।", en: "These tenses express a stretched state from the past until now.", hi: "ये काल अतीत से अब तक खिंचाव दर्शाते हैं।" },
            { bn: "তাই সময়ের দড়িও দুই রকম — অতীতের বিন্দু (since), মাপা দৈর্ঘ্য (for)।", en: "So their time-ropes come in two kinds — a past point (since), a measured length (for).", hi: "इसलिए समय-रस्सी भी दो प्रकार — अतीत का बिंदु (since), मापी दूरी (for)।" },
          ],
          formula: {
            bn: "since + শুরুর বিন্দু (কখন থেকে) / for + সময়ের দৈর্ঘ্য (কতক্ষণ ধরে)",
            en: "since + starting point (since when) / for + length of time (how long)",
            hi: "since + शुरुआती बिंदु (कब से) / for + समय की दूरी (कितने समय से)",
          },
          examples: [
            { wrong: "I live in Dhaka since 2020.", right: "I have lived in Dhaka since 2020.", note: { bn: "since/for বসলেই কাল হবে present perfect — simple present নয়।", en: "When since/for appear, the tense must be present perfect — not simple present.", hi: "since/for आते ही काल present perfect होगा — simple present नहीं।" } },
            { wrong: "She is waiting here for two hours.", right: "She has been waiting here for two hours.", note: { bn: "চলমান অবস্থা + সময়ের মাপ → present perfect continuous।", en: "An ongoing state + a measured time → present perfect continuous.", hi: "चलती स्थिति + मापा समय → present perfect continuous।" } },
            { wrong: "I know him since ten years.", right: "I have known him for ten years.", note: { bn: "দুটো ভুল একসাথে — know + since/for-এর জন্য present perfect লাগবে, আর 'ten years' দৈর্ঘ্য → for।", en: "Two errors at once — know + since/for needs the present perfect, and 'ten years' is a duration → for.", hi: "एक साथ दो गलती — know + since/for के लिए present perfect, और 'ten years' अवधि → for।" } },
            { wrong: "We are friends since our childhood.", right: "We have been friends since childhood.", note: { bn: "'শৈশব থেকে' শুরুর বিন্দু → since; বন্ধুত্ব এখনো আছে → present perfect।", en: "'Since childhood' is a starting point → since; the friendship continues → present perfect.", hi: "'बचपन से' शुरुआती बिंदु → since; दोस्ती अब भी है → present perfect।" } },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — since + বিন্দু, for + মাপ",
            en: "🏗️ Formation — since + point, for + span",
            hi: "🏗️ गठन — since + बिंदु, for + अवधि",
          },
          lead: {
            bn: "ঘড়ি-ক্যালেন্ডারে চিহ্নিত নাম হলে since, মাপা স্প্যান হলে for।",
            en: "A name marked on clocks and calendars takes since; a measured span takes for.",
            hi: "घड़ी-कैलेंडर पर अंकित नाम हो तो since, मापा स्पैन हो तो for।",
          },
          points: [
            { bn: "**since + বিন্দু** — সময়ের নাম বা ঘড়ার কাঁটা: since Monday, since 2015, since morning।", en: "**since + a point** — a named time or a clock mark: since Monday, since 2015, since morning.", hi: "**since + बिंदु** — समय का नाम या घड़ी की निशानी: since Monday, since 2015, since morning।" },
            { bn: "আরও: since childhood, since my birthday — এমনকি since I came here; গোটা clause-ও বিন্দুই।", en: "More: since childhood, since my birthday — even since I came here; a whole clause still counts as a point.", hi: "और भी: since childhood, since my birthday — यहाँ तक since I came here; पूरा clause भी बिंदु ही है।" },
            { bn: "**for + মাপ** — গুনতে পারা সময়: for five days, for two hours, for three months।", en: "**for + a span** — countable time: for five days, for two hours, for three months.", hi: "**for + अवधि** — गिनती का समय: for five days, for two hours, for three months।" },
            { bn: "দীর্ঘ মাপেও for — for ages, for a long time।", en: "Long spans take for too — for ages, for a long time.", hi: "लंबी अवधि में भी for — for ages, for a long time।" },
            { bn: "মুখস্থ সূত্র: ঘড়ি-ক্যালেন্ডারে চিহ্নিত নাম → since; রুলার দিয়ে মাপা স্প্যান → for।", en: "Memorise the formula: a name marked on clocks and calendars → since; a span measured by a ruler → for.", hi: "सूत्र रटें: घड़ी-कैलेंडर पर अंकित नाम → since; रूलर से मापा स्पैन → for।" },
          ],
          table: {
            head: [{ bn: "দেখুন", en: "Compare", hi: "देखिए" }, { bn: "since", en: "since", hi: "since" }, { bn: "for", en: "for", hi: "for" }],
            rows: [
              [{ bn: "অর্থ", en: "Meaning", hi: "अर्थ" }, { bn: "শুরুর বিন্দু — কখন থেকে", en: "starting point — since when", hi: "शुरुआती बिंदु — कब से" }, { bn: "সময়ের দৈর্ঘ্য — কতক্ষণ ধরে", en: "length of time — how long", hi: "समय की दूरी — कितने समय से" }],
              [{ bn: "কী বসে", en: "What follows", hi: "क्या लगता है" }, { bn: "ঘড়ি-ক্যালেন্ডারের নাম-বিন্দু", en: "a named clock-calendar point", hi: "घड़ी-कैलेंडर का नाम-बिंदु" }, { bn: "গুনতে পারা সময়ের মাপ", en: "a countable time span", hi: "गिनती का समय-माप" }],
              [{ bn: "উদাহরণ", en: "Examples", hi: "उदाहरण" }, { bn: "since Monday, since 2015, since childhood", en: "since Monday, since 2015, since childhood", hi: "since Monday, since 2015, since childhood" }, { bn: "for five days, for two hours, for ages", en: "for five days, for two hours, for ages", hi: "for five days, for two hours, for ages" }],
              [{ bn: "সঙ্গী কাল", en: "Partner tense", hi: "साथी काल" }, { bn: "present perfect / perfect continuous", en: "present perfect / perfect continuous", hi: "present perfect / perfect continuous" }, { bn: "present perfect / perfect continuous", en: "present perfect / perfect continuous", hi: "present perfect / perfect continuous" }],
            ],
          },
          examples: [
            { wrong: "I have been here since five years.", right: "I have been here for five years.", note: { bn: "'পাঁচ বছর' মাপ — for; since শুধু নাম-ঘড়ার বিন্দু নেয়।", en: "'Five years' is a measure — for; since only takes named clock-calendar points.", hi: "'पाँच वर्ष' माप है — for; since केवल नाम-घड़ी के बिंदु लेता है।" } },
            { wrong: "He has been ill since three days.", right: "He has been ill for three days.", note: { bn: "'তিন দিন ধরে' দৈর্ঘ্য → for; 'সোমবার থেকে' হলে since Monday।", en: "'Three days' is a duration → for; from a named day it would be since Monday.", hi: "'तीन दिन' अवधि → for; नाम वाले दिन से होता तो since Monday।" } },
            { wrong: "Since morning I am studying for the exam.", right: "I have been studying for the exam since morning.", note: { bn: "since/for-যুক্ত কাল হবে present perfect continuous; since-বাক্যাংশ বাক্যের শেষেও যেতে পারে।", en: "With since/for the tense must be present perfect continuous; the since-phrase can also sit at the end.", hi: "since/for के साथ काल present perfect continuous; since-वाक्यांश अंत में भी जा सकता है।" } },
            { wrong: "How long are you waiting for the bus?", right: "How long have you been waiting for the bus?", note: { bn: "'কতক্ষণ ধরে' প্রশ্ন → present perfect continuous; simple present নয়।", en: "A 'how long' question → present perfect continuous; not simple present.", hi: "'कितने समय से' प्रश्न → present perfect continuous; simple present नहीं।" } },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — দ্রুত পরীক্ষা তিনটা",
            en: "🚦 Cues and patterns — three quick tests",
            hi: "🚦 संकेत और पैटर्न — तीन त्वरित जाँच",
          },
          lead: {
            bn: "তিনটা দ্রুত পরীক্ষা — গুনতে পারা, 'থেকে/ধরে', আর পাশের কাল।",
            en: "Three quick tests — can you count it, the Bengali word used, and the neighbouring tense.",
            hi: "तीन त्वरित जाँच — गिनती, 'से/धरे', और आस-पास का काल।",
          },
          points: [
            { bn: "**পরীক্ষা ১** — গুনতে পারছেন? 'পাঁচ দিন', 'তিন ঘণ্টা', 'দুই সপ্তাহ' — সংখ্যা জোড়া যাচ্ছে → for।", en: "**Test 1** — can you count it? 'five days', 'three hours', 'two weeks' — a number attaches → for.", hi: "**जाँच 1** — गिन सकते हैं? 'पाँच दिन', 'तीन घंटे', 'दो हफ़्ते' — संख्या जुड़ रही → for।" },
            { bn: "'সোমবার', '২০২০', 'ভোররাত', 'শৈশব' — নাম/চিহ্ন, সংখ্যা নয় → since।", en: "'Monday', '2020', 'dawn', 'childhood' — a name or mark, not a number → since.", hi: "'सोमवार', '2020', 'भोर', 'बचपन' — नाम/निशानी, संख्या नहीं → since।" },
            { bn: "**পরীক্ষা ২** — বাক্যটা 'কোন বছর/দিন থেকে' দিয়ে শুরু হতে পারে? পারলে since।", en: "**Test 2** — could the sentence start with 'since when (which year/day)'? Yes → since.", hi: "**जाँच 2** — वाक्य 'किस वर्ष/दिन से' से शुरू हो सकता है? हाँ → since।" },
            { bn: "'কতদিন ধরে' দিয়ে শুরু হয়? পারলে for।", en: "Does it start with 'how long'? Yes → for.", hi: "'कितने समय से' से शुरू होता है? हाँ → for।" },
            { bn: "**পরীক্ষা ৩** — since/for-এর পাশের কাল দেখুন: simple present/past প্রায় সবসময় ভুল।", en: "**Test 3** — look at the neighbouring tense: simple present/past is almost always wrong here.", hi: "**जाँच 3** — since/for के पास का काल देखें: simple present/past लगभग सदा गलत।" },
            { bn: "দরকার present perfect পরিবার — have/has + V3 বা have/has been + -ing।", en: "You need the present perfect family — have/has + V3 or have/has been + -ing.", hi: "चाहिए present perfect परिवार — have/has + V3 या have/has been + -ing।" },
          ],
          formula: {
            bn: "সংখ্যা জোড়া যায় → for; নাম/চিহ্ন → since; কাল → present perfect পরিবার",
            en: "a number attaches → for; a name or mark → since; tense → present perfect family",
            hi: "संख्या जुड़ती है → for; नाम/निशानी → since; काल → present perfect परिवार",
          },
          examples: [
            { wrong: "The office is open since 9 a.m.", right: "The office is open from 9 a.m.", note: { bn: "রুটিন/টাইমটেবিলের সময় বলতে from; since শুধু perfect কালের শুরুর বিন্দু।", en: "Timetables and routines take from; since is only the start point of perfect tenses.", hi: "समय-सारणी और दिनचर्या के लिए from; since केवल perfect कालों का शुरुआती बिंदु।" } },
            { wrong: "I have been working here from January.", right: "I have been working here since January.", note: { bn: "perfect কালে শুরুর বিন্দু হলে from নয় — since।", en: "In a perfect tense, a start point takes since, not from.", hi: "perfect काल में शुरुआती बिंदु के लिए from नहीं — since।" } },
            { wrong: "The class will start since 10 o'clock.", right: "The class will start at 10 o'clock.", note: { bn: "একক ভবিষ্যৎ ঘটনার সময় → at; since কখনো একক ঘটনার সময় নয়।", en: "A single future event takes at; since never times a single event.", hi: "एकल भविष्य की घटना का समय → at; since कभी एकल घटना का समय नहीं।" } },
            { wrong: "I have been waiting since 9 a.m., so it's three hours now.", right: "I have been waiting since 9 a.m., so it has been three hours now.", note: { bn: "একই সময় দুইভাবে — বিন্দু since, মাপ for; দ্বিতীয় ক্লজেও perfect লাগবে।", en: "The same time two ways — point since, span for; the second clause needs a perfect too.", hi: "एक ही समय दो रूपों में — बिंदु since, अवधि for; दूसरे clause में भी perfect चाहिए।" } },
          ],
        },
        {
          heading: {
            bn: "👬 since বনাম from — 'থেকে'-র দুই ভাই",
            en: "👬 since vs from — the two brothers of 'from'",
            hi: "👬 since बनाम from — 'से' के दो भाई",
          },
          lead: {
            bn: "বাংলার একটা 'থেকে' ইংরেজিতে দুই শব্দ — কোনটা কখন, এক নজরে।",
            en: "Bengali's single 'from' becomes two English words — which one when, at a glance.",
            hi: "स्थानीय भाषा का एक 'से' अंग्रेज़ी में दो शब्द — कौन-सा कब, एक नज़र में।",
          },
          points: [
            { bn: "perfect কালের সাথে **since**, বাকি সব কালে from — 'থেকে'-র ভাগ এইটুকুই।", en: "**since** goes with perfect tenses, from with the rest — that is the whole split of 'from'.", hi: "perfect कालों के साथ **since**, बाकी सब कालों में from — 'से' की बँटवारा बस इतना ही।" },
            { bn: "I have been here since Monday — perfect কাল, এখনো চলছে।", en: "I have been here since Monday — a perfect tense, still running.", hi: "I have been here since Monday — perfect काल, अब भी जारी।" },
            { bn: "I stayed there from Monday to Friday — past কালে from।", en: "I stayed there from Monday to Friday — from in a past tense.", hi: "I stayed there from Monday to Friday — past काल में from।" },
            { bn: "The shop is open from 9 to 5 — রুটিন সময়সূচিতে from।", en: "The shop is open from 9 to 5 — from in routine timetables.", hi: "The shop is open from 9 to 5 — दिनचर्या की समय-सारणी में from।" },
            { bn: "From tomorrow, I will get up early — ভবিষ্যতের শুরুতারিখে from।", en: "From tomorrow, I will get up early — from for a future start date.", hi: "From tomorrow, I will get up early — भविष्य की शुरुआती तारीख में from।" },
            { bn: "from-এর সাথে সাধারণত to/until জোড়া থাকে — শুরু আর শেষ দুই প্রান্তই বলা হয়।", en: "From usually teams with to/until — both ends, start and finish, are named.", hi: "from आमतौर पर to/until के साथ आता है — शुरुआत और अंत दोनों सिरे बताए जाते हैं।" },
            { bn: "since নিজেই বলে 'এখন পর্যন্ত চলছে' — শেষ প্রান্ত বলার দরকার নেই।", en: "Since itself declares 'continuing until now' — no need to name an end.", hi: "since स्वयं घोषणा करता है 'अब तक जारी' — अंत बताने की ज़रूरत नहीं।" },
          ],
          formula: {
            bn: "perfect কাল → since / বাকি সব কাল → from...to/until",
            en: "perfect tenses → since / all other tenses → from...to/until",
            hi: "perfect काल → since / बाकी सब काल → from...to/until",
          },
          examples: [
            { wrong: "I studied there since 2010 to 2015.", right: "I studied there from 2010 to 2015.", note: { bn: "শুরু-শেষ দুই প্রান্ত + past কাল → from...to; since-এর সাথে to আসে না।", en: "Both ends + past tense → from...to; since never pairs with to.", hi: "दोनों सिरे + past काल → from...to; since के साथ to नहीं।" } },
            { wrong: "The shop remains open since 9 to 9.", right: "The shop remains open from 9 to 9.", note: { bn: "রুটিন সময়সূচি → from...to।", en: "A routine timetable → from...to.", hi: "दिनचर्या की समय-सारणी → from...to।" } },
            { wrong: "From last week I am unwell.", right: "I have been unwell since last week.", note: { bn: "'অতীত বিন্দু থেকে এখন পর্যন্ত' → since + present perfect; from এখানে চলে না।", en: "'From a past point until now' → since + present perfect; from does not fit here.", hi: "'अतीत बिंदु से अब तक' → since + present perfect; from यहाँ नहीं चलेगा।" } },
            { wrong: "We will stay in Sylhet since Friday.", right: "We will stay in Sylhet from Friday.", note: { bn: "ভবিষ্যৎ পরিকল্পনার শুরুর তারিখ → from; since শুধু perfect-এর বিন্দু।", en: "The start date of a future plan → from; since is only for perfect tenses.", hi: "भविष्य योजना की शुरुआती तारीख → from; since केवल perfect कालों के लिए।" } },
          ],
        },
        {
          heading: {
            bn: "🧱 'It's been two years since we met' — since-ক্লজের গঠন",
            en: "🧱 'It's been two years since we met' — building since-clauses",
            hi: "🧱 'It's been two years since we met' — since-clause की संरचना",
          },
          lead: {
            bn: "'কতদিন হল না দেখা' — এই জনপ্রিয় বাক্যটা ইংরেজিতে গড়ার নিয়ম।",
            en: "'How long since we met' — the rules for building this popular sentence.",
            hi: "'कितने साल हो गए मिले' — यह लोकप्रिय वाक्य बनाने के नियम।",
          },
          points: [
            { bn: "কাঠামো: It is / It has been + সময়ের মাপ + since + past simple ক্লজ।", en: "Structure: It is / It has been + a time span + since + a past simple clause.", hi: "संरचना: It is / It has been + समय की अवधि + since + past simple clause।" },
            { bn: "উদাহরণ: It has been two years since we met — দেখা হওয়ার দুই বছর পেরিয়েছে।", en: "Example: It has been two years since we met — two years have passed since we last met.", hi: "उदाहरण: It has been two years since we met — मिले हुए दो साल हो गए।" },
            { bn: "নিয়ম ১ — since-এর পরের ক্লজে **past simple**: 'since we have met' নয়।", en: "Rule 1 — the clause after since takes **past simple**: not 'since we have met'.", hi: "नियम 1 — since के बाद के clause में **past simple**: 'since we have met' नहीं।" },
            { bn: "নিয়ম ২ — মূল বাক্যে present perfect।", en: "Rule 2 — the main clause takes a present perfect.", hi: "नियम 2 — मुख्य वाक्य में present perfect।" },
            { bn: "কথ্যে 'It is two years since...' চললেও লেখায় 'It has been...' নিরাপদ।", en: "'It is two years since...' survives in speech, but 'It has been...' is safer in writing.", hi: "बोलचाल में 'It is two years since...' चलता है, पर लेखन में 'It has been...' सुरक्षित।" },
            { bn: "নেগেটিভে একই সূত্র: 'since I didn't see her' নয় — 'since I saw her last'।", en: "Negatives obey the same law: not 'since I didn't see her' — 'since I saw her last'.", hi: "नकारात्मक में वही नियम: 'since I didn't see her' नहीं — 'since I saw her last'।" },
          ],
          formula: {
            bn: "It has been + সময়ের মাপ + since + past simple — It has been two years since we met",
            en: "It has been + a time span + since + past simple — It has been two years since we met",
            hi: "It has been + समय की अवधि + since + past simple — It has been two years since we met",
          },
          examples: [
            { wrong: "It's been two years since we have met.", right: "It's been two years since we met.", note: { bn: "since-ক্লজে past simple — met; have met নয়।", en: "The since-clause takes past simple — met, not have met.", hi: "since-clause में past simple — met; have met नहीं।" } },
            { wrong: "It is a long time since I don't see her.", right: "It has been a long time since I saw her last.", note: { bn: "'শেষ দেখা'-র পর থেকে এখন — past simple + last; 'don't see' নয়।", en: "Since the last meeting until now — past simple + last; not 'don't see'.", hi: "आख़िरी मुलाक़ात से अब तक — past simple + last; 'don't see' नहीं।" } },
            { wrong: "Two years passed since we last talked.", right: "Two years have passed since we last talked.", note: { bn: "since-এর সাথে ফল এখনো বোঝাতে present perfect — have passed।", en: "With since, a present-day result takes the present perfect — have passed.", hi: "since के साथ वर्तमान परिणाम के लिए present perfect — have passed।" } },
            { wrong: "Since I have come to this city, I made many friends.", right: "Since I came to this city, I have made many friends.", note: { bn: "since-ক্লজ পাস্ট (came), মূল অংশ perfect (have made) — দুই অংশের কাল উল্টে যায় না।", en: "The since-clause is past (came), the main clause perfect (have made) — the tenses never swap.", hi: "since-clause past (came), मुख्य भाग perfect (have made) — दोनों काल आपस में नहीं बदलते।" } },
          ],
        },
        {
          heading: {
            bn: "⏳ perfect continuous-এর জোড়া — চলমান সময়কে মাপা",
            en: "⏳ The perfect continuous pairing — measuring ongoing time",
            hi: "⏳ perfect continuous की जोड़ी — चलते समय को मापना",
          },
          lead: {
            bn: "কাজটা এখনো চলছে? তাহলে কালটা present perfect continuous।",
            en: "The action still running? Then the tense is the present perfect continuous.",
            hi: "काम अभी भी चल रहा है? तो काल present perfect continuous।",
          },
          points: [
            { bn: "কাজ এখনো চলছে — অপেক্ষা, পড়াশোনা, বৃষ্টি, কাজ — তাহলে **present perfect continuous**।", en: "If the action is still running — waiting, studying, raining, working — use the **present perfect continuous**.", hi: "काम अभी भी चल रहा है — इंतज़ार, पढ़ाई, बारिश, काम — तो **present perfect continuous**।" },
            { bn: "I have been waiting for an hour।", en: "I have been waiting for an hour.", hi: "I have been waiting for an hour।" },
            { bn: "It has been raining since morning।", en: "It has been raining since morning.", hi: "It has been raining since morning।" },
            { bn: "We have been working on this project for six months।", en: "We have been working on this project for six months.", hi: "We have been working on this project for six months।" },
            { bn: "গঠন: have/has been + verb-ing + for/since-বাক্যাংশ।", en: "Structure: have/has been + verb-ing + a for/since phrase.", hi: "संरचना: have/has been + verb-ing + for/since वाक्यांश।" },
            { bn: "এই কাল বক্তার ক্লান্তি-ধৈর্যও বোঝায় — 'I have been calling you since noon!'", en: "This tense also colours the speaker's fatigue or patience — 'I have been calling you since noon!'", hi: "यह काल बोलने वाले की थकान-धैर्य भी दर्शाता है — 'I have been calling you since noon!'" },
            { bn: "তাই অভিযোগ-আবেগের বাক্যে নেটিভরা এটাই বেছে নেন।", en: "That is why natives pick it for complaints and feelings.", hi: "इसीलिए शिकायत-भावना के वाक्यों में नेटिव इसी को चुनते हैं।" },
          ],
          formula: {
            bn: "প্রশ্ন: How long have you been + verb-ing? → উত্তর: Since + শুরুর বিন্দু / For + সময়ের মাপ",
            en: "Question: How long have you been + verb-ing? → Answer: Since + a point / For + a span",
            hi: "प्रश्न: How long have you been + verb-ing? → जवाब: Since + बिंदु / For + अवधि",
          },
          examples: [
            { wrong: "I am working in this company since 2019.", right: "I have been working in this company since 2019.", note: { bn: "২০১৯ থেকে এখনো চলছে → present perfect continuous + since।", en: "Running since 2019 until now → present perfect continuous + since.", hi: "2019 से अब तक चल रहा → present perfect continuous + since।" } },
            { wrong: "It is raining since morning.", right: "It has been raining since morning.", note: { bn: "'সকাল থেকে বৃষ্টি' চলমান — is raining একা পর্যাপ্ত নয়।", en: "Raining since morning is ongoing — is raining alone is not enough.", hi: "सुबह से बारिश जारी — अकेला is raining अपर्याप्त।" } },
            { wrong: "How long do you know Rahim?", right: "How long have you known Rahim?", note: { bn: "know স্টেটিভ — continuous নয়, তাই have known (perfect simple)।", en: "Know is stative — no continuous, so have known (perfect simple).", hi: "know स्टेटिव है — continuous नहीं, इसलिए have known (perfect simple)।" } },
            { wrong: "We have been waiting here since two hours.", right: "We have been waiting here for two hours.", note: { bn: "কাঠামো ঠিক ছিল, শুধু since/for উল্টে গেছে — 'দুই ঘণ্টা' মাপ → for।", en: "The structure was right; only since/for flipped — 'two hours' is a span → for.", hi: "संरचना सही थी, केवल since/for पलट गया — 'दो घंटे' अवधि → for।" } },
          ],
        },
        {
          heading: {
            bn: "⚠️ বাঙালি শিক্ষার্থীদের কমন ভুল",
            en: "⚠️ Common mistakes by Bengali speakers",
            hi: "⚠️ बांग्लाभाषी विद्यार्थियों की सामान्य गलतियाँ",
          },
          lead: {
            bn: "চারটা আয়নায়-চেনা ভুল — একবার চিনে নিলে আর ফিরবে না।",
            en: "Four mirror-familiar errors — recognise them once and they never return.",
            hi: "चार पहचानी-पहचानी गलतियाँ — एक बार पहचान लें, फिर लौटेंगी नहीं।",
          },
          points: [
            { bn: "ভুল ১ — simple present + since: 'I am here since 2020', 'He lives here since birth' — কাল হবে present perfect।", en: "Error 1 — simple present + since: 'I am here since 2020', 'He lives here since birth' — the tense must be present perfect.", hi: "गलती 1 — simple present + since: 'I am here since 2020', 'He lives here since birth' — काल present perfect होगा।" },
            { bn: "ভুল ২ — মাপের সাথে since: 'since two years', 'since three hours' — মাপ মানেই for।", en: "Error 2 — since with a measure: 'since two years', 'since three hours' — a measure means for.", hi: "गलती 2 — माप के साथ since: 'since two years', 'since three hours' — माप का अर्थ for।" },
            { bn: "ভুল ৩ — 'থেকে'-র জোরে perfect কালেও from: 'I am working here from January'।", en: "Error 3 — from dragged into perfect tenses by the Bengali 'থেকে': 'I am working here from January'.", hi: "गलती 3 — 'से' के दबाव में perfect काल में from: 'I am working here from January'।" },
            { bn: "ভুল ৪ — since-ক্লজে present perfect: 'since I have joined' নয় — 'since I joined'।", en: "Error 4 — present perfect inside the since-clause: not 'since I have joined' — 'since I joined'.", hi: "गलती 4 — since-clause में present perfect: 'since I have joined' नहीं — 'since I joined'।" },
            { bn: "শোধরানোর অভ্যাস: 'থেকে' শুনলে ভাবুন — শুরুর নাম নাকি মাপ?", en: "The fixing habit: on hearing 'থেকে', ask — a named start or a measure?", hi: "सुधार की आदत: 'से' सुनते ही पूछें — नामित शुरुआत या माप?" },
            { bn: "'ধরে' শুনলে সরাসরি for।", en: "On hearing 'ধরে', go straight to for.", hi: "'धरे' सुनते ही सीधे for।" },
          ],
          examples: [
            { wrong: "I am in this school since 2020.", right: "I have been in this school since 2020.", note: { bn: "'২০২০ থেকে এখনো' → present perfect; simple present বাংলা-ছায়া।", en: "'From 2020 until now' → present perfect; simple present is a Bengali shadow.", hi: "'2020 से अब तक' → present perfect; simple present अनुवाद-छाया।" } },
            { wrong: "He knows me since we are children.", right: "He has known me since we were children.", note: { bn: "since-ক্লজে অতীত (were), মূল বাক্যে perfect (has known) — দুই জায়গাতেই কাল ঠিক করতে হবে।", en: "The since-clause goes past (were), the main clause perfect (has known) — fix the tense on both sides.", hi: "since-clause में past (were), मुख्य वाक्य में perfect (has known) — दोनों ओर काल ठीक करें।" } },
            { wrong: "I am living in this flat since ten years.", right: "I have been living in this flat for ten years.", note: { bn: "দুই সমস্যা — 'দশ বছর' মাপ → for, আর কাল → present perfect continuous।", en: "Two problems — 'ten years' is a measure → for, and the tense → present perfect continuous.", hi: "दो समस्या — 'दस वर्ष' माप → for, और काल → present perfect continuous।" } },
            { wrong: "We are waiting since one hour.", right: "We have been waiting for an hour.", note: { bn: "'এক ঘণ্টা ধরে' → for an hour; কাল → have been waiting।", en: "'One hour' → for an hour; the tense → have been waiting.", hi: "'एक घंटे से' → for an hour; काल → have been waiting।" } },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট গল্পে দেখা যাক",
            en: "📖 A short story to see it all",
            hi: "📖 एक छोटी कहानी में सब देखें",
          },
          lead: {
            bn: "রিইউনিয়নের আড্ডায় since, for, from — চার প্যাটার্ন এক কথায়।",
            en: "A reunion chat where since, for, from and it's-been-since all show up at once.",
            hi: "रियूनियन की बातचीत में since, for, from — चारों पैटर्न एक साथ।",
          },
          points: [
            { bn: "কলেজ-রিইউনিয়নে রিনা জিজ্ঞেস করল: 'How long have you been in this city?'", en: "At the college reunion Rina asked: 'How long have you been in this city?'", hi: "कॉलेज-रियूनियन में रीना ने पूछा: 'How long have you been in this city?'" },
            { bn: "রাফি: 'Since 2018 — so, for almost seven years now.' — বিন্দু আর মাপ এক উত্তরে।", en: "Rafi: 'Since 2018 — so, for almost seven years now.' — point and span in one answer.", hi: "राफ़ी: 'Since 2018 — so, for almost seven years now.' — बिंदु और अवधि एक ही जवाब में।" },
            { bn: "রিনা: 'Wow! We haven't met since our final exams!'", en: "Rina: 'Wow! We haven't met since our final exams!'", hi: "रीना: 'Wow! We haven't met since our final exams!'" },
            { bn: "রাফি: 'It's been twelve years since we graduated. I have been looking for your number for months!'", en: "Rafi: 'It's been twelve years since we graduated. I have been looking for your number for months!'", hi: "राफ़ी: 'It's been twelve years since we graduated. I have been looking for your number for months!'" },
            { bn: "রিনা হাসল: 'I have had this number since college — you never called!'", en: "Rina laughed: 'I have had this number since college — you never called!'", hi: "रीना हँसी: 'I have had this number since college — you never called!'" },
            { bn: "রাফি: 'From tomorrow, I will call you every week!' — ভবিষ্যতের শুরুতারিখে from।", en: "Rafi: 'From tomorrow, I will call you every week!' — from for a future start date.", hi: "राफ़ी: 'From tomorrow, I will call you every week!' — भविष्य की शुरुआती तारीख में from।" },
            { bn: "ছোট্ট কথাতেই চার প্যাটার্ন — since, for, from, it's been... since।", en: "One short chat, four patterns — since, for, from, it's been... since.", hi: "छोटी बातचीत में ही चार पैटर्न — since, for, from, it's been... since।" },
          ],
          examples: [
            { wrong: "We haven't met from our final exams.", right: "We haven't met since our final exams.", note: { bn: "perfect কালে শুরুর বিন্দু → since; from এখানে আসে না।", en: "A start point in a perfect tense → since; from does not fit here.", hi: "perfect काल में शुरुआती बिंदु → since; from यहाँ नहीं।" } },
            { wrong: "It's been twelve years since we have graduated.", right: "It's been twelve years since we graduated.", note: { bn: "since-ক্লজে past simple — graduated।", en: "The since-clause takes past simple — graduated.", hi: "since-clause में past simple — graduated।" } },
            { wrong: "I have had this number from college.", right: "I have had this number since college.", note: { bn: "কলেজ-নাম — বিন্দু → since।", en: "College is a named point → since.", hi: "college नामित बिंदु है → since।" } },
            { wrong: "From tomorrow I am calling you every week!", right: "From tomorrow, I will call you every week!", note: { bn: "ভবিষ্যৎ প্রতিশ্রুতি — from + will; from এখানে শুরুর তারিখ (perfect নয়)।", en: "A future promise — from + will; here from marks a start date (no perfect involved).", hi: "भविष्य का वादा — from + will; यहाँ from शुरुआती तारीख है (perfect नहीं)।" } },
          ],
        },
      ],
      tips: [
        { bn: "এক লাইনের সূত্র: since = শুরুর বিন্দু, for = দূরত্ব/মাপ।", en: "The one-line formula: since = starting point, for = distance/span.", hi: "एक-लाइन सूत्र: since = शुरुआती बिंदु, for = दूरी/अवधि।" },
        { bn: "since/for দেখলেই কাল-চেক: present perfect বা perfect continuous আছে কি? না হলে বাক্য ঠিক করুন।", en: "On seeing since/for, check the tense: is there a present perfect or perfect continuous? If not, repair the sentence.", hi: "since/for देखते ही काल-जाँच: present perfect या perfect continuous है? नहीं तो वाक्य सुधारें।" },
        { bn: "বাংলা 'ধরে' শুনলে for; 'থেকে' শুনলে প্রথমে ভাবুন — বিন্দু নাকি perfect কাল? তারপর since/from বাছুন।", en: "Hear 'ধরে' → for; hear 'থেকে' → first decide: a point or a perfect tense? Then pick since/from.", hi: "'धरे' सुनें → for; 'से' सुनें → पहले तय करें: बिंदु या perfect काल? फिर since/from चुनें।" },
        { bn: "from...to/until = দুই প্রান্ত (রুটিন, ভবিষ্যৎ, past বিবরণ); since = শুধু শুরু, এখন পর্যন্ত চলছে।", en: "from...to/until = both ends (routines, futures, past narratives); since = only the start, running until now.", hi: "from...to/until = दोनों सिरे (दिनचर्या, भविष्य, past विवरण); since = केवल शुरुआत, अब तक जारी।" },
        { bn: "It has been + মাপ + since + past simple — 'It's been ages since we talked'।", en: "It has been + span + since + past simple — 'It's been ages since we talked'.", hi: "It has been + अवधि + since + past simple — 'It's been ages since we talked'।" },
        { bn: "since-ক্লজে সবসময় past simple — 'since I joined', 'since she left'; 'since I have joined' নয়।", en: "The since-clause always takes past simple — 'since I joined', 'since she left'; not 'since I have joined'.", hi: "since-clause में सदैव past simple — 'since I joined', 'since she left'; 'since I have joined' नहीं।" },
        { bn: "'since two years', 'since three hours' কখনো নয় — মাপ মানেই for।", en: "Never 'since two years', 'since three hours' — a measure always means for.", hi: "'since two years', 'since three hours' कभी नहीं — माप का अर्थ सदा for।" },
        { bn: "দিনে একবার 'How long have you been...?' প্রশ্নে অভ্যাস করুন — উত্তরে since/for আসামাত্র দুটোই পাকা হবে।", en: "Practise one 'How long have you been...?' question a day — answering with since/for will set both for good.", hi: "रोज़ एक 'How long have you been...?' प्रश्न का अभ्यास करें — उत्तर में since/for आने से दोनों पक्के होंगे।" },
        { bn: "একই সময় দুইভাবে: since 9 a.m. = for three hours (এখন ১২টা হলে) — বিন্দু-মাপের রূপান্তরটা বুঝলে বিষয়টা পুরো পরিষ্কার।", en: "One time, two ways: since 9 a.m. = for three hours (if it is 12 now) — grasp this point-span conversion and the whole topic clicks.", hi: "एक समय, दो रूप: since 9 a.m. = for three hours (अभी 12 बजे हैं तो) — यह बिंदु-अवधि रूपांतरण समझते ही विषय साफ़।" },
      ],
      quiz: [
        { question: "I have lived in Chattogram ___ 2015.", options: ["for", "since", "from", "at"], answer: 1, explanation: { bn: "২০১৫ শুরুর বিন্দু — since 2015; for হলে মাপ লাগত (for ten years)।", en: "2015 is a start point — since 2015; for would need a span (for ten years).", hi: "2015 शुरुआती बिंदु है — since 2015; for के लिए अवधि चाहिए (for ten years)।" } },
        { question: "We have been waiting ___ three hours.", options: ["since", "for", "from", "during"], answer: 1, explanation: { bn: "'তিন ঘণ্টা' মাপ → for three hours।", en: "'Three hours' is a span → for three hours.", hi: "'तीन घंटे' अवधि → for three hours।" } },
        { question: "She has known him ___ they were children.", options: ["for", "since", "from", "during"], answer: 1, explanation: { bn: "since + পূর্ণ clause ('they were children') — শুরুর বিন্দু।", en: "since + a full clause ('they were children') — the starting point.", hi: "since + पूरा clause ('they were children') — शुरुआती बिंदु।" } },
        { question: "Which sentence is correct?", options: ["I am here since Monday.", "I have been here since Monday.", "I am here from Monday.", "I was here since Monday."], answer: 1, explanation: { bn: "since বসলে কাল হবে present perfect — I have been here since Monday।", en: "With since, the tense must be present perfect — I have been here since Monday.", hi: "since के साथ काल present perfect होगा — I have been here since Monday।" } },
        { question: "The shop is open ___ 9 a.m. to 9 p.m.", options: ["since", "for", "from", "during"], answer: 2, explanation: { bn: "দুই প্রান্ত (9 to 9) + রুটিন → from...to।", en: "Both ends (9 to 9) + routine → from...to.", hi: "दोनों सिरे (9 to 9) + दिनचर्या → from...to।" } },
        { question: "It's been a long time ___ we last met.", options: ["since", "for", "from", "when"], answer: 0, explanation: { bn: "It has been + মাপ + since + past simple (met) — since-কাঠামো।", en: "It has been + span + since + past simple (met) — the since-structure.", hi: "It has been + अवधि + since + past simple (met) — since-संरचना।" } },
        { question: "Which sentence is correct?", options: ["I have been working here since five years.", "I am working here for five years.", "I have been working here for five years.", "I work here since five years."], answer: 2, explanation: { bn: "'পাঁচ বছর' মাপ → for, আর কাল → present perfect continuous — দুটোই ঠিক থাকলে বাক্য শুদ্ধ।", en: "'Five years' is a span → for, and the tense → present perfect continuous — both fixed makes the sentence correct.", hi: "'पाँच वर्ष' अवधि → for, और काल → present perfect continuous — दोनों ठीक तो वाक्य शुद्ध।" } },
        { question: "How long ___ you been learning English?", options: ["did", "have", "are", "were"], answer: 1, explanation: { bn: "'কতদিন ধরে' প্রশ্ন → present perfect continuous: How long have you been...?", en: "A 'how long' question → present perfect continuous: How long have you been...?", hi: "'कितने समय से' प्रश्न → present perfect continuous: How long have you been...?" } },
        { question: "He has been ill ___ Friday.", options: ["for", "since", "from", "until"], answer: 1, explanation: { bn: "Friday নাম-বিন্দু → since; for হলে হতো for two days।", en: "Friday is a named point → since; for would need a span like for two days.", hi: "Friday नामित बिंदु → since; for होता तो for two days जैसी अवधि चाहिए।" } },
        { question: "Which sentence is correct?", options: ["It has been raining since morning.", "It is raining since morning.", "It rains since morning.", "It has been raining for morning."], answer: 0, explanation: { bn: "চলমান বৃষ্টি + 'সকাল থেকে' → present perfect continuous + since; morning নাম-বিন্দু, মাপ নয়।", en: "Ongoing rain + 'since morning' → present perfect continuous + since; morning is a named point, not a span.", hi: "चलती बारिश + 'सुबह से' → present perfect continuous + since; morning नामित बिंदु है, अवधि नहीं।" } },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_I2B;
