import React from "react";
import Vision from '../../../image/Ac-smart-socket.jpg';
import '../../../style/EvSolution-css/EvSolutionCom2.css';

function AboutC4() {
  return (
    <div className="bc-contents">
      <div id='Vision-section' className="bc-con">
        <div className="sc-con">
          <h1 className="text-C4-h1">
            AC EV Smart Socket
          </h1>
          <p>
            The AC EV Smart Socket is an advanced and reliable solution designed for efficient electric vehicle charging at home or in commercial spaces. 
            Engineered with user convenience and safety in mind, this socket features real-time monitoring, smart scheduling, and remote control via mobile apps. 
            It supports a wide range of EVs, ensuring compatibility and optimal performance across different models and brands.
          </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="AC EV Smart Socket" />
        </div>
      </div>
      <div className="bottom-paragrapgh-div">
        <p className="bottom-paragraph">
          Built with intelligent power management, the AC EV Smart Socket not only enhances the charging experience but also promotes energy efficiency. 
          Its compact, weather-resistant design makes it ideal for indoor and outdoor use. Whether you're a homeowner or a business, this smart socket 
          provides a seamless, future-ready charging solution that supports the growing demands of electric mobility.
        </p>
      </div>
    </div>
  );
}

export default AboutC4;
