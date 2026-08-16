"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Play,
  RotateCcw,
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

const defaultArray = [3, 8, 14, 21, 29, 37, 45, 52, 63, 74, 88, 95];

export default function DSALab() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [target, setTarget] = useState(37);
  const [left, setLeft] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);
  const [mid, setMid] = useState<number | null>(null);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "DSA Lab Core Engine online. Ready to execute Binary Search (O(log n)).",
  ]);

  const logsEndRef = useRef<HTMLDivElement>(null);

  // Fetch live LeetCode stats
  const fetchLeetCodeData = async () => {
    setLoadingStats(true);
    try {
      const res = await fetch("/api/leetcode?username=Shyamalan_21");
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
    setMounted(true);
    fetchLeetCodeData();
  }, []);

  const resetSearch = () => {
    setLeft(null);
    setRight(null);
    setMid(null);
    setFoundIndex(null);
    setIsRunning(false);
    setLogs(["Visualizer reset. Select target and click Run."]);
  };

  const runBinarySearch = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setFoundIndex(null);

    let l = 0;
    let r = defaultArray.length - 1;
    setLeft(l);
    setRight(r);
    setLogs([`Searching for target: ${target}`, `Search space bounds: [L: 0, R: ${r}]`]);

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      setLeft(l);
      setRight(r);
      setMid(m);

      setLogs((prev) => [
        ...prev,
        `Probing Mid index ${m} (Value: ${defaultArray[m]}). Comparing with ${target}...`,
      ]);

      await new Promise((res) => setTimeout(res, 850));

      if (defaultArray[m] === target) {
        setFoundIndex(m);
        setLogs((prev) => [
          ...prev,
          `✓ Target ${target} successfully located at index ${m}! O(log n) efficiency achieved.`,
        ]);
        setIsRunning(false);
        return;
      } else if (defaultArray[m] < target) {
        setLogs((prev) => [
          ...prev,
          `${defaultArray[m]} < ${target} → Eliminating left half. New L = ${m + 1}`,
        ]);
        l = m + 1;
      } else {
        setLogs((prev) => [
          ...prev,
          `${defaultArray[m]} > ${target} → Eliminating right half. New R = ${m - 1}`,
        ]);
        r = m - 1;
      }

      await new Promise((res) => setTimeout(res, 550));
    }

    setLogs((prev) => [...prev, `✕ Target ${target} not found in dataset.`]);
    setIsRunning(false);
  };

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Generate Activity Heatmap Grid from LeetCode submissionCalendar
  const renderActivityGrid = () => {
    const squares = [];
    const totalDays = 98; // 14 weeks x 7 days
    const now = Math.floor(Date.now() / 1000);
    const daySeconds = 86400;
    const calendar = stats?.submissionCalendar || {};

    for (let i = totalDays - 1; i >= 0; i--) {
      const dayTimestamp = now - i * daySeconds;
      // Find the closest timestamp in the calendar
      let subs = 0;
      const dayStart = dayTimestamp - (dayTimestamp % daySeconds);
      // Check nearby timestamps (API timestamps may not align perfectly)
      for (let offset = -daySeconds; offset <= daySeconds; offset += daySeconds) {
        const key = (dayStart + offset).toString();
        if (calendar[key]) {
          subs = Math.max(subs, calendar[key]);
        }
      }

      // Map submission count to activity level 0-3
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
    { name: "Arrays & Strings", solved: 94, total: 110, color: "#2B6FFF" },
    { name: "Trees & BST", solved: 52, total: 65, color: "#00C49A" },
    { name: "Dynamic Programming", solved: 48, total: 70, color: "#FFCB5B" },
    { name: "Graphs (BFS/DFS)", solved: 38, total: 55, color: "#A78BFA" },
    { name: "Two Pointers & Sliding Window", solved: 42, total: 50, color: "#FF4D6A" },
    { name: "Binary Search", solved: 28, total: 32, color: "#38BDF8" },
    { name: "Heaps & Priority Queue", solved: 16, total: 25, color: "#FB923C" },
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
              href="https://leetcode.com/u/Shyamalan_21/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 text-white font-mono text-xs uppercase tracking-wider transition-all"
              data-hover="true"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/50" />
            </a>

            <button
              onClick={fetchLeetCodeData}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              title="Refresh Real-Time Stats"
              data-hover="true"
            >
              <RefreshCw className={`w-4 h-4 ${loadingStats ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* ─── REAL-TIME LEETCODE METRICS GRID ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          
          {/* Solved Problems Counter Card */}
          <div className="bg-[#09162A]/90 border border-blue-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3]">Total Solved</span>
                <Flame className="w-5 h-5 text-amber-400" />
              </div>
              <p className="font-bebas text-6xl text-white leading-none" suppressHydrationWarning>
                {stats?.totalSolved ?? 318}
                <span className="text-xl text-[#7C8BA3] font-mono"> / {stats?.totalQuestions ?? 3350}</span>
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between font-mono text-xs" suppressHydrationWarning>
              <span className="text-emerald-400">Easy: {stats?.easySolved ?? 146}</span>
              <span className="text-amber-400">Med: {stats?.mediumSolved ?? 140}</span>
              <span className="text-red-400">Hard: {stats?.hardSolved ?? 32}</span>
            </div>
          </div>

          {/* Acceptance Rate Card */}
          <div className="bg-[#09162A]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3]">Acceptance</span>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="font-bebas text-6xl text-emerald-400 leading-none" suppressHydrationWarning>
                {stats?.acceptanceRate ?? 69.2}%
              </p>
            </div>
            <p className="font-mono text-xs text-[#7C8BA3] mt-6 pt-4 border-t border-white/10">
              High Accuracy Rate &bull; Clean Code
            </p>
          </div>

          {/* Global Ranking Card */}
          <div className="bg-[#09162A]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3]">Global Rank</span>
                <Award className="w-5 h-5 text-blue-400" />
              </div>
              <p className="font-bebas text-5xl text-blue-400 leading-none" suppressHydrationWarning>
                ~{stats?.ranking ? stats.ranking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "172,840"}
              </p>
            </div>
            <p className="font-mono text-xs text-[#7C8BA3] mt-6 pt-4 border-t border-white/10">
              Top Tier Algorithmic Competitor
            </p>
          </div>

          {/* Academic CGPA Card */}
          <div className="bg-[#09162A]/90 border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#7C8BA3]">SRM B.Tech CGPA</span>
                <CheckCircle className="w-5 h-5 text-teal-400" />
              </div>
              <p className="font-bebas text-6xl text-teal-400 leading-none">
                9.11
              </p>
            </div>
            <p className="font-mono text-xs text-[#7C8BA3] mt-6 pt-4 border-t border-white/10">
              Gaming Technology Specialization
            </p>
          </div>

        </div>

        {/* ─── HEATMAP & TOPIC BREAKDOWN ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Submission Activity Heatmap */}
          <div className="lg:col-span-6 bg-[#081224]/80 border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide leading-none">
                    Submission History & Frequency
                  </h3>
                  <p className="font-mono text-xs text-[#7C8BA3] mt-1">
                    Continuous coding streak & problem-solving cadence
                  </p>
                </div>
                <span className="font-mono text-xs text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
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
              Algorithmic Topic Mastery
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

        {/* ─── INTERACTIVE BINARY SEARCH LAB MODULE ─── */}
        <div className="bg-[#091528] border border-blue-500/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Console Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-xs tracking-widest text-white/60 ml-2">
                BINARY_SEARCH_VISUALIZER.exe
              </span>
            </div>

            {/* Target Selectors */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#7C8BA3] uppercase">Target Value:</span>
              <div className="flex gap-1.5">
                {[14, 37, 63, 74, 88, 99].map((val) => (
                  <button
                    key={val}
                    disabled={isRunning}
                    onClick={() => {
                      setTarget(val);
                      resetSearch();
                    }}
                    className={`px-3 py-1 font-mono text-xs rounded-xl transition-all ${
                      target === val
                        ? "bg-blue-600 text-white font-bold shadow-[0_0_10px_rgba(43,111,255,0.6)]"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                    data-hover="true"
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Array Cell Visualization */}
          <div className="py-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {defaultArray.map((num, idx) => {
              const isMid = mid === idx;
              const isLeft = left === idx;
              const isRight = right === idx;
              const isFound = foundIndex === idx;
              const isExcluded =
                left !== null && right !== null && (idx < left || idx > right);

              return (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="h-6 flex items-center gap-1 font-mono text-[10px] font-bold">
                    {isLeft && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        L
                      </span>
                    )}
                    {isMid && (
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-300 border border-blue-500/50 animate-bounce">
                        MID
                      </span>
                    )}
                    {isRight && (
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        R
                      </span>
                    )}
                  </div>

                  <motion.div
                    animate={{
                      scale: isFound ? 1.18 : isMid ? 1.08 : 1,
                      opacity: isExcluded ? 0.25 : 1,
                    }}
                    className={`w-12 h-14 md:w-16 md:h-18 rounded-2xl flex flex-col items-center justify-center font-mono text-base md:text-lg font-bold border transition-all duration-300 ${
                      isFound
                        ? "bg-emerald-500/30 border-emerald-400 text-emerald-200 shadow-[0_0_25px_rgba(52,211,153,0.5)]"
                        : isMid
                        ? "bg-blue-600/30 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        : isExcluded
                        ? "bg-white/[0.02] border-white/5 text-white/30"
                        : "bg-white/5 border-white/15 text-white"
                    }`}
                  >
                    <span>{num}</span>
                  </motion.div>

                  <span className="font-mono text-[10px] text-white/40">[{idx}]</span>
                </div>
              );
            })}
          </div>

          {/* Action Buttons & Terminal Output */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-row lg:flex-col gap-3 justify-center">
              <button
                disabled={isRunning}
                onClick={runBinarySearch}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-blue-600/30"
                data-hover="true"
              >
                <Play className="w-4 h-4 fill-white" />
                {isRunning ? "Running..." : "Run Binary Search"}
              </button>

              <button
                disabled={isRunning}
                onClick={resetSearch}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 text-white/80 font-medium text-sm transition-all"
                data-hover="true"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Visualizer
              </button>
            </div>

            {/* Live Terminal Log */}
            <div className="lg:col-span-2 bg-black/70 border border-white/10 rounded-2xl p-4 font-mono text-xs text-white/80 h-36 overflow-y-auto flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-white/40 mb-1 sticky top-0 bg-black/90 py-1">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>EXECUTION_TERMINAL</span>
              </div>
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 select-none">&gt;</span>
                  <span className={log.startsWith("✓") ? "text-emerald-300 font-semibold" : ""}>
                    {log}
                  </span>
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
