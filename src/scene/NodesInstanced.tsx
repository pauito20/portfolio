import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import type { LaidOutNode } from "@/types/graph";
import { useSceneStore } from "@/store/useSceneStore";
import { activateNode } from "./activateNode";

interface NodesInstancedProps {
  nodes: LaidOutNode[];
  color: string;
  geometry: "icosahedron" | "octahedron";
  radius: number;
}

const GLOW_COLOR = new THREE.Color("#22d3ee");
const tmpMatrix = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpScale = new THREE.Vector3();
const tmpColor = new THREE.Color();

export function NodesInstanced({
  nodes,
  color,
  geometry,
  radius,
}: NodesInstancedProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const glow = useRef<Float32Array>(new Float32Array(nodes.length));
  const baseColor = useMemo(() => new THREE.Color(color), [color]);
  const hoveredNodeId = useSceneStore((s) => s.hoveredNodeId);
  const focusedNodeId = useSceneStore((s) => s.focusedNodeId);
  const setHoveredNodeId = useSceneStore((s) => s.setHoveredNodeId);

  useLayoutEffect(() => {
    const mesh = meshRef.current;
    nodes.forEach((node, i) => {
      const scale = radius * node.weight;
      tmpMatrix.compose(
        new THREE.Vector3(...node.position),
        tmpQuat.identity(),
        tmpScale.setScalar(scale),
      );
      mesh.setMatrixAt(i, tmpMatrix);
      mesh.setColorAt(i, baseColor);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.computeBoundingSphere();
  }, [nodes, baseColor, radius]);

  useFrame((_, dt) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    let dirty = false;

    nodes.forEach((node, i) => {
      const target =
        node.id === hoveredNodeId || node.id === focusedNodeId ? 1 : 0;
      const current = glow.current[i];
      const next = THREE.MathUtils.damp(current, target, 9, dt);
      if (Math.abs(next - current) < 0.0008 && next === current) return;

      glow.current[i] = next;
      dirty = true;

      const scale = radius * node.weight * (1 + next * 0.4);
      tmpMatrix.compose(
        new THREE.Vector3(...node.position),
        tmpQuat.identity(),
        tmpScale.setScalar(scale),
      );
      mesh.setMatrixAt(i, tmpMatrix);
      tmpColor.copy(baseColor).lerp(GLOW_COLOR, next);
      mesh.setColorAt(i, tmpColor);
    });

    if (dirty) {
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
  });

  function handlePointerMove(e: ThreeEvent<PointerEvent>) {
    e.stopPropagation();
    if (e.instanceId == null) return;
    const node = nodes[e.instanceId];
    if (node) setHoveredNodeId(node.id);
  }

  function handleClick(e: ThreeEvent<MouseEvent>) {
    e.stopPropagation();
    if (e.instanceId == null) return;
    const node = nodes[e.instanceId];
    if (node) activateNode(node.id, node.sectionId);
  }

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, nodes.length]}
      onPointerMove={handlePointerMove}
      onPointerOut={() => setHoveredNodeId(null)}
      onClick={handleClick}
    >
      {geometry === "icosahedron" ? (
        <icosahedronGeometry args={[1, 1]} />
      ) : (
        <octahedronGeometry args={[1, 0]} />
      )}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.35}
        metalness={0.15}
      />
    </instancedMesh>
  );
}
