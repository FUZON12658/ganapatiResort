
// FloatingMenu.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './HamburgerMenu';
import ScrollingLogo from "./ScrollingLogo"

const FloatingMenu = () => {
  const [scrollY, setScrollY] = useState(0);
  const [navbarTop, setNavbarTop] = useState(0);
  const [navbarBottom, setNavbarBottom] = useState(0);
  const [renderHamburgerMenu, setRenderHamburgerMenu] = useState(false);

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


  const renderHamburgerMenuTrue = () => {
    setRenderHamburgerMenu(!renderHamburgerMenu);
  }
  
  const topPosition = (scrollY > navbarTop || scrollY < navbarBottom )? 'fixed top-0 transition-all duration-3000' : 'relative';

  return (
    <div>
    <div className="hamburgerMenu">
      <div className={`fixed h-full w-full bg-white z-50 ${(renderHamburgerMenu) ? 'left-0' : '-left-full'} transition-all duration-500`}>
      <ScrollingLogo/>
      <div className="flex items-center justify-center w-full h-full sm:gap-48  2xl:text-lg ">
        <ul>
          <li><Link className="hover:text-orange-500"  to="/" onClick={renderHamburgerMenuTrue}>Home</Link></li>
          <li><Link className="hover:text-orange-500"  to="">About</Link></li>
          <li><Link className="hover:text-orange-500"  to="">Room & Suites</Link></li>
          <li><Link className="hover:text-orange-500"  to="">Meetings & Events</Link></li>
        </ul>
        <ul>
          <li><Link className="hover:text-orange-500"  to="">Wedding</Link></li>
          <li><Link className="hover:text-orange-500"  to="">Lounge & Bar</Link></li>
          <li><Link className="hover:text-orange-500"  to="">Experiences</Link></li>
          <li><Link className="hover:text-orange-500"  to="">Contact</Link></li>
        </ul>
      </div>
      </div>
    </div>
    <div
      className={`${topPosition} sm:fixed sm:top-1/2 sm:right-0 sm:transform sm:-translate-y-1/2 bg-gray-800 text-white sm:p-4 rounded-l-md shadow-md z-50 select-none border-orange-500 border-2 md:rounded-r-md flex sm:flex-col w-full sm:w-auto justify-center text-sm sm:text-base `}
      id="floatingNavBar"
    >
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3">
        <div className="hidden sm:flex" onClick={renderHamburgerMenuTrue}>
          <Link >Menu</Link>
        </div>
        <div className="sm:hidden">
          <i className="fa-solid fa-bars" onClick={renderHamburgerMenuTrue}></i>
        </div>
      </div>
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3">
        <Link to="">About Us</Link>
      </div>
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3">
        <Link to="">Call Now</Link>
      </div>
      {/* Add more menu items as needed */}
    </div>
    </div>
  );
};

export default FloatingMenu;

