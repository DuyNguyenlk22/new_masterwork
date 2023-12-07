import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";
import "./creative.scss";
import { Modal } from "antd";

let dataForm = [{ name: "Name" }, { name: "Email" }, { name: "Company" }, { name: "Subject" }];

export default function Creative() {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className='creative py-12'>
      <div className='container'>
        <div className='creative_title max-w-[750px] m-auto text-center'>
          <p className='color-pink font-bold mb-[5px]'>CREATIVE SOLUTIONS</p>
          <h2 className='text-[32px] leading-[40px] md:text-[46px] font-bold color-title md:leading-[1]'>
            Watch Our Two Minute Intro
          </h2>
          <p className='my-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus
            nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mt-10 relative'>
          <div className='max-w-[700px] mx-auto  imgHover '>
            <img src='./image/b9.jpg' className='rounded-lg' alt='' />
          </div>
          <button
            id='buttonAnimate'
            onClick={() => setOpen(true)}
            className='bg-white w-[55px] h-[55px] leading-[55px] rounded-full absolute left-1/2 top-[38%] -translate-x-1/2'>
            <i className='fa-solid fa-play color-pink'></i>
          </button>
          <button onClick={showModal} className='btnGlobal mt-8'>
            REQUEST A QUOTE
          </button>
        </div>
      </div>
      {/* modal quote */}
      <Modal
        title={<h1 className='text-2xl font-semibold'>Get Free Quote</h1>}
        footer={null}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <form className='space-y-4 mt-6'>
          {dataForm.map((item, index) => {
            return (
              <Fragment key={index}>
                <input
                  type='text'
                  placeholder={item.name}
                  className='w-full px-5 py-3 text-black border-[#eee] border-2 bg-[#F7F9FC] rounded outline-[#dc4f72]'
                />
              </Fragment>
            );
          })}
          <div className='flex justify-end'>
            <button className='btnGlobal '>SUBMIT NOW</button>
          </div>
        </form>
      </Modal>
      {/* modal video */}
      <ModalVideo
        channel='youtube'
        youtube={{ mute: 0, autoplay: 0, controls: 1 }}
        isOpen={isOpen}
        videoId='a5KYlHNKQB8'
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
