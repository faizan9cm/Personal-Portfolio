import React from "react";
import { motion } from "framer-motion";

const BigAboutCard = ({ title, subtitle, duration, description, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Semi-transparent black background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close the modal when clicking outside
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="relative bg-[#111111] text-white p-6 rounded-lg max-w-5xl w-full h-100 border-2 border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc] transition-all duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-[#00ffcc] text-xl font-bold hover:text-white transition"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title and Subtitle */}
        <div className="flex flex-row justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-[#00ffcc]">{title}</h3>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        {/* Duration */}
        <p className="text-gray-500 text-sm italic mb-4">{duration}</p>

        {/* Description */}
        <p className="text-justify text-gray-300 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BigAboutCard;
