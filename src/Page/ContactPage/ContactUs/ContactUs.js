import React, { Fragment, useState } from "react";
import { Breadcrumb, ConfigProvider, Spin } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { LoadingOutlined } from "@ant-design/icons";
import "./contactUs.scss";

let dataForm = [
  { name: "Enter your name" },
  { name: "Enter your email" },
  { name: "Subject" },
  { name: "Enter your message" },
];

export default function ContactUs() {
  const [isSubmit, setIsSubmit] = useState("hidden");
  const [isHide, setIsHide] = useState(false);
  return (
    <section className='contactUs pb-12'>
      <div className='breadcrumb mt-[80px] lg:mt-[90px] px-4 py-5 bg-[#F7F9FC]'>
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
                href: "/contactPage",
                title: (
                  <>
                    <UserOutlined />
                    <span>Contact page</span>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className='contactUs pt-12'>
        <div className='container'>
          <div className='contactUs__header text-center mb-12'>
            <h2 className='color-title text-[46px] leading-[55px] font-extrabold'>Contact Us</h2>
          </div>
          <div className='contactUs__content flex flex-wrap lg:flex-nowrap md:px-10'>
            <div className='flex flex-col justify-center w-full lg:w-1/2 lg:px-0 md:px-12 lg:py-12'>
              <img src='./image/contact.jpg' className='rounded-md imgHover' alt='...' />
            </div>
            <div className='contactUs__right flex flex-col justify-evenly p-8 bg-white shadow-2xl rounded-md w-full lg:w-1/2'>
              <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
                Drop us a Message
              </h2>
              <p className='md:my-0 my-4'>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices turpis sodales
                quis. Integer sit amet mattis quam.
              </p>
              <span className={`${isSubmit} my-4 text-[#28a745] text-2xl font-semibold`}>
                We got your details. We will contact you soon
              </span>
              <form
                id='myForm'
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsHide(true);
                  setTimeout(() => {
                    setIsSubmit("inline_block");
                    document.getElementById("myForm").reset();
                    setIsHide(false);
                  }, 1500);
                }}
                className='space-y-4'>
                {dataForm.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <input
                        type={`${index === 1 ? "email" : "text"}`}
                        required
                        placeholder={item.name}
                        className={`w-full px-5 ${
                          index === 3 ? "pt-3 pb-14" : "py-3"
                        }  color-title font-semibold bg-[#F7F9FC] rounded outline-[#dc4f72]`}
                      />
                    </Fragment>
                  );
                })}
                <div className='flex justify-end items-center'>
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#dc4f72",
                      },
                    }}>
                    <Spin
                      spinning={isHide}
                      indicator={
                        <LoadingOutlined
                          style={{
                            fontSize: 24,
                            marginRight: 15,
                          }}
                        />
                      }
                    />
                  </ConfigProvider>

                  <button type='submit' className='btnGlobal'>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
