import { Link } from "react-router-dom";
import logo from "../Images/resortLogo.png";
import React from 'react'
import ImgLazyLoader from "./ImgLazyLoader";

const ScrollingLogo = () => {
  return (
    <div className={`w-full relative z-30   flex justify-center`}>
      <div className={`flex flex-col items-center justify-center sm:flex sm:absolute`}>
        <Link to="/">
        <ImgLazyLoader img={logo} cName="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 2xl:h-48 mx-auto rounded-full"/>
        </Link>
      </div>
    </div>
  );
};

export default ScrollingLogo;




