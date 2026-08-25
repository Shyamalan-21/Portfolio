"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FullscreenLoading3D() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 450;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 6.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.6;
      coreRef.current.rotation.y += delta * 0.9;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.5;
      ringRef.current.rotation.z += delta * 0.7;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Central 3D Polyhedron */}
      <mesh ref={coreRef} scale={1.5}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#3B82F6"
          wireframe
          emissive="#2B6FFF"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Outer Gyro Ring */}
      <mesh ref={ringRef} scale={2.2}>
        <torusGeometry args={[1.6, 0.03, 16, 80]} />
        <meshStandardMaterial
          color="#00C49A"
          emissive="#00C49A"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#93C5FD"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const getStatusText = (val: number) => {
    if (val < 40) return "INITIALIZING SYSTEM CORE";
    if (val < 80) return "SYNCING PROFILES & WORKSPACE";
    return "SYSTEM ONLINE · ENTERING PORTFOLIO";
  };

  useEffect(() => {
    const startTime = Date.now();
    const duration = 750; // 0.75s lightning-fast responsive boot

    let animId: number;
    let t1: NodeJS.Timeout;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      const eased = Math.min(100, Math.floor(Math.pow(rawProgress / 100, 0.85) * 100));
      setProgress(eased);

      if (elapsed < duration) {
        animId = requestAnimationFrame(update);
      } else {
        setProgress(100);
        t1 = setTimeout(() => {
          setDone(true);
        }, 120);
      }
    };

    animId = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(t1);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => onCompleteRef.current?.()}>
      {!done && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03060F] overflow-hidden pointer-events-auto"
        >
          {/* Lightweight Fullscreen 3D Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Canvas
              camera={{ position: [0, 0, 6], fov: 60 }}
              dpr={[1, 1.5]}
              gl={{ powerPreference: "high-performance", antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#60A5FA" />
              <FullscreenLoading3D />
            </Canvas>
          </div>

          {/* Ambient Lighting Layers */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none z-[1]" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#00C49A]/10 blur-[90px] pointer-events-none z-[1]" />

          {/* Name Typography */}
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-[0.08em] text-white leading-none text-glow-white"
            >
              SHYAMALAN <span className="grad-text text-glow-blue">V</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-[#00C49A] uppercase mt-2 font-semibold"
            >
              COMPUTER SCIENCE ENGINEER &bull; CREATIVE TECHNOLOGIST
            </motion.p>
          </div>

          {/* Dynamic Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-[85vw] max-w-[380px] mt-10 relative z-10"
          >
            <div className="flex justify-between items-center font-mono text-[10px] sm:text-[11px] text-[#7C8BA3] mb-2 uppercase tracking-wider">
              <span className="flex items-center gap-2 text-white/90 truncate pr-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span>{getStatusText(progress)}</span>
              </span>
              <span className="text-white font-bold font-mono text-xs flex-shrink-0">
                {progress}%
              </span>
            </div>

            {/* Glowing Track */}
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15 relative shadow-xl backdrop-blur-sm">
              <div
                className="h-full rounded-full transition-[width] duration-75 ease-out relative overflow-hidden"
                style={{
                  width: `${Math.max(4, progress)}%`,
                  background: "linear-gradient(90deg, #2B6FFF 0%, #00C49A 100%)",
                  boxShadow: "0 0 15px rgba(43,111,255,0.8)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
