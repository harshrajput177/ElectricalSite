import React from "react";
import GalleryC1 from '../../image/L_plugsockets.jpg';
import '../../style/Product-css/ProductCom1.css';

function Product(){
    return(
        <div className="Product-container_2">
        <img src={GalleryC1} alt="Hero" className="Product-hero-img_2" />
      </div>
    )
}

export default Product;