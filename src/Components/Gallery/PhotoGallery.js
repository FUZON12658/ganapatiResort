import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import apartmentOne from "../../Images/apartmentRoom/apartmentRoom1.jpg";
import apartmentTwo from "../../Images/apartmentRoom/apartmentRoom2.jpg";
import apartmentThree from "../../Images/apartmentRoom/apartmentRoom3.jpg";
import apartmentFour from "../../Images/apartmentRoom/apartmentRoom4.jpg";
import apartmentFive from "../../Images/apartmentRoom/apartmentRoom5.jpg";
import apartmentSix from "../../Images/apartmentRoom/apartmentRoom6.jpg";
import apartmentSeven from "../../Images/apartmentRoom/apartmentRoom7.jpg";

import deluxeRoomOne from "../../Images/deluxeRoom/deluxeRoom1.jpg";
import deluxeRoomTwo from "../../Images/deluxeRoom/deluxeRoom2.jpg";
import deluxeRoomThree from "../../Images/deluxeRoom/deluxeRoom3.jpg";
import deluxeRoomFour from "../../Images/deluxeRoom/deluxeRoom4.jpg";
import deluxeRoomFive from "../../Images/deluxeRoom/deluxeRoom5.jpg";
import deluxeRoomSix from "../../Images/deluxeRoom/deluxeRoom6.jpg";

import dormitoryRoomOne from "../../Images/dormitoryRoom/dormitoryRoom1.jpg";
import dormitoryRoomTwo from "../../Images/dormitoryRoom/dormitoryRoom2.jpg";
import dormitoryRoomThree from "../../Images/dormitoryRoom/dormitoryRoom3.jpg";
import dormitoryRoomFour from "../../Images/dormitoryRoom/dormitoryRoom4.jpg";
import dormitoryRoomFive from "../../Images/dormitoryRoom/dormitoryRoom5.jpg";
import dormitoryRoomSix from "../../Images/dormitoryRoom/dormitoryRoom6.jpg";
import dormitoryRoomSeven from "../../Images/dormitoryRoom/dormitoryRoom7.jpg";
import dormitoryRoomEight from "../../Images/dormitoryRoom/dormitoryRoom8.jpg";
import dormitoryRoomNine from "../../Images/dormitoryRoom/dormitoryRoom9.jpg";
import dormitoryRoomTen from "../../Images/dormitoryRoom/dormitoryRoom10.jpg";
import dormitoryRoomEleven from "../../Images/dormitoryRoom/dormitoryRoom11.jpg";

import doubleBedRoomOne from "../../Images/doubleBedRoom/doubleBedRoom1.jpg";
import doubleBedRoomTwo from "../../Images/doubleBedRoom/doubleBedRoom2.jpg";
import doubleBedRoomThree from "../../Images/doubleBedRoom/doubleBedRoom3.jpg";
import doubleBedRoomFour from "../../Images/doubleBedRoom/doubleBedRoom4.jpg";
import doubleBedRoomFive from "../../Images/doubleBedRoom/doubleBedRoom5.jpg";
import doubleBedRoomSix from "../../Images/doubleBedRoom/doubleBedRoom6.jpg";

import familyRoomOne from "../../Images/familyRoom/familyRoom1.jpg";
import familyRoomTwo from "../../Images/familyRoom/familyRoom2.jpg";
import familyRoomThree from "../../Images/familyRoom/familyRoom3.jpg";
import familyRoomFour from "../../Images/familyRoom/familyRoom4.jpg";
import familyRoomFive from "../../Images/familyRoom/familyRoom5.jpg";
import familyRoomSix from "../../Images/familyRoom/familyRoom6.jpg";

import singleRoomOne from "../../Images/singleRoom/singleRoom1.jpg";
import singleRoomTwo from "../../Images/singleRoom/singleRoom2.jpg";
import singleRoomThree from "../../Images/singleRoom/singleRoom3.jpg";
import singleRoomFour from "../../Images/singleRoom/singleRoom4.jpg";
import singleRoomFive from "../../Images/singleRoom/singleRoom5.jpg";

import suiteRoomOne from "../../Images/suiteRoom/suiteRoom1.jpg";
import suiteRoomTwo from "../../Images/suiteRoom/suiteRoom2.jpg";
import suiteRoomThree from "../../Images/suiteRoom/suiteRoom3.jpg";
import { useLocation } from "react-router-dom";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";

const PhotoGallery = () => {
  const location = useLocation();
  const roomType = new URLSearchParams(location.search).get("roomType");

  if (roomType === "apartmentRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="sm:grid grid-cols-2 md:grid-cols-3 gap-4 items-center sm:mt-56 hidden">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentOne}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentTwo}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentThree}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentFour}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentFive}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentSix}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={apartmentSeven}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentOne} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentTwo} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentThree} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentFour} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentFive} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={6}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentSix} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={7}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={apartmentSeven} className="block w-full" alt="..." />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        First
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Last
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Mark
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Otto
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Jacob
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Thornton
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td
                        colspan="2"
                        class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Larry the Bird
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "deluxeRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="hidden sm:grid grid-cols-2 gap-4 items-center sm:mt-56">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={deluxeRoomOne}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={deluxeRoomTwo}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={deluxeRoomThree}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={deluxeRoomFour}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={deluxeRoomFive}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={deluxeRoomSix}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={deluxeRoomOne} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={deluxeRoomTwo} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={deluxeRoomThree} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={deluxeRoomFour} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={deluxeRoomFive} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={6}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={deluxeRoomSix} className="block w-full" alt="..." />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="flex flex-col my-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "doubleBedRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="hidden sm:grid grid-cols-2 gap-4 items-center sm:mt-56">
          <div className="grid  gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={doubleBedRoomOne}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={doubleBedRoomTwo}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={doubleBedRoomThree}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={doubleBedRoomFour}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={doubleBedRoomFive}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={doubleBedRoomSix}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={doubleBedRoomOne}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={doubleBedRoomTwo}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={doubleBedRoomThree}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={doubleBedRoomFour}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={doubleBedRoomFive}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={6}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={doubleBedRoomSix}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="flex flex-col my-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "dormitoryRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 sm:mt-56">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomOne}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomTwo}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomThree}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomFour}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomFive}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomSix}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomSeven}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomEight}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomNine}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomTen}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={dormitoryRoomEleven}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomOne}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomTwo}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomThree}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomFour}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomFive}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={6}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomSix}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={7}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomSeven}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={8}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomEight}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={9}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomNine}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={10}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomTen}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={11}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={dormitoryRoomEleven}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="flex flex-col my-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "familyRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 sm:mt-56">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={familyRoomOne}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={familyRoomTwo}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={familyRoomThree}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={familyRoomFour}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={familyRoomFive}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={familyRoomSix}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={familyRoomOne} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={familyRoomTwo} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={familyRoomThree} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={familyRoomFour} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={familyRoomFive} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={6}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={familyRoomSix} className="block w-full" alt="..." />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="flex flex-col my-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "singleRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-4 sm:mt-56">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={singleRoomOne}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={singleRoomTwo}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={singleRoomThree}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={singleRoomFour}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={singleRoomFive}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={singleRoomOne} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={singleRoomTwo} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={singleRoomThree} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={singleRoomFour} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={singleRoomFive} className="block w-full" alt="..." />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="flex flex-col my-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "suiteRoom") {
    return (
      <>
        <ScrollingLogo />
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 sm:mt-56">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={suiteRoomOne}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={suiteRoomTwo}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={suiteRoomThree}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sm:hidden">
          <TECarousel showControls={false} showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={suiteRoomOne} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={suiteRoomTwo} className="block w-full" alt="..." />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img src={suiteRoomThree} className="block w-full" alt="..." />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="flex flex-col my-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        First
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Last
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Mark</td>
                      <td className="whitespace-nowrap px-6 py-4">Otto</td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        2
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                      <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        3
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">Larry</td>
                      <td className="whitespace-nowrap px-6 py-4">Wild</td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PhotoGallery;
