import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';

import HowItWorks from '@/components/HowItWorks';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  const audio_video_theme = [
    {
      imgUrl: '/academic_conference/researchpresentation.svg',
      title: 'Research Presentations',
      description:
        'Dive deep into the heart of your research as we meticulously transcribe your groundbreaking discoveries and findings.',
    },
    {
      imgUrl: '/academic_conference/paneldiscussion.svg',
      title: 'Panel Discussions',
      description:
        'Capture the essence of lively panel discussions, debates, and exchanges of ideas, preserving every thought-provoking moment.',
    },
    {
      imgUrl: '/academic_conference/conferenceproceedings.svg',
      title: 'Conference Proceedings',
      description:
        'Transform comprehensive conference proceedings into accessible, searchable transcripts, providing a wealth of knowledge at your fingertips.',
    },
    {
      imgUrl: '/academic_conference/academiclectures.svg',
      title: 'Academic Lectures',
      description:
        'Transform scholarly presentations and academic lectures into written treasures, ensuring their impact reverberates far beyond the conference hall.',
    },
    {
      imgUrl: '/academic_conference/Q&A-sessions.jpg',

      title: 'Q&A Sessions',
      description:
        'Preserve the exchange of knowledge and expertise during engaging question-and-answer sessions, ensuring no valuable insight is lost.',
    },
    {
      imgUrl: '/academic_conference/workshipsession.svg',

      title: 'Workshop Sessions',
      description:
        'Document collaborative workshops and brainstorming sessions, capturing every innovative idea and creative solution.',
    },
  ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='landing-page-alt'>
        <div className='relative mx-auto max-w-7xl  h-auto  px-6 py-20   pb-40 md:py-20 lg:py-36 md:px-20 lg:px-28'>
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
          <div className='flex flex-wrap  lg:flex-nowrap items-center gap-x-10 '>
            <div className='max-w-2xl md:max-w-4xl'>
              <h1 className='text-4xl font-bold capitalize tracking-tight text-gray-800 sm:text-5xl'>
                Academic & Conference Transcription
              </h1>

              <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
                With VerbalScripts, your academic and conference materials are
                in capable hands, ensuring accurate transcriptions that
                transform into a valuable resource, ready to inspire, inform,
                and enlighten.
              </p>

              {/* <div className='lg:hidden   py-5 px-5 max-w-[18rem]'>
                <div className='px-4 border-l-4 secondary-border'>
                  <div className='text-gray-700 font-semibold '></div>
                  <div className='text-gray-700 font-semibold mb-3'>
                    From{' '}
                    <span className='py-1.5 px-2 bg-gray-300 rounded-full'>
                      Human Transcripted
                    </span>
                    <br></br>
                    <span className='footer-title text-3xl font-bold'>$1</span>
                    <br></br> per minute 98% accuracy
                  </div>
                </div>
              </div> */}

              <div className=' mt-10 max-w-[18rem] '>
                <div className='px-4 border-l-4 secondary-border bg-white py-3 rounded-tr-2xl'>
                  <div className='text-gray-700 font-semibold '></div>
                  <div className='text-gray-700 font-semibold mb-3 space-y-2'>
                    <div>
                      <span className='py-1.5 px-3 bg-gray-300 text-sm rounded-full'>
                        100% Human Transcribed
                      </span>
                    </div>

                    <div>
                      From{' '}
                      <span className='footer-title text-2xl font-bold my-2'>
                        $ 0.75
                      </span>{' '}
                      per minute
                    </div>
                    <div>98%+ accuracy</div>
                  </div>
                </div>
              </div>
              <div className='lg:hidden mt-5'>
                <a
                  href='/upload-files'
                  className='inline-flex flex-nowrap  items-center space-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span className='flex'>Order Now</span>
                  <FontAwesomeIcon
                    className='ml-2 w-5'
                    icon={faLongArrowRight}
                  />
                </a>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
              <img
                src='/academic_conference/Discussion-rafiki.svg'
                className='max-w-[90%] lg:absolute object-cover -top-60'
                alt=''
              />
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
      </div>

      <div className='bg-gray-100 py-0 '>
        <PopularPartner />
      </div>

      <div className='py-10 md:py-16 steps-section-bg '>
        <div className='mx-auto max-w-7xl    px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6 rounded-md md:px-8 md:py-10 bg-white/30 ring-1 ring-white/10'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Academic & Conference Transcription?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                <span className='relative z-10'>
                  Transforming.{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                Research Discussions into Knowledge For You
              </p>
            </div>
            <div>
              <ul className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col gap-y-5'>
                <li>
                  From keynote speeches to panel discussions, we capture every
                  word with precision and clarity.
                </li>
                <li>
                  Our transcriptionists are skilled in handling diverse subject
                  matters and technical terminology commonly found in academic
                  and conference settings.
                </li>
                <li>
                  We prioritize the confidentiality of your academic research
                  and conference presentations, adhering to strict data security
                  measures.
                </li>
                <li>
                  Tailor our services to your specific requirements, including
                  formatting preferences and turnaround times.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:order-2 lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why choose us?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                <span className='relative z-10'>
                  Ideal Choice.{' '}
                  <span className='z-10 absolute -bottom-2.5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                for your Academic & Conference Transcription Needs
              </p>

              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Order Now</span>
                </a>
              </div>
            </div>
            <div className='px-6 md:px-12'>
              <ul className='lg:mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col space-y-2'>
                <li>
                  Our commitment to precision ensures accurate documentation of
                  academic research findings and conference discussions,
                  facilitating knowledge dissemination and collaboration.
                </li>
                <li>
                  Save time and resources by outsourcing transcription tasks to
                  our expert team, allowing researchers and conference
                  organizers to focus on their core activities.
                </li>
                <li>
                  We adapt to your schedule and requirements, providing flexible
                  transcription options to meet your deadlines and preferences.
                </li>
                <li>
                  Benefit from our team{"'"}s expertise and dedicated customer
                  support throughout the transcription process, ensuring a
                  seamless experience from start to finish.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-3xl text-left md:text-center px-6 md:px-16 lg:px-16 xl:px-28'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            What are Our Supported Contents?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Lets Get Straight To your Content
          </p>
        </div>

        <div className='mx-auto max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-1 md:grid-cols-2   lg:gap-x-8 gap-y-12  lg:grid-cols-2 lg:gap-y-5  pb-12'>
            {audio_video_theme.map((content) => (
              <div key={content.title}>
                <div className='max-h-[18rem]'>
                  <img
                    src={content.imgUrl}
                    className='rounded-sm object-cover'
                    alt=''
                  />
                </div>
                <div className='px-8'>
                  <div className='mb-5 text-center text-2xl md:text-3xl text-gray-900 capitalize font-bold mt-5'>
                    {content.title}
                  </div>

                  <div className='text-gray-600 text-center capitalize'>
                    {content.description}
                  </div>
                  <div className='mt-5 text-center'>
                    <a
                      href='/upload-files'
                      className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-5 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                    >
                      <span>Order Now</span>
                      <FontAwesomeIcon
                        className='ml-4 w-5'
                        icon={faLongArrowRight}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HowItWorks />

      <AppFooter />
    </div>
  );
}
