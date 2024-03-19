'use client';

import { useEffect } from 'react';
import SignInForm from '@/components/SignInForm';
import { LogoApple, LogoGoogle } from 'react-ionicons';
import Link from 'next/link';

export default function Login() {
  useEffect(() => {});

  return (
    <div className='bg-white  grid lg:grid-cols-2'>
      <div className='hidden h-screen lg:flex md:flex-col md:justify-between backdrop-blur-lg login-img'>
        <div className='flex justify-start text-4xl text-white font-bold py-10 leading-10 px-10'>
          <a href='/'>
            <span>Verbal</span>
            <span className='text-orange-500 italic'>Scripts</span>
          </a>
        </div>

        <div className='py-24 px-20'>
          <div className='max-w-md'>
            <p className='text-4xl text-semibold lg:text-4xl text-gray-100 mb-4 leading-[3.5rem]'>
              Welcome to VerbalScripts WorkHub
            </p>

            <p className='text-gray-100 text-xl lg:text-2xl '>
              Work flexibly from anywhere on a variety of work including
              transcription, translation, annotation and subtitling
            </p>
          </div>
        </div>
      </div>

      <div className='md:block md:max-h-screen bg-white md:overflow-y-scroll px-5'>
        <div className='flex lg:hidden justify-start text-3xl  md:text-4xl text-gray-700 font-bold py-10 leading-10'>
          <a href='/'>
            <span>Verbal</span>
            <span className='text-orange-500 italic'>Scripts</span>
          </a>
        </div>
        <div className='mx-auto max-w-md pb-14 pt-10 md:py-20  lg:py-24'>
          <div className='mb-10 md:mb-16 text-center  md:text-left text-3xl md:text-4xl font-bold text-gray-700'>
            Sign In
          </div>

          <div className='mb-3 cursor-pointer flex w-full items-center ring-1 ring-gray-500  justify-center rounded-full  px-3 py-3 md:py-4 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            <LogoGoogle />{' '}
            <span className='ml-3  text-gray-600'>Continue with Google</span>
          </div>

          <a
            href='#'
            className='mb-3 flex cursor-pointer w-full items-center ring-1 ring-gray-500  transition justify-center rounded-full  px-3 py-3 md:py-4 text-lg font-semibold leading-6 text-white shadow- hover:ring-2 hover:ring-gray-700  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gray-800'
          >
            <LogoApple />{' '}
            <span className='ml-3  text-gray-600'>Continue with Apple</span>
          </a>

          <div className='border-b border-gray-300 my-10'></div>

          <SignInForm />

          <p className='mt-10 text-center text-md text-gray-500'>
            Not a member?{' '}
            <Link
              href='/auth/register'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Register Now
            </Link>
          </p>
        </div>
        <div className='mx-auto text-sm text-gray-600 max-w-md mb-3 text-center'>
          This site is protected by reCAPTCHA and the VerbalScripts{' '}
          <span className='underline'> Privacy Policy</span> and{'  '}
          <span className='underline'> Terms of Service</span> apply.
        </div>
      </div>
    </div>
  );
}
