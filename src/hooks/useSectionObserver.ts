import { useEffect, useRef } from "react";
import type { SectionId } from "@/types/content";
import { useSceneStore } from "@/store/useSceneStore";

/**
 * Un único IntersectionObserver compartido. La sección "activa" es la que cruza
 * el centro del viewport (rootMargin recorta un 45% arriba y abajo).
 * Cada <Section> se registra con `register(id)` en su ref callback.
 *
 * El observer se crea de forma perezosa dentro del propio callback de ref (no en
 * un useEffect): los ref callbacks se disparan en el commit inicial, antes de que
 * corra cualquier efecto, así que crearlo ahí evita la carrera de "el observer
 * todavía no existe cuando el primer nodo se monta".
 */
export function useSectionObserver() {
  const setActiveSection = useSceneStore((s) => s.setActiveSection);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const idsBySection = useRef(new WeakMap<Element, SectionId>());
  const callbacks = useRef(new Map<SectionId, (el: Element | null) => void>());

  function getObserver(): IntersectionObserver {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          const id = idsBySection.current.get(visible.target);
          if (id) setActiveSection(id);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
    }
    return observerRef.current;
  }

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  function register(id: SectionId) {
    const cached = callbacks.current.get(id);
    if (cached) return cached;
    const callback = (el: Element | null) => {
      if (!el) return;
      idsBySection.current.set(el, id);
      getObserver().observe(el);
    };
    callbacks.current.set(id, callback);
    return callback;
  }

  return { register };
}
