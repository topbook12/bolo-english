"use client";

import { Users } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import LeaderboardCard from "@/components/community/LeaderboardCard";
import ChallengeCard from "@/components/community/ChallengeCard";
import PartnerMatchCard from "@/components/community/PartnerMatchCard";
import ProfileCard from "@/components/community/ProfileCard";
import { useTranslations } from "next-intl";

// ─── Community section (Phase 5, ROADMAP-60 D30–D34) ────────────────────────
// Leaderboard (weekly/all-time, privacy-safe names, leagues) · Daily sentence
// challenge (prompt → submit → AI feedback → peer reactions) · Practice
// partners (opt-in matching → one-tap call invite) · Profile (avatar, badges,
// share). Everything is opt-in or read-safe; moderation (D33) gates the
// user-typed content.

export default function CommunitySection({ onNavigate }: { onNavigate: (tab: "speaking") => void }) {
  const t = useTranslations("community");
  return (
    <div className="mx-auto max-w-5xl space-y-5 lg:space-y-6">
      <SectionHeader icon={Users} tint="fuchsia" title={t("title")} subtitle={t("subtitle")} />
      <LeaderboardCard />
      <ChallengeCard />
      <PartnerMatchCard onNavigate={onNavigate} />
      <ProfileCard />
    </div>
  );
}
