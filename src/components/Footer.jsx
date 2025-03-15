const Footer = () => {
  return (
    <footer className="text-white py-10 px-10 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Faizan Habib. All Rights Reserved.
      </p>
      <div className="mt-2">
        <a href="#" className="text-neon-green hover:underline mx-2">
          GitHub
        </a>
        <a href="#" className="text-neon-green hover:underline mx-2">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
