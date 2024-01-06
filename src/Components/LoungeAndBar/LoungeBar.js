import React from "react";
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

const LoungeBar = () => {
  useScrollToTop();

  return (
    <div className="sm:my-24 sm:mt-0">
      <ScrollingLogo />
      <section className="mb-32">
        <div
          class="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
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
            Meetings
          </div>
          <div className="absolute  text-xs sm:text-xl geologica z-20 text-white font-bold translate-y-9 sm:translate-y-20">
            A place where you can engineer great plans and make great decisions
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb1} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb2} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb3} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={4}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb4} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={5}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb5} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={6}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb6} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={7}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb7} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={8}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb8} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={9}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={lb9} className="block w-full" alt="..." />
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
    </div>
  );
};

export default LoungeBar;
