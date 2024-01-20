import React, { useEffect, useState } from "react";
import exp1 from "../../Images/experiences/1.jpg";
import exp2 from "../../Images/experiences/2.jpg";
import exp3 from "../../Images/experiences/3.jpg";
import exp4 from "../../Images/experiences/4.jpg";
import exp5 from "../../Images/experiences/5.jpg";
import exp6 from "../../Images/experiences/6.jpg";
import exp7 from "../../Images/experiences/7.jpg";
import exp8 from "../../Images/experiences/8.jpg";
import exp9 from "../../Images/experiences/9.jpg";
import exp10 from "../../Images/experiences/10.jpg";

import { TECarousel, TECarouselItem } from "tw-elements-react";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";
import ImgLazyLoader from "../../MasterComponents/ImgLazyLoader";
import { useScrollToTop } from "../../MasterComponents/useScrollToTop";

import wf1 from "../../Images/withinFifteen/1wf.jpg";
import wf2 from "../../Images/withinFifteen/2wf.jpg";
import wf3 from "../../Images/withinFifteen/3wf.jpg";
import wf4 from "../../Images/withinFifteen/4wf.jpg";
import wf5 from "../../Images/withinFifteen/5wf.jpg";
import wf6 from "../../Images/withinFifteen/6wf.jpg";
import wf7 from "../../Images/withinFifteen/7wf.jpg";
import wf8 from "../../Images/withinFifteen/8wf.jpg";
import wf9 from "../../Images/withinFifteen/9wf.jpg";
import wf10 from "../../Images/withinFifteen/10wf.jpg";
import wf11 from "../../Images/withinFifteen/11wf.jpg";
import wf12 from "../../Images/withinFifteen/12wf.jpg";
import wf13 from "../../Images/withinFifteen/13wf.jpg";
import wf14 from "../../Images/withinFifteen/14wf.jpg";
import wf15 from "../../Images/withinFifteen/15wf.jpg";
const Experiences = () => {
  const [fullScreenCalled, setFullScreenCalled]=useState(false);
  const ScrollToTopConditional = () => {
    useScrollToTop(); // Call the hook unconditionally
  
    return null; // or any other JSX you want, it doesn't render anything visible
  };

  useEffect(()=>{
    !fullScreenCalled && ScrollToTopConditional();
  },[fullScreenCalled])

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullScreenCalled(true);
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="sm:my-24 sm:mt-0">
      <ScrollingLogo />
      <section className="mb-32">
        <TECarousel
          showControls
          showIndicators
          ride="carousel"
          className="flex items-center justify-center text-center"
        >
          <div className="absolute  text-2xl sm:text-6xl lobster z-20 text-white">
            Experiences
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp1} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp2} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
             <ImgLazyLoader img={exp3} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp4} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={5}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
             <ImgLazyLoader img={exp5} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={6}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp6} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={7}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp7} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={8}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp8} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={9}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={exp9} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={10}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
             <ImgLazyLoader img={exp10} cName="block w-full"/>
            </TECarouselItem>
          </div>
        </TECarousel>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Luxurious Rooms
          </h1>

          <p className="geologica text-sm sm:text-base">
            Designed for luxury, our rooms are cozy and best looking and
            definitely with the best view from window.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Fast & Secure Wifi
          </h1>

          <p className="geologica text-sm sm:text-base">
            Every room is connected with free Wifi where guest can enjoy blazing
            fast connection and have the luxury of navigating through the world
            in their own hands.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Call Us 24/7
          </h1>

          <p className="geologica text-sm sm:text-base">
            Our super friendly staffs are always there at your service during
            your stay.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Children Playground
          </h1>

          <p className="geologica text-sm sm:text-base">
            This park serves as a popular weekend get-away for people living in
            and around Sindhuli. This provides many facilities and places for
            children to enjoy the activities like slides, children’s playground,
            Mini swimming pool, swings, and Trampoline.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Restaurant and Bar
          </h1>

          <p className="geologica text-sm sm:text-base">
            We deliver world class cuisines that reflect our cultures and
            traditions. A great blend of modern taste and old cultural cuisine
            is served in our restaurant.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Travel Services
          </h1>

          <p className="geologica text-sm sm:text-base">
            Pick up and Drop off service almost everywhere in Nepal on request.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nearest Attractions and Activities
          </h1>
          <p className="geologica text-sm sm:text-base">
            1. Siddha Baba temple hiking
          </p>
          <p className="geologica text-sm sm:text-base">2. Bharat Taal visit</p>
          <p className="geologica text-sm sm:text-base">3. Kala Ghar</p>
          <p className="geologica text-sm sm:text-base">4. Sindhuli Gadhi</p>
          <p className="geologica text-sm sm:text-base">
          &nbsp;&nbsp;Sindhuli gadhi holds a special place in Nepal’s history. This is the ancient fort where the Gurkha soldiers won over the soldiers from the British Empire in 1767. Hence, this fort today stands as a symbol of bravery of Nepali soldiers.<br/><br/>
          </p>

        </div>

        <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Places to visit within 15km from us!
          </h1>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(wf1)}>
              <ImgLazyLoader img={wf1} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2" onClick={() => openFullscreen(wf2)}>
              <ImgLazyLoader img={wf2} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-full p-1 md:p-2"  onClick={() => openFullscreen(wf3)}>
              <ImgLazyLoader img={wf3} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2"  onClick={() => openFullscreen(wf4)}>
              <ImgLazyLoader img={wf4} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(wf5)}>
              <ImgLazyLoader img={wf5} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(wf6)}>
              <ImgLazyLoader img={wf6} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(wf7)}>
              <ImgLazyLoader img={wf7} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2" onClick={() => openFullscreen(wf8)}>
              <ImgLazyLoader img={wf8} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-full p-1 md:p-2"  onClick={() => openFullscreen(wf9)}>
              <ImgLazyLoader img={wf9} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2"  onClick={() => openFullscreen(wf10)}>
              <ImgLazyLoader img={wf10} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(wf11)}>
              <ImgLazyLoader img={wf11} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(wf12)}>
              <ImgLazyLoader img={wf12} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {fullscreenImage && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center"
            onClick={closeFullscreen}
          >
            <ImgLazyLoader img={fullscreenImage} cName="max-h-full max-w-full"/>
          </div>
        )}
    </div>
  );
};

export default Experiences;
