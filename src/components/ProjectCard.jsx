import React, { useRef } from "react";
import githubIcon from "../assets/images/socials/github.png";

const ProjectCard = ({
  title,
  tech,
  desc,
  sourceLink,
  link,
  imageSrc,
  onClick,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // X coordinate within the card
      const y = e.clientY - rect.top; // Y coordinate within the card
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      // Reset the transform to default
      card.style.transform = "scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-[20rem] h-auto bg-[#111111] px-2 pt-2 rounded-md clip-diagonal-bottom-left group overflow-hidden transition-transform duration-500 cursor-pointer sm:max-w-[16rem] md:max-w-[22rem]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Neon Green Holographic Glow Effect */}
      <div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            300px circle at var(--mouse-x, 0) var(--mouse-y, 0),
            
            rgba(13, 252, 196, 0.4),
            
            transparent 50%
          )`,
        }}
      ></div>

      {/* Glowing Border Effect */}
      <div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          mask: `radial-gradient(
            200px circle at var(--mouse-x, 0) var(--mouse-y, 0),
            white,
            transparent 80%
          )`,
          WebkitMask: `radial-gradient(
            200px circle at var(--mouse-x, 0) var(--mouse-y, 0),
            white,
            transparent 80%
          )`,
          border: `1px solid rgba(13, 252, 196, 1)`,
        }}
      ></div>

      {/* GitHub Icon  */}
      <div className="absolute left-5 top-[82px] z-20">
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#00ffcc] hover:text-white transition-all"
          onClick={(e) => e.stopPropagation()} // Prevents triggering the parent onClick
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-8 h-8 sm:w-8 sm:h-8 rounded-sm transition duration-300 shadow shadow-[#00ff22] hover:shadow-md hover:shadow-[#eeff00]"
          />
        </a>
      </div>

      {/* Deployed Project Icon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href={link || "#"}
          target={link ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={`inline-block transition-all px-3 py-1 rounded-md ${
            link
              ? "hover:text-white hover:bg-[#00ff2280] "
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={(e) => !link && e.preventDefault()}
        >
          🔗
        </a>
      </div>

      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto max-h-[8rem] object-cover rounded-md clip-square-offset-left-top transition-transform duration-500 group-hover:scale-101 border-1 border-[#252525]"
      />

      {/* Title Overlay */}
      <div className="py-2 text-white text-center relative z-10 pointer-events-auto">
        <h3 className="text-base md:text-lg font-bold text-glow">{title}</h3>
        <p className="flex text-justify px-2 py-1 text-xs md:text-xs text-[#00ffcc]">
          {desc}
        </p>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-[#1da519] rounded-full"
          style={{
            top: "var(--mouse-y, 0)",
            left: "var(--mouse-x, 0)",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 150, 0.6), 0 0 30px rgba(0, 150, 255, 0.6)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
