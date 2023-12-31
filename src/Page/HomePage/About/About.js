import React from "react";
import CountUp from "react-countup";
import "./about.scss";
import { dataNumber } from "../../../Data/dataAbout";

export default function About() {
  return (
    <section className='about py-12 bg-[#F7F9FC]'>
      <div className='container py-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-4 mb-20'>
          <div className='about__left'>
            <h4 className='color-pink font-bold'>ABOUT OUR COMPANY</h4>
            <h2 className='color-title leading-[40px] text-[35px] font-bold mb-6'>
              The Best Choice For Your Successful Business!
            </h2>
            <p className='mb-12'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et est repellendus illum
              harum quam nihil totam reprehenderit! Ut sed eveniet quos! Asperiores officia,
              repudiandae similique reiciendis, ab est magnam esse nesciunt ea fuga facere
              voluptatem.
            </p>
            <button className='btnGlobal'>READ MORE</button>
          </div>
          <div className='about__right imgHover flex flex-col justify-center '>
            <img src='./image/about.jpg' alt='...' className='rounded-lg' />
          </div>
        </div>
        <div className='numberCounter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {dataNumber.map((item, index) => {
            return (
              <div
                className={`${
                  index === 2 ? "translate-x-0 md:translate-x-1/2 lg:translate-x-0" : ""
                } number__item`}
                key={`item${index}`}>
                <h4 className='font-bold text-black '>{item.title}</h4>
                <h3 className='text-[50px] leading-[1] font-bold color-pink mt-3 mb-4'>
                  <CountUp
                    formattingFn={(number) => number.toString().replace(/,/g, "")}
                    enableScrollSpy
                    end={item.number}
                    duration={8}
                  />
                </h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere atque sed.</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
