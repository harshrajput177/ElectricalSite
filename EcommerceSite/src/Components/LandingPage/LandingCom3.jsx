import React from 'react';
import '../../style/Landing-css/LandingCom3.css';
import img  from '../../image/Screenshot 2025-03-10 212936.png';

const WelcomeComponent = () => {
  return (
    <div className="LandingCom3-container">
      <div className="LandingCom3-card">
        <div className="LandingCom3-image-section">
          <div className="LandingCom3-image-wrapper">
            <img 
              src={img}
              alt="Welcome" 
              className="LandingCom3-profile-image"
            />
          </div>
        </div>
        <div className="LandingCom3-content-section">
          <h1 className="LandingCom3-title">
            Welcome To  <br /><span className="LandingCom3-highlight">Our Company</span>
          </h1>
          <div className="LandingCom3-underline"></div>
          <p className="LandingCom3-description">
            We're dedicated to delivering excellence, innovative solutions, and superior customer service. We look forward to working with you.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eum cum id accusamus fuga? Unde, similique. Odit fugiat temporibus dolorum
             id, sapiente doloremque perferendis aliquid omnis ratione voluptatum natus enim iusto?

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a dolorum expedita praesentium provident repellat possimus laudantium dolore, in saepe, quod sequi error placeat nisi magnam quisquam assumenda quaerat earum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;