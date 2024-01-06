import React, { useState } from 'react'
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
import ScrollingLogo from '../../MasterComponents/ScrollingLogo';


const FoodMenu = () => {

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
    <ScrollingLogo/>
    <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Food Menu
          </h1>
        </div>
    <div className="container mx-auto px-5 py-2 lg:px-32">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/* Map through your images array */}
          {[fm1, fm2, fm3, fm4, fm5, fm6, fm7, fm8, fm9, fm10, fm11, fm12].map((image, index) => (
            <div key={index} className="w-1/2 p-1 md:p-2" onClick={() => openFullscreen(image)}>
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    {fullscreenImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center" onClick={closeFullscreen}>
          <img
            src={fullscreenImage}
            alt="fullscreen"
            className="max-h-full max-w-full"
          />
        </div>
      )}
    </>
  )
}

export default FoodMenu
