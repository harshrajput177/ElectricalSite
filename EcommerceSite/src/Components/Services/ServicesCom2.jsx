import React from "react";
import "../../style/Services-css/ServicesCom2.css";
import img1 from '../../image/an-electrical-engineer-connects-an-electrical-switchboard-in-a-new-home-the-man-adjusts-the-electrical-panel-and-arranges-the-electrical-wires-video.jpg'
import img2 from '../../image/electrical-control-panel-maintenance-service-500x500.webp'
import img3 from '../../image/electrical-control-panel-maintenance-service-500x500.webp'
import img4 from '../../image/premium_photo-1678766819153-b3f7307c5127.jpeg'

const services = [
  {
    title: "COMMERCIAL/RESIDENTIAL WIRING",
    description:
      "RTN Next-Era provide expert electrical wiring services for both commercial and residential buildings, ensuring safety, efficiency, and compliance with industry standards.",
    image: img1,
    alt: "Keys on blueprint",
  },
  {
    title: "LT PANEL SERVICING",
    description:
      "RTN Next-Era specialize in servicing LT panels to ensure reliable electrical distribution. Our services include maintenance, repairs, and upgrades, enhancing panel efficiency and safety for commercial and industrial clients",
    image: img2,
    alt: "House in hand",
  },
  {
    title: "PLC PROGRAMMING",
    description:
      "RTN Next-Era specialize in PLC programming for industrial automation solutions. Our expertise includes designing, coding, and optimizing PLC systems for efficient control and monitoring of manufacturing processes.",
    image: img3,
    alt: "Negotiation process",
  },
  {
    title: "ANY KIND OF ELECTRICAL APPLIANCES INSTALLATION ",
    description:
      "RTN Next-Era provide expert installation services for a wide range of electrical appliances. From lighting fixtures to complex machinery, our services ensure safe, efficient, and compliant installations tailored to residential, commercial, and industrial needs.",
    image: img4,
    alt: "Post-sale support",
  },
];

const PropertySection = () => {
  return (
    <div className="ServicesCom2-property-container">
      <div className="text-line">
        <h1>Our Services</h1>
        <div className="ServicesCom2-line"></div>
      </div>

      {services.map((service, index) => (
        <div
          className={`ServicesCom2-property-section ${
            index % 2 !== 0 ? "reverse" : ""
          }`}
          key={index}
        >
          <div className="ServicesCom2-property-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className="ServicesCom2-property-button">Learn More</button>
          </div>
          <div className="ServicesCom2-property-image">
            <img src={service.image} alt={service.alt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertySection;
