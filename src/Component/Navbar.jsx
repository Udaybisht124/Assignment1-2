import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar
    
      fluid={true}
      rounded={true}
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-white mr-42 h-20"
    >
      <Navbar.Brand href="/">
        <img
          src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
          className="mr-3 h-6 sm:h-9 py-10 mt-3 ml-4"
          alt="Addval Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold mt-3">
          Addval Solutions
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse style={{ paddingTop: 16, paddingBottom: 10, marginLeft: 30 }}>
        {/* Navigation Links */}
        <Link
          to="/"
          className="relative group text-white hover:text-yellow-300 hover:bg-green-400 transition duration-300 ease-in-out px-3"
        >
          Home
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/services"
          className="relative group text-white hover:text-yellow-300 transition duration-300 ease-in-out px-3"
        >
          Services
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/contact"
          className="relative group text-white hover:text-yellow-300 transition duration-300 ease-in-out px-3"
        >
          Contact Us
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
        <Link
          to="/clients"
          className="relative group text-white hover:text-yellow-300 transition duration-300 ease-in-out px-3"
        >
          Clients
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;