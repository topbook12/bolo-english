// Local types for the vocabulary section.
import type { DailyWord } from "@/lib/types";

// A word saved in the user's wordbook (GET /api/vocab returns id + DailyWord fields)
export interface SavedWord extends DailyWord {
  id: string;
}
