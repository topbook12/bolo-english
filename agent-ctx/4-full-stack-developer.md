# Task 4 — full-stack-developer (grammar)

## Work record
- Studied `src/components/grammar/{shared.ts,LessonView.tsx,QuizPlayer.tsx}`, `src/components/sections/GrammarSection.tsx`, `messages/sections/grammar.{bn,en,hi}.json`; read-only inspection of `src/lib/types.ts` (GrammarLessonContent shape) and `src/app/api/ai/route.ts` (grammar-lesson/grammar-quiz prompts are Bangla-locked via BANGLA_RULE; payload only accepts topic/level).
- `src/components/grammar/shared.ts`: split topic meta into FOUNDATION_META (existing 12, ids unchanged for done-badge/cache stability) + ADVANCED_META (14 new C1 topics). New exports: `FOUNDATION_TOPICS`, `ADVANCED_TOPICS`, `TOPICS` (all 26, backward compatible), `TOPIC_GROUPS`, `TopicGroupKey`, `GrammarTopicGroup`, `GROUP_ACCENT` (emerald = foundation, amber = advanced), `ADVANCED_TINT_CYCLE`. Icons verified against installed lucide-react: ArrowDownUp, Shuffle, Split, WandSparkles, Combine, Workflow, Feather, MessagesSquare, GraduationCap, Ellipsis, Puzzle, SlidersHorizontal, History, Gauge.
- `src/components/sections/GrammarSection.tsx`: grouped topic grid — localized `grammar.groups.{foundation,advanced}` headings (h2, accent bar, localized count chip), grid extracted into `TopicGrid` component; card markup, done badges, progress stats unchanged.
- `src/components/grammar/LessonView.tsx`: explanation rendered prominent (emerald left-accent block, text-[15px]/leading-7/foreground-90); "right" example line enlarged; localized `grammar.lesson.langNote` with Languages icon shown only for non-bn locales (honest note: explanations are simple Bengali, examples English). No API/prompt changes possible within constraints.
- i18n (all 3 locales): added `grammar.groups.foundation/advanced`, 14 x `grammar.topics.<key>.{name,sub}`, `grammar.lesson.langNote`. Bengali primary + student-friendly; English/Hindi natural. JSON validity verified (26 topics/locale).
- Verification: `bunx tsc --noEmit` clean; `bun run lint` clean; dev.log clean recompiles.

## Files changed
- src/components/grammar/shared.ts
- src/components/sections/GrammarSection.tsx
- src/components/grammar/LessonView.tsx
- messages/sections/grammar.bn.json
- messages/sections/grammar.en.json
- messages/sections/grammar.hi.json
- worklog.md (appended Task ID 4 section)

## New topic keys
inversion, mixedConditionals, cleft, subjunctive, participleClauses, discourse, hedging, reportedSpeech, nominalisation, ellipsis, collocations, register, tenseAspect, precisionArticles

## Intentionally not done
- No /api/ai prompt edits (out of scope): AI lesson body stays Bangla-primary; true in-lesson EN/HI translation would need a new API feature/param.
- QuizPlayer untouched; no new deps; no db push; no dev server restart; no git actions.
