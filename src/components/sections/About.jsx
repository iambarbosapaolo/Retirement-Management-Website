import React from 'react';
import '../../styles/About.css'; // Importing the CSS file

// The About component using classes from About.css
const About = () => {
  return (
    // Main container with full height and center alignment
    <div className="about-container">
      {/* Card-like container for the content, with rounded corners and a shadow */}
      <div className="about-card">
        
        {/* Image collage section on the left */}
        <div className="image-collage">
          {/* Main image, positioned to the back */}
          <img 
            src="/images/hand.png" 
            alt="An elderly person reading a book" 
            className="main-image"
          />
          {/* Overlapping image, positioned to the front */}
          <img 
            src="/images/ladyold.png" 
            alt="A smiling elderly person" 
            className="overlapping-image"
          />
        </div>

        {/* Text content section on the right */}
        <div className="text-content">
          <br />
          {/* "About Us" label */}
          <p className="about-label">About Us</p>
          
          {/* Main heading of the section */}
          <h1 className="heading">
            Welcome to the <br className="hidden md:block" />
            Retirement Management System
          </h1>
          
          {/* Subtitle or descriptive text */}
          <p className="subtitle">
            We help you plan for a secure and fulfilling retirement with guidance, personalized plans, and support every step of the way.
          </p>

          {/* Learn More button with a gradient background and shadow */}
          <button className="learn-more-btn">
            Learn More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="btn-icon" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
