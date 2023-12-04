import React from "react";
import { dataTools } from "./dataTools";
import "./tools.scss";

export default function Tools() {
  return (
    <section className='tools py-12'>
      <div className='container'>
        <div className='tools_title max-w-[750px] m-auto text-center'>
          <p className='color-pink font-bold mb-[5px]'>WHY CHOOSE US</p>
          <h2 className='text-[46px] font-bold color-title leading-[1]'>
            Tools for business startup to professional
          </h2>
          <span className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.
          </span>
        </div>
        <div className='tools__content grid grid-cols-3 gap-10 mt-[3rem]'>
          {dataTools.map((item, index) => {
            return (
              <div
                key={`item${index}`}
                className='tools__card flex flex-col items-center py-[3rem] px-[2rem] rounded-md border-[1] border-[#F7F9FC] bg-[#F7F9FC]'>
                <img src={item.img} alt='...' />
                <h3 className='my-4 text-[26px]'>{item.title}</h3>
                <p className='mt-4 text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  impedit vitae quae sapiente deserunt iusto.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
