// ─── AI-partner roleplay scenarios (D16, ROADMAP-60.md) ─────────────────────
// PURE module — five goal-based roleplays where Raha plays a defined
// character and the learner has a concrete mission. Used by the
// chat-partner AI action (roleplay prompt variant) and by AiPartner's UI
// (mission banner + starter phrases + opener without any API call).

export type ScenarioId = "interview" | "restaurant" | "doctor" | "airport" | "support";

export interface Scenario {
  id: ScenarioId;
  /** Character the AI plays (English — injected into the model prompt). */
  role: string;
  /** The AI's opening line — spoken first, zero API cost (static). */
  opener: string;
  /** The learner's concrete goal for the conversation (trilingual). */
  mission: { en: string; bn: string; hi: string };
  /** Tap-to-send starter phrases so the learner never stares at a blank box. */
  starters: string[];
  /** Emoji-ish icon key the UI maps to a Lucide icon. */
  icon: "briefcase" | "utensils" | "stethoscope" | "plane" | "headset";
}

export const SCENARIOS: Scenario[] = [
  {
    id: "interview",
    role:
      "You are Ms. Carter, a friendly but professional hiring manager at a growing tech company, interviewing {name} for an entry-level position. Ask one interview question at a time (introduce yourself → strengths → a challenge → why this company → their questions), react naturally to each answer, and stay in character the whole time.",
    opener:
      "Hi, thanks for coming in today! I'm Ms. Carter. Let's start easy — could you tell me a little about yourself?",
    mission: {
      en: "Introduce yourself, describe one strength with an example, and ask one question about the job.",
      bn: "নিজেকে পরিচয় করাও, একটি দক্ষতা উদাহরণসহ বলো, আর চাকরি নিয়ে একটি প্রশ্ন করো।",
      hi: "अपना परिचय दें, एक ताक़त उदाहरण से बताएँ, और नौकरी के बारे में एक सवाल पूछें।",
    },
    starters: [
      "Thank you for having me. I'm a quick learner and I enjoy solving problems.",
      "Could you tell me more about the team I would join?",
      "In my last project, I learned to manage my time well.",
    ],
    icon: "briefcase",
  },
  {
    id: "restaurant",
    role:
      "You are Leo, a cheerful waiter at an Italian restaurant called Bella Vista. Greet {name}, take their order, recommend dishes when asked, and handle small problems (a wrong dish, asking for the bill) naturally. Stay in character.",
    opener:
      "Good evening! Welcome to Bella Vista. Here's our menu for today — can I start you off with something to drink?",
    mission: {
      en: "Order a full meal (drink + main), ask about one dish, and ask for the bill politely.",
      bn: "পুরো খাবার অর্ডার করো (পানীয় + মেইন), একটি খাবার সম্পর্কে জিজ্ঞেস করো, আর ভদ্রভাবে বিল চাও।",
      hi: "पूरा खाना ऑर्डर करें (पेय + मुख्य), एक व्यंजन के बारे में पूछें, और विनम्रता से बिल माँगें।",
    },
    starters: [
      "Could I see the menu, please?",
      "What do you recommend from the pasta section?",
      "Could we have the bill, please?",
    ],
    icon: "utensils",
  },
  {
    id: "doctor",
    role:
      "You are Dr. Rahman, a patient doctor at a walk-in clinic. Ask {name} about their symptoms one question at a time, give simple advice, and explain next steps clearly in everyday words. Stay in character and keep it reassuring.",
    opener:
      "Hello, come in and have a seat. I'm Dr. Rahman. So, what seems to be the problem today?",
    mission: {
      en: "Describe two symptoms, say when they started, and understand the doctor's advice.",
      bn: "দুটি উপসর্গ বর্ণনা করো, কখনো শুরু হয়েছে বলো, আর ডাক্তারের পরামর্শ বুঝে নাও।",
      hi: "दो लक्षण बताएँ, कब शुरू हुए बताएँ, और डॉक्टर की सलाह समझें।",
    },
    starters: [
      "I've had a headache and a mild fever since yesterday.",
      "It gets worse at night.",
      "What should I do to feel better?",
    ],
    icon: "stethoscope",
  },
  {
    id: "airport",
    role:
      "You are Sam, a helpful check-in agent at an international airport. Help {name} with their flight: seat preference, baggage weight, a gate change or a small delay. Keep instructions short and clear. Stay in character.",
    opener:
      "Good morning! Passport and booking, please… thank you. Flying to Dhaka today — any seat preference, window or aisle?",
    mission: {
      en: "Check in, ask about your baggage allowance, and handle a gate-change announcement.",
      bn: "চেক-ইন করো, ব্যাগেজ-ভাতা জিজ্ঞেস করো, আর গেট-বদলের ঘোষণা সামলাও।",
      hi: "चेक-इन करें, बैगेज भत्ता पूछें, और गेट-बदलाव की घोषणा संभालें।",
    },
    starters: [
      "Here's my passport and booking reference.",
      "How many bags can I check in for free?",
      "Excuse me, which gate is the flight leaving from?",
    ],
    icon: "plane",
  },
  {
    id: "support",
    role:
      "You are Alex, a calm customer-support agent for an internet provider. {name} has a problem with their connection. Walk them through simple troubleshooting (router restart, cable check), apologize once politely, and offer a small compensation at the end. Stay in character.",
    opener:
      "Thanks for calling BrightNet support, this is Alex. I understand your internet isn't working — could you tell me what exactly is happening?",
    mission: {
      en: "Explain your problem clearly, follow one troubleshooting step, and ask for a discount or a technician.",
      bn: "সমস্যাটা পরিষ্কারভাবে ব্যাখ্যা করো, একটি ট্রাবলশুটিং-ধাপ মেনে চলো, আর ছাড় বা টেকনিশিয়ান চাও।",
      hi: "समस्या साफ़ बताएँ, एक ट्रबलशूटिंग स्टेप आज़माएँ, और छूट या टेक्नीशियन माँगें।",
    },
    starters: [
      "My internet has been down since this morning.",
      "I already restarted the router but it didn't help.",
      "Could I get a discount for the days it wasn't working?",
    ],
    icon: "headset",
  },
];

export function scenarioById(id: unknown): Scenario | undefined {
  return SCENARIOS.find((s) => s.id === id);
}

/** Fill the {name} placeholder in a role/opener safely (≤24 chars). */
export function withName(template: string, name: string): string {
  const safe = (name || "the learner").slice(0, 24).replace(/[\r\n]/g, " ");
  return template.replace(/\{name\}/g, safe);
}
