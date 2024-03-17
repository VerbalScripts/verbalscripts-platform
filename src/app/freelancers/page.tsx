'use client';

import React, { useEffect } from 'react';

import { useState } from 'react';

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  AcademicCapIcon,
  MicrophoneIcon,
  PowerIcon,
  ChartBarIcon,
  ClockIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

import { StarIcon } from '@heroicons/react/20/solid';

import FreelancingHeader from '@/components/FreelancingHeader';
import AppFooter from '@/components/AppFooter';

export default function Page() {
  const [heightOffset, setOffsetHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (event: any) => {
      event.target.scrollingElement.scrollTop &&
        setOffsetHeight(event.target.scrollingElement.scrollTop);
    });
  });

  const services = [
    {
      name: 'Transcription',
      description: 'Get a better understanding of your traffic',
      href: '#',
      icon: ChartPieIcon,
    },
    {
      name: 'Translation',
      description: 'Speak directly to your customers',
      href: '#',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Machine Transcription',
      description: 'Your customers’ data will be safe and secure',
      href: '#',
      icon: FingerPrintIcon,
    },
    {
      name: 'AI Datasets',
      description: 'Connect with third-party tools',
      href: '#',
      icon: SquaresPlusIcon,
    },
    {
      name: 'Data Annotation',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: ArrowPathIcon,
    },
  ];

  const solutions = [
    {
      name: 'Medical & Research',
      description:
        'We have experienced, dedicated teams of workers who specialize in healthcare related content who provide accurate and confidential transcriptions for both our Medical and HIPAA-compliant services.',
      href: '/medical',
      icon: ChartPieIcon,
    },
    {
      name: 'Legal',
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/legal',
      icon: NewspaperIcon,
    },
    {
      name: 'AI Machine Learning',
      description:
        'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
      href: '/ai',
      icon: FingerPrintIcon,
    },
    {
      name: 'Education',
      description:
        'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
      href: '/academic',
      icon: AcademicCapIcon,
    },
    {
      name: 'Market Research',
      description:
        'Transcription that is perfect for all types of qualitative research needs, including focus groups, surveys and in-depth interviews.',
      href: '/market-research',
      icon: ChartBarIcon,
    },
    {
      name: 'Enterprise',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/enterprise',
      icon: ArrowPathIcon,
    },
    {
      name: 'Technology',
      description:
        'Analyze interviews, focus groups, and data mine content to turn your qualitative audio content into quantitative text.',
      href: '/technology',
      icon: PowerIcon,
    },
    {
      name: 'Consulting',
      description:
        'Fast transcription and research data to meet due diligence and management consulting research needs.',
      href: '/consulting',
      icon: SquaresPlusIcon,
    },
    {
      name: 'Call Centers',
      description: 'Automated speech recognition & analytics for call centers',
      href: '/call-centers',
      icon: MicrophoneIcon,
    },
  ];

  const resources = [
    {
      name: 'FAQs',
      description: 'Frequently Asked Qustions',
      href: '/faqs',
      icon: ChartPieIcon,
    },
    {
      name: 'Terms & Conditions',
      description: 'View terms and conditions',
      href: '/terms-and-conditions',
      icon: ChartPieIcon,
    },
    {
      name: 'Policies',
      description: 'check valid policies',
      href: '/policies',
      icon: ChartPieIcon,
    },
  ];

  const features = [
    {
      name: 'Starting At',
      description: '$15-22',
      subtitle: 'per audio hour',
      icon: ClockIcon,
    },
    {
      name: 'Average',
      description: '$250',
      subtitle: 'monthly earnings',
      icon: CalendarIcon,
    },
    {
      name: 'Special Teams',
      description: '$60-70+',
      subtitle: 'per audio hour',
      icon: StarIcon,
    },
  ];

  const testimonials: Array<FreelancerTestimony> = [
    {
      description:
        ' “TranscribeMe has allowed me to maintain a flexible schedule...this gives me the freedom to be able to work when I want to.” ',
      name: 'Rebecca Gallant',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      state: 'Tennessee',
      years: '3',
    },
    {
      description:
        ' “I can work my work around what I need to do for myself which is fantastic...TranscribeMe is the perfect place for me to work.” ',
      name: 'Suzanne Thomas',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      state: 'Florida',

      years: '3',
    },
    {
      description:
        ' “I’ve loved every second of it. I love to work when I want to work and not work when I don’t feel like working.” ',
      name: 'Shadrack Ndjate',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      state: 'South Africa',

      years: '2',
    },
    {
      description:
        ' “The community’s really supportive, it feels like kind of an online family and it’s really nice to be a part of.”',
      name: 'Nicole Shafer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      state: 'Utah',
      years: '4',
    },
  ];

  return (
    <div className='bg-zinc-800'>
      <FreelancingHeader
        resources={resources}
        solutions={solutions}
        services={services}
        heightOffset={heightOffset}
      />
      <div className='relative bg-teal-600 h-auto isolate px-6 pt-14 lg:px-8'>
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
        <div className='max-w-3xl pb-48 pt-0 md:py-32 lg:py-32 md:mx-20 lg:mx-40'>
          <div className='text-left'>
            <h1 className='text-4xl font-bold md:tracking-tight text-white sm:text-6xl'>
              Become a Freelancer & Start Earning Anywhere
            </h1>
            <p className='mt-6 text-2xl leading-8 text-gray-100'>
              Join the TranscribeMe professional freelancer community and start
              working on projects from anywhere, anytime.
            </p>
            <div className='mt-10 flex flex-col md:flex-row items-start md:items-center justify-start gap-6'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-7 py-3 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Start Freelancing
              </a>
            </div>
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

      {/* testimonials */}
      <div className='bg-white py-14 md:py-24'>
        <div className='mx-auto max-w-2xl lg:text-center px-6 sm:py-32 lg:px-8'>
          <p className='text-4xl font-bold leading-10  text-gray-800'>
            Monetize Your Downtime with the Industry’s Highest Pay
          </p>
        </div>

        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative md:pl-16 '>
                <dt className='flex flex-col items-center '>
                  <div className='text-center  mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-orange-900/10'>
                    <feature.icon
                      className='h-12 w-12 text-orange-500'
                      aria-hidden='true'
                    />
                  </div>
                  <span className='text-md uppercase  leading-7 text-indigo-600'>
                    {feature.name}
                  </span>
                </dt>
                <dd className='text-center my-5 text-4xl md:text-6xl font-bold leading-6 text-orange-500'>
                  {feature.description}
                </dd>
                <dd className='text-center mt-3 text-md leading-6 text-gray-600'>
                  {feature.subtitle}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className='mx-auto max-w-2xl lg:text-center px-6 sm:py-32 lg:px-8'>
          <p className='mt-24 mb-5 text-xl leading-8 text-gray-600'>
            We also offer advancement opportunities for our Special Teams that
            include Medical and Specialty Styles, which pay even higher rates!
          </p>

          <a
            href='#'
            className='text-orange-500 font-semibold text-lg underline underline-offset-4'
          >
            Learn More About Freelancing
          </a>
        </div>
      </div>

      <div className='bg-gray-200'>
        <div className='py-24 px-6 sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
            <p className='mt-2 text-4xl font-bold leading-10 text-gray-900 sm:text-4xl'>
              Flexibility & Career Growth
            </p>

            <p className='mt-3  text-xl leading-8 text-gray-600'>
              Our freelance jobs allow you to earn money from anywhere you’d
              like, while paying you competitively and providing career growth
              opportunities.{' '}
            </p>
          </div>

          <div className='mx-auto max-w-8xl '>
            <div className='relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-14 lg:pt-0'>
              <div className=' relative max-w-md mt-16 h-80 lg:mt-8'>
                <img
                  className=' w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='freelancer-work-from-home-image.webp'
                  alt='App screenshot'
                />
              </div>

              <div className='lg:mx-0 lg:flex-auto lg:py-32 text-left'>
                <h2 className='text-2xl mt-20 lg:mt-0 font-bold  text-gray-800 sm:text-4xl'>
                  Freedom and Flexibility
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  Work from the comfort of your own home, on the road, or
                  anywhere really – whenever you want and how much you want.
                  <br></br>
                  Transcribe short 2-4 minute clips (not long interviews). When
                  one clip is complete our system sends another to transcribe –
                  there is no limit to how many can be processed consecutively.
                </p>

                <div className='mt-5'>
                  <a
                    href='#'
                    className='text-orange-500 font-semibold text-lg underline underline-offset-4'
                  >
                    More About the Work
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='mx-auto max-w-8xl '>
            <div className='relative isolate  pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='mx-auto max-w-xl  lg:mx-0 lg:flex-auto lg:py-32'>
                <h2 className='text-2xl font-bold  text-gray-800 sm:text-4xl'>
                  Grow Your Skills and Career
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-700'>
                  We believe in promotion from within. Our transcriptionists
                  enjoy their work and have career advancement opportunities.
                  <br />
                  Gain insight into various industries and boost your resume for
                  any job market. Develop your skills, and grow into
                  higher-paying projects and positions.
                </p>

                <div className='mt-5'>
                  <a
                    href='#'
                    className='text-orange-500 font-semibold text-lg underline underline-offset-4'
                  >
                    Start Freelancing
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <img
                  className='absolute left-0 top-0 w-[20rem] md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                  src='freelancer-work-from-home-image.webp'
                  alt='App screenshot'
                />
              </div>
            </div>
          </div>

          <div className='mx-auto max-w-8xl '>
            <div className='mx-auto max-w-2xl lg:text-center'>
              <p className='mt-2 text-3xl font-bold  text-gray-900 sm:text-4xl'>
                Our Happy Freelancers
              </p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
            </div>

            <div className='mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-5xl'>
              <dl className='mx-auto grid max-w-none  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-7xl xl:max-w-7xl lg:gap-y-16'>
                {[...testimonials].map((feature) => (
                  <dl
                    key={feature.name}
                    className='relative  transition  bg-white shadow-md rounded-lg px-5 py-8 md:px-8 md:py-14'
                  >
                    <dt className='flex  leading-7 text-gray-200'>
                      <StarIcon
                        className='h-8 w-8 text-indigo-600'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-8 w-8 text-indigo-600'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-8 w-8 text-indigo-600'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-8 w-8 text-indigo-600'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-8 w-8 text-indigo-600'
                        aria-hidden='true'
                      />
                    </dt>
                    <dd className='mt-2 text-xl leading-7 text-gray-700'>
                      {feature.description}
                    </dd>
                    <dd className='mt-5 flex items-center gap-x-5'>
                      <img
                        className='h-14 w-14 rounded-full'
                        src={feature.imageUrl}
                        alt=''
                      />
                      <div className=''>
                        <div className='font-semibold text-gray-600'>
                          {feature.name}
                        </div>
                        <div className='text-gray-300 text-sm'>
                          {feature.state}
                        </div>
                      </div>
                    </dd>
                  </dl>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='py-24 px-6 sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
            <p className='mt-2 text-4xl font-bold leading-10 text-gray-900 sm:text-4xl'>
              Getting Started as a Freelancer is Simple
            </p>
          </div>

          <div className='mx-auto max-w-8xl flex flex-col items-center md:block'>
            <div className='flex flex-col md:flex-row justify-center items-start gap-x-3 mt-5 py-16'>
              <div className='flex md:block'>
                <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white'>
                    1
                  </span>
                  <span className='h-24 md:h-0 border-r-2 md:border-r-0 md:ml-2 md:w-44 lg:w-56 border-b-2 border-gray-300'></span>
                </div>
                <br />
                <div className='ml-5 leading-6 max-w-[20rem] md:max-w-[10rem] lg:max-w-[15rem] md:text-center md:-ml-16 lg:-ml-28'>
                  <div className='text-xl md:text-lg lg:text-xl font-semibold text-gray-600'>
                    Create an Account
                  </div>

                  <div className='text-gray-600'>
                    All you need is access to a computer and internet.
                  </div>
                </div>
              </div>

              <div className='flex md:block'>
                <div className=' flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white'>
                    2
                  </span>
                  <span className='h-24 md:h-0 border-r-2 md:border-r-0 md:ml-2 md:w-44 lg:w-56 border-b-2 border-gray-300'></span>
                </div>
                <br />
                <div className='ml-5 leading-6 max-w-[20rem] md:max-w-[10rem] lg:max-w-[15rem] md:text-center md:-ml-20 lg:-ml-28'>
                  <div className='text-xl md:text-lg lg:text-xl font-semibold text-gray-600'>
                    Connect Your Paypal
                  </div>
                  <div className='text-gray-600'>
                    While registering, you’ll provide your PayPal info.
                  </div>
                </div>
              </div>

              <div className='flex md:block'>
                <div className=' flex items-center'>
                  <span className='flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-white'>
                    3
                  </span>
                </div>
                <br />
                <div className='ml-5 leading-6 max-w-[20rem] md:max-w-[10rem] lg:max-w-[15rem] md:text-center md:-ml-20 lg:-ml-28'>
                  <div className='text-xl md:text-lg lg:text-xl font-semibold text-gray-600'>
                    Take the Entrance Exam.
                  </div>
                  <div className='text-gray-600'>
                    After passing the exam, we’ll activate your account.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='bg-indigo-800 relative overflow-hidden transition transform-gpu'>
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
          <div className='mx-auto  py-24  sm:px-6  lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
            You did{ "'"}nt Hear it from us
          </h2> */}
              <p className='mt-2 text-4xl font-bold leading-10 text-white sm:text-4xl'>
                Ready to Join the Team?
              </p>

              <p className='mt-3  text-xl leading-8 text-gray-100'>
                Join free today and start your training to become a professional
                transcriptionist at TranscribeMe!
              </p>

              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-orange-500 px-6 py-3.5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  Start Freelancing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter
        services={services}
        resources={resources}
        solutions={solutions}
      />
    </div>
  );
}
