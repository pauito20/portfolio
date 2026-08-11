import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useSceneStore } from "@/store/useSceneStore";

/** Postproceso solo en tier "high" — cada pase adicional es un coste fijo por frame. */
export function Effects() {
  const tier = useSceneStore((s) => s.tier);
  if (tier !== "high") return null;

  return (
    // multisampling=4: con esferas lisas el aliasing del contorno curvo se
    // nota mucho más que en los poliedros facetados de antes.
    <EffectComposer multisampling={4}>
      <Bloom
        mipmapBlur
        intensity={0.7}
        luminanceThreshold={0.25}
        luminanceSmoothing={0.2}
      />
      <Vignette eskil={false} offset={0.15} darkness={0.6} />
    </EffectComposer>
  );
}
