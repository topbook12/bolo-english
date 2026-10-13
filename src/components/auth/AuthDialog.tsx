"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Sparkles,
  Eye,
  EyeOff,
  Loader2,
  LogIn,
  UserPlus,
  AlertCircle,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: "login" | "register";
}

export default function AuthDialog({
  open,
  onOpenChange,
  defaultTab = "login",
}: AuthDialogProps) {
  const t = useTranslations("auth");
  const { toast } = useToast();
  const login = useAuth((s) => s.login);
  const register = useAuth((s) => s.register);

  const [tab, setTab] = useState<"login" | "register">(defaultTab);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [fieldErr, setFieldErr] = useState<{ email?: string; password?: string }>({});
  const [serverErr, setServerErr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Reset when (re)opened — fresh form every time, keeps focus management clean
  useEffect(() => {
    if (open) {
      setTab(defaultTab);
      setFieldErr({});
      setServerErr(null);
      setShowPw(false);
    }
  }, [open, defaultTab]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof fieldErr = {};
    if (!EMAIL_RE.test(email.trim())) errs.email = t("errEmail");
    if (password.length < 6) errs.password = t("errPassword");
    setFieldErr(errs);
    setServerErr(null);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      if (tab === "login") {
        const user = await login(email.trim(), password);
        toast({ title: t("welcome", { name: user.name }) });
      } else {
        const user = await register(email.trim(), password, name.trim());
        toast({ title: t("welcome", { name: user.name }) });
      }
      onOpenChange(false);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setServerErr((err as Error).message || t("serverError"));
    } finally {
      setSubmitting(false);
    }
  };

  const switchTab = (next: string) => {
    setTab(next as "login" | "register");
    setFieldErr({});
    setServerErr(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined} className="max-w-md gap-0 overflow-hidden rounded-2xl p-0">
        {/* brand header */}
        <div className="bg-hero-gradient relative border-b border-border/60 px-6 pb-5 pt-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2.5 text-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                <Sparkles className="h-4.5 w-4.5" />
              </span>
              {t("dialogTitle")}
            </DialogTitle>
            <DialogDescription className="text-xs">
              {t("brandNote")}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-5">
          <Tabs value={tab} onValueChange={switchTab}>
            <TabsList className="mb-4 grid h-11 w-full grid-cols-2 rounded-xl">
              <TabsTrigger value="login" className="gap-1.5 rounded-lg text-sm font-semibold">
                <LogIn className="h-4 w-4" />
                {t("login")}
              </TabsTrigger>
              <TabsTrigger value="register" className="gap-1.5 rounded-lg text-sm font-semibold">
                <UserPlus className="h-4 w-4" />
                {t("register")}
              </TabsTrigger>
            </TabsList>

            {(tab === "login" ? (
              <TabsContent value="login">
                <p className="mb-4 text-sm text-muted-foreground">{t("loginTabDesc")}</p>
              </TabsContent>
            ) : (
              <TabsContent value="register">
                <p className="mb-4 text-sm text-muted-foreground">{t("registerTabDesc")}</p>
              </TabsContent>
            ))}

            <form onSubmit={submit} className="space-y-4" noValidate>
              {tab === "register" && (
                <div className="space-y-1.5">
                  <Label htmlFor="auth-name">
                    {t("name")} <span className="text-muted-foreground">{t("nameOptional")}</span>
                  </Label>
                  <Input
                    id="auth-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("namePlaceholder")}
                    maxLength={40}
                    autoComplete="name"
                    className="h-11 rounded-xl"
                  />
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="auth-email">{t("email")}</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="auth-email"
                    type="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("emailPlaceholder")}
                    autoComplete="email"
                    aria-invalid={!!fieldErr.email}
                    aria-describedby={fieldErr.email ? "auth-email-err" : undefined}
                    className="h-11 rounded-xl pl-9"
                  />
                </div>
                {fieldErr.email && (
                  <p id="auth-email-err" className="text-xs font-medium text-destructive">
                    {fieldErr.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="auth-password">{t("password")}</Label>
                <div className="relative">
                  <Input
                    id="auth-password"
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("passwordPlaceholder")}
                    autoComplete={tab === "login" ? "current-password" : "new-password"}
                    aria-invalid={!!fieldErr.password}
                    aria-describedby={fieldErr.password ? "auth-password-err" : "auth-password-hint"}
                    className="h-11 rounded-xl pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    aria-label={showPw ? t("hidePassword") : t("showPassword")}
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {fieldErr.password ? (
                  <p id="auth-password-err" className="text-xs font-medium text-destructive">
                    {fieldErr.password}
                  </p>
                ) : (
                  <p id="auth-password-hint" className="text-xs text-muted-foreground">
                    {t("passwordHint")}
                  </p>
                )}
              </div>

              {serverErr && (
                <Alert variant="destructive" role="alert" className="rounded-xl">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">{serverErr}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={submitting}
                className="btn-shine h-11 w-full gap-2 rounded-xl text-sm font-semibold"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                {submitting
                  ? tab === "login"
                    ? t("loggingIn")
                    : t("creating")
                  : tab === "login"
                    ? t("loginBtn")
                    : t("registerBtn")}
              </Button>
            </form>
          </Tabs>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            {tab === "login" ? t("noAccount") : t("haveAccount")}{" "}
            <button
              type="button"
              onClick={() => switchTab(tab === "login" ? "register" : "login")}
              className="font-semibold text-primary hover:underline"
            >
              {tab === "login" ? t("switchToRegister") : t("switchToLogin")}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
