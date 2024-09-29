import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js";
import "./style.css"; // Link to your CSS file

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
