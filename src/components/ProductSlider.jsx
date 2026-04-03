import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/product-slide-man.png",
      smallTitle: "SUMMER 2020",
      title: "Vita Classic Product",
      description:
        "We know how large objects will act, We know how are objects will act, We know",
      price: "$16.48",
      buttonText: "ADD TO CART",
      bgColor: "#23856D",
    },
    {
      id: 2,
      image: "/images/product-slide-man.png",
      smallTitle: "SUMMER 2020",
      title: "Vita Classic Product",
      description:
        "We know how large objects will act, We know how are objects will act, We know",
      price: "$16.48",
      buttonText: "ADD TO CART",
      bgColor: "#23856D",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="product-hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-[711px] w-full overflow-hidden"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="mx-auto flex h-full max-w-[1050px] items-center justify-between px-6 py-[80px]">
                  {/* SOL YAZILAR */}
                  <div className="z-10 max-w-[510px] text-white">
                    <p className="mb-8 text-[16px] font-bold leading-[24px] tracking-[0.1px]">
                      {slide.smallTitle}
                    </p>

                    <h2 className="mb-8 max-w-[400px] text-[58px] font-bold leading-[80px] tracking-[0.2px]">
                      {slide.title}
                    </h2>

                    <p className="mb-8 max-w-[376px] text-[14px] font-medium leading-[20px] tracking-[0.2px] text-white/90">
                      {slide.description}
                    </p>

                    <div className="flex items-center gap-8">
                      <span className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-white">
                        {slide.price}
                      </span>

                      <button className="rounded-[5px] bg-[#2DC071] px-10 py-[15px] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-white transition hover:opacity-90">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>

                  {/* SAĞ GÖRSEL */}
                  <div className="flex h-full items-end">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full max-w-none object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductSlider;