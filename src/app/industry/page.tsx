import React from 'react';
import type { Metadata } from 'next';
import './style.css';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

export const metadata: Metadata = {
  title: 'VerbalScripts | Industry Solutions',
};

export default function Page() {
  const industry_solutions = [
    {
      imgUrl: '/industry/courtreporting.png',
      title: 'Court Reporting & Legal',
      href: '/industry/legal',
      description:
        'Confidential, precise legal transcription for hearings, depositions, and trials. Save time and resources with our affordable, reliable services. Experience unparalleled customer satisfaction and personalized support with Verbalscripts. Choose quality, confidentiality, and efficiency.',
    },
    {
      imgUrl: '/industry/corporate&generalbus.png',
      href: '/industry/enterprise',

      title: 'Corporate & General Business',
      description:
        'Verbalscripts excels in precise transcription services for boardroom discussions to investor calls, corporate meetings, conferences, interviews, and training sessions. With a commitment to confidentiality and accuracy, we empower businesses with clear, reliable transcripts crucial for informed decision-making and operational efficiency.',
    },
    {
      imgUrl: '/industry/mediaproduction.png',

      href: '/industry/media-production',
      title: 'Media Production',
      description:
        'Seamless transcription excellence: Elevate your content with Verbalscripts, from documentaries to interviews, conferences to podcasts, trust our precision and personalized Services.',
    },
    {
      imgUrl: '/industry/healthcasre.jpg',
      href: '/industry/healthcare',

      title: 'Healthcare',
      description:
        'VerbalScripts delivers precise transcription solutions tailored for the healthcare industry. From medical consultations and patient records to research interviews and healthcare conference. Trust VerbalScripts for clear, reliable transcripts that enhance communication and operational efficiency in healthcare settings.',
    },
    {
      imgUrl: '/industry/education.png',
      href: '/industry/education',

      title: 'Digital & Learning',
      description:
        'Verbalscripts excels in precise transcription services tailored for digital and online learning. Whether for virtual seminars, educational videos, online courses, or instructional webinars, we ensure accurate transcripts that enhance comprehension and accessibility. Trust Verbalscripts to deliver clear, reliable transcripts that support seamless knowledge dissemination and educational excellence.',
    },
    {
      imgUrl: '/industry/govt.png',
      title: 'Government',
      href: '/industry/government',
      description:
        'Empowering Governance through Precision: Verbalscripts delivers trusted transcription services for government hearings, meetings, and public discourse. With unwavering accuracy, confidentiality, and efficiency, we support transparent communication and informed decision-making.',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative industry_landing z-[10] h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-24 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>

        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-4xl'>
            <h1 className='text-4xl font-bold capitalize  text-gray-900 sm:text-5xl'>
              Popular Industry Solutions
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              Explore The Best Solutions For The Betterment of Your Industries
            </p>

            <div className='mt-10'>
              <a
                href='/get-a-quote'
                className='inline-flex rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Request a Quote</span>
              </a>
            </div>
          </div>
          {/* <div className='md:min-w-[20rem] lg:max-w-[30rem]'>
            <img src='/industry/industry-landing.jpg' className='' alt='' />
          </div> */}
        </div>
      </div>

      <div className='bg-gray-100 py-0'>
        <PopularPartner />
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-x-6'>
            <div className='md:min-w-[25rem] lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What Makes Our Transcription Services Stand Out?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                <span className='relative z-10'>
                  Crafting Clarity{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
                for Every Sector: Your Industry, Our Expertise.
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                At VerbalScripts, we believe in the power of tailored solutions
                to transform industries. Explore how our transcription services
                cater to diverse sectors, empowering businesses and
                professionals with accurate and accessible documentation.
              </p>
              <div className='mt-10'>
                <a
                  href='/get-a-quote'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-14 md:py-24'>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='mx-auto max-w-2xl lg:text-center '>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>
              What are the Industries Offered?
            </h2>
            <p className='text-3xl font-bold  text-gray-800 sm:text-4xl'>
              Tailored Solutions for your Industry
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>
        </div>
        <div className='mx-auto max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-1 md:grid-cols-2   lg:gap-x-8 gap-y-16  lg:grid-cols-2 lg:gap-y-5  pb-12'>
            {industry_solutions.map((content) => (
              <div key={content.title}>
                <div className='h-[15rem] -mb-5 lg:mb-20 xl:mb-32'>
                  <img
                    src={content.imgUrl}
                    className='rounded-sm object-cover'
                    alt={content.title}
                  />
                </div>
                <div className='px-8'>
                  <div className='mb-5 text-center text-3xl md:text-3xl text-gray-900 capitalize font-bold mt-5'>
                    {content.title}
                  </div>

                  <div className='text-gray-600 text-center xl:text-lg capitalize'>
                    {content.description}
                  </div>
                  <div className='mt-5 text-center'>
                    <span className='my-3 '>
                      <a
                        href={content.href}
                        // className='flex items-center text-orange-500 font-semibold text-xl underline underline-offset-4'
                        className='inline-flex flex-nowrap relative border border-indigo-600 group  py-1.5 px-2.5 text-indigo-600'
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6'>
            <div className='md:min-w-[25rem] lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Dont Know Where to Start?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                Experience the {}
                <span className='relative z-10'>
                  difference{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>
                our solutions can make for your industry.
              </p>
              <div className='mt-10'>
                <a
                  href='/contact-us'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
            <div>
              <div className='px-6 bg-red-100 md:mt-10 lg:mt-0 z-[15] relative  after:rounded-xl after:transition-all after:duration-70000 after:absolute after:-z-[5] after:left-5  after:top-5 after:md:w-[70%] after:lg:w-[85%] after:h-full hover:after:top-10 hover:after:left-10 after:bg-orange-300'>
                <img
                  src='/industry/why-industry.jpg'
                  className='  w-[90vw] -ml-7 object-contain lg:-ml-0 md:w-[28rem] max-w-none bg-white/5 ring-1 ring-white/10'
                  alt=''
                />
              </div>

              <p className='mx-auto max-w-2xl mt-20 text-lg leading-8 text-gray-700'>
                From legal firms, media agency, corporation, educational
                institution, government entity to healthcare providers, we{"'"}
                re here to tackle your transcription needs with precision and
                efficiency. Reach out today to transform your industry with
                VerbalScripts!
              </p>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
