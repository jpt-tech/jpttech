import React, { useState } from "react";
import "./ContactForm.css";

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

    setButtonState("sending"); // Set button state to 'sending'

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setButtonState("success"); // Set button state to 'success'
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form

        // Reset button after 3 seconds
        setTimeout(() => setButtonState("idle"), 3000);
      } else {
        setButtonState("error"); // Set button state to 'error'

        // Reset button after 3 seconds
        setTimeout(() => setButtonState("idle"), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setButtonState("error"); // Set button state to 'error'

      // Reset button after 3 seconds
      setTimeout(() => setButtonState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">
          You might want to develop a website, application, or discuss anything
          related. Feel free to leave a message below.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone :</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`submit-button ${
              buttonState === "sending" ? "sending" : ""
            } ${buttonState === "success" ? "success" : ""} ${
              buttonState === "error" ? "error" : ""
            }`}
            disabled={buttonState === "sending"} // Disable button while sending
          >
            {buttonState === "idle" && (
              <>
                Send <span className="arrow">➤</span>
              </>
            )}
            {buttonState === "sending" && "Sending..."}
            {buttonState === "success" && "Message Sent!"}
            {buttonState === "error" && "Error!"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
