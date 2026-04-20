"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import OpenSource from "@/components/sections/OpenSource";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import KonamiCode from "@/components/KonamiCode";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";
import TechMarquee from "@/components/TechMarquee";
import CurrentlyWidget from "@/components/CurrentlyWidget";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <CustomCursor />
      <KonamiCode />
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <SectionDivider />
        <About />
        <CurrentlyWidget />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Stats />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Publications />
        <SectionDivider />
        <OpenSource />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
