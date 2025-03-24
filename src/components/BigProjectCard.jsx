import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import githubIcon from "../assets/images/socials/github.png";

const BigProjectCard = ({
  title,
  tech,
  desc,
  link,
  sourceLink,
  imageSrc,
  extraDetails,
  onClose,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideIcons, setHideIcons] = useState(false);
  const scrollableRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableRef.current) {
        setHideIcons(scrollableRef.current.scrollTop > 10);
      }
    };

    const scrollElement = scrollableRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#111] text-white px-6 md:px-8 pt-8 md:pt-6 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col shadow-lg border-8 border-[#00ffcc] clip-diagonal-bottom-left-big"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#00ffcc] hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* GitHub Icon */}
        <motion.div
          className="absolute left-[36px] md:left-[44px] top-[112px] md:top-61 lg:top-68 z-20"
          animate={{ opacity: hideIcons ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#00ffcc] hover:text-white transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 rounded-sm transition duration-300 shadow shadow-[#00ff22] hover:shadow-md hover:shadow-[#eeff00]"
            />
          </a>
        </motion.div>

        {/* Deployed Project Icon */}
        <motion.div
          className="absolute top-4 left-1/2 md:left-[47%] lg:left-[50%] transform -translate-x-1/2 md:-translate-x-1/100 lg:-translate-x-2/3 z-20"
          animate={{ opacity: hideIcons ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={link || "#"}
            target={link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`inline-block transition-all px-3 py-1 rounded-md ${
              link
                ? "hover:text-white hover:bg-[#00ff2280]"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={(e) => !link && e.preventDefault()}
          >
            🔗
          </a>
        </motion.div>

        {/* Scrollable Content Wrapper */}
        <div
          ref={scrollableRef}
          className="overflow-y-auto flex-grow min-h-0 pb-4"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-35 md:h-85 lg:h-95 object-fill rounded-lg clip-square-offset-left-top border border-[#252525]"
          />

          {/* Title & Details */}
          <div className="mt-4">
            <h3 className="flex text-center text-xl font-bold text-[#72fc3c]">
              {title}
            </h3>
            <p className="text-md text-[#00ffcc] mt-2">{tech}</p>
            <p className="text-sm text-gray-300 mt-2">{desc}</p>

            {/* Expandable Extra Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-4 bg-[#222] rounded-lg border border-[#00ffcc]"
                >
                  <h4 className="text-lg font-bold text-[#00ffcc]">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                    {extraDetails
                      .split(". ")
                      .filter((point) => point.trim() !== "")
                      .map((point, index) => (
                        <li key={index} className="mt-1">
                          {point.trim()}
                        </li>
                      ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Explore More Button */}
        {extraDetails && (
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mb-4 px-3 py-1 border-2 border-[#00ffcc] text-white text-sm font-semibold rounded-xs clip-diagonal-bottom-left-button group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#72fc3c] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black">
                {isExpanded ? "Show Less" : "Explore More"}
              </span>
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BigProjectCard;
