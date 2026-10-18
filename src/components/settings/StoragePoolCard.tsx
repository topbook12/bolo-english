"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Database,
  Gauge,
  HardDrive,
  Plus,
  Power,
  RefreshCw,
  Trash2,
  CheckCircle2,
  XCircle,
  KeyRound,
  PiggyBank,
  Loader2,
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

type PoolAccount = {
  id: string;
  label: string;
  status: string;
  endpoint: string;
  publicBaseUrl: string;
  limitBytes: number;
};

type StorageInfo = {
  adminConfigured: boolean;
  // Operational detail is served ONLY with a valid admin token (audit P1-10)
  // — without one the GET returns just { adminConfigured, limits }, so every
  // gated field must be treated as possibly missing by the render.
  accounts?: PoolAccount[];
  objects?: { count: number; bytes: number };
  aiCache?: { rows: number; bytes: number; maxBytes: number };
  tables?: { model: string; rows: number }[];
};

const TOKEN_KEY = "bolo.storageAdmin";
const fmtBytes = (b: number) =>
  b >= 1024 * 1024
    ? `${(b / (1024 * 1024)).toFixed(1)} MB`
    : b >= 1024
      ? `${(b / 1024).toFixed(1)} KB`
      : `${b} B`;

export default function StoragePoolCard() {
  const t = useTranslations("storage");
  const { toast } = useToast();
  const [info, setInfo] = useState<StorageInfo | null>(null);
  const [failed, setFailed] = useState(false);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({
    label: "",
    endpoint: "",
    region: "auto",
    bucket: "",
    accessKey: "",
    secretKey: "",
    publicBaseUrl: "",
  });

  // GET now requires the token for operational detail (audit P1-10) — send
  // it when the owner already saved one.
  const load = useCallback(async (tokenArg?: string) => {
    try {
      const t = tokenArg ?? "";
      const res = await fetch("/api/storage", {
        cache: "no-store",
        headers: t ? { "x-admin-token": t } : undefined,
      });
      if (!res.ok) throw new Error("load failed");
      setInfo((await res.json()) as StorageInfo);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(TOKEN_KEY) ?? "";
    setToken(stored);
    void load(stored);
  }, [load]);

  const headers = useCallback(() => {
    const h: Record<string, string> = { "content-type": "application/json" };
    if (token) h["x-admin-token"] = token;
    return h;
  }, [token]);

  const act = async (
    id: string,
    action: string,
    method: "PATCH" | "DELETE" = "PATCH"
  ) => {
    if (!token) {
      toast({ title: t("needToken"), variant: "destructive" });
      return;
    }
    setBusy(id + action);
    try {
      const res = await fetch(
        method === "DELETE"
          ? `/api/storage?id=${encodeURIComponent(id)}`
          : "/api/storage",
        {
          method,
          headers: headers(),
          body: method === "PATCH" ? JSON.stringify({ id, action }) : undefined,
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast({ title: data?.error ?? t("fail"), variant: "destructive" });
      }
    } finally {
      setBusy(null);
      void load(token);
    }
  };

  const rotate = async () => {
    if (!token) {
      toast({ title: t("needToken"), variant: "destructive" });
      return;
    }
    setBusy("rotate");
    try {
      const res = await fetch("/api/storage", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ action: "rotate" }),
      });
      const data = await res.json().catch(() => ({}));
      toast({
        title: data?.ok
          ? `${t("ok")} — ${data.detail ?? ""}`
          : data?.detail ?? t("fail"),
        variant: data?.ok ? "default" : "destructive",
      });
    } finally {
      setBusy(null);
      void load(token);
    }
  };

  const testAcc = async (id: string) => {
    if (!token) {
      toast({ title: t("needToken"), variant: "destructive" });
      return;
    }
    setBusy(id + "test");
    try {
      const res = await fetch("/api/storage", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({ action: "test", id }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        detail?: string;
      };
      toast({
        title: data?.ok
          ? t("probeOk")
          : `${t("probeFail")} — ${data?.detail ?? ""}`,
        variant: data?.ok ? "default" : "destructive",
      });
    } finally {
      setBusy(null);
    }
  };

  const addAccount = async () => {
    if (!token) {
      toast({ title: t("needToken"), variant: "destructive" });
      return;
    }
    setBusy("add");
    try {
      const res = await fetch("/api/storage", {
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
        toast({ title: data?.error ?? t("fail"), variant: "destructive" });
      } else {
        toast({
          title: data?.ok
            ? t("probeOk")
            : `${t("probeFail")} — ${data?.detail ?? ""}`,
          variant: data?.ok ? "default" : "destructive",
        });
        setShowAdd(false);
        setForm({
          label: "",
          endpoint: "",
          region: "auto",
          bucket: "",
          accessKey: "",
          secretKey: "",
          publicBaseUrl: "",
        });
      }
    } finally {
      setBusy(null);
      void load(token);
    }
  };

  const saveToken = () => {
    localStorage.setItem(TOKEN_KEY, token.trim());
    toast({ title: t("tokenSaved") });
  };

  const cache = info?.aiCache;

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PiggyBank className="h-5 w-5 text-primary" aria-hidden />
          {t("title")}
        </CardTitle>
        <CardDescription>{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {failed ? (
          <p className="text-sm text-destructive">{t("loadError")}</p>
        ) : !info ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> {t("loading")}
          </div>
        ) : (
          <>
            {/* ── Database usage ── */}
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Database
                  className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                  aria-hidden
                />
                {t("dbTitle")}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t("dbSub")}</p>
              <div className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-1 text-xs sm:grid-cols-3">
                <span>
                  <strong className="font-semibold">{t("cacheTitle")}:</strong>{" "}
                  {cache
                    ? `${fmtBytes(cache.bytes)} / ${fmtBytes(cache.maxBytes)}`
                    : "—"}
                </span>
                <span>
                  <strong className="font-semibold">
                    {t("cacheTitle")} ({t("rows")}):
                  </strong>{" "}
                  {cache?.rows ?? "—"}
                </span>
                {(info.tables ?? [])
                  .filter((tb) => tb.model !== "AiCache")
                  .slice(0, 7)
                  .map((tb) => (
                    <span key={tb.model} className="truncate">
                      {tb.model}: {tb.rows} {t("rows")}
                    </span>
                  ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{t("cacheSub")}</p>
            </div>

            {/* ── Bandwidth note ── */}
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Gauge
                  className="h-4 w-4 text-violet-600 dark:text-violet-400"
                  aria-hidden
                />
                {t("bandwidthTitle")}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {t("bandwidthSub")}
              </p>
            </div>

            {/* ── Pool ── */}
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <HardDrive
                  className="h-4 w-4 text-amber-600 dark:text-amber-400"
                  aria-hidden
                />
                {t("poolTitle")}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t("poolSub")}</p>

              <div className="mt-3 space-y-2">
                {(info.accounts ?? []).length === 0 ? (
                  <p className="text-xs italic text-muted-foreground">
                    {t("poolEmpty")}
                  </p>
                ) : (
                  (info.accounts ?? []).map((a) => (
                    <div
                      key={a.id}
                      className="flex flex-wrap items-center gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5"
                    >
                      <Badge
                        variant={a.status === "active" ? "default" : "secondary"}
                        className="shrink-0 text-[11px]"
                      >
                        {a.status === "active"
                          ? t("active")
                          : a.status === "exhausted"
                            ? t("exhausted")
                            : t("disabled")}
                      </Badge>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium">
                        {a.label}
                      </span>
                      <span className="max-w-full truncate text-[11px] text-muted-foreground sm:max-w-[45%]">
                        {a.publicBaseUrl}
                      </span>
                      <div className="flex gap-1.5">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 rounded-full px-2.5 text-[11px]"
                          onClick={() => testAcc(a.id)}
                          disabled={busy === a.id + "test"}
                          aria-label={t("test")}
                        >
                          {busy === a.id + "test" ? (
                            <Loader2 className="h-3 w-3 animate-spin" aria-hidden />
                          ) : (
                            <CheckCircle2 className="h-3 w-3" aria-hidden />
                          )}
                          {t("test")}
                        </Button>
                        {a.status === "active" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 rounded-full px-2.5 text-[11px]"
                            onClick={() => act(a.id, "disable")}
                            disabled={Boolean(busy)}
                            aria-label={t("disable")}
                          >
                            <Power className="h-3 w-3" aria-hidden />
                            {t("disable")}
                          </Button>
                        ) : a.status !== "disabled" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 rounded-full px-2.5 text-[11px]"
                            onClick={() => act(a.id, "activate")}
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
                          onClick={() => act(a.id, "del", "DELETE")}
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

              {(info.accounts ?? []).length > 0 && (
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
                      ["endpoint", "endpoint"],
                      ["region", "region"],
                      ["bucket", "bucket"],
                      ["accessKey", "accessKey"],
                      ["secretKey", "secretKey"],
                      ["publicBaseUrl", "publicBaseUrl"],
                    ] as const
                  ).map(([key, labelKey]) => (
                    <div key={key} className="space-y-1">
                      <Label htmlFor={`pool-${key}`} className="text-xs">
                        {t(`addField.${labelKey}`)}
                      </Label>
                      <Input
                        id={`pool-${key}`}
                        value={form[key]}
                        type={
                          key === "secretKey" || key === "accessKey"
                            ? "password"
                            : "text"
                        }
                        onChange={(e) =>
                          setForm((f) => ({ ...f, [key]: e.target.value }))
                        }
                        className="h-9 text-sm"
                        autoComplete="off"
                      />
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="h-9 flex-1 rounded-full text-xs font-semibold"
                      onClick={addAccount}
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
                      <XCircle className="h-3.5 w-3.5" aria-hidden />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* ── Admin token ── */}
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <KeyRound
                  className="h-4 w-4 text-sky-600 dark:text-sky-400"
                  aria-hidden
                />
                {t("token")}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {t("tokenHint")}
              </p>
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
                  onClick={saveToken}
                  aria-label={t("ok")}
                >
                  {t("ok")}
                </Button>
              </div>
            </div>

            {/* ── Zero-cost note ── */}
            <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-3.5 dark:border-emerald-900 dark:bg-emerald-950/40">
              <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                {t("noteTitle")}
              </p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs text-emerald-800/90 dark:text-emerald-300/90">
                {NOTE_SLOTS.map((i) => (
                  <li key={i}>{t(`noteItems.${i}`)}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

// next-intl exposes JSON arrays as noteItems.0, noteItems.1 … — stable slots.
const NOTE_SLOTS = [0, 1, 2, 3];
