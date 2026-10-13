"use client";

import { create } from "zustand";
import { useEffect } from "react";

export interface UserConfig {
  deviceId: string;
  hasKey: boolean;
  keyPreview: string | null;
  displayName: string;
  level: "beginner" | "intermediate" | "advanced";
  loaded: boolean;
}

interface DeviceStore extends UserConfig {
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
  displayName: "শিক্ষার্থী",
  level: "beginner",
  loaded: false,
  setConfig: (partial) => set(partial),
  refresh: async () => {
    const deviceId = get().deviceId || getDeviceId();
    if (!deviceId) return;
    set({ deviceId });
    try {
      const res = await fetch(`/api/config?deviceId=${encodeURIComponent(deviceId)}`);
      const json = await res.json();
      if (json.ok) {
        set({
          hasKey: json.data.hasKey,
          keyPreview: json.data.keyPreview,
          displayName: json.data.displayName,
          level: json.data.level,
          loaded: true,
        });
      }
    } catch {
      set({ loaded: true });
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
