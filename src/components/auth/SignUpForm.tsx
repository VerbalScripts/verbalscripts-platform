/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { EyeSlashIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import { FieldValues, useForm } from 'react-hook-form';
import GoogleIcon from '../GoogleIcon';
import AxiosProxy from '@/utils/AxiosProxy';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import ComponentSpinner from '../ComponentSpinner';

interface GoogleUser {
  access_token: string;
}
interface RegiterUser {
  firstName: string;
  lastName?: string;
  companyName?: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  // const validation = {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [is_visible, toggleVisible] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error_message, setShowErrors] = useState('');
  const [loading, setLoading] = useState(false);

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
        firstName: response.data.name.split(' ')[0],
        lastName:
          response.data.name.split(' ').length > 1
            ? response.data.name.split(' ')[1]
            : '',
        password: '',
        companyName: '',
      };

      await apiHttpServerRegister(auth_user, 'google');
    } catch (err) {
      // @ts-ignore
      throw new Error((err as unknown).message);
    }
  };

  useEffect(() => {
    if (user) {
      loginWithGoogle();
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //   googleLogout();
  //   setProfile(null);
  // };

  const apiHttpServerRegister = async (data: RegiterUser, client = 'local') => {
    try {
      setLoading(true);

      const response = await AxiosProxy.post(
        `/auth/register?client=${client}`,
        data,
      );
      if (response.status == 201) {
        // store user in store
        // add token to localstorage
        storeTokens(response.data.access_token, response.data.refresh_token);
        toDashboard();
      }
    } catch (err) {
      // @ts-ignore
      if (err.response.statusText == 'Conflict') {
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
      await apiHttpServerRegister(data as RegiterUser);
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
    setShowErrors('');
  };

  return (
    <>
      <div className='mx-auto max-w-md'>
        <div className='mb-10 md:mb-10 text-left text-3xl font-bold text-gray-700'>
          Create an Account
        </div>
        {error_message.length > 0 ? (
          <div className='py-2 px-3 mb-5 text-red-400 font-semibold ring-1 ring-red-300 bg-red-100 rounded-md'>
            {error_message}
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
                  className='block w-full rounded-md border-0 py-2.5 px-3 text-gray-600  ring-1 ring-inset ring-gray-300 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
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
                  className='block w-full rounded-md border-0 py-2.5 px-3 text-gray-600  ring-1 ring-inset ring-gray-300 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
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
                className='block w-full rounded-md border-0 py-2.5 px-3 text-gray-600  ring-1 ring-inset ring-gray-300 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
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
                className='block w-full rounded-md border-0 py-2.5 px-3 text-gray-600  ring-1 ring-inset ring-gray-300 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
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
                className='block w-full rounded-md border-0 py-2.5 px-3 text-gray-600  ring-1 ring-inset ring-gray-300 placeholder:text-grey-900  md:text-xl focus:ring-2 focus:ring-inset  focus:ring-dark sm:text-sm sm:leading-6'
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
              className='flex space-x-3 w-full items-center disabled:bg-indigo-400 focus:ring-4 focus:ring-indigo-300 justify-center rounded-full bg-indigo-600 px-3 py-2.5  leading-6 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {loading ? <ComponentSpinner /> : null}
              <span className='text-lg text-white'>Create Accout</span>
            </button>
          </div>
        </form>
      </div>

      <div className='mx-auto max-w-md border-b border-gray-300 my-5'></div>

      <div className='mx-auto max-w-md '>
        <button
          onClick={() => UseGoogelLogin()}
          disabled={loading}
          className='mb-3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center flex w-full justify-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 '
        >
          <GoogleIcon />{' '}
          <span className='ml-3 text-lg text-gray-600'>
            Continue with Google
          </span>
        </button>
      </div>
      <div className='mb-5'>
        <p className='mt-10 text-center text-md text-gray-500'>
          Already a member?{' '}
          <Link
            href='/auth/login'
            className='text-md leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
