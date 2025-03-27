import React from "react";
import VisitCounter from "./VisitCounter";

const Footer = () => {
  return (
    <footer className="text-white pt-8 md:pt-20 pb-10 px-6 bg-[#0b090a] relative overflow-hidden">
      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-[#00ffcc] to-[#0b090a] opacity-10 pointer-events-none"></div>

      {/* Holographic Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Right Section: Quick Links */}
        <div className="order-1 md:order-2 text-right md:text-right arcade-font">
          <h4 className="text-xl font-bold text-[#67f82e] mb-4">
            //: Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-gray-200 hover:text-[#00ffcc] transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-200 hover:text-[#00ffcc] transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-200 hover:text-[#00ffcc] transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-200 hover:text-[#00ffcc] transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <VisitCounter />
        </div>

        {/* Left Section: Social Links */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h4 className="text-xs mb-8 text-left md:text-left">//: SOCIAL</h4>
          {/* Vertical layout */}
          <div className="flex flex-col justify-center md:justify-start space-y-4">
            <a
              href="https://linkedin.com/in/faizan9cm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00ffcc] hover:text-[#67f82e] transition-colors duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
              <span className="text-xs text-gray-200">[ LINKEDIN ]</span>
            </a>
            <a
              href="https://github.com/faizan9cm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00ffcc] hover:text-[#67f82e] transition-colors duration-300"
            >
              <i className="fab fa-github text-xl"></i>
              <span className="text-xs text-gray-200">[ GITHUB ]</span>
            </a>
            <a
              href="https://www.kaggle.com/faizanhabibcs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00ffcc] hover:text-[#67f82e] transition-colors duration-300"
            >
              <i className="fab fa-kaggle text-xl"></i>
              <span className="text-xs text-gray-200">[ KAGGLE ]</span>
            </a>
            <a
              href="https://www.patreon.com/faizan9cm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#00ffcc] hover:text-[#67f82e] transition-colors duration-300"
            >
              <i className="fab fa-patreon text-xl"></i>
              <span className="text-xs text-gray-200">[ PATREON ]</span>
            </a>
            <a
              href="mailto:faizan9cm@gmail.com"
              className="flex items-center space-x-2 text-[#00ffcc] hover:text-[#67f82e] transition-colors duration-300"
            >
              <i className="fas fa-envelope text-xl"></i>
              <span className="text-xs text-gray-200">[ MAIL ]</span>
            </a>
          </div>

          {/* Footer Text */}
          <div className="mt-10">
            <h1 className="flex justify-center md:justify-start font-bold text-xl">
              BUILT BY&nbsp;
              <p className="text-light-lime-green">FAIZAN HABIB</p>
            </h1>
            <p className="text-gray-300 text-sm mt-2">
              © 2025 Faizan Habib | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Neon Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-[#00ffcc] to-[#67f82e] animate-neon-line"></div>
    </footer>
  );
};

export default Footer;
