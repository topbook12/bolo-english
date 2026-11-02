"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Award,
  CalendarCheck2,
  Check,
  Copy,
  Flame,
  GraduationCap,
  Printer,
  Search,
  SearchX,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeviceValue } from "@/hooks/use-device";
import { useAuthInit, useAuthValue } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { clientMsg } from "@/lib/api-i18n";
import { cn } from "@/lib/utils";

// ─── Certificate card (D40) — Progress section ──────────────────────────────
// Shows either the newest certificate as a print-ready A4-landscape preview
// (amber/gold document, always-light "paper" so it prints beautifully and
// reads as a real document in dark mode) or the live progress toward the
// 1000 XP / 14 active-days eligibility gate. Verify dialog is public —
// anyone can check any code against /api/certificate/verify.

interface CertStats {
  xp: number;
  activeDays: number;
  streak: number;
}

interface CertRow {
  id: string;
  code: string;
  name: string;
  level: string;
  tier: string;
  stats: CertStats;
  createdAt: string;
}

type CertProgress = CertStats;

interface VerifyOk {
  valid: true;
  name: string;
  level: string;
  tier: string;
  issuedAt: string;
  xp: number;
  activeDays: number;
}
type VerifyResult = VerifyOk | { valid: false };

const XP_GOAL = 1000;
const DAYS_GOAL = 14;

function num(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.round(n) : 0;
}

export default function CertificateCard() {
  const t = useTranslations("certificate");
  const tc = useTranslations("common");
  const locale = useLocale();
  const dateLocale = locale === "bn" ? "bn-BD" : locale === "hi" ? "hi-IN" : "en-US";
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  const authUser = useAuthValue((s) => s.user, null);
  const authLoaded = useAuthValue((s) => s.loaded, false);
  useAuthInit(); // no-op when the header already fetched /api/auth/me
  const { toast } = useToast();

  const [certs, setCerts] = useState<CertRow[] | null>(null);
  const [progress, setProgress] = useState<CertProgress>({ xp: 0, activeDays: 0, streak: 0 });
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [printing, setPrinting] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // verify dialog state (result cleared on close)
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyBusy, setVerifyBusy] = useState(false);
  const [verifyResult, setVerifyResult] = useState<VerifyResult | null>(null);

  const printBusyRef = useRef(false);

  const load = useCallback(async () => {
    if (!deviceId) return;
    try {
      const res = await fetch(`/api/certificate?deviceId=${encodeURIComponent(deviceId)}`);
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || clientMsg("serverProblem", { status: res.status }));
      }
      const rows = Array.isArray(json.data) ? (json.data as CertRow[]) : [];
      const p = (json.progress ?? {}) as Partial<CertProgress>;
      setCerts(rows);
      setProgress({ xp: num(p.xp), activeDays: num(p.activeDays), streak: num(p.streak) });
    } catch {
      // Honest-empty on failure (same posture as the rest of the Progress section)
      setCerts([]);
      setProgress({ xp: 0, activeDays: 0, streak: 0 });
    } finally {
      setLoading(false);
    }
  }, [deviceId]);

  useEffect(() => {
    load();
  }, [load]);

  const eligible = progress.xp >= XP_GOAL && progress.activeDays >= DAYS_GOAL;

  const generate = useCallback(async () => {
    if (generating) return;
    setGenerating(true);
    try {
      await fetch("/api/certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId }),
      }).then(async (res) => {
        const json = await res.json().catch(() => null);
        if (!res.ok || !json?.ok) {
          throw new Error(json?.error || clientMsg("serverProblem", { status: res.status }));
        }
        return json.data as CertRow;
      });
      toast({ title: t("successToast") });
      await load();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : clientMsg("unexpectedResponse"), variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  }, [deviceId, generating, load, t, toast]);

  /** Print pipeline: class + @page style toggled around window.print() so this
   * feature never fights the CV Studio portrait print pipeline. */
  const doPrint = useCallback(() => {
    if (printBusyRef.current) return;
    printBusyRef.current = true;
    setPrinting(true);
    document.body.classList.add("cert-printing");
    const style = document.createElement("style");
    style.id = "cert-print-page";
    style.textContent = "@page { size: A4 landscape; margin: 10mm; }";
    document.head.appendChild(style);
    let done = false;
    const cleanup = () => {
      if (done) return;
      done = true;
      window.removeEventListener("afterprint", cleanup);
      window.clearTimeout(timer);
      style.remove();
      document.body.classList.remove("cert-printing");
      printBusyRef.current = false;
      setPrinting(false);
    };
    const timer = window.setTimeout(cleanup, 30_000); // safety net only
    window.addEventListener("afterprint", cleanup);
    window.print();
  }, []);

  const copyCode = useCallback(
    async (code: string, id: string) => {
      try {
        await navigator.clipboard.writeText(code);
        setCopiedId(id);
        window.setTimeout(() => setCopiedId((cur) => (cur === id ? null : cur)), 1600);
        toast({ title: t("copiedToast") });
      } catch {
        /* clipboard unavailable — silent, the code is visible to retype */
      }
    },
    [t, toast]
  );

  const openVerify = useCallback(() => {
    setVerifyResult(null);
    setVerifyCode("");
    setVerifyOpen(true);
  }, []);

  const runVerify = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      if (verifyBusy || !verifyCode.trim()) return;
      setVerifyBusy(true);
      try {
        const res = await fetch(
          `/api/certificate/verify?code=${encodeURIComponent(verifyCode.trim())}`
        );
        const json = await res.json().catch(() => null);
        if (!res.ok || !json?.ok) {
          throw new Error(json?.error || clientMsg("serverProblem", { status: res.status }));
        }
        setVerifyResult(json.data as VerifyResult);
      } catch (err) {
        toast({
          title: err instanceof Error ? err.message : clientMsg("unexpectedResponse"),
          variant: "destructive",
        });
      } finally {
        setVerifyBusy(false);
      }
    },
    [toast, verifyBusy, verifyCode]
  );

  const fmtDate = useCallback(
    (iso: string) => {
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return "";
      return new Intl.DateTimeFormat(dateLocale, { day: "numeric", month: "long", year: "numeric" }).format(d);
    },
    [dateLocale]
  );

  const levelLabel = useCallback(
    (level: string) => {
      const key = level === "intermediate" || level === "advanced" ? level : "beginner";
      return tc(`level.${key}`);
    },
    [tc]
  );

  const tierBadge = useCallback(
    (tier: string, className?: string) => (
      <Badge
        className={cn(
          "gap-1 border-0 font-semibold",
          tier === "achiever"
            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200"
            : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200",
          className
        )}
      >
        {tier === "achiever" ? (
          <ShieldCheck className="h-3 w-3" aria-hidden />
        ) : (
          <Sparkles className="h-3 w-3" aria-hidden />
        )}
        {tier === "achiever" ? t("tierAchiever") : t("tierLearner")}
      </Badge>
    ),
    [t]
  );

  const newest = certs && certs.length > 0 ? certs[0] : null;

  return (
    <Card
      className={cn(
        "animate-fade-in-up overflow-hidden rounded-2xl border p-0",
        "border-amber-200/70 bg-gradient-to-br from-amber-50/70 via-background to-emerald-50/40",
        "dark:border-amber-900/40 dark:from-amber-950/20 dark:via-background dark:to-emerald-950/20"
      )}
    >
      <CardContent className="space-y-4 p-4 sm:p-6">
        {/* ── header row ── */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/30">
              <Award className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <h2 className="text-base font-bold leading-tight">{t("title")}</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">{t("subtitle")}</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={openVerify}>
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
            {t("verifyButton")}
          </Button>
        </div>

        {loading ? (
          <div className="space-y-3" aria-busy="true">
            <Skeleton className="mx-auto aspect-[1.414/1] w-full max-w-2xl rounded-lg" />
            <Skeleton className="mx-auto h-9 w-56 rounded-full" />
          </div>
        ) : newest ? (
          <>
            {/* ── certificate preview (the document itself) ── */}
            <p className="text-center text-sm font-semibold text-amber-800 dark:text-amber-200">
              {t("earnedTitle")}
            </p>

            <div className="print-certificate mx-auto aspect-[1.414/1] w-full max-w-2xl max-sm:aspect-auto">
              {/* paper: literal light classes — identical in dark mode, so the
                  document prints correctly and looks like a real certificate */}
              <div className="cert-paper h-full w-full overflow-hidden rounded-lg border border-amber-300/90 bg-gradient-to-br from-amber-50 via-[#fffdf6] to-amber-100 shadow-xl shadow-amber-600/10 ring-1 ring-amber-500/15 dark:border-amber-600/50">
                <div className="h-full w-full rounded-[5px] border-[3px] border-emerald-700/80 p-1.5">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-[3px] border-2 border-dashed border-amber-500/70 px-4 py-5 text-center sm:gap-2.5 sm:px-8">
                    {/* brand row */}
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600" aria-hidden />
                      <span className="text-xs font-bold uppercase tracking-[0.28em] text-amber-800">
                        {tc("appName")}
                      </span>
                      {tierBadge(newest.tier)}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-800 sm:text-3xl">
                      {t("certHeading")}
                    </h3>

                    <div className="flex items-center gap-2" aria-hidden>
                      <span className="h-px w-10 bg-amber-500/60 sm:w-16" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-amber-500/80" />
                      <span className="h-px w-10 bg-amber-500/60 sm:w-16" />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500 sm:text-xs">
                      {t("certifiesThat")}
                    </p>

                    <p className="font-serif text-xl font-extrabold tracking-wide text-amber-950 sm:text-3xl">
                      {newest.name}
                    </p>

                    <p className="max-w-md text-[11px] leading-snug text-stone-600 sm:text-sm">
                      {t("demonstrated")}
                    </p>

                    {/* stats row */}
                    <div className="mt-0.5 flex flex-wrap items-center justify-center gap-1.5 sm:mt-1 sm:gap-2">
                      <span className="cert-chip inline-flex items-center gap-1 rounded-full border border-amber-300/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-medium text-stone-700 sm:text-[11px]">
                        <Zap className="h-3 w-3 text-amber-600" aria-hidden />
                        {t("statXp")} {newest.stats.xp}
                      </span>
                      <span className="cert-chip inline-flex items-center gap-1 rounded-full border border-amber-300/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-medium text-stone-700 sm:text-[11px]">
                        <CalendarCheck2 className="h-3 w-3 text-emerald-600" aria-hidden />
                        {t("statActiveDays")} {newest.stats.activeDays}
                      </span>
                      <span className="cert-chip inline-flex items-center gap-1 rounded-full border border-amber-300/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-medium text-stone-700 sm:text-[11px]">
                        <Flame className="h-3 w-3 text-orange-600" aria-hidden />
                        {t("statStreak")} {newest.stats.streak}
                      </span>
                      <span className="cert-chip inline-flex items-center gap-1 rounded-full border border-amber-300/80 bg-white/70 px-2.5 py-0.5 text-[10px] font-medium text-stone-700 sm:text-[11px]">
                        <GraduationCap className="h-3 w-3 text-emerald-700" aria-hidden />
                        {t("statLevel")} {levelLabel(newest.level)}
                      </span>
                    </div>

                    {/* footer: code + issue date + gold seal */}
                    <div className="mt-1 flex w-full items-end justify-between gap-3 sm:mt-2">
                      <div className="min-w-0 text-left">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-stone-500">
                          {t("verifyCode")}
                        </p>
                        <p className="font-mono text-xs font-bold tracking-[0.25em] text-emerald-800 sm:text-sm">
                          {newest.code}
                        </p>
                        <p className="mt-0.5 text-[9px] text-stone-500 sm:text-[10px]">
                          {t("issuedOn")} {fmtDate(newest.createdAt)}
                        </p>
                      </div>
                      <div
                        className="cert-seal relative h-12 w-12 shrink-0 rotate-12 sm:h-16 sm:w-16"
                        role="img"
                        aria-label={t("sealAria")}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 shadow-md" />
                        <div className="absolute inset-[3px] rounded-full border-2 border-dashed border-amber-100/90" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ShieldCheck className="h-6 w-6 text-white drop-shadow-sm sm:h-8 sm:w-8" aria-hidden />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-muted-foreground">{t("sharedNote")}</p>

            {/* actions */}
            <div className="flex flex-col items-center gap-1.5">
              <Button
                onClick={doPrint}
                disabled={printing}
                className="gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/30 hover:from-amber-600 hover:to-orange-700"
              >
                <Printer className="h-4 w-4" aria-hidden />
                {printing ? t("printing") : t("downloadPdf")}
              </Button>
              <p className="text-[11px] text-muted-foreground">{t("printHint")}</p>
            </div>

            {/* all codes */}
            {certs && certs.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground">{t("myCodes")}</p>
                <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
                  {certs.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between gap-2 rounded-xl border border-border/60 bg-card/80 px-3 py-2"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-mono text-sm font-semibold tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                          {c.code}
                        </p>
                        <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                          {tierBadge(c.tier)}
                          <span>
                            {t("issuedOn")} {fmtDate(c.createdAt)}
                          </span>
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0"
                        onClick={() => copyCode(c.code, c.id)}
                        aria-label={t("copyCodeAria")}
                      >
                        {copiedId === c.id ? (
                          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
                        ) : (
                          <Copy className="h-4 w-4" aria-hidden />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* ── eligibility progress (no certificate yet) ── */
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold">{t("progressTitle")}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t("progressDesc")}</p>
            </div>

            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1 font-medium">
                    <Zap className="h-3.5 w-3.5 text-amber-600" aria-hidden />
                    {t("statXp")}
                  </span>
                  <span className="font-semibold text-amber-700 dark:text-amber-300">
                    {t("xpBar", { value: progress.xp })}
                  </span>
                </div>
                <Progress
                  value={Math.min(100, (progress.xp / XP_GOAL) * 100)}
                  className="h-2 bg-amber-100 dark:bg-amber-950/60 [&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-orange-500"
                  aria-label={t("xpBar", { value: progress.xp })}
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1 font-medium">
                    <CalendarCheck2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                    {t("statActiveDays")}
                  </span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                    {t("daysBar", { value: progress.activeDays })}
                  </span>
                </div>
                <Progress
                  value={Math.min(100, (progress.activeDays / DAYS_GOAL) * 100)}
                  className="h-2 bg-emerald-100 dark:bg-emerald-950/60 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-500"
                  aria-label={t("daysBar", { value: progress.activeDays })}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 pt-1">
              <span
                title={
                  !authLoaded || !authUser
                    ? t("loginRequired")
                    : eligible
                      ? t("eligibleNote")
                      : t("progressDesc")
                }
                className="inline-flex rounded-full"
              >
                <Button
                  disabled={!authLoaded || !authUser || !eligible || generating}
                  onClick={generate}
                  className="gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-6 text-white shadow-md shadow-amber-500/30 hover:from-amber-600 hover:to-orange-700"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  {generating ? t("generating") : t("generate")}
                </Button>
              </span>
              <p className="max-w-sm text-center text-xs text-muted-foreground">
                {!authLoaded ? "" : !authUser ? t("loginRequired") : eligible ? t("eligibleNote") : t("notEligibleNote")}
              </p>
            </div>
          </div>
        )}
      </CardContent>

      {/* ── public verify dialog ── */}
      <Dialog
        open={verifyOpen}
        onOpenChange={(o) => {
          setVerifyOpen(o);
          if (!o) {
            setVerifyResult(null);
            setVerifyCode("");
          }
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden />
              {t("verifyTitle")}
            </DialogTitle>
            <DialogDescription>{t("verifyDesc")}</DialogDescription>
          </DialogHeader>

          <form onSubmit={runVerify} className="space-y-3">
            <Input
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
              placeholder={t("verifyPlaceholder")}
              aria-label={t("verifyCode")}
              maxLength={24}
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              className="font-mono uppercase tracking-[0.2em]"
            />
            <Button
              type="submit"
              disabled={verifyBusy || !verifyCode.trim()}
              className="w-full gap-2"
            >
              <Search className="h-4 w-4" aria-hidden />
              {verifyBusy ? t("verifyChecking") : t("verifyAction")}
            </Button>
          </form>

          {verifyResult && (
            verifyResult.valid ? (
              <div
                role="status"
                className="space-y-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                  <p className="font-semibold text-emerald-800 dark:text-emerald-300">{t("verifyValid")}</p>
                  {tierBadge(verifyResult.tier)}
                </div>
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{t("verifyIssuedTo")}</dt>
                    <dd className="font-semibold">{verifyResult.name}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{t("statLevel")}</dt>
                    <dd className="font-semibold">{levelLabel(verifyResult.level)}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted-foreground">{t("issuedOn")}</dt>
                    <dd className="font-semibold">{fmtDate(verifyResult.issuedAt)}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300"
              >
                <SearchX className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <p>{t("verifyInvalid")}</p>
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
