import React from "react";
import "./tools.scss";
import { dataTools } from "../../../Data/dataTools";

export default function Tools() {
  return (
    <section className='tools py-12'>
      <div className='container'>
        <div className='tools_title max-w-[750px] m-auto text-center'>
          <p className='color-pink font-bold mb-[5px]'>WHY CHOOSE US</p>
          <h2 className='text-[32px] lg:text-[46px] font-bold color-title leading-[1]'>
            Tools for business startup to professional
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus
            nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='tools__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[3rem]'>
          {dataTools.map((item, index) => {
            return (
              <div
                key={`item${index}`}
                className={`${
                  index === 2 ? "col-span-1 md:col-span-2 lg:col-span-1" : ""
                } tools__card flex flex-col items-center py-[3rem] px-[2rem] rounded-md border-[1] border-[#F7F9FC] bg-[#F7F9FC]`}>
                <img src={item.img} alt='...' />
                <h3 className='my-4 text-[26px] color-title font-bold'>{item.title}</h3>
                <p className='text-center'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit vitae quae sapiente deserunt
                  iusto.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
