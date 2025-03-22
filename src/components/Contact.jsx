import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = ({ id }) => {
  return (
    <section
      id={id}
      className="text-white pt-15 md:pt-25 pb-10 md:pb-28 px-6 sm:px-10 relative overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Section Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-8 md:pb-15 ml-[-10px] md:ml-0">
        //: Contact
      </h3>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-24 items-center relative">
        {/* Left Side: Contact Info Panel */}
        <ContactLeft />

        {/* Right Side: Contact Form */}
        <ContactRight />
      </div>
    </section>
  );
};

export default Contact;
