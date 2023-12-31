
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
    <div className="hamburgerMenu z-50 top-0">
      <div className={`fixed h-full w-full bg-white z-50 ${(renderHamburgerMenu) ? 'left-0' : '-left-full'} transition-all duration-500`}>
      <div className="toplevel flex">
        <ScrollingLogo/>
        <i className="fa-solid fa-circle-xmark absolute m-5 sm:m-10 ml-[80vw] sm:ml-[95vw] z-50 scale-100 sm:scale-150 cursor-pointer" onClick={renderHamburgerMenuTrue}></i>
      </div>
      <div className="flex flex-col mt-2 sm:flex-row items-center justify-center w-full h-full sm:gap-48 2xl:text-lg ">
        <ul className='hidden sm:flow-root '>
          <li><Link className="hover:text-orange-500"  to="/" onClick={renderHamburgerMenuTrue}>Home</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>About</Link></li>
          <li><Link className="hover:text-orange-500"  to="/rooms" onClick={renderHamburgerMenuTrue}>Room & Suites</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Meetings & Events</Link></li>
        </ul>
        <ul className='hidden sm:flow-root'>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Wedding</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Lounge & Bar</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Experiences</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Contact</Link></li>
        </ul>
        <ul className='sm:hidden'>
          <li><Link className="hover:text-orange-500"  to="/" onClick={renderHamburgerMenuTrue}>Home</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>About</Link></li>
          <li><Link className="hover:text-orange-500"  to="/rooms" onClick={renderHamburgerMenuTrue}>Room & Suites</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Meetings & Events</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Wedding</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Lounge & Bar</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Experiences</Link></li>
          <li><Link className="hover:text-orange-500"  to="" onClick={renderHamburgerMenuTrue}>Contact</Link></li>
        </ul>
      </div>
      </div>
    </div>
    <div
      className={`${topPosition} sm:fixed sm:top-1/2 sm:right-0 sm:transform sm:-translate-y-1/2 bg-gray-800 text-white sm:p-4 rounded-l-md shadow-md z-40 select-none border-orange-500 border-2 md:rounded-r-md flex sm:flex-col w-full sm:w-auto justify-center text-sm sm:text-base `}
      id="floatingNavBar"
    >
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3"  onClick={renderHamburgerMenuTrue}>
        <div className="hidden sm:flex">
          <Link >Menu</Link>
        </div>
        <div className="sm:hidden">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3"  onClick={renderHamburgerMenuTrue}>
        <Link to="">About Us</Link>
      </div>
      <div className="sm:mb-4 hover:bg-orange-500 active:bg-orange-400 cursor-pointer rounded-lg px-3 py-3"  onClick={renderHamburgerMenuTrue}>
        <Link to="">Call Now</Link>
      </div>
      {/* Add more menu items as needed */}
    </div>
    </div>
  );
};

export default FloatingMenu;

