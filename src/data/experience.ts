import type { Certification, EducationItem, ExperienceItem } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    id: "laberit-consultant",
    company: "Lãberit",
    role: {
      es: "Consultor/Desarrollador Microsoft Dynamics 365 Business Central",
      en: "Microsoft Dynamics 365 Business Central Consultant/Developer",
    },
    period: { es: "Desde feb. 2023", en: "Since Feb 2023" },
    location: { es: "Híbrido · Comunitat Valenciana", en: "Hybrid · Valencian Community" },
    bullets: [
      {
        es: "Más de 80 extensiones y repositorios AL mantenidos en producción en 8 organismos del sector público: expedientes, garantías, nóminas, presupuestos, tesorería y flujo de caja, recaudación tributaria, inversiones y planificación de compras.",
        en: "More than 80 AL extensions and repositories maintained in production across 8 public-sector organizations: case management, guarantees, payroll, budgeting, treasury and cash flow, tax collection, investments, and purchase planning.",
      },
      {
        es: "Integraciones con la administración electrónica española: FACe para emisión y recepción, SII/AEAT para IVA en tiempo real, portafirmas, IRPF, Impuesto de Sociedades e IVA no deducible.",
        en: "Integrations with Spanish e-government systems: FACe for issuing and receiving invoices, SII/AEAT for real-time VAT, digital signature portal, withholding tax, corporate tax, and non-deductible VAT.",
      },
      {
        es: "Migración de NAV a Business Central de ciclo de vida completo: análisis de personalizaciones C/AL heredadas, reingeniería a extensiones AL, migración de datos, puesta en marcha e hipersoporte.",
        en: "Full-lifecycle NAV to Business Central migrations: legacy C/AL customization analysis, re-engineering into AL extensions, data migration, go-live, and hypercare support.",
      },
      {
        es: "Integraciones bidireccionales REST/SOAP con sistemas bancarios y ERPs externos a través de BC Web Services, junto con canales automatizados de intercambio XML/CSV y pipelines de CI/CD para AL en Azure DevOps.",
        en: "Bidirectional REST/SOAP integrations with banking systems and external ERPs via BC Web Services, along with automated XML/CSV exchange channels and AL CI/CD pipelines in Azure DevOps.",
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
    period: { es: "oct. 2022 a feb. 2023", en: "Oct 2022 to Feb 2023" },
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
    title: { es: "Máster en Inteligencia Artificial", en: "Master's in Artificial Intelligence" },
    period: { es: "oct. 2025 a ago. 2026", en: "Oct 2025 to Aug 2026" },
  },
  {
    id: "uji",
    institution: "Universitat Jaume I",
    title: {
      es: "Ingeniería Informática: Sistemas de la Información",
      en: "Computer Science: Information Systems",
    },
    period: { es: "Nota: 8", en: "Grade: 8/10" },
  },
  {
    id: "erasmus",
    institution: "Università degli Studi di Brescia",
    title: { es: "Erasmus en Ingeniería Informática", en: "Erasmus in Computer Science" },
    period: { es: "sept. 2021 a jul. 2022", en: "Sep 2021 to Jul 2022" },
  },
  {
    id: "clarinete",
    institution: "Conservatorio Superior de Música de Castellón",
    title: { es: "Grado Superior de Clarinete", en: "Professional Degree in Clarinet" },
    period: { es: "2020 a 2024", en: "2020 to 2024" },
  },
];

export const certifications: Certification[] = [
  {
    id: "mb-820",
    name: "MB-820: Dynamics 365 Business Central Developer",
    issuer: "Microsoft",
    date: "2025-12",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-developer-associate/",
  },
  {
    id: "mb-800",
    name: "MB-800: Dynamics 365 Business Central Functional Consultant",
    issuer: "Microsoft",
    date: "2025-12",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/d365-business-central-functional-consultant-associate/",
  },
  {
    id: "ai-900",
    name: "AI-900: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024-10",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
  {
    id: "az-900",
    name: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2024-09",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
  },
  {
    id: "anthropic-claude-code",
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026-07",
    url: "https://anthropic.skilljar.com/claude-code-in-action",
  },
  {
    id: "anthropic-mcp",
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "2026-07",
    url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
  },
  {
    id: "anthropic-claude-api",
    name: "Building with the Claude API",
    issuer: "Anthropic",
    date: "2026-07",
    url: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
  },
  {
    id: "anthropic-agent-skills",
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "2026-05",
    url: "https://anthropic.skilljar.com/introduction-to-agent-skills",
  },
];
