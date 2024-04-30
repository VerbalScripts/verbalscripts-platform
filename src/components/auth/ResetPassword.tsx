'use client';

import React, { FormEvent, useState } from 'react';
import { EyeSlashIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';

export default function ResetPassword() {
  // const validation = {};

  // const [loading, setLoading] = useState(false);
  const [is_visible, toggleVisible] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);

    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };

  return (
    <form
      className='space-y-6'
      onSubmit={handleSubmit}
      action='#'
      method='POST'
    >
      <div className='my-2'>
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
            className='block w-full rounded-md border-0 py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
          />
        </div>
      </div>
      <div className='my-2'>
        <label
          htmlFor='email'
          className='block text-md font-medium leading-6 text-gray-600'
        >
          Password
        </label>
        <div className='mt-2 relative'>
          <input
            id='password'
            name='password'
            type={is_visible ? 'password' : 'text'}
            autoComplete='password'
            required
            className='block w-full rounded-md border-0  py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
          />
          <span
            className='absolute top-4 right-4 cursor-pointer'
            onClick={() => toggleVisible(!is_visible)}
          >
            {is_visible ? (
              <EyeIcon height={'30px'} />
            ) : (
              <EyeSlashIcon height={'30px'} />
            )}
          </span>
        </div>

        <div className='flex justify-end py-2'>
          <a
            href='#'
            className='font-semibold text-md underline underline-offset-2 text-indigo-600 hover:text-indigo-500'
          >
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='flex w-full  justify-center rounded-full bg-indigo-600 px-3 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
