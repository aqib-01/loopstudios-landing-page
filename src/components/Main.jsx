import React from "react";

const Main = () => {
  return (
    <main>
      <div className="wrapper my-28 md:my-40">
        <section className="md:grid grid-cols-12">
          <div className="md:col-start-1 md:col-end-8 md:row-start-1">
            <picture>
              <source
                media="(min-width: 768px)"
                srcset="images/desktop/image-interactive.jpg"
              />
              <img
                data-aos="fade-right"
                src="images/mobile/image-interactive.jpg"
                alt=""
              />
            </picture>
          </div>
          <div
            data-aos="fade-left"
            className="mt-10 md:p-10 lg:py-16 self-end bg-white md:m-0 md:col-start-6 md:col-end-13 md:row-start-1"
          >
            <h2 className="uppercase font-normal text-center text-4xl">
              The leader in interactive VR
            </h2>
            <p className="text-dark-gray font-alata mt-6 font-semibold text-center">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>
        <section className="mt-20 md:mt-40 md:grid grid-cols-12 gap-y-20">
          <h2
            data-aos="fade-right"
            className="uppercase md:justify-self-start md:col-span-6 md:order-1 md:m-0 mb-10 font-normal text-center text-4xl"
          >
            Our Creations
          </h2>
          <div className="creations grid gap-8 md:order-3 md:col-span-12 md:grid-cols-12">
            <div
              data-aos="flip-left"
              className="relative cursor-pointer md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-deep-earth.jpg"
                />
                <img src="images/mobile/image-deep-earth.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                Deep <br /> Earth
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="relative cursor-pointer md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-night-arcade.jpg"
                />
                <img src="images/mobile/image-night-arcade.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                night <br /> arcade
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="relative cursor-pointer md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-soccer-team.jpg"
                />
                <img src="images/mobile/image-soccer-team.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                Soccer <br /> team vr
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="relative cursor-pointer  md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-grid.jpg"
                />
                <img src="images/mobile/image-grid.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                The <br /> grid
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="relative cursor-pointer  md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-from-above.jpg"
                />
                <img src="images/mobile/image-from-above.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                from <br /> above
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="relative cursor-pointer  md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-pocket-borealis.jpg"
                />
                <img src="images/mobile/image-pocket-borealis.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                Pocket <br /> Borealis
              </p>
            </div>
            <div
              data-aos="flip-left"
              className="relative cursor-pointer  md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-curiosity.jpg"
                />
                <img src="images/mobile/image-curiosity.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                the <br /> Curiosity
              </p>
            </div>
            <div
              data-aos="flip-right"
              className="relative cursor-pointer  md:col-span-3"
            >
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="images/desktop/image-fisheye.jpg"
                />
                <img src="images/mobile/image-fisheye.jpg" alt="" />
              </picture>

              <p
                className="absolute font-thin bottom-6 left-6 text-white text-2xl uppercase
              "
              >
                make it
                <br /> fisheye
              </p>
            </div>
          </div>
          <button
            data-aos="fade-left"
            className="md:order-2 md:col-span-6 mx-auto block font-alata text-lg
           font-semibold uppercase md:m-0 mt-10 border-2 border-very-dark-gray
            py-3 px-16 hover:bg-black hover:text-white md:w-fit md:justify-self-end"
          >
            See All
          </button>
        </section>
      </div>
    </main>
  );
};

export default Main;
