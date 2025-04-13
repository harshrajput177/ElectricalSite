import React from "react";
import "../../style/About-css/AboutCom3.css";

const WhyChooseUs = () => {
  return (
    <div className="LandingCom5-container">
      <h2 className="LandingCom5-heading">Why Choose Us?</h2>
      <div className="LandingCom5-content">
        <div className="LandingCom5-Paragrapgh">
          <p className="LandingCom5-description">
            With years of experience in the electrical industry, we provide top-notch electrical products along with professional installation services to ensure safety and efficiency in every home.
          </p>
          <p className="LandingCom5-highlight">
            Our strengths lie in <strong>premium-quality products, reliable doorstep service, and expert installation support</strong>, making us your trusted partner for all electrical needs.
          </p>
        </div>
        <div className="LandingCom5-All-ul"> 
          <ul className="LandingCom5-list">
            <li>✅ Wide range of high-quality electrical products including sockets, switches, and wiring accessories.</li>
            <li>✅ Doorstep delivery and professional installation service by trained technicians.</li>
            <li>✅ Commitment to safety, durability, and customer satisfaction in every project.</li>
          </ul>
        </div>
      </div>
      <div className="LandingCom5-cards">
        <div className="LandingCom5-card">
          <span className="LandingCom5-icon">💡</span>
          <h3>Premium Electrical Products</h3>
          <p>We offer a wide range of durable and safe electrical products designed to meet modern household and industrial needs.</p>
        </div>
        <div className="LandingCom5-card">
          <span className="LandingCom5-icon">🚚</span>
          <h3>Doorstep Delivery & Installation</h3>
          <p>From product delivery to complete installation, our team ensures a smooth, hassle-free experience at your convenience.</p>
        </div>
        <div className="LandingCom5-card">
          <span className="LandingCom5-icon">🔧</span>
          <h3>Expert Technical Support</h3>
          <p>Our experienced technicians provide safe, fast, and reliable installation services for every electrical setup.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
