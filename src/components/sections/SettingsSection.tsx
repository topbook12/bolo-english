"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  KeyRound,
  Eye,
  EyeOff,
  Trash2,
  Download,
  ShieldCheck,
  ExternalLink,
  Save,
  User as UserIcon,
  Settings2,
  Languages,
  Sparkles,
  LogOut,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDevice } from "@/hooks/use-device";
import { useAuth, useAuthInit } from "@/hooks/use-auth";
import AuthDialog from "@/components/auth/AuthDialog";
import LocaleSwitcher from "@/i18n/LocaleSwitcher";
import { usePwaInstall } from "@/components/pwa/PwaRegister";
import { useToast } from "@/hooks/use-toast";
import { sanitizeApiKey } from "@/lib/key-format";
import SectionHeader from "@/components/shared/SectionHeader";
import PointList from "@/components/shared/PointList";
import type { UserConfig as ApiUserConfig } from "@/hooks/use-device";

// Labels render via tCommon("level.*") — always in the user's UI language.
const LEVELS = [{ value: "beginner" }, { value: "intermediate" }, { value: "advanced" }] as const;

export default function SettingsSection() {
  const t = useTranslations("settings");
  const tCommon = useTranslations("common");
  const tAuth = useTranslations("auth");
  const { deviceId, hasKey, keyPreview, displayName, level, storageError, setConfig } =
    useDevice();
  const user = useAuth((s) => s.user);
  const authBusy = useAuth((s) => s.busy);
  const logout = useAuth((s) => s.logout);
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [name, setName] = useState(displayName ?? "");
  const [saving, setSaving] = useState<"key" | "profile" | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const { toast } = useToast();
  const { canInstall, promptInstall } = usePwaInstall();
  useAuthInit(); // keep the account card in sync even without the header button

  const saveKey = async () => {
    // Sanitize on the client too: strip invisible chars picked up while
    // copying (zero-width spaces, BOM, quotes, wrapped newlines).
    const cleaned = sanitizeApiKey(apiKey);
    if (!cleaned) {
      // Never fail silently — tell the user what to do.
      toast({
        title: t("apiKey.pasteFirst"),
        description: t("apiKey.freeKey"),
        variant: "destructive",
      });
      return;
    }
    setSaving("key");
    try {
      const res = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, apiKey: cleaned }),
      });
      const json = await res.json().catch(() => null);
      if (!json) throw new Error(t("apiKey.unexpectedResponse"));
      if (!json.ok) throw new Error(json.error);
      setConfig({
        hasKey: json.data.hasKey,
        keyPreview: json.data.keyPreview,
        displayName: json.data.displayName,
        level: json.data.level,
      });
      setApiKey("");
      if (json.warning) {
        // Key stored, but verification couldn't complete (quota, network,
        // Google hiccup). Make that visible instead of a fake success.
        toast({
          title: t("apiKey.savedTitle"),
          description: json.warning,
          variant: "destructive",
        });
      } else {
        toast({ title: t("apiKey.savedTitle"), description: t("apiKey.savedDesc") });
      }
    } catch (e) {
      toast({ title: t("errors.saveFailed"), description: (e as Error).message, variant: "destructive" });
    } finally {
      setSaving(null);
    }
  };

  const saveProfile = async () => {
    setSaving("profile");
    try {
      const res = await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, displayName: name, level }),
      });
      const json: { ok: boolean; data?: ApiUserConfig; error?: string } = await res
        .json()
        .catch(() => null);
      if (!json) throw new Error(t("apiKey.unexpectedResponse"));
      if (!json.ok) throw new Error(json.error);
      setConfig({ displayName: json.data?.displayName ?? name, level: json.data?.level ?? level });
      toast({ title: t("profile.updatedTitle") });
    } catch (e) {
      toast({ title: t("errors.saveFailed"), description: (e as Error).message, variant: "destructive" });
    } finally {
      setSaving(null);
    }
  };

  const removeKey = async () => {
    try {
      const res = await fetch(`/api/config?deviceId=${deviceId}`, { method: "DELETE" });
      const json = await res.json().catch(() => null);
      if (!json?.ok) throw new Error(json?.error);
      setConfig({ hasKey: false, keyPreview: null });
      toast({ title: t("apiKey.removedTitle") });
    } catch (e) {
      toast({
        title: t("errors.removeFailed"),
        description: (e as Error)?.message,
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast({ title: tAuth("logoutSuccess") });
    } catch {
      toast({ title: tAuth("logoutFailed"), variant: "destructive" });
    }
  };

  const avatarInitial = (user?.name || user?.email || "?").trim().charAt(0).toUpperCase();

  return (
    <div className="mx-auto max-w-2xl">
      <SectionHeader icon={Settings2} title={t("title")} subtitle={t("subtitle")} tint="violet" />

      <div className="space-y-5">
        {/* ── Account ── */}
        <Card className="premium-card border-border/70 rounded-2xl bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {t("account.title")}
            </CardTitle>
            <CardDescription>{t("account.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/40 p-3.5">
                  <Avatar className="h-11 w-11 border border-border/60">
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-base font-bold text-white">
                      {avatarInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{user.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    disabled={authBusy}
                    className="min-h-11 gap-1.5 rounded-full border-border/70 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    aria-label={tAuth("logout")}
                  >
                    {authBusy ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    ) : (
                      <LogOut className="h-4 w-4" />
                    )}
                    <span className="text-xs font-semibold">
                      {authBusy ? tAuth("loggingOut") : tAuth("logout")}
                    </span>
                  </Button>
                </div>
                <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
                  <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                      {t("account.synced")}
                    </p>
                    <p className="mt-0.5 text-xs text-emerald-800/80 dark:text-emerald-300/80">
                      {t("account.syncedNote")}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <PointList
                  items={[
                    <span key="b1">
                      <strong className="font-semibold">{t("account.benefit1")}</strong>
                    </span>,
                    t("account.benefit2"),
                    t("account.benefit3"),
                  ]}
                />
                <div>
                  <Button
                    onClick={() => setAuthOpen(true)}
                    className="btn-shine h-12 w-full gap-2 rounded-xl text-sm font-semibold sm:w-auto sm:px-6"
                  >
                    <Sparkles className="h-4 w-4" aria-hidden />
                    {t("account.cta")}
                  </Button>
                  <p className="mt-2 text-xs text-muted-foreground">{t("account.ctaSub")}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ── Language ── */}
        <Card className="premium-card border-border/70 rounded-2xl bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" />
              {t("language.title")}
            </CardTitle>
            <CardDescription>{t("language.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/40 p-3.5"
              role="group"
              aria-label={t("language.label")}
            >
              <span className="text-sm font-medium">{t("language.label")}</span>
              <LocaleSwitcher />
            </div>
          </CardContent>
        </Card>

        {/* ── API Key ── */}
        <Card className="premium-card border-border/70 rounded-2xl bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              {t("apiKey.title")}
              {hasKey ? (
                <Badge className="ml-auto bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <ShieldCheck className="mr-1 h-3 w-3" /> {t("apiKey.active")}
                </Badge>
              ) : (
                <Badge variant="outline" className="ml-auto border-amber-400 text-amber-600">
                  {t("apiKey.needed")}
                </Badge>
              )}
            </CardTitle>
            <CardDescription>{t("apiKey.desc")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {storageError && (
              <Alert className="rounded-xl border-red-300 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/40 dark:text-red-200">
                <KeyRound className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong className="font-semibold">{t("apiKey.storageDown")}</strong>
                  <span className="mt-0.5 block text-xs opacity-80">{storageError}</span>
                </AlertDescription>
              </Alert>
            )}
            {hasKey && (
              <Alert className="rounded-xl border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                <ShieldCheck className="h-4 w-4" />
                <AlertDescription className="flex items-center justify-between gap-2 text-sm">
                  <span>
                    {t("apiKey.currentKey")}{" "}
                    <code className="font-mono font-semibold">{keyPreview}</code>
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 gap-1 text-destructive hover:text-destructive"
                    onClick={removeKey}
                  >
                    <Trash2 className="h-3.5 w-3.5" /> {t("apiKey.remove")}
                  </Button>
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="apikey">
                {hasKey ? t("apiKey.newKey") : t("apiKey.yourKey")}
              </Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    id="apikey"
                    type={showKey ? "text" : "password"}
                    placeholder="AIza..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    autoComplete="off"
                    className="h-11 rounded-xl pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    onClick={() => setShowKey((s) => !s)}
                    aria-label={showKey ? t("apiKey.hide") : t("apiKey.show")}
                  >
                    {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <Button
                  onClick={saveKey}
                  disabled={!apiKey.trim() || saving === "key"}
                  className="min-h-11 gap-1.5 rounded-xl"
                >
                  <Save className="h-4 w-4" />
                  {saving === "key" ? t("apiKey.verifying") : t("apiKey.save")}
                </Button>
              </div>
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

            <ul className="space-y-1.5 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                {t("apiKey.safety1")}
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                {t("apiKey.safety2")}
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                {t("apiKey.safety3")}
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ── Profile ── */}
        <Card className="premium-card border-border/70 rounded-2xl bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" />
              {t("profile.title")}
            </CardTitle>
            <CardDescription>{t("profile.desc")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="name">{t("profile.name")}</Label>
              <Input
                id="name"
                value={name}
                maxLength={24}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-xl"
              />
            </div>
            <div className="space-y-1.5">
              <Label>{t("profile.levelLabel")}</Label>
              <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={t("profile.levelLabel")}>
                {LEVELS.map((l) => (
                  <button
                    key={l.value}
                    role="radio"
                    aria-checked={level === l.value}
                    onClick={() => setConfig({ level: l.value })}
                    className={`min-h-11 rounded-xl border px-2 py-2.5 text-sm font-medium transition-colors ${
                      level === l.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:bg-accent"
                    }`}
                  >
                    {tCommon(`level.${l.value}`)}
                  </button>
                ))}
              </div>
            </div>
            <Button
              onClick={saveProfile}
              disabled={saving === "profile"}
              className="h-11 w-full gap-1.5 rounded-xl"
            >
              <Save className="h-4 w-4" />
              {t("profile.save")}
            </Button>
          </CardContent>
        </Card>

        {/* ── PWA install ── */}
        <Card className="premium-card border-border/70 rounded-2xl bg-card">
          <CardHeader>
            <CardTitle>{t("pwa.title")}</CardTitle>
            <CardDescription>{t("pwa.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            {canInstall ? (
              <Button onClick={promptInstall} className="min-h-11 gap-1.5 rounded-xl">
                <Download className="h-4 w-4" /> {t("pwa.install")}
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">
                {t("pwa.manualPre")}{" "}
                <strong>{t("pwa.manualBold")}</strong> {t("pwa.manualPost")}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} defaultTab="register" />
    </div>
  );
}
