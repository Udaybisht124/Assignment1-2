import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../Store/ThemeStore';
import { useAuthStore } from '../Store/AuthStore';

const AppNavbar = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Navbar
      fluid
      rounded
      className="text-white h-20 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
      style={{ backgroundColor: "#0d1013" }}
    >
      <Navbar.Brand href="/">
        <img
          src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
          className="mr-3 h-6 sm:h-9 py-10 my-auto ml-4"
          alt="Addval Logo"
        />
        <span className="self-center whitespace-nowrap my-auto text-xl font-semibold dark:text-gray-200">
          Addval Solutions
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          to="/"
          className="nav-underline relative group text-white dark:text-gray-300 transition duration-300 ease-in-out px-3"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="nav-underline relative group text-white dark:text-gray-300 transition duration-300 ease-in-out px-3"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="nav-underline relative group text-white dark:text-gray-300 transition duration-300 ease-in-out px-3"
        >
          Contact Us
        </Link>
        <Link
          to="/clients"
          className="nav-underline relative group text-white dark:text-gray-300 transition duration-300 ease-in-out px-3"
        >
          Clients
        </Link>
        <Link
          to="/ourwork"
          className="nav-underline relative group text-white dark:text-gray-300 transition duration-300 ease-in-out px-3"
        >
          Our Work
        </Link>
        {isLoggedIn && (
          <div className="flex flex-col sm:flex-row gap-2 sm:ml-4 mt-2 sm:mt-0">
            <button
              onClick={toggleTheme}
              className="p-2 w-full sm:w-auto bg-gray-200 text-blue-400 rounded-md shadow-md dark:bg-gray-800 dark:text-white"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <button
              onClick={logout}
              className="p-2 w-full sm:w-auto bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 dark:bg-blue-600"
            >
              Logout
            </button>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;