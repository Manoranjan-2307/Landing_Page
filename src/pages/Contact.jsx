import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch for more information.</p>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:example@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>

  );
};

export default Contact;
