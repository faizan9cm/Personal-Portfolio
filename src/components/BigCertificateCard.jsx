import React from "react";
import { motion } from "framer-motion";

const BigCertificateCard = ({ title, issuer, date, imageSrc, onClose }) => {
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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="relative bg-[#111] text-white p-6 rounded-lg max-w-[100%] md:max-w-4xl w-full h-auto md:h-140 min-h-[80vh] shadow-lg border border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc] transition-all duration-300 flex flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-[#00ffcc] text-xl font-bold hover:text-white transition-colors"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Certificate Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 md:h-64 object-cover rounded-lg border border-[#00ffcc]"
        />

        {/* Certificate Details */}
        <div className="mt-4 text-white text-center flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-glow">{title}</h3>
          <p className="text-lg text-[#00ffcc]">Issued by: {issuer}</p>
          <p className="text-lg text-[#00ffcc]">Date: {date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BigCertificateCard;
