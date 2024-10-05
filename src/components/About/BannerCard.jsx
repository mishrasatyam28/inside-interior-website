import {
  FcCheckmark,
  FcGraduationCap,
  FcPositiveDynamic,
  FcVoicePresentation,
} from "react-icons/fc";

const BannerCard = () => {
  return (
    <section className="pb-20 bg-blue-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-8 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-dark w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:shadow-md dark:shadow-white">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <FcPositiveDynamic className="h-20 w-10" />
                </div>
                <h6 className="text-xl font-semibold">Award-Winning Designs</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Our designs have been recognized for their innovation and
                  elegance. We create spaces that inspire and uplift.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-dark w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:shadow-md dark:shadow-white">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-400">
                  <FcGraduationCap className="w-12 h-12" />
                </div>
                <h6 className="text-xl font-semibold">Expert Consultation</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Our team of experts is here to guide you through every step of
                  your interior design journey, ensuring your vision comes to
                  life.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 dark:bg-dark w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:shadow-md dark:shadow-white">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lime-700">
                  <FcCheckmark className="h-20 w-10 text-white" />
                </div>
                <h6 className="text-xl font-semibold">Verified Quality</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  We ensure that all our projects meet the highest standards of
                  quality and craftsmanship, delivering exceptional results
                  every time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-7/12 px-4 mr-auto ml-auto">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-dark">
              <FcVoicePresentation className="h-20 w-10" />
            </div>
            <h3 className="text-3xl mb-2 md:text-4xl font-semibold leading-normal font-dmDisplayfont">
              Transforming Spaces, Enriching Lives
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              At Inside, we believe that a well-designed space can transform
              your lifestyle. Our commitment is to provide you with innovative
              solutions that reflect your unique style and needs.
            </p>
          </div>

          <div className="mt-6 w-96 bg-white dark:bg-dark dark:text-darkText md:w-5/12 shadow-xl rounded-lg">
            <div className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card-image"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h5 className="mb-2 text-blueGray-800 font-semibold dark:text-darkText">
                Our Mission: Crafting Beautiful Interiors
              </h5>
              <p>
                At Inside, we take pride in our mission to create beautiful and
                functional interiors. Our focus is on understanding your needs
                and bringing your vision to life with creativity and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
