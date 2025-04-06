import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // when h3 enters 80% from top of viewport
        },
      }
    );
  }, []);

  return (
    <section
      id={id}
      className="relative text-white pt-15 md:pt-25 pb-5 md:pb-20 px-10 overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-5 md:pb-20 ml-[-25px] md:ml-0"
      >
        //: About Me
      </h3>

      {/* Top */}
      <AboutTop />

      {/* Bottom */}
      <AboutBottom />
    </section>
  );
};

export default About;
