"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Layers,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  ShieldCheck,
  ExternalLink,
  TimerReset,
  Info,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useDevice } from "@/hooks/use-device";
import { useAuth, useAuthInit } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { sanitizeApiKey } from "@/lib/key-format";

// Gemini KEY POOL manager (owner requirement): several keys per account;
// when the active key hits its quota the backend cools it down and rotates
// to the next healthy key automatically — this card is where the user adds
// and removes pool keys. Previews only: the plaintext key never returns to
// the browser, exactly like the single-key card above.
// NOTE: intentionally NOT wired into SettingsSection yet (separate task).

type PoolKey = {
  id: string;
  keyPreview: string;
  active: boolean;
  inCooldown: boolean;
  failures: number;
};

const MAX_POOL_KEYS = 6; // keep in sync with src/lib/key-pool.ts

export default function KeyPoolCard() {
  const t = useTranslations("settings");
  const { deviceId, setConfig } = useDevice();
  const user = useAuth((s) => s.user);
  useAuthInit();
  const { toast } = useToast();

  const [pool, setPool] = useState<PoolKey[] | null>(null);
  const [newKey, setNewKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!deviceId) return;
    try {
      const res = await fetch(`/api/config?deviceId=${encodeURIComponent(deviceId)}`, {
        cache: "no-store",
      });
      const json = await res.json().catch(() => null);
      setPool(Array.isArray(json?.data?.pool) ? (json.data.pool as PoolKey[]) : []);
    } catch {
      setPool([]); // dashboard is best-effort; the single-key card surfaces storage errors
    }
  }, [deviceId]);

  useEffect(() => {
    void load();
  }, [load]);

  // Live paste check — same rules as the single-key input (AIza… or AQ.…).
  const cleanedKey = newKey ? sanitizeApiKey(newKey) : "";
  const keyComplete =
    /^AIza[0-9A-Za-z_\-]{35}$/.test(cleanedKey) ||
    /^AQ\.[A-Za-z0-9_\-]{20,}$/.test(cleanedKey);
  const showKeyHint = !!cleanedKey && !keyComplete && !adding;

  const addKey = async () => {
    if (!cleanedKey) {
      toast({
        title: t("apiKey.pasteFirst"),
        description: t("apiKey.freeKey"),
        variant: "destructive",
      });
      return;
    }
    setAdding(true);
    try {
      const res = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, apiKey: cleanedKey }),
      });
      const json = await res.json().catch(() => null);
      if (!json) throw new Error(t("apiKey.unexpectedResponse"));
      if (!json.ok) throw new Error(json.detail ? `${json.error} (${json.detail})` : json.error);
      // First pool key mirrors into the legacy slot — keep the header state in sync.
      setConfig({
        hasKey: json.data.hasKey,
        keyPreview: json.data.keyPreview,
        displayName: json.data.displayName,
        level: json.data.level,
      });
      setNewKey("");
      if (json.warning) {
        toast({ title: t("keyPool.added"), description: json.warning, variant: "destructive" });
      } else {
        toast({ title: json.message ?? t("keyPool.added") });
      }
      await load();
    } catch (e) {
      toast({
        title: t("errors.saveFailed"),
        description: (e as Error).message,
        variant: "destructive",
      });
    } finally {
      setAdding(false);
    }
  };

  const removeKey = async (id: string) => {
    if (!window.confirm(t("keyPool.confirmDelete"))) return;
    setDeletingId(id);
    try {
      const res = await fetch(
        `/api/config?deviceId=${encodeURIComponent(deviceId)}&keyId=${encodeURIComponent(id)}`,
        { method: "DELETE" }
      );
      const json = await res.json().catch(() => null);
      if (!json?.ok) throw new Error(json?.error ?? t("errors.removeFailed"));
      toast({ title: json.message ?? t("keyPool.removed") });
      await load();
    } catch (e) {
      toast({
        title: t("errors.removeFailed"),
        description: (e as Error)?.message,
        variant: "destructive",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/90 to-teal-600/90 text-white shadow-md shadow-emerald-500/30 ring-1 ring-inset ring-white/25 dark:shadow-emerald-500/20">
            <Layers className="h-4.5 w-4.5" aria-hidden />
          </span>
          {t("keyPool.title")}
          {pool && pool.length > 0 && (
            <Badge className="ml-auto bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              {pool.length}/{MAX_POOL_KEYS}
            </Badge>
          )}
        </CardTitle>
        <CardDescription>{t("keyPool.desc")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {!user ? (
          <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
              {t("keyPool.loginNote")}
            </p>
          </div>
        ) : (
          <>
            <div className="rounded-xl border border-border/60 bg-muted/40 p-3.5">
              <div className="space-y-2">
                {!pool || pool.length === 0 ? (
                  <p className="text-xs italic text-muted-foreground">{t("keyPool.empty")}</p>
                ) : (
                  pool.map((k) => (
                    <div
                      key={k.id}
                      className="flex flex-wrap items-center gap-2 rounded-lg border border-border/50 bg-background/60 p-2.5"
                    >
                      {k.active ? (
                        <Badge className="shrink-0 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          <ShieldCheck className="mr-1 h-3 w-3" /> {t("apiKey.active")}
                        </Badge>
                      ) : k.inCooldown ? (
                        <Badge
                          variant="outline"
                          className="shrink-0 border-amber-400 text-amber-600 dark:border-amber-600 dark:text-amber-400"
                        >
                          <TimerReset className="mr-1 h-3 w-3" /> {t("keyPool.cooldownBadge")}
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="shrink-0 text-[11px]">
                          #&hellip;
                        </Badge>
                      )}
                      <code className="min-w-0 flex-1 truncate font-mono text-sm font-semibold">
                        {k.keyPreview}
                      </code>
                      {k.failures > 0 && (
                        <span className="text-[11px] text-muted-foreground">
                          {t("keyPool.failures", { n: k.failures })}
                        </span>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-9 px-3 gap-1 text-destructive hover:text-destructive"
                        onClick={() => removeKey(k.id)}
                        disabled={deletingId === k.id}
                        aria-label={t("apiKey.remove")}
                      >
                        {deletingId === k.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                        ) : (
                          <Trash2 className="h-3.5 w-3.5" />
                        )}
                        {t("apiKey.remove")}
                      </Button>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-3 space-y-1.5">
                <Label htmlFor="keypool-new">{t("keyPool.newKey")}</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="keypool-new"
                      type={showKey ? "text" : "password"}
                      placeholder="AIza… / AQ.…"
                      value={newKey}
                      onChange={(e) => setNewKey(e.target.value)}
                      autoComplete="off"
                      className="h-11 rounded-xl pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      onClick={() => setShowKey((s) => !s)}
                      aria-label={showKey ? t("apiKey.hide") : t("apiKey.show")}
                    >
                      {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <Button
                    onClick={addKey}
                    disabled={!newKey.trim() || adding}
                    className="min-h-11 gap-1.5 rounded-xl"
                  >
                    {adding ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                    {adding ? t("keyPool.adding") : t("keyPool.add")}
                  </Button>
                </div>
                {showKeyHint && (
                  <p
                    className="rounded-lg border border-amber-300/70 bg-amber-50 px-2.5 py-1.5 text-xs text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
                    role="status"
                  >
                    {t("apiKey.keyLooksOff", {
                      len: cleanedKey.length,
                      prefix: cleanedKey.slice(0, 4) || "—",
                    })}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t("apiKey.freeKey")}{" "}
                  <a
                    href="https://aistudio.google.com/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
                  >
                    aistudio.google.com/apikey <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>

            <p className="flex items-start gap-2 text-[11px] text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
              {t("keyPool.maxNote")}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
