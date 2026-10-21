// ─── CV Studio — Template set A: classic · minimal · elegant ────────────────
//
// Three single-column A4 templates sharing the ./types contract:
//   · CvTemplateClassic — traditional/formal (uppercase ruled titles, bars)
//   · CvTemplateMinimal — airy, whitespace-driven (chips, thin 2px rule)
//   · CvTemplateElegant — centred premium feel (soft header band, side rules)
//
// They render inside the print portal: INLINE STYLES ONLY. No Tailwind
// classes, no imports besides React types and ./types — dark-mode CSS can
// never corrupt the printed page.

import type { CSSProperties } from "react";
import {
  type CvPersonal,
  type CvRenderProps,
  type CvSectionKey,
  experienceRange,
  orderedSections,
  pageShellStyle,
  personalRows,
  sectionHasContent,
} from "./types";

/* ── shared palette & tiny helpers ──────────────────────────────────────── */

const TEXT = "#1f2430";
const MUTED = "#555b66";

function clean(value: string): string {
  return (value ?? "").trim();
}

function cleanList(values: string[]): string[] {
  if (!Array.isArray(values)) return [];
  return values.map((v) => clean(v)).filter(Boolean);
}

/** email • phone • address — empty entries dropped. */
function contactParts(p: CvPersonal): string[] {
  return cleanList([p.email, p.phone, p.address]);
}

function showPhoto(data: CvRenderProps["data"]): boolean {
  return data.showPhoto && clean(data.personal.photo) !== "";
}

function safeLevel(level: number): number {
  const n = typeof level === "number" && Number.isFinite(level) ? Math.round(level) : 0;
  return Math.max(0, Math.min(5, n));
}

interface LevelItem {
  id: string;
  name: string;
  level: number;
}

interface DatedItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

/* ══════════════════════════════════════════════════════════════════════════
   A1 · CLASSIC — traditional, formal, single column
   ══════════════════════════════════════════════════════════════════════════ */

export function CvTemplateClassic(props: CvRenderProps) {
  const { data, accent, titles, fontStack } = props;
  const p = data.personal;
  const name = clean(p.name);
  const headline = clean(p.headline);
  const contact = contactParts(p);
  const photo = showPhoto(data);
  const sections = orderedSections(data).filter((k) => sectionHasContent(k, data));

  const titleStyle: CSSProperties = {
    margin: 0,
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: accent.dark,
    borderBottom: `1px solid ${accent.line}`,
    paddingBottom: 4,
  };

  const renderBody = (key: CvSectionKey) => {
    switch (key) {
      case "summary":
        return (
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: TEXT, whiteSpace: "pre-line" }}>
            {clean(data.summary)}
          </p>
        );

      case "education":
        return (
          <div style={{ display: "grid", rowGap: 10 }}>
            {data.education
              .filter((e) => cleanList([e.degree, e.institution, e.group, e.result, e.year]).length > 0)
              .map((e) => {
                const meta = cleanList([e.group, e.result]).join(" · ");
                return (
                  <div
                    key={e.id}
                    style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}
                  >
                    <div style={{ minWidth: 0 }}>
                      {clean(e.degree) ? (
                        <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{clean(e.degree)}</div>
                      ) : null}
                      {clean(e.institution) ? (
                        <div style={{ fontSize: 12.5, color: TEXT }}>{clean(e.institution)}</div>
                      ) : null}
                      {meta ? <div style={{ fontSize: 12, color: MUTED }}>{meta}</div> : null}
                      {clean(e.details) ? (
                        <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic" }}>{clean(e.details)}</div>
                      ) : null}
                    </div>
                    {clean(e.year) ? (
                      <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap", paddingTop: 2 }}>
                        {clean(e.year)}
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "experience":
        return (
          <div style={{ display: "grid", rowGap: 12 }}>
            {data.experience
              .filter(
                (x) =>
                  cleanList([x.role, x.org, x.location]).length > 0 || cleanList(x.bullets ?? []).length > 0
              )
              .map((x) => {
                const role = clean(x.role);
                const org = clean(x.org);
                const loc = clean(x.location);
                const bullets = cleanList(x.bullets ?? []);
                const leftSome = role || org || loc;
                return (
                  <div key={x.id}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
                      <div style={{ minWidth: 0, fontSize: 13, color: TEXT }}>
                        {role ? <span style={{ fontWeight: 700 }}>{role}</span> : null}
                        {org ? (
                          <span style={{ fontStyle: "italic", fontSize: 12.5 }}>
                            {role ? " — " : ""}
                            {org}
                          </span>
                        ) : null}
                        {loc ? (
                          <span style={{ fontSize: 12, color: MUTED }}>{leftSome ? ` · ${loc}` : loc}</span>
                        ) : null}
                      </div>
                      <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>
                        {experienceRange(x, data.lang)}
                      </div>
                    </div>
                    {bullets.length > 0 ? (
                      <div style={{ marginTop: 4, paddingLeft: 14, display: "grid", rowGap: 2 }}>
                        {bullets.map((b, i) => (
                          <div key={i} style={{ fontSize: 12, lineHeight: 1.5, color: TEXT }}>
                            • {b}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "projects":
        return (
          <div style={{ display: "grid", rowGap: 9 }}>
            {data.projects
              .filter((pr) => cleanList([pr.name, pr.description, pr.link]).length > 0)
              .map((pr) => {
                const pname = clean(pr.name);
                const link = clean(pr.link);
                return (
                  <div key={pr.id}>
                    {pname || link ? (
                      <div style={{ fontSize: 13, color: TEXT }}>
                        {pname ? <span style={{ fontWeight: 700 }}>{pname}</span> : null}
                        {link ? (
                          <span style={{ fontSize: 11.5, color: accent.base }}>{pname ? ` — ${link}` : link}</span>
                        ) : null}
                      </div>
                    ) : null}
                    {clean(pr.description) ? (
                      <div style={{ fontSize: 12, lineHeight: 1.5, color: MUTED }}>{clean(pr.description)}</div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "skills":
      case "languages": {
        const items: LevelItem[] = key === "skills" ? data.skills : data.languages;
        return (
          <div style={{ display: "grid", rowGap: 7 }}>
            {items
              .filter((s) => clean(s.name))
              .map((s) => {
                const lvl = safeLevel(s.level);
                return (
                  <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ flex: 1, minWidth: 0, fontSize: 12.5, color: TEXT }}>{clean(s.name)}</div>
                    {lvl > 0 ? (
                      <div
                        style={{
                          width: 170,
                          height: 5,
                          flexShrink: 0,
                          background: accent.line,
                          borderRadius: 3,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${(lvl / 5) * 100}%`,
                            height: "100%",
                            background: accent.base,
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );
      }

      case "training":
      case "awards": {
        const items: DatedItem[] = key === "training" ? data.training : data.awards;
        return (
          <div style={{ display: "grid", rowGap: 8 }}>
            {items
              .filter((t) => cleanList([t.name, t.issuer, t.year]).length > 0)
              .map((t) => (
                <div
                  key={t.id}
                  style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}
                >
                  <div style={{ minWidth: 0, fontSize: 12.5, color: TEXT }}>
                    {clean(t.name) ? <span style={{ fontWeight: 700 }}>{clean(t.name)}</span> : null}
                    {clean(t.issuer) ? (
                      <span style={{ fontSize: 12, color: MUTED }}>
                        {clean(t.name) ? ` — ${clean(t.issuer)}` : clean(t.issuer)}
                      </span>
                    ) : null}
                  </div>
                  {clean(t.year) ? (
                    <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>{clean(t.year)}</div>
                  ) : null}
                </div>
              ))}
          </div>
        );
      }

      case "hobbies": {
        const hobbies = cleanList(data.hobbies);
        if (!hobbies.length) return null;
        return <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: TEXT }}>{hobbies.join(" • ")}</p>;
      }

      case "references":
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 28, rowGap: 10 }}>
            {data.references
              .filter((r) => cleanList([r.name, r.org, r.relation, r.phone, r.email]).length > 0)
              .map((r) => {
                const reach = cleanList([r.phone, r.email]).join(" · ");
                return (
                  <div key={r.id}>
                    {clean(r.name) ? (
                      <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{clean(r.name)}</div>
                    ) : null}
                    {clean(r.org) ? <div style={{ fontSize: 12, color: TEXT }}>{clean(r.org)}</div> : null}
                    {clean(r.relation) ? <div style={{ fontSize: 12, color: MUTED }}>{clean(r.relation)}</div> : null}
                    {reach ? <div style={{ fontSize: 12, color: MUTED }}>{reach}</div> : null}
                  </div>
                );
              })}
          </div>
        );

      case "personal":
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 32, rowGap: 5 }}>
            {personalRows(data).map((row, i) => (
              <div key={`${row.label}-${i}`} style={{ fontSize: 12, lineHeight: 1.5, color: TEXT }}>
                <span style={{ fontWeight: 700, fontSize: 11.5 }}>{row.label}</span>: {row.value}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ ...pageShellStyle(fontStack), padding: "48px 48px 44px", lineHeight: 1.5 }}>
      <header style={{ position: "relative", textAlign: "center", minHeight: photo ? 120 : undefined }}>
        {photo ? (
          <img
            src={p.photo}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 96,
              height: 120,
              objectFit: "cover",
              borderRadius: 6,
              border: `1px solid ${accent.line}`,
            }}
          />
        ) : null}
        <div style={photo ? { padding: "0 116px" } : undefined}>
          {name ? (
            <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3, color: TEXT }}>
              {name}
            </div>
          ) : null}
          {headline ? <div style={{ fontSize: 12.5, color: MUTED, marginTop: name ? 4 : 0 }}>{headline}</div> : null}
          {contact.length > 0 ? (
            <div style={{ fontSize: 11.5, color: MUTED, marginTop: name || headline ? 6 : 0 }}>
              {contact.join(" • ")}
            </div>
          ) : null}
        </div>
      </header>

      <div style={{ marginTop: 20 }}>
        {sections.map((key, idx) => (
          <section key={key} style={{ marginTop: idx === 0 ? 0 : 18 }}>
            <h2 style={titleStyle}>{titles[key]}</h2>
            <div style={{ marginTop: 10 }}>{renderBody(key)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   A2 · MINIMAL — airy, whitespace-driven, chip-based
   ══════════════════════════════════════════════════════════════════════════ */

export function CvTemplateMinimal(props: CvRenderProps) {
  const { data, accent, titles, fontStack } = props;
  const p = data.personal;
  const name = clean(p.name);
  const headline = clean(p.headline);
  const contact = contactParts(p);
  const photo = showPhoto(data);
  const hasHeader = photo || !!name || !!headline || contact.length > 0;
  const sections = orderedSections(data).filter((k) => sectionHasContent(k, data));

  const titleStyle: CSSProperties = {
    margin: 0,
    fontSize: 11.5,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: accent.base,
  };

  const chipStyle: CSSProperties = {
    padding: "4px 12px",
    borderRadius: 999,
    background: accent.soft,
    color: "#1f2430",
    fontSize: 11.5,
    lineHeight: 1.45,
    whiteSpace: "nowrap",
  };

  const renderBody = (key: CvSectionKey) => {
    switch (key) {
      case "summary":
        return (
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: TEXT, whiteSpace: "pre-line" }}>
            {clean(data.summary)}
          </p>
        );

      case "education":
        return (
          <div style={{ display: "grid", rowGap: 14 }}>
            {data.education
              .filter((e) => cleanList([e.degree, e.institution, e.group, e.result, e.year]).length > 0)
              .map((e) => {
                const meta = cleanList([e.group, e.result]).join(" · ");
                return (
                  <div
                    key={e.id}
                    style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 18 }}
                  >
                    <div style={{ minWidth: 0 }}>
                      {clean(e.degree) ? (
                        <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{clean(e.degree)}</div>
                      ) : null}
                      {clean(e.institution) ? (
                        <div style={{ fontSize: 12.5, color: MUTED }}>{clean(e.institution)}</div>
                      ) : null}
                      {meta ? <div style={{ fontSize: 12, color: MUTED }}>{meta}</div> : null}
                      {clean(e.details) ? (
                        <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic" }}>{clean(e.details)}</div>
                      ) : null}
                    </div>
                    {clean(e.year) ? (
                      <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>{clean(e.year)}</div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "experience":
        return (
          <div style={{ display: "grid", rowGap: 16 }}>
            {data.experience
              .filter(
                (x) =>
                  cleanList([x.role, x.org, x.location]).length > 0 || cleanList(x.bullets ?? []).length > 0
              )
              .map((x) => {
                const role = clean(x.role);
                const orgLine = cleanList([x.org, x.location]).join(" · ");
                const bullets = cleanList(x.bullets ?? []);
                return (
                  <div key={x.id}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 18 }}>
                      <div style={{ minWidth: 0 }}>
                        {role ? (
                          <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{role}</div>
                        ) : null}
                        {orgLine ? <div style={{ fontSize: 12.5, color: MUTED }}>{orgLine}</div> : null}
                      </div>
                      <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>
                        {experienceRange(x, data.lang)}
                      </div>
                    </div>
                    {bullets.length > 0 ? (
                      <div style={{ marginTop: 5, paddingLeft: 16, display: "grid", rowGap: 3 }}>
                        {bullets.map((b, i) => (
                          <div key={i} style={{ fontSize: 12, lineHeight: 1.55, color: TEXT }}>
                            • {b}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "projects":
        return (
          <div style={{ display: "grid", rowGap: 12 }}>
            {data.projects
              .filter((pr) => cleanList([pr.name, pr.description, pr.link]).length > 0)
              .map((pr) => {
                const pname = clean(pr.name);
                const link = clean(pr.link);
                return (
                  <div key={pr.id}>
                    {pname || link ? (
                      <div style={{ fontSize: 13, color: TEXT }}>
                        {pname ? <span style={{ fontWeight: 600 }}>{pname}</span> : null}
                        {link ? (
                          <span style={{ fontSize: 11.5, color: accent.base }}>{pname ? ` — ${link}` : link}</span>
                        ) : null}
                      </div>
                    ) : null}
                    {clean(pr.description) ? (
                      <div style={{ fontSize: 12, lineHeight: 1.55, color: MUTED, marginTop: 2 }}>
                        {clean(pr.description)}
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "skills":
      case "languages": {
        const items: LevelItem[] = key === "skills" ? data.skills : data.languages;
        return (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {items
              .filter((s) => clean(s.name))
              .map((s) => (
                <span key={s.id} style={chipStyle}>
                  {clean(s.name)}
                </span>
              ))}
          </div>
        );
      }

      case "training":
      case "awards": {
        const items: DatedItem[] = key === "training" ? data.training : data.awards;
        return (
          <div style={{ display: "grid", rowGap: 11 }}>
            {items
              .filter((t) => cleanList([t.name, t.issuer, t.year]).length > 0)
              .map((t) => (
                <div
                  key={t.id}
                  style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 18 }}
                >
                  <div style={{ minWidth: 0, fontSize: 12.5, color: TEXT }}>
                    {clean(t.name) ? <span style={{ fontWeight: 600 }}>{clean(t.name)}</span> : null}
                    {clean(t.issuer) ? (
                      <span style={{ fontSize: 12, color: MUTED }}>
                        {clean(t.name) ? ` · ${clean(t.issuer)}` : clean(t.issuer)}
                      </span>
                    ) : null}
                  </div>
                  {clean(t.year) ? (
                    <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>{clean(t.year)}</div>
                  ) : null}
                </div>
              ))}
          </div>
        );
      }

      case "hobbies": {
        const hobbies = cleanList(data.hobbies);
        if (!hobbies.length) return null;
        return <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: MUTED }}>{hobbies.join(" · ")}</p>;
      }

      case "references":
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 32, rowGap: 14 }}>
            {data.references
              .filter((r) => cleanList([r.name, r.org, r.relation, r.phone, r.email]).length > 0)
              .map((r) => {
                const reach = cleanList([r.phone, r.email]).join(" · ");
                return (
                  <div key={r.id}>
                    {clean(r.name) ? (
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: TEXT }}>{clean(r.name)}</div>
                    ) : null}
                    {clean(r.org) ? <div style={{ fontSize: 12, color: MUTED }}>{clean(r.org)}</div> : null}
                    {clean(r.relation) ? <div style={{ fontSize: 12, color: MUTED }}>{clean(r.relation)}</div> : null}
                    {reach ? <div style={{ fontSize: 12, color: MUTED }}>{reach}</div> : null}
                  </div>
                );
              })}
          </div>
        );

      case "personal":
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 32, rowGap: 8 }}>
            {personalRows(data).map((row, i) => (
              <div key={`${row.label}-${i}`} style={{ fontSize: 12, lineHeight: 1.5 }}>
                <span style={{ color: MUTED }}>{row.label}</span>: <span style={{ color: TEXT }}>{row.value}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ ...pageShellStyle(fontStack), padding: "56px 56px 48px", lineHeight: 1.55 }}>
      {hasHeader ? (
        <>
          <header style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
            <div style={{ minWidth: 0 }}>
              {name ? (
                <div style={{ fontSize: 27, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2, color: TEXT }}>
                  {name}
                </div>
              ) : null}
              {headline ? <div style={{ fontSize: 12.5, color: MUTED, marginTop: name ? 5 : 0 }}>{headline}</div> : null}
              {contact.length > 0 ? (
                <div style={{ fontSize: 11.5, color: MUTED, marginTop: name || headline ? 7 : 0 }}>
                  {contact.join(" • ")}
                </div>
              ) : null}
            </div>
            {photo ? (
              <img
                src={p.photo}
                alt=""
                style={{
                  width: 78,
                  height: 96,
                  objectFit: "cover",
                  borderRadius: 8,
                  border: `1px solid ${accent.line}`,
                  flexShrink: 0,
                }}
              />
            ) : null}
          </header>
          <div style={{ height: 2, background: accent.base, marginTop: 18 }} />
        </>
      ) : null}

      <div>
        {sections.map((key) => (
          <section key={key} style={{ marginTop: 24 }}>
            <h2 style={titleStyle}>{titles[key]}</h2>
            <div style={{ marginTop: 12 }}>{renderBody(key)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   A3 · ELEGANT — centred, calm, premium
   ══════════════════════════════════════════════════════════════════════════ */

export function CvTemplateElegant(props: CvRenderProps) {
  const { data, accent, titles, fontStack } = props;
  const p = data.personal;
  const name = clean(p.name);
  const headline = clean(p.headline);
  const contact = contactParts(p);
  const photo = showPhoto(data);
  const hasHeader = photo || !!name || !!headline || contact.length > 0;
  const sections = orderedSections(data).filter((k) => sectionHasContent(k, data));

  /** centred reading column — entries keep left-aligned text inside */
  const column: CSSProperties = { maxWidth: 620, margin: "0 auto" };

  const titleRow = (title: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ flex: 1, height: 1, background: accent.line }} />
      <h2
        style={{
          margin: 0,
          fontSize: 12.5,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.8,
          color: accent.dark,
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: accent.line }} />
    </div>
  );

  const renderBody = (key: CvSectionKey) => {
    switch (key) {
      case "summary":
        return (
          <div style={column}>
            <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: TEXT, whiteSpace: "pre-line" }}>
              {clean(data.summary)}
            </p>
          </div>
        );

      case "education":
        return (
          <div style={{ ...column, display: "grid", rowGap: 14 }}>
            {data.education
              .filter((e) => cleanList([e.degree, e.institution, e.group, e.result, e.year]).length > 0)
              .map((e) => {
                const meta = cleanList([e.group, e.result]).join(" · ");
                return (
                  <div
                    key={e.id}
                    style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 18 }}
                  >
                    <div style={{ minWidth: 0 }}>
                      {clean(e.degree) ? (
                        <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{clean(e.degree)}</div>
                      ) : null}
                      {clean(e.institution) ? (
                        <div style={{ fontSize: 12.5, color: MUTED }}>{clean(e.institution)}</div>
                      ) : null}
                      {meta ? <div style={{ fontSize: 12, color: MUTED }}>{meta}</div> : null}
                      {clean(e.details) ? (
                        <div style={{ fontSize: 12, color: MUTED, fontStyle: "italic" }}>{clean(e.details)}</div>
                      ) : null}
                    </div>
                    {clean(e.year) ? (
                      <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>{clean(e.year)}</div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "experience":
        return (
          <div style={{ ...column, display: "grid", rowGap: 16 }}>
            {data.experience
              .filter(
                (x) =>
                  cleanList([x.role, x.org, x.location]).length > 0 || cleanList(x.bullets ?? []).length > 0
              )
              .map((x) => {
                const role = clean(x.role);
                const org = clean(x.org);
                const loc = clean(x.location);
                const bullets = cleanList(x.bullets ?? []);
                const leftSome = role || org || loc;
                return (
                  <div key={x.id}>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 18 }}>
                      <div style={{ minWidth: 0, fontSize: 13, color: TEXT }}>
                        {role ? <span style={{ fontWeight: 700 }}>{role}</span> : null}
                        {org ? (
                          <span style={{ fontStyle: "italic", fontSize: 12.5, color: MUTED }}>
                            {role ? " — " : ""}
                            {org}
                          </span>
                        ) : null}
                        {loc ? (
                          <span style={{ fontSize: 12, color: MUTED }}>{leftSome ? ` · ${loc}` : loc}</span>
                        ) : null}
                      </div>
                      <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>
                        {experienceRange(x, data.lang)}
                      </div>
                    </div>
                    {bullets.length > 0 ? (
                      <div style={{ marginTop: 5, paddingLeft: 14, display: "grid", rowGap: 3 }}>
                        {bullets.map((b, i) => (
                          <div key={i} style={{ fontSize: 12, lineHeight: 1.55, color: TEXT }}>
                            • {b}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "projects":
        return (
          <div style={{ ...column, display: "grid", rowGap: 12 }}>
            {data.projects
              .filter((pr) => cleanList([pr.name, pr.description, pr.link]).length > 0)
              .map((pr) => {
                const pname = clean(pr.name);
                const link = clean(pr.link);
                return (
                  <div key={pr.id}>
                    {pname || link ? (
                      <div style={{ fontSize: 13, color: TEXT }}>
                        {pname ? <span style={{ fontWeight: 700 }}>{pname}</span> : null}
                        {link ? (
                          <span style={{ fontSize: 11.5, color: accent.base }}>{pname ? ` — ${link}` : link}</span>
                        ) : null}
                      </div>
                    ) : null}
                    {clean(pr.description) ? (
                      <div style={{ fontSize: 12, lineHeight: 1.6, color: MUTED }}>{clean(pr.description)}</div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );

      case "skills":
      case "languages": {
        const items: LevelItem[] = key === "skills" ? data.skills : data.languages;
        return (
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {items
              .filter((s) => clean(s.name))
              .map((s) => (
                <span
                  key={s.id}
                  style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    background: accent.soft,
                    color: "#1f2430",
                    fontSize: 11.5,
                    lineHeight: 1.45,
                    whiteSpace: "nowrap",
                  }}
                >
                  {clean(s.name)}
                </span>
              ))}
          </div>
        );
      }

      case "training":
      case "awards": {
        const items: DatedItem[] = key === "training" ? data.training : data.awards;
        return (
          <div style={{ ...column, display: "grid", rowGap: 11 }}>
            {items
              .filter((t) => cleanList([t.name, t.issuer, t.year]).length > 0)
              .map((t) => (
                <div
                  key={t.id}
                  style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 18 }}
                >
                  <div style={{ minWidth: 0, fontSize: 12.5, color: TEXT }}>
                    {clean(t.name) ? <span style={{ fontWeight: 700 }}>{clean(t.name)}</span> : null}
                    {clean(t.issuer) ? (
                      <span style={{ fontSize: 12, color: MUTED }}>
                        {clean(t.name) ? ` — ${clean(t.issuer)}` : clean(t.issuer)}
                      </span>
                    ) : null}
                  </div>
                  {clean(t.year) ? (
                    <div style={{ fontSize: 12, color: MUTED, whiteSpace: "nowrap" }}>{clean(t.year)}</div>
                  ) : null}
                </div>
              ))}
          </div>
        );
      }

      case "hobbies": {
        const hobbies = cleanList(data.hobbies);
        if (!hobbies.length) return null;
        return (
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: TEXT, textAlign: "center" }}>
            {hobbies.join(" · ")}
          </p>
        );
      }

      case "references":
        return (
          <div
            style={{
              maxWidth: 620,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: 28,
              rowGap: 12,
            }}
          >
            {data.references
              .filter((r) => cleanList([r.name, r.org, r.relation, r.phone, r.email]).length > 0)
              .map((r) => {
                const reach = cleanList([r.phone, r.email]).join(" · ");
                return (
                  <div key={r.id}>
                    {clean(r.name) ? (
                      <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{clean(r.name)}</div>
                    ) : null}
                    {clean(r.org) ? <div style={{ fontSize: 12, color: MUTED }}>{clean(r.org)}</div> : null}
                    {clean(r.relation) ? <div style={{ fontSize: 12, color: MUTED }}>{clean(r.relation)}</div> : null}
                    {reach ? <div style={{ fontSize: 12, color: MUTED }}>{reach}</div> : null}
                  </div>
                );
              })}
          </div>
        );

      case "personal":
        return (
          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: 28,
              rowGap: 7,
            }}
          >
            {personalRows(data).map((row, i) => (
              <div key={`${row.label}-${i}`} style={{ fontSize: 12, lineHeight: 1.5, color: TEXT }}>
                <span style={{ fontWeight: 700, fontSize: 11.5, color: accent.dark }}>{row.label}</span>:{" "}
                {row.value}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={pageShellStyle(fontStack)}>
      {hasHeader ? (
        <header style={{ background: accent.soft, padding: 34, textAlign: "center" }}>
          {photo ? (
            <img
              src={p.photo}
              alt=""
              style={{
                display: "block",
                width: 104,
                height: 104,
                objectFit: "cover",
                borderRadius: "50%",
                border: "3px solid #ffffff",
                boxShadow: "0 2px 10px rgba(31, 36, 48, 0.16)",
                margin: "0 auto 14px",
              }}
            />
          ) : null}
          {name ? (
            <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.5, color: accent.dark }}>
              {name}
            </div>
          ) : null}
          {headline ? (
            <div style={{ fontSize: 13, color: accent.base, letterSpacing: 0.4, marginTop: name ? 6 : 0 }}>
              {headline}
            </div>
          ) : null}
          {contact.length > 0 ? (
            <div style={{ fontSize: 11.5, color: "#444444", marginTop: name || headline ? 8 : 0 }}>
              {contact.join(" • ")}
            </div>
          ) : null}
        </header>
      ) : null}

      <div style={{ padding: 40, lineHeight: 1.55 }}>
        {sections.map((key, idx) => (
          <section key={key} style={{ marginTop: idx === 0 ? 0 : 26 }}>
            {titleRow(titles[key])}
            <div style={{ marginTop: 14 }}>{renderBody(key)}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
