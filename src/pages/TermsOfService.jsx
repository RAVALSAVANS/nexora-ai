import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleIcon from "../components/common/SparkleIcon";

gsap.registerPlugin(ScrollTrigger);

function TermsOfService() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from(".terms-hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      heroTl.from(
        ".terms-hero-title",
        { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
      heroTl.from(
        ".terms-hero-desc",
        { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      gsap.from(".terms-section", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".terms-content",
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <span className="eyebrow-headline terms-hero-badge">
              <SparkleIcon color="#4F46E5" /> Legal
            </span>
            <h1 className="main-title terms-hero-title">
              Terms of <span style={{ color: "#4F46E5" }}>Service</span>
            </h1>
            <p className="description-text terms-hero-desc">
              Last updated: June 11, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="terms-inner">
            <div className="terms-section">
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing and using the Nexora Systems website and services,
                you accept and agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="terms-section">
              <h3>2. Services Description</h3>
              <p>
                Nexora Systems provides AI-powered enterprise solutions,
                automation tools, and digital workspace platforms. The specific
                features and functionality of our services may change from time
                to time without notice.
              </p>
            </div>

            <div className="terms-section">
              <h3>3. User Responsibilities</h3>
              <p>You agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>4. Intellectual Property</h3>
              <p>
                All content, trademarks, and intellectual property on this
                website are the property of Nexora Systems or its licensors.
                You may not reproduce, distribute, or create derivative works
                without our express written permission.
              </p>
            </div>

            <div className="terms-section">
              <h3>5. Payment Terms</h3>
              <p>
                Paid services are billed in advance on a recurring basis. All
                fees are non-refundable unless otherwise specified. We reserve
                the right to change our pricing with 30 days' notice.
              </p>
            </div>

            <div className="terms-section">
              <h3>6. Limitation of Liability</h3>
              <p>
                Nexora Systems shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of or inability to use our services.
              </p>
            </div>

            <div className="terms-section">
              <h3>7. Termination</h3>
              <p>
                We may terminate or suspend your access to our services
                immediately, without prior notice, for any reason, including
                breach of these Terms.
              </p>
            </div>

            <div className="terms-section">
              <h3>8. Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of our services constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="terms-section">
              <h3>9. Contact</h3>
              <p>
                For questions about these Terms, contact us at
                legal@nexorasystems.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;
