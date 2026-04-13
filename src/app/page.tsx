"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

const About = dynamic(() => import("@/components/sections/About"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Resume = dynamic(() => import("@/components/sections/Resume"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const CursorSpotlight = dynamic(
  () => import("@/components/ui/CursorSpotlight"),
  { ssr: false }
);
const FloatingWhatsApp = dynamic(
  () => import("@/components/ui/FloatingWhatsApp"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-6xl" />
        <About />
        <div className="section-divider mx-auto max-w-6xl" />
        <Experience />
        <div className="section-divider mx-auto max-w-6xl" />
        <Skills />
        <div className="section-divider mx-auto max-w-6xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-6xl" />
        <Resume />
        <div className="section-divider mx-auto max-w-6xl" />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
