import React from "react";
import GalleryC1 from '../../../image/GettyImages-2163729535.webp';
import '../../../style/EvSolution-css/EvSolutionCom1.css';

function Contact(){
    return(
        <div className="Contact-container_2">
          <h1>EV SOLUTION</h1>
          <div className="Contactline"></div>
        <img src={GalleryC1} alt="Hero" className="Contact-hero-img_2" />
      </div>
    )
}

export default Contact;