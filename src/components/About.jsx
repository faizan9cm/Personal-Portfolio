import React, { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import ImageCard from "./ImageCard";
import profileImage from "../assets/images/profile.png";
import { motion, AnimatePresence } from "framer-motion";
import BigAboutCard from "./BigAboutCard";

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

const About = ({ id }) => {
  const [showMore, setShowMore] = useState(false);
  const [characters, setCharacters] = useState(generateRandomCharacters(20));
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const experience = [
    {
      title: "Data Analyst Intern",
      subtitle: "RetroFox International Shipping LLP",
      duration: "Jun 2024 - Nov 2024",
      description:
        "Developed data models to improve logistics efficiency, analyzed large datasets, and optimized operational strategies.",
    },
    {
      title: "Competitive Programming Intern",
      subtitle: "AMU - Dept. of Computer Science",
      duration: "Mar 2023 - May 2023",
      description:
        "Assisted students in algorithmic problem-solving, optimized coding approaches, and built real-world programming challenges.",
    },
  ];

  const education = [
    {
      title: "Master of Computer Science and Applications",
      subtitle: "Aligarh Muslim University",
      duration: "2022 - 2024",
      description:
        "Specialized in AI & ML, worked on deep learning, LLMs, and computer vision projects.",
    },
    {
      title: "Bachelor of Science in Mathematics",
      subtitle: "Dr. Ram Manohar Lohia Avadh University",
      duration: "2020",
      description:
        "Gained expertise in mathematical modeling, data structures, and problem-solving techniques.",
    },
  ];

  useEffect(() => {
    if (showMore) {
      setCharacters([]); // Remove neon characters when "Read More" is clicked
    } else {
      setCharacters(generateRandomCharacters(20)); // Regenerate if "Read Less" is clicked
    }
  }, [showMore]);

  return (
    <section
      id={id}
      className="relative text-white pt-25 pb-20 px-10 overflow-hidden"
    >
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

      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <h3 className="text-4xl font-bold text-[#72fc3c] pb-20">//: About Me</h3>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center h-90 w-300 px-5 mx-10 bg-transparent clip-diagonal-top-right relative"
      >
        {/* Left Section */}
        <motion.div
          animate={{
            width: showMore ? "100%" : "50%",
            borderColor: showMore ? "#00ffcc" : "#000000", // Black by default, Cyan on click
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`px-5 py-5 h-80 bg-black transition-all duration-500 clip-diagonal-top-right relative flex border-2`} // Default border width
          style={{
            borderWidth: "6px", // Default border width
          }}
        >
          {/* Image */}
          <div className="flex-none w-[200px] flex items-center justify-center">
            {" "}
            {/* Center ImageCard vertically */}
            <ImageCard imageSrc={profileImage} title="Faizan Habib" />
          </div>

          {/* Expandable Text Section */}
          <div className="flex items-center ml-5">
            <div className="flex-1 flex flex-col text-md text-justify leading-relaxed gap-4">
              <p>
                Masters in Computer Science with a focus on Artificial
                Intelligence and Machine Learning. Skilled in ML, deep learning,
                and full-stack web development.
              </p>
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>
                      Passionate about building AI-driven solutions and
                      cyberpunk-inspired designs. Exploring cutting-edge
                      technologies and futuristic UX/UI trends.
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
              className="px-6 py-2 w-[120px] h-[40px] text-xs relative bg-[#0b090a] border-2 border-[#00ffcc] text-[#00ffcc] clip-diagonal overflow-hidden transition-all duration-300"
            >
              <span>{showMore ? "Read Less" : "Read More"}</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Experience & Education */}
      <div className="pt-40 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-3xl font-bold text-[#72fc3c] pb-10">
            //: Experience
          </h3>
          <div className="flex flex-col gap-6">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                {...exp}
                onClick={() => setSelectedExperience(exp)} // Click handler
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#72fc3c] pb-10">
            //: Education
          </h3>
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                {...edu}
                onClick={() => setSelectedEducation(edu)} // Click handler
              />
            ))}
          </div>
        </div>
      </div>

      {/* Render BigAboutCard in a Modal if selectedExperience exists */}
      {selectedExperience && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={() => setSelectedExperience(null)} // Close on outside click
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <BigAboutCard
              {...selectedExperience}
              onClose={() => setSelectedExperience(null)}
            />
          </div>
        </div>
      )}

      {/* Render BigAboutCard in a Modal if selectedEducation exists */}
      {selectedEducation && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={() => setSelectedEducation(null)} // Close on outside click
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <BigAboutCard
              {...selectedEducation}
              onClose={() => setSelectedEducation(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
