'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function SolutionsList() {
  const solutions: Array<NavLabel> = [
    {
      name: 'Court reporting & Legal',
      description:
        'We convert audio/video content into transcripts quickly and securing to save law firms, investigators, police force, or research firms time and money.',
      href: '/solutions/legal',
      imgUrl: '/icons/legal-document.png',
    },
    {
      name: 'Corporate & general business',
      description:
        'Customized for your large volume needs, including a variety of enterprise security requirements.',
      href: '/solutions/enterprise',
      imgUrl: '/icons/paper.png',
    },
    {
      name: 'Media production',
      description:
        'The very best in human intelligence requires top quality training data for speech NLP and computer vision models.',
      href: '/solutions/ai',
      imgUrl: '/icons/video-editor.png',
    },
    {
      name: 'Digital & online learning',
      description:
        'Fast, easy lecture and dissertation transcripts for students or faculty, compatible with NVivo and other research platforms.',
      href: '/solutions/education',
      imgUrl: '/icons/online-learning.png',
    },

    {
      name: 'Government',
      description:
        'Making live events, meetings, ad campaigns and press briefings more accessible and actionable.',
      href: '/solutions/government',
      imgUrl: '/icons/policy.png',
    },
  ];

  return (
    <div className='mx-auto mt-14 max-w-7xl md:mt-16 xl:mt-10'>
      <dl className='mx-auto grid max-w-none px-6 md:px-16 lg:px-20 xl:px-28 grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-7xl xl:max-w-7xl lg:grid-cols-3 lg:gap-y-16'>
        {[...solutions.slice(0, 6)].map((feature) => (
          <a
            href={'/solutions/' + feature.href}
            key={feature.name}
            className='relative transition flex flex-col items-center justify-start ring-inset  hover:ring-3 hover:ring-gray-400 rounded-3xl py-8 px-4'
            style={{ backgroundColor: '#f9f8f2' }}
          >
            <dt className=''>
              <div className='flex  items-center justify-center '>
                {feature.icon != undefined ? (
                  <feature.icon
                    className='h-6 w-6 text-gray-200'
                    aria-hidden='true'
                  />
                ) : feature.imgUrl != undefined ? (
                  <Image
                    className='mb-5'
                    alt={feature.name}
                    src={feature.imgUrl}
                    height={110}
                    width={110}
                  />
                ) : null}
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
