import React from "react";
import ScrollingLogo from "../../MasterComponents/ScrollingLogo";

const About = () => {
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
        <h1 className="mb-6 mt-10 text-3xl font-bold lobster text-center">
          A place where you can engineer great plans and make great decisions
        </h1>

        <p className="geologica">
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
      <div className="bg-gray-900">
        <div className=" container mt-24 sm:mt-56 mx-auto md:px-6">
          <section className="text-center">
            <h2 className="mb-12 pt-12 text-3xl font-bold text-white">
              Meet the{" "}
              <u className="text-primary dark:text-primary-400">team</u>
            </h2>

            <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />

                <p className="mb-2 text-white font-bold">John Doe</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Co-founder
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/5.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />

                <p className="mb-2 text-white font-bold">Lisa Ferrol</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Web designer
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Maria Smith</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Senior consultant
                </p>
              </div>
              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/7.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Agatha Bevos</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Co-founder
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Darren Randolph</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Marketing expert
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/9.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Soraya Letto</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  SEO expert
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/10.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Maliha Welch</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Web designer
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/11.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Zeynep Dudley</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Web developer
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/12.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Avaya Hills</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Copywritter
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/13.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Thierry Fischer</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Senior consultant
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/14.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Aisling Sheldon</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Senior developer
                </p>
              </div>

              <div className="mb-12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                  className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
                  alt=""
                  style={{ maxWidth: "100px" }}
                />
                <p className="mb-2 text-white font-bold">Ayat Black</p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Web designer
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
