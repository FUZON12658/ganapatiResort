import React, { useEffect, useState } from "react";
import lb1 from "../../Images/loungeBar/1.jpg";
import lb2 from "../../Images/loungeBar/2.jpg";
import lb3 from "../../Images/loungeBar/3.jpg";
import lb4 from "../../Images/loungeBar/4.jpg";
import lb5 from "../../Images/loungeBar/5.jpg";
import lb6 from "../../Images/loungeBar/6.jpg";
import lb7 from "../../Images/loungeBar/7.jpg";
import lb8 from "../../Images/loungeBar/8.jpg";
import lb9 from "../../Images/loungeBar/9.jpg";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";
import { useScrollToTop } from "../../MasterComponents/useScrollToTop";

import fm1 from "../../Images/foodMenu/1.jpg";
import fm2 from "../../Images/foodMenu/2.jpg";
import fm3 from "../../Images/foodMenu/3.jpg";
import fm4 from "../../Images/foodMenu/4.jpg";
import fm5 from "../../Images/foodMenu/5.jpg";
import fm6 from "../../Images/foodMenu/6.jpg";
import fm7 from "../../Images/foodMenu/7.jpg";
import fm8 from "../../Images/foodMenu/8.jpg";
import fm9 from "../../Images/foodMenu/9.jpg";
import fm10 from "../../Images/foodMenu/10.jpg";
import fm11 from "../../Images/foodMenu/11.jpg";
import fm12 from "../../Images/foodMenu/12.jpg";
import fm13 from "../../Images/foodMenu/13.jpg";
import fm14 from "../../Images/foodMenu/14.jpg";
import fi1 from "../../Images/foodMenu/1fi.jpg";
import fi2 from "../../Images/foodMenu/2fi.jpg";
import fi3 from "../../Images/foodMenu/3fi.jpg";
import fi4 from "../../Images/foodMenu/4fi.jpg";
import fi5 from "../../Images/foodMenu/5fi.jpg";
import ImgLazyLoader from "../../MasterComponents/ImgLazyLoader";


const LoungeBar = () => {
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
        <div
          className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
          style={{ paddingTop: "42.857143%" }}
        >
          <iframe
            className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eiMbFjnb67M?si=kYuLb_c6jYjXdS7N"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Lounge, Dining Area and Bar
          </h1>

          <p className="geologica text-sm sm:text-base">
            Situated in the serene, secure, and picturesque downtown Sindhuli
            Bazaar, Ganapati's restaurant promises an unmatched dining
            experience with delectable, impeccably prepared dishes and swift
            service. When you choose to dine with us, satisfaction is
            guaranteed. Indulge in a delightful array of flavors in our spacious
            restaurant, complete with a bar offering a diverse menu featuring
            local, Indian, Chinese, Continental, Mexican, and Thai cuisines.
          </p>
        </div>
      </section>

      <section className="mb-32">
        <TECarousel
          showControls={false}
          showIndicators
          ride="carousel"
          className="flex items-center justify-center text-center"
        >
          <div className="absolute  text-2xl sm:text-6xl lobster z-20 text-white">
           Lounge & Bar
          </div>
          <div className="absolute  text-xs sm:text-xl geologica z-20 text-white font-bold translate-y-9 sm:translate-y-20">
            A space as close as your own!
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb1} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb2} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb3} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb4} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={5}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb5} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={6}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb6} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={7}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <ImgLazyLoader img={lb7} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={8}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb8} cName="block w-full"/>
            </TECarouselItem>
            <TECarouselItem
              itemID={9}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
               <ImgLazyLoader img={lb9} cName="block w-full"/>
            </TECarouselItem>
          </div>
        </TECarousel>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            A space as close are your own!
          </h1>

          <p className="geologica text-sm sm:text-base">
            Nestled in the heart of downtown Sindhuli Bazaar, Ganapati's
            restaurant stands as a haven of tranquility and natural beauty. Our
            culinary offerings transcend mere meals, presenting a harmonious
            fusion of flavors crafted to delight the discerning palate. Immerse
            yourself in an atmosphere of cleanliness and enjoy swift, impeccable
            service. The expansive restaurant and well-stocked bar invite you to
            savor a diverse array of dishes, ranging from local specialties to
            Indian, Chinese, Continental, Mexican, and Thai delights. Ganapati's
            guarantees not just a meal but an unforgettable culinary journey.
            Join us in this rich tapestry of flavors, where satisfaction is a
            certainty.
          </p>
        </div>
      </section>
      <>
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Food Items
          </h1>
        </div>

        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(fi1)}>
              <ImgLazyLoader img={fi1} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2" onClick={() => openFullscreen(fi2)}>
              <ImgLazyLoader img={fi2} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-full p-1 md:p-2"  onClick={() => openFullscreen(fi3)}>
              <ImgLazyLoader img={fi3} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2"  onClick={() => openFullscreen(fi4)}>
              <ImgLazyLoader img={fi4} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(fi5)}>
              <ImgLazyLoader img={fi5} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
              <div className="w-1/2 p-1 md:p-2"  onClick={() => openFullscreen(fi1)}>
              <ImgLazyLoader img={fi1} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            </div>
          </div>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Food Items
          </h1>
          <p className="geologica text-sm sm:text-base">
            We deliver world class cuisines that reflect our cultures and
            traditions. A great blend of modern taste and old cultural cuisine
            is served in our restaurant.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Food Menu
          </h1>
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-32">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {/* Map through your images array */}
            {[
              fm1,
              fm2,
              fm3,
              fm4,
              fm5,
              fm6,
              fm7,
              fm8,
              fm9,
              fm10,
              fm11,
              fm12,
              fm13,
              fm14,
            ].map((image, index) => (
              <div
                key={index}
                className="w-1/2 p-1 md:p-2"
                onClick={() => openFullscreen(image)}
              >
                <ImgLazyLoader img={image} cName="block h-full w-full rounded-lg object-cover object-center"/>
              </div>
            ))}
          </div>
        </div>
        {fullscreenImage && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center"
            onClick={closeFullscreen}
          >
            <ImgLazyLoader img={fullscreenImage} cName="max-h-full max-w-full"/>
          </div>
        )}
      </>
    </div>
  );
};

export default LoungeBar;
