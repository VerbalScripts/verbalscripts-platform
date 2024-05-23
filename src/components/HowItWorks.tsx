import { classNames } from '@/utils/classNames';
import {
  ArrowLongRightIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

interface HowItWorksProps {
  custom_class?: string;
}

export default function HowItWorks({
  custom_class = 'why-section-bg',
}: HowItWorksProps) {
  return (
    <div
      className={classNames('py-10 md:py-24', custom_class)}
    >
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
          <div className='grid max-w-none  grid-cols-1 gap-8  md:gap-5 md:grid-cols-3 lg:gap-10'>
            <div className='relative shadow-md rounded-xl py-10 px-10 md:py-5 md:px-5 lg:py-10 lg:px-12 bg-white'>
              <div className='flex justify-center md:flex-none'>
                <div className='w-16 h-16 flex bg-indigo-400 rounded-md items-center justify-center'>
                  <SquaresPlusIcon className='text-gray-100 w-10 h-10' />
                </div>
              </div>
              <div className='absolute z-10 left-[45%] md:left-auto -bottom-10 w-12 h-12 rotate-90 md:rotate-0 md:-right-7 lg:-right-12 md:top-24 md:w-10 md:h-10 lg:w-16 lg:h-16 bg-white flex items-center justify-center  rounded-full shadow-xl'>
                <ArrowLongRightIcon className='text-orange-500 w-7' />
              </div>
              <div className='mt-5 footer-title text-center md:text-left text-xl md:text-2xl font-semibold mb-3'>
                Files Upload
              </div>

              <div className='text-gray-600 text-center md:text-left  text-md'>
                Simply upload your files to our secure platform.
              </div>
            </div>
            <div className='relative shadow-md rounded-xl py-10 px-10 md:py-5 md:px-5 lg:py-10 lg:px-12 bg-white'>
              <div className='flex justify-center md:flex-none'>
                <div className='w-16 h-16 flex bg-indigo-400 rounded-md items-center justify-center'>
                  <ComputerDesktopIcon className='text-gray-100 w-10 h-10' />
                </div>
              </div>
              <div className='absolute z-10 left-[45%] md:left-auto -bottom-10 w-12 h-12 rotate-90 md:rotate-0 md:-right-7 lg:-right-12 md:top-24 md:w-10 md:h-10 lg:w-16 lg:h-16 bg-white flex items-center justify-center  rounded-full shadow-xl'>
                <ArrowLongRightIcon className='text-orange-500 w-7' />
              </div>
              <div className='mt-5 footer-title text-center md:text-left text-xl md:text-2xl font-semibold mb-3'>
                Transcription
              </div>

              <div className='text-gray-600 text-center md:text-left text-md'>
                Our experts transcribe your files with accuracy and attention to
                detail.
              </div>
            </div>
            <div className='relative shadow-md rounded-xl py-10 px-10 md:py-5 md:px-5 lg:py-10 lg:px-12 bg-white'>
              <div className='flex justify-center md:flex-none'>
                <div className='w-16 h-16 flex bg-indigo-400 rounded-md items-center justify-center'>
                  <ShoppingBagIcon className='text-gray-100 w-10 h-10' />
                </div>
              </div>

              <div className='mt-5 footer-title text-center md:text-left text-xl md:text-2xl font-semibold mb-3'>
                Delivery
              </div>

              <div className='text-gray-600 text-center md:text-left  text-md'>
                Your completed transcriptions are delivered promptly via email
                or our platform.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
