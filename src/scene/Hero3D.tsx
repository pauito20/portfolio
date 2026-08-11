import type { RefObject } from "react";
import { Lights } from "./Lights";
import { GraphRoot } from "./GraphRoot";
import { CameraRig } from "./CameraRig";
import { Effects } from "./Effects";
import { TooltipProjector } from "./TooltipProjector";

export function Hero3D({
  tooltipRef,
}: {
  tooltipRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <Lights />
      <GraphRoot />
      <CameraRig />
      <Effects />
      <TooltipProjector tooltipRef={tooltipRef} />
    </>
  );
}
