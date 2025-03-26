import React from "react";
import "../../style/Landing-css/LandingCom5.css";
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
    name: "Industrial Plug & Sockets",
    image:img1 , // Replace with actual image
  },
  {
    name: "VariaBox",
    image: img2, // Replace with actual image
  },
  {
    name: "Junction Boxes",
    image: img3, // Replace with actual image
  },
  {
    name: "Mobile Distribution Board",
    image: img4, // Replace with actual image
  },
  {
    name: "Industrial Plug & Sockets",
    image:img1 , // Replace with actual image
  },
  {
    name: "VariaBox",
    image: img2, // Replace with actual image
  },
  {
    name: "Junction Boxes",
    image: img3, // Replace with actual image
  },
  {
    name: "Mobile Distribution Board",
    image: img4, // Replace with actual image
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