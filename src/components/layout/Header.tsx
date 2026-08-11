import { Nav } from "./Nav";
import { LocaleToggle } from "./LocaleToggle";
import { MotionToggle } from "./MotionToggle";
import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 sm:px-8">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-ink"
        >
          {profile.name}
        </a>
        <Nav />
        <div className="flex items-center gap-2">
          <LocaleToggle />
          <MotionToggle />
        </div>
      </div>
    </header>
  );
}
