import React from "react";
import "./testimonails.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { dataTestimonails } from "../../../Data/dataTestimonails";

export default function Testimonails() {
  return (
    <section className='testimonails py-24 md:px-6'>
      <div className='container'>
        <div>
          <div className='testimonails_title max-w-[750px] m-auto text-center'>
            <h4 className='color-pink font-bold mb-[5px]'>OUR CLIENTS TESTIMONIALS</h4>
            <h2 className='leading-[42px] text-[32px] lg:text-[46px] font-bold color-title md:leading-[1]'>
              What People Say
            </h2>
            <p className='my-4'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet
              mattis quam.
            </p>
          </div>
          <div className='mt-8 pb-6'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              scrollbar={{ draggable: true }}
              modules={[Pagination]}
              className=''>
              {dataTestimonails.map((item, index) => {
                return (
                  <SwiperSlide
                    key={`item${index}`}
                    className='mySwiper bg-white rounded cursor-grab'>
                    <div className=' p-4 md:p-[2rem] flex flex-wrap md:flex-nowrap rounded'>
                      <div className='w-full md:w-[30%] mb-5 md:mb-0 flex justify-center'>
                        <div className='w-[100px] h-[100px] rounded-full inline-block bg-[#f3f6f9] border-4 border-[#dc4f72] overflow-hidden'>
                          <img src={item.img} alt='...' />
                        </div>
                      </div>
                      <div className='w-full md:w-[65%] relative text-center md:text-left'>
                        <i className='fa-solid fa-quote-left absolute top-0 -left-[25px] right-0 text-3xl opacity-20 color-title'></i>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                          corporis deleniti praesentium doloremque. Repellendus soluta quos nemo
                          quisquam consectetur temporibus quam obcaecati sapiente quaerat et.
                        </p>
                        <div className='mt-4'>
                          <h4 className='color-pink'>{item.name}</h4>
                          <p>Company name</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
