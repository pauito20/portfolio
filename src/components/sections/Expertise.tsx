import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { skillGroups } from "@/data/skills";
import { certifications, education } from "@/data/experience";
import { useLocale } from "@/i18n/useLocale";

export function Expertise({
  registerRef,
}: {
  registerRef: (el: Element | null) => void;
}) {
  const { t, tl } = useLocale();

  return (
    <Section
      id="expertise"
      registerRef={registerRef}
      ariaLabel={t("expertise.title")}
    >
      <Reveal>
        <h2 className="text-3xl font-semibold text-ink">
          {t("expertise.title")}
        </h2>
        <p className="mt-2 text-ink-dim">{t("expertise.subtitle")}</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.id}>
            <h3 className="text-sm font-medium tracking-wide text-ink-dim uppercase">
              {tl(group.label)}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium tracking-wide text-ink-dim uppercase">
            {t("expertise.education")}
          </h3>
          <ul className="mt-3 space-y-3">
            {education.map((item) => (
              <li key={item.id} className="text-sm">
                <p className="text-ink">{tl(item.title)}</p>
                <p className="text-ink-dim">
                  {item.institution} · {tl(item.period)}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium tracking-wide text-ink-dim uppercase">
            {t("expertise.certifications")}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs text-ink-dim"
                title={cert.issuer}
              >
                {cert.name}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
