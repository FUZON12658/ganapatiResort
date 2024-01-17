import React from "react";
import hero from '../../Images/hero.jpg';
import heroOne from '../../Images/heroOne.jpg';
import heroTwo from '../../Images/heroTwo.jpg';
import heroThree from '../../Images/heroThree.jpg'
import heroFour from '../../Images/heroFour.jpg';
import heroFive from '../../Images/heroFive.jpg'
import heroSix from "../../Images/heroSix.jpg"
import { TECarousel, TECarouselItem } from "tw-elements-react";
import ImgLazyLoader from "../../MasterComponents/ImgLazyLoader";


export default function CarouselCrossfade() {
  return (
    <>
      <TECarousel showControls={false} showIndicators crossfade interval={4000} ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] xl:h-[100vh]">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={hero} cName="block w-full"/>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={heroOne} cName="block w-full"/>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={heroTwo} cName="block w-full"/>
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={heroThree} cName="block w-full"/>
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={heroFour} cName="block w-full"/>
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={heroFive} cName="block w-full"/>
          </TECarouselItem>
          <TECarouselItem
            itemID={7}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <ImgLazyLoader img={heroSix} cName="block w-full"/>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}