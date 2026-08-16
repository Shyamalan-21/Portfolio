"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, ArrowUpRight, Mail, MapPin } from "lucide-react";

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
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const email = "samzshyam21@gmail.com";

  const copyEmail = () => { navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2500); };

  return (
    <footer
      id="contact"
      className="relative w-full pt-32 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #03060F 0%, #060D1E 50%, #071428 100%)" }}
    >
      {/* Giant faded text */}
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-bebas text-[20vw] leading-none text-white/[0.025] whitespace-nowrap">LETS BUILD</span>
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00C49A]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-blue-400 mb-3">INITIATE CONTACT</p>
          <h2 className="font-bebas text-7xl md:text-[110px] tracking-wider text-white leading-none">
            Let&apos;s Build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500">
              Something.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-outfit text-[#7C8BA3] text-lg leading-relaxed max-w-md">
              Have an ambitious idea, an AI challenge, an AR/VR initiative, or just want to connect? I&apos;m open to exciting opportunities.
            </p>

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#7C8BA3] mb-3 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> Direct Email
              </p>
              <div className="flex items-center justify-between gap-3">
                <a href={`mailto:${email}`} className="font-mono text-sm text-white hover:text-blue-400 transition-colors truncate">{email}</a>
                <button onClick={copyEmail} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 font-mono text-[10px] text-white/60 hover:text-white transition-all flex-shrink-0" data-hover="true">
                  {copied ? <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied</span></> : <><Copy className="w-3.5 h-3.5" /><span>Copy</span></>}
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/Shyamalan-21" target="_blank" rel="noreferrer" className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/[0.06] transition-all flex items-center justify-between group" data-hover="true">
                <div className="flex items-center gap-3"><GithubIcon className="w-5 h-5 text-white/80 group-hover:text-white" /><span className="font-mono text-xs uppercase tracking-wider text-white">GitHub</span></div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/shyamalanv/" target="_blank" rel="noreferrer" className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all flex items-center justify-between group" data-hover="true">
                <div className="flex items-center gap-3"><LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" /><span className="font-mono text-xs uppercase tracking-wider text-white">LinkedIn</span></div>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Status info */}
            <div className="font-mono text-xs text-[#7C8BA3] space-y-1.5 pt-2">
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Chennai, India · UTC +5:30</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open to new opportunities</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B132B]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl" style={{ boxShadow: "0 0 80px rgba(43,111,255,0.08)" }}>
              {done ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="font-bebas text-4xl tracking-wider text-white">Message Received</h3>
                  <p className="font-outfit text-[#7C8BA3] max-w-sm mx-auto">I&apos;ll get back to you shortly.</p>
                  <button onClick={() => { setDone(false); setForm({ name: "", email: "", message: "" }); }} className="mt-4 px-6 py-2.5 rounded-full border border-white/20 font-mono text-xs uppercase text-white hover:bg-white/10 transition-colors" data-hover="true">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (form.email && form.message) setDone(true); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[{ k: "name", l: "Your Name", p: "Ada Lovelace", t: "text" }, { k: "email", l: "Your Email", p: "ada@domain.com", t: "email" }].map(f => (
                      <div key={f.k} className="space-y-2">
                        <label className="block font-mono text-[10px] uppercase tracking-widest text-[#7C8BA3]">{f.l}</label>
                        <input type={f.t} required={f.k === "email"} placeholder={f.p} value={(form as Record<string, string>)[f.k]} onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-[#7C8BA3]">Message</label>
                    <textarea required rows={5} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm resize-none"
                    />
                  </div>
                  <button type="submit" data-hover="true"
                    className="w-full py-5 rounded-2xl font-outfit font-semibold text-sm tracking-widest uppercase text-white flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #2B6FFF, #00C49A)", boxShadow: "0 0 40px rgba(43,111,255,0.3)" }}
                  >
                    <Send className="w-4 h-4" /> Transmit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7C8BA3]">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-2xl text-white tracking-wider">SV<span className="text-[#2B6FFF]">.</span></span>
            <span>© {new Date().getFullYear()} Shyamalan V. All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            {["about","projects","experience","skills","dsa","contact"].map(h => (
              <a key={h} href={`#${h}`} className="uppercase tracking-widest hover:text-white transition-colors">{h}</a>
            ))}
            <a href="#hero" className="uppercase tracking-widest hover:text-white transition-colors">↑ TOP</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
