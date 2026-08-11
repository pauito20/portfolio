import { forwardRef } from "react";
import { useSceneStore } from "@/store/useSceneStore";
import { laidOutNodes } from "@/data/graphLayout";
import { useLocale } from "@/i18n/useLocale";

/**
 * Tooltip en DOM normal (no `<Html>` de drei): estilable con Tailwind, `aria-live`,
 * y su posición la escribe directamente `TooltipProjector` (dentro del Canvas) sobre
 * este mismo elemento vía ref — sin pasar por el ciclo de render de React cada frame.
 */
export const NodeTooltip = forwardRef<HTMLDivElement>((_, ref) => {
  const hoveredNodeId = useSceneStore((s) => s.hoveredNodeId);
  const { tl } = useLocale();
  const node = hoveredNodeId
    ? laidOutNodes.find((n) => n.id === hoveredNodeId)
    : null;

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed top-0 left-0 z-30 max-w-64 rounded-lg border border-border bg-bg-raised/95 px-3 py-2 text-sm shadow-lg transition-opacity duration-150 will-change-transform"
      style={{ opacity: node ? 1 : 0 }}
    >
      {node && (
        <>
          <p className="font-medium text-ink">{tl(node.label)}</p>
          <p className="mt-0.5 text-xs text-ink-dim">{tl(node.blurb)}</p>
        </>
      )}
    </div>
  );
});
NodeTooltip.displayName = "NodeTooltip";
