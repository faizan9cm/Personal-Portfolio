import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BigAboutCard = ({
  title,
  subtitle,
  duration,
  ImageSrc,
  description,
  extraDetails,
  onClose,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    gsap.from(".big-about-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".big-about-card",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-60 big-about-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#111111] text-white p-6 rounded-lg border-6 border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc] transition-all duration-300 
                   w-full max-w-5xl max-h-[90vh] flex flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-[#00ffcc] text-xl font-bold hover:text-white transition"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="overflow-y-auto flex-grow min-h-0 pb-4 pr-4">
          {/* Title and Subtitle */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
            <h3 className="text-xl md:text-2xl font-bold text-[#00ffcc]">
              {title}
            </h3>
            <p className="text-gray-400 text-lg">{subtitle}</p>
          </div>

          {/* Duration */}
          <p className="text-gray-500 text-sm italic mb-4">{duration}</p>

          {/* Expandable Image */}
          <AnimatePresence>
            {isExpanded && (
              <motion.img
                src={ImageSrc}
                alt="Detail Image"
                className="w-full h-auto rounded-lg mb-4 border border-[#00ffcc]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>

          {/* Description */}
          <p className="text-justify text-gray-300 mb-4 leading-relaxed break-words">
            {description}
          </p>

          {/* Expandable Extra Details */}
          <AnimatePresence>
            {isExpanded && extraDetails && extraDetails.length > 0 && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-justify text-gray-300 leading-relaxed list-disc pl-7 font-bold text-md mt-4 bg-[#222] p-4 rounded-lg border border-[#00ffcc]"
              >
                {extraDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-end pt-4">
          {extraDetails && extraDetails.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-1 border-2 border-[#00ffcc] text-white text-sm font-semibold rounded-sm group relative 
                 right-0 bottom-0 translate-x-2 translate-y-2"
            >
              <span className="absolute inset-0 bg-[#72fc3c] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black">
                {isExpanded ? "Show Less" : "Explore More"}
              </span>
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BigAboutCard;
