import React from "react";

const ContactLeft = () => {
  return (
    <div
      className="relative p-8 border-2 border-[#00ffcc] bg-black bg-opacity-20 backdrop-blur-lg shadow-lg 
                      cut-corner hover:shadow-[0_0_20px_5px_rgba(0,255,204,0.5)] transition-all duration-500"
    >
      {/* Holographic Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.1),transparent)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      <h4 className="text-xl font-semibold text-[#00ffcc]">//: Get in Touch</h4>
      <p className="my-10 text-gray-300 text-sm">
        Feel free to reach out. I am open to projects, collaborations, and
        futuristic discussions.
      </p>
      <div className="my-6 space-y-10 text-base font-mono">
        <p className="text-[#1fff8f]">
          Email:{" "}
          <span className="text-white hover:text-[#00ffcc] transition-colors duration-300">
            faizan9cm@gmail.com
          </span>
        </p>
        <p className="text-[#1fff8f]">
          Mobile:{" "}
          <span className="text-white hover:text-[#00ffcc] transition-colors duration-300">
            +91-9696979792
          </span>
        </p>
        <p className="text-[#1fff8f]">
          Location:{" "}
          <span className="text-white hover:text-[#00ffcc] transition-colors duration-300">
            New Delhi, IN
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
