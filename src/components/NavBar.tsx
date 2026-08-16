"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { FileText, X, Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Tree", href: "#experience" },
  { name: "DSA Lab", href: "#dsa" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prev, setPrev] = useState(0);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    setHidden(latest > prev + 10 && latest > 150);
    setPrev(latest);
  });

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-120%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-xl",
          scrolled
            ? "py-3 bg-[#03060F]/70 border-b border-white/[0.08] shadow-2xl shadow-black/30"
            : "py-5 bg-[#03060F]/40 border-b border-white/[0.04]"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Mark */}
          <Link
            href="/"
            className="flex items-center gap-2 group font-bebas text-3xl tracking-widest text-white hover:text-[#60A5FA] transition-colors"
          >
            <span>SV</span>
            <span className="w-2 h-2 rounded-full bg-[#2B6FFF] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 bg-white/[0.03] px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] hover:text-white transition-colors relative group py-1"
              >
                {l.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/50 bg-blue-600/10 hover:bg-blue-600/20 text-[#60A5FA] hover:text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(43,111,255,0.4)]"
              data-hover="true"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#03060F]/98 backdrop-blur-2xl flex flex-col p-8"
        >
          <div className="flex items-center justify-between h-16 border-b border-white/10">
            <span className="font-bebas text-3xl text-white tracking-widest">
              SV<span className="text-[#2B6FFF]">.</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8">
            {links.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-bebas text-5xl text-white hover:text-[#60A5FA] tracking-wider transition-colors"
              >
                {l.name}
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              href="/resume.pdf"
              target="_blank"
              className="mt-6 flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-mono text-sm uppercase tracking-widest font-semibold shadow-lg shadow-blue-600/30"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
