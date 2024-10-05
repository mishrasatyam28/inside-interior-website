const ServiceBanner = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-1/2 lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl lg:text-6xl font-dmDisplayfont">
            Online Interior
            <strong className="block font-extrabold text-rose-500">
              Designing.
            </strong>
          </h1>

          <p className="mt-4 max-w-2xl text-white sm:text-xl">
            Making interior design process smooth, hassle free, ONLINE
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
