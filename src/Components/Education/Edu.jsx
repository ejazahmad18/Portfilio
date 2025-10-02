import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import './Edut.css';

function Education() {
    return (
        <div  className="Edu-Cont">
            <h1 className='Edu-h'>EDUCATION</h1>

            <div className="timeline">

                {/* Left timeline item */}
                <div className="timeline-item left">
                    <div className="icon-1"><FaBriefcase /></div>
                    <div className="content-1">
                        <h3>Marwari Inter College, Katihar, Bihar</h3>
                        <p>ISC (XII), Science with Maths</p>
                        <p>Apr 2020 - Apr 2021</p>
                        <p>Grade: 62%</p>
                        <p>I completed my class 12 high school education at Marwari Inter College, Katihar, where I studied Science with Maths.</p>
                    </div>
                </div>

                {/* Right timeline item */}
                <div className="timeline-item right">
                    <div className="icon-2"><FaBriefcase /></div>
                    <div className="content-2">
                        <h3>Dev Bhoomi Uttarakhand University, Dehradun</h3>
                        <p>Bachelor of Computer Applications (BCA)</p>
                        <p>Apr 2021 - Apr 2024</p>
                        <p>Grade: 70%</p>
                        <p>I have completed BCA with a focus on Front-end web development, gaining practical skills in designing and developing user-friendly web interfaces. I am eager to apply my knowledge in building engaging applications.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education;
