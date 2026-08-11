import { fibonacciSphere } from "@/lib/math";
import type { LaidOutNode } from "@/types/graph";
import { graphNodes } from "./graph";

const erpNodes = graphNodes.filter((n) => n.group === "erp");
const aiNodes = graphNodes.filter((n) => n.group === "ai");
const coreNodes = graphNodes.filter((n) => n.group === "core");

// Casquete ERP: radio mayor, desplazado a la izquierda (-x), más ancho que alto.
const erpPositions = fibonacciSphere(erpNodes.length, 3.4, {
  minY: -0.55,
  maxY: 0.75,
  seed: 7,
}).map(([x, y, z]) => [x - 1.6, y, z] as [number, number, number]);

// Casquete IA: radio menor, desplazado a la derecha (+x).
const aiPositions = fibonacciSphere(aiNodes.length, 2.2, {
  minY: -0.6,
  maxY: 0.8,
  seed: 13,
}).map(([x, y, z]) => [x + 2.1, y, z] as [number, number, number]);

// Núcleo: en el eje central, ligero escalonado en z para que las aristas troncales se lean bien.
const corePositions: Array<[number, number, number]> = coreNodes.map((n, i) => {
  const isErpCore = n.id === "core.bc";
  return [isErpCore ? -0.5 : 0.6, 0.1, i === 0 ? 0.4 : -0.4];
});

const positionById = new Map<string, [number, number, number]>();
erpNodes.forEach((n, i) => positionById.set(n.id, erpPositions[i]));
aiNodes.forEach((n, i) => positionById.set(n.id, aiPositions[i]));
coreNodes.forEach((n, i) => positionById.set(n.id, corePositions[i]));

/** Grafo con posiciones 3D precalculadas y deterministas — fuente única para escena, cámara y fallback SVG. */
export const laidOutNodes: LaidOutNode[] = graphNodes.map((node) => ({
  ...node,
  position: positionById.get(node.id) ?? [0, 0, 0],
}));

export const nodePositionIndex = new Map(laidOutNodes.map((n, i) => [n.id, i]));

export function getNodePosition(id: string): readonly [number, number, number] {
  return positionById.get(id) ?? [0, 0, 0];
}
