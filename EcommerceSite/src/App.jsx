import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Pages/HomePage/HomePage';
import  Footer from './Components/Footer';
import About from './Pages/AboutPage/AboutPage';
import Contact from './Pages/ContactPage/ContactComs';
import Services from './Pages/ServicesPage/ServicesComs';
import Product from './Pages/ProductPage/ProductPage';
import Solution from './Pages/SoultionPage/SolutionPage';
import EnergyManagement from './Pages/SoultionPage/EneryManagement/EnergyManagement';
import LV from './Pages/SoultionPage/LvSwitch/LvSwitch';
import PowerQuality from './Pages/SoultionPage/PowerQuality/PowerQuality';
import PowerFactor from './Pages/SoultionPage/PowerFactor/PowerFactor';
import Plug from './Pages/SoultionPage/Plug&Socket/Plug&Socket';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<EnergyManagement />} />
        <Route path="/contact" element={<PowerFactor />} />
        <Route path="/contact" element={<PowerQuality />} />
        <Route path="/contact" element={<LV />} />
        <Route path="/contact" element={<Plug />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
