import React from 'react';
import './Nav.css';

function Navbar() {
    return (
        <nav>
            <h3 className="logo">Ejaz Ahmad</h3>
            <div className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/projects">Project</a></li>
                    <li><a href="/education">Education</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                
            </div>
            <button className="nav-btn">Github</button>
        </nav>
    );
}

export default Navbar;
