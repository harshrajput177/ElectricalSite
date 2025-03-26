import React from "react";
import { useNavigate } from "react-router-dom"; 
import Slider from "react-slick";
import '../../style/Landing-css/LandingCom1.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import heroImg1 from '../../image/nasa-Q1p7bh3SHj8-unsplash.jpg';
import heroImg2 from '../../image/slider2.jpg';
import heroImg3 from '../../image/pexels-pok-rie-33563-157827.jpg';
import heroImg4 from '../../image/HD-wallpaper-electric-fire-light-bulb-hot-hand-power-electricity-heat.jpg';
import heroImg5 from '../../image/pexels-pixabay-459740.jpg';

function HomeC1() {
  
  const navigate = useNavigate();
  const handleAdmissionClick = () => {
    navigate("/admission"); // Programmatically navigate to the admissions page
  };

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 400, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-play the slides
    autoplaySpeed: 2000, // Auto-play speed (3 seconds)
    rtl: true, // Enable right-to-left sliding
    arrows: false, // Hide navigation arrows
  };

  return (
    <>
      <div className="Home-container-box">
        <div className="hero-contents">
          <h1>
          Shocking Quality at Shockingly <br />Affordable
          Prices.
            <br />
            <span className="change-col"></span>
          </h1>
          <button className="HomeC1-front-button">
            <span onClick={handleAdmissionClick} className="Admission-text-size">
              Shop Now
            </span>
          </button>
        </div>
        <Slider {...settings} className="hero-slider">
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg1} alt="Slide 1" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg2} alt="Slide 2" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg3} alt="Slide 3" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg4} alt="Slide 4" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
          <div>
            <div className="hero-img-wrapper">
              <img src={heroImg5} alt="Slide 5" className="hero-img" />
              <div className="hero-img"></div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomeC1;