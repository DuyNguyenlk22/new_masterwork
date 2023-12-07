import React from "react";
import { NavLink } from "react-router-dom";
import "./FeaturesAbout.scss";

let data = [
  { title: "Best Financial Advice", icon: "fa-solid fa-laptop" },
  { title: "Authorised Finance Brand", icon: "fa-brands fa-grav" },
  { title: "Compehensive Advices", icon: "fa-solid fa-square-caret-up" },
  { title: "Monitoring & Review", icon: "fa-solid fa-circle-half-stroke" },
];

export default function FeaturesAbout() {
  return (
    <section className='featuresAbout bg-[#F7F9FC] py-12'>
      <div className='container'>
        <div className='featuresAbout_title max-w-[750px] m-auto text-center'>
          <p className='color-pink font-bold mb-[5px]'>FEATURES</p>
          <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
            The Largest Business Expert !
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8 mt-14'>
          {data.map((item, index) => {
            return (
              <div key={index} className='bg-white shadow-xl rounded-lg'>
                <div id='bott-img' className='text-center'>
                  <div className='featuresAbout__icon'>
                    <i className={item.icon}></i>
                  </div>
                  <h4 id='mission' className='text-[22px] leading-[28px] font-bold'>
                    {item.title}
                  </h4>
                  <div id='description'>
                    <p>Enean eget dolor dolor sit amet commodo ligula</p>
                    <NavLink className='color-pink'>Read more</NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
