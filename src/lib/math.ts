/** PRNG con semilla — determinista entre builds, sin dependencias. */
export function mulberry32(seed: number): () => number {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Distribuye `count` puntos ~uniformemente sobre una esfera de radio `radius`,
 * restringidos a un casquete `[minY, maxY]` (en unidades de radio, -1..1).
 */
export function fibonacciSphere(
  count: number,
  radius: number,
  {
    minY = -1,
    maxY = 1,
    seed = 1,
  }: { minY?: number; maxY?: number; seed?: number } = {},
): Array<[number, number, number]> {
  const rand = mulberry32(seed);
  const points: Array<[number, number, number]> = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  const span = maxY - minY;

  for (let i = 0; i < count; i++) {
    const y = minY + (i / Math.max(1, count - 1)) * span;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i + rand() * 0.35;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push([x * radius, y * radius, z * radius]);
  }
  return points;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
