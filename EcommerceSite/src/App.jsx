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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
