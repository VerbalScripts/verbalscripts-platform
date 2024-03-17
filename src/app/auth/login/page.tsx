'use client';

import { useEffect } from 'react';
import SignInForm from '@/components/SignInForm';

export default function Login() {
  useEffect(() => {});

  return (
    <div className='bg-white  grid lg:grid-cols-2'>
      <div className='h-screen flex flex-col'>asfas</div>

      <div className='flex flex-col justify-center  bg-gray-400'>
        <div className='mx-auto min-w-3xl'>
          <SignInForm />

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{' '}
            <a
              href='/auth/register'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
