import React from "react";
import "./beforeFooter.scss";

export default function BeforeFooter() {
  return (
    <section className='activity py-16 md:py-24'>
      <div className='container'>
        <div className='activity__title max-w-[750px] m-auto text-center'>
          <h3 className='text-[32px] leading-[42px] md:text-[46px] font-bold color-title md:leading-[1]'>
            Ready to build your own brand community?
          </h3>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
          <div className='mt-10'>
            <button className='btnOutlineGlobal mr-5'>BOOK A DEMO</button>
            <button className='btnGlobal'>GET STARTED</button>
          </div>
        </div>
      </div>
    </section>
  );
}
