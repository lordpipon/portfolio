"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function DepthEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".project-card, .avatar-frame, .social-card",
      ),
    );
    let frame = 0;
    const reset = () =>
      cards.forEach((card) => {
        card.style.removeProperty("transform");
        card.style.removeProperty("--shine-x");
        card.style.removeProperty("--shine-y");
      });
    const move = (event: PointerEvent) => {
      if (reduced.matches || !fine.matches) return;
      const card = (event.target as Element).closest<HTMLElement>(
        ".project-card, .avatar-frame, .social-card",
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        card.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
        card.style.setProperty("--shine-x", `${x * 100}%`);
        card.style.setProperty("--shine-y", `${y * 100}%`);
      });
    };
    const leave = (event: PointerEvent) => {
      const card = (event.target as Element).closest<HTMLElement>(
        ".project-card, .avatar-frame, .social-card",
      );
      if (card && !card.contains(event.relatedTarget as Node)) {
        cancelAnimationFrame(frame);
        reset();
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
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", leave, { passive: true });
    window.addEventListener("scroll", progress, { passive: true });
    window.addEventListener("resize", progress);
    reduced.addEventListener("change", reset);
    progress();
    return () => {
      cancelAnimationFrame(frame);
      reset();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", leave);
      window.removeEventListener("scroll", progress);
      window.removeEventListener("resize", progress);
      reduced.removeEventListener("change", reset);
    };
  }, [pathname]);
  return <div className="reading-progress" aria-hidden="true" />;
}
