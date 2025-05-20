import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../Store/ThemeStore'; // Import theme store
import { useAuthStore } from '../Store/AuthStore'; // Import auth store

const AppNavbar = () => {
  const { isLoggedIn, logout } = useAuthStore(); // Check if the user is logged in and provide a logout function
  const { theme, toggleTheme } = useThemeStore(); // Access theme state and toggle function

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="text-white h-20 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
   style={{backgroundColor:"#080d12"}}
   >
      <Navbar.Brand href="/">
        <img
          src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
          className="mr-3 h-6 sm:h-9 py-10 my-auto ml-4"
          alt="Addval Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold my-auto   dark:text-gray-200">
          Addval Solutions
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{ paddingTop: 18, paddingBottom: 18, marginLeft: 30 }}>
        {/* Navigation Links */}
        <Link
          to="/"
          className="relative group text-white dark:text-gray-300 hover:text-yellow-300 hover:bg-green-400 transition duration-300 ease-in-out px-3"
        >
          Home
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/services"
          className="relative group text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300 ease-in-out px-3"
        >
          Services
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/contact"
          className="relative group text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300 ease-in-out px-3"
        >
          Contact Us
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/clients"
          className="relative group text-white dark:text-gray-300 hover:text-yellow-300 transition duration-300 ease-in-out px-3"
        >
          Clients
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>

        {/* Theme Toggle Button - Only Visible When Logged In */}
        {isLoggedIn && (
          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 text-blue-400 rounded-md w-lg   shadow-md dark:bg-gray-800 dark:text-white my-auto"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <button
              onClick={logout}
              className="p-2 bg-red-500 text-white rounded-md w-lg shadow-md hover:bg-red-600 dark:bg-blue-600 my-auto"
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