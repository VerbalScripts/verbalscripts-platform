'use client';

import { useEffect } from 'react';

import SignInForm from '@/components/SignInForm';
import Image from 'next/image';

export default function Login() {
  useEffect(() => {});

  return (
    <div className='min-h-full bg-white flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <SignInForm />

        <p className='mt-10 text-center text-sm text-gray-500'>
          Already a Member?{' '}
          <a
            href='/auth/login'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
