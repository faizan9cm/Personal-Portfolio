const Skill = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Machine Learning",
    "Python",
  ];

  return (
    <section className="text-white py-20 px-10">
      <h2 className="text-4xl font-bold neon-text">[ Skills ]</h2>
      <div className="flex flex-wrap gap-4 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 border border-neon-green hover:bg-neon-green hover:text-black transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
