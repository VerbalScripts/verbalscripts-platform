'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import {
  PlusIcon,
} from '@heroicons/react/24/outline';
import DashDialogMenu from './DashDialogMenu';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={classNames(
          'bg-white',
          'relative',
          'transition',
          'w-full',
          'z-30',
          'border-b',
          'border-gray-200',
        )}
      >
        <nav
          className='mx-auto flex  items-center justify-between px-6 py-4 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5 text-3xl font-bold'>
              <span>Verbal</span>
              <span className='text-orange-500 italic'>Scripts</span>
            </a>
          </div>
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

          <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5'>
            <a
              href='#'
              className='flex items-center text-md font-semibold ring-1 ring-inset text-white px-3.5 py-1.5 bg-indigo-500 hover:bg-white hover:ring-indigo-400 hover:text-indigo-500 rounded-full'
            >
              <PlusIcon className='h-6 w-6' aria-hidden='true' />

              <span>Add File</span>
            </a>
            <DashDialogMenu />
          </div>
        </nav>

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
