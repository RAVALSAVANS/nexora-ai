import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import CTA from "../components/CTA";
import Ecosystem from "../components/Ecosystem";
import CaseStudies from "../components/CaseStudies";
import Solutions from "../components/Solutions";
import Platform from "../components/Platform";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const homeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- Solutions section ---
      gsap.from("#Solutions .eyebrow-headline", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: "#Solutions", start: "top 80%" },
      });
      gsap.from("#Solutions .main-title", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "#Solutions", start: "top 78%" },
      });
      gsap.from("#Solutions .description-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: "#Solutions", start: "top 76%" },
      });
      gsap.from(".solution-card", {
        y: 70,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".solutions-grid", start: "top 82%" },
      });

      // --- Platform section ---
      gsap.from("#Platform .section-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: "#Platform", start: "top 78%" },
      });
      gsap.from("#Platform .cards", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: "#Platform .grid2", start: "top 82%" },
      });

      // --- Ecosystem section ---
      gsap.from(".ecosytem .lft_content", {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ecosytem", start: "top 75%" },
      });
      gsap.from(".ecosytem .rgt_content .item", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".ecosytem", start: "top 72%" },
      });

      // --- CTA section ---
      gsap.from(".cta-sec .bg-black", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cta-sec", start: "top 80%" },
      });

      // --- Case Studies ---
      gsap.from(".case_studies .section-header", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".case_studies", start: "top 78%" },
      });
      gsap.from(".case_studies .cards", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".case_studies .cards", start: "top 82%" },
      });

      // --- Contact section ---
      gsap.from(".cont-sport .sec-title", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cont-sport", start: "top 80%" },
      });
      gsap.from(".cont-sport .custom-form", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cont-sport", start: "top 75%" },
      });

      // --- Trusted slider ---
      gsap.from(".trusted .sec-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".trusted", start: "top 85%" },
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  // Force ScrollTrigger to recalculate positions after DOM is fully settled
  useEffect(() => {
    // Double rAF ensures Lenis has started and layout is complete
    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main ref={homeRef}>
      <Hero />
      <Slider />
      <Solutions />
      <Platform />
      <Ecosystem />
      <CTA />
      <CaseStudies />
      <Contact />
    </main>
  );
}

export default Home;
