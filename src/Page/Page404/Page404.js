import React from "react";
import { NavLink } from "react-router-dom";
import "./page404.scss";

export default function Page404() {
  return (
    <div className='page404 mt-[80px] lg:mt-[90px] px-4 py-10'>
      <div className='404__content max-w-[600px] m-auto flex flex-col items-center space-y-8'>
        <div className='text-[100px] font-bold color-pink'>
          <span>4</span>
          <i className='fa-regular fa-face-frown'></i>
          <span>4</span>
        </div>
        <h2 className='text-[30px] font-bold color-title'>Oops, Page not found!</h2>
        <p className='text-center'>
          Sorry, we're offline right now to make our site even better. Please, comeback later and
          check what we've been upto.
        </p>
        <div className='max-w-[450px] h-[52px] m-auto'>
          <input
            type='text'
            placeholder='Enter your text'
            className='w-[70%] px-[30px] h-full text-[#ccc] border-[#ddd] rounded border-2 outline-[#dc4f72]'
          />
          <button className='btnGlobal'>Search</button>
        </div>
        <NavLink to={"/"}>
          <h2 className=' space-x-3 color-title hover:text-[#dc4f72] duration-300'>
            <i className='fa-solid fa-arrow-left-long'></i>
            <span>Back to home</span>
          </h2>
        </NavLink>
      </div>
    </div>
  );
}
