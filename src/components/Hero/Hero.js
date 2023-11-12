import React from "react";
import "./hero.css";

const Hero = ({ backgroundImage, title, subtitle }) => (
  <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="hero-content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  </div>
);

export default Hero;
