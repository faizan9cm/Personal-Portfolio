import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { experience } from "../utils/experienceData";
import { education } from "../utils/educationData";
import BigAboutCard from "./BigAboutCard";

gsap.registerPlugin(ScrollTrigger);

const AboutBottom = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const sectionRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    const animateExperience = () => {
      gsap.fromTo(
        expRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    const animateEducation = () => {
      gsap.fromTo(
        eduRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eduRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    animateSection();
    animateExperience();
    animateEducation();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 md:px-10 opacity-0">
      {/* Experience & Education */}
      <div className="pt-20 md:pt-30 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div ref={expRef} className="opacity-0">
          <h3 className="text-2xl md:text-3xl font-bold text-[#72fc3c] pb-5 md:pb-10 ml-[-20px] md:ml-0">
            //: Experience
          </h3>
          <div className="flex flex-col gap-6">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                {...exp}
                onClick={() => setSelectedExperience(exp)}
              />
            ))}
          </div>
        </div>

        <div ref={eduRef} className="opacity-0">
          <h3 className="text-2xl md:text-3xl font-bold text-[#72fc3c] pb-5 md:pb-10 ml-[-20px] md:ml-0">
            //: Education
          </h3>
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                {...edu}
                onClick={() => setSelectedEducation(edu)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Render BigAboutCard in a Modal if selectedExperience exists */}
      {selectedExperience && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90%] md:max-w-[70%]"
          >
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
          onClick={() => setSelectedEducation(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90%] md:max-w-[70%]"
          >
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

export default AboutBottom;
