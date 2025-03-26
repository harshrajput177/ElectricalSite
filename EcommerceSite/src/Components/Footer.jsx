import "../style/Footer.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import img from '../image/Screenshot_2025-03-07_204136-removebg-preview.png'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Info */}
        <div className="footer-section">
      <img src={img} alt="" className="footer-section-img"/>

          <div className="social-icons">
            <FacebookIcon className="social-icon" />
            <InstagramIcon className="social-icon" />
            <TelegramIcon className="social-icon"/>
            <LinkedInIcon className="social-icon"/>

          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3 className="footer-heading">COMPANY</h3>
          <ul  className="footer-ul">
            <li>About Us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">CONTACT</h3>
          <ul   className="footer-ul">
            <li className="contact-item"><EmailIcon /><span>info@rtnnextera.com</span></li>
            <li className="contact-item"><LocalPhoneIcon /><span>9136943397</span></li>
            <li className="contact-item"><LocationOnIcon /> <span>RTN NEXT-ERA PVT. LTD. , FF10H, GAUR CITY
            CENTER, SECTOR 4, GREATER NOIDA WEST</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 All Rights Reserved. Ratnesh Kumar
      </div>
    </footer>
  );
}