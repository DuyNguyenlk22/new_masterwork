import React from "react";
import CountUp from "react-countup";
import "./about.scss";

let dataNumber = [
  { number: 10458, title: "Happy Customers" },
  { number: 890, title: "Winning Awards" },
  { number: 5034, title: "Completed Projects" },
];

export default function About() {
  return (
    <section className='about py-12 bg-[#F7F9FC]'>
      <div className='container py-4 px-6'>
        <div className='grid grid-cols-2 gap-16 mt-4 mb-20'>
          <div className='about__left'>
            <p className='color-pink font-bold'>ABOUT OUR COMPANY</p>
            <h2 className='color-title text-[35px] font-bold mb-6'>
              The Best Choice For Your Successful Business!
            </h2>
            <p className='mb-12'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et est
              repellendus illum harum quam nihil totam reprehenderit! Ut sed
              eveniet quos! Asperiores officia, repudiandae similique
              reiciendis, ab est magnam esse nesciunt ea fuga facere voluptatem.
            </p>
            <button className='btnGlobal'>READ MORE</button>
          </div>
          <div className='about__right imgHover '>
            <img src='./image/about.jpg' alt='...' className='rounded-lg' />
          </div>
        </div>
        <div className='numberCounter grid grid-cols-3 gap-8'>
          {dataNumber.map((item, index) => {
            return (
              <div className='number__item' key={`item${index}`}>
                <h4 className='font-bold text-black '>{item.title}</h4>
                <p className='text-[50px] leading-[1] font-bold color-pink mt-3 mb-4'>
                  <CountUp
                    formattingFn={(number) =>
                      number.toString().replace(/,/g, "")
                    }
                    enableScrollSpy
                    end={item.number}
                    duration={8}
                  />
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere atque sed.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
