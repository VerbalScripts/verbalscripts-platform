import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';

import FaqsPageTab from './components/FaqsPageTab';

export const metadata: Metadata = {
  title: 'Verbalscripts - Frequently asked Questions',

  keywords: [
    'transcription',
    'audio transcription',
    'video transcription',
    'speech to text',
    'academic transcription',
    'proofreading',
  ],
  description:
    'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

  openGraph: {
    type: 'website',
    url: 'https://verbalscripts.com',
    title: 'Verbalscripts - Frequently asked Questions',
    description:
      'We provide fast and affordable client-ready transcription services tailored to your needs through transcription, reviewing and proofreading.',

    siteName: 'Verbalscripts - 100% Human Transcription Services',
    images: [
      {
        url: 'https://verbalscripts.com/icons/logo-banner.jpg',
        secureUrl: 'https://verbalscripts.com/icons/logo-banner.jpg',
        alt: 'Verbalscripts - Frequently asked Questions',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://verbalscripts.com',
  },
};

export default function FAQsPage() {
  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative mx-auto max-w-7xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-20 md:px-20 lg:px-28'>
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
        <div className='flex flex-wrap  lg:flex-nowrap items-center gap-x-10 '>
          <div className='max-w-2xl md:max-w-4xl'>
            <h1 className='max-w-6xl lg:max-w-4xl xl:max-w-5xl relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
              Frequently Asked Questions
            </h1>
            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-100'>
              Explore our FAQs to learn how VerbalScripts can meet your
              transcription needs with precision, efficiency, and unmatched
              professionalism.
            </p>
            <div className='mt-5'>
                <a
                  href='/contact-us'
                  className='inline-flex flex-nowrap  items-center space-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span className='flex'>Contact Support</span>
                
                </a>
              </div>
          </div>
          <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
              <img
                src='/pics/faqs.jpg'
                className='w-[90%]  lg:max-w-[90%] lg:absolute object-cover -top-32'
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

      <div className='bg-white py-32 md:py-24 pb-20 md:pb-56'>
        <div className='mx-auto max-w-7xl relative'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
          <div className='absolute  right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

          <FaqsPageTab />
        </div>
      </div>

      <div className='bg-white relative isolate'>
        <div className='bg-indigo-600 relative overflow-hidden transition transform-gpu'>
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
        </div>
      </div>

      <div className='contact-section-bg py-16 md:py-24'>
        <div className='relative mx-auto max-w-7xl '>
          <div className='lg:absolute flex flex-wrap lg:flex-nowrap items-center space-y-10 md:space-y-0 space-x-10 py-10 md:py-16 left-6 right-6 mx-6 px-8 lg:px-16 lg:right-44 -top-60 lg:mx-auto bg-gray-200 rounded-xl'>
            <div className='md:max-w-md'>
              <p className='mt-2 text-3xl font-bold text-indigo-600 md:text-4xl'>
                Get Started ?
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-700'>
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum.
              </p>
            </div>

            <div className='flex space-x-2 md:space-x-5'>
              <a
                href='/upload-files'
                className='rounded-lg  px-5 py-2.5 text-md transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span>Contact us</span>
              </a>

              <a
                href='/upload-files'
                className='rounded-lg px-5 py-2.5 text-md transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
