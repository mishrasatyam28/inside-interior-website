import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28 px-4">
      <div className="container mx-auto grid pb-8 lg:grid-cols-2 mb-8">
        <div className="text-left ">
          <h1 className="py-4 text-4xl md:text-5xl font-medium lg:text-6xl lg:py-0 font-dmDisplayfont">
            Modern Classic
          </h1>
        </div>
        <div>
          <h2 className="pb-6 text-xl font-bold tracking-wider">
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </h2>
          <div className="grid grid-cols-2 text-gray-500 gap-x-8">
            <div>
              <p>
                With our passion for design and decor, we have created a
                collection of furniture and accessories that will help you
                create a comfortable and stylish home.
              </p>
            </div>
            <div>
              <p>
                We create distinctive and unique designs that are inspired by
                the latest trends in interior design and fashion.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center pt-4 text-lg font-bold text-black underline"
              >
                View Projects <TbArrowUpRight />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1652272160585-62087946e04e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="LOGO"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
