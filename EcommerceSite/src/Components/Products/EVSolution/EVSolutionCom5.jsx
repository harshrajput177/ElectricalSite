import React from "react";
import Vision from '../../../image/acdc-aio-type.jpg';
import '../../../style/EvSolution-css/EvSolutionCom5.css';

function AboutC4() {
  return (
    <div className="bc-contents">
      <div id='Vision-section' className="bc-con">
        <div className="sc-con">
          <h1 className="text-C4-h1">
            ADC Combination Charger
          </h1>
          <p>
            The ADC Combination Charger is an all-in-one EV charging solution that supports both AC and DC charging modes. 
            Designed to deliver versatility and high performance, this charger is ideal for locations catering to a wide range 
            of electric vehicles. Whether it's slow charging for extended parking or fast charging for quick top-ups, the ADC 
            charger handles it all in a single unit.
          </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="ADC Combination Charger" />
        </div>
      </div>
      <div className="bottom-paragrapgh-div">
        <p className="bottom-paragraph">
          With advanced features like intelligent power distribution, remote monitoring, multiple connector support, and dynamic 
          load management, the ADC Combination Charger is a future-ready solution for public, commercial, and fleet-based 
          charging infrastructure. Its compact and integrated design saves space and simplifies installation, making it a 
          perfect choice for modern EV charging stations.
        </p>
      </div>
    </div>
  );
}

export default AboutC4;
