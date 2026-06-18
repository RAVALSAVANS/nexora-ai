import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [range, setRange] = useState("30");

  const heroRef = useRef(null);

  const chartData = {
    "30": {
      values: [48, 89, 65, 138, 97, 179, 81, 120, 73, 105],
      labels: ["Jan 01", "Jan 05", "Jan 10", "Jan 15", "Jan 20", "Jan 25", "Jan 30"],
    },

    "15": {
      values: [60, 110, 40, 150, 90, 140, 70, 100, 60, 130],
      labels: ["Day 1", "Day 3", "Day 5", "Day 7", "Day 9", "Day 11", "Day 13", "Day 15"],
    },

    "7": {
      values: [30, 80, 55, 120, 75, 160, 60, 110, 50, 90],
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    "1": {
      values: [20, 50, 35, 90, 60, 100, 40, 70, 30, 60],
      labels: ["00h", "02h", "04h", "06h", "08h", "10h", "12h", "14h", "16h", "18h"],
    },
  };

  const current = chartData[range];

 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "expo.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);


  useLayoutEffect(() => {
    const bars = document.querySelectorAll(".bar");

    gsap.fromTo(
      bars,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "bottom",
        duration: 0.8,
        stagger: 0.05,
        ease: "expo.out",
      }
    );
  }, [range]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg secPdng">

        <div className="container">

          <div className="dfl jcb alc fwr">

          
            <div className="hero-content">

              <div className="badge">
                ✨ Nexora AI 2.0 is now live
              </div>

              <h1>
                Where Human <br />
                <span>Intelligence</span> Meets <br />
                Smart Technology
              </h1>

              <p>
                We design scalable digital solutions that help modern
                <br />
                businesses automate faster, operate smarter, and grow
                <br />
                confidently.
              </p>

              <div className="hero-buttons">

                <a href="#" className="btn primary">
                  Get Started
                </a>

                <a href="#" className="btn outline">
                  View Solutions
                </a>

              </div>

            </div>

            {/* RIGHT CARD */}
            <div className="hero-card">

              {/* HEADER */}
              <div className="card-header">

                <div>
                  <h3>Performance Overview</h3>
                  <p className="sub">
                    System throughput and processing
                  </p>
                </div>

                <select
                  className="dropdown"
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                >
                  <option value="30">Last 30 Days</option>
                  <option value="15">Last 15 Days</option>
                  <option value="7">Last 7 Days</option>
                  <option value="1">Today</option>
                </select>

              </div>

              {/* CHART */}
              <div className="chart">
                {current.values.map((h, i) => (
                  <div
                    key={i}
                    className={`bar ${i % 2 === 0 ? "light" : ""}`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              {/* LABELS */}
              <div className="chart-labels">
                {current.labels.map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
              </div>

              {/* STATS */}
              <div className="stats">

                <div>
                  <span>Total Requests</span>
                  <strong>1.2M</strong>
                </div>

                <div>
                  <span>Avg. Latency</span>
                  <strong>42ms</strong>
                </div>

                <div>
                  <span>Error Rate</span>
                  <strong>0.01%</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;