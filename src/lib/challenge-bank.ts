// ─── Daily sentence challenge — prompt bank (D32, ROADMAP-60) — PURE ────────
// One prompt per Asia/Dhaka day, picked deterministically by the day string —
// no DB row, no AI cost, identical for every learner that day.
//
// The PROMPT is the English question the learner answers with 1–3 English
// sentences. bn/hi glosses exist to make sure nobody misunderstands the TASK
// (the answer itself is always English — that is the skill being practiced).

export interface ChallengePrompt {
  id: string; // stable id stored on the submission
  en: string;
  bn: string;
  hi: string;
  /** Short starter hint shown under the textarea (English words to reuse). */
  starters: string[];
}

export const CHALLENGE_PROMPTS: ChallengePrompt[] = [
  { id: "morning-routine", en: "What does your typical morning look like?", bn: "আপনার সাধারণ সকালটা কেমন যায়?", hi: "आपकी आम सुबह कैसी होती है?", starters: ["I usually…", "After that…"] },
  { id: "best-friend", en: "Describe your best friend in 2–3 sentences.", bn: "২-৩ বাক্যে আপনার সবচেয়ে ভালো বন্ধুকে বর্ণনা করুন।", hi: "2-3 वाक्यों में अपने सबसे अच्छे दोस्त का वर्णन करें।", starters: ["My best friend…", "We often…"] },
  { id: "favorite-food", en: "What is your favorite food, and when do you eat it?", bn: "আপনার প্রিয় খাবার কী, আর কখন খান?", hi: "आपका पसंदीदा खाना क्या है, और आप उसे कब खाते हैं?", starters: ["My favorite food is…", "I love it because…"] },
  { id: "weekend-plan", en: "What are you going to do next weekend?", bn: "আগামী সপ্তাহান্তে আপনি কী করতে যাচ্ছেন?", hi: "अगले सप्ताहांत में आप क्या करने जा रहे हैं?", starters: ["Next weekend I will…", "I plan to…"] },
  { id: "hometown", en: "Where is your hometown? What do people visit there for?", bn: "আপনার বাড়ি কোথায়? মানুষ সেখানে কী দেখতে যায়?", hi: "आपका गृहनगर कहाँ है? लोग वहाँ क्या देखने जाते हैं?", starters: ["My hometown is…", "People come to see…"] },
  { id: "learn-english", en: "Why are you learning English? What will you do with it?", bn: "আপনি কেন ইংরেজি শিখছেন? এটা দিয়ে কী করবেন?", hi: "आप अंग्रेज़ी क्यों सीख रहे हैं? इसका उपयोग आप क्या करने के लिए करेंगे?", starters: ["I am learning English because…", "I want to…"] },
  { id: "rainy-day", en: "What do you like to do on a rainy day?", bn: "বৃষ্টির দিনে আপনি কী করতে পছন্দ করেন?", hi: "बरसात के दिन में आप क्या करना पसंद करते हैं?", starters: ["On a rainy day I…", "I usually stay…"] },
  { id: "dream-job", en: "What is your dream job? Why?", bn: "আপনার স্বপ্নের চাকরি কী? কেন?", hi: "आपका सपनों का करियर क्या है? क्यों?", starters: ["My dream job is…", "I would enjoy…"] },
  { id: "market-shopping", en: "Describe the last time you went shopping.", bn: "শেষ যেবার দোকানে গিয়েছিলেন, সেবারের কথা লিখুন।", hi: "पिछली बार जब आप खरीदारी करने गए थे, उसका वर्णन करें।", starters: ["Last week I bought…", "The price was…"] },
  { id: "phone-app", en: "Which app do you use the most? What do you use it for?", bn: "সবচেয়ে বেশি কোন অ্যাপ ব্যবহার করেন? কী কাজে?", hi: "आप सबसे ज़्यादा कौन-सा ऐप उपयोग करते हैं? किस काम के लिए?", starters: ["I use … the most", "It helps me…"] },
  { id: "childhood-memory", en: "Write one happy memory from your childhood.", bn: "ছোটবেলার একটি আনন্দের স্মৃতি লিখুন।", hi: "अपने बचपन की एक खुशी की याद लिखें।", starters: ["When I was young…", "I remember…"] },
  { id: "advice-learner", en: "Give one piece of advice to a new English learner.", bn: "নতুন ইংরেজি শিক্ষার্থীকে একটি পরামর্শ দিন।", hi: "अंग्रेज़ी सीखने वाले नए छात्र को एक सलाह दें।", starters: ["You should…", "Don't be afraid to…"] },
  { id: "busy-day", en: "Describe your busiest day of the week.", bn: "সপ্তাহের সবচেয়ে ব্যস্ত দিনটির কথা লিখুন।", hi: "हफ़्ते के सबसे व्यस्त दिन का वर्णन करें।", starters: ["My busiest day is…", "I have to…"] },
  { id: "movie-book", en: "Tell us about a movie or book you enjoyed.", bn: "আপনার পছন্দের একটি সিনেমা বা বইয়ের কথা বলুন।", hi: "किसी पसंदीदा फ़िल्म या किताब के बारे में बताएं।", starters: ["Recently I watched/read…", "The best part was…"] },
  { id: "travel-dream", en: "If you could visit any country, where would you go?", bn: "যেকোনো দেশে যেতে পারলে কোথায় যেতেন?", hi: "किसी भी देश की यात्रा कर सकते तो आप कहाँ जाते?", starters: ["I would visit…", "I want to see…"] },
  { id: "cooking", en: "Can you cook? What dish can you make well?", bn: "আপনি কি রান্না করতে পারেন? কোন পদ ভালো বানাতে পারেন?", hi: "क्या आप खाना बना सकते हैं? कौन-सी डिश अच्छी बनाते हैं?", starters: ["I can cook…", "First, I…"] },
  { id: "morning-person", en: "Are you a morning person or a night owl? Why?", bn: "আপনি কি ভোরের মানুষ নাকি নৈশকার? কেন?", hi: "आप सुबह के इंसान हैं या रात के? क्यों?", starters: ["I am a … person", "My brain works…"] },
  { id: "celebration", en: "How does your family celebrate a festival?", bn: "উৎসব আপনার পরিবার কীভাবে পালন করে?", hi: "आपका परिवार त्योहार कैसे मनाता है?", starters: ["During … we…", "Everyone gathers…"] },
  { id: "new-skill", en: "What new skill would you like to learn this year?", bn: "এ বছর আপনি কোন নতুন দক্ষতা শিখতে চান?", hi: "इस साल आप कौन-सा नया कौशल सीखना चाहते हैं?", starters: ["This year I want to learn…", "It would help me…"] },
  { id: "daily-commute", en: "How do you get to school or work every day?", bn: "প্রতিদিন স্কুল বা কাজে কীভাবে যান?", hi: "आप रोज़ स्कूल या काम कैसे जाते हैं?", starters: ["Every day I…", "It takes about…"] },
  { id: "weather-today", en: "Describe today's weather and your mood.", bn: "আজকের আবহাওয়া আর আপনার মেজাজের কথা লিখুন।", hi: "आज के मौसम और अपने मूड का वर्णन करें।", starters: ["Today it is…", "I feel…"] },
  { id: "help-someone", en: "Describe a time you helped someone.", bn: "এমন একটা সময়ের কথা লিখুন যখন কাউকে সাহায্য করেছিলেন।", hi: "जब आपने किसी की मदद की, उस समय का वर्णन करें।", starters: ["One day I helped…", "He/She was…"] },
  { id: "favorite-place", en: "What is your favorite place to relax? Describe it.", bn: "বিশ্রামের জন্য আপনার প্রিয় জায়গা কোনটি? বর্ণনা করুন।", hi: "आराम करने की आपकी पसंदीदा जगह कौन-सी है? वर्णन करें।", starters: ["My favorite place is…", "It is peaceful because…"] },
  { id: "pet-animal", en: "Do you have or want a pet? Tell us about it.", bn: "আপনার পোষা প্রাণী আছে বা চান? সে সম্পর্কে বলুন।", hi: "आपके पास पालतू जानवर है या आप चाहते हैं? बताइए।", starters: ["I have / I would like…", "It is very…"] },
  { id: "goal-month", en: "What is one goal you have for this month?", bn: "এই মাসের জন্য আপনার একটি লক্ষ্য কী?", hi: "इस महीने का आपका एक लक्ष्य क्या है?", starters: ["This month I want to…", "I will practice…"] },
  { id: "tea-coffee", en: "Tea or coffee? Describe your perfect cup.", bn: "চা নাকি কফি? আপনার পছন্দের কাপের কথা লিখুন।", hi: "चाय या कॉफ़ी? अपनी पसंदीदा कप का वर्णन करें।", starters: ["I prefer…", "I like it with…"] },
  { id: "school-memory", en: "What subject did you love in school? Why?", bn: "স্কুলে কোন বিষয় ভালো লাগত? কেন?", hi: "स्कूल में कौन-सा विषय पसंद था? क्यों?", starters: ["In school I loved…", "The teacher made it…"] },
  { id: "hero-person", en: "Who inspires you the most? What do they do?", bn: "কে আপনাকে সবচেয়ে অনুপ্রাণিত করে? তারা কী করেন?", hi: "आपको सबसे ज़्यादा प्रेरणा कौन देता है? वे क्या करते हैं?", starters: ["… inspires me", "They taught me…"] },
  { id: "gadget-life", en: "Which gadget could you NOT live without? Why?", bn: "কোন যন্ত্র ছাড়া আপনি থাকতে পারবেন না? কেন?", hi: "किस गैजेट के बिना आप नहीं रह सकते? क्यों?", starters: ["I cannot live without…", "I need it to…"] },
  { id: "future-self", en: "Where do you see yourself in five years?", bn: "পাঁচ বছর পর নিজেকে কোথায় দেখতে চান?", hi: "पाँच साल बाद आप खुद को कहाँ देखते हैं?", starters: ["In five years I…", "I hope I will…"] },
];

/** Deterministic pick for a Dhaka day ("2026-11-02"). */
export function promptForDay(day: string): ChallengePrompt {
  let h = 0;
  for (let i = 0; i < day.length; i++) h = (h * 31 + day.charCodeAt(i)) % 1_000_003;
  return CHALLENGE_PROMPTS[h % CHALLENGE_PROMPTS.length]!;
}

export function promptById(id: string): ChallengePrompt | null {
  return CHALLENGE_PROMPTS.find((p) => p.id === id) ?? null;
}
