"use client";

import { motion } from "framer-motion";
import { Glasses, BrainCircuit, Film, Sparkles } from "lucide-react";
import { GraduationCap, Star, BookOpen, Rocket } from "lucide-react";

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
  "OOP — Java / C++",
  "Operating Systems & DBMS",
  "Computer Graphics & Simulation",
];
const selfTaught = [
  "Full-Stack Next.js 15+ & Reactive UIs",
  "Multi-Agent LangGraph Architectures",
  "Docker Compose & Cloud Deployments",
  "Product Design & Hackathon Execution",
];

export default function BeyondCodeAndEducation() {
  return (
    <>
      {/* ── Beyond Code ─────────────────────────────── */}
      <section
        id="beyond-code"
        className="relative w-full py-28"
        style={{ background: "linear-gradient(180deg, #F2EFE6 0%, #E8E3D8 100%)" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-bebas text-[22vw] leading-none text-black/[0.04] select-none whitespace-nowrap pointer-events-none">
          BEYOND CODE
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#3D8361] mb-3">MULTIDISCIPLINARY</p>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-[#171614] leading-none">Beyond Code</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quads.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/80 border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:shadow-black/5 transition-all hover:-translate-y-1 relative overflow-hidden group"
                >
                  <span className="absolute -bottom-4 -right-4 font-bebas text-[90px] leading-none text-black/[0.04] select-none" />
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl" style={{ background: `${q.accent}20`, border: `1px solid ${q.accent}40` }}>
                      <Icon className="w-6 h-6" style={{ color: q.accent }} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: q.accent, borderColor: `${q.accent}40`, background: `${q.accent}12` }}>
                      {q.tag}
                    </span>
                  </div>
                  <h3 className="font-bebas text-3xl tracking-wider text-[#171614] mb-3">{q.title}</h3>
                  <p className="font-outfit text-[#555] text-base leading-relaxed">{q.desc}</p>
                  <div className="mt-6 pt-4 border-t border-black/5 font-mono text-[10px] text-[#7C8BA3] flex justify-end">
                    <span style={{ color: q.accent }}>ACTIVE →</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Education ─────────────────────────────── */}
      <section id="education" className="relative w-full bg-[#060D1E] py-28 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#2B6FFF] mb-3">ACADEMIC FOUNDATION</p>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white leading-none">Education</h2>
            <div className="h-px bg-white/10 mt-6" />
          </motion.div>

          {/* Degree banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A1628]/80 border border-white/10 rounded-3xl p-8 md:p-12 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
            style={{ boxShadow: "0 0 60px rgba(43,111,255,0.1)" }}
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full font-mono text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/30">2023 — 2027</span>
                  <span className="px-3 py-1 rounded-full font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-emerald-400" /> CGPA: 9.11
                  </span>
                </div>
                <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-white">B.Tech Computer Science & Engineering</h3>
                <p className="font-mono text-sm text-[#00C49A] mt-1">Specialization in Gaming Technology</p>
                <p className="font-mono text-xs text-[#7C8BA3] mt-2">SRM University, Ramapuram · Chennai, India</p>
              </div>
            </div>
          </motion.div>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0A1628]/60 border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h4 className="font-bebas text-2xl tracking-wider text-white">University Core</h4>
              </div>
              <ul className="space-y-3">
                {univCore.map(t => (
                  <li key={t} className="flex items-center gap-3 font-mono text-sm text-[#7C8BA3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#001A0A]/60 border border-[#00C49A]/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-5 h-5 text-[#00C49A]" />
                <h4 className="font-bebas text-2xl tracking-wider text-white">Self-Taught</h4>
              </div>
              <ul className="space-y-3">
                {selfTaught.map(t => (
                  <li key={t} className="flex items-center gap-3 font-mono text-sm text-[#7C8BA3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C49A] flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
