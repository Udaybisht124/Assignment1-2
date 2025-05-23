import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useThemeStore } from '../Store/ThemeStore';
import { useAuthStore } from '../Store/AuthStore';
import '../index.css';

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
  { to: "/clients", label: "Clients" },
  { to: "/ourwork", label: "Our Work" }
];

const AppNavbar = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Navbar fluid rounded className="navbar">
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
      <Navbar.Collapse className="navbar-collapse">
        {navItems.map(({ to, label }) => (
          <Link
            key={label}
            to={to}
            className="nav-link"
            onMouseEnter={() => console.log(`Hovering ${label}`)} // For debugging
          >
            <span className="nav-link-text">{label}</span>
            <span className="nav-link-underline" />
          </Link>
        ))}
        <div className="button-container">
          <button
            onClick={toggleTheme}
            className={`theme-toggle ${theme === 'dark' ? 'theme-toggle-dark' : ''}`}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
          {isLoggedIn && (
            <button
              onClick={logout}
              className={`logout-button ${theme === 'dark' ? 'logout-button-dark' : ''}`}
            >
              Logout
            </button>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;