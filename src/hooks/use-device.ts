"use client";

import { create } from "zustand";
import { useEffect } from "react";

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

// Mount this once in the app shell
export function useDeviceInit() {
  const deviceId = useDevice((s) => s.deviceId);
  const loaded = useDevice((s) => s.loaded);
  useEffect(() => {
    useDevice.getState().refresh();
  }, []);
  return { deviceId, loaded };
}
