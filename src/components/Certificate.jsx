const Certificate = () => {
  const certifications = [
    { title: "Machine Learning", provider: "Coursera", link: "#" },
    { title: "Full Stack Web Development", provider: "Udemy", link: "#" },
  ];

  return (
    <section className="text-white py-20 px-10">
      <h2 className="text-4xl font-bold neon-text">[ Certifications ]</h2>
      <ul className="mt-6">
        {certifications.map((cert, index) => (
          <li key={index} className="mb-4">
            <span className="text-lg">{cert.title}</span> -{" "}
            <span className="text-sm">{cert.provider}</span>
            <a
              href={cert.link}
              className="text-neon-green hover:underline ml-2"
            >
              Verify
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificate;
