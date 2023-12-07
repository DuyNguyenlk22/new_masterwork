import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { navItem } from "../../Data/headerData";

export default function Header() {
  const [isNavVisible, setNavVisible] = useState(true);
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth > 992);
  const [isShowMenu, setIsShowMenu] = useState("showMenu");
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    if (isNavVisible === false) {
      setIsShowMenu("showMenu");
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth > 992);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header id='header' className='bg-white fixed-top '>
      <div className='container lg:px-3 py-5'>
        <nav className='flex justify-between items-center'>
          <div className='color-pink text-[26px]'>
            <i className='fa-regular fa-handshake mr-2'></i>
            <span className='font-medium'>Masterwork</span>
          </div>
          {isMobileWidth ? (
            <ul className=' flex items-center space-x-8'>
              {navItem.map((item, index) => {
                return (
                  <li key={`item${index}`}>
                    <NavLink to={item.link} className={index === 0 ? "color-pink" : ""}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
              <div className='h-[40px] w-[40px] flex justify-center items-center text-center rounded-full opacity-70 bg-[#F7F9FC] border-[1] border-[#eee] hover:opacity-100 cursor-pointer duration-300'>
                <i className='fa-solid fa-magnifying-glass text-[#5a5a5a] duration-300'></i>
              </div>
              <div>
                <button className='btnOutlineGlobal'>Schedule a Demo</button>
              </div>
              <div>
                <i className='fa-regular fa-moon text-2xl cursor-pointer'></i>
              </div>
            </ul>
          ) : (
            <>
              <div className='flex items-center space-x-4'>
                <div>
                  <i className='fa-regular fa-moon text-2xl cursor-pointer'></i>
                </div>
                <button onClick={toggleNav} className='w-[40px] h-[40px] bg-[#dc4f72] text-white rounded'>
                  <i className={isNavVisible ? "fa-solid fa-bars text-lg" : "fa-solid fa-xmark text-lg"}></i>
                </button>
              </div>
              <ul className={`${isNavVisible ? "hidden" : `${isShowMenu}`} menu-mobile`}>
                {navItem.map((item, index) => {
                  return (
                    <li key={`item${index}`}>
                      <NavLink className={index === 0 ? "color-pink" : ""} to={`#${item.title}`}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
                <div className='h-[40px] w-[40px] flex justify-center items-center text-center rounded-full opacity-70 bg-[#F7F9FC] border-[1] border-[#eee] hover:opacity-100 cursor-pointer duration-300'>
                  <i className='fa-solid fa-magnifying-glass text-[#5a5a5a] duration-300'></i>
                </div>
                <div className='py-3'>
                  <button className='btnOutlineGlobal'>Schedule a Demo</button>
                </div>
              </ul>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
