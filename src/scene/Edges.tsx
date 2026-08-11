import { useMemo } from "react";
import * as THREE from "three";
import { laidOutNodes } from "@/data/graphLayout";
import { graphEdges } from "@/data/graph";

const GROUP_COLOR: Record<string, string> = {
  erp: "#0078d4",
  ai: "#7b61ff",
  core: "#22d3ee",
};

/**
 * Un único LineSegments para todas las aristas: 2 vértices por arista,
 * con color interpolado (vertexColors) entre el color de cada extremo.
 * Deliberadamente sin shader propio — es la pieza de menor riesgo del grafo.
 */
export function Edges() {
  const geometry = useMemo(() => {
    const positions = new Float32Array(graphEdges.length * 2 * 3);
    const colors = new Float32Array(graphEdges.length * 2 * 3);
    const byId = new Map(laidOutNodes.map((n) => [n.id, n]));
    const c = new THREE.Color();

    graphEdges.forEach((edge, i) => {
      const a = byId.get(edge.source);
      const b = byId.get(edge.target);
      if (!a || !b) return;
      const offset = i * 6;
      positions.set(a.position, offset);
      positions.set(b.position, offset + 3);

      c.set(GROUP_COLOR[a.group]);
      colors.set([c.r, c.g, c.b], offset);
      c.set(GROUP_COLOR[b.group]);
      colors.set([c.r, c.g, c.b], offset + 3);
    });

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  return (
    <lineSegments geometry={geometry} raycast={() => null}>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.28}
        depthWrite={false}
        toneMapped={false}
      />
    </lineSegments>
  );
}
