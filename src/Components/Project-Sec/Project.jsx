import { useState } from "react";
import './Project.css';

function Project() {
  // Popup के लिए state
  const [popup, setPopup] = useState(null);
  console.log(popup,"prit")

  return (
    <div id='Project' className="Pro-Cont">
      <h1 className='proj-h1'>PROJECT</h1>
      <p className='proj-p'>I have done some projects</p>

      {/* 4 Cards */}
      <div className='proj-card' onClick={() => setPopup({image:"Project-1.png"})}>
        <img src="Project-1.png" alt="Project 1"/>
        <h3>Project-1</h3>
        <p>HTML, CSS, React</p>
      </div>

      <div className='proj-card1' onClick={() => setPopup({ image:"Project-2.png"})}>
        <img src="Project-2.png" alt="Project 2"/>
        <h3>Project 2</h3>
        <p>HTML, CSS, React</p>
        
      </div>

      <div className='proj-card2' onClick={() => setPopup({ image:"Project-3.png"})}>
        <img src="Project-3.png" alt="Project 3"/>
        <h3>Project 3</h3>
        <p>HTML, CSS, React</p>
      </div>

      <div className='proj-card3' onClick={() => setPopup({ image:"Project-4.png",name:"project 4",tech: "html,css,react"})}>
        <img src="Project-4.png" alt="Project 4"/>
        <h3>Project 4</h3>
        <p>HTML, CSS, React</p>
      </div>

      {/* Popup / Modal */}
      {popup && (
        <div className="proj-popup" onClick={() => setPopup(null)}>
          <div className="proj-popup-content" >
            <img src={popup.image} alt={popup.name} />
            <h3>{popup.name}</h3>
            <p>{popup.tech}</p>
            <button onClick={() => setPopup(null)}>x</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
