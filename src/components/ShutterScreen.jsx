import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrambleText from "../utils/ScrambleText";

const ShutterScreen = ({ onEnter }) => {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);
  const [showText, setShowText] = useState(false);
  const [erasing, setErasing] = useState(false);

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

  // const handleClick = () => {
  //   setClicked(true);
  //   setTimeout(onEnter, 1000);
  // };

  const handleClick = () => {
    if (!erasing) {
      setErasing(true); // Start erasing animation
      setTimeout(() => {
        setClicked(true); // After erasing, trigger shutter effect
        setTimeout(onEnter, 1000);
      }, 1000); // Give enough time for erase effect
    }
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
        <div className="absolute top-10 right-10 text-xl cursor-pointer">
          <ul className="flex flex-row space-x-12">
            <li className="px-6 flex items-center gap-2" onClick={handleClick}>
              [
              <span className="inline-block min-w-[5ch]">
                {showText && (
                  <ScrambleText text="About" speed={200} erase={erasing} />
                )}
              </span>
              ]
            </li>
            <li className="px-6 flex items-center gap-2" onClick={handleClick}>
              [
              <span className="inline-block min-w-[8ch]">
                {showText && (
                  <ScrambleText text="Projects" speed={200} erase={erasing} />
                )}
              </span>
              ]
            </li>
            <li className="px-6 flex items-center gap-2" onClick={handleClick}>
              [
              <span className="inline-block min-w-[6ch]">
                {showText && (
                  <ScrambleText text="Skills" speed={200} erase={erasing} />
                )}
              </span>
              ]
            </li>
            <li className="px-6 flex items-center gap-2" onClick={handleClick}>
              [
              <span className="inline-block min-w-[7ch]">
                {showText && (
                  <ScrambleText text="Contact" speed={200} erase={erasing} />
                )}
              </span>
              ]
            </li>
          </ul>
        </div>
      )}

      {/* Loading (Left) */}
      {!clicked && (
        <div className="absolute left-15 text-8xl">
          <ScrambleText
            text="Loading"
            speed={totalDuration / "Loading".length}
            erase={erasing}
          />
        </div>
      )}

      {/* 100% Counter (Right) */}
      {!clicked && <div className="absolute right-15 text-8xl">{count}%</div>}

      {/* Click to Enter (Appears After Loading Completes) */}
      {!clicked && loadingDone && (
        <motion.div
          className="absolute bottom-15 right-25 cursor-pointer z-10 text-2xl flex items-center gap-2 "
          onClick={handleClick}
        >
          [
          <span className="inline-block min-w-[14ch]">
            {showText && (
              <ScrambleText
                text="Click  to  Explore"
                speed={50}
                erase={erasing}
              />
            )}
          </span>
          ]
        </motion.div>
      )}
    </div>
  );
};

export default ShutterScreen;
