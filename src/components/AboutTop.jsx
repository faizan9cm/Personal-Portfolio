import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "./ImageCard";
import profileImage from "../assets/images/profile.png";

const generateRandomCharacters = (count) => {
  const characters = "@#/$%^:/&*";
  return Array.from({ length: count }, () => ({
    id: Math.random().toString(36).substr(2, 9),
    char: characters[Math.floor(Math.random() * characters.length)],
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    delay: Math.random() * 1,
  }));
};

const AboutTop = () => {
  const [showMore, setShowMore] = useState(false);
  const [characters, setCharacters] = useState(generateRandomCharacters(20));

  useEffect(() => {
    if (showMore) {
      setCharacters([]); // Remove neon characters when "Read More" is clicked
    } else {
      setCharacters(generateRandomCharacters(20)); // Regenerate if "Read Less" is clicked
    }
  }, [showMore]);

  return (
    <section className="w-full">
      {/* Floating Neon Characters */}
      <AnimatePresence>
        {characters.map(({ id, char, x, y, delay }) => (
          <motion.span
            key={id}
            initial={{ opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay }}
            className="absolute text-[#00ffcc] text-2xl font-bold pointer-events-none"
            style={{ left: x, top: y }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Top Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row lg:flex-row items-center h-auto md:h-90 w-full mx-auto bg-transparent clip-diagonal-top-right relative"
      >
        {/* Left Section */}
        <motion.div
          animate={{
            maxWidth: showMore ? "1200px" : "900px", // Stays within limits
            borderWidth: showMore ? "6px" : "0px",
            borderColor: showMore ? "#00ffcc" : "#000000",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`px-5 h-auto md:h-80 bg-[#161616] transition-all duration-500 clip-diagonal-top-right relative flex flex-col md:flex-row mx-auto ${
            showMore ? "mobile-expand" : ""
          }`}
        >
          {/* Image */}
          <div className="flex justify-center items-center py-6 md:py-0">
            <ImageCard imageSrc={profileImage} title="Faizan Habib" />
          </div>

          {/* Expandable Text Section */}
          <div className="flex items-center md:ml-5 w-full pb-20 md:pb-0">
            <div className="flex-1 flex flex-col text-sm md:text-lg text-justify leading-relaxed gap-4">
              <p>
                Masters in Computer Science with a focus on Artificial
                Intelligence and Machine Learning. My expertise spans machine
                learning, deep learning, and generative AI, enabling me to
                develop intelligent systems and data-driven solutions. I have
                experience working as a freelance Data Engineer and handling
                various machine learning projects, where I designed and
                optimized data pipelines, built predictive models, and worked on
                AI-driven applications.
              </p>
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, width: "100%" }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      width: "100%", // Expands horizontally in desktop
                      height: "auto", // Expands vertically in mobile
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-auto"
                  >
                    <p>
                      I have a strong foundation in software engineering, with
                      hands-on experience in web development, covering both
                      front-end and back-end technologies. My skills include
                      designing scalable web applications. The combination of AI
                      expertise and software engineering skills allows me to
                      create end-to-end solutions that integrate intelligence
                      with seamless user experiences.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4"
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 w-[140px] h-[45px] text-xs relative bg-[#0b090a] border-2 border-[#00ffcc] text-[#00ffcc] clip-diagonal overflow-hidden transition-all duration-300"
            >
              <span>{showMore ? "Read Less" : "Read More"}</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutTop;
