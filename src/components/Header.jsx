import headImage from "../assets/images/head.png";
import { RESUME_URL } from "../utils/constants";
import Navbar from "./Navbar";
import Social from "./Social";

const Header = () => {
  return (
    <div className="relative flex flex-col bg-black text-white overflow-hidden min-h-screen">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-transparent before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:40px_40px] pointer-events-none"></div>

      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b090a] via-[#0b090a] to-[#00ffcc] opacity-20 pointer-events-none"></div>

      {/* Top Section */}
      <div className="w-full flex flex-row justify-between relative z-10">
        <div className="p-4 m-4 text-4xl font-bold neon-text">//: HOME</div>
        {/* Navbar */}
        <Navbar />
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-row justify-between pt-10 px-10 relative">
        <div className="mt-18">
          <h1 className="flex justify-center text-5xl pb-8">
            HI, I'M&nbsp;<span className="text-light-lime-green">FAIZAN</span>
          </h1>
          <h2 className="flex justify-center text-l text-gray-300 pb-4">
            Machine Learning Engineer | Software Developer
          </h2>
          <h1 className="flex justify-center text-l font-bold pb-4">
            I'm a self-taught Software Developer specialized in Computer
            Science!
          </h1>

          <div className="flex justify-center pt-25">
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

          {/* Social Media Icons */}
          <Social />
        </div>

        {/* Head Image */}
        <div className="relative">
          <img
            className="w-90 h-90 mt-10 transform translate-x-[-80px] hover:scale-102 transition-transform duration-500 border-0 border-[#00ffcc] rounded-full p-2 glow-image-cyan"
            src={headImage}
            alt="Faizan Habib"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
