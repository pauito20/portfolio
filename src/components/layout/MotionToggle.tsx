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
      {reducedMotion ? (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M5 6h14M5 18h14" strokeLinecap="round" />
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
          <circle cx="12" cy="12" r="3" />
          <path
            d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
