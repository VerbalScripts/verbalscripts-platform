'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { EyeSlashIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import { FieldValues, useForm } from 'react-hook-form';
import GoogleIcon from '../GoogleIcon';
import AxiosProxy from '@/utils/AxiosProxy';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';

export default function SignUpForm() {
  // const validation = {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [is_visible, toggleVisible] = useState(true);
  const [is_error, showErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const onSubmit = async (
    data: FieldValues,
    event?: React.BaseSyntheticEvent,
  ) => {
    event?.preventDefault();
    if (errors.email || errors.password) {
      showErrors(true);
    } else {
      try {
        setLoading(true);

        const response = await AxiosProxy.post('/auth/register', data);
        if (response.status == 201) {
          // store user in store
          // add token to localstorage
          storeTokens(response.data.access_token, response.data.refresh_token);
          toDashboard();
        } else {
          setApiError(true);
        }
      } catch (err) {
        setApiError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const storeTokens = (accessToken: string, refreshToken: string) => {
    GetOrStoreAuthToken(accessToken);
    window.localStorage.setItem('rft-btt', refreshToken);
  };

  const toDashboard = () => {
    window.location.href = '/dashboard/pending';
  };

  const onFocusIn = () => {
    showErrors(false);
    setApiError(false);
  };

  return (
    <>
      <div className='mx-auto max-w-md'>
        <div className='mb-10 md:mb-10 text-left text-4xl font-bold text-gray-700'>
          Join Us
        </div>
        {apiError ? (
          <div className='py-2 px-3 mb-5 text-red-500 font-semibold bg-red-100 rounded-md'>
            An Account with email already exists
          </div>
        ) : null}
        <form
          className='space-y-6'
          onSubmit={handleSubmit(onSubmit)}
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
                  id='firstName'
                  type='text'
                  onFocus={() => onFocusIn()}
                  autoComplete='firstName'
                  {...register('firstName', { required: true, maxLength: 80 })}
                  className='block w-full rounded-md border-3 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className=''>
              <label
                htmlFor='lastName'
                className='block text-md font-medium leading-6 text-gray-600'
              >
                Last Name
              </label>
              <div className='mt-1.5'>
                <input
                  id='lastName'
                  onFocus={() => onFocusIn()}
                  type='text'
                  autoComplete='lastName'
                  {...register('lastName', { required: true, maxLength: 80 })}
                  className='block w-full rounded-md border-3 py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
          <div className='my-1.5'>
            <label
              htmlFor='companyName'
              className='block text-md font-medium leading-6 text-gray-600'
            >
              Company Name (optional)
            </label>
            <div className='mt-2'>
              <input
                id='companyName'
                onFocus={() => onFocusIn()}
                type='text'
                autoComplete='email'
                {...register('companyName', { required: false, maxLength: 80 })}
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
                onFocus={() => onFocusIn()}
                type='email'
                autoComplete='email'
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
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
                type={is_visible ? 'password' : 'text'}
                onFocus={() => onFocusIn()}
                autoComplete='password'
                {...register('password', {
                  required: true,
                  maxLength: 16,
                  pattern:
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@!$%*#?&]{8,}/,
                })}
                className='block w-full rounded-md border-3  py-2.5 px-3 text-gray-600 shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
              />
              <span
                className='absolute top-2 right-4 cursor-pointer'
                onClick={() => toggleVisible(!is_visible)}
              >
                {is_visible ? (
                  <EyeIcon height={'25px'} className='text-gray-400' />
                ) : (
                  <EyeSlashIcon height={'25px'} className='text-gray-400' />
                )}
              </span>
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={loading}
              className='flex gap-x-5 w-full items-center disabled:bg-indigo-400  justify-center rounded-full bg-indigo-600 px-3 py-2.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {loading ? (
                <div
                  className='inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                  role='status'
                >
                  <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                    Loading...
                  </span>
                </div>
              ) : null}
              Create Accout
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
