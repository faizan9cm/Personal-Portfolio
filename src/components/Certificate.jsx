import React, { useState, useRef, useEffect } from "react";
import CertificateCard from "./CertificateCard";
import BigCertificateCard from "./BigCertificateCard";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "../utils/certificateData";

gsap.registerPlugin(ScrollTrigger);

const Certificate = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, [showAll]);

  const handleShowAllClick = () => {
    setShowAll((prev) => !prev);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const visibleCerts = showAll ? certifications : certifications.slice(0, 3);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="text-white pt-15 md:pt-25 pb-12 px-4 sm:px-6 md:px-10 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-0 md:pb-15"
      >
        //: Certifications
      </h3>

      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 sm:mt-6 px-6 sm:px-8 md:px-12 max-w-screen-xl mx-auto ${
          showAll ? "mb-0" : "mb-15"
        }`}
      >
        <AnimatePresence>
          {visibleCerts.map((cert, index) => (
            <motion.div
              key={cert.title + index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="certificate-card"
            >
              <CertificateCard
                {...cert}
                onClick={() => setSelectedCertificate(cert)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative">
        <motion.div
          onClick={handleShowAllClick}
          className="absolute right-4 md:right-12 bottom-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#00ffcc] text-[#00ffcc] text-lg sm:text-xl cursor-pointer"
          animate={{ rotate: showAll ? 180 : 0, y: showAll ? 50 : 0 }}
          transition={{ duration: 0.4 }}
        >
          ↓
        </motion.div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] p-2 sm:p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setSelectedCertificate(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <BigCertificateCard
              {...selectedCertificate}
              onClose={() => setSelectedCertificate(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
