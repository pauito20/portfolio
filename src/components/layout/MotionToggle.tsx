import { useSceneStore } from "@/store/useSceneStore";
import { useLocale } from "@/i18n/useLocale";

export function MotionToggle() {
  const reducedMotion = useSceneStore((s) => s.reducedMotion);
  const setReducedMotion = useSceneStore((s) => s.setReducedMotion);
  const { t } = useLocale();

  return (
    <button
      type="button"
      onClick={() => setReducedMotion(!reducedMotion)}
      aria-pressed={reducedMotion}
      aria-label={t("a11y.motionToggle")}
      title={t("a11y.motionToggle")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-dim transition hover:border-glow hover:text-ink"
    >
      {/* Deliberadamente NO un icono de sol/luna (se confunde con un toggle de
          tema claro/oscuro). Barras "en movimiento" vs "planas": mismo par de
          formas, solo cambia si hay actividad — lectura inequívoca de animación. */}
      {reducedMotion ? (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 15h.01M12 15h.01M18 15h.01" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 17v-7M12 17V6M18 17v-4" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
