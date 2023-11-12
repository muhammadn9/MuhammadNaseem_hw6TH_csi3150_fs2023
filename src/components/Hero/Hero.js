import React from "react";
import "./hero.css";

const Hero = ({ backgroundImage, title, subtitle }) => (
  <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="hero-content">
      {/* <image src=".././././/../assets/HeroSectionImage.png "></image> */}
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  </div>
);

export default Hero;
