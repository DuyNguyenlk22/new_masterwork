import React from "react";
let data = [
  { title: "Website Designing and Development" },
  { title: "Android and iOs Apps Development" },
  { title: "Successfully Providing Business Solution from 20 years" },
  { title: "Excellence Records" },
];

export default function FeaturedService() {
  return (
    <section className='featuredService py-12'>
      <div className='container'>
        <div className='featuredService_title max-w-[750px] m-auto text-center'>
          <p className='color-pink font-bold mb-[5px]'>FEATURED SERVICES</p>
          <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
            Some More Features
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10 mt-10'>
          <div className='featuredService__left p-8 border-2 border-[#F7F9FC] rounded-md'>
            <h3 className='text-[38px] leading-[1] mb-3 font-bold color-title'>
              Connect people and ideas
            </h3>
            <p className='my-4'>
              Lorem ipsum dolor sit amet adipisicing elit. Consequuntur odio voluptatem tenetur
              consequatur adipisicing elit.
            </p>
            <ul className='space-y-5'>
              {data.map((item, index) => {
                return (
                  <li key={`item${index}`}>
                    <i className='fa-solid fa-check text-sm h-[30px] w-[30px] leading-[30px] color-pink bg-[#DC4F7219] text-center rounded-full opacity-50 mr-3'></i>
                    <span className='color-title font-semibold'>{item.title}</span>
                  </li>
                );
              })}
            </ul>
            <button className='btnGlobal my-6'>KNOW MORE</button>
            <img src='./image/b1.jpg' className='imgHover rounded-md' alt='...' />
          </div>
          <div className='featuredService__right p-8 border-2 border-[#F7F9FC] rounded-md'>
            <img src='./image/bg2.jpg' className='imgHover rounded-md' alt='...' />
            <h3 className='text-[38px] leading-[1] mt-8 mb-3 font-bold color-title'>
              Work better together
            </h3>
            <p className='my-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
              voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequuntur hic odio voluptatem tenetur consequatur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
              voluptatem tenetur consequatur.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequuntur hic odio voluptatem tenetur consequatur adipisicing elit.
            </p>
            <button className='btnGlobal my-6'>KNOW MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
