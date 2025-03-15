import headImage from "../assets/images/head.png";

const Header = () => {
  return (
    <div className="relative flex flex-col bg-black text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-transparent before:absolute before:inset-0 before:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] before:bg-[size:40px_40px] pointer-events-none"></div>

      {/* Top Section */}
      <div className="w-full flex flex-row justify-between relative z-10">
        <div className="p-4 m-4 text-4xl font-bold">HOME</div>
        <div className="flex items-center w-6/12 py-3 mx-5 bg-navbar clip-diagonal fixed top-6 right-5 z-50">
          <ul className="flex flex-row justify-center w-full space-x-18">
            <li className="px-4 flex justify-center transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]">
              [ About ]
            </li>
            <li className="px-4 flex justify-center transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]">
              [ Projects ]
            </li>
            <li className="px-4 flex justify-center transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]">
              [ Skills ]
            </li>
            <li className="px-4 flex justify-center transition duration-300 hover:shadow-md hover:shadow-[#c3ff49]">
              [ Contact ]
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-row justify-between pt-5 px-10 relative">
        <div className="mt-25">
          <h1 className="flex justify-center text-6xl pb-8">
            HI, I'M&nbsp;<span class="text-light-lime-green">FAIZAN</span>
          </h1>
          <h2 className="flex justify-center text-xl text-gray-300 pb-4">
            Machine Learning Engineer | Software Developer
          </h2>
          <h1 className="flex justify-center font-bold pb-4">
            I'm a self-taught Software Developer specialized in Computer
            Science!
          </h1>

          <div className="flex justify-center pt-25">
            <button className="px-6 py-2 border-2 border-light-lime-green hover:bg-light-lime-green hover:text-black transition-all clip-diagonal">
              Download Resume
            </button>
          </div>
        </div>
        <img className="w-md transform translate-x-[-40px]" src={headImage} />
      </div>
    </div>
  );
};

export default Header;
