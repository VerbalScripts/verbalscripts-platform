import React from 'react';

// import {
//   LogoLinkedin,
//   LogoFacebook,
//   LogoGithub,
//   LogoInstagram,
// } from 'react-ionicons';

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
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function AppFooter() {
  const services: Array<NavLabel> = [
    {
      name: 'Legal Transcription',
      description: 'Build strategic funnels that will convert',
      href: '/services/legal',
      icon: ArrowPathIcon,
      subtitle: 'Data Labeling customized to your needs',
      features: [
        'Enhance your artifical intelligence',
        'Global network of experts',
        'Highest quality annotated data',
      ],
      price: '0.10$ per task',
    },
    {
      name: 'Video and Audio Transcription',
      description: 'Speak directly to your customers',
      href: '/services/audio-and-video',
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
      name: 'General Transcription',
      description: 'Build strategic funnels that will convert',
      href: '/services/general',
      icon: ArrowPathIcon,
      subtitle: 'Data Labeling customized to your needs',
      features: [
        'Enhance your artifical intelligence',
        'Global network of experts',
        'Highest quality annotated data',
      ],
      price: '0.10$ per task',
    },
    {
      name: 'Focus groups and Interviews',
      description: 'Get a better understanding of your traffic',
      href: '/services/focus-groups-and-interviews',
      icon: ChartPieIcon,
    },
    {
      name: 'Medical Transcription',
      description: 'Your customers’ data will be safe and secure',
      href: '/services/medical',
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
      name: 'Academic & Conference Transcription',
      description: 'Connect with third-party tools',
      href: '/services/academic-and-conference',
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
  ];

  const solutions: Array<NavLabel> = [
    {
      name: 'Court reporting & Legal',
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/industry/legal',
      icon: NewspaperIcon,
    },
    {
      name: 'Corporate & general business',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/industry/legal',

      icon: ChartBarIcon,
    },
    {
      name: 'Media production',
      description:
        'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
      href: '/solutions/media',

      icon: NewspaperIcon,
    },
    {
      name: 'Education',
      description:
        'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
      href: '/solutions/academic',
      icon: AcademicCapIcon,
    },
    {
      name: 'Digital & online learning',
      description:
        'Transcription that is perfect for all types of qualitative research needs, including focus groups, surveys and in-depth interviews.',

      href: '/solutions/education',
      icon: ChartBarIcon,
    },
    {
      name: 'Government',
      description:
        'Making live events, meetings, ad campaigns and press briefings more accessible and actionable.',
      href: '/industry/government',
      icon: MicrophoneIcon,
    },
    {
      name: 'Healthcare',
      description:
        'Making live events, meetings, ad campaigns and press briefings more accessible and actionable.',
      href: '/industry/healthcare',

      icon: BuildingOffice2Icon,
    },
  ];

  return (
    <div className='relative isolate overflow-hidden pb-36 md:pb-0 pt-16 sm:pt-14 lg:pt-24'>
      <div className='mx-auto max-w-7xl lg:max-w-6xl px-6 lg:px-8 xl:px-22'>
        {/* <div className='mx-auto flex flex-col md:flex-row   md:justify-between md:items-end border-b border-gray-300/10 pb-12 mb-8'>
          <div className=''>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Stay in the know.
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-200'>
              Get Discount coupons and updates from VerbalScripts
            </p>

            <div className='mt-6 flex flex-col md:flex-row  gap-5 '>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='w-full min-w-80 lg:min-w-2xl  flex-auto rounded-md border-0 bg-white/5 px-3.5 py-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <button
                type='submit'
                className='flex-none max-w-40 md:max-w-none rounded-full bg-indigo-600 px-7 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className='flex items-center mt-5 gap-x-3'>
            <a
              href=''
              className='text-center mb-3 flex h-12 w-12 items-center justify-center'
            >
              <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
            </a>
            <a
              href=''
              className='text-center mb-3 flex h-12 w-12 items-center justify-center'
            >
              <FontAwesomeIcon icon={faXTwitter} className='h-6 w-6' />
            </a>

            <a
              href=''
              className='text-center mb-3 flex h-12 w-12 items-center justify-center'
            >
              <FontAwesomeIcon icon={faFacebook} className='h-6 w-6' />
            </a>

            <a
              href=''
              className='text-center mb-3 flex h-12 w-12 items-center justify-center'
            >
              <FontAwesomeIcon icon={faGithub} className='h-6 w-6' />
            </a>
          </div>
        </div> */}
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
          <div className='grid justify-evenly grid-cols-1 md:grid-cols-3   lg:gap-x-8 gap-y-10  lg:grid-cols-4 lg:gap-y-16  pb-12'>
            <div className='flex items-center flex-col gap-y-2'>
              <a
                href='#'
                aria-label='Verbalscripts footer logo'
                className='-m-1.5  mb-1 p-1.5 -mt-10'
              >
                <Image
                  src='/icons/logo-png.png'
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='w-[13rem] md:w-[11rem] lg:w-[10rem] '
                  alt='verbalscript footer logo'
                  width={150}
                  height={140}
                />
              </a>

              <a
                href='mailto:sales@verbalscripts.com'
                aria-label='Company Sales Email'
                className='-m-1.5 p-1.5'
              >
                <span className='text-gray-300 text-lg '>
                  sales@verbalscripts.com
                </span>
              </a>

              <a
                href='tel:+1 (727) 966-8531'
                aria-label='Company Telephone'
                className='-m-1.5 p-1.5 leading-7'
              >
                <span className='text-gray-300  text-lg hover:text-indigo-500'>
                  +1 (727) 966-8531
                </span>
              </a>

              <div className='flex items-center mt-5 gap-x-3'>
                <a
                  href=''
                  aria-label='LinkedIn handle'
                  className='text-center mb-3  rounded-xl transition hover:bg-indigo-500 flex h-10 w-10 items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className='h-6 w-6 text-white'
                  />
                </a>
                <a
                  href=''
                  aria-label='Twitter handle'
                  className='text-center mb-3 flex h-10 w-10 rounded-xl transition hover:bg-indigo-500 items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className='h-6 w-6 text-white'
                  />
                </a>

                <a
                  href=''
                  aria-label='Facebook handle'
                  className='text-center mb-3 flex rounded-xl transition hover:bg-indigo-500 h-10 w-10 items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='h-6 w-6 text-white'
                  />
                </a>
                <a
                  target='_blank'
                  aria-label='Instagram handle'
                  href='https://www.instagram.com/verbal_scripts?igsh=dDliMGVkNnhoYmdv'
                  className='text-center mb-3 flex rounded-xl transition hover:bg-indigo-500 h-10 w-10 items-center justify-center'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='h-6 w-6  text-white'
                  />
                </a>
              </div>

              <div className='-m-1.5 mt-3 p-1.5  inline-flex '>
                <a
                  href='/contact-us'
                  aria-label='Contact Us'
                  className='bg-indigo-600 text-white font-semibold text-md rounded-full px-5 py-2.5 hover:bg-indigo-500 '
                >
                  Huge Project? Get In Touch
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-y-2'>
              <a href='#' className='-m-1.5 mb-3  p-1.5'>
                <span className=' font-bold text-xl footer-title'>
                  Services
                </span>
              </a>

              {services.map((item) => (
                <a key={item.name} href={item.href} className='-m-1.5 p-1.5 '>
                  <span className='text-gray-300 text:md  lg:text-lg hover:text-indigo-500'>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col gap-y-2'>
              <a href='#' className='-m-1.5 mb-3 p-1.5'>
                <span className=' font-bold text-lg footer-title'>
                  Industries
                </span>
              </a>

              {solutions.map((item) => (
                <a key={item.name} href={item.href} className='-m-1.5 p-1.5'>
                  <span className='text-gray-300 text:md  lg:text-lg hover:text-indigo-500'>
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            <div className='flex flex-col gap-y-2'>
              <a href='#' className='-m-1.5 mb-3 p-1.5'>
                <span className='font-bold text-lg footer-title'>Company</span>
              </a>
              <a
                href='/about-us'
                className='-m-1.5 p-1.5 hover:text-indigo-500'
              >
                <span className='text-gray-300 text:md  lg:text-lg'>
                  About Us
                </span>
              </a>
              <a
                href='/contact-us'
                className='-m-1.5 p-1.5 hover:text-indigo-500'
              >
                <span className='text-gray-300 text:md  lg:text-lg '>
                  Support
                </span>
              </a>

              <a href='/faqs' className='-m-1.5 p-1.5 hover:text-indigo-500'>
                <span className='text-gray-300 text:md  lg:text-lg '>FAQs</span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-between flex-wrap md:flex-nowrap  items-center'>
          <div className='flex mt-3 md:mt-0  items-center flex-wrap'>
            <a href='/legal/terms-of-service' className='px-1.5  py-0 md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-indigo-500'>
                Terms of service
              </span>
            </a>{' '}
            <a href='/legal/privacy-policy' className='px-1.5 md:border-r border-gray-300'>
              <span className='text-gray-300  hover:text-indigo-500'>
                Privacy Policy
              </span>
            </a>
           
            <a href='/legal' className='px-1.5  '>
              <span className='text-gray-300  hover:text-indigo-500'>
                Legal
              </span>
            </a>
          </div>
          <div className='text-gray-300 py-4 text-sm'>
            &copy; VerbalScripts 2024. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
