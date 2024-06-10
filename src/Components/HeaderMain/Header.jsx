import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from "/images/5-Square Logo.png";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleProfileClick = () => {
    navigate('/login');
  };

  const handleMouseDown = (e) => {
    const dropdown = dropdownRef.current;
    const shiftX = e.clientX - dropdown.getBoundingClientRect().left;
    const shiftY = e.clientY - dropdown.getBoundingClientRect().top;

    const onMouseMove = (e) => {
      dropdown.style.left = `${e.clientX - shiftX}px`;
      dropdown.style.top = `${e.clientY - shiftY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <div className="w-[95%] lg:w-[85%] mx-auto">
      <header className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="E-commerce Logo" className="h-10" />
        </div>
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-4 pr-8 rounded-md focus:outline-none border border-gray-300"
            />
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser
              className="text-[#FF6600] cursor-pointer"
              size={24}
              onClick={handleProfileClick}
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50"
                onMouseDown={handleMouseDown}
                style={{ cursor: 'move' }}
              >
                <p>Welcome to Alibaba.com!</p>
                <button
                  onClick={handleProfileClick}
                  className="bg-[#FF6600] text-white py-2 px-4 rounded-md w-full my-2"
                >
                  Sign In
                </button>
                <p className="text-center my-2">Or, continue with:</p>
                <div className="flex justify-center space-x-4 my-2">
                  <FaGoogle className="cursor-pointer text-xl text-gray-700" />
                  <FaLinkedin className="cursor-pointer text-xl text-gray-700" />
                  <FaTwitter className="cursor-pointer text-xl text-gray-700" />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  By signing in via social media, I agree to the Alibaba.com Free Membership Agreement and Privacy Policy, and to receive emails about the platform’s products and services.
                </p>
                <ul className="text-sm mt-2">
                  <li className="py-1">My Alibaba</li>
                  <li className="py-1">Orders</li>
                  <li className="py-1">Messages</li>
                  <li className="py-1">RFQs</li>
                  <li className="py-1">Favorites</li>
                </ul>
              </div>
            )}
          </div>
          <button className="hidden lg:block bg-[#FF6600] text-white py-2 px-4 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
