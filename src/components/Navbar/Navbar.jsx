import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaBook, FaBars, FaTimes, FaCode, FaEnvelope, FaUsers } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const mobileMenuRef = useRef(null);

  const NavbarMenu = [
    { id: 1, label: 'Home', href: '/', icon: <FaHome /> },
    { id: 2, label: 'Services', href: '/services', icon: <FaBook /> },
    { id: 3, label: 'About Us', href: '/about', icon: <FaUserAlt /> },
    { id: 4, label: 'Contact Us', href: '/contact', icon: <FaEnvelope /> },
    { id: 5, label: 'Our Team', href: '/ourteam', icon: <FaUsers /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <FaCode className="text-3xl text-blue-400" />
              <h1 className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                The Coding Hub
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {NavbarMenu.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
                  activeItem === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setActiveItem(item.href)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NavbarMenu.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    activeItem === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveItem(item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-4">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;