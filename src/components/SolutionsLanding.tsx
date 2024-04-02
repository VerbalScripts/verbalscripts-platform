import React from 'react';

interface SolutionLandingProps {
  imgUrl: string;
  title: string;
  content: string;
  href: string;
}

export default function SolutionsLanding({
  title,
  content,
  imgUrl,
  href,
}: SolutionLandingProps) {
  return (
    <div className='relative bg-indigo-500 h-auto isolate px-6  lg:px-8'>
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
      <div className=' md:py-20 py-20 md:mx-10 lg:py-32  lg:mx-20'>
        <div className='max-w-xl text-left relative z-20'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            {title}
          </h1>

          <p className='mt-6 text-2xl leading-8 text-gray-100'>{content}</p>
          <div className='mt-10 flex flex-col md:flex-row items-start md:items-center justify-start gap-6'>
            <a
              href={href}
              className=' bg-orange-500 px-7 py-2.5 rounded-full  text-lg font-bold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Order Now
            </a>
          </div>
        </div>
        <div className=''>
          <img
            style={{
              clipPath:
                'polygon(74.1% 84.1%, 100% 81.6%, 97.5% 26.9%, 35.5% 0.1%, 60.7% 93%, 62.5% 32.5%, 60.2% 62.4%, 72.4% 68.1%, 47.5% 58.3%, 15.2% 24.5%, 57.5% 96.7%, 20.1% 94.9%, 77.9% 90%, 57.6% 76.8%, 76.1% 67.7%, 84.1% 64.1%)',
            }}
            className='z-10  absolute right-10 top-3 max-w-[50rem]'
            src={imgUrl}
            alt=''
          />
        </div>
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
    </div>
  );
}
