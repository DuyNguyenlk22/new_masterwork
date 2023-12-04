import { Popover } from "antd";
import React, { useState } from "react";
import "./header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <header id='header' className='bg-white fixed-top'>
      <div className='container flex justify-between items-center px-3 py-4'>
        <div className='text-[#dc4f72] text-[26px]'>
          <i className='fa-regular fa-handshake mr-2'></i>
          <span className='font-medium'>Masterwork</span>
        </div>
        <nav>
          <ul className='flex items-center space-x-8'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <Popover
              content={
                <>
                  <li>
                    <a href='#'>Blog Posts</a>
                  </li>
                  <li>
                    <a href='#'>404 page</a>
                  </li>
                </>
              }
              placement='bottom'
              trigger='click'
              open={open}
              onOpenChange={handleOpenChange}>
              <li>
                <a href='#'>Pages</a>
              </li>
            </Popover>
            <li>
              <a href='#'>Contact</a>
            </li>
            <div className='h-[40px] w-[40px] flex justify-center items-center text-center rounded-full bg-[#F7F9FC] border-[1] border-[#eee] cursor-pointer'>
              <i className='fa-solid fa-magnifying-glass opacity-70 hover:opacity-100 text-[#5a5a5a] duration-300'></i>
            </div>
            <div>
              <button className='btnOutlineGlobal'>Schedule a Demo</button>
            </div>
            <div>
              <i className='fa-regular fa-moon text-2xl cursor-pointer'></i>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
