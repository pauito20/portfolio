function detectWebGL2(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("webgl2");
    return !!ctx;
  } catch {
    return false;
  }
}

/** Comprobación única (no reactiva): WebGL2 no aparece ni desaparece en caliente. */
export function useWebGLSupport(): boolean {
  return detectWebGL2();
}
