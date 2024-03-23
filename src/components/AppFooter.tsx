import React from 'react';

import {
  LogoLinkedin,
  LogoFacebook,
  LogoGithub,
  LogoInstagram,
} from 'react-ionicons';

import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  AcademicCapIcon,
  MicrophoneIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function AppFooter() {
  const services: Array<NavLabel> = [
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
      subtitle: 'Accurate translation in any language',
      features: [
        'Fast Delivery',
        'Unrivaled Accuracy',
        'Lowest Priced Anywhere',
      ],
      price: '0.11$ per word',
    },
    {
      name: 'Legal Transcription',
      description: 'Your customers’ data will be safe and secure',
      href: '#',
      icon: FingerPrintIcon,
      subtitle: 'Industry best speech-to-text transcription software',
      features: [
        'Fast Delivery',
        'Unrivaled Accuracy',
        'Lowest Priced Anywhere',
      ],
      price: '0.07$ per minute',
    },
    {
      name: 'AI Datasets',
      description: 'Connect with third-party tools',
      href: '#',
      icon: SquaresPlusIcon,
      subtitle: 'Create custom datasets for AI model training',
      features: [
        'Customized styles, tagging and speaker names',
        'Timestamps to the millisecond',
        'Transcription formats for any AI system',
        'Highly secure platform & confidential data',
        'Annotation services available',
      ],
      price: '2.00$ per minute',
    },
    {
      name: 'Data Annotation',
      description: 'Build strategic funnels that will convert',
      href: '#',
      icon: ArrowPathIcon,
      subtitle: 'Data Labeling customized to your needs',
      features: [
        'Enhance your artifical intelligence',
        'Global network of experts',
        'Highest quality annotated data',
      ],
      price: '0.10$ per task',
    },
  ];

  const solutions: Array<NavLabel> = [
    {
      name: 'Court and Legal',
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/legal',
      icon: NewspaperIcon,
    },
    {
      name: 'Medical Research',
      description:
        'We have experienced, dedicated teams of workers who specialize in healthcare related content who provide accurate and confidential transcriptions for both our Medical and HIPAA-compliant services.',
      href: '/medical',
      icon: ChartPieIcon,
    },
    {
      name: 'Corporate and business',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/enterprise',
      icon: ArrowPathIcon,
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
      name: 'Digital and online learning',
      description:
        'Transcription that is perfect for all types of qualitative research needs, including focus groups, surveys and in-depth interviews.',
      href: '/market-research',
      icon: ChartBarIcon,
    },

    {
      name: 'Consulting',
      description:
        'Fast transcription and research data to meet due diligence and management consulting research needs.',
      href: '/consulting',
      icon: SquaresPlusIcon,
    },
    {
      name: 'Media Production',
      description: 'Automated speech recognition & analytics for call centers',
      href: '/call-centers',
      icon: MicrophoneIcon,
    },
    {
      name: 'Government',
      description: 'Automated speech recognition & analytics for call centers',
      href: '/call-centers',
      icon: MicrophoneIcon,
    },
  ];

  return (
    <div className='relative isolate overflow-hidden pb-36 md:pb-0 pt-16 sm:pt-24 lg:pt-32'>
      <div className='mx-auto max-w-7xl xl:max-w-7xl px-6 lg:px-8 xl:px-22'>
        <div className='mx-auto flex flex-col md:flex-row   md:justify-between md:items-end border-b border-gray-300/10 pb-12 mb-8'>
          <div className='lg:max-w-lg'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Stay in the know.
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-200'>
              Get Discount coupons and updates from VerbalScripts
            </p>

            <div className='flex items-center mt-5 gap-x-3'>
              <a
                href=''
                className='text-center mb-3 flex h-12 w-12 items-center justify-center'
              >
                <LogoInstagram
                  color={'#fff'}
                  width={'25px'}
                  height={'25px'}
                  aria-hidden='true'
                />
              </a>
              <a
                href=''
                className='text-center mb-3 flex h-12 w-12 items-center justify-center'
              >
                <LogoLinkedin
                  color={'#fff'}
                  width={'25px'}
                  height={'25px'}
                  aria-hidden='true'
                />
              </a>

              <a
                href=''
                className='text-center mb-3 flex h-12 w-12 items-center justify-center'
              >
                <LogoFacebook
                  color={'#fff'}
                  width={'25px'}
                  height={'25px'}
                  aria-hidden='true'
                />
              </a>

              <a
                href=''
                className='text-center mb-3 flex h-12 w-12 items-center justify-center'
              >
                <LogoGithub
                  color={'#fff'}
                  width={'25px'}
                  height={'25px'}
                  aria-hidden='true'
                />
              </a>
            </div>
          </div>

          <div className='mt-6 flex  gap-x-4'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='min-w-0 max-w-md  flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
              placeholder='Enter your email'
            />
            <button
              type='submit'
              className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
            >
              Subscribe
            </button>
          </div>
        </div>
        <div
          className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
          aria-hidden='true'
        >
          {/* <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        /> */}
        </div>
        {/* contact information */}
        <div className='max-w-none lg:max-w-none border-b border-gray-300/10'>
          <dl className='grid  grid-cols-1 md:grid-cols-3   lg:gap-x-8 gap-y-10  lg:grid-cols-4 lg:gap-y-16  pb-12'>
            <div className='flex flex-col'>
              <a href='#' className='-m-1.5 mb-3 p-1.5'>
                <span className='text-white font-bold text-2xl'>
                  VerbalScripts
                </span>
              </a>

              <a href='#' className='-m-1.5 p-1.5'>
                <span className='text-gray-300  text-lg'>Get a Quote</span>
              </a>

              <a href='#' className='-m-1.5 p-1.5'>
                <span className='text-gray-300  text-lg'>Order Now</span>
              </a>

              <a
                href='mailto:sales@verbalscripts.com leading-7'
                className='-m-1.5 p-1.5'
              >
                <span className='text-gray-300 text-lg '>
                  sales@verbalscripts.com
                </span>
              </a>

              <a href='#' className='-m-1.5 p-1.5 leading-7'>
                <span className='text-gray-300 text-lg hover:text-yellow-400'>
                  44, Tehama st. Fransisco
                </span>
              </a>

              <a
                href='tel:+1 (800) 275-5513'
                className='-m-1.5 p-1.5 leading-7'
              >
                <span className='text-gray-300  text-lg hover:text-yellow-400'>
                  +1 (800) 275-5513
                </span>
              </a>

              <a href='#' className='-m-1.5 p-1.5 leading-7'>
                <span className='text-gray-300  text-lg hover:text-yellow-400'>
                  Contact Us
                </span>
              </a>
            </div>

            <div className='flex flex-col'>
              <a href='#' className='-m-1.5 mb-3  p-1.5'>
                <span className='text-gray-100 font-bold text-xl'>
                  Services
                </span>
              </a>

              {services.map((item) => (
                <a key={item.name} href='#' className='-m-1.5 p-1.5 '>
                  <span className='text-gray-300  text-lg hover:text-yellow-400'>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col'>
              <a href='#' className='-m-1.5 mb-3 p-1.5'>
                <span className='text-gray-100 font-bold text-lg'>
                  Industry Solutions
                </span>
              </a>

              {solutions.map((item) => (
                <a key={item.name} href='#' className='-m-1.5 p-1.5'>
                  <span className='text-gray-300  text-lg hover:text-yellow-400'>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col'>
              <a href='#' className='-m-1.5 mb-3 p-1.5'>
                <span className='text-gray-100 font-bold text-lg'>
                  Resources
                </span>
              </a>

              <a href='#' className='-m-1.5 p-1.5'>
                <span className='text-gray-300 text-lg hover:text-yellow-400'>
                  Freelancers
                </span>
              </a>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='text-gray-300 text-lg hover:text-yellow-400'>
                  Customer Support
                </span>
              </a>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='text-gray-300 text-lg hover:text-yellow-400'>
                  Faqs
                </span>
              </a>

              <a href='#' className='-m-1.5 mt-5 p-1.5'>
                <span className='text-gray-100 font-bold text-lg'>
                  For Freelancers
                </span>
              </a>

              <a
                href='#'
                className='my-2.5 inline-block rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Join Us
              </a>
            </div>
          </dl>

          <div className='flex flex-col md:flex-row  md:justify-center md:items-center text-gray-300 py-4 text-md'>
            <a href='#' className='px-1.5  md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-yellow-400'>
                Client Terms
              </span>
            </a>{' '}
            <a href='#' className='px-1.5 md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-yellow-400'>
                Freelancer Terms
              </span>
            </a>
            <a href='#' className='px-1.5 md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-yellow-400'>
                Client Privacy & data securiy
              </span>
            </a>
            <a href='#' className='px-1.5 md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-yellow-400'>
                Freelancer Worker Privacy
              </span>
            </a>
            <a href='#' className='px-1.5 md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-yellow-400'>
                HIPAA Compliance
              </span>
            </a>
          </div>
        </div>

        <div className='flex justify-center text-gray-300 py-4 text-sm'>
          &copy; VerbalScripts 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
}
