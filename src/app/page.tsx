import React from 'react';

import Image from 'next/image';

import AppHeader from '@/components/AppHeader';
import LandingPage from '@/components/LandingPage';
import AppFooter from '@/components/AppFooter';
import Testimonials from '@/components/Testimonials';
import PopularPartner from '@/components/PopularPartner';

import type { Metadata } from 'next';
import SolutionsList from '@/components/SolutionsList';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Script from 'next/script';
import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title:
    'VerbalScripts | Fast, affordable, and highly accurate human transcription',
  keywords: [
    'transcription',
    'audio transcription',
    'video transcription',
    'speech to text',
    'academic transcription',
    'proofreading',
  ],
  description:
    'VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.',
};

export default function Home() {
  const testimonials: Array<Testimony> = [
    {
      description:
        ' VerbalScripts has done a terrific job in helping us meet a tight deadline for a demanding client. They helped us tailor the transcripts to our particular needs, and were always available, helpful and patient.”',
      name: 'Limor Hochberg',
      imageUrl: '/testimonials/1.png',
      occupation: 'UL',
    },
    {
      description:
        ' “We used VerbalScripts for transcripts and the quality has been great. Turnaround speed is fast and the process to upload files is very simple. Very responsive.”',
      name: 'Bart Langton',
      imageUrl: '/testimonials/2.png',
      occupation: 'Ipsos',
    },
    {
      description:
        " “It's been a great experience working with VerbalScripts. Their transcription is the best quality for the cheapest price. They worked with us to create a business rate and the quality was great.”",
      name: 'Angel Cruz',
      imageUrl: '/testimonials/3.png',
      occupation: 'Datu Research',
    },
    {
      description:
        " “It's been a great experience working with VerbalScripts. Their transcription is the best quality for the cheapest price. They worked with us to create a business rate and the quality was great.”",
      name: 'Angel Cruz',
      imageUrl: '/testimonials/4.png',
      occupation: 'Datu Research',
    },
    {
      description:
        " “It's been a great experience working with VerbalScripts. Their transcription is the best quality for the cheapest price. They worked with us to create a business rate and the quality was great.”",
      name: 'Angel Cruz',
      imageUrl: '/testimonials/5.png',
      occupation: 'Datu Research',
    },
  ];

  const features = [
    {
      name: 'Precise Transcription',
      description:
        'We ensure accurate transcription delivered on time by transcribing, reviewing and profreading',

      imgUrl: '/icons/accuracy.png',
    },
    {
      name: 'One Click Submission',
      description:
        'Simply give a us a link or upload your file and your will be ready to start working on it in a matter of minutes',

      imgUrl: '/Home/upload.png',
    },
    {
      name: 'Affordable Solutions',
      description:
        'The quality and workflow we have built enable us to deliver the highest quality transcripts concistency at the best industry rates',

      imgUrl: '/Home/affordable.png',
    },
  ];

  // const handleMinimize = () => {
  //   tawkMessengerRef.current.minimize();
  // };

  return (
    <div className=' relative bg-zinc-800'>
      {/* <NextSeo
        defaultTitle='VerbalScripts: Fast; Accurate Human Transcription Services'
        title='VerbalScripts: Fast; Accurate Human Transcription Services'
        description='VerbalScripts offers fast, affordable, and highly accurate human transcription, translation, data annotation, and AI dataset services customized for your needs.'
        canonical='https://www.verbalscripts.com/'
      /> */}

      <Script
        src='//code.tidio.co/c85xnh9sahm0ijtezx6yvkixt4hq3aul.js'
        strategy='lazyOnload'
      />

      <AppHeader />
      <LandingPage />

      <div className='bg-white py-0'>
        <div className='relative mx-auto max-w-7xl'>
          <div className='absolute  -top-16 left-10 md:left-28 lg:left-36 mt-10 flex  items-start md:items-center justify-center space-x-6'>
            <a
              href='/services'
              className='rounded-lg btn-vlg px-6  md:px-12 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
            >
              Services
            </a>
            <a
              href='/industries'
              className='rounded-lg btn-vlg px-6  md:px-12 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
            >
              Industries
            </a>
          </div>
          <PopularPartner />
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#f9f8f2' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why <span className='text-gray-800'>Verbal</span>Scripts
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                We transcribe with Precision and{' '}
                <span className='relative z-10'>
                  Professionalism.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                We are the best platform for accelerated speed, enhanced
                privacy, top-notch quality, and cost effective-solution;
              </p>
              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Order Now</span>
                  <FontAwesomeIcon
                    className='ml-4 w-6'
                    icon={faLongArrowRight}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-16  sm:mt-20 lg:mt-24'>
            <dl className='grid max-w-none   content-center grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative py-8 px-4  shadow-sm bg-white border-t border-b-4 border-indigo-600'
                >
                  <dt className='flex flex-col items-center text-base font-semibold leading-7 text-gray-900'>
                    <Image
                      className='mb-5'
                      alt={feature.name}
                      src={feature.imgUrl}
                      height={110}
                      width={110}
                    />
                    <span className='text-[1.35rem] text-center'>
                      {feature.name}
                    </span>
                  </dt>
                  <dd className='text-lg text-center mt-2 text-md leading-6 text-gray-600'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div
        className='relative py-16 md:py-20 lg:py-14'
        style={{ background: '#FAFAFA' }}
      >
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
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center  gap-x-6'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-semibold capitalize leading-7 secondary-text'>
                What Services We Offer
              </h2>
              <p className='mt-2 text-4xl md:text-5xl capitalize  font-bold text-left text-gray-900 section-title'>
                Transcription Needs ? Meet out{' '}
                <span className='relative z-10'>
                  exceptional{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                Services
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                The way we think about data is changing; and now more than ever
                industry leaders are counting on accurate, reliable
                transcription and data annotation for their business.
                <br />
                <br />
                By delivering the Gold standard for transcription, VerbalScripts
                is the best partner to meet your industry needs. Our services
                can be tailored to meet unique formatting or project
                requirements you may need.
              </p>
            </div>
          </div>
        </div>

        <SolutionsList />
      </div>
      {/* testimonials */}
      <Testimonials testimonials={testimonials} />
      {/* validation section */}

      <div className='bg-white'>
        <div className='pt-3 pb-20 px-6 md:pt-20 md:pb-20 lg:px-8'>
          <div className='mx-auto max-w-3xl text-left md:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
            <p className='mt-2 text-4xl md:text-5xl font-bold  secondary-text'>
              4-step Process for Concistent Results
            </p>
            <p className='mx-auto max-w-2xl mt-6 text-xl leading-8 text-gray-600'>
              Human driven transcription process.
            </p>
          </div>
          <div className='mx-auto max-w-7xl py-20 mt-10 steps-section-bg'>
            <div className='relative isolate  sm:rounded-3xl sm:px-16  lg:flex lg:items-center lg:gap-x-20 lg:px-24'>
              <div className='hidden lg:block relative md:-mt-16 h-80 lg:min-w-[24rem]   xl:min-w-[25rem]'>
                <img
                  className=' w-[20rem] md:w-[28rem]  xl:w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='/svg/Devices-pana.svg'
                  alt='Ai Powered'
                />

                <div className='flex justify-center mt-16 md:mr-16'>
                  <a
                    href='/upload-files'
                    className='rounded-xl  ring-inset focus:ring-4 focus:ring-indigo-300  bg-indigo-500 px-8 py-3.5 text-lg font-bold text-white shadow-sm transition  hover:shadow-md hover:bg-indigo-400 hover:rind focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-300'
                  >
                    Order Now
                  </a>
                </div>
              </div>

              <div className='mx-auto  lg:mx-0 lg:flex-auto '>
                <div className='flex flex-col  items-start gap-x-3 gap-y-3  mt-5'>
                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5 items-center '>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                        1
                      </span>
                      <span className='h-20 border-r-2 border-dashed  border-gray-500'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-indigo-600 font-semibold text-2xl mb-3'>
                        Transcribe
                      </div>
                      <p className='text-gray-800 font-semibold text-md'>
                        Files are split into small chunks and types by our
                        certified transcribers.
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5  items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-700 font-bold'>
                        2
                      </span>
                      <span className='h-20 border-r-2 border-dashed  border-gray-500'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-indigo-600 font-semibold text-2xl mb-3'>
                        Review
                      </div>
                      <p className='text-gray-800 font-semibold text-md'>
                        Reviewers checks the parts, add speaker tracking and
                        timestamps.
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5  items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                        3
                      </span>
                      <span className='h-20 border-r-2 border-dashed  border-gray-500'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-indigo-600 font-semibold text-2xl mb-3'>
                        Proofreading
                      </div>
                      <p className='text-gray-800 font-semibold text-md'>
                        Parts are collated and the combined transcript is
                        proofreading for concistency and accuracy.
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className=' flex items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                        4
                      </span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-indigo-600 font-semibold text-2xl mb-3'>
                        Quality Check
                      </div>
                      <p className='text-gray-800  font-semibold text-md'>
                        Accuracy is assesed, the files alternates between
                        Proofreading and Quality till accuracy is 99% +.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex lg:hidden justify-center mt-16 md:mr-16'>
                  <a
                    href='/upload-files'
                    className='rounded-xl  ring-inset focus:ring-4 focus:ring-indigo-300  bg-indigo-500 px-8 py-3.5 text-lg font-bold text-white shadow-sm transition  hover:shadow-md hover:bg-indigo-400 hover:rind focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-300'
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='mx-auto max-w-8xl '>
            <div className='relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className=' relative max-w-md mt-16 h-80 lg:mt-8'>
                <img
                  className=' w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='freelancer-work-from-home-image.webp'
                  alt='App screenshot'
                />
              </div>

              <div className='lg:mx-0 lg:flex-auto lg:py-32 text-left'>
                <h2 className='text-2xl mt-20 lg:mt-0 font-bold  text-gray-800 sm:text-4xl'>
                  Experts Transcription to Ensure Quality Service
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  Our transcriptionists are able to pick up the slack where
                  machine can
                  {"'"}
                  t. The highly accurate, quality end result that a living
                  person can produce is simply unbeatable, and our curated
                  network of experts is trained uniqely for each unique
                  customer, no matter the scale - our workforce can support even
                  the largest project.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <CallToActionBanner fn={setOpen} /> */}

      <div className='bg-white pt-0 pb-24 md:pb-24 md:pt-24' style={{ background: '#f9f8f2'}}>
        <div className='mx-auto max-w-7xl  px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6 '>
            <div className='order-2 md:order-1  md:min-w-[25rem] lg:max-w-[35rem] text-left'>
              <h2 className='text-xl font-semibold leading-7 capitalize secondary-text'>
                Want to be a transcriber
              </h2>
              <p className='mt-2 capitalize text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Got the{' '}
                <span className='relative z-10'>
                  Experience{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                we need? We are looking for you
              </p>

              <div className='flex flex-col  items-start gap-x-3 gap-y-5  mt-5 border-l-4 secondary-border'>
                <div className='flex items-center -ml-[10px]'>
                  <div className=' flex  items-center '>
                    <span className='flex items-center justify-center w-4 h-4 rounded-full bg-indigo-500 text-indigo-500 font-bold'></span>
                  </div>
                  <div className='ml-5  max-w-md'>
                    <div className='leading-8 text-indigo-600 font-semibold text-xl mb-1 capitalize'>
                      create an account
                    </div>
                  </div>
                </div>

                <div className='flex  items-center -ml-[10px]'>
                  <div className=' flex  items-center'>
                    <span className='flex items-center justify-center w-4 h-4 rounded-full bg-indigo-500 text-indigo-700 font-bold'></span>
                  </div>
                  <div className='ml-5  max-w-md'>
                    <div className='leading-8 text-indigo-600 font-semibold text-xl mb-1 capitalize'>
                      submit required documents
                    </div>
                  </div>
                </div>

                <div className='flex  items-center -ml-[10px]'>
                  <div className=' flex  items-center'>
                    <span className='flex items-center justify-center w-4 h-4 rounded-full bg-indigo-500 text-indigo-500 font-bold'></span>
                  </div>

                  <div className='ml-5  max-w-md'>
                    <div className='leading-8 text-indigo-600 font-semibold text-xl mb-1 capitalize'>
                      Take The entrance exam
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-start md:justify-center mt-16 md:mr-16'>
                <a
                  href='/freelancers'
                  className='rounded-xl   bg-orange-400 px-8 py-3.5 text-lg font-bold text-white shadow-sm transition  hover:shadow-md hover:bg-indigo-400 hover:rind focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-300 btn-vlg'
                >
                  Become a Transcriber
                </a>
              </div>
            </div>
            <div className='mb-10 overflow-hidden py-14 md:py-0 md:mb-0 order-1 md:order-2 items-center justify-center  md:min-h-[28rem] bg-gray-100 md:flex relative md:-mt-16 '>
              <img
                className=' w-[40rem] md:w-[30rem]  xl:w-[30rem]'
                src='/svg/Working from anywhere-pana.svg'
                alt='Ai Powered'
              />
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />

      <AppFooter />
    </div>
  );
}
