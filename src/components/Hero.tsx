"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/* ── Three.js 3D Constellation & Floating HUD Particles ────────────── */
function Interactive3DScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const cube1Ref = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  const particlePositions = useMemo(() => {
    const arr = new Float32Array(2500 * 3);
    for (let i = 0; i < 2500; i++) {
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
      pointsRef.current.position.x += ((mouse.x * viewport.width) / 18 - pointsRef.current.position.x) * 0.05;
      pointsRef.current.position.y += ((mouse.y * viewport.height) / 18 - pointsRef.current.position.y) * 0.05;
    }
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x += delta * 0.4;
      cube1Ref.current.rotation.y += delta * 0.6;
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.y -= delta * 0.5;
      cube2Ref.current.rotation.z += delta * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.022}
          sizeAttenuation
          depthWrite={false}
          opacity={0.65}
        />
      </Points>

      <mesh ref={cube1Ref} position={[-4, 2, -3]}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#2B6FFF" wireframe opacity={0.35} transparent />
      </mesh>

      <mesh ref={cube2Ref} position={[4.5, -2, -2]}>
        <dodecahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#00C49A" wireframe opacity={0.3} transparent />
      </mesh>

      <mesh ref={torusRef} position={[-3.5, -2.5, -4]}>
        <torusGeometry args={[1, 0.02, 16, 50]} />
        <meshStandardMaterial color="#60A5FA" opacity={0.25} transparent />
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

  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const roles = [
    "SOFTWARE DEVELOPER",
    "CREATIVE TECHNOLOGIST",
    "AI SYSTEMS BUILDER",
    "AR/VR DEVELOPER",
    "PROBLEM SOLVER",
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-20 pb-12 lg:pb-14"
      style={{
        background:
          "radial-gradient(ellipse 80% 80% at 50% -10%, #0F2A5C 0%, #061124 45%, #03060F 100%)",
      }}
    >
      {/* Three.js 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-75">
        <Canvas camera={{ position: [0, 0, 5.5] }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#60A5FA" />
          <Interactive3DScene />
        </Canvas>
      </div>

      {/* Atmospheric Glow Orbs */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#00C49A]/15 blur-[160px] pointer-events-none" />

      {/* Giant Parallax Background Typography: COMPUTER SCIENCE ENGINEER */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden whitespace-nowrap opacity-[0.045]"
      >
        <span className="font-bebas text-[18vw] leading-none tracking-tight text-white block">
          COMPUTER SCIENCE ENGINEER &bull; CREATIVE TECHNOLOGIST
        </span>
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        style={{ y: heroContentY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8"
      >
        {/* ─── LEFT COLUMN: Headlines & Statement ─────────── */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center">
          
          {/* Main Name Headlines */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[85px] sm:text-[105px] md:text-[125px] xl:text-[145px] leading-[0.88] tracking-wider text-white"
            >
              SHYAMALAN
            </motion.h1>
          </div>

          <div className="overflow-hidden flex items-baseline -mt-2">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[85px] sm:text-[105px] md:text-[125px] xl:text-[145px] leading-[0.88] tracking-wider"
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #00C49A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              V
            </motion.h1>
          </div>

          {/* Full Uncut Role Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 border-y border-white/10 py-3 overflow-hidden"
          >
            <div className="flex items-center gap-4 text-[#94A3B8] font-mono text-xs md:text-sm tracking-widest uppercase overflow-x-auto scrollbar-none whitespace-nowrap">
              {roles.map((r, i) => (
                <span key={i} className="flex items-center gap-3 shrink-0">
                  <span className="text-white font-medium">{r}</span>
                  {i < roles.length - 1 && <span className="text-[#2B6FFF] font-bold">&bull;</span>}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Elevator Statement */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-6 text-base sm:text-lg lg:text-xl font-outfit font-light text-[#94A3B8] max-w-xl leading-relaxed"
          >
            I build <span className="text-white font-medium">software</span>,{" "}
            <span className="text-[#60A5FA] font-medium">AI pipelines</span>,{" "}
            <span className="text-[#00C49A] font-medium">AR/VR virtual spaces</span>{" "}
            and interactive digital platforms that turn ambitious ideas into reality.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <a
              href="#projects"
              className="px-9 py-4 rounded-full font-outfit font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:scale-105 flex items-center gap-2.5"
              style={{
                background: "linear-gradient(135deg, #2B6FFF 0%, #00C49A 100%)",
                boxShadow: "0 0 35px rgba(43,111,255,0.45)",
              }}
              data-hover="true"
            >
              Explore Work <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-white/50 font-outfit font-medium text-sm tracking-wider uppercase text-white hover:bg-white/5 transition-all duration-300"
              data-hover="true"
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>

        {/* ─── RIGHT COLUMN: Cutout Photo with Balanced Floating Pill ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[48%] flex flex-col items-center justify-center relative pb-4"
        >
          {/* Ambient Silhouette Glow Behind Cutout */}
          <div className="absolute w-[360px] h-[480px] rounded-full bg-gradient-to-t from-blue-600/30 via-[#00C49A]/20 to-transparent blur-[100px] pointer-events-none -z-10" />

          {/* Maximized Photo Cutout */}
          <div className="relative w-full max-w-[420px] xl:max-w-[460px] h-[400px] sm:h-[450px] md:h-[480px] lg:h-[460px] xl:h-[500px] flex items-end justify-center">
            <Image
              src="/profile.jpg"
              alt="Shyamalan V — Computer Science Engineer"
              width={460}
              height={620}
              priority
              className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              style={{
                filter: "contrast(1.08) brightness(1.02)",
              }}
            />
          </div>

          {/* Floating Modern Name Badge with Breathing Room */}
          <div className="mt-[-18px] z-20 w-full max-w-sm text-center">
            <div className="bg-[#03060F]/90 backdrop-blur-xl border border-white/15 rounded-2xl py-3 px-6 shadow-2xl">
              <h2 className="font-bebas text-2xl sm:text-3xl tracking-widest text-white leading-none text-glow-white">
                SHYAMALAN V
              </h2>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#00C49A] mt-1 font-semibold">
                COMPUTER SCIENCE &bull; GAMING TECHNOLOGY
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
