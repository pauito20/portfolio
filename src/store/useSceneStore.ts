import { create } from "zustand";
import type { SectionId } from "@/types/content";

export type DeviceTier = "low" | "mid" | "high";

interface SceneState {
  activeSection: SectionId;
  hoveredNodeId: string | null;
  focusedNodeId: string | null;
  tier: DeviceTier;
  reducedMotion: boolean;
  canvasVisible: boolean;

  setActiveSection: (id: SectionId) => void;
  setHoveredNodeId: (id: string | null) => void;
  setFocusedNodeId: (id: string | null) => void;
  setTier: (tier: DeviceTier) => void;
  setReducedMotion: (value: boolean) => void;
  setCanvasVisible: (value: boolean) => void;
}

export const useSceneStore = create<SceneState>((set, get) => ({
  activeSection: "hero",
  hoveredNodeId: null,
  focusedNodeId: null,
  tier: "high",
  reducedMotion: false,
  canvasVisible: true,

  setActiveSection: (id) => {
    if (get().activeSection === id) return;
    set({ activeSection: id });
  },
  setHoveredNodeId: (id) => {
    if (get().hoveredNodeId === id) return;
    set({ hoveredNodeId: id });
  },
  setFocusedNodeId: (id) => set({ focusedNodeId: id }),
  setTier: (tier) => {
    if (get().tier === tier) return;
    set({ tier });
  },
  setReducedMotion: (value) => set({ reducedMotion: value }),
  setCanvasVisible: (value) => set({ canvasVisible: value }),
}));
