"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        ["A", "BUTTON"].includes(t.tagName) ||
          !!t.closest("a") ||
          !!t.closest("button") ||
          !!t.dataset.hover
      );
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: clicking ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 900, damping: 40 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[1000]"
      />
      {/* ring */}
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovering ? 2.5 : clicking ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#2B6FFF] pointer-events-none z-[999]"
        style={{ mixBlendMode: "difference" }}
      />
    </>
  );
}
