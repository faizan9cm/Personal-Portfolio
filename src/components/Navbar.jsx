const Navbar = () => {
  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex items-center justify-center w-6/12 py-3 mx-6 bg-[#111] clip-diagonal fixed top-6 right-5 z-50 border-1 border-[#00ffcc] hover:border-[#111] transition-all duration-500 arcade-font text-sm space-x-10">
      <button
        onClick={() => scrollToSection("about")}
        className="px-4 flex justify- rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
      >
        [ About ]
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="px-4 flex justify- rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
      >
        [ Projects ]
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className="px-4 flex justify- rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
      >
        [ Skills ]
      </button>
      <button
        onClick={() => scrollToSection("certificates")}
        className="px-4 flex justify- rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
      >
        [ Creds ]
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="px-4 flex justify- rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
      >
        [ Contact ]
      </button>
    </div>
  );
};

export default Navbar;
