import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleIcon from "../components/common/SparkleIcon";
import ArrowTopRightIcon from "../components/common/ArrowTopRightIcon";
import sarahchen from "../assets/images/sarah.jpg"
import marcusjohnson from "../assets/images/marcus.jpg"
import priyapatel from "../assets/images/priya.jpg";
import davidkim from "../assets/images/david.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "150+", label: "Enterprise Clients" },
  { number: "98%", label: "Client Retention" },
  { number: "50+", label: "Countries Served" },
  { number: "24/7", label: "Support Available" },
];

const team = [
  {
      
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: sarahchen,
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    image: marcusjohnson,
  },
  {
    name: "Priya Patel",
    role: "VP of Engineering",
    image: priyapatel,
  },
  {
    name: "David Kim",
    role: "Head of Design",
    image: davidkim,
  },
];

const values = [
  {
    icon: "🎯",
    title: "Innovation First",
    description:
      "We push the boundaries of technology to deliver cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description:
      "We work alongside our clients as true partners, understanding their unique challenges and goals.",
  },
  {
    icon: "⚡",
    title: "Execution Excellence",
    description:
      "We deliver on time, on budget, and beyond expectations — every single engagement.",
  },
  {
    icon: "🔒",
    title: "Security & Trust",
    description:
      "Enterprise-grade security is woven into everything we build, protecting our clients' most valuable assets.",
  },
];

function About() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroTl = gsap.timeline();
      heroTl.from(".about-hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      heroTl.from(
        ".about-hero-title",
        { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
      heroTl.from(
        ".about-hero-desc",
        { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // Stats counter animation — auto-play after hero with stagger
      heroTl.from(
        ".about-stat",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
        },
        "-=0.2"
      );

      // Story section
      gsap.from(".about-story", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-story",
          start: "top 80%",
        },
      });

      // Values cards
      gsap.from(".about-value-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-values-grid",
          start: "top 80%",
        },
      });

      // Team members
      gsap.from(".about-team-member", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-team-grid",
          start: "top 80%",
        },
      });

      // CTA
      gsap.from(".about-cta", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="eyebrow-headline about-hero-badge">
              <SparkleIcon color="#4F46E5" /> About Us
            </span>
            <h1 className="main-title about-hero-title">
              Building the Future of{" "}
              <span style={{ color: "#4F46E5" }}>Enterprise Technology</span>
            </h1>
            <p className="description-text about-hero-desc">
              Nexora Systems is a leading provider of AI-powered solutions,
              helping businesses automate, optimize, and scale with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div className="about-stat" key={index}>
                <span className="about-stat-number">{stat.number}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story dfl jcb alc">
            <div className="about-story-content">
              <span className="eyebrow-headline">
                <SparkleIcon color="#94A3B8" /> Our Story
              </span>
              <h3>From Startup to Enterprise Leader</h3>
              <p>
                Founded in 2020, Nexora Systems began with a simple mission:
                make enterprise-grade AI accessible to businesses of all sizes.
                What started as a small team of engineers has grown into a
                global company serving clients across 50+ countries.
              </p>
              <p>
                Our journey has been defined by relentless innovation, deep
                client partnerships, and a commitment to building technology
                that actually works — at scale, in production, for the long
                haul.
              </p>
            </div>
            <div className="about-story-visual">
              <div className="about-story-image-placeholder">
                <div className="about-story-orb about-story-orb-1" />
                <div className="about-story-orb about-story-orb-2" />
                <div className="about-story-orb about-story-orb-3" />
                <span>Nexora Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-headline">
              <SparkleIcon color="#4F46E5" /> Our Values
            </span>
            <h2 className="main-title">What Drives Us</h2>
            <p className="description-text">
              The principles that guide every decision we make and every
              solution we build.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <div className="about-value-card" key={index}>
                <span className="about-value-icon">{value.icon}</span>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow-headline">
              <SparkleIcon color="#4F46E5" /> Our Team
            </span>
            <h2 className="main-title">Leadership</h2>
            <p className="description-text">
              The people behind Nexora Systems' success.
            </p>
          </div>

          <div className="about-team-grid">
            {team.map((member, index) => (
              <div className="about-team-member" key={index}>
                <div className="about-team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <span className="about-team-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-card">
            <h3>Ready to Work With Us?</h3>
            <p>
              Let's discuss how Nexora Systems can help transform your
              business.
            </p>
            <div className="about-cta-buttons">
              <a href="/contact" className="btn primary">
                Get in Touch <ArrowTopRightIcon width={16} height={16} />
              </a>
              <a href="/solutions" className="btn outline">
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
