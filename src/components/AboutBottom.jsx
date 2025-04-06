import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
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

  const experienceHeadingRef = useRef(null);
  const educationHeadingRef = useRef(null);
  const experienceCardsRef = useRef([]);
  const educationCardsRef = useRef([]);

  useEffect(() => {
    // Animate Experience heading (eft to right)
    gsap.fromTo(
      experienceHeadingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceHeadingRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate Education heading (right to left)
    gsap.fromTo(
      educationHeadingRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationHeadingRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate Experience cards (left to right)
    experienceCardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });

    // Animate Education cards (right to left)
    educationCardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-10">
      {/* Experience & Education */}
      <div className="pt-20 md:pt-30 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3
            ref={experienceHeadingRef}
            className="text-2xl md:text-3xl font-bold text-[#72fc3c] pb-5 md:pb-10 ml-[-20px] md:ml-0"
          >
            //: Experience
          </h3>
          <div className="flex flex-col gap-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (experienceCardsRef.current[index] = el)}
              >
                <ExperienceCard
                  {...exp}
                  onClick={() => setSelectedExperience(exp)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            ref={educationHeadingRef}
            className="text-2xl md:text-3xl font-bold text-[#72fc3c] pb-5 md:pb-10 ml-[-20px] md:ml-0"
          >
            //: Education
          </h3>
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (educationCardsRef.current[index] = el)}
              >
                <EducationCard
                  {...edu}
                  onClick={() => setSelectedEducation(edu)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
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
