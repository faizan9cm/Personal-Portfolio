import { useEffect, useState } from "react";

const ProgressCircle = ({ label, percent, color }) => {
  const dots = 70; // Total dots
  const rotate = 360 / dots;
  const [marked, setMarked] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    let step = Math.max(1, percent / 20); // Adaptive step size for faster animation

    const animate = () => {
      start += step;

      setMarked(Math.min(Math.floor((dots * start) / 100), dots));
      setCurrentPercent(Math.min(Math.floor(start), percent));

      if (start < percent) {
        requestAnimationFrame(animate);
      }
    };

    setMarked(0);
    setCurrentPercent(0);
    requestAnimationFrame(animate); // Start animation
  }, [percent]);

  return (
    <div className="relative flex flex-col items-center m-4 sm:m-10 scale-75 sm:scale-95 tablet-scale">
      {/* Outer Circle */}
      <div className="relative w-[min(40vw,200px)] h-[min(40vw,55px)] flex justify-center items-center">
        {/* Dots */}
        {[...Array(dots)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[1px] h-[12px] rounded-sm ${
              i < marked ? "animate-glow" : "bg-[#0007]"
            }`}
            style={{
              transform: `rotate(${i * rotate}deg) translateY(-560%)`,
              backgroundColor: i < marked ? color : undefined,
              boxShadow: i < marked ? `0 0 10px ${color}` : undefined,
            }}
          />
        ))}
        {/* Center Text - Inside the Circle */}
        <div className="absolute flex flex-col items-center text-white">
          <h2 className="text-3xl md:text-2xl font-light">{currentPercent}%</h2>
          <small className="text-lg md:text-lg block">{label}</small>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
