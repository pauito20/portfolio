import { Reveal } from "./Reveal";
import { GLYPHS } from "./glyphs";

const TINTS = ["text-erp-soft", "text-ai-soft", "text-glow"] as const;

function Tile({ index }: { index: number }) {
  const Glyph = GLYPHS[index % GLYPHS.length];
  const tint = TINTS[index % TINTS.length];
  return (
    <div
      className={`grid h-16 w-16 shrink-0 place-items-center rounded-[1.15rem] border border-border bg-bg-raised/70 backdrop-blur-sm transition hover:border-glow/50 ${tint}`}
    >
      <Glyph className="h-7 w-7" />
    </div>
  );
}

/**
 * Rejilla decorativa estilo "app-launcher" empresarial: glifos genéricos y
 * propios (ver ./glyphs), nunca iconos reales de Microsoft. Dos usos:
 *
 * - `variant="band"`: banda horizontal animada entre secciones, con máscara
 *   de degradado en los bordes.
 * - `variant="ambient"`: rejilla estática muy tenue como fondo de sección.
 */
export function TileGrid({
  variant = "band",
  count = 8,
}: {
  variant?: "band" | "ambient";
  count?: number;
}) {
  const tiles = Array.from({ length: count }, (_, i) => i);

  if (variant === "ambient") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex flex-wrap items-center justify-center gap-6 overflow-hidden opacity-[0.06]"
        style={{
          maskImage:
            "radial-gradient(60% 60% at 50% 50%, black, transparent)",
        }}
      >
        {tiles.map((i) => (
          <Tile key={i} index={i} />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="overflow-hidden py-6 opacity-40"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <Reveal
        stagger={0.06}
        distance={12}
        amount={0.4}
        className="flex justify-center gap-5"
      >
        {tiles.map((i) => (
          <Reveal.Item key={i}>
            <Tile index={i} />
          </Reveal.Item>
        ))}
      </Reveal>
    </div>
  );
}
