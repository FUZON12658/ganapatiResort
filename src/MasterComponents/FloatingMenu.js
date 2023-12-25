
// FloatingMenu.js

import React, { useState, useEffect } from 'react';

const FloatingMenu = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarTop, setNavbarTop] = useState(0);
  const [navbarBottom, setNavbarBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update navbarTop when the component is mounted or window is resized
      if (!navbarTop) {
        const navbarElement = document.getElementById('.floatingNavBar');
        if (navbarElement) {
          setNavbarTop(navbarElement.getBoundingClientRect().top);
          setNavbarBottom(navbarElement.getBoundingClientRect().bottom);
        }
      }
    };

    // Update scroll position on scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const topPosition = (scrollY > navbarTop || scrollY < navbarBottom )? 'fixed top-0 transition-all duration-3000' : 'relative';


  return (
    <div
      className={`${topPosition} sm:fixed sm:top-1/2 sm:right-0 sm:transform sm:-translate-y-1/2 bg-gray-800 text-white sm:p-4 rounded-l-md shadow-md z-50 select-none border-orange-500 border-2 md:rounded-r-md flex sm:flex-col w-full sm:w-auto justify-center text-sm sm:text-base `}
      id="floatingNavBar"
    >
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3">
        <div className="hidden sm:flex">
          <a href="">Menu</a>
        </div>
        <div className="sm:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3">
        <a href="">About Us</a>
      </div>
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3">
        <a href="">Call Now</a>
      </div>
      {/* Add more menu items as needed */}
    </div>
  );
};

export default FloatingMenu;

