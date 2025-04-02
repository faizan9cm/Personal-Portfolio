import { motion } from "framer-motion";
import linkedinIcon from "../assets/images/socials/linkedin.png";
import emailIcon from "../assets/images/socials/email.png";
import whatsappIcon from "../assets/images/socials/whatsapp.png";
import githubIcon from "../assets/images/socials/github.png";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/faizan9cm",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
  { href: "mailto:faizn9cm@gmail.com", icon: emailIcon, alt: "Email" },
  { href: "https://wa.me/+919696979792", icon: whatsappIcon, alt: "WhatsApp" },
  { href: "https://github.com/faizan9cm", icon: githubIcon, alt: "GitHub" },
];

const Social = () => (
  <div className="flex justify-center space-x-6 mt-10 flex-wrap">
    {socialLinks.map(({ href, icon, alt }, index) => (
      <motion.a
        key={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          x: -20,
          filter: "drop-shadow(0px 0px 10px #6cff32)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "drop-shadow(1px 1px 0px #00ffcc)",
        }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="rounded-sm"
      >
        <img
          src={icon}
          alt={alt}
          className="w-8 h-8 sm:w-8 sm:h-8 rounded-sm transition duration-300 hover:shadow-md hover:shadow-[#00ffcc]"
        />
      </motion.a>
    ))}
  </div>
);

export default Social;
