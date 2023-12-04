import { ConfigProvider, Tabs } from "antd";
import React from "react";

let data = [
  {
    title: "Why a visual identity system is more memorable",
    img: "./image/pj1.jpg",
    tabName: "Project One",
  },
  {
    title: "Make website that looks Lorem, ipsum dolor.",
    img: "./image/pj2.jpg",
    tabName: "Project Two",
  },
  {
    title: "Why a visual identity system is more memorable",
    img: "./image/pj3.jpg",
    tabName: "Project Three",
  },
];

export default function ProjectsSection() {
  return (
    <section className='projects py-24'>
      <div className='container'>
        <div>
          <div className='projects_title max-w-[750px] m-auto text-center'>
            <p className='color-pink font-bold mb-[5px]'>FEATURED CASES</p>
            <h2 className='text-[46px] font-bold color-title leading-[1]'>
              Completed Projects
            </h2>
            <span className='my-4'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </span>
          </div>
          <div className='mx-[112px] mt-12'>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    inkBarColor: "#dc4f72",
                    horizontalItemPadding: "15px",
                    horizontalItemGutter: "150",
                    itemHoverColor: "#2c3038",
                    itemSelectedColor: "#dc4f72",
                  },
                },
              }}>
              <Tabs
                indicatorSize={300}
                defaultActiveKey='1'
                centered
                items={data.map((item, index) => {
                  return {
                    key: index + 1,
                    label: <h3 className='text-[22px]'>{item.tabName}</h3>,
                    children: (
                      <div
                        key={`item${index}`}
                        className={`${
                          index === 1 ? "flex-row-reverse" : " "
                        } flex mt-5`}>
                        <div className='content__left w-1/2 mr-8'>
                          <div>
                            <h3 className='text-3xl font-semibold'>
                              {item.title}
                            </h3>
                            <p className='my-4 leading-[24.5px] text-base'>
                              Lorem ipsum dolor sit, adipisicing elit
                              repudiandae perferendis dolores praesentium nulla
                              quibusdam repellendus. consequatur minus aliquam
                              corrupti blanditiis, necessitatibus consectetur
                              modi ipsum natus accusantium sit pariatur.
                            </p>
                            <button className='btnOutlineGlobal mt-4'>
                              KNOW MORE
                            </button>
                          </div>
                        </div>
                        <div
                          className={`content__right w-1/2 imgHover ${
                            index === 1 ? "mr-8" : " "
                          }`}>
                          <img
                            src={item.img}
                            className='rounded-lg'
                            alt='...'
                          />
                        </div>
                      </div>
                    ),
                  };
                })}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
