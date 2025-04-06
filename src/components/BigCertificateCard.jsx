import React from "react";
import { motion } from "framer-motion";

const BigCertificateCard = ({
  title,
  issuer,
  date,
  imageSrc,
  certificateLink,
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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="relative bg-[#111] text-white px-4 md:px-0 pt-8 md:pt-6 rounded-lg max-w-[90%] md:max-w-2xl lg:max-w-3xl w-full h-auto lg:h-150 min-h-[65vh] md:min-h-[70vh] shadow-lg border-6 border-[#00ffcc] hover:shadow-lg hover:shadow-[#00ffcc] transition-all duration-300 flex flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-[#00ffcc] hover:text-white transition-colors"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Certificate Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-50 md:w-[90%] md:h-[450px] object-fill rounded-lg border border-[#00ffcc] mx-auto"
        />

        {/* Certificate Details */}
        <div className="flex flex-col items-center text-center text-[#72fc3c] my-auto md:my-auto lg:my-auto">
          <h3 className="text-md md:text-2xl lg:text-xl font-bold text-glow">
            {title}
          </h3>
          <p className="text-md md:text-lg lg:text-sm text-[#00ffcc]">
            Issued by: {issuer}
          </p>
          <p className="text-md md:text-lg lg:text-sm text-[#00ffcc]">
            Date: {date}
          </p>
        </div>

        {/* Verify Certificate Button */}
        <div className="absolute bottom-3 md:bottom-6 lg:bottom-4 right-2 sm:right-4 font-semibold">
          <a
            href={certificateLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative border ${
              certificateLink
                ? "border-2 border-[#00ffcc] text-[#00ffcc] group clip-diagonal"
                : "border-[#3f8880] text-[#3f8880] clip-diagonal cursor-not-allowed"
            } text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2 max-w-fit`} // Reduced px
            onClick={(e) => !certificateLink && e.preventDefault()}
          >
            {certificateLink ? (
              <>
                <span className="absolute inset-0 bg-[#00ffcc] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <span className="relative z-10 group-hover:text-black">
                  Verify Certificate
                </span>
              </>
            ) : (
              <span className="relative z-10 text-[#3f8880]">
                Verify Certificate
              </span>
            )}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BigCertificateCard;
