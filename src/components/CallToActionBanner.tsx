import React from 'react';

interface CallToActionBannerProps {
  fn: (arg0: boolean) => void;
}

export default function CallToActionBanner({ fn }: CallToActionBannerProps) {
  return (
    <div className='bg-white relative isolate'>
      <div className='bg-indigo-500 relative overflow-hidden transition transform-gpu'>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
          aria-hidden='true'
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
            fillOpacity='0.7'
          />
          <defs>
            <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
              <stop stopColor='#7775D6' />
              <stop offset={1} stopColor='#E935C1' />
            </radialGradient>
          </defs>
        </svg>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 xl:px-14'>
          <div className='relative isolate py-24   px-6   sm:px-16 md:py-10  lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
            <div className='md:min-w-[28rem] lg:min-w-[30rem]  lg:mx-0 lg:flex-auto lg:py-24 lg:text-left'>
              <h2 className='text-4xl md:text-[2.8rem] font-bold leading-10  text-white '>
                Are you ready to Succeed with our Transcription Service
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-100'>
                Click the order now button to get started today or request a
                quote if your project is complex.
              </p>
              <div className='mt-10 flex items-center flex-wrap justify-center gap-6 lg:justify-start'>
                <a
                  href='/upload-files'
                  className='text-xl font-semibold leading-6 text-white px-7 py-2.5 ring-2  focus:ring-4 focus:ring-indigo-300  ring-gray-200 rounded-full transition  hover:text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Order Now
                </a>
                <button
                  onClick={() => fn(true)}
                  className='rounded-full bg-orange-500 px-7 py-2.5 text-lg font-semibold text-white transition focus:ring-4 focus:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Get a Qoute
                </button>
              </div>
            </div>
            <div className='hidden lg:block relative mt-16 h-80 lg:-mt-8 pr-10'>
              <img
                className='lg:w-[28rem] xl:w-[32rem] max-w-none'
                src='transcription-service.webp'
                alt='Ready to Succeed with our transcription service'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
