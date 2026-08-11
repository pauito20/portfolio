import type { ReactNode } from "react";
import type { SectionId } from "@/types/content";

interface SectionProps {
  id: SectionId;
  registerRef?: (el: Element | null) => void;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function Section({
  id,
  registerRef,
  className = "",
  children,
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      ref={registerRef}
      aria-label={ariaLabel}
      className={`relative mx-auto w-full max-w-3xl scroll-mt-24 px-6 py-section sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}
