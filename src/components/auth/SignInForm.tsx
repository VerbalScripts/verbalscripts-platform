/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { EyeSlashIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import { FieldValues, useForm } from 'react-hook-form';

import GoogleIcon from '../GoogleIcon';
import AxiosProxy from '@/utils/AxiosProxy';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import AuthGuard from './AuthGuard';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { EMAIL_REGEX, PASSWORD_VALID_REGEX } from '@/utils/validationRule';
import ComponentSpinner from '../ComponentSpinner';

interface GoogleUser {
  access_token: string;
}

interface LoginUser {
  email: string;
  password?: string;
  googleId?: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [is_visible, toggleVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [is_error, showErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error_message, setShowErrors] = useState('');

  // google auth
  const [user, setUser] = useState<GoogleUser | null>(null);

  const UseGoogelLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error),
  });

  const loginWithGoogle = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user?.access_token}`,
            Accept: 'application/json',
          },
        },
      );

      const auth_user = {
        email: response.data.email,
        googleId: response.data.id,

        password: '',
      };

      await apiHttpServerRegister(auth_user, 'google');
      // @ts-ignore
    } catch (err: any) {
      // @ts-ignore
      throw new Error(err);
    }
  };

  useEffect(() => {
    if (user) {
      loginWithGoogle();
    }
  }, [user]);

  const apiHttpServerRegister = async (data: LoginUser, client = 'local') => {
    try {
      setLoading(true);

      const response = await AxiosProxy.post(
        `/auth/login?client=${client}`,
        data,
      );
      if (response.status == 200) {
        // store user in store
        // add token to localstorage
        storeTokens(response.data.access_token, response.data.refresh_token);
        toDashboard();
      }
    } catch (err) {
      // @ts-ignore
      if (err.response.statusText == 'Unauthorized') {
        // @ts-ignore
        setShowErrors(err.response.data.message);
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (
    data: FieldValues,
    event?: React.BaseSyntheticEvent,
  ) => {
    event?.preventDefault();
    if (errors.email || errors.password) {
      // @ts-ignore
      setShowErrors(errors.email | errors.password);
    } else {
      await apiHttpServerRegister(data as LoginUser);
    }
  };

  const storeTokens = (accessToken: string, refreshToken: string) => {
    GetOrStoreAuthToken(accessToken);
    window.localStorage.setItem('rft-btt', refreshToken);
  };

  const toDashboard = () => {
    window.location.href = '/dashboard/pending';
  };

  // on input focus
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFocusIn = () => {
    showErrors(false);
  };
  // console.log(data);

  // setLoading(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 2000);

  return (
    <>
      <div className='mx-auto max-w-md'>
        <div className='mb-8 md:mb-7 text-left text-4xl font-bold text-gray-700'>
          Sign In
        </div>
        {error_message.length > 0 ? (
          <div className='py-2 px-3 mb-5 text-red-400 font-semibold ring-1 ring-red-300 bg-red-100 rounded-md'>
            {error_message}
          </div>
        ) : null}
      </div>
      <AuthGuard />

      <form
        className='mx-auto max-w-md'
        onSubmit={handleSubmit(onSubmit)}
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
              onFocus={() => onFocusIn()}
              type='email'
              autoComplete='email'
              {...register('email', {
                required: true,
                pattern: EMAIL_REGEX,
              })}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
        </div>
        <div className='my-4'>
          <label
            htmlFor='password'
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
                pattern: PASSWORD_VALID_REGEX,
              })}
              className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <span
              className='absolute top-2.5 right-4 cursor-pointer'
              onClick={() => toggleVisible(!is_visible)}
            >
              {is_visible ? (
                <EyeIcon height={'25px'} className='text-gray-400' />
              ) : (
                <EyeSlashIcon height={'25px'} className='text-gray-400' />
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
            className='flex gap-x-5 w-full items-center disabled:bg-indigo-400  justify-center rounded-full bg-indigo-600 px-3 py-2.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            {loading ? <ComponentSpinner /> : null}
            Sign In
          </button>
        </div>
      </form>

      <div className='mx-auto max-w-md border-b border-gray-300 my-5'></div>
      <div className='mx-auto max-w-md'>
        <button
          disabled={loading}
          onClick={() => UseGoogelLogin()}
          className='mb-3 cursor-pointer flex w-full items-center ring-1 ring-gray-300  justify-center rounded-full  py-2.5 md:py-2.5 text-lg font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          <GoogleIcon />{' '}
          <span className='ml-3  text-gray-600'>Continue with Google</span>
        </button>
      </div>

      <div className='mb-5'>
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
