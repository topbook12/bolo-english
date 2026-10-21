"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { createPortal } from "react-dom";
import {
  FileUser,
  Loader2,
  Printer,
  Save,
  Sparkles,
  Trash2,
  Wand2,
  ArrowLeft,
  Copy,
  FilePlus2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/shared/SectionHeader";
import EmptyState from "@/components/shared/EmptyState";
import { useDeviceValue, useDevice } from "@/hooks/use-device";
import { useToast } from "@/hooks/use-toast";
import { apiGet, apiPost, apiDelete } from "@/lib/client-api";
import { clientMsg } from "@/lib/api-i18n";
import {
  type CvData,
  type CvContentLang,
  emptyCvData,
  sampleCvData,
  normalizeCvData,
  deriveAccent,
  resolveTitles,
  fontStackFor,
  newId,
  A4_WIDTH_PX,
} from "@/lib/cv/types";
import { renderCvTemplate } from "@/lib/cv/registry";
import { EditorForms } from "@/components/cv/CvEditorForms";

interface CvDocMeta {
  id: string;
  title: string;
  updatedAt: string;
  data: CvData;
}

async function apiPut<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
  }
  return json.data as T;
}

export default function CvStudio() {
  const t = useTranslations("cv");
  const locale = useLocale();
  const { toast } = useToast();
  const deviceId = useDeviceValue((s) => s.deviceId, "");
  const device = useDevice();

  const [docs, setDocs] = useState<CvDocMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"list" | "editor">("list");

  const [activeId, setActiveId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [data, setData] = useState<CvData>(() => emptyCvData("bn"));
  const [snapshot, setSnapshot] = useState<string>("");
  const [saving, setSaving] = useState(false);

  const [polishing, setPolishing] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiText, setAiText] = useState("");
  const [aiTarget, setAiTarget] = useState<"auto" | CvContentLang>("auto");
  const [aiBusy, setAiBusy] = useState(false);

  const previewWrapRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const dirty = useMemo(() => !!snapshot && JSON.stringify(data) !== snapshot, [data, snapshot]);

  /* ── load list ── */
  const refreshList = useCallback(
    async (id: string) => {
      try {
        const rows = await apiGet<CvDocMeta[]>(`/api/cv?deviceId=${encodeURIComponent(id)}`);
        if (mountedRef.current) setDocs(rows);
      } catch (e) {
        if (mountedRef.current)
          toast({ description: (e as Error).message, variant: "destructive" });
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    },
    [toast]
  );

  useEffect(() => {
    if (deviceId) void refreshList(deviceId);
  }, [deviceId, refreshList]);

  /* ── dirty guard ── */
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  /* ── preview zoom fit ── */
  useEffect(() => {
    const el = previewWrapRef.current;
    if (!el || view !== "editor") return;
    const update = () => {
      const w = el.clientWidth - 8;
      setZoom(Math.max(0.34, Math.min(1, w / A4_WIDTH_PX)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [view]);

  /* ── mutations ── */
  const set = useCallback((fn: (d: CvData) => CvData) => setData((d) => fn(d)), []);

  function openNew(d: CvData, id: string | null) {
    setData(d);
    setSnapshot(JSON.stringify(d));
    setActiveId(id);
    setTitle(d.personal.name?.trim() || t("defaultTitle"));
    setView("editor");
  }

  function handleNew() {
    const langMap: Record<string, CvContentLang> = { bn: "bn", en: "en", hi: "hi" };
    openNew(emptyCvData(langMap[locale] ?? "bn"), null);
  }

  function handleSample() {
    openNew(sampleCvData(), null);
  }

  function openDoc(doc: CvDocMeta) {
    const d = normalizeCvData(doc.data);
    setData(d);
    setSnapshot(JSON.stringify(d));
    setActiveId(doc.id);
    setTitle(doc.title);
    setView("editor");
  }

  async function duplicateDoc(doc: CvDocMeta) {
    if (!deviceId) return;
    try {
      const created = await apiPost<{ id: string }>("/api/cv", {
        deviceId,
        title: `${doc.title} · ${t("copySuffix")}`,
        data: doc.data,
      });
      await refreshList(deviceId);
      void created;
      toast({ description: t("toast.duplicated") });
    } catch (e) {
      toast({ description: (e as Error).message, variant: "destructive" });
    }
  }

  async function removeDoc(id: string) {
    if (!deviceId) return;
    try {
      await apiDelete(`/api/cv/${id}?deviceId=${encodeURIComponent(deviceId)}`);
      setDocs((ds) => ds.filter((d) => d.id !== id));
      toast({ description: t("toast.deleted") });
    } catch (e) {
      toast({ description: (e as Error).message, variant: "destructive" });
    }
  }

  async function save() {
    if (!deviceId || saving) return;
    setSaving(true);
    const effectiveTitle = title.trim() || data.personal.name?.trim() || t("defaultTitle");
    try {
      if (activeId) {
        await apiPut(`/api/cv/${activeId}`, { deviceId, title: effectiveTitle, data });
      } else {
        const created = await apiPost<{ id: string }>("/api/cv", {
          deviceId,
          title: effectiveTitle,
          data,
        });
        setActiveId(created.id);
      }
      setSnapshot(JSON.stringify(data));
      await refreshList(deviceId);
      toast({ description: t("toast.saved") });
    } catch (e) {
      toast({ description: (e as Error).message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  /* ── AI ── */
  async function runExtract() {
    if (!deviceId || aiBusy) return;
    const text = aiText.trim();
    if (!text) {
      toast({ description: t("ai.needText") });
      return;
    }
    setAiBusy(true);
    try {
      const res = await fetch("/api/cv/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, mode: "extract", text, targetLang: aiTarget }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
      setData((d) => mergeAiContent(d, json.data));
      setAiOpen(false);
      setAiText("");
      toast({ description: t("ai.done") });
    } catch (e) {
      toast({ description: (e as Error).message, variant: "destructive" });
    } finally {
      setAiBusy(false);
    }
  }

  async function runPolishSummary() {
    if (!deviceId || polishing || !data.summary.trim()) return;
    setPolishing(true);
    try {
      const res = await fetch("/api/cv/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceId, mode: "polish", kind: "summary", lang: data.lang, text: data.summary }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || clientMsg("serverProblem", { status: res.status }));
      set((d) => ({ ...d, summary: String(json.data?.text ?? d.summary) }));
    } catch (e) {
      toast({ description: (e as Error).message, variant: "destructive" });
    } finally {
      setPolishing(false);
    }
  }

  /* ── print ── */
  const printCleanupRef = useRef<() => void>(() => {});
  function printCv() {
    document.body.classList.add("cv-printing");
    let done = false;
    const cleanup = () => {
      if (done) return;
      done = true;
      document.body.classList.remove("cv-printing");
      window.removeEventListener("afterprint", cleanup);
    };
    printCleanupRef.current = cleanup;
    window.addEventListener("afterprint", cleanup);
    // Fallback for browsers that never fire afterprint (dialog kept open long)
    setTimeout(cleanup, 120_000);
    setTimeout(() => window.print(), 80);
  }
  useEffect(() => {
    return () => {
      printCleanupRef.current();
    };
  }, []);

  /* ── template render ── */
  const rendered = useMemo(
    () =>
      renderCvTemplate(data.templateId, {
        data,
        accent: deriveAccent(data.accent),
        titles: resolveTitles(data),
        fontStack: fontStackFor(data.font),
      }),
    [data]
  );

  /* ── views ── */
  if (view === "list") {
    return (
      <div>
        <SectionHeader
          icon={FileUser}
          title={t("title")}
          subtitle={t("subtitle")}
          tint="fuchsia"
        >
          <Button size="sm" className="gap-1.5" onClick={handleNew}>
            <FilePlus2 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("list.new")}</span>
          </Button>
        </SectionHeader>

        {/* AI autofill + sample CTA strip */}
        <div className="stagger-grid mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => {
              handleNew();
              setAiOpen(true);
            }}
            className="group rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 p-4 text-left transition-all hover:shadow-md"
          >
            <p className="flex items-center gap-2 text-sm font-bold">
              <Wand2 className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" />
              {t("list.aiTitle")}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("list.aiDesc")}</p>
          </button>
          <button
            type="button"
            onClick={handleSample}
            className="group rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-emerald-500/5 p-4 text-left transition-all hover:shadow-md"
          >
            <p className="flex items-center gap-2 text-sm font-bold">
              <Sparkles className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              {t("list.sampleTitle")}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("list.sampleDesc")}</p>
          </button>
        </div>

        {/* saved CVs */}
        <h2 className="mb-2.5 text-sm font-semibold text-muted-foreground">
          {t("list.savedTitle")}
          {docs.length > 0 && (
            <Badge variant="secondary" className="ml-2">
              {docs.length}
            </Badge>
          )}
        </h2>
        {loading ? (
          <div className="flex items-center justify-center py-14 text-muted-foreground">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> {t("list.loading")}
          </div>
        ) : docs.length === 0 ? (
          <EmptyState
            emoji="📄"
            title={t("list.empty")}
            description={t("list.emptyDesc")}
            actionLabel={t("list.new")}
            onAction={handleNew}
          />
        ) : (
          <div className="stagger-grid grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {docs.map((doc) => (
              <div
                key={doc.id}
                className="group relative cursor-pointer rounded-2xl border border-border/70 bg-card/70 p-4 transition-all hover:border-primary/40 hover:shadow-md"
                onClick={() => openDoc(doc)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openDoc(doc);
                }}
              >
                <p className="truncate pr-14 text-sm font-bold">{doc.title}</p>
                <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                  {new Date(doc.updatedAt).toLocaleDateString(locale === "bn" ? "bn-BD" : locale === "hi" ? "hi-IN" : "en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  {" · "}
                  {t(`tpl.${doc.data?.templateId ?? "classic"}`)}
                </p>
                <p className="mt-2 line-clamp-2 text-xs text-muted-foreground/80">
                  {doc.data?.personal?.name || doc.data?.summary || t("list.untitled")}
                </p>
                <div className="absolute right-3 top-3 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7"
                    aria-label={t("list.duplicate")}
                    onClick={(e) => {
                      e.stopPropagation();
                      void duplicateDoc(doc);
                    }}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-destructive"
                    aria-label={t("list.delete")}
                    onClick={(e) => {
                      e.stopPropagation();
                      void removeDoc(doc.id);
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  /* ── editor view ── */
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Button size="sm" variant="ghost" className="gap-1.5" onClick={() => setView("list")}>
          <ArrowLeft className="h-4 w-4" /> {t("editor.back")}
        </Button>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("editor.namePlaceholder")}
          className="h-9 max-w-56 flex-1"
          aria-label={t("editor.namePlaceholder")}
        />
        {dirty && <Badge variant="outline" className="border-amber-500/50 text-amber-600 dark:text-amber-400">{t("editor.unsaved")}</Badge>}
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="outline" className="gap-1.5" onClick={printCv} aria-label={t("editor.pdf")}>
            <Printer className="h-4 w-4" />
            <span className="hidden sm:inline">{t("editor.pdf")}</span>
          </Button>
          <Button size="sm" className="gap-1.5" onClick={() => void save()} disabled={saving}>
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            <span className="hidden sm:inline">{saving ? t("editor.saving") : t("editor.save")}</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="edit" className="lg:hidden">
        <TabsList className="mb-3 grid w-full grid-cols-2">
          <TabsTrigger value="edit">{t("editor.edit")}</TabsTrigger>
          <TabsTrigger value="preview">{t("editor.preview")}</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <div className="rounded-2xl border border-border/70 bg-card/50 p-3">
            <EditorForms
              data={data}
              set={set}
              onPolish={runPolishSummary}
              polishing={polishing}
              onPhotoError={() => toast({ description: t("toast.photoTooBig"), variant: "destructive" })}
            />
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <PreviewBox
            wrapRef={previewWrapRef}
            zoom={zoom}
            rendered={rendered}
            pagesHint={t("editor.pagesHint")}
          />
        </TabsContent>
      </Tabs>

      <div className="hidden gap-5 lg:grid lg:grid-cols-2">
        <div className="max-h-[calc(100vh-13rem)] overflow-y-auto rounded-2xl border border-border/70 bg-card/50 p-4 nice-scroll">
          <EditorForms
            data={data}
            set={set}
            onPolish={runPolishSummary}
            polishing={polishing}
            onPhotoError={() => toast({ description: t("toast.photoTooBig"), variant: "destructive" })}
          />
        </div>
        <PreviewBox wrapRef={previewWrapRef} zoom={zoom} rendered={rendered} pagesHint={t("editor.pagesHint")} />
      </div>

      {/* AI autofill dialog */}
      <Dialog open={aiOpen} onOpenChange={setAiOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wand2 className="h-4 w-4 text-fuchsia-600 dark:text-fuchsia-400" /> {t("ai.title")}
            </DialogTitle>
            <DialogDescription>{t("ai.desc")}</DialogDescription>
          </DialogHeader>
          <textarea
            value={aiText}
            onChange={(e) => setAiText(e.target.value)}
            rows={8}
            placeholder={t("ai.pastePh")}
            className="w-full resize-none rounded-xl border border-border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
          />
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">{t("ai.target")}</span>
            <Select value={aiTarget} onValueChange={(v) => setAiTarget(v as typeof aiTarget)}>
              <SelectTrigger className="h-8 w-40"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">{t("ai.targetAuto")}</SelectItem>
                <SelectItem value="bn">{t("d.langBn")}</SelectItem>
                <SelectItem value="en">{t("d.langEn")}</SelectItem>
                <SelectItem value="hi">{t("d.langHi")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setAiOpen(false)}>
              {t("ai.close")}
            </Button>
            <Button size="sm" className="gap-1.5" onClick={() => void runExtract()} disabled={aiBusy}>
              {aiBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {aiBusy ? t("ai.extracting") : t("ai.extractBtn")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* print portal — screen: hidden; print: only visible element */}
      {createPortal(<div id="cv-print-root">{rendered}</div>, document.body)}
    </div>
  );
}

function PreviewBox({
  wrapRef,
  zoom,
  rendered,
  pagesHint,
}: {
  wrapRef: React.RefObject<HTMLDivElement | null>;
  zoom: number;
  rendered: React.ReactNode;
  pagesHint: string;
}) {
  return (
    <div>
      <div
        ref={wrapRef}
        className="flex justify-center overflow-y-auto rounded-2xl border border-border/70 bg-neutral-200/60 p-3 dark:bg-neutral-800/60 nice-scroll"
        style={{ maxHeight: "calc(100vh - 13rem)" }}
      >
        <div style={{ zoom, width: "fit-content" }} className="shadow-xl">
          {rendered}
        </div>
      </div>
      <p className="mt-2 text-center text-[11px] text-muted-foreground">{pagesHint}</p>
    </div>
  );
}

/* Merge AI-extracted content into the current CV: design settings stay,
   content fields are replaced only where the AI provided non-empty values. */
function mergeAiContent(base: CvData, ai: Record<string, unknown>): CvData {
  const next = normalizeCvData(JSON.parse(JSON.stringify(base)));
  const a = ai as {
    lang?: CvData["lang"];
    personal?: Partial<CvData["personal"]>;
    summary?: string;
    education?: CvData["education"];
    experience?: CvData["experience"];
    projects?: CvData["projects"];
    skills?: CvData["skills"];
    languages?: CvData["languages"];
    training?: CvData["training"];
    awards?: CvData["awards"];
    hobbies?: string[];
    references?: CvData["references"];
    personalExtra?: CvData["personalExtra"];
  };
  if (a.lang === "bn" || a.lang === "en" || a.lang === "hi") next.lang = a.lang;
  if (a.personal) {
    const src = a.personal;
    const keep = { photo: next.personal.photo };
    next.personal = { ...next.personal, ...src, ...keep };
  }
  if (typeof a.summary === "string" && a.summary.trim()) next.summary = a.summary.trim();
  if (a.education?.length) next.education = a.education.map((e) => ({ ...e, id: newId() }));
  if (a.experience?.length)
    next.experience = a.experience.map((e) => ({ ...e, id: newId(), bullets: e.bullets ?? [] }));
  if (a.projects?.length) next.projects = a.projects.map((e) => ({ ...e, id: newId() }));
  if (a.skills?.length) next.skills = a.skills.map((e) => ({ ...e, id: newId() }));
  if (a.languages?.length) next.languages = a.languages.map((e) => ({ ...e, id: newId() }));
  if (a.training?.length) next.training = a.training.map((e) => ({ ...e, id: newId() }));
  if (a.awards?.length) next.awards = a.awards.map((e) => ({ ...e, id: newId() }));
  if (a.hobbies?.length) next.hobbies = a.hobbies.filter(Boolean);
  if (a.references?.length) next.references = a.references.map((e) => ({ ...e, id: newId() }));
  if (a.personalExtra?.length) next.personalExtra = a.personalExtra.map((e) => ({ ...e, id: newId() }));
  return next;
}
