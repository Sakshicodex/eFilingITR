import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/img/logo.jpg'; 
import phoneIcon from '/img/call.png';
import whatsappIcon from '/img/whatsapp.png'; // Import the WhatsApp icon

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" onClick={() => window.location.reload()}>
              <img src={logo} alt="Logo" className="h-20 w-20" /> {/* Adjusted height and width */}
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="tel:+918586870894"
              className="flex items-center text-gray-700 mb-2 md:mb-0"
            >
              <img src={phoneIcon} alt="Phone Icon" className="h-5 w-5 mr-2" />
              Call Us: +91-8708188491
            </a>
            <a
              href="https://wa.me/918708188491" // WhatsApp link
              className="flex items-center text-gray-700"
            >
              <img
                src={whatsappIcon} // Use the WhatsApp icon
                alt="WhatsApp Icon"
                className="h-5 w-5 mr-2"
              />
              WhatsApp to Chat
            </a>
          </div>
          <div className="md:hidden flex flex-col items-start space-y-2">
            <a
              href="https://wa.me/918708188491" // WhatsApp link
              className="flex items-center text-gray-700"
            >
              <img
                src={whatsappIcon} // Use the WhatsApp icon
                alt="WhatsApp Icon"
                className="h-5 w-5 mr-2"
              />
              WhatsApp to Chat
            </a>
            <a
              href="tel:+918586870894"
              className="flex items-center text-gray-700"
            >
              <img src={phoneIcon} alt="Phone Icon" className="h-5 w-5 mr-2" />
              Call Us: +91-8708188491
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
