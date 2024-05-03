'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { BellAlertIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import DashDialogMenu from '../DashDialogMenu';
import { classNames } from '@/utils/classNames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NotificationsPreview from '../NotificationsPreview';

export default function DashboardHeader() {
  // const [open, setOpen] = useState(false);

  const [preview, setPreview] = useState<boolean>(false);
  const [isDark, setDark] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const SearchForFile = (event: KeyboardEventHandler<HTMLInputElement>) => {};

  const storeOrGetModeStatus = (dark: boolean) => {
    if (!dark) {
      window.localStorage.removeItem('is-dark');
    } else {
      window.localStorage.setItem('is-dark', '1');
    }
  };

  const toggleDarkMode = (dark: boolean) => {
    const toggleRef = document.querySelector('.dark-mode-toggle');
    if (toggleRef) {
      toggleRef.classList.toggle('dark');
      if (!dark) {
        storeOrGetModeStatus(false);
      } else {
        storeOrGetModeStatus(true);
      }
    }
  };

  useEffect(() => {
    toggleDarkMode(isDark);
  }, [isDark]);

  useEffect(() => {
    const isDark = window.localStorage.getItem('is-dark');

    if (isDark != null) {
      setDark(true);
    }
  }, []);

  return (
    <>
      <header
        className={classNames(
          'bg-white dark:bg-zinc-800 relative transition w-full z-30 border-b border-gray-200 dark:border-gray-700',
        )}
      >
        <nav
          className='mx-auto flex  items-center justify-between px-6 py-2 lg:px-8'
          aria-label='Global'
        >
          {/* <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div> */}

          <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-2'>
            {/* <a
              href='/dashboard/upload'
              className='flex items-center text-md font-semibold ring-1 ring-inset text-white px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 bg-indigo-500 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              <PlusIcon className='h-6 w-6' aria-hidden='true' />

              <span>Create New Order</span>
            </a> */}
            <button
              // href='/dashboard/notifications'
              onClick={() => setDark(!isDark)}
              data-dropdown-toggle='notification-dropdown'
              className='flex items-center text-md font-semibold  px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              {isDark ? (
                <SunIcon className='h-6 w-6 text-white' aria-hidden='true' />
              ) : (
                <MoonIcon
                  className='h-6 w-6 text-gray-700'
                  aria-hidden='true'
                />
              )}
            </button>

            <button
              // href='/dashboard/notifications'
              onClick={() => setPreview(true)}
              data-dropdown-toggle='notification-dropdown'
              className='flex items-center text-md font-semibold   px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              <BellAlertIcon
                className='h-6 w-6 text-gray-700 dark:text-white'
                aria-hidden='true'
              />
            </button>

            <DashDialogMenu />
          </div>

          <div className='flex w-full flex-1 justify-end gap-x-5 md:hidden'>
            {/* <AppTitle/> */}

            <button
              // href='/dashboard/notifications'
              onClick={() => setDark(!isDark)}
              data-dropdown-toggle='notification-dropdown'
              className='flex items-center text-md font-semibold  px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              {isDark ? (
                <SunIcon className='h-6 w-6 text-white' aria-hidden='true' />
              ) : (
                <MoonIcon
                  className='h-6 w-6 text-gray-700'
                  aria-hidden='true'
                />
              )}
            </button>

            <button
              // href='/dashboard/notifications'
              onClick={() => setPreview(true)}
              data-dropdown-toggle='notification-dropdown'
              className='flex items-center text-md font-semibold   px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              <BellAlertIcon
                className='h-6 w-6 text-gray-700 dark:text-white'
                aria-hidden='true'
              />
            </button>

            <DashDialogMenu />
          </div>
        </nav>

        <NotificationsPreview open={preview} setOpen={setPreview} />
      </header>
    </>
  );
}
