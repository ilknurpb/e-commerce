import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    smallTitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    smallTitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
  },
];

function Slider() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[716px] w-full overflow-hidden bg-[#2DCDF2]">
                {/* sağdaki görsel */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute right-0 bottom-0 h-full max-w-none object-contain"
                />

                {/* soldaki yazılar */}
                <div className="absolute left-[140px] top-1/2 z-10 max-w-[430px] -translate-y-1/2 text-white">
                  <p className="mb-8 text-[16px] font-bold tracking-[0.1px]">
                    {slide.smallTitle}
                  </p>

                  <h2 className="mb-8 text-[58px] font-bold leading-[80px] tracking-[0.2px]">
                    {slide.title}
                  </h2>

                  <p className="mb-8 max-w-[376px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-white/90">
                    {slide.description}
                  </p>

                  <button className="rounded-[5px] bg-[#2DC071] px-10 py-4 text-[24px] font-bold leading-[32px] tracking-[0.1px] text-white">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;