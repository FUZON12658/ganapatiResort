import React from "react";
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

const Experiences = () => {
  useScrollToTop();
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
            <div
              class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
            <iframe
                class="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg mb-10"
                src="https://www.youtube.com/embed/5ecdh-820Rw?si=L73TkowYUeshGQ1b"
                allowfullscreen
              ></iframe>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
