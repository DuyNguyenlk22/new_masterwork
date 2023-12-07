import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay } from "swiper/modules";

let keyImg = [1, 2, 3, 4, 3, 1, 4, 2];

export default function SliderAbout() {
  let renderImg = () => {
    return keyImg.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <img
            className='py-6 px-8 grayscale hover:grayscale-0 duration-300'
            src={`./image/logo${item}.jpg`}
            alt='...'
          />
        </SwiperSlide>
      );
    });
  };

  return (
    <section className='sliderAbout py-12'>
      <div className='container'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className='mySwiper'
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}>
          {renderImg()}
        </Swiper>
      </div>
    </section>
  );
}
