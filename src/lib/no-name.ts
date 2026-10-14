// Shared "this user hasn't set a name" protocol (client-safe, no React).
//
// HISTORY: the DB used to store the Bengali word for "student" as the
// empty-name marker, so an English/Hindi user without a name saw Bengali
// text in the account menu. New rows store "" instead (schema default),
// and every display surface localizes its own fallback via
// displayNameOr(). isNoName() also recognises the legacy marker so old
// database rows keep rendering correctly.

export const NO_NAME_LEGACY = "শিক্ষার্থী";

export function isNoName(name: string | null | undefined): boolean {
  const s = (name ?? "").trim();
  return s === "" || s === NO_NAME_LEGACY;
}

/** Return the stored name, or the caller's localized fallback ("Student"/"শিক্ষার্থী"/"छात्र"). */
export function displayNameOr(name: string | null | undefined, fallback: string): string {
  return isNoName(name) ? fallback : (name as string).trim().slice(0, 40);
}
