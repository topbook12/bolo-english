"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Languages, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, localeMeta, type Locale } from "@/i18n/config";
import { setLocaleCookie } from "@/i18n/locale-cookie";

export default function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("locale");
  const locale = useLocale();
  const router = useRouter();

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    setLocaleCookie(next);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 rounded-full border-border/70 bg-card/80"
          aria-label={t("switch")}
        >
          <Languages className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold">
            {compact ? localeMeta[locale as Locale]?.flag : localeMeta[locale as Locale]?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => setLocale(l)}
            className="gap-2.5 py-2.5"
            aria-current={l === locale ? "true" : undefined}
          >
            <span className="text-base leading-none">{localeMeta[l].flag}</span>
            <span className="flex-1 text-sm font-medium">{localeMeta[l].label}</span>
            {l === locale && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
