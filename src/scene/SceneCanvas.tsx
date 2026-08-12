import { useEffect, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  PerformanceMonitor,
} from "@react-three/drei";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
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
  const reducedMotion = useSceneStore((s) => s.reducedMotion);
  const tier = useSceneStore((s) => s.tier);
  const setTier = useSceneStore((s) => s.setTier);

  // El tier heurístico del dispositivo se calcula una sola vez al montar.
  // A partir de aquí, PerformanceMonitor tiene la última palabra (solo puede bajarlo).
  useEffect(() => {
    setTier(detectInitialTier());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Importante: el tier NUNCA decide este fallback, y tampoco la preferencia
  // `prefers-reduced-motion` del sistema (decisión explícita: el grafo 3D va
  // animado por defecto en cualquier dispositivo). En móvil (tier "low") el
  // Canvas 3D se sigue montando siempre — solo se reduce el nº de nodos y se
  // desactivan pulsos/bloom (ver GraphRoot.tsx / Effects.tsx). El fallback
  // estático es exclusivamente para: sin WebGL2, o el toggle manual (MotionToggle).
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
