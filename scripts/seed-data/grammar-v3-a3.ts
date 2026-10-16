// ─── Learning-path grammar seeds v3: ADVANCED batch A3 (4 deep lessons) ───
// Task 9.3-A3. TriText = { bn, en, hi } — Bengali is the PRIMARY language of
// explanation; en + hi are complete faithful translations. English example
// sentences stay English. Level: advanced (CEFR C1). Unit 0 = extra library
// lessons. Quiz included (8-10 questions per lesson).
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV3Entry {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: number;
  data: LibraryGrammarData;
}

export const SEED_GRAMMAR_V3_A3: SeedGrammarV3Entry[] = [
  /* ── 1. Nominalisation & Academic Style ──────────────────────────────── */
  {
    topic: "Nominalisation & Academic Style",
    level: "advanced",
    title: "Nominalisation & Academic Style",
    unit: 0,
    data: {
      title: {
        bn: "নমিনালাইজেশন ও একাডেমিক স্টাইল",
        en: "Nominalisation & Academic Style",
        hi: "नॉमिनलाइज़ेशन और अकादमिक शैली",
      },
      intro: {
        bn: "নমিনালাইজেশন মানে ক্রিয়া বা বিশেষণকে বিশেষ্যে বদলে ফেলা — decide → decision, poor → poverty, quickly decide → quick decision। এই একটা হাতিয়ারই সাধারণ লেখাকে একাডেমিক, রিপোর্টের মতো গাম্ভীর্যপূর্ণ লেখায় নিয়ে যায় — IELTS-এ band 7+ যে ভঙ্গি চায়। তবে অতিরিক্ত হলে লেখা 'zombie'-এর মতো হয়ে যায় — কর্তা হারায়, পড়তে ক্লান্তি লাগে। শুরুর আগে অনুগ্রহ করে Passive Voice — All Tenses আর Relative Clauses পাঠগুলো শেষ করে নিন — এখানের রূপান্তরগুলো সেগুলোর পায়ে দাঁড়িয়েই হয়। এটা C1-এর পাঠ: শুধু নিয়ম নয়, কখন বিশেষ্য আর কখন ক্রিয়া — এই বিচারশক্তিই আসল শিক্ষা।",
        en: "Nominalisation means turning a verb or adjective into a noun — decide → decision, poor → poverty, quickly decide → quick decision. This single tool lifts ordinary writing into academic, report-like prose — the register IELTS band 7+ rewards. Overused, however, it turns writing into 'zombie' prose that loses its agent and tires the reader. Before starting, please finish the lessons on Passive Voice — All Tenses and Relative Clauses; the transformations here stand on them. This is a C1 lesson: the real skill is judging when to choose a noun and when to keep a verb.",
        hi: "नॉमिनलाइज़ेशन का अर्थ है क्रिया या विशेषण को संज्ञा में बदलना — decide → decision, poor → poverty, quickly decide → quick decision। यही एक उपकरण साधारण लेखन को एकेडेमिक, रिपोर्ट-सदृश्य गद्य में उठा देता है — जैसी शैली IELTS band 7+ चाहता है। पर अधिक इस्तेमाल से लेखन 'zombie' बन जाता है — कर्ता खो जाता है, पढ़ना थकान देता है। शुरू करने से पहले Passive Voice — All Tenses और Relative Clauses पाठ पूरे करें; यहाँ के रूपांतर उन्हीं पर खड़े हैं। यह C1 पाठ है: असली कौशल है यह तय करना कि कब संज्ञा, कब क्रिया।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: লেখায় ক্রিয়াকে বিশেষ্য বানানোর মুহূর্ত",
            en: "When to use it: the moments verbs become nouns",
            hi: "कब इस्तेमाल होता है: जब क्रिया संज्ञा बनती है",
          },
          body: {
            bn: "বাংলায় আমরা স্বভাবতই বিশেষ্য-ভারী কথা বলি — 'সরকারের সিদ্ধান্ত', 'দামের বৃদ্ধি', 'শিক্ষার মান হ্রাস'। ইংরেজিতে এই ভঙ্গির নামই nominalisation: the government's decision, the increase in prices, a decline in the quality of education। একাডেমিক রচনা, গবেষণা-সারসংক্ষেপ, অফিস রিপোর্ট, IELTS Writing — যেখানেই আনুষ্ঠানিক দূরত্ব দরকার, সেখানেই এটি প্রথম অস্ত্র। কারণ বিশেষ্য subject হলে বাক্য 'মানুষ-নিরপেক্ষ' শোনায়, আর examiner তখনই বোঝেন যে লেখক formal register নিয়ন্ত্রণ করতে পারে। কখন কাজে লাগে? প্রথমত, কর্তা গুরুত্বহীন বা অজানা হলে — 'the implementation of the new policy' বললে কে বাস্তবায়ন করল, তা বলার দরকার নেই। দ্বিতীয়ত, সংযোগের জন্য — এক বাক্যে 'The committee discussed the plan' বলে, পরের বাক্যে সেই discussion-কেই subject করে দিলে ('The discussion revealed three problems...') লেখা একসুতোয় বাঁধে। তৃতীয়ত, তথ্য সংকুচিত করতে — 'the rapid growth of Dhaka' এক phrase-এ যা দুটো পূর্ণ বাক্যে বলতে হতো। আবার কোথায় বাদ? গল্প, চিঠি, কথোপকথন, ব্লগ — এসব জায়গায় বিশেষ্য-ভার লেখাকে শুকনো, 'কর্পোরেট' করে তোলে। বন্ধুকে বলুন 'they cancelled the match' — 'the cancellation of the match by the organisers' নয়। সূত্রটা মনে রাখুন: ভাব ও দূরত্ব চাইলে বিশেষ্য; মানুষ ও ঘটনা চাইলে ক্রিয়া।",
            en: "Bengali speech is naturally noun-heavy — 'the government's decision', 'the rise in prices'. In English this habit has a name: nominalisation. Academic essays, research abstracts, office reports and IELTS Writing — wherever formal distance is needed, this is the first tool. A noun subject makes a sentence sound impersonal, and that is exactly what examiners read as control of formal register. When does it help? First, when the agent is unimportant or unknown — 'the implementation of the new policy' says nothing about who implemented it. Second, for cohesion — say 'The committee discussed the plan' in one sentence, then make that discussion the subject of the next ('The discussion revealed three problems...'). Third, to compress information — 'the rapid growth of Dhaka' packs two full sentences into one phrase. And when to avoid it? Stories, letters, conversation, blogs — there, noun-heavy prose sounds dry and corporate. Tell a friend 'they cancelled the match', not 'the cancellation of the match by the organisers'. Rule of thumb: nouns for abstraction and distance; verbs for people and events.",
            hi: "बांग्ला बोली स्वाभाविक रूप से संज्ञा-भारी है — 'सरकार का निर्णय', 'कीमतों में वृद्धि'। अंग्रेज़ी में इसी प्रवृत्ति का नाम nominalisation। एकेडेमिक निबंध, शोध-सार, ऑफिस रिपोर्ट और IELTS Writing — जहाँ औपचारिक दूरी चाहिए, वहीं यह पहला उपकरण है। संज्ञा-कर्ता वाक्य को निरपेक्ष बनाता है, और examiner इसी को formal register का नियंत्रण मानता है। कब काम आता है? पहला, जब कर्ता तुच्छ या अज्ञात हो — 'the implementation of the new policy' में किसने किया, कहना ज़रूरी नहीं। दूसरा, संबद्धता के लिए — एक वाक्य में क्रिया, अगले वाक्य में उसी की संज्ञा subject ('The discussion revealed three problems...')। तीसरा, जानकारी संकुचित करने के लिए — 'the rapid growth of Dhaka' एक phrase में दो वाक्य का भार। कहाँ नहीं? कहानी, पत्र, बातचीत, ब्लॉग — वहाँ संज्ञा-भार लेखन को सूखा बनाता है। नियम: विचार और दूरी के लिए संज्ञा; व्यक्ति और घटना के लिए क्रिया।",
          },
          examples: [
            {
              wrong: "In this essay I will talk about why the price of fuel is going up and why people are angry.",
              right: "This essay examines the causes of the recent fuel price rise and the resulting public anger.",
              note: { bn: "রচনার ভাষায় 'I will talk about'-এর বদলে examines, 'going up'-এর বদলে বিশেষ্য rise — ক্রিয়া-ভিত্তিক কথ্য ভঙ্গি বিশেষ্য-ভিত্তিক একাডেমিক ভঙ্গিতে বদলাল, এটাই nominalisation-এর প্রথম প্রয়োগ।", en: "In essay language, 'I will talk about' becomes 'examines' and 'going up' becomes the noun 'rise' — spoken verb style turns into noun-driven academic style, the core use of nominalisation.", hi: "निबंध-भाषा में 'I will talk about' की जगह 'examines', 'going up' की जगह संज्ञा 'rise' — क्रिया-प्रधान बोलचाल संज्ञा-प्रधान एकेडेमिक शैली में बदला।" },
            },
            {
              wrong: "The report says that someone should repair the roads quickly.",
              right: "The report calls for the rapid repair of the roads.",
              note: { bn: "কর্তা 'someone' অস্পষ্ট — এমন জায়গায় ক্রিয়া repair-এর বিশেষ্য রূপ দিয়ে 'the rapid repair of the roads' বানালে কর্তা লুকিয়ে যায়, বাক্য আনুষ্ঠানিক হয়।", en: "The agent 'someone' is vague — nominalising 'repair' into 'the rapid repair of the roads' hides the agent and formalises the sentence.", hi: "कर्ता 'someone' अस्पष्ट है — 'repair' को संज्ञा बनाकर 'the rapid repair of the roads' कर्ता छिपा देता है और वाक्य औपचारिक हो जाता है।" },
            },
            {
              wrong: "We did an analysis of the data and did a comparison between the two groups.",
              right: "We analysed the data and compared the two groups.",
              note: { bn: "উল্টো দিকের শিক্ষা: সাধারণ লেখা বা বক্তৃতায় did an analysis of-এর মতো ভারী গুচ্ছ নয় — ক্রিয়া analysed, compared-ই ঝরঝরে। ভালো লেখক দুই মোডেই লিখতে পারেন।", en: "The reverse lesson: in ordinary writing or speech, avoid heavy chunks like 'did an analysis of' — the plain verbs 'analysed' and 'compared' are cleaner. Good writers work in both modes.", hi: "उलटा सबक: साधारण लेखन में 'did an analysis of' जैसे भारी गुच्छ नहीं — 'analysed', 'compared' जैसी साफ़ क्रियाएँ बेहतर। अच्छे लेखक दोनों ढंग में लिखते हैं।" },
            },
            {
              wrong: "Sorry yaar, the cancellation of the match has caused the non-attendance of my presence.",
              right: "Sorry, they cancelled the match, so I'm not coming.",
              note: { bn: "বন্ধুর চ্যাটে স্তূপ-করা বিশেষ্য হাস্যকর ও অপ্রাকৃত শোনায়; কথ্য ভাষা ক্রিয়ায় বাঁচে — প্রতিটা প্রসঙ্গের নিজের সুর আছে।", en: "In a friend's chat, piled-up nouns sound absurd — spoken English lives on verbs; every context has its own music.", hi: "दोस्त की चैट में संज्ञाओं का ढेर हास्यास्पद लगता है — बोलचाल की अंग्रेज़ी क्रियाओं पर चलती है; हर संदर्भ की अपनी धुन होती है।" },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন: ক্রিয়া-বিশেষণ থেকে বিশেষ্য বানানোর ছাঁচগুলো",
            en: "Formation: the verb/adjective → noun patterns",
            hi: "गठन: क्रिया/विशेषण से संज्ञा बनाने के ढाँचे",
          },
          body: {
            bn: "এখন কারখানাটা দেখি — কোন প্রত্যয় কোন ক্রিয়ার সাথে লাগে। সবচেয়ে বড় পরিবার -tion/-sion: decide→decision, inform→information, discuss→discussion, permit→permission, educate→education, connect→connection, reduce→reduction, contribute→contribution। এরপর -ment: develop→development, improve→improvement, invest→investment, agree→agreement, argue→argument (লক্ষ করুন — e পড়ে যায়, arguement নয়)। -ance/-ence পরিবার: perform→performance, exist→existence, prefer→preference, maintain→maintenance (উচ্চারণ পুরো বদলে যায়!)। -al গোষ্ঠী: refuse→refusal, propose→proposal, arrive→arrival, approve→approval, survive→survival। -ure/-age: fail→failure, press→pressure, mix→mixture, marry→marriage। বিশেষণ থেকে: -ness (happy→happiness, kind→kindness, aware→awareness), -ity (similar→similarity, able→ability, pure→purity, secure→security), -cy (fluent→fluency, accurate→accuracy, private→privacy), -th (strong→strength, long→length, deep→depth, wide→width)। আর যেগুলো কোনো ছাঁচে বসে না, মুখস্থই করতে হবে: poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction।",
            en: "Now the factory — which suffix attaches to which verb. The biggest family is -tion/-sion: decide→decision, inform→information, discuss→discussion, permit→permission, educate→education, connect→connection, reduce→reduction, contribute→contribution. Then -ment: develop→development, improve→improvement, invest→investment, agree→agreement, argue→argument (note — the e disappears; never 'arguement'). The -ance/-ence family: perform→performance, exist→existence, prefer→preference, maintain→maintenance (the pronunciation changes completely!). The -al group: refuse→refusal, propose→proposal, arrive→arrival, approve→approval, survive→survival. And -ure/-age: fail→failure, press→pressure, mix→mixture, marry→marriage. From adjectives: -ness (happy→happiness, kind→kindness, aware→awareness), -ity (similar→similarity, able→ability, pure→purity, secure→security), -cy (fluent→fluency, accurate→accuracy, private→privacy), -th (strong→strength, long→length, deep→depth, wide→width). Finally the ones no pattern can catch — learn them by heart: poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction.",
            hi: "अब कारखाना देखें — कौन-सा प्रत्यय किस क्रिया से जुड़ता है। सबसे बड़ा परिवार -tion/-sion: decide→decision, inform→information, discuss→discussion, permit→permission, reduce→reduction, contribute→contribution। फिर -ment: develop→development, invest→investment, argue→argument (e गिर जाता है, 'arguement' नहीं)। -ance/-ence परिवार: perform→performance, exist→existence, prefer→preference, maintain→maintenance (उच्चारण पूरा बदल जाता है!)। -al: refuse→refusal, propose→proposal, arrive→arrival, approve→approval। -ure/-age: fail→failure, press→pressure, mix→mixture। विशेषण से: -ness (happy→happiness, aware→awareness), -ity (able→ability, secure→security), -cy (fluent→fluency, accurate→accuracy), -th (strong→strength, long→length, deep→depth)। और बिना नियम वाले — कंठस्थ करें: poor→poverty, wise→wisdom, free→freedom, high→height, destroy→destruction।",
          },
          examples: [
            {
              wrong: "The pronounce of this word is difficult for beginners.",
              right: "The pronunciation of this word is difficult for beginners.",
              note: { bn: "pronounce→pronunciation — মাঝের স্বর বদলে যায়; maintain→maintenance-ও একই ফাঁদ।", en: "'Pronounce' becomes 'pronunciation' with a vowel shift — 'maintain → maintenance' hides the same trap.", hi: "'pronounce' से 'pronunciation' — स्वर बदल जाता है; 'maintain → maintenance' में भी वैसा ही जाल है।" },
            },
            {
              wrong: "Poorness is not shameful, but the refuse to learn is.",
              right: "Poverty is not shameful, but the refusal to learn is.",
              note: { bn: "poor→poverty কোনো ছাঁচে বসে না, irregular; refuse ক্রিয়ার বিশেষ্য refusal (-al)।", en: "'Poor' does not follow any pattern — it becomes 'poverty'; the noun of the verb 'refuse' is 'refusal'.", hi: "'poor' किसी ढाँचे में नहीं बैठता — 'poverty' होता है; 'refuse' क्रिया की संज्ञा 'refusal'।" },
            },
            {
              wrong: "The explaination in the manual was confusing.",
              right: "The explanation in the manual was confusing.",
              note: { bn: "explain→explanation — explaination বানান নেই; -tion অনুমান করে বাংলাভাষীরা এই ভুল প্রায়ই করেন।", en: "'Explain' becomes 'explanation' — 'explaination' is not a word; guessing '-tion' produces this common error.", hi: "'explain' से 'explanation' — 'explaination' कोई शब्द नहीं; '-tion' अनुमान से यह भूल होती है।" },
            },
            {
              wrong: "Their performence in the final was outstanding.",
              right: "Their performance in the final was outstanding.",
              note: { bn: "perform→performance — -ance, কিন্তু exist→existence-এ -ence; এই জোড়া পাশাপাশি মুখস্থ করুন।", en: "'Perform' gives 'performance' (-ance), but 'exist' gives 'existence' (-ence) — memorise such pairs side by side.", hi: "'perform' से 'performance' (-ance), पर 'exist' से 'existence' (-ence) — ऐसे जोड़े साथ-साथ याद करें।" },
            },
            {
              wrong: "The company is spending more on the developement of new software.",
              right: "The company is spending more on software development.",
              note: { bn: "develop→development (developement নয়); আর জেনেরিক ধারণা 'software development'-এর আগে the-ও লাগে না।", en: "'Develop' becomes 'development' (never 'developement'); and the generic idea 'software development' takes no 'the'.", hi: "'develop' से 'development' ('developement' नहीं); और सामान्य धारणा 'software development' के आगे 'the' नहीं आता।" },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন: নমিনালাইজড লেখা চেনা আর বানানো",
            en: "Signals and patterns: spotting and building nominalised prose",
            hi: "संकेत और पैटर्न: नॉमिनलाइज़्ड गद्य पहचानना और बनाना",
          },
          body: {
            bn: "নমিনালাইজড প্যাটার্ন চেনার তিনটা আভাস। এক, subject-এ বড় abstract noun + of-chain: 'the failure of the company to meet the deadline', 'the refusal of the union to negotiate'। দুই, দুর্বল ক্রিয়ার অবতারণা — cause, lead to, result in, contribute to, involve, take place, have an effect on: এরা মূল কাজটা বিশেষ্যের গায়ে গুঁজে রাখে ('the delay caused a loss' — আসল কাজ delayed আর lost হওয়া)। তিন, বিশেষ্যের সাথে বিশেষণ যেখানে আসলে ক্রিয়া + ক্রিয়াবিশেষণ লুকানো: 'a quick decision' = (someone) decided quickly; 'a sharp increase' = prices increased sharply। এবার নিজে বানাতে গেলে দুই পরীক্ষা। পরীক্ষা এক: এই বিশেষ্যটার পেছনে নিজস্ব ক্রিয়া আছে কি? decision ← decide আছে, তাই বাক্য ঘুরিয়ে ক্রিয়ায় ফেরা সম্ভব। পরীক্ষা দুই: of-এর পরে যে নাউনটা আসছে, তার সাথে সঠিক preposition কী — increase in (not of), effect on (not to), discussion of/on, proposal for, contribution to। ভুল preposition নমিনালাইজড বাক্যেই সবচেয়ে বেশি ধরা পড়ে।",
            en: "Three signals expose nominalised prose. One, a big abstract noun + of-chain as subject: 'the failure of the company to meet the deadline', 'the refusal of the union to negotiate'. Two, weak verb openers — cause, lead to, result in, contribute to, involve, take place, have an effect on — which park the real action inside a noun ('the delay caused a loss' — the real actions were delay and loss). Three, an adjective sitting with a noun where a verb + adverb hides: 'a quick decision' = (someone) decided quickly; 'a sharp increase' = prices increased sharply. To build your own, run two tests. Test one: does this noun have a verb of its own? decision ← decide exists, so you can turn back to a verb. Test two: which preposition follows — increase in (not of), effect on (not to), discussion of/on, proposal for, contribution to. Wrong prepositions are caught most often in nominalised sentences.",
            hi: "नॉमिनलाइज़्ड गद्य की तीन पहचान। एक, subject में बड़ी अमूर्त संज्ञा + of-शृंखला: 'the failure of the company to meet the deadline'। दो, कमज़ोर क्रियाएँ — cause, lead to, result in, contribute to, take place — जो असली कार्य को संज्ञा में छिपा देती हैं ('the delay caused a loss')। तीन, संज्ञा के साथ विशेषण जहाँ क्रिया + क्रिया-विशेषण छिपा है: 'a quick decision' = decided quickly। बनाने के दो परीक्षण: एक, क्या संज्ञा की अपनी क्रिया है? decision ← decide है, तो क्रिया में लौटा जा सकता है। दो, of-शृंखला के बाद कौन-सा preposition — increase in (of नहीं), effect on, discussion of/on, proposal for, contribution to।",
          },
          examples: [
            {
              wrong: "The increase of prices led to a decrease of sales.",
              right: "The increase in prices led to a decrease in sales.",
              note: { bn: "increase/decrease-এর পরে in বসে, of নয় — নমিনালাইজড বিশেষ্যের preposition আলাদাভাবে শিখতে হয়।", en: "'Increase/decrease' take 'in', not 'of' — nominalised nouns need their prepositions learned separately.", hi: "'increase/decrease' के बाद 'in' आता है, 'of' नहीं — नॉमिनलाइज़्ड संज्ञाओं के preposition अलग से सीखने होते हैं।" },
            },
            {
              wrong: "The board made a discussion about the merger for two hours.",
              right: "The board held a discussion of the merger for two hours.",
              note: { bn: "discussion হয় have/hold করে, make দিয়ে নয়; আর discussion of/on — about আনুষ্ঠানিক লেখায় টেনে হাঁটে।", en: "A discussion is had/held, not made; and 'discussion of/on' — 'about' sounds casual in formal prose.", hi: "discussion को have/hold करते हैं, make नहीं; और 'discussion of/on' — औपचारिक गद्य में 'about' कमज़ोर लगता है।" },
            },
            {
              wrong: "Heavy rain resulted that the match was cancelled.",
              right: "Heavy rain resulted in the cancellation of the match.",
              note: { bn: "result in-এর পরে noun phrase — ক্লজ নয়; এখানেই ক্রিয়া cancel-কে cancellation করে নামাতে হয়।", en: "'Result in' takes a noun phrase, not a clause — that is exactly where 'cancel' must become 'cancellation'.", hi: "'result in' के बाद noun phrase आता है, clause नहीं — यहीं 'cancel' को 'cancellation' बनाना पड़ता है।" },
            },
            {
              wrong: "The sudden decided of the board surprised everyone.",
              right: "The board's sudden decision surprised everyone.",
              note: { bn: "decided ক্রিয়া — বিশেষ্য দরকার decision; possessive ('s) দিয়ে কর্তাকে আগে এনেছি — এটাই মসৃণ নমিনালাইজড subject।", en: "'Decided' is a verb — the noun needed is 'decision'; the agent moves up front as a possessive, giving a smooth nominalised subject.", hi: "'decided' क्रिया है — चाहिए संज्ञा 'decision'; कर्ता possessive ('s) में आगे आ जाता है — यही सहज नॉमिनलाइज़्ड subject है।" },
            },
          ],
        },
        {
          heading: {
            bn: "রূপান্তরের ধাপ: 'The government decided quickly' থেকে 'The government's quick decision'",
            en: "The transformation algorithm: from verb-sentence to noun-phrase",
            hi: "रूपांतरण एल्गोरिद्म: क्रिया-वाक्य से संज्ञा-वाक्यांश तक",
          },
          body: {
            bn: "এবার হাতে-কলমে অ্যালগরিদম: 'The government decided quickly on the budget' → 'The government's quick decision on the budget'। ধাপ চারটা। ধাপ ১: মূল ক্রিয়া খুঁজুন — decided; তার বিশেষ্য বানান — decision। ধাপ ২: কর্তাকে বিশেষ্যের সাথে জুড়ুন — সরাসরি possessive (the government's) নয়তো of-phrase (the decision of the government); দীর্ঘ কর্তা হলে of-phrase নিরাপদ: 'the decision of the committee on public transport'। ধাপ ৩: ক্রিয়াবিশেষণকে বিশেষণে — quickly→quick, carefully→careful, sharply→sharp; মনে রাখবেন, বিশেষ্যকে বর্ণনা করে বিশেষণ, ক্রিয়াবিশেষণ নয়। ধাপ ৪: preposition ঠিক করুন — a decision on, an increase in, a ban on, investment in। Article-প্রশ্নে: প্রথম উল্লেখে a/an ('a sharp increase in prices'), নির্দিষ্ট বা আগে-বলা জিনিসে the ('the sharp increase we saw last month')। অনুশীলনের সময় প্রতিটা ধাপ জোরে বলুন — সচেতন বিশ্লেষণ থেকে স্বতঃস্ফূর্ত রূপান্তরে যেতেই হবে।",
            en: "Now the hands-on algorithm: 'The government decided quickly on the budget' → 'The government's quick decision on the budget'. Four steps. Step 1: find the main verb — decided; build its noun — decision. Step 2: attach the agent — direct possessive (the government's) or an of-phrase (the decision of the government); for long agents the of-phrase is safer: 'the decision of the committee on public transport'. Step 3: turn the adverb into an adjective — quickly→quick, carefully→careful, sharply→sharp; a noun is described by an adjective, not an adverb. Step 4: fix the preposition — a decision on, an increase in, a ban on, investment in. Articles: a/an for first mention ('a sharp increase in prices'), the for a specific or already-mentioned one ('the sharp increase we saw last month'). Say every step aloud while practising — you must move from conscious analysis to instant transformation.",
            hi: "अब हाथ से एल्गोरिद्म: 'The government decided quickly on the budget' → 'The government's quick decision on the budget'। चार कदम। १: मुख्य क्रिया खोजें — decided; उसकी संज्ञा बनाएँ — decision। २: कर्ता जोड़ें — possessive (the government's) या of-phrase; लंबे कर्ता में of-phrase सुरक्षित: 'the decision of the committee on public transport'। ३: क्रिया-विशेषण को विशेषण बनाएँ — quickly→quick, carefully→careful; संज्ञा का वर्णन विशेषण से होता है, क्रिया-विशेषण से नहीं। ४: preposition ठीक करें — a decision on, an increase in, a ban on, investment in। Article: पहले उल्लेख पर a/an ('a sharp increase in prices'), निर्दिष्ट पर the। अभ्यास में हर कदम ज़ोर से बोलें — सचेतन विश्लेषण से तुरंत-रूपांतरण तक जाना ही है।",
          },
          examples: [
            {
              wrong: "The quickly decision of the government pleased investors.",
              right: "The government's quick decision pleased investors.",
              note: { bn: "বিশেষ্য decision-কে বর্ণনা করবে বিশেষণ quick, ক্রিয়াবিশেষণ quickly নয় — ধাপ ৩-ই ভুল হয়েছিল।", en: "The noun 'decision' is described by the adjective 'quick', not the adverb 'quickly' — step 3 was the slip.", hi: "संज्ञा 'decision' का वर्णन विशेषण 'quick' करता है, क्रिया-विशेषण 'quickly' नहीं — चूक कदम ३ में थी।" },
            },
            {
              wrong: "The sharp increase prices worried small traders.",
              right: "The sharp increase in prices worried small traders.",
              note: { bn: "increase-এর পরে in আবশ্যক — of-phrase এখানে ভুল preposition।", en: "'Increase' requires 'in' — an of-phrase here is the wrong preposition.", hi: "'increase' के लिए 'in' आवश्यक है — यहाँ of-phrase गलत preposition है।" },
            },
            {
              wrong: "The company expanded rapid into new markets last year.",
              right: "The company's rapid expansion into new markets surprised its rivals last year.",
              note: { bn: "expand→expansion; expansion into — preposition-সহ পুরো প্যাকেজ একসাথে শিখুন।", en: "'Expand' becomes 'expansion'; 'expansion into' — learn the preposition as part of the package.", hi: "'expand' से 'expansion'; 'expansion into' — preposition समेत पूरा पैकेज याद करें।" },
            },
            {
              wrong: "Her analysis of the data carefully impressed the professor.",
              right: "Her careful analysis of the data impressed the professor.",
              note: { bn: "carefully বিশেষ্যের আগে বসে না; বিশেষণ careful-ই সঠিক স্থানে — ধাপ ৩-এর আরেক প্রয়োগ।", en: "An adverb cannot sit before the noun; the adjective 'careful' takes the right slot — another use of step 3.", hi: "क्रिया-विशेषण संज्ञा से पहले नहीं बैठता; विशेषण 'careful' ही सही जगह है — कदम ३ का दूसरा प्रयोग।" },
            },
            {
              wrong: "The students' understand of the topic was still weak.",
              right: "The students' understanding of the topic was still weak.",
              note: { bn: "understand-এর বিশেষ্য রূপ understanding (-ing noun); a better understanding of এমনিতেও জনপ্রিয় collocation।", en: "The noun form of 'understand' is 'understanding' (-ing noun); 'a better understanding of' is a favourite collocation too.", hi: "'understand' की संज्ञा 'understanding' (-ing संज्ञा) है; 'a better understanding of' भी लोकप्रिय collocation है।" },
            },
          ],
        },
        {
          heading: {
            bn: "একাডেমিক ভান্ডার: essay-র প্রতিদিনের ক্রিয়া-বিশেষ্য জোড়া",
            en: "The academic bank: everyday verb-noun pairs for essays",
            hi: "एकेडेमिक भंडार: निबंध की रोज़ की क्रिया-संज्ञा जोड़ियाँ",
          },
          body: {
            bn: "একাডেমিক লেখায় যে ক্রিয়াগুলো প্রতিদিন আসে, তাদের বিশেষ্য জোড়া হাতের মুঠোয় রাখুন: analyse→analysis, argue→argument, conclude→conclusion, compare→comparison, suggest→suggestion, assume→assumption, differ→difference, measure→measurement, evaluate→evaluation, identify→identification, demonstrate→demonstration, establish→establishment, impose→imposition, define→definition, explain→explanation। এবার দেখুন এরা বাক্যে কোথায় বসে। ভূমিকায়: 'This essay presents an evaluation of three policy options' — will talk about-এর আনুষ্ঠানিক প্রতিশব্দ। মূল অংশে: 'The analysis reveals two patterns', 'A closer comparison of the data shows...'। উপসংহারে: 'In conclusion, the evidence suggests...'। আর আনুষ্ঠানিক দূরত্বের জন্য passive + nominalisation জুটি: 'Careful consideration was given to the environmental impact' — কে ভাবল, তা বলার দরকার নেই। একটা সতর্কতা: প্রতিটা বাক্যে এই ছাঁচ চালালে লেখা নিস্তেজ হয়; ভালো essay ক্রিয়া-বাক্য আর বিশেষ্য-বাক্যের ছন্দ মেলায় — ঘন বিশ্লেষণে বিশেষ্য, দাবি পরিষ্কার করতে ক্রিয়া।",
            en: "Keep the noun twins of everyday academic verbs in your pocket: analyse→analysis, argue→argument, conclude→conclusion, compare→comparison, suggest→suggestion, assume→assumption, differ→difference, measure→measurement, evaluate→evaluation, identify→identification, demonstrate→demonstration, establish→establishment, impose→imposition, define→definition, explain→explanation. Now see where they sit. In introductions: 'This essay presents an evaluation of three policy options'. In the body: 'The analysis reveals two patterns', 'A closer comparison of the data shows...'. In conclusions: 'In conclusion, the evidence suggests...'. And for formal distance, pair passive with nominalisation: 'Careful consideration was given to the environmental impact' — who considered it need not be said. One warning: if every sentence uses this template, the essay goes flat; good essays alternate verb-sentences and noun-sentences — nouns for dense analysis, verbs for clear claims.",
            hi: "रोज़ की एकेडेमिक क्रियाओं के संज्ञा-जुड़वाँ जेब में रखें: analyse→analysis, argue→argument, conclude→conclusion, compare→comparison, suggest→suggestion, assume→assumption, differ→difference, measure→measurement, evaluate→evaluation, identify→identification, demonstrate→demonstration, establish→establishment, impose→imposition, define→definition, explain→explanation। अब देखें वे वाक्य में कहाँ बैठते हैं। भूमिका में: 'This essay presents an evaluation of three policy options'। मुख्य भाग में: 'The analysis reveals two patterns', 'A closer comparison of the data shows...'। निष्कर्ष में: 'In conclusion, the evidence suggests...'। औपचारिक दूरी के लिए passive + संज्ञा: 'Careful consideration was given to the environmental impact' — किसने विचार किया, कहना ज़रूरी नहीं। चेतावनी: हर वाक्य में यह ढाँचा चलेगा तो निबंध निथर हो जाएगा; अच्छे निबंध क्रिया-वाक्य और संज्ञा-वाक्य की लय मिलाते हैं।",
          },
          examples: [
            {
              wrong: "In this essay, I am going to look at the data and then say what I think.",
              right: "This essay presents an analysis of the data and reaches a clear conclusion.",
              note: { bn: "look at→analysis, say what I think→conclusion — ভূমিকার দুটো বাক্যই আনুষ্ঠানিক রূপে বদলাল।", en: "'Look at' becomes 'analysis' and 'say what I think' becomes 'conclusion' — both introduction sentences move into formal dress.", hi: "'look at' से 'analysis', 'say what I think' से 'conclusion' — भूमिका के दोनों वाक्य औपचारिक रूप में बदले।" },
            },
            {
              wrong: "The writer argued good, but his prove was weak.",
              right: "The writer argued persuasively, but his evidence was weak.",
              note: { bn: "prove ক্রিয়া, proof বিশেষ্য — তবে প্রমাণ-অর্থে একাডেমিক শব্দ evidence; 'his prove' বাংলাভাষীদের ক্লাসিক ভুল।", en: "'Prove' is a verb and 'proof' the noun — but the academic word for proof is 'evidence'; 'his prove' is a classic Bengali-speaker slip.", hi: "'prove' क्रिया है, 'proof' संज्ञा — पर प्रमाण के लिए एकेडेमिक शब्द 'evidence' है; 'his prove' बांग्लाभाषियों की क्लासिक चूक।" },
            },
            {
              wrong: "The conclusion of the researcher was different than the assumption.",
              right: "The researcher's conclusion differed from the initial assumption.",
              note: { bn: "differ from (different than নয়); আর এখানে ক্রিয়া-রূপ differed-ই শক্তিশালী — সব কিছু বিশেষ্য করতে হবে না।", en: "'Differ from' (not 'different than'); and here the verb 'differed' is actually stronger — not everything must become a noun.", hi: "'differ from' ('different than' नहीं); और यहाँ क्रिया 'differed' ही बलवान — सब कुछ संज्ञा बनाना ज़रूरी नहीं।" },
            },
            {
              wrong: "The government did a reduction of the tax on electric cars.",
              right: "The government reduced the tax on electric cars.",
              note: { bn: "did a reduction of-এর মতো dummy-ভারী গুচ্ছ অপ্রয়োজনীয় — একটা ক্রিয়া reduced-ই কাজ শেষ করে দেয়।", en: "A dummy-heavy chunk like 'did a reduction of' is unnecessary — one verb, 'reduced', finishes the job.", hi: "'did a reduction of' जैसा dummy-भारी गुच्छ अनावश्यक है — एक क्रिया 'reduced' काम पूरा कर देती है।" },
            },
            {
              wrong: "The growth of economy depends on the invest in education.",
              right: "The growth of the economy depends on investment in education.",
              note: { bn: "economy-র আগে the; invest→investment; investment in education — preposition-সহ জোড়া।", en: "'The economy' takes 'the'; 'invest' becomes 'investment'; and 'investment in education' — the pair comes with its preposition.", hi: "'economy' के साथ 'the'; 'invest' से 'investment'; और 'investment in education' — जोड़ी preposition समेत आती है।" },
            },
          ],
        },
        {
          heading: {
            bn: "যখন লেখা ভারী হয়ে যায়: zombie noun থেকে মুক্তি",
            en: "When prose gets heavy: escaping zombie nouns",
            hi: "जब गद्य भारी हो जाए: zombie संज्ञाओं से मुक्ति",
          },
          body: {
            bn: "লেখক-সমালোচক Helen Sword এদের ডাকেন zombie nouns — যে বিশেষ্যেরা মূল ক্রিয়াকে খেয়ে ফেলে, কর্তাকে ঢেকে ফেলে। উপসর্গ: এক বাক্যে তিনটার বেশি -tion/-ment/-ance বিশেষ্য, দুর্বল ক্রিয়া (was carried out, took place, occurred), আর হারিয়ে যাওয়া মানুষ। 'The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school' — চারটা zombie এক বাক্যে; পড়ার পরে মনে থাকে কী? কিছুই না। মুক্তির তিন রাস্তা। এক: সবচেয়ে গুরুত্বপূর্ণ একটা nominalisation রাখুন, বাকিদের ক্রিয়ায় ফেরান — 'The school used digital tools to make learning easier' (used ফিরে এল, facilitation হলো easier)। দুই: কর্তাকে ফিরিয়ে আনুন — 'the committee postponed' লেখাটা 'a decision was taken regarding the postponement'-এর চেয়ে স্বচ্ছ। তিন: ল্যাটিন-জাত শব্দকে সহজ শব্দে — utilise→use, facilitate→help, commence→start; একাডেমিক লেখাও ছোট হতে পারে। মনে রাখবেন: নমিনালাইজেশন মশলা, খাবার নয় — ঘন একাডেমিক গদ্যে সামান্য, গল্পে প্রায় শূন্য।",
            en: "The editor Helen Sword calls them zombie nouns — nouns that eat the verb and bury the agent. Symptoms: more than three -tion/-ment/-ance nouns in one sentence, weak verbs (was carried out, took place, occurred), and missing people. 'The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school' — four zombies in one sentence; what remains in the reader's mind? Nothing. Three cures. One: keep the single most important nominalisation and turn the rest back into verbs — 'The school used digital tools to make learning easier'. Two: bring the agent back — 'the committee postponed' is clearer than 'a decision was taken regarding the postponement'. Three: swap Latin words for plain ones — utilise→use, facilitate→help, commence→start; academic prose can be short too. Remember: nominalisation is a spice, not the meal — a pinch in dense academic writing, almost none in stories.",
            hi: "संपादक Helen Sword इन्हें zombie nouns कहती हैं — संज्ञाएँ जो क्रिया खा जाती हैं और कर्ता को दफ़ना देती हैं। लक्षण: एक वाक्य में तीन से अधिक -tion/-ment/-ance संज्ञाएँ, कमज़ोर क्रियाएँ (was carried out, took place), और गायब लोग। तीन उपचार। एक: सबसे ज़रूरी एक nominalisation रखें, बाकी क्रिया में लौटाएँ — 'The school used digital tools to make learning easier'। दो: कर्ता वापस लाएँ — 'the committee postponed' कहना साफ़ है। तीन: लैटिन शब्दों को सरल शब्दों से बदलें — utilise→use, facilitate→help, commence→start; एकेडेमिक गद्य भी छोटा हो सकता है। स्मरण रहे: nominalisation मसाला है, भोजन नहीं — घने एकेडेमिक लेखन में चुटकी भर, कहानी में लगभग शून्य।",
          },
          examples: [
            {
              wrong: "The implementation of the utilisation of digital tools for the facilitation of learning was carried out by the school.",
              right: "The school used digital tools to make learning easier.",
              note: { bn: "চারটা -tion noun, দুর্বল ক্রিয়া, লুকানো কর্তা — তিনটাই zombie-এর লক্ষণ; একটা ক্রিয়া used-ই বাক্য জীবন্ত করে।", en: "Four -tion nouns, a weak verb, a buried agent — all three zombie symptoms; one plain verb, 'used', revives the sentence.", hi: "चार -tion संज्ञाएँ, कमज़ोर क्रिया, दफ़न कर्ता — तीनों zombie के लक्षण; एक सरल क्रिया 'used' वाक्य जीवंत कर देती है।" },
            },
            {
              wrong: "A decision was taken by the committee for the postponement of the announcement of the results.",
              right: "The committee postponed the announcement of the results.",
              note: { bn: "একটা nominalisation রাখুন (announcement); postponement-কে আবার ক্রিয়া postponed করে দিন।", en: "Keep one nominalisation ('announcement'); turn 'postponement' back into the verb 'postponed'.", hi: "एक nominalisation रखें ('announcement'); 'postponement' को फिर क्रिया 'postponed' बना दें।" },
            },
            {
              wrong: "The teacher gave an explanation of the reason for the failure of the students in the examination.",
              right: "The teacher explained why the students had failed the exam.",
              note: { bn: "give an explanation of = explain — of-chain ভেঙে ক্রিয়ায় ফেরালে বাক্য অর্ধেক হয়ে যায়।", en: "'Give an explanation of' = explain — breaking the of-chain and returning to the verb halves the sentence.", hi: "'give an explanation of' = explain — of-शृंखला तोड़कर क्रिया में लौटने से वाक्य आधा हो जाता है।" },
            },
            {
              wrong: "There was a rapid increase in the price of fuel which caused a decrease in the number of passengers on buses.",
              right: "Fuel prices rose sharply, so fewer passengers travelled by bus.",
              note: { bn: "সংবাদ-শিরোনামের মতো noun chain ব্লগ বা বক্তৃতায় অতিরিক্ত; ক্রিয়া-ভিত্তিক সংস্করণ প্রাণবন্ত ও সহজ।", en: "A headline-style noun chain is too much for a blog or a talk; the verb-driven version is lively and easy.", hi: "सुर्ख़ी-शैली की संज्ञा-शृंखला ब्लॉग या भाषण के लिए अतिरिक्त है; क्रिया-प्रधान रूप जीवंत और सरल है।" },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors of advanced learners",
            hi: "उच्च स्तर के शिक्षार्थियों की सूक्ष्म चूकें",
          },
          body: {
            bn: "C1 পর্যায়ের বাংলাভাষীদের সবচেয়ে ঘন ঘন পাঁচটা পা। এক, uncountable ফাঁদ: বাংলায় 'তথ্যগুলো', 'উপদেশগুলো', 'গবেষণাগুলো' বলি বলে ইংরেজিতে informations, advices, researches লিখে ফেলি — এদের কেউ plural নয়: information, advice, research, evidence, feedback, progress, knowledge, luggage। দুই, do/make গুলিয়ে ফেলা: make a decision, make progress, make a suggestion; do research — 'do a decision' কেউ বলে না। তিন, ধার-করা বিশেষ্যের সাথে বাংলা ক্রিয়া: 'ডিসকাশন করা', 'সার্ভে করা', 'রিপোর্ট করা' — কিন্তু ইংরেজিতে hold/have a discussion, conduct/carry out a survey, submit a report, follow up on a request; ধার করলে ক্রিয়া-জুটিও ধার করতে হবে। চার, বিশেষ্যের পরে preposition: discussion of/on (about নয়), impact on, research on/into, contribution to, ban on, reason for। পাঁচ, article: প্রথমবার a/an ('a significant reduction'), নির্দিষ্ট বা আগে-বলা জিনিসে the ('the reduction we discussed'); জেনেরিক ধারণায় অনেক সময় কিছুই না। এই পাঁচটা ঠিক করলেই লেখা তৎক্ষণাৎ native-এর মতো গোছানো লাগে।",
            en: "At C1, Bengali speakers stumble most often on five stones. One, the uncountable trap: because Bengali says 'তথ্যগুলো', 'উপদেশগুলো', we write informations, advices, researches — none of these take a plural: information, advice, research, evidence, feedback, progress, knowledge, luggage. Two, do/make confusion: make a decision, make progress, make a suggestion; do research — nobody says 'do a decision'. Three, borrowed nouns keep Bengali verbs: 'ডিসকাশন করা', 'সার্ভে করা', 'রিপোর্ট করা' — but English wants hold/have a discussion, conduct/carry out a survey, submit a report, follow up on a request; when you borrow the noun, borrow the verb too. Four, prepositions after nouns: discussion of/on (not about), impact on, research on/into, contribution to, ban on, reason for. Five, articles: a/an for first mention ('a significant reduction'), the when specific or already mentioned ('the reduction we discussed'); generic ideas often take nothing. Fix these five and your prose instantly looks tidier.",
            hi: "C1 पर बांग्लाभाषी सबसे अधिक पाँच जगह ठोकर खाते हैं। एक, uncountable जाल: 'जानकारियाँ', 'सलाहें' की आदत से informations, advices, researches लिख देते हैं — इनमें से कोई plural नहीं: information, advice, research, evidence, feedback, progress, knowledge, luggage। दो, do/make भ्रम: make a decision, make progress; do research — 'do a decision' कोई नहीं कहता। तीन, उधार ली संज्ञा के साथ बांग्ला क्रिया — 'डिसकशन करा', 'सर्वे करा' — पर अंग्रेज़ी चाहती है hold a discussion, conduct a survey, submit a report; संज्ञा उधार ली तो क्रिया-जोड़ी भी उधार लें। चार, संज्ञा के बाद preposition: discussion of/on (about नहीं), impact on, research on/into, contribution to, ban on, reason for। पाँच, article: पहले उल्लेख पर a/an, विशिष्ट पर the; सामान्य धारणा में प्रायः कुछ नहीं। ये पाँच ठीक करें तो लेखन तुरंत गुठित दिखेगा।",
          },
          examples: [
            {
              wrong: "The ministry gave many informations to the press about the new policy.",
              right: "The ministry gave the press a great deal of information about the new policy.",
              note: { bn: "information uncountable — many informations নেই; পরিমাণ বোঝাতে a great deal of / much / a lot of।", en: "'Information' is uncountable — 'many informations' does not exist; use 'a great deal of / much / a lot of' for quantity.", hi: "'information' uncountable है — 'many informations' नहीं; मात्रा के लिए 'a great deal of / much / a lot of'।" },
            },
            {
              wrong: "We made a survey among 500 students and did a research about their habits.",
              right: "We conducted a survey of 500 students and did research on their habits.",
              note: { bn: "conduct/carry out a survey (of); do research (on/into) — make/do জুটির খেয়াল রাখুন।", en: "Conduct/carry out a survey (of); do research (on/into) — watch the make/do pairing.", hi: "conduct/carry out a survey (of); do research (on/into) — make/do की जोड़ी पर ध्यान दें।" },
            },
            {
              wrong: "The teacher gave us useful advices and a strong feedback.",
              right: "The teacher gave us useful advice and strong feedback.",
              note: { bn: "advice, feedback uncountable — plural -s নেই, a-ও নেই।", en: "'Advice' and 'feedback' are uncountable — no plural -s, no 'a'.", hi: "'advice' और 'feedback' uncountable हैं — plural -s नहीं, 'a' भी नहीं।" },
            },
            {
              wrong: "The principal asked us to do a discussion about the proposal and give a report to him quickly.",
              right: "The principal asked us to hold a discussion of the proposal and submit a report promptly.",
              note: { bn: "hold/have a discussion of; submit a report — ধার-করা বিশেষ্যের ইংরেজি ক্রিয়া-জুটি শিখে নিন।", en: "Hold/have a discussion of; submit a report — learn the English verb that comes with each borrowed noun.", hi: "hold/have a discussion of; submit a report — हर उधार संज्ञा के साथ आनेवाली अंग्रेज़ी क्रिया सीखें।" },
            },
            {
              wrong: "Despite of the failure of the plan, the team did a good progress.",
              right: "Despite the failure of the plan, the team made good progress.",
              note: { bn: "despite of নেই (despite বা in spite of); make progress — do নয়।", en: "'Despite of' does not exist (despite or in spite of); and 'make progress', not 'do'.", hi: "'despite of' अस्तित्व में नहीं (despite या in spite of); और 'make progress', 'do' नहीं।" },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট লেখায় দেখা যাক",
            en: "See it in a short passage",
            hi: "छोटे अंश में देखें",
          },
          body: {
            bn: "নিচের অনুচ্ছেদটা একটা গবেষণা-সারসংক্ষেপের ভঙ্গিতে — দেখুন কোথায় কোথায় nominalisation কাজ করছে: 'Urban traffic congestion in Dhaka has worsened over the last decade. The rapid growth of the city, combined with the failure of public transport to expand, has caused a sharp increase in travel time. A recent study by the university's transport lab offers an analysis of the problem and a proposal for improvement: the construction of dedicated bus lanes and a reduction in private-car use. The government's adoption of these recommendations would bring a significant reduction in congestion.' এখানে ছয়টা নমিনালাইজড subject-ই বাক্যকে সংযত, গবেষণার মতো শোনাচ্ছে — একই কথা ক্রিয়া-ভিত্তিক করলে ('Dhaka has grown fast, buses did not expand, so people take more time') তথ্য সব থাকে, কিন্তু গাম্ভীর্য চলে যায়। এক নজরে: (১) ক্রিয়া→বিশেষ্য: decide→decision, increase→the increase in...; (২) ক্রিয়াবিশেষণ→বিশেষণ: quickly→quick decision; (৩) কর্তা possessive ('s) বা of-phrase-এ; (৪) preposition-জুটি: increase in, effect on, proposal for, contribution to; (৫) uncountable: information, research, advice, evidence, progress; (৬) এক বাক্যে ৩+ -tion noun দেখলে zombie সতর্কবার্তা।",
            en: "The paragraph below is written like a research abstract — watch where nominalisation works: 'Urban traffic congestion in Dhaka has worsened over the last decade. The rapid growth of the city, combined with the failure of public transport to expand, has caused a sharp increase in travel time. A recent study by the university's transport lab offers an analysis of the problem and a proposal for improvement: the construction of dedicated bus lanes and a reduction in private-car use. The government's adoption of these recommendations would bring a significant reduction in congestion.' Six nominalised subjects keep the prose measured and research-like — make it verb-driven ('Dhaka has grown fast, buses did not expand, so people take more time') and the facts survive but the gravity is gone. At a glance: (1) verb→noun: decide→decision, the increase in...; (2) adverb→adjective: quickly→quick decision; (3) agent as possessive or of-phrase; (4) preposition pairs: increase in, effect on, proposal for, contribution to; (5) uncountables: information, research, advice, evidence, progress; (6) three or more -tion nouns in one sentence = zombie alert.",
            hi: "नीचे का अनुच्छेद शोध-सार की शैली में है — देखें कहाँ-कहाँ nominalisation काम कर रही है: 'Urban traffic congestion in Dhaka has worsened over the last decade. The rapid growth of the city, combined with the failure of public transport to expand, has caused a sharp increase in travel time. A recent study by the university's transport lab offers an analysis of the problem and a proposal for improvement: the construction of dedicated bus lanes and a reduction in private-car use. The government's adoption of these recommendations would bring a significant reduction in congestion.' छह नॉमिनलाइज़्ड subjects गद्य को संयत और शोध-सदृश्य बनाते हैं — क्रिया-प्रधान कर दें तो तथ्य बचते हैं पर गंभीरता चली जाती है। संक्षेप में: (१) क्रिया→संज्ञा; (२) क्रिया-विशेषण→विशेषण; (३) कर्ता possessive या of-phrase में; (४) preposition-जोड़े; (५) uncountable शब्द; (६) एक वाक्य में ३+ -tion संज्ञा = zombie चेतावनी।",
          },
          examples: [
            {
              wrong: "Traffic in Dhaka became very bad more and more in the last ten years.",
              right: "Traffic congestion in Dhaka has worsened over the last decade.",
              note: { bn: "has worsened + over the last decade — দুটো আনুষ্ঠানিক পছন্দই গবেষণা-ভঙ্গি দেয়।", en: "'Has worsened' + 'over the last decade' — both formal choices create the research tone.", hi: "'has worsened' + 'over the last decade' — दोनों औपचारिक चुनाव शोध-शैली देते हैं।" },
            },
            {
              wrong: "The study did an analysis about the problem and gave a proposal of improvement.",
              right: "The study offers an analysis of the problem and a proposal for improvement.",
              note: { bn: "offer an analysis of; a proposal for — analysis about/proposal of-এর preposition ভুল।", en: "'Offer an analysis of'; 'a proposal for' — 'analysis about' and 'proposal of' use the wrong prepositions.", hi: "'offer an analysis of'; 'a proposal for' — 'analysis about' और 'proposal of' में preposition गलत है।" },
            },
            {
              wrong: "If the government adopt these recommendations, congestion will reduce significantly.",
              right: "The government's adoption of these recommendations would bring a significant reduction in congestion.",
              note: { bn: "subject-এ বিশেষ্য (adoption) ধরলে বাক্য আনুষ্ঠানিক ও ভবিষ্যদ্বাণী-সুরের হয়; report-ভঙ্গিতে would bring + reduction বেশি মানানসই।", en: "Making the noun 'adoption' the subject gives the sentence a formal, predictive tone; in report style 'would bring + reduction' fits better.", hi: "संज्ञा 'adoption' को subject बनाने से वाक्य औपचारिक और भविष्यवाणी-सुर में हो जाता है; रिपोर्ट-शैली में 'would bring + reduction' बेहतर।" },
            },
          ],
        },
      ],
      tips: [
        { bn: "প্রতিদিন পাঁচটা ক্রিয়া বিশেষ্যে বদলান: decide, inform, explain, discuss, analyse, reduce — তারপর উল্টো দিকেও।", en: "Turn five verbs into nouns daily: decide, inform, explain, discuss, analyse, reduce — then back again.", hi: "रोज़ पाँच क्रियाएँ संज्ञा में बदलें: decide, inform, explain, discuss, analyse, reduce — फिर उलटी दिशा में भी।" },
        { bn: "Essay-তে will talk about→examines, look at→an analysis of, say what I think→a conclusion — ভূমিকার ছাঁচ মুখস্থ করুন।", en: "In essays: will talk about→examines, look at→an analysis of, say what I think→a conclusion — memorise the introduction template.", hi: "निबंध में: will talk about→examines, look at→an analysis of, say what I think→a conclusion — भूमिका का ढाँचा कंठस्थ करें।" },
        { bn: "ক্রিয়াবিশেষণ→বিশেষণ নিয়ম বারবার মনে করুন: quickly→quick decision, carefully→careful analysis।", en: "Repeat the adverb→adjective rule: quickly→quick decision, carefully→careful analysis.", hi: "क्रिया-विशेषण→विशेषण नियम दोहराएँ: quickly→quick decision, carefully→careful analysis।" },
        { bn: "Uncountable তালিকা মুখস্থ: information, advice, research, evidence, feedback, progress, knowledge — কোনোটাই plural নয়।", en: "Memorise the uncountables: information, advice, research, evidence, feedback, progress, knowledge — none take a plural.", hi: "uncountable तालिका कंठस्थ करें: information, advice, research, evidence, feedback, progress, knowledge — कोई plural नहीं।" },
        { bn: "ক্রিয়া-জুটি শিখুন: make a decision/progress, do research, conduct a survey, hold a discussion, submit a report, reach a conclusion।", en: "Learn the verb pairs: make a decision/progress, do research, conduct a survey, hold a discussion, submit a report, reach a conclusion.", hi: "क्रिया-जोड़ियाँ सीखें: make a decision/progress, do research, conduct a survey, hold a discussion, submit a report, reach a conclusion।" },
        { bn: "Preposition-জুটি: increase in, effect on, discussion of, proposal for, contribution to, ban on।", en: "Preposition pairs: increase in, effect on, discussion of, proposal for, contribution to, ban on.", hi: "preposition-जोड़े: increase in, effect on, discussion of, proposal for, contribution to, ban on।" },
        { bn: "Zombie পরীক্ষা: এক বাক্যে তিনটার বেশি -tion/-ment থাকলে একটা রেখে বাকিগুলো ক্রিয়ায় ফেরান।", en: "Zombie test: more than three -tion/-ment nouns in a sentence — keep one, turn the rest back into verbs.", hi: "zombie परीक्षण: एक वाक्य में तीन से अधिक -tion/-ment — एक रखें, बाकी क्रिया में लौटाएँ।" },
        { bn: "সংবাদ-শিরোনাম পড়ুন: 'Sharp rise in fuel prices' — শিরোনামই সংকুচিত nominalisation।", en: "Read news headlines: 'Sharp rise in fuel prices' — a headline is compressed nominalisation.", hi: "समाचार-शीर्षक पढ़ें: 'Sharp rise in fuel prices' — शीर्षक ही संकुचित nominalisation है।" },
        { bn: "IELTS-এ ছন্দ মেলান: এক বাক্য ক্রিয়া-ভিত্তিক, পরের বাক্য বিশেষ্য subject — cohesion examiner-এর চোখেই পড়ে।", en: "In IELTS, alternate the rhythm: one verb-driven sentence, then a noun-subject sentence — examiners notice the cohesion.", hi: "IELTS में लय मिलाएँ: एक क्रिया-प्रधान वाक्य, फिर संज्ञा-subject वाक्य — examiner संबद्धता देख लेता है।" },
      ],
      quiz: [
        {
          question: "Which sentence correctly nominalises 'The government decided quickly'?",
          options: ["The quickly decision of the government", "The government's quick decision", "The government quick decision quickly", "The decision of quickly government"],
          answer: 1,
          explanation: { bn: "ক্রিয়াবিশেষণ quickly বিশেষণ quick হয়ে বিশেষ্য decision-কে বর্ণনা করে; কর্তা possessive রূপে (the government's) আগে আসে।", en: "The adverb becomes the adjective 'quick' describing the noun 'decision'; the agent appears as a possessive.", hi: "क्रिया-विशेषण 'quick' विशेषण बनकर संज्ञा 'decision' का वर्णन करता है; कर्ता possessive रूप में आता है।" },
        },
        {
          question: "Choose the correct pair of nouns.",
          options: ["Poorness / refuse", "Poverty / refusal", "Poverty / refusion", "Poorment / refusal"],
          answer: 1,
          explanation: { bn: "poor→poverty irregular; refuse ক্রিয়ার বিশেষ্য refusal — 'poorness' বা 'refusion' কোনোটাই শব্দ নয়।", en: "'Poor' becomes the irregular 'poverty'; the noun of 'refuse' is 'refusal' — 'poorness' and 'refusion' are not words.", hi: "'poor' से अनियमित 'poverty'; 'refuse' की संज्ञा 'refusal' — 'poorness' और 'refusion' शब्द ही नहीं।" },
        },
        {
          question: "The committee postponed ___ the results.",
          options: ["the announce of", "the announcement of", "announcing of", "the announce for"],
          answer: 1,
          explanation: { bn: "announce ক্রিয়ার বিশেষ্য announcement; 'postpone the announcement of the results' — of-phrase-সহ জোড়া।", en: "The noun of 'announce' is 'announcement'; the fixed pattern is 'postpone the announcement of the results'.", hi: "'announce' क्रिया की संज्ञा 'announcement'; नियत रूप है 'postpone the announcement of the results'।" },
        },
        {
          question: "Which is correct in formal writing?",
          options: ["many informations", "several informations", "a great deal of information", "many information"],
          answer: 2,
          explanation: { bn: "information uncountable — plural নেই, many-ও নয়; পরিমাণে a great deal of / much / a lot of।", en: "'Information' is uncountable — no plural and no 'many'; quantity takes 'a great deal of / much / a lot of'.", hi: "'information' uncountable है — plural नहीं, 'many' भी नहीं; मात्रा के लिए 'a great deal of / much / a lot of'।" },
        },
        {
          question: "Heavy rain resulted ___ the cancellation of the match.",
          options: ["to", "of", "in", "for"],
          answer: 2,
          explanation: { bn: "result in + noun phrase — এই কারণেই ক্রিয়া cancel বিশেষ্য cancellation হয়েছে।", en: "'Result in' takes a noun phrase — which is exactly why 'cancel' had to become 'cancellation'.", hi: "'result in' के बाद noun phrase — इसीलिए 'cancel' को 'cancellation' बनना पड़ा।" },
        },
        {
          question: "Which sentence fits casual conversation best?",
          options: ["The implementation of the rescheduling of the event has occurred.", "They rescheduled the event.", "The event's rescheduling was implemented.", "Rescheduling of the event has taken place."],
          answer: 1,
          explanation: { bn: "কথোপকথনে ক্রিয়া-ভিত্তিক, কর্তা-সহ সহজ বাক্যই স্বাভাবিক — বিশেষ্যের স্তূপ রোবটিক শোনায়।", en: "In conversation, a simple verb-driven sentence with a clear agent is natural — piles of nouns sound robotic.", hi: "बातचीत में क्रिया-प्रधान, स्पष्ट कर्ता वाला सरल वाक्य स्वाभाविक है — संज्ञाओं का ढेर रोबॉटिक लगता है।" },
        },
        {
          question: "Pick the correct spelling.",
          options: ["Explaination", "Explanation", "Explanasion", "Explamesion"],
          answer: 1,
          explanation: { bn: "explain→explanation — explaination বানান নেই; এই জাতীয় বানান-বদলের তালিকা নোট করুন।", en: "'Explain' → 'explanation' — 'explaination' is a misspelling; note down such spelling shifts.", hi: "'explain' → 'explanation' — 'explaination' गलत वर्तनी है; ऐसे वर्तनी-बदल नोट करें।" },
        },
        {
          question: "The board held a ___ of the merger.",
          options: ["discussion", "discuss", "discussing", "discussive"],
          answer: 0,
          explanation: { bn: "hold a discussion — discussion বিশেষ্য; discuss ক্রিয়া, এখানে article a-র পরে বিশেষ্যই লাগবে।", en: "'Hold a discussion' — 'discussion' is the noun; 'discuss' is a verb, and after the article 'a' a noun is needed.", hi: "'hold a discussion' — 'discussion' संज्ञा है; 'discuss' क्रिया है, article 'a' के बाद संज्ञा चाहिए।" },
        },
        {
          question: "Best report version of 'Fuel prices went up fast, so bus travel dropped.'?",
          options: ["Sharp increase in fuel prices was there and bus travel dropped", "The sharp increase in fuel prices led to a decline in bus travel", "Fuel prices increased fast and buses became less", "Prices went up sharply and less people used buses"],
          answer: 1,
          explanation: { bn: "lead to + noun phrase (a decline in...) — প্রতিবেদনের সুর; 'less people' ভুল (fewer people)।", en: "'Lead to' + noun phrase ('a decline in...') gives the report tone; 'less people' is wrong (fewer people).", hi: "'lead to' + noun phrase ('a decline in...') रिपोर्ट-सुर देता है; 'less people' गलत है (fewer people)।" },
        },
      ],
    },
  },
  /* ── 2. Ellipsis & Substitution ──────────────────────────────────────── */
  {
    topic: "Ellipsis & Substitution",
    level: "advanced",
    title: "Ellipsis & Substitution",
    unit: 0,
    data: {
      title: {
        bn: "এলিপসিস ও সাবস্টিটিউশন (শব্দ বাদ ও প্রতিস্থাপন)",
        en: "Ellipsis & Substitution",
        hi: "एलिप्सिस और सब्स्टिट्यूशन (शब्द हटाना और प्रतिस्थापन)",
      },
      intro: {
        bn: "একই কথা দুইবার বলা ইংরেজির কাছে অপরাধ নয়, কিন্তু অশোভন — শ্রোতা যা আগেই জানে, সেটা ফেরত দেওয়া তাকে ছোট করে দেখায়। এই পাঠে দুই কৌশল শিখব: ellipsis — পুনরাবৃত্ত শব্দ একেবারে বাদ দেওয়া ('She can sing and dance') — আর substitution — ছোট শব্দ দিয়ে জায়গা ভরাট (do, one, so, that of)। আগে Linking Words & Connectors আর Reported Speech Basics পাঠ শেষ করে নিন — clause-জোড়া আর auxiliary-নিয়ম এখানে বারবার কাজে লাগবে। একটা সতর্কতা আগেই: বাংলায় কর্তা বাদ যায় ('গেছি'), কিন্তু ইংরেজিতে বাদ যায় পুনরাবৃত্ত ক্রিয়া-গুচ্ছ, কর্তা নয় — এই পার্থক্যটাই এই পাঠের কেন্দ্র।",
        en: "Repeating yourself is not a crime in English, but it is poor style — giving the listener back what they already know talks down to them. In this lesson you learn two devices: ellipsis — leaving repeated words out entirely ('She can sing and dance') — and substitution — filling the slot with a small word (do, one, so, that of). Please finish Linking Words & Connectors and Reported Speech Basics first; clause-joining and auxiliary rules will be used throughout. One warning up front: Bengali drops subjects ('গেছি'), but English drops repeated verb phrases, not subjects — that difference is the heart of this lesson.",
        hi: "एक ही बात दोहराना अंग्रेज़ी में अपराध नहीं, पर खराब शैली है — श्रोता जो पहले से जानता है वह लौटाना उसे छोटा समझाना है। इस पाठ में दो तकनीकें सीखेंगे: ellipsis — दोहराए गए शब्द पूरी तरह हटाना ('She can sing and dance') — और substitution — छोटे शब्द से जगह भरना (do, one, so, that of)। पहले Linking Words & Connectors और Reported Speech Basics पूरे करें; clause-जोड़ना और auxiliary नियम यहाँ बार-बार काम आएँगे। एक चेतावनी पहले ही: बांग्ला में कर्ता हट जाता है ('गेछि'), पर अंग्रेज़ी में दोहराया क्रिया-समूह हटता है, कर्ता नहीं — यही फ़र्क़ इस पाठ का केंद्र है।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: একই কথা দুবার না বলার বিদ্যা",
            en: "When to use it: the art of not saying things twice",
            hi: "कब इस्तेमाल होता है: एक ही बात दो बार न कहने की विद्या",
          },
          body: {
            bn: "ভাষার একটা মূল নিয়ম — যা শ্রোতা আগে থেকেই জানে, তা আবার বলতে হয় না। 'She can sing and she can dance' — দ্বিতীয় she can শ্রোতার কাছে একেবারেই অনুমেয়, তাই মুখের ভাষায় সেটা ঝরে পড়ে: 'She can sing and dance'। এই বাদ-দেওয়ার নাম ellipsis; আর বাদ না দিয়ে ছোট শব্দ (do, one, so) দিয়ে জায়গা ভরাট করার নাম substitution। কথোপকথনে এরা ছন্দ তৈরি করে — শর্ট আনসার, ইকো-প্রশ্ন, 'Me too', 'Why not?'। লেখায় এরা পুনরাবৃত্তি কমিয়ে সংযম আনে — essay-তে একই noun phrase পাঁচবার ফেরত আসলে লেখা কর্কশ হয়ে যায়। বাংলাভাষীদের জন্য জরুরি একটা বিষয় আগেই পরিষ্কার করি: বাংলায় কর্তা-সর্বনাম বাদ যায় ('গেছি', 'খাব', 'ভালো আছি') — ইংরেজিতে সেই স্বাধীনতা নেই; ইংরেজি বাদ দেয় পুনরাবৃত্ত ক্রিয়া-গুচ্ছ, কর্তা নয়। 'Went', 'Is fine', 'Did homework' — এগুলো ellipsis নয়, ভাঙা বাক্য। আরেকটা সীমা: বাদ যাওয়া শব্দ অবশ্যই ঠিক আশপাশের বাক্যে হুবহু পাওয়া যেতে হবে — শ্রোতা যদি ফিরিয়ে আনতে না পারে, তাহলে বাদ দেওয়াই ভুল।",
            en: "A core law of language: what the listener can already recover, you need not say again. In 'She can sing and she can dance', the second 'she can' is perfectly predictable — so everyday speech drops it: 'She can sing and dance'. That leaving-out is ellipsis; filling the slot with a small word (do, one, so) is substitution. In conversation these devices create rhythm — short answers, echo questions, 'Me too', 'Why not?'. In writing they cut repetition and add dignity — repeating the same noun phrase five times in an essay grates. Bengali speakers must settle one thing first: Bengali drops subject pronouns ('গেছি', 'খাব', 'ভালো আছি') — English has no such freedom; English drops repeated verb phrases, not subjects. 'Went', 'Is fine', 'Did homework' — these are not ellipsis, they are broken sentences. And a boundary: the omitted words must be recoverable word-for-word from the immediate context; if the listener cannot rebuild them, the omission itself is the error.",
            hi: "भाषा का मूल नियम: जो श्रोता पहले से जान लेता है, वह दोहराने की ज़रूरत नहीं। 'She can sing and she can dance' में दूसरा 'she can' पूरी तरह अनुमेय है — इसलिए बोलचाल उसे गिरा देती है: 'She can sing and dance'। यही हटाना ellipsis; छोटे शब्द (do, one, so) से जगह भरना substitution। बातचीत में ये लय बनाते हैं — छोटे उत्तर, echo-प्रश्न, 'Me too', 'Why not?'। लेखन में ये पुनरावृत्ति घटाकर संयम लाते हैं — निबंध में एक ही noun phrase पाँच बार आए तो लेखन कर्कश होता है। बांग्लाभाषियों के लिए पहले एक बात तय करें: बांग्ला कर्ता-सर्वनाम छोड़ देता है ('गेछि') — अंग्रेज़ी को वह स्वतंत्रता नहीं; अंग्रेज़ी दोहराया क्रिया-समूह छोड़ती है, कर्ता नहीं। 'Went', 'Is fine' — ये ellipsis नहीं, अधूरे वाक्य हैं। और सीमा: हटे हुए शब्द तुरंत पास के वाक्य में हूबहू मिलने चाहिए; श्रोता फिर न बना सके, तो हटाना ही भूल है।",
          },
          examples: [
            {
              wrong: "She can sing and she can dance and she can act also.",
              right: "She can sing, dance and act.",
              note: { bn: "একই কর্তা + auxiliary তালিকায় একবারই — বাকিরা comma-য় শোঁকে যায়; এটা coordination-ellipsis।", en: "The same subject + auxiliary appears once in a list — the rest sink into the commas; this is coordination ellipsis.", hi: "एक ही कर्ता + auxiliary सूची में एक बार ही — बाकी comma में उतर जाते हैं; यही coordination-ellipsis है।" },
            },
            {
              wrong: "A: Did you go to the class? B: Went.",
              right: "A: Did you go to the class? B: Yes, I did.",
              note: { bn: "বাংলার 'গেছি'-র টানে ক্রিয়া একা ঝাড়িয়ে দেওয়া; ইংরেজি শর্ট আনসার = subject + auxiliary।", en: "Pulled by the Bengali 'গেছি', the verb is thrown out alone; the English short answer = subject + auxiliary.", hi: "बांग्ला 'गेछि' की खिंचाव में क्रिया अकेली फेंक दी जाती है; अंग्रेज़ी का छोटा उत्तर = कर्ता + auxiliary।" },
            },
            {
              wrong: "She is taller than I am tall.",
              right: "She is taller than I am.",
              note: { bn: "than-এর পরে পুনরাবৃত্ত adjective tall বাদ — বাকি সব বুঝে নেওয়া যায়।", en: "The repeated adjective 'tall' drops after 'than' — the rest is understood.", hi: "'than' के बाद दोहराया विशेषण 'tall' गिर जाता है — बाकी समझ लिया जाता है।" },
            },
            {
              wrong: "I have finished my essay, and my brother also has finished his essay.",
              right: "I have finished my essay, and so has my brother.",
              note: { bn: "so + inverted auxiliary — পুরো verb phrase-এর substitute; has finished-হিস-essay সব চাপা পড়ে যায়।", en: "'So' + inverted auxiliary — a substitute for the whole verb phrase; 'has finished his essay' all disappears beneath it.", hi: "'so' + inverted auxiliary — पूरे क्रिया-समूह का प्रतिनिधि; 'has finished his essay' उसके नीचे सब समा जाता है।" },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন: কোথায় বাদ যায় — পাঁচটা ঘর",
            en: "Formation: five rooms where words drop",
            hi: "गठन: पाँच कमरे जहाँ शब्द गिरते हैं",
          },
          body: {
            bn: "ellipsis-এর পাঁচটা পরিচিত ঘর মনে রাখুন। ঘর এক, coordination: and/but/or-এর পরে হুবহু এক শব্দ ফেরত আসলে বাদ যায় — 'I will buy the ticket and pay the fee' ([I will] বাদ); 'She speaks English fluently but writes it slowly'। ঘর দুই, subordination: than, as, while, when, if, because, though-এর পরে ছোট হয়ে যায় — 'He arrived earlier than expected' ([he was] expected); 'If necessary, call me' ([it is] necessary); 'While in Dhaka, visit Lalbagh' ([you are] in Dhaka)। ঘর তিন, gapping: দুই clause-এ ক্রিয়া এক হলে মাঝের ক্রিয়া ঝরে পড়ে, কমা দিয়ে — 'Some students chose physics; others, chemistry'। ঘর চার, infinitive-ellipsis: to-র পরে পুরো verb phrase বাদ — 'I wanted to help, but I couldn't'; 'Why don't you come?' — 'I'd love to'। ঘর পাঁচ, উত্তর-ellipsis: প্রশ্নের ছায়া থেকে উত্তর ছোট হয় — 'Who took my pen?' — 'Rahim' / 'Rahim did'। প্রতিটা ঘরের নিয়ম এক: বাদ যাওয়া অংশ কি হুবহু আগের clause-এ আছে? থাকলে বাদ দিন; না থাকলে substitution-এর পালা (পরের অংশে)।",
            en: "Five familiar rooms of ellipsis. Room one, coordination: after and/but/or, words that return word-for-word may drop — 'I will buy the ticket and pay the fee' ([I will] dropped); 'She speaks English fluently but writes it slowly'. Room two, subordination: after than, as, while, when, if, because, though the clause shrinks — 'He arrived earlier than expected' ([he was] expected); 'If necessary, call me' ([it is] necessary); 'While in Dhaka, visit Lalbagh' ([you are] in Dhaka). Room three, gapping: when two clauses share one verb, the middle verb falls away with a comma — 'Some students chose physics; others, chemistry'. Room four, infinitive ellipsis: everything after 'to' drops — 'I wanted to help, but I couldn't'; 'Why don't you come?' — 'I'd love to'. Room five, answer ellipsis: the answer is a shadow of the question — 'Who took my pen?' — 'Rahim' / 'Rahim did'. The rule of every room is the same: are the dropped words present, word for word, in the previous clause? If yes, drop; if no, it is time for substitution (coming next).",
            hi: "ellipsis के पाँच परिचित कमरे। कमरा एक, coordination: and/but/or के बाद हूबहू लौटनेवाले शब्द गिर सकते हैं — 'I will buy the ticket and pay the fee' ([I will] गया)। कमरा दो, subordination: than, as, while, when, if, because, though के बाद उपवाक्य सिकुड़ता है — 'He arrived earlier than expected'; 'If necessary, call me' ([it is] necessary); 'While in Dhaka, visit Lalbagh'। कमरा तीन, gapping: दो उपवाक्य में क्रिया एक हो तो मध्य क्रिया कॉमा सहित गिरती है — 'Some students chose physics; others, chemistry'। कमरा चार, infinitive-ellipsis: 'to' के बाद सब गिरता है — 'I wanted to help, but I couldn't'; 'I'd love to'। कमरा पाँच, उत्तर-ellipsis: 'Who took my pen?' — 'Rahim did'। हर कमरे का नियम एक: गिरे शब्द पिछले उपवाक्य में हूबहू हैं? हाँ तो गिराएँ; नहीं तो substitution की बारी।",
          },
          examples: [
            {
              wrong: "He arrived more early than what was expected.",
              right: "He arrived earlier than expected.",
              note: { bn: "than expected — পুরো [he was] expected চাপা পড়ে; 'more early' নয়, earlier; 'than what' বাংলা-ভঙ্গি।", en: "'Than expected' swallows the whole [he was] expected; not 'more early' but 'earlier'; 'than what' is a Bengali-transfer tic.", hi: "'than expected' पूरा [he was] expected निगल जाता है; 'more early' नहीं, 'earlier'; 'than what' बांग्ला-स्थानांतरण की आदत है।" },
            },
            {
              wrong: "While I was in Dhaka, I visited Lalbagh, and while I was in Sonargaon, I visited the museum.",
              right: "While in Dhaka, I visited Lalbagh; while in Sonargaon, the museum.",
              note: { bn: "while + জায়গা মাত্রই clause ছোট হয়ে যায় ([I was] বাদ); দ্বিতীয়টায় visited-ও gapping-এ বাদ।", en: "'While' + place alone shrinks the clause ([I was] dropped); in the second, even 'visited' drops by gapping.", hi: "'while' + स्थान भर से उपवाक्य सिकुड़ जाता है ([I was] गया); दूसरे में 'visited' भी gapping से गिरती है।" },
            },
            {
              wrong: "I want to go, but I am not able to go.",
              right: "I want to go, but I'm not able to.",
              note: { bn: "to-র পরে go বাদ — infinitive-ellipsis; ব্রিটিশ ইংরেজিতে to থাকে, মার্কিন ইংরেজিতে মাঝে মাঝে to-ও ঝরে যায়।", en: "'Go' drops after 'to' — infinitive ellipsis; British English keeps the 'to', American English sometimes drops even that.", hi: "'to' के बाद 'go' गिरता है — infinitive-ellipsis; ब्रिटिश अंग्रेज़ी में 'to' रहता है, अमेरिकी में कभी-कभी वह भी गिरता है।" },
            },
            {
              wrong: "A: Who broke the window? B: Rahim broke the window.",
              right: "A: Who broke the window? B: Rahim did.",
              note: { bn: "উত্তরে subject + did — ক্রিয়া-গুচ্ছের substitute; পুরো clause ফেরত দিলে রোবটিক শোনায়।", en: "In the answer, subject + 'did' — the verb-phrase substitute; returning the full clause sounds robotic.", hi: "उत्तर में कर्ता + 'did' — क्रिया-समूह का प्रतिनिधि; पूरा उपवाक्य लौटाना रोबॉटिक लगता है।" },
            },
            {
              wrong: "When you are ready, we will start, and if you are not ready, we will wait.",
              right: "When you're ready, we'll start; if not, we'll wait.",
              note: { bn: "if not — নেতিবাচক শর্তের সবচেয়ে ছোট রূপ; পুরো clause-এর পরিবর্তে।", en: "'If not' — the smallest form of a negative condition, instead of the whole clause.", hi: "'if not' — नकारात्मक शर्त का सबसे छोटा रूप, पूरे उपवाक्य के बदले।" },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস: কখন বাদ দেওয়া নিরাপদ, কখন বিপদ",
            en: "Signals: when omission is safe and when it is a hazard",
            hi: "संकेत: हटाना कब सुरक्षित, कब ख़तरा",
          },
          body: {
            bn: "দুটো প্রশ্ন করলেই সিদ্ধান্ত হয়ে যায়। প্রশ্ন এক — recovery test: বাদ যাওয়া শব্দগুলো কি ঠিক আশপাশের clause-এ হুবহু আছে? 'She can sing and dance' — can আছে আগের অংশে, তাই নিরাপদ। 'I like tea and my brother does too' — এখানে does না বললে ভুল, কারণ likes-কে হুবহু বাদ দিলে দ্বিতীয় clause-এ কোনো ক্রিয়াই থাকে না; তাই substitution দরকার। প্রশ্ন দুই — বাদ যাচ্ছে কী? ইংরেজিতে বাদ যেতে পারে: ক্রিয়া-গুচ্ছ, auxiliary, adjective, object, পুরো clause। বাদ যেতে পারে না: কর্তা-সর্বনাম, dummy it/there, নতুন তথ্য — একমাত্র imperatives-এ ('Sit down') কর্তা থাকেই না। বাংলা-ভঙ্গির সবচেয়ে পরিচিত বিপদ এখানেই: 'Yesterday went to market', 'Is fine', 'Will come tomorrow' — কর্তা-বাদ বাংলার pro-drop, ইংরেজির ellipsis নয়; এগুলো অসম্পূর্ণ বাক্য। দেয়ালে সূত্রটা লিখে রাখুন: বাংলা কর্তা লুকায়, ইংরেজি ক্রিয়া-গুচ্ছ লুকায়।",
            en: "Two questions settle it. Question one — the recovery test: are the dropped words present, word for word, in the neighbouring clause? 'She can sing and dance' — 'can' is there before, so it is safe. 'I like tea and my brother does too' — here 'does' is compulsory, because simply dropping 'likes' would leave the second clause with no verb at all; so substitution is needed. Question two — what is dropping? In English, verb phrases, auxiliaries, adjectives, objects and whole clauses may drop. Subject pronouns, dummy 'it/there', and new information may not — only imperatives ('Sit down') lack a subject from birth. The most familiar Bengali-transfer danger lies exactly here: 'Yesterday went to market', 'Is fine', 'Will come tomorrow' — dropping the subject is Bengali pro-drop, not English ellipsis; these are incomplete sentences. Keep this formula on your wall: Bengali hides the subject; English hides the verb phrase.",
            hi: "दो प्रश्न तय कर देते हैं। प्रश्न एक — recovery test: गिरे शब्द पास के उपवाक्य में हूबहू हैं? 'She can sing and dance' — 'can' पहले है, सुरक्षित। 'I like tea and my brother does too' — यहाँ 'does' अनिवार्य, क्योंकि 'likes' गिराने पर दूसरे उपवाक्य में कोई क्रिया ही नहीं रहती; substitution चाहिए। प्रश्न दो — क्या गिरता है? अंग्रेज़ी में क्रिया-समूह, auxiliaries, विशेषण, कर्म और पूरे उपवाक्य गिर सकते हैं। कर्ता-सर्वनाम, dummy 'it/there' और नई जानकारी नहीं — केवल imperatives ('Sit down') में कर्ता जन्म से नहीं होता। बांग्ला-स्थानांतरण का सबसे परिचित ख़तरा यहीं है: 'Yesterday went to market', 'Is fine' — कर्ता गिराना बांग्ला pro-drop है, अंग्रेज़ी ellipsis नहीं; ये अधूरे वाक्य हैं। दीवार पर यह सूत्र लिखें: बांग्ला कर्ता छुपाता है, अंग्रेज़ी क्रिया-समूह।",
          },
          examples: [
            {
              wrong: "Yesterday went to the market and bought fish.",
              right: "Yesterday I went to the market and bought some fish.",
              note: { bn: "কর্তা I বাদ দেওয়া যায় না — এটা বাংলা pro-drop-এর প্রভাব, ellipsis নয়।", en: "The subject 'I' cannot drop — this is Bengali pro-drop at work, not ellipsis.", hi: "कर्ता 'I' नहीं गिर सकता — यह बांग्ला pro-drop का असर है, ellipsis नहीं।" },
            },
            {
              wrong: "Is raining heavily today.",
              right: "It's raining heavily today.",
              note: { bn: "weather-it ও কর্তা — dummy হলেও অপরিহার্য; 'Is fine' → 'It's fine'।", en: "Weather-'it' is also a subject — dummy or not, it is essential; 'Is fine' → 'It's fine'.", hi: "मौसम का 'it' भी कर्ता है — dummy होकर भी अनिवार्य; 'Is fine' → 'It's fine'।" },
            },
            {
              wrong: "She likes coffee and likes tea too.",
              right: "She likes coffee and tea too.",
              note: { bn: "কর্তা এক হলে দ্বিতীয় clause না বানিয়ে তালিকা করুন; ক্রিয়া রাখলে কর্তাও রাখতে হয়।", en: "With one subject, make a list instead of a second clause; if you keep the verb, you must keep the subject too.", hi: "एक ही कर्ता हो तो दूसरा उपवाक्य न बनाकर सूची बनाएँ; क्रिया रखेंगे तो कर्ता भी रखना होगा।" },
            },
            {
              wrong: "My brother is a doctor and my sister is a teacher and my father is a farmer.",
              right: "My brother is a doctor, my sister a teacher and my father a farmer.",
              note: { bn: "gapping — মাঝের is-গুলো বাদ; এই ছন্দ লেখায় সাহিত্যিক, কথায় is রাখলেও ভুল নয়।", en: "Gapping — the middle 'is' forms drop; this rhythm is literary in writing, and keeping 'is' in speech is not wrong either.", hi: "gapping — बीच के 'is' गिरते हैं; यह लय लेखन में साहित्यिक है, बोलचाल में 'is' रखना भी गलत नहीं।" },
            },
          ],
        },
        {
          heading: {
            bn: "do-র জাদু: ক্রিয়া-গুচ্ছের substitute ও শর্ট আনসার",
            en: "The magic of do: verb-phrase substitute and short answers",
            hi: "do का जादू: क्रिया-समूह का प्रतिनिधि और छोटे उत्तर",
          },
          body: {
            bn: "ellipsis সম্ভব না হলে do/does/did হাতের কাছে দাঁড়িয়ে — এরা পুরো ক্রিয়া-গুচ্ছের প্রতিনিধি। তিনটা প্রধান প্রয়োগ। প্রয়োগ এক, শর্ট আনসার: 'Do you play chess?' — 'Yes, I do' (play ফেরত নয়); 'Did they call?' — 'No, they didn't'। প্রয়োগ দুই, তুলনা ও সম্মতি: 'I like biryani and my brother does too'; 'He doesn't drive, but I do'; 'So do I', 'Neither do I' — মনে রাখুন, so-র পরে inversion (So do I, So has he), নেতিবাচকে neither/nor। প্রয়োগ তিন, formal do so/do it: 'He was asked to sign the form, and he did so immediately' — কাগজে-কলমে আনুষ্ঠানিক; কথায় did it। একটা সূক্ষ্মতা: main verb হিসেবে do-এর সাথেও do আসে — 'Do you do yoga?' — 'Yes, I do'। আর অতীতে 'Yes, I did' — auxiliary-ই যথেষ্ট, ক্রিয়া ফেরত দিলে উত্তর মোটা ও পরীক্ষার মুখস্থ শোনায়।",
            en: "When ellipsis is impossible, do/does/did stand ready — representatives of a whole verb phrase. Three main uses. Use one, short answers: 'Do you play chess?' — 'Yes, I do' (no 'play'); 'Did they call?' — 'No, they didn't'. Use two, comparison and agreement: 'I like biryani and my brother does too'; 'He doesn't drive, but I do'; 'So do I', 'Neither do I' — remember, 'so' takes inversion (So do I, So has he), and negatives take neither/nor. Use three, the formal 'do so/do it': 'He was asked to sign the form, and he did so immediately' — paper-perfect; in speech 'did it'. A fine point: when 'do' itself is the main verb, 'do' still substitutes — 'Do you do yoga?' — 'Yes, I do'. And in the past, 'Yes, I did' — the auxiliary alone is enough; returning the full verb makes the answer bulky and exam-memorised.",
            hi: "जब ellipsis असंभव हो, do/does/did तैयार खड़े रहते हैं — पूरे क्रिया-समूह के प्रतिनिधि। तीन मुख्य प्रयोग। एक, छोटे उत्तर: 'Do you play chess?' — 'Yes, I do' ('play' नहीं); 'Did they call?' — 'No, they didn't'। दो, तुलना और सहमति: 'I like biryani and my brother does too'; 'So do I', 'Neither do I' — स्मरण रहे, 'so' के बाद inversion (So do I, So has he), नकारात्मक में neither/nor। तीन, औपचारिक 'do so/do it': 'He was asked to sign the form, and he did so immediately' — काग़ज़ पर योग्य; बोलचाल में 'did it'। सूक्ष्म बात: जब 'do' स्वयं मुख्य क्रिया हो, तब भी 'do' प्रतिनिधि बनता है — 'Do you do yoga?' — 'Yes, I do'। और भूतकाल में 'Yes, I did' — auxiliary अकेला पर्याप्त; पूरी क्रिया लौटाने से उत्तर भारी और रटा-रटाया लगता है।",
          },
          examples: [
            {
              wrong: "A: Do you play chess? B: Yes, I play.",
              right: "A: Do you play chess? B: Yes, I do.",
              note: { bn: "শর্ট আনসারে মূল ক্রিয়া ফেরত আসে না — do-ই substitute।", en: "In a short answer the main verb does not come back — 'do' is the substitute.", hi: "छोटे उत्तर में मुख्य क्रिया वापस नहीं आती — 'do' ही प्रतिनिधि है।" },
            },
            {
              wrong: "I like biryani and my brother likes too.",
              right: "I like biryani and my brother does too.",
              note: { bn: "likes-এর পরে কিছু না থাকলে does লাগবেই; 'likes too' অসম্পূর্ণ।", en: "If nothing follows 'likes', 'does' is compulsory; 'likes too' is incomplete.", hi: "'likes' के बाद कुछ न हो तो 'does' अनिवार्य; 'likes too' अधूरा है।" },
            },
            {
              wrong: "I have never been to Sylhet. — Me too.",
              right: "I have never been to Sylhet. — Me neither. / Neither have I.",
              note: { bn: "নেতিবাচক বাক্যের পরে me too নয় — me neither বা neither + inversion।", en: "After a negative sentence, not 'me too' — 'me neither' or 'neither' + inversion.", hi: "नकारात्मक वाक्य के बाद 'me too' नहीं — 'me neither' या 'neither' + inversion।" },
            },
            {
              wrong: "So I like it.",
              right: "So do I.",
              note: { bn: "so-এর পরে inversion বাধ্যতামূলক — So do I, So does she, So has he।", en: "After 'so', inversion is compulsory — So do I, So does she, So has he.", hi: "'so' के बाद inversion अनिवार्य — So do I, So does she, So has he।" },
            },
            {
              wrong: "The manager asked him to submit the file, and he submitted so.",
              right: "The manager asked him to submit the file, and he did so immediately.",
              note: { bn: "do so — substitute + উল্লিখিত কাজ; formal লেখায় মানানসই, কথায় did it।", en: "'Do so' — the substitute plus the mentioned action; right for formal writing, 'did it' for speech.", hi: "'do so' — प्रतिनिधि + उल्लिखित कार्य; औपचारिक लेखन के लिए ठीक, बोलचाल में 'did it'।" },
            },
          ],
        },
        {
          heading: {
            bn: "one/ones আর so/not: বিশেষ্য ও ভাবের substitute",
            en: "one/ones and so/not: substitutes for nouns and ideas",
            hi: "one/ones और so/not: संज्ञा और भाव के प्रतिनिधि",
          },
          body: {
            bn: "বিশেষ্যের substitute one/ones — একই জাতের অন্য একটা বোঝায়: 'Which shirt? — The red one'; 'These cups are cracked. Bring two new ones'। লক্ষণীয়: one-এর আগে সাধারণত a/an/the/this/that/adjective থাকে; কিন্তু possessive-এর পরে one ঝরে যায় — 'my one' নয়, mine; 'your one' নয়, yours। আর সবচেয়ে পরীক্ষিত পার্থক্য: one বনাম it। one = একই জাতের অন্যটা; it = সেই একটাই। 'Where's my pen?' — 'You're writing with it' (সেই কলমটাই), কিন্তু 'I lost my pen, so I bought one' (নতুন একটা)। ভাবের substitute so/not: think, believe, hope, expect, suppose, guess, seem, appear, afraid-এর পরে বসে — 'Will it rain?' — 'I think so'; 'I don't think so' (I think not-এর চেয়ে প্রচলিত); 'I hope not'; 'I'm afraid so'; 'It seems so'। 'say so'-ও আছে — 'If he is lying, say so to his face'।",
            en: "For nouns, the substitute is one/ones — meaning 'a different one of the same kind': 'Which shirt? — The red one'; 'These cups are cracked. Bring two new ones'. Note that 'one' usually follows a/an/the/this/that or an adjective; but after possessives it drops — not 'my one' but mine, not 'your one' but yours. The most examined contrast is one vs it: 'one' = another item of the same kind; 'it' = that very item. 'Where's my pen?' — 'You're writing with it' (that very pen), but 'I lost my pen, so I bought one' (a new one). For ideas, the substitutes are so/not, used after think, believe, hope, expect, suppose, guess, seem, appear and afraid — 'Will it rain?' — 'I think so'; 'I don't think so' (more common than 'I think not'); 'I hope not'; 'I'm afraid so'; 'It seems so'. There is also 'say so' — 'If he is lying, say so to his face'.",
            hi: "संज्ञा के लिए प्रतिनिधि one/ones — अर्थ 'उसी जाति का दूसरा': 'Which shirt? — The red one'; 'These cups are cracked. Bring two new ones'। ध्यान दें, 'one' प्रायः a/an/the/this/that या विशेषण के बाद आता है; पर possessive के बाद गिरता है — 'my one' नहीं, mine। सबसे परखा हुआ अंतर one बनाम it: 'one' = उसी जाति का दूसरा; 'it' = वही वस्तु। 'Where's my pen?' — 'You're writing with it' (वही कलम), पर 'I lost my pen, so I bought one' (नई)। भाव के लिए प्रतिनिधि so/not — think, believe, hope, expect, suppose, guess, seem, appear, afraid के बाद: 'Will it rain?' — 'I think so'; 'I don't think so' ('I think not' से अधिक प्रचलित); 'I hope not'; 'I'm afraid so'; 'It seems so'। 'say so' भी है — 'If he is lying, say so to his face'।",
          },
          examples: [
            {
              wrong: "Which bag do you want? — I want green.",
              right: "Which bag do you want? — The green one.",
              note: { bn: "বিশেষণ একা বিশেষ্যের কাজ করে না — one দরকার।", en: "An adjective cannot work as a noun alone — 'one' is needed.", hi: "विशेषण अकेला संज्ञा का काम नहीं कर सकता — 'one' चाहिए।" },
            },
            {
              wrong: "Where is my pen? — You are writing with one.",
              right: "Where is my pen? — You are writing with it.",
              note: { bn: "one = একই জাতের অন্যটা; সেই নির্দিষ্ট কলম = it।", en: "'One' = another of the same kind; that very pen = 'it'.", hi: "'one' = उसी जाति का दूसरा; वही निश्चित कलम = 'it'।" },
            },
            {
              wrong: "I lost my umbrella, so I borrowed it from my cousin.",
              right: "I lost my umbrella, so I borrowed one from my cousin.",
              note: { bn: "নতুন/অন্য ছাতা — one; 'borrowed it' বললে নিজের হারানো ছাতাটাই ধার নেওয়ার অর্থ দাঁড়ায়!", en: "A new/different umbrella — 'one'; 'borrowed it' would mean borrowing your own lost umbrella!", hi: "नई/दूसरी छाता — 'one'; 'borrowed it' कहने का अर्थ होता अपनी ही खोई छाता उधार लेना!" },
            },
            {
              wrong: "Will the results come today? — I hope so not.",
              right: "Will the results come today? — I hope not.",
              note: { bn: "নেতিবাচক substitute শুধু not — hope not, afraid not, suppose not; positive-তে so।", en: "The negative substitute is just 'not' — hope not, afraid not, suppose not; 'so' for the positive.", hi: "नकारात्मक प्रतिनिधि केवल 'not' — hope not, afraid not, suppose not; positive में 'so'।" },
            },
            {
              wrong: "It will rain? — I think.",
              right: "It will rain? — I think so.",
              note: { bn: "so ছাড়া think শেষ হলে অর্থ অসম্পূর্ণ — so-ই আগের ভাবটা বয়ে আনে।", en: "'Think' without 'so' leaves the meaning hanging — 'so' carries the earlier idea.", hi: "'so' के बिना 'think' अधूरा रह जाता है — 'so' ही पिछला भाव ले आता है।" },
            },
          ],
        },
        {
          heading: {
            bn: "কথার ছন্দ আর লেখার সৌন্দর্য: এগিয়ে-পিছিয়ে",
            en: "Speech rhythm and written elegance: further devices",
            hi: "बोलचाल की लय और लेखन की शोभा: और औज़ार",
          },
          body: {
            bn: "কথোপকথনে ellipsis-এর মূল্য বোঝার জন্য ইকো-প্রশ্ন আর ছোট follow-up দেখুন: 'I'm moving to Canada.' — 'Are you?'; 'I can't come tomorrow.' — 'Why not?'; 'He failed the test.' — 'Did he?' — প্রতিটাই পুরো clause-এর দুই-শব্দের ছায়া; এটাই native-দের ছন্দ। লেখায় substitution-এর আরও হাতিয়ার আছে। the former... the latter: দুই বস্তুর প্রথম/দ্বিতীয় — 'Tea and coffee both sell well here, but the latter brings more profit'। that of/those of: তুলনায় পুনরাবৃত্ত noun বাঁচায় — 'The climate of Dhaka is warmer than that of London'। such + noun: 'We faced delays; such delays cost us clients'। আর this/these + সারাংশ-শব্দ: 'The government raised taxes. This move angered farmers' — move-ই আগের পুরো ঘটনার substitute। দীর্ঘ নাম ফেরত না এনে বদল করাও substitution-এর ভাই: 'Professor Rahman... The professor argued...'।",
            en: "In conversation, ellipsis shines in echo questions and tiny follow-ups: 'I'm moving to Canada.' — 'Are you?'; 'I can't come tomorrow.' — 'Why not?'; 'He failed the test.' — 'Did he?' — each is a two-word shadow of a full clause; that is the native rhythm. Writing has its own substitution kit. The former / the latter for the first/second of two: 'Tea and coffee both sell well here, but the latter brings more profit'. That of / those of saves a repeated noun in comparisons: 'The climate of Dhaka is warmer than that of London'. Such + noun: 'We faced delays; such delays cost us clients'. And this/these + a summary noun: 'The government raised taxes. This move angered farmers' — 'move' substitutes for the whole event. Varying a long name is substitution's cousin too: 'Professor Rahman... The professor argued...'.",
            hi: "बातचीत में ellipsis echo-प्रश्नों और छोटे follow-up में चमकता है: 'I'm moving to Canada.' — 'Are you?'; 'I can't come tomorrow.' — 'Why not?' — हर एक पूरे उपवाक्य की दो-शब्दों की छाया है; यही native लय है। लेखन की अपनी substitution-पेटी है। दो में से पहला/दूसरा के लिए the former / the latter: 'Tea and coffee both sell well here, but the latter brings more profit'। तुलना में दोहराई संज्ञा बचाता है that of / those of: 'The climate of Dhaka is warmer than that of London'। such + संज्ञा: 'We faced delays; such delays cost us clients'। और this/these + सार-संज्ञा: 'The government raised taxes. This move angered farmers' — 'move' पूरी घटना का प्रतिनिधि है। लंबा नाम बदलना भी substitution का चचेरा भाई है: 'Professor Rahman... The professor argued...'।",
          },
          examples: [
            {
              wrong: "The climate of Dhaka is warmer than London.",
              right: "The climate of Dhaka is warmer than that of London.",
              note: { bn: "তুলনা হচ্ছে climate-এর সাথে climate-এর — London-এর climate নয়; that of দিয়ে মেলান।", en: "The comparison is climate-with-climate, not with London itself; match them with 'that of'.", hi: "तुलना climate से climate की है, London से नहीं; 'that of' से मिलाएँ।" },
            },
            {
              wrong: "Between a laptop and a tablet, I bought the later.",
              right: "Between a laptop and a tablet, I bought the latter.",
              note: { bn: "latter = দ্বিতীয়টা; later = পরে — বানানে ফারাক, অর্থে আকাশ-পাতাল।", en: "'Latter' = the second one; 'later' = afterwards — one letter apart, worlds apart in meaning.", hi: "'latter' = दूसरा; 'later' = बाद में — वर्तनी में एक अक्षर, अर्थ में आसमान-ज़मीन।" },
            },
            {
              wrong: "He apologised, which I appreciated it.",
              right: "He apologised, which I appreciated.",
              note: { bn: "relative which নিজেই object-এর substitute — ভেতরে it আর দিলে দ্বিগুণ হয়ে যায়।", en: "The relative 'which' is itself the object's substitute — adding 'it' inside doubles it up.", hi: "relative 'which' स्वयं कर्म का प्रतिनिधि है — भीतर 'it' जोड़ने से दोहरा हो जाता है।" },
            },
            {
              wrong: "A: I can't come tomorrow. B: Why you can't come tomorrow?",
              right: "A: I can't come tomorrow. B: Why not?",
              note: { bn: "follow-up প্রশ্ন যত ছোট, কথা তত জীবন্ত।", en: "The smaller the follow-up question, the livelier the conversation.", hi: "follow-up प्रश्न जितना छोटा, बातचीत उतनी जीवंत।" },
            },
            {
              wrong: "The exam was difficult, and the interview was difficult too.",
              right: "The exam was difficult, and so was the interview.",
              note: { bn: "so + was — adjective-সহ পুরো predicate-এর substitute, inversion-সহ।", en: "'So' + 'was' — a substitute for the whole predicate including the adjective, with inversion.", hi: "'so' + 'was' — विशेषण समेत पूरे predicate का प्रतिनिधि, inversion सहित।" },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle errors of advanced learners",
            hi: "उच्च स्तर के शिक्षार्थियों की सूक्ष्म चूकें",
          },
          body: {
            bn: "এখন সেই পাঁচটা পা যেগুলো C1-দেরও ধরে ফেলে। পা এক, over-answering: প্রশ্নের পুরো ছায়া ফেরত দেওয়া — 'Yes, I have eaten my dinner' বলার বদলে 'Yes, I have' — মুখস্থ-পরীক্ষার অভ্যাস কথায় মেশে না। পা দুই, নেতিবাচক সম্মতিতে me too: 'I'm not hungry' — 'Me too' ভুল; me neither / Neither am I। পা তিন, one কে uncountable-এর সাথে চালানো: 'Give me one water', 'I need one information' — water uncountable (some water), information uncountable (a piece of information); 'One tea, please' দোকানে চলে, কারণ তখন one = এক কাপ/প্যাকেট। পা চার, than-এর পরে what: 'better than what I expected' — বাংলা 'যা আমি ভেবেছিলাম'-এর সরাসরি অনুবাদ; ইংরেজিতে than I expected। পা পাঁচ, essay-তে পুনরাবৃত্তি: 'the increasing number of vehicles' পাঁচবার — এর বদলে this trend, such growth, the latter, that of, নয়তো প্রতিশব্দ; examiner-এর চোখে repetition মানেই দুর্বল fluency।",
            en: "Now the five stumbles that catch even C1 learners. Stumble one, over-answering: returning the full shadow of the question — 'Yes, I have eaten my dinner' instead of 'Yes, I have' — the exam-memorised habit leaks into speech. Stumble two, 'Me too' after negatives: 'I'm not hungry' — 'Me too' is wrong; use 'Me neither' / 'Neither am I'. Stumble three, 'one' with uncountables: 'Give me one water', 'I need one information' — water takes 'some', information takes 'a piece of'; 'One tea, please' works in a shop because there one means one cup/packet. Stumble four, 'what' after 'than': 'better than what I expected' — a direct translation of the Bengali 'যা আমি ভেবেছিলাম'; English says 'than I expected'. Stumble five, repetition in essays: 'the increasing number of vehicles' five times — replace with 'this trend', 'such growth', 'the latter', 'that of', or synonyms; to an examiner, repetition reads as weak fluency.",
            hi: "अब वे पाँच ठोकर जो C1 को भी लगती हैं। एक, over-answering: प्रश्न की पूरी छाया लौटाना — 'Yes, I have eaten my dinner' के बदले 'Yes, I have' — रटने की आदत बोलचाल में रिसती है। दो, नकारात्मक के बाद 'Me too': 'I'm not hungry' — 'Me too' गलत; 'Me neither' / 'Neither am I'। तीन, uncountable के साथ 'one': 'Give me one water', 'I need one information' — water के लिए 'some', information के लिए 'a piece of'; दुकान पर 'One tea, please' चलता है, क्योंकि वहाँ one = एक कप/पैकेट। चार, 'than' के बाद 'what': 'better than what I expected' — बांग्ला का सीधा अनुवाद; अंग्रेज़ी कहती है 'than I expected'। पाँच, निबंध में पुनरावृत्ति: 'the increasing number of vehicles' पाँच बार — इसे 'this trend', 'such growth', 'the latter', 'that of' या समानार्थी से बदलें; examiner की नज़र में पुनरावृत्ति कमज़ोर fluency है।",
          },
          examples: [
            {
              wrong: "A: Have you had dinner? B: Yes, I have had my dinner.",
              right: "A: Have you had dinner? B: Yes, I have.",
              note: { bn: "পুরো ছায়া ফেরত দেওয়া over-answering — শর্ট আনসারই স্বাভাবিক।", en: "Returning the full shadow is over-answering — the short answer is what sounds natural.", hi: "पूरी छाया लौटाना over-answering है — छोटा उत्तर ही स्वाभाविक है।" },
            },
            {
              wrong: "I'm not hungry. — Me too.",
              right: "I'm not hungry. — Me neither. / I'm not either.",
              note: { bn: "নেতিবাচক-সম্মতিতে too নয় — neither/either।", en: "Agreeing with a negative takes neither/either, not 'too'.", hi: "नकारात्मक से सहमति में neither/either, 'too' नहीं।" },
            },
            {
              wrong: "Please give me one information about the course.",
              right: "Please give me some information about the course.",
              note: { bn: "information uncountable — one নয়; গোনার দরকার হলে a piece of information।", en: "'Information' is uncountable — not 'one'; if you must count, 'a piece of information'.", hi: "'information' uncountable है — 'one' नहीं; गिनना हो तो 'a piece of information'।" },
            },
            {
              wrong: "The results were better than what we expected.",
              right: "The results were better than we expected.",
              note: { bn: "than-এর পরে what বাংলা-ভঙ্গি; সরাসরি subject + verb।", en: "'What' after 'than' is a Bengali-transfer tic; go straight to subject + verb.", hi: "'than' के बाद 'what' बांग्ला-स्थानांतरण की आदत है; सीधे कर्ता + क्रिया।" },
            },
            {
              wrong: "In my essay, the phrase 'the increasing number of vehicles' came five times, which made the paragraph boring.",
              right: "In my essay I varied the phrase: 'the growing number of vehicles', 'this trend', 'such growth' — no repetition.",
              note: { bn: "substitution-শব্দ (this trend, such growth) পুনরাবৃত্তির কাঁটা বাঁচায় — examiner-এর চোখে সুর বদলানো সাহসী লেখকের লক্ষণ।", en: "Substitution words (this trend, such growth) save you from the repetition trap — varying the music reads as a confident writer.", hi: "substitution-शब्द (this trend, such growth) पुनरावृत्ति के जाल से बचाते हैं — धुन बदलना आत्मविश्वासी लेखक की पहचान है।" },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট কথোপকথনে দেখা যাক",
            en: "See it in a short dialogue",
            hi: "छोटे संवाद में देखें",
          },
          body: {
            bn: "নিচের সংলাপে ellipsis-সubstitution-এর সব ঘর একসাথে — পড়ুন, তারপর সহপাঠীর সাথে অভিনয় করে দেখুন: 'A: Are you coming to the match tomorrow? B: I'd love to, but I can't. A: Why not? B: My exam's on Monday, and my parents won't let me out until it's over. A: I see. If you finish early, call me — we might still catch the second half. B: Will do. A: Hope so!' মাত্র আট লাইনে খেয়াল করুন: 'I'd love to, but I can't' (to-র পরে পুরো infinitive বাদ); 'Why not?' (পুরো clause-এর দুই শব্দ); 'Will do' (ক্রিয়া-গুচ্ছের substitute; প্রতিশ্রুতির মুখের ভঙ্গি); 'Hope so' (so = আগের প্রত্যাশা)। এক নজরে: (১) তালিকায় পুনরাবৃত্ত কর্তা+auxiliary বাদ; (২) শর্ট আনসার = subject + auxiliary (Yes, I did); (৩) So do I / Neither do I — inversion-সহ; (৪) one = একই জাতের অন্যটা, it = সেটাই; (৫) think so / hope not — so/not substitute; (৬) than that of, the latter — লেখার হাতিয়ার; (৭) কর্তা বাদ নয়, ক্রিয়া-গুচ্ছই বাদ।",
            en: "The dialogue below uses every room at once — read it, then act it out with a partner: 'A: Are you coming to the match tomorrow? B: I'd love to, but I can't. A: Why not? B: My exam's on Monday, and my parents won't let me out until it's over. A: I see. If you finish early, call me — we might still catch the second half. B: Will do. A: Hope so!' Notice in just eight lines: 'I'd love to, but I can't' (the infinitive after 'to' drops); 'Why not?' (a full clause in two words); 'Will do' (the verb-phrase substitute; a promise made with the mouth, not the pen); 'Hope so' ('so' carries the earlier expectation). At a glance: (1) in lists, repeated subject + auxiliary drops; (2) short answer = subject + auxiliary (Yes, I did); (3) So do I / Neither do I — with inversion; (4) one = another of the same kind, it = that very one; (5) think so / hope not; (6) than that of, the latter — writing tools; (7) drop the verb phrase, never the subject.",
            hi: "नीचे संवाद एक साथ सारे कमरे इस्तेमाल करता है — पढ़ें, फिर साथी से अभिनय करें: 'A: Are you coming to the match tomorrow? B: I'd love to, but I can't. A: Why not? B: My exam's on Monday, and my parents won't let me out until it's over. A: I see. If you finish early, call me — we might still catch the second half. B: Will do. A: Hope so!' आठ पंक्तियों में देखें: 'I'd love to, but I can't' ('to' के बाद infinitive गिरा); 'Why not?' (पूरा उपवाक्य दो शब्दों में); 'Will do' (क्रिया-समूह का प्रतिनिधि; मुँह से किया वादा); 'Hope so' ('so' पिछली आशा ले जाता है)। संक्षेप में: (१) सूची में दोहराया कर्ता+auxiliary गिरता है; (२) छोटा उत्तर = कर्ता + auxiliary; (३) So do I / Neither do I — inversion सहित; (४) one = उसी जाति का दूसरा, it = वही; (५) think so / hope not; (६) than that of, the latter — लेखन औज़ार; (७) क्रिया-समूह गिराएँ, कर्ता कभी नहीं।",
          },
          examples: [
            {
              wrong: "B: I'd love to come, but I can't come.",
              right: "B: I'd love to, but I can't.",
              note: { bn: "to-র পরে come দুইবার — কথার ছন্দ ভাঙে; প্রথম come-ই দ্বিতীয়টাকে বাদ দেয়।", en: "'Come' twice after 'to' breaks the spoken rhythm; the first 'come' banishes the second.", hi: "'to' के बाद 'come' दो बार — बोलचाल की लय टूटती है; पहली 'come' दूसरी को हटा देती है।" },
            },
            {
              wrong: "A: Will you call me? B: Yes, I will call you.",
              right: "A: Will you call me? B: Yes, I will. / Will do.",
              note: { bn: "প্রতিশ্রুতিতেও শর্ট রূপই স্বাভাবিক; Will do মুখের ইডিয়ম — লেখায় I'll do it।", en: "Even promises prefer the short form; 'Will do' is a spoken idiom — 'I'll do it' in writing.", hi: "वादे में भी छोटा रूप ही स्वाभाविक; 'Will do' मुँह की मुहावरा है — लेखन में 'I'll do it'।" },
            },
            {
              wrong: "A: Hope you will come. B: I hope so too, but I am not sure that I will be able to come.",
              right: "A: Hope you can come. B: I hope so — we'll see.",
              note: { bn: "'we'll see'-র মতো ছোট রূপই কথায় চলে; সন্দেহ প্রকাশে পুরো clause দরকার নেই।", en: "Small forms like 'we'll see' carry doubt in speech; no full clause is needed to hedge.", hi: "'we'll see' जैसे छोटे रूप बोलचाल में संदेह बताते हैं; बचाव के लिए पूरा उपवाक्य ज़रूरी नहीं।" },
            },
          ],
        },
      ],
      tips: [
        { bn: "শর্ট-আনসার ড্রিল: যেকোনো প্রশ্নের উত্তর প্রথম দুই শব্দে (Yes, I do / No, she didn't) — মুখস্থ ভঙ্গি ছাড়ুন।", en: "Short-answer drill: answer any question in the first two words (Yes, I do / No, she didn't) — break the memorised habit.", hi: "छोटे-उत्तर अभ्यास: किसी भी प्रश्न का उत्तर पहले दो शब्दों में (Yes, I do / No, she didn't) — रटने की आदत छोड़ें।" },
        { bn: "Me too নাকি Me neither — আগে দেখুন আগের বাক্য ধনাত্মক না ঋণাত্মক।", en: "Me too or Me neither — first check whether the previous sentence is positive or negative.", hi: "Me too या Me neither — पहले देखें पिछला वाक्य positive है या negative।" },
        { bn: "one বনাম it-এর পরীক্ষা: একই জাতের অন্যটা = one; হুবহু সেটা = it।", en: "The one vs it test: another of the same kind = one; that very one = it.", hi: "one बनाम it परीक्षण: उसी जाति का दूसरा = one; वही वस्तु = it।" },
        { bn: "So do I, So has he — so-র পরে inversion লিখে অভ্যাস করুন।", en: "So do I, So has he — practise writing the inversion after 'so'.", hi: "So do I, So has he — 'so' के बाद inversion लिखकर अभ्यास करें।" },
        { bn: "নোটে think so / hope not / afraid so-এর তালিকা রাখুন — কথায় প্রতিদিন লাগবে।", en: "Keep a list of think so / hope not / afraid so in your notebook — you will use it daily.", hi: "नोट में think so / hope not / afraid so की सूची रखें — रोज़ काम आएँगे।" },
        { bn: "Essay-তে একই noun phrase দুইবারের বেশি এলে this trend / such growth / the latter-এ বদলান।", en: "If the same noun phrase appears more than twice in an essay, switch to this trend / such growth / the latter.", hi: "निबंध में वही noun phrase दो बार से अधिक आए तो this trend / such growth / the latter पर जाएँ।" },
        { bn: "তুলনায় that of / those of — 'The climate of X is warmer than that of Y' ছাঁচ মুখস্থ।", en: "In comparisons use that of / those of — memorise the template 'The climate of X is warmer than that of Y'.", hi: "तुलना में that of / those of — 'The climate of X is warmer than that of Y' ढाँचा कंठस्थ करें।" },
        { bn: "বাংলা কর্তা লুকায়, ইংরেজি ক্রিয়া-গুচ্ছ লুকায় — নোটে বড় করে লিখে রাখুন।", en: "Bengali hides the subject; English hides the verb phrase — write it big on your note.", hi: "बांग्ला कर्ता छुपाता है, अंग्रेज़ी क्रिया-समूह — नोट पर बड़े अक्षरों में लिखें।" },
        { bn: "ইকো-প্রশ্ন শিখুন: 'Are you?' 'Did he?' 'Why not?' — দুই শব্দে আগ্রহ দেখানোর native ছন্দ।", en: "Learn echo questions: 'Are you?' 'Did he?' 'Why not?' — the native rhythm of showing interest in two words.", hi: "echo-प्रश्न सीखें: 'Are you?' 'Did he?' 'Why not?' — दो शब्दों में रुचि दिखाने की native लय।" },
      ],
      quiz: [
        {
          question: "A: Did you finish the report? B: Yes, ___.",
          options: ["I finished", "I did", "I do", "did I"],
          answer: 1,
          explanation: { bn: "শর্ট আনসার = subject + auxiliary; অতীত প্রশ্নের উত্তর Yes, I did — মূল ক্রিয়া ফেরত আসে না।", en: "Short answer = subject + auxiliary; for a past question, 'Yes, I did' — the main verb does not return.", hi: "छोटा उत्तर = कर्ता + auxiliary; भूतकाल के प्रश्न का उत्तर 'Yes, I did' — मुख्य क्रिया वापस नहीं आती।" },
        },
        {
          question: "I love cricket, and ___ does my father.",
          options: ["so", "also", "too", "as well"],
          answer: 0,
          explanation: { bn: "so + inversion (so does my father) — একই পছন্দের সম্মতি; also/too এই জায়গায় inversion-ছাঁচে বসে না।", en: "'So' + inversion (so does my father) expresses the same preference; also/too do not fit this inverted template.", hi: "'so' + inversion (so does my father) वही पसंद बताता है; also/too इस inverted ढाँचे में नहीं बैठते।" },
        },
        {
          question: "I haven't seen that film. — ___",
          options: ["Me too", "Me neither", "I also", "So do I"],
          answer: 1,
          explanation: { bn: "নেতিবাচক বাক্যের পরে সম্মতি me neither / Neither have I — me too শুধু ধনাত্মকে।", en: "After a negative, agreement is 'Me neither' / 'Neither have I'; 'me too' is only for positives.", hi: "नकारात्मक वाक्य के बाद सहमति 'Me neither' / 'Neither have I'; 'me too' केवल positive के लिए।" },
        },
        {
          question: "Which shirt do you want? — ___",
          options: ["I want red", "I want the red one", "I want one red", "I want a red"],
          answer: 1,
          explanation: { bn: "বিশেষণ একা বিশেষ্য হতে পারে না — the red one; one = লাল জাতের সেইটাই।", en: "An adjective alone cannot be a noun — 'the red one'; 'one' stands for that red shirt.", hi: "विशेषण अकेला संज्ञा नहीं बन सकता — 'the red one'; 'one' उसी लाल शर्ट के लिए।" },
        },
        {
          question: "Where is my charger? — You are using ___.",
          options: ["one", "it", "a one", "ones"],
          answer: 1,
          explanation: { bn: "সেই নির্দিষ্ট চার্জার = it; one বললে অন্য একটা চার্জার বোঝাত।", en: "That very charger = 'it'; 'one' would imply a different charger.", hi: "वही चार्जर = 'it'; 'one' कहते तो दूसरा चार्जर समझ आता।" },
        },
        {
          question: "Will the exam be hard? — I hope ___.",
          options: ["so not", "not", "no", "don't"],
          answer: 1,
          explanation: { bn: "নেতিবাচক substitute শুধু not — I hope not; ধনাত্মকে I hope so।", en: "The negative substitute is just 'not' — I hope not; the positive is I hope so.", hi: "नकारात्मक प्रतिनिधि केवल 'not' — I hope not; positive में I hope so।" },
        },
        {
          question: "The economy of Japan is stronger than ___ of Bangladesh.",
          options: ["that", "those", "it", "one"],
          answer: 0,
          explanation: { bn: "economy (singular) — that of; plural হলে those of; তুলনায় দুই economy মেলাতে হয়।", en: "'Economy' is singular — 'that of'; for a plural noun, 'those of'; the two economies must match in the comparison.", hi: "'economy' singular है — 'that of'; plural होता तो 'those of'; तुलना में दोनों economy मिलाना है।" },
        },
        {
          question: "Between tea and coffee, I prefer the ___.",
          options: ["later", "latter", "last", "latest"],
          answer: 1,
          explanation: { bn: "দুইটার মধ্যে দ্বিতীয়টা = the latter; later মানে পরে — বানানে গুলিয়ে ফেলবেন না।", en: "The second of two = 'the latter'; 'later' means afterwards — do not mix up the spellings.", hi: "दो में से दूसरा = 'the latter'; 'later' यानी बाद में — वर्तनी न गलाएँ।" },
        },
        {
          question: "He arrived earlier than ___.",
          options: ["what was expected", "expected", "it expected", "what expected"],
          answer: 1,
          explanation: { bn: "than expected — [he was] expected সব বাদ; 'than what' বাংলা-ভঙ্গি, ইংরেজিতে নেই।", en: "'Than expected' — the whole [he was] expected drops; 'than what' is a Bengali-transfer tic, absent in English.", hi: "'than expected' — पूरा [he was] expected गिर जाता है; 'than what' बांग्ला-स्थानांतरण है, अंग्रेज़ी में नहीं।" },
        },
      ],
    },
  },
  /* ── 3. Register: Formal vs Informal English ─────────────────────────── */
  {
    topic: "Register: Formal vs Informal English",
    level: "advanced",
    title: "Register: Formal vs Informal English",
    unit: 0,
    data: {
      title: {
        bn: "রেজিস্টার: আনুষ্ঠানিক বনাম অনানুষ্ঠানিক ইংরেজি",
        en: "Register: Formal vs Informal English",
        hi: "रजिस्टर: औपचारिक बनाम अनौपचारिक अंग्रेज़ी",
      },
      intro: {
        bn: "একই কথা বস অফিসে আর চায়ের দোকানে একভাবে বলা হয় না — বাংলায় আমরা 'আপনি' আর 'তুমি' বদলে যে দূরত্ব বোঝাই, ইংরেজি সেই দূরত্ব বোঝায় শব্দ আর গঠন বদলে: ask নাকি enquire, put off নাকি postpone, I'm নাকি I am। এই 'ভাষার পোশাক'-এর নামই register। এটা এই advanced ব্যাচের পাঠ; শুরুর আগে Nominalisation & Academic Style আর Discourse Markers & Cohesion পাঠগুলো শেষ করে নিন — আনুষ্ঠানিক লেখার অনেকটাই ওখানের হাতিয়ারেই গড়ে ওঠে। এই পাঠে জোড়া-জোড়া শব্দ শিখব (children/kids, obtain/get, inform/tell, purchase/buy, apologise/say sorry, postpone/put off, require/need), contraction আর ফ্রেজাল ভার্ব কোথায় চলে কোথায় চলে না, ইমেইল, চ্যাট আর পরীক্ষার উত্তরের আলাদা আচরণবিধি — সঙ্গে বাংলাভাষীদের সবচেয়ে পরিচিত ভুল: এক বাক্যেই দুই রেজিস্টার গুলিয়ে ফেলা।",
        en: "The same message is not said the same way in an office and at a tea stall — Bengali shows that distance by switching 'আপনি'/'তুমি' (formal/informal 'you'); English shows it by switching words and structures: ask or enquire, put off or postpone, I'm or I am. That 'language outfit' is called register. This is an advanced-path lesson; before starting, finish Nominalisation & Academic Style and Discourse Markers & Cohesion — much of formal writing is built from the tools taught there. In this lesson you will learn register pairs (children/kids, obtain/get, inform/tell, purchase/buy, apologise/say sorry, postpone/put off, require/need), where contractions and phrasal verbs belong and where they do not, the separate etiquette of email, chat and exam writing — plus the most familiar Bengali-speaker error: mixing two registers inside one sentence.",
        hi: "वही बात बॉस के ऑफिस में और चाय की दुकान पर एक तरह नहीं कही जाती — बांग्ला/हिंदी में हम 'आप' और 'तुम' बदलकर जो दूरी दिखाते हैं, अंग्रेज़ी वह दूरी शब्द और ढाँचे बदलकर दिखाती है: ask या enquire, put off या postpone, I'm या I am। इसी 'भाषा की पोशाक' का नाम register है। यह एडवांस्ड बैच का पाठ है; शुरू करने से पहले Nominalisation & Academic Style और Discourse Markers & Cohesion पाठ पूरे कर लें — औपचारिक लेखन की बहुत-कुछ नींव वहीं बनती है। इस पाठ में जोड़े-जोड़े शब्द सीखेंगे (children/kids, obtain/get, inform/tell, purchase/buy, apologise/say sorry, postpone/put off, require/need), contraction और phrasal verbs कहाँ चलते हैं और कहाँ नहीं, ईमेल, चैट और परीक्षा-लेखन की अलग-अलग शिष्टाचार-व्यवस्था — साथ में बांग्लाभाषियों की सबसे परिचित गलती: एक ही वाक्य में दो रजिस्टर मिला देना।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: শ্রোতা বদলালেই ভাষার পোশাক বদলায়",
            en: "When to use which register: change the audience, change the outfit",
            hi: "कब कौन-सा रजिस्टर: श्रोता बदले तो भाषा की पोशाक भी बदले",
          },
          body: {
            bn: "Register মানে ভাষার পোশাক — একই অর্থ বিভিন্ন পরিস্থিতিতে বিভিন্ন পোশাকে পরিবেশিত হয়। বাংলাভাষীদের কাছে ধারণাটা চেনা: বসের সঙ্গে 'আপনি', বন্ধুর সঙ্গে 'তুমি'; কিন্তু ইংরেজিতে you একটাই, দূরত্বটা বদলায় অন্য জায়গায় — শব্দচয়নে (get নাকি obtain), contraction-এ (I'm নাকি I am), আর বাক্যের ছাঁচে (Can you...? নাকি I would be grateful if you could...)। রেজিস্টার তিনটা স্তরে ভাবুন: informal (চ্যাট, বন্ধু, পরিবার), neutral (দৈনন্দিন অফিস-ইমেইল, ক্লাসরুম) আর formal (রিপোর্ট, আবেদন, পরীক্ষার উত্তর)।\n\nলেখার আগে তিনটা প্রশ্ন করুন: (১) পাঠক কে — বস, ক্লায়েন্ট, পরীক্ষক, নাকি বন্ধু? (২) মাধ্যম কী — ইমেইল, চ্যাট, নাকি রচনা? (৩) উদ্দেশ্য কী — অনুরোধ, অভিযোগ, নাকি তথ্য জানানো? এই তিন প্রশ্নের উত্তরই শব্দ বেছে দেবে। ভুল রেজিস্টার পাঠকের চোখে ভুল ব্যাকরণের মতোই স্পষ্ট: IELTS-এর রচনায় 'lots of', 'kids', 'totally' লিখলে band কমে; আবার বন্ধুর চ্যাটে 'Dear Respected Sir, I hereby request...' লিখলে অজান্তেই ব্যঙ্গ করা হয়।",
            en: "Register is the outfit of language — the same meaning is dressed differently in different situations. Bengali speakers know the idea well: 'আপনি' with the boss, 'তুমি' with a friend; but English has only one 'you', so the distance shifts elsewhere — in word choice (get or obtain), in contractions (I'm or I am), and in sentence frames (Can you...? or I would be grateful if you could...). Think of register in three layers: informal (chat, friends, family), neutral (everyday office email, the classroom) and formal (reports, applications, exam answers).\n\nBefore writing, ask three questions: (1) Who is the reader — boss, client, examiner, or friend? (2) What is the medium — email, chat, or an essay? (3) What is the purpose — a request, a complaint, or passing on information? The answers to these three questions choose the words. The wrong register is as visible as bad grammar: 'lots of', 'kids', 'totally' in an IELTS essay lower the band; and 'Dear Respected Sir, I hereby request...' in a friend's chat is unintentional irony.",
            hi: "रजिस्टर भाषा की पोशाक है — एक ही अर्थ अलग-अलग परिस्थितियों में अलग पोशाक में प्रस्तुत होता है। बांग्लाभाषियों के लिए यह परिचित है: बॉस के साथ 'आप', दोस्त के साथ 'तुम'; पर अंग्रेज़ी में you एक ही है, दूरी बदलती है कहीं और — शब्द-चयन में (get या obtain), contraction में (I'm या I am), और वाक्य-साँचे में (Can you...? या I would be grateful if you could...)। रजिस्टर को तीन स्तरों में सोचें: informal (चैट, दोस्त, परिवार), neutral (रोज़मर्रा के ऑफिस-ईमेल, क्लासरूम) और formal (रिपोर्ट, आवेदन, परीक्षा-उत्तर)।\n\nलिखने से पहले तीन सवाल पूछें: (1) पाठक कौन — बॉस, क्लाइंट, परीक्षक या दोस्त? (2) माध्यम क्या — ईमेल, चैट या निबंध? (3) उद्देश्य क्या — अनुरोध, शिकायत या सूचना देना? इन तीन सवालों का जवाब ही शब्द चुनेगा। ग़लत रजिस्टर पाठक की नज़र में व्याकरण-गलती जितना ही स्पष्ट है: IELTS के निबंध में 'lots of', 'kids', 'totally' लिखने से band गिरता है; और दोस्त की चैट में 'Dear Respected Sir, I hereby request...' लिखना अनजाने में व्यंग्य है।",
          },
          examples: [
            {
              wrong: "Hey Sir, just wanted to check if you got my invoice.",
              right: "Dear Mr Rahman, I am writing to confirm receipt of my invoice.",
              note: {
                bn: "Hey আর just wanted to check চ্যাটের রং; আনুষ্ঠানিক ইমেইলে Dear + পদবি সালাম আর I am writing to... উদ্দেশ্য-বাক্য।",
                en: "'Hey' and 'just wanted to check' are chat colour; a formal email opens with Dear + surname and an I am writing to... purpose line.",
                hi: "'Hey' और 'just wanted to check' चैट का रंग हैं; औपचारिक ईमेल Dear + उपनाम और I am writing to... उद्देश्य-वाक्य से खुलता है।",
              },
            },
            {
              wrong: "I am writing to hereby request the honour of your esteemed presence at a study group on Thursday.",
              right: "Do you want to join our study group on Thursday?",
              note: {
                bn: "উল্টো দিকের ভুল — বন্ধুর চ্যাটে বিয়ের কার্ডের ভাষা; অতি-আনুষ্ঠানিকতা কথ্য ভাষায় ব্যঙ্গ শোনায়।",
                en: "The mirror-image error — wedding-invitation language in a friend's chat; over-formality sounds ironic in speech.",
                hi: "उलटी दिशा की गलती — दोस्त की चैट में शादी-कार्ड की भाषा; अति-औपचारिकता बोलचाल में व्यंग्य लगती है।",
              },
            },
            {
              wrong: "Kindly do the needful and revert back at the earliest.",
              right: "Could you please take care of this and reply by Friday?",
              note: {
                bn: "do the needful, revert back, at the earliest — দক্ষিণ এশিয়ার পুরোনো অফিস-শব্দ; বৈশ্বিক ইংরেজিতে please + নির্দিষ্ট কাজ + নির্দিষ্ট সময়।",
                en: "'Do the needful', 'revert back', 'at the earliest' — dated South Asian officialese; global English prefers please + a specific action + a specific time.",
                hi: "'do the needful', 'revert back', 'at the earliest' — दक्षिण एशिया की पुरानी ऑफिस-भाषा; ग्लोबल अंग्रेज़ी में please + ठीक काम + ठीक समय।",
              },
            },
            {
              wrong: "Dear Sir, I can't make it to the meeting, sorry!",
              right: "Dear Mr Chowdhury, I am afraid I will be unable to attend the meeting.",
              note: {
                bn: "can't contraction আর can't make it আড্ডা-গুচ্ছ; আনুষ্ঠানিক বিকল্প I am afraid... unable to attend — একই খবরের পোশাক-বদল।",
                en: "The contraction and the idiom 'can't make it' are casual; the formal outfit is I am afraid... unable to attend — same news, different dress.",
                hi: "can't contraction और 'can't make it' मुहावरा अनौपचारिक हैं; औपचारिक पोशाक है I am afraid... unable to attend — वही ख़बर, अलग लिबास।",
              },
            },
            {
              wrong: "The results of the experiment were totally messed up.",
              right: "The results of the experiment were inconclusive.",
              note: {
                bn: "messed up আড্ডা-ক্রিয়া, totally চ্যাট-তীব্রতা; রিপোর্টের ভঙ্গি inconclusive — ফল অনির্ণেয়, সিদ্ধান্তে না-আসা।",
                en: "'Messed up' is slang, 'totally' is chat intensity; report-register says inconclusive — the results do not settle the question.",
                hi: "'messed up' गली-भाषा है, 'totally' चैट-तीव्रता; रिपोर्ट-रजिस्टर कहता है inconclusive — परिणाम निर्णायक नहीं।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন: আনুষ্ঠানিকতার স্কেল — জোড়া শব্দ আর চারটা যান্ত্রিক নিয়ম",
            en: "Structure: the formality scale — word pairs and four mechanical rules",
            hi: "गठन: औपचारिकता का पैमाना — शब्द-जोड़े और चार यांत्रिक नियम",
          },
          body: {
            bn: "রেজিস্টার শেখার সবচেয়ে কার্যকর পথ জোড়া-শব্দ: এক অর্থ, দুই পোশাক। • kids ↔ children; • get ↔ obtain; • buy ↔ purchase; • tell ↔ inform; • need ↔ require; • say sorry ↔ apologise; • put off ↔ postpone; • check ↔ examine; • help ↔ assist; • give ↔ provide; • show ↔ demonstrate; • a lot of ↔ considerable/numerous; • so ↔ therefore; • but ↔ however; • end ↔ terminate। বাঁ দিকটা আড্ডার, ডান দিকটা অফিস-কাগজের।\n\nশব্দের পাশাপাশি চারটা যান্ত্রিক নিয়ম আনুষ্ঠানিক লেখাকে চেনায়: (১) contraction নেই — don't, I'm, can't-এর জায়গায় do not, I am, cannot; (২) ফ্রেজাল ভার্বের জায়গায় এক-শব্দের ল্যাটিন ক্রিয়া — put off নয়, postpone; (৩) বাক্য পূর্ণ ও গাঁথা — ফ্রেগমেন্ট নয়, বরং nominalisation (আগের পাঠে শেখা); (৪) ব্যক্তিকে আবছা করা — It is recommended that... / Applicants are required to..., informal-এর I/you-ঘেঁষা সরল বাক্যের বিপরীতে।",
            en: "The most effective way to learn register is word pairs: one meaning, two outfits. • kids ↔ children; • get ↔ obtain; • buy ↔ purchase; • tell ↔ inform; • need ↔ require; • say sorry ↔ apologise; • put off ↔ postpone; • check ↔ examine; • help ↔ assist; • give ↔ provide; • show ↔ demonstrate; • a lot of ↔ considerable/numerous; • so ↔ therefore; • but ↔ however; • end ↔ terminate. The left side belongs to conversation, the right side to office paper.\n\nAlongside the words, four mechanical rules mark formal writing: (1) no contractions — do not, I am, cannot instead of don't, I'm, can't; (2) one-word Latin verbs instead of phrasal verbs — postpone, not put off; (3) full, connected sentences — not fragments, but nominalisation (learned in the previous lesson); (4) depersonalisation — It is recommended that... / Applicants are required to..., against the I/you-driven simple sentences of informal style.",
            hi: "रजिस्टर सीखने का सबसे कारगर रास्ता शब्द-जोड़े हैं: एक अर्थ, दो पोशाक। • kids ↔ children; • get ↔ obtain; • buy ↔ purchase; • tell ↔ inform; • need ↔ require; • say sorry ↔ apologise; • put off ↔ postpone; • check ↔ examine; • help ↔ assist; • give ↔ provide; • show ↔ demonstrate; • a lot of ↔ considerable/numerous; • so ↔ therefore; • but ↔ however; • end ↔ terminate। बाईं ओर गपशप की, दाईं ओर ऑफिस-कागज़ की।\n\nशब्दों के साथ चार यांत्रिक नियम औपचारिक लेखन को पहचानने देते हैं: (1) contraction नहीं — don't, I'm, can't की जगह do not, I am, cannot; (2) phrasal verb की जगह एक-शब्द की लैटिन क्रिया — put off नहीं, postpone; (3) वाक्य पूर्ण और जुड़े हुए — टुकड़े नहीं, बल्कि nominalisation (पिछले पाठ में सीखी); (4) व्यक्ति को धुँधला करना — It is recommended that... / Applicants are required to..., informal के I/you-से बुने सरल वाक्यों के विपरीत।",
          },
          examples: [
            {
              wrong: "We need to put off the meeting till next week.",
              right: "The meeting has been postponed until next week.",
              note: {
                bn: "ফ্রেজাল put off + সরল সক্রিয় বাক্য informal; রিপোর্টে ল্যাটিন ক্রিয়া postpone + passive — দুই স্তরের আনুষ্ঠানিকতা একসঙ্গে।",
                en: "Phrasal put off + a simple active sentence is informal; report-style uses the Latin verb postpone + passive — two layers of formality at once.",
                hi: "phrasal put off + सरल active वाक्य informal है; रिपोर्ट में लैटिन क्रिया postpone + passive — दो स्तर की औपचारिकता एक साथ।",
              },
            },
            {
              wrong: "The company don't allow kids in the lab.",
              right: "The company does not permit children in the laboratory.",
              note: {
                bn: "contraction আর kids — দুটোই informal; আর singular company-র সঙ্গে don't মেলানো ব্যাকরণগত ভুলও।",
                en: "The contraction and 'kids' are both informal; matching singular 'company' with don't is also a grammar slip.",
                hi: "contraction और 'kids' दोनों informal हैं; एकवचन 'company' के साथ don't मिलाना व्याकरण-गलती भी है।",
              },
            },
            {
              wrong: "I'm gonna inform you about the results tomorrow.",
              right: "I will inform you about the results tomorrow.",
              note: {
                bn: "gonna শুধু মুখের ভাষা — লেখায়, এমনকি informal ইমেইলেও নয়; inform-এর পাশে gonna অমিল রেজিস্টার।",
                en: "'Gonna' is speech only — never in writing, not even in an informal email; next to 'inform' it is a register clash.",
                hi: "'gonna' केवल बोली जाने वाली भाषा है — लिखित में, informal ईमेल में भी नहीं; 'inform' के बगल में यह रजिस्टर-टकराव है।",
              },
            },
            {
              wrong: "You must say sorry to the client for the delay.",
              right: "You must apologise to the client for the delay.",
              note: {
                bn: "দুটোই সঠিক, কিন্তু রেজিস্টার আলাদা — say sorry বন্ধুর সঙ্গে, apologise আনুষ্ঠানিক ক্ষমা-পত্রে।",
                en: "Both are correct but belong to different registers — say sorry with friends, apologise in a formal letter of apology.",
                hi: "दोनों सही हैं, पर रजिस्टर अलग — say sorry दोस्तों के बीच, apologise औपचारिक क्षमा-पत्र में।",
              },
            },
            {
              wrong: "You need to submit two photos.",
              right: "Applicants are required to submit two photographs.",
              note: {
                bn: "need→require, you→applicants, photos→photographs — আবেদনপত্রের ভাষায় তিন ধাপেই রেজিস্টার উঁচু হলো।",
                en: "need→require, you→applicants, photos→photographs — three steps up the formality ladder for application language.",
                hi: "need→require, you→applicants, photos→photographs — आवेदन-भाषा में तीन सीढ़ी ऊपर।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন: ইমেইল, চ্যাট, পরীক্ষা — তিন মাঠের আলাদা নিয়ম",
            en: "Signals and patterns: email, chat, exam — three arenas, three rulebooks",
            hi: "संकेत और पैटर्न: ईमेल, चैट, परीक्षा — तीन मैदान, तीन नियम-पुस्तिका",
          },
          body: {
            bn: "তিনটা মাঠের নিয়ম আলাদা। ইমেইল (বস/ক্লায়েন্ট/অচেনা): সালাম Dear Mr/Ms + পদবি; শুরুতে উদ্দেশ্যের বাক্য (I am writing to...); contraction কম; সই-এ Best regards / Kind regards, নিয়মতান্ত্রিক চিঠিতে Yours sincerely / Yours faithfully। চ্যাট (সহকর্মী/বন্ধু): সালাম Hey/Hi; contraction স্বাভাবিক; ফ্রেজাল ভার্ব ও ছোট বাক্য স্বাগত; দ্রুত উত্তরে কর্তা পর্যন্ত বাদ যায় (Got it. On my way.)। পরীক্ষা (IELTS/অ্যাকাডেমিক): formal-neutral — contraction নয়, আড়াই-শব্দ নয়; সতর্ক ভাষা (tend to, may, it appears that); linking adverb (however, moreover, therefore); অনুচ্ছেদ-গঠন বাধ্যতামূলক।\n\nআভাসগুলো চেনুন: অতিরিক্ত বিস্ময়চিহ্ন আর ASAP-ঘেঁষা শব্দ চ্যাটের রং; পদবি-সহ পূর্ণ সালাম ইমেইলের; প্রশ্নবোধক বাক্যে অনুরোধ — উভয় জগতের শালীন রূপ। একটা সোনালি টেস্ট: বাক্যটা ওই পাঠকের মুখোমুখি বলতে পারবেন কি? পারলে রেজিস্টার মিলছে।",
            en: "Each arena has its own rules. Email (boss/client/stranger): greet with Dear Mr/Ms + surname; open with a purpose sentence (I am writing to...); few contractions; sign off Best regards / Kind regards, or Yours sincerely / Yours faithfully in the rule-bound letters. Chat (colleagues/friends): greet with Hey/Hi; contractions are natural; phrasal verbs and short sentences are welcome; even the subject drops in quick replies (Got it. On my way.). Exams (IELTS/academic): formal-neutral — no contractions, no slang; cautious language (tend to, may, it appears that); linking adverbs (however, moreover, therefore); paragraph structure is compulsory.\n\nLearn the signals: extra exclamation marks and ASAP-words are chat colour; a full greeting with a surname belongs to email; a request framed as a question is the polite form in both worlds. One golden test: could you say the sentence face-to-face to that reader? If yes, the register fits.",
            hi: "तीनों मैदानों के नियम अलग हैं। ईमेल (बॉस/क्लाइंट/अजनबी): अभिवादन Dear Mr/Ms + उपनाम; शुरुआत में उद्देश्य-वाक्य (I am writing to...); contraction कम; समापन Best regards / Kind regards, नियमबद्ध पत्रों में Yours sincerely / Yours faithfully। चैट (सहकर्मी/दोस्त): अभिवादन Hey/Hi; contraction स्वाभाविक; phrasal verbs और छोटे वाक्य चलते हैं; फुर्ती के जवाबों में subject तक गिर जाता है (Got it. On my way.)। परीक्षा (IELTS/अकादमिक): formal-neutral — contraction नहीं, गली-शब्द नहीं; सतर्क भाषा (tend to, may, it appears that); linking adverb (however, moreover, therefore); अनुच्छेद-रचना अनिवार्य।\n\nसंकेत पहचानें: बहुत सारे विस्मय-चिह्न और ASAP-जैसे शब्द चैट का रंग; उपनाम-सहित पूरा अभिवादन ईमेल का; प्रश्न-रूप में अनुरोध — दोनों दुनिया का शिष्ट रूप। एक सुनहरा टेस्ट: क्या आप वह वाक्य उस पाठक के सामने बोल सकते हैं? हाँ, तो रजिस्टर ठीक है।",
          },
          examples: [
            {
              wrong: "Dear Mr Alam, thanks a ton for your mail! Catch you later, Rafi",
              right: "Dear Mr Alam, thank you for your email. Kind regards, Rafi",
              note: {
                bn: "thanks a ton / catch you later চ্যাট-গুচ্ছ; আনুষ্ঠানিক ইমেইলে thank you + Kind regards।",
                en: "'Thanks a ton' and 'Catch you later' are chat chunks; formal email pairs thank you with Kind regards.",
                hi: "'thanks a ton' / 'catch you later' चैट-मुहावरे हैं; औपचारिक ईमेल में thank you + Kind regards।",
              },
            },
            {
              wrong: "Good evening, respected Sir. I hope this email finds you well. 😊 free after 5?",
              right: "Hey! Free after 5?",
              note: {
                bn: "চ্যাটে ইমেইলের ভারী সালাম ব্যঙ্গ শোনায়; মাধ্যম বদলালে পোশাকও বদলায়।",
                en: "An email-weight greeting in chat reads as sarcasm; when the medium changes, the outfit changes too.",
                hi: "चैट में ईमेल-भारी अभिवादन व्यंग्य लगता है; माध्यम बदले तो पोशाक भी बदले।",
              },
            },
            {
              wrong: "Lots of people thinks smoking is bad, so government should ban it ASAP.",
              right: "Many people believe that smoking is harmful; therefore, the government should ban it.",
              note: {
                bn: "lots of→many, thinks→believe (agreement + register), ASAP আড়াই-শব্দ; therefore-ই পরীক্ষার জোড়া-বাক্যের সেতু।",
                en: "lots of→many, thinks→believe (agreement + register), ASAP is slang; therefore is the exam register's bridge between clauses.",
                hi: "lots of→many, thinks→believe (सम्मति + रजिस्टर), ASAP गली-शब्द है; therefore ही परीक्षा-शैली का सेतु है।",
              },
            },
            {
              wrong: "Hi Boss, send me the report asap.",
              right: "Hi Sir, could you please send me the report by this evening?",
              note: {
                bn: "খালি imperative আদেশ শোনায়; could you please অনুরোধ, আর asap-এর বদলে নির্দিষ্ট সময় by this evening।",
                en: "A bare imperative sounds like an order; could you please turns it into a request, and a specific 'by this evening' beats 'asap'.",
                hi: "खाली imperative आदेश लगता है; could you please इसे अनुरोध बनाता है, और 'asap' की जगह ठीक समय 'by this evening' बेहतर।",
              },
            },
            {
              wrong: "Dear Mr Khan, ... Yours faithfully",
              right: "Dear Mr Khan, ... Yours sincerely",
              note: {
                bn: "নাম ধরে সালাম হলে sincerely; Dear Sir or Madam হলে faithfully — সালাম আর সইয়ের জুটি মিলাতে হয়।",
                en: "A named greeting pairs with Yours sincerely; Dear Sir or Madam pairs with Yours faithfully — greeting and sign-off must match.",
                hi: "नाम लेकर अभिवादन हो तो Yours sincerely; Dear Sir or Madam हो तो Yours faithfully — अभिवादन और समापन की जोड़ी मिलानी होती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ইমেইলের পূর্ণ নকশা: শুরুর সালাম থেকে শেষের সই",
            en: "The full anatomy of an email: from opening salutation to sign-off",
            hi: "ईमेल की पूरी संरचना: शुरुआती अभिवादन से अंतिम हस्ताक्षर तक",
          },
          body: {
            bn: "একটা পূর্ণাঙ্গ আনুষ্ঠানিক ইমেইলের পাঁচ অংশ: (১) Subject line — কাজের সারমর্ম এক লাইনে: Request for Leave on 14 April। (২) সালাম — নাম জানা থাকলে Dear Mr/Ms Rahman; না জানলে Dear Sir or Madam; আধা-আনুষ্ঠানিক Hello/Hi Rahman। (৩) উদ্দেশ্য-বাক্য — I am writing to enquire about... / I am writing with regard to...; বাংলাভাষীরা প্রায়ই এই বাক্য বাদ দিয়ে সরাসরি দাবি শুরু করেন (I want a job.), যা রুক্ষ শোনায়। (৪) মূল অংশ — এক অনুচ্ছেদে এক প্রসঙ্গ; অনুরোধে Could you please...? বা I would be grateful if you could...; সংযুক্তির উল্লেখে I have attached my CV. / Please find my CV attached. (৫) বিদায়-লাইন ও সই — I look forward to hearing from you. / Thank you for your time; সই Kind regards / Yours sincerely + নাম।\n\nসাবধান: Please find attached herewith... for your kind consideration-এর মতো পুরোনো অফিস-শব্দ এখন অতিরিক্ত মনে হয়; আধুনিক আনুষ্ঠানিক লেখা সংক্ষিপ্ত ও পরিষ্কার।",
            en: "A complete formal email has five parts: (1) Subject line — the gist in one line: Request for Leave on 14 April. (2) Greeting — Dear Mr/Ms Rahman if you know the name; Dear Sir or Madam if you do not; semi-formal Hello/Hi Rahman. (3) Purpose sentence — I am writing to enquire about... / I am writing with regard to...; Bengali speakers often skip it and start with a bare demand (I want a job.), which sounds abrupt. (4) Body — one topic per paragraph; for requests Could you please...? or I would be grateful if you could...; for attachments I have attached my CV. / Please find my CV attached. (5) Closing line and sign-off — I look forward to hearing from you. / Thank you for your time; sign Kind regards / Yours sincerely + name.\n\nCaution: old officialese like 'Please find attached herewith... for your kind consideration' now feels heavy; modern formal writing is short and clear.",
            hi: "एक पूर्ण औपचारिक ईमेल के पाँच भाग: (1) Subject line — काम का सार एक लाइन में: Request for Leave on 14 April। (2) अभिवादन — नाम पता हो तो Dear Mr/Ms Rahman; न पता हो तो Dear Sir or Madam; अर्ध-औपचारिक Hello/Hi Rahman। (3) उद्देश्य-वाक्य — I am writing to enquire about... / I am writing with regard to...; बांग्लाभाषी अक्सर इसे छोड़कर सीधे फ़रमाइश से शुरू करते हैं (I want a job.), जो रूखा लगता है। (4) मुख्य भाग — एक अनुच्छेद, एक विषय; अनुरोध के लिए Could you please...? या I would be grateful if you could...; संलग्नक के लिए I have attached my CV. / Please find my CV attached. (5) विदाई-वाक्य और हस्ताक्षर — I look forward to hearing from you. / Thank you for your time; हस्ताक्षर Kind regards / Yours sincerely + नाम।\n\nसावधान: 'Please find attached herewith... for your kind consideration' जैसी पुरानी ऑफिस-भाषा अब भारी लगती है; आधुनिक औपचारिक लेखन छोटा और साफ़ होता है।",
          },
          examples: [
            {
              wrong: "I want a job in your company.",
              right: "I am writing to apply for the position of Junior Analyst advertised on your website.",
              note: {
                bn: "খালি দাবি নয় — উদ্দেশ্য + নির্দিষ্ট পদ; আবেদন-ইমেইলের প্রথম বাক্যের ছাঁচ।",
                en: "Not a bare demand — purpose + specific position; that is the mould of an application email's first sentence.",
                hi: "खाली फ़रमाइश नहीं — उद्देश्य + ठीक पद; आवेदन-ईमेल के पहले वाक्य का साँचा यही है।",
              },
            },
            {
              wrong: "Please find attached herewith my CV for your kind consideration.",
              right: "Please find my CV attached.",
              note: {
                bn: "herewith আর kind consideration পুরোনো অফিস-চট; আধুনিক আনুষ্ঠানিক রূপ সংক্ষিপ্ত।",
                en: "'Herewith' and 'for your kind consideration' are dated officialese; the modern formal version is lean.",
                hi: "'herewith' और 'for your kind consideration' पुरानी ऑफिस-चट हैं; आधुनिक औपचारिक रूप संक्षिप्त है।",
              },
            },
            {
              wrong: "I look forward to hear from you.",
              right: "I look forward to hearing from you.",
              note: {
                bn: "look forward to-এর to প্রিপজিশন — পরে V-ing বসে, ক্রিয়ার মূল রূপ নয়।",
                en: "The 'to' in look forward to is a preposition — it takes V-ing, not the base verb.",
                hi: "look forward to का 'to' प्रीपॉज़िशन है — उसके बाद V-ing आता है, base verb नहीं।",
              },
            },
            {
              wrong: "Thanks you for your cooperation.",
              right: "Thank you for your cooperation.",
              note: {
                bn: "thanks বিশেষ্য, thank ক্রিয়া — you থাকলে ক্রিয়া-রূপ Thank-ই দরকার।",
                en: "'Thanks' is the noun, 'thank' the verb — with 'you' present, the verb form Thank is required.",
                hi: "'thanks' संज्ञा है, 'thank' क्रिया — 'you' मौजूद हो तो क्रिया-रूप Thank ही चाहिए।",
              },
            },
            {
              wrong: "Dear Respected Sir, I hope you are fine. Yours lovingly, Rima",
              right: "Dear Mr Das, I hope this email finds you well. Kind regards, Rima",
              note: {
                bn: "Respected Sir আর Yours lovingly বাংলা-হিন্দি চিঠির অভ্যাস; ইংরেজি সালাম Mr/Ms + পদবি, সই নিরপেক্ষ।",
                en: "'Respected Sir' and 'Yours lovingly' are Bengali-Hindi letter habits; English greets with Mr/Ms + surname and signs off neutrally.",
                hi: "'Respected Sir' और 'Yours lovingly' बांग्ला-हिंदी पत्रों की आदत हैं; अंग्रेज़ी में अभिवादन Mr/Ms + उपनाम, और समापन तटस्थ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ফ্রেজাল ভার্ব বনাম ল্যাটিন ক্রিয়া: একই কাজ, দুই পোশাক",
            en: "Phrasal verbs vs Latin verbs: one job, two outfits",
            hi: "फ्रेज़ल वर्ब बनाम लैटिन क्रिया: एक ही काम, दो पोशाक",
          },
          body: {
            bn: "ফ্রেজাল ভার্ব কথ্য ইংরেজির ইঞ্জিন; আনুষ্ঠানিক লেখা এক-শব্দের ল্যাটিন ক্রিয়া পছন্দ করে। জোড়া-তালিকা: put off ↔ postpone; look into ↔ investigate; carry out ↔ conduct/perform; set up ↔ establish; find out ↔ determine/ascertain; go up/go down ↔ increase/decrease; call off ↔ cancel; bring up (প্রসঙ্গ) ↔ raise; come up with ↔ propose/devise; put up with ↔ tolerate; get in touch with ↔ contact; sort out ↔ resolve; point out ↔ note/indicate।\n\nতিনটা সূক্ষ্মতা: (১) ফ্রেজাল ভার্ব ভুল নয় — কথায়, আধা-আনুষ্ঠানিক ইমেইলে এগুলোই স্বাভাবিক ও সহজবোধ্য; শুধু গবেষণা-প্রতিবেদন, প্রবন্ধ, আইনি খসড়ায় ল্যাটিন ক্রিয়াই রেজিস্টার মেলায়। (২) ল্যাটিন ক্রিয়ারা প্রিপজিশন-ব্যাগ নিয়ে আসে — result in, lead to, consist of, contribute to; ক্রিয়া-প্রিপজিশন একসঙ্গে শিখুন। (৩) কিছু ফ্রেজাল ভার্ব আলাদা হয় (put the meeting off ✓), কিছু হয় না (look the matter into ✗); সন্দেহ থাকলে আলাদা না করাই নিরাপদ।",
            en: "Phrasal verbs are the engine of spoken English; formal writing prefers one-word Latin verbs. The pair list: put off ↔ postpone; look into ↔ investigate; carry out ↔ conduct/perform; set up ↔ establish; find out ↔ determine/ascertain; go up/go down ↔ increase/decrease; call off ↔ cancel; bring up (a topic) ↔ raise; come up with ↔ propose/devise; put up with ↔ tolerate; get in touch with ↔ contact; sort out ↔ resolve; point out ↔ note/indicate.\n\nThree subtleties: (1) phrasal verbs are not wrong — in speech and semi-formal email they are the natural, clear choice; it is research reports, essays and legal drafts where Latin verbs set the register. (2) Latin verbs come with a preposition bag — result in, lead to, consist of, contribute to; learn verb + preposition together. (3) Some phrasal verbs separate (put the meeting off ✓), some never do (look the matter into ✗); when in doubt, do not separate.",
            hi: "फ्रेज़ल वर्ब बोलचाल की अंग्रेज़ी का इंजन हैं; औपचारिक लेखन एक-शब्द की लैटिन क्रिया पसंद करता है। जोड़ियों की सूची: put off ↔ postpone; look into ↔ investigate; carry out ↔ conduct/perform; set up ↔ establish; find out ↔ determine/ascertain; go up/go down ↔ increase/decrease; call off ↔ cancel; bring up (विषय) ↔ raise; come up with ↔ propose/devise; put up with ↔ tolerate; get in touch with ↔ contact; sort out ↔ resolve; point out ↔ note/indicate।\n\nतीन बारीकियाँ: (1) फ्रेज़ल वर्ब गलत नहीं — बोलचाल और अर्ध-औपचारिक ईमेल में यही सहज और साफ़ विकल्प हैं; शोध-रिपोर्ट, निबंध, कानूनी मसौदे में ही लैटिन क्रियाएँ रजिस्टर मिलाती हैं। (2) लैटिन क्रियाएँ प्रीपॉज़िशन-बैग लेकर आती हैं — result in, lead to, consist of, contribute to; क्रिया + प्रीपॉज़िशन साथ सीखें। (3) कुछ फ्रेज़ल वर्ब अलग होते हैं (put the meeting off ✓), कुछ कभी नहीं (look the matter into ✗); संदेह हो तो अलग न करना ही सुरक्षित।",
          },
          examples: [
            {
              wrong: "The committee will look into the matter and call off the project if needed.",
              right: "The committee will investigate the matter and cancel the project if necessary.",
              note: {
                bn: "প্রতিবেদন-রেজিস্টারে investigate/cancel; needed→necessary-ও সেই একই পথে — ছোট শব্দের বদলে আনুষ্ঠানিক শব্দ।",
                en: "In report-register: investigate/cancel; needed→necessary walks the same path — a formal word replacing a small one.",
                hi: "रिपोर्ट-रजिस्टर में investigate/cancel; needed→necessary भी उसी रास्ते पर — छोटे शब्द की जगह औपचारिक शब्द।",
              },
            },
            {
              wrong: "The team is going to try out the new drug on volunteers.",
              right: "The team intends to test the new drug on volunteers.",
              note: {
                bn: "গবেষণা-সারাংশে be going to→intend to, try out→test — কথ্য-কাঠামো বদলে আনুষ্ঠানিক ক্রিয়া।",
                en: "In a research abstract, be going to→intend to and try out→test — the casual frame gives way to formal verbs.",
                hi: "शोध-सारांश में be going to→intend to, try out→test — बोलचाल-ढाँचे की जगह औपचारिक क्रियाएँ।",
              },
            },
            {
              wrong: "Please revert to my email by Monday.",
              right: "Please reply to my email by Monday.",
              note: {
                bn: "revert-এর আসল অর্থ 'আগের অবস্থায় ফেরা'; 'উত্তর দেওয়া' অর্থে revert দক্ষিণ এশিয়ার অফিস-শব্দ — বৈশ্বিক ইংরেজিতে reply/respond।",
                en: "'Revert' properly means 'to go back to a previous state'; using it for 'answer' is South Asian officialese — global English says reply/respond.",
                hi: "'revert' का असली अर्थ है 'पिछली अवस्था में लौटना'; 'जवाब देना' अर्थ में revert दक्षिण एशियाई ऑफिस-शब्द है — ग्लोबल अंग्रेज़ी कहती है reply/respond।",
              },
            },
            {
              wrong: "We will look the complaint into today.",
              right: "We will look into the complaint today.",
              note: {
                bn: "look into আলাদা হয় না; তুলনা করুন — put the meeting off চলে, কিন্তু look the matter into নয়।",
                en: "'Look into' is inseparable; compare — 'put the meeting off' is fine, but 'look the matter into' is not.",
                hi: "'look into' अलग नहीं होता; तुलना करें — 'put the meeting off' चलता है, पर 'look the matter into' नहीं।",
              },
            },
            {
              wrong: "The company setted up a new branch in Khulna last year.",
              right: "The company established a new branch in Khulna last year.",
              note: {
                bn: "set-এর অতীত set — setted নেই; আর আনুষ্ঠানিক লেখায় established এক শব্দেই কাজ সারে।",
                en: "The past of 'set' is 'set' — no 'setted'; and in formal writing 'established' does the whole job in one word.",
                hi: "'set' का भूत 'set' ही है — 'setted' नहीं; और औपचारिक लेखन में 'established' एक ही शब्द में काम निपटा देता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "এক বাক্যে দুই রেজিস্টার: বাংলাভাষী লেখকদের চেনা ধরা",
            en: "Two registers in one sentence: the familiar trap for Bengali writers",
            hi: "एक वाक्य में दो रजिस्टर: बांग्लाभाषी लेखकों की परिचित फँसवाई",
          },
          body: {
            bn: "বাংলা আনুষ্ঠানিক লেখায় সংস্কৃত-ঘেঁষা আর রোজকার শব্দ একসঙ্গে মিশে যায় ('অনুরোধ করা হচ্ছে যে তাড়াতাড়ি জিনিসটা দেখে নিন'), তাই বাংলাভাষী লেখক ইংরেজিতেও এক বাক্যে দুই রেজিস্টার গুলিয়ে ফেলেন — আর অমিলটা নিজের চোখে দেখতে পারেন না। ইংরেজি পাঠক এই অমিল সঙ্গে সঙ্গে টের পায়: Dear Sir-এর পরে plz, formal কাঠামোর শেষে chill! — প্রতিটা মিশ্রণ লেখকের ওপর নিয়ন্ত্রণহীনতার ছাপ ফেলে।\n\nসমাধান তিন ধাপে: (১) লেখার আগে পাঠক ও উদ্দেশ্য ঠিক করুন — এক ডকুমেন্টে এক রেজিস্টার; (২) বাক্য লেখার পর পুরো বাক্যটা একই স্তরে আছে কি না দেখুন — সালাম, মূল বাক্য, সমাপ্তি সব জায়গায়; (৩) দক্ষিণ এশিয়ার অফিস-চট বাদ দিন — kindly, do the needful, revert back, prepone; বৈশ্বিক বিকল্প please, address this matter, reply, bring forward। মনে রাখুন: আনুষ্ঠানিক মানেই লম্বা নয় — সংক্ষিপ্ত, পরিষ্কার, সম্মানজনক; এটাই আধুনিক formal লেখার স্বাদ।",
            en: "Formal Bengali freely mixes Sanskritic and everyday words ('অনুরোধ করা হচ্ছে যে তাড়াতাড়ি জিনিসটা দেখে নিন'), so Bengali writers mix two registers inside one English sentence too — and never notice the clash themselves. The English reader feels it at once: plz after Dear Sir, chill! at the tail of a formal frame — every mixture stamps the writer as out of control.\n\nThe fix, in three steps: (1) fix reader and purpose before writing — one document, one register; (2) after writing a sentence, check that the whole sentence sits at one level — greeting, body and ending alike; (3) drop South Asian officialese — kindly, do the needful, revert back, prepone; the global options are please, address this matter, reply, bring forward. And remember: formal does not mean long — short, clear, respectful; that is the taste of modern formal writing.",
            hi: "औपचारिक बांग्ला लेखन में संस्कृतनिष्ठ और रोज़मर्रा के शब्द साथ-साथ घुल जाते हैं ('अनुरोध করা হচ্ছে যে...'-से लेकर 'ताड़ाताड़ि দेखে निन' तक), इसलिए बांग्लाभाषी लेखक अंग्रेज़ी में भी एक वाक्य में दो रजिस्टर मिला देते हैं — और टकराव ख़ुद देख नहीं पाते। अंग्रेज़ी पाठक उसे तुरंत महसूस करता है: Dear Sir के बाद plz, औपचारिक ढाँचे की पूँछ पर chill! — हर मिश्रण लेखक को नियंत्रण-रहित दिखाता है।\n\nसमाधान तीन चरणों में: (1) लिखने से पहले पाठक और उद्देश्य तय करें — एक दस्तावेज़, एक रजिस्टर; (2) वाक्य लिखने के बाद देखें कि पूरा वाक्य एक ही स्तर पर है — अभिवादन, मुख्य भाग, समाप्ति सब जगह; (3) दक्षिण एशियाई ऑफिस-चट छोड़ें — kindly, do the needful, revert back, prepone; वैश्विक विकल्प हैं please, address this matter, reply, bring forward। याद रखें: औपचारिक का मतलब लंबा नहीं — छोटा, साफ़, सम्मानजनक; आधुनिक formal लेखन का यही स्वाद है।",
          },
          examples: [
            {
              wrong: "Dear Sir, I would like to request you to kindly do the needful ASAP.",
              right: "Dear Sir, I would be grateful if you could address this matter by Thursday.",
              note: {
                bn: "এক বাক্যে তিন স্তর: আনুষ্ঠানিক কাঠামো + do the needful (অফিস-চট) + ASAP (চ্যাট); বিকল্পটা নির্দিষ্ট কাজ ও সময় বলে।",
                en: "Three levels in one sentence: a formal frame + do the needful (officialese) + ASAP (chat); the alternative names a specific action and time.",
                hi: "एक वाक्य में तीन स्तर: औपचारिक ढाँचा + do the needful (ऑफिस-चट) + ASAP (चैट); विकल्प ठीक काम और समय बताता है।",
              },
            },
            {
              wrong: "The management regrets to inform you that the office is shut tomorrow, so chill!",
              right: "The management regrets to inform you that the office will remain closed tomorrow.",
              note: {
                bn: "formal কাঠামোর লেজে slang — রেজিস্টার বাক্যের শেষ শব্দ পর্যন্ত ধরে রাখতে হয়।",
                en: "Slang at the tail of a formal frame — the register must hold to the very last word of the sentence.",
                hi: "औपचारिक ढाँचे की पूँछ पर slang — रजिस्टर वाक्य के आख़िरी शब्द तक बना रहना चाहिए।",
              },
            },
            {
              wrong: "Esteemed Sir, plz check my assignment and revert back.",
              right: "Dear Sir, could you please review my assignment and reply by Friday?",
              note: {
                bn: "plz লেখায় নিষিদ্ধ বানান-সংক্ষেপ; revert back দ্বিগুণ ভুল — revert-এ 'back' বোঝা যায়ই।",
                en: "'Plz' is a spelling shortcut banned in writing; 'revert back' doubles the fault — 'back' is already inside revert.",
                hi: "'plz' लिखित में वर्जित संक्षिप्त रूप है; 'revert back' दोहरी गलती — 'back' revert में पहले से है।",
              },
            },
            {
              wrong: "We are writing to inform that your application has been rejected. Bye!!",
              right: "We regret to inform you that your application has been unsuccessful.",
              note: {
                bn: "inform-এর পরে you আবশ্যক; Bye আর !! আনুষ্ঠানিক চিঠির সমাপ্তি নয় — rejected-এর জায়গায় unsuccessful-এর নরম শব্দও রেজিস্টারের অংশ।",
                en: "'Inform' needs 'you'; 'Bye!!' is not how formal letters end — and softening rejected to unsuccessful is part of the register.",
                hi: "'inform' के बाद 'you' ज़रूरी है; 'Bye!!' औपचारिक पत्र की समाप्ति नहीं — rejected की जगह कोमल unsuccessful भी रजिस्टर का हिस्सा है।",
              },
            },
            {
              wrong: "As per your esteemed email, please find my documents attached herewith, thx.",
              right: "As requested, I have attached the documents.",
              note: {
                bn: "এক লাইনে অফিস-চটের স্তূপ (as per, esteemed, herewith) + চ্যাটের thx; আধুনিক formal সংক্ষিপ্ত ও একস্তরের।",
                en: "One line stacks officialese (as per, esteemed, herewith) with chat 'thx'; modern formal is short and single-level.",
                hi: "एक लाइन में ऑफिस-चट का ढेर (as per, esteemed, herewith) + चैट का thx; आधुनिक formal छोटा और एक-स्तरीय होता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle mistakes of advanced learners",
            hi: "उच्च स्तर के शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "C1 স্তরের বাংলাভাষীদের সবচেয়ে ঘন ঘন পাঁচটা পা: (১) আনুষ্ঠানিক প্রবন্ধে contraction ঢুকে পড়া — it's, don't, can't; (২) slangy intensifier — super, totally, really big রিপোর্টে; (৩) kindly-র অতিরিক্ত ব্যবহার — বৈশ্বিক ইংরেজিতে এটা পুরোনো ও আঞ্চলিক ঘ্রাণ ছড়ায়, please-ই নিরাপদ; (৪) চ্যাটে অতি-আনুষ্ঠানিকতা — Dear Respected Sir, I hope you are in good health দিয়ে শুরু করে 'এক কাপ চা খাবে?' জিজ্ঞেস করা; (৫) সমাপ্তি-বিভ্রান্তি — Yours lovingly, Your loving student, Bye — ইংরেজি সই নিরপেক্ষ থাকে।\n\nপ্রতিটার প্রতিষেধক একটাই: পাঠক নির্ধারণ করুন, তারপর পুরো বাক্য ওই স্তরে পড়ুন। প্রবন্ধে লিখুন It is widely believed...; চ্যাটে লিখুন Hey! — দুটোর মিশ্রণ কোনো স্তরেই বসে না।",
            en: "The five most frequent slips of C1-level Bengali speakers: (1) contractions creeping into formal essays — it's, don't, can't; (2) slangy intensifiers — super, totally, really big in reports; (3) overusing kindly — in global English it smells dated and regional, please is the safe choice; (4) over-formality in chat — opening with Dear Respected Sir, I hope you are in good health and then asking 'এক কাপ চা খাবে?'; (5) sign-off confusion — Yours lovingly, Your loving student, Bye — English sign-offs stay neutral.\n\nThe antidote is one: fix the reader, then read the whole sentence at that level. In the essay write It is widely believed...; in chat write Hey! — no level hosts their mixture.",
            hi: "C1 स्तर के बांग्लाभाषियों की सबसे बार-बार आने वाली पाँच फिसलनें: (1) औपचारिक निबंध में contraction घुसना — it's, don't, can't; (2) गली-अंदाज़ के तीव्रता-शब्द — super, totally, really big रिपोर्ट में; (3) kindly का अत्यधिक उपयोग — ग्लोबल अंग्रेज़ी में यह पुराना और क्षेत्रीय लगता है, please सुरक्षित है; (4) चैट में अति-औपचारिकता — Dear Respected Sir, I hope you are in good health से शुरू करके 'एक कप चाय पियोगे?' पूछना; (5) समापन-भ्रम — Yours lovingly, Your loving student, Bye — अंग्रेज़ी हस्ताक्षर तटस्थ रहता है।\n\nहर एक का इलाज एक है: पाठक तय करें, फिर पूरा वाक्य उसी स्तर पर पढ़ें। निबंध में लिखें It is widely believed...; चैट में लिखें Hey! — दोनों का मिश्रण किसी स्तर में नहीं बैठता।",
          },
          examples: [
            {
              wrong: "It's widely believed that the policy is ineffective.",
              right: "It is widely believed that the policy is ineffective.",
              note: {
                bn: "অ্যাকাডেমিক প্রবন্ধে contraction নেই; চ্যাটে it's চলবে — প্রসঙ্গই আইন দেয়।",
                en: "Academic essays take no contractions; it's is fine in chat — context makes the law.",
                hi: "अकादमिक निबंध में contraction नहीं; चैट में it's चलेगा — संदर्भ ही क़ानून देता है।",
              },
            },
            {
              wrong: "The survey results were super encouraging.",
              right: "The survey results were highly encouraging.",
              note: {
                bn: "super আড্ডার তীব্রতা-শব্দ; রিপোর্টে highly / remarkably — একই উচ্ছ্বাস, ঠান্ডা শব্দে।",
                en: "'Super' is playground intensity; reports use highly / remarkably — the same enthusiasm in cool words.",
                hi: "'super' अड्डे की तीव्रता-शब्द है; रिपोर्ट में highly / remarkably — वही जोश, ठंडे शब्दों में।",
              },
            },
            {
              wrong: "Kindly revert back to me as soon as possible.",
              right: "Please reply as soon as possible.",
              note: {
                bn: "kindly + revert back — দুই স্তরের আঞ্চলিক অভ্যাস এক বাক্যে; please + reply বৈশ্বিক ও সরল।",
                en: "kindly + revert back — two layers of regional habit in one sentence; please + reply is global and simple.",
                hi: "kindly + revert back — एक वाक्य में क्षेत्रीय आदत के दो स्तर; please + reply वैश्विक और सरल है।",
              },
            },
            {
              wrong: "Hi Sir, I can't attend tomorrow's class as I am down with fever.",
              right: "Hello Sir, I am sorry but I will be unable to attend tomorrow's class as I have a fever.",
              note: {
                bn: "can't contraction আর down with fever আড্ডা-বাগাড়ম্বর; শিক্ষককে লেখা ছুটির নোটে সামান্য উঁচু স্তর মানানসই।",
                en: "The contraction and 'down with fever' are casual flourishes; a leave note to a teacher sits one level higher.",
                hi: "can't contraction और 'down with fever' अड़ड़े का अंदाज़ है; अध्यापक को लिखे छुट्टी-नोट में एक स्तर ऊपर की भाषा सही है।",
              },
            },
            {
              wrong: "Dear Sir/Madam, I wanna know about the scholarship.",
              right: "Dear Sir or Madam, I would like to enquire about the scholarship.",
              note: {
                bn: "wanna শুধু মুখে; লেখায় want to — আর জিজ্ঞাসার আনুষ্ঠানিক ক্রিয়া enquire।",
                en: "'Wanna' belongs to speech only; write want to — and the formal verb for asking is enquire.",
                hi: "'wanna' केवल मुखर भाषा का है; लिखित में want to — और पूछताछ की औपचारिक क्रिया enquire है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট লেখায় দেখা যাক",
            en: "Seen in a short piece of writing",
            hi: "छोटे लेखन में देखिए",
          },
          body: {
            bn: "একই খবর দুই পোশাকে পড়ুন — আনুষ্ঠানিক ইমেইল: 'Dear Mr Haque, I am writing to inform you that the scheduled maintenance has been postponed to Sunday, 14 April. We apologise for any inconvenience this may cause, and we would be grateful if you could plan accordingly. Kind regards, Systems Team.' একই খবর দলের চ্যাটে: 'Hey all, maintenance is pushed to Sunday 14 Apr — sorry for the trouble! Plan accordingly 🙏' অর্থ এক, পোশাক আলাদা — আর পোশাকই পাঠকের প্রথম অভিব্যক্তি।\n\nএক নজরে: (১) আগে শ্রোতা, পরে শব্দ — বস/পরীক্ষক হলে উঁচু স্তর, বন্ধু হলে নিচু; (২) আনুষ্ঠানিক লেখায় contraction নয় — do not, I am, cannot; (৩) ফ্রেজাল ভার্বের জায়গায় ল্যাটিন ক্রিয়া — postpone, investigate, conduct, cancel; (৪) ইমেইলের পাঁচ অংশ — সালাম → I am writing to... → অনুরোধ → বিদায়-লাইন → সই; (৫) এক ডকুমেন্ট এক রেজিস্টার — মাঝপথে বদল নয়; (৬) kindly, do the needful, revert back এড়িয়ে please, address, reply।",
            en: "Read the same news in two outfits — formal email: 'Dear Mr Haque, I am writing to inform you that the scheduled maintenance has been postponed to Sunday, 14 April. We apologise for any inconvenience this may cause, and we would be grateful if you could plan accordingly. Kind regards, Systems Team.' The same news in the team chat: 'Hey all, maintenance is pushed to Sunday 14 Apr — sorry for the trouble! Plan accordingly 🙏' One meaning, two dresses — and the dress is the reader's first impression.\n\nAt a glance: (1) audience first, words second — boss/examiner means the upper level, a friend the lower; (2) no contractions in formal writing — do not, I am, cannot; (3) Latin verbs in place of phrasal verbs — postpone, investigate, conduct, cancel; (4) the email's five parts — greeting → I am writing to... → request → closing line → sign-off; (5) one document, one register — no mid-stream switching; (6) avoid kindly, do the needful, revert back; use please, address, reply.",
            hi: "वही ख़बर दो पोशाकों में पढ़ें — औपचारिक ईमेल: 'Dear Mr Haque, I am writing to inform you that the scheduled maintenance has been postponed to Sunday, 14 April. We apologise for any inconvenience this may cause, and we would be grateful if you could plan accordingly. Kind regards, Systems Team.' वही ख़बर टीम-चैट में: 'Hey all, maintenance is pushed to Sunday 14 Apr — sorry for the trouble! Plan accordingly 🙏' अर्थ एक, पोशाक अलग — और पोशाक ही पाठक का पहला अनुभव है।\n\nएक नज़र में: (1) पहले श्रोता, बाद में शब्द — बॉस/परीक्षक हो तो ऊँचा स्तर, दोस्त हो तो नीचा; (2) औपचारिक लेखन में contraction नहीं — do not, I am, cannot; (3) फ्रेज़ल वर्ब की जगह लैटिन क्रिया — postpone, investigate, conduct, cancel; (4) ईमेल के पाँच भाग — अभिवादन → I am writing to... → अनुरोध → विदाई-वाक्य → हस्ताक्षर; (5) एक दस्तावेज़, एक रजिस्टर — बीच में बदलाव नहीं; (6) kindly, do the needful, revert back से बचें; please, address, reply अपनाएँ।",
          },
          examples: [
            {
              wrong: "Dear Mr Haque, maintenance got postponed to Sunday, sorry for the hassle!",
              right: "Dear Mr Haque, I am writing to inform you that the maintenance has been postponed to Sunday. We apologise for any inconvenience.",
              note: {
                bn: "got-passive + sorry for the hassle চ্যাটের পোশাক; formal ইমেইলে has been postponed + apologise।",
                en: "Got-passive + 'sorry for the hassle' is chat clothing; formal email wears has been postponed + apologise.",
                hi: "got-passive + 'sorry for the hassle' चैट की पोशाक है; औपचारिक ईमेल पहनता है has been postponed + apologise।",
              },
            },
            {
              wrong: "We would be grateful if you can plan accordingly.",
              right: "We would be grateful if you could plan accordingly.",
              note: {
                bn: "would-এর জুটি could — can নয়; অনুরোধের আনুষ্ঠানিক ছাঁচের অংশ।",
                en: "'Would' pairs with 'could', not 'can' — part of the formal request mould.",
                hi: "'would' की जोड़ी 'could' के साथ है, 'can' के साथ नहीं — औपचारिक अनुरोध-साँचे का हिस्सा।",
              },
            },
            {
              wrong: "Hey team, the management regrets to inform you that the deadline has been extended.",
              right: "Hey team, good news — the deadline has been extended!",
              note: {
                bn: "চ্যাটে অফিস-সার্কুলারের গম্ভীর কাঠামো ব্যঙ্গ শোনায়; মাধ্যম অনুযায়ী ঢিলেঢালা কাঠামো নিন।",
                en: "The grave office-circular frame sounds sarcastic in chat; take the looser frame the medium invites.",
                hi: "चैट में ऑफिस-परिपत्र का गंभीर ढाँचा व्यंग्य लगता है; माध्यम के अनुसार ढीला ढाँचा लें।",
              },
            },
            {
              wrong: "Kind regards, your loving student, Rima.",
              right: "Kind regards, Rima.",
              note: {
                bn: "your loving student বাংলা চিঠির অভ্যাস; ইংরেজি সই নামমাত্র — সম্পর্ক বাক্যে বোঝান, সইয়ে নয়।",
                en: "'Your loving student' is a Bengali letter habit; the English sign-off is just the name — show the relationship in the sentence, not the signature.",
                hi: "'your loving student' बांग्ला पत्रों की आदत है; अंग्रेज़ी हस्ताक्षर बस नाम होता है — रिश्ता वाक्य में दिखाएँ, हस्ताक्षर में नहीं।",
              },
            },
            {
              wrong: "Please find attached the file. Do the needful.",
              right: "I have attached the file. Could you please review it by Monday?",
              note: {
                bn: "do the needful-এর বদলে নির্দিষ্ট অনুরোধ — আনুষ্ঠানিক লেখার প্রাণ স্পষ্টতা।",
                en: "Replace 'do the needful' with the actual request — clarity is the soul of formal writing.",
                hi: "'do the needful' की जगह ठीक अनुरोध — औपचारिक लेखन की आत्मा स्पष्टता है।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "শ্রোতা-প্রথম নিয়ম: লেখা শুরুর আগে ঠিক করুন কে পড়বে — বস, ক্লায়েন্ট, পরীক্ষক, নাকি বন্ধু; উত্তরটাই শব্দ বেছে দেবে।",
          en: "Audience first: before writing, decide who will read it — boss, client, examiner, or friend; the answer picks the words.",
          hi: "श्रोता-पहले नियम: लिखने से पहले तय करें कौन पढ़ेगा — बॉस, क्लाइंट, परीक्षक या दोस्त; यही जवाब शब्द चुनेगा।",
        },
        {
          bn: "আনুষ্ঠানিক লেখায় contraction নিষিদ্ধ: don't→do not, I'm→I am; চ্যাটে উল্টোটা — সবসময় পূর্ণরূপ লিখলে রোবট শোনায়।",
          en: "No contractions in formal writing: don't→do not, I'm→I am; in chat it is the reverse — always writing full forms sounds robotic.",
          hi: "औपचारिक लेखन में contraction वर्जित: don't→do not, I'm→I am; चैट में उल्टा — हमेशा पूरा रूप लिखना रोबोट जैसा लगता है।",
        },
        {
          bn: "ফ্রেজাল ভার্বের জোড়া মুখস্থ: put off→postpone, look into→investigate, carry out→conduct, call off→cancel, set up→establish, find out→ascertain।",
          en: "Memorise phrasal-verb pairs: put off→postpone, look into→investigate, carry out→conduct, call off→cancel, set up→establish, find out→ascertain.",
          hi: "फ्रेज़ल वर्ब की जोड़ियाँ याद करें: put off→postpone, look into→investigate, carry out→conduct, call off→cancel, set up→establish, find out→ascertain।",
        },
        {
          bn: "জোড়া-শব্দ স্কেল: kids/children, buy/purchase, get/obtain, tell/inform, need/require, say sorry/apologise — বাঁ দিকটা আড্ডা, ডান দিকটা অফিস।",
          en: "The pair scale: kids/children, buy/purchase, get/obtain, tell/inform, need/require, say sorry/apologise — left side chat, right side office.",
          hi: "जोड़ी-पैमाना: kids/children, buy/purchase, get/obtain, tell/inform, need/require, say sorry/apologise — बायाँ पक्ष चैट, दायाँ पक्ष ऑफिस।",
        },
        {
          bn: "ইমেইলের পাঁচ অংশ ছাঁচে রাখুন: সালাম → I am writing to... → অনুরোধ (Could you please... / I would be grateful if you could...) → I look forward to... → সই।",
          en: "Keep the email's five-part mould: greeting → I am writing to... → request (Could you please... / I would be grateful if you could...) → I look forward to... → sign-off.",
          hi: "ईमेल का पाँच-भाग साँचा रखें: अभिवादन → I am writing to... → अनुरोध (Could you please... / I would be grateful if you could...) → I look forward to... → हस्ताक्षर।",
        },
        {
          bn: "Yours sincerely (নাম ধরে সালাম) বনাম Yours faithfully (Dear Sir or Madam) — সালাম আর সইয়ের জুটি সবসময় মিলান।",
          en: "Yours sincerely (named greeting) vs Yours faithfully (Dear Sir or Madam) — always match the greeting and sign-off pair.",
          hi: "Yours sincerely (नाम-सहित अभिवादन) बनाम Yours faithfully (Dear Sir or Madam) — अभिवादन और समापन की जोड़ी हमेशा मिलाएँ।",
        },
        {
          bn: "দক্ষিণ এশিয়ার অফিস-শব্দ সাবধানে: kindly, do the needful, revert back, prepone — বৈশ্বিক ইংরেজিতে please, address this matter, reply, bring forward।",
          en: "Beware South Asian officialese: kindly, do the needful, revert back, prepone — global English prefers please, address this matter, reply, bring forward.",
          hi: "दक्षिण एशियाई ऑफिस-शब्दों से सावधान: kindly, do the needful, revert back, prepone — ग्लोबल अंग्रेज़ी में please, address this matter, reply, bring forward।",
        },
        {
          bn: "এক বাক্যে দুই রেজিস্টার মেশাবেন না — 'I would like to request you to kindly plz revert ASAP'-এর মতো বাক্য পড়লেই বোঝা যায় লেখক স্তর ধরতে পারেননি।",
          en: "Never mix two registers in one sentence — a sentence like 'I would like to request you to kindly plz revert ASAP' shows the writer never settled on a level.",
          hi: "एक वाक्य में दो रजिस्टर न मिलाएँ — 'I would like to request you to kindly plz revert ASAP' जैसा वाक्य दिखाता है कि लेखक ने स्तर तय ही नहीं किया।",
        },
        {
          bn: "পরীক্ষার উত্তরে totally, super, a lot of, ASAP-এর বদলে considerably, highly, many, immediately — intensifier-ও রেজিস্টার মাপে।",
          en: "In exam answers prefer considerably, highly, many, immediately over totally, super, a lot of, ASAP — even intensifiers are measured for register.",
          hi: "परीक्षा-उत्तर में totally, super, a lot of, ASAP की जगह considerably, highly, many, immediately — तीव्रता-शब्द भी रजिस्टर से तौले जाते हैं।",
        },
        {
          bn: "পাল্টা-পরীক্ষা: বাক্যটা ওই ব্যক্তির মুখোমুখি বলতে পারবেন? চ্যাটে 'Dear Respected Sir' লিখলে মানুষ হাসবে — রেজিস্টার শ্রোতার মুখেই পরীক্ষা হয়।",
          en: "The reverse test: could you say the sentence face-to-face to that person? Write 'Dear Respected Sir' in chat and people will laugh — register is examined on the reader's face.",
          hi: "उलटा टेस्ट: क्या आप वह वाक्य उस व्यक्ति के सामने बोल सकते हैं? चैट में 'Dear Respected Sir' लिखिए और लोग हँसेंगे — रजिस्टर की परीक्षा पाठक के चेहरे पर होती है।",
        },
      ],
      quiz: [
        {
          question: "You are emailing an admissions officer whose name you do not know. Which opening is correct?",
          options: ["Hey there,", "Dear Sir or Madam,", "Respected Sir,", "Hi dear,"],
          answer: 1,
          explanation: {
            bn: "নাম না জানা প্রাপকের চিঠি Dear Sir or Madam দিয়ে খোলে; Respected Sir দক্ষিণ এশিয়ার অভ্যাস, Hey চ্যাটের সালাম।",
            en: "A letter to an unknown recipient opens with Dear Sir or Madam; 'Respected Sir' is a South Asian habit, 'Hey' is a chat greeting.",
            hi: "नाम अज्ञात प्राप्तकर्ता के पत्र की शुरुआत Dear Sir or Madam से होती है; 'Respected Sir' दक्षिण एशियाई आदत, 'Hey' चैट का अभिवादन।",
          },
        },
        {
          question: "Choose the formal equivalent of 'put off'.",
          options: ["call off", "postpone", "push off", "delay off"],
          answer: 1,
          explanation: {
            bn: "put off = postpone (স্থগিত); call off-এর অর্থ cancel — আলাদা ফ্রেজাল ভার্ব; push off/delay off এমনই নেই।",
            en: "Put off = postpone (defer); call off means cancel — a different phrasal verb; 'push off'/'delay off' do not exist here.",
            hi: "put off = postpone (स्थगित); call off का अर्थ cancel — दूसरा फ्रेज़ल वर्ब; 'push off'/'delay off' यहाँ नहीं चलते।",
          },
        },
        {
          question: "Which sentence suits a formal report?",
          options: ["The results were totally messed up.", "The results didn't make sense.", "The results were inconclusive.", "The results were a total flop."],
          answer: 2,
          explanation: {
            bn: "inconclusive — রিপোর্টের ভঙ্গি; বাকিগুলো আড়াই-শব্দ বা contraction-ঘেঁষা।",
            en: "'Inconclusive' is report-register; the others are slangy or contraction-flavoured.",
            hi: "'inconclusive' — रिपोर्ट की भाषा; बाकी गली-शब्द या contraction-मिश्रित हैं।",
          },
        },
        {
          question: "Choose the correct closing after 'Dear Mr Khan,':",
          options: ["Yours faithfully,", "Yours sincerely,", "Bye bye,", "Yours lovingly,"],
          answer: 1,
          explanation: {
            bn: "নাম ধরে সালাম হলে Yours sincerely; Dear Sir or Madam হলে Yours faithfully; bye bye ও lovingly চিঠির সই নয়।",
            en: "A named greeting takes Yours sincerely; Dear Sir or Madam takes Yours faithfully; 'bye bye' and 'lovingly' are not letter sign-offs.",
            hi: "नाम-सहित अभिवादन के साथ Yours sincerely; Dear Sir or Madam के साथ Yours faithfully; 'bye bye' और 'lovingly' पत्र-समापन नहीं हैं।",
          },
        },
        {
          question: "I look forward to ______ from you.",
          options: ["hear", "hearing", "heard", "have heard"],
          answer: 1,
          explanation: {
            bn: "look forward to-এর to প্রিপজিশন — পরে V-ing: hearing।",
            en: "The 'to' in look forward to is a preposition — it takes V-ing: hearing.",
            hi: "look forward to का 'to' प्रीपॉज़िशन है — बाद में V-ing: hearing।",
          },
        },
        {
          question: "Which version fits a chat with a close teammate?",
          options: ["Dear Sir, greetings of the day. Do you wish to partake in coffee?", "Hey! Coffee?", "Esteemed colleague, I hereby invite you to coffee.", "Respected friend, kindly confirm coffee."],
          answer: 1,
          explanation: {
            bn: "চ্যাটের রেজিস্টার ছোট ও ঢিলেঢালা — Hey! Coffee?; অতি-আনুষ্ঠানিক সংস্করণগুলো কৌতুক শোনায়।",
            en: "Chat register is short and loose — Hey! Coffee?; the over-formal versions read as a joke.",
            hi: "चैट रजिस्टर छोटा और ढीला है — Hey! Coffee?; अति-औपचारिक संस्करण हास्य लगते हैं।",
          },
        },
        {
          question: "Formal rewrite: 'The profit went up fast.' → 'The profit ______ rapidly.'",
          options: ["raised", "arose", "increased", "rose up"],
          answer: 2,
          explanation: {
            bn: "went up→increased; raise সকর্মক (কেউ raise করে), arose-এর অর্থ উদ্ভূত হওয়া, rose up অপ্রয়োজনীয় up-সহ।",
            en: "went up→increased; 'raise' is transitive (someone raises something), 'arose' means emerged, and 'rose up' doubles the up.",
            hi: "went up→increased; 'raise' सकर्मक है (कोई बढ़ाता है), 'arose' का अर्थ उभरना, 'rose up' में up दोहराया गया।",
          },
        },
        {
          question: "Which sentence mixes two registers?",
          options: ["I am afraid I will be unable to attend.", "We regret to inform you that the office is shut, so chill!", "Please find my CV attached.", "Could you please clarify the deadline?"],
          answer: 1,
          explanation: {
            bn: "আনুষ্ঠানিক কাঠামোর শেষে so chill! — দুই রেজিস্টার এক বাক্যে; বাকিগুলো নিজ নিজ স্তরে ধারাবাহিক।",
            en: "The formal frame ends with 'so chill!' — two registers in one sentence; the others stay consistent at their own levels.",
            hi: "औपचारिक ढाँचा 'so chill!' पर टूटता है — एक वाक्य में दो रजिस्टर; बाकी अपने-अपने स्तर पर सुसंगत हैं।",
          },
        },
        {
          question: "In a formal report, 'We need to find out the cause' becomes:",
          options: ["We need to figure out the cause.", "The cause must be ascertained.", "We gotta find the cause.", "Let's find out the cause."],
          answer: 1,
          explanation: {
            bn: "find out→ascertain, সঙ্গে impersonal passive — রিপোর্টের দুই চিহ্ন; বাকিগুলো কথ্য স্তরে।",
            en: "find out→ascertain plus an impersonal passive — two report markers; the others sit at spoken level.",
            hi: "find out→ascertain और impersonal passive — रिपोर्ट के दो चिह्न; बाकी बोलचाल स्तर पर हैं।",
          },
        },
        {
          question: "'Please revert back at the earliest.' — the best global-English version is:",
          options: ["Please revert back soonest.", "Please reply at your earliest convenience.", "Kindly do the needful early.", "Please back-reply at earliest."],
          answer: 1,
          explanation: {
            bn: "revert/revert back আর at the earliest আঞ্চলিক অফিস-শব্দ; বৈশ্বিক রূপ reply + at your earliest convenience।",
            en: "'Revert/revert back' and 'at the earliest' are regional officialese; the global form is reply + at your earliest convenience.",
            hi: "'revert/revert back' और 'at the earliest' क्षेत्रीय ऑफिस-शब्द हैं; वैश्विक रूप reply + at your earliest convenience।",
          },
        },
      ],
    },
  },
  /* ── 4. Precision Articles & Quantifiers ─────────────────────────────── */
  {
    topic: "Precision Articles & Quantifiers",
    level: "advanced",
    title: "Precision Articles & Quantifiers",
    unit: 0,
    data: {
      title: {
        bn: "নিখুঁত আর্টিকেল ও কোয়ান্টিফায়ার",
        en: "Precision Articles & Quantifiers",
        hi: "सटीक आर्टिकल और क्वांटिफ़ायर",
      },
      intro: {
        bn: "আর্টিকেল ইংরেজির সবচেয়ে ছোট শব্দ, কিন্তু সবচেয়ে প্রকাশ্য ভুলের উৎস — a, an, the, আর কোনোটাই না (zero article); সঙ্গে পরিমাণ-শব্দের দল much/many, little/few, less/fewer। বাংলায় আর্টিকেল নেই, তাই বাংলাভাষীরা হয় সবখানে the ছড়ান, নয় সব বাদ দেন — দুই দিকেই শোনা যায়। এই পাঠে নিয়ম মুখস্থের বদলে সিদ্ধান্ত-প্রক্রিয়া শিখব: কখন a (একটা, এখনো চেনা নয়), কখন the (দুজনেরই জানা), কখন কিছুই না (সাধারণ ভাব, প্রতিষ্ঠান-উদ্দেশ্য)। সঙ্গে সূক্ষ্ম জোড়া: a number of বনাম the number of, little বনাম a little, less বনাম fewer, whole বনাম all বনাম entire। শুরুর আগে intermediate স্তরের countable/uncountable বিশেষ্য ও আর্টিকেল-সংক্রান্ত পাঠ আর এই ব্যাচের Nominalisation & Academic Style পাঠটি শেষ করে নিন — IELTS Task 1 আর প্রতিবেদনে এই পাঠের জিনিসগুলোই সবচেয়ে বেশি পরীক্ষা হয়।",
        en: "Articles are the smallest words in English, yet the most public source of error — a, an, the, and no article at all (zero article); alongside them, the quantifier family: much/many, little/few, less/fewer. Bengali has no articles, so Bengali speakers either sprinkle 'the' everywhere or drop all of them — both are audible. This lesson teaches a decision process, not a rule list: when a (one of many, not yet known), when the (both of us know which one), when nothing (general idea, institution-as-purpose). Plus the fine pairs: a number of vs the number of, little vs a little, less vs fewer, whole vs all vs entire. Before starting, finish the intermediate lessons on countable/uncountable nouns and articles, and the Nominalisation & Academic Style lesson of this batch — IELTS Task 1 and reports test exactly these items.",
        hi: "आर्टिकल अंग्रेज़ी के सबसे छोटे शब्द हैं, पर गलती का सबसे खुला स्रोत — a, an, the, और कोई आर्टिकल ही नहीं (zero article); साथ में क्वांटिफ़ायर-परिवार: much/many, little/few, less/fewer। बांग्ला में आर्टिकल नहीं हैं, इसलिए बांग्लाभाषी या तो हर जगह the बिखेर देते हैं या सब छोड़ देते हैं — दोनों सुनाई देते हैं। इस पाठ में नियम-रटने की बजाय निर्णय-प्रक्रिया सीखेंगे: कब a (कोई एक, अभी अनजान), कब the (दोनों जानते हैं कौन-सा), कब कुछ नहीं (सामान्य भाव, संस्था-उद्देश्य)। साथ में बारीक जोड़े: a number of बनाम the number of, little बनाम a little, less बनाम fewer, whole बनाम all बनाम entire। शुरू करने से पहले intermediate स्तर के countable/uncountable संज्ञा और आर्टिकल-संबंधी पाठ, और इसी बैच का Nominalisation & Academic Style पाठ पूरा कर लें — IELTS Task 1 और रिपोर्ट में यही चीज़ें सबसे ज़्यादा परखी जाती हैं।",
      },
      sections: [
        {
          heading: {
            bn: "কখন ব্যবহার হয়: আর্টিকেল মানেই দৃষ্টিভঙ্গি",
            en: "When to use what: an article is a viewpoint",
            hi: "कब क्या इस्तेमाल हो: आर्टिकल एक दृष्टिकोण है",
          },
          body: {
            bn: "তিনটা আর্টিকেল আসলে তিনটা দৃষ্টিভঙ্গি। a/an বলে — বক্তা জানেন, শ্রোতা এখনো কোনটা বোঝাচ্ছেন তা জানে না: I saw a dog. the বলে — দুজনেই জানে কোনটা: দ্বিতীয় উল্লেখ, পরিস্থিতি-জ্ঞান (Close the door.), অনন্য বস্তু (the sun)। zero বলে — কোনো নির্দিষ্ট একটা নয়, পুরো শ্রেণি বা ভর নিয়ে কথা: Dogs are loyal. Water boils at 100°C. Honesty is rare.\n\nসিদ্ধান্তের তিন-প্রশ্ন টেস্ট: (১) বিশেষ্যটা কি singular countable? হলে সে কোনো না কোনো determiner দাবি করে — a/the/my/this; খালি রাখা যায় না। (২) শ্রোতা কি জানে কোনটা? হলে the; প্রথম উল্লেখ হলে a/an। (৩) কি পুরো শ্রেণি বা সাধারণ ভাব নিয়ে কথা? হলে plural/uncountable + zero: Life is beautiful, but the life of a farmer is hard — একই বাক্যে দুই দৃষ্টিভঙ্গি।",
            en: "The three articles are really three viewpoints. a/an says — the speaker knows the listener does not yet know which one: I saw a dog. the says — both of us know which one: second mention, shared situation (Close the door.), unique object (the sun). zero says — no particular one; we speak of the whole class or the mass: Dogs are loyal. Water boils at 100°C. Honesty is rare.\n\nThe three-question test: (1) Is the noun singular countable? Then it demands some determiner — a/the/my/this; it can never stand bare. (2) Does the listener know which one? Then the; if it is the first mention, a/an. (3) Are we talking about the whole class or a general idea? Then plural/uncountable + zero: Life is beautiful, but the life of a farmer is hard — two viewpoints inside one sentence.",
            hi: "तीन आर्टिकल असल में तीन दृष्टिकोण हैं। a/an कहता है — बोलने वाला जानता है कि सुनने वाला अभी नहीं जानता कौन-सा: I saw a dog. the कहता है — दोनों जानते हैं कौन-सा: दूसरा उल्लेख, साझा परिस्थिति (Close the door.), अद्वितीय वस्तु (the sun)। zero कहता है — कोई ख़ास एक नहीं, पूरी श्रेणी या सामूहिक भाव: Dogs are loyal. Water boils at 100°C. Honesty is rare.\n\nतीन-प्रश्न टेस्ट: (1) क्या संज्ञा singular countable है? तो उसे कोई न कोई determiner चाहिए — a/the/my/this; खाली छोड़ना असंभव। (2) क्या श्रोता जानता है कौन-सा? तो the; पहला उल्लेख हो तो a/an। (3) क्या पूरी श्रेणी या सामान्य भाव की बात हो रही है? तो plural/uncountable + zero: Life is beautiful, but the life of a farmer is hard — एक ही वाक्य में दो दृष्टिकोण।",
          },
          examples: [
            {
              wrong: "I bought a shirt. A shirt was quite expensive.",
              right: "I bought a shirt. The shirt was quite expensive.",
              note: {
                bn: "প্রথম উল্লেখ a, দ্বিতীয় উল্লেখ the — গল্পের সোনালি নিয়ম; পাঠক এখন জানে কোন শার্টের কথা।",
                en: "First mention a, second mention the — the golden story rule; the reader now knows which shirt.",
                hi: "पहला उल्लेख a, दूसरा the — कहानी का सुनहरा नियम; पाठक अब जानता है कौन-सी शर्ट।",
              },
            },
            {
              wrong: "I am reading book about history.",
              right: "I am reading a book about history.",
              note: {
                bn: "singular countable বিশেষ্য কখনো খালি দাঁড়ায় না — a, the, my, this-এর মতো determiner লাগবেই।",
                en: "A singular countable noun never stands bare — it demands a determiner like a, the, my, this.",
                hi: "singular countable संज्ञा कभी नंगी नहीं खड़ी रहती — a, the, my, this जैसा determiner ज़रूरी है।",
              },
            },
            {
              wrong: "The honesty is the best policy.",
              right: "Honesty is the best policy.",
              note: {
                bn: "সাধারণ ভাবের abstract বিশেষ্যে zero — Honesty; কিন্তু স্থায়ী প্রবাদের the best রয়ে যায়, superlative-এর নিয়ম।",
                en: "An abstract noun in a general statement takes zero — Honesty; but the fixed proverb keeps the best, by the superlative rule.",
                hi: "सामान्य भाव की abstract संज्ञा पर zero — Honesty; पर पक्के कहावत का the best रहता है, superlative के नियम से।",
              },
            },
            {
              wrong: "Gold is precious metal.",
              right: "Gold is a precious metal.",
              note: {
                bn: "gold সাধারণ ভাবে zero, কিন্তু metal singular countable — তার সামনে a বাধ্যতামূলক; এক বাক্যে দুই নিয়ম।",
                en: "'Gold' as an idea takes zero, but 'metal' is singular countable — it needs a; two rules in one sentence.",
                hi: "'gold' सामान्य भाव में zero लेता है, पर 'metal' singular countable है — उसके आगे a अनिवार्य; एक वाक्य में दो नियम।",
              },
            },
            {
              wrong: "The life in Dhaka is busy.",
              right: "Life in Dhaka is busy.",
              note: {
                bn: "life এখানে সাধারণ ভাব — zero; তবে the life of a rickshaw-puller বললে নির্দিষ্ট জীবন — the চলে।",
                en: "'Life' here is the general idea — zero; but 'the life of a rickshaw-puller' points to one specific life — the returns.",
                hi: "यहाँ 'life' सामान्य भाव है — zero; पर 'the life of a rickshaw-puller' एक ठोस जीवन बताता है — the वापस आता है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "গঠন: কোয়ান্টিফায়ারের সারণি — কে কার সঙ্গে বসে",
            en: "Structure: the quantifier chart — who sits with what",
            hi: "गठन: क्वांटिफ़ायर की सारणी — कौन किसके साथ बैठता है",
          },
          body: {
            bn: "পরিমাণ-শব্দের সারণি মুখস্থ করুন — প্রতিটা সারিতে আগে দল, তারপর উদাহরণ: • plural countable-এর সঙ্গে: many, few, a few, numerous, a number of → There are a few chairs. • uncountable-এর সঙ্গে: much, little, a little, a great deal of, a large amount of → There is a little water. • দুই দলেই: a lot of, lots of, plenty of, some, any, no → a lot of money / a lot of books।\n\nক্রিয়া-মেলানোর সোনালি জোড়া: a number of = 'বহু' → plural ক্রিয়া (A number of students were absent.); the number of = 'সংখ্যাটা' → singular ক্রিয়া (The number of students has doubled.)। একটা a/the-ই অর্থ ও ক্রিয়া দুটোই বদলে দেয়। আর সমগ্র-শব্দের বিন্যাস: the whole day / all day / the entire city — whole-এর আগে determiner, all day-তে কিছুই না; এর বিশদ নিচের অনুচ্ছেদে।",
            en: "Memorise the quantifier chart — each row gives the group first, then an example: • with plural countables: many, few, a few, numerous, a number of → There are a few chairs. • with uncountables: much, little, a little, a great deal of, a large amount of → There is a little water. • with both: a lot of, lots of, plenty of, some, any, no → a lot of money / a lot of books.\n\nThe golden verb-agreement pair: a number of = 'many' → plural verb (A number of students were absent.); the number of = 'the figure' → singular verb (The number of students has doubled.). One little a/the flips both meaning and verb. And the arrangement of whole-words: the whole day / all day / the entire city — a determiner before whole, nothing before all day; details in a later section.",
            hi: "क्वांटिफ़ायर की सारणी याद करें — हर पंक्ति में पहले समूह, फिर उदाहरण: • plural countable के साथ: many, few, a few, numerous, a number of → There are a few chairs. • uncountable के साथ: much, little, a little, a great deal of, a large amount of → There is a little water. • दोनों के साथ: a lot of, lots of, plenty of, some, any, no → a lot of money / a lot of books।\n\nक्रिया-मेल का सुनहरा जोड़ा: a number of = 'बहुत सारे' → plural क्रिया (A number of students were absent.); the number of = 'संख्या' → singular क्रिया (The number of students has doubled.)। छोटा-सा a/the अर्थ और क्रिया दोनों पलट देता है। और समग्र-शब्दों की व्यवस्था: the whole day / all day / the entire city — whole से पहले determiner, all day में कुछ नहीं; विस्तार बाद के खंड में।",
          },
          examples: [
            {
              wrong: "There are only little buses on this route.",
              right: "There are only a few buses on this route.",
              note: {
                bn: "buses plural countable — much/little পরিবার এখানে ঢোকে না; few-পরিবার লাগবে, আর ইতিবাচক ভাবে a few।",
                en: "'Buses' is plural countable — the much/little family cannot enter; you need the few family, and positive a few.",
                hi: "'buses' plural countable है — much/little परिवार यहाँ घुस नहीं सकता; few-परिवार चाहिए, और सकारात्मक a few।",
              },
            },
            {
              wrong: "She has much experience in teaching.",
              right: "She has a lot of experience in teaching.",
              note: {
                bn: "মুখের বা লেখার বিবৃতিতে much মূলত প্রশ্ন-অস্বীকারে; বিবৃতিতে a lot of, আনুষ্ঠানিক লেখায় a great deal of।",
                en: "In statements, 'much' belongs mainly to questions and negatives; statements prefer a lot of, formal writing a great deal of.",
                hi: "कथन-वाक्यों में 'much' मुख्यतः प्रश्न-निषेध का शब्द है; कथन में a lot of, औपचारिक लेखन में a great deal of।",
              },
            },
            {
              wrong: "A number of students was absent.",
              right: "A number of students were absent.",
              note: {
                bn: "a number of = 'বহু ছাত্র' — subject আসলে students, তাই plural ক্রিয়া were।",
                en: "'A number of' means 'many students' — the real subject is students, hence the plural verb were.",
                hi: "'a number of' का अर्थ 'बहुत से छात्र' — वास्तविक subject students है, इसलिए plural क्रिया were।",
              },
            },
            {
              wrong: "The number of students have increased.",
              right: "The number of students has increased.",
              note: {
                bn: "the number of = 'সংখ্যাটা' — subject সেই একক সংখ্যা, তাই singular ক্রিয়া has।",
                en: "'The number of' means 'the figure' — the subject is that single number, hence the singular verb has.",
                hi: "'the number of' का अर्थ 'संख्या' — subject वही एकल संख्या है, इसलिए singular क्रिया has।",
              },
            },
            {
              wrong: "I have less books than you.",
              right: "I have fewer books than you.",
              note: {
                bn: "books গোনা যায় — fewer; less uncountable-এর জন্য (less money)। এই জোড়া IELTS-এ প্রতিদিন পরীক্ষা হয়।",
                en: "'Books' can be counted — fewer; less is for uncountables (less money). This pair is tested daily in IELTS.",
                hi: "'books' गिने जा सकते हैं — fewer; less uncountable के लिए (less money)। यह जोड़ी IELTS में रोज़ परखी जाती है।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "আভাস ও প্যাটার্ন: কোন শব্দ কোন আর্টিকেল ডাকে",
            en: "Signals and patterns: which word calls which article",
            hi: "संकेत और पैटर्न: कौन-सा शब्द कौन-सा आर्टिकल बुलाता है",
          },
          body: {
            bn: "the ডাকে: দ্বিতীয় উল্লেখ; বিশেষ্যের পরে of-phrase (the roof of the house); superlative (the best); ordinal (the first); অনন্য বস্তু (the sun, the moon, the internet); the same, the only; অতি-পরিচিত প্রেক্ষাপট (the kitchen, the bus = আমাদের রুটের)। a/an ডাকে: প্রথম উল্লেখ; পেশা (She is a doctor.); সংখ্যার আগে (a hundred); উচ্চারণ-নিয়ম — an hour, an MBA (স্বরধ্বনি-শব্দ), কিন্তু a university, a European (yu-ধ্বনি)। zero ডাকে: সাধারণ plural (Dogs are loyal.); সাধারণ uncountable (Happiness matters.); খাবার (have lunch — কিন্তু a big lunch); যাতায়াত (by bus); খেলা-ভাষা (chess, Bengali); most + বিশেষ্য (Most people)।\n\nএকটা সূক্ষ্ম আভাস: বিশেষ্যের পরে of-phrase বা relative clause এলে প্রায়ই the দরকার — the history of Bengal, the book that you lent me; সংজ্ঞাটা বিশেষ্যকে নির্দিষ্ট করে দেয়।",
            en: "'The' is called by: second mention; an of-phrase after the noun (the roof of the house); superlatives (the best); ordinals (the first); unique objects (the sun, the moon, the internet); the same, the only; a super-familiar context (the kitchen, the bus = our route's). 'A/an' is called by: first mention; professions (She is a doctor.); numbers (a hundred); the sound rule — an hour, an MBA (vowel sounds), but a university, a European (yoo-sound). 'Zero' is called by: general plurals (Dogs are loyal.); general uncountables (Happiness matters.); meals (have lunch — but a big lunch); transport (by bus); games and languages (chess, Bengali); most + noun (Most people).\n\nOne subtle signal: when an of-phrase or relative clause follows the noun, the is usually needed — the history of Bengal, the book that you lent me; the definition makes the noun specific.",
            hi: "'the' बुलाते हैं: दूसरा उल्लेख; संज्ञा के बाद of-phrase (the roof of the house); superlative (the best); ordinal (the first); अद्वितीय वस्तुएँ (the sun, the moon, the internet); the same, the only; अति-परिचित संदर्भ (the kitchen, the bus = हमारी रूट की)। 'a/an' बुलाते हैं: पहला उल्लेख; पेशा (She is a doctor.); संख्या से पहले (a hundred); उच्चारण-नियम — an hour, an MBA (स्वर-ध्वनि), पर a university, a European (yu-ध्वनि)। 'zero' बुलाते हैं: सामान्य plural (Dogs are loyal.); सामान्य uncountable (Happiness matters.); भोजन (have lunch — पर a big lunch); यातायात (by bus); खेल-भाषा (chess, Bengali); most + संज्ञा (Most people)।\n\nएक सूक्ष्म संकेत: संज्ञा के बाद of-phrase या relative clause आ जाए तो प्रायः the चाहिए — the history of Bengal, the book that you lent me; परिभाषा संज्ञा को विशिष्ट बना देती है।",
          },
          examples: [
            {
              wrong: "She is the teacher at a primary school.",
              right: "She is a teacher at a primary school.",
              note: {
                bn: "পেশা প্রথমবার বললে a — শ্রেণিতে অনেক teacher আছে, নির্দিষ্ট একজন নয়।",
                en: "A profession on first mention takes a — the class holds many teachers, not one particular one.",
                hi: "पेशा पहली बार कहने पर a — कक्षा में कई teacher हैं, कोई विशिष्ट एक नहीं।",
              },
            },
            {
              wrong: "He returned back after a hour.",
              right: "He returned after an hour.",
              note: {
                bn: "an বানানে নয়, উচ্চারণে আসে — hour-এ h নীরব, স্বরধ্বনি-শব্দ; আর returned back-এ back অপ্রয়োজনীয়।",
                en: "'An' follows sound, not spelling — the h in hour is silent, a vowel sound; and 'returned back' doubles the return.",
                hi: "'an' वर्तनी से नहीं, उच्चारण से आता है — hour का h मौन, स्वर-ध्वनि; और 'returned back' में back अनावश्यक।",
              },
            },
            {
              wrong: "Most of people agree with the decision.",
              right: "Most people agree with the decision.",
              note: {
                bn: "most + বিশেষ্য zero; most of-এর পরে দরকার the — most of the people (নির্দিষ্ট দল)।",
                en: "most + noun takes zero; after most of you need the — most of the people (a specific group).",
                hi: "most + संज्ञा पर zero; most of के बाद the चाहिए — most of the people (विशिष्ट समूह)।",
              },
            },
            {
              wrong: "I go to the bed at eleven.",
              right: "I go to bed at eleven.",
              note: {
                bn: "bed ঘুমানোর উদ্দেশ্যে গেলে zero; the bed মানে খাটের টুকরোটা — বসে বই পড়ছেন, হয়তো।",
                en: "'Bed' as the purpose of sleeping takes zero; the bed means the piece of furniture — maybe you sit on it reading.",
                hi: "सोने के उद्देश्य से 'bed' पर zero; the bed का मतलब फ़र्निचर का टुकड़ा — शायद बैठकर किताब पढ़ रहे हैं।",
              },
            },
            {
              wrong: "We travelled by the bus to Khulna.",
              right: "We travelled to Khulna by bus.",
              note: {
                bn: "by + যানবাহনে zero — by bus, by train, by air; কিন্তু নির্দিষ্ট বাস বোঝালে on the 6 o'clock bus।",
                en: "by + vehicle takes zero — by bus, by train, by air; but for a specific bus, on the 6 o'clock bus.",
                hi: "by + वाहन पर zero — by bus, by train, by air; पर ठोस बस हो तो on the 6 o'clock bus।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "প্রতিষ্ঠান-হিসেবে উদ্দেশ্য: go to school, prison, hospital — zero-এর সবচেয়ে সূক্ষ্ম জায়গা",
            en: "Institutions as purpose: go to school, prison, hospital — the subtlest zero zone",
            hi: "संस्था-रूप में उद्देश्य: go to school, prison, hospital — zero की सबसे बारीक भूमि",
          },
          body: {
            bn: "school, college, university, church, prison, hospital, market, bed — এই জায়গাগুলোর সামনে আর্টিকেল নির্ভর করে উদ্দেশ্যের ওপর। ব্যক্তি প্রতিষ্ঠানের মূল কাজে যাচ্ছেন — ছাত্র হয়ে পড়তে, বন্দি হয়ে শাস্তি ভোগ করতে, রোগী হয়ে চিকিৎসা নিতে, উপাসক হয়ে প্রার্থনায়, ঘুমাতে — তাহলে zero: go to school, be in prison, be in hospital (BrE), go to bed, go to church। আর জায়গাটা শুধু ইট-কাঠের ভবন বা ভ্রমণের ঠিকানা — অভিভাবক স্কুলে গেলেন সভায়, সাংবাদিক কারাগারে সংবাদ নিতে, আত্মীয় হাসপাতালে দেখা করতে — তাহলে the: went to the school to meet the headmaster, visited the prison, visited the hospital।\n\nএকই লজিক abstract বিশেষ্যে: সাধারণ ভাবে zero — Education changes lives, Success needs patience; নির্দিষ্ট হলে the — The education he received was poor, The success of the mission surprised us। লক্ষ করুন, AmE-এ 'in the hospital' প্রচলিত, BrE-এ রোগী-অর্থে 'in hospital' — পরীক্ষায় BrE ধরে নেওয়া নিরাপদ।",
            en: "school, college, university, church, prison, hospital, market, bed — the article before these depends on purpose. When the person goes for the institution's core function — to study as a pupil, to serve a sentence, to be treated as a patient, to pray as a worshipper, to sleep — use zero: go to school, be in prison, be in hospital (BrE), go to bed, go to church. But when the place is merely a building or a destination — a parent goes to a meeting, a journalist visits for a story, a relative visits a patient — use the: went to the school to meet the headmaster, visited the prison, visited the hospital.\n\nThe same logic runs through abstract nouns: general idea — zero: Education changes lives, Success needs patience; specific — the: The education he received was poor, The success of the mission surprised us. Note that AmE says 'in the hospital' while BrE, for the patient sense, says 'in hospital' — in exams, assume BrE.",
            hi: "school, college, university, church, prison, hospital, market, bed — इनके आगे आर्टिकल उद्देश्य पर टिका है। व्यक्ति संस्था के मूल काम से जा रहा है — विद्यार्थी बनकर पढ़ने, बंदी बनकर सज़ा काटने, रोगी बनकर इलाज लेने, उपासक बनकर प्रार्थना करने, सोने — तो zero: go to school, be in prison, be in hospital (BrE), go to bed, go to church। पर जगह सिर्फ़ ईंट-गारे की इमारत या ठिकाना है — अभिभावक बैठक के लिए स्कूल गया, पत्रकार ख़बर लेने जेल गया, रिश्तेदार मिलने अस्पताल गया — तो the: went to the school to meet the headmaster, visited the prison, visited the hospital।\n\nवही तर्क abstract संज्ञाओं में: सामान्य भाव पर zero — Education changes lives, Success needs patience; विशिष्ट पर the — The education he received was poor, The success of the mission surprised us। ध्यान दें, AmE 'in the hospital' कहती है, BrE रोगी-अर्थ में 'in hospital' — परीक्षा में BrE मानना सुरक्षित।",
          },
          examples: [
            {
              wrong: "He was sent to the prison for three years.",
              right: "He was sent to prison for three years.",
              note: {
                bn: "শাস্তি ভোগ করতে যাওয়া — বন্দি-উদ্দেশ্যে zero; the prison মানে ভবনটা — সাংবাদিক visited the prison।",
                en: "Going to serve a sentence — prisoner-purpose takes zero; the prison means the building — a journalist visited the prison.",
                hi: "सज़ा काटने जाना — बंदी-उद्देश्य पर zero; the prison का मतलब इमारत — पत्रकार visited the prison।",
              },
            },
            {
              wrong: "The child goes to the school every day — he is in class three.",
              right: "The child goes to school every day — he is in class three.",
              note: {
                bn: "ছাত্র হয়ে পড়তে যাওয়া — zero; বাবা goes to the school to attend a meeting বললেই ভবন-অর্থ।",
                en: "Going as a pupil to study — zero; when the father goes to the school to attend a meeting, the building sense returns.",
                hi: "विद्यार्थी बनकर पढ़ने जाना — zero; बाप goes to the school to attend a meeting कहे तो इमारत-अर्थ लौट आता है।",
              },
            },
            {
              wrong: "After the surgery my father spent a week in the hospital, and we visited hospital every day.",
              right: "After the surgery my father spent a week in hospital, and we visited the hospital every day.",
              note: {
                bn: "BrE-এ রোগী in hospital (zero), দর্শক visited the hospital (ভবন) — এক বাক্যে দুই ভূমিকা, দুই আর্টিকেল।",
                en: "In BrE the patient is in hospital (zero), the visitor visited the hospital (the building) — two roles, two articles in one sentence.",
                hi: "BrE में रोगी in hospital (zero), मिलने वाला visited the hospital (इमारत) — एक वाक्य में दो भूमिका, दो आर्टिकल।",
              },
            },
            {
              wrong: "The education is the key to the success.",
              right: "Education is the key to success.",
              note: {
                bn: "education আর success সাধারণ ভাবে zero; the key থেকে যায় — একক, অনন্য উপায় বোঝায়।",
                en: "'Education' and 'success' as general ideas take zero; the key stays — it points to one unique means.",
                hi: "'education' और 'success' सामान्य भाव में zero लेते हैं; the key रहता है — वह एक अद्वितीय साधन दिखाता है।",
              },
            },
            {
              wrong: "We go to the church every Sunday to pray.",
              right: "We go to church every Sunday to pray.",
              note: {
                bn: "উপাসক হয়ে প্রার্থনায় — zero; পর্যটক went to the church to take photos বললে ভবন-অর্থ।",
                en: "Going as a worshipper to pray — zero; a tourist went to the church to take photos — building sense.",
                hi: "उपासक बनकर प्रार्थना करने जाना — zero; पर्यटक went to the church to take photos — इमारत-अर्थ।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "অনন্য জগৎ আর ব্যতিক্রম: the-এর বিশেষ আধিপত্য",
            en: "The unique world and its exceptions: where 'the' rules",
            hi: "अद्वितीय जगत और अपवाद: जहाँ 'the' का विशेष आधिपत्य",
          },
          body: {
            bn: "যা একটাই, তার সামনে the: the sun, the moon, the sky, the earth, the world, the internet, the same, the only, the first/last, the best/worst। যন্ত্র-মাধ্যমে ভাগ: বাদ্যযন্ত্রে the — play the piano/violin; কিন্তু খেলায় zero — play chess/cricket; মাধ্যমেও ভাগ — listen to the radio, কিন্তু watch television (মাধ্যম হিসেবে); the + বিশেষণ = পুরো শ্রেণি — the rich, the poor, the elderly (plural অর্থ, plural ক্রিয়া)। একক-শ্রেণির দুই রূপই চলে: The tiger is endangered. / Tigers are endangered.\n\nসময়-শব্দের বিশেষ সারি zero: next week, last year, this morning; কিন্তু in the morning/afternoon/evening-এ the, at night-এ zero। এই ছোট ছোট আধিপত্য মুখস্থ করার একটাই পথ — বাক্য-সারি হিসেবে: on the internet, on the radio, on the way, in the end, at the same time, all over the world।",
            en: "Whatever exists as one takes the: the sun, the moon, the sky, the earth, the world, the internet, the same, the only, the first/last, the best/worst. Instruments and media split: musical instruments take the — play the piano/violin; games take zero — play chess/cricket; media split too — listen to the radio, but watch television (as a medium); the + adjective = a whole class — the rich, the poor, the elderly (plural sense, plural verb). Both forms of a single class work: The tiger is endangered. / Tigers are endangered.\n\nTime words have a special zero row: next week, last year, this morning; but in the morning/afternoon/evening takes the, and at night takes zero. The only way to master these small dominions is as a sentence list: on the internet, on the radio, on the way, in the end, at the same time, all over the world.",
            hi: "जो एक ही है, उसके आगे the: the sun, the moon, the sky, the earth, the world, the internet, the same, the only, the first/last, the best/worst। यंत्र-माध्यम का विभाजन: वाद्ययंत्र पर the — play the piano/violin; पर खेल पर zero — play chess/cricket; माध्यम भी बँटे हैं — listen to the radio, पर watch television (माध्यम के रूप में); the + विशेषण = पूरी श्रेणी — the rich, the poor, the elderly (बहुवचन भाव, बहुवचन क्रिया)। एकल-श्रेणी के दोनों रूप चलते हैं: The tiger is endangered. / Tigers are endangered।\n\nसमय-शब्दों की विशेष zero-पंक्ति: next week, last year, this morning; पर in the morning/afternoon/evening में the, at night में zero। इन छोटे-छोटे आधिपत्यों को रटने का एक ही रास्ता — वाक्य-सूची के रूप में: on the internet, on the radio, on the way, in the end, at the same time, all over the world।",
          },
          examples: [
            {
              wrong: "Sun rises in the east.",
              right: "The sun rises in the east.",
              note: {
                bn: "অনন্য বস্তু — সূর্য একটাই, তাই the; দিকের সামনেও the east/west।",
                en: "Unique object — there is one sun, hence the; directions too take the: the east/west.",
                hi: "अद्वितीय वस्तु — सूरज एक ही है, इसलिए the; दिशाओं पर भी the: the east/west।",
              },
            },
            {
              wrong: "I spent the whole night on Internet.",
              right: "I spent the whole night on the internet.",
              note: {
                bn: "internet একক সেবা-জগৎ — the internet; চলন্ত গুচ্ছ on the internet।",
                en: "'The internet' is one single service-world — the internet; the running chunk is on the internet.",
                hi: "internet एक ही सेवा-जगत है — the internet; चलता गुच्छ है on the internet।",
              },
            },
            {
              wrong: "We bought same phone.",
              right: "We bought the same phone.",
              note: {
                bn: "same সবসময় the-এর সঙ্গে চেইন-বাঁধা — the same; this same আধা-সাহিত্যিক, রোজকার ভাষা the same।",
                en: "'Same' is chained to the — the same; 'this same' is literary-flavoured, everyday language says the same.",
                hi: "'same' हमेशा the की ज़ंजीर में बँधा — the same; 'this same' साहित्यिक स्वाद, रोज़मर्रा भाषा कहती है the same।",
              },
            },
            {
              wrong: "She plays the chess very well.",
              right: "She plays chess very well.",
              note: {
                bn: "খেলায় zero — play chess/cricket; বাদ্যযন্ত্রে the — play the violin; দুই পাড়ার নিয়ম আলাদা।",
                en: "Games take zero — play chess/cricket; instruments take the — play the violin; two neighbourhoods, two rules.",
                hi: "खेलों पर zero — play chess/cricket; वाद्ययंत्रों पर the — play the violin; दो मोहल्ले, दो नियम।",
              },
            },
            {
              wrong: "The rich is not always happy.",
              right: "The rich are not always happy.",
              note: {
                bn: "the + বিশেষণ = পুরো শ্রেণি — the rich মানে ধনী মানুষরা; অর্থ plural, তাই ক্রিয়া are।",
                en: "the + adjective = a whole class — the rich means rich people; the sense is plural, so the verb is are.",
                hi: "the + विशेषण = पूरी श्रेणी — the rich यानी अमीर लोग; भाव बहुवचन है, इसलिए क्रिया are।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "পরিমাণের সূক্ষ্ম যন্ত্র: little/few, much/many, less/fewer, a number of/the number of, whole/all/entire",
            en: "The fine machinery of quantity: little/few, much/many, less/fewer, a number of/the number of, whole/all/entire",
            hi: "परिमाण की बारीक मशीन: little/few, much/many, less/fewer, a number of/the number of, whole/all/entire",
          },
          body: {
            bn: "আগে মেজাজ, পরে সংখ্যা। little আর few-র আগে a না থাকলে ভাবটা হতাশার — প্রায় নেই: We have little time (বাস ছাড়ার আগে সময় প্রায় শেষ), He has few friends (প্রায় কেউ নেই)। a-থাকলে ভাবটা তৃপ্তির — কিছু আছে, চলবে: a little time (একটু সময় আছে), a few friends (কয়েকজন আছেন)। গাণিতিক দিক: few/a few + plural countable; little/a little + uncountable।\n\nএরপর গঠন-জোড়া: much/many মূলত প্রশ্ন, অস্বীকার আর so/too/how-এর সঙ্গে; বিবৃতিতে a lot of / plenty of, আনুষ্ঠানিক লেখায় a great deal of (uncountable) / numerous (countable)। a number of = 'বহু' → plural ক্রিয়া; the number of = 'সংখ্যাটা' → singular ক্রিয়া। less + uncountable (less money), fewer + countable (fewer cars); তবে টাকা-দূরত্ব-সময় একক পরিমাণ হিসেবে less চলে (less than ten dollars, less than five miles)। শেষে সমগ্র-শব্দ: the whole day = all day; whole-এর আগে determiner (the whole city, my whole life); all-এর সারি আলাদা (all day, all night, all my life); entire = whole-এর শক্ত সহোদর (the entire report)।",
            en: "Mood first, then number. Without a before little/few, the mood is despair — almost none: We have little time (barely any before the bus leaves), He has few friends (almost nobody). With a, the mood is contentment — some, enough: a little time (some time left), a few friends (several people). The arithmetic: few/a few + plural countable; little/a little + uncountable.\n\nThen the structure pairs: much/many belong mainly to questions, negatives and so/too/how; statements prefer a lot of / plenty of, formal writing a great deal of (uncountable) / numerous (countable). a number of = 'many' → plural verb; the number of = 'the figure' → singular verb. less + uncountable (less money), fewer + countable (fewer cars); but money, distance and time as single amounts take less (less than ten dollars, less than five miles). Finally the whole-words: the whole day = all day; a determiner stands before whole (the whole city, my whole life); the all-row is separate (all day, all night, all my life); entire is whole's stronger sibling (the entire report).",
            hi: "पहले भाव, फिर गिनती। little/few से पहले a न हो तो भाव निराशा का है — लगभग कुछ नहीं: We have little time (बस छूटने से पहले समय लगभग ख़त्म), He has few friends (कोई-कोई ही है)। a हो तो भाव संतोष का — कुछ है, चल जाएगा: a little time (थोड़ा समय बचा है), a few friends (कुछ दोस्त हैं)। गणित: few/a few + plural countable; little/a little + uncountable।\n\nफिर ढाँचे-जोड़े: much/many मुख्यतः प्रश्न, निषेध और so/too/how के साथ; कथनों में a lot of / plenty of, औपचारिक लेखन में a great deal of (uncountable) / numerous (countable)। a number of = 'बहुत सारे' → plural क्रिया; the number of = 'संख्या' → singular क्रिया। less + uncountable (less money), fewer + countable (fewer cars); पर पैसा-दूरी-समय एक सामूहिक मात्रा के रूप में less लेते हैं (less than ten dollars, less than five miles)। अंत में समग्र-शब्द: the whole day = all day; whole से पहले determiner (the whole city, my whole life); all-की पंक्ति अलग (all day, all night, all my life); entire = whole का बलवान भाई (the entire report)।",
          },
          examples: [
            {
              wrong: "Hurry up, we have a little time — the train leaves in two minutes!",
              right: "Hurry up, we have little time — the train leaves in two minutes!",
              note: {
                bn: "দুই মিনিটে ট্রেন — সময় প্রায় নেই; little (a ছাড়া) = প্রায় নেই; a little বললে 'একটু আছে, আরামে চলবে' শোনায়।",
                en: "The train leaves in two minutes — time is almost gone; little (no a) = hardly any; a little would sound like 'some left, no rush'.",
                hi: "दो मिनट में ट्रेन — समय लगभग ख़त्म; little (a के बिना) = लगभग नहीं; a little कहते तो 'थोड़ा बचा है, आराम से' सुनाई देता।",
              },
            },
            {
              wrong: "Few students passed, so the teacher was pleased.",
              right: "A few students passed, so the teacher was pleased.",
              note: {
                bn: "শিক্ষক খুশি মানে কেউ-কেউ পাস করেছে — ইতিবাচক a few; few হলে 'প্রায় কেউ পাস করেনি', খুশির কারণই থাকে না।",
                en: "The teacher's pleasure means some passed — positive a few; bare few would mean 'almost none passed', leaving nothing to be pleased about.",
                hi: "अध्यापक की ख़ुशी का मतलब कुछ लोग पास हुए — सकारात्मक a few; खाली few होता तो 'लगभग कोई पास नहीं', ख़ुशी का कारण ही नहीं बचता।",
              },
            },
            {
              wrong: "The number of road accidents have doubled in a decade.",
              right: "The number of road accidents has doubled in a decade.",
              note: {
                bn: "the number of = সংখ্যাটা একটাই — singular ক্রিয়া has; প্রতিবেদন-লেখার প্রতিদিনের বাক্য।",
                en: "'The number of' is one single figure — singular verb has; a daily sentence in report writing.",
                hi: "'the number of' = वह संख्या एक ही है — singular क्रिया has; रिपोर्ट-लेखन का रोज़ का वाक्य।",
              },
            },
            {
              wrong: "There are less cars on the road today.",
              right: "There are fewer cars on the road today.",
              note: {
                bn: "cars গোনা যায় — fewer; less শুধু ভরের জিনিসে — less traffic, less noise।",
                en: "'Cars' can be counted — fewer; less is only for mass — less traffic, less noise.",
                hi: "'cars' गिने जा सकते हैं — fewer; less केवल सामूहिक वस्तुओं पर — less traffic, less noise।",
              },
            },
            {
              wrong: "I worked whole day without a break.",
              right: "I worked all day without a break.",
              note: {
                bn: "whole-এর আগে determiner লাগবেই — the whole day; নয়তো all-সারি নিন — all day, all night।",
                en: "'Whole' must carry a determiner — the whole day; otherwise take the all-row — all day, all night.",
                hi: "'whole' से पहले determiner लाज़मी है — the whole day; वरना all-पंक्ति लें — all day, all night।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "উচ্চ স্তরের শিক্ষার্থীদের সূক্ষ্ম ভুল",
            en: "Subtle mistakes of advanced learners",
            hi: "उच्च स्तर के शिक्षार्थियों की सूक्ष्म गलतियाँ",
          },
          body: {
            bn: "C1 পর্যায়ের বাংলাভাষীদের সবচেয়ে ঘন ঘন পাঁচটা পা: (১) uncountable বিশেষ্যে plural — informations, advices, furnitures, equipments, softwares; (২) most-এর আগে the ঢোকানো — the most of people; (৩) less দিয়ে countable মাপা — less people, less cars (IELTS Task 1-এ ঘন ঘন); (৪) প্রতিষ্ঠান-উদ্দেশ্যে the ঢোকানো — go to the school বলে ছাত্র-অর্থ; (৫) the both — ইংরেজিতে both-এর আগে the বসে না (both candidates / both the candidates চলে, the both কখনও নয়)।\n\nপ্রতিষেধক একটা: uncountable তালিকা মুখস্থ করুন — information, advice, furniture, equipment, software, research, evidence, feedback, progress, knowledge, luggage, homework; পরিমাণ বোঝাতে a piece of / an item of ধার করুন — a piece of advice, a piece of information।",
            en: "The five most frequent slips of C1-level Bengali speakers: (1) plurals on uncountables — informations, advices, furnitures, equipments, softwares; (2) the creeping before most — the most of people; (3) measuring countables with less — less people, less cars (frequent in IELTS Task 1); (4) the in the institution-purpose — go to the school said with a pupil's meaning; (5) the both — English never puts the before both (both candidates / both the candidates work, the both never).\n\nThe antidote is one: memorise the uncountable list — information, advice, furniture, equipment, software, research, evidence, feedback, progress, knowledge, luggage, homework; to count them, borrow a piece of / an item of — a piece of advice, a piece of information.",
            hi: "C1 स्तर के बांग्लाभाषियों की सबसे बार-बार आने वाली पाँच फिसलनें: (1) uncountable संज्ञाओं का बहुवचन — informations, advices, furnitures, equipments, softwares; (2) most से पहले the घुसना — the most of people; (3) countable को less से तोलना — less people, less cars (IELTS Task 1 में बार-बार); (4) संस्था-उद्देश्य में the घुसना — go to the school कहकर विद्यार्थी-अर्थ देना; (5) the both — अंग्रेज़ी में both से पहले the नहीं आता (both candidates / both the candidates चलते हैं, the both कभी नहीं)।\n\nइलाज एक ही: uncountable सूची रटें — information, advice, furniture, equipment, software, research, evidence, feedback, progress, knowledge, luggage, homework; गिनने के लिए a piece of / an item of उधार लें — a piece of advice, a piece of information।",
          },
          examples: [
            {
              wrong: "Thank you for the informations you sent.",
              right: "Thank you for the information you sent.",
              note: {
                bn: "information uncountable — plural -s নেই; একক বোঝাতে a piece of information।",
                en: "'Information' is uncountable — no plural -s; for one item, a piece of information.",
                hi: "'information' uncountable है — बहुवचन -s नहीं; एक टुकड़ा कहने हेतु a piece of information।",
              },
            },
            {
              wrong: "The most of people prefer tea.",
              right: "Most people prefer tea.",
              note: {
                bn: "most + বিশেষ্য zero; the most শুধু superlative-এ — the most popular drink; নির্দিষ্ট দলে most of the people।",
                en: "most + noun takes zero; the most is only for superlatives — the most popular drink; for a specific group, most of the people.",
                hi: "most + संज्ञा पर zero; the most केवल superlative में — the most popular drink; विशिष्ट समूह के लिए most of the people।",
              },
            },
            {
              wrong: "The both candidates were strong.",
              right: "Both candidates were strong.",
              note: {
                bn: "the both ইংরেজিতে নেই; both candidates বা both the candidates — দুই বিন্যাসই, the both নয়।",
                en: "'The both' does not exist in English; both candidates or both the candidates — either order, never the both.",
                hi: "'the both' अंग्रेज़ी में नहीं है; both candidates या both the candidates — दोनों क्रम चलते हैं, the both कभी नहीं।",
              },
            },
            {
              wrong: "He gave me an advice about the exam.",
              right: "He gave me some advice about the exam.",
              note: {
                bn: "advice uncountable — an নয়, plural -s নয়; একক বোঝাতে a piece of advice।",
                en: "'Advice' is uncountable — no an, no plural -s; for one item, a piece of advice.",
                hi: "'advice' uncountable है — an नहीं, बहुवचन -s नहीं; एक सलाह कहने हेतु a piece of advice।",
              },
            },
            {
              wrong: "The unemployment is a big problem in the Bangladesh.",
              right: "Unemployment is a big problem in Bangladesh.",
              note: {
                bn: "unemployment সাধারণ ভাবে zero; দেশের নামেও zero — তবে ব্যতিক্রম: the USA, the Netherlands, the UK।",
                en: "'Unemployment' as a general idea takes zero; country names too take zero — exceptions: the USA, the Netherlands, the UK.",
                hi: "'unemployment' सामान्य भाव में zero; देशों के नामों पर भी zero — अपवाद: the USA, the Netherlands, the UK।",
              },
            },
          ],
        },
        {
          heading: {
            bn: "ছোট লেখায় দেখা যাক",
            en: "Seen in a short piece of writing",
            hi: "छोटे लेखन में देखिए",
          },
          body: {
            bn: "নিচের অনুচ্ছেদটা একটা প্রতিবেদনের ভঙ্গিতে — এই পাঠের সব নিয়ম একসঙ্গে কাজ করছে: 'Unemployment is a serious problem in Bangladesh. A recent survey found that the number of unemployed graduates has doubled in a decade, and few of them receive any career advice. A little training, however, can change everything: graduates who spend a few months in technical programmes find work faster. Most experts agree that education, not luck, is the key to success.' প্রতিটা বিশেষ্যের সামনে থামুন — কেন a, কেন the, কেন zero?\n\nএক নজরে: (১) singular countable বিশেষ্য কখনো খালি নয় — determiner লাগবেই; (২) দ্বিতীয় উল্লেখ, পরিচিত প্রেক্ষাপট, অনন্য বস্তু → the; (৩) সাধারণ ভাব ও প্রতিষ্ঠান-উদ্দেশ্য → zero; (৪) few/little = প্রায় নেই, a few/a little = কিছু আছে; (৫) a number of + plural ক্রিয়া, the number of + singular ক্রিয়া; (৬) fewer + countable, less + uncountable; (৭) the whole day / all day; the same, the internet, the rich (শ্রেণি)।",
            en: "Read this paragraph in report style — every rule of the lesson is at work: 'Unemployment is a serious problem in Bangladesh. A recent survey found that the number of unemployed graduates has doubled in a decade, and few of them receive any career advice. A little training, however, can change everything: graduates who spend a few months in technical programmes find work faster. Most experts agree that education, not luck, is the key to success.' Pause before every noun — why a, why the, why zero?\n\nAt a glance: (1) a singular countable noun never stands bare — it takes a determiner; (2) second mention, familiar context, unique object → the; (3) general idea and institution-purpose → zero; (4) few/little = hardly any, a few/a little = some; (5) a number of + plural verb, the number of + singular verb; (6) fewer + countable, less + uncountable; (7) the whole day / all day; the same, the internet, the rich (the class).",
            hi: "इस अनुच्छेद को रिपोर्ट-शैली में पढ़ें — पाठ के सारे नियम एक साथ काम कर रहे हैं: 'Unemployment is a serious problem in Bangladesh. A recent survey found that the number of unemployed graduates has doubled in a decade, and few of them receive any career advice. A little training, however, can change everything: graduates who spend a few months in technical programmes find work faster. Most experts agree that education, not luck, is the key to success.' हर संज्ञा से पहले रुकें — क्यों a, क्यों the, क्यों zero?\n\nएक नज़र में: (1) singular countable संज्ञा कभी नंगी नहीं — determiner लाज़मी; (2) दूसरा उल्लेख, परिचित संदर्भ, अद्वितीय वस्तु → the; (3) सामान्य भाव और संस्था-उद्देश्य → zero; (4) few/little = लगभग नहीं, a few/a little = कुछ है; (5) a number of + plural क्रिया, the number of + singular क्रिया; (6) fewer + countable, less + uncountable; (7) the whole day / all day; the same, the internet, the rich (श्रेणी)।",
          },
          examples: [
            {
              wrong: "The unemployment is a serious problem.",
              right: "Unemployment is a serious problem.",
              note: {
                bn: "unemployment সাধারণ ভাবে zero; প্রবন্ধ-রিপোর্টে বারবার ফিরে আসা ভুল।",
                en: "'Unemployment' as a general idea takes zero — a recurring error in essays and reports.",
                hi: "'unemployment' सामान्य भाव में zero लेता है — निबंध-रिपोर्ट में बार-बार लौटने वाली गलती।",
              },
            },
            {
              wrong: "The number of unemployed graduates have doubled.",
              right: "The number of unemployed graduates has doubled.",
              note: {
                bn: "subject হলো the number (সংখ্যাটা), graduates নয় — তাই has; Task 1-এর মূল বাক্য-ছাঁচ।",
                en: "The subject is the number (the figure), not graduates — hence has; the core sentence mould of Task 1.",
                hi: "subject है the number (संख्या), graduates नहीं — इसलिए has; Task 1 का मूल वाक्य-साँचा।",
              },
            },
            {
              wrong: "A few of them receive any career advice, so the situation is hopeful.",
              right: "Few of them receive any career advice, so the situation is worrying.",
              note: {
                bn: "'worrying' অর্থে নেতিবাচক few — প্রায় কেউই পরামর্শ পায় না; a few হলে মেজাজ উল্টে যায়।",
                en: "The 'worrying' mood needs negative few — hardly any get advice; a few would flip the mood.",
                hi: "'worrying' भाव को निषेधात्मक few चाहिए — लगभग किसी को सलाह नहीं मिलती; a few होता तो भाव पलट जाता।",
              },
            },
            {
              wrong: "Little training can change everything — just a little hours a week.",
              right: "A little training can change everything — just a few hours a week.",
              note: {
                bn: "training uncountable → a little; hours countable → a few — এক বাক্যে দুই দলের সূক্ষ্ম বাছাই।",
                en: "'Training' is uncountable → a little; 'hours' is countable → a few — both groups picked finely inside one sentence.",
                hi: "'training' uncountable है → a little; 'hours' countable है → a few — एक ही वाक्य में दोनों समूहों की बारीक छँटाई।",
              },
            },
            {
              wrong: "Most of experts agree that education is a key to the success.",
              right: "Most experts agree that education is the key to success.",
              note: {
                bn: "most + বিশেষ্য zero; স্থায়ী বাক্যে the key to success — অনন্য উপায়ের the।",
                en: "most + noun takes zero; the fixed phrase is the key to success — the of a unique means.",
                hi: "most + संज्ञा पर zero; पक्का मुहावरा है the key to success — अद्वितीय साधन का the।",
              },
            },
          ],
        },
      ],
      tips: [
        {
          bn: "তিন-প্রশ্ন টেস্ট: singular countable? শ্রোতা জানে কোনটা? সাধারণ ভাব? — উত্তরই a/the/zero ঠিক করে।",
          en: "The three-question test: singular countable? Does the listener know which one? A general idea? — the answers decide a/the/zero.",
          hi: "तीन-प्रश्न टेस्ट: singular countable? श्रोता जानता है कौन-सा? सामान्य भाव? — जवाब ही a/the/zero तय करता है।",
        },
        {
          bn: "প্রথমবার a/an, দ্বিতীয়বার the — গল্প-বলা আর রিপোর্ট, দুই জায়গাতেই এটাই মূল স্রোত।",
          en: "First mention a/an, second mention the — in storytelling and reports alike, this is the main current.",
          hi: "पहली बार a/an, दूसरी बार the — कहानी और रिपोर्ट दोनों में यही मुख्य धारा है।",
        },
        {
          bn: "an উচ্চারণের নিয়ম, বানানের নয়: an hour, an MBA, কিন্তু a university, a European, a one-day match।",
          en: "'An' follows sound, not spelling: an hour, an MBA, but a university, a European, a one-day match.",
          hi: "'an' उच्चारण का नियम है, वर्तनी का नहीं: an hour, an MBA, पर a university, a European, a one-day match।",
        },
        {
          bn: "প্রতিষ্ঠান-উদ্দেশ্যের তালিকা মুখস্থ: go to school/church/prison/hospital/college/bed — মূল কাজে গেলে zero, ভবন বোঝালে the।",
          en: "Memorise the institution-purpose list: go to school/church/prison/hospital/college/bed — core-function visits take zero, buildings take the.",
          hi: "संस्था-उद्देश्य की सूची रटें: go to school/church/prison/hospital/college/bed — मूल काम की यात्रा पर zero, इमारत पर the।",
        },
        {
          bn: "the-এর প্যাকেজ: the sun, the internet, the same, the only, the first, the best, the rich (শ্রেণি) — একসঙ্গে বাক্য-সারি হিসেবে মুখস্থ করুন।",
          en: "The 'the' package: the sun, the internet, the same, the only, the first, the best, the rich (the class) — memorise them together as a sentence list.",
          hi: "'the' का पैकेज: the sun, the internet, the same, the only, the first, the best, the rich (श्रेणी) — इन्हें वाक्य-सूची रूप में साथ रटें।",
        },
        {
          bn: "few/little = প্রায় নেই (হতাশা), a few/a little = কিছু আছে (তৃপ্তি) — 'a'-কে মেজাজ-সুইচ হিসেবে পড়ুন।",
          en: "few/little = hardly any (despair), a few/a little = some (contentment) — read 'a' as the mood switch.",
          hi: "few/little = लगभग नहीं (निराशा), a few/a little = कुछ है (संतोष) — 'a' को भाव-स्विच की तरह पढ़ें।",
        },
        {
          bn: "a number of + plural ক্রিয়া (বহু মানুষ), the number of + singular ক্রিয়া (সংখ্যাটা) — a/the-ই ক্রিয়া বদলে দেয়।",
          en: "a number of + plural verb (many people), the number of + singular verb (the figure) — the little a/the flips the verb.",
          hi: "a number of + plural क्रिया (बहुत लोग), the number of + singular क्रिया (संख्या) — छोटा a/the क्रिया पलट देता है।",
        },
        {
          bn: "fewer + countable (fewer cars), less + uncountable (less traffic); টাকা-দূরত্ব-সময় একক পরিমাণ হিসেবে less — less than ten dollars।",
          en: "fewer + countable (fewer cars), less + uncountable (less traffic); money, distance and time as single amounts take less — less than ten dollars.",
          hi: "fewer + countable (fewer cars), less + uncountable (less traffic); पैसा-दूरी-समय एक सामूहिक मात्रा के रूप में less लेते हैं — less than ten dollars।",
        },
        {
          bn: "much/many মূলত প্রশ্ন-অস্বীকারে আর so/too/how-এর সঙ্গে; বিবৃতিতে a lot of, আনুষ্ঠানিক লেখায় a great deal of / numerous।",
          en: "much/many belong to questions, negatives and so/too/how; statements prefer a lot of, formal writing a great deal of / numerous.",
          hi: "much/many मुख्यतः प्रश्न-निषेध और so/too/how के साथ; कथनों में a lot of, औपचारिक लेखन में a great deal of / numerous।",
        },
        {
          bn: "IELTS-এ less cars, informations, advices, the most of people — এই চারটা বন্ধুত্ব ভাঙে; বানান-শুদ্ধির পাশাপাশি পরিমাণ-শব্দও পরীক্ষা হয়।",
          en: "In IELTS, less cars, informations, advices, the most of people — these four cost you friendship; along with spelling, quantifiers are examined too.",
          hi: "IELTS में less cars, informations, advices, the most of people — ये चार दोस्ती तोड़ते हैं; वर्तनी के साथ क्वांटिफ़ायर भी परखे जाते हैं।",
        },
      ],
      quiz: [
        {
          question: "I saw ______ elephant at the zoo, and ______ elephant was eating bamboo.",
          options: ["a / The", "the / A", "an / An", "a / A"],
          answer: 0,
          explanation: {
            bn: "প্রথম উল্লেখ an (স্বরধ্বনি-শব্দ), দ্বিতীয় উল্লেখ the — পাঠক এখন জানে কোন হাতি।",
            en: "First mention an (vowel sound), second mention the — the reader now knows which elephant.",
            hi: "पहला उल्लेख an (स्वर-ध्वनि), दूसरा the — पाठक अब जानता है कौन-सा हाथी।",
          },
        },
        {
          question: "My son is in class five, so he goes to ______ every morning.",
          options: ["the school", "school", "a school", "schools"],
          answer: 1,
          explanation: {
            bn: "ছাত্র হয়ে পড়তে যাওয়া — প্রতিষ্ঠান-উদ্দেশ্যে zero: go to school।",
            en: "Going as a pupil to study — institution-purpose takes zero: go to school.",
            hi: "विद्यार्थी बनकर पढ़ने जाना — संस्था-उद्देश्य पर zero: go to school।",
          },
        },
        {
          question: "______ sun rises in ______ east.",
          options: ["The / the", "A / an", "The / a", "A / the"],
          answer: 0,
          explanation: {
            bn: "অনন্য বস্তু the sun; দিকের সামনে the — the east।",
            en: "Unique object takes the — the sun; directions take the — the east.",
            hi: "अद्वितीय वस्तु पर the — the sun; दिशाओं पर the — the east।",
          },
        },
        {
          question: "Hurry! We have ______ time — the bus leaves in one minute.",
          options: ["a little", "little", "a few", "few"],
          answer: 1,
          explanation: {
            bn: "time uncountable → little-পরিবার; এক মিনিট মানে প্রায় নেই — নেতিবাচক little (a ছাড়া)।",
            en: "'Time' is uncountable → the little family; one minute means hardly any — negative little (without a).",
            hi: "'time' uncountable है → little-परिवार; एक मिनट यानी लगभग कुछ नहीं — निषेधात्मक little (a के बिना)।",
          },
        },
        {
          question: "The number of applicants ______ rising every year.",
          options: ["are", "is", "have", "were"],
          answer: 1,
          explanation: {
            bn: "the number of = সংখ্যাটা — subject একক, তাই singular: is।",
            en: "'The number of' = the figure — a single subject, hence the singular: is.",
            hi: "'the number of' = संख्या — subject एकल है, इसलिए singular: is।",
          },
        },
        {
          question: "There are ______ cars on the road during the strike, so travel is easy.",
          options: ["less", "fewer", "little", "much"],
          answer: 1,
          explanation: {
            bn: "cars countable plural → fewer; less শুধু uncountable-এ (less traffic)।",
            en: "'Cars' is countable plural → fewer; less is only for uncountables (less traffic).",
            hi: "'cars' countable plural हैं → fewer; less केवल uncountable पर (less traffic)।",
          },
        },
        {
          question: "Which sentence is correct?",
          options: ["She gave me an advice.", "She gave me a few advices.", "She gave me some advice.", "She gave me many advices."],
          answer: 2,
          explanation: {
            bn: "advice uncountable — an নয়, plural -s নয়; পরিমাণ বোঝাতে some advice / a piece of advice।",
            en: "'Advice' is uncountable — no an, no plural -s; quantity is shown by some advice / a piece of advice.",
            hi: "'advice' uncountable है — an नहीं, बहुवचन -s नहीं; मात्रा के लिए some advice / a piece of advice।",
          },
        },
        {
          question: "After the robbery, he was sent to ______ for five years.",
          options: ["the prison", "a prison", "prison", "prisons"],
          answer: 2,
          explanation: {
            bn: "শাস্তি ভোগ করতে পাঠানো — বন্দি-উদ্দেশ্যে zero: sent to prison।",
            en: "Sent to serve a sentence — prisoner-purpose takes zero: sent to prison.",
            hi: "सज़ा काटने भेजा गया — बंदी-उद्देश्य पर zero: sent to prison।",
          },
        },
        {
          question: "I worked ______ without a break.",
          options: ["all day", "the whole day", "Both 'all day' and 'the whole day'", "whole the day"],
          answer: 2,
          explanation: {
            bn: "দুটোই সঠিক — all day (all-সারি) আর the whole day (whole-এর আগে the); whole the day ব্যবস্থাটাই ভুল।",
            en: "Both are correct — all day (the all-row) and the whole day (the before whole); 'whole the day' is the broken arrangement.",
            hi: "दोनों सही — all day (all-पंक्ति) और the whole day (whole से पहले the); 'whole the day' क्रम ही टूटा है।",
          },
        },
        {
          question: "We watched ______ last night and listened to ______ on the way home.",
          options: ["the television / the radio", "television / the radio", "the television / radio", "television / radio"],
          answer: 1,
          explanation: {
            bn: "মাধ্যম হিসেবে television zero (watch television), কিন্তু radio-তে the — listen to the radio।",
            en: "As a medium, television takes zero (watch television), but radio takes the — listen to the radio.",
            hi: "माध्यम के रूप में television पर zero (watch television), पर radio पर the — listen to the radio।",
          },
        },
      ],
    },
  },
];
