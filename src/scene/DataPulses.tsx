import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { laidOutNodes } from "@/data/graphLayout";
import { graphEdges } from "@/data/graph";
import { useSceneStore } from "@/store/useSceneStore";
import { pulseFragmentShader, pulseVertexShader } from "./materials/glsl";

const PULSES_PER_EDGE = 2;
const GROUP_COLOR: Record<string, string> = {
  erp: "#4aa8ea",
  ai: "#5eead4",
  core: "#67e8f9",
};

export function DataPulses() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const reducedMotion = useSceneStore((s) => s.reducedMotion);

  const { geometry, material, count } = useMemo(() => {
    const byId = new Map(laidOutNodes.map((n) => [n.id, n]));
    const validEdges = graphEdges.filter(
      (e) => byId.has(e.source) && byId.has(e.target),
    );
    const total = validEdges.length * PULSES_PER_EDGE;

    const aStart = new Float32Array(total * 3);
    const aEnd = new Float32Array(total * 3);
    const aOffset = new Float32Array(total);
    const aSpeed = new Float32Array(total);
    const aSize = new Float32Array(total);
    const aColor = new Float32Array(total * 3);
    const c = new THREE.Color();

    let i = 0;
    for (const edge of validEdges) {
      const a = byId.get(edge.source)!;
      const b = byId.get(edge.target)!;
      c.set(GROUP_COLOR[b.group] ?? "#67e8f9");
      for (let p = 0; p < PULSES_PER_EDGE; p++) {
        aStart.set(a.position, i * 3);
        aEnd.set(b.position, i * 3);
        aOffset[i] = p / PULSES_PER_EDGE;
        aSpeed[i] = 0.12 + edge.strength * 0.1;
        aSize[i] = 0.055 + edge.strength * 0.02;
        aColor.set([c.r, c.g, c.b], i * 3);
        i++;
      }
    }

    const geo = new THREE.PlaneGeometry(1, 1);
    geo.setAttribute("aStart", new THREE.InstancedBufferAttribute(aStart, 3));
    geo.setAttribute("aEnd", new THREE.InstancedBufferAttribute(aEnd, 3));
    geo.setAttribute("aOffset", new THREE.InstancedBufferAttribute(aOffset, 1));
    geo.setAttribute("aSpeed", new THREE.InstancedBufferAttribute(aSpeed, 1));
    geo.setAttribute("aSize", new THREE.InstancedBufferAttribute(aSize, 1));
    geo.setAttribute("aColor", new THREE.InstancedBufferAttribute(aColor, 3));
    // La posición real se calcula en el vertex shader a partir de aStart/aEnd,
    // así que la bounding sphere por defecto (basada en `position`) no sirve.
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 6);

    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uMotion: { value: 1 } },
      vertexShader: pulseVertexShader,
      fragmentShader: pulseFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });

    return { geometry: geo, material: mat, count: total };
  }, []);

  useFrame(({ clock }) => {
    // Mutación imperativa intencionada: los uniforms de three.js se actualizan
    // así en cada frame, no hay forma inmutable de animarlos.
    // eslint-disable-next-line react-hooks/immutability
    material.uniforms.uTime.value = clock.elapsedTime;
    material.uniforms.uMotion.value = reducedMotion ? 0 : 1;
  });

  if (count === 0) return null;

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, count]}
      frustumCulled={false}
      raycast={() => null}
    />
  );
}
