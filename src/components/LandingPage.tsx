import React from 'react';

export default function LandingPage() {
  return (
    <div className='relative isolate px-6 lg:px-8 bg-indigo-500 '>
      {/* <video className='absolute top-0 right-0 left-0 w-full -z-20 h-full object-cover'  loop autoPlay>
        <source src="landing_prodution.mp4" type='video/mp4' />
      </video> */}
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

      <div className='mx-auto max-w-7xl  md:py-16 lg:py-28 xl:py-32 py-20 md:mx-10 lg:mx-20 xl:mx-28 flex flex-col items-start md:items-center  text-left lg:text-center'>
        <h1 className='max-w-6xl lg:max-w-4xl xl:max-w-5xl relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
          Transcription Mastery: Unmatched Accuracy & Effieciency, Every Time.
        </h1>
        <p className='hidden md:block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-xl leading-8 text-gray-50'>
          With you in mind always, we delivery accurate transcripts through our
          experienced transcriptionists. Count on us to alwsays exceed your
          expectations, project after project, at an affordable rate.
        </p>
        <div className='mt-10 flex flex-col md:flex-row items-start md:items-center justify-center gap-6'>
          <a
            href='/solutions'
            className='rounded-full bg-orange-500 px-12 py-3 text-2xl transition font-bold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
          >
            Solutions
          </a>
          <a
            href='/services'
            className='text-lg underline underline-offset-8 font-bold leading-6 text-white'
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
