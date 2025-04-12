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
import Ev_1 from './Pages/ProductPage/EvPage/EvPage1';
import Ev_2 from './Pages/ProductPage/EvPage/EvPage2';
import Ev_3 from './Pages/ProductPage/EvPage/EvPage3';
import Ev_4 from './Pages/ProductPage/EvPage/EvPage4';
import IndusProduct from './Pages/ProductPage/IndustrialPlugProduct/IndustrialPlug';
import IndusProduct_2 from './Pages/ProductPage/IndustrialPlugProduct/IndustrialPlug2';
import IndusProduct_3 from './Pages/ProductPage/IndustrialPlugProduct/IndustrialPlug3';
import IndusProduct_4 from './Pages/ProductPage/IndustrialPlugProduct/IndustrialPlug4';
import IndusProduct_5 from './Pages/ProductPage/IndustrialPlugProduct/IndustrialPlug5';
import IndusProduct_6 from './Pages/ProductPage/IndustrialPlugProduct/IndustrialPlug6';


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
        <Route path="/EnergyManagement" element={<EnergyManagement />} />
        <Route path="//PowerFactorCorrection" element={<PowerFactor />} />
        <Route path="/PowerQuality" element={<PowerQuality />} />
        <Route path="/LVSwitchboards" element={<LV />} />
        <Route path="/PlugSocket" element={<Plug />} />


        <Route path="/ev-smart-socket" element={<Ev_1 />} />
        <Route path="/ac-ev-charger" element={<Ev_2 />} />
        <Route path="/dc-ev-charger" element={<Ev_3 />} />
        <Route path="/adc-combo-charger" element={<Ev_4 />} />
        <Route path="/surface-mounting" element={<IndusProduct />} />
        <Route path="/panel-mounting" element={<IndusProduct_2 />} />
        <Route path="plugs" element={<IndusProduct_3 />} />
        <Route path="/gt-connector" element={<IndusProduct_4 />} />
        <Route path="/surface-with-mcb" element={<IndusProduct_5 />} />
        <Route path="/ac-outlet" element={<IndusProduct_6 />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
