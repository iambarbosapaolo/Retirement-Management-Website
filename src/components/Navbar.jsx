import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Socials", href: "#socials" },
  { label: "Contacts", href: "#contacts", isButton: true }, // 👈 mark Contacts as button
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "#home";
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const top = section.offsetTop - 80; // adjust offset if navbar is fixed
          if (window.scrollY >= top) {
            current = href;
          }
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll behavior
  const handleClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/images/advrmslogo.png" alt="Logo" className="logo-icon" />
        <div className="seventh-day">
          Seventh-day
          <div>Adventist Church</div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <button
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "show" : ""}`}>
        {navLinks.map(({ label, href, isButton }) => (
          <div key={label} className="nav-item">
            <a
              href={href}
              className={
                isButton
                  ? "contacts-btn" // 👈 special button style for Contacts
                  : activeLink === href
                  ? "active"
                  : ""
              }
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
