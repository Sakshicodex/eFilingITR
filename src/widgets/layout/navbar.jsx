import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import phoneIcon from '/img/call.png';
import emailIcon from '/img/email.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-lg">EfillingITR</span>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:space-x-6`}
          >
            <a
              href="tel:+918586870894"
              className="flex items-center text-gray-700 mb-2 md:mb-0"
            >
              <img src={phoneIcon} alt="Phone Icon" className="h-5 w-5 mr-2" />
              Call Us: +91-8708188491
            </a>
            <a
              href="mailto:Info@efilingitr.com"
              className="flex items-center text-gray-700"
            >
              <img
                src={emailIcon}
                alt="Email Icon"
                className="h-5 w-5 mr-2"
              />
              Mail Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
