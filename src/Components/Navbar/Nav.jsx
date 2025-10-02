import React, { useState } from "react";
import "./Nav.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h3 className="logo">Ejaz Ahmad</h3>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      <div className={`navigation ${isOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/projects">Project</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div>
          <button className="nav-btn">Github</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
