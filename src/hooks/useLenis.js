import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => {
      cancelAnimationFrame(rafId);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [enabled]);
}