import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactRight = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

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
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
          setIsSent(true);
          setTimeout(() => setIsSent(false), 1500);
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      className="relative p-4 sm:p-6 border-2 border-[#00ffcc] bg-black bg-opacity-20 backdrop-blur-lg shadow-lg 
                      cut-corner hover:shadow-[0_0_20px_5px_rgba(0,255,204,0.5)] transition-all duration-500 w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
    >
      {/* Holographic Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.1),transparent)] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      <h4 className="text-lg sm:text-xl font-semibold text-[#00ffcc]">
        //: Send a Message
      </h4>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3 sm:space-y-4">
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
            className={`w-full sm:w-6/12 py-2 ${
              isSent ? "bg-[#72fc3c]" : "bg-[#00ffcc]"
            } text-black font-bold text-sm sm:text-base tracking-wide uppercase border-2 hover:border-[#72fc3c] clip-diagonal transition-colors duration-500 ease-in-out ${
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
  );
};

export default ContactRight;
