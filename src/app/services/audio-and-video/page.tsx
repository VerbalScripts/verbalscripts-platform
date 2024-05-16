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
  const audio_formats = [
    {
      name: 'amr',
      icon: '/audio_and_video/audio_formats/amr.svg',
    },
    {
      name: 'asf',
      icon: '/audio_and_video/audio_formats/asf.svg',
    },
    {
      name: 'aif',
      icon: '/audio_and_video/audio_formats/aif.svg',
    },
    {
      name: 'flac',
      icon: '/audio_and_video/audio_formats/flac.svg',
    },
    {
      name: 'm4a',
      icon: '/audio_and_video/audio_formats/m4a.svg',
    },
    {
      name: 'mp3',
      icon: '/audio_and_video/audio_formats/mp3.svg',
    },
    {
      name: 'mpg',
      icon: '/audio_and_video/audio_formats/mpg.svg',
    },
    {
      name: 'wav',
      icon: '/audio_and_video/audio_formats/wav.svg',
    },
    {
      name: 'mpeg',
      icon: '/audio_and_video/audio_formats/mpeg.svg',
    },

    {
      name: 'webm',
      icon: '/audio_and_video/audio_formats/webm.svg',
    },
    {
      name: 'ogg',
      icon: '/audio_and_video/audio_formats/ogg.svg',
    },
    {
      name: 'webm',
      icon: '/audio_and_video/audio_formats/webm.svg',
    },
    {
      name: 'aac',
      icon: '/audio_and_video/audio_formats/aac.svg',
    },
    {
      name: 'aac',
      icon: '/audio_and_video/audio_formats/aac.svg',
    },
    {
      name: 'wma',
      icon: '/audio_and_video/audio_formats/wma.svg',
    },
    {
      name: 'pls',
      icon: '/audio_and_video/audio_formats/pls.svg',
    },
    {
      name: 'wmv',
      icon: '/audio_and_video/audio_formats/wmv.svg',
    },
    {
      name: 'rtf',
      icon: '/audio_and_video/audio_formats/rtf.svg',
    },
    {
      name: 'meu',
      icon: '/audio_and_video/audio_formats/meu.svg',
    },
    {
      name: 'dss',
      icon: '/audio_and_video/audio_formats/dss.svg',
    },
  ];

  const video_formats = [
    {
      name: 'mp4',
      icon: '/audio_and_video/video_formats/mp4.svg',
    },
    {
      name: 'asf',
      icon: '/audio_and_video/video_formats/asf.svg',
    },
    {
      name: 'mov',
      icon: '/audio_and_video/video_formats/mov.svg',
    },
    {
      name: 'mkv',
      icon: '/audio_and_video/video_formats/mkv.svg',
    },
    {
      name: 'wav',
      icon: '/audio_and_video/video_formats/wav.svg',
    },

    {
      name: 'webm',
      icon: '/audio_and_video/video_formats/webm.svg',
    },
    {
      name: 'avi',
      icon: '/audio_and_video/video_formats/avi.svg',
    },
    {
      name: 'mpeg',
      icon: '/audio_and_video/video_formats/mpeg.svg',
    },
    {
      name: 'avi',
      icon: '/audio_and_video/video_formats/avi.svg',
    },
    {
      name: 'flv',
      icon: '/audio_and_video/video_formats/flv.svg',
    },
    {
      name: 'dv',
      icon: '/audio_and_video/video_formats/dv.svg',
    },
    {
      name: 'wmv',
      icon: '/audio_and_video/video_formats/wmv.svg',
    },
    {
      name: 'ts',
      icon: '/audio_and_video/video_formats/ts.svg',
    },
    {
      name: '3gp',
      icon: '/audio_and_video/video_formats/3gp.svg',
    },
  ];

  const audio_video_theme = [
    {
      imgUrl: '/audio_and_video/meetings.svg',
      title: 'Meeting',
      description:
        'From lively Zoom, Microsoft Teams or Google Meets brainstorming sessions to productive conference calls, we capture every detail for seamless collaboration.',
    },
    {
      imgUrl: '/audio_and_video/Podcasts.svg',
      title: 'Podcasts',
      description:
        'Turn your captivating podcast episodes from Spotify, Apple Podcasts, or Google Podcasts into searchable text, expanding your audience reach and boosting SEO.',
    },
    {
      imgUrl: '/audio_and_video/seminars.svg',
      title: 'Seminars & Webinars',
      description:
        'Preserve the knowledge shared in dynamic webinars and seminars conducted on platforms like GoToWebinar or Zoom Webinar, making insights accessible long after the event ends.',
    },
    {
      imgUrl: '/audio_and_video/videovoicecall.svg',
      title: 'Video & Voice Calls',
      description:
        'Capture important conversations from any platform, whether it"s a client meeting on Skype or a brainstorming session on Microsoft Teams, for future reference.',
    },
    {
      imgUrl: '/audio_and_video/sermons.svg',
      title: 'Sermons',
      description:
        'Spread inspiration with written versions of your powerful sermons from church recordings, to online streaming platforms, reaching a broader audience and fostering deeper reflection.',
    },
    {
      imgUrl: '/audio_and_video/testimonials.svg',
      title: 'Testimonials',
      description:
        'Showcase the satisfaction of your clients by transforming heartfelt testimonials from video, audio, or written form into compelling written content.',
    },

    {
      imgUrl: '/audio_and_video/trainvideos.svg',
      title: 'Training Videos',
      description:
        'Enhance learning with transcriptions of your engaging training videos; corporate training sessions, or instructional videos, providing accessible resources for your team"s development.',
    },
    {
      imgUrl: '/audio_and_video/dictations.svg',
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
                Audio and Video Transcription
              </h1>

              <p className='block md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10 mt-6 text-lg  leading-7 text-gray-800'>
                At VerbalScripts, precision meets efficiency as we transform
                spoken content into clear, accessible text, empowering your
                projects with accuracy and ease.Explore our diverse
                transcription services below.
              </p>

              <div
                className='lg:hidden   py-5 px-5 max-w-[18rem]'
                
              >
                <div className='px-4 border-l-4 secondary-border'>
                  <div className='text-gray-700 font-semibold '>
                    
                  </div>
                  <div className='text-gray-700 font-semibold mb-3'>
                    From <span className='py-1.5 px-2 bg-gray-300 rounded-full'>Human Transcripted</span><br></br><span className='footer-title text-3xl font-bold'>$1</span><br></br> per minute 98%
                    accuracy
                  </div>
                </div>
              </div>

              <div className='lg:hidden mt-5'>
              <a
                href='/upload-files'
                className='inline-flex flex-nowrap  items-center space-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
              >
                <span className='flex'>Order Now</span>
                <FontAwesomeIcon className='ml-2 w-5' icon={faLongArrowRight} />
              </a>
            </div>

              <div className='lg:h-[3rem]'></div>

              <div
                className='hidden lg:block lg:absolute left-1/4 -bottom-10 rounded-xl shadow-xl py-5 px-5'
                style={{ background: '#E0E8F0' }}
              >
                <div className='px-4 pb-2 border-l-2 secondary-border'>
                  <div className='text-gray-700 font-semibold '>
                    
                  </div>
                  <div className='text-gray-700 font-semibold mb-3'>
                    From <span className='py-1.5 px-2 bg-gray-300 rounded-full'>Human Transcripted</span><br></br><span className='footer-title text-3xl font-bold'>$1</span><br></br> per minute 98%
                    accuracy
                  </div>
                </div>
                <div className='px-4'>
                  <button className=' text-md font-semibold  px-5 py-1.5 bg-indigo-600 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-full text-gray-100'>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 relative   lg:min-w-[30rem]'>
              <img
                src='/audio_and_video/landingIllustration.svg'
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

      <div className='py-10 md:py-16' style={{ background: '#FAFAFA' }}>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center space-x-6'>
            <div className='lg:min-w-[35rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Audio & Video Transcription Services?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                We offer{' '}
                <span className='relative z-10'>
                  Comprehensive.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                transcription services tailored to your needs.
              </p>

              <div className='px-6'>
                <ul className='lg:mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-800 list-disc flex flex-col space-y-2'>
                  <li>
                    Accurate transcription of various audio and video formats.
                  </li>
                  <li>
                    Customizable transcription options, including timestamps,
                    speaker identification, and more.
                  </li>
                  <li>Quick turnaround times to meet your deadlines.</li>
                  <li>
                    Strict confidentiality and security measures to protect your
                    sensitive content.
                  </li>
                </ul>
              </div>
              <div className='mt-10'>
                <a
                  href='/upload-files'
                  className='inline-flex  items-center gap-x-2 rounded-lg btn-vlg px-8 py-2.5 text-xl transition font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 btn-vlg'
                >
                  <span>Order Now</span>
                </a>
              </div>
            </div>
            <div className='mt-10 lg:mt-0 relative w-full'>
              <img
                src='/pics/598513718_huge.jpg'
                className='lg:absolute -top-24 -right-10 w-[90%] -ml-7 lg:-ml-0 md:w-[28rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 md:py-16 landing-page-alt '>
        <div className='mx-auto max-w-7xl px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex gap-y-10 bg-white rounded-xl px-8 py-10 flex-wrap lg:flex-nowrap items-start justify-between gap-x-6 mb-20'>
            <div className='md:min-w-[25rem] lg:max-w-[30rem] text-left'>
              <div className='flex flex-col gap-y-10'>
                <div>
                  <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                    Supported audio formats?
                  </h2>
                  <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                    Audio Formats that We Offer for
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
              <div className='grid justify-evenly grid-cols-6 md:grid-cols-10   lg:gap-x-8 gap-y-5  lg:grid-cols-5 lg:gap-y-5  pb-12'>
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

          <div className='flex gap-y-10 bg-white  rounded-xl px-8 py-10  flex-wrap lg:flex-nowrap items-start justify-between gap-x-6 mb-10'>
            <div className='md:min-w-[25rem] lg:min-w-[30rem] text-left'>
              <div className='flex flex-col gap-y-10'>
                <div>
                  <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                    Supported video formats?
                  </h2>
                  <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                    Video Formats that We Offer for
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
              <div className='grid justify-evenly grid-cols-6 md:grid-cols-10   lg:gap-x-8 gap-y-5  lg:grid-cols-5 lg:gap-y-5  pb-12'>
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
          <div className='grid justify-evenly grid-cols-1 md:grid-cols-2   lg:gap-x-8 gap-y-5  lg:grid-cols-2 lg:gap-y-5  pb-12'>
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
      <div className='py-10 md:py-16 steps-section-bg '>
        <div className='mx-auto max-w-7xl    px-6 md:px-16 lg:px-16 xl:px-28'>
          <div className='flex flex-wrap lg:flex-nowrap items-center gap-x-6 rounded-md md:px-8 md:py-10 bg-white/30 ring-1 ring-white/10'>
            <div className='lg:max-w-[30rem] text-left'>
              <h2 className='text-xl font-bold leading-7 capitalize secondary-text'>
                Why choose us?
              </h2>
              <p className='mt-2 text-4xl md:text-5xl  font-bold text-left text-gray-900 section-title'>
                We take pride in offering{' '}
                <span className='relative z-10'>
                  Comprehensive.{' '}
                  <span className='z-10 absolute -bottom-5 right-0'>
                    <img src='/svg/lines.svg' className='w-44' alt='' />
                  </span>
                </span>{' '}
                Audio & Video Transcription Services for You
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
              src='/audio_and_video/benefits.svg'
              className=' object-cover w-full -translate-x-16 -mt-16'
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

      <HowItWorks />


      <AppFooter />
    </div>
  );
}
