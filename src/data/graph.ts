import type { GraphEdge, GraphNode } from "@/types/graph";

export const graphNodes: GraphNode[] = [
  // --- Núcleo ---------------------------------------------------------
  {
    id: "core.bc",
    group: "core",
    label: { es: "Business Central", en: "Business Central" },
    blurb: {
      es: "4 años de AL en producción. El centro de mi día a día.",
      en: "4 years of AL in production. The center of my day-to-day.",
    },
    sectionId: "about",
    weight: 1,
    priority: 1,
  },
  {
    id: "core.ai",
    group: "core",
    label: { es: "IA aplicada", en: "Applied AI" },
    blurb: {
      es: "Máster en IA, centrado en agentes, MCP y automatización para ERP.",
      en: "AI master’s degree, focused on agents, MCP, and automation for ERP.",
    },
    sectionId: "expertise",
    weight: 1,
    priority: 1,
  },
  // --- Módulos ERP ------------------------------------------------------
  {
    id: "erp.finance",
    group: "erp",
    label: { es: "Finanzas y tesorería", en: "Finance & treasury" },
    blurb: {
      es: "Presupuestos, tesorería, cash-flow, recaudación tributaria.",
      en: "Budgeting, treasury, cash-flow, tax collection.",
    },
    sectionId: "experience",
    weight: 0.75,
    priority: 0.9,
  },
  {
    id: "erp.purchasing",
    group: "erp",
    label: { es: "Compras e inversiones", en: "Purchasing & investments" },
    blurb: {
      es: "Planificación de compras y gestión de inversiones.",
      en: "Purchase planning and investment management.",
    },
    sectionId: "experience",
    weight: 0.65,
    priority: 0.7,
  },
  {
    id: "erp.cases",
    group: "erp",
    label: {
      es: "Expedientes y garantías",
      en: "Case management & guarantees",
    },
    blurb: {
      es: "Gestión de expedientes administrativos y garantías.",
      en: "Administrative case management and guarantees.",
    },
    sectionId: "experience",
    weight: 0.7,
    priority: 0.8,
  },
  {
    id: "erp.payroll",
    group: "erp",
    label: { es: "Nóminas", en: "Payroll" },
    blurb: {
      es: "Gestión de nóminas para organismos públicos.",
      en: "Payroll management for public bodies.",
    },
    sectionId: "experience",
    weight: 0.55,
    priority: 0.5,
  },
  {
    id: "erp.egov",
    group: "erp",
    label: { es: "Administración electrónica", en: "E-government" },
    blurb: {
      es: "FACe, SII/AEAT, portafirmas, IRPF, Impuesto de Sociedades.",
      en: "FACe, SII/AEAT, digital signature, withholding & corporate tax.",
    },
    sectionId: "experience",
    weight: 0.7,
    priority: 0.8,
  },
  {
    id: "erp.api",
    group: "erp",
    label: { es: "APIs e integraciones", en: "APIs & integrations" },
    blurb: {
      es: "REST/SOAP bidireccional con bancos y ERPs externos vía BC Web Services.",
      en: "Bidirectional REST/SOAP with banks and external ERPs via BC Web Services.",
    },
    sectionId: "expertise",
    weight: 0.75,
    priority: 0.9,
  },
  {
    id: "erp.al",
    group: "erp",
    label: { es: "Extensiones AL", en: "AL extensions" },
    blurb: {
      es: "Más de 80 extensiones AL mantenidas en producción.",
      en: "More than 80 AL extensions maintained in production.",
    },
    sectionId: "expertise",
    weight: 0.8,
    priority: 1,
  },
  {
    id: "erp.migration",
    group: "erp",
    label: { es: "Migración de NAV a BC", en: "NAV to BC migration" },
    blurb: {
      es: "Ciclo de vida completo: análisis, reingeniería, datos, hipersoporte.",
      en: "Full lifecycle: analysis, re-engineering, data, hypercare.",
    },
    sectionId: "projects",
    weight: 0.75,
    priority: 0.85,
  },
  // --- Módulos IA -------------------------------------------------------
  {
    id: "ai.llm",
    group: "ai",
    label: { es: "Agentes LLM", en: "LLM agents" },
    blurb: {
      es: "Lenguaje natural sobre datos ERP, en el proyecto ERP SmartAgent.",
      en: "Natural language over ERP data, in the ERP SmartAgent project.",
    },
    sectionId: "projects",
    weight: 0.75,
    priority: 0.85,
  },
  {
    id: "ai.mcp",
    group: "ai",
    label: { es: "Model Context Protocol", en: "Model Context Protocol" },
    blurb: {
      es: "Servidores MCP conectando Business Central con LLMs.",
      en: "MCP servers connecting Business Central with LLMs.",
    },
    sectionId: "projects",
    weight: 0.6,
    priority: 0.6,
  },
  {
    id: "ai.migration",
    group: "ai",
    label: { es: "Migración asistida por LLM", en: "LLM-assisted migration" },
    blurb: {
      es: "Análisis de C/AL heredado asistido por IA, en el proyecto NAV Where Used.",
      en: "AI-assisted analysis of legacy C/AL, in the NAV Where Used project.",
    },
    sectionId: "projects",
    weight: 0.65,
    priority: 0.75,
  },
  {
    id: "ai.rl",
    group: "ai",
    label: {
      es: "Deep Reinforcement Learning",
      en: "Deep Reinforcement Learning",
    },
    blurb: {
      es: "TFM: optimización de carteras con DRL (DJI-30, RTC-TD3).",
      en: "MSc thesis: DRL portfolio optimization (DJI-30, RTC-TD3).",
    },
    sectionId: "projects",
    weight: 0.7,
    priority: 0.7,
  },
] as const satisfies GraphNode[];

export const graphEdges: GraphEdge[] = [
  { source: "core.bc", target: "erp.finance", strength: 0.8 },
  { source: "core.bc", target: "erp.purchasing", strength: 0.7 },
  { source: "core.bc", target: "erp.cases", strength: 0.8 },
  { source: "core.bc", target: "erp.payroll", strength: 0.6 },
  { source: "core.bc", target: "erp.egov", strength: 0.75 },
  { source: "core.bc", target: "erp.api", strength: 0.85 },
  { source: "core.bc", target: "erp.al", strength: 0.9 },
  { source: "erp.al", target: "erp.migration", strength: 0.7 },
  { source: "erp.api", target: "erp.egov", strength: 0.5 },
  { source: "core.ai", target: "ai.llm", strength: 0.85 },
  { source: "core.ai", target: "ai.mcp", strength: 0.7 },
  { source: "core.ai", target: "ai.rl", strength: 0.75 },
  { source: "ai.llm", target: "ai.mcp", strength: 0.6 },
  { source: "ai.llm", target: "ai.migration", strength: 0.6 },
  { source: "ai.mcp", target: "erp.api", strength: 0.5 },
  { source: "ai.migration", target: "erp.migration", strength: 0.9 },
  { source: "core.bc", target: "core.ai", strength: 1 },
] as const satisfies GraphEdge[];
