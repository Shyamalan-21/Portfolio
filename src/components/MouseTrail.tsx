"use client";

import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const isAnimatingRef = useRef(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    // Only enable on desktop mouse devices, disable on touch screens
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const animate = () => {
      if (trailRef.current.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        isAnimatingRef.current = false;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trailRef.current = trailRef.current
        .map((p) => ({ ...p, alpha: p.alpha - 0.035, size: p.size * 0.96 }))
        .filter((p) => p.alpha > 0);

      const len = trailRef.current.length;
      for (let i = 0; i < len; i++) {
        const p = trailRef.current[i];
        const ratio = i / len;
        const r = Math.floor(43 + (0 - 43) * (1 - ratio));
        const g = Math.floor(111 + (196 - 111) * ratio);
        const b = Math.floor(255 + (154 - 255) * ratio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size * ratio * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * 0.5})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      trailRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1, size: 8 });
      if (trailRef.current.length > 25) trailRef.current.shift();

      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[998] pointer-events-none hidden md:block"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
