import React, { useState, useRef, useEffect } from "react";
import ProgressCircle from "./ProgressCircle";
import { skills } from "../utils/skillData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const [activeCategory, setActiveCategory] = useState("AI / ML");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [randomShapes, setRandomShapes] = useState([]);
  const sectionRef = useRef(null);
  const skillGridRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    setRandomShapes(skills[activeCategory].map(() => generateRandomClipPath()));
  }, [activeCategory]);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(skillGridRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillGridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative text-white pt-15 md:pt-25 pb-0 md:pb-20 px-10"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Main Heading */}
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] ml-[-25px] md:ml-0"
      >
        //: Skills
      </h3>

      {/* Category Tabs */}
      <div className="flex gap-4 mt-5 md:mt-10 mb-15 overflow-x-auto whitespace-nowrap px-4">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
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
      <div
        ref={skillGridRef}
        className="items-center mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-10"
      >
        {skills[activeCategory].map((skill, index) => (
          <div
            key={skill.name}
            className="relative flex justify-center items-center mx-auto p-4 border skill-border transition-all duration-500 w-32 h-32 sm:w-28 sm:h-28 md:w-42 md:h-42 tablet:w-36 tablet:h-36"
            style={{ clipPath: randomShapes[index] }}
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
