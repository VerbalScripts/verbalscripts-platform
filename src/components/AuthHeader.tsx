'use client';

import Image from 'next/image';
import { classNames } from '@/utils/classNames';

export default function AuthHeader() {
  return (
    <>
      <div className='mx-auto  max-w-7xl relative z-30'></div>
      <header
        className={classNames(
          'bg-white',
          'relative',
          'transition',
          'w-full',
          'z-30',
        )}
      >
        <nav
          className='mx-auto flex justify-start max-w-7xl  px-6 py-4 lg:px-8'
          aria-label='Global'
        >
          <div className='hidden lg:flex flex-1 '>
            <a href='/' aria-label='Verbalscripts Logo' className='-m-1.5 '>
              <img
                className='w-[100%] md:h-[3.3rem] lg:h-[3.8rem]'
                src='/icons/logo-png.png'
                alt='Logo Image'
              />
            </a>
          </div>
          <div className='flex items-center lg:hidden'>
            <a
              href='/'
              className='-m-1.5 p-1.5 text-2xl font-bold'
              aria-label='Verbalscripts Mobile Logo'
            >
              <Image
                className='w-[3rem]'
                src='/icons/logo-v.png'
                alt='Mobile Logo Image'
                width={30}
                height={30}
              />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
