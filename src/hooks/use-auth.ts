"use client";

import { create } from "zustand";
import { useEffect, useSyncExternalStore } from "react";
import { useDevice } from "./use-device";
import { clientMsg } from "@/lib/api-i18n";

// Client auth state, mirrors the frozen /api/auth/* contracts:
//   register {deviceId, email, password, name?} → {user}
//   login    {deviceId, email, password}        → {user}
//   logout   → clears httpOnly cookie
//   me       → {user | null}
// Server errors arrive already localized to the user's UI language (the
// API reads the locale cookie) — thrown as-is for the UI to display.

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

interface AuthStore {
  user: AuthUser | null;
  loaded: boolean;
  busy: boolean; // logout in flight
  refresh: () => Promise<void>;
  login: (email: string, password: string) => Promise<AuthUser>;
  register: (email: string, password: string, name?: string) => Promise<AuthUser>;
  logout: () => Promise<void>;
}

async function authRequest(
  path: string,
  body: Record<string, unknown>
): Promise<{ user: AuthUser }> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.ok) {
    throw new Error(json?.error || clientMsg("serverProblem", { status: res.status }));
  }
  return json.data as { user: AuthUser };
}

/** deviceId must exist before login/register — ensure it via the device store */
async function ensureDeviceId(): Promise<string> {
  if (!useDevice.getState().deviceId) {
    await useDevice.getState().refresh();
  }
  return useDevice.getState().deviceId;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  loaded: false,
  busy: false,

  refresh: async () => {
    try {
      const res = await fetch("/api/auth/me");
      const json = await res.json();
      set({ user: json?.data?.user ?? null, loaded: true });
    } catch {
      set({ user: null, loaded: true });
    }
  },

  login: async (email, password) => {
    const deviceId = await ensureDeviceId();
    const data = await authRequest("/api/auth/login", { deviceId, email, password });
    set({ user: data.user, loaded: true });
    useDevice.getState().refresh(); // account data re-pointed to this device
    return data.user;
  },

  register: async (email, password, name) => {
    const deviceId = await ensureDeviceId();
    const data = await authRequest("/api/auth/register", {
      deviceId,
      email,
      password,
      ...(name ? { name } : {}),
    });
    set({ user: data.user, loaded: true });
    useDevice.getState().refresh();
    return data.user;
  },

  logout: async () => {
    set({ busy: true });
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      set({ user: null });
      useDevice.getState().refresh();
    } finally {
      set({ busy: false });
    }
  },
}));

/**
 * Hydration-safe auth read — see useDeviceValue in use-device.ts.
 * During hydration this returns `serverValue` (e.g. `null` for `user`), so
 * the first client render always matches the SSR HTML even if the auth
 * store already holds live state (Fast Refresh retention, racing /me fetch).
 */
export function useAuthValue<T>(selector: (s: AuthStore) => T, serverValue: T): T {
  return useSyncExternalStore(
    useAuth.subscribe,
    () => selector(useAuth.getState()),
    () => serverValue
  );
}

let authInitStarted = false;

// No-op-safe init: call from any auth-aware component mount; the actual
// /api/auth/me fetch happens at most once per page load.
export function useAuthInit() {
  useEffect(() => {
    if (authInitStarted) return;
    authInitStarted = true;
    useAuth.getState().refresh();
  }, []);
}
