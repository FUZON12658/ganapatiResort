import React from 'react'
import meetingsHero from "../../Images/meetings/meetings1.jpg"
import meetingsOne from "../../Images/meetings/meetings2.jpg"
import meetingsTwo from "../../Images/meetings/meetings3.jpg"
import eventsHero from "../../Images/events/events1.jpg"
import eventsOne from "../../Images/events/events2.jpg"
import eventsTwo from "../../Images/events/events3.jpg"
import { TECarousel, TECarouselItem } from 'tw-elements-react'
import ScrollingLogo from '../../MasterComponents/ScrollingLogo'

const MeetingsAndEvents = () => {
  return (
    <div className="sm:my-24 sm:mt-0">
      <ScrollingLogo/>
      <section className="mb-32">
       
        <TECarousel showControls={false} showIndicators ride="carousel" className='flex items-center justify-center text-center'>
        <div className="absolute  text-2xl sm:text-6xl lobster z-20 text-white">Meetings</div>
        <div className="absolute  text-xs sm:text-xl geologica z-20 text-white font-bold translate-y-9 sm:translate-y-20">
          A place where you can engineer great plans and make great decisions
        </div>
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={meetingsHero}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={meetingsOne}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={meetingsTwo}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            </div>
          </TECarousel>


      <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">

    
        <h1 className="mb-6 mt-10 text-3xl font-bold lobster text-center">
          A place where you can engineer great plans and make great decisions
        </h1>
    
        <p className='geologica'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum tempore cupiditate asperiores provident, itaque, quo ex iusto
          rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
          sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
          soluta labore! Expedita quas, nesciunt similique autem, sunt,
          doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
          Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
          ducimus consequatur corporis, architecto nesciunt vitae ipsum
          consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
          similique eum vero in est velit quasi pariatur blanditiis incidunt
          quam.
        </p>
        </div>
      </section>

      <section className="mb-32">
       
       <TECarousel showControls={false} showIndicators ride="carousel" className='flex items-center justify-center text-center'>
       <div className="absolute  text-2xl sm:text-6xl lobster z-20 text-white">Events</div>
       <div className="absolute  text-xs sm:text-xl geologica z-20 text-white font-bold translate-y-9 sm:translate-y-20">
       Celebrate your milestones in the best possible way with Us
       </div>
           <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] opacity-95 ">
             <TECarouselItem
               itemID={1}
               className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
             >
               <img
                 src={eventsHero}
                 className="block w-full"
                 alt="..."
               />
             </TECarouselItem>
             <TECarouselItem
               itemID={2}
               className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
             >
               <img
                 src={eventsOne}
                 className="block w-full"
                 alt="..."
               />
             </TECarouselItem>
             <TECarouselItem
               itemID={3}
               className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
             >
               <img
                 src={eventsTwo}
                 className="block w-full"
                 alt="..."
               />
             </TECarouselItem>
           </div>
         </TECarousel>


     <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">

   
       <h1 className="mb-6 mt-10 text-3xl font-bold lobster text-center">
        Celebrate your milestones in the best possible way with Us!
       </h1>
   
       <p className='geologica'>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
         harum tempore cupiditate asperiores provident, itaque, quo ex iusto
         rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
         sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
         soluta labore! Expedita quas, nesciunt similique autem, sunt,
         doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
         Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
         ducimus consequatur corporis, architecto nesciunt vitae ipsum
         consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
         similique eum vero in est velit quasi pariatur blanditiis incidunt
         quam.
       </p>
       </div>
     </section>
    </div>
  )
}

export default MeetingsAndEvents