import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let token = props.token;

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            GoLearnHub
          </span>
        </Link>
        {/* Show the menu on desktop screens */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/" className="text-gray-900 hover:text-blue-700">
            Home
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-blue-700">
            About
          </Link>
          <Link to="/services" className="text-gray-900 hover:text-blue-700">
            Services
          </Link>
          <Link to="/contact" className="text-gray-900 hover:text-blue-700">
            Contact
          </Link>
        </div>
        {/* Toggle the mobile menu on mobile screens */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      {/* Show the mobile menu on mobile screens */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
          <ul className="py-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover-bg-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-900 hover-bg-gray-100 dark:text-white dark:hover-bg-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
