import React from "react";
import { Banner } from "../assets/images/headerImages";
import LogoBanner from "../assets/svg/LogoBanner";

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32'>
      <h1 className='mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl leading-tight lg:leading-tight'>
        Take back control of your Organization with {"  "}
        <LogoBanner
          className={
            "inline lg:block h-12 lg:h-16 my-3 mx-auto  fill-emerald-600"
          }
        />
      </h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700'>
        Most CRM software is accurate, but hard to use. We make it simple so,
        you don't have to make any more compromises.
      </p>
      <div class='mt-16 flex justify-center gap-x-6'>
        <a
          class='group inline-flex items-center justify-center rounded-full py-4 px-6 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900'
          href='/register'>
          Get a free trial
        </a>
        <a
          class='group inline-flex ring-1 items-center justify-center rounded-full py-4 px-6  focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <svg
            aria-hidden='true'
            class='h-3 w-3 flex-none fill-blue-600 group-active:fill-current'>
            <path d='m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z'></path>
          </svg>
          <span class='ml-3'>Watch video</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
