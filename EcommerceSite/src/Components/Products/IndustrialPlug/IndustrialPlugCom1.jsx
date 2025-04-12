import React from "react";
import GalleryC1 from '../../../image/Plugs-and-Sockets-1.jpg';
import '../../../style/IndustrialPlug-css/IndustrialPlugCom1.css';

function Contact(){
    return(
        <div className="Contact-container_2">
          <h1>Industrial Plugs</h1>
          <div className="Contactline"></div>
        <img src={GalleryC1} alt="Hero" className="Contact-hero-img_2" />
      </div>
    )
}

export default Contact;