import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonState, setButtonState] = useState("idle"); // "idle", "sending", "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonState("sending");

    try {
      const response = await fetch(
        "https://jpt-backend.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setButtonState("success");
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => setButtonState("idle"), 3000);
      } else {
        setButtonState("error");
        setTimeout(() => setButtonState("idle"), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setButtonState("error");
      setTimeout(() => setButtonState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-20  text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-gray-400 mb-6"
        >
          Got questions or need assistance? Reach out to us at JPT Technologies!
          Fill out the form below, and we’ll get back to you promptly.
        </motion.p>
      </div>

      <motion.form
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto  p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-white mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white-600  rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-gray-50 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-white mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white-600  rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-gray-50 text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-white mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-white-600  rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none text-gray-200 text-sm"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-white mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 border border-white-600  rounded-lg focus:ring-2 focus:ring-blue-gray focus:outline-none text-gray-200 text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-1/4 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
            buttonState === "idle"
              ? "bg-blue-600 hover:bg-blue-700"
              : buttonState === "sending"
              ? "bg-gray-600 cursor-not-allowed"
              : buttonState === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
          disabled={buttonState === "sending"}
        >
          {buttonState === "idle" && "Send "}
          {buttonState === "sending" && "Sending..."}
          {buttonState === "success" && "Message Sent!"}
          {buttonState === "error" && "Error! Try Again"}
        </button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
