// i18n key parity + JSON validity + placeholder integrity check
// Usage: bun /home/z/my-project/scripts/i18n-check.mjs
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = "/home/z/my-project/messages";
let errors = 0;

function flat(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") Object.assign(out, flat(v, key));
    else out[key] = String(v);
  }
  return out;
}

function simpleTokens(s) {
  return (s.match(/\{\s*\w+\s*\}/g) || []).sort().join(",");
}

function icuBalanced(s) {
  let depth = 0;
  for (const ch of s) {
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
}

const files = readdirSync(join(root, "sections")).filter((f) => f.endsWith(".json"));
const namespaces = [...new Set(files.map((f) => f.split(".")[0]))].sort();
const locales = ["bn", "en", "hi"];

for (const ns of [...namespaces, "CORE"]) {
  const data = {};
  for (const loc of locales) {
    const p = ns === "CORE" ? join(root, `core.${loc}.json`) : join(root, "sections", `${ns}.${loc}.json`);
    try {
      data[loc] = flat(JSON.parse(readFileSync(p, "utf8")));
    } catch (e) {
      console.error(`FAIL ${ns}.${loc}: INVALID JSON - ${e.message}`);
      errors++;
      data[loc] = null;
    }
  }
  if (!data.bn || !data.en || !data.hi) continue;
  const keysBn = Object.keys(data.bn).sort();
  for (const loc of ["en", "hi"]) {
    const keys = Object.keys(data[loc]).sort();
    const missing = keysBn.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !keysBn.includes(k));
    if (missing.length || extra.length) {
      console.error(`FAIL ${ns}.${loc} key parity: missing=${missing.slice(0, 5)} extra=${extra.slice(0, 5)}`);
      errors++;
    }
  }
  for (const key of keysBn) {
    const enVal = data.en[key] ?? "";
    // brace balance for ICU syntax (catches agent-edit damage)
    for (const loc of ["bn", "en", "hi"]) {
      if (data[loc][key] !== undefined && !icuBalanced(data[loc][key])) {
        console.error(`FAIL ${ns}.${loc}.${key}: unbalanced braces in [${data[loc][key].slice(0, 60)}]`);
        errors++;
      }
    }
    // ICU plural/select blocks legitimately differ across locales (# vs {n} etc.)
    if (enVal.includes(", plural,") || enVal.includes(", select,") || enVal.includes(", selectordinal,")) continue;
    const ref = simpleTokens(enVal);
    for (const loc of ["bn", "hi"]) {
      if (data[loc][key] === undefined) continue;
      const got = simpleTokens(data[loc][key]);
      if (ref !== got) {
        console.error(`FAIL ${ns}.${loc}.${key}: placeholders en=[${ref}] ${loc}=[${got}]`);
        errors++;
      }
    }
  }
}
console.log(errors === 0 ? "ALL-PARITY-OK" : `${errors} errors`);
process.exit(errors === 0 ? 0 : 1);
