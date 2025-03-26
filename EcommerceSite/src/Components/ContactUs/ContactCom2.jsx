import React, { useState } from "react";
import "../../style/ContactUs-css/ContactCom2.css";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

const HomeC10 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // emailjs
    //   .sendForm(
    //     'service_itr9g8o',    // Your EmailJS service ID
    //     'template_ddo2ykb',    // Your EmailJS template ID
    //     e.target,              // Form element
    //     'ADdrIXlo1yY_vNDBI'         // Your EmailJS user ID
    //   )
  //     .then((response) => {
  //       setStatus('Message sent successfully!');
  //       setFormData({
  //         name: '',
  //         email: '',
  //         phone: '',
  //         message: ''
  //       });
  //     })
  //     .catch((error) => {
  //       setStatus('Error sending message, please try again.');
  //     });
  // };
}

  return (
    <div className="HomeC10-contact-container">
      {/* Left Section */}
      <div className="HomeC10-form-section">
        <h2 id="get_in_touch">Get in Touch</h2>
        <p>
          Have questions? Submit your inquiry and let us guide you toward <br /> the
          perfect educational journey for your child.
        </p>
        <form  className="form-get-intouch" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name *"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Phone number *"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            rows="4"
            onChange={handleChange}
          ></textarea>
          <br />
          <button type="submit" className="HomeC10-submit-btn">SEND</button>
        </form>
        <p>{status}</p>
        <div className="HomeC10-contact-info">
          <div>
            <span className="get-in-touch-phn"><WifiCalling3OutlinedIcon /> PHONE</span>
            <p>9136943397</p>
          </div>
          <div>
            <span className="get-in-touch-phn"><DraftsOutlinedIcon /> EMAIL</span>
            <p>info@rtnnextera.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="map-section">
      <iframe
      title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.5829642540881!2d77.4273974!3d28.6052401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0079b34a47%3A0x5c5f530a6bfab34b!2sRTN%20NextEra%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710600000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      ></iframe>

        <div className="map-section-corner-border_1"></div>
        <div className="map-section-corner-border_2"></div>
      </div>
    </div>
  );
};

export default HomeC10;