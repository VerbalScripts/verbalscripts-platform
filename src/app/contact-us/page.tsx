'use client';

import React, { useEffect, useRef } from 'react';

import { useState } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import GetAQuoteModal from '@/components/GetAQuoteModal';

export default function Home() {
  const [heightOffset, setOffsetHeight] = useState(0);
  // open slide over
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const callToActionObserver = new IntersectionObserver(
      (sections) => {
        sections.forEach((section) => {
          if (section.isIntersecting) {
            // document
            //   .querySelector('.call-to-action')
            //   ?.classList.add( 'animate-call' );
            console.log('down');
          } else {
            console.log('slide up');
            // document.querySelector( '.call-to-action' )?.classList.remove('animate-call')
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    const el = document.querySelector('.landing-page');
    if (el) callToActionObserver.observe(el);
  });

  const onBodyScroll = (event: React.UIEvent<HTMLElement>) => {
    setOffsetHeight((event.target as HTMLElement).scrollTop);
  };

  const solutions = useRef<Array<NavLabel>>([]);

  return (
    <div
      className='bg-zinc-800 max-h-screen overflow-y-scroll overflow-x-hidden relative'
      onScroll={onBodyScroll}
    >
      <AppHeader
        showQuote={setOpen}
        dataPush={solutions}
        heightOffset={heightOffset}
      />

      <div className='relative bg--600 h-auto isolate px-6 lg:px-8 bg-indigo-500 landing-page'>
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
        <div className='max-w-7xl md:py-20 py-20 md:mx-10 lg:mx-20 xl:mx-28 flex flex-col items-center text-center'>
          <h1 className='max-w-6xl lg:max-w-4xl xl:max-w-5xl relative z-10 text-5xl font-bold  text-white lg:text-5xl xl:text-6xl'>
            Contact Us
          </h1>
          <p className='md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-xl leading-8 text-gray-100'>
            How can we help you?.
          </p>
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

      <GetAQuoteModal open={open} setOpen={setOpen} />

      <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div
          className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
          aria-hidden='true'
        >
          <div
            className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='mx-auto max-w-4xl lg:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}

            <p className='mx-auto max-w-2xl mt-6 text-xl leading-8 text-gray-600'>
              Fill the information below and we will help solve issues as best
              as we can.
            </p>
          </div>
        </div>
        <form
          action='#'
          method='POST'
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='first-name'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                First name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last-name'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Last name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Company (optional)
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='company'
                  id='company'
                  autoComplete='organization'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='phone-number'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Phone number (optional)
              </label>
              <div className='relative mt-2.5'>
                <div className='absolute inset-y-0 left-0 flex items-center'>
                  <label htmlFor='country' className='sr-only'>
                    Country
                  </label>
                  <select
                    id='country'
                    name='country'
                    className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </div>
                <input
                  type='tel'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='tel'
                  className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-md font-semibold leading-6 text-gray-900'
              >
                Message
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <button
              type='submit'
              className='rounded-full bg-indigo-600 px-8 py-3.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Let{"'"}s talk
            </button>
          </div>
        </form>
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
          <div className='mx-auto  xl:max-w-full px-6 lg:px-8 xl:px-14'>
            <div className='relative isolate py-24   px-6   sm:px-16 md:py-10  lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='mx-auto  max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                <h2 className='text-5xl font-bold  text-white '>
                  Ready to succeed with our Transcription Solutions
                </h2>
                <p className='mt-6 text-xl leading-8 text-gray-100'>
                  Click the order now button to get started today or request a
                  quote if your project is complex.
                </p>
                <div className='mt-10 flex items-center flex-wrap justify-center gap-6 lg:justify-start'>
                  <a
                    href='#'
                    className='text-xl font-semibold leading-6 text-white px-8 py-3.5 ring-1  ring-gray-200 rounded-full transition hover:-translate-y-1 hover:shadow-2xl'
                  >
                    Order Now
                  </a>
                  <button
                    onClick={() => setOpen(true)}
                    className='rounded-full bg-orange-500 px-8 py-3.5 text-xl font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Get a Qoute
                  </button>
                </div>
              </div>
              <div className='hidden lg:block relative mt-16 h-80 lg:-mt-8 pr-10'>
                <img
                  className=' w-[32rem] max-w-none'
                  src='transcription-service.webp'
                  alt='Ready to Succeed with our transcription service'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
