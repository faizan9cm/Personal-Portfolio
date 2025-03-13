import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrambleText from "../utils/ScrambleText";

const ShutterScreen = ({ onEnter }) => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [showText, setShowText] = useState(false);

  const totalDuration = 1000; // 1 second for full animation
  const steps = 30; // Number of steps for counter

  useEffect(() => {
    let interval;
    const incrementTime = totalDuration / steps;

    interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoadingDone(true);

          // Delay before showing text inside brackets
          setTimeout(() => setShowText(true), 200);
          return 100;
        }
        return prev + 5;
      });
    }, incrementTime);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(onEnter, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-black arcade-font z-50">
      {/* Top Half */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-light-lime-green flex items-center justify-center"
        initial={{ y: 0 }}
        animate={clicked ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Bottom Half */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-light-lime-green flex items-center justify-center"
        initial={{ y: 0 }}
        animate={clicked ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Navbar (Appears After Loading Completes) */}
      {!clicked && loadingDone && (
        <div className="absolute top-10 right-10 text-xl">
          <ul className="flex flex-row space-x-12">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item} className="px-4">
                <button
                  onClick={() => handleClick(item)}
                  className="focus:outline-none cursor-pointer"
                >
                  [&nbsp;
                  <span className="inline-block min-w-[10ch]">
                    {showText && <ScrambleText text={item} speed={200} />}
                  </span>
                  &nbsp;]
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* {!clicked && loadingDone && (
        <div className="absolute top-10 right-10 text-xl">
          <ul className="flex flex-row space-x-12">
            <li className="px-4">
              [
              <span className="inline-block min-w-[6ch]">
                {showText && <ScrambleText text="About" speed={200} />}
              </span>
              ]
            </li>
            <li className="px-4">
              [
              <span className="inline-block min-w-[12ch]">
                {showText && <ScrambleText text="Projects" speed={200} />}
              </span>
              ]
            </li>
            <li className="px-4">
              [
              <span className="inline-block min-w-[6ch]">
                {showText && <ScrambleText text=" Skills " speed={200} />}
              </span>
              ]
            </li>
            <li className="px-4">
              [
              <span className="inline-block min-w-[10ch]">
                {showText && <ScrambleText text="Contact" speed={200} />}
              </span>
              ]
            </li>
          </ul>
        </div>
      )} */}

      {/* Loading (Left) */}
      {!clicked && (
        <div className="absolute left-15 text-8xl">
          <ScrambleText
            text="Loading"
            speed={totalDuration / "Loading".length}
          />
        </div>
      )}

      {/* 100% Counter (Right) */}
      {!clicked && <div className="absolute right-15 text-8xl">{count}%</div>}

      {/* Click to Enter (Appears After Loading Completes) */}
      {!clicked && loadingDone && (
        <motion.div
          className="absolute bottom-20 right-25 cursor-pointer z-10 text-2xl font-bold"
          onClick={handleClick}
        >
          [&nbsp;
          <span className="inline-block min-w-[20ch]">
            {showText && <ScrambleText text="Click  to  Explore" speed={50} />}
          </span>
          &nbsp;]
        </motion.div>
      )}
    </div>
  );
};

export default ShutterScreen;
