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

  const solutions: Array<NavLabel> = [
    {
      name: 'General Transcription',
      description: 'Growth Strategies from from acquisition to conversion.',
      href: '/services/general',
      imgUrl: '/solutions_legal-min.webp',
    },
    {
      name: 'Legal Transcription',
      description: 'Brand ambassadors servin customers at all channels',
      href: '/services/legal',
      imgUrl: '/solutions_legal-min.webp',
    },
    {
      name: 'Video & Audio Transcription',
      description: 'Expert tech hanlde increasingly complex problems.',
      href: '/services/vide&audio',
      imgUrl: '/solutions_legal-min.webp',
    },
    {
      name: 'Focus Groups & Interviews',
      description:
        'Fast, easy lecture and dissertation transcripts for students.',
      href: '/services/interviews',
      imgUrl: '/solutions_legal-min.webp',
    },
    {
      name: 'Medical Transcription',
      description:
        'Fast, easy lecture and dissertation transcripts for students.',
      href: '/services/medical',
      imgUrl: '/solutions_legal-min.webp',
    },

    {
      name: 'Academic & Conference Transcription',
      description: 'Expert tech hanlde increasingly complex problems.',
      href: '/services/academic',
      imgUrl: '/solutions_legal-min.webp',
    },
  ];

  return (
    // <div className='mx-auto  max-w-7xl mt-16 md:mt-20 xl:mt-20'>
    <div className='mt-16 md:mt-20 xl:mt-20'>
      <dl className='mx-auto grid max-w-none px-6 md:px-16 lg:px-20 xl:px-28 grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-2 lg:gap-16'>
        {[...solutions.slice(0, 6)].map((feature, index) => (
          <a
            href={'/solutions/' + feature.href}
            key={feature.name}
            className={classNames(
              'relative transition flex flex-col bg-white items-center justify-start ring-1 ring-inset   hover:ring-1 hover:ring-gray-400 py-8 px-4',
              index + 1 % 2 == 0 ? 'ring-orange-400' : 'ring-indigo-500',
            )}
          >
            <dt className=''>
              <div className='flex w-full h-[13rem] items-center justify-center '>
                <img
                  className='mb-5 h-full w-full object-cover'
                  alt={feature.name}
                  src={feature.imgUrl}
                />
              </div>
            </dt>
            <span className='text-[1.35rem] text-center font-semibold leading-7 text-gray-800'>
              {feature.name}
            </span>
            <span className='mt-2 text-lg  text-center leading-7 text-gray-700 line-clamp-4'>
              {feature.description}
            </span>

            <span className='my-3'>
              <span className='flex items-center text-orange-400 font-semibold text-lg underline underline-offset-4'>
                <span>Learn More</span>

                <FontAwesomeIcon className='ml-4' icon={faLongArrowRight} />
              </span>
            </span>
          </a>
        ))}
      </dl>
    </div>
  );
}
