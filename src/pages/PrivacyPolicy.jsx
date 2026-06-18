import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleIcon from "../components/common/SparkleIcon";

gsap.registerPlugin(ScrollTrigger);

function PrivacyPolicy() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from(".policy-hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      heroTl.from(
        ".policy-hero-title",
        { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
      heroTl.from(
        ".policy-hero-desc",
        { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      gsap.from(".policy-section", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".policy-content",
          start: "top 80%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="policy-hero">
        <div className="container">
          <div className="policy-hero-content">
            <span className="eyebrow-headline policy-hero-badge">
              <SparkleIcon color="#4F46E5" /> Legal
            </span>
            <h1 className="main-title policy-hero-title">
              Privacy <span style={{ color: "#4F46E5" }}>Policy</span>
            </h1>
            <p className="description-text policy-hero-desc">
              Last updated: June 11, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="policy-content">
        <div className="container">
          <div className="policy-inner">
            <div className="policy-section">
              <h3>1. Introduction</h3>
              <p>
                Nexora Systems ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and use our services.
              </p>
            </div>

            <div className="policy-section">
              <h3>2. Information We Collect</h3>
              <p>
                We may collect information that you provide directly to us,
                including:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Company name and job title</li>
                <li>Email address and phone number</li>
                <li>Payment information for services rendered</li>
                <li>Communications you send to us</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>3. How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, including to:
              </p>
              <ul>
                <li>Process transactions and send related information</li>
                <li>Send administrative information and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Provide customer support</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>4. Information Sharing</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties except as described
                below. We may share information with trusted service providers
                who assist us in operating our website and conducting our
                business, as long as those parties agree to keep this information
                confidential.
              </p>
            </div>

            <div className="policy-section">
              <h3>5. Data Security</h3>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information. Your personal data is stored
                in secured networks and is only accessible by a limited number of
                authorized personnel.
              </p>
            </div>

            <div className="policy-section">
              <h3>6. Cookies</h3>
              <p>
                Our website may use cookies to enhance your experience. You can
                choose to have your computer warn you each time a cookie is
                sent, or you can choose to turn off all cookies through your
                browser settings.
              </p>
            </div>

            <div className="policy-section">
              <h3>7. Your Rights</h3>
              <p>
                Depending on your location, you may have the right to access,
                correct, or delete your personal data. To exercise these rights,
                please contact us at privacy@nexorasystems.com.
              </p>
            </div>

            <div className="policy-section">
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at privacy@nexorasystems.com or reach out through
                our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
