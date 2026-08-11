import type { SVGProps } from "react";

/**
 * Glifos de línea 100% originales — primitivas universales (documento,
 * gráfico, engranaje...), trazo propio, sin relación con ningún icono real
 * de Microsoft/Business Central. Pensados para tiles de 24×24 con
 * `stroke="currentColor"`, así heredan el color del contenedor.
 */

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export const GlyphLedger = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 3.5h8.5L18 7v13.5H6z" />
    <path d="M14 3.5V7h4" />
    <path d="M9 12h6M9 15.5h4" />
  </svg>
);

export const GlyphChart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 20V10M9.5 20V6M15 20v-8M20 20V3" />
    <path d="M3 20h18" strokeLinecap="butt" />
  </svg>
);

export const GlyphGear = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3.5v2.6M12 17.9v2.6M20.5 12h-2.6M6.1 12H3.5M17.9 6.1l-1.8 1.8M7.9 16.1l-1.8 1.8M17.9 17.9l-1.8-1.8M7.9 7.9 6.1 6.1" />
  </svg>
);

export const GlyphInventory = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z" />
    <path d="M4 8.5V16l8 4.5 8-4.5V8.5" />
    <path d="M12 13v7.5" />
  </svg>
);

export const GlyphConnector = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M9 3.5v5M15 3.5v5" />
    <path d="M6.5 8.5h11V12A5.5 5.5 0 0 1 12 17.5 5.5 5.5 0 0 1 6.5 12z" />
    <path d="M12 17.5v3" />
  </svg>
);

export const GlyphShield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 19 6v6c0 5-3.5 7.5-7 8.5-3.5-1-7-3.5-7-8.5V6z" />
    <path d="m9 12 2.1 2.1L15.5 9.5" />
  </svg>
);

export const GlyphMigration = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4.5 9A7.5 7.5 0 0 1 18.8 6.3M19.5 15a7.5 7.5 0 0 1-14.3 2.7" />
    <path d="M18.5 3.5v3.3h-3.3M5.5 20.5v-3.3h3.3" />
  </svg>
);

export const GlyphAINode = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 9.4V5M14.3 13.3l3.8 2.2M9.7 13.3l-3.8 2.2" />
    <circle cx="12" cy="4" r="1.4" />
    <circle cx="19" cy="17" r="1.4" />
    <circle cx="5" cy="17" r="1.4" />
  </svg>
);

export const GLYPHS = [
  GlyphLedger,
  GlyphChart,
  GlyphGear,
  GlyphInventory,
  GlyphConnector,
  GlyphShield,
  GlyphMigration,
  GlyphAINode,
] as const;
