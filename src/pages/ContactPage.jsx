import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleIcon from "../components/common/SparkleIcon";

gsap.registerPlugin(ScrollTrigger);

function ContactPage() {
  const pageRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your full name";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your work email";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.company.trim()) newErrors.company = "Please enter your company name";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!form.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!form.message.trim()) newErrors.message = "Please enter your message";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from(".contact-hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      heroTl.from(
        ".contact-hero-title",
        { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
      heroTl.from(
        ".contact-hero-desc",
        { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      gsap.from(".contact-info-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
      });

      gsap.from(".contact-form-wrapper", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form-wrapper",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="eyebrow-headline contact-hero-badge">
              <SparkleIcon color="#4F46E5" /> Contact Us
            </span>
            <h1 className="main-title contact-hero-title">
              Let's Start a{" "}
              <span style={{ color: "#4F46E5" }}>Conversation</span>
            </h1>
            <p className="description-text contact-hero-desc">
              Have questions? Our team is ready to help you find the right
              solution for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Email</h4>
                <p>Contact@nexorasystems.com</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.92V19.92C22 20.4819 21.7893 21.0207 21.4142 21.4199C21.0391 21.8191 20.5304 22.042 20 22.042C16.5 22.042 13.18 20.692 10.47 18.192C7.93 15.862 5.88 12.912 4.55 9.562C3.82 7.752 3.41 5.802 3.34 3.822C3.33789 3.29531 3.55778 2.78899 3.94265 2.40894C4.32752 2.02889 4.84086 1.81169 5.37 1.81202H8.37C8.83679 1.80802 9.27928 2.00802 9.59 2.35202C9.90073 2.69602 10.0483 3.14402 9.99 3.59202C9.91 4.25202 10.05 4.91202 10.38 5.49202C10.62 5.91202 10.53 6.43202 10.16 6.77202L8.89 7.97202C10.02 9.97202 11.57 11.702 13.44 13.022L14.67 11.752C15.01 11.382 15.53 11.292 15.95 11.532C16.53 11.862 17.19 12.002 17.85 11.922C18.3 11.8637 18.748 12.0113 19.092 12.322C19.436 12.6327 19.636 13.0752 19.632 13.542V16.92H22Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Phone</h4>
                <p>+1 (234) 567-890</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="custom-form" onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={errors.name ? "error" : ""}
                    />
                    <span className={`field-error ${errors.name ? "show" : ""}`}>{errors.name}</span>
                  </div>
                  <div className="field">
                    <label>Work Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={errors.email ? "error" : ""}
                    />
                    <span className={`field-error ${errors.email ? "show" : ""}`}>{errors.email}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. ABC Corporation"
                      className={errors.company ? "error" : ""}
                    />
                    <span className={`field-error ${errors.company ? "show" : ""}`}>{errors.company}</span>
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={errors.phone ? "error" : ""}
                    />
                    <span className={`field-error ${errors.phone ? "show" : ""}`}>{errors.phone}</span>
                  </div>
                </div>
                <div className="field">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={errors.subject ? "error" : ""}
                  />
                  <span className={`field-error ${errors.subject ? "show" : ""}`}>{errors.subject}</span>
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us about your project..."
                    className={errors.message ? "error" : ""}
                  />
                  <span className={`field-error ${errors.message ? "show" : ""}`}>{errors.message}</span>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
