import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

let data = [
  { numberImg: 6, title: "Concept & Strategy" },
  { numberImg: 7, title: "Interactive Business" },
  { numberImg: 4, title: "Financial Institution" },
  { numberImg: 5, title: "Worldwide Access" },
];

export default function OurServices() {
  return (
    <section className='ourServices pb-12'>
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
                href: "/servicesPage",
                title: (
                  <>
                    <UserOutlined />
                    <span>Services page</span>
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
            <h2 className='color-title text-[46px] leading-[55px] font-bold'>Our Services</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
            {/* left */}
            <div>
              <h1 className='color-title text-[42px] leading-[44px] font-semibold'>
                Our Best Services
              </h1>
              <h3 className='my-4 text-[24px] leading-[30px] text-[#999]'>
                Fusce fringilla tincidunt laoreet volutpat cras varius sit. metus vitae diam mauris.
              </h3>
              <p className='my-4'>
                Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt
                laoreet Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras varius
                lorem ac velit pharetra, non scelerisque mi vulputate. Phasellus bibendum
              </p>
              <button className='btnGlobal mt-6'>LEARN MORE</button>
            </div>
            {/* right */}
            <div className='grid grid-cols-2 gap-5'>
              {data.map((item, index) => {
                return (
                  <div key={index} className='px-[30px]'>
                    <div className='w-[80px] h-[80px] mb-4 flex items-center justify-center bg-[#F7F9FC] rounded-full shadow-lg'>
                      <img src={`./image/s${item.numberImg}.png`} alt='...' />
                    </div>
                    <h3 className='mb-3 text-xl color-title font-bold hover:text-[#dc4f72] duration-300'>
                      {item.title}
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur elit. Inventore, eius!</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
