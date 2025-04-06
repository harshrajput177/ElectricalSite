import React from "react";
import "../../style/Services-css/ServicesCom3.css";
import img1 from '../../image/socomec-power-monitors-5x7-removebg-preview.png'
import img2 from '../../image/ac-type-2-ev-charger-panasonic.jpg'
import img3 from '../../image/12108_ip_67_socket_outlet_straight_5_pin-300x300.jpeg'
import img4 from '../../image/Screenshot 2025-04-06 212311.png'
import img5 from '../../image/1_eumNIzPYyE8X7On5iM02Hw.jpg'

const services = [
  {
    title: "BASIC METERS/MFM/POWER ANALYZERS",
    description:
      "RTN Next-Era offer basic meters for voltage, current, and Frequency measurement. Our MFM meters provide comprehensive data on power factor, harmonics, and more. Power analyzers offer detailed insights into power quality, transient events, and energy consumption for industrial applications.",
      image: img1,
    alt: "Keys on blueprint",
  },
  {
    title: "AC/DC EV CHARGER",
    description:
      "RTN Next-Era offers a total EV charging solution from compact, high quality AC wall boxes, reliable DC fast charging stations with robust connectivity, to innovative on-demand electric vehicle charging systems, we deploy infrastructure that meet the needs of the next generation of smarter mobility.",
      image: img2,
    alt: "House in hand",
  },
  {
    title: "INDUSTRIAL and PLUG & SOCKET",
    description:
      "RTN Next-Era provide robust industrial plugs and sockets designed for reliable power connections in demanding environments. Our products offer high durability, safety features, and compatibility with various voltage and current ratings, ensuring efficient operations in industrial settings.",
      image: img3,
    alt: "Negotiation process",
  },
  {
    title: "CABLES & SWITCHGEARS",
    description:
      "RTN Next-Era offer high-quality wires and reliable switchgears tailored for industrial and commercial applications. Our products ensure efficient electrical distribution, safety, and reliability, meeting diverse needs for power transmission and control in various environments",
      image: img4,
    alt: "Post-sale support",
  },

  {
    title: "SWITCHES/FAN/ LIGHTS (CONSUMER, RETAIL & HOSPITALITY, INDUSTRIAL LIGHTS)",
    description:
      "RTN Next-ERA is a premier trader of high-quality lighting & electrical solutions,specializing in consumer, commercial, and industrial lighting as well as a wide range of switches and fans. We partner with leading manufacturers to offer stylish and energy-efficient products tailored to diverse needs.",
      image: img5,
    alt: "Post-sale support",
  },
];

const PropertySection = () => {
  return (
    <div className="ServicesCom3-property-container">
      <div className="text-line">
        <h1>Our Electrical Products
        </h1>
        <div className="ServicesCom3-line"></div>
      </div>

      {services.map((service, index) => (
        <div
          className={`ServicesCom3-property-section ${
            index % 2 !== 0 ? "reverse" : ""
          }`}
          key={index}
        >
          <div className="ServicesCom3-property-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className="ServicesCom3-property-button">Learn More</button>
          </div>
          <div className="ServicesCom3-property-image">
            <img src={service.image} alt={service.alt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertySection;