import logo from "../Images/resortLogo.png";
import React, { useEffect, useState } from 'react';

const LogoComponent = () => {

  return (
    <div className={`w-full relative z-30   flex justify-center`}>
      <div className={`flex flex-col items-center justify-center sm:flex sm:absolute`}>
        <img
          src={logo}
          alt="Logo"
          className={`h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 2xl:h-48 mx-auto rounded-full`}
        />
      </div>
    </div>
  );
};

export default LogoComponent;




