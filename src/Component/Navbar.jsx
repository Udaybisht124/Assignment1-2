import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/ThemeStore";
import { useAuthStore } from "../Store/authStore.jsx";
import { AvatarComponent } from "./Avatar";

// Main navigation bar component
const AppNavbar = () => {
  const { isLoggedIn, logout } = useAuthStore();
 
  const { theme, toggleTheme } = useThemeStore();

  return (
    // Flowbite Navbar component with fluid layout and custom styling
    <Navbar
      fluid 
      rounded
      className="bg-[#0d1013] text-blue-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 h-20" // Custom background and height
    >
      {/* Main container with responsive flex layout */}
      <div className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-between pt-2  ">
        
        <Navbar.Brand
          as={Link} 
          to="/"
          className="flex items-center space-x-2 justify-between w-full sm:w-auto"        >
       
          {/* Logo and text container */}
       
          <div className="flex items-center">
       
            {/* Company logo image */}
            <img
src="https://addvalsolutions.com/assets/images/addval-logo80x61.png" 
              className="h-9 ml-2 sm:py-auto"
              alt="Addval Logo"            />
            {/* Company name text */}
            <span className="self-center text-lg text-blue-500 sm:text-xl font-semibold whitespace-nowrap dark:text-gray-200 ml-2 open-sans">
              Addval Solutions
            </span>
          </div>
       
          <div className="sm:hidden flex items-center">
            <Navbar.Toggle /> {/* Flowbite navbar toggle button */}
          </div>
        </Navbar.Brand>

        <div className="flex items-center gap-2 justify-end mt-2 sm:mt-0 sm:order-2">
          {/* Show buttons only when user is logged in */}
          {isLoggedIn && (
            <>
              {/* Theme toggle button */}
              <Button
                color="light" 
                className="bg-gray-200  text-blue-400 dark:bg-gray-800 dark:text-white" 
                onClick={toggleTheme} 
              >
                              {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              {/* Logout button */}
              <Button
                color="failure" 
                className="bg-red-500 text-white dark:bg-blue-600 hover:bg-red-600 open-sans" 
                onClick={logout} 
              >
                Logout
              </Button>
            </>
          )}
          <div className="hidden sm:block">
            <Navbar.Toggle /> {/* Hidden on mobile, shown on desktop */}
          </div>
        </div>

        {/* COLLAPSE LINKS */}
        {/* Collapsible navigation menu */}
        <Navbar.Collapse className="open-sans font-bold">
     
          <Navbar.Link as={Link} to="/home" active>
            Home
          </Navbar.Link>
     
          <Navbar.Link as={Link} to="/services">
            Services
          </Navbar.Link>
     
          <Navbar.Link as={Link} to="/contact">
            Contact Us
          </Navbar.Link>
     
          <Navbar.Link as={Link} to="/clients">
            Clients
          </Navbar.Link>
     
          <Navbar.Link as={Link} to="/ourwork">
            Our Work
          </Navbar.Link>
        </Navbar.Collapse>
     
        <AvatarComponent />
      </div>
    </Navbar>
  );
};

// Export AppNavbar component as default export
export default AppNavbar;
