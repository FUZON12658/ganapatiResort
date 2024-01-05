// import React from 'react';
// import hero from '../../Images/hero.jpg';
// import heroOne from '../../Images/heroOne.jpg';
// import heroTwo from '../../Images/heroTwo.jpg';
// import heroThree from '../../Images/heroThree.jpg'
// import heroFour from '../../Images/heroFour.jpg';
// import heroFive from '../../Images/heroFive.jpg'

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

// const HeroSectionHome = () => {
//   return (
//     <div className="">
//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         stopOnHover={false}
//         showArrows={false}
//         autoPlay={true}
//         infiniteLoop={true}
//         className="h-full flex items-center" // Ensure the carousel takes the full height
//         width={"100%"}
//       >
//         <div>
//           <img src={hero} alt="Hero Image" className="h-full w-full object-fill" />
//         </div>
//         <div>
//           <img src={heroOne} alt="Hero One Image" className="h-full w-full object-fill" />
//         </div>
//         <div>
//           <img src={heroTwo} alt="Hero Two Image" className="h-full w-full object-fill" />
//         </div>
//         <div>
//           <img src={heroThree} alt="Hero Two Image" className="h-full w-full object-fill" />
//         </div>
//         <div>
//           <img src={heroFour} alt="Hero Two Image" className="h-full w-full object-fill" />
//         </div>
//         <div>
//           <img src={heroFive} alt="Hero Two Image" className="h-full w-full object-fill" />
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default HeroSectionHome;
import React from "react";
import hero from '../../Images/hero.jpg';
import heroOne from '../../Images/heroOne.jpg';
import heroTwo from '../../Images/heroTwo.jpg';
import heroThree from '../../Images/heroThree.jpg'
import heroFour from '../../Images/heroFour.jpg';
import heroFive from '../../Images/heroFive.jpg'
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselCrossfade() {
  return (
    <>
      <TECarousel showControls={false} showIndicators crossfade interval={4000} ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] xl:h-[100vh]">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={hero}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={heroOne}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={heroTwo}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={heroThree}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={heroFour}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={heroFive}
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}