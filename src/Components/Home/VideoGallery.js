
import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import heroVideoThree from "../../Videos/heroVideoThree.mp4";
import heroVideoTwo from "../../Videos/heroVideoTwo.mp4";
import heroVideoOne from "../../Videos/heroVideoOne.mp4";
import VideoLazyLoader from "../../MasterComponents/VideoLazyLoader";

const VideoGallery = ()=>{
  return (
    <div>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] xl:h-fit ">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <VideoLazyLoader video={heroVideoOne} cName="w-full"/>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Location</h5>
              <p>
                Peaceful, Safe, Fresh and Refreshening
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
             <VideoLazyLoader video={heroVideoTwo} cName="w-full"/>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Hospitality</h5>
              <p>
                Friendly Staffs and Homely environment
              </p>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <VideoLazyLoader video={heroVideoThree} cName="w-full"/>
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Facilities</h5>
              <p>
                Well maintained rooms and services
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </div>
  );
}

export default VideoGallery;
