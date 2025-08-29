// src/App.js
import Navbar from "./components/Navbar";

// Import page sections
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Mission from "./components/sections/Mission";
import Services from "./components/sections/Services";
import Socials from "./components/sections/Socials";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/sections/Footer";

import "./styles/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="mission"><Mission /></section>
      <section id="services"><Services /></section>
      <section id="socials"><Socials /></section>
       <section id="contacts"><Contacts /></section> 
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;
