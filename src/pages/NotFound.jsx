import { Link, useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SparkleIcon from "../components/common/SparkleIcon";

function NotFound() {
  const pageRef = useRef();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".error-badge", {
        y: 25,
        opacity: 0,
        duration: 0.8,
      });

      tl.from(
        ".error-code",
        {
          y: 60,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      tl.from(
        ".error-title",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.7"
      );

      tl.from(
        ".error-desc",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.5"
      );

      tl.from(
        ".error-buttons",
        {
          y: 20,
          opacity: 0,
          duration: .6,
        },
        "-=.4"
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="notfound-hero" ref={pageRef}>
      <div className="container">
        <div className="notfound-hero-content">
        <span className="eyebrow-headline error-badge">
          <SparkleIcon color="#4F46E5" />
          Oops!
        </span>

        <h1 className="error-code">404</h1>

        <h2 className="main-title error-title">
          Page <span>Not Found</span>
        </h2>

        <p className="description-text error-desc">
          The page you're looking for might have been removed,
          renamed or is temporarily unavailable.
        </p>

        <div className="error-buttons mt20">
          <Link className="btn" to="/">
            Back Home
          </Link>
        </div>
     </div>
      </div>
    </section>
  );
}

export default NotFound;