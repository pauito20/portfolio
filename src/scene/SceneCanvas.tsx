import { useEffect, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  PerformanceMonitor,
} from "@react-three/drei";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { detectInitialTier } from "@/hooks/useDeviceTier";
import { useSceneStore } from "@/store/useSceneStore";
import { Hero3D } from "./Hero3D";
import { Fallback } from "./Fallback";

export function SceneCanvas({
  tooltipRef,
}: {
  tooltipRef: RefObject<HTMLDivElement | null>;
}) {
  const webglSupported = useWebGLSupport();
  const systemReducedMotion = usePrefersReducedMotion();
  const reducedMotion = useSceneStore((s) => s.reducedMotion);
  const tier = useSceneStore((s) => s.tier);
  const setReducedMotion = useSceneStore((s) => s.setReducedMotion);
  const setTier = useSceneStore((s) => s.setTier);

  // Semilla única al montar: preferencia del sistema y tier heurístico del dispositivo.
  // A partir de aquí, el toggle manual (MotionToggle) y PerformanceMonitor tienen la última palabra.
  useEffect(() => {
    setReducedMotion(systemReducedMotion);
    setTier(detectInitialTier());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!webglSupported || reducedMotion) {
    return <Fallback />;
  }

  return (
    <Canvas
      dpr={[1, tier === "high" ? 2 : 1.5]}
      frameloop="always"
      gl={{
        antialias: tier !== "high",
        powerPreference: "high-performance",
        alpha: true,
        stencil: false,
      }}
      camera={{ fov: 45, position: [0, 0.4, 9.5], near: 0.1, far: 60 }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
    >
      <AdaptiveDpr pixelated={false} />
      <AdaptiveEvents />
      <PerformanceMonitor onDecline={() => setTier("low")} />
      <Hero3D tooltipRef={tooltipRef} />
    </Canvas>
  );
}
