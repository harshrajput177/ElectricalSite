import React from 'react';
import '../../style/Landing-css/LandingCom2.css';
import img from '../../image/pexels-pok-rie-33563-157827.jpg';

const HeroSection = () => {
  return (
    <div className="LandingCom2-hero-container">
      <img
        src={img}
        alt="Background"
        className="LandingCom2-hero-background"
      />
      <div className="LandingCom2-overlay">
        <div className="LandingCom2-content">
          <h1 className="LandingCom2-title">
            <span className="LandingCom2-highlight">P</span>owering Industries with
            <br /> Reliable Electrical Solutions
          </h1>
          <p className="LandingCom2-description">
            We provide high-quality electrical solutions, ensuring efficiency, safety, and reliability for industries, businesses, and residential users. From voltage stabilizers to industrial cables, we power your success.
          </p>
          <button className="LandingCom2-cta-button">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
