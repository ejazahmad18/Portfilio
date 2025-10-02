import React from 'react';
import { FaCss3Alt, FaGithubSquare, FaGitSquare, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import './Skill.css';

function Skill() {
  return (
    <div className="Skill-Cont">
      <h1 className="Skill-h1">SKILLS</h1>
      <p className="Skill-p">Below are some of the skills I have been developing over the last three years.</p>

      <div className="Skill-grid">
        <div className="Skill-card html"><FaHtml5 className='icon' /><h3>HTML</h3></div>
        <div className="Skill-card css"><FaCss3Alt className='icon'/><h3>CSS</h3></div>
        <div className="Skill-card js"><IoLogoJavascript className='icon' /><h3>JavaScript</h3></div>
        <div className="Skill-card react"><FaReact className='icon'/><h3>React</h3></div>
        <div className="Skill-card git"><FaGitSquare className='icon'/><h3>Git</h3></div>
        <div className="Skill-card github"><FaGithubSquare className='icon'/><h3>GitHub</h3></div>
      </div>
    </div>
  );
}

export default Skill;
