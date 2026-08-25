"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Glasses,
  Film,
  ScrollText,
  GitBranch,
  Calendar,
  CheckCircle2,
  FileText,
  ExternalLink,
  LucideIcon,
  Box,
  Gamepad2,
} from "lucide-react";

interface TimelineNode {
  title: string;
  role: string;
  company: string;
  location: string;
  period: string;
  tag: string;
  icon: LucideIcon;
  accent: string;
  secondary: string;
  glow: string;
  link?: string;
  linkText?: string;
  skills: string[];
  responsibilities: string[];
}

const experienceTree: TimelineNode[] = [
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
    title: "iLab: Smart Campus Automation",
    role: "Co-Author & Systems Architect",
    company: "IJCRT (International Journal)",
    location: "Volume 13, Issue 9",
    period: "May 2025",
    tag: "IOT & CLOUD RESEARCH",
    icon: ScrollText,
    accent: "#A78BFA",
    secondary: "#C084FC",
    glow: "rgba(167,139,250,0.4)",
    link: "http://www.ijcrt.org/papers/IJCRTBG02011.pdf",
    linkText: "Read Published Paper (PDF)",
    skills: ["IoT Architecture", "Computer Vision (OpenCV)", "NFC Security", "Cloud Telemetry", "Power Optimization"],
    responsibilities: [
      "Co-authored 'iLab: A Smart Campus Lab Automation System Using Cloud' published in IJCRT (Paper ID: IJCRTBG02011).",
      "Architected automated smart lab infrastructure incorporating NFC badge security, OpenCV computer vision occupancy sensing, and gesture control overrides.",
      "Integrated real-time cloud data pipelines that reduced facility lighting and HVAC energy consumption by 30% to 40%.",
    ],
  },
  {
    title: "3D Asset Modeling & Blender Workshop",
    role: "Workshop Lead & 3D Artist",
    company: "Technical Skill Workshop",
    location: "Hands-on Technical Session",
    period: "June 2025",
    tag: "3D & BLENDER WORKSHOP",
    icon: Box,
    accent: "#F97316",
    secondary: "#FB923C",
    glow: "rgba(249,115,22,0.4)",
    link: "https://www.linkedin.com/posts/shyamalanv_3dmodeling-blender-activity-7334066094120280065-o2Kf",
    linkText: "View Workshop Post",
    skills: ["Blender 3D", "Asset Modeling", "UV Unwrapping", "PBR Texturing", "Lighting & Render Setup"],
    responsibilities: [
      "Conducted comprehensive hands-on workshop guiding students and developers through Blender 3D fundamentals and low-poly to high-poly asset modeling pipelines.",
      "Demonstrated topology optimization, UV unwrapping, material shaders, and lighting setups for game engine readiness.",
      "Mentored attendees in practical spatial asset creation for interactive virtual environments.",
    ],
  },
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
    title: "Immersive XR Workshop Framework",
    role: "Co-Author & XR Researcher",
    company: "IJCRT (International Journal)",
    location: "Volume 14, Issue 7",
    period: "June 2026",
    tag: "XR RESEARCH PUBLICATION",
    icon: ScrollText,
    accent: "#FFCB5B",
    secondary: "#FBBF24",
    glow: "rgba(255,203,91,0.4)",
    link: "https://www.ijcrt.org/papers/IJCRTBX02031.pdf",
    linkText: "Read Published Paper (PDF)",
    skills: ["Extended Reality (XR)", "Unity 3D", "Spatial Simulation", "Peer Review", "Technical Writing"],
    responsibilities: [
      "Co-authored 'Immersive Extended Reality Framework for Safe and Scalable Mechanical Workshop Skill Development' published in IJCRT (Paper ID: IJCRTBX02031).",
      "Designed interactive spatial VR training architectures for hazardous lathe and milling equipment to ensure zero-risk hands-on learning.",
      "Formulated data-driven evaluation pipelines measuring learner retention, safety adherence, and procedural mastery during simulations.",
    ],
  },
  {
    title: "Game Development & Three.js 3D Workshop",
    role: "Workshop Speaker & Web3D Developer",
    company: "Interactive Graphics Workshop",
    location: "Web3D & Interactive Tech Session",
    period: "2026",
    tag: "GAME DEV & THREE.JS",
    icon: Gamepad2,
    accent: "#06B6D4",
    secondary: "#22D3EE",
    glow: "rgba(6,182,212,0.4)",
    link: "https://www.linkedin.com/posts/shyamalanv_gamedevelopment-threejs-3dmodeling-activity-7452943556870078464-xrVG",
    linkText: "View Workshop Post",
    skills: ["Three.js", "WebGL", "Game Development", "JavaScript / TypeScript", "Shader Materials", "3D Web Graphics"],
    responsibilities: [
      "Spearheaded an intensive workshop covering interactive 3D web development, camera systems, and game mechanics using Three.js and WebGL.",
      "Walked participants through loading custom 3D models, creating real-time lighting/shadows, and structuring 60fps browser game loops.",
      "Shared best practices for memory management, asset compression, and cinematic visual styling on the web.",
    ],
  },
];

export default function Experience() {
  const treeRef = useRef<HTMLDivElement>(null);
  
  // Smooth continuous scroll tracking covering the entire height of the experience tree
  const { scrollYProgress } = useScroll({
    target: treeRef,
    offset: ["start 80%", "end 75%"],
  });

  // Buttery-smooth fluid spring physics for liquid-like tree trunk growth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.6,
    restDelta: 0.0005,
  });

  const trunkScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
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
            An interactive timeline showing the branching expansion of my engineering, leadership, research, and technical workshops.
          </p>
        </div>

        {/* Tree Timeline Structure (Tracked directly for exact on-screen pacing) */}
        <div ref={treeRef} className="relative py-8">
          
          {/* Central Smooth Growing Tree Trunk */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -ml-1 w-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY: trunkScale, transformOrigin: "top center" }}
              className="w-full h-full bg-gradient-to-b from-teal-400 via-purple-500 via-orange-400 via-blue-500 via-amber-400 to-cyan-400 shadow-[0_0_25px_rgba(0,196,154,0.9)] will-change-transform"
            />
          </div>

          {/* Timeline Nodes & Sprouting Branches */}
          <div className="space-y-24 relative">
            {experienceTree.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between"
                >
                  {/* Central Sprouting Node Bud on Trunk */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-20 will-change-transform"
                  >
                    <div
                      className="w-11 h-11 rounded-full border-2 bg-[#03060F] flex items-center justify-center shadow-lg transition-transform hover:scale-125"
                      style={{
                        borderColor: item.accent,
                        boxShadow: `0 0 25px ${item.glow}`,
                      }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                  </motion.div>

                  {/* Left Column (Content if Even, Empty on Desktop if Odd) */}
                  <div
                    className={`pl-16 md:pl-0 w-full md:w-[45%] ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 24, x: isEven ? -28 : 28 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="bg-[#091528]/85 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group will-change-transform"
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
                          className="px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest border font-semibold"
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

                      {/* Action CTA Button if available */}
                      {item.link && (
                        <div className={`pt-4 flex ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold bg-white/5 hover:bg-white/10 border transition-all hover:scale-[1.03] active:scale-[0.98] group/btn"
                            style={{ borderColor: `${item.accent}50`, color: item.accent }}
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>{item.linkText || "View Details"}</span>
                            <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Right Column (Placeholder on Desktop) */}
                  <div
                    className={`hidden md:flex w-[45%] items-center ${
                      isEven
                        ? "justify-start pl-12"
                        : "justify-end pr-12 order-1"
                    }`}
                  />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
