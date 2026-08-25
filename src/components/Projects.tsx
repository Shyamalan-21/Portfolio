"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles, Cpu, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  year: string;
  description: string;
  highlights: string[];
  architecture: string;
  tech: string[];
  accent: string;
  secondaryAccent: string;
  glow: string;
  bg: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "VeriTrust-AI",
    category: "AI & MULTI-AGENT ENGINE",
    subtitle: "Developer Credibility Scoring Architecture",
    year: "2025",
    description:
      "An enterprise-grade credibility scoring engine aggregating multi-platform data into a mathematically verified 0–100 Trust Score using stateful LangGraph pipelines.",
    highlights: [
      "Stateful LangGraph nodes for data harvesting, fraud detection & bias auditing",
      "SHAP-style explainability engine providing transparent factor weighting",
      "Interactive dashboard with SVG score gauges and threat indicators",
    ],
    architecture: "LangGraph Multi-Agent • SHAP Explainability • FastAPI • PostgreSQL",
    tech: ["LangGraph", "FastAPI", "React", "Docker", "PostgreSQL", "Tailwind"],
    accent: "#2B6FFF",
    secondaryAccent: "#60A5FA",
    glow: "rgba(43,111,255,0.35)",
    bg: "linear-gradient(145deg, #09172E 0%, #061021 100%)",
    link: "https://github.com/Shyamalan-21",
  },
  {
    id: "02",
    title: "Bizpulse",
    category: "FINTECH & SAAS PLATFORM",
    subtitle: "Real-Time Freelance Financial Ecosystem",
    year: "2025",
    description:
      "A complete full-stack SaaS platform empowering freelancers with GST compliant invoicing, automated expense tracking, and real-time cash flow predictive analytics.",
    highlights: [
      "Docker Compose orchestration spanning Postgres, Redis, AI service & frontend",
      "JWT stateless session security with automated database seeding",
      "Real-time revenue forecast charts with automated GST calculation engine",
    ],
    architecture: "Docker Compose • Redis Cache • Next.js 15 • PostgreSQL • JWT Auth",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker Compose", "Tailwind"],
    accent: "#00C49A",
    secondaryAccent: "#34D399",
    glow: "rgba(0,196,154,0.35)",
    bg: "linear-gradient(145deg, #001F16 0%, #00120D 100%)",
    link: "https://github.com/Shyamalan-21",
  },
  {
    id: "03",
    title: "Beaute-AI",
    category: "COMPUTER VISION & AI",
    subtitle: "Intelligent Beauty Consultation Platform",
    year: "2024",
    description:
      "A premium AI-driven salon directory and interactive consultation platform featuring computer vision face-shape scanning and Google Gemini conversational intelligence.",
    highlights: [
      "Facial geometry scanning for bespoke hairstyle & skincare matching",
      "Conversational Gemini AI assistant ('Glowy') for structured beauty advice",
      "Automated salon review summarizer with Pros / Cons / Verdict matrices",
    ],
    architecture: "Google Gemini API • Computer Vision • Python • FastAPI • React",
    tech: ["React", "Gemini API", "FastAPI", "Python", "MySQL", "Tailwind"],
    accent: "#FFCB5B",
    secondaryAccent: "#FBBF24",
    glow: "rgba(255,203,91,0.35)",
    bg: "linear-gradient(145deg, #241700 0%, #140C00 100%)",
    link: "https://github.com/Shyamalan-21",
  },
  {
    id: "04",
    title: "iLab XR Simulation",
    category: "SPATIAL COMPUTING & VR",
    subtitle: "Safe Mechanical Workshop Training Framework",
    year: "2025 - 2026",
    description:
      "Award-winning immersive Extended Reality (XR) framework built on Unity and Oculus hardware for hazardous workshop training, published and recognized at international conferences.",
    highlights: [
      "Awarded Best Paper at AstralThesis'26 & ICICRCET'25 International Conferences",
      "High-fidelity 3D interactive machinery simulations validated on Oculus VR",
      "Full lifecycle spatial development in Unity, Unreal Engine & Blender",
    ],
    architecture: "Unity 3D • Oculus SDK • Blender • Unreal Engine • C#",
    tech: ["Unity", "Oculus SDK", "Blender", "Unreal Engine", "C#"],
    accent: "#A78BFA",
    secondaryAccent: "#C084FC",
    glow: "rgba(167,139,250,0.35)",
    bg: "linear-gradient(145deg, #1C0A2E 0%, #0E0419 100%)",
    link: "https://github.com/Shyamalan-21",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative w-full bg-[#03060F] py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />

      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#2B6FFF] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00C49A]" />
              SELECTED ENGINEERING WORK
            </span>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white mt-2 leading-none">
              Featured <span className="grad-text">Projects</span>
            </h2>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] flex items-center gap-2">
            <span>HOVER CARDS TO EXPAND</span>
            <span className="w-2 h-2 rounded-full bg-[#00C49A] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Smooth Expandable Accordion Card Deck */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          onMouseLeave={() => setHoveredId(null)}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none items-stretch"
        >
          {projects.map((project) => {
            const isHovered = hoveredId === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onClick={() => setHoveredId(isHovered ? null : project.id)}
                style={{
                  background: project.bg,
                  borderColor: isHovered ? `${project.accent}80` : "rgba(255,255,255,0.12)",
                  boxShadow: isHovered ? `0 20px 50px -10px ${project.glow}` : "none",
                }}
                className={`h-[540px] rounded-[32px] border relative overflow-hidden transition-[width,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] flex-shrink-0 cursor-pointer ${
                  isHovered
                    ? "w-[90vw] sm:w-[560px] lg:w-[620px] p-7 md:p-8"
                    : "w-[85px] sm:w-[95px] lg:w-[110px] p-4 hover:border-white/25"
                }`}
              >
                {/* Top Colored Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${project.accent}, ${project.secondaryAccent})`,
                  }}
                />

                {/* ─── MINIMIZED VERTICAL TITLE LAYER (Fades smoothly out on hover) ─── */}
                <div
                  className={`absolute inset-0 p-5 flex flex-col items-center justify-between transition-opacity duration-300 ease-in-out select-none ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span
                    className="font-mono text-sm font-bold tracking-wider"
                    style={{ color: project.accent }}
                  >
                    {project.id}
                  </span>

                  <div
                    className="font-bebas text-2xl lg:text-3xl tracking-widest text-white/85 uppercase whitespace-nowrap rotate-180"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {project.title}
                  </div>

                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: `${project.accent}50`,
                      background: `${project.accent}15`,
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4" style={{ color: project.accent }} />
                  </div>
                </div>

                {/* ─── MAXIMIZED EXPANDED CONTENT LAYER (w-full to eliminate dead space) ─── */}
                <div
                  className={`w-full h-full flex flex-col justify-between transition-all duration-500 ease-out ${
                    isHovered
                      ? "opacity-100 translate-x-0 delay-100"
                      : "opacity-0 translate-x-3 pointer-events-none"
                  }`}
                >
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <span
                        className="px-3.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border font-semibold"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}50`,
                          background: `${project.accent}15`,
                        }}
                      >
                        {project.category}
                      </span>

                      <span className="font-mono text-xs text-[#7C8BA3] uppercase tracking-widest font-semibold">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-bebas text-4xl md:text-5xl tracking-wide text-white leading-none mb-1">
                      {project.title}
                    </h3>
                    <p
                      className="font-mono text-xs uppercase tracking-wider mb-3 font-semibold"
                      style={{ color: project.secondaryAccent }}
                    >
                      {project.subtitle}
                    </p>
                    <p className="font-outfit text-[#94A3B8] text-sm md:text-base leading-relaxed mb-3 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Architecture & Highlights */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#7C8BA3] mb-1">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span>Core Architecture</span>
                      </div>
                      <p className="font-mono text-xs text-white font-medium">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#CBD5E1] font-outfit">
                          <CheckCircle2
                            className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                            style={{ color: project.accent }}
                          />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer: Tech Stack & CTA */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full font-mono text-[10px] bg-white/5 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-outfit font-semibold text-xs md:text-sm transition-all hover:scale-105"
                      style={{ color: project.accent }}
                      data-hover="true"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
