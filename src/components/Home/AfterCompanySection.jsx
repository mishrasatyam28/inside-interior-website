import { Link } from "react-router-dom";

const AfterCompanySection = () => {
  return (
    <div className="container py-16 mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4">
        <Link
          className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl font-dmDisplayfont"
          to=""
        >
          Harmony breathes life into <br />
          every aesthetic room
        </Link>
        <p className="tracking-wider text-gray-400">WORLD AWARD</p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center mx-auto">
        <div>
          <img
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt=""
            className="max-md:hidden"
          />
        </div>

        <div className="items-center">
          <p className="px-12 pb-4 ">
            Inside interior is a company engaged in the field of interior
            design. We provide the best interior design for your home. We have
            been trusted by many people to design their homes. We have also
            received many awards from various countries for our work.
          </p>
          <div className="flex px-12 pt-4 gap-x-4 ">
            <img
              src="/image/awards.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
            <img
              src="/image/awards1.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterCompanySection;
