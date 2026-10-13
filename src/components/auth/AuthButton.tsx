"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthDialog from "./AuthDialog";
import UserMenu from "./UserMenu";
import { useAuth, useAuthInit } from "@/hooks/use-auth";

// Header auth entry point. Contract kept: {onOpenSettings?: () => void}.
// Logged out → compact login button opening the AuthDialog (login tab);
// logged in → the avatar UserMenu dropdown.

export default function AuthButton({ onOpenSettings }: { onOpenSettings?: () => void }) {
  const t = useTranslations("auth");
  useAuthInit(); // fires /api/auth/me once per page load
  const user = useAuth((s) => s.user);
  const [open, setOpen] = useState(false);

  if (user) {
    return <UserMenu onOpenSettings={onOpenSettings} />;
  }

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="gap-1.5 rounded-full border-border/70 bg-card/80"
        onClick={() => setOpen(true)}
        aria-label={t("login")}
      >
        <LogIn className="h-3.5 w-3.5 text-primary" />
        <span className="hidden text-xs font-semibold sm:inline">{t("login")}</span>
      </Button>
      <AuthDialog open={open} onOpenChange={setOpen} defaultTab="login" />
    </>
  );
}
