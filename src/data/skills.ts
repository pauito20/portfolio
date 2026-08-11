import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "erp",
    label: { es: "ERP · Business Central", en: "ERP · Business Central" },
    items: [
      "AL / C-AL",
      "Dynamics 365 Business Central",
      "Dynamics NAV",
      "Migraciones NAV → BC",
      "BC Web Services / APIs",
      "Extensibilidad (Copilot, eventos)",
    ],
  },
  {
    id: "integraciones",
    label: { es: "Integraciones", en: "Integrations" },
    items: [
      "REST / SOAP",
      "FACe · SII/AEAT · Portafirmas",
      "XML / CSV",
      "Azure DevOps · CI/CD",
    ],
  },
  {
    id: "ia",
    label: { es: "IA aplicada", en: "Applied AI" },
    items: [
      "Claude API / Anthropic",
      "Model Context Protocol (MCP)",
      "Agentes LLM",
      "Deep Reinforcement Learning",
      "Python · PyTorch",
    ],
  },
  {
    id: "plataforma",
    label: { es: "Plataforma y datos", en: "Platform & data" },
    items: [
      "SQL Server",
      "TypeScript",
      "React / Electron",
      "Azure AI / Azure Fundamentals",
    ],
  },
];
