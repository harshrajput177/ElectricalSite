import React from "react";
import Vision from '../../../image/images (1).jpeg';
import '../../../style/EvSolution-css/EvSolutionCom4.css';

function AboutC4() {
  return (
    <div className="bc-contents">
      <div id='Vision-section' className="bc-con">
        <div className="sc-con">
          <h1 className="text-C4-h1">
            DC EV Charger
          </h1>
          <p>
            The DC EV Charger is a high-speed charging solution engineered for rapid electric vehicle charging. 
            Ideal for commercial and public infrastructure, this charger supports fast-charging protocols such as 
            CCS and CHAdeMO, allowing EVs to reach up to 80% battery capacity within a short time. Its intelligent 
            design ensures maximum efficiency, safety, and reliability for every charge.
          </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="DC EV Charger" />
        </div>
      </div>
      <div className="bottom-paragrapgh-div">
        <p className="bottom-paragraph">
          Equipped with advanced thermal management, real-time monitoring, and remote diagnostics, the DC EV Charger 
          is built to handle the demands of modern electric mobility. Whether installed at charging stations, 
          highways, or commercial hubs, it provides a seamless and future-proof charging experience for 
          next-generation electric vehicles.
        </p>
      </div>
    </div>
  );
}

export default AboutC4;
