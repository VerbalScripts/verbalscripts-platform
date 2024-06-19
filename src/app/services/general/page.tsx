import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';
import FeatureCard from '@/components/FeatureCard';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  const audio_features = [
    {
      title: 'Accuracy',
      description:
        'We guarantee precise transcriptions, capturing every word with clarity.',
    },
    {
      title: 'Efficiency',
      description:
        ' Our streamlined process ensures quick turnaround times without compromising quality.',
    },
    {
      title: 'Flexibility',
      description:
        'Whether you have a single file or ongoing transcription needs, we adapt to your requirements.',
    },
    {
      title: 'Confidentiality',
      description:
        '  Your content is handled with the utmost confidentiality and security measures in place.',
    },
    {
      title: 'Accessibility',
      description:
        'Transcripts provide easy access to your content for reference and analysis.',
    },
    {
      title: 'Professionalism',
      description:
        ' Our expert team ensures a polished and professional transcription of your audio files.',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='landing-page-alt'>
        <div className='relative mx-auto max-w-7xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-24 md:px-20 lg:px-28'>
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
              <h1 className='text-4xl font-bold capitalize tracking-tight text-gray-800 sm:text-5xl'>
                General Transcription
              </h1>

              <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
                At VerbalScripts, precision meets efficiency as we transform
                spoken content into clear, accessible text, empowering your
                projects with accuracy and ease.Explore our diverse
                transcription services below.
              </p>

              <div className=' mt-10 max-w-[18rem] '>
                <div className='px-4 border-l-4 secondary-border bg-white py-3 rounded-tr-2xl'>
                  <div className='text-gray-700 font-semibold '></div>
                  <div className='text-gray-700 font-semibold mb-3 space-y-2'>
                    <div>
                      <span className='py-1.5 px-3 bg-gray-300 text-sm rounded-full'>
                        100% Human Transcribed
                      </span>
                    </div>

                    <div>
                      From{' '}
                      <span className='footer-title text-2xl font-bold my-2'>
                        $ 0.75
                      </span>{' '}
                      per minute
                    </div>
                    <div>98%+ accuracy</div>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <a
                  href='/upload-files'
                  className='inline-flex flex-nowrap  items-center space-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span className='flex'>Order Now</span>
                  <FontAwesomeIcon
                    className='ml-2 w-5'
                    icon={faLongArrowRight}
                  />
                </a>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
              <img
                src='/general/work-remotely.png'
                className='max-w-[90%]  lg:absolute object-cover -top-60'
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
      </div>

      <div className='bg-gray-100 py-0 '>
        <PopularPartner />
      </div>

      <div className='bg-white'>
        <div className='mx-auto  max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-1  gap-y-12  pb-12'>
            <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6  md:px-8 md:py-10'>
              <div className='md:order-2'>
                <img
                  src='/general/grammer-correction.png'
                  className='lg:max-w-[30rem] rounded-sm object-cover'
                  alt=''
                />
              </div>
              <div className='px-8'>
                <h2 className='text-xl font-bold leading-7 capitalize text-orange-500'>
                  What are the benefits
                </h2>
                <div className='mb-5 text-left capitalize text-3xl md:text-3xl text-gray-900  font-bold mt-5'>
                  Unlocking The power of spoken words
                </div>

                <div className='text-gray-600 text-left capitalize'>
                  General transcription effortlessly converts spoken words into
                  written text, catering to diverse needs across industries.
                  From meetings to interviews, it offers clear and precise
                  documentation, enhancing accessibility and collaboration. With
                  its adaptability and universal applicability, it{"'"}s an
                  essential tool for driving insights and fostering
                  communication.
                </div>
                <div className='mt-5 text-left'>
                  <a
                    href='/upload-files'
                    className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-5 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                  >
                    <span>Order Now</span>
                    <FontAwesomeIcon
                      className='ml-4 w-5'
                      icon={faLongArrowRight}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6  md:px-8 md:py-10'>
              <div className=''>
                <img
                  src='/general/work-remotely.png'
                  className='lg:max-w-[30rem] rounded-sm object-cover'
                  alt=''
                />
              </div>
              <div className='px-8'>
                <h2 className='text-xl font-bold leading-7 capitalize text-orange-500'>
                  What is Our Approach?
                </h2>
                <div className='mb-5 text-left capitalize text-3xl md:text-3xl text-gray-900  font-bold mt-5'>
                  Crafting Clarity & Precision in Every Word
                </div>

                <div className='text-gray-600 text-left capitalize'>
                  At VerbalScripts, we employ skilled transcriptionists who
                  meticulously transcribe your audio files, ensuring accuracy
                  and attention to detail. Our team is equipped to handle
                  diverse accents, technical terminology, and challenging audio
                  conditions to deliver high-quality transcriptions.
                </div>
                <div className='mt-5 text-left'>
                  <a
                    href='/upload-files'
                    className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-5 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                  >
                    <span>Order Now</span>
                    <FontAwesomeIcon
                      className='ml-4 w-5'
                      icon={faLongArrowRight}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-24' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div>
            <h2 className='text-xl font-bold leading-7 capitalize text-indigo-600'>
              What are the benefits
            </h2>
            <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
              Enhancing Your Content, Every Word, Every Time
            </p>
          </div>
          <div className='relative my-10'>
            <img
              src='/general/general-banner.jpg'
              className=' object-cover w-full rounded-xl  h-[13rem]'
              alt=''
            />
          </div>

          <div className='my-10'>
            <div className='grid max-w-none  grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-2 lg:gap-10'>
              {audio_features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />

      <AppFooter />
    </div>
  );
}
