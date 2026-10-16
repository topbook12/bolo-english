// ─── Grammar seeds v4: point-form roadmap lessons ───
// Shared contract for all grammar-v4-*.ts seed files (Task 10).
// v4 = owner-mandated UX upgrade: every explanation becomes SCANNABLE
// bullet points (no paragraphs), every lesson gets a visible ROADMAP,
// sections carry emoji + lead + optional formula box / comparison table.
// Same TriText rule as v2/v3: Bengali primary, en + hi faithful.
import type { LibraryGrammarData, LibraryLevel } from "../../src/lib/library-types";

export interface SeedGrammarV4Entry {
  topic: string; // canonical topic id — MUST match the source v3/v2 entry exactly
  level: LibraryLevel;
  title: string; // keep the source title (only fix the level suffix if section split changed nothing)
  unit: number; // keep the source unit exactly (1-5 = path anchor, 0 = extra)
  /** Deterministic grid slot — set by the integration table, agents never invent it. */
  sortOrder: number;
  data: LibraryGrammarData;
}
