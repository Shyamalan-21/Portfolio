"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Sparkles, Database, ShieldCheck, Cpu } from "lucide-react";

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
  const [activeProject, setActiveProject] = useState<number>(0);
  const railRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    railRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    railRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative w-full bg-[#03060F] py-32 overflow-hidden">
      
      {/* Dynamic Background Glow reacting to active project */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ background: projects[activeProject]?.accent || "#2B6FFF" }}
      />

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

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] mr-2">
              SCROLL TO EXPLORE
            </span>
            <button
              onClick={scrollLeft}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105"
              aria-label="Scroll left"
              data-hover="true"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:scale-105"
              aria-label="Scroll right"
              data-hover="true"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right-Aligned Horizontal Scroll Rail with Pulling String / Accordion Expand Effect */}
      <div
        ref={railRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-12 pt-2 scrollbar-none items-stretch"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, idx) => {
          const isActive = activeProject === idx;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveProject(idx)}
              style={{
                scrollSnapAlign: "start",
                background: project.bg,
                borderColor: isActive ? project.accent : "rgba(255,255,255,0.08)",
                boxShadow: isActive ? `0 0 45px ${project.glow}` : "none",
                height: "600px",
              }}
              className={`relative rounded-[32px] border cursor-pointer overflow-hidden flex flex-col justify-between flex-shrink-0 transition-[width,border-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[width] ${
                isActive
                  ? "w-[90vw] sm:w-[580px] lg:w-[680px] p-8 md:p-10"
                  : "w-[280px] sm:w-[320px] p-6 md:p-8 opacity-75 hover:opacity-100"
              }`}
            >
              {/* Colored Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${project.accent}, ${project.secondaryAccent})`,
                  opacity: isActive ? 1 : 0.3,
                }}
              />

              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}50`,
                        background: `${project.accent}15`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#7C8BA3] uppercase tracking-widest">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-bebas text-4xl md:text-5xl tracking-wide text-white leading-none mb-2">
                  {project.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider mb-6" style={{ color: project.secondaryAccent }}>
                  {project.subtitle}
                </p>
                <p className="font-outfit text-[#94A3B8] text-base leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Expandable Architecture & Highlights Drawer */}
              <div
                className={`overflow-hidden space-y-5 pt-4 border-t border-white/10 transition-all duration-400 ease-out ${
                  isActive ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 pointer-events-none"
                }`}
              >
                {/* Architecture Pill */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#7C8BA3] mb-1">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>Core Architecture</span>
                  </div>
                  <p className="font-mono text-xs text-white font-medium">
                    {project.architecture}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#7C8BA3]">
                    Key Highlights:
                  </p>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1] font-outfit">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.accent }}
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack & CTA */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full font-mono text-[10px] bg-white/5 border border-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-outfit font-semibold text-sm transition-all hover:scale-105"
                  style={{ color: project.accent }}
                  data-hover="true"
                >
                  <span>Explore Repository</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
