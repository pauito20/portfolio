let cached: boolean | null = null;

function detectWebGL2(): boolean {
  if (typeof document === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('webgl2');
    if (!ctx) return false;
    // Liberar el contexto de sondeo: el navegador solo permite un puñado de
    // contextos WebGL vivos a la vez. `SceneCanvas` vuelve a llamar a este hook
    // en cada render (p. ej. cuando `PerformanceMonitor` cambia el tier en
    // móvil); sin liberar, se acumulan hasta que el navegador empieza a
    // descartar los más viejos — y puede tocarle al del Canvas real.
    ctx.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/** Comprobación única (no reactiva) y cacheada: WebGL2 no aparece ni desaparece en caliente. */
export function useWebGLSupport(): boolean {
  if (cached === null) cached = detectWebGL2();
  return cached;
}
