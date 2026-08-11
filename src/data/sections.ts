import type { SectionId } from "@/types/content";
import type { DictPath } from "@/i18n/dictionary";

export interface SectionMeta {
  id: SectionId;
  navLabel: DictPath;
}

export const sections: SectionMeta[] = [
  { id: "about", navLabel: "nav.about" },
  { id: "experience", navLabel: "nav.experience" },
  { id: "expertise", navLabel: "nav.expertise" },
  { id: "projects", navLabel: "nav.projects" },
  { id: "contact", navLabel: "nav.contact" },
];
