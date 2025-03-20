import React, { useState, useRef } from "react";
import CertificateCard from "./CertificateCard";
import BigCertificateCard from "./BigCertificateCard";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../utils/certificateData";

const Certificate = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  const handleShowAllClick = () => {
    setShowAll(!showAll);

    setTimeout(() => {
      if (showAll) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      } else {
        const buttonTop =
          buttonRef.current.getBoundingClientRect().top + window.scrollY;
        const offset = -550;
        window.scrollTo({ top: buttonTop + offset, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="text-white pt-25 pb-10 px-10 relative"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <h3 className="text-4xl font-bold text-[#72fc3c] pb-10">
        //: Certifications
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mx-10 mb-15 relative">
        <AnimatePresence>
          {certifications.slice(0, 3).map((cert, index) => (
            <motion.div
              key={`cert-${index}`} // Unique key
              className="certificate-card"
              initial={
                showAll ? { opacity: 0, scale: 0.5, filter: "blur(10px)" } : {}
              }
              animate={
                showAll ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
              }
              exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <CertificateCard
                {...cert}
                onClick={() => setSelectedCertificate(cert)} // Click handler
              />
            </motion.div>
          ))}
          {showAll &&
            certifications.slice(3).map((cert, index) => (
              <motion.div
                key={`cert-${index + 3}`} // Ensures a unique key by offsetting the index
                className="certificate-card"
                initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
              >
                <CertificateCard
                  {...cert}
                  onClick={() => setSelectedCertificate(cert)} // Click handler
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="relative">
        <motion.div
          ref={buttonRef}
          onClick={handleShowAllClick}
          className="absolute right-12 bottom-0 flex items-center justify-center w-10 h-10 border-2 border-[#00ffcc] text-[#00ffcc] text-xl cursor-pointer"
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: showAll ? 180 : 0, y: showAll ? 50 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </div>

      {/* Render BigProjectCard in a Modal if selectedCertificate exists */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)", // For Safari support
          }}
          onClick={() => setSelectedCertificate(null)} // Close on outside click
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
