import linkedinIcon from "../assets/images/linkedin.png";
import emailIcon from "../assets/images/email.png";
import whatsappIcon from "../assets/images/whatsapp.png";
import githubIcon from "../assets/images/github.png";

const Social = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      <a
        href="https://www.linkedin.com/in/faizan9cm"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          className="w-8 h-8 rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#00ffcc]"
        />
      </a>
      <a
        href="mailto:faizn9cm@gmail.com"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={emailIcon}
          alt="Email"
          className="w-8 h-8 rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#00ffcc]"
        />
      </a>
      <a
        href="https://wa.me/+919696979792"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-8 h-8 rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#00ffcc]"
        />
      </a>
      <a
        href="https://github.com/faizan9cm"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className="w-8 h-8 rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#00ffcc]"
        />
      </a>
    </div>
  );
};

export default Social;
