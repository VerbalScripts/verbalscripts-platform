'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  BellAlertIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { PlusIcon } from '@heroicons/react/24/outline';
import DashDialogMenu from './DashDialogMenu';
import { classNames } from '@/utils/classNames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NotificationsPreview from './NotificationsPreview';

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);

  const [preview, setPreview] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const SearchForFile = (event: KeyboardEventHandler<HTMLInputElement>) => {};

  return (
    <>
      <header
        className={classNames(
          'bg-white relative transition w-full z-30 border-b border-gray-200',
        )}
      >
        <nav
          className='mx-auto flex  items-center justify-between px-6 py-2 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='relative hidden md:block'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search icon</span>
            </div>
            <input
              type='text'
              id='search-navbar'
              className='block w-full p-2 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search Files'
            />
          </div>

          <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5'>
            <a
              href='/dashboard/upload'
              className='flex items-center text-md font-semibold ring-1 ring-inset text-white px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 bg-indigo-500 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              <PlusIcon className='h-6 w-6' aria-hidden='true' />

              <span>Create New Order</span>
            </a>

            <button
              // href='/dashboard/notifications'
              onClick={() => setPreview(true)}
              data-dropdown-toggle='notification-dropdown'
              className='flex items-center text-md font-semibold  text-gray-700 px-3.5 py-1.5 focus:ring-4 focus:ring-indigo-300 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              <BellAlertIcon className='h-6 w-6' aria-hidden='true' />
            </button>

            <DashDialogMenu />
          </div>
        </nav>

        <NotificationsPreview open={preview} setOpen={setPreview} />
        <Dialog as='div' className='lg:hidden' onClose={setOpen} open={open}>
          <div className='fixed inset-0 z-10 bg-white-300' />

          <Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-end'>
              <button
                type='button'
                className='-m-1.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <a
                    href='/'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Home
                  </a>
                  <a
                    href='/freelancers'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Freelancers
                  </a>
                  <div className='border-b py-2 border-gray-200'></div>
                  <a
                    href='/freelancers'
                    className='-mx-3 block underline underline-offset-2 rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-orange-500 hover:bg-gray-50'
                  >
                    Request a Quote
                  </a>
                  <a
                    href='/freelancers'
                    className='-mx-3 underline underline-offset-2 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-orange-500 hover:bg-gray-50'
                  >
                    Order Now
                  </a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1  gap-y-3 md:gap-x-10 divide-x divide-gray-900/5 bg-gray-50'>
                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-md ring-1 ring-inset ring-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                    >
                      Freelancer Sign In
                    </a>
                  </div>

                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-md  bg-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                    >
                      Customer Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='md:hidden bg-white fixed bottom-0 left-0 right-0 flex  justify-center px-3 py-8 z-30 shadow-2xl gap-x-5'>
        <div className='max-w-7xl'>
          <a
            href='#'
            className='rounded-md ring-1 ring-inset ring-indigo-500  px-6 py-4 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
          >
            Get a Qoute
          </a>
        </div>

        <div>
          <a
            href='#'
            className='rounded-md  bg-indigo-500  px-6 py-4 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
}
