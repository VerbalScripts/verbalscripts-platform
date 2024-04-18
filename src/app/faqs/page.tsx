'use client'

import React from 'react';

import {
  ArrowPathIcon,
  LockClosedIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import LogoSlider from '@/components/LogoSlider';

export default function FAQsPage() {
  const features = [
    {
      name: 'Transcribe with High Accuracy',
      description:
        'Turn any audio to text with industry leading accuracy and the best transcription models on the market.',
      icon: LockClosedIcon,
      imgUrl: 'confidential',
    },
    {
      name: 'One Click Submission and Fast Processing',
      description:
        'Simply give a us a link or upload your file and your will be ready in a matter of minutes',
      icon: ArrowPathIcon,
      imgUrl: 'compliant',
    },
    {
      name: 'Affordable Solutions',
      description:
        'The quality and workflow we have built enable us to deliver the highest quality data consistently at low prices.',
      icon: CurrencyDollarIcon,
      imgUrl: 'affordable',
    },
  ];

  const TrustedClients = [
    {
      name: 'Transistor',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
    },
    {
      name: 'Reform',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      name: 'Tuple',
      imgUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
    },
    {
      name: 'Savvycal',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
    },
    {
      name: 'Statamic',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

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
            Frequently Asked Questions
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

      <div className=' py-32 md:py-10' style={{ backgroundColor: '#f9f8f2' }}>
        <div className='mx-auto max-w-7xl xl:max-w-8xl px-6 lg:px-8 xl:px-10'>
          {/* <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
            Trusted by the world’s most innovative teams
          </h2> */}
          <div className='mx-auto   sm:max-w-xl  lg:mx-0 lg:max-w-none'>
            <LogoSlider partners={TrustedClients} />
          </div>
          {/* <div className='mx-auto mt-10 grid  grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 '>
           
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'
              alt='Tuple'
              width={158}
              height={48}
            />
          
          </div> */}
        </div>
      </div>

      <div className='bg-white py-32 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl lg:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
            <p className='mt-2 text-5xl font-bold  text-gray-900'>
              Benefits of Choosing VerbalScripts
            </p>
            <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
              Why we are the best platform for transcription to improve your
              speed, privacy and quality service.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-8xl'>
            <dl className='grid max-w-full grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative py-8 px-5 rounded-xl shadow-sm'
                  style={{ backgroundColor: '#f9f8f2' }}
                >
                  <dt className='flex flex-col items-center text-base font-semibold leading-7 text-gray-900'>
                    <div className='mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-500'>
                      <feature.icon
                        className='h-10 w-10 text-white'
                        aria-hidden='true'
                      />
                    </div>
                    <span className='text-2xl text-center'>{feature.name}</span>
                  </dt>
                  <dd className='text-lg text-left mt-2 text-md leading-6 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
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
                    onClick={() => {}}
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
