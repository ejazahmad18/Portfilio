import React from 'react';
import CustomButton from '../CustomButton';
import './Home.css';
import Ejaz from "../../Assets/front.jpg";

function Home() {
  return (
    <div className="Home-Contnr">
      <span className="bg-dot dot1"></span>
      <span className="bg-dot dot2"></span>
      <span className="bg-star star1">✦</span>
      <span className="bg-star star2">✦</span>
      <span className="bg-curve"></span>

      <div className="Home-Wrapper">
        <div className="Img-Card">
          <img src={Ejaz} alt="ejaz ahmad" className="front-img" />
        </div>

        <div className="Name-Card">
          <h2 className="Name-h2">Hello! I am</h2>
          <p className="Name-p">Ejaz Ahmad</p>
          <CustomButton className="Name-Btn" text="Resume" />
          <p className="Name-p1">
            I’m a frontend developer passionate about crafting smooth, interactive, 
            and user-friendly web experiences, building responsive interfaces that 
            are visually appealing and enjoyable to use, and turning designs into 
            seamless, engaging web interactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
