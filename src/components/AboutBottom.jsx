import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { experience } from "../utils/experienceData";
import { education } from "../utils/educationData";
import BigAboutCard from "./BigAboutCard";

const AboutBottom = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);

  return (
    <section className="px-4 sm:px-6 md:px-10">
      {/* Experience & Education */}
      <div className="pt-20 md:pt-30 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
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

        <div>
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
