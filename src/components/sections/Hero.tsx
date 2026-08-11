import { Suspense, lazy } from "react";
import { useLocale } from "@/i18n/useLocale";
import { GraphA11yNav } from "@/components/ui/GraphA11yNav";
import { NodeTooltip } from "@/components/ui/NodeTooltip";
import type { RefObject } from "react";

const SceneCanvas = lazy(() =>
  import("@/scene/SceneCanvas").then((m) => ({ default: m.SceneCanvas })),
);

export function Hero({
  registerRef,
  tooltipRef,
}: {
  registerRef: (el: Element | null) => void;
  tooltipRef: RefObject<HTMLDivElement | null>;
}) {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      ref={registerRef}
      className="relative flex min-h-screen flex-col justify-center"
    >
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={null}>
          <SceneCanvas tooltipRef={tooltipRef} />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-b from-bg/10 via-bg/40 to-bg" />

      <div className="relative mx-auto w-full max-w-3xl px-6 py-32 text-center sm:px-8">
        <p className="text-sm font-medium tracking-wide text-glow uppercase">
          {t("hero.kicker")}
        </p>
        <h1 className="mt-4 text-4xl font-bold text-balance text-ink sm:text-6xl">
          {t("hero.name")}
        </h1>
        <p className="mt-3 text-xl font-medium text-ink sm:text-2xl">
          {t("hero.role")}
        </p>
        <p className="text-ink-dim">{t("hero.subrole")}</p>
        <p className="mt-6 text-balance text-ink-dim">{t("hero.pitch")}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-ai px-5 py-2.5 text-sm font-medium text-white transition hover:bg-ai-soft"
          >
            {t("hero.ctaProjects")}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition hover:border-glow"
          >
            {t("hero.ctaContact")}
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv-pau-gargallo.pdf`}
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink-dim transition hover:border-glow hover:text-ink"
          >
            {t("hero.ctaCv")}
          </a>
        </div>
      </div>

      <div className="relative mt-4 pb-12">
        <p className="mb-3 text-center text-xs text-ink-dim">
          {t("hero.graphHint")}
        </p>
        <GraphA11yNav />
      </div>

      <NodeTooltip ref={tooltipRef} />
    </section>
  );
}
