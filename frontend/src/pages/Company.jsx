import React, { useState } from "react";
import "./Company.css";

export default function Company() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for contacting us! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="company-page">
      {/* Hero Section */}
      <section className="company-hero">
        <div className="hero-overlay">
          <h1>About Zillow.com</h1>
          <p>
            We’re passionate about helping people find their dream homes.
            Zillow.com brings you transparent property listings, expert advice,
            and personalized assistance all in one place.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>🏡 Our Mission</h2>
        <p>
          To make home ownership accessible to everyone. Whether you're a first-time
          buyer, investor, or seller, our goal is to empower you with tools and
          knowledge that make real estate decisions easier, faster, and smarter.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-us-section">
        <h2>💬 Get in Touch</h2>
        <p>
          Have questions, feedback, or partnership ideas?  
          We’d love to hear from you!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* Company Contact Info */}
      <footer className="company-footer">
        <h3>📍 Our Office</h3>
        <p>123 Real Estate Avenue, San Francisco, CA 94103</p>
        <p>📞 +1 (408) 555-2099</p>
        <p>📧 contact@zillow.com</p>
      </footer>
    </div>
  );
}
