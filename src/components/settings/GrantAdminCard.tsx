"use client";

import { useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Gift, Trash2, Loader2, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { apiPost } from "@/lib/client-api";

// ─── Admin grant console (D36) ───────────────────────────────────────────────
// Lets the site owner hand out Premium plans manually until real payments
// land (D38). ADMIN-ONLY twice over: SettingsSection gates the render and
// /api/admin/grant rejects non-admin sessions fail-closed with 403 — the
// card also hides itself in that case, so the entry point never exists for
// regular users.

type AdminPlan = {
  key: string;
  name: string;
  features: string[];
  durationDays: number;
  priceBdt: number;
  active: boolean;
};

// Local shape of the frozen POST /api/admin/grant contract (typed here, not
// imported, so the client never depends on mid-flight backend files).
type GrantRow = {
  id: string;
  email: string;
  planKey: string;
  source: string;
  note: string;
  grantedBy: string;
  startsAt: string;
  expiresAt: string | null;
};

type GrantAdminData = {
  plans: AdminPlan[];
  grants: GrantRow[];
};

const SOURCE_KEYS = ["grant", "payment", "referral", "admin"] as const;

export default function GrantAdminCard() {
  const t = useTranslations("plan");
  const locale = useLocale();
  const role = useAuth((s) => s.role);
  const isAdmin = role === "admin";
  const { toast } = useToast();

  const [data, setData] = useState<GrantAdminData | null>(null);
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(true);
  const [granting, setGranting] = useState(false);
  const [revokingId, setRevokingId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [planKey, setPlanKey] = useState("");
  const [days, setDays] = useState("");
  const [note, setNote] = useState("");

  // Only ACTIVE premium plans are grantable — "free" is the baseline everyone has.
  const activePlans = (data?.plans ?? []).filter((p) => p.active && p.key !== "free");
  const grants = data?.grants ?? [];
  const selectedPlan = activePlans.find((p) => p.key === planKey) ?? null;

  const load = useCallback(
    async (silent: boolean) => {
      setLoading(true);
      try {
        const d = await apiPost<GrantAdminData>("/api/admin/grant", { action: "list" });
        setData(d);
        setHidden(false);
        // Keep a valid premium plan pre-selected across refreshes.
        const premium = d.plans.filter((p) => p.active && p.key !== "free");
        setPlanKey((prev) => (premium.some((p) => p.key === prev) ? prev : premium[0]?.key ?? ""));
      } catch (e) {
        if (silent) setHidden(true); // 403 / dead DB → quietly disappear, no scary box
        else toast({ title: (e as Error)?.message || t("admin.failed"), variant: "destructive" });
      } finally {
        setLoading(false);
      }
    },
    [toast, t]
  );

  // Initial load + whenever the role flips true (auth hydration).
  useEffect(() => {
    if (!isAdmin) return;
    void load(true);
  }, [isAdmin, load]);

  const grant = async () => {
    const cleanEmail = email.trim();
    if (!cleanEmail || !planKey) return;
    const daysNum = days ? Number.parseInt(days, 10) : NaN;
    setGranting(true);
    try {
      const d = await apiPost<{ grant: GrantRow }>("/api/admin/grant", {
        action: "grant",
        email: cleanEmail,
        planKey,
        // empty days → the API applies the plan's default duration
        ...(Number.isFinite(daysNum) && daysNum >= 1 ? { days: daysNum } : {}),
        ...(note.trim() ? { note: note.trim() } : {}),
      });
      toast({
        title: t("admin.grantDone", {
          email: d.grant?.email ?? cleanEmail,
          plan: selectedPlan?.name ?? planKey,
        }),
      });
      setEmail("");
      setNote("");
      setDays("");
      await load(false);
    } catch (e) {
      // The API returns already-localized error messages (invalid email/plan, unknown user).
      toast({ title: (e as Error)?.message || t("admin.failed"), variant: "destructive" });
    } finally {
      setGranting(false);
    }
  };

  const revoke = async (grantId: string) => {
    setRevokingId(grantId);
    try {
      await apiPost("/api/admin/grant", { action: "revoke", grantId });
      toast({ title: t("admin.revokeDone") });
      await load(false);
    } catch (e) {
      toast({ title: (e as Error)?.message || t("admin.failed"), variant: "destructive" });
    } finally {
      setRevokingId(null);
    }
  };

  if (!isAdmin || hidden) return null;

  const sourceLabel = (s: string) =>
    (SOURCE_KEYS as readonly string[]).includes(s) ? t(`admin.source_${s}`) : s;
  const fmtDate = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(iso));
    } catch {
      return iso;
    }
  };

  return (
    <Card className="premium-card rounded-2xl border-border/70 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/90 to-orange-500/90 text-white shadow-md shadow-rose-500/30 ring-1 ring-inset ring-white/25 dark:shadow-rose-500/20">
            <Gift className="h-4.5 w-4.5" aria-hidden />
          </span>
          {t("admin.title")}
          {grants.length > 0 && (
            <Badge className="ml-auto bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
              {grants.length}
            </Badge>
          )}
        </CardTitle>
        <CardDescription>{t("admin.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && !data ? (
          // First-load skeleton — the form only appears once the plan list is known
          <div className="space-y-3" aria-busy="true">
            <div className="grid gap-3 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-14 rounded-xl" />
              ))}
            </div>
            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
        ) : (
          <>
            {/* grant form */}
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
              {activePlans.length === 0 ? (
                <p className="text-xs italic text-muted-foreground">{t("admin.noPlans")}</p>
              ) : (
                <div className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="grant-email">{t("admin.email")}</Label>
                      <Input
                        id="grant-email"
                        type="email"
                        required
                        placeholder={t("admin.emailPlaceholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="grant-plan">{t("admin.plan")}</Label>
                      <Select value={planKey} onValueChange={setPlanKey}>
                        <SelectTrigger id="grant-plan" className="min-h-11 w-full rounded-xl">
                          <SelectValue placeholder={t("admin.plan")} />
                        </SelectTrigger>
                        <SelectContent>
                          {activePlans.map((p) => (
                            <SelectItem key={p.key} value={p.key}>
                              {p.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="grant-days">{t("admin.days")}</Label>
                      <Input
                        id="grant-days"
                        type="number"
                        min={1}
                        inputMode="numeric"
                        placeholder={selectedPlan ? String(selectedPlan.durationDays) : "30"}
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                        className="h-11 rounded-xl"
                      />
                      <p className="text-[11px] text-muted-foreground">{t("admin.daysHint")}</p>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="grant-note">{t("admin.note")}</Label>
                      <Input
                        id="grant-note"
                        maxLength={200}
                        placeholder={t("admin.notePlaceholder")}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        autoComplete="off"
                        className="h-11 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                      {t("admin.plansHint")}
                    </p>
                    <Button
                      onClick={() => void grant()}
                      disabled={granting || !email.trim() || !planKey}
                      className="min-h-11 gap-1.5 rounded-xl"
                    >
                      {granting ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      ) : (
                        <Gift className="h-4 w-4" aria-hidden />
                      )}
                      {granting ? t("admin.granting") : t("admin.grantCta")}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* active grants */}
            {grants.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border/80 bg-card/50 px-4 py-6 text-center text-sm text-muted-foreground">
                {t("admin.noGrants")}
              </p>
            ) : (
              <ul className="nice-scroll max-h-72 space-y-2 overflow-y-auto pr-1">
                {grants.map((g) => (
                  <li key={g.id} className="rounded-xl border border-border/60 bg-card p-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="min-w-0 max-w-[15rem] truncate text-sm font-semibold sm:max-w-[18rem]">
                        {g.email}
                      </span>
                      <Badge className="shrink-0 bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300">
                        {g.planKey}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="shrink-0 rounded-md px-1.5 py-0 text-[10px] text-muted-foreground"
                      >
                        {sourceLabel(g.source)}
                      </Badge>
                      <span className="ml-auto text-[11px] text-muted-foreground">
                        {g.expiresAt ? t("admin.expires", { date: fmtDate(g.expiresAt) }) : t("admin.neverExpires")}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-9 shrink-0 gap-1 rounded-lg border-border/70 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        disabled={revokingId === g.id}
                        onClick={() => void revoke(g.id)}
                        aria-label={t("admin.revoke")}
                      >
                        {revokingId === g.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" aria-hidden />
                        )}
                        {revokingId === g.id ? t("admin.revoking") : t("admin.revoke")}
                      </Button>
                    </div>
                    {g.note && (
                      <p className="mt-1.5 text-xs italic text-muted-foreground">{g.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
