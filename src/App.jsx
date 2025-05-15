import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Component/Navbar';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import { ContactUs } from './pages/ContactUs.jsx';
import Clients from './pages/Client.jsx'; // Import the Clients page
import AppFooter from './Component/Footer.jsx';
import LoginForm from './Component/LoginForm';
import SignupForm from './Component/Signup';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <AppNavbar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/clients" element={<Clients />} /> {/* Add the Clients route */}
            <Route path="/login" element={<LoginForm />} /> {/* Add the Clients route */}
            <Route path="/signup" element={<SignupForm />} /> {/* Add the Clients route */}
          
          </Routes>
        </div>

        {/* Footer */}
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;