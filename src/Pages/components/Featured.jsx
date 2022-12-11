import React from "react";
import { NavLink } from "react-router-dom";
import { Background } from "../assets/images/headerImages";

const Featured = () => {
  return (
    <section className='relative overflow-hidden bg-gray-800 pt-20 pb-28 sm:py-32'>
      <img
        src={Background}
        alt=''
        className='absolute rotate-90 blur-lg opacity-40 backdrop-brightness-90 top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]'
      />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
        <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
          <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl'>
            Everything you need to run your Organization.
          </h2>
          <p className='mt-6 text-lg tracking-tight text-blue-100'>
            Understand the workflow of your organization, track progress and
            minimize backlogs with our help.
          </p>
        </div>
        <div className='mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'>
          <div className='-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
            <div
              className='relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'
              role='tablist'
              aria-orientation='vertical'>
              <div className='group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'>
                <h3>
                  <NavLink className='font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-600 lg:text-white'>
                    <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl'></span>
                    Payroll
                  </NavLink>
                </h3>
                <p className='mt-2 hidden text-sm lg:block text-white'>
                  Keep track of everyone's salaries and whether or not they've
                  been paid. Direct deposit not supported.
                </p>
              </div>
              <div className='group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5'>
                <h3>
                  <button
                    className='font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white'
                    id='headlessui-tabs-tab-:R2ja9m:'
                    role='tab'
                    type='button'
                    aria-selected='false'
                    tabindex='-1'
                    data-headlessui-state=''
                    aria-controls='headlessui-tabs-panel-:Rla9m:'>
                    <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl'></span>
                    Claim expenses
                  </button>
                </h3>
                <p className='mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white'>
                  All of your receipts organized into one place, as long as you
                  don't mind typing in the data by hand.
                </p>
              </div>
              <div className='group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5'>
                <h3>
                  <button
                    className='font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white'
                    id='headlessui-tabs-tab-:R2ra9m:'
                    role='tab'
                    type='button'
                    aria-selected='false'
                    tabindex='-1'
                    data-headlessui-state=''
                    aria-controls='headlessui-tabs-panel-:Rta9m:'>
                    <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl'></span>
                    VAT handling
                  </button>
                </h3>
                <p className='mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white'>
                  We only sell our software to companies who don't deal with VAT
                  at all, so technically we do all the VAT stuff they need.
                </p>
              </div>
              <div className='group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5'>
                <h3>
                  <button
                    className='font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white'
                    id='headlessui-tabs-tab-:R33a9m:'
                    role='tab'
                    type='button'
                    aria-selected='false'
                    tabindex='-1'
                    data-headlessui-state=''
                    aria-controls='headlessui-tabs-panel-:R15a9m:'>
                    <span className='absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl'></span>
                    Reporting
                  </button>
                </h3>
                <p className='mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white'>
                  Easily export your data into an Excel spreadsheet where you
                  can do whatever the hell you want with it.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:col-span-7'></div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
