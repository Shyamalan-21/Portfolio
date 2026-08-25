"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Compass, Heart, Rocket } from "lucide-react";

const aboutLines = [
  { word: "Software.", color: "#60A5FA", desc: "Production-ready architectures & reactive frontends" },
  { word: "Interactive Experiences.", color: "#00C49A", desc: "Fluid 60fps animations & spatial web interfaces" },
  { word: "AI Pipelines.", color: "#FFCB5B", desc: "Stateful LangGraph agents & LLM integrations" },
  { word: "AR / VR Worlds.", color: "#FF4D6A", desc: "Unity & Oculus spatial computing simulations" },
  { word: "Ideas Into Reality.", color: "#A78BFA", desc: "Rapid prototyping & award-winning execution" },
];

const chapters = [
  {
    num: "01",
    icon: Compass,
    heading: "How I Think",
    body: "Engineering decisions are design decisions. I believe the best products live at the intersection of robust code and intuitive interfaces. I don't just ship features — I craft experiences.",
    accent: "#2B6FFF",
    tag: "DESIGN & LOGIC",
  },
  {
    num: "02",
    icon: Heart,
    heading: "What I Love",
    body: "Obsessing over micro-interactions, smooth 60fps animations, and building cinematic moments on the web. Also deeply fascinated by multi-agent AI systems and spatial computing.",
    accent: "#00C49A",
    tag: "PASSION & CRAFT",
  },
  {
    num: "03",
    icon: Rocket,
    heading: "What I'm Building",
    body: "Exploring stateful LangGraph agent pipelines, XR workshop simulations, and highly interactive frontend experiences. Currently in my final year — always learning, always shipping.",
    accent: "#FFCB5B",
    tag: "ACTIVE PURSUITS",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth optimized parallax sweep
  const bgTextX = useTransform(scrollYProgress, [0, 1], [800, -800]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F2EFE6 0%, #E8E3D8 100%)" }}
    >
      {/* Parallax Background Typography */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 text-center will-change-transform"
      >
        <span className="font-bebas text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw] leading-none text-black opacity-[0.06] tracking-[0.06em] sm:tracking-[0.1em] uppercase block whitespace-nowrap">
          CREATIVE ENGINEER &bull; ABOUT ME
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-36">

        {/* ── Top: Statement ────────────────────── */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#3D8361] mb-4 sm:mb-6 font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#00C49A]" />
            <span>DISCIPLINED CRAFTSMANSHIP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-[#171614] leading-none mb-8 md:mb-10"
          >
            I Like Building Things.
          </motion.h2>

          {/* Micro-interactive Word Pill Matrix */}
          <div className="flex flex-col gap-3 pl-4 border-l-4 border-[#171614]/15 ml-2">
            {aboutLines.map((l, i) => (
              <motion.div
                key={l.word}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group cursor-default py-1 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span
                    className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wider leading-tight transition-transform group-hover:scale-105"
                    style={{ color: l.color }}
                  >
                    {l.word}
                  </span>
                  <span className="font-outfit text-sm md:text-base text-[#666] group-hover:text-[#171614] transition-colors">
                    — {l.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Chapters with Micro-Interactions & 3D Tilt ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.heading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md border border-black/5 hover:border-black/15 rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Top Colored Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                  style={{ background: c.accent }}
                />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3 rounded-2xl border transition-transform group-hover:rotate-6"
                    style={{
                      background: `${c.accent}15`,
                      borderColor: `${c.accent}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: c.accent }} />
                  </div>
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border font-semibold"
                    style={{
                      color: c.accent,
                      borderColor: `${c.accent}40`,
                      background: `${c.accent}10`,
                    }}
                  >
                    {c.tag}
                  </span>
                </div>

                <h3 className="font-bebas text-3xl md:text-4xl tracking-wider text-[#171614] mb-4">
                  {c.heading}
                </h3>
                
                <p className="font-outfit text-[#555] group-hover:text-[#222] text-base leading-relaxed transition-colors">
                  {c.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
