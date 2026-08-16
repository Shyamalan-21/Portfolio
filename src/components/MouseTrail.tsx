"use client";

import { useEffect, useRef, useState } from "react";

interface TrailPoint { x: number; y: number; alpha: number; size: number; }

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const frameRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      trailRef.current.push({ x: e.clientX, y: e.clientY, alpha: 1, size: 10 });
      if (trailRef.current.length > 40) trailRef.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trailRef.current = trailRef.current
        .map((p) => ({ ...p, alpha: p.alpha - 0.025, size: p.size * 0.97 }))
        .filter((p) => p.alpha > 0);

      trailRef.current.forEach((p, i) => {
        const ratio = i / trailRef.current.length;
        const r = Math.floor(43 + (0 - 43) * (1 - ratio));
        const g = Math.floor(111 + (196 - 111) * ratio);
        const b = Math.floor(255 + (154 - 255) * ratio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * ratio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * 0.6})`;
        ctx.fill();

        // glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * ratio * 3);
        grad.addColorStop(0, `rgba(${r},${g},${b},${p.alpha * 0.15})`);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * ratio * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[998] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
