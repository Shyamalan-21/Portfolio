"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

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
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loading screen — shows until "loaded" = true */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* Main site — hidden behind loading until complete */}
      <main
        className="relative min-h-screen w-full bg-[#03060F]"
        style={{ visibility: loaded ? "visible" : "hidden", transition: "visibility 0s" }}
      >
        {/* Persistent overlays */}
        <CustomCursor />
        <MouseTrail />
        <NavBar />

        {/* Sections */}
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
