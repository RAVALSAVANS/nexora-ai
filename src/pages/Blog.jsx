import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparkleIcon from "../components/common/SparkleIcon";
import ArrowTopRightIcon from "../components/common/ArrowTopRightIcon";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    category: "AI & Automation",
    date: "June 8, 2026",
    title: "How AI-Powered Automation Is Reshaping Enterprise Operations",
    excerpt:
      "Explore how modern enterprises are leveraging artificial intelligence to streamline workflows, reduce costs, and unlock new growth opportunities.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    category: "Cloud Infrastructure",
    date: "June 2, 2026",
    title: "Building Scalable Cloud Architecture for Modern Businesses",
    excerpt:
      "A deep dive into designing resilient, cost-effective cloud systems that scale with your business demands.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    category: "Data Analytics",
    date: "May 28, 2026",
    title: "Real-Time Data Analytics: From Raw Numbers to Actionable Insights",
    excerpt:
      "Learn how to transform raw data into meaningful business intelligence using modern analytics platforms.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    category: "Cybersecurity",
    date: "May 20, 2026",
    title: "Zero Trust Security: Protecting Your Digital Assets in 2026",
    excerpt:
      "Why zero-trust architecture is no longer optional and how to implement it across your organization.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
  },
  {
    category: "Digital Transformation",
    date: "May 15, 2026",
    title: "The Complete Guide to Enterprise Digital Transformation",
    excerpt:
      "A strategic roadmap for organizations looking to modernize their technology stack and business processes.",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    category: "DevOps",
    date: "May 10, 2026",
    title: "CI/CD Best Practices for High-Performance Development Teams",
    excerpt:
      "Streamline your development pipeline with proven continuous integration and deployment strategies.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
  },
];

function Blog() {
  const pageRef = useRef(null);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError("Please enter your email");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroTl = gsap.timeline();
      heroTl.from(".blog-hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      heroTl.from(
        ".blog-hero-title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
      heroTl.from(
        ".blog-hero-desc",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Blog cards stagger animation
      gsap.from(".blog-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
        },
      });

      // Featured card parallax
      gsap.from(".blog-featured-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".blog-featured-card",
          start: "top 85%",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <span className="eyebrow-headline blog-hero-badge">
              <SparkleIcon color="#4F46E5" /> Insights & Updates
            </span>
            <h1 className="main-title blog-hero-title">
              The Nexora <span style={{ color: "#4F46E5" }}>Blog</span>
            </h1>
            <p className="description-text blog-hero-desc">
              Expert insights on AI, automation, cloud architecture, and
              enterprise technology trends shaping the future of business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="blog-featured">
        <div className="container">
          <div className="blog-featured-card">
            <div className="blog-featured-image">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
              />
            </div>
            <div className="blog-featured-content">
              <div className="blog-meta">
                <span className="blog-category">{blogPosts[0].category}</span>
                <span className="blog-date">{blogPosts[0].date}</span>
                <span className="blog-read-time">{blogPosts[0].readTime}</span>
              </div>
              <h2 className="blog-post-title">{blogPosts[0].title}</h2>
              <p className="blog-post-excerpt">{blogPosts[0].excerpt}</p>
              <a href="#" className="btn primary blog-read-btn">
                Read Article <ArrowTopRightIcon width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.slice(1).map((post, index) => (
              <article className="blog-card" key={index}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read-time">{post.readTime}</span>
                    <a href="#" className="blog-read-more">
                      Read More <ArrowTopRightIcon width={14} height={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="blog-newsletter-card">
            <h3>Stay Updated</h3>
            <p>Get the latest insights delivered to your inbox.</p>
            <form className="blog-newsletter-form" onSubmit={handleSubscribe}>
              <div style={{ flex: 1 }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  className={emailError ? "error" : ""}
                />
                <span className={`field-error ${emailError ? "show" : ""}`}>{emailError}</span>
              </div>
              <button type="submit" className="btn primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
