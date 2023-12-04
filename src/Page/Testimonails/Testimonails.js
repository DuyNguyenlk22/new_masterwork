import React from "react";
import "./testimonails.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

let data = [
  { img: "./image/client1.jpg", name: "Isabella Mia" },
  { img: "./image/client2.jpg", name: "Benjamin Lucas" },
  { img: "./image/client3.jpg", name: "Oliver Bradley" },
  { img: "./image/client4.jpg", name: "William James" },
];

export default function Testimonails() {
  return (
    <section className='testimonails py-24 px-6'>
      <div className='container'>
        <div>
          <div className='testimonails_title max-w-[750px] m-auto text-center'>
            <p className='color-pink font-bold mb-[5px]'>
              OUR CLIENTS TESTIMONIALS
            </p>
            <h2 className='text-[46px] font-bold color-title leading-[1]'>
              What People Say
            </h2>
            <span className='my-4'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </span>
          </div>
          <div className='mt-8 pb-6'>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              modules={[Pagination]}
              className='mySwiper'>
              {data.map((item, index) => {
                return (
                  <SwiperSlide
                    key={`item${index}`}
                    className='bg-white rounded cursor-grab'>
                    <div className='p-[2rem] flex rounded'>
                      <div className='w-[30%] '>
                        <div className='w-[100px] h-[100px] rounded-full inline-block bg-[#f3f6f9] border-4 border-[#dc4f72] overflow-hidden'>
                          <img src={item.img} alt='...' />
                        </div>
                      </div>
                      <div className='w-[65%] relative'>
                        <i className='fa-solid fa-quote-left absolute top-0 -left-[40px] right-0 text-3xl opacity-20 color-title'></i>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Assumenda corporis deleniti praesentium
                          doloremque. Repellendus soluta quos nemo quisquam
                          consectetur temporibus quam obcaecati sapiente quaerat
                          et.
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
