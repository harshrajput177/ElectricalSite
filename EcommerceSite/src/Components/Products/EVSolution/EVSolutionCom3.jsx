import React from "react";
import Vision from '../../../image/ac-type-2-ev-charger-panasonic.jpg';
import '../../../style/EvSolution-css/EvSolutionCom3.css';

function AboutC4() {
  return (
    <div className="bc-contents">
      <div id='Vision-section' className="bc-con">
        <div className="sc-con">
          <h1 className="text-C4-h1">
            AC EV Charger
          </h1>
          <p>
            The AC EV Charger is a smart and efficient charging solution tailored for modern electric vehicles. 
            Designed with advanced safety features and user-friendly operation, this charger supports Type 2 
            connectors, making it compatible with most EVs on the market. Its sleek and compact design allows 
            for easy installation in residential, commercial, and industrial settings.
          </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="AC EV Charger" />
        </div>
      </div>
      <div className="bottom-paragrapgh-div">
        <p className="bottom-paragraph">
          With features such as dynamic load management, energy monitoring, and remote control via a mobile app, 
          the AC EV Charger ensures efficient power usage and full control over your vehicle’s charging process. 
          It’s an ideal choice for eco-conscious users looking to embrace sustainable transportation 
          while enjoying the convenience of intelligent charging technology.
        </p>
      </div>
    </div>
  );
}

export default AboutC4;
