import React from "react";
import "../../style/Landing-css/LandingCom4.css";
import img1 from '../../image/mennekes-plug-250x250.webp'
import img2 from '../../image/modbox-modular-distribution-system-ip-65-500x500.webp'
import img3 from '../../image/pdu-csd242410-spl-face_2000x2000__00211.jpg'
import img4 from '../../image/300Wx300H-null (1).png'
import img5 from '../../image/pcc-1.jpg'
import img6 from '../../image/APFC.png'
import img7 from '../../image/dg-panel.png'
import img8 from '../../image/elsteel.png'




const products = [
  {
    name: "Industrial Plug & Sockets",
    image:img1 , 
  },
  {
    name: "VariaBox",
    image: img2, 
  },
  {
    name: "Junction Boxes",
    image: img3, 
  },
  {
    name: "Mobile Distribution Board",
    image: img4, 
  },
  {
    name: "Power Control Centre",
    image:img5 , 
  },
  {
    name: "APFC Panels",
    image: img6, 
  },
  {
    name: "Mains/DG Panels",
    image: img7, 
  },
  {
    name: "Elsteel Techno Module",
    image: img8, 
  },
];

const PowerDistribution = () => {
  return (
    <div className="PowerDistribution-container">
      <h2 className="PowerDistribution-heading">Power Distribution Management</h2>
      <div className="PowerDistribution-underline"></div>
      <div className="PowerDistribution-grid-container">
        {products.map((product, index) => (
          <div key={index} className="PowerDistribution-card">
            <img src={product.image} alt={product.name} className="PowerDistribution-card-image" />
            <h3 className="PowerDistribution-card-title">{product.name}</h3>
            <div className="PowerDistribution-button-container">
              <button className="PowerDistribution-read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerDistribution;


