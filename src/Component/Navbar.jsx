import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/themeStore";
import { useAuthStore } from "../Store/authStore.jsx";
import { AvatarComponent } from "./Avatar";

const AppNavbar = () => {
  // Extract isLoggedIn state and logout function from auth store
  const { isLoggedIn, logout } = useAuthStore();
  // Extract current theme and toggleTheme function from theme store
  const { theme, toggleTheme } = useThemeStore();

  // Render the navigation bar
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img
          src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
          className="h-9 ml-2 sm:py-auto"
          alt="Addval Logo"
        />
        <span className="self-center text-lg text-blue-500 sm:text-xl font-semibold whitespace-nowrap dark:text-gray-200 ml-2 open-sans">
          Addval Solutions
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 md:justify-end md:top-10 md:fixed gap-2">
        {isLoggedIn && (
          <Button
            color="light"
            className="bg-gray-200 text-blue-400 dark:bg-gray-800 dark:text-white open-sans"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        )}
        {isLoggedIn && (
          <Button
            color="failure"
            className="bg-red-500 text-white dark:bg-blue-600 hover:bg-red-600 open-sans"
            onClick={logout}
          >
            Logout
          </Button>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {isLoggedIn && (
          <>
            <NavbarLink as={Link} to="/home">
              Home
            </NavbarLink>
            <NavbarLink as={Link} to="/services">
              Services
            </NavbarLink>
            <NavbarLink as={Link} to="/contact">
              Contact Us
            </NavbarLink>
            <NavbarLink as={Link} to="/clients">
              Clients
            </NavbarLink>
            <NavbarLink as={Link} to="/ourwork">
              Our Work
            </NavbarLink>
          </>
        )}
      </NavbarCollapse>
      {/* {isLoggedIn >} */}
    </Navbar>
  );
};

// Export AppNavbar component as default export
export default AppNavbar;
