import React from "react";
import "../../styles/Mission.css";

export default function Mission() {
  return (
    <section id="mission" className="mission-section">
      <h2 className="mission-heading">Our mission</h2>
      <p className="mission-statement">
        We believe retirement should bring security, purpose, and peace of mind.
      </p>
      <div className="mission-cards-container">
        <div className="mission-card">
          <img
            src="/images/peaceold.png"
            alt="A senior man smiling at the sunset"
            className="mission-card-image"
          />
          <h3 className="mission-card-title">Peaceful Retirement</h3>
        </div>
        <div className="mission-card">
          <img
            src="/images/guidedsecurity.png"
            alt="A senior couple on a pier, looking at the ocean"
            className="mission-card-image"
          />
          <h3 className="mission-card-title">Guided Security</h3>
        </div>
        <div className="mission-card">
          <img
            src="images/confidentfeatures.png"
            alt="A senior woman smiling directly at the camera"
            className="mission-card-image"
          />
          <h3 className="mission-card-title">Confident Futures</h3>
        </div>
      </div>
    </section>
  );
}