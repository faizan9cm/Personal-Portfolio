import React from "react";
import { motion } from "framer-motion";

const BigProjectCard = ({ title, tech, desc, link, imageSrc, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Semi-transparent black background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose} // Close the modal when clicking outside
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="relative bg-[#111] text-white p-6 rounded-lg max-w-4xl w-full h-140 shadow-lg border-8 border-[#00ffcc] clip-diagonal-bottom-left-big"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#00ffcc] hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover rounded-lg border border-[#252525]"
        />

        {/* Title & Details */}
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-[#72fc3c]">{title}</h3>
          <p className="text-md text-[#00ffcc] mt-2">{tech}</p>
          <p className="text-sm text-gray-300 mt-2">{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#00ffcc] text-black font-semibold rounded-md hover:bg-[#72fc3c] transition"
          >
            Explore More
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BigProjectCard;
