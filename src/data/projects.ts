import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "nav-where-used",
    title: {
      es: "C/AL Cross-Reference Analyzer (NAV Where Used)",
      en: "C/AL Cross-Reference Analyzer (NAV Where Used)",
    },
    summary: {
      es: "Herramienta de escritorio (Electron + React + TypeScript) que indexa exportaciones de objetos C/AL de Dynamics NAV y construye un grafo completo de referencias cruzadas — objetos, campos y funciones — con salto directo a línea, búsqueda global, detección de objetos huérfanos y sesiones multi-entorno. Analiza 5.000 ficheros en menos de 2 minutos. Reemplazo moderno de la clásica herramienta GDT Where Used, pensado para dimensionar proyectos reales de migración NAV → BC.",
      en: "Desktop tool (Electron + React + TypeScript) that indexes Dynamics NAV C/AL object exports and builds a full where-used cross-reference graph — objects, fields, and functions — with direct jump-to-line navigation, global search, unused-object detection, and multi-environment sessions. Parses 5,000-file exports in under 2 minutes. A modern replacement for the legacy GDT Where Used tool, built to scope real NAV → BC migration projects.",
    },
    tags: ["Electron", "React", "TypeScript", "Dynamics NAV"],
    year: "2026",
    link: "https://github.com/pauito20/cal-cross-reference-analyzer",
    nodeId: "ai.migration",
  },
  {
    id: "rl-portfolio",
    title: {
      es: "RLPortfolioOptimization — DRL para gestión de carteras (TFM)",
      en: "RLPortfolioOptimization — Deep RL for Portfolio Management (MSc Thesis)",
    },
    summary: {
      es: "Trabajo de fin de máster: gestión dinámica de carteras multiactivo con Deep Reinforcement Learning. Entorno Gymnasium propio que simula el DJI-30 (2010–2024), MDP de acción continua con recompensa sensible al coste de transacción y al riesgo. Compara A2C/PPO/DDPG/TD3 frente a una variante propia RTC-TD3 con extractores CNN/LSTM. Pipeline MLOps completo: MLflow, registro de modelos, backtesting con pyfolio (Sharpe, Calmar, máximo drawdown).",
      en: "MSc thesis: dynamic multi-asset portfolio management using Deep Reinforcement Learning. Custom Gymnasium environment simulating the DJI-30 (2010–2024), continuous-action MDP with transaction-cost- and risk-aware reward shaping. Benchmarks A2C/PPO/DDPG/TD3 against a proposed RTC-TD3 variant with CNN/LSTM feature extractors. Full MLOps pipeline: MLflow experiment tracking, model registry, pyfolio backtesting.",
    },
    tags: ["Python", "PyTorch", "Reinforcement Learning", "MLOps"],
    year: "2026",
    link: "https://github.com/pauito20/RLPortfolioOptimization",
    nodeId: "ai.rl",
  },

  {
    id: "erp-smartagent",
    title: {
      es: "ERP SmartAgent — Agentes LLM aplicados a Business Central",
      en: "ERP SmartAgent — LLM Agents Applied to Business Central",
    },
    summary: {
      es: "IA aplicada a ERP: agentes basados en LLM que interactúan con Business Central en lenguaje natural, servidores MCP para BC y análisis asistido por LLM de código C/AL heredado para acelerar migraciones NAV → BC. Incluye un catálogo de agent skills para desarrollo AL: generación de código, revisión y flujos de migración con herramientas de IA.",
      en: "Applied AI for ERP: LLM-based agents that interact with Business Central in natural language, MCP servers for BC, and LLM-assisted analysis of legacy C/AL code to accelerate NAV → BC migrations. Includes an agent-skill catalogue for AL development — code generation, review, and migration workflows with AI tooling.",
    },
    tags: ["Claude API", "MCP", "Python", "AL", "Business Central"],
    year: "2026",
    nodeId: "ai.llm",
  },
];
