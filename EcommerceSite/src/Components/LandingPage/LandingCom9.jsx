import React from "react";
import "../../style/Landing-css/LandingCom4.css";
import img1 from '../../image/capictor.jpg'
import img2 from '../../image/powerfactormeter.webp'
import img3 from '../../image/harmonic-reactor-500x500.webp'
import img4 from '../../image/thyristor.jpg'
import img5 from '../../image/Active-Harmonic-Filters.png'
import img6 from '../../image/Untitled-design-25.jpg'
import img7 from '../../image/Untitled-design-26-1.jpg'
import img8 from '../../image/Hybrid-Filters.png'




const products = [
  {
    name: "Capacitors",
    image:img1 , 
  },
  {
    name: "Powers Factor Controller",
    image: img2, 
  },
  {
    name: "Harmonic Block Reactors",
    image: img3, 
  },
  {
    name: "Thyristor Switching Module",
    image: img4, 
  },
  {
    name: "Active Harmonic Filters",
    image:img5 , 
  },
  {
    name: "Passive Harmonic Filters",
    image: img6, 
  },
  {
    name: "Detuned PF Compensato",
    image: img7, 
  },
  {
    name: "Hybrid PQ Solutions",
    image: img8, 
  },
];

const PowerDistribution = () => {
  return (
    <div className="PowerDistribution-container">
      <h2 className="PowerDistribution-heading">Power Quality Management</h2>
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