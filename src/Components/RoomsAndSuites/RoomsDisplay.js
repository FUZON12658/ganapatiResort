import React, { useEffect, useRef, useState } from 'react'
import apartmentHero from "../../Images/apartmentRoom/apartmentRoom1.jpg"
import deluxeHero from "../../Images/deluxeRoom/deluxeRoom1.jpg"
import dormitoryHero from "../../Images/dormitoryRoom/dormitoryRoom1.jpg"
import doubleBedHero from "../../Images/doubleBedRoom/doubleBedRoom1.jpg"
import familyHero from "../../Images/familyRoom/familyRoom1.jpg"
import singleHero from "../../Images/singleRoom/singleRoom1.jpg"
import suiteHero from "../../Images/suiteRoom/suiteRoom1.jpg"
import { Link, useNavigate } from 'react-router-dom'
import ScrollingLogo from '../../MasterComponents/ScrollingLogo'
import { useScrollToTop } from '../../MasterComponents/useScrollToTop'
import ImgLazyLoader from '../../MasterComponents/ImgLazyLoader'


const RoomsDisplay = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const [inView, setInView] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useScrollToTop();

  const navigateToFrame = (roomType) => {
    navigate(`/roomDetails?roomType=${roomType}`);
  }
  return (
    <>
    <ScrollingLogo/>
    <div className="container my-24 sm:mt-56 mx-auto md:px-6">
      
      <section className="mb-32 text-center text-white">
        <h2 className="mb-12 pb-4 text-center text-3xl text-black lobster">
          Rooms & Suites
        </h2>
    
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12" >
          <div className="mb-6 lg:mb-0" onClick={()=>navigateToFrame("solaBhanjyang")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={apartmentHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg lobster">Sola Bhanjyang</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 2 pax<br /> Room Type: Apartment
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0"  onClick={()=>navigateToFrame("dhungreBhanjyang")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={suiteHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg lobster">Dhungre Bhanjyang</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 2 pax<br /> Room Type: Suite
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>
    
          <div className="mb-0" onClick={()=>navigateToFrame("khaniyaKharka")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={dormitoryHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg lobster">Khaniya Kharka</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 18-20 pax<br /> Room Type: Dormitory
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 text-center text-white" >
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0" onClick={()=>navigateToFrame("dhungrebash")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={deluxeHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
              <h5 className="mb-3 text-lg lobster">Dhungrebash</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 2 pax<br /> Room Type: Deluxe Room
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>




          <div className="mb-6 lg:mb-0" onClick={()=>navigateToFrame("mallaGaun")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={doubleBedHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg lobster">Malla Gaun</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 4 pax<br /> Room Type: Double Bed
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>
    
          <div className="mb-6 lg:mb-0" onClick={()=>navigateToFrame("ratamata")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={familyHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg lobster">Ratamata</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 3 pax<br /> Room Type: Family
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 text-center text-white">
      <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
      <div className="mb-0" onClick={()=>navigateToFrame("pipalBhanjyang")}>
            <div
              className="relative block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
              <div className="flex">
                <div
                  className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init data-te-ripple-color="light">
                  <ImgLazyLoader img={singleHero} className="w-full"/>
                  <Link to="">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h5 className="mb-3 text-lg lobster">Pipal Bhanjyang</h5>
                <p className="mb-4 pb-2 geologica">
                  Capacity: 2 pax<br /> Room Type: Single Bed
                </p>
                <Link to="" data-te-ripple-init data-te-ripple-color="light"
                  className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">Read
                  more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default RoomsDisplay
