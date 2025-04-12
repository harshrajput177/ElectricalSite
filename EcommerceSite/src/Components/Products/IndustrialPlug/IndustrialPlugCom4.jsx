import React from "react";
import "../../../style/IndustrialPlug-css/IndustrialPlugCom4.css";
import img1 from '../../../image/13028_ip_67_soucket_outlet_straight_5_pin-300x300.jpeg'
import img2 from '../../../image/12108_ip_67_socket_outlet_straight_5_pin-300x300.jpeg'
import img3 from '../../../image/fo1372-300x300.jpeg'
import img4 from '../../../image/fo129-300x300.jpeg'
import img5 from '../../../image/Socket-Outlet-Straight-300x300.jpg'
import img6 from '../../../image/fo132001-300x300.jpeg'

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
        <p><strong>Panel mounting</strong> refers to the installation method where a device, such as a socket outlet...</p>
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
