import React from "react";
import "../../styles/Contact.css";

function Contacts() {
  const handleContactClick = () => {
    window.location.href = "mailto:your@email.com";
  };

  return (
    <section className="contacts-section">
      <div className="contacts-container">
        <h2 className="contacts-heading">Get in Touch</h2>
        <p className="contacts-subtitle">
          Have questions or want to work together? Feel free to reach out!
        </p>
        <button onClick={handleContactClick} className="contacts-button">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Contacts;
