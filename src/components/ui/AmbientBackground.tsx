const DOT_GRID =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='1.4' cy='1.4' r='1.4' fill='%239aa5b1'/%3E%3C/svg%3E";

/**
 * Fondo ambiente global, montado una sola vez detrás de toda la app. Se sitúa
 * detrás del `<Canvas>` 3D del hero (que es transparente donde no hay
 * geometría — `gl.setClearAlpha(0)` en SceneCanvas.tsx), así que se ve tanto
 * alrededor del grafo como en el resto de la página larga. Cero coste de
 * render — son gradientes y un patrón CSS, no hay animación.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-20 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${DOT_GRID}")`,
          backgroundSize: "28px 28px",
          opacity: 0.05,
          maskImage:
            "radial-gradient(80% 60% at 50% 20%, black, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 15% 15%, color-mix(in srgb, #0078d4 16%, transparent), transparent 70%), " +
            "radial-gradient(45% 40% at 85% 30%, color-mix(in srgb, #7b61ff 14%, transparent), transparent 70%), " +
            "radial-gradient(60% 45% at 50% 95%, color-mix(in srgb, #22d3ee 10%, transparent), transparent 70%)",
        }}
      />
    </div>
  );
}
