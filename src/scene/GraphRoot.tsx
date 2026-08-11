import { useMemo, useRef } from "react";
import type { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { laidOutNodes } from "@/data/graphLayout";
import { useSceneStore } from "@/store/useSceneStore";
import { NodesInstanced } from "./NodesInstanced";
import { Edges } from "./Edges";
import { DataPulses } from "./DataPulses";

export function GraphRoot() {
  const groupRef = useRef<Group>(null!);
  const reducedMotion = useSceneStore((s) => s.reducedMotion);
  const tier = useSceneStore((s) => s.tier);

  const { core, erp, ai } = useMemo(
    () => ({
      core: laidOutNodes.filter((n) => n.group === "core"),
      erp: laidOutNodes.filter(
        (n) => n.group === "erp" && (tier !== "low" || n.priority > 0.5),
      ),
      ai: laidOutNodes.filter(
        (n) => n.group === "ai" && (tier !== "low" || n.priority > 0.5),
      ),
    }),
    [tier],
  );

  useFrame((_, dt) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y += dt * 0.035;
  });

  return (
    <group ref={groupRef}>
      <Edges />
      {tier !== "low" && <DataPulses />}
      {/* Núcleo: azules de la familia BC, degradado con flujo lento y rim
          cian — evoca una superficie de cinta fluida sin reproducir ninguna
          marca registrada. */}
      <NodesInstanced
        nodes={core}
        color="#1668c4"
        gradientTo="#5ec8f5"
        rimColor="#22d3ee"
        flow
        radius={0.62}
      />
      <NodesInstanced
        nodes={erp}
        color="#0078d4"
        gradientTo="#4aa8ea"
        rimColor="#7fd4ff"
        radius={0.4}
      />
      <NodesInstanced
        nodes={ai}
        color="#7b61ff"
        gradientTo="#a78bfa"
        rimColor="#c4b5fd"
        radius={0.42}
      />
    </group>
  );
}
