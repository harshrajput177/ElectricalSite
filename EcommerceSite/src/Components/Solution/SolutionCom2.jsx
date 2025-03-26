import React, { useEffect, useRef } from "react";
import "../../style/Solution-css/SolutionCom2.css";
import Header from "./SolutionCom3";
import image1 from '../../image/Residential-Fire-Alarm-System.jpg';
import image2 from '../../image/1641796886570.jpeg';
import image3 from '../../image/c1.png';
import image4 from '../../image/Electrical-panel-board-installation-amp_-maintenance.jpg';
import image5 from '../../image/csm_obo_070314_15_compositing_ak_2f23374154.jpg';
import image6 from '../../image/BMS-Install.jpg';
import image7 from '../../image/Commercial-Access-Control-System-Installation-862x565.jpg.webp';
import image8 from '../../image/1_eumNIzPYyE8X7On5iM02Hw.jpg';
import image9 from '../../image/Power-Backup-Systems-controllers.jpg.webp';


const sections= [
    {
      title: "FIRE ALARM SYSTEM",
      description: "Our solutions include advanced detectors, alarm panels, and integrated monitoring systems. We ensure prompt detection, early warning, and rapid response capabilities, safeguarding lives and property effectively.",
      image: image1, 
    },
    {
      title: "PA SYSTEM",
      description: "Our offerings include high-quality speakers, amplifiers, microphones, and integrated control systems. We ensure seamless integration, optimal sound distribution, and enhanced communication capabilities for various environments.",
      image: image2,
    },
    {
      title: "CCTV CAMERA SOLUTION",
      description: "Our offerings include high-definition cameras, advanced monitoring systems, and tailored installation services.",
      image: image3,
    },
    {
      title: "EMS/PREPAID METERING SOLUTION",
      description: "Our offerings include smart meters, real-time monitoring systems, and integrated billing platforms.",
      image: image4,
    }, 
    {
      title: "LIGHTNING PROTECTION SYSTEM",
      description: "Our advanced lightning protection solutions help prevent damage from electrical surges by using high-quality surge arresters and grounding systems.",
      image: image5,
    },
    {
      title: "BUILDING MANAGEMENT SYSTEM (BMS)",
      description: "Our BMS solutions integrate HVAC, lighting, power monitoring, and security systems for improved energy efficiency and building safety.",
      image: image6,
    }, 
    {
      title: "ACCESS CONTROL SYSTEM",
      description: "We provide biometric authentication, RFID card access, and AI-driven security solutions for restricted access to sensitive areas.",
      image: image7,
    }, 
    {
      title: "HOME AUTOMATION SYSTEM",
      description: "Our smart home solutions include remote-controlled lighting, security cameras, energy-efficient automation, and AI-based control systems.",
      image: image8,
    },
    {
      title: "UPS AND POWER BACKUP SOLUTION",
      description: "We offer uninterrupted power supply (UPS) solutions, battery backups, and power inverters to ensure seamless operations during outages.",
      image: image9,
    },
  ];
  

function LabsPage() {
  const labRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("Facilities-show");
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    labRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      labRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  function SectionCard({ title, description, image }) {
    return (
      <div className="LabPage-section-card">
        <div className="LabPage-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
       <section  className="CBSE-IMAGE-SECTION-Contains">
       <img src={image} alt={title} className="LabPage-section-image" />
       </section>
      </div>
    );
  }
  
  return (
    <div className="LabPage-app-container">
      <Header />
      {sections.map((sec, index) => (
        <SectionCard
          key={index}
          id={sec.id}
          title={sec.title}
          description={sec.description}
          image={sec.image}
          buttonText={sec.buttonText}
        />
      ))}
    </div>
  );
}
export default LabsPage;
