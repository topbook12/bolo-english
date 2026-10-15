// ─── Learning-path listening seeds: ADVANCED serial "The Green Startup" ───
// Part of Task 9 (library enrichment). 5 episodes = 5 path units.
// One continuous C1 story: Dr. Farhana Akter (34, environmental engineer from
// Sylhet) builds GreenFlow — a startup that turns water-hyacinth into cheap
// water filters. Recurring cast: co-founder Imran, city-council officer
// Mr. Chowdhury, investor Ms. (Nusrat) Zaman. Each episode recycles its unit's
// vocabulary (woven into the paragraphs) and ends on a hook.
import type {
  LibraryListeningData,
  LibraryLevel,
  LibraryListeningCategory,
} from "../../src/lib/library-types";

export interface SeedListeningV2Entry {
  slug: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: number;
  unit: number; // episode number = path unit (1-5)
  data: LibraryListeningData;
}

export const SEED_LISTENING_V2_ADVANCED: SeedListeningV2Entry[] = [
  /* ── Unit 1 · ideas & argument (advocate, rationale, concede, refute, justify, perspective) ── */
  {
    slug: "green-startup-ep1",
    level: "advanced",
    category: "work",
    minutes: 4,
    unit: 1,
    data: {
      title: {
        bn: "দ্য গ্রিন স্টার্টআপ — পর্ব ১: পিচ",
        en: "The Green Startup — Episode 1: The Pitch",
        hi: "द ग्रीन स्टार्टअप — एपिसोड 1: पिच",
      },
      summary: {
        bn: "সিলেটের পরিবেশ প্রকৌশলী ড. ফারহানা আক্তার তার স্টার্টআপ গ্রিনফ্লো-র প্রথম পিচ দেয় — জলকচুরি দিয়ে সস্তা পানি-ফিল্টার বানানোর পরিকল্পনা। বিনিয়োগকারীদের কঠিন প্রশ্নের মুখে সে নিজের দুর্বল জায়গাগুলো স্বীকার করে নেয়, খরচের আপত্তি প্রমাণ দিয়ে খণ্ডন করে, কিন্তু কোনো প্রতিশ্রুতি ছাড়াই ফিরে আসে — শুধু একটা চ্যালেঞ্জ আর একটা চিঠি পকেটে।",
        en: "Dr. Farhana Akter, an environmental engineer from Sylhet, pitches GreenFlow — her plan to turn water hyacinth into cheap water filters — to a small investor panel. She concedes her weak points, refutes the cost objection, and leaves without a promise but with a perspective: prove it in a real community first.",
        hi: "सिलहट की पर्यावरण अभियंता डॉ. फ़रहाना अक्तर अपने स्टार्टअप ग्रीनफ़्लो का पहला पिच देती हैं — जलकुंभी से सस्ते पानी के फ़िल्टर बनाने की योजना। कठिन सवालों के सामने वे अपनी कमज़ोरियाँ खुलकर मानती हैं, लागत के एतराज़ को तर्क से खारिज करती हैं, और कोई वादा नहीं, एक नज़रिया लेकर लौटती हैं।",
      },
      paragraphs: [
        "The conference room on the twelfth floor smelled of instant coffee and printer toner. Dr. Farhana Akter, thirty-four, an environmental engineer from Sylhet, set down a jar of cloudy pond water beside her laptop. Three investors studied her the way people study weather — politely, without commitment. She had rehearsed this pitch forty times, yet her rationale felt fragile here, where every assumption would be weighed, questioned, and priced within ninety minutes.",
        "Her proposal was disarmingly simple. Bangladesh drowns in water hyacinth; the weed chokes rivers, kills fish, and blocks boats. GreenFlow, her startup, harvested the plant and compressed its dried fibre into ceramic filters that removed bacteria for a fraction of the market price. “I advocate a business that treats this weed as raw material, not nuisance,” she said. “Our rationale is that the solution literally grows in our rivers, costs almost nothing, and every household already knows the problem.”",
        "The lead investor, Ms. Zaman, folded her hands. “Assumptions are cheap, Doctor. Where is your evidence?” Farhana didn't flinch. She conceded the weak points first: the prototype had survived only three hundred filtration cycles, and her production data came from a single workshop. “I concede we lack scale,” she admitted, “but I would rather name my gaps than hide them. Investors who fund what they pretend is perfect end up funding a story, not a company.”",
        "Then came the objection she had been waiting for. “Filter candles already exist in the market. Why fund another?” Farhana refuted it point by point: imported filters needed replacement cartridges priced beyond village budgets, whereas hers could be repaired with river weed and sunlight. “You cannot justify a price tag that a day-labourer pays off in a week,” she said. “Cost is not a detail. For a family earning six dollars a day, cost is the entire argument.”",
        "Imran, her co-founder, added the numbers she had asked him to hold back — lab results from Sylhet's wetland cooperative, letters from two school headmasters. Ms. Zaman listened, tapping her pen, then offered a different perspective: “I don't doubt the science. I doubt whether a scientist can also be a merchant.” It stung, but Farhana recognised it as a fair question, the kind that deserved months of proof rather than an angry reply.",
        "There was no cheque and no promise — only a business card, a handshake, and one sentence that followed Farhana into the lift: “Show me a pilot in a real community, and we will talk again.” On the rooftop, Imran asked if she felt defeated. Farhana shook her head, smiling slightly. “We came asking for money and left with a map,” she said. Then her phone buzzed: an official email from the city council, subject line — “Unauthorised harvesting activity, river Surma.”",
      ],
      vocabulary: [
        {
          word: "advocate",
          meaning: {
            bn: "সমর্থন করে পক্ষে কথা বলা — যেমন ক্লাসে কেউ বন্ধুর পক্ষে শিক্ষকের কাছে যুক্তি দেখায়",
            en: "to publicly support or argue for an idea or plan",
            hi: "किसी विचार के पक्ष में खुलकर बोलना या समर्थन करना",
          },
          example: "She advocates treating the weed as raw material, not nuisance.",
        },
        {
          word: "rationale",
          meaning: {
            bn: "কোনো সিদ্ধান্তের পেছনের যুক্তি — 'কেন এই কাজ' প্রশ্নের উত্তর; যেমন রাঁধুনি ব্যাখ্যা করেন কেন এই মসলা আগে দেওয়া হলো",
            en: "the set of reasons behind a decision or plan",
            hi: "किसी निर्णय या योजना के पीछे का तर्क या कारण",
          },
          example: "Her rationale is simple: the solution literally grows in our rivers.",
        },
        {
          word: "concede",
          meaning: {
            bn: "স্বীকার করে নেওয়া — 'হ্যাঁ, এটা ঠিক' বলা; যেমন দাবায় হেরে গিয়ে বলা, 'তোমার চালটা ভালো ছিল'",
            en: "to admit that something is true, often before others say it",
            hi: "(अनिच्छा से भी) सच मान लेना, स्वीकार करना",
          },
          example: "She concedes the weak points before anyone else can point at them.",
        },
        {
          word: "refute",
          meaning: {
            bn: "প্রমাণ দিয়ে খণ্ডন করা — শুধু 'না' না বলে যুক্তি দিয়ে ভুল প্রমাণ করা",
            en: "to prove a statement or argument wrong with reasons or evidence",
            hi: "तर्क या सबूत से किसी दावे को ग़लत साबित करना",
          },
          example: "She refutes the cost objection point by point, using village budgets as evidence.",
        },
        {
          word: "justify",
          meaning: {
            bn: "কারণ দেখিয়ে সঙ্গত করা — কোনো দাম বা কাজকে বোঝানো যে সে ঠিকই আছে",
            en: "to show that something is right, reasonable, or worth it",
            hi: "किसी काम या क़ीमत को उचित ठहराना, वज़ह दिखाना",
          },
          example: "You cannot justify a price tag that takes a day-labourer a week to pay.",
        },
        {
          word: "perspective",
          meaning: {
            bn: "দেখার কোণ — এক পাহাড়কে সামনে থেকে আর ওপর থেকে দেখলে আলাদা লাগে, সেই আলাদা চোখ",
            en: "a particular way of thinking about or seeing something",
            hi: "किसी चीज़ को देखने या सोचने का नज़रिया",
          },
          example: "Ms. Zaman offers a different perspective: can a scientist also be a merchant?",
        },
      ],
      quiz: [
        {
          question: {
            bn: "গ্রিনফ্লো কী থেকে পানি-ফিল্টার বানায়?",
            en: "What raw material does GreenFlow turn into water filters?",
            hi: "ग्रीनफ़्लो किस चीज़ से पानी के फ़िल्टर बनाता है?",
          },
          options: [
            { bn: "প্লাস্টিকের বোতল", en: "Plastic bottles", hi: "प्लास्टिक की बोतलें" },
            { bn: "জলকচুরি", en: "Water hyacinth", hi: "जलकुंभी" },
            { bn: "আমদানি করা মাটি", en: "Imported clay", hi: "आयातित मिट्टी" },
            { bn: "বাঁশ", en: "Bamboo", hi: "बाँस" },
          ],
          answer: 1,
          explain: {
            bn: "পর্বের শুরুতেই বলা হয়: জলকচুরির শুকনো আঁশ চেপে সিরামিক ফিল্টার বানানো হয়, যা ব্যাকটেরিয়া সরায়।",
            en: "The story says GreenFlow compresses dried water-hyacinth fibre into ceramic filters that remove bacteria.",
            hi: "कहानी में कहा गया है कि ग्रीनफ़्लो जलकुंभी के सूखे रेशे से सिरेमिक फ़िल्टर बनाता है।",
          },
        },
        {
          question: {
            bn: "নিজের ডেটার দুর্বল জায়গাগুলো নিয়ে ফারহানা কী করেন?",
            en: "How does Farhana handle the weak points in her own data?",
            hi: "अपने डेटा की कमज़ोरियों के साथ फ़रहाना क्या करती हैं?",
          },
          options: [
            { bn: "লুকিয়ে রাখেন", en: "She hides them", hi: "उन्हें छिपा देती हैं" },
            { bn: "ল্যাবকে দোষ দেন", en: "She blames her lab", hi: "लैब को दोष देती हैं" },
            { bn: "খোলাখুলি স্বীকার করেন", en: "She concedes them openly", hi: "खुलकर स्वीकार करती हैं" },
            { bn: "টপিক বদলে দেন", en: "She changes the topic", hi: "विषय बदल देती हैं" },
          ],
          answer: 2,
          explain: {
            bn: "ফারহানা নিজেই বলে — 'আমি স্বীকার করি, আমাদের স্কেল নেই' — দুর্বলতা ঢাকার বদলে প্রকাশ করে।",
            en: "Farhana concedes the gaps first: three hundred cycles, one workshop — she names them rather than hiding them.",
            hi: "फ़रहाना अपनी कमज़ोरियाँ छिपाने के बजाय खुद मान लेती हैं।",
          },
        },
        {
          question: {
            bn: "'খরচই আসল যুক্তি' — ফারহানা কেন এমন বলেন?",
            en: "Why does Farhana say 'cost is the entire argument'?",
            hi: "फ़रहाना 'लागत ही असली मुद्दा है' क्यों कहती हैं?",
          },
          options: [
            { bn: "আমদানি করা ফিল্টার বেশি ভারী", en: "Imported filters are too heavy", hi: "आयातित फ़िल्टर बहुत भारी हैं" },
            { bn: "গ্রামের পরিবার রিপ্লেসমেন্ট কার্ট্রিজ বহন করতে পারে না", en: "Villages cannot afford replacement cartridges", hi: "गाँव रिप्लेसमेंट कार्ट्रिज नहीं ख़रीद सकते" },
            { bn: "বিনিয়োগকারীরা কর দিতে চান না", en: "Investors refuse to pay tax", hi: "निवेशक कर देने से मना करते हैं" },
            { bn: "মাটির ফিল্টার খুব সহজে ভাঙে", en: "Clay breaks too easily", hi: "मिट्टी के फ़िल्टर जल्दी टूटते हैं" },
          ],
          answer: 1,
          explain: {
            bn: "তার যুক্তি: আমদানি করা ফিল্টারের কার্ট্রিজের দাম গ্রামের বাজেটের বাইরে — দিনমজুরের জন্য দামই মূল প্রশ্ন।",
            en: "Imported filters need replacement cartridges priced beyond village budgets — cost, she argues, is the whole point.",
            hi: "आयातित फ़िल्टर के कार्ट्रिज महँगे हैं; वे कहती हैं कि लागत ही असली मुद्दा है।",
          },
        },
        {
          question: {
            bn: "পর্ব ১ কীভাবে শেষ হয়?",
            en: "How does Episode 1 end?",
            hi: "एपिसोड 1 कैसे समाप्त होता है?",
          },
          options: [
            { bn: "ফারহানা বিনিয়োগ পান", en: "She receives the investment", hi: "उन्हें निवेश मिल जाता है" },
            { bn: "শহরের সাথে চুক্তি সই হয়", en: "She signs a contract with the city", hi: "शहर से ठेका हो जाता है" },
            { bn: "প্রতিশ্রুতি নেই — শুধু একটা চ্যালেঞ্জ আর সিটি কাউন্সিলের সতর্ক-ইমেইল", en: "No promise — only a challenge and a warning email from the city council", hi: "कोई वादा नहीं — सिर्फ़ चुनौती और सिटी काउंसिल का चेतावनी ईमेल" },
            { bn: "মিসেস জামান কোম্পানি কিনে নেন", en: "Ms. Zaman buys the company", hi: "मिसेज़ ज़ामान कंपनी ख़रीद लेती हैं" },
          ],
          answer: 2,
          explain: {
            bn: "কোনো চেক নেই; শুধু চ্যালেঞ্জ — 'আসল কমিউনিটিতে পাইলট দেখাও' — আর সিটি কাউন্সিলের ইমেইল, যা পর্ব ২-এর দরজা খোলে।",
            en: "There is no cheque: only the challenge to show a real pilot — and the city-council email that opens Episode 2.",
            hi: "कोई चेक नहीं; सिर्फ़ चुनौती और सिटी काउंसिल का ईमेल — जो एपिसोड 2 का दरवाज़ा खोलता है।",
          },
        },
      ],
    },
  },

  /* ── Unit 2 · society & policy (bureaucracy, grassroots, sustainability, infrastructure, reform, welfare) ── */
  {
    slug: "green-startup-ep2",
    level: "advanced",
    category: "culture",
    minutes: 4,
    unit: 2,
    data: {
      title: {
        bn: "দ্য গ্রিন স্টার্টআপ — পর্ব ২: সিটি কাউন্সিল",
        en: "The Green Startup — Episode 2: The City Council",
        hi: "द ग्रीन स्टार्टअप — एपिसोड 2: सिटी काउंसिल",
      },
      summary: {
        bn: "শহর কর্তৃপক্ষের নিয়মের জটিল জাল গ্রিনফ্লোকে প্রায় বন্ধ করে দেয় — 'কুঁড়ে তোলার পারমিট' বলে কিছু নেই। কিন্তু রোকেয়ার নেতৃত্বে গ্রামের মহিলাদের জন-সমর্থন — ছাঁকা পানির জার আর তিনশ সই — টেকসই উন্নয়ন, অবকাঠামো আর কল্যাণ নিয়ে বিতর্ক ঘুরিয়ে দেয়। সংস্কারমনস্ক কাউন্সিলর সালমা বেগমের প্রস্তাবে শহরের ইতিহাসে প্রথম জলকচুরি-সংগ্রহের লাইসেন্স হয়, আর রাতেই মিসেস জামানের মেসেজ আসে।",
        en: "Bureaucracy nearly kills the pilot: no permit exists for harvesting a weed. Then grassroots support — village women with jars of filtered water and three hundred signatures — changes the debate about sustainability, infrastructure, and welfare. A reform-minded councillor proposes the city's first harvesting licence, and that evening Ms. Zaman calls about a term sheet.",
        hi: "नौकरशाही लगभग पायलट प्रोजेक्ट बंद कर देती है: किसी खरपतवार की कटाई का कोई परमिट ही नहीं है। फिर गाँव की महिलाओं का जन-आधार समर्थन — छाने हुए पानी के जार और तीन सौ हस्ताक्षर — स्थिरता, ढाँचे और कल्याण पर बहस बदल देता है। सुधरवादी काउंसिलर सलमा बेगम के प्रस्ताव से शहर का पहला कटाई लाइसेंस बनता है, और उसी शाम मिसेज़ ज़ामान टर्म शीट की बात करती हैं।",
      },
      paragraphs: [
        "Mr. Chowdhury's office at the city corporation had three filing cabinets, one ceiling fan, and a sentence for every occasion. “No permit, no harvesting,” he repeated, sliding the complaint across the desk. Farhana explained that no such permit existed because nobody had ever asked to harvest a weed. “Precisely,” he said, almost pleased. The bureaucracy, she realised, was not hostile — it was simply built for a century when rivers were somebody's property and weeds were nobody's business.",
        "The formal notice gave GreenFlow seven days to stop operations. Imran read it twice and called it the end. Farhana saw something else: the notice, for the first time, described their work in writing — “filtration units, river harvesting, community distribution” — which meant the city now had to decide what it actually thought about the idea. Rules, she told him, are like doors: heavy, slow, but they do open, usually from the inside.",
        "What changed the debate was not a lawyer but grassroots power. Forty village women, led by a schoolteacher named Rokeya, arrived at the corporation with jars of filtered water and a petition signed by three hundred households. “Our children drank this water all summer,” Rokeya said, placing a jar on Mr. Chowdhury's desk. “You can ban the company if you wish, but first tell us which rule says our children must drink from the river again.”",
        "At the hearing, the arguments turned from paperwork to principle. Was water infrastructure only pipes and pumps, or did a two-dollar clay filter count? Could public welfare depend on a private startup without the city losing control? Farhana kept her answers short and her numbers honest. Sustainability, she argued, was not a festival banner but arithmetic: the filter paid for itself in four months, and the weed it used regrew faster than any tree they could plant.",
        "Then a councillor named Salma Begum, who had sat silently through an hour of jargon, leaned into her microphone. “We keep reforming committees and never rules,” she said. “Here is a reform that costs the city nothing: create a one-page harvesting licence, and let the welfare officer verify filter quality monthly. If it fails, close them. If it works, learn from it.” Mr. Chowdhury, to everyone's surprise, did not object; he merely asked for a week to draft the wording.",
        "The licence arrived on Friday, stamped, with a line Mr. Chowdhury had clearly written himself: “The licensee shall leave enough hyacinth for the fishing boats.” It was the first harvesting licence in the corporation's history, and Farhana kept the original in a frame above the workshop door. That evening, an unknown number texted her: “I heard what happened at the council. My name is Nusrat Zaman. Let's talk about a term sheet.”",
      ],
      vocabulary: [
        {
          word: "bureaucracy",
          meaning: {
            bn: "নিয়ম-ফর্ম-সিলের জটিল সরকারি ব্যবস্থা — যেমন একটা কাগজের জন্য অফিসের পর অফিস ঘোরা",
            en: "a system of official rules and procedures that is often slow",
            hi: "सरकारी नियमों-प्रक्रियाओं की व्यवस्था, जो अक्सर धीमी और उलझी होती है",
          },
          example: "The bureaucracy was built for a century when weeds were nobody's business.",
        },
        {
          word: "grassroots",
          meaning: {
            bn: "মাটির ওপর নয়, শিকড় থেকে ওঠা সমর্থন — সাধারণ মানুষ নিজেরাই যখন দল বেঁধে দাবি তোলে",
            en: "ordinary people organising support from the bottom up",
            hi: "आम लोगों का नीचे से ऊपर उठा समर्थन या आंदोलन",
          },
          example: "Grassroots power changed the debate — forty village women with jars of filtered water.",
        },
        {
          word: "sustainability",
          meaning: {
            bn: "টেকসই হওয়া — এমন ব্যবস্থা যা বছরের পর বছর নিজের ভরে চলে; যেমন একবার বুনলে প্রতি বছর ফল দেয় এমন গাছ",
            en: "the ability of a system or business to keep going long-term without harming resources",
            hi: "लंबे समय तक टिकने की क्षमता, बिना संसाधनों को नुक़सान पहुँचाए",
          },
          example: "Sustainability, she argued, was arithmetic: the filter paid for itself in four months.",
        },
        {
          word: "infrastructure",
          meaning: {
            bn: "একটা সমাজের মেরুদণ্ড — রাস্তা, পাইপলাইন, বিদ্যুৎ; যেগুলো ছাড়া দিন চলে না",
            en: "the basic structures a society needs: roads, pipes, power, systems",
            hi: "समाज की आधारभूत संरचना — सड़कें, पाइपलाइन, बिजली जैसी मूल व्यवस्थाएँ",
          },
          example: "Is water infrastructure only pipes and pumps, or does a two-dollar clay filter count?",
        },
        {
          word: "reform",
          meaning: {
            bn: "সংস্কার — পুরনো নিয়ম ভেঙে ভালো নিয়ম আনা; যেমন পুকুরের ঘোলা পানি সরিয়ে নতুন পানি আনা",
            en: "a change that improves a law, system, or practice",
            hi: "किसी क़ानून या प्रथा में सुधार लाने वाला बदलाव",
          },
          example: "Her reform costs the city nothing: a one-page harvesting licence.",
        },
        {
          word: "welfare",
          meaning: {
            bn: "কল্যাণ — মানুষের ভালো থাকার ব্যবস্থা, বিশেষ করে যাদের নিজের ভরসা কম",
            en: "the health, comfort, and wellbeing of people, especially the vulnerable",
            hi: "लोगों का कल्याण — ख़ासकर ज़रूरतमंदों का भला",
          },
          example: "Could public welfare depend on a private startup without the city losing control?",
        },
      ],
      quiz: [
        {
          question: {
            bn: "গ্রিনফ্লোকে কেন সংগ্রহ বন্ধ করতে বলা হয়?",
            en: "Why was GreenFlow ordered to stop harvesting?",
            hi: "ग्रीनफ़्लो को कटाई रोकने का आदेश क्यों दिया गया?",
          },
          options: [
            { bn: "নদীর পানি দূষিত ছিল", en: "The river water was polluted", hi: "नदी का पानी प्रदूषित था" },
            { bn: "কুঁড়ে তোলার কোনো পারমিটই ছিল না", en: "No permit existed for harvesting a weed", hi: "कटाई का कोई परमिट मौजूद नहीं था" },
            { bn: "ফিল্টার টেস্টে ফেল করেছিল", en: "The filters failed testing", hi: "फ़िल्टर टेस्ट में फेल हो गए थे" },
            { bn: "বিনিয়োগকারীরা অভিযোগ করেছিলেন", en: "Investors had complained", hi: "निवेशकों ने शिकायत की थी" },
          ],
          answer: 1,
          explain: {
            bn: "মিস্টার চৌধুরীর নিয়ম সরল: 'কোনো পারমিট নেই, সংগ্রহ নেই' — কারণ আগে কেউ কুঁড়ে তোলার অনুমতি চায়নি।",
            en: "Mr. Chowdhury's rule is simple: no permit, no harvesting — because nobody had ever asked before.",
            hi: "मिस्टर चौधरी का नियम सरल है: परमिट नहीं, तो कटाई नहीं — क्योंकि पहले कभी किसी ने माँगा ही नहीं था।",
          },
        },
        {
          question: {
            bn: "কর্পোরেশনে বিতর্ক কে ঘুরিয়ে দেয়?",
            en: "Who changed the debate at the corporation?",
            hi: "कॉर्पोरेशन में बहस किसने बदली?",
          },
          options: [
            { bn: "একজন বিখ্যাত আইনজীবী", en: "A famous lawyer", hi: "एक प्रसिद्ध वकील" },
            { bn: "মিসেস জামান", en: "Ms. Zaman", hi: "मिसेज़ ज़ामान" },
            { bn: "রোকেয়ার নেতৃত্বে গ্রামের মহিলারা", en: "Village women led by Rokeya", hi: "रोकैया के नेतृत्व में गाँव की महिलाएँ" },
            { bn: "ইমরানের বানানো অ্যাপ", en: "Imran's app", hi: "इमरान का ऐप" },
          ],
          answer: 2,
          explain: {
            bn: "ফাইল-নয়া নয় — রোকেয়ার নেতৃত্বে চল্লিশজন গ্রামের মহিলা, ছাঁকা পানির জার আর তিনশ সই নিয়ে বিতর্ক ঘুরিয়ে দেয়।",
            en: "Not a lawyer but grassroots power: forty village women led by Rokeya, with jars and a petition.",
            hi: "वकील नहीं, जन-आधार शक्ति: रोकैया के नेतृत्व में जार और याचिका लेकर आईं गाँव की महिलाएँ।",
          },
        },
        {
          question: {
            bn: "কাউন্সিলর সালমা বেগম কী সংস্কারের প্রস্তাব দেন?",
            en: "What reform did Councillor Salma Begum propose?",
            hi: "काउंसिलर सलमा बेगम ने क्या सुधार प्रस्तावित किया?",
          },
          options: [
            { bn: "স্টার্টআপের ওপর কর", en: "A tax on startups", hi: "स्टार्टअप पर कर" },
            { bn: "এক পাতার সংগ্রহ-লাইসেন্স ও মাসিক মান পরীক্ষা", en: "A one-page harvesting licence with monthly quality checks", hi: "मासिक जाँच के साथ एक-पृष्ठ का कटाई लाइसेंस" },
            { bn: "কর্পোরেশন অফিস বন্ধ করা", en: "Closing the corporation office", hi: "कॉर्पोरेशन कार्यालय बंद करना" },
            { bn: "সব ফিল্টার নিষিদ্ধ করা", en: "Banning all filters", hi: "सभी फ़िल्टर पर प्रतिबंध" },
          ],
          answer: 1,
          explain: {
            bn: "সালমা বেগমের প্রস্তাব: এক পাতার লাইসেন্স, মাসিক মান পরীক্ষা; ব্যর্থ হলে বন্ধ, পার হলে শেখা।",
            en: "Her reform: a one-page harvesting licence and monthly quality checks — close them if it fails, learn if it works.",
            hi: "उनका सुधार: एक-पृष्ठ का लाइसेंस और मासिक गुणवत्ता जाँच — फेल हो तो बंद, पास हो तो सीखो।",
          },
        },
        {
          question: {
            bn: "লাইসেন্স পাওয়ার সেই সন্ধ্যায় কী ঘটে?",
            en: "What happened the same evening the licence arrived?",
            hi: "लाइसेंस मिलने की उसी शाम क्या हुआ?",
          },
          options: [
            { bn: "গ্রিনফ্লো ঢাকায় চলে যায়", en: "GreenFlow moved to Dhaka", hi: "ग्रीनफ़्लो ढाका चला गया" },
            { bn: "মিস্টার চৌধুরী পদত্যাগ করেন", en: "Mr. Chowdhury resigned", hi: "मिस्टर चौधरी ने इस्तीफ़ा दे दिया" },
            { bn: "মিসেস জামান টার্ম শিট নিয়ে মেসেজ দেন", en: "Ms. Zaman texted about a term sheet", hi: "मिसेज़ ज़ामान ने टर्म शीट पर संदेश भेजा" },
            { bn: "রোকেয়া স্কুল খোলেন", en: "Rokeya opened a school", hi: "रोकैया ने स्कूल खोला" },
          ],
          answer: 2,
          explain: {
            bn: "লাইসেন্স হাতে পেতেই রাতে অপরিচিত নম্বর থেকে মেসেজ আসে — নুসরাত জামান টার্ম শিট নিয়ে কথা বলতে চান।",
            en: "The same evening, an unknown number texts: Nusrat Zaman wants to talk about a term sheet.",
            hi: "उसी शाम अजनबी नंबर से संदेश आता है: नुसरत ज़ामान टर्म शीट की बात करना चाहती हैं।",
          },
        },
      ],
    },
  },

  /* ── Unit 3 · business & negotiation (liability, monopoly, incentive, contingency, benchmark, leverage) ── */
  {
    slug: "green-startup-ep3",
    level: "advanced",
    category: "work",
    minutes: 4,
    unit: 3,
    data: {
      title: {
        bn: "দ্য গ্রিন স্টার্টআপ — পর্ব ৩: টার্ম শিট",
        en: "The Green Startup — Episode 3: The Term Sheet",
        hi: "द ग्रीन स्टार्टअप — एपिसोड 3: टर्म शीट",
      },
      summary: {
        bn: "মিসেস জামান আঠারো শতাংশের বিনিময়ে তিন কোটি টাকার টার্ম শিট এনে দেয়, কিন্তু ইমরান লাল কালি দিয়ে ঝুঁকি দাগায় — একচেটিয়া মোনোপলি ক্লজ আর ব্যক্তিগত দায়বদ্ধতা। ফারহানা ধাপে ধাপে খোলা শেয়ার, পণ্য-বিমা আর মেয়াদোত্তীর্ণে বাতিল হওয়া কন্টিনজেন্সি ক্লজ নিয়ে আলোচনা করে, আর প্রতিদ্বন্দ্বী একুয়াপিওর-এর চুক্তির সাথে তুলনা করে দরদামের সুবিধা নেয়। চুক্তি সই হয় — ঠিক তখনই আসে একটি প্রশ্ন: প্রমাণ কোথায়?",
        en: "Ms. Zaman offers three crore taka for eighteen percent. Imran flags the monopoly clause and personal liability; they negotiate staged share incentives, product insurance, and a contingency that dissolves exclusivity if no sale happens. Farhana benchmarks every clause against rival AquaPure's deal and uses the comparison as leverage. The deal is signed — and then a university email asks where the proof is.",
        hi: "मिसेज़ ज़ामान अठारह प्रतिशत के बदले तीन करोड़ की टर्म शीट देती हैं। इमरान मोनोपॉली क्लॉज़ और निजी देयता पर सवाल उठाता है; वे चरणबद्ध शेयर-प्रोत्साहन, उत्पाद बीमा और एक कंटिंजेंसी पर सहमत होते हैं। फ़रहाना हर क्लॉज़ की प्रतिद्वंद्वी एक्वाप्योर से तुलना करके बातचीत में दबाव बनाती है। सौदा हो जाता है — और तभी एक ईमेल पूछता है: सबूत कहाँ है?",
      },
      paragraphs: [
        "Ms. Zaman's office overlooked Gulshan Lake, which was appropriate, Farhana thought, because the lake was exactly the kind of water their filters were meant to fix. The term sheet lay between them, fourteen pages of careful language. “Three crore taka for eighteen percent,” Ms. Zaman said. “Take your time, but not too much. Money that waits for entrepreneurs rarely keeps waiting for them.” Farhana heard the line as both an offer and a countdown.",
        "Imran, who had once worked for a company that died of its own contracts, read the document three times and filled the margins with red ink. Clause nine gave the investor exclusive rights to negotiate any future sale — a soft monopoly over GreenFlow's destiny. Clause eleven transferred product liability to the founders personally if a filter ever failed and someone fell ill. “This is not a cheque,” Imran said flatly. “It's a cage with very polite bars.”",
        "They returned with a counter-proposal instead of a refusal. Farhana argued for incentives that rewarded patience: the founders' shares would unlock in stages as the company hit targets — one lakh filters sold, then two hundred villages served, then independent lab certification. Ms. Zaman, who had funded enough startups to recognise craft when she saw it, agreed without ceremony. “People think investors buy companies,” she remarked, “but mostly we buy founders' incentives, and yours finally point in the same direction as mine.”",
        "The liability clause they rewrote together: GreenFlow would carry proper product insurance and publish testing results quarterly, while personal liability applied only to proven negligence — a compromise that cost Ms. Zaman a smile and cost the founders nothing they could not live with. For the monopoly question, Imran proposed a contingency: if the exclusive negotiation window expired without a sale, the clause would vanish automatically. “Deadlocks need doors,” he said. Ms. Zaman signed that margin note herself.",
        "Before signing, Farhana did her homework. A rival startup, AquaPure, had accepted a similar investment from a Singapore fund six months earlier — fifteen percent for less money, but with mandatory board seats. She benchmarked every clause of GreenFlow's sheet against AquaPure's, walked into the meeting with the comparison printed, and used it as leverage. “I'm not asking for a discount,” she said, sliding the pages across. “I'm asking you to be better than the competition you yourself showed me.”",
        "The agreement was signed with gel pens and plates of carrots, and the money arrived within a week. GreenFlow hired two technicians, bought a moulding machine, and doubled production. Then, in the middle of the celebration dinner, a professor from Dhaka University's engineering department forwarded Farhana a preprint questioning commercial water-filter claims — “independent verification is what separates science from marketing,” the email read. Ms. Zaman's first instalment had bought them machines; the next instalment would have to buy them proof.",
      ],
      vocabulary: [
        {
          word: "liability",
          meaning: {
            bn: "আইনি দায় — ক্ষতি হলে ক্ষতিপূরণ কার কাঁধে, সেই দায়িত্ব; যেমন পালকির হাতল ভাঙলে মেরামতের দায় কার",
            en: "legal responsibility for something, especially damage or loss",
            hi: "क़ानूनी ज़िम्मेदारी, ख़ासकर नुक़सान के लिए",
          },
          example: "Clause eleven transferred product liability to the founders personally.",
        },
        {
          word: "monopoly",
          meaning: {
            bn: "একচেটিয়া দখল — একজনই যখন পুরো বাজার বা সিদ্ধান্ত ধরে রাখে; যেমন মেলায় একটাই পানির দোকান থাকলে দাম যা খুশি চায়",
            en: "complete control of a market or decision by one party",
            hi: "एक ही पक्ष का एकाधिकार — बाज़ार या फ़ैसले पर पूरा नियंत्रण",
          },
          example: "Clause nine gave the investor a soft monopoly over GreenFlow's destiny.",
        },
        {
          word: "incentive",
          meaning: {
            bn: "প্রণোদনা — এমন লাভ যা মানুষকে নির্দিষ্ট কাজে উৎসাহ দেয়; যেমন আগে পড়লে আগে খেলতে যাওয়ার সুযোগ",
            en: "something that motivates a person to act in a certain way",
            hi: "प्रोत्साहन — जो किसी को कोई काम करने के लिए प्रेरित करता है",
          },
          example: "The founders' shares unlock in stages — incentives that reward patience.",
        },
        {
          word: "contingency",
          meaning: {
            bn: "প্ল্যান বি — অপ্রত্যাশিত ঝড়ের জন্য ব্যাগে ভাঁজ করা ছাতা",
            en: "a plan prepared for a possible future problem",
            hi: "भविष्य की संभावित परेशानी के लिए तैयार बैकअप योजना",
          },
          example: "The contingency was simple: no sale, no exclusivity.",
        },
        {
          word: "benchmark",
          meaning: {
            bn: "তুলনার রুল — টপারের নম্বরের পাশে নিজের নম্বর ধরে দেখা কত এগোতে হবে",
            en: "a standard used to compare things against",
            hi: "तुलना का मापदंड — दूसरों के नतीजों से अपनी स्थिति तौलना",
          },
          example: "She benchmarked every clause against AquaPure's deal before signing.",
        },
        {
          word: "leverage",
          meaning: {
            bn: "দরদামের মুদ্রা — যে সুবিধার কারণে অন্যপক্ষকে আপনার শর্ত মানতেই হয়; যেমন হাতে নগদ থাকলে দোকানদার সস্তায় দেয়",
            en: "the power or advantage you use to influence a negotiation",
            hi: "बातचीत में दबाव बनाने की बढ़त या ताक़त",
          },
          example: "The printed comparison became her leverage in the negotiation.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "টার্ম শিটে ইমরান কোন ক্লজ নিয়ে সবচেয়ে বেশি সতর্ক করেন?",
            en: "Which clauses did Imran warn about most?",
            hi: "टर्म शीट में इमरान ने किन क्लॉज़ के बारे में सबसे ज़्यादा चेताया?",
          },
          options: [
            { bn: "মূল্যায়ন আর সুদের হার", en: "The valuation and the interest rate", hi: "मूल्यांकन और ब्याज दर" },
            { bn: "মোনোপলি ক্লজ আর ব্যক্তিগত দায়বদ্ধতা", en: "The monopoly clause and personal product liability", hi: "मोनोपॉली क्लॉज़ और निजी उत्पाद देयता" },
            { bn: "অফিস ভাড়ার ক্লজ", en: "The office rent clause", hi: "ऑफ़िस किराये का क्लॉज़" },
            { bn: "বেতন কাঠামো", en: "The salary structure", hi: "वेतन संरचना" },
          ],
          answer: 1,
          explain: {
            bn: "ইমরান ক্লজ নাইন (একচেটিয়া আলোচনার অধিকার) আর ক্লজ ইলেভেন (ব্যক্তিগত দায়বদ্ধতা) লাল কালিতে দাগায় — 'এটা চেক নয়, ভদ্র খাঁচা।'",
            en: "Imran circles clause nine (a soft monopoly) and clause eleven (personal liability): not a cheque, a cage.",
            hi: "इमरान क्लॉज़ नाइन (मोनोपॉली) और क्लॉज़ इलेवन (निजी देयता) पर लाल निशान लगाता है — 'यह चेक नहीं, पिंजरा है।'",
          },
        },
        {
          question: {
            bn: "প্রতিষ্ঠাতাদের ইনসেনটিভ কীভাবে পুনর্গঠিত হয়?",
            en: "How were the founders' incentives restructured?",
            hi: "संस्थापकों के प्रोत्साहन कैसे पुनर्गठित हुए?",
          },
          options: [
            { bn: "টার্গেট পূরণ হলে ধাপে ধাপে শেয়ার খোলে", en: "Shares unlock in stages as targets are met", hi: "लक्ष्य पूरे होने पर चरणबद्ध रूप से शेयर खुलते हैं" },
            { bn: "সব শেয়ার সঙ্গে সঙ্গে বিক্রি হয়", en: "All shares were sold immediately", hi: "सारे शेयर तुरंत बेच दिए गए" },
            { bn: "প্রতি মাসে নগদ বোনাস", en: "Monthly cash bonuses", hi: "हर महीने नकद बोनस" },
            { bn: "শেয়ার সিটি কাউন্সিলকে দেওয়া হয়", en: "Shares were given to the council", hi: "शेयर काउंसिल को दे दिए गए" },
          ],
          answer: 0,
          explain: {
            bn: "শেয়ার ধাপে ধাপে খোলে — এক লাখ ফিল্টার, দুইশ গ্রাম, ল্যাব সার্টিফিকেশন — অর্থাৎ উৎসাহ দুই পক্ষেরই একই দিকে।",
            en: "Founders' shares unlock in stages — a lakh filters, two hundred villages, lab certification — so incentives align.",
            hi: "संस्थापकों के शेयर चरणबद्ध होकर खुलते हैं — एक लाख फ़िल्टर, दो सौ गाँव, लैब सर्टिफिकेशन — ताकि प्रोत्साहन एक दिशा में रहें।",
          },
        },
        {
          question: {
            bn: "একচেটিয়া ক্লজের জন্য কন্টিনজেন্সি কী ছিল?",
            en: "What was the contingency for the exclusivity clause?",
            hi: "एक्सक्लूसिविटी क्लॉज़ के लिए कंटिंजेंसी क्या थी?",
          },
          options: [
            { bn: "সেটা একুয়াপিওর-কে বিক্রি করা যেত", en: "It could be sold to AquaPure", hi: "इसे एक्वाप्योर को बेचा जा सकता था" },
            { bn: "বিক্রি ছাড়াই মেয়াদ শেষ হলে ক্লজ নিজে থেকেই বাতিল হতো", en: "It vanished automatically if the window expired without a sale", hi: "बिना सौदे समय समाप्त होने पर क्लॉज़ स्वतः ख़त्म हो जाता" },
            { bn: "সেটা চিরকাল টিকত", en: "It lasted forever", hi: "यह हमेशा टिकता" },
            { bn: "সেটা শুধু ইমরানের ওপর প্রযোজ্য ছিল", en: "It applied only to Imran", hi: "यह केवल इमरान पर लागू होता" },
          ],
          answer: 1,
          explain: {
            bn: "ইমরানের শর্ত: মেয়াদ শেষে বিক্রি না হলে একচেটিয়া ক্লজ নিজে থেকেই বাতিল — 'ডেডলকের দরজা দরকার।'",
            en: "If the exclusive window expired without a sale, the clause would vanish automatically — deadlocks need doors.",
            hi: "अगर अवधि बिना सौदे समाप्त हुई तो क्लॉज़ स्वतः ख़त्म — डेडलॉक को दरवाज़ा चाहिए।",
          },
        },
        {
          question: {
            bn: "সইয়ের আগে ফারহানা দরদামের সুবিধা (লেভারেজ) কীভাবে বানালেন?",
            en: "How did Farhana create leverage before signing?",
            hi: "साइन करने से पहले फ़रहाना ने दबाव कैसे बनाया?",
          },
          options: [
            { bn: "প্রতিদ্বন্দ্বী একুয়াপিওর-এর চুক্তির সাথে প্রতিটি ক্লজ তুলনা করে", en: "By benchmarking the deal against rival AquaPure's terms", hi: "प्रतिद्वंद्वी एक्वाप्योर की शर्तों से तुलना करके" },
            { bn: "দেশ ছেড়ে যাওয়ার হুমকি দিয়ে", en: "By threatening to leave the country", hi: "देश छोड़ने की धमकी देकर" },
            { bn: "কাউন্সিলের কাছে টাকা চেয়ে", en: "By asking the council for money", hi: "काउंसिल से पैसे माँगकर" },
            { bn: "ফিল্টারের দাম বাড়িয়ে", en: "By raising the filter price", hi: "फ़िल्टर की क़ीमत बढ़ाकर" },
          ],
          answer: 0,
          explain: {
            bn: "ফারহানা একুয়াপিওর-এর চুক্তির সাথে প্রতিটি ক্লজ মিলিয়ে ছাপা তুলনা টেবিলে রাখে — 'নিজের দেখানো প্রতিযোগিতার চেয়ে ভালো হোন।'",
            en: "She benchmarks every clause against AquaPure's deal and uses the printed comparison as leverage.",
            hi: "वे हर क्लॉज़ एक्वाप्योर की डील से मिलाकर छपी तुलना को दबाव के रूप में इस्तेमाल करती हैं।",
          },
        },
      ],
    },
  },

  /* ── Unit 4 · research & evidence (hypothesis, methodology, anomaly, correlation, substantiate, empirical) ── */
  {
    slug: "green-startup-ep4",
    level: "advanced",
    category: "science",
    minutes: 4,
    unit: 4,
    data: {
      title: {
        bn: "দ্য গ্রিন স্টার্টআপ — পর্ব ৪: পাইলট স্টাডি",
        en: "The Green Startup — Episode 4: The Pilot Study",
        hi: "द ग्रीन स्टार्टअप — एपिसोड 4: पायलट स्टडी",
      },
      summary: {
        bn: "ঢাকা বিশ্ববিদ্যালয়ের ল্যাবের সাথে পাইলট স্টাডি শুরু হয় — ত্রিশটি গ্রাম, কঠোর পদ্ধতি, অন্ধ স্বাস্থ্য-পরিদর্শন। মাঝপথে ডেটায় অসঙ্গতি ধরা পড়ে: ফিল্টার পায়নি এমন গ্রামও ভালো যাচ্ছে! তদন্তে বেরোয় রোকেয়ার হাত — সে সব গ্রামে ঘুরে স্বাস্থ্য-অভ্যাস শিখিয়েছে; সহসম্পর্ক আর কারণের ফারাক তখন স্পষ্ট। সেই প্রভাব আলাদা করার পর বিশুদ্ধ ফলাফল দাঁড়ায়: সংক্রমণ চল্লিশ শতাংশ কম। প্রতিবেদন প্রকাশের পরই একুয়ানোভার একটি ভারী-কাগজের চিঠি আসে।",
        en: "A university lab designs a strict pilot: thirty villages, half with filters, half without, blind health visits. Midway, an anomaly appears — villages still waiting for filters are improving too. The cause is traced to Rokeya's hygiene teaching, separating correlation from causation. With her effect removed, the empirical result stands: forty percent fewer infections. The report goes public, and a heavyweight letter arrives from AquaNova.",
        hi: "यूनिवर्सिटी लैब एक कठोर पायलट स्टडी बनाती है: तीस गाँव, आधों को फ़िल्टर, आधों को नहीं, अंधी स्वास्थ्य-जाँचें। बीच में एक विसंगति सामने आती है — जिन गाँवों को फ़िल्टर नहीं मिला, वे भी सुधर रहे हैं। कारण रोकैया की स्वच्छता-शिक्षा निकलती है; सहसंबंध और कार्य-कारण का फ़र्क़ साफ़ होता है। शुद्ध नतीजा: संक्रमण चालीस प्रतिशत कम। रिपोर्ट छपते ही एक्वानोवा से एक भारी-भरकम चिट्ठी आती है।",
      },
      paragraphs: [
        "The university collaboration began with an argument, which Farhana considered a promising sign. Professor Anis Rahman proposed a pilot study across thirty villages; GreenFlow would pay for logistics, the lab would design everything else. “What exactly is your hypothesis?” he asked on the first day. Farhana answered carefully: not that the filters worked, but that households using them would show measurably fewer waterborne infections over six months. A hypothesis you cannot risk disliking, the professor warned, is merely a wish.",
        "The methodology was stricter than anything a marketing department would dare design. Thirty villages, half receiving filters immediately, half waiting a year; water samples collected monthly; health visits recorded by nurses who did not know which houses had filters. “If your product only survives kindness, it does not survive the market,” the professor said. Farhana spent three weeks training field workers, and Imran built a simple app so that every sample, every fever, every replacement could be traced.",
        "Then, five months in, the data produced an anomaly that stopped the lab meeting cold. Villages using the filters reported fewer infections, as expected — but so, inexplicably, did several villages still waiting for them. One of the young researchers smiled and said the filters must be working by reputation. The professor did not smile. “An anomaly is either noise, a mistake, or a discovery,” he said. “Our job is to find out which, before we announce anything.”",
        "The debate that followed became a masterclass in correlation versus causation. The filter villages and the non-filter villages were improving together — so what did they share? Farhana traced it back to one variable: Rokeya. The schoolteacher had been visiting every village, filter or not, teaching families to boil water during floods and wash hands before cooking. The filters cleaned water; Rokeya changed behaviour. The correlation was real, but the cause was partly GreenFlow and partly a woman on a bicycle.",
        "Once Rokeya's effect was separated out, the cleaned numbers told a story Farhana could finally defend. Households with filters showed forty percent fewer waterborne infections — an empirical result, derived from months of samples rather than enthusiasm. “The data substantiate your claim,” the professor wrote in the final report, and Farhana read that sentence eleven times. Marketing had never once tempted her; this quiet, peer-reviewable paragraph was worth more than every advertisement she had never bought.",
        "The report went public on a Tuesday; by Thursday it had been cited in two newspapers. GreenFlow's order list grew longer than the workshop's floor space. Then a letter arrived on heavyweight paper — not an email, an actual letter — from AquaNova, a multinational that manufactured premium filters. “We would like to discuss your interesting little company,” it said. “Perhaps over dinner.” Imran read it aloud twice. Farhana slid it into the drawer that held the first harvesting licence, and thought.",
      ],
      vocabulary: [
        {
          word: "hypothesis",
          meaning: {
            bn: "পরীক্ষার আগের অনুমান — 'যদি এমন করি, তাহলে ওমন হবে'; মাঠে নেমে যাচাই করার জন্যই বলা হয়",
            en: "an idea you can test, predicting what will happen and why",
            hi: "परखने योग्य अनुमान — 'अगर ऐसा हुआ तो वैसा होगा'",
          },
          example: "Her hypothesis: households using the filters would show fewer waterborne infections.",
        },
        {
          word: "methodology",
          meaning: {
            bn: "গবেষণার নিয়ম-কানুন — কাকে মাপবেন, কীভাবে, কখন; যেমন খেলার আগে ঠিক করা কে কোন দলে, কে রেফারি",
            en: "the planned method a study follows: what, who, and how to measure",
            hi: "अध्ययन की व्यवस्थित विधि — क्या मापा जाए, किस पर, कैसे",
          },
          example: "The methodology was stricter than a marketing department would dare design.",
        },
        {
          word: "anomaly",
          meaning: {
            bn: "ব্যতিক্রম — সারি সারি সবুজ ফলের মাঝে একটা লাল ফলের মতো, যা চোখে পড়ে প্রশ্ন জাগায়",
            en: "something that does not fit the expected pattern",
            hi: "अपेक्षित पैटर्न से बाहर खड़ी चीज़, विसंगति",
          },
          example: "The data produced an anomaly — non-filter villages were improving too.",
        },
        {
          word: "correlation",
          meaning: {
            bn: "সহসম্পর্ক — একটা বাড়লে আরেকটাও বাড়ে; কিন্তু 'একসাথে বাড়া' মানেই 'একটা আরেকটা বানায়' নয়, যেমন ছাতা আর ভেজা রাস্তা একসাথে দেখা যায়, ছাতা রাস্তা ভেজায় না",
            en: "two things changing together — which may or may not mean one causes the other",
            hi: "दो चीज़ों का साथ-साथ बदलना — ज़रूरी नहीं कि एक दूसरे का कारण हो",
          },
          example: "The correlation was real, but the cause was partly a woman on a bicycle.",
        },
        {
          word: "substantiate",
          meaning: {
            bn: "প্রমাণে মজবুত করা — মাটির দেয়ালকে ইট-সুরকির দেয়াল বানানো",
            en: "to support a claim with solid evidence",
            hi: "दावे को ठोस सबूत से सही साबित करना",
          },
          example: "The data substantiate your claim, the professor wrote in the final report.",
        },
        {
          word: "empirical",
          meaning: {
            bn: "মাপা-যাচাই-করা ফলাফলের ভিত্তিতে দাঁড়ানো — আকাশ দেখে নয়, মাঠে মেপে পাওয়া",
            en: "based on observation and measurement, not opinion",
            hi: "अवलोकन और माप पर आधारित, अंदाज़े पर नहीं",
          },
          example: "Forty percent fewer infections — an empirical result from months of samples.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "পাইলট স্টাডির হাইপোথিসিস কী ছিল?",
            en: "What was the hypothesis of the pilot study?",
            hi: "पायलट स्टडी की परिकल्पना क्या थी?",
          },
          options: [
            { bn: "ফিল্টার পাইপলাইনের চেয়ে সস্তা", en: "Filters are cheaper than pipelines", hi: "फ़िल्टर पाइपलाइन से सस्ते हैं" },
            { bn: "ফিল্টার ব্যবহারকারী পরিবারে ছয় মাসে পানিবাহিত সংক্রমণ মাপা যায় এমনভাবে কম হবে", en: "Households with filters would show measurably fewer waterborne infections over six months", hi: "फ़िल्टर वाले परिवारों में छह महीनों में जलजनित संक्रमण मापनीय रूप से कम होगा" },
            { bn: "রোকেয়া সবচেয়ে ভালো শিক্ষক", en: "Rokeya was the best teacher", hi: "रोकैया सबसे अच्छी शिक्षिका थीं" },
            { bn: "শীতে নদীর পানি পরিষ্কার হয়", en: "Rivers are clean in winter", hi: "सर्दियों में नदियाँ साफ़ हो जाती हैं" },
          ],
          answer: 1,
          explain: {
            bn: "ফারহানার অনুমান: ফিল্টার ব্যবহারকারী পরিবারে ছয় মাসে পানিবাহিত সংক্রমণ মাপা যায় এমনভাবে কম হবে।",
            en: "The hypothesis: households using the filters would show measurably fewer waterborne infections over six months.",
            hi: "परिकल्पना: फ़िल्टर इस्तेमाल करने वाले परिवारों में छह महीने में संक्रमण मापनीय रूप से कम होगा।",
          },
        },
        {
          question: {
            bn: "পদ্ধতিটি (মেথডোলজি) কঠোর ছিল কেন?",
            en: "What made the methodology strict?",
            hi: "पद्धति कठोर क्यों थी?",
          },
          options: [
            { bn: "গবেষণা এক সপ্তাহেই শেষ হয়েছিল", en: "The study lasted one week", hi: "अध्ययन एक हफ़्ते में ख़त्म हुआ" },
            { bn: "শুধু কারখানাই পরীক্ষিত হয়েছিল", en: "Only the workshop was tested", hi: "केवल कारखाने की जाँच हुई" },
            { bn: "স্বাস্থ্য-পরিদর্শন অন্ধ ছিল, অর্ধেক গ্রাম এক বছর অপেক্ষা করেছিল", en: "Health visits were blind and half the villages waited a year", hi: "स्वास्थ्य-जाँचें अंधी थीं और आधे गाँव एक साल प्रतीक्षा करते थे" },
            { bn: "শুধু ধনী গ্রাম নেওয়া হয়েছিল", en: "Only rich villages were studied", hi: "केवल अमीर गाँव चुने गए" },
          ],
          answer: 2,
          explain: {
            bn: "ত্রিশটি গ্রামের অর্ধেক এক বছর অপেক্ষা করবে, নার্সরা জানবেন না কোন বাড়িতে ফিল্টার, প্রতি মাসে নমুনা — কঠোরতাই আসল।",
            en: "Half the villages waited a year, nurses were blind to who had filters, samples came monthly.",
            hi: "आधे गाँव एक साल प्रतीक्षा करते हैं, नर्सें नहीं जानती थीं किस घर में फ़िल्टर है — यही कठोर विधि है।",
          },
        },
        {
          question: {
            bn: "ডেটার অসঙ্গতি (অ্যানোমালি) কীসের কারণে হয়েছিল?",
            en: "What explained the anomaly in the data?",
            hi: "डेटा की विसंगति की वजह क्या थी?",
          },
          options: [
            { bn: "রোকেয়া প্রতিটি গ্রামে স্বাস্থ্য-অভ্যাস শেখাচ্ছিলেন", en: "Rokeya was teaching hygiene in every village", hi: "रोकैया हर गाँव में स्वच्छता सिखा रही थीं" },
            { bn: "বৃষ্টি পানি পরিষ্কার করেছিল", en: "The rain washed the water clean", hi: "बारिश ने पानी साफ़ कर दिया" },
            { bn: "ফিল্টার খ্যাতির জোরে কাজ করছিল", en: "The filters worked by reputation", hi: "फ़िल्टर प्रतिष्ठा के बल पर काम कर रहे थे" },
            { bn: "নার্সরা ভুল নম্বর লিখছিলেন", en: "Nurses recorded wrong numbers", hi: "नर्सें ग़लत आँकड़े लिख रही थीं" },
          ],
          answer: 0,
          explain: {
            bn: "রহস্যের উত্তর রোকেয়া — সে ফিল্টার-নেই গ্রামেও ঘুরে সিদ্ধ পানি ও হাত-ধোয়ার অভ্যাস শিখিয়েছে।",
            en: "Rokeya had been teaching boiling and hand-washing in every village, filter or not — the shared cause.",
            hi: "रोकैया हर गाँव में उबाला पानी और हाथ-धोना सिखा रही थीं — यही साझा कारण था।",
          },
        },
        {
          question: {
            bn: "শেষ বিশুদ্ধ ফলাফল কী প্রমাণ করল (সাবস্ট্যানশিয়েট)?",
            en: "What did the final empirical result substantiate?",
            hi: "अंतिम शुद्ध नतीजे ने क्या सिद्ध किया?",
          },
          options: [
            { bn: "শহরকে পাইপলাইন বানানো উচিত", en: "That the city should build pipelines", hi: "शहर को पाइपलाइन बनानी चाहिए" },
            { bn: "মার্কেটিং ফিল্টার বেচে", en: "That marketing sells filters", hi: "मार्केटिंग फ़िल्टर बेचती है" },
            { bn: "একুয়াপিওর ভালো ছিল", en: "That AquaPure was better", hi: "एक्वाप्योर बेहतर था" },
            { bn: "ফিল্টারওয়ালা পরিবারে সংক্রমণ চল্লিশ শতাংশ কম", en: "That forty percent fewer infections occurred in filter households", hi: "फ़िल्टर वाले परिवारों में संक्रमण चालीस प्रतिशत कम हुआ" },
          ],
          answer: 3,
          explain: {
            bn: "রোকেয়ার প্রভাব আলাদা করার পর ফলাফল দাঁড়ায়: ফিল্টারওয়ালা পরিবারে সংক্রমণ চল্লিশ শতাংশ কম — 'ডেটা তোমার দাবি সমর্থন করে।'",
            en: "With Rokeya's effect separated, filter households showed forty percent fewer infections — “the data substantiate your claim.”",
            hi: "रोकैया का प्रभाव अलग करने के बाद नतीजा खड़ा रहा: फ़िल्टर वाले परिवारों में संक्रमण चालीस प्रतिशत कम — 'आँकड़े आपके दावे को सिद्ध करते हैं।'",
          },
        },
      ],
    },
  },

  /* ── Unit 5 · personality & nuance (apprehensive, pragmatic, resilient, indifferent, complacent, tenacious) ── */
  {
    slug: "green-startup-ep5",
    level: "advanced",
    category: "inspire",
    minutes: 4,
    unit: 5,
    data: {
      title: {
        bn: "দ্য গ্রিন স্টার্টআপ — পর্ব ৫: সহ-প্রতিষ্ঠাতার প্রশ্ন",
        en: "The Green Startup — Episode 5: The Co-founder's Question",
        hi: "द ग्रीन स्टार्टअप — एपिसोड 5: सह-संस्थापक का सवाल",
      },
      summary: {
        bn: "একুয়ানোভা চল্লিশ কোটি টাকায় পুরো কোম্পানি কিনতে চায়। ইমরান বাস্তববাদী যুক্তি দেয়, ফারহানা ভেতরে ভেতরে শঙ্কিত; দল দুই ভাগ। মিসেস জামান ভোট না দিয়ে ইতিহাস শোনান: কেনা কোম্পানি প্রায়ই আরামে মরে। ফারহানা বেছে নেয় বাস্তবসম্মত কিন্তু দৃঢ় পথ — বিক্রি নয়, সরবরাহ-চুক্তি। শেষ দৃশ্যে পর্ব ১-এর প্রতিচ্ছবি: একই ঘোলা পানির জার, নতুন মঞ্চ — বটগাছের নিচে, যে মহিলাদের জন্য সব শুরু, তাদের সামনে এক নতুন পিচ।",
        en: "AquaNova offers forty crore for the whole company. Imran makes the pragmatic case; Farhana is apprehensive beneath the calm; the team splits. Ms. Zaman votes nothing but tells history: bought companies die of comfort. Farhana's choice is pragmatic and resilient — no sale, yes to a supply partnership. The final scene mirrors the first: a jar of cloudy river water, a pitch — this time under a banyan tree, to the women it was built for.",
        hi: "एक्वानोवा पूरी कंपनी चालीस करोड़ में ख़रीदना चाहती है। इमरान व्यावहारिक पक्ष रखता है; फ़रहाना अंदर से बेचैन है; टीम दो हिस्सों में बँट जाती है। मिसेज़ ज़ामान मतदान से इनकार कर इतिहास सुनाती हैं: ख़रीदी हुई कंपनियाँ अक्सर आराम में मर जाती हैं। फ़रहाना का फ़ैसला व्यावहारिक और मज़बूत है — बिक्री नहीं, सप्लाई साझेदारी हाँ। आख़िरी दृश्य पहले जैसा है: धुंधले पानी का जार, एक पिच — इस बार बरगद के नीचे, उन्हीं महिलाओं के सामने।",
      },
      paragraphs: [
        "AquaNova's offer arrived as promised: forty crore taka, full acquisition, the founders free to leave or stay as “innovation leads.” The team meeting lasted four hours. Imran, who had eaten instant noodles through two failed ventures, laid out the pragmatic case with unusual force — his mother's surgery, his rented flat, the decade he had spent being brave and broke. “Nobody will call us fools for selling,” he said. “Nobody will call us anything. That's the part that worries me.”",
        "Farhana was apprehensive, though she hid it badly. AquaNova made excellent, expensive filters, sold through showrooms to households that already had clean water. Under them, GreenFlow's two-dollar filter would either vanish or become a charity poster on a corporate website. She could not prove this; she only felt it, the way engineers feel a structure flexing. “We would be selling the answer to people who profit from the question,” she said, and heard how it sounded: like instinct, not like evidence.",
        "The team split honestly rather than bitterly. Two engineers were indifferent — money was money, and they had families. The sales lead feared a bigger owner would be complacent with rural customers, updating the design rarely and listening never. Ms. Zaman, invited to give advice, gave history instead: “I have watched bought companies die of comfort while their logos stayed alive. I also watched founders refuse a good exit and lose everything twice.” Then she paid for lunch and refused to vote.",
        "Farhana went back to her notes from the pilot study, looking for the version of herself who had learned to separate correlation from cause. The cause of GreenFlow was not technology; technology could be bought. The cause was a distribution of trust — Rokeya on her bicycle, Mr. Chowdhury's one-page licence, a thousand households that repaired their own filters. A tenacious organisation, she wrote in her diary, is one that keeps its reasons. Then she underlined “keeps” three times, like a student.",
        "The answer she gave AquaNova was neither heroic nor stubborn: no to the sale, yes to a supply partnership that licensed their premium membranes for city customers. That contract would fund the rural expansion without selling the compass. “This is not romance,” she told the divided team. “It's arithmetic with a spine. We stay independent because independence is the only condition under which two-dollar filters survive.” Imran studied the numbers, then quietly moved his desk back to its old corner.",
        "Resilient, Ms. Zaman called her afterwards, and Farhana accepted the word like a compliment she had not ordered. On Friday she travelled to Rokeya's village with a jar of river water — the same clouds as ever — and gave a pitch under the banyan tree to forty women on mats. “Two years ago I asked a panel of investors to believe me,” she began. “Today I'm asking the people I built this for. Rokeya, you first: what should the next filter do?”",
      ],
      vocabulary: [
        {
          word: "apprehensive",
          meaning: {
            bn: "ভেতরে ভেতরে উদ্বিগ্ন — পরীক্ষার হলে প্রশ্ন হাতে নেওয়ার আগের সেই মুহূর্ত",
            en: "worried that something bad may happen; anxious about the future",
            hi: "भविष्य में कुछ बुरा होने की चिंता में रहना, आशंकित",
          },
          example: "Farhana was apprehensive, though she hid it badly.",
        },
        {
          word: "pragmatic",
          meaning: {
            bn: "বাস্তবমুখী — আদর্শে নয়, যা কাজ করে তা-ই বেছে নেওয়া; বৃষ্টিতে চাদর মাথায় দেওয়ার মতো",
            en: "dealing with problems in a practical, realistic way rather than an idealistic one",
            hi: "आदर्श से नहीं, व्यावहारिकता से सोचकर काम लेना",
          },
          example: "Imran laid out the pragmatic case with unusual force.",
        },
        {
          word: "resilient",
          meaning: {
            bn: "আঘাতে ভেঙে না পড়া — ঝড়ে শাখা ভাঙলেও যে গাছ আবার ফুটে ওঠে",
            en: "able to recover quickly from difficulty",
            hi: "मुश्किल से जल्दी उबर जाने की क्षमता रखने वाला",
          },
          example: "Resilient, Ms. Zaman called her afterwards.",
        },
        {
          word: "indifferent",
          meaning: {
            bn: "উদাসীন — যেটা হোক, তাতে তার পড়া নেই; খেলার স্কোর নিয়ে যার আগ্রহই নেই",
            en: "not interested in or concerned about something either way",
            hi: "उदासीन — जो भी हो, कोई फ़र्क़ नहीं पड़ता",
          },
          example: "Two engineers were indifferent — money was money, and they had families.",
        },
        {
          word: "complacent",
          meaning: {
            bn: "সাফল্যে ঢিলে হয়ে যাওয়া — 'সব ঠিক আছে' ভেবে পড়া বন্ধ করা; প্রথম পরীক্ষায় ভালো করে হয়ে বসে থাকা",
            en: "too satisfied with how things are, so you stop trying",
            hi: "आराम में संतुष्ट होकर सुधरना छोड़ देना",
          },
          example: "She feared a bigger owner would be complacent with rural customers.",
        },
        {
          word: "tenacious",
          meaning: {
            bn: "নাগাল না ছাড়া — কুমড়ো লতার মতো আঁকড়ে থাকা, বাধা পেলেও ছেড়ে না দেওয়া",
            en: "holding on firmly; refusing to give up",
            hi: "दृढ़ और ज़िद्दी — पकड़ न छोड़ने वाला",
          },
          example: "A tenacious organisation is one that keeps its reasons.",
        },
      ],
      quiz: [
        {
          question: {
            bn: "একুয়ানোভা কী প্রস্তাব দেয়?",
            en: "What did AquaNova offer?",
            hi: "एक्वानोवा ने क्या प्रस्ताव दिया?",
          },
          options: [
            { bn: "ঢাকায় বিনামূল্যে অফিস", en: "A free office in Dhaka", hi: "ढाका में मुफ़्त ऑफ़िस" },
            { bn: "পুরো কোম্পানির জন্য চল্লিশ কোটি টাকা", en: "Forty crore taka for the whole company", hi: "पूरी कंपनी के लिए चालीस करोड़" },
            { bn: "শুধু একটা সরবরাহ চুক্তি", en: "A supply contract only", hi: "सिर्फ़ एक सप्लाई ठेका" },
            { bn: "একটা বিশ্ববিদ্যালয় অংশীদারত্ব", en: "A university partnership", hi: "एक विश्वविद्यालय साझेदारी" },
          ],
          answer: 1,
          explain: {
            bn: "চিঠিতে লেখা: চল্লিশ কোটি টাকা, সম্পূর্ণ অধিগ্রহণ, প্রতিষ্ঠাতারা চাইলে 'ইনোভেশন লিড' হিসেবে থাকতে পারেন।",
            en: "The offer: forty crore taka for a full acquisition, founders welcome to stay as innovation leads.",
            hi: "प्रस्ताव: पूरी कंपनी के लिए चालीस करोड़, संस्थापक चाहें तो इनोवेशन लीड बने रहें।",
          },
        },
        {
          question: {
            bn: "বিক্রি নিয়ে ফারহানা কেন শঙ্কিত (অ্যাপ্রিহেনসিভ) ছিলেন?",
            en: "Why was Farhana apprehensive about the sale?",
            hi: "बिक्री को लेकर फ़रहाना आशंकित क्यों थीं?",
          },
          options: [
            { bn: "তিনি অবসর নিতে চান", en: "She wanted to retire", hi: "वे रिटायर होना चाहती थीं" },
            { bn: "প্রস্তাবটা খুব কম ছিল", en: "The offer was too low", hi: "प्रस्ताव बहुत कम था" },
            { bn: "প্রিমিয়াম ব্র্যান্ডের মালিকানায় দুই ডলারের ফিল্টার হয় হারাবে, নয় চ্যারিটি-পোস্টার হবে", en: "Her two-dollar filter could vanish or become a charity poster under a premium brand", hi: "प्रीमियम ब्रांड के अधीन दो-डॉलर वाला फ़िल्टर या तो ग़ायब हो जाएगा या चैरिटी-पोस्टर बनेगा" },
            { bn: "ইমরান কাজ করতে অস্বীকার করেছিল", en: "Imran refused to work", hi: "इमरान ने काम करने से मना कर दिया" },
          ],
          answer: 2,
          explain: {
            bn: "ফারহানার আশঙ্কা: প্রিমিয়াম শোরুমের মালিকানায় দুই ডলারের ফিল্টার হয় হারিয়ে যাবে, নয় কর্পোরেট ওয়েবসাইটের চ্যারিটি-পোস্টার হবে।",
            en: "Under a premium showroom owner, the two-dollar filter would vanish or become a charity poster.",
            hi: "प्रीमियम शोरूम मालिक के अधीन दो-डॉलर का फ़िल्टर या तो ग़ायब हो जाएगा या चैरिटी-पोस्टर बन जाएगा।",
          },
        },
        {
          question: {
            bn: "মিসেস জামান কী পরামর্শ দেন?",
            en: "What advice did Ms. Zaman give?",
            hi: "मिसेज़ ज़ामान ने क्या सलाह दी?",
          },
          options: [
            { bn: "সঙ্গে সঙ্গে বিক্রি করুন", en: "Sell immediately", hi: "तुरंत बेच दो" },
            { bn: "ভোট না দিয়ে ইতিহাস শোনালেন — কেনা কোম্পানি প্রায়ই আরামে মরে", en: "She told history instead of voting: bought companies can die of comfort", hi: "मतदान से इनकार कर इतिहास सुनाया: ख़रीदी कंपनियाँ आराम में मर सकती हैं" },
            { bn: "পুরো দলকে বরখাস্ত করুন", en: "Fire the whole team", hi: "पूरी टीम निकाल दो" },
            { bn: "ফিল্টারের দাম বাড়ান", en: "Raise the filter price", hi: "फ़िल्टर की क़ीमत बढ़ाओ" },
          ],
          answer: 1,
          explain: {
            bn: "মিসেস জামান ভোট দেননি — শুধু ইতিহাস শোনান: কেনা কোম্পানি প্রায়ই আরামে মরে; আবার ভালো প্রস্থান ফেলে দিলে দুবার সব হারানো যায়।",
            en: "She refused to vote and told history instead: bought companies die of comfort; refusing exits can also ruin founders.",
            hi: "उन्होंने मतदान से इनकार किया और इतिहास सुनाया: ख़रीदी कंपनियाँ आराम में मरती हैं; अच्छा एग्ज़िट ठुकराना भी बर्बादी हो सकता है।",
          },
        },
        {
          question: {
            bn: "গল্পটি কীভাবে শেষ হয়?",
            en: "How does the serial end?",
            hi: "धारावाहिक कैसे समाप्त होता है?",
          },
          options: [
            { bn: "কোম্পানি বিক্রি হয়ে যায়", en: "The company is sold", hi: "कंपनी बिक जाती है" },
            { bn: "ফারহানা বটগাছের নিচে গ্রামের মহিলাদের সামনে পিচ দেন — পরের ফিল্টার কী করবে, তারাই বলুক", en: "Farhana pitches under a banyan tree to village women and asks them what the next filter should do", hi: "फ़रहाना बरगद के नीचे गाँव की महिलाओं को पिच देती हैं और पूछती हैं कि अगला फ़िल्टर क्या करे" },
            { bn: "ফারহানা বিদেশে চলে যান", en: "Farhana moves abroad", hi: "फ़रहाना विदेश चली जाती हैं" },
            { bn: "ফিল্টারগুলো কাজ করা বন্ধ করে দেয়", en: "The filters stop working", hi: "फ़िल्टर काम करना बंद कर देते हैं" },
          ],
          answer: 1,
          explain: {
            bn: "পূর্ণবৃত্ত: সেই একই ঘোলা পানির জার, এবার বটগাছের নিচে মহিলাদের সামনে পিচ — 'রোকেয়া, আপনিই বলুন, পরের ফিল্টার কী করবে?'",
            en: "Full circle: the same jar of cloudy water, a pitch under the banyan tree — “Rokeya, what should the next filter do?”",
            hi: "पूरा वृत्त: वही धुंधला जार, इस बार बरगद के नीचे पिच — 'रोकैया, बताइए, अगला फ़िल्टर क्या करे?'",
          },
        },
      ],
    },
  },
];
