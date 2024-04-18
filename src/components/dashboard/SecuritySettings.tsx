'use client';
import {
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import React, { FormEvent, useState } from 'react';

export default function SecuritySettings() {
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
    <form onSubmit={handleSubmit}>
      <div className='space-y-12'>
        <div className='border-b border-gray-900/10 pb-12'>
          <div className='py-5 mb-10'>
            <div className='h-16 w-16 md:w-24 md:h-24 bg-indigo-100 flex items-center justify-center rounded-full'>
              <LockClosedIcon className='h-12 w-12 md:w-16 md:h-16 text-indigo-500' />
            </div>
          </div>
          <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
            Change Password
          </h2>
          <p className='mt-2 mb-12 text-md leading-6 text-gray-600'>
            To change your password, please enter your old and new password.
            Your password must contain atleast one lowercase letter, one
            uppercase letter and one special character.
          </p>

          <div className='my-4'>
            <label
              htmlFor='email'
              className='block text-md font-medium leading-6 text-gray-600'
            >
              Current Password
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
                className='absolute top-3 right-4 cursor-pointer'
                onClick={() => toggleVisible(!is_visible)}
              >
                {is_visible ? (
                  <EyeIcon height={'30px'} className='text-gray-600' />
                ) : (
                  <EyeSlashIcon height={'30px'} className='text-gray-600' />
                )}
              </span>
            </div>
          </div>

          <div className='my-4'>
            <label
              htmlFor='email'
              className='block text-md font-medium leading-6 text-gray-600'
            >
              Enter Password
            </label>
            <div className='mt-2 relative'>
              <input
                id='password_confirm'
                name='password'
                type={is_visible ? 'password' : 'text'}
                autoComplete='password_confirm'
                required
                className='block w-full rounded-md border-3  py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
              />
              <span
                className='absolute top-3 right-4 cursor-pointer'
                onClick={() => toggleVisible(!is_visible)}
              >
                {is_visible ? (
                  <EyeIcon height={'30px'} className='text-gray-600' />
                ) : (
                  <EyeSlashIcon height={'30px'} className='text-gray-600' />
                )}
              </span>
            </div>
          </div>

          <div className='my-4'>
            <label
              htmlFor='email'
              className='block text-md font-medium leading-6 text-gray-600'
            >
              Confirm Password
            </label>
            <div className='mt-2 relative'>
              <input
                id='password_confirm'
                name='password'
                type={is_visible ? 'password' : 'text'}
                autoComplete='password_confirm'
                required
                className='block w-full rounded-md border-3  py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
              />
              <span
                className='absolute top-3 right-4 cursor-pointer'
                onClick={() => toggleVisible(!is_visible)}
              >
                {is_visible ? (
                  <EyeIcon height={'30px'} className='text-gray-600' />
                ) : (
                  <EyeSlashIcon height={'30px'} className='text-gray-600' />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-md px-4 py-2.5 font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
