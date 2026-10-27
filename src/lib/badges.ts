// ─── Profile badges + avatars (D34, ROADMAP-60) — PURE, no db ───────────────
// Badge definitions live here; the SERVER computes earned/progress from real
// DB counts (src/app/api/profile/route.ts) so badges can never be claimed by
// the client. Every badge is derived from data the product already collects.

export type BadgeId =
  | "first_call" // completed 1 speaking session
  | "call_10" // 10 speaking sessions
  | "streak_7" // 7-day activity streak (longest)
  | "words_25" // 25 words saved in the wordbook
  | "quiz_20" // 20 practice logs (quizzes)
  | "xp_500" // 500 total XP
  | "lesson_10" // 10 grammar lessons marked done
  | "challenge_5"; // 5 daily-challenge submissions

export interface BadgeDef {
  id: BadgeId;
  /** Lucide icon name rendered by the client (kept as a string — PURE file). */
  icon: "phone-call" | "flame" | "book-marked" | "list-checks" | "sparkles" | "graduation-cap" | "message-circle-heart" | "target";
  target: number;
  /** i18n key suffix under community.profile.badges.<id>.* (name/desc). */
}

export const BADGES: BadgeDef[] = [
  { id: "first_call", icon: "phone-call", target: 1 },
  { id: "call_10", icon: "phone-call", target: 10 },
  { id: "streak_7", icon: "flame", target: 7 },
  { id: "words_25", icon: "book-marked", target: 25 },
  { id: "quiz_20", icon: "list-checks", target: 20 },
  { id: "lesson_10", icon: "graduation-cap", target: 10 },
  { id: "xp_500", icon: "sparkles", target: 500 },
  { id: "challenge_5", icon: "message-circle-heart", target: 5 },
];

export interface BadgeProgress {
  id: BadgeId;
  earned: boolean;
  value: number; // current count
  target: number;
}

/** PURE: build the badge grid from raw counters. */
export function computeBadges(counts: {
  sessions: number;
  streakLongest: number;
  words: number;
  quizzes: number;
  lessons: number;
  xpTotal: number;
  challenges: number;
}): BadgeProgress[] {
  const valueOf: Record<BadgeId, number> = {
    first_call: counts.sessions,
    call_10: counts.sessions,
    streak_7: counts.streakLongest,
    words_25: counts.words,
    quiz_20: counts.quizzes,
    lesson_10: counts.lessons,
    xp_500: counts.xpTotal,
    challenge_5: counts.challenges,
  };
  return BADGES.map((b) => ({
    id: b.id,
    earned: valueOf[b.id] >= b.target,
    value: valueOf[b.id],
    target: b.target,
  }));
}

// ─── Avatars ─────────────────────────────────────────────────────────────────
// Emoji avatars (no uploads — privacy + zero storage). "" = auto: derived
// from the learner's level so every profile has a face from day one.

export const AVATARS = [
  "student", "tiger", "rabbit", "fox", "owl", "panda",
  "lion", "penguin", "sun-flower", "rocket", "star", "books",
] as const;
export type AvatarKey = (typeof AVATARS)[number] | "";

/** The emoji each key renders (single source — client + server agree). */
export const AVATAR_EMOJI: Record<string, string> = {
  student: "🧑‍🎓",
  tiger: "🐯",
  rabbit: "🐰",
  fox: "🦊",
  owl: "🦉",
  panda: "🐼",
  lion: "🦁",
  penguin: "🐧",
  "sun-flower": "🌻",
  rocket: "🚀",
  star: "⭐",
  books: "📚",
};

/** Auto avatar when none chosen — stable per level. */
export function autoAvatar(level: string | null | undefined): string {
  switch (level) {
    case "intermediate":
      return "owl";
    case "advanced":
      return "lion";
    default:
      return "student";
  }
}

export function avatarEmoji(key: string | null | undefined, level?: string | null): string {
  const k = key && AVATAR_EMOJI[key] ? key : autoAvatar(level);
  return AVATAR_EMOJI[k] ?? AVATAR_EMOJI.student!;
}
