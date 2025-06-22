// Import React library and useEffect hook for side effects
import React, { useEffect } from "react";
// Import React Router components for client-side routing
import {
  BrowserRouter as Router, // Provides routing context for the entire app
  Routes, // Container for all route definitions
  Route, // Individual route definition
  Navigate, // Component for programmatic navigation/redirects
} from "react-router-dom";
// Import custom authentication store hook for managing login state
import { useAuthStore } from "./Store/authStore.jsx";
// Import custom theme store hook for managing dark/light theme
import { useThemeStore } from "./Store/ThemeStore";
// Import navigation bar component
import AppNavbar from "./Component/Navbar";
// Import page components
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import Clients from "./pages/Client.jsx";
// Import footer component
import AppFooter from "./Component/Footer.jsx";
// Import authentication form components
import { SignupForm } from "./Component/Signup";
import { LoginForm } from "./Component/LoginForm";
// Import work showcase component
import OurWorkSection from "./Component/OurWork";
// Import OAuth success handler component
import OauthSuccess from "./Component/OauthSuccess.jsx";

// Main App component that serves as the root of the application
function App() {
  // Extract isLoggedIn state from authentication store
  const { isLoggedIn } = useAuthStore();
  // Extract current theme from theme store
  const { theme } = useThemeStore();

  // Effect hook to apply theme changes to the document
  useEffect(() => {
    // Toggle 'dark' class on document root based on theme state
    document.documentElement.classList.toggle("dark", theme === "dark"); // fixed logic
  }, [theme]); // Re-run effect when theme changes

  // Render the application structure
  return (
    // Router wrapper provides routing context to all child components
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
