import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {
  return (
    <div className="bg-zinc-50">
      <div className="container mx-auto flex flex-col items-center justify-between py-8 px-4 lg:flex-row lg:py-16">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 lg:pr-8">
          <p className="tracking-widest text-center lg:text-left">
            OFFER FOR THE BEST INTERIOR
          </p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 text-center lg:text-left xl:text-6xl lg:text-4xl font-dmDisplayfont">
            An aesthetic room is <br />
            given harmony
          </h1>
          <p className="pb-6 text-gray-500 text-center lg:text-left xl:pb-10">
            Change your view with the best interior design. <br /> We provide
            the best interior design for your Home. <br />
            Make every moment beautiful with the best interior design.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Get Started <TbArrowUpRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/kitchen.png"
            width={800}
            height={500}
            alt="Interior Design"
            className="xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
