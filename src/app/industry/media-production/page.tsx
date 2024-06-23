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
import NoMediaCard from './components/NoMediacard';

export const metadata: Metadata = {
  title: 'VerbalScripts | Media Production',
};

export default function Page() {
  const faqs: FaqsProp[] = [
    {
      title: 'What formats and templates do Verbalscripts accept?',
      content:
        `We are flexible and can accommodate almost any request when it comes to formats and templates. We tailor our services to your specific needs, as long as they do not involve proprietary software we cannot access. Please specify your preferred format or send us a template before commencing your project, and we'll gladly meet your needs.`,
    },
    {
      title: 'What is your turn-around times?',
      content:
        `Verbalscripts offer various turnaround options tailored to your needs. Our standard turnaround, the most cost-effective option, typically provides a 24 – 48-hour turn-around time. If you require faster service, inquire about our same-day services. Weekend turnaround is also available at no additional charge.
`  },
    {
      title: 'What are our working hours?How do you ensure the confidentiality of my files?',
      content:
        `We take confidentiality and security very seriously. All files are encrypted during transfer and storage. Our transcribers sign non-disclosure agreements (NDAs) to ensure your information remains private and secure. If you would like us to sign NDA prior to uploading your files, let us know and we will oblige. 
`},
    {
      title: 'Do you offer any discounts for bulk orders?',
      content:
    `Yes, we offer discounts for bulk orders and long-term contracts. Please contact our sales team to discuss your specific needs and receive a customized quote. We look forward to working with you!
` },
    {
      title: 'Can I request revisions to my transcript?',
      content:
        `At Verbalscripts, we are dedicated to delivering precise and high-quality transcription services through a four-step process that includes transcribing, reviewing, proofing, and formatting. This ensures that our transcripts meet the highest standards of accuracy.<br /><br />
In the rare instance that you are not fully satisfied with the transcript, we offer a thorough review process. If any errors are found that do not meet your requirements, we will gladly correct them to ensure your complete satisfaction. Your feedback is important to us, and we are committed to delivering a final product that meets your expectations.
`    },
  ];

  const features = [
    {
      name: 'Enhanced Accessibility',
      description:
        'Transcripts make your content accessible to a wider audience, including those with hearing impairments, and improve search engine optimization (SEO).',

      imgUrl: '/media_industry/accessibility.png',
    },
    {
      name: 'Time-Coded Transcripts',
      description:
        'For video and audio production, we offer time-coded transcripts that simplify the editing process and ensure precise synchronization.',

      imgUrl: '/media_industry/time-saving.png',
    },
    {
      name: 'Industry-Specific Jargon',
      description:
        'Our transcriptionists are familiar with industry-specific jargon used in media production, ensuring that the unique terminology of your content is accurately captured.',
      imgUrl: '/media_industry/industry-specific.png',
    },
  ];
  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative media_landing z-[10] h-auto  px-6 py-20 md:pt-0 pb-10 md:pb-30 md:py-24 lg:py-32 md:px-20 lg:px-28'>
        <div className='landing-page-video-wrapper'></div>

        {/* <div className='absolute -z-[1] blur-sm bottom-0 right-0 -rotate-180 left-0 why_industry_bg'></div> */}
        <div className='flex flex-wrap  lg:flex-nowrap items-center lg:space-x-10  space-y-10'>
          <div className='max-w-2xl lg:max-w-xl'>
            <h1 className='text-4xl font-bold capitalize  text-gray-900 sm:text-5xl'>
              Media Production Industry
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              Enhancing Your Media Production for Engaging Content of Your
              Audience.
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

      <div className='why-media-industry-bg'>
        <div className='mx-auto max-w-7xl py-5 md:py-24 lg:py-32     px-5 md:px-24 lg:px-32'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                What Benefits gained in your Media Production?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left  text-gray-900 section-title'>
                <span className='relative z-10'>
                  Transforming{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                your Media Production into Unique Quality.
              </p>
            </div>
            <div className='px-6 text-gray-800 text-lg text-left'>
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
                    'relative py-8 px-4 lg:px-3 xl:px-5  shadow-sm bg-white rounded-xl',
                  )}
                >
                  <dt className='flex flex-col items-center text-base font-semibold leading-7 text-gray-900'>
                    <Image
                      className='mb-5'
                      alt={feature.name}
                      src={feature.imgUrl}
                      height={70}
                      width={70}
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
              href='/get-a-quote'
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
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            Our Solutions for Media Production Industry?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Crafting Perfect Content with Precision Through VerbalScripts For
            You
          </p>
        </div>

        <div className='absolute -z-[1] top-0 left-0 w-full h-[15rem] why_media_industry_top'></div>

        <div className='absolute top-[14rem] left-0  w-full -z-[1] media_industry_pattern'></div>

        <div className='absolute bottom-0 left-0 w-full -rotate-180 -z-[1] media_industry_pattern'></div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <ContentCard
              title='Post-Production Notes'
              direction='vertical'
              description='Detailed transcriptions of post-production notes help streamline the editing process, ensuring that every creative decision is documented and easily accessible for final cuts and reviews. This enhances the efficiency and quality of your production workflow.'
              imgSrc='/media_industry/postproduction.svg'
            />

            <div className='space-y-10'>
              <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
                <NoMediaCard
                  title='Script Transcriptions'
                  description='Ensure every word in your scripts is captured accurately for seamless production processes.'
                />
                <NoMediaCard
                  title='Footage Logging'
                  description='Streamline your editing process with detailed logs of raw footage, highlighting key moments and dialogue.'
                />
              </div>

              <ContentCard
                title='Interviews and Documentaries'
                description='Precisely transcribe interviews and documentaries for content creation and archival purposes.'
                imgSrc='/media_industry/interviews.svg'
              />
            </div>
          </div>
        </div>

        <div className='mx-auto max-w-6xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-xl font-semibold leading-7 text-white footer-title'>
            Broadcast and Digital Media
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Enhancing Broadcasts, Amplifying Reach
          </p>
        </div>

        <div className='mx-auto max-w-7xl flex flex-col  gap-y-5 lg:gap-y-10 py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
            <div className='space-y-10'>
              <ContentCard
                title='Live Events and Shows'
                description='Accurate transcriptions of live events capture every detail, aiding in post-event analysis, promotional content, and improving audience accessibility and engagement.'
                imgSrc='/media_industry/liveshow.svg'
              />
              <div className='grid max-w-none   place-content-center  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10'>
                <NoMediaCard
                  title='News Transcriptions'
                  description='Get accurate transcriptions of news segments for archiving and repurposing.'
                />
                <NoMediaCard
                  title='Conferences'
                  description='Document press conferences accurately for media kits, reports, and news articles.'
                />
              </div>
            </div>

            <ContentCard
              title='Podcast Transcriptions'
              direction='vertical'
              description='Precise transcriptions of your podcasts make your content more accessible, boosting engagement and reach. They provide a written record that can be easily searched, referenced, and repurposed for articles, social media posts, and more, maximizing the impact of each episode.'
              imgSrc='/media_industry/Podcast.svg'
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
                  Ready to enhance your media production with Us?
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
                  src='/media_industry/set-up-studio-shoot.jpg'
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
              Media & Production FAQs
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
