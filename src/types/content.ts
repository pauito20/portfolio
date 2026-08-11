export type Locale = "es" | "en";

/** Un texto con su traducción. Un solo objeto por campo, nunca listas paralelas. */
export type L10n = Record<Locale, string>;

export type SectionId =
  "hero" | "about" | "experience" | "expertise" | "projects" | "contact";

export interface ExperienceItem {
  id: string;
  company: string;
  role: L10n;
  period: L10n;
  location: L10n;
  bullets: L10n[];
}

export interface EducationItem {
  id: string;
  institution: string;
  title: L10n;
  period: L10n;
  detail?: L10n;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface SkillGroup {
  id: string;
  label: L10n;
  items: string[];
}

export interface Project {
  id: string;
  title: L10n;
  summary: L10n;
  tags: string[];
  year: string;
  link?: string;
  nodeId?: string;
}
