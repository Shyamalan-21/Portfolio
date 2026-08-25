"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/* ── Lightweight Three.js 3D Constellation (GPU Optimized) ────────────── */
function Interactive3DScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const cube1Ref = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  const particlePositions = useMemo(() => {
    const count = 1000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
      pointsRef.current.position.x += ((mouse.x * viewport.width) / 22 - pointsRef.current.position.x) * 0.04;
      pointsRef.current.position.y += ((mouse.y * viewport.height) / 22 - pointsRef.current.position.y) * 0.04;
    }
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x += delta * 0.35;
      cube1Ref.current.rotation.y += delta * 0.5;
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.y -= delta * 0.4;
      cube2Ref.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>

      <mesh ref={cube1Ref} position={[-4, 2, -3]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#2B6FFF" wireframe opacity={0.3} transparent />
      </mesh>

      <mesh ref={cube2Ref} position={[4.5, -2, -2]}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#00C49A" wireframe opacity={0.25} transparent />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, 1800]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const allRoleTags = [
    { label: "Software Developer", color: "#60A5FA", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.3)" },
    { label: "Full-Stack Engineer", color: "#34D399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)" },
    { label: "AI Systems Builder", color: "#FFCB5B", bg: "rgba(255,203,91,0.12)", border: "rgba(255,203,91,0.3)" },
    { label: "AR / VR Developer", color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
    { label: "Creative Technologist", color: "#38BDF8", bg: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.3)" },
    { label: "Game & XR Developer", color: "#FB923C", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.3)" },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-20 pb-16 lg:pb-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% -10%, #0F2A5C 0%, #061124 45%, #03060F 100%)",
      }}
    >
      {/* Optimized Three.js 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <Canvas
          camera={{ position: [0, 0, 5.5] }}
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#60A5FA" />
          <Interactive3DScene />
        </Canvas>
      </div>

      {/* Atmospheric Glow Orbs (GPU Friendly Blur Radii) */}
      <div className="absolute top-1/4 left-1/5 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[90px] md:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] rounded-full bg-[#00C49A]/15 blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Background Typography */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 text-center will-change-transform"
      >
        <span className="font-bebas text-[15vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10.5vw] xl:text-[9.8vw] leading-none tracking-[0.05em] sm:tracking-[0.08em] text-white opacity-[0.08] uppercase block whitespace-nowrap">
          COMPUTER SCIENCE ENGINEER
        </span>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        style={{ y: heroContentY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-10 h-full lg:max-h-[84vh]"
      >
        {/* ─── LEFT COLUMN: Photo Cutout & Badge ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[46%] flex flex-col items-center justify-end h-full relative shrink-0 lg:-translate-x-2"
        >
          {/* Silhouette Glow */}
          <div className="absolute w-[380px] sm:w-[480px] h-[480px] sm:h-[580px] rounded-full bg-gradient-to-t from-blue-600/35 via-[#00C49A]/25 to-transparent blur-[80px] md:blur-[100px] pointer-events-none -z-10" />

          {/* Photo Cutout */}
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[560px] h-[38vh] sm:h-[46vh] md:h-[54vh] lg:h-[68vh] max-h-[600px] flex items-end justify-center">
            <Image
              src="/profile.jpg"
              alt="Shyamalan V — Computer Science Engineer"
              width={750}
              height={1000}
              priority
              className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] scale-[1.15] sm:scale-[1.2] origin-bottom transition-transform duration-300"
              style={{
                filter: "contrast(1.06) brightness(1.02)",
              }}
            />
          </div>

          {/* Floating Nameboard Badge Overlay */}
          <div className="mt-[-20px] sm:mt-[-24px] z-20 w-full max-w-sm sm:max-w-md text-center px-2">
            <div className="bg-[#03060F]/95 backdrop-blur-md border border-white/20 rounded-2xl py-3 px-5 sm:px-7 shadow-2xl shadow-black/90">
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-[34px] tracking-widest text-white leading-none text-glow-white">
                SHYAMALAN V
              </h2>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#00C49A] mt-1 font-bold whitespace-nowrap">
                COMPUTER SCIENCE &bull; GAMING TECHNOLOGY
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT COLUMN: Vertically Balanced & Aligned with Left Photo & Nameboard ─── */}
        <div className="w-full lg:w-[54%] flex flex-col justify-center lg:justify-between items-center lg:items-end text-center lg:text-right shrink-0 h-full lg:h-[72vh] lg:max-h-[660px] pt-1 pb-1">

          {/* Main Name Headline (Single Line — Aligned with Top of Photo) */}
          <div className="overflow-hidden w-full flex justify-center lg:justify-end">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[48px] sm:text-[68px] md:text-[86px] lg:text-[102px] xl:text-[116px] leading-none tracking-wider text-white whitespace-nowrap"
            >
              SHYAMALAN{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #00C49A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                V
              </span>
            </motion.h1>
          </div>

          {/* Role Tags Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="my-4 lg:my-2 flex flex-wrap gap-2 sm:gap-2.5 max-w-xl xl:max-w-2xl justify-center lg:justify-end"
          >
            {allRoleTags.map((tag, idx) => (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + idx * 0.02 }}
                className="px-3.5 sm:px-4 py-1.5 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  color: tag.color,
                  backgroundColor: tag.bg,
                  borderColor: tag.border,
                  boxShadow: `0 0 10px ${tag.color}14`,
                }}
              >
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Elevator Statement */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="my-3 lg:my-2 text-sm sm:text-base lg:text-[17px] xl:text-[18px] font-outfit font-light text-[#94A3B8] max-w-xl leading-relaxed text-center lg:text-right"
          >
            I build <span className="text-white font-medium">high-performance software</span>,{" "}
            <span className="text-[#60A5FA] font-medium">agentic AI pipelines</span>,{" "}
            <span className="text-[#00C49A] font-medium">immersive AR/VR worlds</span>{" "}
            and interactive digital platforms that turn ambitious ideas into reality.
          </motion.p>

          {/* Action CTAs (Aligned with Bottom of Nameboard) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mt-4 lg:mt-0 flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-end"
          >
            <a
              href="#projects"
              className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-outfit font-semibold text-xs sm:text-sm md:text-base tracking-wider uppercase text-white transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl active:scale-95"
              style={{
                background: "linear-gradient(135deg, #2B6FFF 0%, #00C49A 100%)",
                boxShadow: "0 0 24px rgba(43,111,255,0.4)",
              }}
              data-hover="true"
            >
              Explore Work <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-white/50 font-outfit font-medium text-xs sm:text-sm md:text-base tracking-wider uppercase text-white hover:bg-white/5 transition-all duration-300 active:scale-95"
              data-hover="true"
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
