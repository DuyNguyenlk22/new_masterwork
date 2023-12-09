import React from "react";
import "./strategy.scss";

let data = [
  {
    title: "FULL SECURITY",
  },
  {
    title: "BEST PERFORMANCE",
  },
  {
    title: "CONCEPT & STRATEGY",
  },
  {
    title: "WORLDWIDE ACCESS",
  },
  {
    title: "INTERACTIVE BUSINESS",
  },
  {
    title: "EMAILING",
  },
];

let renderListLeft = () => {
  return data.map((item, index) => {
    if (index < 3) {
      return (
        <div key={index} className='flex'>
          <div>
            <span className='strategy__number w-[40px] h-[40px] leading-[40px] text-center color-pink text-xl bg-white font-bold rounded-full shadow-md inline-block'>
              {index + 1}
            </span>
          </div>
          <div className='px-6'>
            <h2 className='text-lg font-bold color-title hover:text-[#dc4f72] duration-300'>
              {item.title}
            </h2>
            <p>
              Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      );
    }
  });
};

let renderListRight = () => {
  return data.map((item, index) => {
    if (index > 2) {
      return (
        <div key={index} className='flex'>
          <div>
            <span className='strategy__number w-[40px] h-[40px] leading-[40px] text-center color-pink text-xl bg-white font-bold rounded-full shadow-md inline-block'>
              {index + 1}
            </span>
          </div>
          <div className='px-6'>
            <h2 className='text-lg font-bold color-title hover:text-[#dc4f72] duration-300'>
              {item.title}
            </h2>
            <p>
              Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
      );
    }
  });
};

export default function Strategy() {
  return (
    <section className='strategy py-12 bg-[#F7F9FC]'>
      <div className='container'>
        <div className='creative_title max-w-[750px] m-auto text-center'>
          <h4 className='color-pink font-bold mb-[5px]'>THE BEST PRODUCTS</h4>
          <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
            How we make your strategy business
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-5 mt-12'>
          <div className='left space-y-8'>{renderListLeft()}</div>
          <div className='middle mr-4'>
            <img
              src='./image/service-circle.jpg'
              className='rounded-full w-1/2 translate-x-1/2 lg:translate-x-0 lg:w-full'
              alt='...'
            />
          </div>
          <div className='right space-y-8'>{renderListRight()}</div>
        </div>
      </div>
    </section>
  );
}
