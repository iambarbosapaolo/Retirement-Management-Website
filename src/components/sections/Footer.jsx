import React from 'react';
import '../../styles/Footer.css'; 
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section brand-section">
          {/* Brand Logo - You can replace this SVG with your own image or component */}
          <span className="footer-logo">
            <img src="/images/advrmslogo.png" alt="Brand Logo" height="50" width="50" />
          </span>
        </div>

        <div className="footer-section stay-in-touch">
          <h4>STAY IN TOUCH</h4>
          <p>Subscribe to get updates from us</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address here" />
            <button aria-label="Subscribe">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8L1 8M1 8L8 15M1 8L8 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer-section company-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </div>

        <div className="footer-section available-links">
          <h4>AVAILABLE</h4>
          <ul>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#downloads">Downloads</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>CONTACT</h4>  
          <ul>
            <li><a href="mailto:email@example.com">Email@example.com</a></li>
            <li><a href="tel:+1234567890">+123-456-7890</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://www.facebook.com/altrueph"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <p className="copyright">&copy; 2025 Awesome. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;