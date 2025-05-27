import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './Store/AuthStore';
import { useThemeStore } from './Store/ThemeStore';
import AppNavbar from './Component/Navbar';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import { ContactUs } from './pages/ContactUs.jsx';
import Clients from './pages/Client.jsx';
import AppFooter from './Component/Footer.jsx';
import { SignupForm } from './Component/Signup';
import { LoginForm } from './Component/LoginForm';
import OurWorkSection from './Component/OurWork';

function App() {
  const { isLoggedIn } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark'); // fixed logic
  }, [theme]);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        {/* Show Navbar and Footer only if logged in */}
        {isLoggedIn && <AppNavbar />}

        {/* Main Content */}
        <div className="flex-grow dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/ourwork" element={<OurWorkSection />} />
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/signup" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>

        {isLoggedIn && <AppFooter />}
      </div>
    </Router>
  );
}

export default App;