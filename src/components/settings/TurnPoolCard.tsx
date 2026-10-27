"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Video,
  Plus,
  Power,
  RefreshCw,
  Trash2,
  CheckCircle2,
  KeyRound,
  Loader2,
  Info,
  X,
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
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type TurnKeyRow = {
  id: string;
  label: string;
  keyId: string;
  status: string;
  mintOk: number;
  mintFail: number;
  lastMintAt: string | null;
  lastFailAt: string | null;
};

type TurnInfo = {
  adminConfigured: boolean;
  keys: TurnKeyRow[];
  envKeyConfigured: boolean;
};

const TOKEN_KEY = "bolo.storageAdmin";

export default function TurnPoolCard() {
  const t = useTranslations("turn");
  const { toast } = useToast();
  const [info, setInfo] = useState<TurnInfo | null>(null);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ label: "", keyId: "", apiToken: "" });

  // GET now requires the token for pool details (audit P1-10) — send it when
  // the owner already saved one, so the dashboard fills in without re-entry.
  const load = useCallback(async (tokenArg?: string) => {
    try {
      const t = tokenArg ?? "";
      const res = await fetch("/api/turn", {
        cache: "no-store",
        headers: t ? { "x-admin-token": t } : undefined,
      });
      if (res.ok) setInfo((await res.json()) as TurnInfo);
    } catch {
      /* dashboard is best-effort */
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(TOKEN_KEY) ?? "";
    setToken(stored);
    void load(stored);
  }, [load]);

  const headers = () => {
    const h: Record<string, string> = { "content-type": "application/json" };
    if (token) h["x-admin-token"] = token;
    return h;
  };

  const needToken = () => {
    if (!token) {
      toast({ title: t("needToken"), variant: "destructive" });
      return true;
    }
    return false;
  };

  const act = async (id: string, action: string, method: "PATCH" | "DELETE" = "PATCH") => {
    if (needToken()) return;
    setBusy(id + action);
    try {
      const res = await fetch(
        method === "DELETE" ? `/api/turn?id=${encodeURIComponent(id)}` : "/api/turn",
        {
          method,
          headers: headers(),
          body: method === "PATCH" ? JSON.stringify({ id, action }) : undefined,
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) toast({ title: data?.error ?? t("probeFail"), variant: "destructive" });
    } finally {
      setBusy(null);
      void load(token);
    }
  };

  const rotate = async () => {
    if (needToken()) return;
    setBusy("rotate");
    try {
      const res = await fetch("/api/turn", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ action: "rotate" }),
      });
      const data = await res.json().catch(() => ({}));
      toast({
        title: data?.ok ? `${t("ok")} — ${data.detail ?? ""}` : data?.detail ?? t("probeFail"),
        variant: data?.ok ? "default" : "destructive",
      });
    } finally {
      setBusy(null);
      void load(token);
    }
  };

  const testKey = async (id: string) => {
    if (needToken()) return;
    setBusy(id + "test");
    try {
      const res = await fetch("/api/turn", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ action: "test", id }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; detail?: string };
      toast({
        title: data?.ok ? t("probeOk") : `${t("probeFail")} — ${data?.detail ?? ""}`,
        variant: data?.ok ? "default" : "destructive",
      });
    } finally {
      setBusy(null);
    }
  };

  const addKey = async () => {
    if (needToken()) return;
    setBusy("add");
    try {
      const res = await fetch("/api/turn", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        detail?: string;
        error?: string;
      };
      if (!res.ok) {
        toast({ title: data?.error ?? t("probeFail"), variant: "destructive" });
      } else {
        toast({
          title: data?.ok ? t("probeOk") : `${t("probeFail")} — ${data?.detail ?? ""}`,
          variant: data?.ok ? "default" : "destructive",
        });
        setShowAdd(false);
        setForm({ label: "", keyId: "", apiToken: "" });
      }
    } finally {
      setBusy(null);
      void load(token);
    }
  };

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5 text-primary" aria-hidden />
          {t("title")}
        </CardTitle>
        <CardDescription>{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {info?.envKeyConfigured && (
          <div className="flex items-start gap-2 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-3 text-xs text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {t("envNote")}
          </div>
        )}

        <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
          <p className="text-sm font-semibold">{t("poolSub")}</p>
          <div className="mt-3 space-y-2">
            {!info || (info.keys ?? []).length === 0 ? (
              <div className="space-y-1">
                <p className="text-xs italic text-muted-foreground">{t("empty")}</p>
                {/* Pool details need the admin token now (audit P1-10) — point
                    the owner to the token box below instead of looking broken. */}
                {info?.adminConfigured && (
                  <p className="text-xs text-muted-foreground">🔑 {t("tokenHint")}</p>
                )}
              </div>
            ) : (
              info.keys.map((k) => (
                <div
                  key={k.id}
                  className="flex flex-wrap items-center gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5"
                >
                  <Badge
                    variant={k.status === "active" ? "default" : "secondary"}
                    className="shrink-0 text-[11px]"
                  >
                    {k.status === "active"
                      ? t("active")
                      : k.status === "exhausted"
                        ? t("exhausted")
                        : t("disabled")}
                  </Badge>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium">{k.label}</span>
                  {/* D19 health monitor — persistent mint counters. A rising
                      ✕ count or a failure in the last 10 min = the owner
                      should replace the token BEFORE calls start failing. */}
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px]",
                      Date.now() - (k.lastFailAt ? new Date(k.lastFailAt).getTime() : 0) <
                        10 * 60 * 1000
                        ? "font-bold text-amber-600 dark:text-amber-400"
                        : "text-muted-foreground"
                    )}
                    title={t("healthTitle")}
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    {k.mintOk}
                    <X className="h-3 w-3 text-rose-500" aria-hidden />
                    {k.mintFail}
                  </span>
                  <span className="max-w-full truncate font-mono text-[11px] text-muted-foreground sm:max-w-[35%]">
                    {k.keyId.slice(0, 8)}…{k.keyId.slice(-4)}
                  </span>
                  <div className="flex gap-1.5">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 rounded-full px-2.5 text-[11px]"
                      onClick={() => testKey(k.id)}
                      disabled={busy === k.id + "test"}
                      aria-label={t("test")}
                    >
                      {busy === k.id + "test" ? (
                        <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                      ) : (
                        <CheckCircle2 className="h-3 w-3" aria-hidden />
                      )}
                      {t("test")}
                    </Button>
                    {k.status === "active" ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 rounded-full px-2.5 text-[11px]"
                        onClick={() => act(k.id, "disable")}
                        disabled={Boolean(busy)}
                        aria-label={t("disable")}
                      >
                        <Power className="h-3 w-3" aria-hidden />
                        {t("disable")}
                      </Button>
                    ) : k.status !== "disabled" ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 rounded-full px-2.5 text-[11px]"
                        onClick={() => act(k.id, "activate")}
                        disabled={Boolean(busy)}
                        aria-label={t("activate")}
                      >
                        <Power className="h-3 w-3" aria-hidden />
                        {t("activate")}
                      </Button>
                    ) : null}
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 rounded-full px-2.5 text-[11px] text-destructive hover:bg-destructive/10"
                      onClick={() => act(k.id, "del", "DELETE")}
                      disabled={Boolean(busy)}
                      aria-label={t("del")}
                    >
                      <Trash2 className="h-3 w-3" aria-hidden />
                      {t("del")}
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          {info && info.keys.length > 0 && (
            <Button
              size="sm"
              variant="outline"
              className="mt-2.5 h-9 gap-1.5 rounded-full text-xs"
              onClick={rotate}
              disabled={busy === "rotate"}
              aria-label={t("rotate")}
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${busy === "rotate" ? "animate-spin" : ""}`}
                aria-hidden
              />
              {t("rotate")}
            </Button>
          )}

          {!showAdd ? (
            <Button
              size="sm"
              variant="outline"
              className="mt-2 h-9 gap-1.5 rounded-full text-xs"
              onClick={() => setShowAdd(true)}
              aria-label={t("add")}
            >
              <Plus className="h-3.5 w-3.5" aria-hidden />
              {t("add")}
            </Button>
          ) : (
            <div className="mt-3 space-y-2.5 rounded-lg border border-border/50 bg-background/60 p-3">
              {(
                [
                  ["label", "label"],
                  ["keyId", "keyId"],
                  ["apiToken", "apiToken"],
                ] as const
              ).map(([key, labelKey]) => (
                <div key={key} className="space-y-1">
                  <Label htmlFor={`turn-${key}`} className="text-xs">
                    {t(`addField.${labelKey}`)}
                  </Label>
                  <Input
                    id={`turn-${key}`}
                    value={form[key]}
                    type={key === "apiToken" ? "password" : "text"}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    className="h-9 text-sm"
                    autoComplete="off"
                  />
                </div>
              ))}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="h-9 flex-1 rounded-full text-xs font-semibold"
                  onClick={addKey}
                  disabled={busy === "add"}
                  aria-label={t("add")}
                >
                  {busy === "add" ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                  ) : (
                    <Plus className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {t("add")}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-9 rounded-full text-xs"
                  onClick={() => setShowAdd(false)}
                  aria-label={t("disable")}
                >
                  ✕
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Admin token (shared with storage card) */}
        <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <KeyRound className="h-4 w-4 text-sky-600 dark:text-sky-400" aria-hidden />
            {t("token")}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">{t("tokenHint")}</p>
          <div className="mt-2 flex gap-2">
            <Input
              value={token}
              onChange={(e) => setToken(e.target.value)}
              type="password"
              className="h-9 text-sm"
              autoComplete="off"
              aria-label={t("token")}
            />
            <Button
              size="sm"
              variant="outline"
              className="h-9 rounded-full text-xs"
              onClick={() => {
                localStorage.setItem(TOKEN_KEY, token.trim());
                toast({ title: t("ok") });
              }}
              aria-label={t("ok")}
            >
              {t("ok")}
            </Button>
          </div>
        </div>

        <p className="flex items-start gap-2 text-[11px] text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          {t("subtitle")}
        </p>
      </CardContent>
    </Card>
  );
}
