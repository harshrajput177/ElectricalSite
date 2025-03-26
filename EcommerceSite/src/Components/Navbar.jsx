import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../style/Navbar.css';
import logo from '../image/Screenshot_2025-03-07_204136-removebg-preview.png';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close Menu on Link Click (Mobile)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar-flower">
      {/* Logo */}
      <div className="logo-flower">
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Section (Icons + Menu Button) */}
      <div className="right-section">
     

        {/* Menu Toggle Button */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className={`menu-flower ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>

        {/* Products Dropdown */}
        <li className="dropdown-flower"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setTimeout(() => setIsProductsOpen(false), 200)} // Delay to prevent flickering
        >
          <Link to="/Products" onClick={closeMobileMenu}>Products</Link>
          {isProductsOpen && (
            <ul className="dropdown-menu-flower">
              <li className="nested-dropdown"
                onMouseEnter={() => setIsNestedDropdownOpen('ev')}
                onMouseLeave={() => setTimeout(() => setIsNestedDropdownOpen(null), 200)}
              >
                <span>EV Solution</span>
                {isNestedDropdownOpen === 'ev' && (
                  <ul className="nested-dropdown-menu">
                    <li><Link to="/IndustrialPlugSockets" onClick={closeMobileMenu}>AC EV Smart Socket</Link></li>
                    <li><Link to="/PowerFactorCorrection" onClick={closeMobileMenu}>AC EV Charger</Link></li>
                    <li><Link to="/PowerQuality" onClick={closeMobileMenu}>DC EV Charger</Link></li>
                    <li><Link to="/LVSwitchboards" onClick={closeMobileMenu}>ADC Combination Charger</Link></li>
                  </ul>
                )}
              </li>

              <li className="nested-dropdown"
                onMouseEnter={() => setIsNestedDropdownOpen('industrial')}
                onMouseLeave={() => setTimeout(() => setIsNestedDropdownOpen(null), 200)}
              >
                <span>Industrial Plug & Sockets</span>
                {isNestedDropdownOpen === 'industrial' && (
                  <ul className="nested-dropdown-menu">
                    <li><Link to="/SurfaceMounting" onClick={closeMobileMenu}>Surface Mounting</Link></li>
                    <li><Link to="/PanelMounting" onClick={closeMobileMenu}>Panel Mounting</Link></li>
                    <li><Link to="/Plugs" onClick={closeMobileMenu}>Plugs</Link></li>
                    <li><Link to="/GTConnector" onClick={closeMobileMenu}>GT Connector</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* Solution Dropdown */}
        <li className="dropdown-flower"
          onMouseEnter={() => setIsSolutionOpen(true)}
          onMouseLeave={() => setTimeout(() => setIsSolutionOpen(false), 200)}
        >
          <Link to="/Solution" onClick={closeMobileMenu}>Solution</Link>
          {isSolutionOpen && (
            <ul className="dropdown-menu-flower">
              <li><Link to="/PowerFactorCorrection" onClick={closeMobileMenu}>Power Factor Correction</Link></li>
              <li><Link to="/PowerQuality" onClick={closeMobileMenu}>Power Quality</Link></li>
              <li><Link to="/LVSwitchboards" onClick={closeMobileMenu}>LV Switchboards</Link></li>
              <li><Link to="/EnergyManagement" onClick={closeMobileMenu}>Energy Management System</Link></li>
            </ul>
          )}
        </li>

        {/* Other Links */}
        <li><Link to="/Services" onClick={closeMobileMenu}>Services</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to="/resources" onClick={closeMobileMenu}>Resources</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
      </ul>

         {/* Icons */}
         <div className="icons-flower">
          <SearchOutlinedIcon className="Flower-icon" />
          <ShoppingCartIcon className="Flower-icon" />
          <PersonOutlinedIcon className="Flower-icon" />
        </div>
    </nav>
  );
};

export default Navbar;






// Plugs
// GT Connector
// Surface Mounting with MCB
// Domestic/Industrial AC Outlet
// Variabox
// Modbox Enclosure & Junction Boxes