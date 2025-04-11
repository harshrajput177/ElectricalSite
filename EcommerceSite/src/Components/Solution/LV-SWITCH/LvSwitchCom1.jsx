import React from "react";
import C1 from '../../../image/cmain.png';
import '../../../style/Solution-css/Lv-css/LvCom1.css';

function Contact(){
    return(
        <div className="Contact-container_2">
          <h1>Contact</h1>
          <div className="Contactline"></div>
        <img src={C1} alt="Hero" className="Contact-hero-img_2" />
      </div>
    )
}

export default Contact;