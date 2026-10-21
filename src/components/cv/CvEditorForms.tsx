"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  ImagePlus,
  Plus,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import {
  ACCENT_PRESETS,
  CV_SECTION_KEYS,
  type CvData,
  type CvSectionKey,
  newId,
} from "@/lib/cv/types";
import { DEFAULT_SECTION_HEADINGS } from "@/lib/cv/types";

/* ─── Small primitives ──────────────────────────────────────────────────── */

export function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function RowShell({
  children,
  onRemove,
  onUp,
  onDown,
  first,
  last,
}: {
  children: React.ReactNode;
  onRemove: () => void;
  onUp?: () => void;
  onDown?: () => void;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <div className="relative rounded-xl border border-border/70 bg-card/60 p-3 pr-2">
      <div className="absolute right-1.5 top-1.5 flex flex-col gap-0.5">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="h-6 w-6"
          disabled={first}
          onClick={onUp}
          aria-label="move up"
        >
          <ChevronUp className="h-3.5 w-3.5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="h-6 w-6"
          disabled={last}
          onClick={onDown}
          aria-label="move down"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="h-6 w-6 text-destructive hover:text-destructive"
          onClick={onRemove}
          aria-label="remove"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
      <div className="pr-10">{children}</div>
    </div>
  );
}

function AddBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <Button type="button" variant="outline" size="sm" className="mt-2 gap-1.5" onClick={onClick}>
      <Plus className="h-3.5 w-3.5" /> {label}
    </Button>
  );
}

/* ─── List-move helper ──────────────────────────────────────────────────── */

function move<T>(list: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir;
  if (j < 0 || j >= list.length) return list;
  const copy = [...list];
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

/* ─── Personal form ─────────────────────────────────────────────────────── */

export function PersonalForm({
  data,
  set,
  onPhotoError,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
  onPhotoError: () => void;
}) {
  const t = useTranslations("cv.f");
  const fileRef = useRef<HTMLInputElement>(null);
  const p = data.personal;

  const upd = (k: keyof typeof p) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    set((d) => ({ ...d, personal: { ...d.personal, [k]: e.target.value } }));

  async function pickPhoto(file: File) {
    try {
      const bitmap = await createImageBitmap(file);
      const max = 480;
      const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
      const w = Math.round(bitmap.width * scale);
      const h = Math.round(bitmap.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d")?.drawImage(bitmap, 0, 0, w, h);
      const url = canvas.toDataURL("image/jpeg", 0.82);
      if (url.length > 400_000) {
        onPhotoError();
        return;
      }
      set((d) => ({ ...d, personal: { ...d.personal, photo: url } }));
    } catch {
      onPhotoError();
    }
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Field label={t("name")} className="sm:col-span-2">
        <Input value={p.name} onChange={upd("name")} placeholder={t("namePh")} />
      </Field>
      <Field label={t("headline")} className="sm:col-span-2">
        <Input value={p.headline} onChange={upd("headline")} placeholder={t("headlinePh")} />
      </Field>
      <Field label={t("email")}>
        <Input type="email" value={p.email} onChange={upd("email")} placeholder="name@gmail.com" />
      </Field>
      <Field label={t("phone")}>
        <Input value={p.phone} onChange={upd("phone")} placeholder="+880 1…" />
      </Field>
      <Field label={t("address")} className="sm:col-span-2">
        <Textarea rows={2} value={p.address} onChange={upd("address")} />
      </Field>

      <div className="sm:col-span-2 flex items-center gap-3 rounded-xl border border-dashed border-border/70 bg-card/40 p-3">
        {p.photo ? (
          <img src={p.photo} alt="" className="h-14 w-14 rounded-lg object-cover" />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-muted">
            <ImagePlus className="h-5 w-5 text-muted-foreground" />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium">{t("photo")}</p>
          <p className="truncate text-[11px] text-muted-foreground">{t("photoHint")}</p>
        </div>
        {p.photo && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-destructive"
            onClick={() => set((d) => ({ ...d, personal: { ...d.personal, photo: "" } }))}
            aria-label={t("photoRemove")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button type="button" size="sm" variant="outline" onClick={() => fileRef.current?.click()}>
          {p.photo ? t("photoChange") : t("photoUpload")}
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void pickPhoto(f);
            e.target.value = "";
          }}
        />
      </div>

      <Field label={t("father")}>
        <Input value={p.fatherName} onChange={upd("fatherName")} />
      </Field>
      <Field label={t("mother")}>
        <Input value={p.motherName} onChange={upd("motherName")} />
      </Field>
      <Field label={t("dob")}>
        <Input value={p.dateOfBirth} onChange={upd("dateOfBirth")} />
      </Field>
      <Field label={t("nationality")}>
        <Input value={p.nationality} onChange={upd("nationality")} />
      </Field>
      <Field label={t("religion")}>
        <Input value={p.religion} onChange={upd("religion")} />
      </Field>
      <Field label={t("marital")}>
        <Input value={p.maritalStatus} onChange={upd("maritalStatus")} />
      </Field>
      <Field label={t("blood")}>
        <Input value={p.bloodGroup} onChange={upd("bloodGroup")} />
      </Field>
      <Field label={t("website")}>
        <Input value={p.website} onChange={upd("website")} />
      </Field>
      <Field label="LinkedIn" className="sm:col-span-2">
        <Input value={p.linkedin} onChange={upd("linkedin")} placeholder="linkedin.com/in/…" />
      </Field>
    </div>
  );
}

/* ─── Summary ───────────────────────────────────────────────────────────── */

export function SummaryForm({
  data,
  set,
  onPolish,
  polishing,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
  onPolish: () => void;
  polishing: boolean;
}) {
  const t = useTranslations("cv.f");
  return (
    <div>
      <Textarea
        rows={5}
        value={data.summary}
        onChange={(e) => set((d) => ({ ...d, summary: e.target.value }))}
        placeholder={t("summaryPh")}
      />
      <Button
        type="button"
        size="sm"
        variant="outline"
        className="mt-2 gap-1.5"
        disabled={polishing || !data.summary.trim()}
        onClick={onPolish}
      >
        <Sparkles className="h-3.5 w-3.5" /> {polishing ? t("polishing") : t("polish")}
      </Button>
    </div>
  );
}

/* ─── Education ─────────────────────────────────────────────────────────── */

export function EducationForm({
  data,
  set,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
}) {
  const t = useTranslations("cv.f");
  const list = data.education;
  return (
    <div className="flex flex-col gap-2">
      {list.length === 0 && <p className="py-2 text-center text-xs text-muted-foreground">{t("emptySection")}</p>}
      {list.map((edu, i) => (
        <RowShell
          key={edu.id}
          first={i === 0}
          last={i === list.length - 1}
          onUp={() => set((d) => ({ ...d, education: move(d.education, i, -1) }))}
          onDown={() => set((d) => ({ ...d, education: move(d.education, i, 1) }))}
          onRemove={() => set((d) => ({ ...d, education: d.education.filter((x) => x.id !== edu.id) }))}
        >
          <div className="grid grid-cols-2 gap-2">
            <Field label={t("degree")} className="col-span-2">
              <Input
                value={edu.degree}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    education: d.education.map((x) => (x.id === edu.id ? { ...x, degree: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("institution")}>
              <Input
                value={edu.institution}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    education: d.education.map((x) => (x.id === edu.id ? { ...x, institution: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("group")}>
              <Input
                value={edu.group}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    education: d.education.map((x) => (x.id === edu.id ? { ...x, group: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("result")}>
              <Input
                value={edu.result}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    education: d.education.map((x) => (x.id === edu.id ? { ...x, result: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("year")}>
              <Input
                value={edu.year}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    education: d.education.map((x) => (x.id === edu.id ? { ...x, year: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("details")} className="col-span-2">
              <Input
                value={edu.details}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    education: d.education.map((x) => (x.id === edu.id ? { ...x, details: e.target.value } : x)),
                  }))
                }
              />
            </Field>
          </div>
        </RowShell>
      ))}
      <AddBtn
        label={t("addEdu")}
        onClick={() =>
          set((d) => ({
            ...d,
            education: [...d.education, { id: newId(), degree: "", institution: "", group: "", result: "", year: "", details: "" }],
          }))
        }
      />
    </div>
  );
}

/* ─── Experience ────────────────────────────────────────────────────────── */

export function ExperienceForm({
  data,
  set,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
}) {
  const t = useTranslations("cv.f");
  const list = data.experience;
  return (
    <div className="flex flex-col gap-2">
      {list.length === 0 && <p className="py-2 text-center text-xs text-muted-foreground">{t("emptySection")}</p>}
      {list.map((exp, i) => (
        <RowShell
          key={exp.id}
          first={i === 0}
          last={i === list.length - 1}
          onUp={() => set((d) => ({ ...d, experience: move(d.experience, i, -1) }))}
          onDown={() => set((d) => ({ ...d, experience: move(d.experience, i, 1) }))}
          onRemove={() => set((d) => ({ ...d, experience: d.experience.filter((x) => x.id !== exp.id) }))}
        >
          <div className="grid grid-cols-2 gap-2">
            <Field label={t("role")} className="col-span-2">
              <Input
                value={exp.role}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    experience: d.experience.map((x) => (x.id === exp.id ? { ...x, role: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("org")} className="col-span-2">
              <Input
                value={exp.org}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    experience: d.experience.map((x) => (x.id === exp.id ? { ...x, org: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("start")}>
              <Input
                value={exp.start}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    experience: d.experience.map((x) => (x.id === exp.id ? { ...x, start: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("end")}>
              <Input
                value={exp.end}
                placeholder={t("endPh")}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    experience: d.experience.map((x) => (x.id === exp.id ? { ...x, end: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("location")} className="col-span-2">
              <Input
                value={exp.location}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    experience: d.experience.map((x) => (x.id === exp.id ? { ...x, location: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("bullets")} className="col-span-2">
              <div className="flex flex-col gap-1.5">
                {exp.bullets.map((b, bi) => (
                  <div key={bi} className="flex gap-1.5">
                    <Input
                      value={b}
                      onChange={(e) =>
                        set((d) => ({
                          ...d,
                          experience: d.experience.map((x) =>
                            x.id === exp.id
                              ? { ...x, bullets: x.bullets.map((bb, j) => (j === bi ? e.target.value : bb)) }
                              : x
                          ),
                        }))
                      }
                    />
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-9 w-9 shrink-0 text-destructive"
                      onClick={() =>
                        set((d) => ({
                          ...d,
                          experience: d.experience.map((x) =>
                            x.id === exp.id ? { ...x, bullets: x.bullets.filter((_, j) => j !== bi) } : x
                          ),
                        }))
                      }
                      aria-label="remove bullet"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="self-start gap-1.5"
                  onClick={() =>
                    set((d) => ({
                      ...d,
                      experience: d.experience.map((x) => (x.id === exp.id ? { ...x, bullets: [...x.bullets, ""] } : x)),
                    }))
                  }
                >
                  <Plus className="h-3.5 w-3.5" /> {t("addBullet")}
                </Button>
              </div>
            </Field>
          </div>
        </RowShell>
      ))}
      <AddBtn
        label={t("addExp")}
        onClick={() =>
          set((d) => ({
            ...d,
            experience: [...d.experience, { id: newId(), role: "", org: "", start: "", end: "", location: "", bullets: [] }],
          }))
        }
      />
    </div>
  );
}

/* ─── Projects / Training / Awards / References (generic rows) ──────────── */

export function SimpleListForm({
  data,
  set,
  kind,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
  kind: "projects" | "training" | "awards" | "references";
}) {
  const t = useTranslations("cv.f");
  const list = data[kind];

  const patch = (id: string, k: string, v: string) =>
    set((d) => ({ ...d, [kind]: (d[kind] as { id: string }[]).map((x) => (x.id === id ? { ...x, [k]: v } : x)) }) as CvData);
  const remove = (id: string) =>
    set((d) => ({ ...d, [kind]: (d[kind] as { id: string }[]).filter((x) => x.id !== id) }) as CvData);
  const moveItem = (i: number, dir: -1 | 1) =>
    set((d) => ({ ...d, [kind]: move(d[kind] as { id: string }[], i, dir) }) as CvData);

  const empty: Record<string, string> =
    kind === "projects"
      ? { name: "", description: "", link: "" }
      : kind === "references"
        ? { name: "", org: "", relation: "", phone: "", email: "" }
        : { name: "", issuer: "", year: "" };

  const fields: { k: string; label: string; ph?: string; wide?: boolean }[] =
    kind === "projects"
      ? [
          { k: "name", label: t("projName") },
          { k: "link", label: t("projLink") },
          { k: "description", label: t("projDesc"), wide: true },
        ]
      : kind === "references"
        ? [
            { k: "name", label: t("refName") },
            { k: "relation", label: t("refRel") },
            { k: "org", label: t("refOrg"), wide: true },
            { k: "phone", label: t("refPhone") },
            { k: "email", label: t("refEmail") },
          ]
        : [
            { k: "name", label: kind === "training" ? t("trainName") : t("awardName") },
            { k: "year", label: t("year") },
            { k: "issuer", label: t("issuer"), wide: true },
          ];

  return (
    <div className="flex flex-col gap-2">
      {list.length === 0 && <p className="py-2 text-center text-xs text-muted-foreground">{t("emptySection")}</p>}
      {list.map((item, i) => {
        const it = item as unknown as Record<string, string>;
        return (
          <RowShell
            key={it.id}
            first={i === 0}
            last={i === list.length - 1}
            onUp={() => moveItem(i, -1)}
            onDown={() => moveItem(i, 1)}
            onRemove={() => remove(it.id)}
          >
            <div className="grid grid-cols-2 gap-2">
              {fields.map((f) => (
                <Field key={f.k} label={f.label} className={f.wide ? "col-span-2" : ""}>
                  {f.k === "description" ? (
                    <Textarea rows={2} value={it[f.k] ?? ""} onChange={(e) => patch(it.id, f.k, e.target.value)} />
                  ) : (
                    <Input value={it[f.k] ?? ""} placeholder={f.ph} onChange={(e) => patch(it.id, f.k, e.target.value)} />
                  )}
                </Field>
              ))}
            </div>
          </RowShell>
        );
      })}
      <AddBtn
        label={t(kind === "projects" ? "addProj" : kind === "training" ? "addTrain" : kind === "awards" ? "addAward" : "addRef")}
        onClick={() => set((d) => ({ ...d, [kind]: [...(d[kind] as { id: string }[]), { id: newId(), ...empty }] }) as CvData)}
      />
    </div>
  );
}

/* ─── Skills / Languages (name + level) ─────────────────────────────────── */

export function LevelListForm({
  data,
  set,
  kind,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
  kind: "skills" | "languages";
}) {
  const t = useTranslations("cv.f");
  const list = data[kind];
  const addLabel = kind === "skills" ? t("addSkill") : t("addLang");
  const nameLabel = kind === "skills" ? t("skill") : t("langName");

  return (
    <div className="flex flex-col gap-2">
      {list.length === 0 && <p className="py-2 text-center text-xs text-muted-foreground">{t("emptySection")}</p>}
      {list.map((item, i) => (
        <RowShell
          key={item.id}
          first={i === 0}
          last={i === list.length - 1}
          onUp={() => set((d) => ({ ...d, [kind]: move(d[kind], i, -1) }) as CvData)}
          onDown={() => set((d) => ({ ...d, [kind]: move(d[kind], i, 1) }) as CvData)}
          onRemove={() => set((d) => ({ ...d, [kind]: d[kind].filter((x) => x.id !== item.id) }) as CvData)}
        >
          <div className="flex items-end gap-3">
            <Field label={nameLabel} className="flex-1">
              <Input
                value={item.name}
                onChange={(e) =>
                  set((d) => ({ ...d, [kind]: d[kind].map((x) => (x.id === item.id ? { ...x, name: e.target.value } : x)) }) as CvData)
                }
              />
            </Field>
            <Field label={t("level")} className="w-32 pb-1">
              <Slider
                value={[item.level]}
                min={0}
                max={5}
                step={1}
                onValueChange={(v) =>
                  set((d) => ({ ...d, [kind]: d[kind].map((x) => (x.id === item.id ? { ...x, level: v[0] ?? 0 } : x)) }) as CvData)
                }
              />
            </Field>
          </div>
        </RowShell>
      ))}
      <AddBtn
        label={addLabel}
        onClick={() => set((d) => ({ ...d, [kind]: [...d[kind], { id: newId(), name: "", level: 4 }] }) as CvData)}
      />
    </div>
  );
}

/* ─── Hobbies (chips) ───────────────────────────────────────────────────── */

export function HobbiesForm({
  data,
  set,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
}) {
  const t = useTranslations("cv.f");
  const [draft, setDraft] = useState("");
  const add = () => {
    const v = draft.trim();
    if (!v) return;
    set((d) => ({ ...d, hobbies: [...d.hobbies, v].slice(0, 12) }));
    setDraft("");
  };
  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {data.hobbies.map((h, i) => (
          <span key={i} className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs">
            {h}
            <button
              type="button"
              onClick={() => set((d) => ({ ...d, hobbies: d.hobbies.filter((_, j) => j !== i) }))}
              aria-label="remove"
              className="text-muted-foreground hover:text-destructive"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        {data.hobbies.length === 0 && <p className="py-1 text-xs text-muted-foreground">{t("emptySection")}</p>}
      </div>
      <div className="mt-2 flex gap-2">
        <Input
          value={draft}
          placeholder={t("hobbyPh")}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
        />
        <Button type="button" size="sm" variant="outline" onClick={add}>
          {t("add")}
        </Button>
      </div>
    </div>
  );
}

/* ─── personalExtra (key-value) ─────────────────────────────────────────── */

export function ExtraForm({
  data,
  set,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
}) {
  const t = useTranslations("cv.f");
  const list = data.personalExtra;
  return (
    <div className="flex flex-col gap-2">
      {list.length === 0 && <p className="py-2 text-center text-xs text-muted-foreground">{t("extraHint")}</p>}
      {list.map((row, i) => (
        <RowShell
          key={row.id}
          first={i === 0}
          last={i === list.length - 1}
          onUp={() => set((d) => ({ ...d, personalExtra: move(d.personalExtra, i, -1) }))}
          onDown={() => set((d) => ({ ...d, personalExtra: move(d.personalExtra, i, 1) }))}
          onRemove={() => set((d) => ({ ...d, personalExtra: d.personalExtra.filter((x) => x.id !== row.id) }))}
        >
          <div className="grid grid-cols-[1fr_1.6fr] gap-2">
            <Field label={t("label")}>
              <Input
                value={row.label}
                placeholder={t("extraLabelPh")}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    personalExtra: d.personalExtra.map((x) => (x.id === row.id ? { ...x, label: e.target.value } : x)),
                  }))
                }
              />
            </Field>
            <Field label={t("value")}>
              <Input
                value={row.value}
                placeholder={t("extraValuePh")}
                onChange={(e) =>
                  set((d) => ({
                    ...d,
                    personalExtra: d.personalExtra.map((x) => (x.id === row.id ? { ...x, value: e.target.value } : x)),
                  }))
                }
              />
            </Field>
          </div>
        </RowShell>
      ))}
      <AddBtn
        label={t("addExtra")}
        onClick={() => set((d) => ({ ...d, personalExtra: [...d.personalExtra, { id: newId(), label: "", value: "" }] }))}
      />
    </div>
  );
}

/* ─── Design panel ──────────────────────────────────────────────────────── */

export function DesignPanel({
  data,
  set,
  onPolishNone,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
  onPolishNone?: never;
}) {
  const t = useTranslations("cv.d");
  const ft = useTranslations("cv.tpl");

  const templates: { id: CvData["templateId"]; mini: React.ReactNode }[] = [
    {
      id: "classic",
      mini: (
        <div className="flex h-full flex-col items-center gap-1 pt-1">
          <span className="h-1.5 w-10 rounded-full bg-current opacity-70" />
          <span className="h-1 w-14 rounded-full bg-current opacity-30" />
          <span className="mt-1 h-1 w-16 rounded-full bg-current opacity-50" />
          <span className="h-1 w-16 rounded-full bg-current opacity-50" />
          <span className="h-1 w-12 rounded-full bg-current opacity-50" />
        </div>
      ),
    },
    {
      id: "minimal",
      mini: (
        <div className="flex h-full flex-col gap-1 pt-1">
          <span className="h-1.5 w-12 rounded-full bg-current opacity-70" />
          <span className="h-0.5 w-16 rounded-full bg-current opacity-40" />
          <span className="mt-1 h-1 w-16 rounded-full bg-current opacity-35" />
          <span className="h-1 w-10 rounded-full bg-current opacity-35" />
        </div>
      ),
    },
    {
      id: "elegant",
      mini: (
        <div className="flex h-full flex-col items-center gap-1">
          <span className="h-4 w-full rounded-sm bg-current opacity-25" />
          <span className="-mt-3 h-1.5 w-10 rounded-full bg-current opacity-70" />
          <span className="h-1 w-14 rounded-full bg-current opacity-40" />
          <span className="h-1 w-14 rounded-full bg-current opacity-30" />
        </div>
      ),
    },
    {
      id: "sidebar",
      mini: (
        <div className="flex h-full gap-1">
          <span className="h-full w-1/3 rounded-sm bg-current opacity-40" />
          <span className="flex flex-1 flex-col gap-1 pt-1">
            <span className="h-1.5 w-8 rounded-full bg-current opacity-70" />
            <span className="h-1 w-10 rounded-full bg-current opacity-35" />
            <span className="h-1 w-9 rounded-full bg-current opacity-35" />
          </span>
        </div>
      ),
    },
    {
      id: "executive",
      mini: (
        <div className="flex h-full flex-col gap-1">
          <span className="h-4 w-full rounded-sm bg-current opacity-80" />
          <span className="mt-0.5 h-1 w-12 rounded-full bg-current opacity-40" />
          <span className="h-1 w-10 rounded-full bg-current opacity-30" />
          <span className="h-1 w-12 rounded-full bg-current opacity-30" />
        </div>
      ),
    },
    {
      id: "timeline",
      mini: (
        <div className="flex h-full gap-1.5 pt-1">
          <span className="w-0.5 rounded-full bg-current opacity-40" />
          <span className="flex flex-1 flex-col gap-1">
            <span className="h-1.5 w-9 rounded-full bg-current opacity-70" />
            <span className="h-1 w-11 rounded-full bg-current opacity-35" />
            <span className="h-1 w-8 rounded-full bg-current opacity-35" />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* template picker */}
      <div>
        <p className="mb-2 text-xs font-semibold">{t("template")}</p>
        <div className="grid grid-cols-3 gap-2">
          {templates.map((tpl) => {
            const active = data.templateId === tpl.id;
            return (
              <button
                key={tpl.id}
                type="button"
                onClick={() => set((d) => ({ ...d, templateId: tpl.id }))}
                className={`rounded-xl border p-2 text-left transition-all ${
                  active
                    ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                    : "border-border/70 hover:border-primary/40 hover:bg-accent/40"
                }`}
              >
                <span className={`block h-14 w-full text-primary ${active ? "" : "opacity-70"}`}>{tpl.mini}</span>
                <span className="mt-1.5 block truncate text-[11px] font-medium">{ft(tpl.id)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* accent */}
      <div>
        <p className="mb-2 text-xs font-semibold">{t("accent")}</p>
        <div className="flex flex-wrap gap-2">
          {ACCENT_PRESETS.map((a) => (
            <button
              key={a.hex}
              type="button"
              aria-label={a.hex}
              onClick={() => set((d) => ({ ...d, accent: a.hex }))}
              className={`h-7 w-7 rounded-full border transition-transform hover:scale-110 ${
                data.accent === a.hex ? "ring-2 ring-foreground/50 ring-offset-2 ring-offset-background" : "border-border"
              }`}
              style={{ background: a.hex }}
            />
          ))}
          <label className="relative h-7 w-7 cursor-pointer overflow-hidden rounded-full border border-dashed border-border">
            <input
              type="color"
              value={data.accent}
              onChange={(e) => set((d) => ({ ...d, accent: e.target.value }))}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              aria-label={t("accent")}
            />
            <span className="flex h-full w-full items-center justify-center text-[10px] font-bold text-muted-foreground">
              +
            </span>
          </label>
        </div>
      </div>

      {/* font + lang + scale + photo */}
      <div className="grid grid-cols-2 gap-3">
        <Field label={t("font")}>
          <Select value={data.font} onValueChange={(v) => set((d) => ({ ...d, font: v as CvData["font"] }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="sans">{t("fontSans")}</SelectItem>
              <SelectItem value="serif">{t("fontSerif")}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label={t("cvLang")}>
          <Select value={data.lang} onValueChange={(v) => set((d) => ({ ...d, lang: v as CvData["lang"] }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="bn">{t("langBn")}</SelectItem>
              <SelectItem value="en">{t("langEn")}</SelectItem>
              <SelectItem value="hi">{t("langHi")}</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <div className="col-span-2">
          <div className="mb-1 flex items-center justify-between">
            <Label className="text-xs font-medium text-muted-foreground">{t("scale")}</Label>
            <span className="text-[11px] text-muted-foreground">{Math.round(data.scale * 100)}%</span>
          </div>
          <Slider
            value={[data.scale]}
            min={0.9}
            max={1.15}
            step={0.05}
            onValueChange={(v) => set((d) => ({ ...d, scale: v[0] ?? 1 }))}
          />
        </div>
        <div className="col-span-2 flex items-center justify-between rounded-xl border border-border/70 bg-card/60 px-3 py-2.5">
          <Label className="text-xs font-medium">{t("showPhoto")}</Label>
          <Switch checked={data.showPhoto} onCheckedChange={(v) => set((d) => ({ ...d, showPhoto: v }))} />
        </div>
      </div>

      {/* section order / hide / custom titles */}
      <div>
        <p className="mb-2 text-xs font-semibold">{t("sections")}</p>
        <div className="flex flex-col gap-1.5">
          {data.sectionOrder.map((key: CvSectionKey, i) => (
            <div
              key={key}
              className={`flex items-center gap-1.5 rounded-lg border border-border/60 px-2 py-1.5 ${
                data.hiddenSections.includes(key) ? "opacity-50" : ""
              }`}
            >
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                disabled={i === 0}
                onClick={() => set((d) => ({ ...d, sectionOrder: move(d.sectionOrder, i, -1) }))}
                aria-label="up"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                disabled={i === data.sectionOrder.length - 1}
                onClick={() => set((d) => ({ ...d, sectionOrder: move(d.sectionOrder, i, 1) }))}
                aria-label="down"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </Button>
              <span className="min-w-0 flex-1 truncate text-xs font-medium">
                {data.labels[key]?.trim() || DEFAULT_SECTION_HEADINGS[data.lang][key]}
              </span>
              <input
                value={data.labels[key] ?? ""}
                placeholder={t("customTitlePh")}
                onChange={(e) => set((d) => ({ ...d, labels: { ...d.labels, [key]: e.target.value } }))}
                className="h-7 w-24 shrink-0 rounded-md border border-border/70 bg-transparent px-2 text-[11px] outline-none focus:ring-1 focus:ring-primary/40"
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-6 w-6"
                onClick={() =>
                  set((d) => ({
                    ...d,
                    hiddenSections: d.hiddenSections.includes(key)
                      ? d.hiddenSections.filter((k) => k !== key)
                      : [...d.hiddenSections, key],
                  }))
                }
                aria-label={data.hiddenSections.includes(key) ? t("show") : t("hide")}
              >
                {data.hiddenSections.includes(key) ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── The whole editor form (accordion) ─────────────────────────────────── */

export function EditorForms({
  data,
  set,
  onPolish,
  polishing,
  onPhotoError,
}: {
  data: CvData;
  set: (fn: (d: CvData) => CvData) => void;
  onPolish: () => void;
  polishing: boolean;
  onPhotoError: () => void;
}) {
  const t = useTranslations("cv.f");
  const items: { key: string; label: string; node: React.ReactNode }[] = [
    { key: "personal", label: t("personal"), node: <PersonalForm data={data} set={set} onPhotoError={onPhotoError} /> },
    { key: "summary", label: t("summary"), node: <SummaryForm data={data} set={set} onPolish={onPolish} polishing={polishing} /> },
    { key: "education", label: t("education"), node: <EducationForm data={data} set={set} /> },
    { key: "experience", label: t("experience"), node: <ExperienceForm data={data} set={set} /> },
    { key: "projects", label: t("projects"), node: <SimpleListForm data={data} set={set} kind="projects" /> },
    { key: "skills", label: t("skills"), node: <LevelListForm data={data} set={set} kind="skills" /> },
    { key: "languages", label: t("languages"), node: <LevelListForm data={data} set={set} kind="languages" /> },
    { key: "training", label: t("training"), node: <SimpleListForm data={data} set={set} kind="training" /> },
    { key: "awards", label: t("awards"), node: <SimpleListForm data={data} set={set} kind="awards" /> },
    { key: "hobbies", label: t("hobbies"), node: <HobbiesForm data={data} set={set} /> },
    { key: "references", label: t("references"), node: <SimpleListForm data={data} set={set} kind="references" /> },
    { key: "extra", label: t("personalExtra"), node: <ExtraForm data={data} set={set} /> },
    { key: "design", label: `🎨 ${t("design")}`, node: <DesignPanel data={data} set={set} /> },
  ];

  return (
    <Accordion type="multiple" defaultValue={["personal"]} className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.key} value={item.key}>
          <AccordionTrigger className="py-3 text-sm font-semibold">{item.label}</AccordionTrigger>
          <AccordionContent className="pb-4">{item.node}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { CV_SECTION_KEYS };
