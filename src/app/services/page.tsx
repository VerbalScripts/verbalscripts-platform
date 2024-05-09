import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';
import SolutionsList from '@/components/SolutionsList';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  // const features = [
  //   {
  //     name: 'First Draft',
  //     features: [
  //       '-98% accuracy',
  //       'Average next day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '0.79$ per minute',
  //   },
  //   {
  //     name: 'Standard',
  //     features: [
  //       '99% accuracy guaranteed',
  //       '1-3 business day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '1.25$ per minute',
  //   },
  //   {
  //     name: 'Verbatin',
  //     features: [
  //       'Every utterance captured',
  //       '2-5  business day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '2.00$ per minute',
  //   },
  // ];

  return (
    <div className='bg-zinc-800 max-h-screen overflow-y-scroll relative'>
      <AppHeader />

      <div className='relative bg-white h-auto  px-6 py-20 md:pt-0  pb-40 md:py-32 lg:py-36 md:px-20 lg:px-28'>
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
        <div className='flex flex-wrap  md:flex-nowrap items-center gap-x-10 '>
          <div className='max-w-2xl md:max-w-3xl'>
            <h1 className='text-4xl font-bold capitalize tracking-tight text-gray-800 sm:text-5xl'>
              Service we offer
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              At VerbalScripts, precision meets efficiency as we transform
              spoken content into clear, accessible text, empowering your
              projects with accuracy and ease.Explore our diverse transcription
              services below.
            </p>

            <div className='mt-10'>
              <a
                href='/upload-files'
                className='inline-flex flex-nowrap  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Order Now</span>
                <FontAwesomeIcon className='ml-2 w-5' icon={faLongArrowRight} />
              </a>
            </div>
          </div>
          <div className='hidden md:block md:min-w-[20rem] lg:min-w-[30rem]'>
            <img src='/table-coffee.jpg' className='' alt='' />
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

      <div className='bg-gray-100 py-0'>
        <PopularPartner />
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-x-6'>
            <div className='md:min-w-[25rem] lg:min-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What Makes Our Transcription Services Stand Out?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Discover Seamless <br></br> Transcription <br></br>
                <span className='relative z-10'>
                  Services.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                Looking for accuracy, efficiency, and a friendly team? Look no
                further. With VerbalScripts, you{"'"}re not just getting
                transcriptions; you{"'"}re getting peace of mind. Our
                professionals ensure every detail is captured, every time.
              </p>
              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Explore Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-14 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='mx-auto max-w-2xl lg:text-center '>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
            <p className='text-3xl font-bold  text-gray-800 sm:text-4xl'>
              Popular Industries We Serve
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>
        </div>
        <SolutionsList />
      </div>

      <AppFooter />
    </div>
  );
}
