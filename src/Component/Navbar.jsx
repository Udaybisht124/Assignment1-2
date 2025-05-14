import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
    >
      <Navbar.Brand href="/">
        <img
          src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
          className="mr-3 h-6 sm:h-9"
          alt="Addval Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Addval Solutions
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          active={true}
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/services"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Services
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/contact"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Contact Us
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/clients"
          className="text-white hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Clients
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;