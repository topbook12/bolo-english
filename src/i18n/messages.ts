import fs from "fs";
import path from "path";
import type { Locale } from "./config";

// Messages are split into small files so parallel feature work never
// collides:  messages/core.<locale>.json  +  messages/sections/<ns>.<locale>.json
// They are deep-merged here (core first, sections override if ever needed).

type Messages = Record<string, unknown>;

function isObject(v: unknown): v is Messages {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function deepMerge(base: Messages, override: Messages): Messages {
  const out: Messages = { ...base };
  for (const [key, value] of Object.entries(override)) {
    const prev = out[key];
    out[key] = isObject(value) && isObject(prev) ? deepMerge(prev, value) : value;
  }
  return out;
}

function loadJson(file: string): Messages {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as Messages;
  } catch {
    return {};
  }
}

export function loadMessages(locale: Locale): Messages {
  const dir = path.join(process.cwd(), "messages");
  let merged: Messages = loadJson(path.join(dir, `core.${locale}.json`));

  const sectionsDir = path.join(dir, "sections");
  try {
    const files = fs
      .readdirSync(sectionsDir)
      .filter((f) => f.endsWith(`.${locale}.json`))
      .sort();
    for (const f of files) {
      merged = deepMerge(merged, loadJson(path.join(sectionsDir, f)));
    }
  } catch {
    // no section files yet
  }

  // Fallback: fill missing keys from default locale (bn) so nothing renders blank
  if (locale !== "bn") {
    const fallback = loadMessagesBn(dir);
    merged = deepMerge(fallback, merged);
  }
  return merged;
}

function loadMessagesBn(dir: string): Messages {
  let merged: Messages = loadJson(path.join(dir, "core.bn.json"));
  const sectionsDir = path.join(dir, "sections");
  try {
    const files = fs
      .readdirSync(sectionsDir)
      .filter((f) => f.endsWith(".bn.json"))
      .sort();
    for (const f of files) merged = deepMerge(merged, loadJson(path.join(sectionsDir, f)));
  } catch {
    /* ignore */
  }
  return merged;
}
