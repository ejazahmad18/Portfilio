import React, { useState } from "react";
import "./Project.css";
import ejaz from "../../Assets/Project-1.png";
import ejaz1 from "../../Assets/Project-2.png";
import ejaz2 from "../../Assets/Project-3.png";
import ejaz3 from "../../Assets/Project-4.png";

function Project() {
  const [popup, setPopup] = useState(null);

  const projects = [
    { id: 1, image: ejaz, title: "Project 1", tech: "HTML, CSS, React", desc: "Modern responsive website with smooth animations and reusable React components.", demo: "https://your-demo-link-1.com", github: "https://github.com/your-repo-1" },
    { id: 2, image: ejaz1, title: "Project 2", tech: "HTML, CSS, React", desc: "Interactive UI project with advanced React hooks and state management.", demo: "https://your-demo-link-2.com", github: "https://github.com/your-repo-2" },
    { id: 3, image: ejaz2, title: "Project 3", tech: "HTML, CSS, React", desc: "Single-page application with smooth navigation and reusable components.", demo: "https://your-demo-link-3.com", github: "https://github.com/your-repo-3" },
    { id: 4, image: ejaz3, title: "Project 4", tech: "HTML, CSS, React", desc: "Portfolio project showing responsive design, animations, and API integration.", demo: "https://your-demo-link-4.com", github: "https://github.com/your-repo-4" },
  ];

  return (
    <div className="Pro-Cont">
      <h1 className="proj-h1">PROJECT</h1>
      <p className="proj-p">I have done some projects</p>

      <div className="proj-cards-wrapper">
        {projects.map((proj, index) => (
          <div key={index} className={`proj-card proj-card${index + 1}`} onClick={() => setPopup(proj)}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.tech}</p>
          </div>
        ))}
      </div>

      {popup && (
        <div className="proj-popup" onClick={() => setPopup(null)}>
          <div className="proj-popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popup.image} alt={popup.title} />
            <h2>{popup.title}</h2>
            <p className="proj-desc">{popup.desc}</p>
            <p className="proj-tech"><strong>Tech:</strong> {popup.tech}</p>
            <div className="proj-links">
              <a href={popup.demo} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a>
              <a href={popup.github} target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            </div>
            <button onClick={() => setPopup(null)}>x</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
