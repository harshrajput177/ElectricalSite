import React from "react";
import { motion } from "framer-motion";
import "../../style/Landing-css/LandingCom7.css";
import AirportImg from "../../image/Dabolim-Airport-Goa_0_1200.jpg";
import hotelImg from "../../image/d4cbd6ca-2bc5-4e6f-b3db-5ad4c1453788-1626275393.jpg";
import HosImg from "../../image/Max-Super-Speciality-Hospital-Saket-New-Delhi.jpg";
import collegeImg from "../../image/iimmumbai562743779772.webp";
import RailImg from "../../image/From_the_States-Gandhi_Nagar_r_1200x768.jpeg";
import mallImg from "../../image/pexels-photo-264576.jpeg";
import CityImg from "../../image/1687252932359-310x400.jpg";
import { useNavigate } from 'react-router-dom';

const Facilities = () => {
    const navigate = useNavigate();

    const handleApllybtn = () => {
        navigate("/Products");
    };

    const facilities = [
        { title: "Voltage Stabilizers - Goa Airport", image: AirportImg, description1: 'Voltage Stabilizers', description2: 'Installed at Goa Airport to ensure stable voltage for critical equipment.' },
        { title: "Power Transformers - Taj Hotel", image: hotelImg, description1: 'Power Transformers', description2: 'Supplied high-capacity transformers for power stability at Taj Hotel.' },
        { title: "Circuit Breakers - Max Hospital Delhi", image: HosImg, description1: 'Circuit Breakers', description2: 'Implemented circuit protection solutions at Max Super Speciality Hospital, Delhi.' },
        { title: "Electrical Panels - IIT Mumbai", image: collegeImg, description1: 'Electrical Panels', description2: 'Provided customized panels for power distribution at IIT Mumbai.' },
        { title: "Energy Meters - Gandhi Nagar Railway Station", image: RailImg, description1: 'Energy Meters', description2: 'Installed precision energy meters at Gandhi Nagar Railway Station.' },
        { title: "Industrial Cables - Phoenix Mall", image: mallImg, description1: 'Industrial Cables', description2: 'Supplied durable cables for efficient power management at Phoenix Mall.' },
        { title: "Energy Meters - New Delhi City", image: CityImg, description1: 'Energy Meters', description2: 'Provided energy measurement solutions across multiple locations in New Delhi.' },
        { title: "Industrial Cables - Mumbai Mall", image: mallImg, description1: 'Industrial Cables', description2: 'High-performance cables supplied for commercial usage at Mumbai Mall.' }
    ];

    return (
        <motion.div
            className="Home5-facilities-contains"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="Home5-facilities-title">Application</h2>
            <h3 className="home5-h3">
                We specialize in providing high-quality electrical instruments and services to meet the diverse needs of industries, businesses, and residential users. Our products ensure efficiency, safety, and reliability in power management.
            </h3>
            <div className="Home5-facilities-grid">
                {facilities.map((facility, index) => (
                    <motion.div
                        key={index}
                        className="Home5-facility-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src={facility.image} alt={facility.title} className="Home5-facility-image" />
                        <div className="Home5-facility-title">{facility.title}</div>
                        <div className="Home5-facility-overlay">
                            <div className="Home5-facility-title-overlay-D1">{facility.description1}</div>
                            <div className="Home5-facility-title-overlay-D2">{facility.description2}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <button className="Home5-facility-button" onClick={handleApllybtn}>View All</button>
        </motion.div>
    );
};

export default Facilities;

