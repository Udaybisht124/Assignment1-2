/**
 * Main navigation bar component
 *
 * @returns {React.ReactElement} The JSX element for the AppNavbar component
 */
import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/ThemeStore";
import { useAuthStore } from "../Store/authStore.jsx";
import { AvatarComponent } from "./Avatar";
const AppNavbar = () => {
  // Extract isLoggedIn state and logout function from auth store
  const { isLoggedIn, logout } = useAuthStore();
  // Extract current theme and toggleTheme function from theme store
  const { theme, toggleTheme } = useThemeStore();

  // Render the navigation bar
  return (
    // Flowbite Navbar component with fluid layout and custom styling
    <Navbar
      fluid // Makes navbar responsive and fluid width
      rounded // Adds rounded corners
      className="bg-[#0d1013] text-blue-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 h-20" // Custom background and height
    >
      {/* Main container with responsive flex layout */}
      <div className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-between pt-2  ">
        {/* LOGO */}
        {/* Brand section with logo and company name */}
        <Navbar.Brand
          as={Link} // Use React Router Link for navigation
          to="/" // Navigate to home page
          className="flex items-center space-x-2 justify-between w-full sm:w-auto" // Responsive layout classes
        >
          {/* Logo and text container */}
          <div className="flex items-center">
            {/* Company logo image */}
            <img
              src="https://addvalsolutions.com/assets/images/addval-logo80x61.png" // Logo URL
              className="h-9 ml-2 sm:py-auto" // Height and margin styling
              alt="Addval Logo" // Alt text for accessibility
            />
            {/* Company name text */}
            <span className="self-center text-lg text-blue-500 sm:text-xl font-semibold whitespace-nowrap dark:text-gray-200 ml-2 open-sans">
              Addval Solutions
            </span>
          </div>
          {/* Hamburger toggle on mobile, right of logo */}
          {/* Mobile hamburger menu toggle */}
          <div className="sm:hidden flex items-center">
            <Navbar.Toggle /> {/* Flowbite navbar toggle button */}
          </div>
        </Navbar.Brand>

        {/* BUTTONS + Hamburger (on desktop) */}
        {/* Action buttons container */}
        <div className="flex items-center gap-2 justify-end mt-2 sm:mt-0 sm:order-2">
          {/* Show buttons only when user is logged in */}
          {isLoggedIn && (
            <>
              {/* Theme toggle button */}
              <Button
                color="light" // Flowbite button color variant
                className="bg-gray-200  text-blue-400 dark:bg-gray-800 dark:text-white open-sans" // Custom styling
                onClick={toggleTheme} // Toggle theme on click
              >
                {/* Dynamic button text based on current theme */}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              {/* Logout button */}
              <Button
                color="failure" // Red color variant for logout
                className="bg-red-500 text-white dark:bg-blue-600 hover:bg-red-600 open-sans" // Custom styling with hover effect
                onClick={logout} // Call logout function on click
              >
                Logout
              </Button>
            </>
          )}
          {/* Hamburger only on desktop (hidden on mobile, already included with logo) */}
          {/* Desktop hamburger menu toggle */}
          <div className="hidden sm:block">
            <Navbar.Toggle /> {/* Hidden on mobile, shown on desktop */}
          </div>
        </div>

        {/* COLLAPSE LINKS */}
        {/* Collapsible navigation menu */}
        <Navbar.Collapse className="open-sans font-bold">
          {/* Home navigation link */}
          <Navbar.Link as={Link} to="/home" active>
            Home
          </Navbar.Link>
          {/* Services navigation link */}
          <Navbar.Link as={Link} to="/services">
            Services
          </Navbar.Link>
          {/* Contact Us navigation link */}
          <Navbar.Link as={Link} to="/contact">
            Contact Us
          </Navbar.Link>
          {/* Clients navigation link */}
          <Navbar.Link as={Link} to="/clients">
            Clients
          </Navbar.Link>
          {/* Our Work navigation link */}
          <Navbar.Link as={Link} to="/ourwork">
            Our Work
          </Navbar.Link>
        </Navbar.Collapse>
        {/* User avatar component */}
        <AvatarComponent />
      </div>
    </Navbar>
  );
};
// Export AppNavbar component as default export
export default AppNavbar;


