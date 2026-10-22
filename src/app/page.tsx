import { getSessionUser } from "@/lib/auth";
import AppShell from "@/components/layout/AppShell";
import LoginGate from "@/components/auth/LoginGate";

// LOGIN-FIRST (Task 27-c): a visitor without a session only ever sees the
// LoginGate; the app itself renders for signed-in accounts. The account's
// native language (chosen at signup) drives the locale via the bolo_locale
// cookie, so this RSC render is already in the right language.
export default async function Home() {
  const user = await getSessionUser();
  return user ? <AppShell /> : <LoginGate />;
}
