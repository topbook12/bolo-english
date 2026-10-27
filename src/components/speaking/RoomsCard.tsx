"use client";

// ─── Public room discovery + scheduled rooms (D20, ROADMAP-60.md) ───────────
// The social layer of "Bolo": see LIVE public practice rooms and join one
// tap later, or schedule a topic room ("practice tonight at 9") that shows
// up for everyone. Lists ride GET /api/call/discover (server-pruned, public
// rooms only); joining reuses the existing group-code flow — no new call
// mechanics. Scheduling is a bounded POST; topics are user-typed but capped.

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CalendarPlus, Compass, Loader2, RefreshCw, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useDeviceValue } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { getDeviceId } from "@/hooks/use-device";
import { cn } from "@/lib/utils";

interface RoomCard {
  code: string;
  topic: string;
  learners: number;
  maxPeers: number;
  host: string;
  scheduledFor: string | null;
}

const GRACE_MS = 5 * 60 * 1000; // scheduled rooms open 5 min early (matches API)

export default function RoomsCard({ onJoin }: { onJoin: (code: string) => void }) {
  const t = useTranslations("speaking.rooms");
  const locale = useLocale() as "en" | "bn" | "hi";
  const { toast } = useToast();
  const deviceId = useDeviceValue((s) => s.deviceId, "");

  const [loading, setLoading] = useState(true);
  const [live, setLive] = useState<RoomCard[]>([]);
  const [upcoming, setUpcoming] = useState<RoomCard[]>([]);
  const [topic, setTopic] = useState("");
  const [when, setWhen] = useState("");
  const [scheduling, setScheduling] = useState(false);
  const aliveRef = useRef(true);
  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
    };
  }, []);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/call/discover", { cache: "no-store" });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        data?: { live?: RoomCard[]; upcoming?: RoomCard[] };
      } | null;
      if (!aliveRef.current) return;
      setLive(json?.data?.live ?? []);
      setUpcoming(json?.data?.upcoming ?? []);
    } catch {
      /* discovery is best-effort — old data stays on screen */
    } finally {
      if (aliveRef.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
    const iv = setInterval(() => void load(), 20_000);
    return () => clearInterval(iv);
  }, [load]);

  // default the datetime input to tonight 21:00 (tomorrow when past)
  useEffect(() => {
    const d = new Date();
    d.setHours(21, 0, 0, 0);
    if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1);
    setWhen(toLocalInput(d));
  }, []);

  const fmtTime = (iso: string) => {
    try {
      return new Intl.DateTimeFormat(locale === "hi" ? "hi" : locale === "bn" ? "bn" : "en", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  };

  async function schedule() {
    if (!topic.trim() || !when || scheduling) return;
    setScheduling(true);
    try {
      const res = await fetch("/api/call/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deviceId: deviceId || getDeviceId(),
          topic: topic.trim(),
          scheduledFor: new Date(when).toISOString(),
          intent: "group",
        }),
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
        data?: { code: string; status: string };
        error?: string;
      } | null;
      if (!res.ok || !json?.ok || !json.data) {
        toast({ title: json?.error || t("failed"), variant: "destructive" });
        return;
      }
      if (json.data.status === "open") {
        toast({ title: t("schedLive") });
        setTopic("");
        onJoin(json.data.code); // started-now room → straight into the call
      } else {
        toast({ title: t("schedOk", { code: json.data.code }) });
        setTopic("");
      }
      void load();
    } catch {
      toast({ title: t("failed"), variant: "destructive" });
    } finally {
      setScheduling(false);
    }
  }

  return (
    <Card className="premium-card border-border/70 rounded-2xl bg-card">
      <CardContent className="space-y-3 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-rose-500" aria-hidden />
            <div>
              <p className="text-sm font-bold">{t("title")}</p>
              <p className="text-xs text-muted-foreground">{t("desc")}</p>
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              setLoading(true);
              void load();
            }}
            className="h-9 w-9 shrink-0"
            aria-label={t("refresh")}
          >
            <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} aria-hidden />
          </Button>
        </div>

        {/* live rooms */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {t("live")}
          </p>
          {live.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border/60 p-3 text-xs text-muted-foreground">
              {t("liveEmpty")}
            </p>
          ) : (
            live.map((r) => (
              <div
                key={r.code}
                className="flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 p-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{r.topic || t("quick")}</p>
                  <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Users className="h-3 w-3" aria-hidden />
                    {t("learners", { n: r.learners, max: r.maxPeers })}
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => onJoin(r.code)}
                  className="h-9 shrink-0 gap-1.5 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-sm hover:from-rose-600 hover:to-pink-700"
                >
                  {t("join")}
                </Button>
              </div>
            ))
          )}
        </div>

        {/* scheduled rooms */}
        {upcoming.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {t("upcoming")}
            </p>
            {upcoming.map((r) => {
              const opensAt = r.scheduledFor ? new Date(r.scheduledFor).getTime() - GRACE_MS : 0;
              const canJoin = Date.now() >= opensAt;
              return (
                <div
                  key={r.code}
                  className="flex items-center gap-2 rounded-xl border border-amber-300/50 bg-amber-50/60 p-2.5 dark:border-amber-900/50 dark:bg-amber-950/25"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{r.topic || t("quick")}</p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {r.scheduledFor ? fmtTime(r.scheduledFor) : ""}
                      {r.host ? ` · ${t("host", { name: r.host })}` : ""}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={!canJoin}
                    onClick={() => onJoin(r.code)}
                    title={canJoin ? t("join") : t("opensSoon")}
                    className="h-9 shrink-0 rounded-full text-xs"
                  >
                    {t("join")}
                  </Button>
                </div>
              );
            })}
          </div>
        )}

        {/* schedule form */}
        <div className="space-y-2 rounded-xl border border-border/60 bg-muted/40 p-3">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <CalendarPlus className="h-4 w-4 text-rose-500" aria-hidden />
            {t("scheduleTitle")}
          </p>
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value.slice(0, 60))}
            placeholder={t("topicPh")}
            maxLength={60}
            className="h-10 rounded-xl text-sm"
            aria-label={t("topicLabel")}
          />
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              type="datetime-local"
              value={when}
              min={toLocalInput(new Date())}
              onChange={(e) => setWhen(e.target.value)}
              className="h-10 flex-1 rounded-xl text-sm"
              aria-label={t("timeLabel")}
            />
            <Button
              onClick={() => void schedule()}
              disabled={!topic.trim() || !when || scheduling}
              className="h-10 shrink-0 gap-1.5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-sm hover:from-rose-600 hover:to-pink-700"
            >
              {scheduling ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <CalendarPlus className="h-4 w-4" aria-hidden />}
              {t("scheduleBtn")}
            </Button>
          </div>
          <Badge variant="outline" className="text-[10px] font-normal">
            {t("maxNote")}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

/** Date → "YYYY-MM-DDTHH:mm" in the device's local time (datetime-local). */
function toLocalInput(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}
