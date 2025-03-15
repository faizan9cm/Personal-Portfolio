const Project = () => {
  const projectList = [
    {
      title: "AI Interview Assistant",
      tech: "React, Node.js, OpenAI",
      link: "#",
    },
    { title: "Cyberpunk Portfolio", tech: "Tailwind, React", link: "#" },
    { title: "Speech Recognition Aisstant", tech: "Python, NLP", link: "#" },
  ];

  return (
    <section className="text-white py-20 px-10">
      <h3 className="text-4xl font-bold text-light-lime-green pb-15">
        //:Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-neon-green hover:shadow-neon transition-all"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm">{project.tech}</p>
            <a href={project.link} className="text-neon-green hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
