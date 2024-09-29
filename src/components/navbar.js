import React from "react";

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img 
          className="logo1"
            src={`${process.env.PUBLIC_URL}/images/WhatsApp Image 2024-08-10 at 14.34.42 (1).jpeg`} 
            alt="Your Logo"
          />
        </div>
        <div className="img">
          <img 
              className="img2"
              src={`${process.env.PUBLIC_URL}/images/udayvaidya1.png`} 
              alt="Your Logo"
            />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
