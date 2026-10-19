// ─── Grammar seeds v4: INTERMEDIATE batch B — part 1 (3 lessons) ───
// Task 10 — point-form roadmap upgrade. Source: grammar-v2-b.ts
// (Linking Words & Connectors, Phrasal Verbs in Daily Talk, Present Perfect Continuous).
// v4: roadmap + emoji sections + lead + bullet points replace body paragraphs;
// title/intro/tips/examples copied from source UNCHANGED. No quiz in source → omitted.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_V2B1: SeedGrammarV4Entry[] = [
  /* ── 1. Linking Words & Connectors ─────────────────────────────────── */
  {
    topic: "Linking Words & Connectors",
    level: "intermediate",
    title: "Linking Words & Connectors (Intermediate)",
    unit: 0,
    sortOrder: 10,
    data: {
      title: {
        bn: "লিংকিং ওয়ার্ডস ও কানেক্টর (মধ্যম স্তর)",
        en: "Linking Words & Connectors (Intermediate)",
        hi: "लिंकिंग वर्ड्स और कनेक्टर (मध्यम स्तर)",
      },
      intro: {
        bn: "বাংলায় বাক্য জোড়া দিতে 'আর', 'কিন্তু', 'তাই', 'কারণ' — এই চার শব্দেই সারাজীবন চলে যায়, আবার 'যদিও... কিন্তু', 'কারণ... তাই' — জোড়া মিলিয়েও বলি। ইংরেজিতে নিয়ম আলাদা: এক সংযোগে এক শব্দ, আর however, therefore, although-এর মতো আনুষ্ঠানিক কানেক্টর ব্যবহার করলে কমা-ডটের নিয়মও মানতে হয়। এই পাঠে বাংলাভাষীদের সবচেয়ে পরিচিত ভুলগুলো একে একে ধরে ঠিক করব।",
        en: "In English, linking words glue your ideas together smoothly. Bengali speakers often overuse 'and', double up connectors ('although... but'), or drop the comma that however/therefore need. This lesson gives you the everyday four, the formal connectors, despite vs although, and ways to break the 'and' habit.",
        hi: "इंग्लिश में लिंकिंग वर्ड्स विचारों को जोड़ते हैं। बांग्लाभाषी अक्सर 'and' बहुत ज़्यादा इस्तेमाल करते हैं, 'although... but' जैसे दोहरे कनेक्टर लगाते हैं, या however/therefore के साथ कॉमा भूल जाते हैं। इस पाठ में चारों रोज़मर्रा के कनेक्टर, औपचारिक कनेक्टर, despite बनाम although और 'and' की आदत तोड़ने के उपाय सीखेंगे।",
      },
      roadmap: [
        {
          bn: "🌉 রোজকার চার connector: and, but, so, because",
          en: "🌉 The everyday four: and, but, so, because",
          hi: "🌉 रोज़मर्रा के चार: and, but, so, because",
        },
        {
          bn: "🎩 however, therefore — আনুষ্ঠানিক লেখার connector ও কমার নিয়ম",
          en: "🎩 however, therefore — the formal connectors and their comma rule",
          hi: "🎩 however, therefore — औपचारिक connector और कॉमा का नियम",
        },
        {
          bn: "⚖️ despite বনাম although — এক অর্থ, আলাদা ব্যাকরণ",
          en: "⚖️ despite vs although — same meaning, different grammar",
          hi: "⚖️ despite बनाम although — अर्थ वही, व्याकरण अलग",
        },
        {
          bn: "✂️ and-এর আসক্তি কমানোর তিনটে কৌশল",
          en: "✂️ three tricks to break the 'and' habit",
          hi: "✂️ 'and' की आदत तोड़ने के तीन उपाय",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🌉 চার প্রতিবেশী: and, but, so, because",
            en: "🌉 The everyday four: and, but, so, because",
            hi: "🌉 रोज़मर्रा के चार: and, but, so, because",
          },
          lead: {
            bn: "দুটো বাক্য জোড়া দেওয়ার চারটা রোজকার শব্দ — আর বাঙালি শিক্ষার্থীদের সবচেয়ে চেনা ফাঁদ।",
            en: "The four everyday words that join two sentences — and the traps Bengali speakers know best.",
            hi: "दो वाक्य जोड़ने वाले चार रोज़मर्रा के शब्द — और बांग्लाभाषियों की सबसे जानी-पहचानी गलतियाँ।",
          },
          points: [
            {
              bn: "এই চারটা শব্দ দুটো পূর্ণ clause-কে এক বাক্যে জোড়ে দেয়।",
              en: "These four words join two full clauses inside one sentence.",
              hi: "ये चार शब्द दो पूर्ण clause को एक ही वाक्य में जोड़ते हैं।",
            },
            {
              bn: "**and** — যোগ বোঝায় (আর/এবং): I play cricket and he plays football।",
              en: "**and** — adds information: I play cricket and he plays football.",
              hi: "**and** — जोड़ बताता है: I play cricket and he plays football.",
            },
            {
              bn: "**but** — বিপরীত বোঝায় (কিন্তু): He is poor but honest।",
              en: "**but** — shows contrast: He is poor but honest.",
              hi: "**but** — विरोध बताता है: He is poor but honest.",
            },
            {
              bn: "**so** — ফলাফল বোঝায় (তাই): It rained, so we stayed home।",
              en: "**so** — shows result: It rained, so we stayed home.",
              hi: "**so** — परिणाम बताता है: It rained, so we stayed home.",
            },
            {
              bn: "**because** — কারণ বোঝায়: We stayed home because it rained।",
              en: "**because** — gives the reason: We stayed home because it rained.",
              hi: "**because** — कारण बताता है: We stayed home because it rained.",
            },
            {
              bn: "এক সম্পর্কে একটাই connector — because থাকলে so বাদ, although থাকলে but বাদ।",
              en: "One relationship takes ONE connector — drop so when because is there, drop but when although is there.",
              hi: "एक संबंध के लिए एक ही connector — because है तो so नहीं, although है तो but नहीं।",
            },
            {
              bn: "বাংলার 'যেহেতু... সেহেতু', 'যদিও... তবু' জোড়া ইংরেজিতে কখনো চলে না।",
              en: "The Bengali pairs 'since... therefore' and 'although... but' never work in English.",
              hi: "बांग्ला की 'जबकि... इसलिए', 'यद्यपि... लेकिन' जोड़ी अंग्रेज़ी में कभी नहीं चलती।",
            },
            {
              bn: "দুটো পূর্ণ বাক্য শুধু কমা দিয়ে জোড়া যায় না — এটা comma splice; মাঝে conjunction লাগবেই।",
              en: "Two full sentences never join with only a comma — that is a comma splice; a conjunction is required.",
              hi: "दो पूर्ण वाक्य केवल कॉमा से नहीं जुड़ते — यह comma splice है; conjunction ज़रूरी है।",
            },
          ],
          formula: {
            bn: "Clause + and / but / so / because + clause — এক সম্পর্কে একটাই connector",
            en: "Clause + and / but / so / because + clause — one connector per relationship",
            hi: "Clause + and / but / so / because + clause — एक संबंध में एक ही connector",
          },
          table: {
            head: [
              { bn: "স্তর", en: "Tier", hi: "स्तर" },
              { bn: "যোগ", en: "Addition", hi: "जोड़" },
              { bn: "বিপরীত", en: "Contrast", hi: "विरोध" },
              { bn: "কারণ", en: "Reason", hi: "कारण" },
              { bn: "ফলাফল", en: "Result", hi: "परिणाम" },
              { bn: "শর্ত", en: "Condition", hi: "शर्त" },
            ],
            rows: [
              [
                { bn: "রোজকার", en: "Everyday", hi: "रोज़मर्रा" },
                { bn: "and", en: "and", hi: "and" },
                { bn: "but", en: "but", hi: "but" },
                { bn: "because", en: "because", hi: "because" },
                { bn: "so", en: "so", hi: "so" },
                { bn: "if", en: "if", hi: "if" },
              ],
              [
                { bn: "আনুষ্ঠানিক", en: "Formal", hi: "औपचारिक" },
                { bn: "in addition", en: "in addition", hi: "in addition" },
                { bn: "however", en: "however", hi: "however" },
                { bn: "since / as", en: "since / as", hi: "since / as" },
                { bn: "therefore", en: "therefore", hi: "therefore" },
                { bn: "even though", en: "even though", hi: "even though" },
              ],
            ],
          },
          examples: [
            {
              wrong: "Because he was ill, so he stayed at home.",
              right: "Because he was ill, he stayed at home.",
              note: {
                bn: "বাংলায় 'কারণ... তাই' দুটোই বলি, কিন্তু ইংরেজিতে এক সম্পর্কে একটাই শব্দ: because থাকলে so বাদ, so থাকলে because বাদ।",
                en: "Bengali uses both 'because' and 'so', but English takes only one connector per relationship: drop 'so' when 'because' is already there.",
                hi: "बांग्ला में 'कारण... इसलिए' दोनों आते हैं, पर अंग्रेज़ी में एक ही connector: because है तो so नहीं।",
              },
            },
            {
              wrong: "Although it was raining, but we went out.",
              right: "Although it was raining, we went out.",
              note: {
                bn: "'যদিও... কিন্তু' জোড়া বাংলার প্যাটার্ন; although-ই but-এর কাজ করে নেয়, তাই but রাখলে দ্বিগুণ সংযোগ হয়ে যায়।",
                en: "'Although' already means 'but', so adding 'but' doubles the contrast marker — keep only one.",
                hi: "'Although' में 'but' का अर्थ पहले से है — दोनों साथ नहीं चलते, केवल एक रखें।",
              },
            },
            {
              wrong: "I called her many times, she didn't answer.",
              right: "I called her many times, but she didn't answer.",
              note: {
                bn: "দুটো পূর্ণ বাক্য একটা কমা দিয়ে জোড়া যায় না — এটা comma splice; সম্পর্ক অনুযায়ী but/so/because/and বসাতে হবে।",
                en: "Joining two full sentences with only a comma is a comma splice — insert a conjunction such as 'but', 'so' or 'because'.",
                hi: "दो पूर्ण वाक्य केवल कॉमा से नहीं जुड़ते (comma splice) — but/so/because जैसा conjunction चाहिए।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🎩 আনুষ্ঠানিক কানেক্টর: however, therefore, although",
            en: "🎩 Formal connectors: however, therefore, although",
            hi: "🎩 औपचारिक कनेक्टर: however, therefore, although",
          },
          lead: {
            bn: "লেখার ভাষার শান্ত, ভদ্র connector — তবে এরা adverb, তাই জোড়ার নিয়মও আলাদা।",
            en: "The calm, polite connectors of writing — but they are adverbs, so their joining rule is different.",
            hi: "लेखन के शांत, विनम्र connector — पर ये adverb हैं, इसलिए जोड़ने का नियम भी अलग।",
          },
          points: [
            {
              bn: "**however** — but-এর আনুষ্ঠানিক রূপ (তবু/অথচ)।",
              en: "**however** — the formal form of 'but'.",
              hi: "**however** — 'but' का औपचारिक रूप।",
            },
            {
              bn: "**therefore** — so-এর আনুষ্ঠানিক রূপ (সুতরাং)।",
              en: "**therefore** — the formal form of 'so'.",
              hi: "**therefore** — 'so' का औपचारिक रूप।",
            },
            {
              bn: "কিন্তু এরা conjunction নয়, adverb — তাই দুই clause জোড়তে পারে না।",
              en: "But they are adverbs, not conjunctions — so they cannot join two clauses.",
              hi: "पर ये conjunction नहीं, adverb हैं — इसलिए दो clause जोड़ नहीं सकते।",
            },
            {
              bn: "নতুন বাক্য শুরু করে পরে কমা নেয়: I was tired. However, I kept working।",
              en: "They start a NEW sentence and take a comma: I was tired. However, I kept working.",
              hi: "नया वाक्य शुरू करके आगे कॉमा लेते हैं: I was tired. However, I kept working.",
            },
            {
              bn: "চাইলে সেমিকোলন দিয়েও জোড়া যায়: I was tired; however, I kept working।",
              en: "A semicolon joins them too: I was tired; however, I kept working.",
              hi: "चाहें तो सेमीकोलन से भी जोड़ें: I was tired; however, I kept working.",
            },
            {
              bn: "বাক্যের শুরুতে however/therefore/moreover-এর পরে কমা বাধ্যতামূলক — বাদ দিলে লেখা তৎক্ষণাৎ লাফিয়ে আসে।",
              en: "A comma after sentence-initial however/therefore/moreover is mandatory — skip it and the writing stumbles.",
              hi: "वाक्य की शुरुआत में however/therefore/moreover के बाद कॉमा अनिवार्य — छोड़ा तो लेखन ठोकर खाता है।",
            },
            {
              bn: "সহজ রাস্তা: কথ্য ভাষায় but/so-ই যথেষ্ট, আনুষ্ঠানিক লেখায় however/therefore।",
              en: "The easy route: but/so are fine in everyday speech; keep however/therefore for formal writing.",
              hi: "आसान रास्ता: बोलचाल में but/so ही काफ़ी, औपचारिक लेखन में however/therefore।",
            },
          ],
          formula: {
            bn: "পূর্ণ বাক্য। However / Therefore, ... — ডট, নতুন বাক্য, কমা",
            en: "Full sentence. However / Therefore, ... — full stop, new sentence, comma",
            hi: "पूर्ण वाक्य। However / Therefore, ... — फुल स्टॉप, नया वाक्य, कॉमा",
          },
          examples: [
            {
              wrong: "I was tired, however I kept working.",
              right: "I was tired. However, I kept working.",
              note: {
                bn: "however কনজাংশন নয় — কমা দিয়ে দুই clause জোড়তে পারে না; নতুন বাক্য শুরু করুন আর however-এর পরে কমা দিন।",
                en: "'However' cannot join clauses with just a comma — end the sentence, then start a new one with 'However,'.",
                hi: "'However' केवल कॉमा से clause नहीं जोड़ सकता — वाक्य खत्म करके नया शुरू करें और कॉमा लगाएँ।",
              },
            },
            {
              wrong: "However I don't agree with you.",
              right: "However, I don't agree with you.",
              note: {
                bn: "বাক্যের শুরুতে however/therefore/moreover-এর পরে কমা আবশ্যক — এটা connector-দের পরিচিতি চিহ্ন।",
                en: "A sentence-initial linking adverb always takes a comma after it — it marks the connector as a signal word.",
                hi: "वाक्य-प्रारंभिक linking adverb के बाद कॉमा अनिवार्य है।",
              },
            },
            {
              wrong: "It rained heavily, therefore the match was cancelled.",
              right: "It rained heavily. Therefore, the match was cancelled.",
              note: {
                bn: "therefore-ও however-এর মতো adverb — কমা-জোড়া চলবে না; নতুন বাক্য + কমা, নয়তো সহজ করে so ব্যবহার করুন।",
                en: "'Therefore' behaves like 'however' — new sentence plus comma (or use the simple conjunction 'so').",
                hi: "'Therefore' भी 'however' जैसा ही व्यवहार करता है — नया वाक्य + कॉमा, या सरल 'so' इस्तेमाल करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚖️ despite নাকি although — এক অর্থ, আলাদা ব্যাকরণ",
            en: "⚖️ Despite vs although — same meaning, different grammar",
            hi: "⚖️ despite बनाम although — अर्थ वही, व्याकरण अलग",
          },
          lead: {
            bn: "অর্থ দুটোরই 'সত্ত্বেও' — কিন্তু পরের অংশে কী বসবে, সেটাই আসল পরীক্ষা।",
            en: "Both mean 'in spite of' — the real test is what comes right after.",
            hi: "दोनों का अर्थ 'के बावजूद' — असली परीक्षा है उसके बाद क्या आता है।",
          },
          points: [
            {
              bn: "**although** — পরে পূর্ণ clause (subject + verb) লাগে: Although it rained, we played।",
              en: "**although** — takes a full clause (subject + verb): Although it rained, we played.",
              hi: "**although** — बाद में पूर्ण clause (subject + verb) चाहिए: Although it rained, we played.",
            },
            {
              bn: "**despite / in spite of** — পরে noun, pronoun বা -ing রূপ: Despite the rain, we played।",
              en: "**despite / in spite of** — takes a noun, pronoun or -ing form: Despite the rain, we played.",
              hi: "**despite / in spite of** — बाद में noun, pronoun या -ing रूप: Despite the rain, we played.",
            },
            {
              bn: "Despite being tired, he smiled — পরে -ing রূপ এলেও নিয়ম একই।",
              en: "Despite being tired, he smiled — the rule holds for -ing forms too.",
              hi: "Despite being tired, he smiled — -ing रूप पर भी नियम वही।",
            },
            {
              bn: "'despite of' — এমন কিছু নেই; হয় despite (of ছাড়া), নয় in spite of (of সহ)।",
              en: "'Despite of' does not exist — either despite (no of) or in spite of (with of).",
              hi: "'Despite of' अस्तित्व में नहीं — या तो despite (of के बिना), या in spite of (of सहित)।",
            },
            {
              bn: "বাক্যে শুধু noun থাকলে although বসতে পারে না — তখন despite / in spite of-ই রাস্তা।",
              en: "When only a noun is available, although cannot fit — despite / in spite of is the way.",
              hi: "वाक्य में केवल noun हो तो although नहीं बैठता — तब despite / in spite of ही रास्ता।",
            },
          ],
          formula: {
            bn: "although + কর্তা + ক্রিয়া • despite / in spite of + noun / -ing",
            en: "although + subject + verb • despite / in spite of + noun / -ing",
            hi: "although + subject + verb • despite / in spite of + noun / -ing",
          },
          examples: [
            {
              wrong: "Despite he was poor, he was honest.",
              right: "Despite being poor, he was honest.",
              note: {
                bn: "despite-এর পরে subject + verb আসে না; noun বা -ing লাগবে — অথবা পুরো clause চাইলে although ব্যবহার করুন।",
                en: "'Despite' cannot be followed by a clause — use a noun or -ing form, or switch to 'although' for the full clause.",
                hi: "'Despite' के बाद clause नहीं आता — noun या -ing रूप लगाएँ, या 'although' इस्तेमाल करें।",
              },
            },
            {
              wrong: "Despite of the rain, we played on.",
              right: "In spite of the rain, we played on.",
              note: {
                bn: "'despite of' নেই — of রাখলে in spite of হবে, of বাদ দিলে শুধু despite।",
                en: "'Despite of' does not exist — write either 'despite' or 'in spite of'.",
                hi: "'Despite of' गलत है — या तो 'despite' लिखें, या 'in spite of'।",
              },
            },
            {
              wrong: "Although of his illness, he came to class.",
              right: "Despite his illness, he came to class.",
              note: {
                bn: "although শুধু পূর্ণ clause ধরে; শুধু noun থাকলে (of সহ বা ছাড়া) despite/in spite of বসে।",
                en: "'Although' must govern a whole clause; when only a noun is available, use despite / in spite of.",
                hi: "'Although' केवल पूर्ण clause लेता है; केवल noun हो तो despite / in spite of इस्तेमाल करें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "✂️ 'and'-এর অতিরিক্ত ব্যবহার কমান",
            en: "✂️ Break the 'and' habit",
            hi: "✂️ 'and' की आदत तोड़ें",
          },
          lead: {
            bn: "পরপর 'আর' বলার বাংলা অভ্যাস ইংরেজিতে শিশুসুলভ লেখা বানায় — তিনটে কৌশলে কাটুন।",
            en: "The Bengali habit of chaining 'আর' makes English writing childish — three fixes cut it down.",
            hi: "लगातार 'और' कहने की बांग्ला आदत अंग्रेज़ी लेखन को बचकाना बनाती है — तीन उपाय इसे काटते हैं।",
          },
          points: [
            {
              bn: "বাংলা গল্পে পরপর বাক্য 'আর' দিয়ে জোড়া হয় — সেই অভ্যাসে প্রতিটা ইংরেজি বাক্য and-এ চলে যায়, লেখা শিশুসুলভ শোনায়।",
              en: "Bengali stories chain sentences with 'আর' — carried into English, every sentence gets joined by and, and the writing sounds childish.",
              hi: "बांग्ला कहानियों में वाक्य 'और' से जुड़ते हैं — वही आदत अंग्रेज़ी में हर वाक्य and बना देती है, लेखन बचकाना लगता है।",
            },
            {
              bn: "(১) একই কর্তার কাজগুলো কমা-তালিকায় ভাগ করুন — and বসে শুধু শেষ আইটেমের আগে।",
              en: "(1) Put one subject's actions into a comma series — and appears only before the last item.",
              hi: "(1) एक ही subject के कामों को कॉमा-सूची में लिखें — and केवल अंतिम आइटम से पहले।",
            },
            {
              bn: "(২) যোগ বোঝাতে also, too, as well, in addition ব্যবহার করুন।",
              en: "(2) For addition, reach for also, too, as well, in addition.",
              hi: "(2) जोड़ के लिए also, too, as well, in addition इस्तेमाल करें।",
            },
            {
              bn: "সময়ধারায় then, after that, later; কারণে because / since / as।",
              en: "For time sequence, then, after that, later; for reason, because / since / as.",
              hi: "क्रम के लिए then, after that, later; कारण के लिए because / since / as।",
            },
            {
              bn: "(৩) লম্বা and-শৃঙ্খল ভেঙে দুটো ছোট বাক্য করুন — ছোট বাক্যও শক্তিশালী হয়।",
              en: "(3) Break long and-chains into two short sentences — short sentences are powerful too.",
              hi: "(3) लंबी and-श्रृंखला तोड़कर दो छोटे वाक्य बनाएँ — छोटे वाक्य भी दमदार होते हैं।",
            },
            {
              bn: "and শুধু যোগ বোঝায়; দ্বিতীয় clause কারণ বোঝালে because / since / as-ই লাগবে।",
              en: "'And' only adds; when the second clause explains why, you need because / since / as.",
              hi: "'and' केवल जोड़ता है; दूसरा clause कारण बताए तो because / since / as चाहिए।",
            },
          ],
          examples: [
            {
              wrong: "I woke up and I brushed my teeth and I had breakfast and I went to office.",
              right: "I woke up, brushed my teeth, had breakfast and went to the office.",
              note: {
                bn: "একই কর্তার ধারাবাহিক কাজগুলো কমা-তালিকায় পড়ে; শেষ দুই আইটেমের মাঝেই and বসে — বাকি and-গুলো মুছে যায়।",
                en: "Actions of the same subject become a comma series; 'and' appears only once, before the last item.",
                hi: "एक ही subject के क्रमिक काम कॉमा-सूची बनते हैं; 'and' केवल अंतिम आइटम से पहले आता है।",
              },
            },
            {
              wrong: "He is smart and he is honest and he is hardworking.",
              right: "He is smart, honest and hardworking.",
              note: {
                bn: "একই কর্তাকে বর্ণনা করা adjective-গুলো পাশাপাশি বসে, and একবারই — প্রতিটার আগে he is দোহরাতে হয় না।",
                en: "Adjectives describing the same subject share one verb phrase; repeat 'he is' only once at the start.",
                hi: "एक ही subject के विशेषण एक साथ बैठते हैं; 'and' केवल एक बार।",
              },
            },
            {
              wrong: "I bought a new phone and my old one was slow.",
              right: "I bought a new phone because my old one was slow.",
              note: {
                bn: "and শুধু যোগ বোঝায়; কারণ-সম্পর্ক বোঝালে because/since/as লাগবে — নইলে অর্থ আবছা হয়ে থাকে।",
                en: "'And' only adds; when the second clause explains WHY, use because / since / as.",
                hi: "'And' केवल जोड़ता है; कारण बताने के लिए because / since / as चाहिए।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "লেখার পরে প্রতিটা বাক্যে and কতবার এলো গুনুন; প্রতি বাক্যে একবারের বেশি and হলে বাক্য ভাগ করুন বা অন্য connector বসান।",
          en: "After writing, count the 'and's in each sentence; more than one means you should split the sentence or switch connectors.",
          hi: "लिखने के बाद हर वाक्य में 'and' गिनें; एक से अधिक हो तो वाक्य तोड़ें या connector बदलें।",
        },
        {
          bn: "'যদিও... কিন্তু', 'কারণ... তাই' জোড়া ইংরেজিতে আসবেই না — although/because লেখামাত্র অন্যটা মুছে দিন।",
          en: "Never translate the Bengali pairs 'although... but' or 'because... so' — write one connector and delete the other.",
          hi: "'although... but' या 'because... so' जोड़ी अंग्रेज़ी में न लाएँ — एक connector लिखें, दूसरा मिटाएँ।",
        },
        {
          bn: "however/therefore বসালে আগের বাক্য ডট দিয়ে শেষ করুন, নতুন বাক্যে শুরু করুন, আর পরে কমা দিন — তিন ধাপ মনে রাখুন।",
          en: "For however/therefore remember three steps: full stop, new sentence, comma after the connector.",
          hi: "however/therefore के लिए तीन कदम याद रखें: फुल स्टॉप, नया वाक्य, connector के बाद कॉमा।",
        },
        {
          bn: "প্রতিদিন এক প্যারা লিখুন, তারপর সেটার আনুষ্ঠানিক সংস্করণ বানান — so→therefore, but→however, although-এর জায়গায় despite + noun; এটাই সেরা connector-অনুশীলন।",
          en: "Each day rewrite a paragraph formally — so→therefore, but→however, although→despite + noun; that is the best connector workout.",
          hi: "रोज़ एक पैराग्राफ का औपचारिक रूप लिखें — so→therefore, but→however, although→despite + noun; यही सबसे अच्छा अभ्यास है।",
        },
      ],
    },
  },

  /* ── 2. Phrasal Verbs in Daily Talk ────────────────────────────────── */
  {
    topic: "Phrasal Verbs in Daily Talk",
    level: "intermediate",
    title: "Phrasal Verbs in Daily Talk (Intermediate)",
    unit: 0,
    sortOrder: 11,
    data: {
      title: {
        bn: "ফ্রেজাল ভার্ব — দৈনন্দিন কথায় (মধ্যম স্তর)",
        en: "Phrasal Verbs in Daily Talk (Intermediate)",
        hi: "फ्रेज़ल वर्ब — दैनिक बातचीत में (मध्यम स्तर)",
      },
      intro: {
        bn: "বাংলাভাষী শিক্ষার্থীরা সাধারণত বড় বড় আনুষ্ঠানিক শব্দ (postpone, illuminate, arise) মুখস্থ করেন, কিন্তু নেটিভ স্পিকারের দৈনন্দিন কথায় ভরা phrasal verb-এ: get up, turn on, put off, look after, run out of। 'ফ্যান অন করো' বলতে গিয়ে 'Please on the fan' — এই ধরনের ভুলও এখান থেকেই আসে। এই পাঠে phrasal verb-এর প্রকৃতি, separable/inseparable নিয়ম আর দৈনন্দিন ক্লাস্টার শিখব।",
        en: "Native speakers fill daily talk with phrasal verbs — verb + little particle — instead of formal Latinate words: get up, turn on, put off, look after, run out of. This lesson covers what phrasal verbs are, the separable vs inseparable rule (turn it on, never turn on it), everyday clusters, and the traps Bengali speakers fall into.",
        hi: "नेटिव स्पीकर रोज़मर्रा की बात में औपचारिक शब्दों की बजाय phrasal verbs का इस्तेमाल करते हैं: get up, turn on, put off, look after, run out of। इस पाठ में phrasal verbs का स्वभाव, separable/inseparable नियम (turn it on, कभी turn on it नहीं), रोज़मर्रा के समूह और सामान्य गलतियाँ सीखेंगे।",
      },
      roadmap: [
        {
          bn: "🧩 phrasal verb = verb + particle — অংশ মিললেই নতুন অর্থ",
          en: "🧩 phrasal verb = verb + particle — the parts make a new meaning",
          hi: "🧩 phrasal verb = verb + particle — जुड़ने पर नया अर्थ",
        },
        {
          bn: "🔀 separable নাকি inseparable — object-এর বসার জায়গা",
          en: "🔀 separable or inseparable — where the object goes",
          hi: "🔀 separable या inseparable — object की जगह",
        },
        {
          bn: "🌅 সকাল-কাজ-ঘরের ১২টা রোজকার phrasal verb — ছকসহ",
          en: "🌅 twelve everyday phrasal verbs across morning, work and home — with a table",
          hi: "🌅 सुबह, काम और घर के 12 रोज़मर्रा phrasal verbs — टेबल सहित",
        },
        {
          bn: "⚠️ বাড়তি preposition, হারানো to, আর অনুবাদের ফাঁদ",
          en: "⚠️ extra prepositions, the lost 'to', and translation traps",
          hi: "⚠️ अतिरिक्त preposition, खोया हुआ 'to', और अनुवाद के फँदे",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🧩 Phrasal verb কী ও কেন জরুরি",
            en: "🧩 What a phrasal verb is — and why you need them",
            hi: "🧩 Phrasal verb क्या है — और क्यों ज़रूरी है",
          },
          lead: {
            bn: "নেটিভদের মুখে বড় বড় formal শব্দের চেয়ে এই ছোট জুটিগুলোই বেশি শোনা যায়।",
            en: "On native speakers' lips, these small pairs are heard far more than big formal words.",
            hi: "नेटिव की ज़ुबान पर बड़े formal शब्दों से ज़्यादा यही छोटी जोड़ियाँ सुनाई देती हैं।",
          },
          points: [
            {
              bn: "Phrasal verb = verb + ছোট preposition/adverb (particle) — জুটিটা একসাথে এক ক্রিয়ার কাজ করে।",
              en: "A phrasal verb = verb + a small preposition/adverb (particle) — the pair works as one verb.",
              hi: "Phrasal verb = verb + छोटा preposition/adverb (particle) — जोड़ी मिलकर एक क्रिया का काम करती है।",
            },
            {
              bn: "পুরো জুটি মিলে এমন অর্থ বানায় যা আলাদা শব্দ দুটো থেকে অনুমান করা যায় না।",
              en: "The pair makes a meaning you cannot guess from the two parts alone.",
              hi: "पूरी जोड़ी ऐसा अर्थ बनाती है जो दोनों अलग शब्दों से अनुमान नहीं लगाया जा सकता।",
            },
            {
              bn: "**give up** — হাল ছাড়া; 'দান করে উপরে' বলে কিছু নেই!",
              en: "**give up** — stop trying; it is not 'donate upward'!",
              hi: "**give up** — हार मानना; 'दान करके ऊपर' जैसा कुछ नहीं!",
            },
            {
              bn: "**find out** — খুঁজে বের করা / জেনে নেওয়া।",
              en: "**find out** — discover, get to know.",
              hi: "**find out** — पता लगाना, जान लेना।",
            },
            {
              bn: "**get up** — বিছানা থেকে ওঠা।",
              en: "**get up** — leave the bed.",
              hi: "**get up** — बिस्तर से उठना।",
            },
            {
              bn: "বাংলায় এই অর্থগুলো এক ক্রিয়ায় চলে আসে ('উঠে পড়া', 'ছেড়ে দেওয়া'), তাই অনুবাদে জুটি ভেঙে যায়।",
              en: "Bangla packs these meanings into one verb ('উঠে পড়া', 'ছেড়ে দেওয়া'), so translating breaks the pair.",
              hi: "बांग्ला में यही अर्थ एक क्रिया में आ जाते हैं ('उठे पड़ा', 'छेड़े देवा'), इसलिए अनुवाद करते ही जोड़ी टूट जाती है।",
            },
            {
              bn: "তাই phrasal verb-কে একক শব্দের মতো মুখস্থ করুন, অংশ ধরে নয়।",
              en: "So learn each phrasal verb as a single unit, not part by part.",
              hi: "इसलिए हर phrasal verb को एक इकाई की तरह याद करें, टुकड़ों में नहीं।",
            },
            {
              bn: "নাটক, YouTube, অফিসের আড্ডা — সব জায়গায় এরাই প্রথম পছন্দ।",
              en: "Films, YouTube, office chatter — phrasal verbs are the default choice everywhere.",
              hi: "नाटक, YouTube, ऑफिस की बातचीत — हर जगह यही पहली पसंद हैं।",
            },
          ],
          formula: {
            bn: "verb + particle = নতুন অর্থ (give + up = হাল ছাড়া)",
            en: "verb + particle = a new meaning (give + up = stop trying)",
            hi: "verb + particle = नया अर्थ (give + up = हार मानना)",
          },
          examples: [
            {
              wrong: "Please on the fan.",
              right: "Please turn on the fan.",
              note: {
                bn: "বাংলায় 'অন করা' এক ক্রিয়ার মতো ব্যবহৃত হয়; ইংরেজিতে particle (on) একা ক্রিয়া হয় না — turn on / switch on জুটিটা লাগবে।",
                en: "In Bangla 'অন করা' works as one verb, but in English the particle 'on' can never act alone — you need the pair turn on / switch on.",
                hi: "बांग्ला में 'ऑन करना' एक क्रिया जैसा चलता है, पर अंग्रेज़ी में 'on' अकेले क्रिया नहीं है — turn on / switch on जोड़ी चाहिए।",
              },
            },
            {
              wrong: "Every morning I arise from my bed at six.",
              right: "Every morning I get up at six.",
              note: {
                bn: "দৈনন্দিন কথায় 'ওঠা' বোঝাতে নেটিভরা get up বলেন; arise সাহিত্যিক/আনুষ্ঠানিক (সমস্যা উদ্ভূত হওয়া) অর্থে চলে।",
                en: "For leaving the bed, everyday English uses get up; 'arise' is literary/formal (a problem arose).",
                hi: "बिस्तर छोड़ने के लिए रोज़मर्रा की अंग्रेज़ी में get up बोलते हैं; 'arise' साहित्यिक/औपचारिक है।",
              },
            },
            {
              wrong: "The meeting was cancelled, so we will do it next week.",
              right: "The meeting was put off until next week.",
              note: {
                bn: "'মুলতবি রাখা' বোঝাতে কথায় put off বেশি চলে; postpone ঠিক কিন্তু আনুষ্ঠানিক শোনায়। put off until + সময় — কখন পর্যন্ত তা-ও বলুন।",
                en: "In speech, put off is the natural choice for postponing; postpone sounds formal. Add 'until' + time to say how long it is pushed.",
                hi: "बोलचाल में स्थगित करने के लिए put off स्वाभाविक है; postpone औपचारिक लगता है। 'until' + समय जोड़ें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🔀 আলগা নাকি আটকে থাকা? Separable vs inseparable",
            en: "🔀 Separable vs inseparable — where does the object go?",
            hi: "🔀 Separable बनाम inseparable — object कहाँ जाए?",
          },
          lead: {
            bn: "object কোথায় বসবে — মাঝে না শেষে? জুটিটা আলগা নাকি আটকে, এটাই সিদ্ধান্ত নেয়।",
            en: "Where does the object sit — middle or end? Whether the pair is separable decides it.",
            hi: "object कहाँ बैठेगा — बीच या अंत? जोड़ी separable है या नहीं, यही तय करता है।",
          },
          points: [
            {
              bn: "**Separable** phrasal verb-এ object মাঝখানে বা শেষে দুই জায়গাতেই যেতে পারে: turn on the light / turn the light on।",
              en: "With a **separable** phrasal verb the object can sit in the middle or at the end: turn on the light / turn the light on.",
              hi: "**Separable** phrasal verb में object बीच में या अंत में दोनों जगह जा सकता है: turn on the light / turn the light on.",
            },
            {
              bn: "কিন্তু object pronoun হলে (it, him, her, them) মাঝখানেই বাধ্যতামূলক: turn it on।",
              en: "But a pronoun object (it, him, her, them) MUST go in the middle: turn it on.",
              hi: "पर object pronoun हो (it, him, her, them) तो बीच में ही अनिवार्य: turn it on.",
            },
            {
              bn: "'turn on it' — এমন রূপ ইংরেজিতে কখনো হয় না।",
              en: "'Turn on it' — this shape never exists in English.",
              hi: "'turn on it' — ऐसा रूप अंग्रेज़ी में कभी नहीं होता।",
            },
            {
              bn: "**Inseparable** phrasal verb-এ ক্রিয়া-particle সবসময় পাশাপাশি থাকে: look after the baby / look after her।",
              en: "With an **inseparable** phrasal verb the verb and particle always stay together: look after the baby / look after her.",
              hi: "**Inseparable** phrasal verb में क्रिया-particle सदा साथ रहते हैं: look after the baby / look after her.",
            },
            {
              bn: "'look her after' ভুল — after-কে কোনোভাবেই আলাদা করা যায় না।",
              en: "'Look her after' is wrong — the particle can never split from the verb.",
              hi: "'look her after' गलत — particle को कोई अलग नहीं कर सकता।",
            },
            {
              bn: "তিন অংশের phrasal verb (verb + adverb + preposition) — run out of, put up with, look forward to — এরাও inseparable।",
              en: "Three-part phrasal verbs (verb + adverb + preposition) — run out of, put up with, look forward to — are inseparable too.",
              hi: "तीन-भाग के phrasal verb (verb + adverb + preposition) — run out of, put up with, look forward to — भी inseparable हैं।",
            },
            {
              bn: "'ran out of milk' ঠিক — 'ran of milk out' কখনো নয়।",
              en: "'Ran out of milk' is right — 'ran of milk out' never.",
              hi: "'ran out of milk' सही — 'ran of milk out' कभी नहीं।",
            },
          ],
          formula: {
            bn: "Separable: turn it on ✓, turn on it ✗ • Inseparable: look after her ✓, look her after ✗",
            en: "Separable: turn it on ✓, turn on it ✗ • Inseparable: look after her ✓, look her after ✗",
            hi: "Separable: turn it on ✓, turn on it ✗ • Inseparable: look after her ✓, look her after ✗",
          },
          examples: [
            {
              wrong: "It's cold in here. Turn on it, please.",
              right: "It's cold in here. Turn it on, please.",
              note: {
                bn: "Separable phrasal verb-এর object pronoun হলে মাঝখানেই বসে — 'it' সবসময় turn আর on-এর মাঝে; এটা ইংরেজিতে অনড় নিয়ম।",
                en: "With a separable phrasal verb, a pronoun object must sit in the middle — 'it' always goes between 'turn' and 'on'.",
                hi: "Separable phrasal verb में pronoun object बीच में ही बैठता है — 'it' हमेशा 'turn' और 'on' के बीच।",
              },
            },
            {
              wrong: "Can you look my dog after this weekend?",
              right: "Can you look after my dog this weekend?",
              note: {
                bn: "look after inseparable — after কে কোনোভাবেই আলাদা করা যায় না; object সবসময় পুরো জুটির পরে।",
                en: "'Look after' is inseparable — the particle never splits from the verb, and the object always follows the whole pair.",
                hi: "'Look after' inseparable है — particle कभी अलग नहीं होता, object पूरी जोड़ी के बाद आता है।",
              },
            },
            {
              wrong: "Our sugar finished yesterday.",
              right: "We ran out of sugar yesterday.",
              note: {
                bn: "'ফুরিয়ে গেছে' বোঝাতে run out of — তিন অংশ একসাথেই থাকে; বাংলার 'শেষ হওয়া' অনুবাদ করে 'finished' বললে অর্থ গুলিয়ে যায়।",
                en: "For 'we have none left', English runs out of something — the three parts stay together; translating 'শেষ হওয়া' as 'finished' confuses the meaning.",
                hi: "'खत्म हो जाना' के लिए run out of — तीनों भाग साथ रहते हैं; 'finished' कहने पर अर्थ उलझ जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🌅 দৈনন্দিন জীবনের ক্লাস্টার",
            en: "🌅 Daily-life clusters",
            hi: "🌅 दैनिक जीवन के समूह",
          },
          lead: {
            bn: "তালিকা মুখস্থ নয় — নিজের দিনের সময়-ভাগ ধরে ক্লাস্টার করে শিখুন।",
            en: "Don't memorise word lists — learn clusters that follow the parts of your own day.",
            hi: "सूची रटें नहीं — अपने दिन के पहरों के हिसाब से समूह बनाकर सीखें।",
          },
          points: [
            {
              bn: "জীবনের সময়-ভাগ ধরে শিখুন: সকাল, কাজ-পড়াশোনা, ঘর-বাজার — তিনটে ক্লাস্টার।",
              en: "Learn by the parts of your day: morning, work and study, home — three clusters.",
              hi: "दिन के पहरों से सीखें: सुबह, काम-पढ़ाई, घर — तीन समूह।",
            },
            {
              bn: "**সকালের ক্লাস্টার** — wake up, get up, get dressed, put on, take off।",
              en: "**Morning cluster** — wake up, get up, get dressed, put on, take off.",
              hi: "**सुबह का समूह** — wake up, get up, get dressed, put on, take off।",
            },
            {
              bn: "**কাজ-পড়াশোনার ক্লাস্টার** — put off, give up, find out, look forward to।",
              en: "**Work-and-study cluster** — put off, give up, find out, look forward to.",
              hi: "**काम-पढ़ाई का समूह** — put off, give up, find out, look forward to।",
            },
            {
              bn: "**ঘর-বাজারের ক্লাস্টার** — turn on/off, clean up, pick up (কুড়ানো; আবার কাউকে গাড়িতে তোলাও!)।",
              en: "**Home cluster** — turn on/off, clean up, pick up (lift from the floor — or collect someone by car!).",
              hi: "**घर का समूह** — turn on/off, clean up, pick up (उठाना; गाड़ी में लेना भी!)।",
            },
            {
              bn: "প্রতিদিন একটা ক্লাস্টার নিজের দিনের বর্ণনায় বসিয়ে দেখুন — প্রসঙ্গে শেখা phrasal verb মুখেই চলে আসে।",
              en: "Drop one cluster each day into a description of your own day; phrasal verbs learned in context come out naturally.",
              hi: "रोज़ एक समूह अपने दिन के वर्णन में लगाएँ — संदर्भ में सीखे phrasal verbs स्वाभाविक रूप से मुँह पर आते हैं।",
            },
          ],
          table: {
            head: [
              { bn: "Verb", en: "Verb", hi: "Verb" },
              { bn: "অর্থ", en: "Meaning", hi: "अर्थ" },
              { bn: "বাস্তব বাক্য", en: "Real sentence", hi: "असली वाक्य" },
            ],
            rows: [
              [
                { bn: "wake up", en: "wake up", hi: "wake up" },
                { bn: "ঘুম ভাঙা", en: "wake from sleep", hi: "नींद खुलना" },
                { bn: "I wake up before six.", en: "I wake up before six.", hi: "I wake up before six." },
              ],
              [
                { bn: "get up", en: "get up", hi: "get up" },
                { bn: "বিছানা থেকে ওঠা", en: "leave the bed", hi: "बिस्तर से उठना" },
                { bn: "I get up at six.", en: "I get up at six.", hi: "I get up at six." },
              ],
              [
                { bn: "get dressed", en: "get dressed", hi: "get dressed" },
                { bn: "পোশাক পরে নেওয়া", en: "get your clothes on", hi: "कपड़े पहन लेना" },
                { bn: "He gets dressed in five minutes.", en: "He gets dressed in five minutes.", hi: "He gets dressed in five minutes." },
              ],
              [
                { bn: "put on", en: "put on", hi: "put on" },
                { bn: "পরা (মুহূর্তের কাজ)", en: "put on (the action of dressing)", hi: "पहनना (उसी क्षण का काम)" },
                { bn: "Put on your raincoat.", en: "Put on your raincoat.", hi: "Put on your raincoat." },
              ],
              [
                { bn: "take off", en: "take off", hi: "take off" },
                { bn: "খুলে ফেলা", en: "remove (clothes)", hi: "उतारना" },
                { bn: "Take off your muddy shoes.", en: "Take off your muddy shoes.", hi: "Take off your muddy shoes." },
              ],
              [
                { bn: "put off", en: "put off", hi: "put off" },
                { bn: "মুলতবি রাখা", en: "postpone", hi: "टाल देना" },
                { bn: "I put off the call until evening.", en: "I put off the call until evening.", hi: "I put off the call until evening." },
              ],
              [
                { bn: "give up", en: "give up", hi: "give up" },
                { bn: "হাল ছাড়া", en: "stop trying", hi: "हार मान लेना" },
                { bn: "Never give up after one failure.", en: "Never give up after one failure.", hi: "Never give up after one failure." },
              ],
              [
                { bn: "find out", en: "find out", hi: "find out" },
                { bn: "জেনে নেওয়া", en: "discover", hi: "पता लगाना" },
                { bn: "She found out the truth.", en: "She found out the truth.", hi: "She found out the truth." },
              ],
              [
                { bn: "look forward to", en: "look forward to", hi: "look forward to" },
                { bn: "আগ্রহে অপেক্ষা করা", en: "wait excitedly for", hi: "उत्साह से प्रतीक्षा करना" },
                { bn: "I'm looking forward to the holidays.", en: "I'm looking forward to the holidays.", hi: "I'm looking forward to the holidays." },
              ],
              [
                { bn: "turn on / turn off", en: "turn on / turn off", hi: "turn on / turn off" },
                { bn: "চালু / বন্ধ করা", en: "start / stop (a device)", hi: "चालू / बंद करना" },
                { bn: "Turn off the fan, please.", en: "Turn off the fan, please.", hi: "Turn off the fan, please." },
              ],
              [
                { bn: "clean up", en: "clean up", hi: "clean up" },
                { bn: "গুছিয়ে পরিষ্কার করা", en: "tidy up", hi: "साफ़-सुथरा कर देना" },
                { bn: "Let's clean up the kitchen.", en: "Let's clean up the kitchen.", hi: "Let's clean up the kitchen." },
              ],
              [
                { bn: "pick up", en: "pick up", hi: "pick up" },
                { bn: "কুড়ানো; গাড়িতে তোলা", en: "lift; collect by car", hi: "उठाना; गाड़ी से लेना" },
                { bn: "Pick up your bag; I'll pick you up at seven.", en: "Pick up your bag; I'll pick you up at seven.", hi: "Pick up your bag; I'll pick you up at seven." },
              ],
            ],
          },
          examples: [
            {
              wrong: "After waking up, I wear my uniform.",
              right: "After getting up, I put on my uniform.",
              note: {
                bn: "'পরার মুহূর্ত' বোঝাতে put on (কাজ হিসেবে); wear বোঝায় 'পরা অবস্থায় আছি' — 'আমি নীল শার্ট পরে আছি' = I am wearing a blue shirt।",
                en: "The moment of dressing is put on (an action); 'wear' describes the state of having it on — 'I am wearing a blue shirt'.",
                hi: "पहनने के क्षण के लिए put on (क्रिया); 'wear' पहने रहने की अवस्था बताता है — 'I am wearing a blue shirt'।",
              },
            },
            {
              wrong: "I am waiting for my exam results with excitement.",
              right: "I am looking forward to my exam results.",
              note: {
                bn: "'উটকো খেয়ে অপেক্ষা' = look forward to; পরে noun বা -ing বসে — 'I'm looking forward to seeing you'।",
                en: "Excited waiting is look forward to, followed by a noun or -ing form — 'I'm looking forward to seeing you'.",
                hi: "उत्साह से प्रतीक्षा = look forward to; इसके बाद noun या -ing आता है — 'I'm looking forward to seeing you'।",
              },
            },
            {
              wrong: "I always delay my homework to tomorrow.",
              right: "I always put off my homework until tomorrow.",
              note: {
                bn: "মুলতবি করার জন্য put off — সঙ্গে until/until tomorrow জোড়া স্বাভাবিক; 'delay to' এমন কাঠামো নেই।",
                en: "Postponing is put off, naturally paired with 'until tomorrow'; the pattern 'delay to' does not exist.",
                hi: "टालने के लिए put off, जो 'until tomorrow' के साथ स्वाभाविक है; 'delay to' जैसा पैटर्न नहीं है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ সাধারণ ফাঁদ: অতিরিক্ত preposition আর অনুবাদ",
            en: "⚠️ Common traps: extra prepositions and translation",
            hi: "⚠️ सामान्य फँदे: अतिरिक्त preposition और अनुवाद",
          },
          lead: {
            bn: "বাংলার preposition ইংরেজিতে টেনে আনলে বাড়তি শব্দ ঢুকে যায় — আবার কখনো একটা হারিয়েও যায়।",
            en: "Dragging Bangla prepositions into English adds extra words — and sometimes one goes missing too.",
            hi: "बांग्ला preposition अंग्रेज़ी में खींचने से फ़ालतू शब्द घुस जाते हैं — और कभी एक छूट भी जाता है।",
          },
          points: [
            {
              bn: "'discuss about' ভুল — discuss একাই চলে, about লাগে না।",
              en: "'Discuss about' is wrong — discuss stands alone, no about.",
              hi: "'discuss about' गलत — discuss अकेला चलता है, about नहीं चाहिए।",
            },
            {
              bn: "'enter into the room' ভুল — শুধু enter the room; enter into শুধু আলংকারিক অর্থে চলে (enter into an agreement)।",
              en: "'Enter into the room' is wrong — just enter the room; enter into survives only in figurative uses (enter into an agreement).",
              hi: "'enter into the room' गलत — केवल enter the room; enter into केवल लाक्षणिक अर्थ में चलता है (enter into an agreement)।",
            },
            {
              bn: "'marry with' ভুল — marry someone, with ছাড়াই।",
              en: "'Marry with' is wrong — marry someone, no with.",
              hi: "'marry with' गलत — marry someone, with के बिना।",
            },
            {
              bn: "উল্টো ফাঁদ: 'listen me' বললে to হারিয়ে যায় — অথচ listen to ছাড়া বাক্য অসম্পূর্ণ।",
              en: "The reverse trap: 'listen me' loses the compulsory to — without listen to the sentence is incomplete.",
              hi: "उल्टा फँदा: 'listen me' में अनिवार्य to छूट जाता है — listen to के बिना वाक्य अधूरा।",
            },
            {
              bn: "look forward to-র to প্রত্যয় নয়, preposition — তাই পরে -ing বসে: 'look forward to seeing you', 'to see' নয়।",
              en: "The to in look forward to is a preposition, not the infinitive marker — so -ing follows: 'look forward to seeing you', not 'to see'.",
              hi: "look forward to का to infinitive-चिह्न नहीं, preposition है — इसलिए -ing आता है: 'look forward to seeing you', 'to see' नहीं।",
            },
            {
              bn: "নিয়ম একটাই: প্রতিটা phrasal verb-এর নিজের কাঠামো আছে; বাংলার সাথে মেলাতে যাবেন না।",
              en: "One rule: every phrasal verb has its own pattern — never map it onto Bangla.",
              hi: "एक ही नियम: हर phrasal verb की अपनी रचना है — इसे बांग्ला से मिलाने की कोशिश न करें।",
            },
          ],
          formula: {
            bn: "প্রতিটা phrasal verb-এর নিজের প্যাটার্ন — বাংলার preposition টেনে আনবেন না",
            en: "Every phrasal verb has its own pattern — never drag the Bangla preposition in",
            hi: "हर phrasal verb का अपना पैटर्न — बांग्ला preposition मत खींचिए",
          },
          examples: [
            {
              wrong: "Please listen me carefully.",
              right: "Please listen to me carefully.",
              note: {
                bn: "বাংলায় 'শোনো আমাকে' — to-এর দরকার বোঝা যায় না; ইংরেজিতে listen-এর পরে to আবশ্যক।",
                en: "Bangla says 'শোনো আমাকে' with no preposition, but English 'listen' always needs 'to' before its object.",
                hi: "बांग्ला में 'सुनो मुझे' — preposition नहीं, पर अंग्रेज़ी में listen के बाद to आवश्यक है।",
              },
            },
            {
              wrong: "He entered into the classroom quietly.",
              right: "He entered the classroom quietly.",
              note: {
                bn: "ঘরে ঢোকা = enter the room; enter into চলে শুধু আলংকারিক অর্থে (enter into an agreement) — শারীরিক প্রবেশে নয়।",
                en: "Walking in is 'enter the room'; 'enter into' survives only in figurative uses (enter into an agreement).",
                hi: "कमरे में प्रवेश = 'enter the room'; 'enter into' केवल लाक्षणिक अर्थ में चलता है (enter into an agreement)।",
              },
            },
            {
              wrong: "I am looking forward to see you soon.",
              right: "I am looking forward to seeing you soon.",
              note: {
                bn: "এখানে to প্রত্যয় ( infinitive-এর to) নয়, preposition — preposition-এর পরে ক্রিয়া হলে -ing রূপ বসে।",
                en: "This 'to' is a preposition, not the infinitive marker — so the verb after it takes the -ing form.",
                hi: "यहाँ 'to' infinitive-चिह्न नहीं, preposition है — इसलिए उसके बाद क्रिया का -ing रूप आता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "প্রতিদিন ৫টা phrasal verb নিজের কাজে বসিয়ে বলুন — 'I'm putting off this call', 'Let me turn off the light' — প্রসঙ্গ ছাড়া শেখা মনে থাকে না।",
          en: "Use five phrasal verbs daily about your own tasks — 'I'm putting off this call', 'Let me turn off the light' — context is what makes them stick.",
          hi: "रोज़ पाँच phrasal verbs अपने कामों में बोलें — 'I'm putting off this call', 'Let me turn off the light' — संदर्भ ही उन्हें याद रखाता है।",
        },
        {
          bn: "নতুন phrasal verb শিখলে pronoun-টেস্ট করুন: 'turn it on' চলে? separable। 'look after it'-ই একমাত্র রূপ? inseparable — নোটের পাশে লিখে রাখুন।",
          en: "Test every new phrasal verb with a pronoun: does 'verb it particle' work? Separable. Is only 'verb particle it' possible? Inseparable — note it down.",
          hi: "हर नए phrasal verb का pronoun-टेस्ट करें: 'verb it particle' चलता है? Separable। केवल 'verb particle it'? Inseparable — नोट कर लें।",
        },
        {
          bn: "নাটক-ভিডিওতে শোনা phrasal verb সঙ্গে সঙ্গে একটা বাস্তব বাক্যে ব্যবহার করুন; সাবটাইটেল পড়লে দুটো বাস্তব উদাহরণ নোট করুন।",
          en: "When you hear a phrasal verb in a show, instantly use it in a real sentence about your life; note two authentic examples from the subtitles.",
          hi: "शो में सुना phrasal verb तुरंत अपने असली वाक्य में इस्तेमाल करें; सबटाइटल से दो असली उदाहरण नोट करें।",
        },
        {
          bn: "নিজের দিনকে তিন ক্লাস্টারে বলুন: সকাল (get up, put on), কাজ (find out, put off), রাত (turn off, pick up) — ক্লাস্টার-প্র্যাকটিসেই মুখে চলে আসে।",
          en: "Describe your day in three clusters: morning (get up, put on), work (find out, put off), night (turn off, pick up) — cluster practice puts them on your tongue.",
          hi: "अपना दिन तीन समूहों में बोलें: सुबह (get up, put on), काम (find out, put off), रात (turn off, pick up) — समूह-अभ्यास से ही मुँह पर आते हैं।",
        },
      ],
    },
  },

  /* ── 3. Present Perfect Continuous ─────────────────────────────────── */
  {
    topic: "Present Perfect Continuous",
    level: "intermediate",
    title: "Present Perfect Continuous (Intermediate)",
    unit: 0,
    sortOrder: 12,
    data: {
      title: {
        bn: "প্রেজেন্ট পারফেক্ট কন্টিনিউয়াস (মধ্যম স্তর)",
        en: "Present Perfect Continuous (Intermediate)",
        hi: "प्रेज़ेंट परफेक्ट कंटिन्यूअस (मध्यम स्तर)",
      },
      intro: {
        bn: "'আমি ২০১৯ সাল থেকে এখানে কাজ করছি' — ইংরেজিতে এর জন্য লাগে have been + -ing: I have been working here since 2019। কিন্তু বাংলার 'করছি' শুনে বেশিরভাগ শিক্ষার্থীই বলেন 'I am working here since 2019' — এটাই মধ্যম স্তরের সবচেয়ে কমন ভুল। এই পাঠে কখন have been -ing, কখন শুধু have + V3, আর for/since-এর পার্থক্য পরিষ্কার হয়ে যাবে।",
        en: "'I have been working here since 2019' — the present perfect continuous shows an action that started in the past and is still running. Bengali's 'করছি' ending tempts learners to say 'I am working here since 2019', which is wrong. This lesson covers the form, for vs since, present perfect simple vs continuous, and the stative-verb exceptions.",
        hi: "'I have been working here since 2019' — present perfect continuous वह क्रिया दिखाता है जो अतीत में शुरू होकर अभी भी चल रही है। 'कर रहा हूँ' सुनकर शिक्षार्थी 'I am working here since 2019' कह देते हैं, जो गलत है। इस पाठ में रूप, for बनाम since, perfect simple बनाम continuous और stative-verb अपवाद सीखेंगे।",
      },
      roadmap: [
        {
          bn: "🏗️ গঠন আর অর্থ — অতীতে শুরু, এখনও চলছে",
          en: "🏗️ form and meaning — started in the past, still going",
          hi: "🏗️ रूप और अर्थ — अतीत में शुरुआत, अभी भी जारी",
        },
        {
          bn: "⏳ for নাকি since — ছকে এক নজরে",
          en: "⏳ for or since — one glance at the table",
          hi: "⏳ for या since — टेबल में एक नज़र",
        },
        {
          bn: "⚖️ perfect simple বনাম continuous — ফোকাসের ফারাক",
          en: "⚖️ perfect simple vs continuous — the difference in focus",
          hi: "⚖️ perfect simple बनाम continuous — फ़ोकस का फ़र्क",
        },
        {
          bn: "🧊 stative verb-দের ব্যতিক্রম — এরা কখনো -ing নয়",
          en: "🧊 the stative-verb exceptions — never take -ing",
          hi: "🧊 stative-verb अपवाद — कभी -ing नहीं",
        },
      ],
      sections: [
        {
          heading: {
            bn: "🏗️ গঠন ও অর্থ: অতীতে শুরু, এখনও চলছে",
            en: "🏗️ Form and meaning: started in the past, still going",
            hi: "🏗️ रूप और अर्थ: अतीत में शुरुआत, अभी भी जारी",
          },
          lead: {
            bn: "'করছি' শুনে সবাই am/is/are -ing বসিয়ে দেয় — সময়কাল থাকলে আসল গঠনটা অন্যটা।",
            en: "Hearing 'করছি', everyone reaches for am/is/are -ing — with a duration, the real structure is different.",
            hi: "'कर रहा हूँ' सुनकर सब am/is/are -ing लगा देते हैं — अवधि होने पर असली रचना दूसरी है।",
          },
          points: [
            {
              bn: "**have/has been + verb-ing** — কাজটা অতীতের কোনো বিন্দুতে শুরু হয়ে এখনও চলছে।",
              en: "**have/has been + verb-ing** — the action began at some point in the past and is still running.",
              hi: "**have/has been + verb-ing** — कार्य अतीत के किसी बिंदु पर शुरू होकर अभी भी चल रहा है।",
            },
            {
              bn: "অথবা কাজটা সম্প্রতি থেমে গেছে, কিন্তু তার প্রভাব এখনও দেখা যাচ্ছে।",
              en: "Or it has just stopped — but its effect is still visible.",
              hi: "या अभी-अभी रुका है — पर उसका असर अब भी दिख रहा है।",
            },
            {
              bn: "'I am teaching at this school' বোঝায় এখন ক্লাস নিচ্ছি — শুধু এই মুহূর্ত।",
              en: "'I am teaching at this school' means I am taking a class right now.",
              hi: "'I am teaching at this school' का मतलब — इस समय क्लास ले रहा हूँ।",
            },
            {
              bn: "'I have been teaching at this school since 2020' বোঝায় ২০২০ থেকে এই স্কুলেই শিক্ষকতা করছি — সময়কাল যুক্ত হলেই গঠন বদলায়।",
              en: "'I have been teaching at this school since 2020' stretches back to 2020 — add a duration and the structure changes.",
              hi: "'I have been teaching at this school since 2020' का मतलब 2020 से यहीं पढ़ा रहा हूँ — अवधि जुड़ते ही रचना बदल जाती है।",
            },
            {
              bn: "বাংলার 'করছি' শুনে plain continuous বসানো — মধ্যম স্তরের সবচেয়ে কমন ভুল।",
              en: "Hearing Bangla 'করছি' and reaching for the plain continuous is the most common intermediate mistake.",
              hi: "बांग्ला 'कर रहा हूँ' सुनकर साधारण continuous लगाना — मध्यम स्तर की सबसे आम गलती।",
            },
            {
              bn: "সংকেত শব্দ: since, for, how long, all day, lately — এদের দেখলেই perfect continuous ভাবুন।",
              en: "Signal words: since, for, how long, all day, lately — when you see them, think perfect continuous.",
              hi: "संकेत-शब्द: since, for, how long, all day, lately — देखते ही perfect continuous सोचें।",
            },
          ],
          formula: {
            bn: "কর্তা + have/has been + ক্রিয়া+ing",
            en: "Subject + have/has been + verb-ing",
            hi: "कर्ता + have/has been + क्रिया+ing",
          },
          examples: [
            {
              wrong: "I am working here since 2019.",
              right: "I have been working here since 2019.",
              note: {
                bn: "বাংলার 'করছি' শুনে plain continuous বসে যায়, কিন্তু since/for-সহ সময়কাল থাকলে have been + -ing বাধ্যতামূলক।",
                en: "The Bangla 'করছি' ending tempts a plain continuous, but a duration with since/for demands have been + -ing.",
                hi: "'कर रहा हूँ' सुनकर साधारण continuous बैठ जाता है, पर since/for के साथ have been + -ing अनिवार्य है।",
              },
            },
            {
              wrong: "She is learning English for two years.",
              right: "She has been learning English for two years.",
              note: {
                bn: "'দুই বছর ধরে' = সময়কাল; বর্তমান continuous শুধু এই মুহূর্তের কাজ বোঝায়, ধারাবাহিকতা নয়।",
                en: "'For two years' is a duration; the plain continuous covers only this moment, not the stretch of time.",
                hi: "'दो साल से' अवधि है; साधारण continuous केवल इस क्षण का काम बताता है, समय-विस्तार नहीं।",
              },
            },
            {
              wrong: "How long do you wait for the bus?",
              right: "How long have you been waiting for the bus?",
              note: {
                bn: "'কতক্ষণ ধরে' জিজ্ঞেস করলে How long + have/has been -ing — শুরুর সময় থেকে এই মুহূর্ত পর্যন্ত পুরো অপেক্ষাটাই প্রশ্নের ভেতরে।",
                en: "'How long...' asks about the stretch from the start until now — that needs have/has been + -ing.",
                hi: "'कितनी देर से' पूछने के लिए How long + have/has been + -ing — शुरुआत से अब तक की पूरी प्रतीक्षा प्रश्न में है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⏳ for নাকি since",
            en: "⏳ for or since?",
            hi: "⏳ for या since?",
          },
          lead: {
            bn: "বাংলায় দুটোর অনুবাদই 'থেকে/ধরে' — তাই গোলমাল; ছকটা ঝালিয়ে নিন।",
            en: "Both translate as 'থেকে/ধরে' in Bangla — that is the mix-up; keep the table handy.",
            hi: "दोनों का अनुवाद 'से' होता है — यही उलझन है; टेबल पास रखें।",
          },
          points: [
            {
              bn: "**for** + সময়ের দৈর্ঘ্য: for two hours, for ten years, for a long time।",
              en: "**for** + a length of time: for two hours, for ten years, for a long time.",
              hi: "**for** + समय की लंबाई: for two hours, for ten years, for a long time।",
            },
            {
              bn: "**since** + শুরুর বিন্দু: since 2019, since Monday, since I was a child।",
              en: "**since** + the starting point: since 2019, since Monday, since I was a child.",
              hi: "**since** + शुरुआत का बिंदु: since 2019, since Monday, since I was a child।",
            },
            {
              bn: "সূত্র: ঘড়ির কাঁটা মেপে বললে for, শুরুর তারিখ/মুহূর্ত বললে since।",
              en: "Shortcut: measuring the clock → for; naming the start → since.",
              hi: "शॉर्टकट: समय मापकर बताना → for; शुरुआत बताना → since।",
            },
            {
              bn: "since-এর পরে কখনো সময়ের পরিমাণ আসে না — 'since three years' ভুল, 'for three years' ঠিক।",
              en: "'Since' is never followed by an amount of time — 'since three years' is wrong, 'for three years' is right.",
              hi: "'since' के बाद समय की मात्रा कभी नहीं आती — 'since three years' गलत, 'for three years' सही।",
            },
            {
              bn: "since-বাক্যে অন্তত একটা perfect রূপ দরকার — শুধু 'I know him' বললে সময়টা ঝুলে থাকে।",
              en: "A since-sentence needs at least a perfect form — a bare 'I know him' leaves the time dangling.",
              hi: "'since' वाले वाक्य में कम से कम एक perfect रूप चाहिए — केवल 'I know him' पर समय अधूरा लटकता है।",
            },
          ],
          formula: {
            bn: "সময়ের মাপ → for • শুরুর বিন্দু → since",
            en: "a measured span → for • the starting point → since",
            hi: "समय की माप → for • शुरुआती बिंदु → since",
          },
          table: {
            head: [
              { bn: "শব্দ", en: "Word", hi: "शब्द" },
              { bn: "কী বসে", en: "What follows", hi: "क्या आता है" },
              { bn: "উদাহরণ", en: "Examples", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "for", en: "for", hi: "for" },
                { bn: "সময়ের দৈর্ঘ্য (কত দিন / কতক্ষণ)", en: "a length of time (how long)", hi: "समय की लंबाई (कितनी देर)" },
                { bn: "for two hours, for ten years", en: "for two hours, for ten years", hi: "for two hours, for ten years" },
              ],
              [
                { bn: "since", en: "since", hi: "since" },
                { bn: "শুরুর বিন্দু (কখন থেকে)", en: "the starting point (since when)", hi: "शुरुआत का बिंदु (कब से)" },
                { bn: "since 2019, since Monday, since I was a child", en: "since 2019, since Monday, since I was a child", hi: "since 2019, since Monday, since I was a child" },
              ],
              [
                { bn: "how long", en: "how long", hi: "how long" },
                { bn: "প্রশ্ন — কতক্ষণ ধরে", en: "the question — for how long", hi: "प्रश्न — कितनी देर से" },
                { bn: "How long have you been waiting?", en: "How long have you been waiting?", hi: "How long have you been waiting?" },
              ],
            ],
          },
          examples: [
            {
              wrong: "I have been living here since three years.",
              right: "I have been living here for three years.",
              note: {
                bn: "পরিমাণ (three years) মানে দৈর্ঘ্য — for; since-এর পরে বসে শুরুর বিন্দু, মাপ নয়।",
                en: "An amount of time is a length — use 'for'; 'since' introduces the starting point, not a measurement.",
                hi: "समय की मात्रा अवधि है — 'for'; 'since' शुरुआती बिंदु बताता है, माप नहीं।",
              },
            },
            {
              wrong: "He has been working here for 2020.",
              right: "He has been working here since 2020.",
              note: {
                bn: "নির্দিষ্ট শুরুর বছর (2020) = বিন্দু → since; for-এর পরে বিন্দু নয়, ব্যবধান বসে।",
                en: "A specific starting year is a point in time → 'since'; 'for' takes a span, not a point.",
                hi: "निश्चित शुरुआती वर्ष = बिंदु → 'since'; 'for' के बाद अवधि आती है, बिंदु नहीं।",
              },
            },
            {
              wrong: "I know him since our school days.",
              right: "I have known him since our school days.",
              note: {
                bn: "since-এর সাথে অন্তত একটা perfect রূপ দরকার; know stative তাই perfect simple — শুধু 'I know' বললে বাক্যে সময়টা ঝুলে থাকে।",
                en: "A 'since' phrase needs a perfect form; 'know' is stative, so the perfect simple fills it — a bare 'I know' leaves the time dangling.",
                hi: "'since' के साथ perfect रूप चाहिए; know stative है, इसलिए perfect simple — केवल 'I know' पर समय अधूरा लटकता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚖️ Present perfect simple বনাম continuous",
            en: "⚖️ Present perfect simple vs continuous",
            hi: "⚖️ Present perfect simple बनाम continuous",
          },
          lead: {
            bn: "কাজ চলছে না কাজ শেষ — বাক্যের ফোকাসই কোন রূপ বসবে ঠিক করে।",
            en: "Is the work still running or finished — the sentence's focus picks the form.",
            hi: "काम चल रहा है या खत्म — वाक्य का फ़ोकस ही रूप चुनता है।",
          },
          points: [
            {
              bn: "continuous বলে 'কাজটা চলছিল/চলছে' — প্রক্রিয়া আর সময়কাল গুরুত্বপূর্ণ।",
              en: "The continuous says 'the work was/keeps running' — the process and its duration matter.",
              hi: "continuous कहता है 'काम चल रहा था/चल रहा है' — प्रक्रिया और अवधि मायने रखते हैं।",
            },
            {
              bn: "I have been painting the door — সারাদিন রং করার কর্মকাণ্ডটাই মুখ্য।",
              en: "I have been painting the door — the whole afternoon of painting work is the point.",
              hi: "I have been painting the door — दिनभर रंगाई की मेहनत ही मुख्य बात।",
            },
            {
              bn: "simple বলে 'কাজ শেষ, ফল তৈরি' — I have painted the door, এখন নতুন রঙের দরজা দেখা যাচ্ছে।",
              en: "The simple says 'done, result ready' — I have painted the door; now look at the fresh coat.",
              hi: "simple कहता है 'काम खत्म, नतीजा तैयार' — I have painted the door; अब ताज़ा रंग का दरवाज़ा दिख रहा है।",
            },
            {
              bn: "সংখ্যা বা পরিমাণ বললে সাধারণত simple: I have written three emails।",
              en: "With numbers or quantities, prefer the simple: I have written three emails.",
              hi: "संख्या या मात्रा बताते समय आमतौर पर simple: I have written three emails।",
            },
            {
              bn: "সম্প্রতি শেষ হওয়া কাজের চিহ্ন দেখিয়ে অনুমানেও continuous চলে: লাল চোখ? — Have you been crying?",
              en: "The continuous also explains present evidence of a recent activity: red eyes? — Have you been crying?",
              hi: "हालिया काम के सबूत से अनुमान में भी continuous चलता है: लाल आँखें? — Have you been crying?",
            },
          ],
          table: {
            head: [
              { bn: "দিক", en: "Aspect", hi: "पहलू" },
              { bn: "Perfect continuous", en: "Perfect continuous", hi: "Perfect continuous" },
              { bn: "Perfect simple", en: "Perfect simple", hi: "Perfect simple" },
            ],
            rows: [
              [
                { bn: "ফোকাস", en: "Focus", hi: "फ़ोकस" },
                { bn: "প্রক্রিয়া ও সময়কাল", en: "the activity and its duration", hi: "गतिविधि और उसकी अवधि" },
                { bn: "ফল, পরিমাণ বা সংখ্যা", en: "the result, amount or number", hi: "परिणाम, मात्रा या संख्या" },
              ],
              [
                { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
                { bn: "I have been painting the door।", en: "I have been painting the door.", hi: "I have been painting the door।" },
                { bn: "I have painted the door।", en: "I have painted the door.", hi: "I have painted the door।" },
              ],
              [
                { bn: "আরও", en: "Also", hi: "और भी" },
                { bn: "Have you been crying?", en: "Have you been crying?", hi: "Have you been crying?" },
                { bn: "I have written three emails।", en: "I have written three emails.", hi: "I have written three emails।" },
              ],
            ],
          },
          examples: [
            {
              wrong: "I have been writing three emails this morning.",
              right: "I have written three emails this morning.",
              note: {
                bn: "সংখ্যা (three) সম্পন্ন কাজের ফল মাপে — perfect simple; continuous-এর ভেতরে গণনা বসে না।",
                en: "A count (three) measures completed results — perfect simple; the continuous does not carry numbers.",
                hi: "संख्या (three) पूर्ण परिणाम मापती है — perfect simple; continuous में गिनती नहीं आती।",
              },
            },
            {
              wrong: "Why are your eyes red? Did you cry?",
              right: "Why are your eyes red? Have you been crying?",
              note: {
                bn: "চোখের লাল ভাব = সম্প্রতি কান্নার চলমান প্রমাণ — এমন অনুমানে perfect continuous-ই স্বাভাবিক; প্রশ্নটা কি আজ কাঁদলেন, এমন নির্দিষ্ট নয়।",
                en: "Red eyes are fresh evidence of ongoing crying — the natural guess is the perfect continuous, not a finished 'did you cry'.",
                hi: "लाल आँखें हालिया रोने का ताज़ा सबूत हैं — ऐसे अनुमान के लिए perfect continuous ही स्वाभाविक है।",
              },
            },
            {
              wrong: "They are playing football for an hour.",
              right: "They have been playing football for an hour.",
              note: {
                bn: "'এক ঘণ্টা ধরে খেলছে' = শুরু থেকে এখন পর্যন্ত ধারাবাহিক কাজ — বর্তমান continuous নয়, perfect continuous।",
                en: "'For an hour' stretches from the past into now — that stretch belongs to the perfect continuous, not the plain continuous.",
                hi: "'एक घंटे से खेल रहे हैं' = अतीत से अब तक की निरंतरता — साधारण continuous नहीं, perfect continuous।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧊 Stative verb-এর ব্যতিক্রম",
            en: "🧊 The stative-verb exceptions",
            hi: "🧊 Stative-verb अपवाद",
          },
          lead: {
            bn: "মনের অবস্থা আর মালিকানার ক্রিয়াগুলো কখনো -ing রূপ নেয় না — সময়কাল থাকলেও।",
            en: "Verbs of mind and ownership never take -ing — not even with a duration.",
            hi: "मन की अवस्था और स्वामित्व की क्रियाएँ कभी -ing नहीं लेतीं — अवधि होने पर भी नहीं।",
          },
          points: [
            {
              bn: "know, like, love, want, need, believe, understand, own, have (মালিকানা) — এরা মনের অবস্থা বা মালিকানা বোঝায়, চলমান কর্ম নয়।",
              en: "know, like, love, want, need, believe, understand, own, have (possession) — they describe states of mind or ownership, not actions.",
              hi: "know, like, love, want, need, believe, understand, own, have (स्वामित्व) — ये मन की अवस्था या स्वामित्व बताते हैं, चलती क्रिया नहीं।",
            },
            {
              bn: "তাই এদের -ing রূপ হয় না — সময়কাল থাকলেও perfect simple বসে: I have known her for ten years।",
              en: "So they never take -ing — even with a duration, the perfect simple sits in: I have known her for ten years.",
              hi: "इसलिए इनका -ing रूप नहीं होता — अवधि होने पर भी perfect simple बैठता है: I have known her for ten years।",
            },
            {
              bn: "একই সূত্র বর্তমান continuous-এও খাটে — 'I am knowing him' আর 'I have been knowing him' সমান ভুল।",
              en: "The same rule holds in the plain continuous — 'I am knowing him' is exactly as wrong as 'I have been knowing him'.",
              hi: "वही नियम साधारण continuous में भी चलता है — 'I am knowing him' और 'I have been knowing him' बराबर गलत।",
            },
            {
              bn: "মালিকানার have-ও stative — 'কতদিন ধরে আছে' বোঝাতে perfect simple: have had।",
              en: "Possessive have is stative too — asking how long you have owned it takes the perfect simple: have had.",
              hi: "स्वामित्व वाला have भी stative — कितने दिनों से है, इसके लिए perfect simple: have had।",
            },
            {
              bn: "মনে রাখুন: অবস্থা বোঝায় এমন ক্রিয়া + সময়কাল = perfect simple।",
              en: "Remember: stative verb + duration = perfect simple.",
              hi: "याद रखें: stative क्रिया + अवधि = perfect simple।",
            },
          ],
          formula: {
            bn: "Stative verb + for/since → have/has + V3 (কখনো been -ing নয়)",
            en: "Stative verb + for/since → have/has + V3 (never been -ing)",
            hi: "Stative verb + for/since → have/has + V3 (कभी been -ing नहीं)",
          },
          examples: [
            {
              wrong: "I have been knowing him for five years.",
              right: "I have known him for five years.",
              note: {
                bn: "know stative — continuous রূপ নেই; পাঁচ বছরের সম্পর্ক এক অবস্থা, চলমান কর্ম নয়।",
                en: "'Know' is stative and has no continuous form; a five-year acquaintance is a state, not an activity.",
                hi: "know stative है — continuous रूप नहीं लेता; पाँच साल की जान-पहचान अवस्था है, गतिविधि नहीं।",
              },
            },
            {
              wrong: "How long have you been having this car?",
              right: "How long have you had this car?",
              note: {
                bn: "মালিকানার have stative — 'কতদিন ধরে আছে' বোঝাতে perfect simple: have had।",
                en: "Possessive 'have' is stative — asking about ownership over time uses the perfect simple 'have had'.",
                hi: "स्वामित्व दर्शाने वाला 'have' stative है — समय के साथ perfect simple 'have had' आता है।",
              },
            },
            {
              wrong: "I am wanting to talk to you since yesterday.",
              right: "I have wanted to talk to you since yesterday.",
              note: {
                bn: "want stative + since → perfect simple: have wanted; 'am wanting' এবং 'since'-এর জুটি দুটোই এখানে ভুল।",
                en: "'Want' is stative and 'since' needs a perfect form — together they demand 'have wanted', not 'am wanting'.",
                hi: "'want' stative है और 'since' के साथ perfect चाहिए — दोनों मिलकर 'have wanted' माँगते हैं, 'am wanting' नहीं।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "since বা for শোনামাত্র সিদ্ধান্ত নিন: চলমান কাজ হলে have been -ing, অবস্থা হলে have + V3 — দুই সেকেন্ডের মানসিক চেক।",
          en: "The moment you hear since or for, decide: ongoing action → have been -ing; state → have + V3. A two-second mental check.",
          hi: "since या for सुनते ही तय करें: चलती क्रिया → have been -ing; अवस्था → have + V3। दो सेकंड की मानसिक जाँच।",
        },
        {
          bn: "প্রতিদিন নিজের জীবনের একটা 'How long have I been...?' প্রশ্ন করে উত্তর দিন — চাকরি, বাসা, পড়াশোনা, এই ফোন।",
          en: "Daily, ask yourself one 'How long have I been...?' question and answer it aloud — job, home, studies, even this phone.",
          hi: "रोज़ खुद से एक 'How long have I been...?' सवाल पूछें और ज़ोर से उत्तर दें — नौकरी, घर, पढ़ाई, यह फोन।",
        },
        {
          bn: "বাংলা 'করছি' সব সময় -ing নয় — '২০১৯ থেকে করছি' জাতীয় বাক্যে মনে করুন: have been + -ing, কখনো 'am + -ing' নয়।",
          en: "Bangla 'করছি' is not always English -ing: whenever a starting point or duration joins the sentence, reach for have been + -ing, never 'am + -ing'.",
          hi: "बांग्ला 'कर रहा हूँ' हमेशा -ing नहीं: जब भी शुरुआत या अवधि जुड़े, have been + -ing लें, कभी 'am + -ing' नहीं।",
        },
        {
          bn: "প্রমাণ দেখিয়ে অনুমান-খেলা খেলুন: 'His bag is muddy — he has been playing football', 'Your eyes are red — you have been crying' — প্রতিদিন দুটো বানান।",
          en: "Play the evidence game daily: 'His bag is muddy — he has been playing football', 'Your eyes are red — you have been crying' — build two a day.",
          hi: "सबूत-खेल रोज़ खेलें: 'His bag is muddy — he has been playing football' जैसे दो वाक्य बनाएँ।",
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_V2B1;
