import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Component/Navbar';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Clients from './pages/Client.jsx'; // Import the Clients page
import { Footer } from 'flowbite-react';
import AppFooter from './Component/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/clients" element={<Clients />} /> {/* Add the Clients route */}
        </Routes>
      </div>
      <AppFooter/>
    </Router>
  );
}

export default App;