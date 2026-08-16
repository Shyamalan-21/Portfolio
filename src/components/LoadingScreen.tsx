"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Loading3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.8;
      meshRef.current.rotation.y += delta * 1.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.5;
      ringRef.current.rotation.z += delta * 0.7;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* 3D Wireframe Icosahedron Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#2B6FFF"
          wireframe
          emissive="#2B6FFF"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Outer Torus Glow Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.8, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#00C49A"
          emissive="#00C49A"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Particle Dust */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#60A5FA"
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Status message based on current progress
  const getStatusText = (val: number) => {
    if (val < 25) return "INITIALIZING 3D ENGINE & PARTICLES";
    if (val < 55) return "COMPILING SHADERS & GEOMETRY";
    if (val < 85) return "SYNCING ALGORITHMIC STREAM & PROFILES";
    return "SYSTEM ONLINE · ENTERING EXPERIENCE";
  };

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds smooth realistic boot duration

    const update = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      // Non-linear easing for natural feeling progression
      const eased = Math.min(100, Math.floor(Math.pow(rawProgress / 100, 0.85) * 100));
      setProgress(eased);

      if (elapsed < duration) {
        requestAnimationFrame(update);
      } else {
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600);
        }, 300);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -40, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03060F] overflow-hidden"
        >
          {/* Ambient Lighting Layers */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[160px] pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#00C49A]/10 blur-[140px] pointer-events-none" />

          {/* 3D Canvas in Center */}
          <div className="w-52 h-52 mb-2 relative z-10">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#60A5FA" />
              <Loading3D />
            </Canvas>
          </div>

          {/* Massive Name Typography */}
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-bebas text-7xl md:text-9xl tracking-[0.08em] text-white leading-none text-glow-white"
            >
              SHYAMALAN <span className="grad-text text-glow-blue">V</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-xs md:text-sm tracking-[0.4em] text-[#00C49A] uppercase mt-3 font-semibold"
            >
              COMPUTER SCIENCE ENGINEER &bull; CREATIVE TECHNOLOGIST
            </motion.p>
          </div>

          {/* Real-time Dynamic Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-80 md:w-[420px] mt-10 relative z-10"
          >
            <div className="flex justify-between items-center font-mono text-[11px] text-[#7C8BA3] mb-2.5 uppercase tracking-wider">
              <span className="flex items-center gap-2 text-white/80 truncate pr-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span>{getStatusText(progress)}</span>
              </span>
              <span className="text-white font-bold font-mono text-xs flex-shrink-0">
                {progress}%
              </span>
            </div>

            {/* Glowing Track with Smooth Dynamic Fill */}
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 relative shadow-inner">
              <div
                className="h-full rounded-full transition-[width] duration-75 ease-out relative overflow-hidden"
                style={{
                  width: `${Math.max(3, progress)}%`,
                  background: "linear-gradient(90deg, #2B6FFF 0%, #00C49A 100%)",
                  boxShadow: "0 0 20px rgba(43,111,255,0.9)",
                }}
              >
                {/* Active Light Sweep Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
