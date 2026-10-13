"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Users,
  Video,
  Bot,
  Sparkles,
  UserPlus,
  LogIn,
  Mic,
  ArrowLeft,
  Lightbulb,
  Compass,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeader from "@/components/shared/SectionHeader";
import PointList from "@/components/shared/PointList";
import { useDevice } from "@/hooks/use-device";
import AiPartner from "@/components/speaking/AiPartner";
import CallFlow, { type CallIntent } from "@/components/speaking/CallFlow";

type Mode = "menu" | "call" | "ai";

export default function SpeakingSection() {
  const t = useTranslations("speaking");
  const tCommon = useTranslations("common");
  const { hasKey } = useDevice();
  const [mode, setMode] = useState<Mode>("menu");
  const [intent, setIntent] = useState<CallIntent>("one");
  const [code, setCode] = useState<string | undefined>(undefined);
  const [joinCode, setJoinCode] = useState("");

  const startCall = (nextIntent: CallIntent, withCode?: string) => {
    setIntent(nextIntent);
    setCode(withCode);
    setMode("call");
  };

  if (mode === "call") {
    return <CallFlow intent={intent} code={code} onExit={() => setMode("menu")} />;
  }

  if (mode === "ai") {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <SectionHeader icon={Bot} tint="amber" title={t("ai.title")} subtitle={t("partner.tagline")}>
          <Button
            variant="outline"
            onClick={() => setMode("menu")}
            className="min-h-11 gap-1.5 rounded-xl"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {tCommon("back")}
          </Button>
        </SectionHeader>
        <AiPartner />
      </div>
    );
  }

  const onePoints = t.raw("one.points") as string[];
  const groupPoints = t.raw("group.points") as string[];
  const aiPoints = t.raw("ai.points") as string[];
  const howItems = t.raw("how.items") as string[];

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <SectionHeader icon={Mic} tint="emerald" title={t("title")} subtitle={t("subtitle")} />

      {/* 1:1 partner */}
      <Card className="premium-card animate-fade-in-up-1 rounded-2xl border-border/70 py-0">
        <CardContent className="space-y-3 p-4 sm:p-6">
          <div className="flex items-start gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/90 to-teal-500/90 text-white shadow-md">
              <Users className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold sm:text-lg">{t("one.title")}</h2>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{t("one.desc")}</p>
            </div>
          </div>
          <PointList items={onePoints} />
          <Button
            onClick={() => startCall("one")}
            className="btn-shine h-11 w-full gap-2 rounded-xl sm:w-auto"
          >
            <UserPlus className="h-4 w-4" aria-hidden="true" /> {t("one.cta")}
          </Button>
        </CardContent>
      </Card>

      {/* group room */}
      <Card className="premium-card animate-fade-in-up-2 rounded-2xl border-border/70 py-0">
        <CardContent className="space-y-3 p-4 sm:p-6">
          <div className="flex items-start gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500/90 to-cyan-600/90 text-white shadow-md">
              <Video className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold sm:text-lg">{t("group.title")}</h2>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                {t("group.desc")}
              </p>
            </div>
          </div>
          <PointList items={groupPoints} />
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button onClick={() => startCall("group")} className="h-11 gap-2 rounded-xl">
              <Video className="h-4 w-4" aria-hidden="true" /> {t("group.newRoom")}
            </Button>
            <div className="flex gap-2">
              <Input
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder={t("group.codePlaceholder")}
                maxLength={6}
                className="h-11 w-full min-w-0 font-mono uppercase tracking-widest sm:w-32"
                aria-label={t("group.codePlaceholder")}
              />
              <Button
                onClick={() => startCall("group-code", joinCode.trim())}
                variant="outline"
                disabled={joinCode.length !== 6}
                className="h-11 shrink-0 gap-2 rounded-xl"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" /> {t("group.join")}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI partner */}
      <Card className="premium-card animate-fade-in-up-3 rounded-2xl border-border/70 py-0">
        <CardContent className="space-y-3 p-4 sm:p-6">
          <div className="flex items-start gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/90 to-orange-500/90 text-white shadow-md">
              <Bot className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold sm:text-lg">{t("ai.title")}</h2>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{t("ai.desc")}</p>
            </div>
          </div>
          <PointList items={aiPoints} />
          <Button
            onClick={() => setMode("ai")}
            variant="outline"
            className="h-11 w-full gap-2 rounded-xl sm:w-auto"
          >
            <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" aria-hidden="true" />
            {t("ai.cta")}
          </Button>
        </CardContent>
      </Card>

      {/* how it works */}
      <section
        aria-label={t("how.title")}
        className="premium-card animate-fade-in-up-3 rounded-2xl py-0"
      >
        <CardContent className="p-4 sm:p-6">
          <h2 className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            {t("how.title")}
          </h2>
          <PointList variant="number" items={howItems} />
        </CardContent>
      </section>

      {!hasKey && (
        <p className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2.5 text-xs leading-relaxed text-amber-700 dark:text-amber-300">
          <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {t("keyNote")}
        </p>
      )}

      {/* illustration + mic tip */}
      <div className="flex items-center gap-4 rounded-2xl border border-dashed border-border/70 bg-card/50 p-4">
        <Image
          src="/illustrations/ill-speaking.webp"
          alt=""
          width={96}
          height={96}
          className="animate-float h-20 w-auto shrink-0 object-contain sm:h-24"
        />
        <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <Mic
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
            aria-hidden="true"
          />
          <span>{t("micTip")}</span>
        </p>
      </div>
    </div>
  );
}
