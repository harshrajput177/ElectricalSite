import React from "react";
import "../../style/Landing-css/LandingCom6.css";
import img1 from '../../image/mennekes-plug-250x250.webp'
import img2 from '../../image/modbox-modular-distribution-system-ip-65-500x500.webp'
import img3 from '../../image/pdu-csd242410-spl-face_2000x2000__00211.jpg'
import img4 from '../../image/300Wx300H-null (1).png'
// import img1 from '../../image/'
// import img1 from '../../image/'
// import img1 from '../../image/'
// import img1 from '../../image/'
// import img1 from '../../image/'
// import img1 from '../../image/'



const products = [
  {
    name: "Automatic Boom Barriers",
    image:img1 , // Replace with actual image
  },
  {
    name: "Door & Gate Automation",
    image: img2, // Replace with actual image
  },
  {
    name: "High Security Bollards",
    image: img3, // Replace with actual image
  },
  {
    name: "Parking Solutions",
    image: img4, // Replace with actual image
  },

];

const SmartEnergy = () => {
  return (
    <div className="Security-container">
      <h2 className="Security-heading">Security & Access Management</h2>
      <div className="Security-underline"></div>
      <div className="Security-grid-container">
        {products.map((product, index) => (
          <div key={index} className="Security-card">
            <img src={product.image} alt={product.name} className="Security-card-image" />
            <h3 className="Security-card-title">{product.name}</h3>
            <div className="Security-button-container">
              <button className="Security-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartEnergy;