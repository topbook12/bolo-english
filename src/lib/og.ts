// D48 share-cards — OG image URL helper.
//
// Every social-preview image is rendered by /api/og (Satori → PNG, 1200×630).
// This helper builds the absolute, param-encoded URL so metadata and the
// in-app share flows stay consistent. All params are length-capped on the
// route side too — here we only trim what metadata actually sends.

import { SITE_URL } from "./site";

export type OgKind = "home" | "learn" | "guide" | "streak";

export interface OgImageOptions {
  /** Card headline (Bengali or mixed — rendered with Noto Sans Bengali). */
  title?: string;
  /** One-line supporting text under the title. */
  sub?: string;
  /** streak kind: learner display name (optional). */
  name?: string;
  /** streak kind: current streak in days. */
  streak?: number;
}

/** Absolute URL of the OG image for a kind, with capped query params. */
export function ogImageUrl(kind: OgKind, opts: OgImageOptions = {}): string {
  const p = new URLSearchParams({ kind });
  if (opts.title) p.set("title", opts.title.slice(0, 110));
  if (opts.sub) p.set("sub", opts.sub.slice(0, 150));
  if (opts.name) p.set("name", opts.name.slice(0, 40));
  if (opts.streak && opts.streak > 0) p.set("streak", String(Math.min(opts.streak, 9999)));
  return `${SITE_URL}/api/og?${p.toString()}`;
}
