import React from "react";
import "../../../style/IndustrialPlug-css/IndustrialPlugCom5.css";
import img1 from '../../../image/3195-300x300.jpg'
import img2 from '../../../image/5-5-300x300.jpg'
import img3 from '../../../image/GT-Connectors.jpg'
import img4 from '../../../image/3104_gt_connecter_ip_44_3_pin-300x300.jpg'
import img5 from '../../../image/4-5-300x300.jpg'
import img6 from '../../../image/3112_gt_Connecter_ip_44_5_pin-300x300.jpg'

const products = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img:  img5},
  { id: 6, img:  img6},
];

const ProductListing = () => {
  return (
    <div className="product-container">
      <div className="product-description">
        <p><strong>GT Connector</strong> refers to the installation method where a device, such as a socket outlet...</p>
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
