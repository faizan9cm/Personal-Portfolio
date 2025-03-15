const Contact = () => {
  return (
    <section className="text-white py-20 px-10">
      <h2 className="text-4xl font-bold neon-text">[ Contact Me ]</h2>
      <form className="mt-6 flex flex-col max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 mb-4 bg-transparent border-b border-neon-green focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 mb-4 bg-transparent border-b border-neon-green focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 mb-4 bg-transparent border-b border-neon-green focus:outline-none"
        ></textarea>
        <button className="px-6 py-2 border-2 border-neon-green hover:bg-neon-green hover:text-black transition-all">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
