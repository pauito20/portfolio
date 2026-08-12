import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useLocale } from "@/i18n/useLocale";

export function About({
  registerRef,
}: {
  registerRef: (el: Element | null) => void;
}) {
  const { t } = useLocale();

  const facts = [
    t("about.facts.years"),
    t("about.facts.extensions"),
    t("about.facts.orgs"),
    t("about.facts.cert"),
  ];

  return (
    <Section id="about" registerRef={registerRef} ariaLabel={t("about.title")}>
      <Reveal>
        <h2 className="text-headline font-semibold tracking-tight text-ink">
          {t("about.title")}
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-ink-dim">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-xl border border-border/60 bg-bg-raised/40 p-6 backdrop-blur-md">
          <h3 className="text-eyebrow font-semibold tracking-widest text-ink-dim uppercase">
            {t("about.factsTitle")}
          </h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-2.5 text-sm text-ink"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow"
                />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
