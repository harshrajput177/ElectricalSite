import React from "react";
import GalleryC1 from '../../../image/pexels-pok-rie-33563-157827.jpg';
import '../../../style/Product-css/';

function Contact(){
    return(
        <div className="Contact-container_2">
          <h1>Contact</h1>
          <div className="Contactline"></div>
        <img src={GalleryC1} alt="Hero" className="Contact-hero-img_2" />
      </div>
    )
}

export default Contact;