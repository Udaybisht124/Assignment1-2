<<<<<<< HEAD
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './Store/AuthStore'; // Import the auth store
import { useThemeStore } from './Store/ThemeStore'; // Import the theme store
import AppNavbar from './Component/Navbar';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import { ContactUs } from './pages/ContactUs.jsx';
import Clients from './pages/Client.jsx';
import AppFooter from './Component/Footer.jsx';
import { SignupForm } from './Component/Signup';
import { LoginForm } from './Component/LoginForm';

function App() {
  const { isLoggedIn } = useAuthStore(); // Check if the user is logged in
  const { theme } = useThemeStore(); // Access theme state

  // Apply theme on initial render
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* Show Navbar and Footer only if logged in */}
        {isLoggedIn && <AppNavbar />}

        {/* Main Content */}
        <div className="flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 h-screen dark:text-white">
          <Routes>
            {/* If not logged in, show login/signup */}
            {!isLoggedIn ? (
              <>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                {/* Redirect to login if accessing any other route */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                {/* Show home page and other routes after login */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/clients" element={<Clients />} />
                {/* Redirect to home if accessing login/signup after login */}
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/signup" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>

        {/* Footer */}
        {isLoggedIn && <AppFooter />}
      </div>
=======
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
>>>>>>> 882a2b0147df18b51d85ad399d5319d951a42726
    </Router>
  );
}

export default App;