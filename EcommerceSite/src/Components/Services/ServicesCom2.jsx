import React from "react";
import "../../style/Services-css/ServicesCom2.css";
import img1 from '../../image/an-electrical-engineer-connects-an-electrical-switchboard-in-a-new-home-the-man-adjusts-the-electrical-panel-and-arranges-the-electrical-wires-video.jpg'
import img2 from '../../image/electrical-control-panel-maintenance-service-500x500.webp'
import img3 from '../../image/electrical-control-panel-maintenance-service-500x500.webp'
import img4 from '../../image/premium_photo-1678766819153-b3f7307c5127.jpeg'

const services = [
  {
    title: "Listing and Advertising Your Property",
    description:
      "We use our extensive network and marketing expertise to list and advertise your property to a wide audience. From professional photography and virtual tours to targeted online and offline advertising, we use a variety of strategies to attract potential buyers and showcase your property in the best possible light.",
    image: img1,
    alt: "Keys on blueprint",
  },
  {
    title: "Showing Your Property to Potential Buyers",
    description:
      "Our team is available to schedule and conduct property showings for interested buyers. We understand that your time is valuable, so we work with your schedule to ensure that showings are convenient for you while still providing potential buyers with the best possible experience.",
    image: img2,
    alt: "House in hand",
  },
  {
    title: "Negotiation and Closing Assistance",
    description:
      "We assist you in negotiating with potential buyers to get the best possible deal. From handling paperwork to finalizing the transaction, we ensure a smooth and hassle-free closing process.",
    image: img3,
    alt: "Negotiation process",
  },
  {
    title: "Post-Sale Support and Guidance",
    description:
      "Our services don’t just stop at the sale. We provide post-sale support, helping you with moving assistance, legal paperwork, and any other real estate-related concerns.",
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
