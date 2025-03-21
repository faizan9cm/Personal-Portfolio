import React, { useRef } from "react";

const CertificateCard = ({ title, issuer, date, imageSrc, onClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative max-w-[22rem] h-auto bg-[#0b0f14] px-4 pt-4 rounded-lg overflow-hidden transition-transform duration-500 border border-[#00ffcc] shadow-[0px_0px_15px_#00ffcc] group cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 255, 204, 0.15),
            rgba(0, 255, 153, 0.1),
            rgba(0, 128, 255, 0.1),
            transparent 80%)`,
        }}
      ></div>

      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-[2px] border-[#00ffcc] animate-pulse"></div>

      <div
        className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 255, 204, 0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <img
        src={imageSrc}
        alt={title}
        className="w-full h-auto max-h-32 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.target.src = "/path/to/local/fallback-image.jpg";
        }}
      />

      <div className="pt-3 text-white text-center">
        <h3 className="text-base md:text-lg font-bold text-glow">{title}</h3>
        <p className="text-sm md:text-base text-[#00ffcc]">
          Issued by: {issuer}
        </p>
        <p className="text-sm md:text-base text-[#00ffcc]">Date: {date}</p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute w-2 h-2 bg-[#00ffcc] rounded-full"
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

export default CertificateCard;
