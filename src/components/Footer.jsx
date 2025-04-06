import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const linksRef = useRef(null);
  const socialsRef = useRef(null);
  const builtByRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (socialsRef.current) {
      gsap.fromTo(
        socialsRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (builtByRef.current) {
      gsap.fromTo(
        builtByRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="text-white pt-8 md:pt-20 pb-10 px-6 bg-[#0b090a] relative overflow-hidden"
    >
      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-[#00ffcc] to-[#0b090a] opacity-10 pointer-events-none"></div>

      {/* Holographic Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Right Section: Quick Links */}
        <div
          ref={linksRef}
          className="order-1 md:order-2 text-right md:text-right arcade-font"
        >
          <h4 className="text-xl font-bold text-[#67f82e] mb-4">
            //: Quick Links
          </h4>
          <ul className="space-y-2">
            {["about", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-gray-200 hover:text-[#00ffcc] transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Left Section: Social Links */}
        <div
          ref={socialsRef}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <h4 className="text-xs mb-8 text-left md:text-left">//: SOCIAL</h4>
          <div className="flex flex-col justify-center md:justify-start space-y-4">
            {[
              [
                "linkedin",
                "LINKEDIN",
                "https://linkedin.com/in/faizan9cm",
                "fab",
              ],
              ["github", "GITHUB", "https://github.com/faizan9cm", "fab"],
              [
                "kaggle",
                "KAGGLE",
                "https://www.kaggle.com/faizanhabibcs",
                "fab",
              ],
              [
                "patreon",
                "PATREON",
                "https://www.patreon.com/faizan9cm",
                "fab",
              ],
              ["envelope", "MAIL", "mailto:faizan9cm@gmail.com", "fas"],
            ].map(([icon, label, href, iconPrefix], i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#00ffcc] hover:text-[#67f82e] transition-colors duration-300"
              >
                <i className={`${iconPrefix} fa-${icon} text-xl`}></i>
                <span className="text-xs text-gray-200">[ {label} ]</span>
              </a>
            ))}
          </div>

          {/* Footer Text */}
          <div className="mt-10" ref={builtByRef}>
            <h1 className="flex justify-center md:justify-start font-bold text-xl">
              BUILT BY&nbsp;
              <p className="text-light-lime-green">FAIZAN HABIB</p>
            </h1>
            <p className="text-gray-300 text-sm mt-2">
              © 2025 Faizan Habib | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Neon Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-[#00ffcc] to-[#67f82e] animate-neon-line"></div>
    </footer>
  );
};

export default Footer;
