import React, { useEffect, useState } from "react";
import { Collapse, ConfigProvider, Tabs } from "antd";
import { dataProject } from "../../../Data/dataProject";
import "./project.scss";

export default function ProjectsSection() {
  const [isTabDesktop, setIsTabDesktop] = useState(window.innerWidth > 576);
  useEffect(() => {
    const handleResize = () => {
      setIsTabDesktop(window.innerWidth > 576);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className='projects py-24'>
      <div className='container'>
        <div>
          <div className='projects_title max-w-[750px] m-auto text-center'>
            <h4 className='color-pink font-bold mb-[5px]'>FEATURED CASES</h4>
            <h2 className='text-[32px] leading-[42px] lg:text-[46px] font-bold color-title lg:leading-[1]'>
              Completed Projects
            </h2>
            <p className='my-4'>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet
              mattis quam.
            </p>
          </div>
          <div className='lg:mx-[112px] mt-12'>
            {isTabDesktop ? (
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
                  items={dataProject.map((item, index) => {
                    return {
                      key: index + 1,
                      label: <h3 className='text-[22px] font-semibold'>{item.tabName}</h3>,
                      children: (
                        <div
                          key={`item${index}`}
                          className={`${index === 1 ? "flex-row-reverse" : " "} flex mt-5`}>
                          <div className='content__left w-1/2 mr-8'>
                            <div>
                              <h3 className='text-[26px] leading-[33px] lg:text-3xl font-semibold'>
                                {item.title}
                              </h3>
                              <p className='my-4 leading-[24.5px] text-base'>
                                Lorem ipsum dolor sit, adipisicing elit repudiandae perferendis
                                dolores praesentium nulla quibusdam repellendus. consequatur minus
                                aliquam corrupti blanditiis, necessitatibus consectetur modi ipsum
                                natus accusantium sit pariatur.
                              </p>
                              <button className='btnOutlineGlobal mt-4'>KNOW MORE</button>
                            </div>
                          </div>
                          <div
                            className={`content__right w-1/2 imgHover ${
                              index === 1 ? "mr-8" : " "
                            }`}>
                            <img src={item.img} className='rounded-lg' alt='...' />
                          </div>
                        </div>
                      ),
                    };
                  })}
                />
              </ConfigProvider>
            ) : (
              <Collapse
                expandIconPosition='end'
                expandIcon={(e) => {
                  const { isActive } = e;
                  return (
                    <span>
                      {isActive ? (
                        <i className='angle fa-solid fa-angle-up'></i>
                      ) : (
                        <i className='angle fa-solid fa-angle-down'></i>
                      )}
                    </span>
                  );
                }}
                items={dataProject.map((item, index) => {
                  return {
                    key: index + 1,
                    label: <h3 className='text-[22px] font-semibold'>{item.tabName}</h3>,
                    children: (
                      <div
                        key={`item${index}`}
                        className={`${index === 1 ? "flex-col-reverse" : " "} flex flex-wrap mt-5`}>
                        <div className='content__left mb-5'>
                          <div>
                            <h3 className='text-[26px] leading-[33px] lg:text-3xl font-semibold'>
                              {item.title}
                            </h3>
                            <p className='my-4 leading-[24.5px] text-base'>
                              Lorem ipsum dolor sit, adipisicing elit repudiandae perferendis
                              dolores praesentium nulla quibusdam repellendus. consequatur minus
                              aliquam corrupti blanditiis, necessitatibus consectetur modi ipsum
                              natus accusantium sit pariatur.
                            </p>
                            <button className='btnOutlineGlobal mt-4'>KNOW MORE</button>
                          </div>
                        </div>
                        <div className={`content__right imgHover ${index === 1 ? "mb-8" : " "}`}>
                          <img src={item.img} className='rounded-lg' alt='...' />
                        </div>
                      </div>
                    ),
                  };
                })}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
