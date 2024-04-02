'use client';

import React, { useEffect, useRef } from 'react';

import { useState } from 'react';

import Image from 'next/image';
import Script from 'next/script';

import AppHeader from '@/components/AppHeader';
import LandingPage from '@/components/LandingPage';
import AppFooter from '@/components/AppFooter';
import Testimonials from '@/components/Testimonials';
import GetAQuoteModal from '@/components/GetAQuoteModal';
import CallToActionBanner from '@/components/CallToActionBanner';
import PopularPartner from '@/components/PopularPartner';

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

  const testimonials: Array<Testimony> = [
    {
      description:
        ' VerbalScripts has done a terrific job in helping us meet a tight deadline for a demanding client. They helped us tailor the transcripts to our particular needs, and were always available, helpful and patient.”',
      name: 'Limor Hochberg',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      occupation: 'UL',
    },
    {
      description:
        ' “We used VerbalScripts for transcripts and the quality has been great. Turnaround speed is fast and the process to upload files is very simple. Very responsive.”',
      name: 'Bart Langton',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      occupation: 'Ipsos',
    },
    {
      description:
        " “It's been a great experience working with VerbalScripts. Their transcription is the best quality for the cheapest price. They worked with us to create a business rate and the quality was great.”",
      name: 'Angel Cruz',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      occupation: 'Datu Research',
    },
  ];

  const features = [
    {
      name: 'Precise Transcription Guaranteed',
      description:
        'We ensure accurate transcription delivered on time by transcribing, reviewing and profreading',

      imgUrl: '/icons/accuracy.png',
    },
    {
      name: 'One Click Submission, Fast Processing',
      description:
        'Simply give a us a link or upload your file and your will be ready to start working on it in a matter of minutes',

      imgUrl: '/icons/upload.png',
    },
    {
      name: 'Affordable Solutions',
      description:
        'The quality and workflow we have built enable us to deliver the highest quality transcripts concistency at the best industry rates',

      imgUrl: '/icons/affordable.png',
    },
  ];

  return (
    <div
      className='bg-zinc-800 max-h-screen overflow-y-scroll overflow-x-hidden relative'
      onScroll={onBodyScroll}
    >
      <Script
        src='https://fw-cdn.com/11485930/4150032.js'
        strategy='lazyOnload'
      />
      <AppHeader
        showQuote={setOpen}
        dataPush={solutions}
        heightOffset={heightOffset}
      />
      <LandingPage />

      <GetAQuoteModal open={open} setOpen={setOpen} />

      <PopularPartner />

      <div className='bg-white py-20 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl md:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
            <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
              Benefits of Choosing VerbalScripts
            </p>
            <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
              We are the best platform for accelerated speed, enhanced privacy, top notch-quality, and cost effective-solution;
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-8xl'>
            <dl className='grid max-w-none  md:px-16 lg:px-20 xl:px-36 content-center grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className='relative py-8 px-5 rounded-xl shadow-sm'
                  style={{ backgroundColor: '#f9f8f2' }}
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
      <div className='bg-indigo-500'>
        <div className='mx-auto max-w-8xl '>
          <div className='relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 md:px-24 lg:flex lg:items-center lg:gap-x-20 lg:px-36 lg:pt-0'>
            <div className='mx-auto  lg:max-w-[24rem]   xl:max-w-[28rem] lg:mx-0 lg:flex-auto lg:py-32'>
              <h2 className='text-4xl md:text-5xl font-bold  text-gray-100'>
                Solutions
              </h2>
              <p className='mt-6 text-xl  leading-7 text-gray-50'>
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
            <div className='relative mb-44 md:mb-32 mt-16 h-80 lg:mt-8'>
              <img
                className='absolute left-0 top-0 w-[28rem] md:w-[32rem] max-w-none rounded-m'
                src='transcription-service.webp'
                alt='Service Image'
              />
            </div>
          </div>
        </div>

        <div className='mx-auto mt-16 max-w-8xl sm:mt-20 lg:mt-24'>
          <dl className='mx-auto grid max-w-none px-6 md:px-16 lg:px-20 xl:px-36 grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-3 lg:gap-y-16'>
            {[...solutions.current.slice(0, 6)].map((feature) => (
              <a
                href={'/solutions/' + feature.href}
                key={feature.name}
                className='relative h-80 transition flex flex-col justify-center items-center hover:bg-white/5 hover:-translate-y-2 hover:ring-1 hover:ring-white/10 rounded-lg p-4'
                style={{ backgroundColor: '#f9f8f2' }}
              >
                <dt className=''>
                  <div className='flex  items-center justify-center '>
                    {feature.icon != undefined ? (
                      <feature.icon
                        className='h-6 w-6 text-gray-200'
                        aria-hidden='true'
                      />
                    ) : feature.imgUrl != undefined ? (
                      <img
                        className='mb-5 w-[5rem]'
                        alt={feature.name}
                        src={feature.imgUrl}
                      />
                    ) : null}
                  </div>
                </dt>
                <dd className='text-2xl text-center font-semibold leading-7 text-gray-800'>
                  {feature.name}
                </dd>
                <dd className='mt-1 text-lg  text-center leading-7 text-gray-700 line-clamp-4'>
                  {feature.description}
                </dd>
              </a>
            ))}
          </dl>
        </div>

        <div className='flex justify-center py-32'>
          <a
            href='/solutions'
            className='rounded-full  bg-yellow-400 px-8 py-3.5 text-lg font-bold text-white shadow-sm transition  hover:shadow-md hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            View all solutions
          </a>
        </div>
      </div>
      {/* testimonials */}
      <Testimonials testimonials={testimonials} />
      {/* validation section */}

      <div className='bg-white'>
        <div className='py-20 px-6 md:py-20 lg:px-8'>
          <div className='mx-auto max-w-2xl text-left md:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
            <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
              4-step Process for Concistent Results
            </p>
            <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
              Human driven transcription process.
            </p>
          </div>
          <div className='mx-auto max-w-8xl py-2'>
            <div className='relative isolate  sm:rounded-3xl sm:px-16  lg:flex lg:items-center lg:gap-x-20 lg:px-24'>
              <div className='hidden lg:block relative md:-mt-16 h-80 lg:min-w-[24rem]   xl:min-w-[25rem]'>
                <img
                  className='absolute left-0 top-0 w-[20rem] md:w-[23rem]  xl:w-[24rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='ai-transcription-service.webp'
                  alt='Ai Powered'
                />
              </div>

              <div className='mx-auto  lg:mx-0 lg:flex-auto '>
                <div className='flex flex-col  items-start gap-x-3 gap-y-3  mt-5'>
                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5 items-center '>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                        1
                      </span>
                      <span className='h-14 border-r-2 border-dashed  border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-xl mb-3'>
                        Transcribe
                      </div>
                      <p className='text-gray-600 text-md'>
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
                      <span className='h-14 border-r-2 border-dashed  border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-xl mb-3'>
                        Review
                      </div>
                      <p className='text-gray-600 text-md'>
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
                      <span className='h-14 border-r-2 border-dashed  border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-xl mb-3'>
                        Proofreading
                      </div>
                      <p className='text-gray-600 text-md'>
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
                      <div className='leading-8 text-gray-800 font-semibold text-xl mb-3'>
                        Quality Check
                      </div>
                      <p className='text-gray-600 text-md'>
                        Accuracy is assesed, the files alternates between
                        Proofreading and Quality till accuracy is 99% +.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-center mt-16 md:mr-16'>
              <a
                href='/solutions'
                className='rounded-full ring-1 ring-indigo-500 ring-inset focus:ring-4 focus:ring-indigo-300  bg-indigo-500 px-8 py-3.5 text-lg font-bold text-white shadow-sm transition  hover:shadow-md hover:bg-indigo-400 hover:rind focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-300'
              >
                Place Order Now
              </a>
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

      <CallToActionBanner fn={setOpen} />

      <div className='bg-white'>
        <div className='mx-auto max-w-8xl lg:py-28 py-16  sm:px-6  lg:px-8'>
          <div className='relative isolate   px-6  sm:rounded-3xl sm:px-16  md:flex md:items-center  lg:gap-x-20 lg:px-24 lg:pt-0'>
            <div className='hidden lg:block relative md:min-w-[28rem] lg:min-w-[35rem] xl:min-w-[28rem] -mt-32 h-80'>
              <img
                className='w-[20rem] md:w-[26rem] max-w-none'
                src='login-page.svg'
                alt='Become a Freelancer Image'
              />
            </div>

            <div className='lg:mx-0 max-w-xl lg:flex  flex-col  text-left'>
              <h2 className='text-4xl mt-0 md:mt-20 lg:mt-0 font-bold  text-gray-900 md:text-5xl'>
                Want to join our team of skilled Transcriptionist
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-700'>
                Got the experience we need? We are looking for you.
              </p>

              <div className='flex flex-col md:flex-row items-start gap-x-3 gap-y-5 md:gap-y-0 mt-5'>
                <div className='flex md:block'>
                  <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                      1
                    </span>
                    <span className='h-24 border-r-2 border-dashed md:h-0 md:ml-2 md:w-48 lg:w-32 md:border-b-2 border-gray-300'></span>
                  </div>
                  <br />
                  <div className='ml-5 md:-ml-5  leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                    Create an <br></br> Account
                  </div>
                </div>

                <div className='flex md:block'>
                  <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                      2
                    </span>
                    <span className='h-24 border-r-2 border-dashed md:h-0 md:ml-2 md:w-48 lg:w-32  md:border-b-2 border-gray-300'></span>
                  </div>
                  <br />
                  <div className='ml-5 md:-ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                    Submit required documents 
                  </div>
                </div>

                <div className='flex md:block'>
                  <div className=' flex items-center'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/30 text-indigo-500 font-bold'>
                      3
                    </span>
                  </div>
                  <br />
                  <div className='ml-5 md:-ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                    Take the Entrance Exams.
                  </div>
                </div>
              </div>

              <div className='block mt-4'>
                <a
                  href='/auth/login'
                  className='my-2.5 inline-block rounded-full hover:bg-indigo-500 hover:text-white hover:ring-0 transition focus:ring-4 focus:ring-indigo-300  ring-1 ring-indigo-500 px-8 py-2.5 text-xl font-semibold text-indigo-500 transition shadow-sm '
                >
                 Become a Transcriber!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
