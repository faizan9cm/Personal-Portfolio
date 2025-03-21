import React, { useRef } from "react";

const ProjectCard = ({ title, tech, desc, link, imageSrc, onClick }) => {
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

      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto max-h-[8rem] object-cover rounded-md clip-square-offset-left-top transition-transform duration-500 group-hover:scale-105 border-1 border-[#252525]"
      />

      {/* Title Overlay */}
      <div className="pt-2 text-white text-center">
        <h3 className="text-base md:text-lg font-bold text-glow">{title}</h3>
        <p className="text-xs md:text-sm text-[#00ffcc]">{tech}</p>
        <p className="text-xs md:text-sm text-[#00ffcc]">{desc}</p>

        <a href={link} className="">
          [ Explore More ]
        </a>
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
