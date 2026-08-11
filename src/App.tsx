import { useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { TileGrid } from "@/components/ui/TileGrid";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { useSectionObserver } from "@/hooks/useSectionObserver";

export default function App() {
  const { register } = useSectionObserver();
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <AmbientBackground />
      <SkipLink />
      <Header />
      <main id="main">
        <Hero registerRef={register("hero")} tooltipRef={tooltipRef} />
        <TileGrid />
        <About registerRef={register("about")} />
        <Experience registerRef={register("experience")} />
        <Expertise registerRef={register("expertise")} />
        <Projects registerRef={register("projects")} />
        <Footer registerRef={register("contact")} />
      </main>
    </>
  );
}
