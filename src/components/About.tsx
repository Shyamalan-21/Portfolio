"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const aboutLines = [
  { word: "Software.", color: "#60A5FA" },
  { word: "Interactive Experiences.", color: "#00C49A" },
  { word: "AI Pipelines.", color: "#FFCB5B" },
  { word: "AR / VR Worlds.", color: "#FF4D6A" },
  { word: "Ideas Into Reality.", color: "#A78BFA" },
];

const chapters = [
  {
    num: "01",
    heading: "How I Think",
    body: "Engineering decisions are design decisions. I believe the best products live at the intersection of robust code and intuitive interfaces. I don't just ship features — I craft experiences.",
    accent: "#2B6FFF",
  },
  {
    num: "02",
    heading: "What I Love",
    body: "Obsessing over micro-interactions, smooth 60fps animations, and building cinematic moments on the web. Also deeply fascinated by multi-agent AI systems and spatial computing.",
    accent: "#00C49A",
  },
  {
    num: "03",
    heading: "What I'm Building",
    body: "Exploring stateful LangGraph agent pipelines, XR workshop simulations, and highly interactive frontend experiences. Currently in my 3rd year — always learning, always shipping.",
    accent: "#FFCB5B",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F2EFE6 0%, #E8E3D8 100%)" }}
    >
      {/* Big decorative background word */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-bebas text-[22vw] leading-none text-black/[0.04] whitespace-nowrap select-none pointer-events-none">
        ABOUT ME
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-28">

        {/* ── Top: Statement ────────────────────── */}
        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#3D8361] mb-6"
          >
            ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-6xl md:text-8xl tracking-wider text-[#171614] leading-none mb-10"
          >
            I Like Building Things.
          </motion.h2>

          {/* Animated word list */}
          <div className="flex flex-col gap-2 pl-2 border-l-4 border-[#171614]/10 ml-2">
            {aboutLines.map((l, i) => (
              <motion.div
                key={l.word}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.12 }}
                className="font-bebas text-4xl md:text-5xl tracking-wider leading-tight"
                style={{ color: l.color }}
              >
                {l.word}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Chapters ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white/60 backdrop-blur-sm border border-black/5 rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Number watermark */}
              <span className="absolute -top-4 -right-2 font-bebas text-[90px] leading-none text-black/[0.06] select-none" />

              <div
                className="w-8 h-1 rounded-full mb-6"
                style={{ background: c.accent }}
              />
              <h3 className="font-bebas text-3xl tracking-wider text-[#171614] mb-4">
                {c.heading}
              </h3>
              <p className="font-outfit text-[#555] text-base leading-relaxed">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
