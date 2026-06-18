import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useReveal(selector = ".reveal") {
  const scopeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 80%",
        },
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);

  return scopeRef;
}