import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { EyeSlashIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import GoogleIcon from '../GoogleIcon';

export default function SignUpForm() {
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
        <div className='mb-10 md:mb-10 text-left text-4xl font-bold text-gray-700'>
          Join Us
        </div>
        <form
          className='space-y-6'
          onSubmit={handleSubmit}
          action='#'
          method='POST'
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-x-2'>
            <div className=''>
              <label
                htmlFor='first'
                className='block text-md font-medium leading-6 text-gray-600'
              >
                First Name
              </label>
              <div className='mt-2'>
                <input
                  id='first'
                  name='first'
                  type='text'
                  autoComplete='first'
                  required
                  className='block w-full rounded-md border-3 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className=''>
              <label
                htmlFor='first'
                className='block text-md font-medium leading-6 text-gray-600'
              >
                Last Name
              </label>
              <div className='mt-1.5'>
                <input
                  id='last'
                  name='last'
                  type='text'
                  autoComplete='last'
                  required
                  className='block w-full rounded-md border-3 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
          <div className='my-1.5'>
            <label
              htmlFor='company_name'
              className='block text-md font-medium leading-6 text-gray-600'
            >
              Company Name (optional)
            </label>
            <div className='mt-2'>
              <input
                id='company_name'
                name='company_name'
                type='text'
                autoComplete='email'
                className='block w-full rounded-md border-3 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='my-1.5'>
            <label
              htmlFor='email'
              className='block text-md font-medium leading-6 text-gray-600'
            >
              Email address
            </label>
            <div className='mt-1.5'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-3 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='my-1.5'>
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
                className='block w-full rounded-md border-3  py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
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
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full  justify-center rounded-full bg-indigo-600 px-3 py-2.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className='mx-auto max-w-md border-b border-gray-300 my-5'></div>

      <div className='mx-auto max-w-md '>
        <div className='mb-3 cursor-pointer flex w-full items-center ring-1 ring-gray-500  justify-center rounded-full  py-2.5 md:py-2.5 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          <GoogleIcon />{' '}
          <span className='ml-3  text-gray-600'>Continue with Google</span>
        </div>
      </div>
      <div className='mb-5'>
        <p className='mt-10 text-center text-md text-gray-500'>
          Already a member?{' '}
          <Link
            href='/auth/login'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
