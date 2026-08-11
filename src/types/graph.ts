import type { L10n, SectionId } from "./content";

export type NodeGroup = "erp" | "ai" | "core";

export interface GraphNode {
  id: string;
  group: NodeGroup;
  label: L10n;
  blurb: L10n;
  sectionId: SectionId | null;
  /** 0..1 — escala relativa del nodo */
  weight: number;
  /** 0..1 — por debajo del umbral se oculta en tier "low" */
  priority: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  /** 0..1 — grosor visual / intensidad del pulso */
  strength: number;
}

export interface LaidOutNode extends GraphNode {
  position: readonly [number, number, number];
}
