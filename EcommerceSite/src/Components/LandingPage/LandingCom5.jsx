import React from "react";
import "../../style/Landing-css/LandingCom5.css";
import img5 from '../../image/Advance-VIF-2.jpg'
import img6 from '../../image/M-20-R.jpg'
import img7 from '../../image/M-629.jpg'
import img8 from '../../image/M-630.jpg'





const products = [
  {
    name: "Digital Panel Meters",
    image:img5 , // Replace with actual image
  },
  {
    name: "Multi Function Meters",
    image: img6, // Replace with actual image
  },
  {
    name: "M-629",
    image: img7, // Replace with actual image
  },
  {
    name: "Electricity meter",
    image: img8, // Replace with actual image
  },

];

const SmartEnergy = () => {
  return (
    <div className="SmartEnergy-container">
      <h2 className="SmartEnergy-heading">Smart Energy Management</h2>
      <div className="SmartEnergy-underline"></div>
      <div className="SmartEnergy-grid-container">
        {products.map((product, index) => (
          <div key={index} className="SmartEnergy-card">
            <img src={product.image} alt={product.name} className="SmartEnergy-card-image" />
            <h3 className="SmartEnergy-card-title">{product.name}</h3>
            <div className="SmartEnergy-button-container">
              <button className="SmartEnergy-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartEnergy;