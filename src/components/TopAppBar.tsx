/* eslint-disable @typescript-eslint/ban-ts-comment */
import AxiosProxy from '@/utils/AxiosProxy';
import { GetOrStoreAuthToken } from '@/utils/GetOrStoreAuthToken';
import {
  ArrowUpTrayIcon,
  ComputerDesktopIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

export default function TopAppBar() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const verifyAuthenticationStatus = async () => {
    const auth_token = window.localStorage.getItem('rft-btt');
    if (auth_token == null) return null;
    try {
      const response = await AxiosProxy.post(
        '/auth/refresh',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + auth_token,
          },
        },
      );

      if (response.status == 201) {
        GetOrStoreAuthToken(response.data.access_token);
        window.localStorage.setItem('rft-btt', response.data.refresh_token);
        setIsAuth(true);
      }
    } catch (err) {
      // @ts-ignore
      if (err.code == 'ERR_BAD_REQUEST') {
        // unauthorized request
        // @ts-ignore
        console.log(err.code);
      }
      // @ts-ignore
      if (err.code == 'ERR_NETWORK') {
        // @ts-ignore
        console.log(err.code);
      } else {
        // @ts-ignore
        console.log(err.code);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // check auth status
    verifyAuthenticationStatus();
  }, []);
  return (
    <div className='mx-auto  max-w-7xl relative z-30'>
      {!loading && !isAuth ? (
        <p className='hidden relative z-50 md:flex  h-10 items-center  justify-end space-x-6  text-sm font-medium text-white px-6 md:px-16 lg:px-20'>
          <a
            href='/dashboard/pending'
            aria-label='Upload Now Button'
            className='-mx-3 flex items-center underline  underline-offset-4 gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ArrowUpTrayIcon className='h-5 w-5' aria-hidden='true' />
            Try Now
          </a>
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ComputerDesktopIcon className='h-5 w-5' aria-hidden='true' />
            Transcriber Login
          </a>
          |
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base transition leading-7 text-white hover:text-orange-400'
          >
            <UserIcon className='h-5 w-5' aria-hidden='true' />
            Client Login
          </a>
        </p>
      ) : isAuth && !loading ? (
        <p className='hidden relative z-50 md:flex  h-10 items-center  justify-end space-x-6  text-sm font-medium text-white px-6 md:px-16 lg:px-20'>
          <a
            href='/dashboard/pending'
            aria-label='Upload Now Button'
            className='-mx-3 flex items-center underline  underline-offset-4 gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ArrowUpTrayIcon className='h-5 w-5' aria-hidden='true' />
            Try Now
          </a>
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base  transition leading-7 text-white hover:text-orange-400'
          >
            <ComputerDesktopIcon className='h-5 w-5' aria-hidden='true' />
            Transcriber Login
          </a>
          |
          <a
            href='/auth/login'
            className='-mx-3 flex items-center gap-x-5 rounded-lg px-3 py-2.5 text-base transition leading-7 text-white hover:text-orange-400'
          >
            <UserIcon className='h-5 w-5' aria-hidden='true' />
            Client Login
          </a>
        </p>
      ) : (
        <div className='hidden md:flex animate-pulse  h-10 items-center  justify-end  px-6 md:px-16 lg:px-20'>
          <div className='flex items-start space-x-4'>
            <div className='flex flex-col space-y-2 py-1 w-[10rem] '>
              <div className='h-2 bg-zinc-400 rounded'></div>
              <div className='h-2 bg-zinc-400 rounded'></div>
            </div>
            <div className='flex space-y-6 py-1'>
              <div className='h-7 w-7 bg-zinc-400 rounded-full'></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
