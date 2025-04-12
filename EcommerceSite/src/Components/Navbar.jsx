import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../style/Navbar.css';
import logo from '../image/Screenshot_2025-03-07_204136-removebg-preview.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar-flower">
      {/* Logo */}
      <div className="logo-flower">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <ul className={`menu-flower ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>

        <li
          className="dropdown-flower"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setTimeout(() => setIsProductsOpen(false), 200)}
        >
          <Link to="/Products" onClick={closeMobileMenu}>Products</Link>
          {isProductsOpen && (
         <div className="mega-menu">
         <div className="mega-column">
           <h4>EV SOLUTION</h4>
           <Link to="/ev-smart-socket" onClick={closeMobileMenu}>AC EV Smart Socket</Link>
           <a href="#ac-ev-charger" onClick={closeMobileMenu}>AC EV Charger</a>
           <a href="#dc-ev-charger" onClick={closeMobileMenu}>DC EV Charger</a>
           <a href="#adc-combo-charger" onClick={closeMobileMenu}>ADC Combination Charger</a>
         </div>
       
         <div className="mega-column">
           <h4>INDUSTRIAL PLUG & SOCKETS</h4>
           <Link to="/surface-mounting" onClick={closeMobileMenu}>Surface Mounting</Link>
           <a href="#panel-mounting" onClick={closeMobileMenu}>Panel Mounting</a>
           <a href="#plugs" onClick={closeMobileMenu}>Plugs</a>
           <a href="#gt-connector" onClick={closeMobileMenu}>GT Connector</a>
           <a href="#surface-with-mcb" onClick={closeMobileMenu}>Surface Mounting with MCB</a>
           <a href="#ac-outlet" onClick={closeMobileMenu}>Industrial AC Outlet</a>
           <a href="#variabox" onClick={closeMobileMenu}>Variabox</a>
           <a href="#junction-boxes" onClick={closeMobileMenu}>Junction Boxes</a>
         </div>
       
         <div className="mega-column">
           <h4>POWER QUALITY</h4>
           <Link to="/digital-meters" onClick={closeMobileMenu}>Detuned Harmonic Filtration System</Link>
           <a href="#multi-function-meters" onClick={closeMobileMenu}>Reactors</a>
           <a href="#passive-harmonic" onClick={closeMobileMenu}>Passive Harmonic Filters</a>
           <a href="#active-harmonic" onClick={closeMobileMenu}>Active Harmonic Filters</a>
           <a href="#hybrid-filters" onClick={closeMobileMenu}>Hybrid Filters</a>
         </div>
       
         <div className="mega-column">
           <h4>Smart Energy Management</h4>
           <Link to="/Digital Panel" onClick={closeMobileMenu}>Digital Panel Meters</Link>    
           <a href="#multi-function" onClick={closeMobileMenu}>Multi Function Meters</a>
           <a href="#power-analyzers" onClick={closeMobileMenu}>Power Analyzers</a>
           <a href="#prepaid-meter" onClick={closeMobileMenu}>Prepaid Meter</a>
         </div>
       </div>
       
          )}
        </li>

        <li
          className="rtn-dropdown-flower"
          onMouseEnter={() => setIsSolutionOpen(true)}
          onMouseLeave={() => setTimeout(() => setIsSolutionOpen(false), 200)}
        >
          <Link to="/Solution" onClick={closeMobileMenu}>Solution</Link>
          {isSolutionOpen && (
          <div  className='solution-dropdown-li'>
              <ul className="rtn-dropdown-menu-flower">
               <li><Link to="/PlugSocket" onClick={closeMobileMenu}>Industrial Plug & Sockets</Link></li>
              <li><Link to="/PowerFactorCorrection" onClick={closeMobileMenu}>Power Factor Correction</Link></li>
              <li><Link to="/PowerQuality" onClick={closeMobileMenu}>Power Quality</Link></li>
              <li><Link to="/LVSwitchboards" onClick={closeMobileMenu}>LV Switchboards</Link></li>
              <li><Link to="/EnergyManagement" onClick={closeMobileMenu}>Energy Management System</Link></li>
            </ul>
          </div>
          )}
        </li>

        <li><Link to="/Services" onClick={closeMobileMenu}>Services</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to="/resources" onClick={closeMobileMenu}>Resources</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
      </ul>

      {/* Right Section */}
      <div className="right-section">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon  className='menuIcons'/>}
        </div>
      </div>

      {/* Icons */}
      <div className="icons-flower">
        <ShoppingCartIcon className="Flower-icon" />
        <LocalPhoneIcon className="Flower-icon" /><p  className='rtn-number'>91369 43397</p>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <CloseIcon className="close-icon" onClick={closeMobileMenu} />
        </div>
        <ul className="mobile-menu-list">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>

          <li>
            <details>
              <summary>Products</summary>
              <ul>
                <li><strong>EV SOLUTION</strong></li>
                <li><Link to="/ev-smart-socket" onClick={closeMobileMenu}>AC EV Smart Socket</Link></li>
                <li><Link to="/ac-ev-charger" onClick={closeMobileMenu}>AC EV Charger</Link></li>
                <li><Link to="/dc-ev-charger" onClick={closeMobileMenu}>DC EV Charger</Link></li>
                <li><Link to="/adc-combo-charger" onClick={closeMobileMenu}>ADC Combination Charger</Link></li>
                <li><strong>SMART ENERGY</strong></li>
                <li><Link to="/digital-meters" onClick={closeMobileMenu}>Digital Panel Meters</Link></li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Solution</summary>
              <ul>
                <li><Link to="/PowerFactorCorrection" onClick={closeMobileMenu}>Power Factor Correction</Link></li>
                <li><Link to="/PowerQuality" onClick={closeMobileMenu}>Power Quality</Link></li>
                <li><Link to="/LVSwitchboards" onClick={closeMobileMenu}>LV Switchboards</Link></li>
                <li><Link to="/EnergyManagement" onClick={closeMobileMenu}>Energy Management System</Link></li>
              </ul>
            </details>
          </li>

          <li><Link to="/Services" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/resources" onClick={closeMobileMenu}>Resources</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



