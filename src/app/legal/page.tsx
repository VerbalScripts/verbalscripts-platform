import React from 'react';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { Metadata } from 'next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Verbalscripts - Legal',

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

const legal_documents = [
  {
    name: 'Verbalscripts Terms of Service',
    description:
      'Terms and restrictions that apply to everyone who visits Verbalscripts',
    href: '/legal/terms-of-service',
    imgUrl: '/legal/termsofservicecolored.png',
  },
  {
    name: 'Verbalscripts Privacy Policy',
    description:
      'Contains certain restrictions on use of verbalscripts products, services and websites',
    href: '/legal/privacy-policy',

    imgUrl: '/legal/privacypolicycolored.png',
  },
  {
    name: 'Transcriber NDA',
    description:
      'Contains certain restrictions on use of verbalscripts products, services and websites',
    href: '/legal/privacy-policy',

    imgUrl: '/legal/NDA.png',
  },
  {
    name: 'Client Confidentiality Agreement',
    description:
      'Contains certain restrictions on use of verbalscripts products, services and websites',
    href: '/legal/privacy-policy',

    imgUrl: '/legal/customerAgreement.png',
  },
];

export default function LegalPage() {
  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative mx-auto max-w-6xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-20 md:px-20 lg:px-28'>
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
        <div className=' '>
          <h1 className='relative z-10 text-5xl font-bold text-center  text-white lg:text-5xl xl:text-6xl'>
            Legal
          </h1>

          <p className='mt-5 text-xl  text-gray-200 text-center'>
            Find documentation related to our Website Terms of Use and Privacy
            Policy.
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

      <div className='bg-white '>
        <div className='mx-auto max-w-7xl relative py-32 md:py-24 pb-20 md:pb-56 px-6 md:px-24 lg:px-32'>
          <h1 className='relative z-10 text-2xl font-bold text-left  text-gray-800'>
            Legal Documents
          </h1>

          <div className='mt-16  sm:mt-20 lg:mt-24'>
            <dl className='grid mx-auto max-w-none   content-center grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16'>
              {legal_documents.map((document) => (
                <a
                  href={document.href}
                  key={document.name}
                  className='relative cursor-pointer flex flex-col justify-between py-8 px-4 rounded-3xl  shadow-sm bg-white border border-gray-300'
                >
                  <dt className='flex flex-col items-center '>
                    <Image
                      className='mb-5'
                      alt={document.name}
                      src={document.imgUrl}
                      height={110}
                      width={110}
                    />
                  </dt>
                  <span className='text-2xl  font-semibold leading-7 text-gray-900'>
                    {document.name}
                  </span>
                  <dd className='text-lg text-left mt-2 text-md leading-6 text-gray-600'>
                    {document.description}
                  </dd>
                  <div className='my-3 '>
                    <div
                      // className='flex items-center text-orange-500 font-semibold text-xl underline underline-offset-4'
                      className='flex flex-nowrap relative border-b border-indigo-600 group  py-1.5 px-2.5 text-indigo-600'
                    >
                      <span className='font-semibold'>Learn More</span>
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
                      <FontAwesomeIcon
                        className='ml-4 icon-vector w-6'
                        icon={faLongArrowRight}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
