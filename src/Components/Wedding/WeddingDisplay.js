import React, { useEffect, useRef, useState } from "react";
import meetingsHero from "../../Images/meetings/meetings1.jpg";
import meetingsOne from "../../Images/meetings/meetings2.jpg";
import meetingsTwo from "../../Images/meetings/meetings3.jpg";
import eventsHero from "../../Images/events/events1.jpg";
import eventsOne from "../../Images/events/events2.jpg";
import eventsTwo from "../../Images/events/events3.jpg";

import weddingHero from "../../Images/wedding/wedding1.jpg";
import weddingOne from "../../Images/wedding/wedding2.jpg";
import weddingTwo from "../../Images/wedding/wedding3.jpg";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";
import { useScrollToTop } from "../../MasterComponents/useScrollToTop";

const WeddingDisplay = () => {
  useScrollToTop();
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

  return (
    <div className="sm:my-24 sm:mt-0">
      <ScrollingLogo />
      <section className="mb-32">
        {(inView)?(
          <TECarousel
            showControls={false}
            showIndicators
            ride="carousel"
            className="flex items-center justify-center text-center"
          >
            <div className="absolute  text-2xl sm:text-6xl lobster z-20 text-white">
              Weddings
            </div>
            <div className="absolute  text-xs sm:text-xl geologica z-20 text-white font-bold translate-y-9 sm:translate-y-20">
              Make you wedding magical with us!
            </div>
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={weddingHero} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={weddingOne} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={weddingTwo} className="block w-full" alt="..." />
              </TECarouselItem>
            </div>
          </TECarousel>
        ):(<img ref={ref} className="w-full"></img>)}

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Make your wedding magical with us!
          </h1>

          <p className="geologica text-sm sm:text-base">
            Embark on a fairy-tale wedding journey at Ganapati Hotel and Resort,
            where enchantment meets perfection. Our captivating wedding venues,
            both indoor and outdoor, set the stage for your special day with a
            seamless blend of elegance and romance. Every space is customizable,
            allowing you to shape your dream wedding with unique personal
            touches. Our dedicated wedding planning team is here to transform
            your vision into reality, overseeing every detail from exquisite
            floral arrangements to delectable catering. Indulge in a culinary
            symphony with our expertly crafted menu, ensuring a delightful
            dining experience for you and your guests. Immerse yourselves in a
            romantic atmosphere, enhanced by stylish décor and enchanting
            lighting that creates the perfect backdrop for your celebration of
            love. At Ganapati Hotel and Resort, we are committed to providing
            professional support, ensuring that your wedding day is not just an
            event but a timeless and unforgettable moment etched in your hearts
            forever.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeddingDisplay;
