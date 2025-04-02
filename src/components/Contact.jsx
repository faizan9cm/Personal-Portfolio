import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ id }) => {
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate left section (ContactLeft)
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate right section (ContactRight)
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id={id}
      className="text-white pt-15 md:pt-25 pb-10 md:pb-28 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Section Heading */}
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-8 md:pb-15 ml-[-10px] md:ml-0 opacity-0"
      >
        //: Contact
      </h3>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-24 items-center relative">
        {/* Left Side: Contact Info Panel */}
        <div ref={leftRef} className="opacity-0">
          <ContactLeft />
        </div>

        {/* Right Side: Contact Form */}
        <div ref={rightRef} className="opacity-0">
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contact;
