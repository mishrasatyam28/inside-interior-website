import { Link } from "react-router-dom";

const ProjectBanner = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1617099443741-a9b51eabd2b8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-1/2 lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-2xl font-extrabold text-white md:text-5xl lg:text-6xl font-dmDisplayfont">
            <span className="md:whitespace-nowrap">
              Budget aapka, Kaam humara,
            </span>
            <strong className="block font-extrabold text-rose-500">
              Tareef Aapki.
            </strong>
          </h1>

          <p className="mt-4 max-w-2xl text-white sm:text-xl">
            Unique among interior design firms, Grant Design Group utilizes
            presentation tools that allow our clients to clearly understand and
            visualize design concepts early on in the project, saving time and
            investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
