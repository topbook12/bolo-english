// ─── CV Studio — data model & shared helpers ────────────────────────────────
// One CvData drives every template. The design block (templateId, accent,
// font, scale, section order/hiding, custom labels) is kept INSIDE the data so
// a saved CV always re-opens exactly as it was left.
//
// Templates (src/lib/cv/templates-a.tsx / templates-b.tsx) receive a
// CvRenderProps and MUST render with inline styles only — they are reused
// inside the print portal where dark-mode Tailwind classes would corrupt the
// output. Never import anything else but React + this file in a template.

export type CvSectionKey =
  | "summary"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "languages"
  | "training"
  | "awards"
  | "hobbies"
  | "references"
  | "personal";

export const CV_SECTION_KEYS: CvSectionKey[] = [
  "summary",
  "education",
  "experience",
  "projects",
  "skills",
  "languages",
  "training",
  "awards",
  "hobbies",
  "references",
  "personal",
];

export const DEFAULT_SECTION_ORDER: CvSectionKey[] = [
  "summary",
  "education",
  "experience",
  "projects",
  "skills",
  "languages",
  "training",
  "awards",
  "hobbies",
  "references",
  "personal",
];

/** Language of the CV CONTENT (headings + user text), independent of UI locale. */
export type CvContentLang = "bn" | "en" | "hi";

export interface CvPersonal {
  name: string;
  headline: string;
  email: string;
  phone: string;
  address: string;
  photo: string; // resized JPEG dataURL or ""
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  nationality: string;
  religion: string;
  maritalStatus: string;
  bloodGroup: string;
  website: string;
  linkedin: string;
}

export interface CvEducation {
  id: string;
  degree: string;
  institution: string;
  group: string;
  result: string;
  year: string;
  details: string;
}

export interface CvExperience {
  id: string;
  role: string;
  org: string;
  start: string;
  end: string; // "" = present (template renders localized word)
  location: string;
  bullets: string[];
}

export interface CvProject {
  id: string;
  name: string;
  description: string;
  link: string;
}

export interface CvSkill {
  id: string;
  name: string;
  level: number; // 0 = no bar, 1..5
}

export interface CvLanguage {
  id: string;
  name: string;
  level: number; // 0 = no bar, 1..5
}

export interface CvTraining {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface CvAward {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface CvReference {
  id: string;
  name: string;
  org: string;
  relation: string;
  phone: string;
  email: string;
}

export interface CvExtraRow {
  id: string;
  label: string;
  value: string;
}

export type CvTemplateId =
  | "classic"
  | "minimal"
  | "elegant"
  | "sidebar"
  | "executive"
  | "timeline";

export interface CvData {
  lang: CvContentLang;
  templateId: CvTemplateId;
  accent: string; // hex
  font: "sans" | "serif";
  scale: number; // 0.9 … 1.15
  showPhoto: boolean;
  sectionOrder: CvSectionKey[];
  hiddenSections: CvSectionKey[];
  labels: Partial<Record<CvSectionKey, string>>;

  personal: CvPersonal;
  summary: string;
  education: CvEducation[];
  experience: CvExperience[];
  projects: CvProject[];
  skills: CvSkill[];
  languages: CvLanguage[];
  training: CvTraining[];
  awards: CvAward[];
  hobbies: string[];
  references: CvReference[];
  personalExtra: CvExtraRow[];
}

/* ── Default headings in the CV's own language ─────────────────────────── */

export const DEFAULT_SECTION_HEADINGS: Record<
  CvContentLang,
  Record<CvSectionKey, string>
> = {
  bn: {
    summary: "সারসংক্ষেপ",
    education: "শিক্ষাগত যোগ্যতা",
    experience: "কাজের অভিজ্ঞতা",
    projects: "প্রজেক্ট",
    skills: "দক্ষতা",
    languages: "ভাষাগত দক্ষতা",
    training: "প্রশিক্ষণ ও সার্টিফিকেট",
    awards: "পুরস্কার ও সম্মাননা",
    hobbies: "শখ ও আগ্রহ",
    references: "রেফারেন্স",
    personal: "ব্যক্তিগত তথ্য",
  },
  en: {
    summary: "Professional Summary",
    education: "Education",
    experience: "Work Experience",
    projects: "Projects",
    skills: "Skills",
    languages: "Languages",
    training: "Training & Certifications",
    awards: "Awards & Honors",
    hobbies: "Interests",
    references: "References",
    personal: "Personal Details",
  },
  hi: {
    summary: "सारांश",
    education: "शिक्षा",
    experience: "कार्य अनुभव",
    projects: "प्रोजेक्ट्स",
    skills: "कौशल",
    languages: "भाषाएँ",
    training: "प्रशिक्षण और प्रमाणपत्र",
    awards: "पुरस्कार और सम्मान",
    hobbies: "रुचियाँ",
    references: "संदर्भ",
    personal: "व्यक्तिगत विवरण",
  },
};

/** Labels used inside the "personal details" block (Bangladeshi biodata style). */
export const PERSONAL_FIELD_LABELS: Record<
  CvContentLang,
  { father: string; mother: string; dob: string; nationality: string; religion: string; marital: string; blood: string; address: string; website: string }
> = {
  bn: {
    father: "পিতা",
    mother: "মাতা",
    dob: "জন্ম তারিখ",
    nationality: "জাতীয়তা",
    religion: "ধর্ম",
    marital: "বৈবাহিক অবস্থা",
    blood: "রক্তের গ্রুপ",
    address: "ঠিকানা",
    website: "ওয়েবসাইট",
  },
  en: {
    father: "Father",
    mother: "Mother",
    dob: "Date of Birth",
    nationality: "Nationality",
    religion: "Religion",
    marital: "Marital Status",
    blood: "Blood Group",
    address: "Address",
    website: "Website",
  },
  hi: {
    father: "पिता",
    mother: "माता",
    dob: "जन्म तिथि",
    nationality: "राष्ट्रीयता",
    religion: "धर्म",
    marital: "वैवाहिक स्थिति",
    blood: "रक्त समूह",
    address: "पता",
    website: "वेबसाइट",
  },
};

/** Fallback word for "present" when experience.end is empty. */
export const PRESENT_WORD: Record<CvContentLang, string> = {
  bn: "বর্তমান",
  en: "Present",
  hi: "वर्तमान",
};

/* ── Derived accent palette (inline-style safe) ────────────────────────── */

export interface CvAccent {
  base: string;
  dark: string;
  deep: string;
  soft: string;
  line: string;
  onDark: string;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function normalizeHex(input: string): string {
  let s = (input || "").trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(s)) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return "#0d9488";
  return `#${s.toLowerCase()}`;
}

function hexToRgb(hex: string): [number, number, number] {
  const s = normalizeHex(hex).slice(1);
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  const h = (v: number) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0");
  return `#${h(r)}${h(g)}${h(b)}`;
}

export function shade(hex: string, amount: number): string {
  const [r, g, b] = hexToRgb(hex);
  if (amount >= 0) {
    return rgbToHex(r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount);
  }
  const k = 1 + amount;
  return rgbToHex(r * k, g * k, b * k);
}

export function isAccentLight(hex: string): boolean {
  const [r, g, b] = hexToRgb(hex);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
}

export function deriveAccent(hex: string): CvAccent {
  const base = normalizeHex(hex);
  const light = isAccentLight(base);
  return {
    base,
    dark: shade(base, -0.22),
    deep: shade(base, -0.42),
    soft: shade(base, 0.86),
    line: shade(base, 0.62),
    onDark: light ? "#1a1a1a" : "#ffffff",
  };
}

/** Curated accent presets — formal, print-friendly, NO blue/indigo. */
export const ACCENT_PRESETS: { hex: string }[] = [
  { hex: "#0d9488" },
  { hex: "#0f766e" },
  { hex: "#166534" },
  { hex: "#4d7c0f" },
  { hex: "#b45309" },
  { hex: "#9f1239" },
  { hex: "#be123c" },
  { hex: "#7c3aed" },
  { hex: "#86198f" },
  { hex: "#334155" },
  { hex: "#18181b" },
];

/* ── Fonts ──────────────────────────────────────────────────────────────── */

export function fontStackFor(font: "sans" | "serif"): string {
  return font === "serif"
    ? `'Noto Serif Bengali','Noto Serif',Georgia,'Times New Roman','Noto Serif Devanagari',serif`
    : `'Hind Siliguri','Noto Sans Bengali','Noto Sans Devanagari',-apple-system,'Segoe UI',Roboto,Arial,sans-serif`;
}

/* ── Section helpers shared by every template ───────────────────────────── */

export function resolveTitles(data: CvData): Record<CvSectionKey, string> {
  const defaults = DEFAULT_SECTION_HEADINGS[data.lang] ?? DEFAULT_SECTION_HEADINGS.en;
  const out = {} as Record<CvSectionKey, string>;
  for (const k of CV_SECTION_KEYS) out[k] = data.labels?.[k]?.trim() || defaults[k];
  return out;
}

export function orderedSections(data: CvData): CvSectionKey[] {
  const hidden = new Set(data.hiddenSections ?? []);
  const base = (data.sectionOrder?.length ? data.sectionOrder : DEFAULT_SECTION_ORDER).filter(
    (k) => CV_SECTION_KEYS.includes(k)
  );
  for (const k of CV_SECTION_KEYS) if (!base.includes(k)) base.push(k);
  return base.filter((k) => !hidden.has(k));
}

export function personalRows(data: CvData): { label: string; value: string }[] {
  const L = PERSONAL_FIELD_LABELS[data.lang] ?? PERSONAL_FIELD_LABELS.en;
  const p = data.personal;
  const rows: { label: string; value: string }[] = [
    { label: L.father, value: p.fatherName },
    { label: L.mother, value: p.motherName },
    { label: L.dob, value: p.dateOfBirth },
    { label: L.nationality, value: p.nationality },
    { label: L.religion, value: p.religion },
    { label: L.marital, value: p.maritalStatus },
    { label: L.blood, value: p.bloodGroup },
  ];
  for (const extra of data.personalExtra ?? []) {
    if (extra.label.trim() || extra.value.trim()) rows.push({ label: extra.label, value: extra.value });
  }
  return rows.filter((r) => r.value.trim());
}

export function experienceRange(exp: CvExperience, lang: CvContentLang): string {
  const end = exp.end?.trim() || PRESENT_WORD[lang];
  const start = exp.start?.trim();
  return start ? `${start} — ${end}` : end;
}

/** A section has content? Templates skip empty sections entirely. */
export function sectionHasContent(key: CvSectionKey, data: CvData): boolean {
  switch (key) {
    case "summary":
      return !!data.summary.trim();
    case "education":
      return data.education.length > 0;
    case "experience":
      return data.experience.length > 0;
    case "projects":
      return data.projects.length > 0;
    case "skills":
      return data.skills.length > 0;
    case "languages":
      return data.languages.length > 0;
    case "training":
      return data.training.length > 0;
    case "awards":
      return data.awards.length > 0;
    case "hobbies":
      return data.hobbies.length > 0;
    case "references":
      return data.references.length > 0;
    case "personal":
      return personalRows(data).length > 0;
  }
}

/* ── Template render contract ───────────────────────────────────────────── */

export interface CvRenderProps {
  data: CvData;
  accent: CvAccent;
  titles: Record<CvSectionKey, string>;
  fontStack: string;
}

export const A4_WIDTH_PX = 794;
export const A4_MIN_HEIGHT_PX = 1123;

/** Shared page shell for templates — white A4 page in the CV's content font. */
export function pageShellStyle(fontStack: string): React.CSSProperties {
  return {
    width: A4_WIDTH_PX,
    minHeight: A4_MIN_HEIGHT_PX,
    background: "#ffffff",
    color: "#1f2430",
    fontFamily: fontStack,
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };
}

/* ── Factories ──────────────────────────────────────────────────────────── */

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function emptyPersonal(): CvPersonal {
  return {
    name: "",
    headline: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    nationality: "",
    religion: "",
    maritalStatus: "",
    bloodGroup: "",
    website: "",
    linkedin: "",
  };
}

export function emptyCvData(lang: CvContentLang = "bn"): CvData {
  return {
    lang,
    templateId: "classic",
    accent: "#0d9488",
    font: "sans",
    scale: 1,
    showPhoto: true,
    sectionOrder: [...DEFAULT_SECTION_ORDER],
    hiddenSections: [],
    labels: {},
    personal: emptyPersonal(),
    summary: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    languages: [],
    training: [],
    awards: [],
    hobbies: [],
    references: [],
    personalExtra: [],
  };
}

/** Defensive parse for data coming back from the server (stale schema safe). */
export function normalizeCvData(raw: unknown): CvData {
  const base = emptyCvData();
  if (typeof raw !== "object" || raw === null) return base;
  const r = raw as Partial<CvData>;
  const lang: CvContentLang = r.lang === "en" || r.lang === "hi" ? r.lang : "bn";
  const templateId: CvTemplateId = (
    ["classic", "minimal", "elegant", "sidebar", "executive", "timeline"] as CvTemplateId[]
  ).includes(r.templateId as CvTemplateId)
    ? (r.templateId as CvTemplateId)
    : "classic";
  const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
  return {
    lang,
    templateId,
    accent: normalizeHex(typeof r.accent === "string" ? r.accent : base.accent),
    font: r.font === "serif" ? "serif" : "sans",
    scale: typeof r.scale === "number" && r.scale >= 0.85 && r.scale <= 1.2 ? r.scale : 1,
    showPhoto: r.showPhoto !== false,
    sectionOrder: Array.isArray(r.sectionOrder)
      ? (r.sectionOrder.filter((k) => CV_SECTION_KEYS.includes(k as CvSectionKey)) as CvSectionKey[])
      : [...DEFAULT_SECTION_ORDER],
    hiddenSections: Array.isArray(r.hiddenSections)
      ? (r.hiddenSections.filter((k) => CV_SECTION_KEYS.includes(k as CvSectionKey)) as CvSectionKey[])
      : [],
    labels: typeof r.labels === "object" && r.labels !== null ? r.labels : {},
    personal: { ...base.personal, ...(typeof r.personal === "object" && r.personal !== null ? r.personal : {}) },
    summary: typeof r.summary === "string" ? r.summary : "",
    education: arr<CvEducation>(r.education),
    experience: arr<CvExperience>(r.experience).map((e) => ({
      ...e,
      bullets: Array.isArray(e?.bullets) ? e.bullets : [],
    })),
    projects: arr<CvProject>(r.projects),
    skills: arr<CvSkill>(r.skills),
    languages: arr<CvLanguage>(r.languages),
    training: arr<CvTraining>(r.training),
    awards: arr<CvAward>(r.awards),
    hobbies: arr<string>(r.hobbies).filter((h) => typeof h === "string"),
    references: arr<CvReference>(r.references),
    personalExtra: arr<CvExtraRow>(r.personalExtra),
  };
}

/* ── Realistic sample (demo + "load sample" button) ─────────────────────── */

export function sampleCvData(): CvData {
  return {
    ...emptyCvData("bn"),
    templateId: "sidebar",
    accent: "#0f766e",
    personal: {
      name: "রাফসান আহমেদ",
      headline: "সফটওয়্যার ইঞ্জিনিয়ার · ওয়েব ডেভেলপার",
      email: "rafsan.ahmed@gmail.com",
      phone: "+880 1712-345678",
      address: "বাড়ি ১২, রোড ৫, ধানমন্ডি, ঢাকা-১২০৫",
      photo: "",
      fatherName: "মো. আনোয়ার হোসেন",
      motherName: "শারমিন আক্তার",
      dateOfBirth: "১২ মার্চ ২০০০",
      nationality: "বাংলাদেশী",
      religion: "ইসলাম",
      maritalStatus: "অবিবাহিত",
      bloodGroup: "B+",
      website: "rafsan.dev",
      linkedin: "linkedin.com/in/rafsan",
    },
    summary:
      "৩ বছরের অভিজ্ঞতাসম্পন্ন ওয়েব ডেভেলপার, React ও Node.js-এ দক্ষ। ই-কমার্স ও শিক্ষা খাতের প্রোডাক্টে কাজ করেছি — দ্রুত, ব্যবহারবান্ধব ও নিরাপদ ওয়েব অ্যাপ বানানোই আমার নেশা।",
    education: [
      { id: "edu-1", degree: "B.Sc. in Computer Science & Engineering", institution: "ঢাকা বিশ্ববিদ্যালয়", group: "CSE", result: "CGPA 3.72 / 4.00", year: "২০২২", details: "থিসিস: বাংলা ভাষার স্পিচ-টু-টেক্সট নির্ভুলতা উন্নয়ন" },
      { id: "edu-2", degree: "এইচএসসি (বিজ্ঞান)", institution: "ঢাকা কলেজ", group: "বিজ্ঞান", result: "GPA 5.00 / 5.00", year: "২০১৮", details: "" },
      { id: "edu-3", degree: "এসএসসি (বিজ্ঞান)", institution: "উত্তরা উচ্চ বিদ্যালয়", group: "বিজ্ঞান", result: "GPA 4.83 / 5.00", year: "২০১৬", details: "" },
    ],
    experience: [
      {
        id: "exp-1",
        role: "সিনিয়র ওয়েব ডেভেলপার",
        org: "টেকনোলিমন লিমিটেড, ঢাকা",
        start: "জানুয়ারি ২০২৩",
        end: "",
        location: "ঢাকা",
        bullets: [
          "React + Next.js দিয়ে ই-কমার্স প্ল্যাটফর্ম — মাসিক ২ লক্ষ ইউজার",
          "পেজ লোড টাইম ৪.২ সেকেন্ড থেকে ১.১ সেকেন্ডে নামানো",
          "৪ জনের টিমের কোড রিভিউ ও মেন্টরিং",
        ],
      },
      {
        id: "exp-2",
        role: "জুনিয়র ডেভেলপার",
        org: "সফটওয়েভ বিডি",
        start: "মার্চ ২০২২",
        end: "ডিসেম্বর ২০২২",
        location: "রিমোট",
        bullets: ["স্কুল ম্যানেজমেন্ট সফটওয়্যারের ফ্রন্টএন্ড মডিউল", "REST API ইন্টিগ্রেশন ও বাগ ফিক্স"],
      },
    ],
    projects: [
      { id: "prj-1", name: "Bolo English", description: "বাংলাভাষীদের জন্য ফ্রি ইংরেজি শেখার প্ল্যাটফর্ম (PWA)", link: "bolo-english.vercel.app" },
      { id: "prj-2", name: "Krishi Batayon", description: "কৃষকের জন্য আবহাওয়া ও বাজারদরের অ্যাপ", link: "" },
    ],
    skills: [
      { id: "sk-1", name: "JavaScript / TypeScript", level: 5 },
      { id: "sk-2", name: "React · Next.js", level: 5 },
      { id: "sk-3", name: "Node.js · Express", level: 4 },
      { id: "sk-4", name: "PostgreSQL · Prisma", level: 4 },
      { id: "sk-5", name: "Git · GitHub Actions", level: 4 },
    ],
    languages: [
      { id: "ln-1", name: "বাংলা", level: 5 },
      { id: "ln-2", name: "ইংরেজি", level: 4 },
      { id: "ln-3", name: "হিন্দি", level: 3 },
    ],
    training: [
      { id: "tr-1", name: "Full-Stack Web Development Bootcamp", issuer: "Programming Hero", year: "২০২২" },
    ],
    awards: [{ id: "aw-1", name: "ন্যাশনাল হ্যাকাথন — চ্যাম্পিয়ন", issuer: "BASIS", year: "২০২১" }],
    hobbies: ["প্রোগ্রামিং কনটেস্ট", "বই পড়া", "ফুটবল", "ব্লগ লেখা"],
    references: [
      { id: "ref-1", name: "ড. সাব্বির রহমান", org: "অধ্যাপক, CSE — ঢাকা বিশ্ববিদ্যালয়", relation: "সুপারভাইজার", phone: "+880 1812-111222", email: "sabbir@cse.du.ac.bd" },
    ],
    personalExtra: [{ id: "px-1", label: "স্থায়ী ঠিকানা", value: "গ্রাম: রামপুর, ডাকঘর: সদর, কুমিল্লা" }],
  };
}
