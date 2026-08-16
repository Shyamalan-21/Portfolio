"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ScrollText, Trophy, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  org: string;
  location: string;
  date: string;
  icon: typeof Award;
  badge: string;
  accent: string;
  secondary: string;
  glow: string;
  bg: string;
  desc: string;
  impactPoints: string[];
}

const achievements: Achievement[] = [
  {
    id: "01",
    title: "Best Paper Award — AstralThesis'26",
    org: "RMK College of Engineering",
    location: "Chennai, India",
    date: "January 2026",
    icon: Award,
    badge: "RESEARCH PAPER AWARD",
    accent: "#FFCB5B",
    secondary: "#FBBF24",
    glow: "rgba(255,203,91,0.35)",
    bg: "linear-gradient(145deg, #241A04 0%, #140E00 100%)",
    desc: "Authored and presented 'Immersive Extended Reality Framework for Safe and Scalable Mechanical Workshop Skill Development' and won the prestigious Best Paper Award.",
    impactPoints: [
      "Designed an interactive VR simulation for hazardous industrial lathe & milling training",
      "Benchmarked learner safety and skill retention rates against conventional workshops",
      "Validated with students and faculty on Oculus VR hardware",
    ],
  },
  {
    id: "02",
    title: "Best Paper Award — ICICRCET'25",
    org: "SVCE (International Conference)",
    location: "Chennai, India",
    date: "May 2025",
    icon: ScrollText,
    badge: "INTERNATIONAL CONFERENCE",
    accent: "#A78BFA",
    secondary: "#C084FC",
    glow: "rgba(167,139,250,0.35)",
    bg: "linear-gradient(145deg, #1C0A2E 0%, #0E0419 100%)",
    desc: "Co-authored the research paper 'iLab' at the International Conference on Innovative Computing, Robotics & Control Engineering Technologies and received the Best Paper Award.",
    impactPoints: [
      "Engineered real-time virtual laboratory collaboration protocols",
      "Published in peer-reviewed conference proceedings with international peer review",
      "Recognized for innovation in computational simulation architectures",
    ],
  },
  {
    id: "03",
    title: "Domain Prize — Hackxelerate'25",
    org: "KPRIET",
    location: "Coimbatore, India",
    date: "April 2025",
    icon: Trophy,
    badge: "NATIONAL HACKATHON",
    accent: "#00C49A",
    secondary: "#34D399",
    glow: "rgba(0,196,154,0.35)",
    bg: "linear-gradient(145deg, #002418 0%, #00120D 100%)",
    desc: "Competed in Hackxelerate'25, a national level 24-hour hackathon with 1,200+ students and 300+ teams, and single-handedly designed and built a complete 3D college block from scratch.",
    impactPoints: [
      "Single-handedly 3D modeled an entire campus architectural block in under 24 hours",
      "Stood out as the defining technical anchor of the Smart Campus solution",
      "Selected as top winner across national participant pool",
    ],
  },
];

export default function Achievements() {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section id="achievements" className="relative bg-[#050A14] py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 relative z-10">
        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#A78BFA] font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          HONORS, AWARDS & RECOGNITION
        </span>
        <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white mt-2 leading-none">
          Awards & <span className="grad-text">Achievements</span>
        </h2>
      </div>

      {/* ── Horizontal Scrollable Expandable Award Drawers ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">


        <div
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none items-stretch"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {achievements.map((item, idx) => {
            const isActive = activeItem === idx;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveItem(idx)}
                style={{
                  scrollSnapAlign: "start",
                  background: item.bg,
                  borderColor: isActive ? item.accent : "rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 0 45px ${item.glow}` : "none",
                }}
                className={`relative rounded-3xl border p-8 flex flex-col justify-between flex-shrink-0 cursor-pointer transition-[width,border-color,box-shadow,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[width] ${
                  isActive
                    ? "w-[90vw] sm:w-[520px] lg:w-[560px]"
                    : "w-[280px] sm:w-[300px] opacity-75 hover:opacity-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="p-3.5 rounded-2xl border"
                      style={{
                        background: `${item.accent}15`,
                        borderColor: `${item.accent}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.accent }} />
                    </div>

                    <span
                      className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border"
                      style={{
                        color: item.accent,
                        borderColor: `${item.accent}50`,
                        background: `${item.accent}15`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-[#7C8BA3] uppercase tracking-wider mb-2">
                    {item.org} &bull; {item.location} &bull; {item.date}
                  </p>

                  <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-white leading-none mb-4">
                    {item.title}
                  </h3>

                  <p className="font-outfit text-sm text-[#CBD5E1] leading-relaxed mb-6 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Expanded Impact Points */}
                <div
                  className={`space-y-2.5 pt-4 border-t border-white/10 overflow-hidden mb-4 transition-all duration-400 ease-out ${
                    isActive ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[#7C8BA3]">
                    Key Deliverables & Accolades:
                  </p>
                  {item.impactPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1] font-outfit">
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: item.accent }}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-end font-mono text-[10px] text-[#7C8BA3]">
                  <span style={{ color: item.accent }}>
                    {isActive ? "FEATURED RECOGNITION" : "HOVER TO EXPAND"}
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
