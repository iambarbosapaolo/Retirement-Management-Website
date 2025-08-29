import React from 'react';
import '../../styles/Services.css'; // Make sure to import the CSS file

const Services = () => {
  return (
    <div className="services-container">
      <div className="overlay"></div>
      <div className="services-content">
        <h1>Secure Your Future</h1>
        <p>We'll help you plan for a secure and fulfilling retirement with our trusted partners and a team to support you every step of the way.</p>
        <button className="cta-button">Plan Today</button>
      </div>
    </div>
  );
};

export default Services;