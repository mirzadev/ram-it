import React, { useEffect, useRef } from "react";
import "./StatisticSection.css";

function StatsSection() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const counters = statsRef.current.querySelectorAll(".stat h3");

          counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let count = 0;

            const increment = target < 10 ? 1 : Math.ceil(target / 100);

            const updateCount = () => {
              if (count < target) {
                count += increment;
                if (count > target) count = target; // don't overshoot
                counter.innerText = count;
                setTimeout(updateCount, 20);
              } else {
                counter.innerText = `${target}+`;
              }
            };

            updateCount();
          });

          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-wrapper">
      <section className="stats" ref={statsRef}>
        <div className="stat">
          <h3 data-target="5">0</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h3 data-target="37">0</h3>
          <p>Team Members</p>
        </div>
        <div className="stat">
          <h3 data-target="100">0</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3 data-target="499">0</h3>
          <p>Finished Projects</p>
        </div>
      </section>
    </div>
  );
}

export default StatsSection;
