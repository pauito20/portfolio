import type { SectionId } from "@/types/content";

export interface CameraKeyframe {
  /** Posición de la cámara [x, y, z] */
  position: readonly [number, number, number];
  /** Punto al que mira [x, y, z] */
  target: readonly [number, number, number];
}

/** Una parada de cámara por sección. hero = plano general del grafo completo. */
export const CAMERA_KEYFRAMES: Record<SectionId, CameraKeyframe> = {
  hero: { position: [0, 0.4, 9.5], target: [0.2, 0.05, 0] },
  about: { position: [-1.4, 1.1, 5.4], target: [-0.5, 0.1, 0.4] },
  experience: { position: [-3.4, 0.6, 6.2], target: [-1.6, 0, 0] },
  expertise: { position: [0.4, 0.9, 5.2], target: [0.05, 0.1, 0] },
  projects: { position: [3.6, 0.5, 6.4], target: [2.1, 0, 0] },
  contact: { position: [0, 1.6, 10.5], target: [0, 0, 0] },
};
