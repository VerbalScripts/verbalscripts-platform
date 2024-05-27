import React from 'react';

export default function LandingPage() {
  return (
    <div className='home-landing-page '>
      {/* <video className='absolute top-0 right-0 left-0 w-full -z-20 h-full object-cover'  loop autoPlay>
        <source src="landing_prodution.mp4" type='video/mp4' />
      </video> */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8 relative overflow-hidden home-landing-page-w'>
        <div className='landing-page-video-wrapper'></div>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className=' py-20 md-py-0   lg:min-h-[40rem]  md:mx-10 lg:mx-20 xl:mx-28 flex flex-col items-start  md:items-center  text-left lg:text-center'>
          <h1 className='max-w-6xl lg:max-w-5xl xl:max-w-7xl relative z-10 text-5xl font-bold  text-gray-800 md:text-gray-900 lg:text-5xl xl:text-6xl'>
            Transcription <span className='footer-title'>Mastery</span>:
            Unmatched Accuracy & Efficiency, Every Time.
          </h1>
          <p className='hidden md:block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-xl font-semibold leading-7 text-gray-800'>
            With you in mind always, we delivery accurate transcripts through
            our experienced transcriptionists. Count on us to always exceed your
            expectations, project after project, at an affordable rate.
          </p>
        </div>

        <div className=' min-h-[120px] lg:min-h-0'></div>

        <div className='absolute -bottom-10 -right-44 hidden lg:block'>
          <img
            src='./Home/istockphoto-1464547973-612x612.jpg'
            className='w-96 rounded-xl object-cover'
            alt=''
          />
        </div>
        <div className='absolute -bottom-10 left-1/3 hidden lg:block'>
          <img
            src='./Home/shutterstock_1441872764_1024.jpg'
            className='w-[26rem] rounded-xl object-cover'
            alt=''
          />
        </div>
        <div className='absolute -bottom-5 -left-[220px] hidden lg:block'>
          <img
            src='./Home/legal.jpeg'
            className='w-2/6 rounded-xl object-cover'
            alt=''
          />
        </div>
        <div className=' bg-red-100 h-[150px] absolute bottom-0 left-0 right-0  lg:hidden block'>
          <img
            src='./Home/legal-banner.jpg'
            className='absolute right-0 left-0 top-0 bottom-0'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
