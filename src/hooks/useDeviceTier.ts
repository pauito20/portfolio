import type { DeviceTier } from "@/store/useSceneStore";

interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number;
}

/** Heurística de arranque; PerformanceMonitor en la escena puede degradarla en caliente. */
export function detectInitialTier(): DeviceTier {
  if (typeof navigator === "undefined") return "high";

  const nav = navigator as NavigatorWithMemory;
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 8;
  const isNarrow = typeof window !== "undefined" && window.innerWidth < 768;
  const isCoarsePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  if ((isNarrow && isCoarsePointer) || cores <= 2 || memory <= 2) return "low";
  if (cores <= 4 || memory <= 4 || isCoarsePointer) return "mid";
  return "high";
}
