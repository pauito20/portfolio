import type { ExperienceItem } from "@/types/content";
import { useLocale } from "@/i18n/useLocale";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  const { tl } = useLocale();

  return (
    <ol className="space-y-8 border-l border-border pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-erp-soft" />
          <p className="text-xs tracking-wide text-ink-dim uppercase">
            {tl(item.period)}
          </p>
          <h3 className="mt-1 text-base font-semibold text-ink">
            {tl(item.role)}
          </h3>
          <p className="text-sm text-ink-dim">
            {item.company} · {tl(item.location)}
          </p>
          <ul className="mt-3 space-y-2">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-dim">
                <span aria-hidden className="text-ai-soft">
                  ›
                </span>
                {tl(bullet)}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
