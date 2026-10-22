"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Eye,
  EyeOff,
  Loader2,
  LogIn,
  UserPlus,
  AlertCircle,
  Mail,
  Check,
  Lock,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useDevice } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { localeMeta, type Locale } from "@/i18n/config";

// Login-first gate (Task 27-c): the pre-login screen every first-time
// visitor sees. Login mode = email + password. Register mode adds the
// NATIVE LANGUAGE picker — বাংলা / हिन्दी / English as big tappable cards
// labeled in their own scripts. The chosen language is saved on the account
// and LOCKED (no switcher anywhere in the app); the register/login API sets
// the bolo_locale cookie, then router.refresh() re-renders the RSC tree in
// the account language with the session active.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Native-script labels are intentional — the cards must be self-explanatory
// in the learner's own language, whatever the current UI locale is.
const LANG_CARDS: { value: Locale; label: string; subKey: string }[] = [
  { value: "bn", label: "বাংলা", subKey: "gateLangBnSub" },
  { value: "hi", label: "हिन्दी", subKey: "gateLangHiSub" },
  { value: "en", label: "English", subKey: "gateLangEnSub" },
];

export default function LoginGate() {
  const t = useTranslations("auth");
  const locale = useLocale();
  const router = useRouter();
  const { toast } = useToast();

  const [tab, setTab] = useState<"login" | "register">("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  // Preselect the current UI locale (bn default) — the most likely choice.
  const [lang, setLang] = useState<Locale>(() => (locale === "hi" ? "hi" : locale === "en" ? "en" : "bn"));
  const [fieldErr, setFieldErr] = useState<{ email?: string; password?: string; lang?: string }>({});
  const [serverErr, setServerErr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  /** deviceId must exist before login/register (device merge on the server) */
  const ensureDeviceId = async (): Promise<string> => {
    if (!useDevice.getState().deviceId) {
      await useDevice.getState().refresh();
    }
    return useDevice.getState().deviceId;
  };

  const switchTab = (next: string) => {
    setTab(next as "login" | "register");
    setFieldErr({});
    setServerErr(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof fieldErr = {};
    if (!EMAIL_RE.test(email.trim())) errs.email = t("errEmail");
    if (password.length < 6) errs.password = t("errPassword");
    if (tab === "register" && !LANG_CARDS.some((c) => c.value === lang)) errs.lang = t("gateLangRequired");
    setFieldErr(errs);
    setServerErr(null);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const deviceId = await ensureDeviceId();
      const res = await fetch(`/api/auth/${tab}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceId,
          email: email.trim(),
          password,
          ...(tab === "register" ? { nativeLang: lang, ...(name.trim() ? { name: name.trim() } : {}) } : {}),
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json?.ok) {
        // Server errors arrive already localized to the user's UI language.
        setServerErr(json?.error || t("serverError"));
        return;
      }
      // Session cookie + bolo_locale cookie are set server-side; the RSC
      // refresh re-renders page.tsx into the app shell, in the account's
      // language from the very first frame.
      toast({
        title: tab === "register" ? t("gateWelcome") : t("loginSuccess"),
        description:
          tab === "register"
            ? t("gateLangChosen", { lang: LANG_CARDS.find((c) => c.value === lang)?.label ?? "" })
            : undefined,
      });
      router.refresh();
    } catch {
      setServerErr(t("serverError"));
    } finally {
      setSubmitting(false);
    }
  };

  const LangCards = (
    <fieldset className="space-y-2">
      <legend className="text-sm font-semibold">{t("gateLangTitle")}</legend>
      <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
        <span>{t("gateLangHint")}</span>
      </p>
      <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={t("gateLangTitle")}>
        {LANG_CARDS.map((c) => {
          const selected = lang === c.value;
          return (
            <button
              key={c.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => {
                setLang(c.value);
                setFieldErr((s) => ({ ...s, lang: undefined }));
              }}
              className={`relative flex min-h-[96px] flex-col items-center justify-center gap-0.5 rounded-2xl border p-2 text-center transition-all duration-200 ${
                selected
                  ? "border-primary bg-emerald-50 shadow-md ring-2 ring-primary/50 dark:bg-emerald-950/40"
                  : "border-border bg-background/60 hover:border-primary/40 hover:bg-accent/60"
              }`}
            >
              {selected && (
                <span
                  aria-hidden
                  className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
                >
                  <Check className="h-3 w-3" />
                </span>
              )}
              <span className="text-lg leading-none" aria-hidden>
                {localeMeta[c.value].flag}
              </span>
              <span className="text-base font-bold leading-tight">{c.label}</span>
              <span className="text-[11px] leading-tight text-muted-foreground">{t(c.subKey)}</span>
            </button>
          );
        })}
      </div>
      {fieldErr.lang && (
        <p className="text-xs font-medium text-destructive">{fieldErr.lang}</p>
      )}
    </fieldset>
  );

  const PasswordField = (
    <div className="space-y-1.5">
      <Label htmlFor="gate-password">{t("password")}</Label>
      <div className="relative">
        <Input
          id="gate-password"
          type={showPw ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t("passwordPlaceholder")}
          autoComplete={tab === "login" ? "current-password" : "new-password"}
          aria-invalid={!!fieldErr.password}
          aria-describedby={fieldErr.password ? "gate-password-err" : "gate-password-hint"}
          className="h-11 rounded-xl pr-11"
        />
        <button
          type="button"
          onClick={() => setShowPw((s) => !s)}
          aria-label={showPw ? t("hidePassword") : t("showPassword")}
          className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {fieldErr.password ? (
        <p id="gate-password-err" className="text-xs font-medium text-destructive">
          {fieldErr.password}
        </p>
      ) : (
        <p id="gate-password-hint" className="text-xs text-muted-foreground">
          {t("passwordHint")}
        </p>
      )}
    </div>
  );

  const ServerError = serverErr ? (
    <Alert variant="destructive" role="alert" className="rounded-xl">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-sm">{serverErr}</AlertDescription>
    </Alert>
  ) : null;

  return (
    <div className="shell-bg relative flex min-h-screen flex-col overflow-hidden">
      <span className="hero-aurora" aria-hidden />

      {/* Brand header — same wordmark style as the app header */}
      <header className="relative z-10 flex flex-col items-center gap-2 px-4 pb-2 pt-9 text-center sm:pt-12">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal-600 text-primary-foreground shadow-lg">
          <Sparkles className="h-6 w-6" aria-hidden />
        </span>
        <span className="text-2xl font-bold tracking-tight">Bolo English</span>
        <span className="text-sm text-muted-foreground">{t("gateTagline")}</span>
      </header>

      <main className="relative z-10 flex flex-1 items-start justify-center px-4 pb-12 pt-5 sm:items-center sm:pt-8">
        <div className="premium-card w-full max-w-md overflow-hidden rounded-3xl bg-card/95 shadow-xl backdrop-blur">
          <div className="bg-hero-gradient border-b border-border/60 px-6 pb-5 pt-6 text-center">
            <h1 className="text-lg font-bold tracking-tight">
              {tab === "login" ? t("gateLoginTitle") : t("gateRegisterTitle")}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {tab === "login" ? t("loginTabDesc") : t("registerTabDesc")}
            </p>
          </div>

          <div className="px-5 py-6 sm:px-6">
            <Tabs value={tab} onValueChange={switchTab}>
              <TabsList className="mb-5 grid h-11 w-full grid-cols-2 rounded-xl">
                <TabsTrigger value="register" className="gap-1.5 rounded-lg text-sm font-semibold">
                  <UserPlus className="h-4 w-4" aria-hidden />
                  {t("register")}
                </TabsTrigger>
                <TabsTrigger value="login" className="gap-1.5 rounded-lg text-sm font-semibold">
                  <LogIn className="h-4 w-4" aria-hidden />
                  {t("login")}
                </TabsTrigger>
              </TabsList>

              {/* REGISTER — first visit default: account + native language choice */}
              <TabsContent value="register">
                <form onSubmit={submit} className="space-y-4" noValidate>
                  <div className="space-y-1.5">
                    <Label htmlFor="gate-name">
                      {t("name")} <span className="text-muted-foreground">{t("nameOptional")}</span>
                    </Label>
                    <Input
                      id="gate-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("namePlaceholder")}
                      maxLength={40}
                      autoComplete="name"
                      className="h-11 rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="gate-email">{t("email")}</Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                      <Input
                        id="gate-email"
                        type="email"
                        inputMode="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("emailPlaceholder")}
                        autoComplete="email"
                        aria-invalid={!!fieldErr.email}
                        aria-describedby={fieldErr.email ? "gate-email-err" : undefined}
                        className="h-11 rounded-xl pl-9"
                      />
                    </div>
                    {fieldErr.email && (
                      <p id="gate-email-err" className="text-xs font-medium text-destructive">
                        {fieldErr.email}
                      </p>
                    )}
                  </div>

                  {PasswordField}

                  {LangCards}

                  {ServerError}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="btn-shine h-12 w-full gap-2 rounded-xl text-sm font-semibold"
                  >
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                    {submitting ? t("creating") : t("registerBtn")}
                  </Button>
                </form>
              </TabsContent>

              {/* LOGIN — returning accounts */}
              <TabsContent value="login">
                <form onSubmit={submit} className="space-y-4" noValidate>
                  <div className="space-y-1.5">
                    <Label htmlFor="gate-email-login">{t("email")}</Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                      <Input
                        id="gate-email-login"
                        type="email"
                        inputMode="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("emailPlaceholder")}
                        autoComplete="email"
                        aria-invalid={!!fieldErr.email}
                        aria-describedby={fieldErr.email ? "gate-email-err" : undefined}
                        className="h-11 rounded-xl pl-9"
                      />
                    </div>
                    {fieldErr.email && (
                      <p id="gate-email-err" className="text-xs font-medium text-destructive">
                        {fieldErr.email}
                      </p>
                    )}
                  </div>

                  {PasswordField}

                  {ServerError}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="btn-shine h-12 w-full gap-2 rounded-xl text-sm font-semibold"
                  >
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                    {submitting ? t("loggingIn") : t("loginBtn")}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <p className="mt-4 flex min-h-[44px] items-center justify-center text-center text-sm text-muted-foreground">
              {tab === "login" ? t("noAccount") : t("haveAccount")}{" "}
              <button
                type="button"
                onClick={() => switchTab(tab === "login" ? "register" : "login")}
                className="inline-flex min-h-[44px] items-center px-2 font-semibold text-primary hover:underline"
              >
                {tab === "login" ? t("switchToRegister") : t("switchToLogin")}
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
