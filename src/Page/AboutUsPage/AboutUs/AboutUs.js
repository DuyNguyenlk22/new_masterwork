import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

let data = [
  { title: "Website Designing and Development" },
  { title: "Android and iOs Apps Development" },
  { title: "Successfully Providing Business Solution from 20 years" },
  { title: "Excellence Records" },
];
let data2 = [
  { title: "Our History 1795" },
  { title: "The power of business" },
  { title: "120 Customer service" },
];

export default function AboutUs() {
  return (
    <section className='aboutUs'>
      <div className='mt-[80px] lg:mt-[90px] px-4 py-5 bg-[#F7F9FC]'>
        <div className='container'>
          <Breadcrumb
            separator={<i className='fa-solid fa-angles-right'></i>}
            items={[
              {
                href: "/",
                title: (
                  <>
                    <HomeOutlined />
                    <span className='color-pink'>Home</span>
                  </>
                ),
              },
              {
                href: "/aboutUs",
                title: (
                  <>
                    <UserOutlined />
                    <span>About page</span>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className='pt-12'>
        <div className='container'>
          <div className='aboutUs__header text-center mb-12'>
            <h2 className='color-title text-[46px] leading-[55px] font-bold'>About Us</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
              <h3 className='color-title text-[36px] leading-[44px] font-semibold'>
                The Best Choice For Your Successful Business!
              </h3>
              <p className='my-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <ul className='space-y-5'>
                {data.map((item, index) => {
                  return (
                    <li key={`item${index}`}>
                      <i className='fa-solid fa-check text-sm h-[30px] w-[30px] leading-[30px] color-pink bg-[#DC4F7219] text-center rounded-full opacity-50 mr-3'></i>
                      <span className='color-title font-semibold'>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='imgHover pr-4'>
              <img src='./image/pj2.jpg' className='rounded-md' alt='' />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12'>
            {data2.map((item, index) => {
              return (
                <div
                  key={`item${index}`}
                  className={`${index === 2 ? "md:translate-x-1/2" : " "}  py-4`}>
                  <h5 className='text-[26px] color-title leading-[32px] font-bold'>{item.title}</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
