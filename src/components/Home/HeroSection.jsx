import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl font-dmDisplayfont">
            Let Your Home Be
            <strong className="block font-extrabold text-rose-500">
              Unique.
            </strong>
          </h1>

          <p className="mt-4 max-w-2xl text-white sm:text-xl">
            Transform your living space with our exceptional interior design
            services. We create stunning, functional environments that reflect
            your unique style and enhance everyday living.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/contact"
              className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring active:bg-gray-900 sm:w-auto"
            >
              Get Started &rarr;
            </Link>

            <Link
              to="/about"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
