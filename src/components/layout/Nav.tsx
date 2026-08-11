import { sections } from "@/data/sections";
import { useLocale } from "@/i18n/useLocale";
import { useSceneStore } from "@/store/useSceneStore";

export function Nav() {
  const { t } = useLocale();
  const activeSection = useSceneStore((s) => s.activeSection);

  return (
    <nav aria-label="Secciones" className="hidden gap-1 sm:flex">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-current={activeSection === s.id ? "true" : undefined}
          className={`rounded-full px-3 py-1.5 text-sm transition ${
            activeSection === s.id
              ? "bg-bg-raised text-ink"
              : "text-ink-dim hover:text-ink"
          }`}
        >
          {t(s.navLabel)}
        </a>
      ))}
    </nav>
  );
}
