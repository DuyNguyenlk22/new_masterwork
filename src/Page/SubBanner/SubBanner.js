import React from "react";
import "./subBanner.scss";

export default function SubBanner() {
  return (
    <section className='subBanner'>
      <div className='container'>
        <div className='subBanner__Content max-w-[550px] text-white'>
          <div>
            <h2 className=' text-[30px] font-bold'>
              We are true to ourselves, and commit <br />
              to always perform at our best.
            </h2>
            <p className='mt-6 mb-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, doloribus atque. Corrupti exercitationem
              voluptatem ipsum iste consequuntur et vitae voluptas temporibus?
              Maxime dolores amet voluptatum illo consequatur placeat fugit
              ducimus.
            </p>
            <button className='px-[30px] py-[18px] text-sm font-bold rounded-md bg-white text-[#212529] hover:bg-[#e2e6ea] duration-300'>
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
