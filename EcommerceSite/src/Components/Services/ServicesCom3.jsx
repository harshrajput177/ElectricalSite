import React from "react";
import "../../style/Services-css/ServicesCom3.css";
// import img1 from '../../image'
// import img2 from '../../image'
// import img3 from '../../image'
// import img4 from '../../image'

const services = [
  {
    title: "Listing and Advertising Your Property",
    description:
      "We use our extensive network and marketing expertise to list and advertise your property to a wide audience. From professional photography and virtual tours to targeted online and offline advertising, we use a variety of strategies to attract potential buyers and showcase your property in the best possible light.",
      image: "/images/property-keys.jpg",
    alt: "Keys on blueprint",
  },
  {
    title: "Showing Your Property to Potential Buyers",
    description:
      "Our team is available to schedule and conduct property showings for interested buyers. We understand that your time is valuable, so we work with your schedule to ensure that showings are convenient for you while still providing potential buyers with the best possible experience.",
      image: "/images/property-keys.jpg",
    alt: "House in hand",
  },
  {
    title: "Negotiation and Closing Assistance",
    description:
      "We assist you in negotiating with potential buyers to get the best possible deal. From handling paperwork to finalizing the transaction, we ensure a smooth and hassle-free closing process.",
      image: "/images/property-keys.jpg",
    alt: "Negotiation process",
  },
  {
    title: "Post-Sale Support and Guidance",
    description:
      "Our services don’t just stop at the sale. We provide post-sale support, helping you with moving assistance, legal paperwork, and any other real estate-related concerns.",
      image: "/images/property-keys.jpg",
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