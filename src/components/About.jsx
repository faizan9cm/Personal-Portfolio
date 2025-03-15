import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import ImageCard from "./ImageCard";
import profileImage from "../assets/images/profile.png";

const About = () => {
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

  return (
    <section className="text-white py-20 px-10">
      <h3 className="text-4xl font-bold text-light-lime-green pb-15">
        //:About Me
      </h3>
      {/* Profile and Info Section */}
      <div className="flex flex-col md:flex-row items-center mt-8 bg-[#111] p-6 mx-10 rounded-md shadow-lg">
        {/* Profile Image */}
        <ImageCard imageSrc={profileImage} title="Faizan Habib" />

        {/* General Introduction */}
        <div className="md:ml-10 mt-6 md:mt-0">
          <p className="text-xl max-w-3xl leading-relaxed text-justify">
            Masters in Computer Science with a focus on Artificial Intelligence
            and Machine Learning. Skilled in developing and deploying ML models,
            deep learning architectures, and large language models. Also
            experienced in working with web technologies, including front-end
            and back-end development.
          </p>
        </div>
      </div>
      {/* Experience & Education Section */}
      <div className="pt-20 mt-12 grid md:grid-cols-2 gap-10">
        {/* Experience */}
        <div>
          <h3 className="text-3xl font-bold text-light-lime-green pb-10">
            //:Experience
          </h3>

          <div className="relative flex justify-center">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-70 w-[2px] h-full bg-light-lime-green"></div>

            <div className="flex flex-col gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-70 w-4 h-4 bg-light-lime-green rounded-full border-2 border-[#0b090a]"></div>

                  {/* Experience Card */}
                  <ExperienceCard {...exp} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold text-light-lime-green pb-10">
            //:Education
          </h3>

          <div className="relative flex justify-center">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-70 w-[2px] h-full bg-light-lime-green"></div>

            <div className="flex flex-col gap-6">
              {education.map((exp, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-70 w-4 h-4 bg-light-lime-green rounded-full border-2 border-[#0b090a]"></div>

                  {/* Experience Card */}
                  <EducationCard {...exp} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
