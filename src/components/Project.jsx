import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BigProjectCard from "./BigProjectCard";
import projectList from "../utils/projectData";

const Project = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  const handleShowAllClick = () => {
    setShowAll(!showAll); // Toggle the `showAll` state

    // Scroll to the button with an offset when expanding, or to the top of the section when collapsing
    setTimeout(() => {
      if (showAll) {
        // Scroll to the top of the section when collapsing
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY; // Relative top position of the section
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      } else {
        // Scroll to the button with an offset when expanding
        const buttonTop =
          buttonRef.current.getBoundingClientRect().top + window.scrollY; // Relative top position of the button
        const offset = -550; // Additional offset in pixels
        window.scrollTo({
          top: buttonTop + offset, // Scroll to button position + offset
          behavior: "smooth",
        });
      }
    }, 100); // Small delay to allow the DOM to update
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="text-white pt-25 pb-10 px-10 relative"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <h3 className="text-4xl font-bold text-[#72fc3c] pb-10">//: Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 mt-10 mb-15 relative">
        <AnimatePresence>
          {projectList.slice(0, 3).map((project, index) => (
            <motion.div
              key={`cert-${index}`} // Unique key
              initial={
                showAll
                  ? {
                      opacity: 0,
                      scale: 0.5,
                      rotateX: -45,
                      rotateY: 15,
                      filter: "blur(10px)",
                    }
                  : {}
              }
              animate={
                showAll
                  ? {
                      opacity: 1,
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                      filter: "blur(0px)",
                    }
                  : {}
              }
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
              className="relative"
            >
              {/* Glitch Effect */}
              {showAll && (
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
              )}
              <ProjectCard
                {...project}
                onClick={() => setSelectedProject(project)} // Click handler
              />
            </motion.div>
          ))}

          {/* Animate the remaining cards when showAll is true */}
          {showAll &&
            projectList.slice(3).map((project, index) => (
              <motion.div
                key={`cert-${index + 3}`} // Ensures a unique key by offsetting the index
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
                className="relative"
              >
                {/* Glitch Effect */}
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
                  onClick={() => setSelectedProject(project)} // Click handler
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="relative">
        <motion.div
          ref={buttonRef} // Ref for the button
          onClick={handleShowAllClick}
          className="absolute right-10 bottom-0 flex items-center justify-center w-10 h-10 border-2 border-[#00ffcc] text-[#00ffcc] text-xl cursor-pointer"
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: showAll ? 180 : 0, y: showAll ? 50 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </div>

      {/* Render BigProjectCard in a Modal if selectedProject exists */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)", // For Safari support
          }}
          onClick={() => setSelectedProject(null)} // Close on outside click
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
