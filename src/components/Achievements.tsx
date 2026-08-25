"use client";

import { useState } from "react";
import { Award, ScrollText, Trophy, Sparkles, CheckCircle2, Lightbulb, Cpu, ExternalLink, LucideIcon } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  org: string;
  location: string;
  date: string;
  icon: LucideIcon;
  badge: string;
  accent: string;
  secondary: string;
  glow: string;
  bg: string;
  desc: string;
  link?: string;
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
    link: "https://www.ijcrt.org/papers/IJCRTBX02031.pdf",
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
    link: "http://www.ijcrt.org/papers/IJCRTBG02011.pdf",
    impactPoints: [
      "Engineered real-time virtual laboratory collaboration protocols",
      "Published in peer-reviewed conference proceedings with international peer review",
      "Recognized for innovation in computational simulation architectures",
    ],
  },
  {
    id: "03",
    title: "Top 5 Finalist — Innovest Ideathon",
    org: "Innovest Challenge",
    location: "Chennai, India",
    date: "2025",
    icon: Lightbulb,
    badge: "NATIONAL IDEATHON",
    accent: "#38BDF8",
    secondary: "#7DD3FC",
    glow: "rgba(56,189,248,0.35)",
    bg: "linear-gradient(145deg, #041B2D 0%, #020C17 100%)",
    desc: "Competed in the Innovest Ideathon, pitching innovative tech-driven product solutions and successfully placing in the Top 5 among competitive teams.",
    link: "https://www.linkedin.com/posts/shyamalanv_had-an-incredible-experience-at-innovest-activity-7363850361964519426-tCm9",
    impactPoints: [
      "Formulated end-to-end technical product architecture and market validation strategy",
      "Delivered live solution pitch to executive jury panels to secure Top 5 finalist placement",
      "Recognized for rapid prototyping and human-centric engineering design",
    ],
  },
  {
    id: "04",
    title: "4th Place — Project Day Showcase",
    org: "Project Day Expo",
    location: "Chennai, India",
    date: "2025",
    icon: Cpu,
    badge: "PROJECT EXPO",
    accent: "#F43F5E",
    secondary: "#FB7185",
    glow: "rgba(244,63,94,0.35)",
    bg: "linear-gradient(145deg, #2A0814 0%, #150208 100%)",
    desc: "Showcased IoT & Smart Home Automation system featuring embedded sensor telemetry, automated environmental controls, and real-time cloud analytics to win 4th place.",
    link: "https://www.linkedin.com/posts/shyamalanv_iot-homeautomation-smartsystems-activity-7327149039991357441-IWCt",
    impactPoints: [
      "Designed live hardware demonstration with real-time sensor streams and automated controls",
      "Secured 4th place against competitive cross-departmental engineering projects",
      "Integrated secure cloud telemetry dashboards for remote monitoring",
    ],
  },
  {
    id: "05",
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="achievements" className="relative w-full bg-[#050A14] py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#A78BFA] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              HONORS, AWARDS & RECOGNITION
            </span>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white mt-2 leading-none">
              Awards & <span className="grad-text">Achievements</span>
            </h2>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] flex items-center gap-2">
            <span>HOVER AWARDS TO EXPAND</span>
            <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
          </div>
        </div>
      </div>

      {/* Smooth Expandable Accordion Card Deck */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div
          onMouseLeave={() => setHoveredId(null)}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-6 scrollbar-none items-stretch"
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onClick={() => setHoveredId(isHovered ? null : item.id)}
                style={{
                  background: item.bg,
                  borderColor: isHovered ? `${item.accent}80` : "rgba(255,255,255,0.12)",
                  boxShadow: isHovered ? `0 20px 50px -10px ${item.glow}` : "none",
                }}
                className={`h-[490px] rounded-3xl border relative overflow-hidden transition-[width,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] flex-shrink-0 cursor-pointer ${
                  isHovered
                    ? "w-[88vw] sm:w-[540px] lg:w-[600px] p-7 md:p-8"
                    : "w-[85px] sm:w-[100px] lg:w-[120px] p-4 hover:border-white/30"
                }`}
              >
                {/* Top Colored Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300"
                  style={{ background: item.accent }}
                />

                {/* ─── MINIMIZED VERTICAL TITLE LAYER ─── */}
                <div
                  className={`absolute inset-0 p-5 flex flex-col items-center justify-between transition-opacity duration-300 ease-in-out select-none ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span
                    className="font-mono text-sm font-bold tracking-wider"
                    style={{ color: item.accent }}
                  >
                    {item.id}
                  </span>

                  <div
                    className="font-bebas text-2xl lg:text-3xl tracking-widest text-white/85 uppercase whitespace-nowrap rotate-180"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {item.title}
                  </div>

                  <div
                    className="p-2.5 rounded-xl border"
                    style={{
                      background: `${item.accent}15`,
                      borderColor: `${item.accent}40`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: item.accent }} />
                  </div>
                </div>

                {/* ─── MAXIMIZED EXPANDED CONTENT LAYER ─── */}
                <div
                  className={`w-full h-full flex flex-col justify-between transition-all duration-500 ease-out ${
                    isHovered
                      ? "opacity-100 translate-x-0 delay-100"
                      : "opacity-0 translate-x-3 pointer-events-none"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="p-3 rounded-2xl border"
                        style={{
                          background: `${item.accent}15`,
                          borderColor: `${item.accent}40`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.accent }} />
                      </div>

                      <span
                        className="px-3.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border font-semibold"
                        style={{
                          color: item.accent,
                          borderColor: `${item.accent}50`,
                          background: `${item.accent}15`,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-[#7C8BA3] uppercase tracking-wider mb-2 font-medium">
                      {item.org} &bull; {item.location} &bull; {item.date}
                    </p>

                    <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-white leading-none mb-3">
                      {item.title}
                    </h3>

                    <p className="font-outfit text-sm text-[#CBD5E1] leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Impact Points */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-[#7C8BA3] font-semibold">
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

                  {/* Card Bottom CTA / Status */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border transition-all hover:scale-105 active:scale-95 font-semibold"
                        style={{ color: item.accent, borderColor: `${item.accent}40` }}
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[#7C8BA3]">VERIFIED ENTRY</span>
                    )}

                    <span style={{ color: item.accent }} className="font-semibold uppercase tracking-wider">
                      HONORED RECOGNITION
                    </span>
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
