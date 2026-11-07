"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function DepthEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (!reduced.matches) {
        lenis = new Lenis({
          autoRaf: true,
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
          anchors: true,
        });
      }
    };
    const progress = () => {
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--reading-progress",
        String(distance > 0 ? window.scrollY / distance : 0),
      );
    };
    configure();
    progress();
    reduced.addEventListener("change", configure);
    window.addEventListener("scroll", progress, { passive: true });
    window.addEventListener("resize", progress);
    return () => {
      lenis?.destroy();
      reduced.removeEventListener("change", configure);
      window.removeEventListener("scroll", progress);
      window.removeEventListener("resize", progress);
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
