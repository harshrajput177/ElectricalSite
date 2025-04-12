import React from "react";
import "../../../style/IndustrialPlug-css/IndustrialPlugCom7.css";
import img1 from '../../../image/38-300x300.jpg'
import img2 from '../../../image/output-600x600.png'
import img3 from '../../../image/Domestic-Industrial-ac-outlet.jpg'
import img4 from '../../../image/38-300x300.jpg'

const products = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
];

const ProductListing = () => {
  return (
    <div className="product-container">
      <div className="product-description">
        <p><strong>Domestic/Industrial AC Outlet</strong> refers to the installation method where a device, such as a socket outlet...</p>
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
