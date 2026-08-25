"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { FileText, X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Tree", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "DSA Lab", href: "#dsa" },
  { name: "Awards", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-2xl will-change-transform",
          scrolled
            ? "py-4 md:py-5 bg-[#03060F]/85 border-b border-white/[0.12] shadow-2xl shadow-black/60"
            : "py-6 md:py-7 bg-[#03060F]/45 border-b border-white/[0.05]"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Mark */}
          <a
            href="#hero"
            className="flex items-center gap-3 group font-bebas text-3xl md:text-4xl tracking-widest text-white hover:text-[#60A5FA] transition-colors"
          >
            <span>SV</span>
            <span className="w-3 h-3 rounded-full bg-[#2B6FFF] group-hover:scale-125 shadow-[0_0_15px_#2B6FFF] transition-transform" />
          </a>

          {/* Desktop Nav Links in Enhanced Spacious Glassmorphic Capsule */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 bg-white/[0.05] px-10 py-4 rounded-full border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/30">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="font-mono text-[13px] uppercase tracking-widest text-[#94A3B8] hover:text-white transition-colors relative group py-1 font-semibold"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400 group-hover:w-full transition-all duration-300 rounded-full shadow-[0_0_8px_#38BDF8]" />
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-blue-500/50 bg-blue-600/20 hover:bg-blue-600/30 text-[#60A5FA] hover:text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(43,111,255,0.5)] hover:scale-105"
              data-hover="true"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90 hover:text-white p-3 rounded-2xl bg-white/5 border border-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#03060F]/98 backdrop-blur-3xl flex flex-col p-8"
        >
          <div className="flex items-center justify-between h-20 border-b border-white/10">
            <span className="font-bebas text-4xl text-white tracking-widest">
              SV<span className="text-[#2B6FFF]">.</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/70 hover:text-white"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-7 py-8">
            {links.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-bebas text-5xl text-white hover:text-[#60A5FA] tracking-wider transition-colors"
              >
                {l.name}
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.05 }}
              href="/resume.pdf"
              target="_blank"
              className="mt-6 flex items-center gap-3 px-9 py-4.5 rounded-full bg-blue-600 text-white font-mono text-sm uppercase tracking-widest font-bold shadow-xl shadow-blue-600/40"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
