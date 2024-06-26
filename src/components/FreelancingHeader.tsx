'use client';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames } from '@/utils/classNames';

export default function FreelancingHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener('scroll', () => {
        const heightOffset = window.pageYOffset;
        if (heightOffset > 200) {
          document
            .querySelector('header')
            ?.classList.add('is-sticky', 'shadow-lg');
        } else {
          document
            .querySelector('header')
            ?.classList.remove('is-sticky', 'shadow-lg');
        }
      });
    }
  });

  return (
    <>
      <div className='mx-auto  max-w-7xl relative z-30'></div>
      <header
        className={classNames(
          'bg-white',
          'relative',
          'transition',
          'w-full',
          'z-30',
        )}
      >
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between px-6 py-1 lg:px-8'
          aria-label='App Header'
        >
          <div className='flex lg:flex-1'>
          <a
              href='/'
              aria-label='Verbalscripts Logo'
              className='-m-1.5 p-1.5 text-2xl font-bold'
            > 
              <img
                className='h-[4.0rem] w-[100%] md:h-[4.0rem] lg:h-[4.8rem]'
                src='/icons/logo-png.png'
                alt='Logo Image'
              />
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

          <Popover.Group className='hidden lg:flex md:items-center lg:gap-x-8'>
            <a
              href='#'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Joining VerbalScripts
            </a>
            <a
              href='#'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              What’s Work Like?
            </a>

            <a
              href='#'
              className='text-md font-semibold leading-6 text-gray-900'
            >
              Freelancer FAQs
            </a>
            <a
              href='#'
              className=' text-lg font-semibold  px-4 py-2 bg-indigo-500 transition text-center  hover:-translate-y-1 hover:shadow-xl rounded-md text-white'
            >
              Freelancer Login
            </a>
          </Popover.Group>
        </nav>

        <Dialog as='div' className='lg:hidden' onClose={setOpen} open={open}>
          <div className='fixed inset-0 z-10 bg-white-300' />

          <Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <button
                type='button'
                className='-m-1.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>

              <a href='#' className='-m-2.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <a
                    href='/freelancers'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Freelancers Home
                  </a>
                  <a
                    href='/#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Joining VerbalScripts
                  </a>

                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    What’s Work Like?
                  </a>

                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Freelancer FAQs
                  </a>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-y-3 md:gap-x-10 divide-x divide-gray-900/5 bg-gray-50'>
                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-md  bg-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-white hover:bg-indigo-400 hover:text-gray-200'
                    >
                      Sign In
                    </a>
                  </div>

                  <div>
                    <a
                      href='#'
                      className='-mx-3 block text-center rounded-md ring-1 ring-inset ring-indigo-500  px-3 py-3.5 text-xl font-semibold leading-7 text-indigo-500 hover:ring-indigo-400 hover:text-indigo-400'
                    >
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
