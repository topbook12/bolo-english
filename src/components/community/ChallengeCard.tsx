"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircleHeart, Send, Pencil, Sparkles, ThumbsUp, Heart, Flame, Flag, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { apiGet, apiPost, callAi } from "@/lib/client-api";
import { useDevice } from "@/hooks/use-device";
import { track } from "@/lib/track";
import { clientLocale } from "@/lib/api-i18n";
import { cn } from "@/lib/utils";

// ─── Daily sentence challenge (D32, ROADMAP-60) ─────────────────────────────
// One prompt per day (deterministic, free) → write 1–3 English sentences →
// submit (+12 XP, once/day) → optional BYOK AI feedback → peer reactions +
// report. Community feed is privacy-safe (first name + initial, server-side).

interface Prompt {
  id: string;
  en: string;
  bn: string;
  hi: string;
  starters: string[];
}

interface Feedback {
  score: number;
  strengths: string[];
  fixes: string[];
  improved: string;
}

interface FeedItem {
  id: string;
  name: string;
  level: string;
  avatar: string;
  mine: boolean;
  text: string;
  flagged: boolean;
  feedback: string | null;
  reactions: Record<string, number>;
  myReaction: string | null;
}

interface ChallengeData {
  day: string;
  prompt: Prompt;
  mine: { id: string; text: string; flagged: boolean; hidden: boolean; feedback: string | null } | null;
  feed: FeedItem[];
  participants: number;
}

const REACTIONS = [
  { key: "thumbs_up", icon: ThumbsUp },
  { key: "heart", icon: Heart },
  { key: "fire", icon: Flame },
];

export default function ChallengeCard() {
  const t = useTranslations("community.challenge");
  const { deviceId } = useDevice();
  const [data, setData] = useState<ChallengeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);
  const [fb, setFb] = useState<Feedback | null>(null);
  const [reportFor, setReportFor] = useState<FeedItem | null>(null);
  const [reportReason, setReportReason] = useState("abuse");
  const [reportNote, setReportNote] = useState("");
  const [reportSending, setReportSending] = useState(false);
  const { toast } = useToast();

  const locale = clientLocale();
  const localizedPrompt = (p: Prompt) => (locale === "bn" ? p.bn : locale === "hi" ? p.hi : p.en);

  const load = useCallback(async () => {
    if (!deviceId) return;
    try {
      const d = await apiGet<ChallengeData>(`/api/challenge?deviceId=${encodeURIComponent(deviceId)}`);
      setData(d);
      setText(d.mine?.text ?? "");
      setEditing(!d.mine);
      if (d.mine?.feedback) {
        try {
          setFb(JSON.parse(d.mine.feedback) as Feedback);
        } catch {
          /* stale feedback string — ignore */
        }
      }
    } catch {
      /* offline — the card stays in its empty state */
    } finally {
      setLoading(false);
    }
  }, [deviceId]);

  useEffect(() => {
    void load();
  }, [load]);

  const submit = async () => {
    if (!deviceId || text.trim().length < 3 || submitting) return;
    setSubmitting(true);
    try {
      const res = await apiPost<{ flagged: boolean; edited: boolean; xp: number; capped: boolean }>("/api/challenge", {
        deviceId,
        text: text.trim(),
      });
      track("challenge_done", { flagged: res.flagged });
      if (res.flagged) {
        toast({ title: t("flaggedToast"), variant: "destructive" });
      } else if (res.edited) {
        toast({ title: t("edited") });
      } else {
        toast({ title: t("submitted", { n: res.xp }) });
      }
      // light refresh of feed + mine + any XP display listening nearby
      window.dispatchEvent(new Event("bolo_xp_bump"));
      await load();
      setEditing(false);
    } catch {
      /* error already surfaced by the API message */
    } finally {
      setSubmitting(false);
    }
  };

  const getFeedback = async () => {
    if (!deviceId || !data?.mine || fbLoading) return;
    setFbLoading(true);
    try {
      const out = await callAi<Feedback>(deviceId, "challenge-feedback", {
        text: data.mine.text,
        promptEn: localizedPrompt(data.prompt),
        submissionId: data.mine.id,
      });
      setFb(out);
    } catch (e) {
      // no-key / quota → honest localized message (same chain as D23)
      toast({ title: (e as Error).message, variant: "destructive" });
      /* no-key / quota → the shared no-key toast chain from /api/ai */
    } finally {
      setFbLoading(false);
    }
  };

  const react = async (item: FeedItem, emoji: string) => {
    if (!deviceId) return;
    // optimistic toggle
    setData((prev) => {
      if (!prev) return prev;
      const feed = prev.feed.map((f) => {
        if (f.id !== item.id) return f;
        const counts = { ...f.reactions };
        if (f.myReaction) counts[f.myReaction] = Math.max(0, (counts[f.myReaction] ?? 1) - 1);
        const sameEmoji = f.myReaction === emoji;
        if (sameEmoji) return { ...f, reactions: counts, myReaction: null };
        counts[emoji] = (counts[emoji] ?? 0) + 1;
        return { ...f, reactions: counts, myReaction: emoji };
      });
      return { ...prev, feed };
    });
    try {
      await apiPost("/api/challenge/react", { deviceId, submissionId: item.id, emoji });
    } catch {
      void load(); // resync on failure
    }
  };

  const sendReport = async () => {
    if (!deviceId || !reportFor || reportSending) return;
    setReportSending(true);
    try {
      await apiPost("/api/report", {
        deviceId,
        targetType: "sentence",
        targetId: reportFor.id,
        reason: reportReason,
        note: reportNote,
      });
      setReportFor(null);
      setReportNote("");
      toast({ title: t("reportSent") });
    } catch (e) {
      toast({ title: (e as Error).message, variant: "destructive" });
    } finally {
      setReportSending(false);
    }
  };

  if (loading) {
    return (
      <Card className="premium-card rounded-2xl border-border/70 bg-card">
        <CardContent className="space-y-3 p-4 sm:p-6" aria-busy="true">
          <Skeleton className="h-6 w-48 rounded-lg" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </CardContent>
      </Card>
    );
  }
  if (!data) return null;

  const mine = data.mine;

  return (
    <Card className="premium-card animate-fade-in-up rounded-2xl border-border/70 bg-card">
      <CardContent className="space-y-4 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/90 to-purple-600/90 text-white shadow-md shadow-fuchsia-500/30">
            <MessageCircleHeart className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-bold sm:text-base">{t("title")}</h3>
            <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
          </div>
        </div>

        {/* today's prompt */}
        <div className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-4 dark:border-fuchsia-400/20">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-300">
            {t("promptLabel")}
          </p>
          <p className="mt-1 text-sm font-semibold leading-relaxed">{localizedPrompt(data.prompt)}</p>
          <p className="mt-1 text-xs italic text-muted-foreground">{data.prompt.en}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {data.prompt.starters.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setText((prev) => (prev ? `${prev} ${s}` : `${s} `));
                  setEditing(true);
                }}
                className="rounded-full border border-border/70 bg-card px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:bg-muted"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* my submission */}
        {mine && !editing ? (
          <div className="space-y-3 rounded-xl border border-border/70 bg-muted/20 p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-md bg-fuchsia-500/15 px-2 py-0.5 text-[10px] font-bold text-fuchsia-700 dark:text-fuchsia-300">
                {t("mineBadge")}
              </span>
              <Button variant="ghost" size="sm" className="h-8 gap-1 rounded-lg" onClick={() => setEditing(true)}>
                <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                {t("editBtn")}
              </Button>
            </div>
            <p className="whitespace-pre-wrap text-sm leading-relaxed">{mine.text}</p>
            {mine.flagged && mine.hidden && (
              <p className="rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
                {t("flaggedToast")}
              </p>
            )}
            {/* AI feedback */}
            <div className="space-y-2">
              {fbLoading ? (
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> AI…
                </p>
              ) : fb ? (
                <div className="space-y-2 rounded-lg border border-teal-500/20 bg-teal-500/5 p-3">
                  <p className="text-sm font-bold text-teal-700 dark:text-teal-300">
                    {t("score", { n: fb.score })}
                  </p>
                  {fb.strengths.length > 0 && (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("strengths")}</p>
                      <ul className="mt-1 space-y-0.5">
                        {fb.strengths.map((s, i) => (
                          <li key={i} className="text-xs leading-relaxed">✓ {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {fb.fixes.length > 0 && (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("fixes")}</p>
                      <ul className="mt-1 space-y-0.5">
                        {fb.fixes.map((s, i) => (
                          <li key={i} className="text-xs leading-relaxed">→ {s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {fb.improved && (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("improved")}</p>
                      <p className="mt-1 rounded-md bg-card px-2 py-1.5 text-sm italic leading-relaxed">“{fb.improved}”</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm" variant="outline" className="h-9 gap-1.5 rounded-xl" onClick={() => void getFeedback()}>
                    <Sparkles className="h-3.5 w-3.5 text-teal-600" aria-hidden="true" />
                    {t("aiFeedbackBtn")}
                  </Button>
                  <p className="text-[11px] text-muted-foreground">{t("noKeyHint")}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t("writePlaceholder")}
              rows={3}
              maxLength={300}
              className="min-h-20 resize-none rounded-xl"
              aria-label={t("writePlaceholder")}
            />
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] tabular-nums text-muted-foreground">{text.length}/300</span>
              <div className="flex gap-2">
                {mine && (
                  <Button variant="ghost" size="sm" className="h-9 rounded-xl" onClick={() => setEditing(false)}>
                    {t("saveEdit")}
                  </Button>
                )}
                <Button
                  onClick={() => void submit()}
                  disabled={text.trim().length < 3 || submitting}
                  className="h-9 gap-1.5 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-md shadow-fuchsia-500/25"
                >
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                  {t("submit")}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* community feed */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {t("feedTitle")} · {t("participants", { n: data.participants })}
          </p>
          {data.feed.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-5 text-center text-sm text-muted-foreground">
              {t("feedEmpty")}
            </p>
          ) : (
            <ul className="max-h-96 space-y-2 overflow-y-auto pr-1">
              {data.feed.map((f) => (
                <li key={f.id} className={cn("rounded-xl border p-3", f.mine ? "border-fuchsia-500/30 bg-fuchsia-500/5" : "border-border/60 bg-card")}>
                  <div className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-lg">{f.avatar}</span>
                    <span className="min-w-0 flex-1 truncate text-sm font-semibold">{f.name}</span>
                    <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">
                      {f.level === "beginner" ? "A1–A2" : f.level === "intermediate" ? "B1" : "B2"}
                    </span>
                    {!f.mine && (
                      <button
                        onClick={() => setReportFor(f)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        aria-label={t("reportBtn")}
                      >
                        <Flag className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  <p className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed">{f.text}</p>
                  {!f.mine && (
                    <div className="mt-2 flex gap-1.5">
                      {REACTIONS.map(({ key, icon: Icon }) => {
                        const active = f.myReaction === key;
                        return (
                          <button
                            key={key}
                            onClick={() => void react(f, key)}
                            className={cn(
                              "flex min-h-8 items-center gap-1 rounded-full border px-2.5 text-xs font-semibold transition-colors",
                              active
                                ? "border-teal-500/50 bg-teal-500/15 text-teal-700 dark:text-teal-300"
                                : "border-border/70 bg-muted/30 text-muted-foreground hover:bg-muted"
                            )}
                            aria-pressed={active}
                          >
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                            {f.reactions[key] ?? 0}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* report dialog */}
        <Dialog open={Boolean(reportFor)} onOpenChange={(o) => !o && setReportFor(null)}>
          <DialogContent className="max-w-sm rounded-2xl">
            <DialogHeader>
              <DialogTitle>{t("reportTitle")}</DialogTitle>
              <DialogDescription>{t("reportDesc")}</DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label={t("reportTitle")}>
                {(["spam", "abuse", "sexual", "violence", "other"] as const).map((r) => (
                  <button
                    key={r}
                    role="radio"
                    aria-checked={reportReason === r}
                    onClick={() => setReportReason(r)}
                    className={cn(
                      "min-h-10 rounded-xl border px-3 text-xs font-semibold transition-colors",
                      reportReason === r
                        ? "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300"
                        : "border-border/70 bg-card text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {t(`reason${r.charAt(0).toUpperCase()}${r.slice(1)}` as Parameters<typeof t>[0])}
                  </button>
                ))}
              </div>
              <Input
                value={reportNote}
                onChange={(e) => setReportNote(e.target.value)}
                placeholder={t("reportNote")}
                maxLength={200}
                className="h-10 rounded-xl"
              />
              <Button
                onClick={() => void sendReport()}
                disabled={reportSending}
                className="h-10 w-full rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white"
              >
                {reportSending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Flag className="h-4 w-4" aria-hidden="true" />}
                {t("reportSend")}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
