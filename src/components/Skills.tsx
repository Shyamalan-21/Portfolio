"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Layers,
  Sparkles,
  Database,
  Glasses,
  Cpu,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const row1 = [
  { label: "Python", color: "#FFD43B" },
  { label: "Java", color: "#ED8B00" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "React", color: "#61DAFB" },
  { label: "Next.js 15", color: "#FFFFFF" },
  { label: "FastAPI", color: "#00C49A" },
  { label: "LangGraph", color: "#A78BFA" },
  { label: "Three.js", color: "#60A5FA" },
  { label: "PostgreSQL", color: "#336791" },
  { label: "Docker", color: "#2496ED" },
  { label: "Unity", color: "#C8C8C8" },
  { label: "Blender", color: "#F4792B" },
];

const row2 = [
  { label: "Framer Motion", color: "#FF4785" },
  { label: "Redis", color: "#FF4438" },
  { label: "Google Gemini", color: "#4285F4" },
  { label: "OpenAI GPT-4o", color: "#10A37F" },
  { label: "Groq (Llama 3.3)", color: "#FF8C42" },
  { label: "Unreal Engine", color: "#9E9E9E" },
  { label: "Oculus SDK", color: "#8B9098" },
  { label: "MySQL", color: "#4479A1" },
  { label: "Git / GitHub", color: "#F05032" },
  { label: "System Design", color: "#00C49A" },
  { label: "JWT Auth", color: "#FFCB5B" },
  { label: "C / C++", color: "#9E9E9E" },
];

const skillCategories = [
  {
    id: "01",
    title: "Programming Languages",
    icon: Code2,
    accent: "#2B6FFF",
    desc: "Core computational foundations with strong mastery over object-oriented design and typing.",
    skills: [
      { name: "Python", level: "95%" },
      { name: "Java", level: "92%" },
      { name: "JavaScript / TypeScript", level: "90%" },
      { name: "C / C++", level: "85%" },
      { name: "HTML5 / CSS3", level: "95%" },
    ],
  },
  {
    id: "02",
    title: "Frameworks & Frontend",
    icon: Layers,
    accent: "#00C49A",
    desc: "Architecting responsive, 60fps cinematic web apps and performant REST APIs.",
    skills: [
      { name: "React 19", level: "95%" },
      { name: "Next.js 15 (App Router)", level: "92%" },
      { name: "FastAPI", level: "90%" },
      { name: "Tailwind CSS v4", level: "95%" },
      { name: "Framer Motion & Three.js", level: "88%" },
    ],
  },
  {
    id: "03",
    title: "AI, LLMs & Agents",
    icon: Sparkles,
    accent: "#FFCB5B",
    desc: "Building stateful multi-agent workflows, explainable AI, and multimodal pipelines.",
    skills: [
      { name: "LangGraph Stateful Agents", level: "90%" },
      { name: "Google Gemini API (Glowy)", level: "92%" },
      { name: "OpenAI GPT-4o Integration", level: "90%" },
      { name: "Groq (Llama 3.3 Inference)", level: "88%" },
      { name: "SHAP-style Explainability", level: "85%" },
    ],
  },
  {
    id: "04",
    title: "AR / VR & 3D Spatial",
    icon: Glasses,
    accent: "#A78BFA",
    desc: "Immersive virtual reality simulations, real-time 3D rendering, and hardware testing.",
    skills: [
      { name: "Unity 3D Engine", level: "90%" },
      { name: "Unreal Engine 5", level: "82%" },
      { name: "Blender 3D Modeling", level: "88%" },
      { name: "Oculus VR SDK", level: "85%" },
      { name: "Spatial Physics & Audio", level: "85%" },
    ],
  },
  {
    id: "05",
    title: "Databases & Cloud",
    icon: Database,
    accent: "#38BDF8",
    desc: "Relational modeling, high-speed in-memory caching, and container orchestration.",
    skills: [
      { name: "PostgreSQL", level: "90%" },
      { name: "MySQL", level: "88%" },
      { name: "Redis In-Memory Cache", level: "85%" },
      { name: "Docker & Docker Compose", level: "88%" },
      { name: "Database Seeding & Migrations", level: "90%" },
    ],
  },
  {
    id: "06",
    title: "Architecture & Systems",
    icon: Cpu,
    accent: "#F43F5E",
    desc: "Designing secure, maintainable software systems with clean decoupled boundaries.",
    skills: [
      { name: "REST API Design", level: "95%" },
      { name: "JWT Session Auth", level: "92%" },
      { name: "Object-Oriented Design", level: "95%" },
      { name: "Git / GitHub Workflows", level: "95%" },
      { name: "Data Structures & Algos", level: "92%" },
    ],
  },
];

function MarqueeRow({ items, dir }: { items: typeof row1; dir: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex gap-4 w-max ${
          dir === "left"
            ? "animate-[marqueeLeft_28s_linear_infinite]"
            : "animate-[marqueeRight_28s_linear_infinite]"
        }`}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="flex-shrink-0 px-5 py-2.5 rounded-full font-mono text-xs tracking-wide border transition-transform hover:scale-110"
            style={{
              color: skill.color,
              borderColor: `${skill.color}40`,
              background: `${skill.color}12`,
              textShadow: `0 0 15px ${skill.color}60`,
            }}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="relative w-full bg-[#050A14] py-32 overflow-hidden border-t border-white/5">
      
      {/* Glow Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 relative z-10">
        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#00C49A] font-semibold">
          CAPABILITIES & TECHNICAL TOOLKIT
        </span>
        <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white mt-2 leading-none">
          Skills & <span className="grad-text">Stack</span>
        </h2>
      </div>

      {/* ── Opposite Sliding Horizontal Marquees ──────────── */}
      <div className="mb-14 space-y-2">
        <MarqueeRow items={row1} dir="left" />
        <MarqueeRow items={row2} dir="right" />
      </div>

      {/* ── Horizontal Scrollable Expandable Category Panels ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">


        <div
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none items-stretch"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {skillCategories.map((category, idx) => {
            const isActive = activeCategory === idx;
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                onMouseEnter={() => setActiveCategory(idx)}
                style={{
                  scrollSnapAlign: "start",
                  borderColor: isActive ? category.accent : "rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 0 35px ${category.accent}25` : "none",
                }}
                className={`relative rounded-3xl bg-[#091528]/85 backdrop-blur-md border p-8 flex flex-col justify-between flex-shrink-0 cursor-pointer transition-[width,border-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[width] ${
                  isActive
                    ? "w-[88vw] sm:w-[440px] lg:w-[480px]"
                    : "w-[260px] sm:w-[280px] opacity-75 hover:opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="p-3.5 rounded-2xl border"
                      style={{
                        background: `${category.accent}15`,
                        borderColor: `${category.accent}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.accent }} />
                    </div>
                  </div>

                  <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-white leading-none mb-3">
                    {category.title}
                  </h3>

                  <p className="font-outfit text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {category.desc}
                  </p>
                </div>

                {/* Expanded Skill Bars when Active */}
                <div
                  className={`space-y-3.5 pt-4 border-t border-white/10 overflow-hidden mb-4 transition-all duration-400 ease-out ${
                    isActive ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 pointer-events-none"
                  }`}
                >
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center font-mono text-xs text-white mb-1">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2
                            className="w-3.5 h-3.5"
                            style={{ color: category.accent }}
                          />
                          {skill.name}
                        </span>
                        <span style={{ color: category.accent }}>{skill.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: skill.level,
                            background: category.accent,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-end font-mono text-[10px] text-[#7C8BA3]">
                  <span style={{ color: category.accent }}>
                    {isActive ? "ACTIVE" : "HOVER TO EXPAND"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
