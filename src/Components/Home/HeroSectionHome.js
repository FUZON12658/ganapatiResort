import React from 'react';
import hero from '../../Images/hero.jpg';
import heroOne from '../../Images/heroOne.jpg';
import heroTwo from '../../Images/heroTwo.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const HeroSectionHome = () => {
  return (
    <div className="">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        className="h-full" // Ensure the carousel takes the full height
        width={"100%"}
      >
        <div>
          <img src={hero} alt="Hero Image" className="h-full w-full object-cover" />
        </div>
        <div>
          <img src={heroOne} alt="Hero One Image" className="h-full w-full object-cover" />
        </div>
        <div>
          <img src={heroTwo} alt="Hero Two Image" className="h-full w-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSectionHome;
