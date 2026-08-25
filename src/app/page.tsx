"use client";

import { useState } from "react";

import CustomCursor from "@/components/CustomCursor";
import MouseTrail   from "@/components/MouseTrail";
import LoadingScreen from "@/components/LoadingScreen";
import NavBar       from "@/components/NavBar";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Projects     from "@/components/Projects";
import Experience   from "@/components/Experience";
import Skills       from "@/components/Skills";
import DSALab       from "@/components/DSALab";
import Achievements from "@/components/Achievements";
import BeyondCode   from "@/components/BeyondCode";
import Contact      from "@/components/Contact";

export default function Home() {
  const [loadingActive, setLoadingActive] = useState(true);

  return (
    <>
      {/* Initial 3D Boot Screen Overlay */}
      {loadingActive && (
        <LoadingScreen onComplete={() => setLoadingActive(false)} />
      )}

      {/* Main site */}
      <main className="relative min-h-screen w-full bg-[#03060F]">
        <CustomCursor />
        <MouseTrail />
        <NavBar />

        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <DSALab />
        <Achievements />
        <BeyondCode />
        <Contact />
      </main>
    </>
  );
}
