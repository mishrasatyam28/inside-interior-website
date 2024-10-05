import { FaLightbulb, FaLaptop, FaGavel, FaTrophy } from "react-icons/fa";

export default function HowWeWork() {
  const steps = [
    {
      icon: <FaLightbulb className="text-white w-10 h-10" />,
      title: "01 CONSULTATION",
      description:
        "We listen to and understand our clients; this communication helps to facilitate an interior design that often exceeds client expectations.",
    },
    {
      icon: <FaLaptop className="text-white w-10 h-10" />,
      title: "02 DESIGN DEVELOPMENT",
      description:
        "Each interior design project is refined through a process of fluid development with continuous, valuable input from our clients.",
    },
    {
      icon: <FaGavel className="text-white w-10 h-10" />,
      title: "03 PRESENTATION",
      description:
        "Our interior design concepts, ideas and materials are revealed to our clients in a way that is clearly understood.",
    },
    {
      icon: <FaTrophy className="text-white w-10 h-10" />,
      title: "04 ORDER & DELIVERY",
      description:
        "Furnishings, Fixtures & Equipment are ordered and delivered on time. We oversee the installation of each item.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-dmDisplayfont">
          HOW WE WORK
        </h2>
        <p className="text-gray-600 mb-12 px-4">
          Inside Design Group sees interior design as strategy in action,
          focusing on results. We help our clients envision a better space, and
          we help them get there successfully.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex justify-center items-center w-20 h-20 bg-gray-800 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm text-center px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
