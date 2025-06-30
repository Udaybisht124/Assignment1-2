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
  const { isLoggedIn, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

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
      <NavbarCollapse className="transition-all duration-300 ease-in-out">
        {isLoggedIn && (
          <>
            <NavbarLink
              as={Link}
              to="/home"
              className="text-blue-500 hover:text-blue-400 nav-link relative  dark:hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Home
            </NavbarLink>
            <NavbarLink
              as={Link}
              to="/services"
              className="nav-link relative text-base hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Services
            </NavbarLink>
            <NavbarLink
              as={Link}
              to="/contact"
              className="nav-link relative text-base hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Contact Us
            </NavbarLink>
            <NavbarLink
              as={Link}
              to="/clients"
              className="nav-link relative text-base hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Clients
            </NavbarLink>
            <NavbarLink
              as={Link}
              to="/ourwork"
              className="nav-link relative text-base hover:text-blue-600 transition-all duration-300 ease-in-out"
            >
              Our Work
            </NavbarLink>
          </>
        )}
      </NavbarCollapse>
      <style>
        {`
          .nav-link {
            display: inline-block;
            padding-bottom: 2px;
            position: relative;
            color:#1c64f2;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #3b82f6;
            transition: width 0.3s ease-in-out;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          .nav-link:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </Navbar>
  );
};

export default AppNavbar;
