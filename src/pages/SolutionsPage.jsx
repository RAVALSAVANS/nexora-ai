import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleIcon from "../components/common/SparkleIcon";
import ArrowTopRightIcon from "../components/common/ArrowTopRightIcon";
import card1 from "../assets/images/Card Image1.png";
import card2 from "../assets/images/Card Image2.png";
import card3 from "../assets/images/Card Image3.png";
import card4 from "../assets/images/Card Image4.png";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    image: card1,
    title: "Commerce Platforms",
    description:
      "Custom storefronts, payment flows, and scalable digital retail ecosystems.",
    features: [
      "Multi-channel storefronts",
      "Real-time inventory management",
      "AI-powered recommendations",
      "Global payment processing",
    ],
  },
  {
    image: card2,
    title: "Industrial Automation",
    description:
      "Smart factory dashboards, predictive monitoring, and workflow optimization.",
    features: [
      "IoT sensor integration",
      "Predictive maintenance AI",
      "Real-time production dashboards",
      "Supply chain optimization",
    ],
  },
  {
    image: card3,
    title: "Healthcare Systems",
    description:
      "Secure platforms for patient data, diagnostics, and medical analytics.",
    features: [
      "HIPAA-compliant infrastructure",
      "AI diagnostic support",
      "Patient management systems",
      "Medical data analytics",
    ],
  },
  {
    image: card4,
    title: "Financial Technology",
    description:
      "High-performance platforms for digital banking and transaction processing.",
    features: [
      "Real-time transaction processing",
      "Fraud detection AI",
      "Regulatory compliance tools",
      "Digital banking platforms",
    ],
  },
];

function SolutionsPage() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroTl = gsap.timeline();
      heroTl.from(".solutions-hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      heroTl.from(
        ".solutions-hero-title",
        { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
      heroTl.from(
        ".solutions-hero-desc",
        { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // Solution cards
      gsap.from(".solutions-detail-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solutions-detail-grid",
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="solutions-hero">
        <div className="container">
          <div className="solutions-hero-content">
            <span className="eyebrow-headline solutions-hero-badge">
              <SparkleIcon color="#4F46E5" /> Enterprise Solutions
            </span>
            <h1 className="main-title solutions-hero-title">
              Solutions Built for{" "}
              <span style={{ color: "#4F46E5" }}>Scale</span>
            </h1>
            <p className="description-text solutions-hero-desc">
              Purpose-built platforms designed to power mission-critical
              systems for modern organizations across every industry.
            </p>
          </div>
        </div>
      </section>

      <section className="solutions-detail">
        <div className="container">
          <div className="solutions-detail-grid">
            {solutions.map((solution, index) => (
              <div className="solutions-detail-card" key={index}>
                <div className="solutions-detail-image">
                  <img src={solution.image} alt={solution.title} />
                </div>
                <div className="solutions-detail-content">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul className="solutions-features">
                    {solution.features.map((feature, i) => (
                      <li key={i}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3334 4L6.00008 11.3333L2.66675 8"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn primary solutions-cta-btn">
                    Learn More <ArrowTopRightIcon width={16} height={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
