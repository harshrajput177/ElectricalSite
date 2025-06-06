import React from "react";
import "../../../style/IndustrialPlug-css/IndustrialPlugCom2.css";
import img1 from '../../../image/Socket-Outlet-300x300.jpg'
import img2 from '../../../image/Surfacemount-2.jpg'
import img3 from '../../../image/surface-mounting-1.jpg'
import img4 from '../../../image/surface-mounting-with-interlocking.jpg'
import img5 from '../../../image/Surface-Monting-MCB.jpg'
import img6 from '../../../image/1133-300x300.jpg'
import img7 from '../../../image/surface-mounting-with-interlocking.jpg'
import img8 from '../../../image/Surface-Monting-MCB.jpg'
import img9 from '../../../image/1133-300x300.jpg'


const products = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img:  img5},
  { id: 6, img:  img6},
  { id: 7, img:  img7},
  { id: 8, img:  img8},
  { id: 9, img:  img9},
];

const ProductListing = () => {
  return (
    <div className="product-container">
      <div className="product-description">
        <p><strong>Surface Mounting</strong> refers to the installation method where a device, such as a socket outlet...</p>
        <p>Neptune offers Panel Mounting Socket Outlets in both straight and angled designs...</p>
        <p>Our socket outlets are available with IP44 and IP67 ratings...</p>
      </div>

      <div className="product-header">
        <p>SHOWING 1–6 OF 34 RESULTS</p>
        <select className="sort-dropdown">
          <option>SORT BY LATEST</option>
        </select>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={`Product ${product.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;






















// Variabox
// Modbox Enclosure & Junction Boxes