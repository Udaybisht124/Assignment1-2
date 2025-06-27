import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthStore } from "./Store/authStore.jsx";

import { useThemeStore } from "./Store/themeStore";

import AppNavbar from "./Component/Navbar";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import Clients from "./pages/Client.jsx";

import AppFooter from "./Component/Footer.jsx";

import { SignupForm } from "./Component/Signup";
import { LoginForm } from "./Component/LoginForm";

import { OurWorkSection } from "./Component/OurWork.jsx";

import OauthSuccess from "./Component/OauthSuccess.jsx";

function App() {
  const { isLoggedIn } = useAuthStore();

  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <Router>
      {/* Main app container with flexbox layout */}
      <div className="App flex flex-col min-h-screen">
        {/* Show Navbar and Footer only if logged in */}
        {/* Conditionally render navbar only when user is authenticated */}
        {isLoggedIn && <AppNavbar />}

        {/* Main Content */}
        {/* Main content area with responsive styling and theme support */}
        <div className="flex-grow dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          {/* Routes container for all application routes */}
          <Routes>
            {/* Debug log to track authentication state */}
            {console.log(isLoggedIn)}
            {/* OauthSuccess route must be accessible even if not logged in */}
            {/* OAuth success route accessible regardless of login status */}
            <Route path="/oauth-success" element={<OauthSuccess />} />
            {/* Conditional routing based on authentication status */}
            {!isLoggedIn ? (
              // Routes available when user is NOT logged in
              <>
                {/* Login page route */}
                <Route path="/login" element={<LoginForm />} />
                {/* Signup page route */}
                <Route path="/signup" element={<SignupForm />} />
                {/* Catch-all route redirects unauthenticated users to login */}
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              // Routes available when user IS logged in
              <>
                {/* Home page route for authenticated users */}
                <Route path="/home" element={<Home />} />
                {/* Services page route */}
                <Route path="/services" element={<Services />} />
                {/* Contact page route */}
                <Route path="/contact" element={<ContactUs />} />
                {/* Clients page route */}
                <Route path="/clients" element={<Clients />} />
                {/* Our work showcase page route */}
                <Route path="/ourwork" element={<OurWorkSection />} />
                {/* Redirect authenticated users from login to home */}
                <Route path="/login" element={<Navigate to="/home" />} />
                {/* Redirect authenticated users from signup to home */}
                <Route path="/signup" element={<Navigate to="/home" />} />
              </>
            )}
          </Routes>
        </div>

        {/* Conditionally render footer only when user is authenticated */}
        {isLoggedIn && <AppFooter />}
      </div>
    </Router>
  );
}

// Export App component as default export
export default App;
