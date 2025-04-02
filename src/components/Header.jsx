import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headImage from "../assets/images/head.png";
import { RESUME_URL } from "../utils/constants";
import Navbar from "./Navbar";
import Social from "./Social";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col bg-black text-white overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 bg-transparent before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b090a] via-[#0b090a] to-[#00ffcc] opacity-20 pointer-events-none"></div>

      <div className="w-full flex flex-row justify-between relative z-10">
        <div className="p-4 m-4 text-4xl font-bold neon-text">//: HOME</div>
        <Navbar />
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center pt-2 pb-2 px-2 lg:pt-10 lg:pb-10 lg:px-20 relative">
        <div
          ref={imageRef}
          className="flex justify-center lg:order-2 md:mt-15 lg:mt-0"
        >
          <img
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-90 md:h-90 lg:w-90 lg:h-90 mt-10 mb-20 transform hover:scale-102 transition-transform duration-500 border-0 border-[#00ffcc] rounded-full p-2 glow-image-cyan"
            src={headImage}
            alt="Faizan Habib"
          />
        </div>

        <div
          ref={textRef}
          className="text-center lg:text-left lg:order-1 md:mt-20 lg:mt-0"
        >
          <h1 className="flex justify-center text-3xl sm:text-3xl md:text-5xl lg:text-5xl pb-8">
            HI, I'M&nbsp;<span className="text-light-lime-green">FAIZAN</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center text-md sm:text-md md:text-xl text-gray-300 pb-4 space-x-0 sm:space-x-2">
            <h2>Machine Learning Engineer |</h2>
            <h2>Software Developer</h2>
          </div>
          <h1 className="flex justify-center text-md font-bold pb-4">
            I'm a self-taught Software Developer specialized in Computer
            Science!
          </h1>
          <div className="flex justify-center pt-12">
            <a
              href={RESUME_URL}
              download
              className="relative px-5 py-2 border border-[#6cff32] text-[#6cff32] group clip-diagonal"
            >
              <span className="absolute inset-0 bg-[#6cff32] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black">
                Download Resume
              </span>
            </a>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Header;
