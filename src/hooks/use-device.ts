"use client";

import { create } from "zustand";
import { useEffect, useSyncExternalStore } from "react";

export interface UserConfig {
  deviceId: string;
  hasKey: boolean;
  keyPreview: string | null;
  displayName: string | null; // null → client shows localized "Student"
  level: "beginner" | "intermediate" | "advanced";
  loaded: boolean;
}

interface DeviceStore extends UserConfig {
  // Set when /api/config couldn't reach the server database (bad deploy,
  // missing Turso env vars, offline). Surfaced in Settings so a failed save
  // is never a silent mystery again.
  storageError: string | null;
  setConfig: (partial: Partial<UserConfig>) => void;
  refresh: () => Promise<void>;
}

function getDeviceId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("bolo_device_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("bolo_device_id", id);
  }
  return id;
}

export const useDevice = create<DeviceStore>((set, get) => ({
  deviceId: "",
  hasKey: false,
  keyPreview: null,
  displayName: null,
  level: "beginner",
  loaded: false,
  storageError: null,
  setConfig: (partial) => set(partial),
  refresh: async () => {
    const deviceId = get().deviceId || getDeviceId();
    if (!deviceId) return;
    set({ deviceId });
    try {
      const res = await fetch(`/api/config?deviceId=${encodeURIComponent(deviceId)}`);
      const json = await res.json().catch(() => null);
      if (json?.ok && json.data) {
        set({
          hasKey: json.data.hasKey,
          keyPreview: json.data.keyPreview,
          displayName: json.data.displayName,
          level: json.data.level,
          storageError: null,
          loaded: true,
        });
      } else {
        set({
          storageError:
            json?.error ??
            "সার্ভার অপ্রত্যাশিত উত্তর দিয়েছে — পেজ রিফ্রেশ করে আবার চেষ্টা করুন।",
          loaded: true,
        });
      }
    } catch {
      set({
        storageError:
          "সার্ভারের সাথে সংযোগ করা যাচ্ছে না — ইন্টারনেট সংযোগ চেক করে পেজ রিফ্রেশ করুন।",
        loaded: true,
      });
    }
  },
}));

/**
 * Hydration-safe store read.
 *
 * `useDevice(selector)` reads the LIVE store during hydration. If the store
 * changed between the moment Next.js generated the SSR HTML and the moment
 * the browser hydrates (Fast Refresh keeping module state alive, a racing
 * fetch, a stale cached chunk), the first client render differs from the
 * server HTML and React reports a hydration mismatch — which then shifts
 * every Radix useId() after the changed node (the "radix-_R_..." id /
 * aria-controls console errors).
 *
 * This hook hands React an explicit SERVER snapshot used during hydration,
 * guaranteeing the hydration render matches the SSR HTML byte-for-byte.
 * Right after hydration React re-checks the live snapshot and re-renders
 * with real values, so behavior is unchanged (values arrive a tick later).
 *
 * Use only for values that influence RENDERED OUTPUT during hydration;
 * selectors must return primitives or referentially stable objects.
 */
export function useDeviceValue<T>(selector: (s: DeviceStore) => T, serverValue: T): T {
  return useSyncExternalStore(
    useDevice.subscribe,
    () => selector(useDevice.getState()),
    () => serverValue
  );
}

// Mount this once in the app shell: fetches the device/account config.
// Pure side effect — does not subscribe; components render store values via
// the hydration-safe useDeviceValue instead.
export function useDeviceInit() {
  useEffect(() => {
    useDevice.getState().refresh();
  }, []);
}
