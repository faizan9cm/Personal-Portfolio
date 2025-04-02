import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const menuItems = ["about", "projects", "skills", "certificates", "contact"];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isMounted ? 1 : 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-5 right-1 z-50 w-full flex justify-end px-4"
    >
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:flex items-center justify-center max-w-[650px] w-full py-3 bg-[#111] clip-diagonal border border-[#00ffcc] hover:border-[#111] transition-all duration-500 arcade-font text-sm space-x-10"
      >
        {menuItems.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isMounted ? 1 : 0, x: 0 }}
            transition={{
              duration: 0.6,
              delay: isMounted ? index * 0.2 : 0,
              ease: "easeOut",
            }}
            className="px-3 whitespace-nowrap rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]"
          >
            [ {section.charAt(0).toUpperCase() + section.slice(1)} ]
          </motion.button>
        ))}
      </motion.div>

      {/* Mobile & Tablet Navbar */}
      <div className="lg:hidden flex">
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

      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute right-4 top-12 w-44 bg-[#111] border border-[#00ffcc] p-3 space-y-2 text-center arcade-font text-sm overflow-hidden origin-top transition-all`}
      >
        {menuItems.map((section, index) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
            transition={{ duration: 0.4, delay: isOpen ? index * 0.1 : 0 }}
            className="block w-full py-2 whitespace-nowrap hover:shadow-md hover:shadow-[#c3ff49]"
          >
            [ {section.charAt(0).toUpperCase() + section.slice(1)} ]
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
