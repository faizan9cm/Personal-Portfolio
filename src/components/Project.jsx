import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import BigProjectCard from "./BigProjectCard";
import { projectList } from "../utils/projectData";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate initial project cards
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

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
      className="text-white pt-15 md:pt-25 pb-10 px-4 sm:px-6 md:px-10 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-0 md:pb-10 opacity-0"
      >
        //: Projects
      </h3>

      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mt-6 md:mt-10 relative justify-center ${
          showAll ? "mb-6" : "mb-14"
        }`}
      >
        <AnimatePresence>
          {projectList.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative flex justify-center opacity-0"
            >
              <ProjectCard
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}

          {showAll &&
            projectList.slice(3).map((project, index) => (
              <motion.div
                key={index + 3}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotateX: -45,
                  rotateY: 15,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  rotateY: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  rotateX: -45,
                  rotateY: 15,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="relative flex justify-center"
              >
                <motion.div
                  initial={{ opacity: 0.5, x: -5 }}
                  animate={{
                    opacity: [0.5, 1, 0.7, 1],
                    x: [0, 3, -2, 0],
                    y: [0, -2, 1, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: 2,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-[#00ffcc] opacity-0 blur-xs"
                />
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="relative">
        <motion.div
          ref={buttonRef}
          onClick={handleShowAllClick}
          className="absolute right-4 sm:right-6 md:right-10 bottom-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-[#00ffcc] text-[#00ffcc] text-lg sm:text-xl cursor-pointer"
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: showAll ? 180 : 0, y: showAll ? 50 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <BigProjectCard
              {...selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
