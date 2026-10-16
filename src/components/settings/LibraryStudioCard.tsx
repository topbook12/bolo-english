"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  KeyRound,
  LibraryBig,
  Loader2,
  Plus,
  RefreshCw,
  Trash2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiGet } from "@/lib/client-api";
import {
  LIBRARY_LEVELS,
  LIBRARY_LISTENING_CATEGORIES,
  pickTri,
  type LibraryGrammarData,
  type LibraryGrammarExample,
  type LibraryGrammarMeta,
  type LibraryGrammarSection,
  type LibraryLevel,
  type LibraryListeningCategory,
  type LibraryListeningData,
  type LibraryListeningEntry,
  type LibraryListeningQuiz,
  type LibraryListeningVocab,
  type LibraryVocabData,
  type LibraryVocabEntry,
  type LibraryVocabExample,
  type TriText,
} from "@/lib/library-types";

/* ── Owner-authored Content Studio ────────────────────────────────────────
 * The site owner authors vocabulary / grammar / listening stories here.
 * Bengali is the primary authoring language — en/hi fields are optional and
 * fall back to the Bengali value, so a lone owner can fill one column.
 * Admin token is shared with StoragePoolCard/TurnPoolCard (bolo.storageAdmin).
 * ──────────────────────────────────────────────────────────────────────── */

type LibraryKind = "vocab" | "grammar" | "listening";

const TOKEN_KEY = "bolo.storageAdmin";

const VOCAB_CATEGORIES = ["general", "daily", "work", "travel", "academic"] as const;

/** TriText with bn value copied into en/hi — the documented bn-fallback rule. */
const tri = (v: string): TriText => ({ bn: v, en: v, hi: v });

/** Parse a unit form field: 0-99, fallback to the provided default. */
const unitNum = (v: string, fallback: number): number => {
  const n = Math.floor(Number(v));
  return Number.isFinite(n) && n >= 0 && n <= 99 ? n : fallback;
};

const splitList = (v: string): string[] =>
  v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

/** "English sentence = বাংলা অনুবাদ" — one pair per line (" = " or "="). */
function parseExamples(text: string): LibraryVocabExample[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const i = line.indexOf("=");
      if (i === -1) return { en: line, bn: "" };
      return { en: line.slice(0, i).trim(), bn: line.slice(i + 1).trim() };
    })
    .filter((e) => e.en.length > 0);
}

/**
 * Sections textarea → LibraryGrammarSection[]:
 *   "## heading" line starts a section; "wrong => right => note" lines become
 *   examples (max 3 parts); any other non-empty line appends to the body.
 * Lines before the first "##" land in an implicit untitled section.
 */
function parseGrammarSections(text: string): LibraryGrammarSection[] {
  const sections: LibraryGrammarSection[] = [];
  let cur: LibraryGrammarSection | null = null;
  const ensure = () => {
    if (!cur) {
      cur = { heading: tri(""), body: tri(""), examples: [] };
      sections.push(cur);
    }
    return cur;
  };
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("#")) {
      cur = { heading: tri(line.replace(/^#+\s*/, "")), body: tri(""), examples: [] };
      sections.push(cur);
      continue;
    }
    if (line.includes("=>")) {
      const parts = line.split("=>").map((p) => p.trim());
      const ex: LibraryGrammarExample = {
        wrong: parts[0] ?? "",
        right: parts[1] ?? "",
        note: tri(parts.slice(2).join(" => ")),
      };
      ensure().examples.push(ex);
      continue;
    }
    const s = ensure();
    s.body = tri(s.body?.bn ? `${s.body.bn}\n${line}` : line);
  }
  return sections;
}

/** Story paragraphs — split on one or more blank lines. */
function parseParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** "word = বাংলা অর্থ = English example" — example optional. */
function parseListenVocab(text: string): LibraryListeningVocab[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("=").map((p) => p.trim());
      return { word: parts[0] ?? "", meaning: tri(parts[1] ?? ""), example: parts[2] ?? "" };
    })
    .filter((v) => v.word.length > 0);
}

/** Quiz lines: question | opt1 | opt2 | opt3 | opt4 | answer(0-3) | explain? */
function parseListenQuiz(text: string): { quiz: LibraryListeningQuiz[]; badLine: number | null } {
  const quiz: LibraryListeningQuiz[] = [];
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split("|").map((p) => p.trim());
    const answer = Number(parts[5]);
    const options = parts.slice(1, 5);
    const bad =
      parts.length < 6 ||
      !parts[0] ||
      options.some((o) => !o) ||
      !Number.isInteger(answer) ||
      answer < 0 ||
      answer > 3;
    if (bad) return { quiz, badLine: i + 1 };
    quiz.push({
      question: tri(parts[0]),
      options: options.map((o) => tri(o)),
      answer,
      explain: tri(parts[6] ?? ""),
    });
  }
  return { quiz, badLine: null };
}

/* ── Form states ── */

interface VocabFormState {
  word: string;
  level: LibraryLevel;
  category: (typeof VOCAB_CATEGORIES)[number];
  unit: string;
  pronunciation: string;
  partOfSpeech: string;
  meaningBn: string;
  meaningEn: string;
  meaningHi: string;
  englishMeaning: string;
  examples: string;
  tipBn: string;
  synonyms: string;
  antonyms: string;
}
const emptyVocabForm = (): VocabFormState => ({
  word: "",
  level: "beginner",
  category: "general",
  unit: "1",
  pronunciation: "",
  partOfSpeech: "",
  meaningBn: "",
  meaningEn: "",
  meaningHi: "",
  englishMeaning: "",
  examples: "",
  tipBn: "",
  synonyms: "",
  antonyms: "",
});

interface GrammarFormState {
  topic: string;
  level: LibraryLevel;
  title: string;
  unit: string;
  introBn: string;
  sectionsText: string;
  tipsText: string;
}
const emptyGrammarForm = (): GrammarFormState => ({
  topic: "",
  level: "beginner",
  title: "",
  unit: "1",
  introBn: "",
  sectionsText: "",
  tipsText: "",
});

interface ListenFormState {
  titleBn: string;
  titleEn: string;
  level: LibraryLevel;
  category: LibraryListeningCategory;
  minutes: string;
  unit: string;
  summaryBn: string;
  paragraphsText: string;
  vocabText: string;
  quizText: string;
}
const emptyListenForm = (): ListenFormState => ({
  titleBn: "",
  titleEn: "",
  level: "beginner",
  category: "daily",
  minutes: "2",
  unit: "0",
  summaryBn: "",
  paragraphsText: "",
  vocabText: "",
  quizText: "",
});

/* Shared input styling — 44px touch targets, compact type. */
const FIELD = "min-h-11 text-sm";
const LABEL_CLS = "text-xs font-semibold text-muted-foreground";
const HINT_CLS = "text-[11px] leading-snug text-muted-foreground break-words";

export default function LibraryStudioCard() {
  const t = useTranslations("settings");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const { toast } = useToast();

  const [token, setToken] = useState("");
  const [kind, setKind] = useState<LibraryKind>("vocab");
  const [listLoading, setListLoading] = useState(false);
  const [listError, setListError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [vocabList, setVocabList] = useState<LibraryVocabEntry[]>([]);
  const [grammarList, setGrammarList] = useState<LibraryGrammarMeta[]>([]);
  const [listenList, setListenList] = useState<LibraryListeningEntry[]>([]);

  const [vf, setVf] = useState<VocabFormState>(emptyVocabForm);
  const [gf, setGf] = useState<GrammarFormState>(emptyGrammarForm);
  const [lf, setLf] = useState<ListenFormState>(emptyListenForm);

  useEffect(() => {
    setToken(localStorage.getItem(TOKEN_KEY) ?? "");
  }, []);

  const load = useCallback(async (k: LibraryKind) => {
    setListLoading(true);
    setListError("");
    try {
      const data = await apiGet<{ items: unknown[] }>(`/api/library?kind=${k}`);
      const items = Array.isArray(data.items) ? data.items : [];
      if (k === "vocab") setVocabList(items as LibraryVocabEntry[]);
      else if (k === "grammar") setGrammarList(items as LibraryGrammarMeta[]);
      else setListenList(items as LibraryListeningEntry[]);
    } catch (e) {
      setListError((e as Error).message);
    } finally {
      setListLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(kind);
  }, [kind, load]);

  const saveToken = () => {
    localStorage.setItem(TOKEN_KEY, token.trim());
    toast({ title: t("studio.tokenSaved") });
  };

  const needToken = () => {
    if (!token.trim()) {
      toast({ title: t("studio.needToken"), variant: "destructive" });
      return true;
    }
    return false;
  };

  /* POST — upsert with x-admin-token (server errors arrive pre-localized). */
  const postEntry = async (k: LibraryKind, entry: Record<string, unknown>) => {
    if (needToken()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/library", {
        method: "POST",
        headers: { "content-type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ kind: k, entry }),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !json?.ok) throw new Error(json?.error || t("studio.failed"));
      toast({ title: t("studio.saved") });
      if (k === "vocab") setVf(emptyVocabForm());
      else if (k === "grammar") setGf(emptyGrammarForm());
      else setLf(emptyListenForm());
      void load(k);
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const del = async (id: string) => {
    if (needToken()) return;
    if (!window.confirm(t("studio.confirmDelete"))) return;
    setDeletingId(id);
    try {
      const res = await fetch(
        `/api/library?kind=${kind}&id=${encodeURIComponent(id)}`,
        { method: "DELETE", headers: { "x-admin-token": token } }
      );
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !json?.ok) throw new Error(json?.error || t("studio.failed"));
      toast({ title: t("studio.deleted") });
      void load(kind);
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setDeletingId(null);
    }
  };

  /* ── Submits: client-validate → build entry → POST ── */

  const fail = (msg: string) => toast({ title: msg, variant: "destructive" });

  const submitVocab = () => {
    const word = vf.word.trim();
    const meaningBn = vf.meaningBn.trim();
    const examples = parseExamples(vf.examples);
    if (!word) return fail(t("studio.errWord"));
    if (!meaningBn) return fail(t("studio.errMeaning"));
    if (examples.length === 0) return fail(t("studio.errExamples"));
    const data: LibraryVocabData = {
      pronunciation: vf.pronunciation.trim(),
      partOfSpeech: vf.partOfSpeech.trim(),
      meaning: {
        bn: meaningBn,
        en: vf.meaningEn.trim() || meaningBn,
        hi: vf.meaningHi.trim() || meaningBn,
      },
      englishMeaning: vf.englishMeaning.trim(),
      examples,
      tip: tri(vf.tipBn.trim()),
      synonyms: splitList(vf.synonyms),
      antonyms: splitList(vf.antonyms),
    };
    void postEntry("vocab", { word, level: vf.level, category: vf.category, unit: unitNum(vf.unit, 1), data });
  };

  const submitGrammar = () => {
    const topic = gf.topic.trim();
    const title = gf.title.trim();
    const sections = parseGrammarSections(gf.sectionsText);
    if (!topic) return fail(t("studio.errTopic"));
    if (!title) return fail(t("studio.errTitle"));
    if (
      sections.length === 0 ||
      !sections.some((s) => (s.body?.bn ?? s.points?.[0]?.bn ?? "").trim().length > 0 || s.examples.length > 0)
    ) {
      return fail(t("studio.errSections"));
    }
    const data: LibraryGrammarData = {
      title: tri(title),
      intro: tri(gf.introBn.trim()),
      sections,
      tips: gf.tipsText
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .map(tri),
    };
    void postEntry("grammar", { topic, level: gf.level, title, unit: unitNum(gf.unit, 1), data });
  };

  const submitListening = () => {
    const titleBn = lf.titleBn.trim();
    const summaryBn = lf.summaryBn.trim();
    const paragraphs = parseParagraphs(lf.paragraphsText);
    if (!titleBn) return fail(t("studio.errTitleBn"));
    if (!summaryBn) return fail(t("studio.errSummary"));
    if (paragraphs.length === 0) return fail(t("studio.errParagraphs"));
    const quizText = lf.quizText.trim();
    let quiz: LibraryListeningQuiz[] = [];
    if (quizText) {
      const parsed = parseListenQuiz(quizText);
      if (parsed.badLine !== null) {
        return fail(`${t("studio.errQuizLine")} #${parsed.badLine}`);
      }
      quiz = parsed.quiz;
    }
    const data: LibraryListeningData = {
      title: { bn: titleBn, en: lf.titleEn.trim() || titleBn, hi: titleBn },
      summary: tri(summaryBn),
      paragraphs,
      vocabulary: parseListenVocab(lf.vocabText),
      quiz,
    };
    const minutes = Math.max(1, Math.min(60, Number(lf.minutes) || 2));
    // slug is derived server-side from title.en/bn when blank — same title = same slug = update.
    void postEntry("listening", { level: lf.level, category: lf.category, minutes, unit: unitNum(lf.unit, 0), data });
  };

  /* ── Render helpers ── */

  const levelSelect = (
    id: string,
    value: LibraryLevel,
    onChange: (v: LibraryLevel) => void,
    label: string
  ) => (
    <div className="space-y-1">
      <Label htmlFor={id} className={LABEL_CLS}>
        {label}
      </Label>
      <Select value={value} onValueChange={(v) => onChange(v as LibraryLevel)}>
        <SelectTrigger id={id} className={`${FIELD} w-full`} aria-label={label}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {LIBRARY_LEVELS.map((lv) => (
            <SelectItem key={lv} value={lv}>
              {tCommon(`level.${lv}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const delBtn = (id: string) => (
    <Button
      size="icon"
      variant="outline"
      className="h-11 w-11 shrink-0 rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive"
      onClick={() => void del(id)}
      disabled={Boolean(deletingId)}
      aria-label={t("studio.del")}
    >
      {deletingId === id ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        <Trash2 className="h-4 w-4" aria-hidden />
      )}
    </Button>
  );

  const listTitle =
    kind === "vocab"
      ? t("studio.listVocab")
      : kind === "grammar"
        ? t("studio.listGrammar")
        : t("studio.listListening");
  const rowCount =
    kind === "vocab"
      ? vocabList.length
      : kind === "grammar"
        ? grammarList.length
        : listenList.length;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LibraryBig className="h-5 w-5 text-primary" aria-hidden />
          {t("studio.title")}
        </CardTitle>
        <CardDescription>{t("studio.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* ── Admin token (shared with Storage/TURN cards) ── */}
        <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <KeyRound className="h-4 w-4 text-amber-600 dark:text-amber-400" aria-hidden />
            {t("studio.token")}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">{t("studio.tokenHint")}</p>
          <div className="mt-2 flex gap-2">
            <Input
              value={token}
              onChange={(e) => setToken(e.target.value)}
              type="password"
              className={`${FIELD} flex-1`}
              autoComplete="off"
              aria-label={t("studio.token")}
            />
            <Button
              size="sm"
              variant="outline"
              className="min-h-11 rounded-full px-4 text-xs font-semibold"
              onClick={saveToken}
            >
              {tCommon("save")}
            </Button>
          </div>
        </div>

        {/* ── Kind tabs ── */}
        <Tabs value={kind} onValueChange={(v) => setKind(v as LibraryKind)}>
          <TabsList className="grid h-auto w-full grid-cols-3">
            <TabsTrigger value="vocab" className="min-h-11 px-2 text-xs sm:text-sm">
              {t("studio.tabVocab")}
            </TabsTrigger>
            <TabsTrigger value="grammar" className="min-h-11 px-2 text-xs sm:text-sm">
              {t("studio.tabGrammar")}
            </TabsTrigger>
            <TabsTrigger value="listening" className="min-h-11 px-2 text-xs sm:text-sm">
              {t("studio.tabListening")}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* ── Existing entries ── */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold">
              {listTitle}{" "}
              <span className="text-xs font-normal text-muted-foreground">({rowCount})</span>
            </p>
            <Button
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full"
              onClick={() => void load(kind)}
              disabled={listLoading}
              aria-label={t("studio.refresh")}
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${listLoading ? "animate-spin" : ""}`}
                aria-hidden
              />
            </Button>
          </div>
          <div className="mt-2">
            {listError ? (
              <p className="text-sm text-destructive">{listError}</p>
            ) : listLoading && rowCount === 0 ? (
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> {t("studio.loading")}
              </p>
            ) : rowCount === 0 ? (
              <p className="text-xs italic text-muted-foreground">{t("studio.empty")}</p>
            ) : (
              <div className="nice-scroll max-h-96 space-y-2 overflow-y-auto pr-1">
                {kind === "vocab" &&
                  vocabList.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{it.word}</p>
                        <p className="truncate text-[11px] text-muted-foreground">
                          {t(`studio.cat.${it.category}`)}
                          {it.data.pronunciation ? ` · ${it.data.pronunciation}` : ""}
                        </p>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-[11px]">
                        {tCommon(`level.${it.level}`)}
                      </Badge>
                      {delBtn(it.id)}
                    </div>
                  ))}
                {kind === "grammar" &&
                  grammarList.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{it.title || it.topic}</p>
                        <p className="truncate text-[11px] text-muted-foreground">{it.topic}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-[11px]">
                        {tCommon(`level.${it.level}`)}
                      </Badge>
                      {delBtn(it.id)}
                    </div>
                  ))}
                {kind === "listening" &&
                  listenList.map((it) => (
                    <div
                      key={it.id}
                      className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                          {pickTri(it.data.title, locale)}
                        </p>
                        <p className="truncate text-[11px] text-muted-foreground">
                          {t(`studio.cat.${it.category}`)} · {it.minutes} {t("studio.min")}
                        </p>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-[11px]">
                        {tCommon(`level.${it.level}`)}
                      </Badge>
                      {delBtn(it.id)}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Vocabulary form ── */}
        {kind === "vocab" && (
          <div className="space-y-3 rounded-xl border border-border/60 bg-muted/40 p-3.5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-1 sm:col-span-2">
                <Label htmlFor="st-vword" className={LABEL_CLS}>
                  {t("studio.vWord")}
                </Label>
                <Input
                  id="st-vword"
                  value={vf.word}
                  onChange={(e) => setVf((f) => ({ ...f, word: e.target.value }))}
                  className={FIELD}
                  placeholder="relax"
                  autoComplete="off"
                />
                <p className={HINT_CLS}>{t("studio.vWordHint")}</p>
              </div>
              {levelSelect(
                "st-vlevel",
                vf.level,
                (v) => setVf((f) => ({ ...f, level: v })),
                t("studio.vLevel")
              )}
              <div className="space-y-1">
                <Label htmlFor="st-vunit" className={LABEL_CLS}>
                  {t("studio.vUnit")}
                </Label>
                <Input
                  id="st-vunit"
                  type="number"
                  min={0}
                  max={99}
                  value={vf.unit}
                  onChange={(e) => setVf((f) => ({ ...f, unit: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-vcat" className={LABEL_CLS}>
                {t("studio.vCategory")}
              </Label>
              <Select
                value={vf.category}
                onValueChange={(v) => setVf((f) => ({ ...f, category: v as VocabFormState["category"] }))}
              >
                <SelectTrigger id="st-vcat" className={`${FIELD} w-full`} aria-label={t("studio.vCategory")}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VOCAB_CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {t(`studio.cat.${c}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="st-vpron" className={LABEL_CLS}>
                  {t("studio.vPron")}
                </Label>
                <Input
                  id="st-vpron"
                  value={vf.pronunciation}
                  onChange={(e) => setVf((f) => ({ ...f, pronunciation: e.target.value }))}
                  className={FIELD}
                  placeholder={t("studio.vPronPh")}
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-vpos" className={LABEL_CLS}>
                  {t("studio.vPos")}
                </Label>
                <Input
                  id="st-vpos"
                  value={vf.partOfSpeech}
                  onChange={(e) => setVf((f) => ({ ...f, partOfSpeech: e.target.value }))}
                  className={FIELD}
                  placeholder={t("studio.vPosPh")}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-1">
                <Label htmlFor="st-vmbn" className={LABEL_CLS}>
                  {t("studio.vMeaningBn")}
                </Label>
                <Input
                  id="st-vmbn"
                  value={vf.meaningBn}
                  onChange={(e) => setVf((f) => ({ ...f, meaningBn: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-vmen" className={LABEL_CLS}>
                  {t("studio.vMeaningEn")}
                </Label>
                <Input
                  id="st-vmen"
                  value={vf.meaningEn}
                  onChange={(e) => setVf((f) => ({ ...f, meaningEn: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-vmhi" className={LABEL_CLS}>
                  {t("studio.vMeaningHi")}
                </Label>
                <Input
                  id="st-vmhi"
                  value={vf.meaningHi}
                  onChange={(e) => setVf((f) => ({ ...f, meaningHi: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-veng" className={LABEL_CLS}>
                {t("studio.vEngMeaning")}
              </Label>
              <Input
                id="st-veng"
                value={vf.englishMeaning}
                onChange={(e) => setVf((f) => ({ ...f, englishMeaning: e.target.value }))}
                className={FIELD}
                autoComplete="off"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-vex" className={LABEL_CLS}>
                {t("studio.vExamples")}
              </Label>
              <Textarea
                id="st-vex"
                rows={3}
                value={vf.examples}
                onChange={(e) => setVf((f) => ({ ...f, examples: e.target.value }))}
                placeholder={t("studio.vExamplesPh")}
                className="text-sm"
              />
              <p className={HINT_CLS}>{t("studio.vExamplesHint")}</p>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-vtip" className={LABEL_CLS}>
                {t("studio.vTip")}
              </Label>
              <Textarea
                id="st-vtip"
                rows={2}
                value={vf.tipBn}
                onChange={(e) => setVf((f) => ({ ...f, tipBn: e.target.value }))}
                placeholder={t("studio.vTipPh")}
                className="text-sm"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="st-vsyn" className={LABEL_CLS}>
                  {t("studio.vSynonyms")}
                </Label>
                <Input
                  id="st-vsyn"
                  value={vf.synonyms}
                  onChange={(e) => setVf((f) => ({ ...f, synonyms: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-vant" className={LABEL_CLS}>
                  {t("studio.vAntonyms")}
                </Label>
                <Input
                  id="st-vant"
                  value={vf.antonyms}
                  onChange={(e) => setVf((f) => ({ ...f, antonyms: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
            </div>
            <Button
              onClick={submitVocab}
              disabled={submitting}
              className="min-h-11 w-full gap-1.5 rounded-xl text-sm font-semibold"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Plus className="h-4 w-4" aria-hidden />
              )}
              {submitting ? t("studio.saving") : t("studio.save")}
            </Button>
          </div>
        )}

        {/* ── Grammar form ── */}
        {kind === "grammar" && (
          <div className="space-y-3 rounded-xl border border-border/60 bg-muted/40 p-3.5">
            <p className={HINT_CLS}>{t("studio.gFallback")}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="st-gtopic" className={LABEL_CLS}>
                  {t("studio.gTopic")}
                </Label>
                <Input
                  id="st-gtopic"
                  value={gf.topic}
                  onChange={(e) => setGf((f) => ({ ...f, topic: e.target.value }))}
                  className={FIELD}
                  placeholder="present-simple"
                  autoComplete="off"
                />
                <p className={HINT_CLS}>{t("studio.gTopicHint")}</p>
              </div>
              {levelSelect(
                "st-glevel",
                gf.level,
                (v) => setGf((f) => ({ ...f, level: v })),
                t("studio.gLevel")
              )}
              <div className="space-y-1">
                <Label htmlFor="st-gunit" className={LABEL_CLS}>
                  {t("studio.gUnit")}
                </Label>
                <Input
                  id="st-gunit"
                  type="number"
                  min={0}
                  max={99}
                  value={gf.unit}
                  onChange={(e) => setGf((f) => ({ ...f, unit: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-gtitle" className={LABEL_CLS}>
                {t("studio.gTitle")}
              </Label>
              <Input
                id="st-gtitle"
                value={gf.title}
                onChange={(e) => setGf((f) => ({ ...f, title: e.target.value }))}
                className={FIELD}
                autoComplete="off"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-gintro" className={LABEL_CLS}>
                {t("studio.gIntro")}
              </Label>
              <Textarea
                id="st-gintro"
                rows={2}
                value={gf.introBn}
                onChange={(e) => setGf((f) => ({ ...f, introBn: e.target.value }))}
                className="text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-gsec" className={LABEL_CLS}>
                {t("studio.gSections")}
              </Label>
              <Textarea
                id="st-gsec"
                rows={8}
                value={gf.sectionsText}
                onChange={(e) => setGf((f) => ({ ...f, sectionsText: e.target.value }))}
                placeholder={t("studio.gSectionsPh")}
                className="text-sm"
              />
              <p className={HINT_CLS}>{t("studio.gSectionsHint")}</p>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-gtips" className={LABEL_CLS}>
                {t("studio.gTips")}
              </Label>
              <Textarea
                id="st-gtips"
                rows={2}
                value={gf.tipsText}
                onChange={(e) => setGf((f) => ({ ...f, tipsText: e.target.value }))}
                placeholder={t("studio.gTipsPh")}
                className="text-sm"
              />
            </div>
            <Button
              onClick={submitGrammar}
              disabled={submitting}
              className="min-h-11 w-full gap-1.5 rounded-xl text-sm font-semibold"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Plus className="h-4 w-4" aria-hidden />
              )}
              {submitting ? t("studio.saving") : t("studio.save")}
            </Button>
          </div>
        )}

        {/* ── Listening form ── */}
        {kind === "listening" && (
          <div className="space-y-3 rounded-xl border border-border/60 bg-muted/40 p-3.5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="st-ltbn" className={LABEL_CLS}>
                  {t("studio.lTitleBn")}
                </Label>
                <Input
                  id="st-ltbn"
                  value={lf.titleBn}
                  onChange={(e) => setLf((f) => ({ ...f, titleBn: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-lten" className={LABEL_CLS}>
                  {t("studio.lTitleEn")}
                </Label>
                <Input
                  id="st-lten"
                  value={lf.titleEn}
                  onChange={(e) => setLf((f) => ({ ...f, titleEn: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
                <p className={HINT_CLS}>{t("studio.lTitleHint")}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {levelSelect(
                "st-llevel",
                lf.level,
                (v) => setLf((f) => ({ ...f, level: v })),
                t("studio.lLevel")
              )}
              <div className="space-y-1">
                <Label htmlFor="st-lcat" className={LABEL_CLS}>
                  {t("studio.lCategory")}
                </Label>
                <Select
                  value={lf.category}
                  onValueChange={(v) => setLf((f) => ({ ...f, category: v as LibraryListeningCategory }))}
                >
                  <SelectTrigger id="st-lcat" className={`${FIELD} w-full`} aria-label={t("studio.lCategory")}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LIBRARY_LISTENING_CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {t(`studio.cat.${c}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-lmin" className={LABEL_CLS}>
                  {t("studio.lMinutes")}
                </Label>
                <Input
                  id="st-lmin"
                  type="number"
                  min={1}
                  max={60}
                  inputMode="numeric"
                  value={lf.minutes}
                  onChange={(e) => setLf((f) => ({ ...f, minutes: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="st-lunit" className={LABEL_CLS}>
                  {t("studio.lUnit")}
                </Label>
                <Input
                  id="st-lunit"
                  type="number"
                  min={0}
                  max={99}
                  value={lf.unit}
                  onChange={(e) => setLf((f) => ({ ...f, unit: e.target.value }))}
                  className={FIELD}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-lsum" className={LABEL_CLS}>
                {t("studio.lSummary")}
              </Label>
              <Textarea
                id="st-lsum"
                rows={2}
                value={lf.summaryBn}
                onChange={(e) => setLf((f) => ({ ...f, summaryBn: e.target.value }))}
                className="text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-lpar" className={LABEL_CLS}>
                {t("studio.lParagraphs")}
              </Label>
              <Textarea
                id="st-lpar"
                rows={6}
                value={lf.paragraphsText}
                onChange={(e) => setLf((f) => ({ ...f, paragraphsText: e.target.value }))}
                className="text-sm"
              />
              <p className={HINT_CLS}>{t("studio.lParagraphsHint")}</p>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-lvoc" className={LABEL_CLS}>
                {t("studio.lVocab")}
              </Label>
              <Textarea
                id="st-lvoc"
                rows={3}
                value={lf.vocabText}
                onChange={(e) => setLf((f) => ({ ...f, vocabText: e.target.value }))}
                className="text-sm"
              />
              <p className={HINT_CLS}>{t("studio.lVocabHint")}</p>
            </div>
            <div className="space-y-1">
              <Label htmlFor="st-lquiz" className={LABEL_CLS}>
                {t("studio.lQuiz")}
              </Label>
              <Textarea
                id="st-lquiz"
                rows={3}
                value={lf.quizText}
                onChange={(e) => setLf((f) => ({ ...f, quizText: e.target.value }))}
                className="text-sm"
              />
              <p className={HINT_CLS}>{t("studio.lQuizHint")}</p>
            </div>
            <Button
              onClick={submitListening}
              disabled={submitting}
              className="min-h-11 w-full gap-1.5 rounded-xl text-sm font-semibold"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                <Plus className="h-4 w-4" aria-hidden />
              )}
              {submitting ? t("studio.saving") : t("studio.save")}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
