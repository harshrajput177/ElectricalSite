import React from "react";
import "../../style/Landing-css/LandingCom8.css";
import s1 from '../../image/s1.png'
import s2 from '../../image/s2.png'
import s3 from '../../image/s3.png'
import s4 from '../../image/s4.png'

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="LandingCom8-feature-card">
      <img src={image} alt={title} className="LandingCom8-feature-image" />
      <h3 className="LandingCom8-feature-title">{title}</h3>
      <p className="LandingCom8-feature-description">{description}</p>
      <button className="LandingCom8-feature-button">MORE</button>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      image: s1, // Replace with actual image
      title: 'COMMERCIAL/RESIDENTIAL WIRING',
      description: "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id."
    },
    {
      image: s2, // Replace with actual image
      title: "LT PANEL SERVICING",
      description: "Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat."
    },
    {
      image: s3, // Replace with actual image
      title: "PLC PROGRAMMING",
      description: "Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris."
    },
    {
        image:s4, // Replace with actual image
        title: "ANY KIND OF ELECTRICAL APPLIANCES INSTALLATION",
        description: "Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris."
      }
  ];

  return (
    <div className="LandingCom8-features-section">
      <h2 className="LandingCom8-features-title">Our Features & Services.</h2>
      <div className="LandingCom8-features-container">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;

