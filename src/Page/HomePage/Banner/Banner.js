import React from "react";
import "./banner.scss";

export default function Banner() {
  return (
    <section id='banner' className='mt-[3rem] lg:mt-[5.625rem]'>
      <div className='container'>
        <div className='banner__content  grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='banner__left'>
            <div className='mt-8'>
              <h1 className='text-[40px] leading-[45px] lg:text-[50px] lg:leading-[57.5px] color-title font-bold'>
                We Execute Our Ideas From Start to Finish
              </h1>
              <p className='mt-4 mb-8 lg:mb-12 text-xl max-w-[450px]'>
                Building a beautiful interactive business for startups and innovative companies.
              </p>
            </div>
            <button className='btnOutlineGlobal'>GET STARTED</button>
          </div>
          <div className='banner__right'>
            <img src='./image/banner.png' alt='banner' />
          </div>
        </div>
      </div>
    </section>
  );
}
