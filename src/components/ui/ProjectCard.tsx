import type { Project } from "@/types/content";
import { useLocale } from "@/i18n/useLocale";
import { Card } from "./Card";
import { Tag } from "./Tag";
import { useSceneStore } from "@/store/useSceneStore";

export function ProjectCard({ project }: { project: Project }) {
  const { tl, t } = useLocale();
  const setHoveredNodeId = useSceneStore((s) => s.setHoveredNodeId);

  return (
    <Card
      className="transition hover:border-glow/60"
      {...(project.nodeId
        ? {
            onMouseEnter: () => setHoveredNodeId(project.nodeId!),
            onMouseLeave: () => setHoveredNodeId(null),
          }
        : {})}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-title font-semibold tracking-tight text-ink">
          {tl(project.title)}
        </h3>
        <span className="shrink-0 text-xs text-ink-dim">{project.year}</span>
      </div>
      <p className="mt-2 leading-relaxed text-sm text-ink-dim">
        {tl(project.summary)}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-erp-soft hover:text-glow"
        >
          {t("projects.viewRepo")} →
        </a>
      )}
    </Card>
  );
}
