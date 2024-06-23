'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { classNames } from '@/utils/classNames';

export default function SolutionsList() {
  // const solutions: Array<NavLabel> = [
  //   {
  //     name: 'Court reporting & Legal',
  //     description:
  //       'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
  //     href: '/solutions/legal',
  //     imgUrl: '/icons/legal-document.png',
  //   },
  //   {
  //     name: 'Corporate & general business',
  //     description:
  //       'Customized for your large volume needs, including a variety of enterprise security requirements.',
  //     href: '/solutions/enterprise',
  //     imgUrl: '/icons/paper.png',
  //   },
  //   {
  //     name: 'Media production',
  //     description:
  //       'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
  //     href: '/solutions/ai',
  //     imgUrl: '/icons/video-editor.png',
  //   },
  //   {
  //     name: 'Digital & online learning',
  //     description:
  //       'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
  //     href: '/solutions/education',
  //     imgUrl: '/icons/online-learning.png',
  //   },

  //   {
  //     name: 'Government',
  //     description:
  //       'Making live events, meetings, ad campaigns and press briefings more accessible and actionable.',
  //     href: '/solutions/government',
  //     imgUrl: '/icons/policy.png',
  //   },
  // ];

  const servies: Array<NavLabel> = [
    {
      name: 'Legal Transcription',
      description: 'Trusted legal transcription services for all your needs.',
      href: '/services/legal',
      imgUrl: '/svg/Privacy-policy-pana.svg',
    },
    {
      name: 'General Transcription',
      description:
        'Comprehensive transcription solutions for diverse requirements.',
      href: '/services/general',
      imgUrl: '/svg/Prototyping-process-bro.svg',
    },
    {
      name: 'Audio & Video Transcription',
      description:
        'Efficient transcription for all your audio and video content.',
      href: '/services/audio-and-video',
      imgUrl: '/svg/Web-devices-amico.svg',
    },
    {
      name: 'Focus Groups & Interviews',
      description: 'Detailed transcription for focus groups and interviews.',
      href: '/services/focus-groups-and-interviews',
      imgUrl: '/svg/Telecommuting-rafiki.svg',
    },
    {
      name: 'Medical Transcription',
      description:
        'Accurate and reliable transcriptions that meets healthcare standards.',
      href: '/services/medical',
      imgUrl: '/svg/Researchers-cuate.svg',
    },

    {
      name: 'Academic & Conference Transcription',
      description:
        'Precise transcription for educational and professional events.',
      href: '/services/academic-and-conference',
      imgUrl: '/svg/Conference-pana.svg',
    },
  ];

  const getColor = (index: number) => {
    let color = '';
    if (index == 0) {
      color = 'secondary-border';
    } else if ((index - 1) % 4 < 2) {
      color = 'border-indigo-500';
    } else {
      color = 'secondary-border';
    }
    return color;
  };

  return (
    // <div className='mx-auto  max-w-7xl mt-16 md:mt-20 xl:mt-20'>
    <div className='mt-16 md:mt-20 xl:mt-20'>
      <dl className='mx-auto grid max-w-none px-6 md:px-16 lg:px-20 xl:px-28 grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-2 lg:gap-20'>
        {[...servies].map((feature, index) => (
          <a
            href={feature.href}
            key={feature.name}
            className={classNames(
              'relative solution-panel  flex flex-col bg-white  transition-all justify-start border ',
              getColor(index),
            )}
          >
            <div className='relative'>
              <span className='svg-circles rounded-full top-5 left-10'></span>
              <span className='svg-circles rounded-full top-16 left-10'></span>
              <span
                className={classNames(
                  'svg-circles rounded-full top-16 right-10',
                )}
              ></span>
              <div
                className={classNames(
                  'absolute top-32',

                  `${index % 2 == 0 ? '-' : ''}rotate-45`,
                  `${index % 2 != 0 ? 'right' : 'left'}-10`,
                )}
              >
                <span className='line-svg-stroke -rotate-45 mr-5'></span>
                <span className='line-svg-stroke mx-5'></span>
                <span className='line-svg-stroke rotate-45 ml-10'></span>
              </div>
              <div className='flex  h-[16rem] overflow-hidden items-center justify-center '>
                <img
                  className='mb-5 h-full w-full object-contain'
                  alt={feature.name}
                  src={feature.imgUrl}
                />
              </div>
            </div>
            <div className='flex flex-col items-center py-8 px-4'>
              <span className='text-[1.35rem] text-2xl text-center font-bold leading-7 text-gray-900'>
                {feature.name}
              </span>
              <span className='mt-2 text-lg  text-center leading-7 text-gray-700 line-clamp-4'>
                {feature.description}
              </span>

              <span className='my-3'>
                <span className='flex items-center text-orange-500 font-semibold text-xl underline underline-offset-4'>
                  <span>Learn More</span>

                  <FontAwesomeIcon
                    className='ml-4 icon-vector w-6'
                    icon={faLongArrowRight}
                  />
                </span>
              </span>
            </div>
          </a>
        ))}
      </dl>
    </div>
  );
}
