import About from "./About";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";
import Skill from "./Skill";

const Body = () => {
  return (
    <div className="bg-black">
      <About />
      <Project />
      <Skill />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
