import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const IntroAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

 
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    );

    
    tl.fromTo(
      logoRef.current,
      {
        scale: 0.4,
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        scale: 1.05,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    
    tl.to(logoRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Optional: light glow pulse
    tl.to(logoRef.current, {
      filter: "drop-shadow(0 0 25px rgba(255,255,255,0.25))",
      duration: 0.4,
    });

    // Fade out screen
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
    });

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <img
        ref={logoRef}
        src="/nexora-animated.png" 
        alt="logo"
        style={{
          width: "220px",
          willChange: "transform, opacity, filter",
        }}
      />
    </div>
  );
};

export default IntroAnimation;