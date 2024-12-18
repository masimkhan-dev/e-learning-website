import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaHome, FaBookOpen, FaUserAlt, FaEnvelopeOpenText } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          
          {/* First Section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Coding Journey</h1>
            <p className="text-gray-400">
              Your go-to platform for learning and mastering the art of coding. Join our community and embark on a journey of discovery and growth.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook" target="_blank"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter" target="_blank"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn" target="_blank"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram" target="_blank"><FaInstagram /></a>
            </div>
          </div>
          
          {/* Second Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#hero" className="hover:underline hover:text-white flex items-center space-x-2">
                  <FaHome />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline hover:text-white flex items-center space-x-2">
                  <FaBookOpen />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-white flex items-center space-x-2">
                  <FaUserAlt />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-white flex items-center space-x-2">
                  <FaEnvelopeOpenText />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Third Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="text-gray-400 flex items-center space-x-2">
              <HiMail />
              <span>Email: masimkhan.dev@gmail.com</span>
            </p>
            <p className="text-gray-400 flex items-center space-x-2">
              <HiPhone />
              <span>Phone: 03189113244</span>
            </p>
          </div>

        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="text-center mt-10">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} The MAK coding. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;