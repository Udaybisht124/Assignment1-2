import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/ThemeStore";
import { useAuthStore } from "../Store/AuthStore";

const AppNavbar = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Navbar
      fluid
      rounded
      className="bg-[#0d1013] text-blue-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 h-20"
    >
      <div className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-between pt-2">
        {/* LOGO */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="flex items-center space-x-2 justify-between w-full sm:w-auto"
        >
          <div className="flex items-center">
            <img
              src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
              className="h-9 ml-2 sm:py-auto"
              alt="Addval Logo"
            />
            <span className="self-center text-lg text-blue-500 sm:text-xl font-semibold whitespace-nowrap dark:text-gray-200 ml-2">
              Addval Solutions
            </span>
          </div>
          {/* Hamburger toggle on mobile, right of logo */}
          <div className="sm:hidden flex items-center">
            <Navbar.Toggle />
          </div>
        </Navbar.Brand>

        {/* BUTTONS + Hamburger (on desktop) */}
        <div className="flex items-center gap-2 justify-end mt-2 sm:mt-0 sm:order-2">
          {isLoggedIn && (
            <>
              <Button
                color="light"
                className="bg-gray-200  text-blue-400 dark:bg-gray-800 dark:text-white"
                onClick={toggleTheme}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
              <Button
                color="failure"
                className="bg-red-500 text-white dark:bg-blue-600 hover:bg-red-600"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          )}
          {/* Hamburger only on desktop (hidden on mobile, already included with logo) */}
          <div className="hidden sm:block">
            <Navbar.Toggle />
          </div>
        </div>

        {/* COLLAPSE LINKS */}
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" active>
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
      </div>
    </Navbar>
  );
};

export default AppNavbar;
