import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/ui/Timeline";
import { experience } from "@/data/experience";
import { useLocale } from "@/i18n/useLocale";

export function Experience({
  registerRef,
}: {
  registerRef: (el: Element | null) => void;
}) {
  const { t } = useLocale();

  return (
    <Section
      id="experience"
      registerRef={registerRef}
      ariaLabel={t("experience.title")}
    >
      <Reveal>
        <h2 className="text-headline font-semibold tracking-tight text-ink">
          {t("experience.title")}
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <Timeline items={experience} />
      </Reveal>
    </Section>
  );
}
