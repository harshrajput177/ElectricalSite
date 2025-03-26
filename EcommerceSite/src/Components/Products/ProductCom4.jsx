import React from "react";
import "../../style/Product-css/ProductCom4.css";
import img1 from '../../image/Residential-Fire-Alarm-System.jpg';
import img2 from '../../image/ac-type-2-ev-charger-panasonic.jpg';
import img3 from '../../image/Volt.png';
import img4 from '../../image/F4.jpg';


const products = [
  {
    id: 1,
    name: "Logitech G320 Gaming Headphone",
    price: "$399.00",
    image:img1,
  },
  {
    id: 2,
    name: "Olevs Fashion Waterproof Watch For Men",
    price: "$379.00",
    image:img2,
  },
  {
    id: 3,
    name: "Asus TUF Gaming H70 Lite Gaming Headset",
    price: "$549.00",
    image:img3,
  },
];

export default function NewArrivals() {
  return (
    <div className="Com-4-P-new-arrivals-container">
      <div className="Com-4-P-header">
        <h2>New Arrivals</h2>
        <button className="Com-4-P-view-all-btn">View All Products →</button>
      </div>

      <div className="Com-4-P-grid-container">
        <div className="Com-4-P-featured-product">
          <h3>Samsung Galaxy Note20 Ultra 5G</h3>
          <button className="Com-4-P-shop-now-btn">Shop Now →</button>
          <img
            src={img4}
            alt="Samsung Galaxy Note20 Ultra 5G"
            className="Com-4-P-product-image"
          />
        </div>

        <div className="Com-4-P-products-list">
          {products.map((product) => (
            <div key={product.id} className="Com-4-P-product-card">
              <img src={product.image} alt={product.name} className="Com-4-P-product-img" />
              <div className="Com-4-P-product-details">
                <h4>{product.name}</h4>
                <div className="Com-4-P-stars">★★★★★</div>
                <p className="Com-4-P-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
