import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    // <div className="fixed top-6 right-5 z-50 w-full flex justify-end px-4">
    <div className="fixed top-5 right-1 z-50 w-full flex justify-end px-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center max-w-[650px] w-full py-3 bg-[#111] clip-diagonal border border-[#00ffcc] hover:border-[#111] transition-all duration-500 arcade-font text-sm space-x-10">
        {["about", "projects", "skills", "certificates", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="px-3 whitespace-nowrap rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
            >
              [ {section.charAt(0).toUpperCase() + section.slice(1)} ]
            </button>
          )
        )}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-[#111] border border-[#00ffcc] hover:border-[#c3ff49] transition-all duration-300 rounded-md"
        >
          {isOpen ? (
            <X size={24} color="#00ffcc" />
          ) : (
            <Menu size={24} color="#00ffcc" />
          )}
        </button>
      </div>

      <div
        className={`absolute right-4 top-12 w-44 bg-[#111] border border-[#00ffcc] p-3 space-y-2 text-center arcade-font text-sm overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {["about", "projects", "skills", "certificates", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full py-2 whitespace-nowrap hover:shadow-md hover:shadow-[#c3ff49]"
            >
              [ {section.charAt(0).toUpperCase() + section.slice(1)} ]
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
