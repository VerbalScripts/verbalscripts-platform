import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';
import { classNames } from '@/utils/classNames';

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

  const servies: Array<NavLabel> = [
    {
      name: 'General Transcription',
      description:
        'Accurate transcriptions for a variety of content, perfect for meetings, seminars, and more.',
      href: '/services/general',
      imgUrl: '/services/general.jpg',
    },
    {
      name: 'Legal Transcription',
      description:
        'Precise documentation for legal proceedings, ensuring clarity and compliance.',
      href: '/services/legal',
      imgUrl: '/services/legal.jpg',
    },
    {
      name: 'Video & Audio Transcription',
      description:
        'Transcriptions for multimedia content, including videos, podcasts, and recordings.',
      href: '/services/vide&audio',
      imgUrl: '/services/video-audio.jpg',
    },
    {
      name: 'Focus Groups & Interviews',
      description:
        'Comprehensive transcriptions for focus groups, interviews, and qualitative research.',
      href: '/services/interviews',
      imgUrl: '/services/focus-groups.jpg',
    },
    {
      name: 'Medical Transcription',
      description:
        'Detailed transcriptions for medical professionals, maintaining confidentiality and accuracy.',
      href: '/services/medical',
      imgUrl: '/services/medical.jpg',
    },

    {
      name: 'Academic & Conference Transcription',
      description:
        'Thorough transcriptions for academic lectures, conferences, and presentations.',
      href: '/services/academic',
      imgUrl: '/services/academic.jpg',
    },
  ];
  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative bg-white h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-24 md:px-20 lg:px-28'>
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
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-4xl'>
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
          <div className='md:min-w-[20rem] lg:max-w-[30rem]'>
            <img src='/services/services-landing.jpg' className='' alt='' />
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
                Discover{' '}
                <span className='relative z-10'>
                  Seamless{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
                Transcription Services.
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
        <div className='mt-16 md:mt-20 xl:mt-20'>
          <dl className='mx-auto grid  pt-10 lg:pt-0 max-w-none px-6 md:px-16 lg:px-20 xl:px-28 grid-cols-1 gap-y-5 lg:gap-20  lg:max-w-7xl xl:max-w-7xl'>
            {[...servies].map((feature, index) => (
              <div
                key={feature.name}
                className={classNames(
                  'relative  flex flex-wrap lg:flex-nowrap items-center justify-between bg-white  transition-all',
                )}
              >
                <div
                  className={classNames(
                    'overflow-hidden rounded-xl max-w-lg',
                    index % 2 == 0 ? 'lg:order-2' : '',
                  )}
                >
                  <img
                    className='mb-5 h-full w-full object-contain transition duration-300 ease-in-out hover:scale-110'
                    alt={feature.name}
                    src={feature.imgUrl}
                  />
                </div>
                <div
                  className={classNames(
                    'flex flex-col items-start space-y-5 py-8 px-4',
                    index % 2 == 0 ? 'lg:items-start' : 'lg:items-end',
                  )}
                >
                  <span
                    className={classNames(
                      'text-4xl text-left font-bold leading-snug text-gray-900',
                      index % 2 == 0 ? 'lg:text-left' : 'lg:text-right',
                    )}
                  >
                    {feature.name}
                  </span>
                  <span
                    className={classNames(
                      'text-lg text-left  leading-7 text-gray-700 line-clamp-4',
                      index % 2 == 0 ? 'lg:text-left' : 'lg:text-right',
                    )}
                  >
                    {feature.description}
                  </span>

                  <span className='my-3 '>
                    <a
                      href={feature.href}
                      // className='flex items-center text-orange-500 font-semibold text-xl underline underline-offset-4'
                      className='flex flex-nowrap relative border border-indigo-600 group  py-1.5 px-2.5 text-indigo-600'
                    >
                      <span className='font-semibold'>Learn More</span>
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
                      <FontAwesomeIcon
                        className='ml-4 icon-vector w-6'
                        icon={faLongArrowRight}
                      />
                    </a>
                  </span>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
