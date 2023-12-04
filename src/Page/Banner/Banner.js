import React from "react";
import "./banner.scss";

export default function Banner() {
  return (
    <section id='banner' className='mt-[90px]'>
      <div className='container'>
        <div className='banner__left'>
          <h1 className='text-[50px] leading-[57.5px] text-[#2C3038]'>
            We Execute Our Ideas From Start to Finish
          </h1>
          <p>
            Building a beautiful interactive business for startups and
            innovative companies.
          </p>
          <button className='btnOutLineGlobal'>GET STARTED</button>
        </div>
        <div className='banner__right'></div>
      </div>
    </section>
  );
}
