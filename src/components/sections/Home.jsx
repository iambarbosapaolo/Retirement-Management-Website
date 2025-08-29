import React from "react";
import "../../styles/Home.css";

export default function Home() {
  return (
    <section id="home" className="home-section" style={{ backgroundImage: 'url("/images/coveradvbg.png")' }}>
      <div className="overlay"></div>
      <div className="content">
        <div className="column hmtitle">
          Building a Future
          <br />
          You Can Trust.
        </div>
        <div className="column subtext">
          "Commit your work to the Lord, and your plans will be established." - Proverbs 16:3
        </div>
      </div>
    </section>
  );
}
