"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Copy, Check, ArrowUpRight, Mail, Sparkles, Send } from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "samzshyam21@gmail.com";

  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  // Smooth optimized rightward parallax sweep
  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer
      id="contact"
      ref={contactRef}
      className="relative w-full pt-20 md:pt-32 pb-16 overflow-hidden border-t border-white/5"
      style={{ background: "linear-gradient(180deg, #03060F 0%, #060D1E 50%, #071428 100%)" }}
    >
      {/* Centered on Entry + Smooth Rightward Parallax */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute inset-x-0 top-12 flex items-center justify-center pointer-events-none select-none z-0 text-center will-change-transform"
      >
        <span className="font-bebas text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] xl:text-[10vw] leading-none text-white opacity-[0.07] tracking-[0.05em] sm:tracking-[0.08em] uppercase block whitespace-nowrap">
          LET&apos;S BUILD SOMETHING REAL
        </span>
      </motion.div>

      {/* Atmospheric Glow Orbs (GPU Friendly Blur) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/15 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#00C49A]/15 blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#60A5FA] mb-3 font-semibold">
            <Sparkles className="w-4 h-4 text-[#00C49A]" />
            <span>INITIATE COLLABORATION</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] tracking-wider text-white leading-[0.95]">
            Let&apos;s Build <span className="grad-text">Something Real.</span>
          </h2>
          <p className="font-outfit text-[#94A3B8] text-base md:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6">
            Have an ambitious vision, a multi-agent AI challenge, an AR/VR initiative, or want to discuss engineering? My inbox is always open.
          </p>
        </div>

        {/* Direct Connect Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
          
          {/* Direct Email Card with Interactive Copy */}
          <div className="p-8 rounded-3xl bg-[#091528]/85 border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#7C8BA3] mb-4 flex items-center gap-2 font-semibold">
                <Mail className="w-4 h-4 text-blue-400" /> Direct Communication
              </p>
              <a
                href={`mailto:${email}`}
                className="font-mono text-base text-white group-hover:text-blue-400 transition-colors block font-bold mb-4"
              >
                {email}
              </a>
            </div>
            
            <div className="flex items-center gap-3 mt-8 pt-5 border-t border-white/10">
              <button
                onClick={copyEmail}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 font-mono text-xs text-white transition-all border border-white/10 hover:scale-105"
                data-hover="true"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#7C8BA3]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all hover:scale-105"
                title="Send Email"
                data-hover="true"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <a
            href="https://github.com/Shyamalan-21"
            target="_blank"
            rel="noreferrer"
            className="p-8 rounded-3xl bg-[#091528]/85 border border-white/10 hover:border-white/30 hover:bg-[#0c1b33] transition-all flex flex-col justify-between group shadow-xl hover:scale-105"
            data-hover="true"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="font-bebas text-3xl text-white tracking-wide leading-none">
                GitHub
              </h3>
              <p className="font-mono text-xs text-[#7C8BA3] mt-3 leading-relaxed">
                @Shyamalan-21 &bull; Open-source projects & codebases
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/80">
              <span>View Profile</span>
              <span className="text-[#00C49A] group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href="https://www.linkedin.com/in/shyamalanv/"
            target="_blank"
            rel="noreferrer"
            className="p-8 rounded-3xl bg-[#091528]/85 border border-white/10 hover:border-blue-500/40 hover:bg-[#0c1b33] transition-all flex flex-col justify-between group shadow-xl hover:scale-105"
            data-hover="true"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="font-bebas text-3xl text-white tracking-wide leading-none">
                LinkedIn
              </h3>
              <p className="font-mono text-xs text-[#7C8BA3] mt-3 leading-relaxed">
                in/shyamalanv &bull; Professional updates & posts
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs text-blue-300">
              <span>Connect on LinkedIn</span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </a>

        </div>

        {/* Footer Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7C8BA3]">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-2xl text-white tracking-wider">SV<span className="text-[#2B6FFF]">.</span></span>
            <span>&copy; {new Date().getFullYear()} Shyamalan V. Engineered for high performance.</span>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {["about", "projects", "experience", "skills", "dsa", "achievements", "contact"].map((h) => (
              <a key={h} href={`#${h}`} className="uppercase tracking-widest hover:text-white transition-colors">
                {h}
              </a>
            ))}
            <a href="#hero" className="uppercase tracking-widest text-[#00C49A] hover:text-white transition-colors font-bold">
              &uarr; TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
