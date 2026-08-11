import { useSceneStore } from "@/store/useSceneStore";
import type { SectionId } from "@/types/content";

/** Click en un nodo (3D o accesible) → misma acción siempre: foco + scroll a su sección. */
export function activateNode(nodeId: string, sectionId: SectionId | null) {
  useSceneStore.getState().setFocusedNodeId(nodeId);
  if (sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
