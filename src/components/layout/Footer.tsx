import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { useLocale } from "@/i18n/useLocale";

export function Footer({
  registerRef,
}: {
  registerRef: (el: Element | null) => void;
}) {
  const { t } = useLocale();

  return (
    <>
      <Section
        id="contact"
        registerRef={registerRef}
        ariaLabel={t("contact.title")}
        className="text-center"
      >
        <Reveal>
          <h2 className="text-headline font-semibold tracking-tight text-ink">
            {t("contact.title")}
          </h2>
          <p className="mt-2 leading-relaxed text-ink-dim">
            {t("contact.pitch")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-erp px-5 py-2.5 text-sm font-medium text-white transition hover:bg-erp-soft"
            >
              {t("contact.email")}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition hover:border-glow"
            >
              {t("contact.linkedin")}
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-dim">{profile.location}</p>
        </Reveal>
      </Section>
      <footer className="border-t border-border/60 px-6 py-8 text-center text-xs text-ink-dim">
        <p>
          © {new Date().getFullYear()} {profile.name} — {t("footer.rights")}
        </p>
        <p className="mt-1">{t("footer.builtWith")}</p>
      </footer>
    </>
  );
}
