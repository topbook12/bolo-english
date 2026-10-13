"use client";

import { useTranslations } from "next-intl";
import { Settings, LogOut, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth, useAuthInit } from "@/hooks/use-auth";

export interface UserMenuProps {
  onOpenSettings?: () => void;
}

export default function UserMenu({ onOpenSettings }: UserMenuProps) {
  const t = useTranslations("auth");
  useAuthInit(); // no-op if AuthButton already initialized
  const user = useAuth((s) => s.user);
  const busy = useAuth((s) => s.busy);
  const logout = useAuth((s) => s.logout);

  const handleLogout = async () => {
    await logout();
  };

  const initial = (user?.name || user?.email || "?").trim().charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 rounded-full p-0"
          aria-label={t("accountMenu")}
        >
          <Avatar className="h-9 w-9 border border-border/70">
            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">
              {initial}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 rounded-xl p-1.5">
        <DropdownMenuLabel className="px-2 py-2">
          <p className="truncate text-sm font-semibold">{user?.name || t("guest")}</p>
          <p className="mt-0.5 truncate text-xs font-normal text-muted-foreground">
            {user?.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={onOpenSettings}
            className="gap-2.5 rounded-lg py-2.5"
            aria-label={t("settings")}
          >
            <Settings className="h-4 w-4 text-primary" />
            <span className="flex-1 text-sm font-medium">{t("settings")}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleLogout}
            disabled={busy}
            className="gap-2.5 rounded-lg py-2.5 text-destructive focus:text-destructive"
            aria-label={t("logout")}
          >
            {busy ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <LogOut className="h-4 w-4" />
            )}
            <span className="flex-1 text-sm font-medium">
              {busy ? t("loggingOut") : t("logout")}
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
