import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';
import Faqs from '@/components/Faqs';
import { classNames } from '@/utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import ContentCard from './components/ContentCard';

export const metadata: Metadata = {
  title: 'VerbalScripts | Digital & Online Learning',
};

export default function Page() {
  const faqs: FaqsProp[] = [
    {
      title: 'How much does legal trascription cost?',
      content:
        'Legal transcription rates vary depending on the amount of customization, size, and timeline of your project. Please contact us so we can create a custom quote for you.',
    },
    {
      title: 'What type of transcription should i purchase?',
      content:
        'If you just need a plain text transcript to be used for research of submitted as evidence in a proceeding, you can order directly here. Our Standard transcription product is the most widely requested. Here’s a link to the different products we offer.<br></br>If you need specific legally formatted documents, such as a deposition transcription or court proceeding transcript, then you can contact us for a quote, and a member of our team will reach out immediately.',
    },
    {
      title: 'What are our working hours?',
      content:
        'We transcribe 24/7, however, our account and project managers are available 9am-5pm PST Monday through Friday. Our support team is also available 24/7 if an emergency should arise.',
    },
    {
      title: 'What are legal transcription services?',
      content:
        'Legal transcription is the process of taking different audio and video from legal proceedings and creating a true and accurate representation of the official record, formatted to specific jurisdictional requirements.<br><br>At Verbalscripts, we’ll work with you to provide the transcripts you need, in your required format.',
    },
    {
      title: 'How long does a transcription process take?',
      content:
        'The time that it takes to finish a transcript will depend on the duration and the audio quality. We strive to have most audio files that are 90 minutes or less, completed within 2-3 business days. ',
    },
  ];

  const features = [
    {
      name: 'Support for Research',
      description:
        'We offer precise transcriptions for academic research, interviews, and focus groups, ensuring detailed and reliable data for your studies.',

      imgUrl: '/education_industry/support.png',
    },
    {
      name: 'Accessibility & Compliance',
      description:
        'Our transcription services help educational institutions comply with accessibility regulations, making content available to all students, including those with disabilities.',

      imgUrl: '/education_industry/accessibilty.png',
    },
    {
      name: 'Interactive Transcripts',
      description:
        'We offer interactive transcripts that include hyperlinks, time-stamped notes, and multimedia integration, enhancing the learning experience for students.',
      imgUrl: '/education_industry/interactive.png',
    },
    {
      name: 'Enhanced Learning',
      description:
        'We ensure that lecture content is captured with precision, aiding in better comprehension and retention of course materials enhancing the learning experience by providing students with valuable study materials',
      imgUrl: '/education_industry/enhanced.png',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative mx-auto max-w-7xl mx education_landing z-[10] h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-32 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>

        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-xl'>
            <h1 className='text-4xl font-bold capitalize  text-gray-900 sm:text-5xl'>
              Digital & Online Learning Industry
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              Top-notch Solutions Tailored for Educators, Students, and Academic
              Institutions.
            </p>

            <div className='mt-10 flex flex-wrap space-y-5 lg:space-y-0  justify-start lg:flex-nowrap md:items-center space-x-5'>
              <a
                href='/contact-us'
                className=' rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Contact Sales</span>
              </a>

              <a
                href='/contact-us'
                className='inline-flex flex-nowrap lg:space-x-4  text-xl underline underline-offset-4 transition font-semibold text-indigo-600  hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 '
              >
                <span className='flex'>Request a Quote</span>
                <FontAwesomeIcon className='ml-2 w-5' icon={faLongArrowRight} />
              </a>
            </div>
          </div>
          {/* <div className='md:min-w-[20rem] lg:max-w-[30rem]'>
            <img src='/industry/industry-landing.jpg' className='' alt='' />
          </div> */}
        </div>
      </div>

      <div className='bg-gray-100 py-0 '>
        <PopularPartner />
      </div>

      <div className='bg-white'>
        <div className='mx-auto max-w-7xl py-5 md:py-24 lg:py-32     px-5 md:px-24 lg:px-32'>
          <div className='mx-auto max-w-4xl'>
            <h2 className='text-xl font-bold leading-7 text-left md:text-center capitalize secondary-text'>
              What Benefits gained in the Educational Industry?
            </h2>
            <p className='mt-2 text-4xl md:text-5xl  font-bold text-left md:text-center text-gray-900 section-title'>
              <span className='relative z-10'>
                Empowering{' '}
                <span className='z-10 absolute -bottom-2.5 right-0'>
                  <img src='/svg/lines.svg' className='w-44' alt='' />
                </span>
              </span>{' '}
              Accurate & Accessible educational content.
            </p>
            <div className='px-6 text-gray-800 text-lg text-left md:text-center'>
              We understand the unique needs of the media industry and are
              dedicated to providing accurate, timely, and secure transcription
              solutions that enhance your production workflow.
            </div>
          </div>
          <div className='py-10 md:py-24'>
            <dl className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5'>
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className={classNames(
                    'relative py-8 px-4 lg:px-3 xl:px-5  border border-gray-200 bg-white rounded-xl',
                  )}
                >
                  <dt className='flex flex-col items-center text-base font-semibold leading-7 text-gray-900 '>
                    <Image
                      alt={feature.name}
                      src={feature.imgUrl}
                      height={75}
                      width={75}
                      className='mb-5'
                    />
                    <span className='text-[1.35rem] text-center'>
                      {feature.name}
                    </span>
                  </dt>
                  <dd className='text-lg text-center mt-2 text-md leading-6 text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className='text-center why-education-industry-bg rounded-2xl md:py-24 py-32'>
            <a
              href='/get-quote'
              className='inline-flex  rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
            >
              <span>Get a Quote</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className='relative z-[15] py-10 md:py-16'
        style={{ background: '#FAFAFA' }}
      >
        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white'>
            Our Solutions for The Education Industry?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Empowering Learning with Precise Solutions from VerbalScripts
          </p>
        </div>

        <div className='absolute -z-[1] top-0 left-0 w-full h-[15rem] why_media_industry_top'></div>

        <div className='absolute top-[14rem] left-0  w-full -z-[1] media_industry_pattern'></div>

        <div className='absolute bottom-0 left-0 w-full -rotate-180 -z-[1] media_industry_pattern'></div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <ContentCard
              title='Lectures and Seminars'
              direction='bottom'
              description='Transcribe classroom lectures and seminars to provide students with comprehensive and accessible study materials, reinforcing learning and serving as an excellent resource for exam preparation and review of complex concepts.'
              imgSrc='/education_industry/lectures.svg'
            />

            <ContentCard
              title='Online Courses'
              direction='top'
              description='Ensure that all spoken content in online courses is accurately transcribed to enhance the learning experience and accessibility, helping students who prefer reading to listening and supporting those with hearing impairments.'
              imgSrc='/education_industry/online class.svg'
            />
          </div>
        </div>

        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            Research and Development
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Enhancing Research with Clear Documentation
          </p>
        </div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            
          <ContentCard
              title='Interviews and Focus Groups'
              direction='top'
              description='Document research interviews and focus groups meticulously to preserve valuable insights, ensuring that nuanced information is captured for thorough analysis and accurate conclusions.'
              imgSrc='/education_industry/interviewfocusgrup.svg'
            />

            <ContentCard
              title='Academic Conferences'
              direction='bottom'
              description='Transcribe conference presentations and discussions to make research findings accessible and shareable, aiding in the dissemination of knowledge and allowing participants to revisit important discussions for ongoing learning and collaboration.'
              imgSrc='/education_industry/acadconferenc.svg'
            />
          </div>
        </div>
      </div>

      <HowItWorks custom_class='legal-how-it-works' />

      <div
        className='bg-white relative isolate'
        style={{ background: 'FAFAFA' }}
      >
        <div className='relative overflow-hidden transition transform-gpu'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8 xl:px-14'>
            <div className='relative isolate py-24   px-6   sm:px-16 md:py-10  lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0'>
              <div className='md:min-w-[28rem] lg:min-w-[30rem]  lg:mx-0 lg:flex-auto lg:py-24 lg:text-left'>
                <h2 className='text-4xl md:text-[2.8rem] font-bold leading-10 section-title  text-gray-800 '>
                Ready to enhance your educational content with Us?
                </h2>
                <p className='mt-6  text-xl leading-8 text-gray-600'>
                  Contact us today to discuss your requirements and discover how
                  our specialized transcription solutions can benefit your legal
                  practice.
                </p>

                <div className='mt-10 flex items-center flex-wrap justify-center gap-6 lg:justify-start'>
                  <a
                    href='/contact-us'
                    className='rounded-xl btn-vlg px-7 py-2.5 text-lg font-semibold text-white transition focus:ring-4 focus:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className='hidden lg:block relative mt-16 h-80 lg:-mt-8 pr-10'>
                <img
                  className='lg:w-[28rem] xl:w-[32rem] max-w-none'
                  src='/education_industry/unfocused-restaurant-with-tidy-tables.jpg'
                  alt='Ready to Succeed with our transcription service'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' py-14 sm:py-12 bg-gray-100'>
        <div className='mx-auto max-w-7xl relative'>
          <div className='mx-auto px-6 md:px-0 md:max-w-2xl text-left lg:text-center'>
            <p className='mt-2 text-4xl font-bold  section-title text-gray-900 md:text-5xl'>
              Digital & Online Learning Frequently asked questions
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>

          <div className='py-10 px-6'>
            <Faqs faqs={faqs} />
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
