import React from "react";
import { FcBullish, FcMiddleBattery, FcServices } from "react-icons/fc";

const Detail = () => {
  return (
    <section className="pt-20 lg:pt-6 relative block bg-blue-gray-300 dark:bg-dark">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="px-4 md:text-center">
              <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl font-dmDisplayfont">
                Transform Your Space
              </h2>
              <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto md:mb-14">
                <div className="flex-1 h-2 bg-teal-200"></div>
                <div className="flex-1 h-2 bg-teal-400"></div>
                <div className="flex-1 h-2 bg-teal-300"></div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
              Discover how we can enhance your environment with our tailored
              interior design services. Our expertise turns your vision into
              reality.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FcServices className="h-12 w-12" />
            </div>
            <h6 className="text-xl mt-5 font-semibold text-gray-800 ">
              Exceptional Services
            </h6>
            <p className="mt-2 mb-4 text-blueGray-400">
              We offer personalized interior design solutions that cater to your
              unique style and needs, ensuring a seamless experience from
              concept to completion.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FcBullish className="h-12 w-12" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-gray-800 ">
              Elevate Your Aesthetic
            </h5>
            <p className="mt-2 mb-4 text-blueGray-400">
              Our designs not only enhance functionality but also elevate the
              overall aesthetic of your space, creating a harmonious and
              inviting environment.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <FcMiddleBattery className="h-12 w-12" />
            </div>
            <h5 className="text-xl mt-5 font-semibold text-gray-800">
              Timely Deliveries
            </h5>
            <p className="mt-2 mb-4 text-blueGray-400">
              We understand the importance of deadlines. Our dedicated team
              ensures that your project is completed on time without
              compromising quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
