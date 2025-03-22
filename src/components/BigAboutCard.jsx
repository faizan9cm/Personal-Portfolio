import React from "react";
import { motion } from "framer-motion";

const BigAboutCard = ({
  title,
  subtitle,
  duration,
  description,
  extraDetails,
  onClose,
}) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#111111] text-white p-6 rounded-lg border-2 border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc] transition-all duration-300 
                   w-[100%] h-auto md:w-full md:max-w-5xl"
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
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-[#00ffcc]">
            {title}
          </h3>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        {/* Duration */}
        <p className="text-gray-500 text-sm italic mb-4">{duration}</p>

        {/* Description */}
        <p className="text-justify text-gray-300 mb-4 leading-relaxed break-words">
          {description}
        </p>

        {/* Extra details */}
        {extraDetails && extraDetails.length > 0 && (
          <ul className="text-justify text-gray-300 leading-relaxed list-disc pl-5 font-bold text-xl">
            {extraDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BigAboutCard;
