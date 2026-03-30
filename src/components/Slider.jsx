import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Slider() {
  const slides = [
    {
      id: 1,
      subtitle: 'SUMMER 2024',
      title: 'NEW COLLECTION',
      description:
        'We know how large objects will act, but things on a small scale.',
      image: 'https://picsum.photos/600/700?1',
    },
    {
      id: 2,
      subtitle: 'SUMMER 2024',
      title: 'BESTSELLER ITEMS',
      description:
        'Shop our featured arrivals with a modern and stylish look.',
      image: 'https://picsum.photos/600/700?2',
    },
  ];

  return (
    <section className="bg-gray-50">
      <Swiper>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row">
              
              {/* TEXT */}
              <div className="max-w-xl text-center md:text-left">
                <p className="mb-4 text-sm font-bold tracking-wide text-gray-500">
                  {slide.subtitle}
                </p>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                  {slide.title}
                </h1>

                <p className="mb-8 text-base leading-7 text-gray-600 md:text-lg">
                  {slide.description}
                </p>

                <button className="rounded-md bg-green-500 px-6 py-3 text-sm font-bold text-white hover:bg-green-600">
                  SHOP NOW
                </button>
              </div>

              {/* IMAGE */}
              <div className="w-full max-w-md">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-auto w-full object-cover"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;