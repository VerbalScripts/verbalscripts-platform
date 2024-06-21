'use client';

import React from 'react';

export default function CallToActionBanner() {
  return (
    <div className='bg-white relative isolate' style={{ background: 'FAFAFA' }}>
      <div className='relative overflow-hidden transition transform-gpu'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 xl:px-14'>
          <div className='relative isolate py-24   px-6   sm:px-16 md:py-10  lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
            <div className='md:min-w-[28rem] lg:min-w-[30rem]  lg:mx-0 lg:flex-auto lg:py-24 lg:text-left'>
              <h2 className='text-4xl md:text-[2.8rem] font-bold leading-10 footer-title  text-white '>
                Ready to enhance your media production with Us?
              </h2>
              <p className='mt-6  text-xl leading-8 text-gray-600'>
                Contact us today to discuss your requirements and discover how
                our specialized transcription solutions can benefit your legal
                practice.
              </p>

              <div className='mt-10 flex items-center flex-wrap justify-center gap-6 lg:justify-start'>
                <a
                   href='/get-a-quote'
                  className='rounded-xl btn-vlg px-7 py-2.5 text-lg font-semibold text-white transition focus:ring-4 focus:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Get a Qoute
                </a>
              </div>
            </div>
            <div className='hidden lg:block relative mt-16 h-80 lg:-mt-8 pr-10'>
              <img
                className='lg:w-[28rem] xl:w-[32rem] max-w-none'
                src='/legal_industry/call-to-action.jpg'
                alt='Ready to Succeed with our transcription service'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
