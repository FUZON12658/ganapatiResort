import React from "react";
import meetingsHero from "../../Images/meetings/meetings1.jpg";
import meetingsOne from "../../Images/meetings/meetings2.jpg";
import meetingsTwo from "../../Images/meetings/meetings3.jpg";
import eventsHero from "../../Images/events/events1.jpg";
import eventsOne from "../../Images/events/events2.jpg";
import eventsTwo from "../../Images/events/events3.jpg";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";
import { useScrollToTop } from "../../MasterComponents/useScrollToTop";

const MeetingsAndEvents = () => {
  useScrollToTop();

  return (
    <div className="sm:my-24 sm:mt-0">
      <ScrollingLogo />
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
              <img src={meetingsHero} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={meetingsOne} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={meetingsTwo} className="block w-full" alt="..." />
            </TECarouselItem>
          </div>
        </TECarousel>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            A place where you can engineer great plans and make great decisions
          </h1>

          <p className="geologica text-sm sm:text-base">
            Experience unparalleled meeting excellence at Ganapati Hotel and
            Resort, featuring a spacious hall equipped with the finest amenities
            and stylish furnishings. Our expansive meeting halls showcase
            state-of-the-art audio-visual equipment, creating a sophisticated
            setting for your events. Tailor the layout for board meetings,
            seminars, or conferences, complemented by high-speed internet
            access. Our dedicated team ensures flawless execution, providing
            technical support and catering services. Indulge in gourmet dishes
            and refreshments amidst natural lighting and ventilation. The
            elegant decor adds a touch of sophistication to every gathering.
            Elevate your business events with Ganapati Hotel and Resort—where
            professionalism seamlessly blends with comfort and style.
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
            Events
          </div>
          <div className="absolute  text-xs sm:text-xl geologica z-20 text-white font-bold translate-y-9 sm:translate-y-20">
            Celebrate your milestones in the best possible way with Us
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={eventsHero} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={eventsOne} className="block w-full" alt="..." />
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img src={eventsTwo} className="block w-full" alt="..." />
            </TECarouselItem>
          </div>
        </TECarousel>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Celebrate your milestones in the best possible way with Us!
          </h1>

          <p className="geologica text-sm sm:text-base">
            Discover the perfect venue for every occasion at Ganapati Hotel and
            Resort. From enchanting weddings to corporate gatherings and special
            celebrations, our versatile spaces cater to a spectrum of events.
            Our wedding venues exude romance, corporate facilities embody
            professionalism, and our adaptable spaces cater to birthdays,
            anniversaries, and more. Customize layouts for intimate or grand
            events, and rely on our expert support team for flawless execution.
            Indulge in exquisite catering services, offering a diverse culinary
            experience. Stylish décor complements the essence of each event,
            ensuring a captivating atmosphere. Ganapati Hotel and Resort is your
            destination for unforgettable celebrations—where versatility meets
            excellence, creating lasting memories for weddings, official events,
            and special occasions alike.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MeetingsAndEvents;
