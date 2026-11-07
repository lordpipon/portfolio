"use client";

import { useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, RotateCcw, Shrink } from "lucide-react";

const pixels = ["1111", "1001", "1001", "1111", "1000", "1000"];
const blocks = pixels.flatMap((row, y) =>
  Array.from(row).flatMap((on, x) => (on === "1" ? [{ x, y }] : [])),
);
const faces = ["front", "back", "left", "right", "top", "bottom"];

export function BlockMonogram() {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; y: number; rx: number; ry: number } | null>(
    null,
  );
  const rx = useMotionValue(-18);
  const ry = useMotionValue(-28);
  const springX = useSpring(rx, { stiffness: 160, damping: 26 });
  const springY = useSpring(ry, { stiffness: 160, damping: 26 });
  const reset = () => {
    rx.set(-18);
    ry.set(-28);
    setExpanded(false);
  };

  return (
    <div className="monogram-panel">
      <div
        className="monogram-stage"
        tabIndex={0}
        role="group"
        aria-label="Interactive 3D P monogram. Drag or use arrow keys to rotate. Home resets the view."
        onKeyDown={(event) => {
          if (
            ![
              "ArrowLeft",
              "ArrowRight",
              "ArrowUp",
              "ArrowDown",
              "Home",
            ].includes(event.key)
          )
            return;
          event.preventDefault();
          if (event.key === "Home") reset();
          else if (event.key === "ArrowLeft") ry.set(ry.get() - 15);
          else if (event.key === "ArrowRight") ry.set(ry.get() + 15);
          else
            rx.set(
              Math.max(
                -65,
                Math.min(65, rx.get() + (event.key === "ArrowUp" ? -10 : 10)),
              ),
            );
        }}
        onPointerDown={(event) => {
          if (event.button !== 0) return;
          drag.current = {
            x: event.clientX,
            y: event.clientY,
            rx: rx.get(),
            ry: ry.get(),
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          ry.set(drag.current.ry + (event.clientX - drag.current.x) * 0.45);
          rx.set(
            Math.max(
              -65,
              Math.min(
                65,
                drag.current.rx - (event.clientY - drag.current.y) * 0.3,
              ),
            ),
          );
        }}
        onPointerUp={() => {
          drag.current = null;
          setDragging(false);
        }}
        onPointerCancel={() => {
          drag.current = null;
          setDragging(false);
        }}
        onLostPointerCapture={() => {
          drag.current = null;
          setDragging(false);
        }}
        data-dragging={dragging}
      >
        <div className="construction-lines" aria-hidden="true" />
        <div className="monogram-center" aria-hidden="true">
          <motion.div
            className="block-model"
            style={{
              rotateX: reduced ? rx : springX,
              rotateY: reduced ? ry : springY,
            }}
          >
            {blocks.map(({ x, y }) => (
              <div
                key={`${x}-${y}`}
                className="voxel"
                style={
                  {
                    "--x": x - 1.5,
                    "--y": y - 2.5,
                    "--spread": expanded ? 1.55 : 1,
                  } as CSSProperties
                }
              >
                {faces.map((face) => (
                  <div key={face} className={`voxel-face voxel-${face}`} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="model-controls">
        <span>Drag to rotate</span>
        <div>
          <button
            type="button"
            aria-label="Rotate left"
            onClick={() => ry.set(ry.get() - 30)}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Rotate right"
            onClick={() => ry.set(ry.get() + 30)}
          >
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            aria-label={expanded ? "Assemble blocks" : "Separate blocks"}
            aria-pressed={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <Shrink size={16} /> : <Expand size={16} />}
          </button>
          <button type="button" aria-label="Reset 3D view" onClick={reset}>
            <RotateCcw size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
