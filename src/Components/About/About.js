import React from "react";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";
import nareshImage from "../../Images/aboutUs/naresh.jpg";
import krishnaImage from "../../Images/aboutUs/krishna.jpg";
import santoshImage from "../../Images/aboutUs/santosh.jpg";
import { useScrollToTop } from "../../MasterComponents/useScrollToTop";

const About = () => {
  useScrollToTop();

  const people = [
    {
      img: nareshImage,
      name: "Naresh K. Shrestha",
      descriptionOne:
        "Dear Valued Stakeholders, Welcome to GANAPATI HOTEL AND RESORT (GHAR) In today&#39;s competitive business environment, it is extremely important for us to maintain a leading position in Nepal from the beautiful landscape of SINDHULI, creating a difference in business setting to attain sustainable growth and profit, when it comes to planning, development and the management of hospitality facilities, no one does it better than GANAPATI in SINDHULI.",
      descriptionTwo:
        " We pride ourself on our different stakeholders, GM, partners and guest. Our expertise lies on our dedicated team of employees. We cordially invite you to join us, pay your visit.",
    },
    {
      img: santoshImage,
      name: "Santosh Sharma",
      descriptionOne:
        "Ganapati Hotel and Resort is in Sindhuli, in the fertile, subtropical inner terai region of Nepal. Situated to the northern east of the capital city, the resort is easily accessible from India or Kathmandu, offering guests a sophisticated and thrilling getaway in a BP Highway. Luxurious accommodation, superb leisure facilities and top-class dining options make our facility a perfect venue for holidays, quick breaks, conferences, wedding and all kind of celebrations.",
      descriptionTwo:
        "We aim to support the development of tourism sector. We are proud of our success on our different stakeholders, local community, partners and guest. Our expertise lies on our dedicated team of workforce. We warmly invite you to join us and experience the differences!",
    },
    {
      img: krishnaImage,
      name: "Krishna K. Shrestha",
      descriptionOne:
        "If youve stayed with us and have been our guest previously, we look forward to welcoming you back once again to GANAPATI HOTEL AND RESORT (GHAR). My staff and I take great pleasure in seeing our customers back, and having the opportunity to extend our unique brand of Nepalese hospitality.The hotel is dedicated to our guest, by demonstrating our policy of 100% Guest Satisfaction and consistently improving our services and amenities we provide at your service.",
      descriptionTwo:
        "Ganapati will be expanding its wings immediately on academic sectors by exploring the technical courses on different hospitality sectors like Front office, Service, Production and Housekeeping. Please feel free to share with us any suggestions or ideas that may improve the quality of our service we provide. On behalf of Management, I look forward to welcoming you here for an enjoyable stay. We invite you to experience hospitality at its finest at GANAPATI.",
    },
  ];

  return (
    <div>
      <ScrollingLogo />
      <div
        class="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pkEaMI_1WcA?si=_O8P3axXIVpt96Iw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        ;
      </div>
      <div className="container xl:w-[50vw] 2xl:w-[30vw] mx-auto">
        <h1 className="mb-6 mt-10 text-xl sm:text-3xl font-bold lobster text-center">
          Have a luxurious experience
        </h1>

        <p className="geologica text-sm sm:text-base">
          Ganapati Hotel and Resort, a newly established retreat in the Sindhuli
          district within the inner Terai region of Janakpur Zone, is situated
          approximately 185 km from the capital city, Kathmandu, accessible via
          the recently constructed BP Highway. Our resort is dedicated to
          delivering unparalleled hospitality services at this historical
          location in Sindhuli. We pride ourselves on offering luxurious
          accommodations, outstanding leisure facilities, and top-notch dining
          options, making our establishment the ideal venue for holiday
          packages, quick getaways, conferences, weddings, and various
          celebrations. We extend a warm invitation for you to join us and
          indulge in an exceptional experience!
        </p>
      </div>
      {people.map((person) => (
        <div class="container my-24 mx-auto md:px-6">
          <section class="mb-32">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                <div class="flex lg:py-12">
                  <img
                    src={person.img}
                    class="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                    alt="image"
                  />
                </div>
              </div>

              <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex h-full items-center rounded-lg bg-orange-500 p-6 text-center text-white lg:pl-12 lg:text-left">
                  <div class="lg:pl-12">
                    <h2 class="mb-8 text-3xl font-bold">{person.name}</h2>
                    <p class="mb-8 pb-2 lg:pb-0">{person.descriptionOne}</p>
                    <p>{person.descriptionTwo}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default About;
