import { useEffect, useState } from "react";

const ProgressCircle = ({ label, percent, color }) => {
  const dots = 70; // Total dots
  const rotate = 360 / dots;
  const [marked, setMarked] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarked((prev) => {
        if (prev < Math.floor((dots * percent) / 100)) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });

      setCurrentPercent((prev) => {
        if (prev < percent) {
          return prev + 1;
        } else {
          return percent;
        }
      });
    }, 0.5); // Speed of the animation

    return () => clearInterval(interval);
  }, [percent]);

  return (
    <div className="relative m-10 flex flex-col items-center">
      {/* Outer Circle */}
      <div className="relative w-[50px] h-[50px] flex justify-center items-center">
        {/* Dots */}
        {[...Array(dots)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[1px] h-[12px] rounded-sm ${
              i < marked ? "animate-glow" : "bg-[#0007]"
            }`}
            style={{
              transform: `rotate(${i * rotate}deg) translateY(-60px)`,
              backgroundColor: i < marked ? color : undefined,
              boxShadow: i < marked ? `0 0 10px ${color}` : undefined,
            }}
          />
        ))}
        {/* Center Text - Inside the Circle */}
        <div className="absolute flex flex-col items-center text-white">
          <h2 className="text-xl font-light">{currentPercent}%</h2>
          <small className="text-md block">{label}</small>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
