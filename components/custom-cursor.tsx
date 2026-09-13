"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glowX = useSpring(x, { stiffness: 200, damping: 30 });
  const glowY = useSpring(y, { stiffness: 200, damping: 30 });
  const crossX = useSpring(x, { stiffness: 500, damping: 40 });
  const crossY = useSpring(y, { stiffness: 500, damping: 40 });

  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
      if (interactive) {
        setHovering(true);
      } else {
        hoverTimeout.current = window.setTimeout(() => setHovering(false), 150);
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed top-0 left-0 z-[99]"
      >
        <motion.div
          animate={{
            opacity: visible ? 1 : 0,
            scale: hovering ? 1.6 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        >
          <div className="size-40 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
          <div
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)]"
            style={{ transform: "translate(20px, 10px)" }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: crossX, y: crossY }}
        className="pointer-events-none fixed top-0 left-0 z-[99]"
      >
        <motion.div
          animate={{
            opacity: visible ? 1 : 0,
            scale: hovering ? 1.5 : 1,
            rotate: hovering ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="-translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative size-4">
            <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-foreground/70" />
            <span className="absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-foreground/70" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}