import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formId = "xwpklkln";
    const url = `https://formspree.io/f/${formId}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
      setIsSuccess(false);
    }
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h2 className="title-heading">Get in touch</h2>
        <p id="contact-section-text">
          Do you have a project in your mind? Contact me here.
        </p>
        <div className="contact-content">
          <div className="contact-info-card">
            <h3>Find Me</h3>
            <p>
              <i className="fa-solid fa-envelope"></i> Email:
              junaidkhaleel.093@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> Mobile: +91 8217009727
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              className="textarea"
              name="message"
              rows="3"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn send-btn">
              Send <i className="fas fa-paper-plane"></i>
            </button>
          </form>

          {status && (
            <p
              className={`status-message ${
                isSuccess ? "success-message" : "error-message"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
