import type {
  Certification,
  EducationItem,
  ExperienceItem,
} from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    id: "laberit-consultant",
    company: "Lãberit",
    role: {
      es: "Consultor/Desarrollador Microsoft Dynamics 365 Business Central",
      en: "Microsoft Dynamics 365 Business Central Consultant/Developer",
    },
    period: { es: "feb. 2023 — actualidad", en: "Feb 2023 — present" },
    location: {
      es: "Híbrido · Comunitat Valenciana",
      en: "Hybrid · Valencian Community",
    },
    bullets: [
      {
        es: "80+ extensiones/repositorios AL mantenidos en producción en 8 organismos del sector público: expedientes, garantías, nóminas, presupuestos, tesorería y cash-flow, recaudación tributaria, inversiones y planificación de compras.",
        en: "80+ AL extensions/repositories maintained in production across 8 public-sector organizations: case management, guarantees, payroll, budgeting, treasury and cash-flow, tax collection, investments, and purchase planning.",
      },
      {
        es: "Integraciones con la administración electrónica española: FACe (emisión y recepción), SII/AEAT (IVA en tiempo real), portafirmas, IRPF, Impuesto de Sociedades e IVA no deducible.",
        en: "Integrations with Spanish e-government systems: FACe (issuing and receiving), SII/AEAT (real-time VAT), digital signature portal, withholding tax, corporate tax, and non-deductible VAT.",
      },
      {
        es: "Migraciones NAV → BC de ciclo de vida completo: análisis de personalizaciones C/AL heredadas, reingeniería a extensiones AL, migración de datos, puesta en marcha e hipersoporte.",
        en: "Full-lifecycle NAV → BC migrations: legacy C/AL customization analysis, re-engineering into AL extensions, data migration, go-live, and hypercare support.",
      },
      {
        es: "Integraciones bidireccionales REST/SOAP con sistemas bancarios y ERPs externos vía BC Web Services; canales automatizados de intercambio XML/CSV. Pipelines CI/CD para AL en Azure DevOps.",
        en: "Bidirectional REST/SOAP integrations with banking systems and external ERPs via BC Web Services; automated XML/CSV exchange channels. AL CI/CD pipelines in Azure DevOps.",
      },
    ],
  },
  {
    id: "laberit-intern",
    company: "Lãberit",
    role: {
      es: "Desarrollador Microsoft Dynamics Business Central (prácticas)",
      en: "Microsoft Dynamics Business Central Developer (Intern)",
    },
    period: { es: "oct. 2022 — feb. 2023", en: "Oct 2022 — Feb 2023" },
    location: { es: "España", en: "Spain" },
    bullets: [
      {
        es: "Primeros pasos en AL, Azure DevOps y servicios web RESTful sobre Business Central.",
        en: "First steps in AL, Azure DevOps, and RESTful web services on Business Central.",
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "master-ia",
    institution: "Universidad Europea",
    title: {
      es: "Máster en Inteligencia Artificial",
      en: "Master's in Artificial Intelligence",
    },
    period: { es: "oct. 2025 — ago. 2026", en: "Oct 2025 — Aug 2026" },
  },
  {
    id: "uji",
    institution: "Universitat Jaume I",
    title: {
      es: "Ingeniería Informática — Sistemas de la Información",
      en: "Computer Science — Information Systems",
    },
    period: { es: "Nota: 8", en: "Grade: 8/10" },
  },
  {
    id: "erasmus",
    institution: "Università degli Studi di Brescia",
    title: {
      es: "Erasmus — Ingeniería Informática",
      en: "Erasmus — Computer Science",
    },
    period: { es: "sept. 2021 — jul. 2022", en: "Sep 2021 — Jul 2022" },
  },
  {
    id: "clarinete",
    institution: "Conservatorio Superior de Música de Castellón",
    title: {
      es: "Grado Superior de Clarinete",
      en: "Professional Degree in Clarinet",
    },
    period: { es: "2020 — 2024", en: "2020 — 2024" },
  },
];

export const certifications: Certification[] = [
  {
    id: "mb-820",
    name: "MB-820: Dynamics 365 Business Central Developer",
    issuer: "Microsoft",
    date: "2025-12",
  },
  {
    id: "mb-800",
    name: "MB-800: Dynamics 365 Business Central Functional Consultant",
    issuer: "Microsoft",
    date: "2025-12",
  },
  {
    id: "ai-900",
    name: "AI-900: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024-10",
  },
  {
    id: "az-900",
    name: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024-09",
  },
  {
    id: "anthropic-claude-code",
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026-07",
  },
  {
    id: "anthropic-mcp",
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "2026-07",
  },
  {
    id: "anthropic-claude-api",
    name: "Building with the Claude API",
    issuer: "Anthropic",
    date: "2026-07",
  },
  {
    id: "anthropic-agent-skills",
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "2026-05",
  },
];
