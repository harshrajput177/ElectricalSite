import React from "react";
import "../../../style/IndustrialPlug-css/IndustrialPlugCom6.css";
import img1 from '../../../image/fo15100-300x300.jpg'
import img2 from '../../../image/15158-1-300x300.jpg'
import img3 from '../../../image/22-2-300x300.jpg'
import img4 from '../../../image/Surface-Monting-MCB.jpg'
import img5 from '../../../image/15036-1-300x300.jpg'
import img6 from '../../../image/15019_socket_outlet_with_mcb_provision_ip_67-300x300.jpg'

const products = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5},
  { id: 6, img: img6},
];

const ProductListing = () => {
  return (
    <div className="product-container">
      <div className="product-description">
        <p><strong>Surface Mounting with MCB</strong> refers to the installation method where a device, such as a socket outlet...</p>
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