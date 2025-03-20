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
    <section>
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

export default AboutBottom;
