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
      className={`rounded-xl border border-border bg-bg-raised/70 p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
