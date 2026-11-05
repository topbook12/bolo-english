"use client";

// Light/dark theme support (platform polish pass): next-themes with the
// class strategy matches globals.css `@custom-variant dark (&:is(.dark *))"
// and the complete `.dark { … }` palette already shipped there. System
// preference is honoured by default; the learner can override in
// Settings → চেহারা or from the account menu.
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
