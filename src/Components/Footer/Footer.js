import React from "react";
import "./footer.scss";
import { dataIconFooter } from "../../Data/dataFooter";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className='footer__content py-12 bg-[#F7F9FC]'>
        <div className='container'>
          <div className='footer__top'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2'>
                <div className=''>
                  <h3 className='text-xl mb-[30px] font-bold'>Meta</h3>
                  <ul className='space-y-4'>
                    <li>Log In</li>
                    <li>Entries Feed</li>
                    <li>Comments Feed</li>
                    <li>WordPress.Org</li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='text-xl mb-[30px] font-bold'>Categories</h3>
                  <ul className='space-y-4'>
                    <li>Business</li>
                    <li>Design</li>
                    <li>Industry</li>
                    <li>Programming</li>
                  </ul>
                </div>
                <div className=''>
                  <h3 className='text-xl mb-[30px] font-bold'>Archives</h3>
                  <ul className='space-y-4'>
                    <li>March 2021</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className='text-xl mb-[30px] font-bold'>Newsletter</h3>
                <div className='letter-box p-8 bg-white shadow-xl rounded'>
                  <h4 className='text-lg'>Get latest updates and offers.</h4>
                  <div className='form-sign'>
                    <div className='flex mt-8 mb-5'>
                      <input
                        type='email'
                        placeholder='Email Address'
                        className='w-[85%] px-5 py-3 rounded bg-[#F7F9FC] mr-4 color-title outline-none'
                      />
                      <button className='btnGlobal'>GO</button>
                    </div>

                    <p className='mt-3' style={{ marginBottom: 0 }}>
                      Sign up for our latest news &amp; articles. We won’t give you spam mails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer__bottom flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center mt-8 py-10 border-t-2 border-t-[#eee]'>
            <div className='right text-center w-full lg:w-1/2 lg:text-left  mb-5 lg:mb-0'>
              © 2023 Masterwork. All Rights Reserved | WordPress Theme by
              <a href='https://w3layouts.com/'> W3Layouts.</a>
            </div>
            <div className='left space-x-8'>
              {dataIconFooter.map((item, index) => {
                return (
                  <NavLink key={index}>
                    <i className={item.iconName} />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
