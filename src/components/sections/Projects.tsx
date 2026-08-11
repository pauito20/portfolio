import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/useLocale";

export function Projects({
  registerRef,
}: {
  registerRef: (el: Element | null) => void;
}) {
  const { t } = useLocale();

  return (
    <Section
      id="projects"
      registerRef={registerRef}
      ariaLabel={t("projects.title")}
    >
      <Reveal>
        <h2 className="text-3xl font-semibold text-ink">
          {t("projects.title")}
        </h2>
        <p className="mt-2 text-ink-dim">{t("projects.subtitle")}</p>
      </Reveal>
      <div className="mt-10 grid gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
