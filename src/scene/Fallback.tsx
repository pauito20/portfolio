/**
 * Fallback estático. Se muestra únicamente cuando: no hay WebGL2, o el
 * usuario prefiere movimiento reducido (preferencia del sistema o toggle
 * manual) — nunca por tener un tier de dispositivo bajo. En móvil de gama
 * baja el Canvas 3D real sigue montándose, solo con menos nodos y sin
 * pulsos/bloom (ver `GraphRoot.tsx`/`Effects.tsx`). Sin animación, sin
 * coste — un halo CSS que sugiere el grafo sin serlo.
 */
export function Fallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(60% 45% at 30% 45%, color-mix(in srgb, #0078d4 28%, transparent), transparent 70%), " +
          "radial-gradient(55% 45% at 72% 55%, color-mix(in srgb, #7b61ff 28%, transparent), transparent 70%), " +
          "radial-gradient(80% 60% at 50% 100%, color-mix(in srgb, #22d3ee 12%, transparent), transparent 70%)",
      }}
    />
  );
}
