import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { Eye, EyeOff, LogoGoogle } from 'react-ionicons';

export default function SIgnInForm() {
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
    <>
      <div className='mx-auto max-w-md'>
        <div className='mb-10 md:mb-16 text-left text-4xl font-bold text-gray-700'>
          Sign In
        </div>
      </div>

      <form
        className='mx-auto max-w-md'
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
              className='block w-full rounded-md border-3 py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='my-4'>
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
              className='block w-full rounded-md border-3  py-4 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
            />
            <span
              className='absolute top-4 right-4 cursor-pointer'
              onClick={() => toggleVisible(!is_visible)}
            >
              {is_visible ? (
                <EyeOff height={'30px'} />
              ) : (
                <Eye height={'30px'} />
              )}
            </span>
          </div>

          <div className='flex justify-end py-2'>
            <Link
              href='/auth/reset-password'
              className='font-semibold text-md underline underline-offset-2 text-indigo-600 hover:text-indigo-500'
            >
              Forgot password?
            </Link>
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

      <div className='mx-auto max-w-md border-b border-gray-300 my-10'></div>
      <div className='mx-auto max-w-md'>
        <div className='mb-3 cursor-pointer flex w-full items-center ring-1 ring-gray-500  justify-center rounded-full  py-3 md:py-4 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          <LogoGoogle />{' '}
          <span className='ml-3  text-gray-600'>Continue with Google</span>
        </div>
      </div>

      <div className='mb-16'>
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
    </>
  );
}
