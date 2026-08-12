import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border/60 bg-bg-raised/40 p-6 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
