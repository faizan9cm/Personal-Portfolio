import React, { useState, useRef, useEffect } from "react";
import { skills } from "../utils/skillData";
import ProgressCircle from "./ProgressCircle";

const generateRandomClipPath = () => {
  const points = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 15) + 5
  );
  return `polygon(${points[0]}% 0%, ${100 - points[1]}% 0%, 100% ${
    points[2]
  }%, 100% ${100 - points[3]}%, ${100 - points[4]}% 100%, ${
    points[5]
  }% 100%, 0% ${100 - points[6]}%, 0% ${points[7]}%)`;
};

const Skill = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState("AI Engineer");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [randomShapes, setRandomShapes] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    setRandomShapes(skills[activeCategory].map(() => generateRandomClipPath()));
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Update the active category
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the section
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative text-white pt-25 pb-10 px-10"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Main Heading */}
      <h3 className="text-4xl font-bold text-[#72fc3c]">//: Skills</h3>

      {/* Category Tabs */}
      <div className="flex ml-30 gap-4 mt-10 mb-15 ">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)} // Use the handler
            className={`px-6 py-2 text-sm font-semibold transition-all duration-300 clip-diagonal ${
              activeCategory === category
                ? "bg-[#6cff32] text-black"
                : "bg-[#333] text-white hover:bg-[#444]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mx-30 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-30 mb-10">
        {skills[activeCategory].map((skill, index) => (
          <div
            key={skill.name}
            className="relative flex justify-center items-center p-4 border skill-border transition-all duration-500"
            style={{ clipPath: randomShapes[index] }} // Apply the random shape
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Holographic Icon Effect */}
            <div className="absolute w-20 h-20 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`absolute w-20 h-20 transition-all duration-700 ${
                  hoveredSkill === skill.name
                    ? "holo-glitch opacity-100"
                    : "opacity-0"
                }`}
                onError={(e) => {
                  // Fallback to default icon if the image fails to load
                  e.target.src = "/skills-icons/default.png";
                }}
              />
              <div
                className={`absolute w-20 h-20 rounded-full border border-[#00ffcc] transition-all duration-700 ${
                  hoveredSkill === skill.name
                    ? "holo-ring opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>

            {/* Progress Circle (Hide when hovered) */}
            <div
              className={`transition-opacity duration-700 ${
                hoveredSkill === skill.name ? "opacity-0" : "opacity-100"
              }`}
            >
              <ProgressCircle
                label={skill.name}
                percent={skill.level}
                color={skill.color}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
