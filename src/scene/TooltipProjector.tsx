import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { laidOutNodes } from "@/data/graphLayout";
import { useSceneStore } from "@/store/useSceneStore";

const worldPos = new THREE.Vector3();

/**
 * Vive dentro del <Canvas>. En cada frame proyecta la posición 3D del nodo en
 * hover/foco a coordenadas de pantalla y escribe el estilo directamente sobre
 * el div del tooltip (recibido por ref desde fuera del Canvas) — cero
 * re-render de React por frame.
 */
export function TooltipProjector({
  tooltipRef,
}: {
  tooltipRef: RefObject<HTMLDivElement | null>;
}) {
  const { camera, size } = useThree();
  const activeIdRef = useRef<string | null>(null);

  useEffect(
    () =>
      useSceneStore.subscribe((s) => {
        activeIdRef.current = s.hoveredNodeId ?? s.focusedNodeId;
      }),
    [],
  );

  useFrame(() => {
    const el = tooltipRef.current;
    if (!el) return;
    const id = activeIdRef.current;
    if (!id) return;
    const node = laidOutNodes.find((n) => n.id === id);
    if (!node) return;

    worldPos.set(...node.position).project(camera);
    const x = (worldPos.x * 0.5 + 0.5) * size.width;
    const y = (-worldPos.y * 0.5 + 0.5) * size.height;
    el.style.transform = `translate(${x}px, ${y}px) translate(-50%, calc(-100% - 14px))`;
  });

  return null;
}
