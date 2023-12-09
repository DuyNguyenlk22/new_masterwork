import React from "react";
import "./temMember.scss";

let data = [
  { keyImg: 1, name: "Gwen Johnson", role: "Founder & CEO" },
  { keyImg: 2, name: "Daniel Roberto", role: "Regional Manager" },
  { keyImg: 3, name: "Dhony Abraham", role: "Managing Partner" },
  { keyImg: 4, name: "Marko Dugonji", role: "Cheif Executive" },
  { keyImg: 5, name: "Anthony", role: "Engineering Officer" },
  { keyImg: 6, name: "Emma Stone", role: "Team Leader" },
  { keyImg: 7, name: "Rhoda Byrd", role: "Technology Officer" },
  { keyImg: 8, name: "Max Stoiber", role: "Manager" },
];

let renderMember = () => {
  return data.map((item, index) => {
    return (
      <div
        key={index}
        className='memberItem imgHover cursor-pointer rounded-lg overflow-hidden hover:shadow-lg'>
        <div className='w-full h-[250px] overflow-hidden inline-block'>
          <img src={`./image/client${item.keyImg}.jpg`} alt='...' />
        </div>
        <div className='memberItem__info p-4 bg-white border-[#eee] -mt-3'>
          <h3 className='text-[22px] leading-[26px] font-bold color-title'>{item.name}</h3>
          <p className='mb-3'>{item.role}</p>
          <div className='space-x-5'>
            <i className='fa-brands fa-facebook-f w-[30px] h-[30px] leading-[30px] text-white text-center bg-[#3b5998] rounded-full'></i>
            <i className='fa-brands fa-twitter w-[30px] h-[30px] leading-[30px] text-white text-center bg-[#1da1f2] rounded-full'></i>
          </div>
        </div>
      </div>
    );
  });
};

export default function TeamMember() {
  return (
    <section className='teamMember py-12 bg-[#F7F9FC]'>
      <div className='container'>
        <div className='teamMember_title max-w-[750px] m-auto text-center'>
          <h4 className='color-pink font-bold mb-[5px]'>OUR TEAM MEMBERS</h4>
          <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
            Our Creative Team
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-5 mt-12'>
          {renderMember()}
        </div>
      </div>
    </section>
  );
}
