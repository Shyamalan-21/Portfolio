"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  Flame,
  CheckCircle,
  TrendingUp,
  Award,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  submissionCalendar: Record<string, number>;
  topics?: Array<{ name: string; solved: number; total: number; color: string }>;
}

export default function DSALab() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);

  // Fetch live LeetCode stats for shyamalan_
  const fetchLeetCodeData = async () => {
    setLoadingStats(true);
    try {
      const res = await fetch("/api/leetcode?username=shyamalan_");
      const data = await res.json();
      if (data.success) {
        setStats(data);
      }
    } catch (e) {
      console.error("Failed to load LeetCode data", e);
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    fetchLeetCodeData();
  }, []);

  // Generate Activity Heatmap Grid from LeetCode submissionCalendar
  const renderActivityGrid = () => {
    const squares = [];
    const totalDays = 98; // 14 weeks x 7 days
    const now = Math.floor(Date.now() / 1000);
    const daySeconds = 86400;
    const calendar = stats?.submissionCalendar || {};

    for (let i = totalDays - 1; i >= 0; i--) {
      const dayTimestamp = now - i * daySeconds;
      let subs = 0;
      const dayStart = dayTimestamp - (dayTimestamp % daySeconds);
      for (let offset = -daySeconds; offset <= daySeconds; offset += daySeconds) {
        const key = (dayStart + offset).toString();
        if (calendar[key]) {
          subs = Math.max(subs, calendar[key]);
        }
      }

      const activeLevel = subs === 0 ? 0 : subs <= 2 ? 1 : subs <= 4 ? 2 : 3;
      
      const colors = [
        "bg-white/[0.04] border-white/5",
        "bg-emerald-900/50 border-emerald-700/40",
        "bg-emerald-600/70 border-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
        "bg-emerald-400 border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.6)]",
      ];

      squares.push(
        <div
          key={i}
          className={`w-3.5 h-3.5 rounded-sm border ${colors[activeLevel]} transition-transform hover:scale-125`}
          title={`${subs} submission${subs !== 1 ? "s" : ""}`}
        />
      );
    }
    return squares;
  };

  const topics = stats?.topics || [
    { name: "Arrays & Strings", solved: 34, total: 45, color: "#2B6FFF" },
    { name: "Math & Two Pointers", solved: 18, total: 25, color: "#00C49A" },
    { name: "Binary Search", solved: 12, total: 18, color: "#FFCB5B" },
    { name: "Dynamic Programming", solved: 8, total: 15, color: "#A78BFA" },
    { name: "Sorting & Simulation", solved: 15, total: 20, color: "#38BDF8" },
  ];

  return (
    <section id="dsa" className="relative w-full bg-[#03060F] py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#00C49A] font-semibold mb-2">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>REAL-TIME ALGORITHMIC PROFILE</span>
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-wider text-white leading-none">
              DSA <span className="grad-text">Problem Lab</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://leetcode.com/u/shyamalan_/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:border-amber-500/60 hover:bg-amber-500/10 text-white font-mono text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
              data-hover="true"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>LeetCode: shyamalan_</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/50" />
            </a>

            <button
              onClick={fetchLeetCodeData}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors hover:scale-105"
              title="Refresh Real-Time Stats"
              data-hover="true"
            >
              <RefreshCw className={`w-4 h-4 ${loadingStats ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* ─── REAL-TIME LEETCODE METRICS GRID ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Solved Problems Counter Card */}
          <div className="bg-[#09162A]/90 border border-blue-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] font-semibold">Total Solved</span>
                <Flame className="w-5 h-5 text-amber-400" />
              </div>
              <p className="font-bebas text-6xl text-white leading-none" suppressHydrationWarning>
                {stats?.totalSolved ?? 77}
                <span className="text-xl text-[#7C8BA3] font-mono"> / {stats?.totalQuestions ?? 3350}</span>
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between font-mono text-xs font-semibold" suppressHydrationWarning>
              <span className="text-emerald-400">Easy: {stats?.easySolved ?? 69}</span>
              <span className="text-amber-400">Med: {stats?.mediumSolved ?? 8}</span>
              <span className="text-red-400">Hard: {stats?.hardSolved ?? 0}</span>
            </div>
          </div>

          {/* Acceptance Rate Card */}
          <div className="bg-[#09162A]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] font-semibold">Acceptance</span>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="font-bebas text-6xl text-emerald-400 leading-none" suppressHydrationWarning>
                {stats?.acceptanceRate ?? 81.9}%
              </p>
            </div>
            <p className="font-mono text-xs text-[#7C8BA3] mt-6 pt-4 border-t border-white/10 font-medium">
              81.9% High Accuracy &bull; Clean Code
            </p>
          </div>

          {/* Global Ranking Card */}
          <div className="bg-[#09162A]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] font-semibold">Global Rank</span>
                <Award className="w-5 h-5 text-blue-400" />
              </div>
              <p className="font-bebas text-5xl text-blue-400 leading-none" suppressHydrationWarning>
                ~{stats?.ranking ? stats.ranking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "1,995,211"}
              </p>
            </div>
            <p className="font-mono text-xs text-[#7C8BA3] mt-6 pt-4 border-t border-white/10 font-medium">
              Active Algorithmic Practitioner
            </p>
          </div>

          {/* Academic CGPA Card */}
          <div className="bg-[#09162A]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3] font-semibold">SRM B.Tech CGPA</span>
                <CheckCircle className="w-5 h-5 text-teal-400" />
              </div>
              <p className="font-bebas text-6xl text-teal-400 leading-none">
                9.11
              </p>
            </div>
            <p className="font-mono text-xs text-[#7C8BA3] mt-6 pt-4 border-t border-white/10 font-medium">
              Gaming Technology Specialization
            </p>
          </div>

        </div>

        {/* ─── HEATMAP & TOPIC BREAKDOWN ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Submission Activity Heatmap */}
          <div className="lg:col-span-6 bg-[#081224]/80 border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide leading-none">
                    Submission History & Frequency
                  </h3>
                  <p className="font-mono text-xs text-[#7C8BA3] mt-1">
                    Continuous coding cadence on LeetCode
                  </p>
                </div>
                <span className="font-mono text-xs text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto py-2">
                {renderActivityGrid()}
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-[#7C8BA3] pt-6 border-t border-white/10 mt-6">
              <span>Less</span>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-white/[0.04] border border-white/10" />
                <div className="w-3 h-3 rounded-sm bg-emerald-900/50 border border-emerald-700/40" />
                <div className="w-3 h-3 rounded-sm bg-emerald-600/70 border border-emerald-500/50" />
                <div className="w-3 h-3 rounded-sm bg-emerald-400 border border-emerald-300" />
              </div>
              <span>More Active</span>
            </div>
          </div>

          {/* Topic-Wise Distribution */}
          <div className="lg:col-span-6 bg-[#081224]/80 border border-white/10 rounded-3xl p-8 shadow-xl">
            <h3 className="font-bebas text-3xl text-white tracking-wide leading-none mb-6">
              Algorithmic Topic Breakdown
            </h3>

            <div className="space-y-4">
              {topics.map((t) => {
                const percentage = Math.round((t.solved / t.total) * 100);
                return (
                  <div key={t.name}>
                    <div className="flex justify-between items-center font-mono text-xs mb-1.5">
                      <span className="text-white font-medium">{t.name}</span>
                      <span className="text-[#7C8BA3]">
                        <strong className="text-white">{t.solved}</strong> / {t.total} ({percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${percentage}%`,
                          background: t.color,
                          boxShadow: `0 0 10px ${t.color}60`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
