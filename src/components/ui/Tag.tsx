export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs text-ink-dim">
      {children}
    </span>
  );
}
