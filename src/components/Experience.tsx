"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Glasses, Film, Award, GitBranch, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface TimelineNode {
  title: string;
  role: string;
  company: string;
  location: string;
  period: string;
  tag: string;
  icon: typeof Glasses;
  accent: string;
  secondary: string;
  glow: string;
  skills: string[];
  responsibilities: string[];
}

const experienceTree: TimelineNode[] = [
  {
    title: "AR / VR Spatial Engineering",
    role: "AR/VR Developer Intern",
    company: "SVCE",
    location: "Chennai, India",
    period: "June 2025 – July 2025",
    tag: "SPATIAL COMPUTING",
    icon: Glasses,
    accent: "#2B6FFF",
    secondary: "#60A5FA",
    glow: "rgba(43,111,255,0.4)",
    skills: ["Unity", "Unreal Engine", "Blender", "Oculus SDK", "C#"],
    responsibilities: [
      "Built collaborative AR/VR projects using Unity, Unreal Engine, and Blender across the full development lifecycle.",
      "Tested and validated immersive applications on Oculus VR hardware to ensure 90fps stability and zero motion sickness.",
      "Engineered realistic physics simulations and spatial audio integration for immersive user engagement.",
    ],
  },
  {
    title: "Creative Media & Editorial Direction",
    role: "Chief Video Editor",
    company: "Andropedia SRMIST Ramapuram",
    location: "Chennai, India",
    period: "January 2025 – July 2025",
    tag: "MEDIA LEADERSHIP",
    icon: Film,
    accent: "#00C49A",
    secondary: "#34D399",
    glow: "rgba(0,196,154,0.4)",
    skills: ["Video Production", "Sound Design", "Visual Storytelling", "Brand Direction"],
    responsibilities: [
      "Served as Chief Video Editor for 7 months, leading all media production and cinematic event documentation.",
      "Directed pacing, visual hierarchy, motion graphics, and audio mixing for campus-wide promotional campaigns.",
      "Enhanced club digital presence resulting in 300%+ increase in audience engagement across releases.",
    ],
  },
  {
    title: "Extended Reality Research & Publications",
    role: "Lead XR Researcher & Author",
    company: "AstralThesis'26 & ICICRCET'25",
    location: "Chennai, India",
    period: "2025 – 2026",
    tag: "ACADEMIC HONORS",
    icon: Award,
    accent: "#FFCB5B",
    secondary: "#FBBF24",
    glow: "rgba(255,203,91,0.4)",
    skills: ["Research Methodology", "XR Systems", "Technical Writing", "Academic Presentation"],
    responsibilities: [
      "Authored and presented 'Immersive Extended Reality Framework for Safe and Scalable Mechanical Workshop Skill Development' winning Best Paper Award.",
      "Co-authored 'iLab' at the International Conference on Innovative Computing, Robotics & Control Engineering Technologies winning Best Paper Award.",
      "Bridged theoretical spatial computing with practical industrial training architectures.",
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const trunkScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#050B18] py-32 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Forest / Cosmic Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00C49A]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#00C49A] font-semibold flex items-center justify-center gap-2">
            <GitBranch className="w-4 h-4 text-[#2B6FFF]" />
            EVOLUTIONARY GROWTH TIMELINE
          </span>
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white mt-2 leading-none">
            Experience <span className="grad-text">Tree</span>
          </h2>
          <p className="font-outfit text-[#7C8BA3] text-base md:text-lg mt-4">
            An interactive timeline showing the branching expansion of my engineering, leadership, and research roles.
          </p>
        </div>

        {/* Tree Timeline Structure */}
        <div className="relative py-8">
          
          {/* Central Growing Tree Trunk (Animated) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -ml-1 w-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: trunkScale, transformOrigin: "top center" }}
              className="w-full h-full bg-gradient-to-b from-blue-500 via-teal-400 to-amber-400 shadow-[0_0_20px_rgba(43,111,255,0.8)]"
            />
          </div>

          {/* Timeline Nodes & Sprouting Branches */}
          <div className="space-y-24 relative">
            {experienceTree.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between"
                >
                  {/* Central Sprouting Node Bud on Trunk */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-20"
                  >
                    <div
                      className="w-10 h-10 rounded-full border-2 bg-[#03060F] flex items-center justify-center shadow-lg transition-transform hover:scale-125"
                      style={{
                        borderColor: item.accent,
                        boxShadow: `0 0 25px ${item.glow}`,
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full animate-ping"
                        style={{ background: item.accent }}
                      />
                    </div>
                  </motion.div>

                  {/* Left Column (Content if Even, Period if Odd on Desktop) */}
                  <div
                    className={`pl-16 md:pl-0 w-full md:w-[45%] ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#091528]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                      style={{
                        boxShadow: `0 10px 40px -10px ${item.glow}`,
                      }}
                    >
                      {/* Branch Top Bar */}
                      <div
                        className={`flex flex-wrap items-center gap-3 mb-4 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span
                          className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border"
                          style={{
                            color: item.accent,
                            borderColor: `${item.accent}50`,
                            background: `${item.accent}15`,
                          }}
                        >
                          {item.tag}
                        </span>
                        <span className="flex items-center gap-1.5 font-mono text-xs text-[#7C8BA3]">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-white leading-none mb-1 group-hover:text-glow-white transition-all">
                        {item.role}
                      </h3>
                      <p
                        className="font-mono text-sm font-semibold mb-6 flex items-center gap-2"
                        style={{
                          color: item.secondary,
                          justifyContent: isEven ? "flex-end" : "flex-start",
                        }}
                      >
                        <span>{item.company}</span>
                        <span>&bull;</span>
                        <span className="text-[#7C8BA3] font-normal">{item.location}</span>
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-3 mb-6">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className={`flex items-start gap-2.5 text-sm text-[#CBD5E1] font-outfit leading-relaxed ${
                              isEven ? "md:flex-row-reverse md:text-right" : "text-left"
                            }`}
                          >
                            <CheckCircle2
                              className="w-4 h-4 flex-shrink-0 mt-1"
                              style={{ color: item.accent }}
                            />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Leaf Badges */}
                      <div
                        className={`flex flex-wrap gap-2 pt-4 border-t border-white/10 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full font-mono text-[10px] bg-white/5 border border-white/10 text-white/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column (Placeholder or Period Badge) */}
                  <div
                    className={`hidden md:flex w-[45%] items-center ${
                      isEven
                        ? "justify-start pl-12"
                        : "justify-end pr-12 order-1"
                    }`}
                  >
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
