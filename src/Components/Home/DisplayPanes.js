import React, { useState } from 'react';
import "../../Styles/HomeStyle/DisplayPanes.css"
import apartmentHero from "../../Images/apartmentRoom/apartmentRoom1.jpg"
import deluxeHero from "../../Images/deluxeRoom/deluxeRoom1.jpg"
import dormitoryHero from "../../Images/dormitoryRoom/dormitoryRoom1.jpg"
import doubleBedHero from "../../Images/doubleBedRoom/doubleBedRoom1.jpg"
import familyHero from "../../Images/familyRoom/familyRoom1.jpg"
import suiteHero from "../../Images/suiteRoom/suiteRoom1.jpg"
import { Link, useNavigate } from 'react-router-dom';



const DisplayPanes = () => {
  const navigate = useNavigate();

  const navigateToFrame = (roomType) => {
    navigate(`/roomDetails?roomType=${roomType}`);
  }

  return (
    <div className='bg-gray-900 py-10'>
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Available Rooms</h2>
  
        <div className="grid gap-6 lg:grid-cols-3" >
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>navigateToFrame("apartmentRoom")}>
            <img
              src={apartmentHero}
              className="w-full align-middle transition duration-300 ease-linear" />
            <Link to="">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">Apartment</h5>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </Link>
          </div>
  
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>navigateToFrame("deluxeRoom")}>
            <img
              src={deluxeHero}
              className="w-full align-middle transition duration-300 ease-linear" />
            <Link to="">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">
                      Deluxe Room
                    </h5>

                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </Link>
          </div>
  
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>navigateToFrame("dormitoryRoom")}>
            <img
              src={dormitoryHero}
              className="w-full align-middle transition duration-300 ease-linear" />
            <Link to="">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">Dormitory</h5>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </Link>
          </div>
  
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>navigateToFrame("doubleBedRoom")}>
            <img
              src={doubleBedHero}
              className="w-full align-middle transition duration-300 ease-linear" />
            <Link to="">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">Double Bed</h5>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </Link>
          </div>
  
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>navigateToFrame("familyRoom")}>
            <img
              src={familyHero}
              className="w-full align-middle transition duration-300 ease-linear" />
            <Link to="">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">
                      Family Sized
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </Link>
          </div>
  
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={()=>navigateToFrame("suiteRoom")}>
            <img
              src={suiteHero}
              className="w-full align-middle transition duration-300 ease-linear" />
            <Link to="">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">Suite</h5>
                  </div>
                </div>
              </div>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default DisplayPanes;
