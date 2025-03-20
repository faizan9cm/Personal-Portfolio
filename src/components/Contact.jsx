import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      console.error("Invalid email format:", email);
    }
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Reset errors
    setErrors({});

    // Validate fields
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email))
      newErrors.email = "Enter a valid email address";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          // alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
          setIsSent(true); // Set isSent to true on successful submission
          setTimeout(() => setIsSent(false), 1500);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id={id}
      className="text-white pt-25 pb-17 px-10 relative overflow-hidden"
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Section Heading */}
      <h3 className="text-4xl font-bold text-[#72fc3c] pb-15">//: Contact</h3>

      {/* Contact Content */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative">
        {/* Left Side: Contact Info Panel */}
        <div
          className="relative p-8 border-2 border-[#00ffcc] bg-black bg-opacity-20 backdrop-blur-lg shadow-lg 
                        cut-corner hover:shadow-[0_0_20px_5px_rgba(0,255,204,0.5)] transition-all duration-500"
        >
          {/* Holographic Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.1),transparent)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

          <h4 className="text-xl font-semibold text-[#00ffcc]">
            //: Get in Touch
          </h4>
          <p className="my-10 text-gray-300 text-sm">
            Feel free to reach out. I am open to projects, collaborations, and
            futuristic discussions.
          </p>
          <div className="my-6 space-y-10 text-base font-mono">
            <p className="text-[#1fff8f]">
              Email:{" "}
              <span className="text-white hover:text-[#00ffcc] transition-colors duration-300">
                faizan9cm@gmail.com
              </span>
            </p>
            <p className="text-[#1fff8f]">
              Mobile:{" "}
              <span className="text-white hover:text-[#00ffcc] transition-colors duration-300">
                +91-9696979792
              </span>
            </p>
            <p className="text-[#1fff8f]">
              Location:{" "}
              <span className="text-white hover:text-[#00ffcc] transition-colors duration-300">
                New Delhi, IN
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div
          className="relative p-6 border-2 border-[#00ffcc] bg-black bg-opacity-20 backdrop-blur-lg shadow-lg 
                        cut-corner hover:shadow-[0_0_20px_5px_rgba(0,255,204,0.5)] transition-all duration-500"
        >
          {/* Holographic Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.1),transparent)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

          <h4 className="text-xl font-semibold text-[#00ffcc]">
            //: Send a Message
          </h4>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              id="name"
              name="name"
              type="text"
              placeholder={errors.name || "Your Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className={`w-full p-2 bg-black bg-opacity-40 border ${
                errors.name ? "border-red-500" : "border-[#00ffcc]"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] cut-corner hover:shadow-[0_0_10px_2px_rgba(0,255,204,0.3)] transition-all duration-300`}
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder={errors.email || "Your Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className={`w-full p-2 bg-black bg-opacity-40 border ${
                errors.email ? "border-red-500" : "border-[#00ffcc]"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] cut-corner hover:shadow-[0_0_10px_2px_rgba(0,255,204,0.3)] transition-all duration-300`}
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder={errors.message || "Your Message"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoComplete="off"
              className={`w-full p-2 bg-black bg-opacity-40 border ${
                errors.message ? "border-red-500" : "border-[#00ffcc]"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ffcc] cut-corner hover:shadow-[0_0_10px_2px_rgba(0,255,204,0.3)] transition-all duration-300`}
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`w-6/12 py-2 ${
                  isSent ? "bg-[#72fc3c]" : "bg-[#00ffcc]"
                } text-black font-bold text-base tracking-wide uppercase border-2 hover:border-[#72fc3c] clip-diagonal transition-colors duration-500 ease-in-out ${
                  isSubmitting && Object.keys(errors).length > 0
                    ? "animate-shake"
                    : ""
                }`}
              >
                {isSent ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
