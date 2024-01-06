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

  if (roomType === "solaBhanjyang") {
    return (
      <>
        <ScrollingLogo />

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Sola Bhanjyang
          </h1>
        </div>
        <div className="sm:grid grid-cols-2 md:grid-cols-3 gap-4 items-center hidden">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs. 7,500/- per Night
          </h1>

          <p className="geologica text-sm sm:text-base">
            This block is named after the beautiful village that lies in
            Sindhuli near the Selfie Hill in BP Highway. It is famous for the
            sweeping panoramic views along with foggy valley below. This block
            consists of apartment type room with the facility of Kitchen
            suitable for family and couple. It consist of 1 King sized bed
            single. This block has AC, high-quality sofas,
            refrigerator, flat screens LED TV, speedy internet, hot and cold
            water equipped with all the required amenities kits and kitchen
            utensils.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Apartment
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        2 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        One King Size
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Cupboard & Study Table, HD LED Smart TV, Telephone, High
                        Speed Internet, Kitchens Attached Bathrooms, for small
                        family & couples, etc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "dhungrebash") {
    return (
      <>
        <ScrollingLogo />
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Dhungrebash
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-2 gap-4 items-center">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs. 4,500/- per Night
          </h1>

          <p className="geologica text-sm sm:text-base">
            Dhungrebas is named after the location address of the Resort, a
            beautiful downtown of Sindhuli Bazaar. It consists of exclusive deluxe
            room of the resort. Deluxe Rooms: Big living room with 1 king sized
            bed with AC, high-quality sofa, Flat screen LED TV with speedy
            internet, hot and cold water equipped with Wi-Fi and all the
            required amenities kits.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Deluxe Room
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        2 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        One King Size
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Closet with hangers, HD LED Smart TV, Telephone, High
                        Speed Internet, Mini-bar, Attached Bathrooms, etc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "mallaGaun") {
    return (
      <>
        <ScrollingLogo />
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Malla Gaun
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-2 gap-4 items-center">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs.3500/per night
          </h1>

          <p className="geologica text-sm sm:text-base">
            This block is named after the Malla dynasty who ruled Kathmandu
            valley during 12-18th Centuries. It is also the name of small village
            near Sindhuli Bazaar. This block occupies 6 rooms in total, which
            consists of double bed in each room, This block is outfitted with
            high-quality sofas, flat screens LED TV, speedy internet, hot and
            cold water equipped with strong Wi-Fi and all the required amenities
            kits.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Double Bed
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        2 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Two Double Beds
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Closet with hangers, HD LED Smart TV, Telephone, High
                        Speed Internet, Mini-bar, Attached Bathrooms, etc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "khaniyaKharka") {
    return (
      <>
        <ScrollingLogo />
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Khaniya Kharka
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs. 12,500/- per Night
          </h1>

          <p className="geologica text-sm sm:text-base">
            Khaniya kharka block is named after one of the villages in Sindhuli
            which is situated over 2,000 ft. above the sea level. It has a big
            dormitory room. It has nine single beds with high-quality sofas, 2
            Flat screens LED TV, speedy internet, hot and cold water and all the
            required amenities kits.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Dormitory
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        18-20 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Nine King Size Bed
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        HD LED Smart TV, Telephone, High Speed Internet,
                        Attached Bathrooms, etc.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "ratamata") {
    return (
      <>
        <ScrollingLogo />
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Ratamata
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs.4000/per night
          </h1>

          <p className="geologica text-sm sm:text-base">
            Ratamata connotes the meaning of red mud in Nepali. It is also the
            name of the place near the resort in Sindhuli Bazaar. Ratamata
            covers family rooms. Each room consists of one queen sized and one
            single bed with AC, high-quality sofa, and Flat screen LED TV, hot
            and cold water, Wi-Fi and all the required amenities
            kits.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Family
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        3 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        One Queen Size Bed & One Single Bed
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Closet with hangers, HD LED Smart TV, Telephone, High
                        Speed Internet, Mini-bar, Attached Bathrooms, etc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "pipalBhanjyang") {
    return (
      <>
        <ScrollingLogo />
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Pipal Bhanjyang
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-4">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs.2500/per night
          </h1>

          <p className="geologica text-sm sm:text-base">
            This block is named after the sacred pipal tree, also called a Bodhi
            Tree which has ability to produce oxygen even at night having high
            medicinal value and is used to treat many ailments. This block
            consists single, queen sized bed in each room. This block has AC,
            high-quality sofas, flat screens LED TV, speedy internet, hot and
            cold water equipped with all the required amenities kits.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Single
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        2 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        One Queen Size Bed
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Closet with Hangers, HD LED Smart TV, Telephone, High
                        Speed Internet, Attached Bathrooms, etc
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (roomType === "dhungreBhanjyang") {
    return (
      <>
        <ScrollingLogo />
        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto sm:mt-56">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Dhungre Bhanjhyang
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4">
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

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Nrs.6500/per night
          </h1>

          <p className="geologica text-sm sm:text-base">
            Dhungre Bhangyang is named after the location of the Resort, a
            beautiful downtown of Sindhuli Bazaar. It has 2 suite rooms 201 and
            202 Suite Rooms: Big living room with larger accommodation, 1 king
            sized bed with AC, compact (mini) refrigerators, high-quality sofa,
            Flat screen LED TV with speedy internet, hot and cold water equipped
            with Wi-Fi and all the required amenities kits.
          </p>
        </div>

        <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto ">
          <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
            Room details
          </h1>
        </div>

        <div class="container mx-auto flex flex-col">
          <div class="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        S.N.
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Topic
                      </th>
                      <th
                        scope="col"
                        class="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        Offers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Room Category
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Suite
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Capacity
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        2 pax
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Bed Type
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        One King Size
                      </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        4
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Services
                      </td>
                      <td class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-start">
                        Closet with hangers, Cupboard with study table, HD LED
                        Smart TV, Telephone, High Speed Internet, kitchens,
                        Mini-bar, Attached Bathrooms, etc.
                      </td>
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
