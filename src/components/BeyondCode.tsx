"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Glasses, BrainCircuit, Film, Sparkles, GraduationCap, Star, BookOpen, Rocket, CheckCircle2 } from "lucide-react";

/* ── Beyond Code ──────────────────────────────────────── */
const quads = [
  { title: "Spatial Computing & XR", icon: Glasses, tag: "IMMERSIVE WORLDS", accent: "#2B6FFF",
    desc: "Hands-on VR app development with Unity, Unreal Engine and Oculus hardware. Research papers on XR simulation frameworks." },
  { title: "AI Multi-Agent Systems", icon: BrainCircuit, tag: "AGENTIC WORKFLOWS", accent: "#00C49A",
    desc: "Designing stateful multi-node graphs with LangGraph, SHAP explainability, and mathematical credibility pipelines." },
  { title: "Cinematic Production", icon: Film, tag: "EDITORIAL VISION", accent: "#FFCB5B",
    desc: "Chief Video Editor for 7 months at Andropedia SRMIST Ramapuram. Visual storytelling, sound design and brand media." },
  { title: "Hackathon Rapid Builds", icon: Sparkles, tag: "RAPID EXECUTION", accent: "#A78BFA",
    desc: "Built complete 3D architectural models from scratch during 24-hour national hackathons among 1,200+ competitors." },
];

/* ── Education ──────────────────────────────────────── */
const univCore = [
  "Data Structures, Algorithms & Analysis",
  "Object Oriented Programming — Java / C++",
  "Operating Systems & Database Management",
  "Computer Graphics & Real-Time Simulation",
  "Computer Networks & Distributed Systems",
];

const selfTaught = [
  "Full-Stack Next.js 15 App Router & Reactive UIs",
  "Multi-Agent LangGraph Architectures & LLMs",
  "Docker Containerization & Cloud Deployments",
  "Game Engines (Unity / Unreal) & Spatial XR",
  "Product Design & 24-Hour Hackathon Execution",
];

export default function BeyondCodeAndEducation() {
  const beyondRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: beyondRef,
    offset: ["start end", "end start"],
  });

  // Smooth optimized parallax sweep
  const bgTextX = useTransform(scrollYProgress, [0, 1], [-800, 800]);

  return (
    <>
      {/* ── Beyond Code Section ─────────────────────────────── */}
      <section
        id="beyond-code"
        ref={beyondRef}
        className="relative w-full py-20 md:py-32 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F2EFE6 0%, #E8E3D8 100%)" }}
      >
        {/* Parallax Background Typography */}
        <motion.div
          style={{ x: bgTextX }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 text-center will-change-transform"
        >
          <span className="font-bebas text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw] leading-none text-black opacity-[0.06] tracking-[0.06em] sm:tracking-[0.1em] uppercase block whitespace-nowrap">
            BEYOND CODE &bull; MULTIDISCIPLINARY
          </span>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#3D8361] mb-3 font-semibold">
              <Sparkles className="w-4 h-4 text-[#00C49A]" />
              <span>MULTIDISCIPLINARY PERSPECTIVE</span>
            </div>
            <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-[#171614] leading-none">
              Beyond <span className="text-[#2B6FFF]">Code</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {quads.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="bg-white/85 backdrop-blur-md border border-black/5 hover:border-black/15 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Top Colored Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ background: q.accent }}
                  />

                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="p-3.5 rounded-2xl transition-transform group-hover:scale-110"
                      style={{ background: `${q.accent}15`, border: `1px solid ${q.accent}35` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: q.accent }} />
                    </div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border font-semibold"
                      style={{ color: q.accent, borderColor: `${q.accent}40`, background: `${q.accent}10` }}
                    >
                      {q.tag}
                    </span>
                  </div>

                  <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-[#171614] mb-3">
                    {q.title}
                  </h3>
                  <p className="font-outfit text-[#555] group-hover:text-[#222] text-base leading-relaxed transition-colors">
                    {q.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-black/5 font-mono text-[11px] flex justify-end">
                    <span className="font-semibold flex items-center gap-1.5" style={{ color: q.accent }}>
                      EXPLORE DOMAIN &rarr;
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Education Section with Rich Micro-Interactions ─────── */}
      <section id="education" className="relative w-full bg-[#060D1E] py-32 overflow-hidden border-t border-white/5">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-[#00C49A]/10 blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#2B6FFF] mb-3 font-semibold">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>ACADEMIC RIGOR & FOUNDATION</span>
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white leading-none">
              Academic <span className="grad-text">Education</span>
            </h2>
            <div className="h-px bg-white/10 mt-6" />
          </motion.div>

          {/* Interactive Degree Banner with Hover Shine & 3D Depth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.015, y: -4 }}
            className="bg-[#0A1628]/90 border border-white/15 rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all duration-300 group shadow-2xl relative overflow-hidden"
            style={{ boxShadow: "0 0 60px rgba(43,111,255,0.12)" }}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400" />

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-9 h-9 text-blue-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3.5 py-1 rounded-full font-mono text-[10px] bg-blue-500/15 text-blue-400 border border-blue-500/30 font-semibold uppercase tracking-wider">
                    2023 — 2027 &bull; Final Year
                  </span>
                  
                  {/* Interactive Glowing CGPA Badge */}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="px-3.5 py-1 rounded-full font-mono text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5 font-bold shadow-[0_0_15px_rgba(52,211,153,0.3)] cursor-pointer"
                  >
                    <Star className="w-3.5 h-3.5 fill-emerald-400" />
                    CGPA: 9.11 / 10.0 (Distinction)
                  </motion.span>
                </div>

                <h3 className="font-bebas text-3xl md:text-5xl tracking-wider text-white">
                  B.Tech Computer Science & Engineering
                </h3>
                <p className="font-mono text-sm md:text-base text-[#00C49A] mt-1 font-semibold">
                  Specialization in Gaming Technology
                </p>
                <p className="font-mono text-xs text-[#7C8BA3] mt-2">
                  SRM University, Ramapuram &bull; Chennai, India
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0 font-mono text-xs text-[#7C8BA3]">
              <span className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium">
                Rank: Top 5% of Department
              </span>
              <span className="text-emerald-400 text-[11px]">
                Active Full-Time Student
              </span>
            </div>
          </motion.div>

          {/* Interactive Micro-comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            
            {/* University Core Module */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-[#0A1628]/70 border border-white/10 hover:border-blue-500/40 rounded-3xl p-8 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="font-bebas text-3xl tracking-wider text-white">University Core</h4>
                </div>
                <span className="font-mono text-[10px] uppercase text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  FORMAL RIGOR
                </span>
              </div>

              <ul className="space-y-3.5">
                {univCore.map((t) => (
                  <motion.li
                    key={t}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 font-mono text-sm text-[#94A3B8] hover:text-white transition-colors cursor-default p-2 rounded-xl hover:bg-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Self-Taught & Specialized Module */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-[#001A0F]/70 border border-[#00C49A]/20 hover:border-[#00C49A]/50 rounded-3xl p-8 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                    <Rocket className="w-5 h-5 text-[#00C49A]" />
                  </div>
                  <h4 className="font-bebas text-3xl tracking-wider text-white">Applied & Self-Taught</h4>
                </div>
                <span className="font-mono text-[10px] uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  RAPID ADOPTION
                </span>
              </div>

              <ul className="space-y-3.5">
                {selfTaught.map((t) => (
                  <motion.li
                    key={t}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 font-mono text-sm text-[#94A3B8] hover:text-white transition-colors cursor-default p-2 rounded-xl hover:bg-emerald-500/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00C49A] flex-shrink-0" />
                    <span>{t}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
