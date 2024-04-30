'use client';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { FormEvent } from 'react';

export default function ForgotPassword() {
  // const validation = {};

  // const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

  return (
    <>
      <div className='mx-auto max-w-md'>
        <Link
          href='/auth/login'
          className='mb-8 flex items-center font-semibold text-gray-500'
        >
          <ArrowLeftCircleIcon className='h-10 w-10' />
          <span className='ml-5 text-xl'>Back</span>
        </Link>

        <div className='mb-5 md:mb-4 text-left text-4xl font-bold text-gray-700'>
          Need to Reset Your Password ?
        </div>
        <div className='mb-10 md:mb-8 text-left text-lg  text-gray-500'>
          We will send password reset instructions if your account exists.
        </div>
      </div>
      <form
        className='space-y-6 mx-auto max-w-md'
        onSubmit={handleSubmit}
        action='#'
        method='POST'
      >
        <div className='my-4'>
          <label
            htmlFor='email'
            className='block text-md font-medium leading-6 text-gray-600'
          >
            Email address
          </label>
          <div className='mt-2'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='block w-full rounded-md border-0 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='flex w-full  justify-center rounded-full bg-indigo-600 px-3 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Proceed
          </button>
        </div>
      </form>
    </>
  );
}
