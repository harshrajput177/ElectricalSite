import { useState } from "react";
import "../../style/Product-css/ProductCom3.css";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import img1 from '../../image/Volt.png'
import img2 from '../../image/ac-type-2-ev-charger-panasonic.jpg'
import img3 from '../../image/all in one.png'
import img4 from '../../image/Power Analyzer.png'
import img5 from '../../image/Domestic-Industrial-ac-outlet.jpg'
import img6 from '../../image/GT-Connectors.jpg'
import img7 from '../../image/schuko.jpg'
import img8 from '../../image/Surface-Monting-MCB.jpg'
import img9 from '../../image/surface-mounting-1.jpg'
import img10 from '../../image/surface-mounting-with-interlocking.jpg'
import img11 from '../../image/Untitled-design-76.jpg'
import img12 from '../../image/images (1).jpeg'
// import img13 from '../../image/Volt.png'
// import img14 from '../../image/ac-type-2-ev-charger-panasonic.jpg'
// import img15 from '../../image/mennekes-plug-250x250.webp'
// import img16 from '../../image/Power Analyzer.png'


const products = [
  {
    id: 1,
    name: "ASUS W100 Optical Wireless Mouse",
    price: "$129.00",
    image:img1,
  },
  {
    id: 2,
    name: "Logitech H200 STEREO Headset",
    price: "$349.00",
    image: img2,
  },
  {
    id: 3,
    name: "Fujifilm X99 Mirrorless Digital Camera",
    price: "$239.00",
    image:img3,
  },
  {
    id: 4,
    name: "Asus M220 Gaming Headphone",
    price: "$249.00",
    image: img4,
  },
  {
    id: 5,
    name: "ASUS W100 Optical Wireless Mouse",
    price: "$129.00",
    image:img5,
  },
  {
    id: 6,
    name: "Logitech H200 STEREO Headset",
    price: "$349.00",
    image: img6,
  },
  {
    id: 7,
    name: "Fujifilm X99 Mirrorless Digital Camera",
    price: "$239.00",
    image:img7,
  },
  {
    id: 8,
    name: "Asus M220 Gaming Headphone",
    price: "$249.00",
    image: img8,
  },
  {
    id: 9,
    name: "ASUS W100 Optical Wireless Mouse",
    price: "$129.00",
    image:img9,
  },
  {
    id: 10,
    name: "Logitech H200 STEREO Headset",
    price: "$349.00",
    image: img10,
  },
  {
    id: 11,
    name: "Fujifilm X99 Mirrorless Digital Camera",
    price: "$239.00",
    image:img11,
  },
  {
    id: 12,
    name: "Asus M220 Gaming Headphone",
    price: "$249.00",
    image: img12,
  },
];

export default function FeaturedProducts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="productShop-featured-products">
      <h2 className="productShop-title">Featured Products</h2>
      <div className="productShop-grid">
        {products.map((product) => (
          <div key={product.id} className="productShop-card">
            <img src={product.image} alt={product.name} className="productShop-image" />
            <div className="productShop-details">
              <h3 className="productShop-name">{product.name}</h3>
              <p className="productShop-price">{product.price}</p>
              <div className="productShop-button-group">
                <button onClick={() => addToCart(product)} className="productShop-add-to-cart">
                  <AddShoppingCartIcon size={16} /> Add To Cart
                </button>
                <button className="productShop-view-image">
                  <RemoveRedEyeOutlinedIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
