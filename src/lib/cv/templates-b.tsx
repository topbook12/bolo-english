// ─── CV Studio — Templates B: sidebar · executive · timeline ────────────────
// A4 (794px) CV page renderers. INLINE STYLES ONLY — these components are
// reused inside the print portal where dark-mode/global CSS must never leak
// in (zero Tailwind classes, zero color classes). Imports are restricted to
// React types + ./types per the template contract (src/lib/cv/types.ts).
//
// Section rules shared by all three templates:
//   • iterate orderedSections(data) — respects custom order + hidden keys
//   • skip keys where !sectionHasContent(key, data)
//   • sidebar template splits the ONE ordered list into two zones
//     (sidebar-only: skills/languages/personal/hobbies — everything else main)

import type { CSSProperties, ReactNode } from "react";
import {
  type CvAccent,
  type CvContentLang,
  type CvPersonal,
  type CvRenderProps,
  type CvSectionKey,
  experienceRange,
  orderedSections,
  pageShellStyle,
  personalRows,
  sectionHasContent,
} from "./types";

/* ── shared palette (inline-style safe; no blue/indigo hues) ─────────────── */

const TEXT = "#1f2430";
const MUTED = "#555b66";

/** Sidebar-zone sections for CvTemplateSidebar; every other key = main zone. */
const SIDEBAR_ZONE_KEYS: ReadonlySet<CvSectionKey> = new Set<CvSectionKey>([
  "skills",
  "languages",
  "personal",
  "hobbies",
]);

/** Localized labels for the sidebar contact list (uppercase-styled). */
const CONTACT_LABELS: Record<
  CvContentLang,
  { phone: string; email: string; address: string; website: string; linkedin: string }
> = {
  en: { phone: "Phone", email: "Email", address: "Address", website: "Website", linkedin: "LinkedIn" },
  bn: { phone: "ফোন", email: "ইমেইল", address: "ঠিকানা", website: "ওয়েবসাইট", linkedin: "লিংকডইন" },
  hi: { phone: "फ़ोन", email: "ईमेल", address: "पता", website: "वेबसाइट", linkedin: "लिंक्डइन" },
};

/* ── tiny shared helpers ─────────────────────────────────────────────────── */

function clean(value: string | undefined): string {
  return (value ?? "").trim();
}

function joinNonEmpty(parts: Array<string | undefined>, sep: string): string {
  return parts
    .map((p) => clean(p))
    .filter(Boolean)
    .join(sep);
}

function clampLevel(level: number): number {
  return Number.isFinite(level) ? Math.max(0, Math.min(5, Math.round(level))) : 0;
}

/** Level bar — accent.base fill on accent.line track; level 0 → no bar. */
function levelBar(level: number, accent: CvAccent, height: number): ReactNode {
  const lvl = clampLevel(level);
  if (lvl <= 0) return null;
  return (
    <div
      style={{
        width: "100%",
        height,
        background: accent.line,
        borderRadius: height,
        overflow: "hidden",
      }}
    >
      <div style={{ width: `${(lvl / 5) * 100}%`, height: "100%", background: accent.base }} />
    </div>
  );
}

function bulletLines(bullets: string[], fontSize: number): ReactNode {
  return (
    <>
      {bullets
        .map((b) => clean(b))
        .filter(Boolean)
        .map((b, i) => (
          <div key={i} style={{ fontSize, lineHeight: 1.55, color: TEXT, marginTop: 3 }}>
            {`• ${b}`}
          </div>
        ))}
    </>
  );
}

function chipRow(items: string[], accent: CvAccent): ReactNode {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {items.map((h, i) => (
        <span
          key={`${i}-${h}`}
          style={{
            background: accent.line,
            color: TEXT,
            fontSize: 12,
            lineHeight: 1.45,
            padding: "3px 10px",
            borderRadius: 999,
          }}
        >
          {h}
        </span>
      ))}
    </div>
  );
}

function summaryPara(text: string): ReactNode {
  return (
    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: TEXT, whiteSpace: "pre-line" }}>
      {text}
    </p>
  );
}

function contactRows(lang: CvContentLang, p: CvPersonal): { label: string; value: string }[] {
  const L = CONTACT_LABELS[lang] ?? CONTACT_LABELS.en;
  return [
    { label: L.phone, value: clean(p.phone) },
    { label: L.email, value: clean(p.email) },
    { label: L.address, value: clean(p.address) },
    { label: L.website, value: clean(p.website) },
    { label: L.linkedin, value: clean(p.linkedin) },
  ].filter((r) => r.value);
}

/* ═══════════════════════════ 1. SIDEBAR ══════════════════════════════════ */

function renderSidebarZoneSection(
  key: CvSectionKey,
  props: CvRenderProps,
  rows: { label: string; value: string }[]
): ReactNode {
  const { data, accent } = props;
  switch (key) {
    case "skills":
      return (
        <div>
          {data.skills.map((s, i) => (
            <div key={s.id || `sk-${i}`} style={{ marginBottom: 9 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.45, marginBottom: 4 }}>
                {clean(s.name)}
              </div>
              {levelBar(s.level, accent, 5)}
            </div>
          ))}
        </div>
      );
    case "languages":
      return (
        <div>
          {data.languages.map((l, i) => (
            <div key={l.id || `ln-${i}`} style={{ marginBottom: 9 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.45, marginBottom: 4 }}>
                {clean(l.name)}
              </div>
              {levelBar(l.level, accent, 5)}
            </div>
          ))}
        </div>
      );
    case "personal":
      return (
        <div>
          {rows.map((row, i) => (
            <div key={`${row.label}-${i}`} style={{ marginBottom: 7 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: accent.dark, lineHeight: 1.45 }}>
                {row.label}
              </div>
              <div style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>{row.value}</div>
            </div>
          ))}
        </div>
      );
    case "hobbies":
      return chipRow(
        data.hobbies.map((h) => clean(h)).filter(Boolean),
        accent
      );
    default:
      return null; // main-zone keys never reach the sidebar zone
  }
}

function renderSidebarMainSection(key: CvSectionKey, props: CvRenderProps): ReactNode {
  const { data, accent } = props;
  const entry: CSSProperties = {
    borderLeft: `3px solid ${accent.base}`,
    paddingLeft: 14,
    paddingBottom: 14,
  };
  switch (key) {
    case "summary":
      return summaryPara(data.summary);
    case "education":
      return (
        <div>
          {data.education.map((e, i) => {
            const meta = joinNonEmpty([e.year, e.group, e.result], " · ");
            return (
              <div key={e.id || `edu-${i}`} style={entry}>
                <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                  {clean(e.degree)}
                </div>
                {clean(e.institution) !== "" && (
                  <div style={{ fontSize: 12.5, color: accent.dark, marginTop: 1, lineHeight: 1.45 }}>
                    {e.institution}
                  </div>
                )}
                {meta !== "" && (
                  <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>{meta}</div>
                )}
                {clean(e.details) !== "" && (
                  <div style={{ fontSize: 12, color: TEXT, marginTop: 3, lineHeight: 1.55 }}>{e.details}</div>
                )}
              </div>
            );
          })}
        </div>
      );
    case "experience":
      return (
        <div>
          {data.experience.map((x, i) => (
            <div key={x.id || `exp-${i}`} style={entry}>
              <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(x.role)}
              </div>
              {clean(x.org) !== "" && (
                <div style={{ fontSize: 12.5, color: accent.dark, marginTop: 1, lineHeight: 1.45 }}>
                  {x.org}
                </div>
              )}
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>
                {joinNonEmpty([experienceRange(x, data.lang), x.location], " · ")}
              </div>
              {bulletLines(x.bullets, 12)}
            </div>
          ))}
        </div>
      );
    case "projects":
      return (
        <div>
          {data.projects.map((p, i) => (
            <div key={p.id || `prj-${i}`} style={entry}>
              <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(p.name)}
              </div>
              {clean(p.link) !== "" && (
                <div style={{ fontSize: 11.5, color: accent.base, marginTop: 1, lineHeight: 1.45 }}>
                  {p.link}
                </div>
              )}
              {clean(p.description) !== "" && (
                <div style={{ fontSize: 12, color: TEXT, marginTop: 2, lineHeight: 1.55 }}>
                  {p.description}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    case "training":
      return (
        <div>
          {data.training.map((t, i) => (
            <div key={t.id || `tr-${i}`} style={entry}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(t.name)}
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                {joinNonEmpty([t.issuer, t.year], " · ")}
              </div>
            </div>
          ))}
        </div>
      );
    case "awards":
      return (
        <div>
          {data.awards.map((a, i) => (
            <div key={a.id || `aw-${i}`} style={entry}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(a.name)}
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                {joinNonEmpty([a.issuer, a.year], " · ")}
              </div>
            </div>
          ))}
        </div>
      );
    case "references":
      return (
        <div>
          {data.references.map((r, i) => {
            const meta = joinNonEmpty([r.relation, r.phone, r.email], " · ");
            return (
              <div key={r.id || `ref-${i}`} style={entry}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                  {clean(r.name)}
                </div>
                {clean(r.org) !== "" && (
                  <div style={{ fontSize: 12, color: TEXT, marginTop: 1, lineHeight: 1.45 }}>{r.org}</div>
                )}
                {meta !== "" && (
                  <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                    {meta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    default:
      return null; // sidebar-zone keys never reach the main zone
  }
}

/** Modern two-column — accent sidebar + main content column. */
export function CvTemplateSidebar(props: CvRenderProps) {
  const { data, accent, titles } = props;
  // Zone rule: compute the ordered list ONCE, then split — custom ordering
  // and hidden sections keep working independently in BOTH zones.
  const ordered = orderedSections(data);
  const sidebarSections = ordered.filter(
    (k) => SIDEBAR_ZONE_KEYS.has(k) && sectionHasContent(k, data)
  );
  const mainSections = ordered.filter(
    (k) => !SIDEBAR_ZONE_KEYS.has(k) && sectionHasContent(k, data)
  );
  const rows = personalRows(data);
  const photo = data.showPhoto && data.personal.photo ? data.personal.photo : "";
  const name = clean(data.personal.name);
  const headline = clean(data.personal.headline);

  return (
    <div style={{ ...pageShellStyle(props.fontStack), display: "flex" }}>
      {/* LEFT — accent sidebar */}
      <div
        style={{
          width: 262,
          flexShrink: 0,
          boxSizing: "border-box",
          background: accent.soft,
          padding: "28px 24px",
        }}
      >
        {photo !== "" && (
          <img
            src={photo}
            alt=""
            style={{
              display: "block",
              width: 140,
              height: 140,
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #ffffff",
              boxShadow: "0 2px 12px rgba(31,36,48,0.18)",
              margin: "0 auto 18px",
            }}
          />
        )}

        {contactRows(data.lang, data.personal).map((row, i) => (
          <div key={`${row.label}-${i}`} style={{ marginBottom: 9 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: accent.dark,
                textTransform: "uppercase",
                letterSpacing: 0.6,
                lineHeight: 1.45,
              }}
            >
              {row.label}
            </div>
            <div style={{ fontSize: 12, color: TEXT, lineHeight: 1.5, wordBreak: "break-word" }}>
              {row.value}
            </div>
          </div>
        ))}

        {sidebarSections.map((key, i) => (
          <div key={key} style={{ marginTop: i === 0 ? 0 : 16 }}>
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 700,
                color: accent.dark,
                textTransform: "uppercase",
                letterSpacing: 0.8,
                lineHeight: 1.45,
                borderBottom: `1px solid ${accent.line}`,
                paddingBottom: 4,
                marginBottom: 9,
              }}
            >
              {titles[key]}
            </div>
            {renderSidebarZoneSection(key, props, rows)}
          </div>
        ))}
      </div>

      {/* RIGHT — main column */}
      <div style={{ flex: 1, minWidth: 0, padding: "32px 36px" }}>
        {name !== "" && (
          <div style={{ fontSize: 27, fontWeight: 700, color: accent.dark, lineHeight: 1.2 }}>
            {name}
          </div>
        )}
        {headline !== "" && (
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: accent.base,
              marginTop: name !== "" ? 4 : 0,
              lineHeight: 1.45,
            }}
          >
            {headline}
          </div>
        )}

        {mainSections.map((key, i) => (
          <div
            key={key}
            style={{ marginTop: i === 0 ? (name !== "" || headline !== "" ? 20 : 0) : 18 }}
          >
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 700,
                color: accent.dark,
                lineHeight: 1.45,
                borderBottom: `1px solid ${accent.line}`,
                paddingBottom: 5,
                marginBottom: 12,
              }}
            >
              {titles[key]}
            </div>
            {renderSidebarMainSection(key, props)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════ 2. EXECUTIVE ════════════════════════════════ */

function renderExecutiveSection(
  key: CvSectionKey,
  props: CvRenderProps,
  rows: { label: string; value: string }[]
): ReactNode {
  const { data, accent } = props;
  const entry: CSSProperties = { paddingBottom: 34 };
  switch (key) {
    case "summary":
      return <div style={entry}>{summaryPara(data.summary)}</div>;
    case "experience":
      return (
        <div>
          {data.experience.map((x, i) => (
            <div key={x.id || `exp-${i}`} style={entry}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(x.role)}
              </div>
              {clean(x.org) !== "" && (
                <div style={{ fontSize: 12.5, fontWeight: 600, color: accent.dark, marginTop: 2, lineHeight: 1.45 }}>
                  {x.org}
                </div>
              )}
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>
                {joinNonEmpty([experienceRange(x, data.lang), x.location], " · ")}
              </div>
              <div style={{ marginTop: 4 }}>{bulletLines(x.bullets, 12.5)}</div>
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div>
          {data.education.map((e, i) => {
            const meta = joinNonEmpty([e.year, e.group, e.result], " · ");
            return (
              <div key={e.id || `edu-${i}`} style={entry}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                  {clean(e.degree)}
                </div>
                {clean(e.institution) !== "" && (
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: accent.dark, marginTop: 2, lineHeight: 1.45 }}>
                    {e.institution}
                  </div>
                )}
                {meta !== "" && (
                  <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>
                    {meta}
                  </div>
                )}
                {clean(e.details) !== "" && (
                  <div style={{ fontSize: 12.5, color: TEXT, marginTop: 4, lineHeight: 1.55 }}>
                    {e.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    case "projects":
      return (
        <div>
          {data.projects.map((p, i) => (
            <div key={p.id || `prj-${i}`} style={entry}>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(p.name)}
              </div>
              {clean(p.link) !== "" && (
                <div style={{ fontSize: 11.5, color: accent.base, marginTop: 1, lineHeight: 1.45 }}>
                  {p.link}
                </div>
              )}
              {clean(p.description) !== "" && (
                <div style={{ fontSize: 12.5, color: TEXT, marginTop: 3, lineHeight: 1.55 }}>
                  {p.description}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    case "training":
      return (
        <div>
          {data.training.map((t, i) => (
            <div key={t.id || `tr-${i}`} style={entry}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(t.name)}
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                {joinNonEmpty([t.issuer, t.year], " · ")}
              </div>
            </div>
          ))}
        </div>
      );
    case "awards":
      return (
        <div>
          {data.awards.map((a, i) => (
            <div key={a.id || `aw-${i}`} style={entry}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(a.name)}
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                {joinNonEmpty([a.issuer, a.year], " · ")}
              </div>
            </div>
          ))}
        </div>
      );
    case "references":
      return (
        <div>
          {data.references.map((r, i) => {
            const meta = joinNonEmpty([r.relation, r.phone, r.email], " · ");
            return (
              <div key={r.id || `ref-${i}`} style={entry}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                  {clean(r.name)}
                </div>
                {clean(r.org) !== "" && (
                  <div style={{ fontSize: 12, color: TEXT, marginTop: 1, lineHeight: 1.45 }}>{r.org}</div>
                )}
                {meta !== "" && (
                  <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                    {meta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    case "skills":
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 28,
            rowGap: 12,
            paddingBottom: 34,
          }}
        >
          {data.skills.map((s, i) => (
            <div key={s.id || `sk-${i}`}>
              <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.45, marginBottom: 4 }}>
                {clean(s.name)}
              </div>
              {levelBar(s.level, accent, 3)}
            </div>
          ))}
        </div>
      );
    case "languages":
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 28,
            rowGap: 12,
            paddingBottom: 34,
          }}
        >
          {data.languages.map((l, i) => (
            <div key={l.id || `ln-${i}`}>
              <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.45, marginBottom: 4 }}>
                {clean(l.name)}
              </div>
              {levelBar(l.level, accent, 3)}
            </div>
          ))}
        </div>
      );
    case "personal":
      return (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 18,
            rowGap: 9,
            paddingBottom: 34,
          }}
        >
          {rows.map((row, i) => (
            <div key={`${row.label}-${i}`} style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.4,
                  color: MUTED,
                }}
              >
                {row.label}:{" "}
              </span>
              {row.value}
            </div>
          ))}
        </div>
      );
    case "hobbies":
      return (
        <div style={{ paddingBottom: 34 }}>
          {chipRow(
            data.hobbies.map((h) => clean(h)).filter(Boolean),
            accent
          )}
        </div>
      );
    default:
      return null;
  }
}

/** Bold executive — deep accent header band + strong rhythmic body. */
export function CvTemplateExecutive(props: CvRenderProps) {
  const { data, accent, titles } = props;
  const sections = orderedSections(data).filter((k) => sectionHasContent(k, data));
  const rows = personalRows(data);
  const photo = data.showPhoto && data.personal.photo ? data.personal.photo : "";
  const name = clean(data.personal.name);
  const headline = clean(data.personal.headline);
  const contactLine = joinNonEmpty(
    [
      data.personal.phone,
      data.personal.email,
      data.personal.address,
      data.personal.website,
      data.personal.linkedin,
    ],
    " | "
  );

  return (
    <div style={pageShellStyle(props.fontStack)}>
      {/* HEADER — full-width solid deep band, white text */}
      <div
        style={{
          background: accent.deep,
          padding: "36px 46px",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          {name !== "" && (
            <div style={{ fontSize: 30, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>
              {name}
            </div>
          )}
          {headline !== "" && (
            <div
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.85)",
                marginTop: name !== "" ? 5 : 0,
                lineHeight: 1.45,
              }}
            >
              {headline}
            </div>
          )}
          {contactLine !== "" && (
            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.8)",
                marginTop: 12,
                lineHeight: 1.5,
              }}
            >
              {contactLine}
            </div>
          )}
        </div>
        {photo !== "" && (
          <img
            src={photo}
            alt=""
            style={{
              width: 104,
              height: 104,
              borderRadius: 8,
              objectFit: "cover",
              border: "3px solid rgba(255,255,255,0.35)",
              marginLeft: "auto",
              flexShrink: 0,
            }}
          />
        )}
      </div>

      {/* BODY */}
      <div style={{ padding: "40px 46px" }}>
        {sections.map((key) => (
          <div key={key}>
            <div style={{ fontSize: 14, fontWeight: 700, color: accent.base, lineHeight: 1.4, marginBottom: 12 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 3,
                  height: 18,
                  background: accent.base,
                  marginRight: 10,
                  verticalAlign: "middle",
                }}
              />
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>{titles[key]}</span>
            </div>
            {renderExecutiveSection(key, props, rows)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════ 3. TIMELINE ═════════════════════════════════ */

function timelineTitle(text: string, accent: CvAccent): ReactNode {
  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          fontSize: 12.5,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: accent.base,
          lineHeight: 1.45,
        }}
      >
        {text}
      </div>
      <div style={{ width: 26, height: 2, background: accent.base, marginTop: 5 }} />
    </div>
  );
}

/** Timeline rail entry — dot sits centered on the container's left rule. */
function timelineEntry(key: string, children: ReactNode, accent: CvAccent): ReactNode {
  return (
    <div key={key} style={{ position: "relative", paddingBottom: 16 }}>
      <span
        style={{
          position: "absolute",
          left: -28,
          top: 4,
          width: 11,
          height: 11,
          boxSizing: "border-box",
          borderRadius: "50%",
          background: accent.base,
          border: "2px solid #ffffff",
          boxShadow: `0 0 0 1px ${accent.line}`,
        }}
      />
      {children}
    </div>
  );
}

function renderTimelineSection(key: CvSectionKey, props: CvRenderProps, rows: { label: string; value: string }[]): ReactNode {
  const { data, accent } = props;

  // experience + education render as a TIMELINE rail
  if (key === "experience") {
    return (
      <div style={{ borderLeft: `2px solid ${accent.line}`, paddingLeft: 22 }}>
        {data.experience.map((x, i) =>
          timelineEntry(
            x.id || `exp-${i}`,
            <>
              <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(x.role)}
              </div>
              {clean(x.org) !== "" && (
                <div style={{ fontSize: 12.5, color: accent.dark, marginTop: 1, lineHeight: 1.45 }}>
                  {x.org}
                </div>
              )}
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>
                {joinNonEmpty([experienceRange(x, data.lang), x.location], " · ")}
              </div>
              {bulletLines(x.bullets, 12)}
            </>,
            accent
          )
        )}
      </div>
    );
  }

  if (key === "education") {
    return (
      <div style={{ borderLeft: `2px solid ${accent.line}`, paddingLeft: 22 }}>
        {data.education.map((e, i) => {
          const meta = joinNonEmpty([e.year, e.group, e.result], " · ");
          return timelineEntry(
            e.id || `edu-${i}`,
            <>
              <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(e.degree)}
              </div>
              {clean(e.institution) !== "" && (
                <div style={{ fontSize: 12.5, color: accent.dark, marginTop: 1, lineHeight: 1.45 }}>
                  {e.institution}
                </div>
              )}
              {meta !== "" && (
                <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>
                  {meta}
                </div>
              )}
              {clean(e.details) !== "" && (
                <div style={{ fontSize: 12, color: TEXT, marginTop: 3, lineHeight: 1.55 }}>
                  {e.details}
                </div>
              )}
            </>,
            accent
          );
        })}
      </div>
    );
  }

  // every other section renders normally
  switch (key) {
    case "summary":
      return summaryPara(data.summary);
    case "projects":
      return (
        <div>
          {data.projects.map((p, i) => (
            <div key={p.id || `prj-${i}`} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(p.name)}
              </div>
              {clean(p.link) !== "" && (
                <div style={{ fontSize: 11.5, color: accent.base, marginTop: 1, lineHeight: 1.45 }}>
                  {p.link}
                </div>
              )}
              {clean(p.description) !== "" && (
                <div style={{ fontSize: 12, color: TEXT, marginTop: 2, lineHeight: 1.55 }}>
                  {p.description}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    case "skills":
      return (
        <div style={{ maxWidth: 420 }}>
          {data.skills.map((s, i) => (
            <div key={s.id || `sk-${i}`} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.45, marginBottom: 4 }}>
                {clean(s.name)}
              </div>
              {levelBar(s.level, accent, 4)}
            </div>
          ))}
        </div>
      );
    case "languages":
      return (
        <div style={{ maxWidth: 420 }}>
          {data.languages.map((l, i) => (
            <div key={l.id || `ln-${i}`} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1.45, marginBottom: 4 }}>
                {clean(l.name)}
              </div>
              {levelBar(l.level, accent, 4)}
            </div>
          ))}
        </div>
      );
    case "personal":
      return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 28, rowGap: 9 }}>
          {rows.map((row, i) => (
            <div key={`${row.label}-${i}`} style={{ fontSize: 12, color: TEXT, lineHeight: 1.5 }}>
              <span
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.4,
                  color: MUTED,
                }}
              >
                {row.label}:{" "}
              </span>
              {row.value}
            </div>
          ))}
        </div>
      );
    case "hobbies":
      return chipRow(
        data.hobbies.map((h) => clean(h)).filter(Boolean),
        accent
      );
    case "training":
      return (
        <div>
          {data.training.map((t, i) => (
            <div key={t.id || `tr-${i}`} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(t.name)}
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                {joinNonEmpty([t.issuer, t.year], " · ")}
              </div>
            </div>
          ))}
        </div>
      );
    case "awards":
      return (
        <div>
          {data.awards.map((a, i) => (
            <div key={a.id || `aw-${i}`} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                {clean(a.name)}
              </div>
              <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                {joinNonEmpty([a.issuer, a.year], " · ")}
              </div>
            </div>
          ))}
        </div>
      );
    case "references":
      return (
        <div>
          {data.references.map((r, i) => {
            const meta = joinNonEmpty([r.relation, r.phone, r.email], " · ");
            return (
              <div key={r.id || `ref-${i}`} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: TEXT, lineHeight: 1.45 }}>
                  {clean(r.name)}
                </div>
                {clean(r.org) !== "" && (
                  <div style={{ fontSize: 12, color: TEXT, marginTop: 1, lineHeight: 1.45 }}>{r.org}</div>
                )}
                {meta !== "" && (
                  <div style={{ fontSize: 11.5, color: MUTED, marginTop: 1, lineHeight: 1.45 }}>
                    {meta}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    default:
      return null;
  }
}

/** Timeline modern — header row + accent rule + rail for experience/education. */
export function CvTemplateTimeline(props: CvRenderProps) {
  const { data, accent, titles } = props;
  const sections = orderedSections(data).filter((k) => sectionHasContent(k, data));
  const rows = personalRows(data);
  const photo = data.showPhoto && data.personal.photo ? data.personal.photo : "";
  const name = clean(data.personal.name);
  const headline = clean(data.personal.headline);
  const contactLine = joinNonEmpty(
    [data.personal.email, data.personal.phone, data.personal.address],
    " • "
  );

  return (
    <div style={pageShellStyle(props.fontStack)}>
      {/* HEADER */}
      <div style={{ padding: "40px 46px 24px", display: "flex", alignItems: "center" }}>
        {photo !== "" && (
          <img
            src={photo}
            alt=""
            style={{
              width: 92,
              height: 92,
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${accent.soft}`,
              flexShrink: 0,
            }}
          />
        )}
        <div style={{ flex: 1, minWidth: 0, marginLeft: photo !== "" ? 20 : 0 }}>
          {name !== "" && (
            <div style={{ fontSize: 27, fontWeight: 700, color: TEXT, lineHeight: 1.2 }}>{name}</div>
          )}
          {headline !== "" && (
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: accent.base,
                marginTop: 4,
                lineHeight: 1.45,
              }}
            >
              {headline}
            </div>
          )}
          {contactLine !== "" && (
            <div style={{ fontSize: 11.5, color: MUTED, marginTop: 6, lineHeight: 1.45 }}>
              {contactLine}
            </div>
          )}
        </div>
      </div>

      {/* full-width accent rule */}
      <div style={{ height: 2, background: accent.base }} />

      {/* BODY — single column */}
      <div style={{ padding: "26px 46px 40px" }}>
        {sections.map((key, i) => (
          <div key={key} style={{ marginTop: i === 0 ? 0 : 22 }}>
            {timelineTitle(titles[key], accent)}
            {renderTimelineSection(key, props, rows)}
          </div>
        ))}
      </div>
    </div>
  );
}
