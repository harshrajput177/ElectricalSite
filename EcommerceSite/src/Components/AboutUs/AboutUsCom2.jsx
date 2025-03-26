import React from "react";
import "../../style/About-css/AboutCom2.css";
import imgProfile from '../../image/Screenshot 2025-03-15 194222.png';

const AboutCompany = () => {
  return (
    <div className="AboutCom-2-container">
      <div className="AboutCom-2-card">
       <div className="img-content-aboutsection">
       <div className="AboutCom-2-profile-image">
          <img src={imgProfile} alt="Profile" />
        </div>
        <div className="AboutCom-2-content">
          <h2>About Our Company</h2>
          <h3> CEO & Founder <br /></h3>
          <h4>RATNESH KUMAR</h4>
          <p>
          He brings extensive industry expertise and visionary
leadership to drive RTN NextEra strategic growth,
innovation, and customer-centric approach.

          </p>
          <button className="AboutCom-2-learn-more">LEARN MORE</button>
        </div>
       </div>
        <div className="AboutCom-2-info-grid">
          <div className="AboutCom-2-info-box box1">
            <h3>01</h3>
            <p>
            R.T.N NEXT-ERA PVT. LTD. is your trusted partner in energy management, security, and safety solutions. We provide reliable, customized services for businesses of all sizes, ensuring efficiency and protection tailored to your specific needs.
            </p>
          </div>
          <div className="AboutCom-2-info-box box2">
            <h3>02</h3>
            <p>
            WE OFFER A COMPREHENSIVE RANGE OF TOPQUALITY PRODUCTS AND SERVICES, FROM
ENERGY METERS TO FIRE-ALARM SYSTEM
EQUIPMENT, TAILORED TO MEET YOUR UNIQUE
NEEDS.

            </p>
          </div>
          <div className="AboutCom-2-info-box box3">
            <h3>03</h3>
            <p>
            Established in 2024, R.T.N NEXT-ERA Pvt Ltd is a dynamic startup specializing
in innovative solutions & products for energy management, security, safety
systems, and electrical installations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;