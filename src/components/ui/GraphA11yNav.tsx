import { laidOutNodes } from "@/data/graphLayout";
import { useLocale } from "@/i18n/useLocale";
import { useSceneStore } from "@/store/useSceneStore";
import { activateNode } from "@/scene/activateNode";

/**
 * Gemelo accesible del grafo 3D: cada nodo es también un <button> real,
 * navegable por teclado y por lector de pantalla. Dispara exactamente
 * la misma acción (glow + scroll a sección) que el click sobre el nodo 3D.
 */
export function GraphA11yNav() {
  const { t, tl } = useLocale();
  const setHoveredNodeId = useSceneStore((s) => s.setHoveredNodeId);

  return (
    <nav
      aria-label={t("a11y.graphNav")}
      className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 px-6"
    >
      {laidOutNodes.map((node) => (
        <button
          key={node.id}
          type="button"
          onFocus={() => setHoveredNodeId(node.id)}
          onBlur={() => setHoveredNodeId(null)}
          onMouseEnter={() => setHoveredNodeId(node.id)}
          onMouseLeave={() => setHoveredNodeId(null)}
          onClick={() => activateNode(node.id, node.sectionId)}
          aria-describedby={`node-blurb-${node.id}`}
          className="rounded-full border border-border bg-bg-raised/60 px-3 py-1.5 text-xs text-ink-dim transition hover:border-glow hover:text-ink focus-visible:border-glow focus-visible:text-ink"
        >
          {tl(node.label)}
          <span id={`node-blurb-${node.id}`} className="sr-only">
            {tl(node.blurb)}
          </span>
        </button>
      ))}
    </nav>
  );
}
