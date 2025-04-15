import { useRef } from "react";
import "../../style/Product-css/ProductCom2.css";
import image1 from '../../image/c1.jpg';
import image2 from '../../image/BASIC.png';
import image3 from '../../image/all in one.png';
import image4 from '../../image/F4.jpg';
import image5 from '../../image/mennekes-plug-250x250.webp';
import image6 from '../../image/Power Analyzer.png';
import image7 from '../../image/Volt.png';
import image8 from '../../image/wireLESS.png';
import image9 from '../../image/ac-type-2-ev-charger-panasonic.jpg';
import image10 from '../../image/Amp.png';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const categories = [
  { name: "CCTV Camera", image: image1 },
  { name: "Phone", image: image2 },
  { name: "Watch", image: image3 },
  { name: "Camera", image: image4 },
  { name: "Headphone", image: image5 },
  { name: "Video Game", image: image6 },
  { name: "Camera", image: image7 },
  { name: "Headphone", image: image8 },
  { name: "AC EV Charger", image: image9 },
  { name: "Volt", image: image10 },
];

export default function CategorySlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="ProductCom-2-category-slider">
      <h2 className="ProductCom-2-category-title">Browse by Category</h2>
      <div className="ProductCom-2-slider-container">
        <button onClick={() => scroll("left")} className="ProductCom-2-scroll-button">
          <WestOutlinedIcon />
        </button>
        <div ref={scrollRef} className="ProductCom-2-categories">
          {categories.map((category, index) => (
            <div key={index} className="ProductCom-2-category-card">
              <div className="ProductCom-2-category-image-wrapper">
                <img src={category.image} alt={category.name} className="ProductCom-2-category-image" />
              </div>
              <p className="ProductCom-2-category-name">{category.name}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="ProductCom-2-scroll-button">
          <EastOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
