import React from "react";
import "./getInTouch.scss";

let data = [
  {
    icon: "fa-solid fa-location-arrow",
    titlle: "Our head office address:",
    info1: "8th-block road, cross avenue,",
    info2: "Lorem dolor sit, New York, USA",
  },
  {
    icon: "fa-solid fa-phone",
    titlle: "Call for help:",
    info1: "+040-123-456-88",
    info2: "+040-123-456-89",
  },
  {
    icon: "fa-regular fa-envelope-open",
    titlle: "Mail Us for information:",
    info1: "info@masterwork.com",
    info2: "masterwork@support.com",
  },
];

export default function GetInTouch() {
  return (
    <section className='getInTouch py-12 bg-[#F7F9FC]'>
      <div className='container'>
        <div className='getInTouch_title max-w-[750px] m-auto text-center'>
          <h4 className='color-pink font-bold mb-[5px]'>GET IN TOUCH</h4>
          <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
            We’re here to help
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className='getInTouch__item p-8 bg-white text-center imgHover shadow-md hover:shadow-xl rounded-md'>
                <div>
                  <i
                    className={`${item.icon} getInTouch__icon  w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[#FBEDF1] text-[#dc4f72] text-lg`}></i>
                </div>
                <h2 className='text-xl font-bold my-5 color-title'>{item.titlle}</h2>
                <p>{item.info1}</p>
                <p>{item.info2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
