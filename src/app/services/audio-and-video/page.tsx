import React from 'react';
import type { Metadata } from 'next';

import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import PopularPartner from '@/components/PopularPartner';
import {
  ArrowLongRightIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'VerbalScripts | Services',
};

export default function Page() {
  const audio_formats = [
    {
      name: 'aac',
      icon: '/services/aac.png',
    },
    {
      name: 'flac',
      icon: '/services/flac.png',
    },
    {
      name: 'm3u',
      icon: '/services/m3u.png',
    },
    {
      name: 'mp4',
      icon: '/services/audio-mp4.png',
    },
    {
      name: 'amr',
      icon: '/services/amr.png',
    },
    {
      name: 'wmv',
      icon: '/services/wmv.png',
    },
    {
      name: 'asf',
      icon: '/services/asf.png',
    },
    {
      name: 'ogg',
      icon: '/services/ogg.png',
    },
    {
      name: 'mpg',
      icon: '/services/mpg.png',
    },
    {
      name: 'webm',
      icon: '/services/webm.png',
    },
    {
      name: 'pls',
      icon: '/services/pls.png',
    },
    {
      name: 'rtf',
      icon: '/services/rtf.png',
    },
    {
      name: 'm4a',
      icon: '/services/m4a.png',
    },
  ];

  const video_formats = [
    {
      name: 'mp4',
      icon: '/services/video-mp4.png',
    },
    {
      name: 'avi',
      icon: '/services/avi.png',
    },
    {
      name: 'mov',
      icon: '/services/mov.png',
    },
    {
      name: 'asf',
      icon: '/services/asf.png',
    },
    {
      name: 'amr',
      icon: '/services/amr.png',
    },
    {
      name: 'wmv',
      icon: '/services/wmv.png',
    },
    {
      name: 'ogg',
      icon: '/services/ogg.png',
    },
    {
      name: 'mpg',
      icon: '/services/mpg.png',
    },
    {
      name: 'flv',
      icon: '/services/flv.png',
    },
    {
      name: 'amr',
      icon: '/services/amr.png',
    },
    {
      name: 'wav',
      icon: '/services/wav.png',
    },
  ];

  const audio_video_theme = [
    {
      imgUrl: '/svg/podcast.svg',
      title: 'Meeting',
      description:
        'From lively Zoom, Microsoft Teams or Google Meets brainstorming sessions to productive conference calls, we capture every detail for seamless collaboration.',
    },
    {
      imgUrl: '',
      title: 'Podcasts',
      description:
        'Turn your captivating podcast episodes from Spotify, Apple Podcasts, or Google Podcasts into searchable text, expanding your audience reach and boosting SEO.',
    },
    {
      imgUrl: '',
      title: 'Seminars & Webinars',
      description:
        'Preserve the knowledge shared in dynamic webinars and seminars conducted on platforms like GoToWebinar or Zoom Webinar, making insights accessible long after the event ends.',
    },
    {
      imgUrl: '',
      title: 'Video & Voice Calls',
      description:
        'Capture important conversations from any platform, whether it"s a client meeting on Skype or a brainstorming session on Microsoft Teams, for future reference.',
    },
    {
      imgUrl: '',
      title: 'Sermons',
      description:
        'Spread inspiration with written versions of your powerful sermons from church recordings, to online streaming platforms, reaching a broader audience and fostering deeper reflection.',
    },
    {
      imgUrl: '',
      title: 'Testimonials',
      description:
        'Showcase the satisfaction of your clients by transforming heartfelt testimonials from video, audio, or written form into compelling written content.',
    },

    {
      imgUrl: '/svg/Webinar-pana.svg',
      title: 'Training Videos',
      description:
        'Enhance learning with transcriptions of your engaging training videos; corporate training sessions, or instructional videos, providing accessible resources for your team"s development.',
    },
    {
      imgUrl: '/svg/Webinar-pana.svg',
      title: 'Dictations',
      description:
        'Streamline communication by converting dictated notes, memos, and letters from dictation software, voice recorders, or mobile apps into clear, actionable text.',
    },
  ];

  const audio_features = [
    {
      title: 'Enhanced Accessibility',
      description:
        'Make your content accessible to a wider audience, including those with hearing impairments and non-native speakers, improving inclusivity and engagement.',
    },
    {
      title: 'Content Purposing',
      description:
        ' Repurpose transcribed content into various formats for content marketing strategies, extending the reach of your original content.',
    },
    {
      title: 'Professional Image',
      description:
        'Enhance your brand image and professionalism by delivering high-quality transcriptions to your audience.',
    },
    {
      title: 'Time Savings',
      description:
        ' Save time and resources by outsourcing your transcription needs to professionals with quick turnaround times.',
    },
  ];
  // const features = [
  //   {
  //     name: 'First Draft',
  //     features: [
  //       '-98% accuracy',
  //       'Average next day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '0.79$ per minute',
  //   },
  //   {
  //     name: 'Standard',
  //     features: [
  //       '99% accuracy guaranteed',
  //       '1-3 business day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '1.25$ per minute',
  //   },
  //   {
  //     name: 'Verbatin',
  //     features: [
  //       'Every utterance captured',
  //       '2-5  business day delivery',
  //       'Speaker IDs available',
  //       'Timestamps available',
  //     ],
  //     price: '2.00$ per minute',
  //   },
  // ];

  return (
    <div className='bg-zinc-800  relative'>
      <AppHeader />

      <div className='relative landing-page-alt h-auto  px-6 py-20 md:pt-0  pb-40 md:py-32 lg:py-36 md:px-20 lg:px-28'>
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
        <div className='flex flex-wrap  md:flex-nowrap items-center gap-x-10 '>
          <div className='max-w-2xl md:max-w-3xl'>
            <h1 className='text-4xl font-bold capitalize tracking-tight text-gray-800 sm:text-5xl'>
              Audio and Video Transcription
            </h1>

            <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
              At VerbalScripts, precision meets efficiency as we transform
              spoken content into clear, accessible text, empowering your
              projects with accuracy and ease.Explore our diverse transcription
              services below.
            </p>

            {/* <div className='mt-10'>
              <a
                href='/upload-files'
                className='inline-flex flex-nowrap  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Order Now</span>
                <FontAwesomeIcon className='ml-2 w-5' icon={faLongArrowRight} />
              </a>
            </div> */}

            <div className='h-[3rem]'></div>

            <div
              className='absolute -bottom-10 rounded-md shadow-xl py-7 px-5'
              style={{ background: '#E0E8F0' }}
            >
              <div className='px-4 pb-5 border-l secondary-border'>
                <div className='text-gray-500 font-semibold '>
                  Human Transcripted
                </div>
                <div className='text-gray-500 font-semibold mb-3'>
                  From <span className='footer-title'>$1</span> per minute 98% accuracy
                </div>
              </div>
              <div className='px-4'>
                <button className=' text-md font-semibold  px-5 py-1.5 bg-indigo-600 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-full text-gray-100'>
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className='hidden relative md:block md:min-w-[20rem]  lg:min-w-[30rem]'>
            <img
              src='/svg/svg-audio-video.svg'
              className='absolute object-cover -top-60'
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

      <div className='bg-gray-100 py-0'>
        <PopularPartner />
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-x-6'>
            <div className='md:min-w-[25rem] lg:min-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Audio & Video Transcription Services?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                We offer <br></br>{' '}
                <span className='relative z-10'>
                  Comprehensive.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                <br></br> transcription services <br></br> tailored to your
                needs.
              </p>
            </div>
            <div>
              <p className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600'>
                Looking for accuracy, efficiency, and a friendly team? Look no
                further. With VerbalScripts, you{"'"}re not just getting
                transcriptions; you{"'"}re getting peace of mind. Our
                professionals ensure every detail is captured, every time.
              </p>
              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Explore Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16 landing-page-alt '>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex gap-y-10 bg-white rounded-xl px-8 py-10 flex-wrap md:flex-nowrap items-start justify-between gap-x-6 mb-20'>
            <div className='md:min-w-[25rem] lg:min-w-[30rem] text-left'>
              <div className='flex flex-col gap-y-10'>
                <div>
                  <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                    Supported audio formats?
                  </h2>
                  <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                    Audio Formats <br></br>that We Offer for
                  </p>
                </div>
                <div>
                  <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                    Unupported Audio formats?
                  </h2>
                  <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                    We’ll Assist You
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='grid justify-evenly grid-cols-4 md:grid-cols-3   lg:gap-x-8 gap-y-5  lg:grid-cols-4 lg:gap-y-5  pb-12'>
                {audio_formats.map((audio_format) => (
                  <div key={audio_format.name} className=''>
                    <img
                      src={audio_format.icon}
                      className='w-[4rem]'
                      alt={audio_format.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex gap-y-10 bg-white  rounded-xl px-8 py-10  flex-wrap md:flex-nowrap items-start justify-between gap-x-6 mb-10'>
            <div className='md:min-w-[25rem] lg:min-w-[30rem] text-left'>
              <div className='flex flex-col gap-y-10'>
                <div>
                  <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                    Supported video formats?
                  </h2>
                  <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                    Video Formats <br></br>that We Offer for
                  </p>
                </div>
                <div>
                  <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                    Unupported video formats?
                  </h2>
                  <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                    We’ll Assist You
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='grid justify-evenly grid-cols-4 md:grid-cols-3   lg:gap-x-8 gap-y-5  lg:grid-cols-4 lg:gap-y-5  pb-12'>
                {video_formats.map((audio_format) => (
                  <div key={audio_format.name} className=''>
                    <img
                      src={audio_format.icon}
                      className='w-[4rem]'
                      alt={audio_format.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-3xl text-left md:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            What are Our Supported Contents?
          </h2>
          <p className='mt-2 text-4xl md:text-5xl font-bold  text-gray-900'>
            Lets Get Straight To your Content
          </p>
        </div>

        <div className='mx-auto max-w-7xl py-10 md:py-24 px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='grid justify-evenly grid-cols-2 md:grid-cols-2   lg:gap-x-8 gap-y-5  lg:grid-cols-2 lg:gap-y-5  pb-12'>
            {audio_video_theme.map((content) => (
              <div key={content.title}>
                <div>
                  <img
                    src='/svg/Webinar-pana.svg'
                    className='rounded-sm object-cover'
                    alt=''
                  />
                </div>
                <div className='px-8'>
                  <div className='mb-5 text-center text-2xl text-gray-900 capitalize font-semibold mt-5'>
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
      <div className='py-10 md:py-16 why-section-bg '>
        <div className='mx-auto max-w-7xl    px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap md:flex-nowrap items-center gap-x-6 rounded-md md:px-8 md:py-10 bg-white/30 ring-1 ring-white/10'>
            <div className='md:max-w-[25rem] lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why choose us?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                We take pride in offering comprehensive Audio & Video
                Transcription Services for You
              </p>
            </div>
            <div>
              <ul className='mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col gap-y-5'>
                <li>
                  Our experienced transcriptionists are skilled in accurately
                  transcribing diverse audio and video content.
                </li>
                <li>
                  We utilize streamlined processes to ensure efficiency and
                  quick turnaround times without compromising quality.
                </li>
                <li>
                  We offer customizable options to meet your specific
                  requirements, including formatting preferences and turnaround
                  times.
                </li>
                <li>
                  We prioritize confidentiality and security, ensuring that your
                  content is handled with the utmost care.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-24' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div>
            <h2 className='text-xl font-bold leading-7 capitalize text-indigo-600'>
              Audio & Video Transcription Services?
            </h2>
            <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
              Empowering Your Audio & Video, Every Step
            </p>
          </div>
          <div className='relative my-5'>
            <img
              src='/pics/78.png'
              className='rounded-xl object-cover w-full h-[15rem]'
              alt=''
            />
          </div>

          <div className='my-10'>
            <div className='grid max-w-none  grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20'>
              {audio_features.map((feature, index) => (
                <div key={index} className='shadow-md rounded-xl py-10 px-12'>
                  <div className='footer-title text-xl md:text-2xl font-semibold mb-3'>
                    {feature.title}
                  </div>

                  <div className='text-gray-600 text-md'>
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-24 steps-section-bg'>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div>
            <h2 className='text-xl font-bold leading-7 capitalize text-indigo-600'>
              How it Works?
            </h2>
            <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
              Simplifying Your Transcription Journey
            </p>
          </div>
          <div className='my-10'>
            <div className='grid max-w-none  grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:grid-cols-3 lg:gap-10'>
              <div className='relative shadow-md rounded-xl py-10 px-12 bg-white'>
                <div>
                  <div className='w-16 h-16 flex bg-indigo-400 rounded-md items-center justify-center'>
                    <SquaresPlusIcon className='text-gray-100 w-10 h-10' />
                  </div>
                </div>
                <div className='absolute z-10 -right-12 top-24 w-16 h-16 bg-white flex items-center justify-center  rounded-full shadow-xl'>
                  <ArrowLongRightIcon className='text-orange-500 w-7' />
                </div>
                <div className='mt-5 footer-title text-left text-xl md:text-2xl font-semibold mb-3'>
                  Files Upload
                </div>

                <div className='text-gray-600 text-left  text-md'>
                  Simply upload your files to our secure platform.
                </div>
              </div>
              <div className='relative shadow-md rounded-xl py-10 px-12 bg-white'>
                <div>
                  <div className='w-16 h-16 flex bg-indigo-400 rounded-md items-center justify-center'>
                    <ComputerDesktopIcon className='text-gray-100 w-10 h-10' />
                  </div>
                </div>
                <div className='absolute z-10 -right-12 top-24 w-16 h-16 bg-white flex items-center justify-center  rounded-full shadow-xl'>
                  <ArrowLongRightIcon className='text-orange-500 w-7' />
                </div>
                <div className='mt-5 footer-title text-left text-xl md:text-2xl font-semibold mb-3'>
                  Transcription
                </div>

                <div className='text-gray-600 text-left  text-md'>
                  Our experts transcribe your files with accuracy and attention
                  to detail.
                </div>
              </div>
              <div className='relative shadow-md rounded-xl py-10 px-12 bg-white'>
                <div>
                  <div className='w-16 h-16 flex bg-indigo-400 rounded-md items-center justify-center'>
                    <ShoppingBagIcon className='text-gray-100 w-10 h-10' />
                  </div>
                </div>

                <div className='mt-5 footer-title text-left text-xl md:text-2xl font-semibold mb-3'>
                  Delivery
                </div>

                <div className='text-gray-600 text-left  text-md'>
                  Your completed transcriptions are delivered promptly via email
                  or our platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}
