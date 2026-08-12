import { Environment, Lightformer } from "@react-three/drei";
import { useSceneStore } from "@/store/useSceneStore";

export function Lights() {
  const tier = useSceneStore((s) => s.tier);

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 6]} intensity={1.0} color="#dbe8ff" />
      <directionalLight
        position={[-5, -2, -4]}
        intensity={0.35}
        color="#14b8a6"
      />

      {/* Entorno procedural (sin HDR externo, cero peticiones de red): es lo
          que da a las esferas lisas algo que reflejar y devuelve el aire
          "brillante/fluido" que perdíamos al dejar atrás los poliedros
          facetados. `frames={1}` es crítico — sin él, drei re-renderiza el
          cubemap cada frame. */}
      {tier !== "low" && (
        <Environment resolution={64} frames={1}>
          <Lightformer
            form="rect"
            intensity={2.2}
            color="#dbe8ff"
            position={[0, 4, -6]}
            scale={[10, 4, 1]}
          />
          <Lightformer
            form="rect"
            intensity={1.4}
            color="#0078d4"
            position={[-6, 0, 2]}
            scale={[6, 6, 1]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <Lightformer
            form="rect"
            intensity={1.1}
            color="#14b8a6"
            position={[6, -1, 2]}
            scale={[6, 6, 1]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </Environment>
      )}
    </>
  );
}
