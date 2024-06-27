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
  title: 'VerbalScripts | Corporate & General Business',
};

export default function Page() {
  const faqs: FaqsProp[] = [
    {
      title: 'What is general business transcription, and what documents does Verbalscripts transcribe?',
      content:
        `General transcription for the business industry involves converting audio or video recordings into written transcripts. This service is essential for accurately documenting various business communications such as meetings, interviews, conferences, and other events, ensuring that information is easily accessible and well-recorded.<br /><br />
Verbalscripts specializes in transcribing a wide range of business documents, including but not limited to meeting minutes, conference call recordings, interviews, webinars, podcasts, training sessions, and customer service calls. Our transcription services are tailored to meet the unique requirements of corporate clients, providing accurate, timely, and confidential transcripts to support your business operations.
` },
    {
      title: 'How do I start using Verbalscripts\' transcription services for my business?',
      content:
   `Starting with Verbalscripts is straightforward. Contact us via <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='mailto:support@verbalscripts.com'
            >
              <span class='font-semibold'>Email</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>, <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='/contact-us '
            >
              <span class='font-semibold'>Chat</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>, <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='https://wa.me/17279668531'
            >
              <span class='font-semibold'>Whatsapp</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>, or 
            <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='tel:+1 (727) 966-8531'
            >
              <span class='font-semibold'>Call</span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a>
            , and we will assist you promptly. You can securely <a
              class='relative border-b border-indigo-600 group  py-0.5 px-1.5 text-indigo-600'
              href='/upload-files'
            >
              <span class='font-semibold'>Upload </span>
              <span class='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full group-hover:transition-all'></span>
            </a> your audio or video files through our 24/7 online services. Discuss your project requirements directly with our team to ensure we meet your needs.
`
    },
    {
      title: 'What measures does Verbalscripts have in place to ensure confidentiality and security?',
      content:
        `At Verbalscripts, we take confidentiality and security very seriously. All files are encrypted during transfer and storage. Our transcribers sign non-disclosure agreements (NDAs) to ensure your information remains private and secure. We can also sign specific confidentiality agreements provided by clients.`   },
    {
      title: 'What format do you deliver your transcripts in?',
      content:
      `We pride ourselves on offering transcripts in your preferred format. By default, we deliver transcripts via email in Microsoft Word format. However, we can accommodate requests for PDF, Word Perfect, or plain text formats. Please specify your preferred format or send us a template before commencing your project, and we'll gladly meet your needs.` },
  ];

  const features = [
    {
      name: 'Unmatched Precision.',
      description:
        'We meticulously transcribe every business document, ensuring accuracy and clarity in every detail.',

      imgUrl: '/corporate_industry/precision.png',
    },
    {
      name: 'Professional Quality.',
      description:
        'Our transcriptions maintain a high standard of professionalism, capturing every detail of your business meetings, interviews, and conference calls.',

      imgUrl: '/corporate_industry/quality.png',
    },
    {
      name: 'Time-Saving Efficiency.',
      description:
        'Free up valuable time by letting our expert team handle your transcription needs, so you can focus on what matters most—your business.',
      imgUrl: '/corporate_industry/efficiency.png',
    },
    {
      name: 'Customized Formats.',
      description:
        'We provide transcripts in various formats as per your business needs, ensuring seamless integration with your internal processes and systems.',

      imgUrl: '/corporate_industry/customized.png',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative enterprise_landing z-[10] h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-24 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>

        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-xl'>
            <h1 className='text-4xl font-bold capitalize  text-gray-900 sm:text-5xl'>
              Corporate & General Business Industry
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              Precise transcriptions for streamlined business operations.
            </p>

            <div className='mt-10 flex flex-wrap space-y-5 lg:space-y-0  justify-start lg:flex-nowrap md:items-center space-x-5'>
              <a
                href='/contact-us'
                className=' rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Contact Sales</span>
              </a>

              <a
                href='/get-a-quote'
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

      <div className='why-corporate-industry-bg'>
        <div className='mx-auto max-w-7xl py-5 md:py-24 lg:py-32     px-5 md:px-16 lg:px-10'>
          <div className=''>
            <div className='mx-auto max-w-2xl lg:max-w-4xl text-left md:text-center bg-white rounded-xl py-10 px-10'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What Benefits gained in your Business Industry?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left md:text-center text-gray-900 section-title'>
                <span className='relative z-10'>
                  Unique{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
               benefits VerbalScripts offers to corporate professionals.
              </p>
            </div>
            <div className='py-10 md:py-24'>
              <dl className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-x-5 lg:gap-y-5'>
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className={classNames(
                      'relative py-8 px-4 lg:px-3 xl:px-5  shadow-sm bg-white rounded-xl',
                    )}
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
                    <dd className='text-lg text-center mt-2 text-md leading-6 text-gray-500'>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className='text-center'>
              <a
                href='/get-quote'
                className='inline-flex  rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span>Get a Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className='relative z-[15] py-10 md:py-16'
        style={{ background: '#FAFAFA' }}
      >
        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            Our Solutions for Corporate & General Business?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Enhancing Business Operations with Better Solutions Through
            VerbalScripts
          </p>
        </div>

        <div
          style={{ background: '#8468f5' }}
          className='absolute -z-[1] top-0 left-0 w-full bg-indigo-500 h-[15rem]'
        ></div>

        <div className='absolute top-[14rem] left-0  w-full -z-[1] why_industry_bg'></div>

        <div className='absolute bottom-0 left-0 w-full -rotate-180 -z-[1] why_industry_bg'></div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <div className='flex flex-col gap-y-5 lg:gap-y-8'>
              <ContentCard
                title='Meetings and Conferences'
                description='Capture every crucial detail of your corporate meetings and
              conferences to ensure nothing slips through the cracks.'
                imgSrc='/corporate_industry/meetingconference.svg'
              />
              <ContentCard
                title='Business Presentations'
                description='Ensure the full content of business presentations is documented, making information easily accessible for future reference and sharing.'
                imgSrc='/corporate_industry/business presentation.svg'
              />
            </div>

            <ContentCard
              title='Board Meetings and Annual Reports'
              direction='vertical'
              description='Step into the boardroom with confidence as we meticulously record every detail of your board meetings. From annual reports to strategic discussions, our accurate transcriptions empower you with transparent insights for informed decision-making, ensuring your organization"s success.'
              imgSrc='/corporate_industry/board&annualreport.svg'
            />
          </div>
        </div>

        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            Training, Development, and Market Insights
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Empower Growth, Enhance Insights
          </p>
        </div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <ContentCard
              title='Customer Interactions'
              direction='vertical'
              description='Capture every customer service calls and corporate communications to boost quality, ensure compliance, and elevate customer satisfaction. Our team help you review interactions, identify training needs, and maintain transparent records, empowering your team to deliver exceptional service and make informed decisions.'
              imgSrc='/corporate_industry/Customer interaction.svg'
            />

            <div className='flex flex-col gap-y-5 lg:gap-y-8'>
              <ContentCard
                title='Training and Webinars'
                description='Create comprehensive records of training sessions and webinars, providing valuable resources for employee onboarding and professional growth.'
                imgSrc='/corporate_industry/training.svg'
              />
              <ContentCard
                title='Interviews and Focus Groups'
                description='Transcribe interviews and focus groups accurately to gather essential data for market research and internal evaluations.'
                imgSrc='/corporate_industry/interviewfocusgr.svg'
              />
            </div>
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
                  Ready to enhance your corporate business with Us?
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
                  src='/corporate_industry/businessman-with-cv.jpg'
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
              Corporate & Business FAQs
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
