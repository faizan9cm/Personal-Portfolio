import About from "./About";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import Project from "./Project";
import Skill from "./Skill";

const Body = () => {
  return (
    <div className="bg-black">
      <About id="about" />
      <Project id="projects" />
      <Skill id="skills" />
      <Certificate id="certificates" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Body;
