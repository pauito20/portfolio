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
        <h2 className="text-headline font-semibold tracking-tight text-ink">
          {t("projects.title")}
        </h2>
        <p className="mt-2 leading-relaxed text-ink-dim">
          {t("projects.subtitle")}
        </p>
      </Reveal>
      <Reveal stagger={0.1} className="mt-10 grid gap-5">
        {projects.map((project) => (
          <Reveal.Item key={project.id}>
            <ProjectCard project={project} />
          </Reveal.Item>
        ))}
      </Reveal>
    </Section>
  );
}
