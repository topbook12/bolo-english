// ─── Grammar seeds v4: ADVANCED batch A2b (2 lessons) ───
// Task 10-C14 — point-form roadmap upgrade. Source: grammar-v3-a2b.ts →
// "Subjunctive & Unreal Uses" (sortOrder 7) + "Hedging & Softening Language" (sortOrder 8).
// Special notes honoured: subjunctive trigger table (verb/adjective/noun) + a formula box
// per unreal-use family (mandative / unreal were / formulaic); hedging strength-ladder
// table (মজবুত দাবি → নরম দাবি: will → could) for cautious claims.
// title/intro/tips/quiz/examples copied UNCHANGED from the v3 source; body paragraphs
// became roadmap + scannable points + formula boxes + small tables. No body fields.
import type { SeedGrammarV4Entry } from "./grammar-v4-types";

export const SEED_GRAMMAR_V4_A2B: SeedGrammarV4Entry[] = [
  /* ── 1. Subjunctive & Unreal Uses (Unit 0 — extra deep practice) ──────── */
  {
    topic: "Subjunctive & Unreal Uses",
    level: "advanced",
    title: "Subjunctive & Unreal Uses",
    unit: 0,
    sortOrder: 7,
    data: {
      title: {
        bn: "Subjunctive ও Unreal Uses: ইংরেজির 'অবাস্তব কাল'",
        en: "Subjunctive & Unreal Uses: English's 'unreal' mood",
        hi: "Subjunctive और Unreal Uses: अंग्रेज़ी का 'अवास्तविक काल'",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এই পাঠ (Unit 0 — বাড়তি গভীর-অনুশীলন)। শুরু করার আগে intermediate স্তরের Conditionals (বিশেষত Second Conditional), wish-clause এবং Reported Speech পাঠগুলো শেষ করে নিন — subjunctive ঠিক সেই 'কাল্পনিক' ধারারই আরও পরিণত রূপ। ইংরেজিতে verb-এর একটা প্রাচীন রূপ এখনও বেঁচে আছে: subjunctive — যেটা বাস্তব ঘটনা নয়, চাওয়া-দাবি-কল্পনা বোঝায়। বাংলায় এই পার্থক্য verb-এর রূপে পড়ে না, তাই বাঙালি শিক্ষার্থীর চোখে এটা অদৃশ্য থেকে যায়। এই পাঠে তিনটা পরিবার শিখব: (১) mandative subjunctive — suggest/insist/demand/recommend-এর পরে that-clause-এ base verb (I suggest he go; They insisted that she be present); (২) unreal were — If I were you, as if she were; (৩) যুগযুগ ধরে জমে-থাকা formulaic বাক্যাংশ — God forbid, come what may, be that as it may। বাংলার সরাসরি কমান্ড-ধাঁচ ('আমি তাকে যেতে বললাম') ইংরেজিতে I suggest him to go বানিয়ে ফেলে — সেই ক্লাসিক ভুলও এখানেই ঠিক হবে।",
        en: "This is an advanced-level lesson on the Learning Path (Unit 0 — extra deep practice). Before starting, finish the intermediate lessons on Conditionals (especially the Second Conditional), wish-clauses and Reported Speech — the subjunctive is a more mature member of that 'unreal' family. English keeps a very old verb form alive: the subjunctive, which signals that something is not a fact but a wish, a demand or an imagination. Bengali does not mark this on the verb, so it stays invisible to Bengali-speaking learners. In this lesson we cover three families: (1) the mandative subjunctive — the base verb in the that-clause after suggest/insist/demand/recommend (I suggest he go; They insisted that she be present); (2) unreal were — If I were you, as if she were; (3) formulaic phrases frozen for centuries — God forbid, come what may, be that as it may. The direct Bengali command pattern (as in 'আমি তাকে যেতে বললাম') pushes learners into 'I suggest him to go' — that classic error gets fixed here too.",
        hi: "Learning Path का यह एडवांस्ड पाठ है (Unit 0 — अतिरिक्त गहन अभ्यास)। शुरू करने से पहले intermediate स्तर के Conditionals (ख़ासकर Second Conditional), wish-clause और Reported Speech पाठ पूरे कर लें — subjunctive उसी 'अवास्तविक' धारा का और परिपक्व रूप है। अंग्रेज़ी में verb का एक प्राचीन रूप अब भी ज़िंदा है: subjunctive — जो वास्तविक घटना नहीं, चाह-माँग-कल्पना दर्शाता है। हिंदी/बांग्ला में यह अंतर verb के रूप पर नहीं झलकता, इसलिए शिक्षार्थियों की नज़र से ओटा रह जाता है। इस पाठ में तीन परिवार सीखेंगे: (1) mandative subjunctive — suggest/insist/demand/recommend के बाद that-clause में base verb (I suggest he go; They insisted that she be present); (2) unreal were — If I were you, as if she were; (3) सदियों से जमे-बसे formulaic वाक्यांश — God forbid, come what may, be that as it may। हिंदी-बांग्ला के सीधे आदेश-ढाँचे ('मैंने उसे जाने को कहा') अंग्रेज़ी में I suggest him to go बना देते हैं — वह क्लासिक गलती भी यहीं ठीक होगी।",
      },
      roadmap: [
        { bn: "🎯 Mood কী — indicative বাস্তব ঘটনা, subjunctive চাওয়া-দাবি-কল্পনা", en: "🎯 What mood is — indicative for facts, subjunctive for wishes and demands", hi: "🎯 Mood क्या है — indicative वास्तविक घटना, subjunctive चाह-माँग-कल्पना" },
        { bn: "🏗️ সাতটা প্যাটার্ন এক টেবিলে — mandative থেকে জমে-থাকা বাক্যাংশ", en: "🏗️ Seven patterns in one table — mandative down to frozen phrases", hi: "🏗️ सात पैटर्न एक टेबिल में — mandative से जमे-बसे वाक्यांश तक" },
        { bn: "🚦 ট্রিগার-শব্দ চেনা — verb, adjective, noun তিন শ্রেণি", en: "🚦 Spotting trigger words — the verb, adjective and noun classes", hi: "🚦 ट्रिगर-शब्द पहचानना — verb, adjective, noun तीन श्रेणियाँ" },
        { bn: "⭐ Mandative subjunctive — suggest/insist/demand-এর পরে base verb", en: "⭐ The mandative subjunctive — base verb after suggest/insist/demand", hi: "⭐ Mandative subjunctive — suggest/insist/demand के बाद base verb" },
        { bn: "🪞 Unreal were — কল্পনার বাক্যে সব পুরুষে were", en: "🪞 Unreal were — every person takes were in imagination", hi: "🪞 Unreal were — कल्पना में हर person पर were" },
        { bn: "🏛️ জমে-থাকা বাক্যাংশ — God forbid, come what may, truth be told", en: "🏛️ Frozen phrases — God forbid, come what may, truth be told", hi: "🏛️ जमे-बसे वाक्यांश — God forbid, come what may, truth be told" },
        { bn: "⚠️ Advanced শিক্ষার্থীদের ৫ দলের সূক্ষ্ম ভুল — দুই প্রশ্নে সব ধরা", en: "⚠️ Five families of subtle advanced errors — two questions catch all", hi: "⚠️ एडवांस्ड शिक्षार्थियों की 5 समूह की सूक्ष्म गलतियाँ — दो प्रश्नों में सब" },
        { bn: "📖 অডিট-প্যাসেজে সব প্যাটার্ন একসঙ্গে কাজ করছে", en: "📖 An audit passage where every pattern works together", hi: "📖 ऑडिट-पैसेज में सारे पैटर्न एक साथ काम कर रहे हैं" },
        { bn: "🧠 পুরো পাঠ ছয় লাইনে + তিন বাক্যের বাড়ির অনুশীলন", en: "🧠 The whole lesson in six lines + a three-sentence home drill", hi: "🧠 पूरा पाठ छह पंक्तियों में + तीन वाक्य का घरेलू अभ्यास" },
      ],
      sections: [
        {
          heading: {
            bn: "🎯 কখন ব্যবহার হয় — 'বাস্তব নয়' বোঝানোর কাল",
            en: "🎯 When to use it — marking what is NOT real",
            hi: "🎯 कब उपयोग होता है — 'वास्तविक नहीं' दर्शाने का काल",
          },
          lead: {
            bn: "Verb-এর mood বলে দেয় বক্তা ঘটনাটাকে কীভাবে দেখছেন — fact নাকি কল্পনা-চাহিদা।",
            en: "Mood tells you how the speaker frames the event — a fact, or a wish or demand.",
            hi: "Verb का mood बताता है बोलने वाला घटना को कैसे देख रहा है — तथ्य या कल्पना-चाह।",
          },
          points: [
            { bn: "**Mood** — বক্তা ঘটনাটাকে কীভাবে দেখছেন: fact নাকি কল্পনা/চাহিদা।", en: "**Mood** — how the speaker frames the event: a fact, or a wish/demand/imagination.", hi: "**Mood** — बोलने वाला घटना को कैसे देख रहा है: तथ्य या कल्पना/चाह।" },
            { bn: "**Indicative mood** বাস্তব ঘটনা বোঝায়: He goes to the office every day।", en: "**The indicative mood** presents a fact: He goes to the office every day.", hi: "**Indicative mood** वास्तविक घटना दिखाता है: He goes to the office every day।" },
            { bn: "**Subjunctive mood** বোঝায় ঘটনাটা এখনও বাস্তব নয় — চাওয়া হচ্ছে, দাবি করা হচ্ছে, বা মনে মনে চিত্র আঁকা হচ্ছে।", en: "**The subjunctive mood** signals that the event is not yet real — it is being wanted, demanded or imagined.", hi: "**Subjunctive mood** दर्शाता है कि घटना अभी वास्तविक नहीं — उसे चाहा, माँगा या मन में चित्रित किया जा रहा है।" },
            { bn: "বাংলায় এই পার্থক্য আলাদা verb-রূপে পড়ে না — 'যদি আমি তুমি হতাম' জাতীয় বাক্যে বাংলা বিশেষ কিছু করে না।", en: "Bengali does not mark this with a separate verb form — sentences like 'যদি আমি তুমি হতাম' stay unchanged.", hi: "हिंदी-बांग्ला में यह अंतर अलग verb-रूप पर नहीं उभरता — 'काश मैं तुम होता' जैसे वाक्यों में कुछ ख़ास नहीं होता।" },
            { bn: "**পরিবার ১ — mandative subjunctive**: suggest/insist/demand/recommend-এর পরে that-clause-এ base verb: I suggest he go।", en: "**Family one — the mandative subjunctive**: base verb in the that-clause after suggest/insist/demand/recommend: I suggest he go.", hi: "**परिवार १ — mandative subjunctive**: suggest/insist/demand/recommend के बाद that-clause में base verb: I suggest he go।" },
            { bn: "**পরিবার ২ — unreal were**: বাস্তবের বিপরীত কল্পনায় সব পুরুষে were: If I were you; as if she were।", en: "**Family two — unreal were**: every person takes were in a counter-factual: If I were you; as if she were.", hi: "**परिवार २ — unreal were**: वास्तव के विपरीत कल्पना में हर person पर were: If I were you; as if she were।" },
            { bn: "**পরিবার ৩ — formulaic**: যুগযুগ ধরে জমে-থাকা পুরোনো subjunctive: God forbid, come what may, be that as it may।", en: "**Family three — formulaic**: subjunctive relics frozen for centuries: God forbid, come what may, be that as it may.", hi: "**परिवार ३ — formulaic**: सदियों से जमे-बसे पुराने subjunctive: God forbid, come what may, be that as it may।" },
            { bn: "এই তিন পরিবারই পাঠের ম্যাপ — প্রতিটার জন্য নিচে নিজের আলাদা ধাপ আছে।", en: "These three families are the map of this lesson — each gets its own step below.", hi: "यही तीन परिवार इस पाठ का नक़्शा हैं — हर एक का अपना क़दम नीचे है।" },
          ],
          examples: [
            {
              wrong: "The board suggested that the policy will change from January.",
              right: "The board suggested that the policy change from January.",
              note: {
                bn: "নীতিবদল এখনও 'প্রস্তাবের স্তরে', বাস্তবে ঘটেনি — তাই that-clause-এ will নয়, base verb change।",
                en: "The change is still at the 'proposed' stage, not a fact — so the that-clause takes the base verb change, not will.",
                hi: "परिवर्तन अभी 'प्रस्ताव' के स्तर पर है, वास्तविक नहीं — इसलिए that-clause में will नहीं, base verb change।",
              },
            },
            {
              wrong: "If I was the manager, I would change the whole rota.",
              right: "If I were the manager, I would change the whole rota.",
              note: {
                bn: "বাস্তবের বিপরীত কল্পনা — বক্তা ম্যানেজার নন, তাই প্রথম পুরুষেও were; 'হতাম'-এর সমান ইংরেজি রূপ unreal were।",
                en: "A counter-factual dream — the speaker is not the manager, so even the first person takes unreal were.",
                hi: "वास्तव के विपरीत कल्पना — बोलने वाला मैनेजर नहीं है, इसलिए first person पर भी unreal were।",
              },
            },
            {
              wrong: "God forbids that we lose the final!",
              right: "God forbid that we lose the final!",
              note: {
                bn: "জমে-থাকা formulaic বাক্যাংশ — God forbid-এর রূপ কখনও বদলায় না; -s জুড়লে জাদুঘরের মূর্তি ভাঙা হয়।",
                en: "A frozen formulaic phrase — God forbid never changes its form; adding -s breaks the fossil.",
                hi: "जमा-बसा formulaic वाक्यांश — God forbid का रूप कभी नहीं बदलता; -s जोड़ना जीते-जागते अपवाद तोड़ना है।",
              },
            },
            {
              wrong: "He behaves like he is the owner of the company.",
              right: "He behaves as if he were the owner of the company.",
              note: {
                bn: "স্পষ্ট কল্পনা — সে মালিক নয়; like + বাক্য আর is-এর জায়গায় as if + were — দুই সূক্ষ্ম উন্নতি একসঙ্গে।",
                en: "Clearly imaginary — he is not the owner; upgrade both like + clause to as if + were in one move.",
                hi: "साफ़ कल्पना — वह मालिक नहीं है; like + वाक्य को as if + were में बदलें — दो सुधार एक साथ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — সাতটা প্যাটার্ন এক নজরে",
            en: "🏗️ Formation — seven patterns at a glance",
            hi: "🏗️ गठन — सात पैटर्न एक नज़र में",
          },
          lead: {
            bn: "এক টেবিলে সাতটা প্যাটার্ন — প্রতি সারিতে আগে প্যাটার্ন, তারপর উদাহরণ।",
            en: "Seven patterns in one table — each row gives the pattern first, then an example.",
            hi: "एक टेबिल में सात पैटर्न — हर पंक्ति में पहले पैटर्न, फिर उदाहरण।",
          },
          points: [
            { bn: "প্রতিটা সারিতে আগে প্যাটার্ন, তারপর উদাহরণ — টেবিলটাই পাঠের প্রসার-ম্যাপ।", en: "Each row gives the pattern first, then an example — the table is the lesson's expansion map.", hi: "हर पंक्ति में पहले पैटर्न, फिर उदाहरण — यही तालिका पाठ का विस्तार-नक़्शा है।" },
            { bn: "**সোনার নিয়ম ১** — subjunctive verb কখনও -s নেয় না, কখনও past হয় না: he go, she be, they stop।", en: "**Golden rule one** — the subjunctive verb never takes -s and never goes past: he go, she be, they stop.", hi: "**सुनहरा नियम १** — subjunctive verb कभी -s नहीं लेता, कभी past नहीं होता: he go, she be, they stop।" },
            { bn: "**সোনার নিয়ম ২** — be-verb সব পুরুষে শুধুই be থাকে: insisted that she be present; essential that he be informed।", en: "**Golden rule two** — the be-verb stays be for every person: insisted that she be present; essential that he be informed.", hi: "**सुनहरा नियम २** — be-verb हर person पर सिर्फ़ be रहता है: insisted that she be present; essential that he be informed।" },
            { bn: "বাক্য লেখার সময় that-clause-এর verb-এর দিকে এক সেকেন্ড থামুন — সেখানেই mood-এর পরীক্ষা হয়।", en: "While writing, pause one second on the verb inside the that-clause — that is where the mood is tested.", hi: "लिखते समय that-clause के verb पर एक सेकंड रुकें — mood की परीक्षा वहीं होती है।" },
          ],
          formula: {
            bn: "that-clause-এর verb সবসময় base রূপে (V1) — -s নেই, past নেই",
            en: "The verb inside the that-clause always stays base (V1) — no -s, no past",
            hi: "that-clause का verb हमेशा base रूप (V1) में — -s नहीं, past नहीं",
          },
          table: {
            head: [
              { bn: "প্যাটার্ন", en: "Pattern", hi: "पैटर्न" },
              { bn: "নমুনা", en: "Example", hi: "नमूना" },
            ],
            rows: [
              [
                { bn: "Mandative: Subject + suggest/insist/demand + that + subject + V1", en: "Mandative: Subject + suggest/insist/demand + that + subject + V1", hi: "Mandative: Subject + suggest/insist/demand + that + subject + V1" },
                { bn: "I suggest that he go", en: "I suggest that he go", hi: "I suggest that he go" },
              ],
              [
                { bn: "Negative mandative: that + subject + not + V1", en: "Negative mandative: that + subject + not + V1", hi: "Negative mandative: that + subject + not + V1" },
                { bn: "They demanded that the report not be delayed", en: "They demanded that the report not be delayed", hi: "They demanded that the report not be delayed" },
              ],
              [
                { bn: "Passive mandative: that + subject + be + V3", en: "Passive mandative: that + subject + be + V3", hi: "Passive mandative: that + subject + be + V3" },
                { bn: "The judge ordered that the file be sealed", en: "The judge ordered that the file be sealed", hi: "The judge ordered that the file be sealed" },
              ],
              [
                { bn: "Adjective-ট্রিগার: It is + essential/important/vital + that + subject + V1", en: "Adjective trigger: It is + essential/important/vital + that + subject + V1", hi: "Adjective-ट्रिगर: It is + essential/important/vital + that + subject + V1" },
                { bn: "It is vital that everyone be informed", en: "It is vital that everyone be informed", hi: "It is vital that everyone be informed" },
              ],
              [
                { bn: "Unreal were: If + subject + were", en: "Unreal were: If + subject + were", hi: "Unreal were: If + subject + were" },
                { bn: "If I were you, I would apologise", en: "If I were you, I would apologise", hi: "If I were you, I would apologise" },
              ],
              [
                { bn: "as if/as though + subject + were", en: "as if/as though + subject + were", hi: "as if/as though + subject + were" },
                { bn: "She talks as if she were the captain", en: "She talks as if she were the captain", hi: "She talks as if she were the captain" },
              ],
              [
                { bn: "Formulaic: বাঁধা বাক্যাংশ — রূপ বদলায় না", en: "Formulaic: frozen phrases — forms never change", hi: "Formulaic: जमे-बसे वाक्यांश — रूप कभी नहीं बदलता" },
                { bn: "God forbid, come what may, be that as it may, suffice it to say", en: "God forbid, come what may, be that as it may, suffice it to say", hi: "God forbid, come what may, be that as it may, suffice it to say" },
              ],
            ],
          },
          examples: [
            {
              wrong: "The manager insisted that he is given a raise this year.",
              right: "The manager insisted that he be given a raise this year.",
              note: {
                bn: "insist = বেতন-বৃদ্ধির 'দাবি' — ঘটনাটা এখনও চাওয়ার স্তরে; that-clause-এ be + V3, is নয়।",
                en: "insist here means a demand — the raise is still only wanted, so the that-clause takes be + V3, not is.",
                hi: "यहाँ insist एक demand है — वृद्धि अभी केवल माँगी जा रही है, इसलिए that-clause में be + V3, is नहीं।",
              },
            },
            {
              wrong: "The rule demands that every candidate submits two photographs.",
              right: "The rule demands that every candidate submit two photographs.",
              note: {
                bn: "তৃতীয় পুরুষ একবচন candidate হলেও subjunctive-এ -s আসে না — submit-ই থাকবে; নিয়মও মানুষের মতো -s চায় না।",
                en: "Even a third-person singular candidate stays bare — submit; the subjunctive never takes -s.",
                hi: "third person singular candidate होते हुए भी subjunctive में -s नहीं — submit ही रहेगा।",
              },
            },
            {
              wrong: "They demanded that the report not to be delayed any further.",
              right: "They demanded that the report not be delayed any further.",
              note: {
                bn: "Negative subjunctive = not + base verb; to ঢুকিয়ে দিলে গঠন ভেঙে যায় — demanded that it not be delayed।",
                en: "Negative subjunctive = not + base verb; inserting to breaks the frame — demanded that it not be delayed.",
                hi: "Negative subjunctive = not + base verb; to घुसाने से ढाँचा टूट जाता है — demanded that it not be delayed।",
              },
            },
            {
              wrong: "It is important that she to attend the hearing in person.",
              right: "It is important that she attend the hearing in person.",
              note: {
                bn: "It is important/essential/vital that + subject + V1 — to-infinitive এই ফ্রেমে ঢোকে না; বাংলা 'তার উপস্থিত থাকা জরুরি'-র টানে to বসে।",
                en: "It is important/essential/vital that + subject + V1 — no to-infinitive fits this frame; the Bengali 'having her attend is important' tempts the to.",
                hi: "It is important/essential/vital that + subject + V1 — इस ढाँचे में to-infinitive नहीं आता; हिंदी 'उसका उपस्थित रहना ज़रूरी है' to खिंचा लाती है।",
              },
            },
            {
              wrong: "If he was two inches taller, he would join the basketball team.",
              right: "If he were two inches taller, he would join the basketball team.",
              note: {
                bn: "উচ্চতা বাস্তবে নেই — বিপরীত কল্পনা; second conditional-এর if-clause-এ তৃতীয় পুরুষেও were।",
                en: "The height is not real — pure counter-fact; the if-clause of the second conditional takes were even in the third person.",
                hi: "क़द असल में नहीं है — शुद्ध कल्पना; second conditional के if-clause में third person पर भी were।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — কোন শব্দ subjunctive ডাকে",
            en: "🚦 Signals — which words call the subjunctive",
            hi: "🚦 संकेत — कौन-से शब्द subjunctive बुलाते हैं",
          },
          lead: {
            bn: "Advanced দক্ষতা মানে বাক্যের ভেতরের ট্রিগার-শব্দ তৎক্ষণাৎ চিনে ফেলা।",
            en: "Advanced skill means spotting the trigger words inside a sentence instantly.",
            hi: "एडवांस्ड कौशल है वाक्य के भीतर के ट्रिगर-शब्द तुरंत पकड़ना।",
          },
          points: [
            { bn: "ট্রিগারের পরে **that + subject** দেখলেই পরের verb-টা base হবে — এটাই আভাসের নিয়ম।", en: "After any trigger, **that + subject** means the next verb goes base — that is the signal rule.", hi: "ट्रिगर के बाद **that + subject** दिखे तो अगला verb base होगा — यही संकेत-नियम है।" },
            { bn: "তিন শ্রেণির ট্রিগার — verb, adjective, noun; পুরো তালিকা নিচের টেবিলে।", en: "Three classes of trigger — verbs, adjectives, nouns; the full list is in the table below.", hi: "ट्रिगर की तीन श्रेणियाँ — verb, adjective, noun; पूरी सूची नीचे की तालिका में।" },
            { bn: "**BrE-তে should** দিয়েও চলে: I suggest that he should go — কিন্তু আমেরিকান ইংরেজি ও পরীক্ষার উত্তরপত্রে base verb-ই নিরাপদ।", en: "**British English allows should**: I suggest that he should go — but American English and exam answers prefer the plain base verb.", hi: "**British English में should** चलता है: I suggest that he should go — पर American English और परीक्षा-उत्तर में शुद्ध base verb सुरक्षित।" },
            { bn: "'whether he be...' জাতীয় আর্কেইক রূপ আধুনিক লেখায় প্রায় নেই-ই — সেদিকে যাবেন না।", en: "Archaic forms such as 'whether he be...' are rare in modern writing — do not chase them.", hi: "'whether he be...' जैसे archaic रूप आधुनिक लेखन में दुर्लभ हैं — वहाँ न जाएँ।" },
            { bn: "পড়তে পড়তে ট্রিগার চোখে পড়ামাত্র পরের verb-এ চোখ রাখুন — ওটা কি base রেখেছে, নাকি indicative হয়ে গেছে?", en: "While reading, the moment a trigger appears, look at the next verb: did it stay base, or did it slip into the indicative?", hi: "पढ़ते हुए ट्रिगर दिखते ही अगले verb पर नज़र रखें: वह base बचा है या indicative बन गया?" },
          ],
          table: {
            head: [
              { bn: "শ্রেণি", en: "Class", hi: "श्रेणी" },
              { bn: "ট্রিগার শব্দ", en: "Trigger words", hi: "ट्रिगर शब्द" },
              { bn: "উদাহরণ", en: "Example", hi: "उदाहरण" },
            ],
            rows: [
              [
                { bn: "Verb", en: "Verb", hi: "Verb" },
                { bn: "suggest, recommend, propose, advise, urge, demand, insist, require, request, ask, order, stipulate", en: "suggest, recommend, propose, advise, urge, demand, insist, require, request, ask, order, stipulate", hi: "suggest, recommend, propose, advise, urge, demand, insist, require, request, ask, order, stipulate" },
                { bn: "The committee recommended that the fee be waived.", en: "The committee recommended that the fee be waived.", hi: "The committee recommended that the fee be waived." },
              ],
              [
                { bn: "Adjective", en: "Adjective", hi: "Adjective" },
                { bn: "essential, vital, crucial, imperative, necessary, important, advisable", en: "essential, vital, crucial, imperative, necessary, important, advisable", hi: "essential, vital, crucial, imperative, necessary, important, advisable" },
                { bn: "It is imperative that the samples reach the lab today.", en: "It is imperative that the samples reach the lab today.", hi: "It is imperative that the samples reach the lab today." },
              ],
              [
                { bn: "Noun", en: "Noun", hi: "Noun" },
                { bn: "suggestion, recommendation, demand, requirement, insistence", en: "suggestion, recommendation, demand, requirement, insistence", hi: "suggestion, recommendation, demand, requirement, insistence" },
                { bn: "My demand is that the money be refunded in full.", en: "My demand is that the money be refunded in full.", hi: "My demand is that the money be refunded in full." },
              ],
            ],
          },
          examples: [
            {
              wrong: "The doctor recommended that he takes complete rest for a week.",
              right: "The doctor recommended that he take complete rest for a week.",
              note: {
                bn: "recommended + that + পরের verb base — তৃতীয় পুরুষ he হলেও takes নয়, take; বাংলা 'ওষুধ খায়'-জাতীয় অভ্যাস -s টেনে আনে।",
                en: "recommended + that + base verb — even with third-person he, take, not takes; Bengali present-tense habits drag the -s in.",
                hi: "recommended + that + base verb — third person he होते हुए भी take, takes नहीं; हिंदी वर्तमान-काल की आदत -s खींच लाती है।",
              },
            },
            {
              wrong: "It is imperative that the samples is tested immediately.",
              right: "It is imperative that the samples be tested immediately.",
              note: {
                bn: "passive subjunctive-এ be + V3 — samples plural হলেও is নয়, be; be-verb mood-এ রূপ বদলায় না।",
                en: "The passive subjunctive is be + V3 — plural samples still take be, not are; be never changes its shape in this mood.",
                hi: "Passive subjunctive है be + V3 — samples plural होते हुए भी be, are नहीं; be इस mood में रूप नहीं बदलता।",
              },
            },
            {
              wrong: "My advice is that she consults a lawyer before signing.",
              right: "My advice is that she consult a lawyer before signing.",
              note: {
                bn: "Noun-ট্রিগারও কাজ করে — advice/suggestion/demand-এর পরে that-clause-এ base verb: consult।",
                en: "Noun triggers work too — after advice/suggestion/demand the that-clause takes the base verb: consult.",
                hi: "Noun-ट्रिगर भी काम करते हैं — advice/suggestion/demand के बाद that-clause में base verb: consult।",
              },
            },
            {
              wrong: "The committee requested that the noise will stop during the exam.",
              right: "The committee requested that the noise stop during the exam.",
              note: {
                bn: "request-ট্রিগারের পরে will ঢোকানো নিষেধ — অনুরোধটা এখনও চাওয়ার স্তরে, তাই base verb stop।",
                en: "No will after the trigger request — the request is still only wanted, so the base verb stop stays.",
                hi: "request-ट्रिगर के बाद will वर्जित — अनुरोध अभी केवल चाह का स्तर है, इसलिए base verb stop।",
              },
            },
            {
              wrong: "The manual stipulates that the machine is serviced every month.",
              right: "The manual stipulates that the machine be serviced every month.",
              note: {
                bn: "stipulate = শর্ত আরোপ করা — চাপ বোঝায়, তাই passive subjunctive be serviced; is serviced মানে বাস্তব বর্ণনা।",
                en: "stipulate = lay down a condition — a pressure word, so the passive subjunctive be serviced; is serviced would be plain description.",
                hi: "stipulate = शर्त रखना — दबाव दर्शाता है, इसलिए passive subjunctive be serviced; is serviced महज़ वर्णन बन जाता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⭐ Mandative subjunctive — suggest/insist/demand-এর পরে base verb",
            en: "⭐ The mandative subjunctive — base verb after suggest/insist/demand",
            hi: "⭐ Mandative subjunctive — suggest/insist/demand के बाद base verb",
          },
          lead: {
            bn: "পরীক্ষা ও formal লেখার তারকা — চাপ-বোঝানো verb-এর পরে that-clause-এ base verb।",
            en: "The star of exams and formal writing — the base verb after pressure verbs.",
            hi: "परीक्षा और formal लेखन की तारका — दबाव-verb के बाद that-clause में base verb।",
          },
          points: [
            { bn: "পরীক্ষা ও formal লেখার তারকা এই **mandative subjunctive** — চাপ-বোঝানো verb-গুলোর পরে that + subject + base verb।", en: "The star of exams and formal writing is the **mandative subjunctive** — after pressure verbs comes that + subject + base verb.", hi: "परीक्षा और formal लेखन की तारका यही **mandative subjunctive** है — दबाव-verbs के बाद that + subject + base verb।" },
            { bn: "suggest, recommend, propose, advise, urge, demand, insist (দাবি-অর্থে), require, request — এদের পরেই base verb: The committee recommended that the fee be waived।", en: "suggest, recommend, propose, advise, urge, demand, insist (demand sense), require, request — after all of them the base verb: The committee recommended that the fee be waived.", hi: "suggest, recommend, propose, advise, urge, demand, insist (माँग-अर्थ), require, request — इन सबके बाद base verb: The committee recommended that the fee be waived।" },
            { bn: "তৃতীয় পুরুষ একবচনেও -s যোগ হয় না, অতীত-ট্রিগার থাকলেও that-clause-এর verb past হয় না — ঘটনাটা এখনও 'চাওয়ার' স্তরে।", en: "No -s even for a third-person singular, and no past inside the that-clause even after a past trigger — the event is still at the 'wanted' stage.", hi: "third person singular में भी -s नहीं, past trigger होते हुए भी that-clause का verb past नहीं — घटना अभी 'चाह' के स्तर पर है।" },
            { bn: "**Negative** — not + base verb: demanded that the report not be delayed; passive — be + V3: ordered that the file be sealed।", en: "**Negative** — not + base verb: demanded that the report not be delayed; passive — be + V3: ordered that the file be sealed.", hi: "**Negative** — not + base verb: demanded that the report not be delayed; passive — be + V3: ordered that the file be sealed।" },
            { bn: "বাঙালি শিক্ষার্থীর সবচেয়ে বড় ফাঁদ বাংলার সরাসরি কমান্ড-ধাঁচ: 'আমি তাকে যেতে বললাম' → I suggested him to go — ভুল।", en: "The biggest trap is Bengali's direct command pattern: 'আমি তাকে যেতে বললাম' → I suggested him to go — wrong.", hi: "सबसे बड़ा जाल सीधे आदेश-ढाँचे का है: 'मैंने उसे जाने को कहा' → I suggested him to go — गलत।" },
            { bn: "suggest কখনও object + to-infinitive নেয় না — সমাধান তিনটা: suggest that he go / suggest going / অন্য verb বেছে নিন — advise him to go, tell him to go।", en: "suggest never takes object + to-infinitive — three fixes: suggest that he go / suggest going / or switch verbs — advise him to go, tell him to go.", hi: "suggest कभी object + to-infinitive नहीं लेता — तीन उपाय: suggest that he go / suggest going / या verb बदलें — advise him to go, tell him to go।" },
            { bn: "**suggest-এর 'প্রমাণ' অর্থ** — The fingerprints suggest that the thief is left-handed; এখানে বাস্তব অনুমান, তাই indicative (is), subjunctive নয়।", en: "**The evidence sense of suggest** — The fingerprints suggest that the thief is left-handed; a real inference takes the indicative (is), not the subjunctive.", hi: "**suggest का 'सबूत' अर्थ** — The fingerprints suggest that the thief is left-handed; यहाँ वास्तविक अनुमान है, इसलिए indicative (is), subjunctive नहीं।" },
            { bn: "অর্থ বদলালে mood-ও বদলায় — দাবি হলে base verb, প্রমাণ হলে সাধারণ রূপ।", en: "Change the meaning and the mood changes too — demand takes the base verb, evidence takes the ordinary form.", hi: "अर्थ बदले तो mood भी बदले — माँग पर base verb, सबूत पर साधारण रूप।" },
          ],
          formula: {
            bn: "Subject + suggest/insist/demand + that + subject + V1 → I suggest that he go",
            en: "Subject + suggest/insist/demand + that + subject + V1 → I suggest that he go",
            hi: "Subject + suggest/insist/demand + that + subject + V1 → I suggest that he go",
          },
          examples: [
            {
              wrong: "I suggested him to take the earlier train.",
              right: "I suggested that he take the earlier train.",
              note: {
                bn: "suggest + object + to-infinitive কখনও নয় — বাংলা 'তাকে যেতে বললাম'-এর হুবহু অনুবাদ; হয় that-clause, নয় advise him to go।",
                en: "suggest + object + to-infinitive never occurs — it is a word-for-word render of the Bengali command; use the that-clause, or switch to advise him to go.",
                hi: "suggest + object + to-infinitive कभी नहीं — यह हिंदी आदेश का शब्दशः अनुवाद है; that-clause लिखें या advise him to go लें।",
              },
            },
            {
              wrong: "The doctor suggested me to rest for two days.",
              right: "The doctor advised me to rest for two days.",
              note: {
                bn: "object + to-infinitive দরকার হলে verb বদলান — advise/tell/urge + object + to V1 চলে; suggested me to rest অচল।",
                en: "When you want object + to-infinitive, switch the verb — advise/tell/urge + object + to V1 works; suggested me to rest does not.",
                hi: "object + to-infinitive चाहिए तो verb बदलें — advise/tell/urge + object + to V1 चलता है; suggested me to rest नहीं।",
              },
            },
            {
              wrong: "The chairman demanded that the auditor will resign.",
              right: "The chairman demanded that the auditor resign.",
              note: {
                bn: "demand-এর পরে that-clause-এ will আসে না — চাহিদাটা এখনও ভবিষ্যতের ঘটনা নয়, চাওয়ামাত্র; base verb resign।",
                en: "No will inside the that-clause after demand — the demand is pure wanting, not a future event; base verb resign.",
                hi: "demand के बाद that-clause में will नहीं — माँग केवल चाह है, भविष्य की घटना नहीं; base verb resign।",
              },
            },
            {
              wrong: "They insisted that she is present at the signing ceremony.",
              right: "They insisted that she be present at the signing ceremony.",
              note: {
                bn: "insist = দাবি করা — উপস্থিতি এখনও চাওয়ার স্তরে; be থাকবে be-ই, is নয়।",
                en: "insist = demand — her presence is still only wanted; be stays be, not is.",
                hi: "insist = माँग करना — उपस्थिति अभी केवल चाह की बात है; be ही रहेगा, is नहीं।",
              },
            },
            {
              wrong: "The fingerprints suggest that the thief be left-handed.",
              right: "The fingerprints suggest that the thief is left-handed.",
              note: {
                bn: "সাবধান — এখানে suggest = প্রমাণ থেকে ইঙ্গিত, প্রস্তাব নয়; তাই indicative is ঠিক। প্রস্তাব-অর্থে হলে subjunctive হতো।",
                en: "Careful — here suggest = infer from evidence, not propose; so the indicative is is right. In the proposal sense it would be the subjunctive.",
                hi: "सावधान — यहाँ suggest = सबूत से संकेत, प्रस्ताव नहीं; इसलिए indicative is सही। प्रस्ताव-अर्थ होता तो subjunctive होता।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🪞 Unreal were — If I were you, as if she were",
            en: "🪞 Unreal were — If I were you, as if she were",
            hi: "🪞 Unreal were — If I were you, as if she were",
          },
          lead: {
            bn: "বাস্তবের বিপরীত কল্পনায় সব পুরুষে were — ইংরেজির সবচেয়ে পরিচিত অবাস্তব রূপ।",
            en: "In a counter-factual every person takes were — English's best-known unreal form.",
            hi: "वास्तव के विपरीत कल्पना में हर person पर were — अंग्रेज़ी का सबसे परिचित अवास्तविक रूप।",
          },
          points: [
            { bn: "নিয়ম এক লাইনে — **বাস্তবের বিপরীত বর্তমান কল্পনায় সব পুরুষে were**: আমি, সে, তুমি — সবাই were।", en: "The rule in one line — **in a present counter-factual every person takes were**: I, she, you — all were.", hi: "नियम एक पंक्ति में — **वास्तव के विपरीत वर्तमान कल्पना में हर person पर were**: I, she, you — सब were।" },
            { bn: "**তিন ঠিকানা** — if-clause: If I were you, I would apologise; as if/as though: He talks as if he were the CEO; wish-এর পরে: I wish I were taller।", en: "**Three addresses** — the if-clause: If I were you, I would apologise; as if/as though: He talks as if he were the CEO; after wish: I wish I were taller.", hi: "**तीन ठिकाने** — if-clause: If I were you, I would apologise; as if/as though: He talks as if he were the CEO; wish के बाद: I wish I were taller।" },
            { bn: "'If I were you' একটা বাঁধা উপদেশ-ফর্মুলা — বাংলার 'আমি তোমার জায়গায় হলে...' বললে যা বোঝায়, ঠিক সেটাই; উপদেশ দেওয়ার সবচেয়ে নরম ইংরেজি সুর।", en: "'If I were you' is a fixed advice formula — exactly the Bengali 'আমি তোমার জায়গায় হলে...'; the softest English way to advise.", hi: "'If I were you' एक बँधा सलाह-सूत्र है — हिंदी के 'अगर मैं तुम्हारी जगह होता...' के ठीक समान; सलाह देने का सबसे नरम अंग्रेज़ी सुर।" },
            { bn: "প্রতিটা was-কে were করবেন না — পার্থক্যটা অর্থের।", en: "Do not upgrade every was to were — the difference lives in meaning.", hi: "हर was को were न बनाएँ — अंतर अर्थ में है।" },
            { bn: "**বাস্তব অতীত-সম্ভাবনা → was**: If she was on yesterday's flight, she has already landed।", en: "**A real past possibility → was**: If she was on yesterday's flight, she has already landed.", hi: "**वास्तविक अतीत-संभावना → was**: If she was on yesterday's flight, she has already landed।" },
            { bn: "**এখনকার কল্পনা → were**: If she were on the flight right now, we could still catch her।", en: "**A present imagining → were**: If she were on the flight right now, we could still catch her.", hi: "**अभी की कल्पना → were**: If she were on the flight right now, we could still catch her।" },
            { bn: "কথ্য ইংরেজিতে If I was you শোনা যায়, তবে লেখা, পরীক্ষা ও formal প্রসঙ্গে were-ই মান; as if she were জাতীয় গঠনে were লিখলে বাক্য উঁচু শোনায়।", en: "Casual speech says If I was you, but writing, exams and formal contexts expect were; in structures like as if she were, were sounds elevated.", hi: "बोलचाल में If I was you सुनाई देता है, पर लेखन, परीक्षा और formal संदर्भ में were ही मानक; as if she were जैसी संरचनाओं में were वाक्य को ऊँचा दिखाता है।" },
            { bn: "অতীতের আফসোস আলাদা পাঠ — wish + had been: I wish I had been there।", en: "Past regrets are a separate chapter — wish + had been: I wish I had been there.", hi: "अतीत का पछतावा अलग पाठ है — wish + had been: I wish I had been there।" },
          ],
          formula: {
            bn: "If / as if / wish + subject + were (সব পুরুষে) → If I were you, I wish I were taller",
            en: "If / as if / wish + subject + were (every person) → If I were you, I wish I were taller",
            hi: "If / as if / wish + subject + were (हर person पर) → If I were you, I wish I were taller",
          },
          examples: [
            {
              wrong: "If I was you, I would accept the offer without delay.",
              right: "If I were you, I would accept the offer without delay.",
              note: {
                bn: "উপদেশের বাঁধা ফর্মুলা — If I were you, I would...; এই একটা বাক্য মুখস্থ থাকলেই unreal were-এর অর্ধেক কাজ শেষ।",
                en: "The fixed advice formula — If I were you, I would...; memorise this one sentence and half of unreal were is done.",
                hi: "सलाह का बँधा सूत्र — If I were you, I would...; यह एक वाक्य याद हो तो unreal were का आधा काम पूरा।",
              },
            },
            {
              wrong: "He spends money as if he was a millionaire.",
              right: "He spends money as if he were a millionaire.",
              note: {
                bn: "সে কোটিপতি নয় — স্পষ্ট কল্পনা, তাই as if + were; were বাক্যটাকে উঁচু, formal রং দেয়।",
                en: "He is not a millionaire — clearly imaginary, so as if + were; were gives the sentence an elevated, formal colour.",
                hi: "वह करोड़पति नहीं है — साफ़ कल्पना, इसलिए as if + were; were वाक्य को ऊँचा, formal रंग देता है।",
              },
            },
            {
              wrong: "I wish I was in Cox's Bazar right now.",
              right: "I wish I were in Cox's Bazar right now.",
              note: {
                bn: "wish + বর্তমান অবাস্তবতা → were; right now শব্দটা বলে দিচ্ছে কল্পনাটা এখনকার।",
                en: "wish + present unreality → were; the phrase right now announces that the imagining belongs to the present.",
                hi: "wish + वर्तमान अवास्तविकता → were; right now शब्द बता रहा है कि कल्पना इसी समय की है।",
              },
            },
            {
              wrong: "If she were on yesterday's flight, she has already landed.",
              right: "If she was on yesterday's flight, she has already landed.",
              note: {
                bn: "উল্টো দিকটাও শিখুন — গতকালের বাস্তব সম্ভাবনা কল্পনা নয়; real past-এ was-ই ঠিক, were লিখলে ভুল অর্থ হয়।",
                en: "Learn the reverse too — a real past possibility is not imagination; the real past takes was, and were would twist the meaning.",
                hi: "उल्टा पक्ष भी सीखें — कल की वास्तविक संभावना कल्पना नहीं; real past में was ही सही, were लिखने से अर्थ बिगड़ जाता है।",
              },
            },
            {
              wrong: "She looked at me as if I am a complete stranger.",
              right: "She looked at me as if I were a complete stranger.",
              note: {
                bn: "as if-এর পরে বক্তার জানা বাস্তবের বিপরীত ছবি — তাই বর্তমানকালের বাক্যেও were; am আসলে ছবিটা 'সত্য' বলে ফেলে।",
                en: "After as if the picture runs against the speaker's known reality — so were even in a present-tense sentence; am would declare the picture true.",
                hi: "as if के बाद बोलने वाले की जानी-मानी वास्तविकता के विपरीत तस्वीर है — इसलिए वर्तमान-काल के वाक्य में भी were; am तस्वीर को 'सच' घोषित कर देगा।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏛️ Formulaic subjunctive — জমে থাকা বাক্যাংশ",
            en: "🏛️ The formulaic subjunctive — frozen phrases",
            hi: "🏛️ Formulaic subjunctive — जमे-बसे वाक्यांश",
          },
          lead: {
            bn: "সবচেয়ে পুরোনো ধারা — রূপ কখনও বদলায় না; মুখস্থই করতে হবে।",
            en: "The oldest branch — forms never change; they must simply be memorised.",
            hi: "सबसे पुरानी धारा — रूप कभी नहीं बदलता; रटना ही होगा।",
          },
          points: [
            { bn: "Subjunctive-এর সবচেয়ে পুরোনো ধারা এখন **জমে-থাকা বাক্যাংশ** — রূপ কখনও বদলায় না, সময় বদলালেও নয়।", en: "The oldest branch of the subjunctive survives as **frozen phrases** — their form never changes, not even when time changes.", hi: "Subjunctive की सबसे पुरानी धारा अब **जमे-बसे वाक्यांश** — रूप कभी नहीं बदलता, समय बदलने पर भी नहीं।" },
            { bn: "এদের মুখস্থই করতে হবে, নিয়ম বসিয়ে ভাঙা যায় না — পুরো তালিকা নিচের টেবিলে।", en: "These must simply be memorised; no rule can rebuild them — the full list is in the table below.", hi: "इन्हें रटना ही होगा, नियम से नहीं बनाए जा सकते — पूरी सूची नीचे की तालिका में।" },
            { bn: "বাক্যের শুরুতে sentence adverbial-এর মতো বসে রং আনে: Come what may, the show must go on।", en: "They sit at the front of a sentence like sentence adverbials and add colour: Come what may, the show must go on.", hi: "वाक्य के आगे sentence adverbial की तरह बैठकर रंग जोड़ते हैं: Come what may, the show must go on।" },
            { bn: "আরও দেখুন: Be that as it may, the deadline stands. Suffice it to say that the deal fell through. Truth be told, the pilot project underperformed।", en: "See more: Be that as it may, the deadline stands. Suffice it to say that the deal fell through. Truth be told, the pilot project underperformed.", hi: "और देखें: Be that as it may, the deadline stands. Suffice it to say that the deal fell through. Truth be told, the pilot project underperformed।" },
            { bn: "বাঙালি শিক্ষার্থীরা প্রায়ই -s জুড়ে ফেলে (God forbids) বা রূপ বদলে ফেলে (truth being told, be that it may)।", en: "Bengali-speaking learners often add -s (God forbids) or reshape them (truth being told, be that it may).", hi: "हिंदी-बांग्लाभाषी शिक्षार्थी प्रायः -s जोड़ देते हैं (God forbids) या रूप बदल देते हैं (truth being told, be that it may)।" },
            { bn: "এরা জীবন্ত বাক্য নয়, জাদুঘরের মূর্তি — জাদুঘরের মূর্তিতে হাত দেওয়া যায় না।", en: "These are not living sentences but museum statues — you do not touch up a statue.", hi: "ये जीवंत वाक्य नहीं, संग्रहालय की मूर्तियाँ हैं — मूर्ति पर हाथ नहीं चलता।" },
            { bn: "'come what may' সিনেমা-গানের কারণে বাঙালি কানে পরিচিত — ব্যবহারে ভয় নেই, ভুল রূপেই ভয়।", en: "'come what may' is already familiar through film songs — use it freely, just never in a broken form.", hi: "'come what may' फ़िल्मी गीतों से परिचित है — बेझिझक इस्तेमाल करें, बस टूटे रूप में नहीं।" },
          ],
          formula: {
            bn: "জমে-থাকা বাক্যাংশ = জাদুঘরের মূর্তি — রূপ অটুট: God forbid, truth be told, come what may",
            en: "Frozen phrases are museum statues — forms stay intact: God forbid, truth be told, come what may",
            hi: "जमे-बसे वाक्यांश = संग्रहालय की मूर्ति — रूप अटूट: God forbid, truth be told, come what may",
          },
          table: {
            head: [
              { bn: "বাঁধা বাক্যাংশ", en: "Frozen phrase", hi: "जमा-बसा वाक्यांश" },
              { bn: "অর্থ", en: "Meaning", hi: "अर्थ" },
            ],
            rows: [
              [
                { bn: "God forbid / Heaven forbid", en: "God forbid / Heaven forbid", hi: "God forbid / Heaven forbid" },
                { bn: "আল্লাহ না করুন", en: "may God prevent this", hi: "ईश्वर ऐसा न करे" },
              ],
              [
                { bn: "God save the King", en: "God save the King", hi: "God save the King" },
                { bn: "রাজার কল্যাণ হোক", en: "the royal blessing formula", hi: "राजा का कल्याण हो" },
              ],
              [
                { bn: "come what may", en: "come what may", hi: "come what may" },
                { bn: "যা-ই হোক", en: "no matter what happens", hi: "जो भी हो जाए" },
              ],
              [
                { bn: "be that as it may", en: "be that as it may", hi: "be that as it may" },
                { bn: "যাই হোক না কেন", en: "even so", hi: "जैसा भी हो, फिर भी" },
              ],
              [
                { bn: "so be it", en: "so be it", hi: "so be it" },
                { bn: "হোক, হয়ে গেল", en: "let it happen", hi: "होने दो, हो गया" },
              ],
              [
                { bn: "suffice it to say (that)", en: "suffice it to say (that)", hi: "suffice it to say (that)" },
                { bn: "যতটা বলা দরকার তার বেশি বলব না", en: "I will say no more than needed", hi: "ज़रूरत से ज़्यादा नहीं कहूँगा" },
              ],
              [
                { bn: "far be it from me (to)", en: "far be it from me (to)", hi: "far be it from me (to)" },
                { bn: "আমার একেবারে কথা নয়", en: "I would be the last person to", hi: "मुझसे यह कभी नहीं हो सकता" },
              ],
              [
                { bn: "truth be told", en: "truth be told", hi: "truth be told" },
                { bn: "সত্যি বলতে কি", en: "honestly speaking", hi: "सच कहा जाए तो" },
              ],
              [
                { bn: "perish the thought", en: "perish the thought", hi: "perish the thought" },
                { bn: "এসব কথা কেন!", en: "never even think it", hi: "ये बातें भी! ऐसा सोचना भी नहीं" },
              ],
              [
                { bn: "long live X", en: "long live X", hi: "long live X" },
                { bn: "X দীর্ঘ জীবন হোক", en: "may X live long", hi: "X दीर्घजीवी हो" },
              ],
            ],
          },
          examples: [
            {
              wrong: "God forbids, do not say such things about the match!",
              right: "God forbid, do not say such things about the match!",
              note: {
                bn: "forbid এখানে জমে-থাকা base রূপ — God forbid-ই একমাত্র সঠিক; -s জুড়লে ফর্মুলা ভাঙে।",
                en: "forbid here is the frozen base form — only God forbid is correct; adding -s breaks the formula.",
                hi: "यहाँ forbid जमा-बसा base रूप है — केवल God forbid सही; -s जोड़ने से सूत्र टूटता है।",
              },
            },
            {
              wrong: "Be that it may, we still have a deadline to meet.",
              right: "Be that as it may, we still have a deadline to meet.",
              note: {
                bn: "ফর্মুলাটা be that as it may — মাঝের as বাদ দিলে বাক্যাংশটাই অচল; পুরো খণ্ডটা এককাঠি শব্দের মতো মনে রাখুন।",
                en: "The formula is be that as it may — drop the middle as and the phrase collapses; store the whole chunk like one single word.",
                hi: "सूत्र है be that as it may — बीच का as हटाते ही वाक्यांश बेकार; पूरे टुकड़े को एक शब्द की तरह याद रखें।",
              },
            },
            {
              wrong: "Truth being told, the pilot project underperformed.",
              right: "Truth be told, the pilot project underperformed.",
              note: {
                bn: "frozen subjunctive — truth be told; being জুড়লে সাধারণ passive বাক্য হয়ে যায়, রংটা হারায়।",
                en: "A frozen subjunctive — truth be told; adding being turns it into an ordinary passive and the colour is lost.",
                hi: "जमा-बसा subjunctive — truth be told; being जोड़ने से साधारण passive बन जाता है और रंग खो जाता है।",
              },
            },
            {
              wrong: "Far be it for me to question your method, but...",
              right: "Far be it from me to question your method, but...",
              note: {
                bn: "far be it from me (to...) — বিনয়ের রঙিন ঘোষণা 'আমি তো এমন কথা বলতেই পারি না'; for নয়, from।",
                en: "far be it from me (to...) — a colourful declaration of modesty, 'I would be the last person to...'; from, not for.",
                hi: "far be it from me (to...) — विनम्रता का रंगीन घोषणापत्र, 'मैं तो ऐसा कहते ही नहीं'; for नहीं, from।",
              },
            },
            {
              wrong: "Suffice saying that the deal fell through last week.",
              right: "Suffice it to say that the deal fell through last week.",
              note: {
                bn: "পুরো ফর্মুলাটা suffice it to say (that) — তিনটা অংশ একসঙ্গে আসে; কোনো অংশ বাদ দিলে বাক্যাংশ মরে যায়।",
                en: "The full formula is suffice it to say (that) — all three parts travel together; drop one and the phrase dies.",
                hi: "पूरा सूत्र है suffice it to say (that) — तीनों अंग साथ चलते हैं; एक छोड़ देने पर वाक्यांश मर जाता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "বাক্যের কাঠামো ঠিক, ভেতরের একটা জিনিস গলদ — পাঁচ দলের চেনা ফাঁদ।",
            en: "The sentence looks well-built, one small part inside is off — five familiar traps.",
            hi: "वाक्य-काठामो ठीक, भीतर का एक हिस्सा गलत — पाँच समूह के जाने-पहचाने जाल।",
          },
          points: [
            { bn: "Advanced শিক্ষার্থীদের ভুল এখানে সূক্ষ্ম — বাক্যের কাঠামো ঠিক, ভেতরের একটা জিনিস গলদ।", en: "Advanced errors here are subtle — the sentence looks well-built; one small part inside is off.", hi: "एडवांस्ड शिक्षार्थियों की गलतियाँ यहाँ सूक्ष्म हैं — वाक्य-काठामो ठीक, भीतर का एक हिस्सा फिसल जाता है।" },
            { bn: "**দল ১** — insist on আর that-clause মেশানো: insisted on that he deliver ✗; হয় insisted that he deliver, নয় insisted on his delivering।", en: "**Group one** — insist on mixed with a that-clause: insisted on that he deliver ✗; either insisted that he deliver or insisted on his delivering.", hi: "**समूह १** — insist on और that-clause का मिश्रण: insisted on that he deliver ✗; या तो insisted that he deliver, या insisted on his delivering।" },
            { bn: "**দল ২** — passive subjunctive-এ ঢুকে পড়া to: demanded that the data to be stored ✗ → be stored।", en: "**Group two** — to sneaking into the passive subjunctive: demanded that the data to be stored ✗ → be stored.", hi: "**समूह २** — passive subjunctive में घुसा to: demanded that the data to be stored ✗ → be stored।" },
            { bn: "**দল ৩** — that-clause-এ will/would ঢোকানো: asked that I will show the papers ✗ → show।", en: "**Group three** — will/would inside the that-clause: asked that I will show the papers ✗ → show.", hi: "**समूह ३** — that-clause में will/would: asked that I will show the papers ✗ → show।" },
            { bn: "**দল ৪** — তৃতীয় পুরুষে -s ধরে রাখা (recommended that everyone attends): BrE-তে indicative চললেও একই লেখায় দুই স্টাইল মেশালে গলদ ধরা পড়ে; পরীক্ষায় base verb নিরাপদ।", en: "**Group four** — keeping -s in the third person (recommended that everyone attends): the indicative passes in British usage, but mixing both styles in one text exposes the slip; the base verb is the safe exam answer.", hi: "**समूह ४** — third person पर -s रोके रखना (recommended that everyone attends): British उपयोग में indicative चल जाता है, पर एक ही लेख में दोनों शैलियाँ मिलने पर चूक पकड़ी जाती है; परीक्षा में base verb सुरक्षित।" },
            { bn: "**দল ৫** — formal কল্পনায় was: Suppose he was the culprit ✗ → Suppose he were the culprit।", en: "**Group five** — was in a formal imagining: Suppose he was the culprit ✗ → Suppose he were the culprit.", hi: "**समूह ५** — formal कल्पना में was: Suppose he was the culprit ✗ → Suppose he were the culprit।" },
            { bn: "পড়ার সময় দুটো প্রশ্ন করুন — এই that-clause-টা কি চাওয়া/দাবি বোঝাচ্ছে, নাকি বাস্তব তথ্য? চাওয়া হলে base verb।", en: "While reading, ask two questions — does this that-clause express wanting/demanding, or real information? If wanting, base verb.", hi: "पढ़ते समय दो प्रश्न पूछें — यह that-clause चाह/माँग बता रही है या वास्तविक सूचना? चाह हो तो base verb।" },
            { bn: "দ্বিতীয় প্রশ্ন: এই কল্পনাটা কি বাস্তবের বিপরীত? হ্যাঁ হলে were — এই দুই প্রশ্নেই পাঠের প্রায় সব জায়গা ধরা পড়ে।", en: "Second question: is this imagining against reality? If yes, were — these two questions catch almost everything in the lesson.", hi: "दूसरा प्रश्न: क्या यह कल्पना वास्तव के विपरीत है? हाँ हो तो were — इन्हीं दो प्रश्नों में पाठ का लगभग सब कुछ पकड़ में आ जाता है।" },
          ],
          examples: [
            {
              wrong: "The client insisted on that we deliver the order early.",
              right: "The client insisted that we deliver the order early.",
              note: {
                bn: "insist on-এর পরে that-clause আসে না — হয় insisted that we deliver, নয় insisted on our delivering early।",
                en: "insist on never takes a that-clause — either insisted that we deliver or insisted on our delivering early.",
                hi: "insist on के बाद that-clause नहीं आता — या तो insisted that we deliver, या insisted on our delivering early।",
              },
            },
            {
              wrong: "The regulator demands that the data to be stored locally.",
              right: "The regulator demands that the data be stored locally.",
              note: {
                bn: "passive subjunctive = be + V3; to একবার ঢুকলেই গঠনটা 'demand him to do' স্টাইলে গিয়ে ভেঙে পড়ে।",
                en: "The passive subjunctive is be + V3; one stray to and the frame collapses into a 'demand him to do' style error.",
                hi: "Passive subjunctive = be + V3; एक बिगड़ा to और ढाँचा 'demand him to do' शैली की गलती बन जाता है।",
              },
            },
            {
              wrong: "The visa officer asked that I will show the bank statement.",
              right: "The visa officer asked that I show the bank statement.",
              note: {
                bn: "ask (অনুরোধ-অর্থে) + that → base verb; will বক্তার চাওয়াটাকে 'নিশ্চিত ভবিষ্যৎ' বলে ফেলে, mood ভেঙে যায়।",
                en: "ask (request sense) + that → base verb; will would declare the wish a certain future and break the mood.",
                hi: "ask (अनुरोध-अर्थ में) + that → base verb; will चाह को निश्चित भविष्य घोषित कर mood तोड़ देगा।",
              },
            },
            {
              wrong: "The CEO recommended that everyone attends the workshop.",
              right: "The CEO recommended that everyone attend the workshop.",
              note: {
                bn: "everyone তৃতীয় পুরুষ একবচন — তবু subjunctive attend; -s ব্রিটিশ indicative-এ চললেও পরীক্ষায় base নিরাপদ।",
                en: "everyone is third-person singular — yet the subjunctive attends to no one: attend; the -s passes in British indicative use but the base verb is the safe exam form.",
                hi: "everyone third person singular है — फिर भी subjunctive किसी की नहीं सुनता: attend; -s British indicative में चल जाए, पर परीक्षा में base ही सुरक्षित।",
              },
            },
            {
              wrong: "Suppose he was the culprit — what would we do then?",
              right: "Suppose he were the culprit — what would we do then?",
              note: {
                bn: "Suppose + কল্পনা = unreal পরিবারের সদস্য; বাস্তবের বিপরীত হলে were, আর what would... মিলিয়ে পুরো বাক্যটা কল্পনা-ফ্রেমে থাকে।",
                en: "Suppose + imagination belongs to the unreal family; against reality takes were, and what would... keeps the whole sentence inside the imagining frame.",
                hi: "Suppose + कल्पना unreal परिवार का सदस्य है; वास्तव के विपरीत were लेता है, और what would... पूरे वाक्य को कल्पना-फ्रेम में रखता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট লেখায় দেখা যাক",
            en: "📖 Seen in a short passage",
            hi: "📖 छोटे अंश में देखिए",
          },
          lead: {
            bn: "এক টুকরো অডিট-প্যাসেজ — পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে।",
            en: "One short audit passage — every pattern of the lesson at work together.",
            hi: "एक छोटा ऑडिट-पैसेज — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं।",
          },
          points: [
            { bn: "নিচের ছোট অনুচ্ছেদটা পড়ুন — এই পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে।", en: "Read this short paragraph — every pattern of the lesson is at work together.", hi: "यह छोटा अनुच्छेद पढ़ें — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं।" },
            { bn: "The audit board has recommended that the accounts be re-examined, and the director insists that the report reach the ministry by Monday.", en: "The audit board has recommended that the accounts be re-examined, and the director insists that the report reach the ministry by Monday.", hi: "The audit board has recommended that the accounts be re-examined, and the director insists that the report reach the ministry by Monday." },
            { bn: "If I were the auditor, I would flag the travel bills first. The CFO, however, talks as if nothing were wrong.", en: "If I were the auditor, I would flag the travel bills first. The CFO, however, talks as if nothing were wrong.", hi: "If I were the auditor, I would flag the travel bills first. The CFO, however, talks as if nothing were wrong." },
            { bn: "Come what may, the hearing will be held next week. Suffice it to say that every line item will be questioned — be that as it may, our job is to walk in with clean numbers.", en: "Come what may, the hearing will be held next week. Suffice it to say that every line item will be questioned — be that as it may, our job is to walk in with clean numbers.", hi: "Come what may, the hearing will be held next week. Suffice it to say that every line item will be questioned — be that as it may, our job is to walk in with clean numbers." },
            { bn: "প্রতিটা বাক্যে জিজ্ঞেস করুন: এটা কি বাস্তব ঘটনা (indicative), নাকি চাওয়া-দাবি-কল্পনা (subjunctive)?", en: "Ask of each sentence: is this a real event (indicative), or a wish/demand/imagination (subjunctive)?", hi: "हर वाक्य में पूछें: यह वास्तविक घटना है (indicative), या चाह-माँग-कल्पना (subjunctive)?" },
          ],
          examples: [
            {
              wrong: "The board recommended that the accounts are re-examined next month.",
              right: "The board recommended that the accounts be re-examined next month.",
              note: {
                bn: "recommend-ট্রিগারের পরে that-clause চাওয়ার স্তরে — passive-এ be re-examined; are re-examined মানে বাস্তব ঘটনার বিবরণ।",
                en: "After the trigger recommend the that-clause stays at the 'wanted' stage — be re-examined in the passive; are re-examined would be plain reporting.",
                hi: "recommend-ट्रिगर के बाद that-clause चाह के स्तर पर रहता है — passive में be re-examined; are re-examined महज़ रिपोर्टिंग बन जाता।",
              },
            },
            {
              wrong: "The director insists that the report will reach the ministry by Monday.",
              right: "The director insists that the report reach the ministry by Monday.",
              note: {
                bn: "insist-এর দাবি-অর্থে that-clause-এ will নিষিদ্ধ — reach; দাবিটা এখনও ঘটনা নয়।",
                en: "In the demand sense of insist, no will inside the that-clause — reach; the demand is not yet an event.",
                hi: "insist के माँग-अर्थ में that-clause में will वर्जित — reach; माँग अभी घटना नहीं है।",
              },
            },
            {
              wrong: "If I was the auditor, I would flag the travel bills first.",
              right: "If I were the auditor, I would flag the travel bills first.",
              note: {
                bn: "বক্তা অডিটর নন — বিপরীত কল্পনায় প্রথম পুরুষেও were; I would অর্ধেকটা ঠিক থাকলে were-ও ধরে ফেলুন।",
                en: "The speaker is not the auditor — even the first person takes were in a counter-factual; when I would is right, let were follow.",
                hi: "बोलने वाला ऑडिटर नहीं है — विपरीत कल्पना में first person पर भी were; I would सही हो तो were भी पकड़ लें।",
              },
            },
            {
              wrong: "The CFO talks as if nothing was wrong in the accounts.",
              right: "The CFO talks as if nothing were wrong in the accounts.",
              note: {
                bn: "as if + অবাস্তব ছবি → were; formal রিপোর্টের ভাষায় nothing were wrong-ই উঁচু মান।",
                en: "as if + an unreal picture → were; in formal report language, nothing were wrong is the elevated norm.",
                hi: "as if + अवास्तविक तस्वीर → were; formal रिपोर्ट-भाषा में nothing were wrong ही ऊँचा मानक है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧠 এক নজরে",
            en: "🧠 At a glance",
            hi: "🧠 एक नज़र में",
          },
          lead: {
            bn: "পুরো পাঠ ছয় সারিতে — আর তিন বাক্যের বাড়ির অনুশীলন।",
            en: "The whole lesson in six lines — plus a three-sentence home drill.",
            hi: "पूरा पाठ छह पंक्तियों में — और तीन वाक्य का घरेलू अभ्यास।",
          },
          points: [
            { bn: "**Mandative** — suggest/insist/demand/recommend + that + base verb।", en: "**Mandative** — suggest/insist/demand/recommend + that + base verb.", hi: "**Mandative** — suggest/insist/demand/recommend + that + base verb।" },
            { bn: "**Negative ও passive** — not + base verb, আর be + V3।", en: "**Negative and passive** — not + base verb, and be + V3.", hi: "**Negative और passive** — not + base verb, और be + V3।" },
            { bn: "**কল্পনায় সব পুরুষে were** — If I were you, as if she were, I wish I were।", en: "**In imagination every person takes were** — If I were you, as if she were, I wish I were.", hi: "**कल्पना में हर person पर were** — If I were you, as if she were, I wish I were।" },
            { bn: "**অতীতের আফসোস** — wish + had been।", en: "**Past regret** — wish + had been.", hi: "**अतीत का पछतावा** — wish + had been।" },
            { bn: "'প্রমাণ-অর্থে' suggest আর 'জেদ-অর্থে' insist → indicative।", en: "The evidence sense of suggest and the claim sense of insist → indicative.", hi: "'सबूत-अर्थ' का suggest और 'ज़िद-अर्थ' का insist → indicative।" },
            { bn: "**জমে-থাকা বাক্যাংশ অটুট** — God forbid, come what may, be that as it may, suffice it to say, truth be told।", en: "**Frozen phrases stay frozen** — God forbid, come what may, be that as it may, suffice it to say, truth be told.", hi: "**जमे-बसे वाक्यांश अटूट** — God forbid, come what may, be that as it may, suffice it to say, truth be told।" },
            { bn: "অনুশীলন: অফিস বা ক্যাম্পাসের যে-কোনো সিদ্ধান্ত নিয়ে তিনটা বাক্য লিখুন — একটায় mandative subjunctive, একটায় If I were..., একটায় জমে-থাকা বাক্যাংশ।", en: "Practice: take any office or campus decision and write three sentences — one with a mandative subjunctive, one with If I were..., one with a frozen phrase.", hi: "अभ्यास: दफ़्तर या कैंपस के किसी निर्णय पर तीन वाक्य लिखें — एक में mandative subjunctive, एक में If I were..., एक में जमा-बसा वाक्यांश।" },
          ],
          examples: [],
        },
      ],
      tips: [
        {
          bn: "suggest/insist/demand/recommend/require + that দেখলেই পরের verb বেস-ফর্ম (V1) — তৃতীয় পুরুষেও -s নয়, অতীত-ট্রিগার থাকলেও past নয়।",
          en: "The moment you see suggest/insist/demand/recommend/require + that, the next verb goes base (V1) — no -s even in the third person, no past even after a past trigger.",
          hi: "suggest/insist/demand/recommend/require + that दिखते ही अगला verb base-रूप (V1) — third person में भी -s नहीं, past trigger होने पर भी past नहीं।",
        },
        {
          bn: "I suggest him to go কখনও নয় — suggest that he go বা suggest going; object + to-infinitive দরকার হলে verb বদলান: advise him to go।",
          en: "Never say I suggest him to go — say suggest that he go or suggest going; if you need object + to-infinitive, switch verbs: advise him to go.",
          hi: "I suggest him to go कभी नहीं — suggest that he go या suggest going; object + to-infinitive चाहिए तो verb बदलें: advise him to go।",
        },
        {
          bn: "demand/insist/order + that + subject + be + V3 (passive): The judge ordered that the file be sealed — be-verb সব পুরুষে be-ই থাকে।",
          en: "demand/insist/order + that + subject + be + V3 (passive): The judge ordered that the file be sealed — the be-verb stays be for every person.",
          hi: "demand/insist/order + that + subject + be + V3 (passive): The judge ordered that the file be sealed — be-verb हर person पर be ही रहता है।",
        },
        {
          bn: "If I were you, I would... = উপদেশের নরমতম ফর্মুলা — বাস্তবের বিপরীত কল্পনায় সব পুরুষে were।",
          en: "If I were you, I would... = the softest advice formula — every person takes were in a counter-factual.",
          hi: "If I were you, I would... = सलाह का सबसे नरम सूत्र — वास्तव के विपरीत कल्पना में हर person पर were।",
        },
        {
          bn: "বাস্তব অতীতের সম্ভাবনা → was/indicative (If she was on yesterday's flight...); বাস্তবের বিপরীত কল্পনা → were। অর্থ দেখে সিদ্ধান্ত নিন।",
          en: "A real past possibility → was/indicative (If she was on yesterday's flight...); a counter-factual → were. Let the meaning decide.",
          hi: "वास्तविक अतीत की संभावना → was/indicative (If she was on yesterday's flight...); वास्तव के विपरीत कल्पना → were। अर्थ देखकर निर्णय लें।",
        },
        {
          bn: "insist-এর দুই মুখ: দাবি → that she be present; জেদ করে দাবি-করা তথ্য → he insisted that he was innocent (indicative)।",
          en: "insist has two faces: demand → that she be present; claiming a fact → he insisted that he was innocent (indicative).",
          hi: "insist के दो चेहरे: माँग → that she be present; तथ्य का दावा → he insisted that he was innocent (indicative)।",
        },
        {
          bn: "suggest-এর দুই মুখ: প্রস্তাব → I suggest that he go; প্রমাণ/ইঙ্গিত → The data suggest that the scheme works (indicative)।",
          en: "suggest has two faces: proposal → I suggest that he go; evidence/hint → The data suggest that the scheme works (indicative).",
          hi: "suggest के दो चेहरे: प्रस्ताव → I suggest that he go; सबूत/संकेत → The data suggest that the scheme works (indicative)।",
        },
        {
          bn: "জমে-থাকা বাক্যাংশের রূপ কখনও বদলায় না: God forbid (not forbids), truth be told, come what may, be that as it may, suffice it to say।",
          en: "Frozen phrases never change form: God forbid (not forbids), truth be told, come what may, be that as it may, suffice it to say.",
          hi: "जमे-बसे वाक्यांश का रूप कभी नहीं बदलता: God forbid (not forbids), truth be told, come what may, be that as it may, suffice it to say।",
        },
        {
          bn: "Formal লেখায় it is essential/vital/imperative that + base verb: It is imperative that the samples reach the lab today।",
          en: "In formal writing: it is essential/vital/imperative that + base verb: It is imperative that the samples reach the lab today.",
          hi: "Formal लेखन में it is essential/vital/imperative that + base verb: It is imperative that the samples reach the lab today।",
        },
        {
          bn: "BrE-তে should মেনে চলে (suggest that he should go), কিন্তু পরীক্ষা ও AmE-তে base verb-ই নিরাপদ; একই লেখায় দুই স্টাইল মেশাবেন না।",
          en: "British English accepts should (suggest that he should go), but exams and American English prefer the base verb; never mix the two styles in one text.",
          hi: "British English में should चलता है (suggest that he should go), पर परीक्षा और American English में base verb ही सुरक्षित; एक ही लेख में दोनों शैली न मिलाएँ।",
        },
      ],
      quiz: [
        {
          question: "The coach insisted that every player ______ the warm-up before the match.",
          options: ["does", "do", "did", "doing"],
          answer: 1,
          explanation: {
            bn: "insist (দাবি-অর্থে) + that → base verb; every player তৃতীয় পুরুষ হলেও subjunctive-এ do-ই থাকবে।",
            en: "insist (demand sense) + that → base verb; even with third-person every player, the subjunctive keeps do.",
            hi: "insist (माँग-अर्थ) + that → base verb; every player third person होते हुए भी subjunctive में do ही रहेगा।",
          },
        },
        {
          question: "If I ______ you, I would apologise before it gets worse.",
          options: ["was", "am", "were", "had been"],
          answer: 2,
          explanation: {
            bn: "উপদেশের বাঁধা ফর্মুলা If I were you — বাস্তবের বিপরীত কল্পনায় প্রথম পুরুষেও were।",
            en: "The fixed advice formula If I were you — the first person also takes were in a counter-factual.",
            hi: "सलाह का बँधा सूत्र If I were you — वास्तव के विपरीत कल्पना में first person पर भी were।",
          },
        },
        {
          question: "I suggested that he ______ the earlier train to save time.",
          options: ["take", "takes", "will take", "taking"],
          answer: 0,
          explanation: {
            bn: "suggest + that + base verb — তৃতীয় পুরুষে -s আসে না; will ও taking-ও এই ফ্রেমে অচল।",
            en: "suggest + that + base verb — no -s in the third person; will and taking also fail in this frame.",
            hi: "suggest + that + base verb — third person में -s नहीं; will और taking भी इस ढाँचे में नहीं चलते।",
          },
        },
        {
          question: "She talks about the brand as if she ______ its owner.",
          options: ["is", "was", "were", "has been"],
          answer: 2,
          explanation: {
            bn: "স্পষ্ট কল্পনা — সে মালিক নয়; as if + unreal were।",
            en: "A clear imagining — she is not the owner; as if + unreal were.",
            hi: "साफ़ कल्पना — वह मालिक नहीं; as if + unreal were।",
          },
        },
        {
          question: "______, the show must go on despite the rain.",
          options: ["Come what may comes", "Come what may", "Coming what may", "What may come"],
          answer: 1,
          explanation: {
            bn: "জমে-থাকা formulaic বাক্যাংশ Come what may — রূপ কখনও বদলায় না।",
            en: "A frozen formulaic phrase: Come what may — its form never changes.",
            hi: "जमा-बसा formulaic वाक्यांश Come what may — रूप कभी नहीं बदलता।",
          },
        },
        {
          question: "It is essential that every applicant ______ the form online.",
          options: ["fill", "fills", "will fill", "to fill"],
          answer: 0,
          explanation: {
            bn: "It is essential that + subject + base verb — fills/will fill/to fill সবই এই ফ্রেমে ভুল।",
            en: "It is essential that + subject + base verb — fills, will fill and to fill are all wrong here.",
            hi: "It is essential that + subject + base verb — fills, will fill और to fill तीनों यहाँ गलत।",
          },
        },
        {
          question: "Which sentence treats its clause as a FACT (indicative), not a demand?",
          options: [
            "I insist that he be present at the meeting.",
            "The fingerprints suggest that the thief is left-handed.",
            "The judge ordered that the file be sealed.",
            "It is vital that everyone be informed.",
          ],
          answer: 1,
          explanation: {
            bn: "প্রমাণ-অর্থে suggest বাস্তব অনুমান বোঝায় — indicative is; বাকি তিনটাই চাওয়া-দাবি বোঝায় (subjunctive be)।",
            en: "The evidence sense of suggest draws a real inference — indicative is; the other three all express wants/demands (subjunctive be).",
            hi: "सबूत-अर्थ का suggest वास्तविक अनुमान दर्शाता है — indicative is; बाकी तीनों चाह-माँग दर्शाते हैं (subjunctive be)।",
          },
        },
        {
          question: "The auditor demanded that the records ______ immediately.",
          options: ["are released", "be released", "will be released", "to be released"],
          answer: 1,
          explanation: {
            bn: "passive subjunctive = be + V3 — demanded that the records be released; are/will/to সবই mood ভেঙে দেয়।",
            en: "The passive subjunctive is be + V3 — demanded that the records be released; are, will and to all break the mood.",
            hi: "Passive subjunctive = be + V3 — demanded that the records be released; are, will और to सब mood तोड़ देते हैं।",
          },
        },
        {
          question: "I wish I ______ at the reunion last month.",
          options: ["was", "were", "had been", "would be"],
          answer: 2,
          explanation: {
            bn: "অতীতের আফসোস — wish + had been; were বর্তমান কল্পনার রূপ, অতীতের নয়।",
            en: "A past regret — wish + had been; were serves present imaginings, not past ones.",
            hi: "अतीत का पछतावा — wish + had been; were वर्तमान कल्पना का रूप है, अतीत का नहीं।",
          },
        },
        {
          question: "Why is 'God forbid' correct rather than 'God forbids'?",
          options: [
            "Because forbid is a plural verb",
            "Because God is singular",
            "Because it is a frozen subjunctive phrase whose base form never changes",
            "Because forbid is an adjective",
          ],
          answer: 2,
          explanation: {
            bn: "God forbid যুগযুগ ধরে জমে-থাকা subjunctive — base রূপ অটুট থাকে; -s জুড়লে ফর্মুলা ভাঙে।",
            en: "God forbid is a subjunctive relic frozen for centuries — its base form stays intact; adding -s breaks the formula.",
            hi: "God forbid सदियों से जमा-बसा subjunctive है — base रूप अटूट रहता है; -s जोड़ने से सूत्र टूटता है।",
          },
        },
      ],
    },
  },

  /* ── 2. Hedging & Softening Language (Unit 0 — extra deep practice) ───── */
  {
    topic: "Hedging & Softening Language",
    level: "advanced",
    title: "Hedging & Softening Language",
    unit: 0,
    sortOrder: 8,
    data: {
      title: {
        bn: "Hedging ও Softening: ইংরেজির নরম সুর",
        en: "Hedging & Softening: the gentle voice of English",
        hi: "Hedging और Softening: अंग्रेज़ी का नरम सुर",
      },
      intro: {
        bn: "Learning Path-এর advanced স্তরের এই পাঠ (Unit 0 — বাড়তি গভীর-অনুশীলন)। শুরু করার আগে intermediate স্তরের Modal Verbs ও Reported Speech পাঠগুলো শেষ করে নিন — may/might/could-এর ভদ্র ব্যবহার ঠিক modal-এর জ্ঞানের উপরেই দাঁড়িয়ে আছে। Hedging মানে নিজের দাবিকে নরম করে বলা ('এটা প্রমাণিত' নয়, 'এটা সম্ভবত সত্য হতে পারে'), আর softening মানে সমালোচনা ও অনুরোধকে নরম সুরে পরিবেশন করা। বাংলা সংস্কৃতিতে ঘনিষ্ঠতায় সরাসরি বলা স্বাভাবিক — 'তুমি ভুল করেছ', 'ফাইলটা পাঠাও' — কিন্তু ইংরেজি professional ও academic জগতে সরাসরি বাক্য রুক্ষ, এমনকি অভদ্র শোনায়, কারণ ইংরেজির ভদ্রতা শব্দের ভেতরে সিলগাল করা থাকে। এই পাঠে শিখব: may/might/could দিয়ে সতর্ক দাবি, tend to/appear to/it is likely that জাতীয় কৌশল, perhaps you could / I was wondering if জাতীয় ভদ্র ফ্রেম, আর রুক্ষ ইমেইল ধরে ধরে নরম করার অনুশীলন।",
        en: "This is an advanced-level lesson on the Learning Path (Unit 0 — extra deep practice). Before starting, finish the intermediate lessons on Modal Verbs and Reported Speech — the polite use of may/might/could stands exactly on that modal knowledge. Hedging means stating your claim softly (not 'this proves it' but 'this may well be true'), and softening means delivering criticism and requests in a gentle register. Bengali culture is comfortable with directness among close people — 'তুমি ভুল করেছ', 'ফাইলটা পাঠাও' — but in English professional and academic spaces a bare direct sentence sounds blunt, even rude, because English politeness is sealed inside the words themselves. In this lesson you will learn: cautious claims with may/might/could, devices such as tend to/appear to/it is likely that, polite frames such as perhaps you could / I was wondering if, and hands-on repair of blunt emails.",
        hi: "Learning Path का यह एडवांस्ड पाठ है (Unit 0 — अतिरिक्त गहन अभ्यास)। शुरू करने से पहले intermediate स्तर के Modal Verbs और Reported Speech पाठ पूरे कर लें — may/might/could का विनम्र उपयोग ठीक उसी modal-ज्ञान पर खड़ा है। Hedging यानी अपने दावे को नरम करके कहना ('यह सिद्ध है' नहीं, 'यह संभवतः सही हो सकता है'), और softening यानी आलोचना व अनुरोध को नरम सुर में पेश करना। हिंदी-बांग्ला संस्कृति में घनिष्ठता में सीधी बात स्वाभाविक है — 'तुम गलत हो', 'फ़ाइल भेजो' — पर अंग्रेज़ी के professional और academic दौर में सीधा वाक्य रूखा, यहाँ तक कि अभद्र लगता है, क्योंकि अंग्रेज़ी की विनम्रता शब्दों के भीतर सीलबंद रहती है। इस पाठ में सीखेंगे: may/might/could से सतर्क दावे, tend to/appear to/it is likely that जैसे यंत्र, perhaps you could / I was wondering if जैसे विनम्र ढाँचे, और रूखे ईमेल को एक-एक कर नरम करने का अभ्यास।",
      },
      roadmap: [
        { bn: "🤝 কেন নরম করা লাগে — ইংরেজি ভদ্রতা বাস করে শব্দের ভেতরে", en: "🤝 Why softening matters — English politeness lives inside the words", hi: "🤝 नरम करना क्यों ज़रूरी — अंग्रेज़ी विनम्रता शब्दों के भीतर बसती है" },
        { bn: "🏗️ softening-এর আটটা প্যাটার্ন এক টেবিলে", en: "🏗️ Eight softening patterns in one table", hi: "🏗️ softening के आठ पैटर्न एक टेबिल में" },
        { bn: "🚦 hedging devices চেনা — modal, adverb, verb, frame, quantifier", en: "🚦 Spotting hedging devices — modals, adverbs, verbs, frames, quantifiers", hi: "🚦 hedging devices पहचानना — modal, adverb, verb, frame, quantifier" },
        { bn: "📊 সতর্ক দাবি — নিশ্চয়তার সিঁড়ি: will থেকে could", en: "📊 Cautious claims — the certainty ladder: will down to could", hi: "📊 सतर्क दावे — निश्चयता की सीढ़ी: will से could" },
        { bn: "🧯 সমালোচনা-অনুরোধ নরম করার তিন-ধাপ সূত্র", en: "🧯 The three-step recipe for softening criticism and requests", hi: "🧯 आलोचना-अनुरोध नरम करने की तीन-चरण विधि" },
        { bn: "✉️ রুক্ষ ইমেইল শিকার করে নরম করা + 'isn't it' ফাঁদ", en: "✉️ Hunting blunt emails and softening them + the 'isn't it' trap", hi: "✉️ रूखे ईमेल का शिकार कर नरम करना + 'isn't it' जाल" },
        { bn: "⚠️ Advanced ভুল — mind + V-ing, backshift, maybe/may be", en: "⚠️ Advanced slips — mind + V-ing, backshift, maybe vs may be", hi: "⚠️ एडवांस्ड चूक — mind + V-ing, backshift, maybe/may be" },
        { bn: "📖 একটা নমুনা ইমেইলে সব প্যাটার্ন একসঙ্গে", en: "📖 One sample email where every pattern works together", hi: "📖 एक नमूना ईमेल में सारे पैटर्न एक साथ" },
        { bn: "🧠 পুরো পাঠ এক নজরে + নিজের ইমেইল নরম করার অনুশীলন", en: "🧠 The lesson at a glance + softening your own email", hi: "🧠 पूरा पाठ एक नज़र में + अपना ईमेल नरम करने का अभ्यास" },
      ],
      sections: [
        {
          heading: {
            bn: "🤝 কখন ব্যবহার হয় — নরম করা কেন দরকার",
            en: "🤝 When to use it — why softening matters",
            hi: "🤝 कब उपयोग होता है — नरम करना क्यों ज़रूरी है",
          },
          lead: {
            bn: "ইংরেজি ভদ্রতা শব্দের ভেতরে সিলগাল থাকে — তাই নরম করা বাধ্যতামূলক।",
            en: "English politeness is sealed inside the words — so softening is compulsory.",
            hi: "अंग्रेज़ी विनम्रता शब्दों के भीतर सीलबंद रहती है — इसलिए नरम करना अनिवार्य।",
          },
          points: [
            { bn: "বাংলা সংস্কৃতিতে ভদ্রতা থাকে সুরে, সম্পর্কে, 'একটু', 'প্লিজ', 'কিছু মনে করবেন না' জাতীয় শব্দে — বাক্যের মূল কাঠামো সরাসরি থাকে।", en: "In Bengali culture politeness lives in tone, relationships and little words — 'একটু', 'প্লিজ', 'কিছু মনে করবেন না' — while the core sentence stays direct.", hi: "हिंदी-बांग्ला संस्कृति में विनम्रता सुर, रिश्ते और 'एक बार', 'प्लीज़', 'किसी बात का अपमान न करें' जैसे शब्दों में रहती है — मूल वाक्य सीधा रहता है।" },
            { bn: "ইংরেজি professional জগতে সেই কাজটা করে বাক্যের ভেতরের শব্দ: You might be right..., Could you possibly send...।", en: "In English professional life that job is done by the words inside the sentence: You might be right..., Could you possibly send...", hi: "अंग्रेज़ी के professional संसार में वही काम वाक्य के भीतर के शब्द करते हैं: You might be right..., Could you possibly send..." },
            { bn: "লিখিত ইংরেজিতে tone পড়া যায় না, শুধু শব্দ পড়া যায় — তাই শব্দেই ভদ্রতা সিলগাল করা থাকে।", en: "Written English carries no tone, only words — so the politeness must be sealed inside the words.", hi: "लिखित अंग्रेज़ी में tone पढ़ा नहीं जाता, सिर्फ़ शब्द पढ़े जाते हैं — इसलिए विनम्रता शब्दों में ही सीलबंद होनी चाहिए।" },
            { bn: "বাংলার সরাসরি ভঙ্গি হুবহু ইংরেজিতে এলে পাঠকের কাছে বক্তা রুক্ষ, আত্মমগর্থ বা আদেশ-দাতা শোনায় — অথচ বক্তার অভিপ্রায় এত কড়া ছিল না।", en: "A word-for-word Bengali directness sounds blunt, arrogant or bossy to the reader — although the speaker's intention was never that harsh.", hi: "हिंदी-बांग्ला की सीधी शैली शब्दशः अंग्रेज़ी में आए तो पाठक के पास बोलने वाला रूखा, अहंकारी या आदेश-दाता लगता है — हालाँकि उसका आशय इतना कठोर नहीं था।" },
            { bn: "চার জায়গায় নরম সুর বাধ্যতামূলক — প্রথমত **সতর্ক দাবি**: প্রবন্ধ, রিপোর্ট, উপস্থাপনায় নিজের কথাকে অতিরঞ্জিত না করা।", en: "Four places make the gentle register compulsory — first **cautious claims**: not overstating your case in essays, reports and presentations.", hi: "चार जगहों पर नरम सुर अनिवार्य — पहला **सतर्क दावा**: निबंध, रिपोर्ट, प्रेज़ेंटेशन में अपनी बात को अतिरंजित न करना।" },
            { bn: "**সমালোচনা নরম করা** — সহকর্মী বা জুনিয়রের কাজে দোষ ধরা; অনুরোধ ও প্রশ্ন — বিশেষত সিনিয়র, ক্লায়েন্ট বা অচেনা মানুষের সঙ্গে।", en: "**Softening criticism** — pointing out problems in a colleague's or junior's work; requests and questions — especially with seniors, clients or strangers.", hi: "**आलोचना नरम करना** — सहकर्मी या जूनियर के काम में कमी पकड़ना; अनुरोध और प्रश्न — ख़ासकर सीनियर, क्लाइंट या अनजान लोगों के साथ।" },
            { bn: "**বিরোধ এড়ানো** — না-বোধক উত্তরও নরম করে বলা।", en: "**Avoiding conflict** — even a refusal should be delivered softly.", hi: "**विवाद टालना** — 'ना' भी नरम सुर में कहें।" },
            { bn: "সাবধান: অতিরিক্ত hedging (maybe + possibly + just + sorry...) বক্তাকে অনিশ্চিত ও নিরীহ শোনায় — সুর নরম রাখুন, অথচ নিজের কথার ওজন রাখুন।", en: "Caution: over-hedging (maybe + possibly + just + sorry...) makes the speaker sound unsure and weak — keep the melody soft but keep the weight of your point.", hi: "सावधान: अतिरिक्त hedging (maybe + possibly + just + sorry...) बोलने वाले को अनिश्चित और निरीह दिखाता है — सुर नरम रखें, पर बात का वज़न भी रखें।" },
          ],
          examples: [
            {
              wrong: "You made three mistakes in this report.",
              right: "There seem to be a few slips in this report — could we go over them together?",
              note: {
                bn: "দোষটা মানুষের উপর না বসিয়ে কাজের উপর বসান — there seem to be + নরম শব্দ; সঙ্গে যৌথ প্রশ্ন সমালোচনাকে সহযোগিতায় বদলে দেয়।",
                en: "Park the fault on the work, not the person — there seem to be + soft words; the joint question turns criticism into collaboration.",
                hi: "दोष व्यक्ति पर नहीं, काम पर रखें — there seem to be + नरम शब्द; साथ का साझा प्रश्न आलोचना को सहयोग बना देता है।",
              },
            },
            {
              wrong: "Send me the file today.",
              right: "Could you send me the file by today, by any chance?",
              note: {
                bn: "bare imperative ইমেইলে আদেশ শোনায়; could you + by any chance অনুরোধকে প্রশ্নে বদলে দেয় — মানুষ আদেশ মানে, প্রশ্ন আগে মানে।",
                en: "A bare imperative reads as an order in email; could you + by any chance turns the demand into a question — people obey orders, but answer questions first.",
                hi: "खाली imperative ईमेल में आदेश लगता है; could you + by any chance माँग को प्रश्न बना देता है — लोग आदेश निभाते हैं, पर पहले प्रश्न का जवाब देते हैं।",
              },
            },
            {
              wrong: "This study proves that mobile use lowers exam marks.",
              right: "This study suggests that mobile use may affect exam marks.",
              note: {
                bn: "prove + lowers = দাবির ঢাল সর্বোচ্চ উঁচু; suggest + may ব্যবহার করলে দাবিটা প্রমাণের ভিত্তিতে দাঁড়ায়, আক্রমণের জায়গা বন্ধ হয়।",
                en: "prove + lowers pushes the claim to its loudest; suggest + may grounds the claim in evidence and shuts down easy attacks.",
                hi: "prove + lowers दावे को सबसे तेज़ कर देता है; suggest + may दावे को सबूत पर टिकाता है और आसान आक्रमण बंद कर देता है।",
              },
            },
            {
              wrong: "I want leave on Friday.",
              right: "I was wondering if I could take Friday off.",
              note: {
                bn: "want = সরাসরি দাবি; I was wondering if I could = ইংরেজির ক্লাসিক নরম অনুরোধ-ফ্রেম — ছুটির মতো ব্যক্তিগত বিষয়ে এটাই প্রত্যাশিত সুর।",
                en: "want is a flat demand; I was wondering if I could is English's classic soft request frame — exactly the expected melody for something personal like leave.",
                hi: "want एक चपटी माँग है; I was wondering if I could अंग्रेज़ी का क्लासिक नरम-अनुरोध ढाँचा है — छुट्टी जैसे निजी विषय में यही अपेक्षित सुर है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🏗️ গঠন — softening-এর আটটা প্যাটার্ন এক নজরে",
            en: "🏗️ Formation — eight softening patterns at a glance",
            hi: "🏗️ गठन — softening के आठ पैटर्न एक नज़र में",
          },
          lead: {
            bn: "এক টেবিলে আটটা প্যাটার্ন — প্রতি সারিতে আগে প্যাটার্ন, তারপর উদাহরণ।",
            en: "Eight patterns in one table — each row gives the pattern first, then an example.",
            hi: "एक टेबिल में आठ पैटर्न — हर पंक्ति में पहले पैटर्न, फिर उदाहरण।",
          },
          points: [
            { bn: "টেবিলের প্রতিটা সারিতে আগে প্যাটার্ন, তারপর উদাহরণ — প্রসার-টেবিলের মতো পড়ুন।", en: "Each row of the table gives the pattern first, then an example — read it like a prose table.", hi: "तालिका की हर पंक्ति में पहले पैटर्न, फिर उदाहरण — गद्य-तालिका जैसा पढ़ें।" },
            { bn: "নিয়ম একটাই — **কঠিন শব্দ খুঁজে বের করুন**: must, wrong, bad, prove, everyone, always।", en: "One rule ties it all — **hunt the hard words**: must, wrong, bad, prove, everyone, always.", hi: "नियम एक ही है — **कठोर शब्द पकड़ें**: must, wrong, bad, prove, everyone, always।" },
            { bn: "তারপর তার **নরম প্রতিবেশী বসান**: might, seems, unclear, suggests, many, often।", en: "Then **seat their soft neighbours**: might, seems, unclear, suggests, many, often.", hi: "फिर उनके **नरम पड़ोसी बिठाएँ**: might, seems, unclear, suggests, many, often।" },
            { bn: "এক বাক্যে এক-দুটো নরমকারী যথেষ্ট — তিন-চারটা জমে গেলে বক্তা নিজেই অনিশ্চিত শোনায়।", en: "One or two softeners per sentence is enough — three or four piled up make the speaker sound unsure.", hi: "एक वाक्य में एक-दो softener काफ़ी — तीन-चार जमा हो जाएँ तो बोलने वाला ही अनिश्चित लगने लगता है।" },
          ],
          formula: {
            bn: "কঠিন শব্দ খুঁজুন → নরম প্রতিবেশী বসান: prove → suggests, everyone → many",
            en: "Hunt the hard word → seat its soft neighbour: prove → suggests, everyone → many",
            hi: "कठोर शब्द पकड़ें → नरम पड़ोसी बिठाएँ: prove → suggests, everyone → many",
          },
          table: {
            head: [
              { bn: "প্যাটার্ন", en: "Pattern", hi: "पैटर्न" },
              { bn: "নমুনা", en: "Example", hi: "नमूना" },
            ],
            rows: [
              [
                { bn: "সতর্ক modal: Subject + may/might/could + V1", en: "Cautious modal: Subject + may/might/could + V1", hi: "सतर्क modal: Subject + may/might/could + V1" },
                { bn: "The delay might affect delivery.", en: "The delay might affect delivery.", hi: "The delay might affect delivery." },
              ],
              [
                { bn: "প্রবণতা/ছাপ verb: tend to / appear to / seem to", en: "Tendency/impression verbs: tend to / appear to / seem to", hi: "प्रवृत्ति/छाप verbs: tend to / appear to / seem to" },
                { bn: "Prices tend to spike before Eid.", en: "Prices tend to spike before Eid.", hi: "Prices tend to spike before Eid." },
              ],
              [
                { bn: "ফ্রেম-দাবি: It is likely/possible that ...", en: "Framed claim: It is likely/possible that ...", hi: "ढाँचा-दावा: It is likely/possible that ..." },
                { bn: "It is likely that the launch slips a week.", en: "It is likely that the launch slips a week.", hi: "It is likely that the launch slips a week." },
              ],
              [
                { bn: "নরম ক্রিয়াবিশেষণ: perhaps, possibly, arguably, somewhat, slightly", en: "Soft adverbs: perhaps, possibly, arguably, somewhat, slightly", hi: "नरम क्रियाविशेषण: perhaps, possibly, arguably, somewhat, slightly" },
                { bn: "The results are somewhat inconclusive.", en: "The results are somewhat inconclusive.", hi: "The results are somewhat inconclusive." },
              ],
              [
                { bn: "Negative question-পরামর্শ: Wouldn't it be better to...? / Shouldn't we...?", en: "Negative-question advice: Wouldn't it be better to...? / Shouldn't we...?", hi: "Negative question-सलाह: Wouldn't it be better to...? / Shouldn't we...?" },
                { bn: "Wouldn't it be better to wait?", en: "Wouldn't it be better to wait?", hi: "Wouldn't it be better to wait?" },
              ],
              [
                { bn: "অনুরোধ-ফ্রেম: Could you possibly...? / Would you mind -ing...? / I was wondering if you could...", en: "Request frames: Could you possibly...? / Would you mind -ing...? / I was wondering if you could...", hi: "अनुरोध-ढाँचे: Could you possibly...? / Would you mind -ing...? / I was wondering if you could..." },
                { bn: "Could you possibly send the file?", en: "Could you possibly send the file?", hi: "Could you possibly send the file?" },
              ],
              [
                { bn: "সমালোচনা-নরমকারী: a bit, a little, rather, just", en: "Criticism softeners: a bit, a little, rather, just", hi: "आलोचना-नरमकर्ता: a bit, a little, rather, just" },
                { bn: "This section is a bit unclear.", en: "This section is a bit unclear.", hi: "This section is a bit unclear." },
              ],
              [
                { bn: "দূরত্ব-দেওয়া passive: Mistakes were made. / It was felt that...", en: "Distancing passive: Mistakes were made. / It was felt that...", hi: "दूरी-देने वाला passive: Mistakes were made. / It was felt that..." },
                { bn: "It was felt that the timeline was tight.", en: "It was felt that the timeline was tight.", hi: "It was felt that the timeline was tight." },
              ],
            ],
          },
          examples: [
            {
              wrong: "Everyone will love the new design.",
              right: "Most users may well like the new design.",
              note: {
                bn: "everyone + will = অতিরঞ্জিত দাবি; most + may well জনতার মতামতের জায়গায় সতর্ক অনুমান বসায়।",
                en: "everyone + will is an inflated claim; most + may well seats a cautious estimate where the crowd's verdict belongs.",
                hi: "everyone + will अतिरंजित दावा है; most + may well जनता के फ़ैसले की जगह सतर्क अनुमान बिठा देता है।",
              },
            },
            {
              wrong: "Your code is wrong.",
              right: "Your code seems to have an issue in the loop.",
              note: {
                bn: "is wrong = সরাসরি রায়; seems to have an issue = ছাপ, যাচাইয়ের জায়গা রেখে দেয় — প্রোগ্রামারের মর্যাদাও বেঁচে যায়।",
                en: "is wrong is a flat verdict; seems to have an issue is an impression that leaves room for checking — and the programmer's dignity survives too.",
                hi: "is wrong सीधा फ़ैसला है; seems to have an issue छाप है, जाँच की जगह छोड़ देता है — और प्रोग्रामर की मर्यादा भी बच जाती है।",
              },
            },
            {
              wrong: "Do this section again.",
              right: "Perhaps you could do this section once more?",
              note: {
                bn: "আদেশ → perhaps you could...? প্রশ্ন; কাজটা একই থাকে, সুরটা বদলে যায়।",
                en: "Order → perhaps you could...? question; the task stays the same, only the melody changes.",
                hi: "आदेश → perhaps you could...? प्रश्न; काम वही रहता है, सुर बदल जाता है।",
              },
            },
            {
              wrong: "It is certain that everyone agrees with the new policy.",
              right: "It is likely that most people agree with the new policy.",
              note: {
                bn: "certain + everyone দুইটা কঠিন শব্দ একসঙ্গে; likely + most এক ধাপ পিছিয়ে গিয়ে দাবিটা রক্ষণীয় করে।",
                en: "certain + everyone stacks two hard words; likely + most steps one pace back and makes the claim defensible.",
                hi: "certain + everyone दो कठोर शब्द एक साथ; likely + most एक क़दम पीछे हटकर दावे को टिकाऊ बनाता है।",
              },
            },
            {
              wrong: "Why you did not reply to my email?",
              right: "Just checking in case my email got buried — could you take a look when you can?",
              note: {
                bn: "অভিযোগ-সুর → নিজেকে দোষ দেওয়া নরম ছলনা (ইমেইলটা হয়তো চাপা পড়ে গেছে) + could you; একই অনুরোধ, বিনা বাক্যবিচ্ছেদে।",
                en: "Accusatory tone → the self-blaming soft trick (perhaps my email got buried) + could you; the same request, without a confrontation.",
                hi: "दोषारोप-सुर → आत्मदोष की नरम चाल (शायद मेल दब गया) + could you; वही अनुरोध, टकराव के बिना।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🚦 আভাস ও প্যাটার্ন — কোন শব্দ নরম সুর বোঝায়",
            en: "🚦 Signals — which words mark the gentle voice",
            hi: "🚦 संकेत — कौन-से शब्द नरम सुर दर्शाते हैं",
          },
          lead: {
            bn: "এই শব্দগুলো চোখে পড়লেই বুঝবেন লেখক দাবি নরম করছেন।",
            en: "Spot these words and you know the writer is hedging a claim.",
            hi: "ये शब्द दिखें तो समझें लेखक दावा नरम कर रहा है।",
          },
          points: [
            { bn: "পড়ার সময় এই শব্দগুলো চোখে পড়লেই বুঝবেন লেখক দাবি নরম করছেন — শ্রেণি-ভাগ নিচের টেবিলে।", en: "While reading, these words tell you the writer is hedging — the classes are in the table below.", hi: "पढ़ते समय ये शब्द दिखें तो समझें लेखक दावा नरम कर रहा है — श्रेणियाँ नीचे की तालिका में।" },
            { bn: "প্রবন্ধের ভাষায় এদের বলে **hedging devices** — academic journal-এর প্রতিটা অনুচ্ছেদে এরা ছড়িয়ে থাকে।", en: "In essay language these are called **hedging devices** — scattered through every paragraph of an academic journal.", hi: "निबंध-भाषा में इन्हें **hedging devices** कहते हैं — academic journal के हर अनुच्छेद में ये बिखरे रहते हैं।" },
            { bn: "লেখার সময় জায়গা ১ — **ইমেইলের অনুরোধ**: Could you possibly...?, Would you mind...?, I was wondering if..., When you get a moment...।", en: "While writing, place one — **email requests**: Could you possibly...?, Would you mind...?, I was wondering if..., When you get a moment...", hi: "लिखते समय जगह १ — **ईमेल-अनुरोध**: Could you possibly...?, Would you mind...?, I was wondering if..., When you get a moment..." },
            { bn: "জায়গা ২ — **প্রবন্ধের দাবি**: prove, always, everyone, all-এর জায়গায় suggest, often, many, tend to।", en: "Place two — **essay claims**: suggest, often, many, tend to in place of prove, always, everyone, all.", hi: "जगह २ — **निबंध के दावे**: prove, always, everyone, all की जगह suggest, often, many, tend to।" },
            { bn: "উল্টো অভ্যাসও দিন — নিজের পুরোনো লেখায় কঠিন শব্দ শিকার করুন: prove পেলে suggest, everyone পেলে many।", en: "Build the reverse habit too — raid your own old drafts for hard words: find prove, write suggest; find everyone, write many.", hi: "उल्टी आदत भी बनाएँ — अपने पुराने ड्राफ़्ट में कठोर शब्द का शिकार करें: prove मिले तो suggest, everyone मिले तो many।" },
            { bn: "এভাবেই softening-এর মাংসপেশি তৈরি হয়।", en: "That is how the softening muscle grows.", hi: "इसी से softening की माँसपेशी बनती है।" },
          ],
          table: {
            head: [
              { bn: "শ্রেণি", en: "Class", hi: "श्रेणी" },
              { bn: "শব্দ", en: "Words", hi: "शब्द" },
            ],
            rows: [
              [
                { bn: "Modal (সতর্কতা)", en: "Modal (caution)", hi: "Modal (सावधानी)" },
                { bn: "may, might, could", en: "may, might, could", hi: "may, might, could" },
              ],
              [
                { bn: "ক্রিয়াবিশেষণ", en: "Adverbs", hi: "क्रियाविशेषण" },
                { bn: "perhaps, possibly, probably, apparently, arguably, somewhat, slightly, relatively", en: "perhaps, possibly, probably, apparently, arguably, somewhat, slightly, relatively", hi: "perhaps, possibly, probably, apparently, arguably, somewhat, slightly, relatively" },
              ],
              [
                { bn: "Verb", en: "Verbs", hi: "Verb" },
                { bn: "seem, appear, tend to, suggest, indicate", en: "seem, appear, tend to, suggest, indicate", hi: "seem, appear, tend to, suggest, indicate" },
              ],
              [
                { bn: "ফ্রেম", en: "Frames", hi: "ढाँचे" },
                { bn: "it is likely that..., it would appear that..., there is some evidence that...", en: "it is likely that..., it would appear that..., there is some evidence that...", hi: "it is likely that..., it would appear that..., there is some evidence that..." },
              ],
              [
                { bn: "Quantifier", en: "Quantifiers", hi: "Quantifier" },
                { bn: "many, most, some, a number of, often, in many cases", en: "many, most, some, a number of, often, in many cases", hi: "many, most, some, a number of, often, in many cases" },
              ],
            ],
          },
          examples: [
            {
              wrong: "This study proves the theory beyond doubt.",
              right: "This study suggests that the theory may hold.",
              note: {
                bn: "proves + beyond doubt = দ্বৈত কঠিনতা; suggests + may গবেষণার ভাষার আদর্শ জোড়া।",
                en: "proves + beyond doubt doubles the hardness; suggests + may is the standard research-English pairing.",
                hi: "proves + beyond doubt दोहरी कठोरता है; suggests + may शोध-अंग्रेज़ी की मानक जोड़ी है।",
              },
            },
            {
              wrong: "All students fail this grammar section.",
              right: "Many students tend to find this grammar section difficult.",
              note: {
                bn: "all + fail = সর্বজনীন রায়; many + tend to = পর্যবেক্ষিত প্রবণতা — প্রবন্ধে এটাই লেখককে রক্ষা করে।",
                en: "all + fail is a universal verdict; many + tend to is an observed tendency — in essays it is what protects the writer.",
                hi: "all + fail सार्वभौमिक फ़ैसला है; many + tend to देखी हुई प्रवृत्ति — निबंध में यही लेखक की रक्षा करता है।",
              },
            },
            {
              wrong: "Attend the meeting tomorrow. (email to a senior colleague)",
              right: "Could you possibly attend the meeting tomorrow?",
              note: {
                bn: "সিনিয়রের কাছে bare imperative = চাকরি-ঝুঁকি; could you possibly একই কথা অনুরোধে বদলে দেয়।",
                en: "A bare imperative to a senior is career-risky; could you possibly converts the same words into a request.",
                hi: "सीनियर को खाली imperative = करियर-जोखिम; could you possibly वही बात अनुरोध बना देता है।",
              },
            },
            {
              wrong: "It is obvious that the policy has failed completely.",
              right: "It would appear that the policy has not quite worked.",
              note: {
                bn: "obvious + failed completely = রায়ের হাতুড়ি; it would appear that + not quite = দূরত্ব, সংশয়ের জায়গা রেখে দেয়।",
                en: "obvious + failed completely is a verdict hammer; it would appear that + not quite keeps distance and leaves room for doubt.",
                hi: "obvious + failed completely फ़ैसले का हथौड़ा है; it would appear that + not quite दूरी रखता है और संदेह की जगह छोड़ देता है।",
              },
            },
            {
              wrong: "Your presentation was bad.",
              right: "A few parts of your presentation felt a little rushed.",
              note: {
                bn: "bad = মানুষটার উপর রায়; a few parts + a little rushed = নির্দিষ্ট, ঠিক-করা-সম্ভব পর্যবেক্ষণ।",
                en: "bad is a verdict on the person; a few parts + a little rushed is a specific, fixable observation.",
                hi: "bad व्यक्ति पर फ़ैसला है; a few parts + a little rushed ठोस, ठीक-हो-सकने वाला पर्यवेक्षण है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📊 সতর্ক দাবি — may/might/could, tend to, appear to, it is likely that",
            en: "📊 Cautious claims — may/might/could, tend to, appear to, it is likely that",
            hi: "📊 सतर्क दावे — may/might/could, tend to, appear to, it is likely that",
          },
          lead: {
            bn: "প্রবন্ধ-রিপোর্টে অতিরঞ্জিত দাবি পাঠককে আক্রমণের জায়গা দেয় — সিঁড়ি ধরে নামুন।",
            en: "An inflated claim hands readers an easy target — step down the ladder.",
            hi: "निबंध-रिपोर्ट में अतिरंजित दावा पाठक को निशाना देता है — सीढ़ी से उतरें।",
          },
          points: [
            { bn: "প্রবন্ধ, রিসার্চ রিপোর্ট বা IELTS Writing Task 2-তে দাবি অতিরঞ্জিত হলে পরীক্ষক/পাঠক আক্রমণ করার জায়গা পেয়ে যান।", en: "In essays, research reports or IELTS Writing Task 2, an inflated claim hands the examiner/reader an easy target.", hi: "निबंध, शोध-रिपोर्ट या IELTS Writing Task 2 में दावा अतिरंजित हुआ तो परीक्षक/पाठक को आसान निशाना मिल जाता है।" },
            { bn: "**Hedged claim** বুঝিয়ে দেয় লেখক সাবধানে, প্রমাণের ভিত্তিতে কথা বলছেন।", en: "**A hedged claim** signals that the writer is careful and speaking from evidence.", hi: "**Hedged claim** बता देता है कि लेखक सावधानी से, सबूत के आधार पर बोल रहा है।" },
            { bn: "নিশ্চয়তার সিঁড়ি মনে রাখুন: will > is likely to > may > might > could — পুরো সিঁড়িটা নিচের টেবিলে।", en: "Memorise the certainty ladder: will > is likely to > may > might > could — the full ladder is in the table below.", hi: "निश्चयता की सीढ़ी याद रखें: will > is likely to > may > might > could — पूरी सीढ़ी नीचे की तालिका में।" },
            { bn: "প্রমাণ যত কড়া, সিঁড়ি তত উপরে; প্রমাণ নরম হলে নিচে নামুন।", en: "The harder the evidence, the higher you climb; the softer the evidence, the further you step down.", hi: "सबूत जितना कठोर, सीढ़ी उतनी ऊँची; सबूत नरम हो तो नीचे उतर जाएँ।" },
            { bn: "**tend to** — সাধারণ প্রবণতা: Prices tend to spike before Eid; appear to / seem to — প্রমাণ থেকে পাওয়া ছাপ: The scheme appears to be working।", en: "**tend to** — a general tendency: Prices tend to spike before Eid; appear to / seem to — an impression from evidence: The scheme appears to be working.", hi: "**tend to** — सामान्य प्रवृत्ति: Prices tend to spike before Eid; appear to / seem to — सबूत से मिली छाप: The scheme appears to be working।" },
            { bn: "**It is likely that...** সম্ভাবনার ফ্রেম; quantifier দিয়েও নরম হয়: All students fail ✗ → Many students tend to struggle।", en: "**It is likely that...** is the probability frame; quantifiers soften too: All students fail ✗ → Many students tend to struggle.", hi: "**It is likely that...** संभावना का ढाँचा है; quantifier से भी नरम होता है: All students fail ✗ → Many students tend to struggle।" },
            { bn: "prove-এর জায়গায় **suggest/indicate**: This proves that X ✗ → This suggests that X may...।", en: "In place of prove use **suggest/indicate**: This proves that X ✗ → This suggests that X may...", hi: "prove की जगह **suggest/indicate**: This proves that X ✗ → This suggests that X may..." },
            { bn: "মনে রাখবেন — গবেষণার ভাষায় 'প্রমাণ' শব্দটাই বিরল; 'সমর্থন করে' (supports) আর 'ইঙ্গিত দেয়' (suggests) শব্দ দুটোই সাধারণ।", en: "Remember — in research language the word 'prove' itself is rare; 'supports' and 'suggests' are the common citizens.", hi: "याद रखें — शोध-भाषा में 'prove' शब्द ही दुर्लभ है; 'supports' और 'suggests' आम नागरिक हैं।" },
          ],
          formula: {
            bn: "মজবুত → নরম: will > is likely to > may > might > could",
            en: "Strong → soft: will > is likely to > may > might > could",
            hi: "मज़बूत → नरम: will > is likely to > may > might > could",
          },
          table: {
            head: [
              { bn: "ধাপ (মজবুত → নরম)", en: "Step (strong → soft)", hi: "पाया (मज़बूत → नरम)" },
              { bn: "নমুনা", en: "Example", hi: "नमूना" },
            ],
            rows: [
              [
                { bn: "will — সবচেয়ে কড়া", en: "will — the hardest", hi: "will — सबसे कठोर" },
                { bn: "The policy will reduce accidents.", en: "The policy will reduce accidents.", hi: "The policy will reduce accidents." },
              ],
              [
                { bn: "is likely to", en: "is likely to", hi: "is likely to" },
                { bn: "The policy is likely to reduce accidents.", en: "The policy is likely to reduce accidents.", hi: "The policy is likely to reduce accidents." },
              ],
              [
                { bn: "may", en: "may", hi: "may" },
                { bn: "The policy may reduce accidents.", en: "The policy may reduce accidents.", hi: "The policy may reduce accidents." },
              ],
              [
                { bn: "might", en: "might", hi: "might" },
                { bn: "The policy might reduce accidents.", en: "The policy might reduce accidents.", hi: "The policy might reduce accidents." },
              ],
              [
                { bn: "could — সবচেয়ে নরম", en: "could — the softest", hi: "could — सबसे नरम" },
                { bn: "The policy could reduce accidents.", en: "The policy could reduce accidents.", hi: "The policy could reduce accidents." },
              ],
            ],
          },
          examples: [
            {
              wrong: "The experiment proves that the drug works for all patients.",
              right: "The experiment suggests that the drug may be effective for many patients.",
              note: {
                bn: "proves + all = দ্বৈত অতিরঞ্জন; suggests + may + many — তিন স্তরের hedging গবেষণা-ভাষার প্রকৃত রং।",
                en: "proves + all is a double exaggeration; suggests + may + many — three layers of hedging are the true colour of research English.",
                hi: "proves + all दोहरा अतिरंजन है; suggests + may + many — hedging की तीन परतें शोध-अंग्रेज़ी का असली रंग हैं।",
              },
            },
            {
              wrong: "Every student who uses a phone fails the exam.",
              right: "Students who use phones heavily tend to score lower.",
              note: {
                bn: "every + fails = সর্বনাশা সর্বনিয়ম; tend to score lower = পর্যবেক্ষিত প্রবণতা — পরিসংখ্যানের সঙ্গে মানানসই।",
                en: "every + fails is a fatal universal law; tend to score lower is an observed tendency — the match for statistics.",
                hi: "every + fails घातक सार्वत्रिक नियम है; tend to score lower देखी गई प्रवृत्ति — आँकड़ों के साथ मेल खाती है।",
              },
            },
            {
              wrong: "The data shows that inflation will definitely rise next quarter.",
              right: "The data suggest that inflation is likely to rise next quarter.",
              note: {
                bn: "definitely + will = ভবিষ্যদ্বাণী; is likely to = প্রমাণ-ভিত্তিক সম্ভাবনা — অর্থনীতির রিপোর্টে এটাই মান।",
                en: "definitely + will is prophecy; is likely to is evidence-based probability — the norm in economic reporting.",
                hi: "definitely + will भविष्यवाणी है; is likely to सबूत-आधारित संभावना — अर्थशास्त्र-रिपोर्ट का मानक है।",
              },
            },
            {
              wrong: "This clearly shows everyone prefers online classes.",
              right: "This seems to suggest that many students prefer online classes.",
              note: {
                bn: "clearly + everyone = দ্বৈত কঠিনতা; seems to suggest + many = দ্বৈত নরমতা — প্রবন্ধের দাবি এভাবেই নিরাপদ।",
                en: "clearly + everyone doubles the hardness; seems to suggest + many doubles the softness — this is how essay claims stay safe.",
                hi: "clearly + everyone दोहरी कठोरता; seems to suggest + many दोहरी नरमी — निबंध के दावे इसी तरह सुरक्षित रहते हैं।",
              },
            },
            {
              wrong: "The new policy will certainly reduce road accidents.",
              right: "The new policy could reduce road accidents.",
              note: {
                bn: "সিঁড়ির নিচের ধাপ মনে রাখুন — could = সবচেয়ে নরম; প্রমাণ এখনও প্রাথমিক হলে certainly নয়, could বসান।",
                en: "Recall the bottom of the ladder — could is the softest step; while evidence is still early, choose could, not certainly.",
                hi: "सीढ़ी का निचला पाया याद रखें — could सबसे नरम; सबूत अभी प्रारंभिक हो तो certainly नहीं, could लगाएँ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧯 সমালোচনা ও অনুরোধ নরম করা",
            en: "🧯 Softening criticism and requests",
            hi: "🧯 आलोचना और अनुरोध नरम करना",
          },
          lead: {
            bn: "সমালোচনার তিন-ধাপ সূত্র আর অনুরোধ-প্রত্যাখ্যানের সোনার ফ্রেম।",
            en: "The three-step criticism recipe and the golden frames for requests and refusals.",
            hi: "आलोचना की तीन-चरण विधि और अनुरोध-इनकार के सुनहरे ढाँचे।",
          },
          points: [
            { bn: "সমালোচনার রান্নার সূত্র তিন ধাপের — ধাপ ১: যেটা ঠিক আছে **স্বীকার করা**।", en: "The recipe for criticism has three steps — step one: **acknowledge what works**.", hi: "आलोचना की रसोई-विधि तीन चरण की है — चरण १: जो ठीक है **स्वीकार करना**।" },
            { bn: "ধাপ ২: নরম শব্দে সমস্যাটা বলা — a bit, slightly, seems, could be clearer।", en: "Step two: name the problem in soft words — a bit, slightly, seems, could be clearer.", hi: "चरण २: समस्या नरम शब्दों में कहना — a bit, slightly, seems, could be clearer।" },
            { bn: "ধাপ ৩: **নির্দিষ্ট, করা-সম্ভব পরামর্শ** দেওয়া।", en: "Step three: give **a specific, doable suggestion**.", hi: "चरण ३: **ठोस, करने-योग्य सुझाव** देना।" },
            { bn: "মুখস্থ ফ্রেম: Perhaps you could..., You might want to..., It might be worth -ing..., One thing that could be improved is..., I wonder whether we could...।", en: "Memorise the frames: Perhaps you could..., You might want to..., It might be worth -ing..., One thing that could be improved is..., I wonder whether we could....", hi: "ढाँचे रट लें: Perhaps you could..., You might want to..., It might be worth -ing..., One thing that could be improved is..., I wonder whether we could..." },
            { bn: "'ভুল' শব্দটা প্রায়ই দরকারই পড়ে না — This doesn't quite match the brief বললেই শোনা যায়; পাঠক সমস্যাটা ধরতে পারেন, অথচ মানুষটার মর্যাদা অটুট থাকে।", en: "Often the word 'wrong' is not even needed — This doesn't quite match the brief says it; the reader hears the problem while the person's dignity stays intact.", hi: "प्रायः 'wrong' शब्द की ज़रूरत ही नहीं पड़ती — This doesn't quite match the brief कह देना काफ़ी है; पाठक समस्या पकड़ लेता है, और व्यक्ति की मर्यादा भी अटूट रहती है।" },
            { bn: "অনুরোধের ফ্রেম: **Could you possibly...?** (সবচেয়ে প্রচলিত), Would you mind + V-ing...?, When you get a moment, could you...?।", en: "Request frames: **Could you possibly...?** (the most common), Would you mind + V-ing...?, When you get a moment, could you...?", hi: "अनुरोध के ढाँचे: **Could you possibly...?** (सबसे प्रचलित), Would you mind + V-ing...?, When you get a moment, could you...?" },
            { bn: "**I was wondering if you could...** — past continuous দূরত্ব আনে; এখনকার অনুরোধেও অতীত রূপ, এটাই ইংরেজি ভদ্রতার জাদু।", en: "**I was wondering if you could...** — the past continuous adds distance; a past form for a present request, which is exactly English politeness's magic.", hi: "**I was wondering if you could...** — past continuous दूरी जोड़ता है; वर्तमान अनुरोध के लिए भी अतीत-रूप, यही अंग्रेज़ी विनम्रता का जादू है।" },
            { bn: "প্রত্যাখ্যানও নরম করুন: No ✗ → I'm afraid I won't be able to take this on right now; খারাপ খবরেও I'm afraid খোলসটা আগে বসান।", en: "Soften refusals too: No ✗ → I'm afraid I won't be able to take this on right now; even for bad news, seat the I'm afraid shell first.", hi: "इनकार भी नरम करें: No ✗ → I'm afraid I won't be able to take this on right now; बुरी ख़बर में भी पहले I'm afraid का खोल बिठाएँ।" },
          ],
          formula: {
            bn: "সমালোচনা = ভালোটা স্বীকার → নরম সমস্যা (seems, a bit) → নির্দিষ্ট পরামর্শ",
            en: "Criticism = acknowledge the good → soft problem (seems, a bit) → specific suggestion",
            hi: "आलोचना = अच्छा स्वीकार → नरम समस्या (seems, a bit) → ठोस सुझाव",
          },
          examples: [
            {
              wrong: "Fix these errors immediately.",
              right: "There are a few errors here — perhaps you could take another look?",
              note: {
                bn: "আদেশ → সমস্যা-বর্ণনা + perhaps you could...? প্রশ্ন; একই কাজ, কিন্তু প্রাপক এখন অংশীদার, শাসিত নয়।",
                en: "Order → problem statement + perhaps you could...? question; the same task, but the reader is now a partner, not the ruled.",
                hi: "आदेश → समस्या-वर्णन + perhaps you could...? प्रश्न; वही काम, पर पाठक अब साझेदार है, अधीनस्थ नहीं।",
              },
            },
            {
              wrong: "You should rewrite the whole introduction.",
              right: "You might want to rework the introduction a little.",
              note: {
                bn: "should + whole = দ্বৈত কড়া নির্দেশ; might want to + a little ঠিক করার পরিমাণও ছোট করে দেয় — প্রাপকের বোঝা হালকা লাগে।",
                en: "should + whole doubles the command; might want to + a little even shrinks the fix — the burden feels light.",
                hi: "should + whole दोहरी कठोर आज्ञा; might want to + a little सुधार की मात्रा भी घटा देता है — पाठक का बोझ हल्का लगता है।",
              },
            },
            {
              wrong: "Give me two more days for the report.",
              right: "I was wondering if I could have two more days for the report.",
              note: {
                bn: "Give me = দাবি; I was wondering if I could = সবচেয়ে পরিচিত নরম-অনুরোধ — সময়-চাওয়ার আদর্শ সুর।",
                en: "Give me is a demand; I was wondering if I could is the most familiar soft request — the ideal melody for asking time.",
                hi: "Give me माँग है; I was wondering if I could सबसे परिचित नरम-अनुरोध — समय माँगने का आदर्श सुर।",
              },
            },
            {
              wrong: "This design looks ugly.",
              right: "The design could feel more modern in places.",
              note: {
                bn: "ugly = শিল্পীর উপর সরাসরি আঘাত; could feel more modern = উন্নতির দিশা, প্রশংসার সম্ভাবনা খোলা রাখে।",
                en: "ugly hits the designer directly; could feel more modern points a direction and leaves praise possible.",
                hi: "ugly डिज़ाइनर पर सीधा वार है; could feel more modern दिशा दिखाता है और प्रशंसा की गुंजाइश छोड़ देता है।",
              },
            },
            {
              wrong: "No, I will not do this task.",
              right: "I'm afraid I won't be able to take this task on right now.",
              note: {
                bn: "প্রত্যাখ্যানের আগে I'm afraid খোলস — ইংরেজিতে 'না'-ও নরম রাস্তায় যায়; সরাসরি No বক্তাকেই অভদ্র করে।",
                en: "Seat the I'm afraid shell before the refusal — in English even the 'no' takes the soft lane; a bare No makes the speaker the rude one.",
                hi: "इनकार से पहले I'm afraid का खोल बिठाएँ — अंग्रेज़ी में 'ना' भी नरम रास्ते से जाता है; खाली No बोलने वाले को ही अभद्र बना देता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "✉️ বাংলার সরাসরি ভঙ্গি বনাম ইংরেজির নরম সুর — রুক্ষ ইমেইল ঠিক করা",
            en: "✉️ Bengali directness vs English softening — repairing blunt emails",
            hi: "✉️ हिंदी-बांग्ला की सीधी शैली बनाम अंग्रेज़ी का नरम सुर — रूखे ईमेल की मरम्मत",
          },
          lead: {
            bn: "বাংলা অফিসে স্বাভাবিক বাক্য ইংরেজি ইমেইলে হিম-বাতাস — শিকার করে নরম করুন।",
            en: "Normal in a Bengali office, a cold blast in English email — hunt it and soften it.",
            hi: "हिंदी-बांग्ला दफ़्तर में सामान्य, अंग्रेज़ी ईमेल में ठंडी हवा — शिकार कर नरम करें।",
          },
          points: [
            { bn: "বাংলা অফিসে বস 'জমা দিন আজকেই' লিখলে সেটা স্বাভাবিক; সেই বাক্য ইংরেজিতে Submit it today হলে পড়ন্ত হিম-বাতাস মনে হয়।", en: "In a Bengali office, a boss writing 'জমা দিন আজকেই' is perfectly normal; the same sentence in English — Submit it today — lands like a blast of cold air.", hi: "हिंदी-बांग्ला दफ़्तर में बॉस 'आज ही जमा करें' लिखे तो सामान्य है; वही वाक्य अंग्रेज़ी में Submit it today हुआ तो ठंडी हवा जैसा लगता है।" },
            { bn: "বাংলায় ভদ্রতা = 'একটু', 'প্লিজ', নম-খাটো সম্বোধন (দাদা, আপু, স্যার); ইংরেজি ইমেইলে সেই কাজ করে শুধু বাক্যের ভেতরের শব্দ।", en: "Bengali politeness runs on 'একটু', 'প্লিজ', softened address terms (দাদা, আপু, স্যার); an English email does that job only with words inside the sentence.", hi: "हिंदी-बांग्ला विनम्रता 'ज़रा', 'प्लीज़', नम-छोटे संबोधन (भाई, दीदी, सर) से चलती है; अंग्रेज़ी ईमेल में वही काम केवल वाक्य के भीतर के शब्द करते हैं।" },
            { bn: "তাই প্রতিটা রুক্ষ বাক্য শিকার করে নরম করতে হয় — শিকার-তালিকা নিচের টেবিলে।", en: "So every blunt line must be hunted down and softened — the hunting list is in the table below.", hi: "इसलिए हर रूखी पंक्ति का शिकार कर नरम करना पड़ता है — शिकार-सूची नीचे की तालिका में।" },
            { bn: "বিপরীত ফাঁদও আছে — **অতিরিক্ত ভদ্রতা**: Sorry to bother you, but I was just wondering if maybe you could possibly resend the file।", en: "The opposite trap also exists — **excessive politeness**: Sorry to bother you, but I was just wondering if maybe you could possibly resend the file.", hi: "उल्टा जाल भी है — **अति-विनम्रता**: Sorry to bother you, but I was just wondering if maybe you could possibly resend the file।" },
            { bn: "তিন-চার স্তরের hedging ইমেইলটা ভীতু ও অনিশ্চিত করে দেয় — এক-দুটো softener-ই যথেষ্ট।", en: "Three or four stacked layers of hedging make the email timid and unsure — one or two softeners are plenty.", hi: "तीन-चार परत का hedging ईमेल को डरपोक और अनिश्चित बना देता है — एक-दो softener पर्याप्त हैं।" },
            { bn: "বাংলার সর্বজনীন tag 'isn't it' ✗ — We could ask the vendor, isn't it?; tag সাবজেক্ট-অক্সিলিয়ারি মিলিয়ে বানাতে হয়: We could ask the vendor, couldn't we?; The figures are missing, aren't they?।", en: "The Bengali universal tag 'isn't it' ✗ — We could ask the vendor, isn't it?; the tag must match subject-auxiliary: We could ask the vendor, couldn't we?; The figures are missing, aren't they?", hi: "बांग्ला-हिंदी का सर्वजनिक tag 'isn't it' ✗ — We could ask the vendor, isn't it?; tag subject-auxiliary से मिलकर बनता है: We could ask the vendor, couldn't we?; The figures are missing, aren't they?।" },
            { bn: "অতি-ভদ্রতা আর বাঙালি tag — এই দুই ভুল advanced স্তরেও ইমেইলে ফিরে আসে।", en: "These two errors — over-politeness and the Bengali tag — keep resurfacing in emails even at advanced level.", hi: "ये दो गलतियाँ — अति-विनम्रता और देसी tag — एडवांस्ड स्तर पर भी ईमेल में लौट आती हैं।" },
          ],
          table: {
            head: [
              { bn: "রুক্ষ ইমেইল ✗", en: "Blunt email ✗", hi: "रूखा ईमेल ✗" },
              { bn: "নরম ইমেইল ✓", en: "Softened email ✓", hi: "नरम ईमेल ✓" },
            ],
            rows: [
              [
                { bn: "You did not attach the file.", en: "You did not attach the file.", hi: "You did not attach the file." },
                { bn: "I couldn't spot the attachment — could you resend it?", en: "I couldn't spot the attachment — could you resend it?", hi: "I couldn't spot the attachment — could you resend it?" },
              ],
              [
                { bn: "Your draft has many mistakes.", en: "Your draft has many mistakes.", hi: "Your draft has many mistakes." },
                { bn: "The draft needs another pass — a few points could be tightened.", en: "The draft needs another pass — a few points could be tightened.", hi: "The draft needs another pass — a few points could be tightened." },
              ],
              [
                { bn: "Why did you not reply?", en: "Why did you not reply?", hi: "Why did you not reply?" },
                { bn: "Just checking in case my email got buried — could you take a look when you can?", en: "Just checking in case my email got buried — could you take a look when you can?", hi: "Just checking in case my email got buried — could you take a look when you can?" },
              ],
              [
                { bn: "I need it now.", en: "I need it now.", hi: "I need it now." },
                { bn: "Would it be possible to get it within the hour?", en: "Would it be possible to get it within the hour?", hi: "Would it be possible to get it within the hour?" },
              ],
            ],
          },
          examples: [
            {
              wrong: "You did not attach the file.",
              right: "I couldn't spot the attachment — could you resend it?",
              note: {
                bn: "আরোপ → নিজের দিকে তুলে নেওয়া (couldn't spot) + could you প্রশ্ন; দোষ ধরা হয়নি, কাজ তবু শেষ।",
                en: "Accusation → self-directed framing (couldn't spot) + a could you question; no blame was laid, yet the task gets done.",
                hi: "आरोप → स्वयं पर ले लेना (couldn't spot) + could you प्रश्न; दोष नहीं पकड़ा गया, फिर भी काम पूरा।",
              },
            },
            {
              wrong: "Your draft has many mistakes, isn't it?",
              right: "Your draft needs another pass — a few points could be tightened, don't you think?",
              note: {
                bn: "দুই ভুল একসঙ্গে: mistakes (সরাসরি রায়) + isn't it (বাঙালি tag); needs another pass + don't you think? — দুই জায়গাতেই নরম প্রতিবেশী।",
                en: "Two errors at once: mistakes (a flat verdict) + isn't it (the Bengali tag); needs another pass + don't you think? — soft neighbours in both spots.",
                hi: "दो गलतियाँ एक साथ: mistakes (सीधा फ़ैसला) + isn't it (देसी tag); needs another pass + don't you think? — दोनों जगह नरम पड़ोसी।",
              },
            },
            {
              wrong: "Submit the report today itself.",
              right: "Could you submit the report by end of day, please?",
              note: {
                bn: "বাংলা 'আজকেই'-র হুবহু অনুবাদ today itself কঠোর শোনায়; by end of day + could you + please = সমান সময়সীমা, নরম সুর।",
                en: "The literal render of the Bengali 'আজকেই' — today itself — sounds harsh; by end of day + could you + please = the same deadline, softer melody.",
                hi: "हिंदी 'आज ही' का शब्दशः अनुवाद today itself कठोर लगता है; by end of day + could you + please = वही समय-सीमा, नरम सुर।",
              },
            },
            {
              wrong: "Sorry to bother you, but I was just wondering if maybe you could possibly resend the file.",
              right: "Could you possibly resend the file?",
              note: {
                bn: "অতি-ভদ্রতার চার স্তর (sorry to bother / just / maybe / possibly) অনুরোধকে ভীতু করে; একটা possibly-ই পর্যাপ্ত।",
                en: "Four stacked layers of politeness (sorry to bother / just / maybe / possibly) make the request timid; one possibly is plenty.",
                hi: "विनम्रता की चार परतें (sorry to bother / just / maybe / possibly) अनुरोध को डरपोक बना देती हैं; एक possibly पर्याप्त।",
              },
            },
            {
              wrong: "Why you are not replying to my mails?",
              right: "Just checking in case my email got buried — could you take a look when you can?",
              note: {
                bn: "অভিযোগ-প্রশ্ন (গ্রামার-ভুলসহ) → নিজেকে ছোট করে নেওয়া ছলনা + নরম অনুরোধ; সম্পর্ক বাঁচে, উত্তরও আসে।",
                en: "An accusatory question (with grammar slips) → the self-shrinking soft trick + a gentle request; the relationship survives and the reply still comes.",
                hi: "दोषारोप-प्रश्न (ग्रामर-चूक सहित) → आत्म-लघुकरण की चाल + नरम अनुरोध; रिश्ता बचता है, जवाब भी आता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "⚠️ উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "⚠️ Subtle errors made by advanced learners",
            hi: "⚠️ एडवांस्ड शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          lead: {
            bn: "অভিপ্রায় ভদ্র, কিন্তু রূপটা ফিসলে যায় — পাঁচ দল + এক বানান-ফাঁদ।",
            en: "The intention is polite, the form slips — five groups plus one spelling trap.",
            hi: "आशय विनम्र, पर रूप फिसल जाता है — पाँच समूह + एक वर्तनी-जाल।",
          },
          points: [
            { bn: "Advanced শিক্ষার্থীদের ভুল এখানে সূক্ষ্ম — অভিপ্রায় ভদ্র, কিন্তু রূপটা একটু ফিসলে যায়।", en: "Advanced errors here are subtle — the intention is polite, but the form slips a little.", hi: "एडवांस्ड शिक्षार्थियों की गलतियाँ यहाँ सूक्ष्म हैं — आशय विनम्र, पर रूप फिसल जाता है।" },
            { bn: "**দল ১** — mind-এর পরে to: Would you mind to check ✗ → Would you mind checking (mind + V-ing)।", en: "**Group one** — to after mind: Would you mind to check ✗ → Would you mind checking (mind + V-ing).", hi: "**समूह १** — mind के बाद to: Would you mind to check ✗ → Would you mind checking (mind + V-ing)।" },
            { bn: "**দল ২** — ভদ্র ফ্রেমে backshift বাদ: I was wondering if you can join ✗ → if you could join; ফ্রেমটা অতীত রূপেই কাজ করে।", en: "**Group two** — dropping the backshift inside the polite frame: I was wondering if you can join ✗ → if you could join; the frame works in its past form.", hi: "**समूह २** — विनम्र ढाँचे में backshift छूटना: I was wondering if you can join ✗ → if you could join; ढाँचा अतीत-रूप में ही चलता है।" },
            { bn: "**দল ৩** — বাঙালি universal tag: We could ask the vendor, isn't it? ✗ → couldn't we?; tag সাবজেক্ট-অক্সিলিয়ারি মিলিয়ে বানাতে হয়।", en: "**Group three** — the Bengali universal tag: We could ask the vendor, isn't it? ✗ → couldn't we?; tags must match subject-auxiliary.", hi: "**समूह ३** — देसी universal tag: We could ask the vendor, isn't it? ✗ → couldn't we?; tag subject-auxiliary से मिलाकर बनता है।" },
            { bn: "**দল ৪** — প্রবন্ধে কঠিন verb: The study proves that... ✗ → suggests that... may...; 'প্রমাণ'-শব্দ গবেষণায় বিরল।", en: "**Group four** — hard verbs in essays: The study proves that... ✗ → suggests that... may...; the word 'prove' is rare in research.", hi: "**समूह ४** — निबंध में कठोर verb: The study proves that... ✗ → suggests that... may...; 'प्रमाण' शब्द शोध में दुर्लभ।" },
            { bn: "**দল ৫** — অতিরিক্ত softener জমিয়ে ফেলা: maybe + possibly + just + I was wondering একসঙ্গে = অনিশ্চয়তার স্তূপ।", en: "**Group five** — stacking softeners: maybe + possibly + just + I was wondering together = a mountain of uncertainty.", hi: "**समूह ५** — softener ढेर कर देना: maybe + possibly + just + I was wondering साथ-साथ = अनिश्चयता का पहाड़।" },
            { bn: "বানান-জাত ফাঁদ: **maybe** (এক শব্দ, ক্রিয়াবিশেষণ) বনাম **may be** (দুই শব্দ, modal + verb): The attachment maybe corrupted ✗ → The attachment may be corrupted।", en: "A spelling-bred trap: **maybe** (one word, an adverb) vs **may be** (two words, modal + verb): The attachment maybe corrupted ✗ → The attachment may be corrupted.", hi: "वर्तनी-जन्य जाल: **maybe** (एक शब्द, क्रियाविशेषण) बनाम **may be** (दो शब्द, modal + verb): The attachment maybe corrupted ✗ → The attachment may be corrupted।" },
            { bn: "নিজের ইমেইলে পাঠানোর আগে তিন-সেকেন্ড স্ক্যান: কঠিন শব্দ আছে? tag ঠিক? softener এক-দুটোর বেশি? — এই তিন প্রশ্নেই বেশিরভাগ সূক্ষ্ম গলদ ধরা পড়ে।", en: "Before sending any email, run a three-second scan: any hard words? correct tag? more than one or two softeners? — these three questions catch most subtle slips.", hi: "ईमेल भेजने से पहले तीन-सेकंड का स्कैन चलाएँ: कठोर शब्द हैं? tag सही? एक-दो से ज़्यादा softener? — इन्हीं तीन प्रश्नों में ज़्यादातर सूक्ष्म चूक पकड़ी जाती है।" },
          ],
          examples: [
            {
              wrong: "Would you mind to check the invoice before Friday?",
              right: "Would you mind checking the invoice before Friday?",
              note: {
                bn: "mind + V-ing — mind to check অচল; বাংলা 'চেক করতে আপত্তি নেই'-র to-র টান এখানে কাজ করে না।",
                en: "mind + V-ing — mind to check does not exist; the to pulled from the Bengali 'checking is no objection' pattern does no work here.",
                hi: "mind + V-ing — mind to check अमान्य; हिंदी 'चेक करने में आपत्ति नहीं' का to यहाँ कोई काम नहीं आता।",
              },
            },
            {
              wrong: "I was wondering if you can join the client call.",
              right: "I was wondering if you could join the client call.",
              note: {
                bn: "ভদ্র ফ্রেম I was wondering if-এর পরে could/would — ফ্রেম অতীত রূপে, তাই পরের verb-ও এক ধাপ পিছিয়ে।",
                en: "Inside the polite frame I was wondering if, use could/would — the frame is past-formed, so the next verb steps back one too.",
                hi: "विनम्र ढाँचे I was wondering if के बाद could/would — ढाँचा अतीत-रूप में है, इसलिए अगला verb भी एक क़दम पीछे।",
              },
            },
            {
              wrong: "We could ask the vendor, isn't it?",
              right: "We could ask the vendor, couldn't we?",
              note: {
                bn: "বাংলার 'isn't it' tag সর্বত্র চলে, ইংরেজির নয় — tag সাবজেক্ট (we) আর অক্সিলিয়ারি (could) মিলিয়ে: couldn't we?।",
                en: "The Bengali 'isn't it' tag travels everywhere, English tags do not — build the tag from subject (we) + auxiliary (could): couldn't we?",
                hi: "बांग्ला-हिंदी का 'isn't it' tag हर जगह चलता है, अंग्रेज़ी का नहीं — tag को subject (we) + auxiliary (could) से बनाएँ: couldn't we?।",
              },
            },
            {
              wrong: "The study proves that children learn faster with music.",
              right: "The study suggests that children may learn faster with music.",
              note: {
                bn: "প্রবন্ধে prove = অতিরঞ্জিত দাবি; suggest + may দুই স্তরের hedging — পরীক্ষকের চোখে সঠিক গবেষণা-সুর।",
                en: "In an essay prove is an inflated claim; suggest + may is two-layer hedging — the correct research register in an examiner's eyes.",
                hi: "निबंध में prove अतिरंजित दावा है; suggest + may दो-स्तरीय hedging — परीक्षक की नज़र में सही शोध-सुर।",
              },
            },
            {
              wrong: "The attachment maybe corrupted — maybe you could check?",
              right: "The attachment may be corrupted — perhaps you could check?",
              note: {
                bn: "maybe = এক শব্দের ক্রিয়াবিশেষণ, may be = modal + verb — 'The file maybe corrupted'-এ দুটোই গুলিয়ে গেছে; বাক্যে verb দরকার হলে may be।",
                en: "maybe = a one-word adverb, may be = modal + verb — 'The file maybe corrupted' confuses the two; when the sentence needs a verb, write may be.",
                hi: "maybe = एक शब्द का क्रियाविशेषण, may be = modal + verb — 'The file maybe corrupted' में दोनों उलझ गए; वाक्य में verb चाहिए तो may be लिखें।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "📖 ছোট ইমেইলে দেখা যাক",
            en: "📖 Seen in a short email",
            hi: "📖 छोटे ईमेल में देखिए",
          },
          lead: {
            bn: "একটা পুরো ইমেইল — দাবি নরম, সমালোচনা সৌম্য, অনুরোধ প্রশ্নে।",
            en: "One full email — hedged claims, gentle criticism, requests as questions.",
            hi: "एक पूरा ईमेल — नरम दावे, सौम्य आलोचना, प्रश्न में अनुरोध।",
          },
          points: [
            { bn: "নিচের ছোট ইমেইলটা পড়ুন — এই পাঠের সব প্যাটার্ন একসঙ্গে কাজ করছে।", en: "Read this short email — every pattern of the lesson is at work together.", hi: "यह छोटा ईमेल पढ़ें — पाठ के सारे पैटर्न एक साथ काम कर रहे हैं।" },
            { bn: "Hi Rafi, I was wondering if you could take a quick look at the draft when you get a moment.", en: "Hi Rafi, I was wondering if you could take a quick look at the draft when you get a moment.", hi: "Hi Rafi, I was wondering if you could take a quick look at the draft when you get a moment." },
            { bn: "The budget section seems a little unclear, and I feel it could confuse a few readers — perhaps you could tighten it?", en: "The budget section seems a little unclear, and I feel it could confuse a few readers — perhaps you could tighten it?", hi: "The budget section seems a little unclear, and I feel it could confuse a few readers — perhaps you could tighten it?" },
            { bn: "Also, the figures for March appear to be missing; I couldn't spot the attachment, so could you possibly resend it?", en: "Also, the figures for March appear to be missing; I couldn't spot the attachment, so could you possibly resend it?", hi: "Also, the figures for March appear to be missing; I couldn't spot the attachment, so could you possibly resend it?" },
            { bn: "It is likely that the client will ask for the final version tomorrow, so the sooner we can align, the better. Thanks so much!", en: "It is likely that the client will ask for the final version tomorrow, so the sooner we can align, the better. Thanks so much!", hi: "It is likely that the client will ask for the final version tomorrow, so the sooner we can align, the better. Thanks so much!" },
            { bn: "প্রতিটা বাক্যে দেখুন — দাবি নরম, সমালোচনা নির্দিষ্ট কিন্তু সৌম্য, অনুরোধ প্রশ্নে।", en: "Check each sentence — the claims are hedged, the criticism is specific but gentle, the requests are questions.", hi: "हर वाक्य देखें — दावे नरम, आलोचना ठोस पर सौम्य, अनुरोध प्रश्न में।" },
          ],
          examples: [
            {
              wrong: "Send the final version tomorrow morning.",
              right: "Could you send the final version tomorrow morning?",
              note: {
                bn: "bare imperative → could you প্রশ্ন; একই সময়সীমা, অথচ প্রাপক আদেশ-প্রাপ্ত নয়, অনুরোধ-প্রাপ্ত।",
                en: "A bare imperative → a could you question; the same deadline, but the receiver gets a request, not an order.",
                hi: "खाली imperative → could you प्रश्न; वही समय-सीमा, पर पाठक को आदेश नहीं, अनुरोध मिलता है।",
              },
            },
            {
              wrong: "The budget section is confusing and badly written.",
              right: "The budget section seems a little unclear — perhaps we could tighten it.",
              note: {
                bn: "confusing + badly written = দ্বৈত নিন্দা; seems a little unclear + perhaps we could = ছাপ + যৌথ সমাধান — সমালোচনা সহযোগিতা হয়ে যায়।",
                en: "confusing + badly written is a double indictment; seems a little unclear + perhaps we could = impression + a joint fix — criticism becomes collaboration.",
                hi: "confusing + badly written दोहरा आरोप है; seems a little unclear + perhaps we could = छाप + साझा समाधान — आलोचना सहयोग बन जाती है।",
              },
            },
            {
              wrong: "It is certain that the client will ask for the final version.",
              right: "It is likely that the client will ask for the final version.",
              note: {
                bn: "certain = ভবিষ্যতের উপর পূর্ণ দাবি; likely = অভিজ্ঞতা-ভিত্তিক সম্ভাবনা — ইমেইলের অনুমানেও এটাই প্রত্যাশিত।",
                en: "certain claims the future fully; likely is experience-based probability — the expected note even for email guesses.",
                hi: "certain भविष्य पर पूरा दावा है; likely अनुभव-आधारित संभावना — ईमेल के अनुमान में भी यही अपेक्षित है।",
              },
            },
            {
              wrong: "The figures for March are missing, isn't it?",
              right: "The figures for March appear to be missing, aren't they?",
              note: {
                bn: "দুই সূক্ষ্ম উন্নতি: are missing → appear to be missing (নরম পর্যবেক্ষণ), isn't it → aren't they (tag plural figures-এর সঙ্গে মিলল)।",
                en: "Two subtle upgrades: are missing → appear to be missing (a softer observation), isn't it → aren't they (the tag now matches plural figures).",
                hi: "दो सूक्ष्म सुधार: are missing → appear to be missing (नरम पर्यवेक्षण), isn't it → aren't they (tag अब plural figures से मिला)।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "🧠 এক নজরে",
            en: "🧠 At a glance",
            hi: "🧠 एक नज़र में",
          },
          lead: {
            bn: "পুরো পাঠ ছয় সারিতে — আর নিজের ইমেইল নরম করার অনুশীলন।",
            en: "The whole lesson in six lines — plus softening your own email.",
            hi: "पूरा पाठ छह पंक्तियों में — और अपना ईमेल नरम करने का अभ्यास।",
          },
          points: [
            { bn: "**দাবি নরম করুন** — may/might/could, tend to, appear to, it is likely that।", en: "**Hedge claims** — may/might/could, tend to, appear to, it is likely that.", hi: "**दावे नरम करें** — may/might/could, tend to, appear to, it is likely that।" },
            { bn: "**সমালোচনা** — a bit/slightly/seems + could be clearer; মানুষ নয়, কাজ ধরুন।", en: "**Criticism** — a bit/slightly/seems + could be clearer; target the work, not the person.", hi: "**आलोचना** — a bit/slightly/seems + could be clearer; व्यक्ति नहीं, काम पकड़ें।" },
            { bn: "**অনুরোধ** — Could you possibly...?, Would you mind + V-ing?, I was wondering if you could...।", en: "**Requests** — Could you possibly...?, Would you mind + V-ing?, I was wondering if you could...", hi: "**अनुरोध** — Could you possibly...?, Would you mind + V-ing?, I was wondering if you could..." },
            { bn: "**প্রত্যাখ্যান** — I'm afraid I won't be able to...।", en: "**Refusals** — I'm afraid I won't be able to...", hi: "**इनकार** — I'm afraid I won't be able to..." },
            { bn: "প্রবন্ধে prove/all/always বাদ — suggest/often/many লিখুন।", en: "In essays drop prove/all/always — write suggest/often/many.", hi: "निबंध में prove/all/always बाहर — suggest/often/many लिखें।" },
            { bn: "এক-দুটো softener যথেষ্ট, তিনটা নয়; 'isn't it' tag বাঙালি-বাহিত — subject + auxiliary মিলিয়ে বানান।", en: "One or two softeners are enough, not three; the 'isn't it' tag is Bengali-borne — build English tags from subject + auxiliary.", hi: "एक-दो softener पर्याप्त, तीन नहीं; 'isn't it' tag देसी-बाहुल्य है — subject + auxiliary से बनाएँ।" },
            { bn: "অনুশীলন: নিজের শেষ পাঠানো ইমেইলটা খুলুন, রুক্ষ বাক্য শিকার করে নরম করুন।", en: "Practice: open your last sent email, hunt the blunt lines, and soften them.", hi: "अभ्यास: अपना भेजा आख़िरी ईमेल खोलें, रूखी पंक्तियों का शिकार कर नरम करें।" },
          ],
          examples: [],
        },
      ],
      tips: [
        {
          bn: "ইংরেজিতে ভদ্রতা শব্দে বসে — tone দিয়ে নয়; ইমেইলে bare imperative (Send me the file) রুক্ষ শোনায়।",
          en: "English politeness lives in words, not tone; a bare imperative in email (Send me the file) sounds blunt.",
          hi: "अंग्रेज़ी की विनम्रता शब्दों में बसती है, tone में नहीं; ईमेल में खाली imperative (Send me the file) रूखा लगता है।",
        },
        {
          bn: "সমালোচনার সূত্র: যা ভালো তা স্বীকার করুন → নরম শব্দে সমস্যা (a bit, slightly, seems) → নির্দিষ্ট পরামর্শ।",
          en: "The criticism recipe: acknowledge what works → name the problem softly (a bit, slightly, seems) → give a specific suggestion.",
          hi: "आलोचना की विधि: जो अच्छा है स्वीकार करें → समस्या नरम शब्दों में (a bit, slightly, seems) → ठोस सुझाव।",
        },
        {
          bn: "অনুরোধের সোনার ফ্রেম: Could you possibly...? / Would you mind + V-ing? / I was wondering if you could...?",
          en: "Golden request frames: Could you possibly...? / Would you mind + V-ing? / I was wondering if you could...?",
          hi: "अनुरोध के सुनहरे ढाँचे: Could you possibly...? / Would you mind + V-ing? / I was wondering if you could...?",
        },
        {
          bn: "I was wondering if-এর পরে সবসময় could/would — can নয়; ভদ্র ফ্রেম অতীত রূপেই চলে (polite backshift)।",
          en: "After I was wondering if, always use could/would — not can; the polite frame works in its past form (polite backshift).",
          hi: "I was wondering if के बाद हमेशा could/would — can नहीं; विनम्र ढाँचा अतीत-रूप में ही चलता है (polite backshift)।",
        },
        {
          bn: "প্রবন্ধে prove, always, everyone, all — ঝুঁকিপূর্ণ; suggest, tend to, often, many লিখুন — দাবি তখন রক্ষণীয়।",
          en: "In essays, prove, always, everyone, all are risky; write suggest, tend to, often, many — the claim then becomes defensible.",
          hi: "निबंध में prove, always, everyone, all — जोखिमभरे; suggest, tend to, often, many लिखें — दावा तब टिकाऊ बनता है।",
        },
        {
          bn: "নিশ্চয়তার সিঁড়ি: will > is likely to > may > might > could — প্রমাণের ওজন অনুযায়ী ধাপ বেছে নিন।",
          en: "The certainty ladder: will > is likely to > may > might > could — pick the step to match the weight of your evidence.",
          hi: "निश्चयता की सीढ़ी: will > is likely to > may > might > could — सबूत के वज़न के अनुसार पाया चुनें।",
        },
        {
          bn: "এক-দুটো softener যথেষ্ট; maybe + possibly + just + sorry জমলে আপনি নিজেই অনিশ্চিত শোনান।",
          en: "One or two softeners are enough; pile up maybe + possibly + just + sorry and you sound unsure yourself.",
          hi: "एक-दो softener पर्याप्त; maybe + possibly + just + sorry जमा हो जाएँ तो आप स्वयं अनिश्चित लगने लगते हैं।",
        },
        {
          bn: "বাংলা 'isn't it' universal tag ইংরেজিতে নেই — tag সাবজেক্ট + অক্সিলিয়ারি মিলিয়ে বানান (We could ask..., couldn't we?)।",
          en: "The Bengali universal tag 'isn't it' does not exist in English — build the tag from subject + auxiliary (We could ask..., couldn't we?).",
          hi: "हिंदी-बांग्ला का 'isn't it' universal tag अंग्रेज़ी में नहीं — tag को subject + auxiliary से बनाएँ (We could ask..., couldn't we?)।",
        },
        {
          bn: "mind-এর পরে V-ing: Would you mind opening the window? — mind to open অচল।",
          en: "After mind use V-ing: Would you mind opening the window? — mind to open does not exist.",
          hi: "mind के बाद V-ing: Would you mind opening the window? — mind to open अमान्य।",
        },
        {
          bn: "প্রত্যাখ্যানও নরম করুন: I'm afraid I won't be able to... — 'No'-র জায়গায় নম-করা খোলস আগে বসান।",
          en: "Soften refusals too: I'm afraid I won't be able to... — seat the polite shell before the 'no'.",
          hi: "इनकार भी नरम करें: I'm afraid I won't be able to... — 'ना' से पहले विनम्र खोल बिठाएँ।",
        },
      ],
      quiz: [
        {
          question: "You need a file from a senior colleague by email. Which is the best message?",
          options: [
            "Send me the file, please.",
            "You should send the file.",
            "Could you possibly send me the file?",
            "I want the file now.",
          ],
          answer: 2,
          explanation: {
            bn: "সিনিয়রের কাছে bare imperative রুক্ষ; Could you possibly...? = ইংরেজি ইমেইলের আদর্শ নরম অনুরোধ।",
            en: "A bare imperative to a senior sounds blunt; Could you possibly...? is the standard soft request in English email.",
            hi: "सीनियर को खाली imperative रूखा लगता है; Could you possibly...? अंग्रेज़ी ईमेल का मानक नरम अनुरोध है।",
          },
        },
        {
          question: "Would you mind ______ the window? It is a bit stuffy.",
          options: ["to open", "open", "opened", "opening"],
          answer: 3,
          explanation: {
            bn: "mind + V-ing — Would you mind opening...?; to open/opened এই ফ্রেমে অচল।",
            en: "mind + V-ing — Would you mind opening...?; to open and opened fail in this frame.",
            hi: "mind + V-ing — Would you mind opening...?; to open और opened इस ढाँचे में नहीं चलते।",
          },
        },
        {
          question: "In an academic essay, which sentence hedges its claim most appropriately?",
          options: [
            "The study proves that sugar is harmful.",
            "Everyone knows sugar is bad.",
            "The study suggests that excess sugar may harm health.",
            "Sugar is always harmful to health.",
          ],
          answer: 2,
          explanation: {
            bn: "suggest + may = দুই স্তরের hedging — গবেষণার ভাষার আদর্শ; prove/everyone/always সবই অতিরঞ্জিত দাবি।",
            en: "suggest + may is two-layer hedging — the research-English norm; prove, everyone and always are all inflated claims.",
            hi: "suggest + may दो-स्तरीय hedging — शोध-अंग्रेज़ी का मानक; prove, everyone और always तीनों अतिरंजित दावे।",
          },
        },
        {
          question: "I was wondering if you ______ help me with the slides this evening.",
          options: ["can", "could", "will", "should"],
          answer: 1,
          explanation: {
            bn: "ভদ্র ফ্রেম I was wondering if-এর পরে could — polite backshift; can ফ্রেমের অতীত রূপ ভেঙে দেয়।",
            en: "Inside the polite frame I was wondering if, use could — polite backshift; can breaks the frame's past form.",
            hi: "विनम्र ढाँचे I was wondering if के बाद could — polite backshift; can ढाँचे का अतीत-रूप तोड़ देता है।",
          },
        },
        {
          question: "Prices ______ to rise sharply before Eid every year.",
          options: ["tends", "is tending", "tend", "tending"],
          answer: 2,
          explanation: {
            bn: "Prices plural তাই tend; tend to = সাধারণ প্রবণতা — hedging-এর প্রচলিত verb।",
            en: "Prices is plural, so tend; tend to marks a general tendency — a common hedging verb.",
            hi: "Prices plural है इसलिए tend; tend to सामान्य प्रवृत्ति दर्शाता है — hedging का सामान्य verb।",
          },
        },
        {
          question: "Which is the softest way to criticise a report?",
          options: [
            "Your report is bad.",
            "Your report could be clearer in places.",
            "You completely failed the report.",
            "The report is a disaster.",
          ],
          answer: 1,
          explanation: {
            bn: "could be clearer in places = নরম, নির্দিষ্ট, ঠিক-করা-সম্ভব; বাকি তিনটা মানুষের উপর সরাসরি রায়।",
            en: "could be clearer in places is soft, specific and fixable; the other three are flat verdicts on the person.",
            hi: "could be clearer in places नरम, ठोस और ठीक-हो-सकने वाला है; बाकी तीनों व्यक्ति पर सीधे फ़ैसले हैं।",
          },
        },
        {
          question: "It is likely ______ the launch will slip by a week.",
          options: ["what", "that", "which", "of"],
          answer: 1,
          explanation: {
            bn: "ফ্রেমটা it is likely that + clause — that-ই সঠিক সংযোগকারী; it is likely what/which ইংরেজিতে নেই।",
            en: "The frame is it is likely that + clause — that is the correct connector; it is likely what/which does not exist in English.",
            hi: "ढाँचा है it is likely that + clause — that ही सही योजक; it is likely what/which अंग्रेज़ी में नहीं है।",
          },
        },
        {
          question: "A colleague wrote: 'You did not attach the file.' Which is the best softened email fix?",
          options: [
            "Attach the file immediately.",
            "I couldn't spot the attachment — could you resend it?",
            "Why is no attachment there?",
            "Attachment is missing, isn't it?",
          ],
          answer: 1,
          explanation: {
            bn: "নিজের দিকে তুলে নেওয়া (couldn't spot) + could you প্রশ্ন — দোষ ধরা হয়নি, কাজ তবু শেষ; এটাই softening-এর আদর্শ।",
            en: "Self-directed framing (couldn't spot) + a could you question — no blame laid, task still done; the model of softening.",
            hi: "स्वयं पर ले लेना (couldn't spot) + could you प्रश्न — दोष नहीं पकड़ा गया, काम फिर भी पूरा; यही softening का आदर्श है।",
          },
        },
        {
          question: "Which word signals the MOST uncertainty about a claim?",
          options: ["will", "certainly", "may", "definitely"],
          answer: 2,
          explanation: {
            bn: "সিঁড়িতে may নিচের ধাপ — সবচেয়ে বেশি অনিশ্চয়তা; will/certainly/definitely সবই পূর্ণ নিশ্চয়তা বোঝায়।",
            en: "On the ladder, may sits on a lower step — the most uncertainty; will, certainly and definitely all signal full certainty.",
            hi: "सीढ़ी पर may निचला पाया है — सबसे ज़्यादा अनिश्चयता; will, certainly और definitely पूर्ण निश्चयता दर्शाते हैं।",
          },
        },
        {
          question: "Complete the tag: 'We could ask the vendor, ______?'",
          options: ["isn't it", "could we", "isn't he", "or not"],
          answer: 1,
          explanation: {
            bn: "Tag সাবজেক্ট (we) আর অক্সিলিয়ারি (could) মিলিয়ে বানে — couldn't we?; 'isn't it' বাংলা-বাহিত সর্বজনীন tag, ইংরেজিতে অচল।",
            en: "The tag is built from subject (we) + auxiliary (could) — couldn't we?; 'isn't it' is the Bengali-borne universal tag, dead in English.",
            hi: "Tag subject (we) + auxiliary (could) से बनता है — couldn't we?; 'isn't it' देसी सर्वजनिक tag है, अंग्रेज़ी में अमान्य।",
          },
        },
      ],
    },
  },
];

export default SEED_GRAMMAR_V4_A2B;
