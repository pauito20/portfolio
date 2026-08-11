import { useEffect, useRef } from "react";
import { CameraControls } from "@react-three/drei";
import { CAMERA_KEYFRAMES } from "@/data/cameraKeyframes";
import { useSceneStore } from "@/store/useSceneStore";

/**
 * Único escritor de la posición de cámara. Reacciona a cambios de `activeSection`
 * (fuente de verdad: el scroll, vía IntersectionObserver) en un efecto — nunca en
 * useFrame — para que scroll, click y órbita manual no compitan por la cámara.
 */
export function CameraRig() {
  const controlsRef = useRef<CameraControls>(null);
  const activeSection = useSceneStore((s) => s.activeSection);
  const reducedMotion = useSceneStore((s) => s.reducedMotion);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    const keyframe = CAMERA_KEYFRAMES[activeSection];
    controls.smoothTime = reducedMotion ? 0 : 0.9;
    controls
      .normalizeRotations()
      .setLookAt(...keyframe.position, ...keyframe.target, !reducedMotion);
  }, [activeSection, reducedMotion]);

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      enabled={activeSection === "hero"}
      minDistance={4}
      maxDistance={14}
      minPolarAngle={0.5}
      maxPolarAngle={2.5}
      dollySpeed={0.4}
      truckSpeed={0}
    />
  );
}
