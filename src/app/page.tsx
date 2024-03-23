'use client';

import React, { useEffect, useRef } from 'react';

import { useState } from 'react';

import Image from 'next/image';

import AppHeader from '@/components/AppHeader';
import LandingPage from '@/components/LandingPage';
import AppFooter from '@/components/AppFooter';
import Testimonials from '@/components/Testimonials';
import GetAQuoteModal from '@/components/GetAQuoteModal';
import LogoSlider from '@/components/LogoSlider';

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
      name: 'Transcribe with High Accuracy',
      description:
        'Turn any audio to text with industry leading accuracy and the best transcription models on the market.',

      imgUrl: '/icons/accuracy.png',
    },
    {
      name: 'One Click Submission and Fast Processing',
      description:
        'Simply give a us a link or upload your file and your will be ready in a matter of minutes',

      imgUrl: '/icons/upload.png',
    },
    {
      name: 'Affordable Solutions',
      description:
        'The quality and workflow we have built enable us to deliver the highest quality data consistently at low prices.',

      imgUrl: '/icons/affordable.png',
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
    {
      name: 'Reform',
      imgUrl:
        'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
    },
    {
      name: 'Tuple',
      imgUrl: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
    },
  ];

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
      <LandingPage />

      <GetAQuoteModal open={open} setOpen={setOpen} />

      <div className=' py-10 md:py-5' style={{ backgroundColor: '#f9f8f2' }}>
        <div className='mx-auto max-w-full xl:max-w-8xl px-6 lg:px-8 xl:px-10'>
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

      <div className='bg-white py-20 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl md:text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">What we do</h2> */}
            <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
              Benefits of Choosing VerbalScripts
            </p>
            <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
              Why we are the best platform for transcription to improve your
              speed, privacy and quality service.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-8xl'>
            <dl className='grid max-w-full content-center grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
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
      <div className='bg-indigo-600'>
        <div className='mx-auto max-w-8xl '>
          <div className='relative isolate   px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 md:px-24 lg:flex lg:items-center lg:gap-x-20 lg:px-36 lg:pt-0'>
            <div className='mx-auto  lg:max-w-xl  lg:mx-0 lg:flex-auto lg:py-32'>
              <h2 className='text-4xl md:text-5xl font-bold  text-gray-100'>
                Services
              </h2>
              <p className='mt-6 text-lg  leading-7 text-gray-200'>
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

        <div className='mx-auto mt-16 max-w-full sm:mt-20 lg:mt-24'>
          <dl className='mx-auto grid max-w-none px-6 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-3 lg:gap-y-16'>
            {[...solutions.current.slice(0, 6)].map((feature) => (
              <a
                href='#'
                key={feature.name}
                className='relative pl-16 h-60 transition  hover:bg-white/5 hover:-translate-y-2 hover:ring-1 hover:ring-white/10 rounded-lg p-4'
                style={{ backgroundColor: '#f9f8f2' }}
              >
                <dt className='text-2xl font-semibold leading-7 text-gray-800'>
                  <div className='absolute left-2 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      className='h-6 w-6 text-gray-200'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-1 text-lg leading-7 text-gray-700'>
                  {feature.description}
                </dd>
              </a>
            ))}
          </dl>
        </div>

        <div className='flex justify-center py-32'>
          <a
            href='/solutions'
            className='rounded-full  bg-orange-500 px-8 py-3.5 text-lg font-bold text-white shadow-sm transition  hover:shadow-md hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            View all industry solutions
          </a>
        </div>
      </div>
      {/* testimonials */}
      <Testimonials testimonials={testimonials} />
      {/* validation section */}

      <div className='bg-white'>
        <div className='py-24 px-6 sm:py-32 lg:px-8'>
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
          <div className='mx-auto max-w-8xl py-10'>
            <div className='relative isolate  sm:rounded-3xl sm:px-16  lg:flex lg:items-center lg:gap-x-20 lg:px-24'>
              <div className='hidden lg:block relative md:-mt-16 h-80 lg:min-w-[24rem]   xl:min-w-[35rem]'>
                <img
                  className='absolute left-0 top-0 w-[20rem] md:w-[28rem]  xl:w-[32rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='ai-transcription-service.webp'
                  alt='Ai Powered'
                />
              </div>

              <div className='mx-auto  lg:mx-0 lg:flex-auto '>
                <div className='flex flex-col  items-start gap-x-3 gap-y-3  mt-5'>
                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5 items-center '>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
                        1
                      </span>
                      <span className='h-20 border-r-2 border-dashed  border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-2xl mb-3'>
                        Transcribe
                      </div>
                      <p className='text-gray-600 text-lg'>
                        Files are split into small chunks and types by our
                        certified transcribers.
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5  items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
                        2
                      </span>
                      <span className='h-20 border-r-2 border-dashed  border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-2xl mb-3'>
                        Review
                      </div>
                      <p className='text-gray-600 text-lg'>
                        Reviewers checks the parts, add speaker tracking and
                        timestamps.
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className=' flex flex-col  gap-y-5  items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
                        3
                      </span>
                      <span className='h-20 border-r-2 border-dashed  border-gray-300'></span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-2xl mb-3'>
                        Proofreading
                      </div>
                      <p className='text-gray-600 text-lg'>
                        Parts are collated and the combined transcript is
                        proofreading for concistency and accuracy.
                      </p>
                    </div>
                  </div>

                  <div className='flex'>
                    <div className=' flex items-center'>
                      <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
                        4
                      </span>
                    </div>
                    <br />
                    <div className='ml-5  max-w-md'>
                      <div className='leading-8 text-gray-800 font-semibold text-2xl mb-3'>
                        Quality Check
                      </div>
                      <p className='text-gray-600 text-lg'>
                        Accuracy is assesed, the files alternates between
                        Proofreading and Quality till accuracy is 99% +.
                      </p>
                    </div>
                  </div>
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
              <div className='w-[30rem] text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                <h2 className='text-4xl md:text-5xl font-bold  text-white '>
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
                  className='lg:w-[28rem] xl:w-[32rem] max-w-none'
                  src='transcription-service.webp'
                  alt='Ready to Succeed with our transcription service'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='mx-auto max-w-8xl lg:py-28 py-16  sm:px-6  lg:px-8'>
          <div className='relative isolate   px-6  sm:rounded-3xl sm:px-16  md:flex md:items-center  lg:gap-x-20 lg:px-24 lg:pt-0'>
            <div className='hidden lg:block relative md:min-w-[28rem] lg:min-w-[35rem] -mt-32 h-80 lg:mt-8'>
              <img
                className='w-[20rem] md:w-[26rem] max-w-none'
                src='login-page.svg'
                alt='Become a Freelancer Image'
              />
            </div>

            <div className='lg:mx-0 max-w-xl lg:flex  flex-col  text-left'>
              <h2 className='text-4xl mt-0 md:mt-20 lg:mt-0 font-bold  text-gray-900 md:text-5xl'>
                Want to become a freelancer
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-700'>
                We have the industry’s best rates!
              </p>

              <div className='flex flex-col md:flex-row items-start gap-x-3 gap-y-5 md:gap-y-0 mt-5'>
                <div className='flex md:block'>
                  <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
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
                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
                      2
                    </span>
                    <span className='h-24 border-r-2 border-dashed md:h-0 md:ml-2 md:w-48 lg:w-32  md:border-b-2 border-gray-300'></span>
                  </div>
                  <br />
                  <div className='ml-5 md:-ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                    Connect Your <br></br> Paypal
                  </div>
                </div>

                <div className='flex md:block'>
                  <div className=' flex items-center'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/5 text-indigo-500 font-bold'>
                      3
                    </span>
                  </div>
                  <br />
                  <div className='ml-5 md:-ml-5 leading-8 text-gray-600 font-semibold text-xl max-w-sm'>
                    Take the <br></br> Entrance Exam.
                  </div>
                </div>
              </div>

              <div className='block mt-10'>
                <a
                  href='#'
                  className='my-2.5 inline-block rounded-full ring-1 ring-indigo-500 px-8 py-2.5 text-xl font-semibold text-indigo-500 transition shadow-sm hover:shadow-xl hover:-translate-y-1 '
                >
                  Become a Freelancer
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
