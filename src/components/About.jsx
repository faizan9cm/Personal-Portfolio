import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      topRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: topRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative text-white pt-15 md:pt-25 pb-5 md:pb-20 px-10 overflow-hidden opacity-0"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-5 md:pb-20 ml-[-25px] md:ml-0 opacity-0"
      >
        //: About Me
      </h3>

      {/* Top */}
      <div ref={topRef} className="opacity-0">
        <AboutTop />
      </div>

      {/* Bottom (No GSAP applied) */}
      <AboutBottom />
    </section>
  );
};

export default About;
